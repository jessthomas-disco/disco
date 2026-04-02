const ADMIN_DEFAULT_SUPABASE_URL = "";
const ADMIN_DEFAULT_SUPABASE_KEY = "";

const adminState = {
  client: null,
  user: null,
  profile: null,
  activeView: "shows",
  message: { type: "", text: "" },
  loading: false,
  shows: [],
  selectedShowId: "",
  showResults: {},
  livestreamLinks: [],
  predictionPolls: [],
  predictionOptions: {},
  reports: [],
  officialUpdates: [],
};

function adminGetSupabaseConfig() {
  const url =
    window.SUPABASE_URL ||
    window.__SUPABASE_URL__ ||
    localStorage.getItem("supabase_url") ||
    ADMIN_DEFAULT_SUPABASE_URL ||
    "";
  const anonKey =
    window.SUPABASE_ANON_KEY ||
    window.__SUPABASE_ANON_KEY__ ||
    localStorage.getItem("supabase_anon_key") ||
    ADMIN_DEFAULT_SUPABASE_KEY ||
    "";
  return { url, anonKey };
}

function logAdminError(context, error) {
  console.error(`[DISCOTIME Admin] ${context}`, error);
  return error?.message || "Unknown Supabase error.";
}

function setAdminMessage(type, text) {
  adminState.message = { type, text };
  renderAdminBanner();
}

function renderAdminBanner() {
  const banner = document.querySelector("#adminNotice");
  if (!banner) return;
  const { type, text } = adminState.message;
  banner.className = `status-banner ${text ? "" : "hidden"} ${type || ""}`.trim();
  banner.textContent = text || "";
}

function toggleAdminLoading(isLoading) {
  adminState.loading = isLoading;
  const submit = document.querySelector("#adminLoginSubmit");
  if (submit) {
    submit.disabled = isLoading;
    submit.textContent = isLoading ? "Please wait..." : "Sign in";
  }
}

function renderAuthState() {
  const loginCard = document.querySelector("#adminLoginCard");
  const app = document.querySelector("#adminApp");
  const signOut = document.querySelector("#adminSignOut");
  const badge = document.querySelector("#adminUserBadge");

  const isAdmin = Boolean(adminState.user && adminState.profile && isAdminProfile(adminState.profile));
  loginCard?.classList.toggle("hidden", isAdmin);
  app?.classList.toggle("hidden", !isAdmin);
  signOut?.classList.toggle("hidden", !isAdmin);

  if (badge) {
    if (isAdmin) {
      badge.classList.remove("hidden");
      badge.textContent = adminState.user.email || "Admin";
    } else {
      badge.classList.add("hidden");
      badge.textContent = "";
    }
  }
}

function isAdminProfile(profile) {
  return Boolean(profile?.is_admin || profile?.role === "admin");
}

async function adminInit() {
  const { url, anonKey } = adminGetSupabaseConfig();
  if (!window.supabase || !url || !anonKey) {
    setAdminMessage("error", "Supabase is not configured. Add your URL and anon key before using the admin panel.");
    return;
  }

  adminState.client = window.supabase.createClient(url, anonKey);

  const {
    data: { session },
    error,
  } = await adminState.client.auth.getSession();

  if (error) {
    setAdminMessage("error", `Auth setup failed: ${error.message}`);
    return;
  }

  await adminApplySession(session);
  adminState.client.auth.onAuthStateChange(async (_event, nextSession) => {
    await adminApplySession(nextSession);
  });
}

async function adminApplySession(session) {
  adminState.user = session?.user || null;
  adminState.profile = null;

  if (!adminState.user) {
    renderAuthState();
    return;
  }

  const { data, error } = await adminState.client
    .from("profiles")
    .select("id, display_name, role, is_admin")
    .eq("id", adminState.user.id)
    .single();

  if (error) {
    setAdminMessage("error", `Profile lookup failed: ${error.message}`);
    renderAuthState();
    return;
  }

  adminState.profile = data;

  if (!isAdminProfile(data)) {
    setAdminMessage("error", "This account is not an admin.");
    await adminState.client.auth.signOut();
    return;
  }

  renderAuthState();
  await loadAdminData();
  renderAdminViews();
  setAdminMessage("success", "Admin panel loaded.");
}

