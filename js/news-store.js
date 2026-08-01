/* ============================================================
   Bitania Church — News & Announcements data store (Supabase)
   ------------------------------------------------------------
   Reads and writes the "announcements" table in Supabase.
   Requires js/supabase-config.js to be loaded first with a
   valid project URL and anon key. See SUPABASE_SETUP.md.
   ============================================================ */

const NEWS_TABLE = "announcements";

async function getPosts() {
  if (!supabaseClient) return [];
  const { data, error } = await supabaseClient
    .from(NEWS_TABLE)
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Could not load announcements:", error.message);
    return [];
  }

  // Normalize DB column names (snake_case) to the shape the UI expects
  return data.map((row) => ({
    id: row.id,
    dateISO: row.created_at,
    titleEn: row.title_en || "",
    titleTi: row.title_ti || "",
    bodyEn: row.body_en || "",
    bodyTi: row.body_ti || ""
  }));
}

async function addPost({ titleEn, titleTi, bodyEn, bodyTi }) {
  if (!supabaseClient) throw new Error("Supabase is not configured.");
  const { error } = await supabaseClient.from(NEWS_TABLE).insert({
    title_en: titleEn || "",
    title_ti: titleTi || "",
    body_en: bodyEn || "",
    body_ti: bodyTi || ""
  });
  if (error) throw error;
}

async function updatePost(id, fields) {
  if (!supabaseClient) throw new Error("Supabase is not configured.");
  const { error } = await supabaseClient
    .from(NEWS_TABLE)
    .update({
      title_en: fields.titleEn,
      title_ti: fields.titleTi,
      body_en: fields.bodyEn,
      body_ti: fields.bodyTi
    })
    .eq("id", id);
  if (error) throw error;
}

async function deletePost(id) {
  if (!supabaseClient) throw new Error("Supabase is not configured.");
  const { error } = await supabaseClient.from(NEWS_TABLE).delete().eq("id", id);
  if (error) throw error;
}

function formatDate(iso, lang) {
  const d = new Date(iso);
  return d.toLocaleDateString(lang === "ti" ? "en-GB" : "en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

function postField(post, base, lang) {
  const primary = post[base + (lang === "ti" ? "Ti" : "En")];
  const fallback = post[base + "En"] || post[base + "Ti"];
  return (primary && primary.trim()) ? primary : fallback;
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str || "";
  return div.innerHTML;
}

/**
 * Renders a list of announcement cards into a container.
 * Fetches fresh data from Supabase each time it's called.
 * options: { limit, layout: "list" | "grid" }
 */
async function renderNewsInto(container, { limit, layout = "list" } = {}) {
  if (!container) return;
  const lang = getLang();

  if (!supabaseClient) {
    container.innerHTML = `<div class="${layout === "grid" ? "announce-empty" : "news-empty"}">
      <p>Supabase isn't configured yet. Add your project URL and anon key to
      <code>js/supabase-config.js</code> to enable live announcements.</p>
    </div>`;
    return;
  }

  container.innerHTML = `<p class="muted">${lang === "ti" ? "ኣብ ምጽዓን…" : "Loading…"}</p>`;

  const posts = (await getPosts()).slice(0, limit || undefined);
  container.innerHTML = "";

  if (posts.length === 0) {
    const empty = document.createElement("div");
    if (layout === "grid") {
      empty.className = "announce-empty";
      empty.innerHTML = `<p>${t("announce.empty")}</p>`;
    } else {
      empty.className = "news-empty";
      empty.innerHTML = `<span class="eyebrow">${t("news.empty.eyebrow")}</span><p>${t("news.empty.body")}</p>`;
    }
    container.appendChild(empty);
    return;
  }

  posts.forEach((post) => {
    const title = postField(post, "title", lang);
    const body = postField(post, "body", lang);
    const card = document.createElement("article");
    card.className = layout === "grid" ? "announce-card" : "news-post";
    card.innerHTML = `
      <div class="${layout === "grid" ? "announce-date" : "news-post-date"}">${formatDate(post.dateISO, lang)}</div>
      <h${layout === "grid" ? "3" : "2"}>${escapeHtml(title)}</h${layout === "grid" ? "3" : "2"}>
      <p>${escapeHtml(body)}</p>
    `;
    container.appendChild(card);
  });
}
