/* ============================================================
   Bitania Church — Supabase configuration
   ------------------------------------------------------------
   Fill in your project's URL and anon public key below. You'll
   find both in your Supabase dashboard under:
   Project Settings → API

   The anon key is safe to expose in frontend code — it is a
   public identifier, not a secret. Access control is enforced
   by Row Level Security policies on the database itself (see
   SUPABASE_SETUP.md for the exact policies this site expects).
   ============================================================ */

const SUPABASE_URL = "https://kokvzzaekfgaehnspexu.supabase.co"; // e.g. "https://abcdefgh.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtva3Z6emFla2ZnYWVobnNwZXh1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODU2MDkzODYsImV4cCI6MjEwMTE4NTM4Nn0.tSpktJXgBvspxbPC5q2Jkzd77cPDOzaVgQSNWq_BLIk";

const supabaseClient = (SUPABASE_URL.startsWith("http"))
  ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

if (!supabaseClient) {
  console.warn(
    "Bitania Church: Supabase is not configured yet. " +
    "Add your Project URL and anon key to js/supabase-config.js. " +
    "See SUPABASE_SETUP.md for step-by-step instructions."
  );
}