async function loadAdminData() {
  if (!adminState.client || !adminState.user) return;

  const [showsRes, resultsRes, pollsRes, reportsRes, updatesRes] = await Promise.all([
    adminState.client
      .from("shows")
      .select("id, starts_at, city, venue, is_active_tonight, show_label, status, surprise_song, outfit_notes, tour_name")
      .order("starts_at", { ascending: true }),
    adminState.client
      .from("show_results")
      .select("id, show_id, surprise_songs, outfit_notes, updated_at")
      .order("updated_at", { ascending: false }),
    adminState.client
      .from("prediction_polls")
      .select("id, show_id, title, status, closes_at, created_at, poll_type, prediction_options(id,label,sort_order)")
      .order("created_at", { ascending: false }),
    adminState.client
      .from("reports")
      .select("id, target_type, target_id, reason, details, status, created_at")
      .order("created_at", { ascending: false }),
    adminState.client
      .from("official_updates")
      .select("id, source, title, url, published_at, is_pinned, is_active, created_at")
      .order("is_pinned", { ascending: false })
      .order("published_at", { ascending: false }),
  ]);

  let linksRes = await adminState.client
    .from("livestream_links")
    .select("id, show_id, platform, handle, url, status, is_approved, is_admin_added, is_pinned, created_at")
    .order("created_at", { ascending: false });

  if (linksRes.error) {
    logAdminError("livestream select with moderation columns failed, retrying legacy schema", linksRes.error);
    linksRes = await adminState.client
      .from("livestream_links")
      .select("id, show_id, platform, handle, url, status, created_at")
      .order("created_at", { ascending: false });
  }

  const failures = [showsRes, resultsRes, linksRes, pollsRes, reportsRes, updatesRes].filter((res) => res.error);
  if (failures.length) {
    setAdminMessage("error", failures[0].error.message);
  }

  adminState.shows = showsRes.data || [];
  adminState.selectedShowId =
    adminState.shows.some((show) => show.id === adminState.selectedShowId)
      ? adminState.selectedShowId
      : getPreferredAdminShowId();
  adminState.showResults = Object.fromEntries((resultsRes.data || []).map((row) => [row.show_id, row]));
  adminState.livestreamLinks = linksRes.data || [];
  adminState.predictionPolls = pollsRes.data || [];
  adminState.predictionOptions = Object.fromEntries(
    (pollsRes.data || []).map((poll) => [poll.id, poll.prediction_options || []])
  );
  adminState.reports = reportsRes.data || [];
  adminState.officialUpdates = updatesRes.error ? [] : updatesRes.data || [];
}

function formatAdminDate(value) {
  if (!value) return "Not set";
  return new Date(value).toLocaleString();
}

function getAdminShowLabel(show) {
  if (!show) return "Select a show";
  return `${new Date(show.starts_at).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })} • ${show.city}`;
}

function getPreferredAdminShowId() {
  const now = new Date();
  const activeShow = adminState.shows.find((show) => show.is_active_tonight);
  if (activeShow) return activeShow.id;

  const nextShow = adminState.shows.find((show) => {
    const date = new Date(show.starts_at);
    return !Number.isNaN(date.getTime()) && date >= now;
  });

  return nextShow?.id || adminState.shows[0]?.id || "";
}

function renderAdminViews() {
  renderShowsAdminView();
  renderLivestreamAdminView();
  renderPollsAdminView();
  renderOfficialUpdatesAdminView();
  renderReportsAdminView();
  document.querySelectorAll("[data-admin-view]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-admin-view") === adminState.activeView);
  });
  document.querySelectorAll(".admin-view").forEach((view) => {
    view.classList.toggle("hidden", view.id !== `adminView-${adminState.activeView}`);
  });
}

