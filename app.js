const DEFAULT_SUPABASE_URL = "";
const DEFAULT_SUPABASE_KEY = "";
const CURRENT_TOUR_NAME = "Together Together";

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
    id: "setlists",
    label: "Songs",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg>',
  },
  {
    id: "live",
    label: "Live",
    icon: '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><rect x="2.5" y="6.5" width="14" height="11" rx="2"></rect><path d="m16.5 10 5-3v10l-5-3z"></path></svg>',
  },
];

const LEGAL_DOCS = {
  terms: {
    title: "Terms of Use",
    body: `
      <p class="meta">Last Updated: March 30, 2026</p>
      <p>Welcome to DISCOTIME. These Terms of Use govern your use of the DISCOTIME mobile application and related services.</p>
      <p>By accessing or using DISCOTIME, you agree to these Terms.</p>
      <h3>1. Description of Service</h3>
      <p>DISCOTIME is an unofficial fan-made application that allows users to track music tour dates, view countdowns to upcoming shows, browse setlists, and participate in fan-based features such as livestream link sharing and show tracking.</p>
      <p>DISCOTIME is not affiliated with, endorsed by, or sponsored by any artist, record label, management company, or tour promoter.</p>
      <h3>2. User Accounts</h3>
      <p>Some features may require creating an account.</p>
      <p>You agree to provide accurate information, keep login credentials secure, and be responsible for activity under your account.</p>
      <p>Users may request deletion of their account at any time within the app settings or by contacting support.</p>
      <h3>3. User Generated Content</h3>
      <p>DISCOTIME may allow users to submit or share content such as livestream links or fan information.</p>
      <p>By submitting content, you agree that the content does not violate any laws, does not infringe copyright or trademarks, and does not contain harmful, abusive, or illegal material.</p>
      <p>DISCOTIME reserves the right to remove any content that violates these Terms.</p>
      <h3>4. Content Moderation</h3>
      <p>Users may report content that is inappropriate or violates these Terms.</p>
      <p>DISCOTIME may review and remove reported content and may suspend or terminate accounts that repeatedly violate the rules.</p>
      <h3>5. Intellectual Property</h3>
      <p>All software, design, and branding related to DISCOTIME are owned by the DISCOTIME developers.</p>
      <p>Artist names, tour names, and music-related references belong to their respective owners and are used only for informational and fan-related purposes.</p>
      <h3>6. Unofficial Fan App Disclaimer</h3>
      <p>DISCOTIME is an independent fan project.</p>
      <p>DISCOTIME is not affiliated with, endorsed by, or associated with any artist, tour organization, or management entity.</p>
      <h3>7. Limitation of Liability</h3>
      <p>DISCOTIME provides information for entertainment and fan utility purposes only.</p>
      <p>We do not guarantee the accuracy of tour dates, setlists, livestream links, or other information.</p>
      <p>Users access and use the app at their own risk.</p>
      <h3>8. Termination</h3>
      <p>We reserve the right to suspend or terminate accounts that violate these Terms or abuse the service.</p>
      <h3>9. Changes to These Terms</h3>
      <p>We may update these Terms from time to time. Continued use of the app after changes means you accept the updated Terms.</p>
      <h3>10. Contact</h3>
      <p>For questions or support: <a href="mailto:support@discotime.app">support@discotime.app</a></p>
    `,
  },
  privacy: {
    title: "Privacy Policy",
    body: `
      <p class="meta">Last Updated: March 30, 2026</p>
      <p>This Privacy Policy explains how DISCOTIME collects and uses information.</p>
      <h3>1. Information We Collect</h3>
      <p>DISCOTIME may collect the following information:</p>
      <p><strong>Account Information</strong><br />email address<br />username or display name</p>
      <p><strong>Usage Data</strong><br />show selections<br />countdown preferences<br />attendance history</p>
      <p><strong>Technical Data</strong><br />device type<br />operating system version<br />crash diagnostics</p>
      <h3>2. How We Use Information</h3>
      <p>We use collected information to operate the app, sync user data across devices, improve features and performance, and maintain security.</p>
      <h3>3. Third-Party Services</h3>
      <p>DISCOTIME may use third-party services such as authentication services, database hosting, analytics or crash reporting.</p>
      <p>These services may process limited technical data necessary for operation.</p>
      <h3>4. User Generated Content</h3>
      <p>Users may voluntarily submit content such as livestream links.</p>
      <p>Submitted content may be visible to other users.</p>
      <p>Users can report inappropriate content through in-app reporting tools.</p>
      <h3>5. Data Retention</h3>
      <p>User data is stored only as long as necessary to provide the service.</p>
      <p>Users may request deletion of their account and associated data at any time.</p>
      <h3>6. Security</h3>
      <p>We take reasonable measures to protect user information but cannot guarantee absolute security.</p>
      <h3>7. Children’s Privacy</h3>
      <p>DISCOTIME is not intended for children under the age of 13.</p>
      <h3>8. Changes to This Policy</h3>
      <p>We may update this Privacy Policy from time to time.</p>
      <h3>9. Contact</h3>
      <p>For privacy-related questions: <a href="mailto:support@discotime.app">support@discotime.app</a></p>
    `,
  },
  delete: {
    title: "Delete Account",
    body: `
      <p>To request account deletion, email <a href="mailto:support@discotime.app?subject=Delete%20My%20DISCOTIME%20Account">support@discotime.app</a> from the email address tied to your DISCOTIME account.</p>
      <p>Include your account email and a short deletion request. We will use that request to remove your account and associated synced data.</p>
      <p class="meta">Signed-in email: <span id="deleteAccountEmailLabel">Not signed in</span></p>
    `,
  },
};

