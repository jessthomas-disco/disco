const DEFAULT_SUPABASE_URL = "https://ynbgwfvvqwgxadmznyue.supabase.co";
const DEFAULT_SUPABASE_KEY = "sb_publishable_IbTpwflyOBZ7tDCu8PTu9Q_Sf6mRicm";

const tabConfig = [
  {
    id: "tour",
    label: "Home",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m3 11 9-8 9 8"></path><path d="M5 10v10h14V10"></path><path d="M10 20v-6h4v6"></path></svg>',
  },
  {
    id: "calendar",
    label: "Calendar",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M16 2v4M8 2v4M3 10h18"></path></svg>',
  },
  {
    id: "countdowns",
    label: "My Shows",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="13" r="8"></circle><path d="M12 13V9M12 13l3 2M9 2h6"></path></svg>',
  },
  {
    id: "setlists",
    label: "Songs",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
  },
  {
    id: "live",
    label: "Live",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="6.5" width="14" height="11" rx="2"></rect><path d="m16.5 10 5-3v10l-5-3z"></path></svg>',
  },
  {
    id: "outfits",
    label: "Outfits",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M8 4.5 12 3l4 1.5v3l2.5 3L15 12l-1 8h-4l-1-8-3.5-1.5L8 7.5z"></path></svg>',
  },
];