function renderShowsAdminView() {
  const root = document.querySelector("#adminView-shows");
  if (!root) return;

  const showOptions = adminState.shows
    .map(
      (show) =>
        `<option value="${show.id}" ${show.id === adminState.selectedShowId ? "selected" : ""}>${getAdminShowLabel(show)} • ${show.venue}</option>`
    )
    .join("");
  const activeShow = adminState.shows.find((show) => show.id === adminState.selectedShowId) || null;
  const result = activeShow ? adminState.showResults[activeShow.id] : null;
  const surpriseSongs = [activeShow?.surprise_song || "", ...(Array.isArray(result?.surprise_songs) ? result.surprise_songs : [])]
    .filter(Boolean)
    .join("\n");

  root.innerHTML = `
    <section class="admin-panel">
      <div class="admin-section-head">
        <div>
          <h2>Tonight's Show</h2>
          <p class="meta">Mark one show as active and publish tonight/live/complete updates fast.</p>
        </div>
      </div>
      <form id="activeShowForm" class="admin-form">
        <div class="admin-grid two">
          <label>
            <span>Show</span>
            <select id="activeShowSelect" name="showId">${showOptions}</select>
          </label>
          <label>
            <span>Status</span>
            <select id="activeShowStatus" name="status">
              <option value="upcoming" ${activeShow?.status === "upcoming" ? "selected" : ""}>upcoming</option>
              <option value="tonight" ${activeShow?.status === "tonight" ? "selected" : ""}>tonight</option>
              <option value="live" ${activeShow?.status === "live" ? "selected" : ""}>live</option>
              <option value="complete" ${activeShow?.status === "complete" ? "selected" : ""}>complete</option>
            </select>
          </label>
        </div>
        <div class="admin-grid two">
          <label>
            <span>Show label</span>
            <input name="showLabel" value="${activeShow?.show_label || ""}" placeholder="Amsterdam N1" />
          </label>
          <label class="admin-inline-check">
            <span>Active tonight</span>
            <input type="checkbox" name="isActiveTonight" ${activeShow?.is_active_tonight ? "checked" : ""} />
          </label>
        </div>
        <label>
          <span>Surprise song</span>
          <input name="surpriseSong" value="${activeShow?.surprise_song || ""}" placeholder="Song title" />
        </label>
        <label>
          <span>Outfit notes</span>
          <textarea name="outfitNotes" placeholder="Notes about tonight's outfit">${activeShow?.outfit_notes || result?.outfit_notes || ""}</textarea>
        </label>
        <div class="form-actions">
          <button class="primary" type="submit">Save tonight update</button>
          <button id="clearActiveShow" class="ghost" type="button">Clear active</button>
        </div>
      </form>
    </section>
  `;

  const activeShowSelect = document.querySelector("#activeShowSelect");
  activeShowSelect.onchange = (event) => {
    adminState.selectedShowId = String(event.target.value || "");
    renderShowsAdminView();
  };

  document.querySelector("#activeShowForm").onsubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const showId = String(fd.get("showId") || "");
    if (!showId) return;

    const shouldActivate = Boolean(fd.get("isActiveTonight"));
    const deactivate = shouldActivate
      ? adminState.client.from("shows").update({ is_active_tonight: false }).neq("id", showId)
      : Promise.resolve({ error: null });
    const activate = adminState.client
      .from("shows")
      .update({
        is_active_tonight: shouldActivate,
        status: String(fd.get("status") || "upcoming"),
        show_label: String(fd.get("showLabel") || "").trim() || null,
        surprise_song: String(fd.get("surpriseSong") || "").trim() || null,
        outfit_notes: String(fd.get("outfitNotes") || "").trim() || null,
      })
      .eq("id", showId);
    const [deactivateRes, activateRes] = await Promise.all([deactivate, activate]);

    if (deactivateRes.error || activateRes.error) {
      setAdminMessage("error", deactivateRes.error?.message || activateRes.error?.message || "Unable to update active show.");
      return;
    }

    const resultPayload = {
      show_id: showId,
      surprise_songs: String(fd.get("surpriseSong") || "")
        .split("\n")
        .map((value) => value.trim())
        .filter(Boolean),
      outfit_notes: String(fd.get("outfitNotes") || "").trim(),
      updated_by: adminState.user.id,
    };
    await adminState.client.from("show_results").upsert(resultPayload, { onConflict: "show_id" });

    await loadAdminData();
    renderAdminViews();
    setAdminMessage("success", "Tonight update saved.");
  };

  document.querySelector("#clearActiveShow").onclick = async () => {
    const { error } = await adminState.client.from("shows").update({ is_active_tonight: false }).neq("id", "");
    if (error) {
      setAdminMessage("error", error.message);
      return;
    }
    await loadAdminData();
    renderAdminViews();
    setAdminMessage("success", "Active show cleared.");
  };

}