const MASTER_TOUR_DATES = [
  ["2017-09-19", "San Francisco, United States", "Live On Tour"],
  ["2017-09-20", "Los Angeles, United States", "Live On Tour"],
  ["2017-09-25", "Nashville, United States", "Live On Tour"],
  ["2017-09-26", "Chicago, United States", "Live On Tour"],
  ["2017-09-28", "New York City, United States", "Live On Tour"],
  ["2017-09-30", "Boston, United States", "Live On Tour"],
  ["2017-10-01", "Washington, D.C., United States", "Live On Tour"],
  ["2017-10-04", "Toronto, Canada", "Live On Tour"],
  ["2017-10-05", "Upper Darby, United States", "Live On Tour"],
  ["2017-10-08", "Atlanta, United States", "Live On Tour"],
  ["2017-10-10", "Irving, United States", "Live On Tour"],
  ["2017-10-11", "Austin, United States", "Live On Tour"],
  ["2017-10-14", "Phoenix, United States", "Live On Tour"],
  ["2017-10-25", "Paris, France", "Live On Tour"],
  ["2017-10-27", "Cologne, Germany", "Live On Tour"],
  ["2017-10-29", "London, England", "Live On Tour"],
  ["2017-10-30", "London, England", "Live On Tour"],
  ["2017-11-01", "Manchester, England", "Live On Tour"],
  ["2017-11-02", "Glasgow, Scotland", "Live On Tour"],
  ["2017-11-05", "Stockholm, Sweden", "Live On Tour"],
  ["2017-11-07", "Berlin, Germany", "Live On Tour"],
  ["2017-11-08", "Amsterdam, Netherlands", "Live On Tour"],
  ["2017-11-10", "Milan, Italy", "Live On Tour"],
  ["2017-11-19", "Shanghai, China", "Live On Tour"],
  ["2017-11-23", "Singapore, Singapore", "Live On Tour"],
  ["2017-11-26", "Sydney, Australia", "Live On Tour"],
  ["2017-11-30", "Melbourne, Australia", "Live On Tour"],
  ["2017-12-02", "Auckland, New Zealand", "Live On Tour"],
  ["2017-12-07", "Tokyo, Japan", "Live On Tour"],
  ["2017-12-08", "Tokyo, Japan", "Live On Tour"],
  ["2018-03-11", "Basel, Switzerland", "Live On Tour"],
  ["2018-03-13", "Paris, France", "Live On Tour"],
  ["2018-03-14", "Amsterdam, Netherlands", "Live On Tour"],
  ["2018-03-16", "Antwerp, Belgium", "Live On Tour"],
  ["2018-03-18", "Stockholm, Sweden", "Live On Tour"],
  ["2018-03-19", "Copenhagen, Denmark", "Live On Tour"],
  ["2018-03-21", "Oslo, Norway", "Live On Tour"],
  ["2018-03-24", "Oberhausen, Germany", "Live On Tour"],
  ["2018-03-25", "Hamburg, Germany", "Live On Tour"],
  ["2018-03-27", "Munich, Germany", "Live On Tour"],
  ["2018-03-30", "Barcelona, Spain", "Live On Tour"],
  ["2018-03-31", "Madrid, Spain", "Live On Tour"],
  ["2018-04-02", "Milan, Italy", "Live On Tour"],
  ["2018-04-04", "Bologna, Italy", "Live On Tour"],
  ["2018-04-05", "Mannheim, Germany", "Live On Tour"],
  ["2018-04-07", "Birmingham, England", "Live On Tour"],
  ["2018-04-09", "Manchester, England", "Live On Tour"],
  ["2018-04-11", "London, England", "Live On Tour"],
  ["2018-04-12", "London, England", "Live On Tour"],
  ["2018-04-14", "Glasgow, Scotland", "Live On Tour"],
  ["2018-04-16", "Dublin, Ireland", "Live On Tour"],
  ["2018-04-21", "Perth, Australia", "Live On Tour"],
  ["2018-04-24", "Melbourne, Australia", "Live On Tour"],
  ["2018-04-27", "Sydney, Australia", "Live On Tour"],
  ["2018-04-28", "Brisbane, Australia", "Live On Tour"],
  ["2018-05-01", "Pasay, Philippines", "Live On Tour"],
  ["2018-05-03", "Singapore, Singapore", "Live On Tour"],
  ["2018-05-05", "Hong Kong, China", "Live On Tour"],
  ["2018-05-07", "Bangkok, Thailand", "Live On Tour"],
  ["2018-05-10", "Kobe, Japan", "Live On Tour"],
  ["2018-05-12", "Chiba, Japan", "Live On Tour"],
  ["2018-05-23", "Buenos Aires, Argentina", "Live On Tour"],
  ["2018-05-25", "Santiago, Chile", "Live On Tour"],
  ["2018-05-27", "Rio de Janeiro, Brazil", "Live On Tour"],
  ["2018-05-29", "Sao Paulo, Brazil", "Live On Tour"],
  ["2018-06-01", "Mexico City, Mexico", "Live On Tour"],
  ["2018-06-02", "Mexico City, Mexico", "Live On Tour"],
  ["2018-06-05", "Dallas, United States", "Live On Tour"],
  ["2018-06-07", "Houston, United States", "Live On Tour"],
  ["2018-06-09", "Sunrise, United States", "Live On Tour"],
  ["2018-06-11", "Duluth, United States", "Live On Tour"],
  ["2018-06-12", "Nashville, United States", "Live On Tour"],
  ["2018-06-14", "Hershey, United States", "Live On Tour"],
  ["2018-06-15", "Philadelphia, United States", "Live On Tour"],
  ["2018-06-16", "Toronto, Canada", "Live On Tour"],
  ["2018-06-18", "Boston, United States", "Live On Tour"],
  ["2018-06-21", "New York City, United States", "Live On Tour"],
  ["2018-06-22", "New York City, United States", "Live On Tour"],
  ["2018-06-24", "Washington, D.C., United States", "Live On Tour"],
  ["2018-06-26", "Detroit, United States", "Live On Tour"],
  ["2018-06-27", "Indianapolis, United States", "Live On Tour"],
  ["2018-06-30", "Chicago, United States", "Live On Tour"],
  ["2018-07-01", "Saint Paul, United States", "Live On Tour"],
  ["2018-07-03", "Denver, United States", "Live On Tour"],
  ["2018-07-06", "Vancouver, Canada", "Live On Tour"],
  ["2018-07-07", "Seattle, United States", "Live On Tour"],
  ["2018-07-09", "Sacramento, United States", "Live On Tour"],
  ["2018-07-11", "San Jose, United States", "Live On Tour"],
  ["2018-07-13", "Inglewood, United States", "Live On Tour"],
  ["2018-07-14", "Inglewood, United States", "Live On Tour"],
  ["2021-09-04", "Paradise (Las Vegas), United States", "Love On Tour"],
  ["2021-09-07", "Denver, United States", "Love On Tour"],
  ["2021-09-09", "San Antonio, United States", "Love On Tour"],
  ["2021-09-11", "Dallas, United States", "Love On Tour"],
  ["2021-09-15", "St. Louis, United States", "Love On Tour"],
  ["2021-09-17", "Philadelphia, United States", "Love On Tour"],
  ["2021-09-18", "Washington, D.C., United States", "Love On Tour"],
  ["2021-09-20", "Detroit, United States", "Love On Tour"],
  ["2021-09-22", "Saint Paul, United States", "Love On Tour"],
  ["2021-09-24", "Chicago, United States", "Love On Tour"],
  ["2021-09-25", "Chicago, United States", "Love On Tour"],
  ["2021-09-29", "Nashville, United States", "Love On Tour"],
  ["2021-10-01", "Nashville, United States", "Love On Tour"],
  ["2021-10-03", "New York City, United States", "Love On Tour"],
  ["2021-10-04", "New York City, United States", "Love On Tour"],
  ["2021-10-07", "Orlando, United States", "Love On Tour"],
  ["2021-10-08", "Sunrise, United States", "Love On Tour"],
  ["2021-10-10", "Tampa, United States", "Love On Tour"],
  ["2021-10-12", "Raleigh, United States", "Love On Tour"],
  ["2021-10-14", "Pittsburgh, United States", "Love On Tour"],
  ["2021-10-16", "New York City, United States", "Love On Tour"],
  ["2021-10-18", "Cleveland, United States", "Love On Tour"],
  ["2021-10-21", "Uncasville, United States", "Love On Tour"],
  ["2021-10-23", "Uncasville, United States", "Love On Tour"],
  ["2021-10-25", "Boston, United States", "Love On Tour"],
  ["2021-10-27", "Atlanta, United States", "Love On Tour"],
  ["2021-10-28", "Atlanta, United States", "Love On Tour"],
  ["2021-10-30", "New York City, United States", "Love On Tour"],
  ["2021-10-31", "New York City, United States", "Love On Tour"],
  ["2021-11-03", "Milwaukee, United States", "Love On Tour"],
  ["2021-11-07", "Tacoma, United States", "Love On Tour"],
  ["2021-11-08", "Portland, United States", "Love On Tour"],
  ["2021-11-10", "Sacramento, United States", "Love On Tour"],
  ["2021-11-11", "San Jose, United States", "Love On Tour"],
  ["2021-11-13", "Glendale, United States", "Love On Tour"],
  ["2021-11-15", "San Diego, United States", "Love On Tour"],
  ["2021-11-17", "Inglewood, United States", "Love On Tour"],
  ["2021-11-19", "Inglewood, United States", "Love On Tour"],
  ["2021-11-20", "Inglewood, United States", "Love On Tour"],
  ["2021-11-23", "Houston, United States", "Love On Tour"],
  ["2021-11-24", "North Little Rock, United States", "Love On Tour"],
  ["2021-11-28", "Elmont, United States", "Love On Tour"],
  ["2022-06-11", "Glasgow, Scotland", "Love On Tour"],
  ["2022-06-15", "Manchester, England", "Love On Tour"],
  ["2022-06-16", "Manchester, England", "Love On Tour"],
  ["2022-06-18", "London, England", "Love On Tour"],
  ["2022-06-19", "London, England", "Love On Tour"],
  ["2022-06-22", "Dublin, Ireland", "Love On Tour"],
  ["2022-06-26", "Hamburg, Germany", "Love On Tour"],
  ["2022-06-29", "Stockholm, Sweden", "Love On Tour"],
  ["2022-07-01", "Oslo, Norway", "Love On Tour"],
  ["2022-07-05", "Paris, France", "Love On Tour"],
  ["2022-07-07", "Antwerp, Belgium", "Love On Tour"],
  ["2022-07-09", "Amsterdam, Netherlands", "Love On Tour"],
  ["2022-07-11", "Munich, Germany", "Love On Tour"],
  ["2022-07-13", "Budapest, Hungary", "Love On Tour"],
  ["2022-07-15", "Prague, Czech Republic", "Love On Tour"],
  ["2022-07-16", "Vienna, Austria", "Love On Tour"],
  ["2022-07-18", "Krakow, Poland", "Love On Tour"],
  ["2022-07-20", "Berlin, Germany", "Love On Tour"],
  ["2022-07-22", "Cologne, Germany", "Love On Tour"],
  ["2022-07-25", "Bologna, Italy", "Love On Tour"],
  ["2022-07-26", "Turin, Italy", "Love On Tour"],
  ["2022-07-29", "Madrid, Spain", "Love On Tour"],
  ["2022-07-31", "Lisbon, Portugal", "Love On Tour"],
  ["2022-08-15", "Toronto, Canada", "Love On Tour"],
  ["2022-08-16", "Toronto, Canada", "Love On Tour"],
  ["2022-08-20", "New York City, United States", "Love On Tour"],
  ["2022-08-21", "New York City, United States", "Love On Tour"],
  ["2022-08-22", "New York City, United States", "Love On Tour"],
  ["2022-08-26", "New York City, United States", "Love On Tour"],
  ["2022-08-27", "New York City, United States", "Love On Tour"],
  ["2022-08-28", "New York City, United States", "Love On Tour"],
  ["2022-09-01", "New York City, United States", "Love On Tour"],
  ["2022-09-02", "New York City, United States", "Love On Tour"],
  ["2022-09-03", "New York City, United States", "Love On Tour"],
  ["2022-09-07", "New York City, United States", "Love On Tour"],
  ["2022-09-08", "New York City, United States", "Love On Tour"],
  ["2022-09-10", "New York City, United States", "Love On Tour"],
  ["2022-09-14", "New York City, United States", "Love On Tour"],
  ["2022-09-15", "New York City, United States", "Love On Tour"],
  ["2022-09-21", "New York City, United States", "Love On Tour"],
  ["2022-09-25", "Austin, United States", "Love On Tour"],
  ["2022-09-26", "Austin, United States", "Love On Tour"],
  ["2022-09-28", "Austin, United States", "Love On Tour"],
  ["2022-09-29", "Austin, United States", "Love On Tour"],
  ["2022-10-02", "Austin, United States", "Love On Tour"],
  ["2022-10-03", "Austin, United States", "Love On Tour"],
  ["2022-10-08", "Chicago, United States", "Love On Tour"],
  ["2022-10-09", "Chicago, United States", "Love On Tour"],
  ["2022-10-10", "Chicago, United States", "Love On Tour"],
  ["2022-10-13", "Chicago, United States", "Love On Tour"],
  ["2022-10-14", "Chicago, United States", "Love On Tour"],
  ["2022-10-15", "Chicago, United States", "Love On Tour"],
  ["2022-10-23", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-10-24", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-10-26", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-10-28", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-10-29", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-10-31", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-11-02", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-11-09", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-11-11", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-11-12", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-11-14", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-11-15", "Inglewood (Los Angeles Area), United States", "Love On Tour"],
  ["2022-11-20", "Guadalajara, Mexico", "Love On Tour"],
  ["2022-11-22", "Monterrey, Mexico", "Love On Tour"],
  ["2022-11-24", "Mexico City, Mexico", "Love On Tour"],
  ["2022-11-25", "Mexico City, Mexico", "Love On Tour"],
  ["2022-11-27", "Bogota, Colombia", "Love On Tour"],
  ["2022-11-29", "Lima, Peru", "Love On Tour"],
  ["2022-12-01", "Santiago, Chile", "Love On Tour"],
  ["2022-12-03", "Buenos Aires, Argentina", "Love On Tour"],
  ["2022-12-04", "Buenos Aires, Argentina", "Love On Tour"],
  ["2022-12-06", "Sao Paulo, Brazil", "Love On Tour"],
  ["2022-12-08", "Rio de Janeiro, Brazil", "Love On Tour"],
  ["2022-12-10", "Curitiba, Brazil", "Love On Tour"],
  ["2022-12-13", "Sao Paulo, Brazil", "Love On Tour"],
  ["2022-12-14", "Sao Paulo, Brazil", "Love On Tour"],
  ["2023-01-26", "Inglewood, United States", "Love On Tour"],
  ["2023-01-27", "Inglewood, United States", "Love On Tour"],
  ["2023-01-29", "Inglewood, United States", "Love On Tour"],
  ["2023-01-31", "Thousand Palms, United States", "Love On Tour"],
  ["2023-02-01", "Thousand Palms, United States", "Love On Tour"],
  ["2023-02-20", "Perth, Australia", "Love On Tour"],
  ["2023-02-24", "Melbourne, Australia", "Love On Tour"],
  ["2023-02-25", "Melbourne, Australia", "Love On Tour"],
  ["2023-02-28", "Gold Coast, Australia", "Love On Tour"],
  ["2023-03-03", "Sydney, Australia", "Love On Tour"],
  ["2023-03-04", "Sydney, Australia", "Love On Tour"],
  ["2023-03-07", "Auckland, New Zealand", "Love On Tour"],
  ["2023-03-11", "Bangkok, Thailand", "Love On Tour"],
  ["2023-03-14", "Bocaue, Philippines", "Love On Tour"],
  ["2023-03-17", "Singapore, Singapore", "Love On Tour"],
  ["2023-03-20", "Seoul, South Korea", "Love On Tour"],
  ["2023-03-24", "Tokyo, Japan", "Love On Tour"],
  ["2023-03-25", "Tokyo, Japan", "Love On Tour"],
  ["2023-05-13", "Horsens, Denmark", "Love On Tour"],
  ["2023-05-14", "Horsens, Denmark", "Love On Tour"],
  ["2023-05-17", "Munich, Germany", "Love On Tour"],
  ["2023-05-18", "Munich, Germany", "Love On Tour"],
  ["2023-05-22", "Coventry, England", "Love On Tour"],
  ["2023-05-23", "Coventry, England", "Love On Tour"],
  ["2023-05-26", "Edinburgh, Scotland", "Love On Tour"],
  ["2023-05-27", "Edinburgh, Scotland", "Love On Tour"],
  ["2023-06-01", "Saint-Denis, France", "Love On Tour"],
  ["2023-06-02", "Saint-Denis, France", "Love On Tour"],
  ["2023-06-04", "Amsterdam, Netherlands", "Love On Tour"],
  ["2023-06-05", "Amsterdam, Netherlands", "Love On Tour"],
  ["2023-06-06", "Amsterdam, Netherlands", "Love On Tour"],
  ["2023-06-10", "Slane, Ireland", "Love On Tour"],
  ["2023-06-13", "London, England", "Love On Tour"],
  ["2023-06-14", "London, England", "Love On Tour"],
  ["2023-06-16", "London, England", "Love On Tour"],
  ["2023-06-17", "London, England", "Love On Tour"],
  ["2023-06-20", "Cardiff, Wales", "Love On Tour"],
  ["2023-06-21", "Cardiff, Wales", "Love On Tour"],
  ["2023-06-24", "Werchter, Belgium", "Love On Tour"],
  ["2023-06-27", "Dusseldorf, Germany", "Love On Tour"],
  ["2023-06-28", "Dusseldorf, Germany", "Love On Tour"],
  ["2023-07-02", "Warsaw, Poland", "Love On Tour"],
  ["2023-07-05", "Frankfurt, Germany", "Love On Tour"],
  ["2023-07-06", "Frankfurt, Germany", "Love On Tour"],
  ["2023-07-08", "Vienna, Austria", "Love On Tour"],
  ["2023-07-12", "Barcelona, Spain", "Love On Tour"],
  ["2023-07-14", "Madrid, Spain", "Love On Tour"],
  ["2023-07-18", "Lisbon, Portugal", "Love On Tour"],
  ["2023-07-22", "Reggio Emilia, Italy", "Love On Tour"],
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

const OFFICIAL_UPDATES_FALLBACK = [
  {
    id: "update-hs-1",
    source: "Harry Styles",
    title: "Together Together tour announcement",
    url: "https://www.instagram.com/p/DUWLA5IElTz/?hl=en",
    publishedAt: "2026-03-01T18:00:00Z",
    isPinned: true,
  },
  {
    id: "update-hshq-1",
    source: "HSHQ",
    title: "Official livestream guidance and fan reminders",
    url: "https://www.instagram.com/p/DT3FvecD0PV/?hl=en",
    publishedAt: "2026-03-08T18:00:00Z",
    isPinned: false,
  },
  {
    id: "update-hs-2",
    source: "Harry Styles",
    title: "New York run poster",
    url: "https://www.instagram.com/p/DT1PiGbElcT/?hl=en",
    publishedAt: "2026-03-12T18:00:00Z",
    isPinned: false,
  },
];

const POLL_TYPE_META = {
  song: { label: "Song Prediction", empty: "No song prediction polls for this show yet." },
  surprise_song: { label: "Surprise Song", empty: "No surprise song polls for this show yet." },
  surprise_guest: { label: "Surprise Guest", empty: "No surprise guest polls for this show yet." },
  outfit: { label: "Outfit Prediction", empty: "No outfit prediction polls for this show yet." },
};

const SETLIST_LIBRARY = {
  "2017-10-29": [
    "Only Angel",
    "Woman",
    "Ever Since New York",
    "Two Ghosts",
    "Carolina",
    "Stockholm Syndrome",
    "Just A Little Bit Of Your Heart",
    "Medicine",
    "Sign of the Times",
    "Kiwi",
  ],
  "2018-06-21": [
    "Only Angel",
    "Woman",
    "Meet Me in the Hallway",
    "Carolina",
    "Two Ghosts",
    "Sweet Creature",
    "Stockholm Syndrome",
    "Medicine",
    "If I Could Fly",
    "Sign of the Times",
    "Kiwi",
  ],
  "2021-11-17": [
    "Golden",
    "Adore You",
    "Golden",
    "Daylight",
    "Cherry",
    "Falling",
    "She",
    "Canyon Moon",
    "Watermelon Sugar",
    "Kiwi",
  ],
  "2022-08-20": [
    "Music for a Sushi Restaurant",
    "Golden",
    "Adore You",
    "Keep Driving",
    "Daylight",
    "Matilda",
    "Satellite",
    "Cinema",
    "Treat People With Kindness",
    "Watermelon Sugar",
    "Kiwi",
  ],
  "2023-06-13": [
    "Music for a Sushi Restaurant",
    "Golden",
    "Adore You",
    "Keep Driving",
    "Daylight",
    "Matilda",
    "Satellite",
    "Cinema",
    "Love of My Life",
    "Watermelon Sugar",
    "Kiwi",
    "SURPRISE: Stockholm Syndrome",
  ],
  "2026-08-26": [
    "As It Was",
    "Music for a Sushi Restaurant",
    "Late Night Talking",
    "Keep Driving",
    "Daylight",
    "Matilda",
    "Satellite",
    "Cinema",
    "Treat People With Kindness",
    "Watermelon Sugar",
  ],
};

const masterShows = MASTER_TOUR_DATES.map(([date, city, venue]) => ({
  id: crypto.randomUUID(),
  supabaseId: "",
  city,
  venue,
  date,
  status: "upcoming",
  setlist: [],
}));

let initialShowsError = "";

function urlForcesOnboarding() {
  try {
    return new URLSearchParams(window.location.search).get("onboarding") === "1";
  } catch {
    return false;
  }
}

const state = {
  shows: hydrateShows(),
  streams: load("streams", []),
  outfits: load("outfits", []),
  goingShowIds: [],
  attendedShowIds: [],
  favoriteOutfitIds: [],
  favoriteSetlistShowIds: [],
  appearances: [],
  profile: null,
  setlistArchiveTour: "Love On Tour",
  outfitFilters: { color: "", city: "" },
  calendarMonth: "",
  feedMedia: load("officialFeedMedia", {}),
  profileEditing: false,
  settingsLegalDoc: "terms",
  upcomingExpandedRuns: {},
  activeTab: "tour",
  calendarViewMode: "calendar",
  menuOpen: false,
  showInfo: {
    open: false,
    showId: "",
  },
  tonight: {
    open: false,
  },
  report: {
    open: false,
    streamId: "",
    message: "",
  },
  contact: {
    open: false,
    message: "",
    mode: "support",
  },
  predictions: {
    polls: [],
    votes: [],
  },
  officialUpdates: load("officialUpdates", OFFICIAL_UPDATES_FALLBACK),
  onboarding: {
    firstOpen: urlForcesOnboarding() || !load("hasSeenWelcome", false),
    step: 0,
  },
  loading: {
    app: true,
    auth: true,
    feed: false,
    polls: false,
    updates: false,
  },
  errors: {
    app: "",
    auth: "",
    feed: "",
    shows: initialShowsError,
    live: "",
    polls: "",
    updates: "",
  },
  notices: {
    live: "",
  },
  auth: {
    client: null,
    user: null,
    session: null,
    configured: false,
    mode: "signin",
    modalOpen: false,
    message: "Sign in to save your shows, attendance, and favorites.",
    rememberMe: load("rememberMe", true),
    passwordVisible: false,
  },
};

let remoteSyncToken = 0;
let liveNoticeTimer = null;

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
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    state.errors.app = "Your device storage is unavailable. Some changes may not be saved.";
    return false;
  }
}