const MASTER_TOUR_DATES = [
  ["2026-03-06", "Manchester, UK", "Co-op Live"],
  ["2026-05-16", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-05-17", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-05-20", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-05-22", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-05-23", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-05-26", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-05-29", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-05-30", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-06-04", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-06-05", "Amsterdam, Netherlands", "Johan Cruijff Arena"],
  ["2026-06-12", "London, UK", "Wembley Stadium"],
  ["2026-06-13", "London, UK", "Wembley Stadium"],
  ["2026-06-17", "London, UK", "Wembley Stadium"],
  ["2026-06-19", "London, UK", "Wembley Stadium"],
  ["2026-06-20", "London, UK", "Wembley Stadium"],
  ["2026-06-23", "London, UK", "Wembley Stadium"],
  ["2026-06-26", "London, UK", "Wembley Stadium"],
  ["2026-06-27", "London, UK", "Wembley Stadium"],
  ["2026-06-29", "London, UK", "Wembley Stadium"],
  ["2026-07-01", "London, UK", "Wembley Stadium"],
  ["2026-07-03", "London, UK", "Wembley Stadium"],
  ["2026-07-04", "London, UK", "Wembley Stadium"],
  ["2026-07-17", "Sao Paulo, Brazil", "Estadio Morumbis"],
  ["2026-07-18", "Sao Paulo, Brazil", "Estadio Morumbis"],
  ["2026-07-21", "Sao Paulo, Brazil", "Estadio Morumbis"],
  ["2026-07-24", "Sao Paulo, Brazil", "Estadio Morumbis"],
  ["2026-07-31", "Mexico City, Mexico", "Estadio GNP Seguros"],
  ["2026-08-01", "Mexico City, Mexico", "Estadio GNP Seguros"],
  ["2026-08-04", "Mexico City, Mexico", "Estadio GNP Seguros"],
  ["2026-08-07", "Mexico City, Mexico", "Estadio GNP Seguros"],
  ["2026-08-08", "Mexico City, Mexico", "Estadio GNP Seguros"],
  ["2026-08-10", "Mexico City, Mexico", "Estadio GNP Seguros"],
  ["2026-08-26", "New York, NY, USA", "Madison Square Garden"],
  ["2026-08-28", "New York, NY, USA", "Madison Square Garden"],
  ["2026-08-29", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-02", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-04", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-05", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-09", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-11", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-12", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-16", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-18", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-19", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-23", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-25", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-26", "New York, NY, USA", "Madison Square Garden"],
  ["2026-09-30", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-02", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-03", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-07", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-09", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-10", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-14", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-16", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-17", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-21", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-23", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-24", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-28", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-30", "New York, NY, USA", "Madison Square Garden"],
  ["2026-10-31", "New York, NY, USA", "Madison Square Garden"],
  ["2026-11-27", "Melbourne, Australia", "Marvel Stadium"],
  ["2026-11-28", "Melbourne, Australia", "Marvel Stadium"],
  ["2026-12-02", "Melbourne, Australia", "Marvel Stadium"],
  ["2026-12-12", "Sydney, Australia", "Accor Stadium"],
  ["2026-12-13", "Sydney, Australia", "Accor Stadium"],
];

const OFFICIAL_FEED = [
  {
    id: "hs-1",
    account: "harrystyles",
    name: "Harry Styles",
    link: "https://www.instagram.com/p/DUWLA5IElTz/?hl=en",
  },
  {
    id: "hs-2",
    account: "harrystyles",
    name: "Harry Styles",
    link: "https://www.instagram.com/p/DT3FvecD0PV/?hl=en",
  },
  {
    id: "hs-3",
    account: "harrystyles",
    name: "Harry Styles",
    link: "https://www.instagram.com/p/DT1PiGbElcT/?hl=en",
  },
  {
    id: "hs-4",
    account: "harrystyles",
    name: "Harry Styles",
    link: "https://www.instagram.com/p/DURWA-SkuYP/?hl=en&img_index=1",
  },
  {
    id: "hs-5",
    account: "harrystyles",
    name: "Harry Styles",
    link: "https://www.instagram.com/p/DTigMkDCbt4/?hl=en",
  },
  {
    id: "hs-6",
    account: "harrystyles",
    name: "Harry Styles",
    link: "https://www.instagram.com/p/DUa2ZxZFEt6/?hl=en&img_index=1",
  },
];

const masterShows = MASTER_TOUR_DATES.map(([date, city, venue]) => ({
  id: crypto.randomUUID(),
  city,
  venue,
  date,
  status: "upcoming",
  setlist: [],
}));

const state = {
  shows: hydrateShows(),
  streams: load("streams", []),
  outfits: load("outfits", []),
  goingShowIds: [],
  attendedShowIds: [],
  favoriteOutfitIds: [],
  favoriteSetlistShowIds: [],
  profile: null,
  outfitFilters: { color: "", city: "" },
  calendarMonth: "",
  feedMedia: load("officialFeedMedia", {}),
  activeTab: "tour",
  auth: {
    client: null,
    user: null,
    session: null,
    configured: false,
    mode: "signin",
    modalOpen: false,
    message: "Sign in to save your shows, attendance, and favorites.",
  },
};

function defaultProfile() {
  return {
    displayName: "",
    city: "",
    pronouns: "",
    showGoingPublic: false,
    ticketStatus: "none",
    photoUrl: "",
    photoData: "",
  };
}

let countdownTicker = null;

function load(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function save(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

function hydrateShows() {
  const saved = load("shows", []);
  const merged = [...saved];
  const seen = new Set(saved.map(showKey));

  masterShows.forEach((show) => {
    const key = showKey(show);
    if (!seen.has(key)) {
      merged.push(show);
      seen.add(key);
    }
  });

  save("shows", merged);
  return merged;
}

function showKey(show) {
  return `${show.date}|${show.city}|${show.venue}`.toLowerCase();
}

function formatDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function sortedShows() {
  return state.shows.slice().sort((a, b) => a.date.localeCompare(b.date));
}

function abbreviateCity(city) {
  const replacements = {
    "United Kingdom": "UK",
    "Netherlands": "NL",
    "Brazil": "BR",
    "Mexico": "MX",
    "Australia": "AU",
    "United States": "US",
    "USA": "US",
  };

  return city
    .split(",")
    .map((part) => part.trim())
    .map((part) => replacements[part] || part)
    .join(", ");
}

function showOptionsMarkup() {
  return sortedShows()
    .map((show) => `<option value="${show.id}">${abbreviateCity(show.city)} - ${formatDate(show.date)}</option>`)
    .join("");
}

function getNextShow() {
  const today = new Date().toISOString().slice(0, 10);
  const shows = sortedShows();
  return shows.find((show) => show.date >= today) || shows[0] || null;
}

function getShowById(showId) {
  return state.shows.find((show) => show.id === showId);
}

function getMonthId(dateString) {
  return dateString.slice(0, 7);
}

function monthLabel(monthId) {
  const [year, month] = monthId.split("-").map(Number);
  return new Date(year, month - 1, 1).toLocaleDateString(undefined, {
    month: "long",
    year: "numeric",
  });
}

function shiftMonth(monthId, delta) {
  const [year, month] = monthId.split("-").map(Number);
  const date = new Date(year, month - 1 + delta, 1);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function getNextShowMonthId() {
  const nextShow = getNextShow();
  return getMonthId(nextShow?.date || sortedShows()[0]?.date || "2026-01-01");
}

function initializeCalendarMonth() {
  if (state.calendarMonth) return;
  state.calendarMonth = getNextShowMonthId();
}

function getShowNightLabel(show) {
  if (!show) return "";
  const shortCity = show.city.split(",")[0].trim();
  const runShows = sortedShows().filter(
    (item) =>
      item.city.toLowerCase() === show.city.toLowerCase() &&
      item.venue.toLowerCase() === show.venue.toLowerCase()
  );
  const index = runShows.findIndex((item) => item.id === show.id);
  if (runShows.length <= 1) return `${shortCity} ONO`;
  const night = index >= 0 ? index + 1 : 1;
  return `${shortCity} N${night}`;
}

async function hydrateOfficialFeedMedia() {
  const updates = { ...state.feedMedia };

  await Promise.all(
    OFFICIAL_FEED.map(async (post) => {
      if (updates[post.id]?.thumbnailUrl) return;
      try {
        const endpoint = `https://noembed.com/embed?url=${encodeURIComponent(post.link)}`;
        const response = await fetch(endpoint);
        if (!response.ok) return;
        const data = await response.json();
        const thumbnailUrl = String(data.thumbnail_url || "").trim();
        if (!thumbnailUrl) return;

        updates[post.id] = {
          thumbnailUrl,
          title: String(data.title || "").trim(),
        };
      } catch {
        // Keep feed usable with fallback when oEmbed is blocked.
      }
    })
  );

  state.feedMedia = updates;
  save("officialFeedMedia", updates);
}

function getCountdownParts(targetDateString) {
  const target = new Date(`${targetDateString}T19:00:00`);
  const now = new Date();
  const diff = Math.max(0, target.getTime() - now.getTime());

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  return { days, hours, minutes, seconds };
}

function scopedKey(base) {
  return `${base}:${state.auth.user?.id || "guest"}`;
}

function saveScoped(base, value) {
  save(scopedKey(base), value);
}

function loadScoped(base, fallback = []) {
  return load(scopedKey(base), fallback);
}

function applyUserScopedState() {
  state.goingShowIds = loadScoped("goingShowIds");
  state.attendedShowIds = loadScoped("attendedShowIds");
  state.favoriteOutfitIds = loadScoped("favoriteOutfitIds");
  state.favoriteSetlistShowIds = loadScoped("favoriteSetlistShowIds");
  state.profile = { ...defaultProfile(), ...loadScoped("profile", {}) };
}

function clearUserScopedState() {
  applyUserScopedState();
}

function requireAuth(actionText) {
  if (!state.auth.user) {
    state.auth.message = `Using guest mode for ${actionText}. Sign in any time to sync this account.`;
  }
  return true;
}

function getSupabaseConfig() {
  const url =
    window.SUPABASE_URL ||
    window.__SUPABASE_URL__ ||
    localStorage.getItem("supabase_url") ||
    DEFAULT_SUPABASE_URL ||
    "";
  const anonKey =
    window.SUPABASE_ANON_KEY ||
    window.__SUPABASE_ANON_KEY__ ||
    localStorage.getItem("supabase_anon_key") ||
    DEFAULT_SUPABASE_KEY ||
    "";
  return { url, anonKey };
}

function applySession(session) {
  state.auth.session = session;
  state.auth.user = session?.user || null;

  if (state.auth.user) {
    applyUserScopedState();
  } else {
    clearUserScopedState();
  }

  render();
}

async function initAuth() {
  const hasSupabase = Boolean(window.supabase && typeof window.supabase.createClient === "function");
  const { url, anonKey } = getSupabaseConfig();

  if (!hasSupabase || !url || !anonKey) {
    state.auth.configured = false;
    return;
  }

  state.auth.client = window.supabase.createClient(url, anonKey);
  state.auth.configured = true;

  const {
    data: { session },
  } = await state.auth.client.auth.getSession();

  applySession(session);

  state.auth.client.auth.onAuthStateChange((_event, nextSession) => {
    applySession(nextSession);
  });
}

async function onEmailAuthSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = String(form.querySelector("#authEmail").value).trim();
  const password = String(form.querySelector("#authPassword").value);

  if (!state.auth.configured || !state.auth.client) {
    state.auth.message = "Connect Supabase first to enable auth.";
    renderAuthUI();
    return;
  }

  if (state.auth.mode === "signup") {
    const { error } = await state.auth.client.auth.signUp({ email, password });
    state.auth.message = error
      ? `Sign up error: ${error.message}`
      : "Check your email to confirm your account, then sign in.";
  } else {
    const { error } = await state.auth.client.auth.signInWithPassword({ email, password });
    state.auth.message = error ? `Sign in error: ${error.message}` : "Signed in.";
    if (!error) state.auth.modalOpen = false;
  }

  renderAuthUI();
}

async function onOAuth(provider) {
  if (!state.auth.configured || !state.auth.client) {
    state.auth.message = "Connect Supabase first to enable auth.";
    renderAuthUI();
    return;
  }

  const { error } = await state.auth.client.auth.signInWithOAuth({
    provider,
    options: { redirectTo: window.location.href },
  });

  if (error) {
    state.auth.message = `${provider} sign in error: ${error.message}`;
    renderAuthUI();
  }
}

function renderAuthUI() {
  const profileButton = document.querySelector("#profileButton");
  const modal = document.querySelector("#authModal");
  const message = document.querySelector("#authMessage");
  const setup = document.querySelector("#authSetup");
  const actions = document.querySelector("#authActions");
  const modeSignIn = document.querySelector("#modeSignIn");
  const modeSignUp = document.querySelector("#modeSignUp");

  if (!profileButton || !modal || !message || !setup || !actions) return;

  profileButton.onclick = () => {
    state.activeTab = "profile";
    render();
  };

  modal.classList.toggle("hidden", !state.auth.modalOpen);
  message.textContent = state.auth.message;

  setup.classList.toggle("hidden", state.auth.configured);
  actions.classList.toggle("hidden", !state.auth.configured);

  modeSignIn.className = `switch-pill ${state.auth.mode === "signin" ? "active" : "muted"}`;
  modeSignUp.className = `switch-pill ${state.auth.mode === "signup" ? "active" : "muted"}`;

  document.querySelector("#closeAuthModal").onclick = () => {
    state.auth.modalOpen = false;
    renderAuthUI();
  };

  modeSignIn.onclick = () => {
    state.auth.mode = "signin";
    renderAuthUI();
  };

  modeSignUp.onclick = () => {
    state.auth.mode = "signup";
    renderAuthUI();
  };

  document.querySelector("#googleAuth").onclick = () => onOAuth("google");
  document.querySelector("#appleAuth").onclick = () => onOAuth("apple");
  document.querySelector("#emailAuthForm").onsubmit = onEmailAuthSubmit;

  document.querySelector("#saveSupabaseConfig").onclick = () => {
    const url = String(document.querySelector("#setupSupabaseUrl").value).trim();
    const key = String(document.querySelector("#setupSupabaseKey").value).trim();
    if (!url || !key) {
      state.auth.message = "Both Supabase URL and anon key are required.";
      renderAuthUI();
      return;
    }

    localStorage.setItem("supabase_url", url);
    localStorage.setItem("supabase_anon_key", key);
    location.reload();
  };
}

function updateCountdownDisplay() {
  const valueNode = document.querySelector("#countdownValue");
  const detailNode = document.querySelector("#countdownDetail");
  const countdownMetaNode = document.querySelector("#countdownMeta");
  if (!valueNode || !detailNode || !countdownMetaNode) return;

  const nextShow = getNextShow();
  if (!nextShow) {
    valueNode.textContent = "No upcoming show";
    detailNode.textContent = "";
    countdownMetaNode.textContent = "";
    return;
  }

  const { days, hours, minutes, seconds } = getCountdownParts(nextShow.date);
  valueNode.textContent = `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
  detailNode.textContent = getShowNightLabel(nextShow);
  countdownMetaNode.textContent = formatDate(nextShow.date);
}

function updateCountdownListDisplays() {
  document.querySelectorAll("[data-show-date]").forEach((node) => {
    const showDate = node.getAttribute("data-show-date");
    if (!showDate) return;
    const { days, hours, minutes, seconds } = getCountdownParts(showDate);
    node.textContent = `${String(days).padStart(2, "0")}d ${String(hours).padStart(2, "0")}h ${String(minutes).padStart(2, "0")}m ${String(seconds).padStart(2, "0")}s`;
  });
}

function startCountdownTicker() {
  if (countdownTicker) clearInterval(countdownTicker);
  updateCountdownDisplay();
  updateCountdownListDisplays();
  countdownTicker = setInterval(() => {
    updateCountdownDisplay();
    updateCountdownListDisplays();
  }, 1000);
}

function mountTabs() {
  const nav = document.querySelector("#navTabs");
  nav.innerHTML = "";

  tabConfig.forEach((tab) => {
    const button = document.createElement("button");
    button.className = `tab ${state.activeTab === tab.id ? "active" : ""}`;
    button.type = "button";
    button.setAttribute("aria-label", tab.label);
    button.title = tab.label;
    button.innerHTML = `<span class="icon">${tab.icon}</span>`;
    button.onclick = () => {
      if (tab.id === "calendar") {
        state.calendarMonth = getNextShowMonthId();
      }
      state.activeTab = tab.id;
      render();
    };
    nav.append(button);
  });
}

function showView(viewId) {
  document.querySelectorAll(".view").forEach((node) => node.classList.add("hidden"));
  document.querySelector(`#view-${viewId}`).classList.remove("hidden");
}

function renderTourHub() {
  const el = document.querySelector("#view-tour");
  const shows = sortedShows();
  const nextShow = getNextShow();
  const today = new Date().toISOString().slice(0, 10);
  const upcomingShows = shows.filter((show) => show.date >= today);
  const previewShows = (upcomingShows.length ? upcomingShows : shows).slice(0, 8);

  const cards = previewShows
    .map((show) => {
      const isGoing = state.goingShowIds.includes(show.id);

      return `
      <article class="tile tile-poster">
        <div>
          <p class="meta">${formatDate(show.date)}</p>
          <h3>${abbreviateCity(show.city)}</h3>
          <p class="meta">${show.venue}</p>
        </div>
        <button type="button" class="ghost going-toggle ${isGoing ? "active" : ""}" data-show-id="${show.id}">${isGoing ? "Going" : "I'm going"}</button>
      </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <div class="hero-card">
      <button id="openCountdowns" type="button" class="hero-link">MY NEXT SHOW</button>
      <p id="countdownValue" class="hero-count">${nextShow ? "Loading..." : "No upcoming show"}</p>
      <p id="countdownDetail" class="hero-note">${nextShow ? getShowNightLabel(nextShow) : "Add your first show"}</p>
      <p id="countdownMeta" class="meta">${nextShow ? formatDate(nextShow.date) : ""}</p>
    </div>

    <h2>UPCOMING DISCOS</h2>
    <div class="grid">${cards || '<p class="empty">No shows yet.</p>'}</div>
    <div class="more-discos-wrap">
      <button id="openCalendarFromHome" type="button" class="more-discos-pill">MORE DISCOS</button>
    </div>
    <h2>OFFICIAL FEED</h2>
    <div class="stack">
      ${OFFICIAL_FEED.map(
        (post) => {
          const media = state.feedMedia[post.id];
          return `
        <article class="card feed-card">
          <div class="feed-head">
            <div>
              <h3>${post.name}</h3>
              <p class="meta">@${post.account}</p>
            </div>
            <span class="badge info">Official</span>
          </div>
          <div class="feed-media-wrap">
            ${
              media?.thumbnailUrl
                ? `<img class="feed-media" src="${media.thumbnailUrl}" alt="${post.name} Instagram post" loading="lazy" />`
                : '<div class="feed-media feed-media-fallback" aria-hidden="true"></div>'
            }
          </div>
          ${post.caption ? `<p class="feed-caption">${post.caption}</p>` : ""}
          <a class="feed-link" target="_blank" rel="noreferrer" href="${post.link}">View on Instagram</a>
        </article>
      `
        }
      ).join("")}
    </div>
  `;

  document.querySelector("#openCountdowns").onclick = () => {
    state.activeTab = "countdowns";
    render();
  };
  document.querySelector("#openCalendarFromHome").onclick = () => {
    state.calendarMonth = getNextShowMonthId();
    state.activeTab = "calendar";
    render();
  };

  document.querySelectorAll(".going-toggle").forEach((button) => {
    button.onclick = () => {
      const showId = button.getAttribute("data-show-id");
      if (!showId) return;
      if (!requireAuth("save shows you're going to")) return;

      const isGoing = state.goingShowIds.includes(showId);
      state.goingShowIds = isGoing
        ? state.goingShowIds.filter((id) => id !== showId)
        : [...state.goingShowIds, showId];

      saveScoped("goingShowIds", state.goingShowIds);
      renderTourHub();
      updateCountdownListDisplays();
    };
  });
}

function renderCalendar() {
  const el = document.querySelector("#view-calendar");
  initializeCalendarMonth();

  const shows = sortedShows();
  const monthShows = shows.filter((show) => getMonthId(show.date) === state.calendarMonth);
  const showDays = new Set(monthShows.map((show) => Number(show.date.slice(8, 10))));
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const firstWeekday = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const dayCells = [];
  for (let i = 0; i < firstWeekday; i += 1) dayCells.push('<span class="cal-day empty-cell"></span>');
  for (let day = 1; day <= daysInMonth; day += 1) {
    const hasShow = showDays.has(day);
    dayCells.push(`<span class="cal-day ${hasShow ? "has-show" : ""}">${day}</span>`);
  }

  const listMarkup = monthShows
    .map((show) => {
      const isGoing = state.goingShowIds.includes(show.id);
      return `
      <article class="card calendar-item">
        <div>
          <p class="meta">${formatDate(show.date)}</p>
          <h3>${abbreviateCity(show.city)}</h3>
          <p class="meta">${show.venue}</p>
        </div>
        <button type="button" class="ghost calendar-going ${isGoing ? "active" : ""}" data-show-id="${show.id}">${isGoing ? "Going" : "I'm going"}</button>
      </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <h2 class="display-heading">CALENDAR</h2>
    <div class="card calendar-panel">
      <div class="calendar-nav">
        <button id="calendarPrev" class="ghost" type="button" aria-label="Previous month">‹</button>
        <h3>${monthLabel(state.calendarMonth)}</h3>
        <button id="calendarNext" class="ghost" type="button" aria-label="Next month">›</button>
      </div>
      <div class="calendar-grid week-head">
        <span>Sun</span><span>Mon</span><span>Tue</span><span>Wed</span><span>Thu</span><span>Fri</span><span>Sat</span>
      </div>
      <div class="calendar-grid">${dayCells.join("")}</div>
    </div>
    <div id="calendarList" class="stack">
      ${listMarkup || '<p class="empty">No shows in this month.</p>'}
    </div>
  `;

  document.querySelector("#calendarPrev").onclick = () => {
    state.calendarMonth = shiftMonth(state.calendarMonth, -1);
    renderCalendar();
  };
  document.querySelector("#calendarNext").onclick = () => {
    state.calendarMonth = shiftMonth(state.calendarMonth, 1);
    renderCalendar();
  };
  document.querySelectorAll(".calendar-going").forEach((button) => {
    button.onclick = () => {
      const showId = button.getAttribute("data-show-id");
      if (!showId) return;
      requireAuth("save shows you're going to");

      const isGoing = state.goingShowIds.includes(showId);
      state.goingShowIds = isGoing
        ? state.goingShowIds.filter((id) => id !== showId)
        : [...state.goingShowIds, showId];
      saveScoped("goingShowIds", state.goingShowIds);
      renderCalendar();
    };
  });
}

function renderCountdowns() {
  const el = document.querySelector("#view-countdowns");
  const goingShows = sortedShows().filter((show) => state.goingShowIds.includes(show.id));

  const cards = goingShows
    .map((show) => {
      const attended = state.attendedShowIds.includes(show.id);
      return `
      <article class="card show-countdown-card">
        <div class="countdown-head">
          <h3>${getShowNightLabel(show)}</h3>
          <p class="meta show-date-top">${formatDate(show.date)}</p>
        </div>
        <p class="meta">${show.venue}</p>
        <div class="countdown-main">
          <p class="hero-count full-countdown" data-show-date="${show.date}">Loading...</p>
        </div>
        <div class="countdown-actions">
          <button type="button" class="ghost attended-toggle" data-show-id="${show.id}">${attended ? "Attended" : "Mark attended"}</button>
        </div>
      </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <h2 class="display-heading">COUNTDOWN</h2>
    <p class="meta">Only the dates you've marked as going</p>
    <div id="countdownList" class="stack">
      ${cards || '<p class="empty">No shows selected yet. Tap "I\'m going" in Home.</p>'}
    </div>
  `;

  document.querySelectorAll(".attended-toggle").forEach((button) => {
    button.onclick = () => {
      const showId = button.getAttribute("data-show-id");
      if (!showId) return;
      if (!requireAuth("save attended shows")) return;

      const attended = state.attendedShowIds.includes(showId);
      state.attendedShowIds = attended
        ? state.attendedShowIds.filter((id) => id !== showId)
        : [...state.attendedShowIds, showId];

      saveScoped("attendedShowIds", state.attendedShowIds);
      renderCountdowns();
      updateCountdownListDisplays();
    };
  });
}

function renderSetlists() {
  const el = document.querySelector("#view-setlists");
  const shows = sortedShows();

  const cards = shows
    .filter((show) => show.setlist.length > 0)
    .slice(0, 20)
    .map((show) => {
      const songs = show.setlist.map((song) => `<li>${song}</li>`).join("");
      const isFavorite = state.favoriteSetlistShowIds.includes(show.id);
      return `
      <article class="card">
        <div class="section-head">
          <h3>${show.city} - ${formatDate(show.date)}</h3>
          <button type="button" class="ghost setlist-fav" data-show-id="${show.id}">${isFavorite ? "Saved" : "Save"}</button>
        </div>
        <p class="meta">${show.venue}</p>
        <ol class="list">${songs}</ol>
      </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <h2>SETLIST TRACKER</h2>

    <form id="setlistForm" class="card form-grid">
      <div class="form-group">
        <label>Show</label>
        <select name="showId" required>${showOptionsMarkup()}</select>
      </div>
      <div class="form-group">
        <label>Song title</label>
        <input id="setlistSong" name="song" placeholder="e.g. Watermelon Sugar" required />
      </div>
      <button class="primary" type="submit">Add song</button>
    </form>

    <div class="stack">${cards || '<p class="empty">No setlists yet. Add songs to any show.</p>'}</div>
  `;

  document.querySelector("#setlistForm").onsubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const show = state.shows.find((item) => item.id === fd.get("showId"));
    const song = String(fd.get("song")).trim();
    if (!show || !song) return;

    show.setlist.push(song);
    save("shows", state.shows);
    renderSetlists();
  };

  document.querySelectorAll(".setlist-fav").forEach((button) => {
    button.onclick = () => {
      const showId = button.getAttribute("data-show-id");
      if (!showId) return;
      if (!requireAuth("bookmark setlists")) return;

      const isFavorite = state.favoriteSetlistShowIds.includes(showId);
      state.favoriteSetlistShowIds = isFavorite
        ? state.favoriteSetlistShowIds.filter((id) => id !== showId)
        : [...state.favoriteSetlistShowIds, showId];

      saveScoped("favoriteSetlistShowIds", state.favoriteSetlistShowIds);
      renderSetlists();
    };
  });
}

function renderLiveWatch() {
  const el = document.querySelector("#view-live");

  const cards = state.streams
    .slice()
    .sort((a, b) => b.createdAt.localeCompare(a.createdAt))
    .map((stream) => {
      const show = state.shows.find((item) => item.id === stream.showId);
      const badgeClass =
        stream.status === "verified" ? "ok" : stream.status === "dead" ? "dead" : "pending";

      return `
      <article class="card">
        <h3>${show ? `${show.city} - ${formatDate(show.date)}` : "Unknown show"}</h3>
        <div class="badges">
          <span class="badge info">${stream.platform}</span>
          <span class="badge ${badgeClass}">${stream.status}</span>
          <span class="badge">@${stream.handle}</span>
        </div>
        <p class="meta" style="margin-top:0.45rem;"><a target="_blank" rel="noreferrer" href="${stream.url}">${stream.url}</a></p>
      </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <div class="hero-card">
      <p>LIVE STREAM ALERTS</p>
      <p class="hero-count">${state.streams.filter((stream) => stream.status === "verified").length}</p>
      <p class="hero-note">verified live links</p>
    </div>

    <h2>LIVE WATCH</h2>

    <form id="streamForm" class="card form-grid">
      <div class="form-group">
        <label>Show</label>
        <select name="showId" required>${showOptionsMarkup()}</select>
      </div>
      <div class="form-group">
        <label>Platform</label>
        <select name="platform" required>
          <option value="TikTok">TikTok</option>
          <option value="Instagram Live">Instagram Live</option>
        </select>
      </div>
      <div class="form-group">
        <label>Handle</label>
        <input name="handle" placeholder="fanaccount" required />
      </div>
      <div class="form-group">
        <label>Stream URL</label>
        <input id="streamUrl" type="url" name="url" placeholder="https://..." required />
      </div>
      <div class="form-group">
        <label>Status</label>
        <select name="status" required>
          <option value="unverified">unverified</option>
          <option value="verified">verified</option>
          <option value="dead">dead</option>
        </select>
      </div>
      <button class="primary" type="submit">Submit stream</button>
    </form>

    <div class="stack">${cards || '<p class="empty">No streams submitted yet.</p>'}</div>
  `;

  document.querySelector("#streamForm").onsubmit = (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);

    state.streams.push({
      id: crypto.randomUUID(),
      showId: String(fd.get("showId")),
      platform: String(fd.get("platform")),
      handle: String(fd.get("handle")).replace(/^@/, ""),
      url: String(fd.get("url")),
      status: String(fd.get("status")),
      createdAt: new Date().toISOString(),
    });

    save("streams", state.streams);
    renderLiveWatch();
  };
}

async function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(new Error("Failed to read image"));
    reader.readAsDataURL(file);
  });
}

function renderOutfitVault() {
  const el = document.querySelector("#view-outfits");
  const outfitsSorted = state.outfits.slice().sort((a, b) => b.createdAt.localeCompare(a.createdAt));
  const lastWorn = outfitsSorted[0] || null;

  const colorTags = Array.from(
    new Set(
      outfitsSorted.flatMap((outfit) =>
        String(outfit.colors || "")
          .split(",")
          .map((tag) => tag.trim())
          .filter(Boolean)
      )
    )
  ).slice(0, 8);

  const cityTags = Array.from(
    new Set(outfitsSorted.map((outfit) => getShowById(outfit.showId)?.city).filter(Boolean))
  ).slice(0, 8);

  const filteredOutfits = outfitsSorted.filter((outfit) => {
    const show = getShowById(outfit.showId);
    const matchesColor = !state.outfitFilters.color
      ? true
      : String(outfit.colors || "")
          .toLowerCase()
          .split(",")
          .map((tag) => tag.trim())
          .includes(state.outfitFilters.color.toLowerCase());
    const matchesCity = !state.outfitFilters.city ? true : show?.city === state.outfitFilters.city;
    return matchesColor && matchesCity;
  });

  const rowCards = filteredOutfits
    .map((outfit) => {
      const show = getShowById(outfit.showId);
      const image = outfit.photoData || outfit.photoUrl;
      const isFavorite = state.favoriteOutfitIds.includes(outfit.id);
      return `
      <article class="outfit-row">
        <div class="thumb-wrap">
          ${
            image
              ? `<img class="thumb" src="${image}" alt="Outfit reference" />`
              : `<div class="thumb placeholder">👗</div>`
          }
        </div>
        <div class="outfit-copy">
          <div class="section-head">
            <h3>${outfit.name || "Outfit Entry"}</h3>
            <button type="button" class="ghost outfit-fav" data-outfit-id="${outfit.id}">${isFavorite ? "Saved" : "Save"}</button>
          </div>
          <p class="meta">${show ? `${show.city} | ${formatDate(show.date)}` : "Unknown show"}</p>
        </div>
      </article>
      `;
    })
    .join("");

  const recentLooks = outfitsSorted
    .slice(0, 5)
    .map((outfit) => {
      const image = outfit.photoData || outfit.photoUrl;
      return `
      <div class="mini-look">
        ${image ? `<img class="mini-image" src="${image}" alt="Outfit mini" />` : `<div class="mini-image">👗</div>`}
        <p>${outfit.name || "Look"}</p>
      </div>
      `;
    })
    .join("");

  el.innerHTML = `
    <h2>OUTFIT TRACKER</h2>

    <div class="switcher">
      <button class="switch-pill muted" type="button">Song Tracker</button>
      <button class="switch-pill active" type="button">Outfit Tracker</button>
    </div>

    <div class="card">
      <h3>Last Worn - ${lastWorn ? getShowById(lastWorn.showId)?.city || "Unknown" : "No entry yet"}</h3>
      <div class="mini-track">
        ${recentLooks || '<p class="empty">Add outfits to build this visual timeline.</p>'}
      </div>
    </div>

    <div class="chips">
      <button class="chip ${state.outfitFilters.color === "" ? "active" : ""}" data-color="">All Colors</button>
      ${colorTags
        .map(
          (tag) =>
            `<button class="chip ${state.outfitFilters.color === tag ? "active" : ""}" data-color="${tag}">${tag}</button>`
        )
        .join("")}
    </div>

    <div class="chips">
      <button class="chip ${state.outfitFilters.city === "" ? "active" : ""}" data-city="">All Cities</button>
      ${cityTags
        .map(
          (city) =>
            `<button class="chip ${state.outfitFilters.city === city ? "active" : ""}" data-city="${city}">${city}</button>`
        )
        .join("")}
    </div>

    <form id="outfitForm" class="card form-grid">
      <div class="form-group">
        <label>Show</label>
        <select name="showId" required>${showOptionsMarkup()}</select>
      </div>
      <div class="form-group">
        <label>Outfit name</label>
        <input id="outfitName" name="name" placeholder="e.g. Black sequin vest" required />
      </div>
      <div class="form-group">
        <label>Description</label>
        <textarea name="description" rows="3" placeholder="Key details"></textarea>
      </div>
      <div class="form-group">
        <label>Color tags (comma separated)</label>
        <input name="colors" placeholder="green, coral, silver" />
      </div>
      <div class="form-group">
        <label>Photo URL (optional)</label>
        <input type="url" name="photoUrl" placeholder="https://..." />
      </div>
      <div class="form-group">
        <label>Upload photo (optional)</label>
        <input type="file" name="photoFile" accept="image/*" />
      </div>
      <button class="primary" type="submit">Save outfit</button>
    </form>

    <div class="section-head">
      <h3>Outfits</h3>
      <span class="meta">${filteredOutfits.length} results</span>
    </div>
    <div class="stack">${rowCards || '<p class="empty">No outfits logged yet.</p>'}</div>
  `;

  document.querySelectorAll("[data-color]").forEach((button) => {
    button.onclick = () => {
      state.outfitFilters.color = button.getAttribute("data-color") || "";
      renderOutfitVault();
    };
  });

  document.querySelectorAll("[data-city]").forEach((button) => {
    button.onclick = () => {
      state.outfitFilters.city = button.getAttribute("data-city") || "";
      renderOutfitVault();
    };
  });

  document.querySelectorAll(".outfit-fav").forEach((button) => {
    button.onclick = () => {
      const outfitId = button.getAttribute("data-outfit-id");
      if (!outfitId) return;
      if (!requireAuth("bookmark outfits")) return;

      const isFavorite = state.favoriteOutfitIds.includes(outfitId);
      state.favoriteOutfitIds = isFavorite
        ? state.favoriteOutfitIds.filter((id) => id !== outfitId)
        : [...state.favoriteOutfitIds, outfitId];

      saveScoped("favoriteOutfitIds", state.favoriteOutfitIds);
      renderOutfitVault();
    };
  });

  document.querySelector("#outfitForm").onsubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const file = fd.get("photoFile");

    let photoData = "";
    if (file && file.size > 0) {
      photoData = await readFileAsDataUrl(file);
    }

    state.outfits.push({
      id: crypto.randomUUID(),
      showId: String(fd.get("showId")),
      name: String(fd.get("name")).trim(),
      description: String(fd.get("description")).trim(),
      colors: String(fd.get("colors")).trim(),
      photoUrl: String(fd.get("photoUrl")).trim(),
      photoData,
      createdAt: new Date().toISOString(),
    });

    save("outfits", state.outfits);
    renderOutfitVault();
  };
}

function renderProfile() {
  const el = document.querySelector("#view-profile");
  if (!el) return;

  if (!state.profile) state.profile = defaultProfile();
  const ticketStatus = state.profile.ticketStatus || "none";
  const profileImage = state.profile.photoData || state.profile.photoUrl;

  const goingList = sortedShows()
    .filter((show) => state.goingShowIds.includes(show.id))
    .map((show) => `<li>${getShowNightLabel(show)} - ${formatDate(show.date)}</li>`)
    .join("");

  el.innerHTML = `
    <h2>MY PROFILE</h2>
    <div class="card profile-card">
      <div class="profile-photo-wrap">
        ${
          profileImage
            ? `<img class="profile-photo" src="${profileImage}" alt="Profile photo" />`
            : '<div class="profile-photo placeholder">🪩</div>'
        }
      </div>
      <p class="meta">${state.auth.user?.email || "Guest mode (saved on this device)"}</p>
    </div>

    <form id="profileForm" class="card form-grid">
      <div class="form-group">
        <label>Name</label>
        <input id="profileName" name="displayName" value="${state.profile.displayName || ""}" />
      </div>
      <div class="form-group">
        <label>City</label>
        <input name="city" value="${state.profile.city || ""}" />
      </div>
      <div class="form-group">
        <label>Pronouns</label>
        <input name="pronouns" value="${state.profile.pronouns || ""}" placeholder="she/her, he/him, they/them" />
      </div>
      <div class="form-group">
        <label>Profile photo URL (optional)</label>
        <input type="url" name="photoUrl" value="${state.profile.photoUrl || ""}" placeholder="https://..." />
      </div>
      <div class="form-group">
        <label>Upload profile photo (optional)</label>
        <input type="file" name="photoFile" accept="image/*" />
      </div>
      <div class="form-group profile-check-row">
        <label><input type="checkbox" name="showGoingPublic" ${
          state.profile.showGoingPublic ? "checked" : ""
        } /> Show my upcoming shows on my profile</label>
      </div>
      <div class="form-group">
        <label>Ticket status</label>
        <select name="ticketStatus">
          <option value="none" ${ticketStatus === "none" ? "selected" : ""}>Prefer not to say</option>
          <option value="has" ${ticketStatus === "has" ? "selected" : ""}>I have tickets</option>
          <option value="searching" ${ticketStatus === "searching" ? "selected" : ""}>Searching for tickets</option>
        </select>
      </div>
      <button class="primary" type="submit">Save profile</button>
    </form>

    ${
      state.profile.showGoingPublic
        ? `<div class="card"><h3>My Upcoming Shows</h3><ul class="list">${goingList || "<li>No shows selected yet.</li>"}</ul></div>`
        : ""
    }
    <div class="stack">
      ${state.auth.user ? '<button id="profileSignOut" class="ghost" type="button">Sign out</button>' : ""}
      ${
        !state.auth.user
          ? '<button id="openAuthFromProfile" class="ghost" type="button">Sign in / Sign up to sync profile</button>'
          : ""
      }
    </div>
  `;

  document.querySelector("#profileForm").onsubmit = async (event) => {
    event.preventDefault();
    const fd = new FormData(event.target);
    const file = fd.get("photoFile");
    let photoData = state.profile.photoData || "";

    if (file && file.size > 0) {
      photoData = await readFileAsDataUrl(file);
    }

    state.profile = {
      ...state.profile,
      displayName: String(fd.get("displayName") || "").trim(),
      city: String(fd.get("city") || "").trim(),
      pronouns: String(fd.get("pronouns") || "").trim(),
      photoUrl: String(fd.get("photoUrl") || "").trim(),
      photoData,
      showGoingPublic: Boolean(fd.get("showGoingPublic")),
      ticketStatus: String(fd.get("ticketStatus") || "none"),
    };

    saveScoped("profile", state.profile);
    renderProfile();
  };

  const signOut = document.querySelector("#profileSignOut");
  if (signOut) {
    signOut.onclick = async () => {
      if (!state.auth.client) return;
      await state.auth.client.auth.signOut();
      state.activeTab = "tour";
      state.auth.modalOpen = false;
      state.auth.message = "Signed out.";
      render();
    };
  }

  const openAuth = document.querySelector("#openAuthFromProfile");
  if (openAuth) {
    openAuth.onclick = () => {
      state.auth.modalOpen = true;
      state.auth.message = "Sign in to sync your profile across devices.";
      renderAuthUI();
    };
  }
}

function render() {
  mountTabs();
  showView(state.activeTab);
  renderTourHub();
  renderCalendar();
  renderCountdowns();
  renderSetlists();
  renderLiveWatch();
  renderOutfitVault();
  renderProfile();
  renderAuthUI();
  startCountdownTicker();
}

async function bootstrap() {
  applyUserScopedState();
  await initAuth();
  render();
  await hydrateOfficialFeedMedia();
  render();
}

bootstrap();