function renderLivestreamAdminView() {
  const root = document.querySelector("#adminView-livestreams");
  if (!root) return;

  const showOptions = adminState.shows
    .map((show) => `<option value="${show.id}">${getAdminShowLabel(show)} • ${show.venue}</option>`)
    .join("");
  const rows = adminState.livestreamLinks
    .slice()
    .sort((a, b) => {
      const pending = Number(a.status === "pending") - Number(b.status === "pending");
      if (pending) return pending;
      const pinned = Number(Boolean(b.is_pinned)) - Number(Boolean(a.is_pinned));
      if (pinned) return pinned;
      const adminAdded = Number(Boolean(b.is_admin_added)) - Number(Boolean(a.is_admin_added));
      if (adminAdded) return adminAdded;
      return String(b.created_at).localeCompare(String(a.created_at));
    })
    .map(
      (link) => `
        <tr>
          <td>${formatAdminDate(link.created_at)}</td>
          <td>${adminState.shows.find((show) => show.id === link.show_id)?.city || "Unknown show"}</td>
          <td>${link.platform}</td>
          <td>@${link.handle}</td>
          <td><a href="${link.url}" target="_blank" rel="noreferrer">${link.url}</a></td>
          <td>
            <div class="form-actions">
              <span class="badge ${link.status === "approved" ? "success" : link.status === "removed" ? "danger" : "warn"}">${link.status}</span>
              ${link.is_admin_added ? '<span class="badge success">admin</span>' : ""}
              ${link.is_pinned ? '<span class="badge warn">pinned</span>' : ""}
            </div>
          </td>
          <td class="row-actions">
            <button class="ghost" type="button" data-link-action="approve" data-link-id="${link.id}">Approve</button>
            <button class="ghost" type="button" data-link-action="remove" data-link-id="${link.id}">Remove</button>
            <button class="ghost" type="button" data-link-action="${link.is_pinned ? "unpin" : "pin"}" data-link-id="${link.id}">${link.is_pinned ? "Unpin" : "Pin"}</button>
          </td>
        </tr>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="admin-panel">
      <div class="admin-section-head">
        <div>
          <h2>Livestream Links</h2>
          <p class="meta">Add links directly or moderate links submitted by users.</p>
        </div>
      </div>
      <form id="livestreamForm" class="admin-grid two">
        <label>
          <span>Show</span>
          <select name="showId">${showOptions}</select>
        </label>
        <label>
          <span>Platform</span>
          <select name="platform">
            <option value="TikTok">TikTok</option>
            <option value="Instagram Live">Instagram Live</option>
          </select>
        </label>
        <label>
          <span>Handle</span>
          <input name="handle" placeholder="fanaccount" required />
        </label>
        <label>
          <span>URL</span>
          <input name="url" type="url" placeholder="https://..." required />
        </label>
        <label class="admin-inline-check">
          <span>Pin to top</span>
          <input name="isPinned" type="checkbox" />
        </label>
        <div class="form-actions">
          <button class="primary" type="submit">Add livestream</button>
        </div>
      </form>
    </section>

    <section class="admin-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Submitted</th>
            <th>Show</th>
            <th>Platform</th>
            <th>Handle</th>
            <th>URL</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="7">No livestream links yet.</td></tr>'}</tbody>
      </table>
    </section>
  `;

  document.querySelector("#livestreamForm").onsubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const showId = String(fd.get("showId") || "");
    if (!showId) {
      setAdminMessage("error", "Choose a show before adding a livestream.");
      return;
    }

    const payload = {
      show_id: showId,
      platform: String(fd.get("platform") || ""),
      handle: String(fd.get("handle") || "").replace(/^@/, ""),
      url: String(fd.get("url") || ""),
      status: "approved",
      is_approved: true,
      is_admin_added: true,
      is_pinned: Boolean(fd.get("isPinned")),
      submitted_by: adminState.user.id,
      reviewed_by: adminState.user.id,
    };

    console.log("[DISCOTIME Admin] submitting livestream payload", payload);
    let { error } = await adminState.client.from("livestream_links").insert(payload);
    if (error) {
      logAdminError("admin livestream insert failed on moderation schema, retrying legacy schema", error);
      ({ error } = await adminState.client.from("livestream_links").insert({
        show_id: payload.show_id,
        platform: payload.platform,
        handle: payload.handle,
        url: payload.url,
        status: "approved",
        submitted_by: adminState.user.id,
      }));
    }
    if (error) {
      setAdminMessage("error", `Livestream insert failed: ${logAdminError("admin livestream insert failed", error)}`);
      return;
    }
    await loadAdminData();
    renderAdminViews();
    setAdminMessage("success", "Livestream link added.");
  };

  document.querySelectorAll("[data-link-id]").forEach((button) => {
    button.onclick = async () => {
      const id = button.getAttribute("data-link-id");
      const action = button.getAttribute("data-link-action");
      if (!id || !action) return;

      let payload = {};
      if (action === "approve") {
        payload = { status: "approved", is_approved: true, reviewed_by: adminState.user.id };
      } else if (action === "remove") {
        payload = { status: "removed", is_approved: false, reviewed_by: adminState.user.id, is_pinned: false };
      } else if (action === "pin") {
        payload = { is_pinned: true, reviewed_by: adminState.user.id };
      } else if (action === "unpin") {
        payload = { is_pinned: false, reviewed_by: adminState.user.id };
      } else {
        return;
      }

      const { error } = await adminState.client.from("livestream_links").update(payload).eq("id", id);

      if (error) {
        setAdminMessage("error", error.message);
        return;
      }
      await loadAdminData();
      renderAdminViews();
      const actionLabels = {
        approve: "approved",
        remove: "removed",
        pin: "pinned",
        unpin: "unpinned",
      };
      setAdminMessage("success", `Livestream ${actionLabels[action] || "updated"}.`);
    };
  });
}