function unique(values) {
  return Array.from(new Set((values || []).filter(Boolean)));
}

function isValidShowTuple(tuple) {
  if (!Array.isArray(tuple) || tuple.length < 3) return false;
  const [date, city, venue] = tuple;
  return (
    /^\d{4}-\d{2}-\d{2}$/.test(String(date || "")) &&
    String(city || "").trim().length > 0 &&
    String(venue || "").trim().length > 0
  );
}

function buildMasterShows() {
  return MASTER_TOUR_DATES.filter(isValidShowTuple).map(([date, city, venue]) => ({
    id: crypto.randomUUID(),
    supabaseId: "",
    city,
    venue,
    date,
    startsAt: `${date}T19:00:00`,
    status: "upcoming",
    setlist: [...(SETLIST_LIBRARY[date] || [])],
    showLabel: "",
    surpriseSong: "",
    outfitNotes: "",
    isActiveTonight: false,
  }));
}

function hydrateShows() {
  try {
    const saved = load("shows", []).filter(
      (show) => show && typeof show === "object" && isValidShowTuple([show.date, show.city, show.venue])
    );
    const merged = [...saved];
    const seen = new Set(saved.map(showKey));

    buildMasterShows().forEach((show) => {
      const key = showKey(show);
      if (!seen.has(key)) {
        merged.push(show);
        seen.add(key);
      }
    });

    save("shows", merged);
    initialShowsError = "";
    return merged;
  } catch {
    initialShowsError = "Show data could not be loaded. Try refreshing the app.";
    return buildMasterShows();
  }
}

function buildFallbackShows() {
  const saved = load("shows", []).filter(
    (show) => show && typeof show === "object" && isValidShowTuple([show.date, show.city, show.venue])
  );
  const merged = [...saved];
  const seen = new Set(saved.map(showKey));

  buildMasterShows().forEach((show) => {
    const key = showKey(show);
    if (!seen.has(key)) {
      merged.push(show);
      seen.add(key);
    }
  });

  merged.forEach((show) => {
    if ((!Array.isArray(show.setlist) || !show.setlist.length) && SETLIST_LIBRARY[show.date]) {
      show.setlist = [...SETLIST_LIBRARY[show.date]];
    }
  });

  return merged;
}

function canUseSupabase() {
  return Boolean(state.auth.client);
}

function normalizeSupabaseShow(row) {
  if (!row || typeof row !== "object") return null;

  const dateSource = row.starts_at || row.date || row.show_date || "";
  const date = String(dateSource).slice(0, 10);
  const city = String(row.city || "").trim();
  const country = String(row.country || "").trim();
  const venue = String(row.venue || row.venue_name || "").trim();

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || !city || !venue) return null;

  const normalizedCity = country ? `${city}, ${country}` : city;

  return {
    id: String(row.id || `${date}-${normalizedCity}-${venue}`),
    supabaseId: row.id == null ? "" : String(row.id),
    city: normalizedCity,
    venue,
    date,
    startsAt: String(row.starts_at || `${date}T19:00:00`),
    status: String(row.status || "upcoming"),
    setlist: Array.isArray(row.setlist) ? row.setlist : [],
    tourName: String(row.tour_name || getTourNameFromDate(date)),
    isActiveTonight: Boolean(row.is_active_tonight),
    showLabel: String(row.show_label || "").trim(),
    surpriseSong: String(row.surprise_song || "").trim(),
    outfitNotes: String(row.outfit_notes || "").trim(),
  };
}

function remapShowReferenceIds(ids, previousShows, nextShows) {
  const previousKeysById = new Map(previousShows.map((show) => [show.id, showKey(show)]));
  const nextIdsByKey = new Map(nextShows.map((show) => [showKey(show), show.id]));
  const nextIds = new Set(nextShows.map((show) => show.id));

  return unique(
    ids.map((id) => {
      if (nextIds.has(id)) return id;
      const key = previousKeysById.get(id);
      return key ? nextIdsByKey.get(key) || "" : "";
    })
  );
}

function remapLocalShowReferences(previousShows, nextShows) {
  const previousKeysById = new Map(previousShows.map((show) => [show.id, showKey(show)]));
  const nextIdsByKey = new Map(nextShows.map((show) => [showKey(show), show.id]));
  const nextIds = new Set(nextShows.map((show) => show.id));

  state.goingShowIds = remapShowReferenceIds(state.goingShowIds, previousShows, nextShows);
  state.attendedShowIds = remapShowReferenceIds(state.attendedShowIds, previousShows, nextShows);
  state.favoriteSetlistShowIds = remapShowReferenceIds(state.favoriteSetlistShowIds, previousShows, nextShows);

  state.streams = state.streams
    .map((stream) => {
      if (!stream || typeof stream !== "object") return null;
      if (nextIds.has(stream.showId)) return stream;
      const key = previousKeysById.get(stream.showId);
      const remappedShowId = key ? nextIdsByKey.get(key) || "" : "";
      return remappedShowId ? { ...stream, showId: remappedShowId } : null;
    })
    .filter(Boolean);

  saveScoped("goingShowIds", state.goingShowIds);
  saveScoped("attendedShowIds", state.attendedShowIds);
  saveScoped("favoriteSetlistShowIds", state.favoriteSetlistShowIds);
  save("streams", state.streams);
}

function getShowBySupabaseId(supabaseId) {
  const id = String(supabaseId || "");
  if (!id) return null;
  return (
    state.shows.find((show) => String(show.supabaseId || "") === id) ||
    state.shows.find((show) => String(show.id) === id) ||
    null
  );
}

function getSupabaseShowId(showId) {
  const show = getShowById(showId);
  return String(show?.supabaseId || show?.id || "");
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

function formatShortDate(dateString) {
  return new Date(`${dateString}T12:00:00`).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
  });
}

function renderInfoCard(message, tone = "muted") {
  const toneClass =
    tone === "error" ? "state-card-error" : tone === "success" ? "state-card-success" : "";
  return `<div class="card state-card ${toneClass}"><p class="meta">${message}</p></div>`;
}

function showLiveNotice(message) {
  state.notices.live = message;
  if (liveNoticeTimer) clearTimeout(liveNoticeTimer);
  liveNoticeTimer = setTimeout(() => {
    state.notices.live = "";
    if (state.activeTab === "live") renderLiveWatch();
  }, 3500);
}

function dismissWelcomeExperience() {
  state.onboarding.firstOpen = false;
  state.onboarding.step = 0;
  save("hasSeenWelcome", true);
}

const ONBOARDING_STEPS = [
  {
    title: "Track every disco",
    body: "Follow upcoming shows, save the nights you're going, and keep your countdowns in one place.",
    accent: "countdown",
    icon: `
      <svg class="onboarding-illustration" viewBox="0 0 120 120" aria-hidden="true">
        <rect x="18" y="22" width="84" height="76" rx="14"></rect>
        <path d="M36 14v20"></path>
        <path d="M84 14v20"></path>
        <path d="M18 44h84"></path>
        <path d="M36 62h18"></path>
        <path d="M36 78h30"></path>
        <circle cx="79" cy="74" r="12"></circle>
        <path d="M79 67v8l5 3"></path>
      </svg>
    `,
  },
  {
    title: "Watch live from home",
    body: "See tonight's show status, approved livestream links, and live fan activity as the show unfolds.",
    accent: "live",
    icon: `
      <svg class="onboarding-illustration" viewBox="0 0 120 120" aria-hidden="true">
        <rect x="18" y="28" width="64" height="52" rx="12"></rect>
        <path d="m82 44 20-10v40L82 64"></path>
        <circle cx="34" cy="92" r="4"></circle>
        <circle cx="52" cy="92" r="4"></circle>
        <circle cx="70" cy="92" r="4"></circle>
        <path d="M30 54h40"></path>
      </svg>
    `,
  },
  {
    title: "Keep your fan history",
    body: "Save attended shows, browse setlists, and build a profile that stays with you across devices.",
    accent: "history",
    icon: `
      <svg class="onboarding-illustration" viewBox="0 0 120 120" aria-hidden="true">
        <path d="M28 98V28h48l16 16v54z"></path>
        <path d="M76 28v16h16"></path>
        <path d="M40 58h40"></path>
        <path d="M40 72h40"></path>
        <path d="M40 86h26"></path>
      </svg>
    `,
  },
];

function renderLaunchOverlay() {
  const overlay = document.querySelector("#launchOverlay");
  if (!overlay) return;
  const showLoading = state.loading.app;
  overlay.classList.toggle("hidden", !showLoading);

  if (showLoading) {
    overlay.innerHTML = `
      <div class="launch-card">
        <div class="launch-brand">
          <div class="launch-logo-mark"><span class="logo-emoji">🪩</span></div>
          <h2><span class="logo-text">DISCOTIME</span></h2>
        </div>
      </div>
    `;
    return;
  }
  overlay.innerHTML = "";
}

function renderOnboardingOverlay() {
  const overlay = document.querySelector("#onboardingOverlay");
  if (!overlay) return;

  const shouldShow = !state.loading.app && state.onboarding.firstOpen;
  overlay.classList.toggle("hidden", !shouldShow);

  if (!shouldShow) {
    overlay.innerHTML = "";
    return;
  }

  const step = Math.min(state.onboarding.step || 0, ONBOARDING_STEPS.length);
  const isFinalStep = step >= ONBOARDING_STEPS.length;
  const content = ONBOARDING_STEPS[Math.min(step, ONBOARDING_STEPS.length - 1)];
  const progress = ONBOARDING_STEPS.map((_, index) => `<span class="onboarding-dot ${index <= step ? "active" : ""}"></span>`).join("");

  overlay.innerHTML = isFinalStep
    ? `
      <section class="onboarding-card onboarding-auth-entry">
        <div class="onboarding-brand">
          <div class="onboarding-mark"><span class="logo-emoji">🪩</span></div>
          <h2 class="logo-text">DISCOTIME</h2>
        </div>
        <div class="onboarding-copy">
          <h3>Start how you want</h3>
          <p>Sign in to sync your profile and shows, or continue in guest mode and use the app right away.</p>
        </div>
        <div class="onboarding-actions">
          <button id="onboardingGoogle" class="ghost onboarding-action" type="button">Continue with Google</button>
          <button id="onboardingApple" class="ghost onboarding-action" type="button">Continue with Apple</button>
          <button id="onboardingGuest" class="ghost onboarding-action" type="button">Continue as guest</button>
        </div>
        <p class="onboarding-inline">Already have an account? <button id="onboardingSignIn" class="auth-inline-link" type="button">Sign in</button></p>
        <p class="onboarding-inline">Need an account? <button id="onboardingSignUp" class="auth-inline-link" type="button">Sign up</button></p>
      </section>
    `
    : `
      <section class="onboarding-card onboarding-story onboarding-${content.accent}">
        <div class="onboarding-main">
          <div class="onboarding-visual">
            <div class="onboarding-visual-frame">
              ${content.icon}
            </div>
          </div>
          <div class="onboarding-copy">
            <p class="onboarding-kicker">DISCOTIME</p>
            <h3>${content.title}</h3>
            <p>${content.body}</p>
          </div>
        </div>
        <div class="onboarding-progress">${progress}</div>
        <div class="onboarding-footer">
          <button id="onboardingSkip" class="ghost onboarding-secondary" type="button">Skip</button>
          <button id="onboardingNext" class="primary onboarding-primary" type="button">Next</button>
        </div>
      </section>
    `;

  if (isFinalStep) {
    document.querySelector("#onboardingGoogle")?.addEventListener("click", () => {
      dismissWelcomeExperience();
      state.auth.modalOpen = true;
      state.auth.mode = "signin";
      render();
      onOAuth("google");
    });
    document.querySelector("#onboardingApple")?.addEventListener("click", () => {
      dismissWelcomeExperience();
      state.auth.modalOpen = true;
      state.auth.mode = "signin";
      render();
      onOAuth("apple");
    });
    document.querySelector("#onboardingGuest")?.addEventListener("click", () => {
      dismissWelcomeExperience();
      render();
    });
    document.querySelector("#onboardingSignIn")?.addEventListener("click", () => {
      dismissWelcomeExperience();
      state.auth.mode = "signin";
      state.auth.modalOpen = true;
      state.auth.message = "Welcome back. Sign in to pick up where you left off.";
      render();
    });
    document.querySelector("#onboardingSignUp")?.addEventListener("click", () => {
      dismissWelcomeExperience();
      state.auth.mode = "signup";
      state.auth.modalOpen = true;
      state.auth.message = "Create an account to sync your profile, shows, and livestreams.";
      render();
    });
    return;
  }

  document.querySelector("#onboardingSkip")?.addEventListener("click", () => {
    state.onboarding.step = ONBOARDING_STEPS.length;
    renderOnboardingOverlay();
  });
  document.querySelector("#onboardingNext")?.addEventListener("click", () => {
    state.onboarding.step = Math.min((state.onboarding.step || 0) + 1, ONBOARDING_STEPS.length);
    renderOnboardingOverlay();
  });
}

