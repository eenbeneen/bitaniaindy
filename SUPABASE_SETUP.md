# Connecting Bitania Church to Supabase

This turns the News & Announcements feature from "saved in one browser" into
"live for every visitor," and makes the admin login a real, server-enforced
login instead of a password check in JavaScript.

## 1. Create a Supabase project

1. Go to [supabase.com](https://supabase.com) and sign up (free tier is enough).
2. Click **New Project**. Pick any name/region and a database password (save
   it somewhere safe — you likely won't need it day-to-day, but it's your
   recovery key).
3. Wait a minute or two for the project to finish provisioning.

## 2. Create the announcements table

In the left sidebar, go to **SQL Editor → New query**, paste this in, and click **Run**:

```sql
create table announcements (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  title_en text,
  title_ti text,
  body_en text,
  body_ti text
);

-- Turn on Row Level Security
alter table announcements enable row level security;

-- Anyone (including logged-out visitors) can read announcements
create policy "Public can read announcements"
on announcements for select
using (true);

-- Only logged-in users can create, edit, or delete announcements
create policy "Authenticated users can manage announcements"
on announcements for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');
```

This is what actually enforces "select few people" — it's checked by the
database itself, not just hidden by the page.

## 3. Create your admin account(s)

1. Go to **Authentication → Users → Add user**.
2. Enter the email and password for each staff member who should be able to
   post announcements. Repeat for each admin — there's no separate signup
   page on the public site, so only people you add here can ever log in.
3. Turn off **Enable email confirmations** under **Authentication → Providers
   → Email** if you don't want new admins to have to click a confirmation
   link before their first login (optional, up to you).

## 4. Connect the website to your project

1. In Supabase, go to **Project Settings → API**.
2. Copy the **Project URL** and the **anon public** key.
3. Open `js/supabase-config.js` in the site files and paste them in:

```javascript
const SUPABASE_URL = "https://your-project-id.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-public-key";
```

That's it — no other code changes needed. `index.html`, `news.html`, and
`admin.html` are already wired to use these values.

## 5. Test it

1. Open `admin.html` in a browser, log in with an account you created in
   step 3, and publish a test announcement.
2. Open `news.html` in a **different browser** (or an incognito window) —
   the announcement should appear there too, confirming it's coming from
   the shared database rather than local browser storage.
3. Delete the test announcement from the admin panel when you're done.

## Notes

- The anon key is meant to be public — it identifies your project, not a
  secret credential. The Row Level Security policies above are what actually
  protect the data.
- If you ever need to remove an admin's access, delete their user from
  **Authentication → Users** — no code changes required.
- Free-tier Supabase projects pause after a week of no activity and wake up
  automatically on the next request (with a few seconds' delay). This is
  fine for a low-traffic church site; upgrade to a paid tier if that delay
  becomes a problem.