function renderPollsAdminView() {
  const root = document.querySelector("#adminView-polls");
  if (!root) return;

  const showOptions = adminState.shows
    .map((show) => `<option value="${show.id}">${getAdminShowLabel(show)} • ${show.venue}</option>`)
    .join("");
  const rows = adminState.predictionPolls
    .map((poll) => {
      const options = (adminState.predictionOptions[poll.id] || [])
        .map((option) => option.label)
        .join(", ");
      return `
        <tr>
          <td>${poll.title}</td>
          <td>${adminState.shows.find((show) => show.id === poll.show_id)?.city || "Unknown show"}</td>
          <td>${poll.poll_type || "song"}</td>
          <td>${poll.status}</td>
          <td>${options || "No options"}</td>
          <td>${poll.closes_at ? formatAdminDate(poll.closes_at) : "Open-ended"}</td>
          <td class="row-actions">
            <button class="ghost" type="button" data-poll-close="${poll.id}">Close</button>
          </td>
        </tr>
      `;
    })
    .join("");

  root.innerHTML = `
    <section class="admin-panel">
      <div class="admin-section-head">
        <div>
          <h2>Create Prediction Poll</h2>
          <p class="meta">Create a simple poll with up to six options.</p>
        </div>
      </div>
      <form id="pollForm" class="admin-form">
        <div class="admin-grid two">
          <label>
            <span>Show</span>
            <select name="showId">${showOptions}</select>
          </label>
          <label>
            <span>Poll type</span>
            <select name="pollType">
              <option value="song">Song prediction</option>
              <option value="surprise_song">Surprise song</option>
              <option value="surprise_guest">Surprise guest</option>
              <option value="outfit">Outfit prediction</option>
            </select>
          </label>
          <label>
            <span>Closes at</span>
            <input name="closesAt" type="datetime-local" />
          </label>
        </div>
        <label>
          <span>Poll title</span>
          <input name="title" placeholder="What surprise song will Harry play tonight?" required />
        </label>
        <label>
          <span>Options (one per line)</span>
          <textarea name="options" placeholder="Option 1&#10;Option 2" required></textarea>
        </label>
        <div class="form-actions">
          <button class="primary" type="submit">Create poll</button>
        </div>
      </form>
    </section>

    <section class="admin-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Question</th>
            <th>Show</th>
            <th>Type</th>
            <th>Status</th>
            <th>Options</th>
            <th>Closes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="7">No polls yet.</td></tr>'}</tbody>
      </table>
    </section>
  `;

  document.querySelector("#pollForm").onsubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const options = String(fd.get("options") || "")
      .split("\n")
      .map((value) => value.trim())
      .filter(Boolean)
      .slice(0, 6);

    if (!options.length) {
      setAdminMessage("error", "Add at least one poll option.");
      return;
    }

    const pollPayload = {
      show_id: String(fd.get("showId") || ""),
      title: String(fd.get("title") || "").trim(),
      poll_type: String(fd.get("pollType") || "song"),
      status: "open",
      closes_at: String(fd.get("closesAt") || "").trim() || null,
      created_by: adminState.user.id,
    };

    const { data: poll, error: pollError } = await adminState.client
      .from("prediction_polls")
      .insert(pollPayload)
      .select("id")
      .single();

    if (pollError) {
      setAdminMessage("error", pollError.message);
      return;
    }

    const optionRows = options.map((label, index) => ({
      poll_id: poll.id,
      label,
      sort_order: index,
    }));

    const { error: optionError } = await adminState.client.from("prediction_options").insert(optionRows);
    if (optionError) {
      setAdminMessage("error", optionError.message);
      return;
    }

    await loadAdminData();
    renderAdminViews();
    setAdminMessage("success", "Prediction poll created.");
  };

  document.querySelectorAll("[data-poll-close]").forEach((button) => {
    button.onclick = async () => {
      const pollId = button.getAttribute("data-poll-close");
      if (!pollId) return;
      const { error } = await adminState.client
        .from("prediction_polls")
        .update({ status: "closed", closed_at: new Date().toISOString(), closed_by: adminState.user.id })
        .eq("id", pollId);

      if (error) {
        setAdminMessage("error", error.message);
        return;
      }

      await loadAdminData();
      renderAdminViews();
      setAdminMessage("success", "Prediction poll closed.");
    };
  });
}