async function signOutUser() {
  if (!state.auth.client) return;

  try {
    await state.auth.client.auth.signOut();
    state.auth.message = "Signed out.";
    state.auth.modalOpen = false;
    state.errors.auth = "";
    state.activeTab = "tour";
  } catch {
    state.auth.message = "Sign out failed. Check your connection and try again.";
    state.errors.auth = "Account services are temporarily unavailable.";
  }

  render();
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

function showOptionsMarkup(shows = sortedShows()) {
  return shows
    .map((show) => `<option value="${show.id}">${abbreviateCity(show.city)} - ${formatDate(show.date)}</option>`)
    .join("");
}

function allTourNames() {
  return Array.from(new Set(sortedShows().map((show) => show.tourName || getTourNameFromDate(show.date))));
}

function parseSetlistEntry(entry) {
  const value = String(entry || "").trim();
  if (value.startsWith("SURPRISE:")) {
    return { kind: "surprise", title: value.replace(/^SURPRISE:\s*/, "") };
  }
  if (value.startsWith("NEW:")) {
    return { kind: "new", title: value.replace(/^NEW:\s*/, "") };
  }
  return { kind: "regular", title: value };
}

function shouldHideSetlistEntry(entry) {
  return /kiwi\s*x?\s*3/i.test(String(entry || ""));
}

function getNextShow(preferGoing = true) {
  const today = new Date().toISOString().slice(0, 10);
  const shows = sortedShows();

  if (preferGoing && state.goingShowIds.length) {
    const goingShows = shows.filter((show) => state.goingShowIds.includes(show.id));
    return goingShows.find((show) => show.date >= today) || goingShows[0] || null;
  }

  return shows.find((show) => show.date >= today) || shows[0] || null;
}

function getShowStartDate(show) {
  if (!show) return null;
  const value = show.startsAt || `${show.date}T19:00:00`;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? new Date(`${show.date}T19:00:00`) : date;
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
  const nextShow = getNextShow(false);
  return getMonthId(nextShow?.date || sortedShows()[0]?.date || "2026-01-01");
}

function initializeCalendarMonth() {
  if (state.calendarMonth) return;
  state.calendarMonth = getNextShowMonthId();
}

function getShowNightLabel(show) {
  if (!show) return "";
  if (show.showLabel) return show.showLabel;
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

function getTonightState() {
  const shows = sortedShows();
  if (!shows.length) return { tone: "neutral", title: "No shows loaded", subtitle: "Tour dates will appear here.", show: null };

  const now = new Date();
  const activeShow =
    shows.find((show) => show.isActiveTonight) ||
    shows.find((show) => ["tonight", "live", "complete"].includes(String(show.status || "").toLowerCase()));

  if (activeShow) {
    const status = String(activeShow.status || "").toLowerCase();
    if (status === "live") {
      return {
        tone: "live",
        title: "LIVE NOW",
        subtitle: `${getShowNightLabel(activeShow)} • ${activeShow.venue}`,
        show: activeShow,
      };
    }
    if (status === "complete") {
      return {
        tone: "complete",
        title: "SHOW COMPLETE",
        subtitle: `${getShowNightLabel(activeShow)} • ${activeShow.venue}`,
        show: activeShow,
      };
    }
    return {
      tone: "tonight",
      title: "TONIGHT",
      subtitle: `${getShowNightLabel(activeShow)} • ${activeShow.venue}`,
      show: activeShow,
    };
  }

  const nextShow = shows.find((show) => getShowStartDate(show) >= now) || shows[0];
  return {
    tone: "neutral",
    title: "NEXT UP",
    subtitle: `${getShowNightLabel(nextShow)} • ${formatDate(nextShow.date)}`,
    show: nextShow,
  };
}

function getUpcomingRuns(limit = 6) {
  const today = new Date().toISOString().slice(0, 10);
  const source = sortedShows().filter((show) => show.date >= today);
  const shows = source.length ? source : sortedShows();
  const runs = [];

  shows.forEach((show) => {
    const previous = runs[runs.length - 1];
    const runKey = `${show.city}|${show.venue}`.toLowerCase();

    if (previous && previous.key === runKey) {
      previous.shows.push(show);
      return;
    }

    runs.push({
      key: runKey,
      city: show.city,
      venue: show.venue,
      shows: [show],
    });
  });

  return runs.slice(0, limit);
}

function getUpcomingSelectableShows() {
  const today = new Date().toISOString().slice(0, 10);
  const upcoming = sortedShows().filter((show) => show.date >= today);
  return upcoming.length ? upcoming : sortedShows();
}

function getUpcomingSupabaseShows() {
  return getUpcomingSelectableShows().filter((show) => Boolean(getSupabaseShowId(show.id)));
}

function getTourNameFromDate(dateString) {
  const year = Number(dateString.slice(0, 4));
  if (year <= 2018) return "Live On Tour";
  if (year <= 2024) return "Love On Tour";
  return "Together Together";
}

async function hydrateOfficialFeedMedia() {
  state.loading.updates = true;
  state.errors.updates = "";
  state.officialUpdates = OFFICIAL_UPDATES_FALLBACK.slice();
  if (!canUseSupabase()) {
    state.loading.updates = false;
    return;
  }

  try {
    const { data, error } = await state.auth.client
      .from("official_updates")
      .select("id, source, title, url, published_at, is_pinned, is_active")
      .eq("is_active", true)
      .order("is_pinned", { ascending: false })
      .order("published_at", { ascending: false });
    if (error) throw error;
    if (Array.isArray(data) && data.length) {
      state.officialUpdates = data.map((row) => ({
        id: String(row.id),
        source: String(row.source || "Official"),
        title: String(row.title || ""),
        url: String(row.url || ""),
        publishedAt: String(row.published_at || ""),
        isPinned: Boolean(row.is_pinned),
      }));
    }
  } catch (error) {
    state.errors.updates = `Official updates are unavailable right now. ${error?.message || ""}`.trim();
  } finally {
    state.loading.updates = false;
  }
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
  state.appearances = loadScoped("appearances");
  state.profile = { ...defaultProfile(), ...loadScoped("profile", {}) };
}

function clearUserScopedState() {
  applyUserScopedState();
}

function getAuthDisplayName(user) {
  return String(
    user?.user_metadata?.display_name ||
      user?.user_metadata?.full_name ||
      user?.user_metadata?.name ||
      ""
  ).trim();
}

function buildProfileRow(user, profileState = state.profile || defaultProfile()) {
  return {
    id: user.id,
    email: user.email || null,
    display_name: String(profileState.displayName || getAuthDisplayName(user) || "").trim() || null,
    city: String(profileState.city || "").trim() || null,
    pronouns: String(profileState.pronouns || "").trim() || null,
    avatar_url: String(profileState.photoUrl || "").trim() || null,
    ticket_status: String(profileState.ticketStatus || "none"),
    show_going_public: Boolean(profileState.showGoingPublic),
    updated_at: new Date().toISOString(),
  };
}

function normalizeRemoteProfile(row) {
  if (!row || typeof row !== "object") return defaultProfile();
  return {
    ...defaultProfile(),
    displayName: String(row.display_name || "").trim(),
    city: String(row.city || "").trim(),
    pronouns: String(row.pronouns || "").trim(),
    showGoingPublic: Boolean(row.show_going_public),
    ticketStatus: String(row.ticket_status || "none"),
    photoUrl: String(row.avatar_url || "").trim(),
    photoData: "",
  };
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

async function ensureProfileRow() {
  if (!canUseSupabase() || !state.auth.user) return false;

  try {
    const payload = buildProfileRow(state.auth.user, state.profile);
    const { error } = await state.auth.client.from("profiles").upsert(payload, { onConflict: "id" });
    if (error) throw error;
    return true;
  } catch (error) {
    console.error("[DISCOTIME] profile bootstrap failed", error);
    return false;
  }
}

async function hydrateProfileFromSupabase() {
  if (!canUseSupabase() || !state.auth.user) return false;

  try {
    const { data, error } = await state.auth.client
      .from("profiles")
      .select("id, email, display_name, city, pronouns, avatar_url, ticket_status, show_going_public")
      .eq("id", state.auth.user.id)
      .single();

    if (error) throw error;

    const localProfile = { ...defaultProfile(), ...loadScoped("profile", {}) };
    state.profile = {
      ...localProfile,
      ...normalizeRemoteProfile(data),
      photoData: localProfile.photoData || "",
    };
    saveScoped("profile", state.profile);
    return true;
  } catch (error) {
    console.error("[DISCOTIME] profile hydrate failed", error);
    return false;
  }
}

async function syncProfileToSupabase() {
  if (!canUseSupabase() || !state.auth.user) return true;

  try {
    const payload = buildProfileRow(state.auth.user, state.profile);
    const { error } = await state.auth.client.from("profiles").upsert(payload, { onConflict: "id" });
    if (error) throw error;
    state.errors.auth = "";
    return true;
  } catch (error) {
    console.error("[DISCOTIME] profile save failed", error);
    state.errors.auth = "Profile changes were saved on this device, but could not sync to your account.";
    return false;
  }
}

function normalizeSupabaseLivestream(row) {
  if (!row || typeof row !== "object") return null;
  const remoteShowId = String(row.show_id || "");
  const mappedShow = getShowBySupabaseId(remoteShowId);

  return {
    id: String(row.id || crypto.randomUUID()),
    showId: mappedShow?.id || remoteShowId,
    remoteShowId,
    platform: String(row.platform || ""),
    handle: String(row.handle || "").replace(/^@/, ""),
    url: String(row.url || ""),
    status: String(row.status || "approved"),
    isApproved: Boolean(row.is_approved ?? String(row.status || "").toLowerCase() === "approved"),
    isAdminAdded: Boolean(row.is_admin_added),
    isPinned: Boolean(row.is_pinned),
    createdAt: String(row.created_at || new Date().toISOString()),
    source: "remote",
  };
}

function normalizePredictionPoll(row) {
  if (!row || typeof row !== "object") return null;
  return {
    id: String(row.id || ""),
    showId: String(row.show_id || ""),
    title: String(row.title || ""),
    status: String(row.status || "open"),
    type: String(row.poll_type || row.type || "song"),
    closesAt: row.closes_at ? String(row.closes_at) : "",
    createdAt: row.created_at ? String(row.created_at) : "",
    options: Array.isArray(row.prediction_options)
      ? row.prediction_options
          .map((option) => ({
            id: String(option.id || ""),
            label: String(option.label || ""),
            sortOrder: Number(option.sort_order || 0),
          }))
          .sort((a, b) => a.sortOrder - b.sortOrder)
      : [],
  };
}

function getPollsForShow(showId) {
  return state.predictions.polls
    .filter((poll) => poll.showId === showId)
    .sort((a, b) => {
      const openOrder = Number(a.status === "open") - Number(b.status === "open");
      if (openOrder) return openOrder;
      return String(b.createdAt || "").localeCompare(String(a.createdAt || ""));
    });
}

function getPollVotes(pollId) {
  return state.predictions.votes.filter((vote) => vote.pollId === pollId);
}

function getPollUserVote(pollId) {
  if (!state.auth.user) return null;
  return getPollVotes(pollId).find((vote) => vote.userId === state.auth.user.id) || null;
}

function getPollOptionStats(poll) {
  const votes = getPollVotes(poll.id);
  const totalVotes = votes.length;
  return poll.options.map((option) => {
    const count = votes.filter((vote) => vote.optionId === option.id).length;
    const percentage = totalVotes ? Math.round((count / totalVotes) * 100) : 0;
    return {
      ...option,
      count,
      percentage,
    };
  });
}

async function hydratePredictionPollsFromSupabase(syncToken) {
  if (!canUseSupabase()) return false;

  state.loading.polls = true;
  state.errors.polls = "";
  try {
    const { data: pollRows, error: pollError } = await state.auth.client
      .from("prediction_polls")
      .select("id, show_id, title, status, closes_at, created_at, poll_type, prediction_options(id, label, sort_order)")
      .order("created_at", { ascending: false });

    if (syncToken !== remoteSyncToken) return false;
    if (pollError) throw pollError;

    const polls = (pollRows || []).map(normalizePredictionPoll).filter(Boolean);
    const pollIds = polls.map((poll) => poll.id).filter(Boolean);

    let votes = [];
    if (pollIds.length) {
      const { data: voteRows, error: voteError } = await state.auth.client
        .from("prediction_votes")
        .select("poll_id, option_id, user_id")
        .in("poll_id", pollIds);

      if (syncToken !== remoteSyncToken) return false;
      if (voteError) throw voteError;

      votes = (voteRows || []).map((row) => ({
        pollId: String(row.poll_id || ""),
        optionId: String(row.option_id || ""),
        userId: String(row.user_id || ""),
      }));
    }

    state.predictions.polls = polls;
    state.predictions.votes = votes;
    return true;
  } catch {
    if (syncToken === remoteSyncToken) {
      state.errors.polls = "Predictions are unavailable right now.";
    }
    return false;
  } finally {
    if (syncToken === remoteSyncToken) {
      state.loading.polls = false;
    }
  }
}

async function hydrateShowsFromSupabase(syncToken) {
  if (!canUseSupabase()) return false;

  try {
    const previousShows = state.shows.slice();
    const { data, error } = await state.auth.client
      .from("shows")
      .select("id, starts_at, city, country, venue, tour_name, show_label, status, is_active_tonight, surprise_song, outfit_notes")
      .order("starts_at", { ascending: true });

    if (syncToken !== remoteSyncToken) return false;
    if (error) throw error;

    const remoteShows = (data || []).map(normalizeSupabaseShow).filter(Boolean);
    if (!remoteShows.length) return false;

    const fallbackShows = buildFallbackShows();
    const fallbackByKey = new Map(fallbackShows.map((show) => [showKey(show), show]));
    const mergedShows = fallbackShows.slice();
    const mergedIndexByKey = new Map(mergedShows.map((show, index) => [showKey(show), index]));

    remoteShows.forEach((remoteShow) => {
      const key = showKey(remoteShow);
      const baseShow = fallbackByKey.get(key);

      if (baseShow) {
        const mergedShow = {
          ...baseShow,
          ...remoteShow,
          id: remoteShow.id,
          setlist: Array.isArray(remoteShow.setlist) && remoteShow.setlist.length ? remoteShow.setlist : baseShow.setlist,
        };
        const existingIndex = mergedIndexByKey.get(key);
        if (typeof existingIndex === "number") {
          mergedShows[existingIndex] = mergedShow;
        }
      } else {
        mergedIndexByKey.set(key, mergedShows.length);
        mergedShows.push(remoteShow);
      }
    });

    remapLocalShowReferences(previousShows, mergedShows);
    state.shows = mergedShows;
    save("shows", mergedShows);
    state.errors.shows = "";

    if (!mergedShows.some((show) => getMonthId(show.date) === state.calendarMonth)) {
      state.calendarMonth = getNextShowMonthId();
    }
    return true;
  } catch {
    if (syncToken === remoteSyncToken) {
      state.errors.shows = "Live show data is unavailable. Showing saved tour dates.";
    }
    return false;
  }
}

async function hydrateUserShowStatusesFromSupabase(syncToken) {
  if (!canUseSupabase() || !state.auth.user) return false;

  const userId = state.auth.user.id;

  try {
    const { data, error } = await state.auth.client
      .from("user_show_status")
      .select("show_id, status")
      .eq("user_id", userId);

    if (syncToken !== remoteSyncToken || userId !== state.auth.user?.id) return false;
    if (error) throw error;

    const goingShowIds = [];
    const attendedShowIds = [];

    (data || []).forEach((row) => {
      const status = String(row.status || "").toLowerCase();
      const showId = getShowBySupabaseId(row.show_id)?.id || "";
      if (status === "going" || status === "both") goingShowIds.push(showId);
      if (status === "attended" || status === "both") attendedShowIds.push(showId);
    });

    state.goingShowIds = unique(goingShowIds).filter((showId) => Boolean(getShowById(showId)));
    state.attendedShowIds = unique(attendedShowIds).filter((showId) => Boolean(getShowById(showId)));
    saveScoped("goingShowIds", state.goingShowIds);
    saveScoped("attendedShowIds", state.attendedShowIds);
    return true;
  } catch {
    if (syncToken === remoteSyncToken) {
      state.errors.app = "Show status sync is temporarily unavailable. Using saved device data.";
    }
    return false;
  }
}

async function hydrateLivestreamsFromSupabase(syncToken) {
  if (!canUseSupabase()) return false;

  try {
    let data;
    let error;

    ({ data, error } = await state.auth.client
      .from("livestream_links")
      .select("id, show_id, platform, handle, url, status, is_approved, is_admin_added, is_pinned, created_at")
      .eq("is_approved", true)
      .order("is_pinned", { ascending: false })
      .order("is_admin_added", { ascending: false })
      .order("created_at", { ascending: false }));

    if (error) {
      console.error("[DISCOTIME] livestream read failed on moderation schema, retrying legacy schema", error);
      ({ data, error } = await state.auth.client
        .from("livestream_links")
        .select("id, show_id, platform, handle, url, status, created_at")
        .eq("status", "approved")
        .order("created_at", { ascending: false }));
    }

    if (syncToken !== remoteSyncToken) return false;
    if (error) throw error;

    const remoteStreams = (data || []).map(normalizeSupabaseLivestream).filter(Boolean);

    if (state.auth.user) {
      state.streams = remoteStreams;
    } else {
      const localGuestStreams = load("streams", []).filter((stream) => stream && stream.source !== "remote");
      const merged = [...remoteStreams];
      localGuestStreams.forEach((stream) => {
        const exists = merged.some(
          (item) => item.url === stream.url && item.handle === stream.handle && item.showId === stream.showId
        );
        if (!exists) merged.push(stream);
      });
      state.streams = merged;
    }

    save("streams", state.streams);
    state.errors.live = "";
    return true;
  } catch (error) {
    console.error("[DISCOTIME] livestream hydration failed", error);
    if (syncToken === remoteSyncToken) {
      state.errors.live = `Live streams are unavailable right now. Showing saved links. ${error?.message || ""}`.trim();
    }
    return false;
  }
}

async function syncRemoteData() {
  if (!canUseSupabase()) return;

  const syncToken = ++remoteSyncToken;
  state.loading.app = true;
  state.errors.app = "";
  render();

  try {
    await hydrateShowsFromSupabase(syncToken);
    await hydrateLivestreamsFromSupabase(syncToken);
    await hydratePredictionPollsFromSupabase(syncToken);
    if (state.auth.user) {
      await hydrateUserShowStatusesFromSupabase(syncToken);
    }
  } finally {
    if (syncToken === remoteSyncToken) {
      state.loading.app = false;
      render();
    }
  }
}

function persistLocalShowStatus(status, showId, enabled) {
  const key = status === "attended" ? "attendedShowIds" : "goingShowIds";
  const current = status === "attended" ? state.attendedShowIds : state.goingShowIds;
  const next = enabled ? unique([...current, showId]) : current.filter((id) => id !== showId);

  if (status === "attended") {
    state.attendedShowIds = next;
  } else {
    state.goingShowIds = next;
  }

  saveScoped(key, next);
}

async function persistShowStatus(status, showId, enabled) {
  persistLocalShowStatus(status, showId, enabled);

  if (!state.auth.user || !canUseSupabase()) return true;

  const remoteShowId = getSupabaseShowId(showId);
  if (!remoteShowId) {
    persistLocalShowStatus(status, showId, !enabled);
    state.errors.app = "This show is not synced to the live database yet. Your local state was restored.";
    return false;
  }

  try {
    console.log("[DISCOTIME] syncing user_show_status payload", {
      user_id: state.auth.user.id,
      show_id: remoteShowId,
      status,
      enabled,
    });
    const { error: deleteError } = await state.auth.client
      .from("user_show_status")
      .delete()
      .eq("user_id", state.auth.user.id)
      .eq("show_id", remoteShowId)
      .eq("status", status);

    if (deleteError) throw deleteError;

    if (enabled) {
      const { error: insertError } = await state.auth.client.from("user_show_status").insert({
        user_id: state.auth.user.id,
        show_id: remoteShowId,
        status,
      });
      if (insertError) throw insertError;
    }

    state.errors.app = "";
    return true;
  } catch {
    persistLocalShowStatus(status, showId, !enabled);
    state.errors.app = "We couldn't sync that change right now. Your local state was restored.";
    return false;
  }
}

async function applySession(session) {
  state.auth.session = session;
  state.auth.user = session?.user || null;

  if (state.auth.user) {
    applyUserScopedState();
    await ensureProfileRow();
    await hydrateProfileFromSupabase();
  } else {
    clearUserScopedState();
  }

  render();
  await syncRemoteData();
}

async function initAuth() {
  const hasSupabase = Boolean(window.supabase && typeof window.supabase.createClient === "function");
  const { url, anonKey } = getSupabaseConfig();

  if (!hasSupabase || !url || !anonKey) {
    state.auth.configured = false;
    state.loading.auth = false;
    state.errors.auth = "";
    return;
  }

  try {
    state.auth.client = window.supabase.createClient(url, anonKey);
    state.auth.configured = true;

    const {
      data: { session },
    } = await state.auth.client.auth.getSession();

    await applySession(session);

    state.auth.client.auth.onAuthStateChange((_event, nextSession) => {
      void applySession(nextSession);
    });
    state.errors.auth = "";
  } catch {
    state.auth.configured = false;
    state.auth.client = null;
    state.errors.auth = "Account services are unavailable. You can continue in guest mode.";
  } finally {
    state.loading.auth = false;
  }
}

async function onEmailAuthSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = String(form.querySelector("#authEmail").value).trim();
  const password = String(form.querySelector("#authPassword").value);

  if (!state.auth.configured || !state.auth.client) {
    state.auth.message = "Sign-in is unavailable right now. You can continue in guest mode.";
    renderAuthUI();
    return;
  }

  state.loading.auth = true;
  state.auth.message = state.auth.mode === "signup" ? "Creating account..." : "Signing in...";
  renderAuthUI();

  try {
    if (state.auth.mode === "signup") {
      const {
        data: { session, user },
        error,
      } = await state.auth.client.auth.signUp({ email, password });
      if (error) {
        state.auth.message = `Sign up error: ${error.message}`;
      } else if (session && user) {
        state.auth.message = "Account created. You're signed in.";
        state.auth.modalOpen = false;
      } else if (user) {
        state.auth.mode = "signin";
        state.auth.message = "Check your email to confirm your account, then sign in.";
      } else {
        state.auth.message = "Account created. Finish setup by signing in.";
      }
    } else {
      const { error } = await state.auth.client.auth.signInWithPassword({ email, password });
      state.auth.message = error ? `Sign in error: ${error.message}` : "Signed in.";
      if (!error) state.auth.modalOpen = false;
    }
  } catch {
    state.auth.message = "Authentication failed. Check your connection and try again.";
  } finally {
    state.loading.auth = false;
  }

  renderAuthUI();
}

async function onPasswordReset() {
  const emailInput = document.querySelector("#authEmail");
  const email = String(emailInput?.value || "").trim();

  if (!email) {
    state.auth.message = "Enter your email first, then tap Forgot password.";
    renderAuthUI();
    return;
  }

  if (!state.auth.configured || !state.auth.client) {
    state.auth.message = "Password reset is unavailable right now. You can continue in guest mode.";
    renderAuthUI();
    return;
  }

  state.loading.auth = true;
  state.auth.message = "Sending password reset email...";
  renderAuthUI();

  try {
    const { error } = await state.auth.client.auth.resetPasswordForEmail(email, {
      redirectTo: window.location.href,
    });
    state.auth.message = error ? `Password reset error: ${error.message}` : "Password reset email sent.";
  } catch {
    state.auth.message = "Password reset failed. Check your connection and try again.";
  } finally {
    state.loading.auth = false;
    renderAuthUI();
  }
}

async function onOAuth(provider) {
  if (!state.auth.configured || !state.auth.client) {
    state.auth.message = "Sign-in is unavailable right now. You can continue in guest mode.";
    renderAuthUI();
    return;
  }

  state.loading.auth = true;
  state.auth.message = `Starting ${provider} sign in...`;
  renderAuthUI();

  try {
    const { error } = await state.auth.client.auth.signInWithOAuth({
      provider,
      options: { redirectTo: window.location.href },
    });

    if (error) {
      state.auth.message = `${provider} sign in error: ${error.message}`;
    }
  } catch {
    state.auth.message = `${provider} sign in failed. Check your connection and try again.`;
  } finally {
    state.loading.auth = false;
    renderAuthUI();
  }
}

function renderAuthUI() {
  const profileButton = document.querySelector("#profileButton");
  const menuButton = document.querySelector("#menuButton");
  const quickMenu = document.querySelector("#quickMenu");
  const drawerBackdrop = document.querySelector("#drawerBackdrop");
  const closeDrawerButton = document.querySelector("#closeDrawerButton");
  const drawerAuthAction = document.querySelector("#drawerAuthAction");
  const modal = document.querySelector("#authModal");
  const message = document.querySelector("#authMessage");
  const heading = document.querySelector("#authHeading");
  const actions = document.querySelector("#authActions");
  const modeSignIn = document.querySelector("#modeSignIn");
  const modeSignUp = document.querySelector("#modeSignUp");
  const forgotPasswordButton = document.querySelector("#forgotPasswordButton");
  const rememberMeToggle = document.querySelector("#rememberMeToggle");
  const passwordInput = document.querySelector("#authPassword");
  const passwordToggle = document.querySelector("#togglePasswordVisibility");

  if (!profileButton || !modal || !message || !heading || !actions) return;

  profileButton.onclick = () => {
    state.menuOpen = false;
    state.activeTab = "profile";
    render();
  };
  if (menuButton) {
    menuButton.setAttribute("aria-expanded", state.menuOpen ? "true" : "false");
    menuButton.onclick = () => {
      state.menuOpen = !state.menuOpen;
      render();
    };
  }
  if (quickMenu) {
    quickMenu.classList.toggle("open", state.menuOpen);
    quickMenu.querySelectorAll("[data-menu-tab]").forEach((button) => {
      button.onclick = () => {
        const tabId = button.getAttribute("data-menu-tab");
        const calendarView = button.getAttribute("data-calendar-view");
        if (!tabId) return;
        if (tabId === "calendar") {
          state.calendarMonth = getNextShowMonthId();
          if (calendarView === "countdown" || calendarView === "calendar") {
            state.calendarViewMode = calendarView;
          }
        }
        state.menuOpen = false;
        state.activeTab = tabId;
        render();
      };
    });
  }
  if (closeDrawerButton) {
    closeDrawerButton.onclick = () => {
      state.menuOpen = false;
      render();
    };
  }
  if (drawerAuthAction) {
    if (state.auth.user) {
      drawerAuthAction.textContent = "Sign out";
      drawerAuthAction.onclick = async () => {
        state.menuOpen = false;
        await signOutUser();
      };
    } else {
      drawerAuthAction.textContent = "Sign in / Sign up";
      drawerAuthAction.onclick = () => {
        state.menuOpen = false;
        state.activeTab = "profile";
        state.auth.modalOpen = true;
        state.auth.message = "Sign in to sync your profile across devices.";
        render();
      };
    }
  }
  if (drawerBackdrop) {
    drawerBackdrop.classList.toggle("open", state.menuOpen);
    drawerBackdrop.onclick = () => {
      state.menuOpen = false;
      render();
    };
  }
  document.onkeydown = (event) => {
    if (event.key === "Escape" && state.menuOpen) {
      state.menuOpen = false;
      render();
    }
  };

  modal.classList.toggle("hidden", !state.auth.modalOpen);
  const defaultMessage =
    state.auth.mode === "signup"
      ? "Create an account to sync your profile, shows, and livestreams."
      : "Welcome back. Sign in to pick up where you left off.";
  const resolvedMessage = state.errors.auth || state.auth.message || defaultMessage;
  let messageTone = "info";
  if (state.errors.auth || /error|failed|unavailable/i.test(resolvedMessage)) {
    messageTone = "error";
  } else if (/signed in|account created|check your email|password reset email sent/i.test(resolvedMessage)) {
    messageTone = "success";
  } else if (state.loading.auth || /creating account|signing in|sending password reset|starting /i.test(resolvedMessage)) {
    messageTone = "loading";
  }
  heading.textContent = state.auth.mode === "signup" ? "Create account" : "Sign in";
  message.textContent = resolvedMessage;
  message.className = `meta auth-message auth-message-${messageTone}`;
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
  document.querySelector("#forgotPasswordButton").onclick = () => onPasswordReset();
  document.querySelector("#emailAuthForm").onsubmit = onEmailAuthSubmit;
  document
    .querySelectorAll("#googleAuth, #appleAuth, #forgotPasswordButton, #togglePasswordVisibility, #rememberMeToggle, #emailAuthForm input, #emailAuthSubmit")
    .forEach((node) => {
      if ("disabled" in node) node.disabled = state.loading.auth;
    });
  const emailSubmit = document.querySelector("#emailAuthSubmit");
  if (emailSubmit) {
    emailSubmit.textContent = state.loading.auth ? "Please wait..." : state.auth.mode === "signup" ? "Create account" : "Sign in";
  }
  if (forgotPasswordButton) {
    forgotPasswordButton.classList.toggle("hidden", state.auth.mode !== "signin");
  }
  if (rememberMeToggle) {
    rememberMeToggle.checked = Boolean(state.auth.rememberMe);
    rememberMeToggle.parentElement?.classList.toggle("hidden", state.auth.mode !== "signin");
    rememberMeToggle.onchange = () => {
      state.auth.rememberMe = Boolean(rememberMeToggle.checked);
      save("rememberMe", state.auth.rememberMe);
    };
  }
  if (passwordInput) {
    passwordInput.type = state.auth.passwordVisible ? "text" : "password";
  }
  if (passwordToggle) {
    passwordToggle.setAttribute("aria-label", state.auth.passwordVisible ? "Hide password" : "Show password");
    passwordToggle.innerHTML = state.auth.passwordVisible
      ? '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M3 3 21 21"></path><path d="M10.6 10.7a3 3 0 0 0 4.2 4.2"></path><path d="M9.9 5.2A11.4 11.4 0 0 1 12 5c6.5 0 10 7 10 7a18.8 18.8 0 0 1-4 4.9"></path><path d="M6.2 6.3C3.6 8 2 12 2 12s3.5 7 10 7a10.7 10.7 0 0 0 3-.4"></path></svg>'
      : '<svg class="mono-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z"></path><circle cx="12" cy="12" r="3"></circle></svg>';
    passwordToggle.onclick = () => {
      state.auth.passwordVisible = !state.auth.passwordVisible;
      renderAuthUI();
    };
  }
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
      state.menuOpen = false;
      if (tab.id === "calendar") {
        state.calendarMonth = getNextShowMonthId();
        state.calendarViewMode = "calendar";
      }
      state.activeTab = tab.id;
      render();
    };
    nav.append(button);
  });
}

