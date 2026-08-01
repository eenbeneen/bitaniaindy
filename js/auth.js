/* ============================================================
   Bitania Church — Admin login & post management (Supabase Auth)
   ------------------------------------------------------------
   Admin accounts are created by you in the Supabase dashboard:
   Authentication → Users → Add user. Only people you create an
   account for can log in here — that's how "select few people"
   is enforced. Combined with the Row Level Security policies in
   SUPABASE_SETUP.md, the database itself rejects writes from
   anyone who isn't signed in, not just the page's UI.
   ============================================================ */

async function isLoggedIn() {
  if (!supabaseClient) return false;
  const { data } = await supabaseClient.auth.getSession();
  return !!data.session;
}

async function attemptLogin(email, password) {
  if (!supabaseClient) return { ok: false, message: "Supabase is not configured." };
  const { error } = await supabaseClient.auth.signInWithPassword({ email, password });
  if (error) return { ok: false, message: error.message };
  return { ok: true };
}

async function logout() {
  if (supabaseClient) await supabaseClient.auth.signOut();
  render();
}

/* ---------------- UI wiring ---------------- */

const loginView = document.getElementById("login-view");
const panelView = document.getElementById("panel-view");
const loginForm = document.getElementById("login-form");
const loginError = document.getElementById("login-error");
const logoutBtn = document.getElementById("logout-btn");
const postForm = document.getElementById("post-form");
const formError = document.getElementById("form-error");
const postsList = document.getElementById("admin-posts-list");

let editingId = null;

async function render() {
  const loggedIn = await isLoggedIn();
  if (loggedIn) {
    loginView.style.display = "none";
    panelView.style.display = "block";
    await renderAdminList();
  } else {
    loginView.style.display = "block";
    panelView.style.display = "none";
  }
}

async function renderAdminList() {
  postsList.innerHTML = `<p class="admin-empty">${getLang() === "ti" ? "ኣብ ምጽዓን…" : "Loading…"}</p>`;
  const posts = await getPosts();
  postsList.innerHTML = "";

  if (posts.length === 0) {
    const p = document.createElement("p");
    p.className = "admin-empty";
    p.textContent = t("admin.list.empty");
    postsList.appendChild(p);
    return;
  }

  posts.forEach((post) => {
    const row = document.createElement("div");
    row.className = "admin-post-row";
    const title = post.titleEn || post.titleTi || "(untitled)";
    const body = post.bodyEn || post.bodyTi || "";
    row.innerHTML = `
      <div class="meta">
        <div class="admin-post-date">${formatDate(post.dateISO, "en")}</div>
        <h4>${escapeHtml(title)}</h4>
        <p>${escapeHtml(body.slice(0, 120))}${body.length > 120 ? "…" : ""}</p>
      </div>
      <div style="display:flex; gap:8px; flex-shrink:0;">
        <button class="icon-btn" data-action="edit" data-id="${post.id}">${t("admin.list.edit")}</button>
        <button class="icon-btn" data-action="delete" data-id="${post.id}">${t("admin.list.delete")}</button>
      </div>
    `;
    postsList.appendChild(row);
  });

  postsList.querySelectorAll("[data-action='delete']").forEach((btn) => {
    btn.addEventListener("click", async () => {
      if (confirm(t("admin.confirm.delete"))) {
        btn.disabled = true;
        try {
          await deletePost(btn.dataset.id);
          await renderAdminList();
        } catch (err) {
          alert(err.message);
          btn.disabled = false;
        }
      }
    });
  });

  postsList.querySelectorAll("[data-action='edit']").forEach((btn) => {
    btn.addEventListener("click", async () => {
      const post = (await getPosts()).find((p) => p.id === btn.dataset.id);
      if (!post) return;
      editingId = post.id;
      postForm.titleEn.value = post.titleEn;
      postForm.titleTi.value = post.titleTi;
      postForm.bodyEn.value = post.bodyEn;
      postForm.bodyTi.value = post.bodyTi;
      postForm.querySelector("button[type='submit']").textContent = t("admin.list.save");
      postForm.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}

if (loginForm) {
  loginForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    loginError.textContent = "";
    const submitBtn = loginForm.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    const result = await attemptLogin(loginForm.email.value, loginForm.password.value);
    submitBtn.disabled = false;
    if (result.ok) {
      loginForm.reset();
      await render();
    } else {
      loginError.textContent = result.message || t("admin.login.error");
    }
  });
}

if (logoutBtn) {
  logoutBtn.addEventListener("click", logout);
}

if (postForm) {
  postForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    formError.textContent = "";
    const fields = {
      titleEn: postForm.titleEn.value.trim(),
      titleTi: postForm.titleTi.value.trim(),
      bodyEn: postForm.bodyEn.value.trim(),
      bodyTi: postForm.bodyTi.value.trim()
    };
    const hasEn = fields.titleEn && fields.bodyEn;
    const hasTi = fields.titleTi && fields.bodyTi;
    if (!hasEn && !hasTi) {
      formError.textContent = t("admin.form.error");
      return;
    }

    const submitBtn = postForm.querySelector("button[type='submit']");
    submitBtn.disabled = true;
    try {
      if (editingId) {
        await updatePost(editingId, fields);
        editingId = null;
        submitBtn.textContent = t("admin.form.submit");
      } else {
        await addPost(fields);
      }
      postForm.reset();
      await renderAdminList();
    } catch (err) {
      formError.textContent = err.message;
    } finally {
      submitBtn.disabled = false;
    }
  });
}

document.addEventListener("DOMContentLoaded", render);
document.addEventListener("bitania:langchange", async () => {
  if (await isLoggedIn()) renderAdminList();
});