function renderOfficialUpdatesAdminView() {
  const root = document.querySelector("#adminView-updates");
  if (!root) return;

  const rows = adminState.officialUpdates
    .map(
      (item) => `
        <tr>
          <td>${item.title}</td>
          <td>${item.source || "Official"}</td>
          <td>${item.published_at ? formatAdminDate(item.published_at) : "Not set"}</td>
          <td>${item.is_pinned ? "Pinned" : "Standard"}</td>
          <td>${item.is_active === false ? "Hidden" : "Live"}</td>
          <td class="row-actions">
            <button class="ghost" type="button" data-update-pin="${item.id}">${item.is_pinned ? "Unpin" : "Pin"}</button>
            <button class="ghost" type="button" data-update-toggle="${item.id}" data-update-active="${item.is_active === false ? "0" : "1"}">${item.is_active === false ? "Publish" : "Hide"}</button>
          </td>
        </tr>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="admin-panel">
      <div class="admin-section-head">
        <div>
          <h2>Official Updates</h2>
          <p class="meta">Manage simple Harry / HSHQ links for the DISCOTIME home screen.</p>
        </div>
      </div>
      <form id="officialUpdateForm" class="admin-form">
        <div class="admin-grid two">
          <label>
            <span>Source</span>
            <select name="source">
              <option value="Harry Styles">Harry Styles</option>
              <option value="HSHQ">HSHQ</option>
            </select>
          </label>
          <label>
            <span>Published at</span>
            <input name="publishedAt" type="datetime-local" />
          </label>
        </div>
        <label>
          <span>Title</span>
          <input name="title" placeholder="Tonight's official update" required />
        </label>
        <label>
          <span>URL</span>
          <input name="url" type="url" placeholder="https://..." required />
        </label>
        <label class="admin-inline-check">
          <span>Pin update</span>
          <input name="isPinned" type="checkbox" />
        </label>
        <div class="form-actions">
          <button class="primary" type="submit">Add update</button>
        </div>
      </form>
    </section>
    <section class="admin-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Source</th>
            <th>Published</th>
            <th>Placement</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="6">No official updates yet.</td></tr>'}</tbody>
      </table>
    </section>
  `;

  const form = document.querySelector("#officialUpdateForm");
  if (form) {
    form.onsubmit = async (event) => {
      event.preventDefault();
      const fd = new FormData(event.target);
      const payload = {
        source: String(fd.get("source") || "Official"),
        title: String(fd.get("title") || "").trim(),
        url: String(fd.get("url") || "").trim(),
        published_at: String(fd.get("publishedAt") || "").trim() || new Date().toISOString(),
        is_pinned: Boolean(fd.get("isPinned")),
        is_active: true,
      };
      const { error } = await adminState.client.from("official_updates").insert(payload);
      if (error) {
        setAdminMessage("error", error.message);
        return;
      }
      await loadAdminData();
      renderAdminViews();
      setAdminMessage("success", "Official update added.");
    };
  }

  document.querySelectorAll("[data-update-pin]").forEach((button) => {
    button.onclick = async () => {
      const id = button.getAttribute("data-update-pin");
      const item = adminState.officialUpdates.find((entry) => String(entry.id) === String(id));
      if (!id || !item) return;
      const { error } = await adminState.client.from("official_updates").update({ is_pinned: !item.is_pinned }).eq("id", id);
      if (error) {
        setAdminMessage("error", error.message);
        return;
      }
      await loadAdminData();
      renderAdminViews();
      setAdminMessage("success", item.is_pinned ? "Official update unpinned." : "Official update pinned.");
    };
  });

  document.querySelectorAll("[data-update-toggle]").forEach((button) => {
    button.onclick = async () => {
      const id = button.getAttribute("data-update-toggle");
      const active = button.getAttribute("data-update-active") === "1";
      if (!id) return;
      const { error } = await adminState.client.from("official_updates").update({ is_active: !active }).eq("id", id);
      if (error) {
        setAdminMessage("error", error.message);
        return;
      }
      await loadAdminData();
      renderAdminViews();
      setAdminMessage("success", active ? "Official update hidden." : "Official update published.");
    };
  });
}

function renderReportsAdminView() {
  const root = document.querySelector("#adminView-reports");
  if (!root) return;

  const rows = adminState.reports
    .filter((report) => !report.status || report.status === "open")
    .map(
      (report) => `
        <tr>
          <td>${formatAdminDate(report.created_at)}</td>
          <td>${report.target_type}</td>
          <td>${report.reason}</td>
          <td>${report.details || "No details"}</td>
          <td><span class="badge warn">${report.status || "open"}</span></td>
          <td class="row-actions">
            ${report.target_type === "livestream" ? `<button class="ghost" type="button" data-report-remove-link="${report.target_id}" data-report-id="${report.id}">Remove link</button>` : ""}
            <button class="ghost" type="button" data-report-action="resolved" data-report-id="${report.id}">Close</button>
          </td>
        </tr>
      `
    )
    .join("");

  root.innerHTML = `
    <section class="admin-table-wrap">
      <table>
        <thead>
          <tr>
            <th>Reported</th>
            <th>Type</th>
            <th>Reason</th>
            <th>Details</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>${rows || '<tr><td colspan="6">No open reports.</td></tr>'}</tbody>
      </table>
    </section>
  `;

  document.querySelectorAll("[data-report-remove-link]").forEach((button) => {
    button.onclick = async () => {
      const linkId = button.getAttribute("data-report-remove-link");
      const reportId = button.getAttribute("data-report-id");
      if (!linkId || !reportId) return;

      const [linkRes, reportRes] = await Promise.all([
        adminState.client
          .from("livestream_links")
          .update({ status: "removed", is_approved: false, is_pinned: false, reviewed_by: adminState.user.id })
          .eq("id", linkId),
        adminState.client
          .from("reports")
          .update({ status: "resolved", reviewed_at: new Date().toISOString(), reviewed_by: adminState.user.id })
          .eq("id", reportId),
      ]);

      if (linkRes.error || reportRes.error) {
        setAdminMessage("error", linkRes.error?.message || reportRes.error?.message || "Unable to remove link.");
        return;
      }

      await loadAdminData();
      renderAdminViews();
      setAdminMessage("success", "Livestream removed and report closed.");
    };
  });

  document.querySelectorAll("[data-report-id]").forEach((button) => {
    button.onclick = async () => {
      const reportId = button.getAttribute("data-report-id");
      const status = button.getAttribute("data-report-action");
      if (!reportId || !status) return;

      const { error } = await adminState.client
        .from("reports")
        .update({ status, reviewed_at: new Date().toISOString(), reviewed_by: adminState.user.id })
        .eq("id", reportId);

      if (error) {
        setAdminMessage("error", error.message);
        return;
      }

      await loadAdminData();
      renderAdminViews();
      setAdminMessage("success", "Report closed.");
    };
  });
}

function wireAdminEvents() {
  const loginForm = document.querySelector("#adminLoginForm");
  const signOut = document.querySelector("#adminSignOut");

  loginForm.onsubmit = async (event) => {
    event.preventDefault();
    if (!adminState.client) {
      setAdminMessage("error", "Supabase is not configured.");
      return;
    }

    toggleAdminLoading(true);
    const email = String(document.querySelector("#adminEmail").value || "").trim();
    const password = String(document.querySelector("#adminPassword").value || "");
    const { error } = await adminState.client.auth.signInWithPassword({ email, password });
    toggleAdminLoading(false);

    if (error) {
      setAdminMessage("error", error.message);
      return;
    }

    setAdminMessage("success", "Signed in.");
  };

  signOut.onclick = async () => {
    if (!adminState.client) return;
    const { error } = await adminState.client.auth.signOut();
    if (error) {
      setAdminMessage("error", error.message);
      return;
    }
    adminState.profile = null;
    adminState.user = null;
    renderAuthState();
    setAdminMessage("success", "Signed out.");
  };

  document.querySelectorAll("[data-admin-view]").forEach((button) => {
    button.onclick = () => {
      adminState.activeView = button.getAttribute("data-admin-view") || "shows";
      renderAdminViews();
    };
  });
}

wireAdminEvents();
renderAuthState();
renderAdminBanner();
adminInit();