function showView(viewId) {
  const safeViewId =
    tabConfig.some((tab) => tab.id === viewId) || ["profile", "settings"].includes(viewId) ? viewId : "tour";
  if (viewId !== "tour" && state.showInfo.open) {
    state.showInfo.open = false;
    state.showInfo.showId = "";
  }
  document.querySelectorAll(".view").forEach((node) => node.classList.add("hidden"));
  const target = document.querySelector(`#view-${safeViewId}`);
  if (!target) {
    state.activeTab = "tour";
    document.querySelector("#view-tour")?.classList.remove("hidden");
    return;
  }
  target.classList.remove("hidden");
}

function renderTourHub() {
  const el = document.querySelector("#view-tour");
  const shows = sortedShows();
  const nextShow = getNextShow();
  const upcomingRuns = getUpcomingRuns();
  const tonightState = getTonightState();
  const homeStateCards = [
    state.loading.app ? renderInfoCard("Loading your shows...") : "",
    state.errors.app ? renderInfoCard(state.errors.app, "error") : "",
    state.errors.shows ? renderInfoCard(state.errors.shows, "error") : "",
  ]
    .filter(Boolean)
    .join("");

  const cards = upcomingRuns
    .map((run) => {
      const shortCity = run.city.split(",")[0].trim();
      const isExpanded = Boolean(state.upcomingExpandedRuns[run.key]);
      const selectedCount = run.shows.filter((show) => state.goingShowIds.includes(show.id)).length;
      const nightsLabel = `${run.shows.length} night${run.shows.length === 1 ? "" : "s"}`;
      const nightRows = run.shows
        .map((show) => {
          const isGoing = state.goingShowIds.includes(show.id);
          return `
            <article class="upcoming-night ${isGoing ? "active" : ""}">
              <button
                type="button"
                class="upcoming-night-info"
                data-show-info="${show.id}"
                aria-label="Open ${getShowNightLabel(show)} show info"
              >
                <span class="upcoming-pill-date">${formatShortDate(show.date)}</span>
                <span class="upcoming-pill-city">${getShowNightLabel(show)}</span>
              </button>
              <button
                type="button"
                class="upcoming-pill-status-btn"
                data-show-toggle="${show.id}"
                aria-label="${isGoing ? "Marked going" : "Mark as going"}"
              >${isGoing ? "Going" : "I'm going"}</button>
            </article>
          `;
        })
        .join("");

      return `
      <article class="upcoming-run ${selectedCount ? "active" : ""}">
        <button
          type="button"
          class="upcoming-run-summary"
          data-run-toggle="${run.key}"
          aria-expanded="${isExpanded ? "true" : "false"}"
          aria-label="${isExpanded ? "Collapse" : "Expand"} ${shortCity} run"
        >
          <div class="upcoming-run-copy">
            <span class="upcoming-pill-city">${shortCity} • ${nightsLabel}</span>
            <span class="upcoming-run-meta">${formatShortDate(run.shows[0].date)} to ${formatShortDate(run.shows[run.shows.length - 1].date)}</span>
          </div>
          <span class="upcoming-run-badge">${selectedCount ? `${selectedCount} going` : "View nights"}</span>
        </button>
        ${isExpanded ? `<div class="upcoming-run-nights">${nightRows}</div>` : ""}
      </article>
      `;
    })
    .join("");

  el.innerHTML = `
    <button type="button" id="openTonightHub" class="tonight-banner tonight-banner-${tonightState.tone}">
      <div class="tonight-banner-copy">
        <p class="tonight-banner-title">${tonightState.title}</p>
        <p class="tonight-banner-meta">${tonightState.subtitle}</p>
      </div>
      <span class="tonight-banner-cta">Open</span>
    </button>
    <div class="hero-card">
      <button id="openCountdowns" type="button" class="hero-link">MY NEXT SHOW</button>
      <p id="countdownValue" class="hero-count">${nextShow ? "Loading..." : "No upcoming show"}</p>
      <p id="countdownDetail" class="hero-note">${nextShow ? getShowNightLabel(nextShow) : "Add your first show"}</p>
      <p id="countdownMeta" class="meta">${nextShow ? formatDate(nextShow.date) : ""}</p>
    </div>

    ${homeStateCards}
    <h2>UPCOMING DISCOS</h2>
    <div class="upcoming-pill-list">${cards || renderInfoCard("No shows are available yet.")}</div>
    <div class="more-discos-wrap">
      <button id="openCalendarFromHome" type="button" class="more-discos-pill">MORE DISCOS</button>
    </div>
    <h2>OFFICIAL UPDATES</h2>
    <div class="stack">
      ${state.loading.updates ? renderInfoCard("Loading official updates...") : ""}
      ${state.errors.updates ? renderInfoCard(state.errors.updates, "error") : ""}
      ${(state.officialUpdates || [])
        .map(
          (item) => `
            <article class="card official-update-card">
              <div class="feed-head">
                <div>
                  <h3>${item.title}</h3>
                  <p class="meta">${item.source}${item.publishedAt ? ` · ${new Date(item.publishedAt).toLocaleDateString()}` : ""}</p>
                </div>
                <span class="badge ${item.isPinned ? "pending" : "info"}">${item.isPinned ? "Pinned" : "Official"}</span>
              </div>
              <a class="feed-link" target="_blank" rel="noreferrer" href="${item.url}">Open link</a>
            </article>
          `
        )
        .join("") || renderInfoCard("No official updates yet.")}
    </div>
  `;

  document.querySelector("#openTonightHub").onclick = () => {
    state.tonight.open = true;
    renderTonightModal();
  };
  document.querySelector("#openCountdowns").onclick = () => {
    state.menuOpen = false;
    state.calendarMonth = getNextShowMonthId();
    state.calendarViewMode = "countdown";
    state.activeTab = "calendar";
    render();
  };
  document.querySelector("#openCalendarFromHome").onclick = () => {
    state.menuOpen = false;
    state.calendarMonth = getNextShowMonthId();
    state.calendarViewMode = "calendar";
    state.activeTab = "calendar";
    render();
  };

  document.querySelectorAll("[data-run-toggle]").forEach((button) => {
    button.onclick = () => {
      const runKey = button.getAttribute("data-run-toggle");
      if (!runKey) return;
      state.upcomingExpandedRuns[runKey] = !state.upcomingExpandedRuns[runKey];
      renderTourHub();
    };
  });
  document.querySelectorAll(".upcoming-night-info").forEach((button) => {
    button.onclick = () => {
      const showId = button.getAttribute("data-show-info");
      if (!showId) return;
      state.showInfo.open = true;
      state.showInfo.showId = showId;
      renderShowInfoModal();
    };
  });
  document.querySelectorAll(".upcoming-pill-status-btn").forEach((button) => {
    button.onclick = async () => {
      const showId = button.getAttribute("data-show-toggle");
      if (!showId) return;
      if (!requireAuth("save shows you're going to")) return;

      const isGoing = state.goingShowIds.includes(showId);
      await persistShowStatus("going", showId, !isGoing);
      renderTourHub();
      updateCountdownDisplay();
      updateCountdownListDisplays();
    };
  });
}

