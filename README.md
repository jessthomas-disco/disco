# DISCOTIME Prototype

Static web prototype for Harry tour tracking.

## Features

- Home + next-show countdown
- My Shows countdown list (for shows you marked as going)
- Setlist tracker + setlist favorites
- Live Watch links
- Outfit tracker + outfit favorites
- iPhone-style viewport on desktop

## Auth (Supabase)

Auth supports:

- Apple sign-in
- Google sign-in
- Email + password

User-specific data saved per account:

- Shows you're going to
- Attended shows
- Favorite outfits
- Favorite setlists

You can set Supabase credentials in the in-app auth modal, or pre-set:

- `localStorage.supabase_url`
- `localStorage.supabase_anon_key`

## Run

Open `index.html` directly, or run:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.