function renderShowInfoModal() {
  const modal = document.querySelector("#showInfoModal");
  const body = document.querySelector("#showInfoBody");
  const closeButton = document.querySelector("#closeShowInfoModal");
  if (!modal || !body || !closeButton) return;

  const show = getShowById(state.showInfo.showId);
  modal.classList.toggle("hidden", !state.showInfo.open || !show);

  if (!state.showInfo.open || !show) {
    body.innerHTML = "";
    return;
  }

  body.innerHTML = `
    <div class="card">
      <h3>${getShowNightLabel(show)}</h3>
      <p class="meta">${formatDate(show.date)}</p>
      <p class="meta">${abbreviateCity(show.city)}</p>
      <p class="meta">${show.venue}</p>
    </div>
  `;

  closeButton.onclick = () => {
    state.showInfo.open = false;
    state.showInfo.showId = "";
    renderShowInfoModal();
  };

  modal.onclick = (event) => {
    if (event.target !== modal) return;
    state.showInfo.open = false;
    state.showInfo.showId = "";
    renderShowInfoModal();
  };

}

function renderTonightModal() {
  const modal = document.querySelector("#tonightModal");
  const body = document.querySelector("#tonightModalBody");
  const closeButton = document.querySelector("#closeTonightModal");
  if (!modal || !body || !closeButton) return;

  const tonightState = getTonightState();
  const show = tonightState.show;
  modal.classList.toggle("hidden", !state.tonight.open);

  if (!state.tonight.open) {
    body.innerHTML = "";
    return;
  }

  const tonightStreams = state.streams
    .filter((stream) => stream.showId === show?.id)
    .sort((a, b) => {
      const pinned = Number(Boolean(b.isPinned)) - Number(Boolean(a.isPinned));
      if (pinned) return pinned;
      const admin = Number(Boolean(b.isAdminAdded)) - Number(Boolean(a.isAdminAdded));
      if (admin) return admin;
      return String(b.createdAt).localeCompare(String(a.createdAt));
    });
  const showPolls = show ? getPollsForShow(show.id) : [];
  const pollsByType = showPolls.reduce((acc, poll) => {
    const type = POLL_TYPE_META[poll.type] ? poll.type : "song";
    if (!acc[type]) acc[type] = [];
    acc[type].push(poll);
    return acc;
  }, {});
  const going = show ? state.goingShowIds.includes(show.id) : false;

  body.innerHTML = `
    <article class="card tonight-hub-card tonight-hub-${tonightState.tone}">
      <div class="badges">
        <span class="badge ${tonightState.tone === "live" ? "ok" : tonightState.tone === "tonight" ? "danger" : tonightState.tone === "complete" ? "pending" : "info"}">${tonightState.title}</span>
        ${show?.tourName ? `<span class="badge info">${show.tourName}</span>` : ""}
        ${show?.status ? `<span class="badge info">${show.status}</span>` : ""}
      </div>
      <h3>${show ? getShowNightLabel(show) : "No active show"}</h3>
      <p class="meta">${show ? `${formatDate(show.date)} • ${abbreviateCity(show.city)}` : tonightState.subtitle}</p>
      ${show ? `<p class="meta">${show.venue}</p>` : ""}
      ${
        show
          ? `<div class="countdown-actions">
              <button type="button" class="ghost going-toggle ${going ? "active" : ""}" data-tonight-going="${show.id}">${going ? "Going" : "I'm going"}</button>
            </div>`
          : ""
      }
      ${show?.surpriseSong ? `<p><strong>Surprise song:</strong> ${show.surpriseSong}</p>` : ""}
      ${show?.outfitNotes ? `<p><strong>Outfit notes:</strong> ${show.outfitNotes}</p>` : ""}
    </article>
    <div class="stack">
      <h3>PREDICTIONS</h3>
      ${
        state.loading.polls
          ? renderInfoCard("Loading prediction poll...")
          : state.errors.polls
            ? renderInfoCard(state.errors.polls, "error")
            : showPolls.length
              ? Object.keys(pollsByType)
                  .map((typeKey) => {
                    const typeMeta = POLL_TYPE_META[typeKey] || POLL_TYPE_META.song;
                    const cards = pollsByType[typeKey].map((poll) => {
                    const optionStats = getPollOptionStats(poll);
                    const totalVotes = optionStats.reduce((sum, option) => sum + option.count, 0);
                    const userVote = getPollUserVote(poll.id);
                    const pollIsOpen = poll.status === "open";
                    const optionsMarkup = optionStats
                      .map(
                        (option) => `
                          <div class="prediction-option ${userVote?.optionId === option.id ? "active" : ""}">
                            <div class="prediction-option-copy">
                              <p>${option.label}</p>
                              <span class="meta">${option.count} vote${option.count === 1 ? "" : "s"} • ${option.percentage}%</span>
                            </div>
                            ${
                              pollIsOpen && state.auth.user && !userVote
                                ? `<button type="button" class="ghost prediction-vote-btn" data-poll-id="${poll.id}" data-option-id="${option.id}">Vote</button>`
                                : userVote?.optionId === option.id
                                  ? '<span class="badge ok">Your vote</span>'
                                  : '<span class="badge info">Results</span>'
                            }
                          </div>
                        `
                      )
                      .join("");

                    return `
                      <article class="card prediction-card">
                        <div class="section-head">
                          <h3>${poll.title}</h3>
                          <div class="badges">
                            <span class="badge ${pollIsOpen ? "pending" : "info"}">${pollIsOpen ? "Open" : "Closed"}</span>
                            <span class="badge info">${typeMeta.label}</span>
                          </div>
                        </div>
                        <p class="meta">${totalVotes} total vote${totalVotes === 1 ? "" : "s"}</p>
                        <div class="prediction-options">${optionsMarkup}</div>
                        ${
                          !state.auth.user && pollIsOpen
                            ? '<p class="meta">Sign in to vote. Guests can view live results only.</p>'
                            : ""
                        }
                      </article>
                    `;
                  }).join("");
                    return `<div class="prediction-group"><p class="meta prediction-group-label">${typeMeta.label}</p>${cards}</div>`;
                  })
                  .join("")
              : renderInfoCard("No prediction polls for this show yet.")
      }
    </div>
    <div class="stack">
      <h3>Approved Livestreams</h3>
      ${
        tonightStreams.length
          ? tonightStreams
              .map(
                (stream) => `
                  <article class="card">
                    <div class="section-head">
                      <h3>@${stream.handle}</h3>
                      <div class="badges">
                        ${stream.isPinned ? '<span class="badge pending">Pinned</span>' : ""}
                        ${stream.isAdminAdded ? '<span class="badge info">Admin</span>' : ""}
                        <span class="badge info">${stream.platform}</span>
                      </div>
                    </div>
                    <p class="meta"><a target="_blank" rel="noreferrer" href="${stream.url}">${stream.url}</a></p>
                  </article>
                `
              )
              .join("")
          : renderInfoCard("No approved livestreams for this show yet.")
      }
    </div>
  `;

  closeButton.onclick = () => {
    state.tonight.open = false;
    renderTonightModal();
  };
  modal.onclick = (event) => {
    if (event.target !== modal) return;
    state.tonight.open = false;
    renderTonightModal();
  };

  document.querySelectorAll("[data-tonight-going]").forEach((button) => {
    button.onclick = async () => {
      const showId = button.getAttribute("data-tonight-going");
      if (!showId) return;
      if (!requireAuth("save shows you're going to")) return;
      const isGoing = state.goingShowIds.includes(showId);
      await persistShowStatus("going", showId, !isGoing);
      renderTonightModal();
      renderTourHub();
      updateCountdownDisplay();
      updateCountdownListDisplays();
    };
  });

  document.querySelectorAll(".prediction-vote-btn").forEach((button) => {
    button.onclick = async () => {
      if (!state.auth.user || !canUseSupabase()) {
        state.auth.modalOpen = true;
        state.auth.message = "Sign in to vote in predictions.";
        renderAuthUI();
        return;
      }

      const pollId = String(button.getAttribute("data-poll-id") || "");
      const optionId = String(button.getAttribute("data-option-id") || "");
      if (!pollId || !optionId || getPollUserVote(pollId)) return;

      try {
        const { error } = await state.auth.client.from("prediction_votes").insert({
          poll_id: pollId,
          option_id: optionId,
          user_id: state.auth.user.id,
        });
        if (error) throw error;
        await hydratePredictionPollsFromSupabase(remoteSyncToken);
      } catch {
        state.errors.polls = "Your vote could not be saved. Try again in a moment.";
      }

      renderTonightModal();
    };
  });
}

function renderReportModal() {
  const modal = document.querySelector("#reportModal");
  const form = document.querySelector("#reportForm");
  const closeButton = document.querySelector("#closeReportModal");
  if (!modal || !form || !closeButton) return;

  modal.classList.toggle("hidden", !state.report.open);

  closeButton.onclick = () => {
    state.report.open = false;
    state.report.streamId = "";
    renderReportModal();
  };

  modal.onclick = (event) => {
    if (event.target !== modal) return;
    state.report.open = false;
    state.report.streamId = "";
    renderReportModal();
  };

  form.onsubmit = async (event) => {
    event.preventDefault();
    if (!state.report.streamId || !canUseSupabase()) {
      state.errors.live = "Reporting is unavailable right now.";
      state.report.open = false;
      render();
      return;
    }

    const fd = new FormData(form);
    try {
      const { error } = await state.auth.client.from("reports").insert({
        target_type: "livestream",
        target_id: state.report.streamId,
        reason: String(fd.get("reason") || "").trim(),
        details: String(fd.get("details") || "").trim(),
        submitted_by: state.auth.user?.id || null,
        status: "open",
      });
      if (error) throw error;
      state.errors.live = "";
      state.report.open = false;
      state.report.streamId = "";
      form.reset();
    } catch (error) {
      console.error("[DISCOTIME] report submission failed", error);
      state.errors.live = `Your report could not be submitted right now. ${error?.message || "Try again in a moment."}`;
      state.report.open = false;
      state.report.streamId = "";
    }
    render();
  };
}

function renderContactModal() {
  const modal = document.querySelector("#contactModal");
  const form = document.querySelector("#contactForm");
  const closeButton = document.querySelector("#closeContactModal");
  const title = document.querySelector("#contactModalTitle");
  const emailInput = document.querySelector("#contactEmail");
  const subjectInput = document.querySelector("#contactSubject");
  const messageInput = document.querySelector("#contactMessage");
  if (!modal || !form || !closeButton || !title || !emailInput || !subjectInput || !messageInput) return;

  modal.classList.toggle("hidden", !state.contact.open);

  if (!state.contact.open) {
    state.contact.message = "";
    state.contact.mode = "support";
    form.reset();
    return;
  }

  const isReport = state.contact.mode === "report";
  title.textContent = isReport ? "REPORT CONTENT" : "CONTACT SUPPORT";
  emailInput.value = state.auth.user?.email || "";
  subjectInput.placeholder = isReport ? "What should be reviewed?" : "How can we help?";
  messageInput.placeholder = isReport ? "Tell us what content needs review" : "Tell us what's going on";

  closeButton.onclick = () => {
    state.contact.open = false;
    renderContactModal();
  };

  modal.onclick = (event) => {
    if (event.target !== modal) return;
    state.contact.open = false;
    renderContactModal();
  };

  form.onsubmit = (event) => {
    event.preventDefault();
    const email = String(emailInput.value || "").trim();
    const subject = String(subjectInput.value || "").trim();
    const message = String(messageInput.value || "").trim();
    if (!subject || !message) return;

    const body = [
      email ? `From: ${email}` : "",
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:support@discotime.app?subject=${encodeURIComponent(
      isReport ? `[DISCOTIME Report] ${subject}` : `[DISCOTIME] ${subject}`
    )}&body=${encodeURIComponent(body)}`;

    state.contact.open = false;
    renderContactModal();
  };
}

function renderCalendar() {
  const el = document.querySelector("#view-calendar");
  initializeCalendarMonth();

  const shows = sortedShows();
  if (!shows.length) {
    el.innerHTML = `
      <div class="section-head">
        <h2 class="display-heading">${state.calendarViewMode === "countdown" ? "COUNTDOWN" : "CALENDAR"}</h2>
      </div>
      ${state.loading.app ? renderInfoCard("Loading tour dates...") : renderInfoCard(state.errors.shows || "No tour dates are available right now.", state.errors.shows ? "error" : "muted")}
    `;
    return;
  }

  const monthShows = shows.filter((show) => getMonthId(show.date) === state.calendarMonth);
  const showDays = new Set(monthShows.map((show) => Number(show.date.slice(8, 10))));
  const goingDays = new Set(
    monthShows
      .filter((show) => state.goingShowIds.includes(show.id))
      .map((show) => Number(show.date.slice(8, 10)))
  );
  const [year, month] = state.calendarMonth.split("-").map(Number);
  const firstWeekday = new Date(year, month - 1, 1).getDay();
  const daysInMonth = new Date(year, month, 0).getDate();

  const dayCells = [];
  for (let i = 0; i < firstWeekday; i += 1) dayCells.push('<span class="cal-day empty-cell"></span>');
  for (let day = 1; day <= daysInMonth; day += 1) {
    const hasShow = showDays.has(day);
    const isGoingDay = goingDays.has(day);
    dayCells.push(`<span class="cal-day ${hasShow ? "has-show" : ""} ${isGoingDay ? "going-show" : ""}">${day}</span>`);
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

  const goingShows = sortedShows().filter((show) => state.goingShowIds.includes(show.id));
  const countdownCards = goingShows
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

  const isCountdownMode = state.calendarViewMode === "countdown";

  el.innerHTML = `
    <div class="section-head">
      <h2 class="display-heading">${isCountdownMode ? "COUNTDOWN" : "CALENDAR"}</h2>
    </div>
    <div class="switcher">
      <button id="modeCalendar" class="switch-pill ${!isCountdownMode ? "active" : "muted"}" type="button">Calendar</button>
      <button id="modeCountdown" class="switch-pill ${isCountdownMode ? "active" : "muted"}" type="button">Countdown</button>
    </div>
    ${
      isCountdownMode
        ? `
          <p class="meta">Only the dates you've marked as going</p>
          <div id="countdownList" class="stack">
            ${countdownCards || renderInfoCard('No shows selected yet. Tap "I\'m going" in Home.')}
          </div>
        `
        : `
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
            ${listMarkup || renderInfoCard("No shows are scheduled in this month.")}
          </div>
        `
    }
  `;

  document.querySelector("#modeCalendar").onclick = () => {
    state.calendarViewMode = "calendar";
    renderCalendar();
  };
  document.querySelector("#modeCountdown").onclick = () => {
    state.calendarViewMode = "countdown";
    renderCalendar();
    updateCountdownListDisplays();
  };

  if (!isCountdownMode) {
    document.querySelector("#calendarPrev").onclick = () => {
      state.calendarMonth = shiftMonth(state.calendarMonth, -1);
      renderCalendar();
    };
    document.querySelector("#calendarNext").onclick = () => {
      state.calendarMonth = shiftMonth(state.calendarMonth, 1);
      renderCalendar();
    };
    document.querySelectorAll(".calendar-going").forEach((button) => {
      button.onclick = async () => {
        const showId = button.getAttribute("data-show-id");
        if (!showId) return;
        requireAuth("save shows you're going to");

        const isGoing = state.goingShowIds.includes(showId);
        await persistShowStatus("going", showId, !isGoing);
        renderCalendar();
      };
    });
  } else {
    document.querySelectorAll(".attended-toggle").forEach((button) => {
      button.onclick = async () => {
        const showId = button.getAttribute("data-show-id");
        if (!showId) return;
        if (!requireAuth("save attended shows")) return;

        const attended = state.attendedShowIds.includes(showId);
        await persistShowStatus("attended", showId, !attended);
        renderCalendar();
        updateCountdownListDisplays();
      };
    });
    updateCountdownListDisplays();
  }
}

function renderSettings() {
  const el = document.querySelector("#view-settings");
  if (!el) return;

  const doc = LEGAL_DOCS[state.settingsLegalDoc] || LEGAL_DOCS.terms;
  const settingsRows = [
    { key: "terms", label: "Terms of Use", type: "doc" },
    { key: "privacy", label: "Privacy Policy", type: "doc" },
    { key: "support", label: "Contact Support", type: "action" },
    { key: "report", label: "Report Content", type: "action" },
    { key: "delete", label: "Delete Account", type: "doc" },
  ];

  el.innerHTML = `
    <div class="section-head settings-head">
      <h2>SETTINGS</h2>
    </div>
    <article class="card settings-disclaimer">
      <p class="meta">DISCOTIME is an unofficial fan-made tracker and is not affiliated with Harry Styles, his management, or any official tour entity.</p>
    </article>
    <section class="card settings-list-card">
      <div class="settings-list">
        ${settingsRows
          .map((row) =>
            row.type === "doc"
              ? `<button type="button" class="settings-row ${state.settingsLegalDoc === row.key ? "active" : ""}" data-legal-doc="${row.key}">
                  <span>${row.label}</span>
                  <span class="settings-row-chevron">›</span>
                </button>`
              : row.type === "action"
                ? `<button type="button" class="settings-row" data-settings-action="${row.key}">
                    <span>${row.label}</span>
                    <span class="settings-row-chevron">›</span>
                  </button>`
              : `<a class="settings-row settings-row-link" href="${row.href}">
                  <span>${row.label}</span>
                  <span class="settings-row-chevron">›</span>
                </a>`
          )
          .join("")}
      </div>
    </section>
    <article class="card legal-doc settings-doc-card">
      <div class="settings-doc-head">
        <p class="meta">Selected</p>
        <h3>${doc.title}</h3>
      </div>
      <div class="legal-copy">${doc.body}</div>
    </article>
  `;

  document.querySelectorAll("[data-legal-doc]").forEach((button) => {
    button.onclick = () => {
      const docKey = button.getAttribute("data-legal-doc");
      if (!docKey || !LEGAL_DOCS[docKey]) return;
      state.settingsLegalDoc = docKey;
      renderSettings();
    };
  });

  document.querySelectorAll("[data-settings-action]").forEach((button) => {
    button.onclick = () => {
      const action = button.getAttribute("data-settings-action");
      if (action === "support" || action === "report") {
        state.contact.mode = action === "report" ? "report" : "support";
        state.contact.open = true;
        renderContactModal();
      }
    };
  });

  const deleteEmail = document.querySelector("#deleteAccountEmailLabel");
  if (deleteEmail) {
    deleteEmail.textContent = state.auth.user?.email || "Not signed in";
  }
}

function renderSetlists() {
  const el = document.querySelector("#view-setlists");
  const shows = sortedShows();
  if (!shows.length) {
    el.innerHTML = `
      <h2>SETLIST TRACKER</h2>
      ${state.loading.app ? renderInfoCard("Loading setlists...") : renderInfoCard(state.errors.shows || "Setlist data is unavailable right now.", state.errors.shows ? "error" : "muted")}
    `;
    return;
  }

  let didSanitize = false;
  shows.forEach((show) => {
    const cleanedSetlist = show.setlist.filter((entry) => !shouldHideSetlistEntry(entry));
    if (cleanedSetlist.length !== show.setlist.length) {
      show.setlist = cleanedSetlist;
      didSanitize = true;
    }
  });
  if (didSanitize) save("shows", state.shows);

  const currentTourShows = shows.filter((show) => getTourNameFromDate(show.date) === CURRENT_TOUR_NAME);
  const archiveShows = shows.filter((show) => show.setlist.length > 0 && getTourNameFromDate(show.date) !== CURRENT_TOUR_NAME);
  const currentTourCards = currentTourShows
    .filter((show) => show.setlist.length > 0)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 12)
    .map((show) => {
      const songs = show.setlist
        .map((song) => {
          const parsed = parseSetlistEntry(song);
          const badge =
            parsed.kind === "surprise"
              ? '<span class="badge pending">Surprise</span>'
              : parsed.kind === "new"
                ? '<span class="badge ok">New</span>'
                : "";
          return `<li class="setlist-entry">${badge}<span>${parsed.title}</span></li>`;
        })
        .join("");
      const isFavorite = state.favoriteSetlistShowIds.includes(show.id);
      return `
      <article class="card">
        <div class="section-head">
          <h3>${getShowNightLabel(show)} - ${formatDate(show.date)}</h3>
          <button type="button" class="ghost setlist-fav" data-show-id="${show.id}">${isFavorite ? "Saved" : "Save"}</button>
        </div>
        <p class="meta">${show.venue}</p>
        <ol class="list">${songs}</ol>
      </article>
      `;
    })
    .join("");

  const archiveTourOptions = allTourNames().filter((tour) => tour !== CURRENT_TOUR_NAME);
  if (!archiveTourOptions.includes(state.setlistArchiveTour)) {
    state.setlistArchiveTour = archiveTourOptions[0] || "Love On Tour";
  }
  const archiveCards = archiveShows
    .filter(
      (show) =>
        getTourNameFromDate(show.date) === state.setlistArchiveTour &&
        show.setlist.length > 0
    )
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 20)
    .map((show) => {
      const songs = show.setlist
        .map((song) => {
          const parsed = parseSetlistEntry(song);
          const badge =
            parsed.kind === "surprise"
              ? '<span class="badge pending">Surprise</span>'
              : parsed.kind === "new"
                ? '<span class="badge ok">New</span>'
                : "";
          return `<li class="setlist-entry">${badge}<span>${parsed.title}</span></li>`;
        })
        .join("");
      return `
      <article class="card">
        <h3>${abbreviateCity(show.city)} - ${formatDate(show.date)}</h3>
        <p class="meta">${show.venue}</p>
        <ol class="list">${songs}</ol>
      </article>
      `;
    })
    .join("");
  const archiveSummary = archiveTourOptions
    .map((tour) => {
      const count = archiveShows.filter((show) => getTourNameFromDate(show.date) === tour).length;
      return `<span class="badge ${tour === state.setlistArchiveTour ? "pending" : "info"}">${tour} · ${count}</span>`;
    })
    .join("");

  el.innerHTML = `
    <h2>SETLIST TRACKER</h2>
    <div class="card">
      <h3>Current Tour Setlist</h3>
      <p class="meta">${CURRENT_TOUR_NAME} - track changes and surprise songs live</p>
    </div>

    <h3>Current Tour Updates</h3>
    <div class="stack">${currentTourCards || renderInfoCard("No current-tour updates yet.")}</div>

    <div class="card form-grid">
      <h3>Historic Setlist Archive</h3>
      <div class="badges">${archiveSummary}</div>
      <div class="form-group">
        <label>Tour</label>
        <select id="setlistArchiveTour" name="archiveTour">
          ${archiveTourOptions
            .map(
              (tour) =>
                `<option value="${tour}" ${tour === state.setlistArchiveTour ? "selected" : ""}>${tour}</option>`
            )
            .join("")}
        </select>
      </div>
    </div>
    <div class="stack">${archiveCards || renderInfoCard("No archived setlists yet for this tour.")}</div>
  `;

  const archiveTourSelect = document.querySelector("#setlistArchiveTour");
  if (archiveTourSelect) {
    archiveTourSelect.onchange = (event) => {
      state.setlistArchiveTour = String(event.target.value || "Love On Tour");
      renderSetlists();
    };
  }

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
  const shows = getUpcomingSelectableShows();
  const submissionShows = getUpcomingSupabaseShows();
  const hasShows = shows.length > 0;
  const hasSubmissionShows = submissionShows.length > 0;
  const signedInSubmission = Boolean(state.auth.user && canUseSupabase());
  const canReport = canUseSupabase();
  const approvedStreams = state.streams.filter((stream) => Boolean(stream.isApproved ?? ["approved", "verified"].includes(String(stream.status || "").toLowerCase())));
  const approvedStreamCount = approvedStreams.length;

  const cards = approvedStreams
    .slice()
    .sort((a, b) => {
      const pinned = Number(Boolean(b.isPinned)) - Number(Boolean(a.isPinned));
      if (pinned) return pinned;
      const admin = Number(Boolean(b.isAdminAdded)) - Number(Boolean(a.isAdminAdded));
      if (admin) return admin;
      return String(b.createdAt).localeCompare(String(a.createdAt));
    })
    .map((stream) => {
      const show = state.shows.find((item) => item.id === stream.showId);
      return `
      <article class="card">
        <div class="section-head">
          <h3>${show ? `${show.city} - ${formatDate(show.date)}` : "Unknown show"}</h3>
          ${canReport ? `<button class="ghost live-report-btn" type="button" data-report-stream-id="${stream.id}">Report</button>` : ""}
        </div>
        <div class="badges">
          ${stream.isPinned ? '<span class="badge pending">Pinned</span>' : ""}
          ${stream.isAdminAdded ? '<span class="badge info">Admin</span>' : ""}
          <span class="badge info">${stream.platform}</span>
          <span class="badge ok">${stream.status}</span>
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
      <p class="hero-count">${approvedStreamCount}</p>
      <p class="hero-note">approved live links</p>
    </div>

    <h2>LIVE WATCH</h2>

    ${state.errors.app ? renderInfoCard(state.errors.app, "error") : ""}
    ${state.errors.shows ? renderInfoCard(state.errors.shows, "error") : ""}
    ${state.errors.live ? renderInfoCard(state.errors.live, "error") : ""}
    ${state.notices.live ? renderInfoCard(state.notices.live, "success") : ""}
    <form id="streamForm" class="card form-grid">
      <div class="form-group">
        <label>Show</label>
        <select name="showId" required ${hasSubmissionShows ? "" : "disabled"}>${showOptionsMarkup(submissionShows)}</select>
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
      <p class="meta">
        ${
          signedInSubmission
            ? hasSubmissionShows
              ? "Signed-in submissions are sent for admin review before they appear publicly."
              : "No upcoming shows are synced to the live database yet."
            : "Sign in to submit a livestream link. Guests can view approved links only."
        }
      </p>
      <button class="primary" type="submit" ${hasSubmissionShows && signedInSubmission ? "" : "disabled"}>Submit for review</button>
    </form>

    ${hasShows ? "" : renderInfoCard("Tour dates are required before livestreams can be added.", "error")}
    ${signedInSubmission && !hasSubmissionShows ? renderInfoCard("Upcoming show records need to exist in Supabase before livestream links can be submitted.", "error") : ""}
    <div class="stack">${cards || renderInfoCard("No streams submitted yet.")}</div>
  `;

  document.querySelector("#streamForm").onsubmit = async (event) => {
    event.preventDefault();
    if (!hasSubmissionShows) return;
    const fd = new FormData(event.target);
    const selectedLocalShowId = String(fd.get("showId") || "");
    const remoteShowId = getSupabaseShowId(selectedLocalShowId);

    if (!remoteShowId) {
      state.errors.live = "That show is not synced to Supabase yet. Choose an upcoming synced show.";
      renderLiveWatch();
      return;
    }

    const payload = {
      show_id: remoteShowId,
      platform: String(fd.get("platform")),
      handle: String(fd.get("handle")).replace(/^@/, ""),
      url: String(fd.get("url")),
    };

    if (signedInSubmission) {
      try {
        console.log("[DISCOTIME] submitting livestream payload", payload);
        let { error } = await state.auth.client.from("livestream_links").insert({
          ...payload,
          status: "pending",
          is_approved: false,
          is_admin_added: false,
          is_pinned: false,
          submitted_by: state.auth.user.id,
        });
        if (error) {
          console.error("[DISCOTIME] user livestream insert failed on moderation schema, retrying legacy schema", error);
          ({ error } = await state.auth.client.from("livestream_links").insert({
            ...payload,
            status: "pending",
            submitted_by: state.auth.user.id,
          }));
        }
        if (error) throw error;
        state.errors.live = "";
        showLiveNotice("Livestream submitted for review.");
        event.target.reset();
        await hydrateLivestreamsFromSupabase(remoteSyncToken);
      } catch (error) {
        console.error("[DISCOTIME] user livestream insert failed", error);
        state.errors.live = `Your livestream could not be submitted right now. ${error?.message || "Try again in a moment."}`;
      }
    } else {
      state.auth.modalOpen = true;
      state.auth.message = "Sign in to submit livestream links.";
      renderAuthUI();
    }

    renderLiveWatch();
  };

  document.querySelectorAll("[data-report-stream-id]").forEach((button) => {
    button.onclick = () => {
      state.report.open = true;
      state.report.streamId = String(button.getAttribute("data-report-stream-id") || "");
      renderReportModal();
    };
  });
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
  const displayName = state.profile.displayName || "Add your name";
  const displayCity = state.profile.city || "Add your city";
  const displayPronouns = state.profile.pronouns || "Add pronouns";
  const ticketLabel =
    ticketStatus === "has"
      ? "I have tickets"
      : ticketStatus === "searching"
        ? "Searching for tickets"
        : "Prefer not to say";

  const goingList = sortedShows()
    .filter((show) => state.goingShowIds.includes(show.id))
    .sort((a, b) => a.date.localeCompare(b.date))
    .map((show) => `<li><strong>${getShowNightLabel(show)}</strong><span class="meta"> · ${formatDate(show.date)} · ${show.venue}</span></li>`)
    .join("");
  const appearancesSorted = state.appearances
    .slice()
    .sort((a, b) => String(b.date || "").localeCompare(String(a.date || "")));
  const appearanceListMarkup = appearancesSorted
    .map(
      (item) => `
      <li>
        <strong>${item.title}</strong>
        <span class="meta"> · ${item.location || "Location not set"} · ${
          item.date ? formatDate(item.date) : "Date not set"
        }</span>
      </li>`
    )
    .join("");

  const attendedShows = sortedShows().filter((show) => state.attendedShowIds.includes(show.id));
  const attendedByYear = attendedShows.reduce((acc, show) => {
    const year = show.date.slice(0, 4);
    if (!acc[year]) acc[year] = [];
    acc[year].push(show);
    return acc;
  }, {});
  const attendedHistoryMarkup = Object.keys(attendedByYear)
    .sort((a, b) => a.localeCompare(b))
    .map((year) => {
      const tourNames = Array.from(
        new Set(attendedByYear[year].map((show) => getTourNameFromDate(show.date)))
      ).join(" / ");
      const entries = attendedByYear[year]
        .map((show) => `<li>${getShowNightLabel(show)} - ${formatDate(show.date)}</li>`)
        .join("");
      return `
        <div class="history-block history-card">
          <p class="meta history-year">${year} · ${tourNames}</p>
          <ul class="list">${entries}</ul>
        </div>
      `;
    })
    .join("");
  const profileStateCards = [
    state.loading.auth ? renderInfoCard("Checking account...") : "",
    state.errors.auth ? renderInfoCard(state.errors.auth, "error") : "",
  ]
    .filter(Boolean)
    .join("");

  if (!state.profileEditing) {
    el.innerHTML = `
      <div class="section-head">
        <h2>MY PROFILE</h2>
        <button id="editProfileButton" class="ghost" type="button">Edit</button>
      </div>
      ${profileStateCards}
      <div class="card profile-card">
        <div class="profile-photo-wrap">
          ${
            profileImage
              ? `<img class="profile-photo" src="${profileImage}" alt="Profile photo" />`
              : '<div class="profile-photo placeholder">🪩</div>'
          }
        </div>
        <h3>${displayName}</h3>
        <p class="meta">${displayCity}</p>
        <p class="meta">${displayPronouns}</p>
        <p class="meta profile-email">${state.auth.user?.email || "Guest mode (saved on this device)"}</p>
      </div>
      <div class="card">
        <h3>Profile Settings</h3>
        <p class="meta">Ticket status: ${ticketLabel}</p>
        <p class="meta">Show my upcoming shows publicly: ${state.profile.showGoingPublic ? "Yes" : "No"}</p>
      </div>
      <div class="card">
        <h3>Shows I've Been To</h3>
        <div class="history-cards">
          ${
          attendedHistoryMarkup
            ? attendedHistoryMarkup
            : renderInfoCard("No attended shows yet. Mark a show as attended from Countdown.")
          }
        </div>
      </div>
      <div class="card">
        <h3>Shows I'm Going To</h3>
        <ul class="list">${goingList || "<li>No upcoming shows selected yet.</li>"}</ul>
      </div>
      <div class="card">
        <h3>Appearances You've Seen</h3>
        <ul class="list">
          ${
            appearanceListMarkup
              ? appearanceListMarkup
              : "<li>No appearances added yet.</li>"
          }
        </ul>
      </div>
      <div class="stack">
        ${state.auth.user ? '<button id="profileSignOut" class="ghost" type="button">Sign out</button>' : ""}
        ${
          !state.auth.user
            ? '<button id="openAuthFromProfile" class="ghost" type="button">Sign in / Sign up to sync profile</button>'
            : ""
        }
      </div>
    `;

    document.querySelector("#editProfileButton").onclick = () => {
      state.profileEditing = true;
      renderProfile();
    };

    const signOut = document.querySelector("#profileSignOut");
    if (signOut) {
      signOut.onclick = signOutUser;
    }

    const openAuth = document.querySelector("#openAuthFromProfile");
    if (openAuth) {
      openAuth.onclick = () => {
        state.auth.modalOpen = true;
        state.auth.message = "Sign in to sync your profile across devices.";
        renderAuthUI();
      };
    }
    return;
  }

  el.innerHTML = `
    <div class="section-head">
      <h2>EDIT PROFILE</h2>
      <button id="cancelEditProfile" class="ghost" type="button">Cancel</button>
    </div>
    ${profileStateCards}
    <div class="card profile-card">
      <div class="profile-photo-wrap">
        ${
          profileImage
            ? `<img class="profile-photo" src="${profileImage}" alt="Profile photo" />`
            : '<div class="profile-photo placeholder">🪩</div>'
        }
      </div>
      <p class="meta profile-email">${state.auth.user?.email || "Guest mode (saved on this device)"}</p>
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

    <div class="card form-grid">
      <h3>Appearances You've Seen</h3>
      <form id="appearanceForm" class="form-grid">
        <div class="form-group">
          <label>Appearance/Event</label>
          <input name="title" placeholder="e.g. SNL performance taping" required />
        </div>
        <div class="form-group">
          <label>Location</label>
          <input name="location" placeholder="e.g. New York, NY" />
        </div>
        <div class="form-group">
          <label>Date</label>
          <input type="date" name="date" />
        </div>
        <button class="primary" type="submit">Add appearance</button>
      </form>
      <div class="stack">
        ${
          appearancesSorted.length
            ? appearancesSorted
                .map(
                  (item) => `
                  <div class="appearance-row">
                    <div>
                      <p><strong>${item.title}</strong></p>
                      <p class="meta">${item.location || "Location not set"}${
                        item.date ? ` · ${formatDate(item.date)}` : ""
                      }</p>
                    </div>
                    <button class="ghost remove-appearance" type="button" data-appearance-id="${item.id}">Remove</button>
                  </div>
                `
                )
                .join("")
            : '<p class="meta">No appearances added yet.</p>'
        }
      </div>
    </div>

    <div class="card">
      <h3>Shows I'm Going To</h3>
      <ul class="list">${goingList || "<li>No upcoming shows selected yet.</li>"}</ul>
      <p class="meta">Visible on profile: ${state.profile.showGoingPublic ? "Yes" : "No"}</p>
    </div>
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
    await syncProfileToSupabase();
    state.profileEditing = false;
    renderProfile();
  };

  const appearanceForm = document.querySelector("#appearanceForm");
  if (appearanceForm) {
    appearanceForm.onsubmit = (event) => {
      event.preventDefault();
      const fd = new FormData(event.target);
      const title = String(fd.get("title") || "").trim();
      if (!title) return;

      state.appearances = [
        ...state.appearances,
        {
          id: crypto.randomUUID(),
          title,
          location: String(fd.get("location") || "").trim(),
          date: String(fd.get("date") || "").trim(),
        },
      ];
      saveScoped("appearances", state.appearances);
      renderProfile();
    };
  }

  document.querySelectorAll(".remove-appearance").forEach((button) => {
    button.onclick = () => {
      const id = button.getAttribute("data-appearance-id");
      if (!id) return;
      state.appearances = state.appearances.filter((item) => item.id !== id);
      saveScoped("appearances", state.appearances);
      renderProfile();
    };
  });

  document.querySelector("#cancelEditProfile").onclick = () => {
    state.profileEditing = false;
    renderProfile();
  };

  const signOut = document.querySelector("#profileSignOut");
  if (signOut) {
    signOut.onclick = signOutUser;
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
  if (!tabConfig.some((tab) => tab.id === state.activeTab) && !["profile", "settings"].includes(state.activeTab)) {
    state.activeTab = "tour";
  }
  mountTabs();
  showView(state.activeTab);
  renderTourHub();
  renderCalendar();
  renderSetlists();
  renderLiveWatch();
  renderProfile();
  renderSettings();
  renderAuthUI();
  renderShowInfoModal();
  renderTonightModal();
  renderReportModal();
  renderContactModal();
  renderLaunchOverlay();
  renderOnboardingOverlay();
  startCountdownTicker();
}

async function bootstrap() {
  state.loading.app = true;
  state.errors.app = "";
  render();

  try {
    applyUserScopedState();
    await initAuth();
    await hydrateOfficialFeedMedia();
  } catch {
    state.errors.app = "DISCOTIME could not finish loading. Try again in a moment.";
  } finally {
    state.loading.app = false;
    render();
  }
}

bootstrap();
