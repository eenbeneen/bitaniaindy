/* ============================================================
   Bitania Church — English ⇄ Tigrinya translation system
   Tigrinya strings are a first-pass translation and should be
   reviewed by a native speaker before the site goes live,
   especially for the About page and any liturgical wording.
   ============================================================ */

const DICT = {
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.news": "News & Announcements",
    "nav.contact": "Contact",
    "nav.visit": "Plan Your Visit",

    "hero.eyebrow": "Bitania Church",
    "hero.title": "Bitania Church",
    "hero.subtitle": "A community of faith, worship, and fellowship serving Speedway and the greater Indianapolis area.",
    "hero.cta.visit": "Plan Your Visit",
    "hero.cta.news": "News & Announcements",
    "hero.meta.address.label": "Address",
    "hero.meta.address.value": "6118 Crawfordsville Rd, Speedway, IN 46224",
    "hero.meta.times.label": "Service Times",
    "hero.meta.times.value": "[Add service times — e.g. Sunday 10:00 AM]",

    "intro.eyebrow": "Welcome",
    "intro.title": "Welcome to Bitania Church",
    "intro.body": "Whoever you are and wherever you are on your journey of faith, you are welcome here. Bitania Church is a place to worship, grow, and build community together. We invite you to join us for a service, ask a question, or simply come as you are.",
    "intro.cta": "Learn About Us",

    "announce.eyebrow": "Stay Connected",
    "announce.title": "Latest News & Announcements",
    "announce.viewAll": "View All",
    "announce.empty": "No announcements yet. Please check back soon.",
    "announce.readMore": "Read more",

    "service.eyebrow": "Visit Us",
    "service.title": "Service Information",
    "service.address.label": "Address",
    "service.times.label": "Service Times",
    "service.phone.label": "Phone",
    "service.email.label": "Email",

    "about.eyebrow": "Our Story",
    "about.title": "About Bitania Church",
    "about.subtitle": "Learn about our church, our leadership, and what we believe.",
    "about.body1": "Bitania Church is a community rooted in faith, prayer, and service to one another. Our congregation gathers to worship together, support one another through life's joys and challenges, and grow closer to God.",
    "about.body2": "We welcome members of all backgrounds and walks of life. Whether you are new to faith or have worshiped your whole life, there is a place for you at Bitania Church.",
    "about.leader.eyebrow": "Pastor",
    "about.leader.name": "[Pastor Name]",
    "about.leader.bio": "[Add a short biography for the church's pastor or leadership here.]",
    "about.values.title": "What We Value",
    "about.values.1": "Worship rooted in faith and tradition",
    "about.values.2": "A welcoming community for every generation",
    "about.values.3": "Service to our neighbors and city",
    "about.values.4": "Prayer, fellowship, and spiritual growth",

    "news.eyebrow": "Stay Informed",
    "news.title": "News & Announcements",
    "news.subtitle": "Updates, events, and announcements from Bitania Church.",
    "news.empty.eyebrow": "Nothing here yet",
    "news.empty.body": "No announcements have been posted yet. Please check back soon.",

    "contact.eyebrow": "Get In Touch",
    "contact.title": "Contact Us",
    "contact.subtitle": "We would love to hear from you. Reach out with any questions, or stop by for a service.",
    "contact.address.label": "Address",
    "contact.phone.label": "Phone",
    "contact.email.label": "Email",
    "contact.social.label": "Follow Us",
    "contact.address.value": "6118 Crawfordsville Rd, Speedway, IN 46224",
    "contact.phone.value": "[Add phone number]",
    "contact.email.value": "[Add email address]",

    "footer.about.body": "Bitania Church is a community of faith serving Speedway and the greater Indianapolis area through worship, fellowship, and service.",
    "footer.browse": "Browse",
    "footer.contact": "Contact",
    "footer.admin": "Admin",
    "footer.rights": "All rights reserved.",

    "admin.eyebrow": "Restricted Access",
    "admin.login.title": "Admin Login",
    "admin.login.subtitle": "This area is reserved for authorized church staff who manage news and announcements.",
    "admin.login.email.label": "Email",
    "admin.login.email.placeholder": "you@example.com",
    "admin.login.password.label": "Password",
    "admin.login.password.placeholder": "Enter admin password",
    "admin.login.submit": "Log In",
    "admin.login.error": "Incorrect password. Please try again.",
    "admin.login.back": "Back to site",

    "admin.panel.title": "Manage Announcements",
    "admin.panel.logout": "Log Out",
    "admin.panel.note": "You are logged in as an administrator. Posts you publish here appear on the News & Announcements page.",
    "admin.form.title": "New Announcement",
    "admin.form.titleEn.label": "Title (English)",
    "admin.form.titleTi.label": "Title (Tigrinya) — optional",
    "admin.form.bodyEn.label": "Message (English)",
    "admin.form.bodyTi.label": "Message (Tigrinya) — optional",
    "admin.form.submit": "Publish Announcement",
    "admin.form.error": "Please add a title and message in at least one language.",
    "admin.list.title": "Published Announcements",
    "admin.list.empty": "You haven't published any announcements yet.",
    "admin.list.edit": "Edit",
    "admin.list.delete": "Delete",
    "admin.list.cancel": "Cancel",
    "admin.list.save": "Save Changes",
    "admin.confirm.delete": "Delete this announcement? This cannot be undone."
  },

  ti: {
    "nav.home": "ገዛ",
    "nav.about": "ብዛዕባና",
    "nav.news": "ዜናን ኣፍልጦታትን",
    "nav.contact": "ርኸቡና",
    "nav.visit": "ንብጽሓትና ውጥን",

    "hero.eyebrow": "ቤተ ክርስትያን ቢታንያ",
    "hero.title": "ቤተ ክርስትያን ቢታንያ",
    "hero.subtitle": "ማሕበረሰብ እምነት፣ ኣምልኾን ሕብረትን ንኣገልግሎት ስፒድወይን ኢንድያናፖሊስን ከባቢኣን።",
    "hero.cta.visit": "ንብጽሓትና ውጥን",
    "hero.cta.news": "ዜናን ኣፍልጦታትን",
    "hero.meta.address.label": "ኣድራሻ",
    "hero.meta.address.value": "6118 Crawfordsville Rd, Speedway, IN 46224",
    "hero.meta.times.label": "ግዜ ኣገልግሎት",
    "hero.meta.times.value": "[ግዜ ኣገልግሎት ኣእትዉ — ንኣብነት ሰንበት 10:00 ንጉሆ]",

    "intro.eyebrow": "እንኳዕ ብደሓን መጻእኩም",
    "intro.title": "ናብ ቤተ ክርስትያን ቢታንያ እንኳዕ ብደሓን መጻእኩም",
    "intro.body": "መን ከም ዝኾንኩም፣ ኣበይ ከምዘለኹም ብዘየገድስ ኣብዚ ቦታ እዚ ብደሓን ተቐቢልኩም ኢኹም። ቤተ ክርስትያን ቢታንያ ብሓባር ንኣምልኾ፣ ንዓቢ፣ ማሕበረሰብ ንሃንጽ ቦታ እያ። ምሳና ኣገልግሎት ክትካፈሉ፣ ሕቶ ከተቕርቡ፣ ወይ ብቐሊሉ ከምዘለኹም ክትመጹ ንዕድመኩም።",
    "intro.cta": "ብዛዕባና ተመሃሩ",

    "announce.eyebrow": "ተኣሳሰሩና",
    "announce.title": "ናይ መወዳእታ ዜናን ኣፍልጦታትን",
    "announce.viewAll": "ኩሉ ርአ",
    "announce.empty": "ክሳብ ሕጂ ኣፍልጦ የለን። በጃኹም ደሓር ተመልሱ።",
    "announce.readMore": "ተወሳኺ ኣንብብ",

    "service.eyebrow": "ብጽሑና",
    "service.title": "ሓበሬታ ኣገልግሎት",
    "service.address.label": "ኣድራሻ",
    "service.times.label": "ግዜ ኣገልግሎት",
    "service.phone.label": "ተሌፎን",
    "service.email.label": "ኢመይል",

    "about.eyebrow": "ታሪኽና",
    "about.title": "ብዛዕባ ቤተ ክርስትያን ቢታንያ",
    "about.subtitle": "ብዛዕባ ቤተ ክርስትያንና፣ መሪሕነትናን እምነትናን ተመሃሩ።",
    "about.body1": "ቤተ ክርስትያን ቢታንያ ኣብ እምነት፣ ጸሎትን ንሓድሕድ ኣገልግሎትን ዝተመስረተት ማሕበረሰብ እያ። ማሕበርና ብሓባር ንኣምልኾ፣ ኣብ ደስታን ብድሆታት ህይወትን ንሓድሕድና ንደግፍ፣ ናብ ኣምላኽ እውን ንቐርብ።",
    "about.body2": "ካብ ኩሉ ድሕረ-ባይታን ጉዕዞ ህይወትን ንዝመጹ ኣባላት ንቕበል ኢና። ሓድሽ ኣብ እምነት ትኹኑ ወይ ንብዙሕ ዓመታት ኣምሊኽኩም ትኾኑ፣ ኣብ ቤተ ክርስትያን ቢታንያ ቦታ ኣሎኩም።",
    "about.leader.eyebrow": "ካህን/ቀሺ",
    "about.leader.name": "[ስም ቀሺ]",
    "about.leader.bio": "[ሓጺር ታሪኽ ህይወት ናይቲ ቀሺ ወይ መሪሕነት ኣብዚ ኣእትዉ።]",
    "about.values.title": "ክብርታትና",
    "about.values.1": "ኣብ እምነትን ልምድን ዝተመስረተ ኣምልኾ",
    "about.values.2": "ንኹሉ ወለዶ ዝቕበል ማሕበረሰብ",
    "about.values.3": "ንጎረባብትናን ከተማናን ኣገልግሎት",
    "about.values.4": "ጸሎት፣ ሕብረትን መንፈሳዊ ዕብየትን",

    "news.eyebrow": "ሓበሬታ ርኸቡ",
    "news.title": "ዜናን ኣፍልጦታትን",
    "news.subtitle": "ካብ ቤተ ክርስትያን ቢታንያ ዝመጹ ሓደስቲ ዜናታት፣ ፍጻመታትን ኣፍልጦታትን።",
    "news.empty.eyebrow": "ክሳብ ሕጂ የለን",
    "news.empty.body": "ክሳብ ሕጂ ዝተለጠፈ ኣፍልጦ የለን። በጃኹም ደሓር ተመልሱ።",

    "contact.eyebrow": "ተራኸቡና",
    "contact.title": "ርኸቡና",
    "contact.subtitle": "ካባኹም ክንሰምዕ ንፈቱ ኢና። ንዝኾነ ሕቶ ተራኸቡና፣ ወይ ንኣገልግሎት ብጽሑና።",
    "contact.address.label": "ኣድራሻ",
    "contact.phone.label": "ተሌፎን",
    "contact.email.label": "ኢመይል",
    "contact.social.label": "ተኸታተሉና",
    "contact.address.value": "6118 Crawfordsville Rd, Speedway, IN 46224",
    "contact.phone.value": "[ቁጽሪ ተሌፎን ኣእትዉ]",
    "contact.email.value": "[ኢመይል ኣድራሻ ኣእትዉ]",

    "footer.about.body": "ቤተ ክርስትያን ቢታንያ ንስፒድወይን ኢንድያናፖሊስን ከባቢኣ ብኣምልኾ፣ ሕብረትን ኣገልግሎትን እተገልግል ማሕበረሰብ እምነት እያ።",
    "footer.browse": "ገጻት",
    "footer.contact": "ርኸቡና",
    "footer.admin": "ኣመሓደርቲ",
    "footer.rights": "መሰል ዳግማይ ሕትመት ዝተሓለወ እዩ።",

    "admin.eyebrow": "ደረት ዘለዎ መእተዊ",
    "admin.login.title": "መእተዊ ኣመሓደርቲ",
    "admin.login.subtitle": "እዚ ክፋል እዚ ንፍቑዳት ሰራሕተኛታት ቤተ ክርስትያን ዘገልግል ኮይኑ ዜናን ኣፍልጦታትን ዘመሓድሩሉ እዩ።",
    "admin.login.email.label": "ኢመይል",
    "admin.login.email.placeholder": "you@example.com",
    "admin.login.password.label": "መሕለፊ ቃል",
    "admin.login.password.placeholder": "መሕለፊ ቃል ኣመሓደርቲ ኣእትዉ",
    "admin.login.submit": "እቶ",
    "admin.login.error": "ግጉይ መሕለፊ ቃል። በጃኹም ደጊምኩም ፈትኑ።",
    "admin.login.back": "ናብ ገጽ ተመለሱ",

    "admin.panel.title": "ኣፍልጦታት ኣመሓድሩ",
    "admin.panel.logout": "ውጻእ",
    "admin.panel.note": "ከም ኣመሓዳሪ ኣቲኹም ኣለኹም። ኣብዚ እትልጥፍዎም ልጥፋት ኣብ ገጽ ዜናን ኣፍልጦታትን ክርኣዩ እዮም።",
    "admin.form.title": "ሓድሽ ኣፍልጦ",
    "admin.form.titleEn.label": "ኣርእስቲ ( እንግሊዝኛ)",
    "admin.form.titleTi.label": "ኣርእስቲ (ትግርኛ) — ኣማራጺ",
    "admin.form.bodyEn.label": "መልእኽቲ (እንግሊዝኛ)",
    "admin.form.bodyTi.label": "መልእኽቲ (ትግርኛ) — ኣማራጺ",
    "admin.form.submit": "ኣፍልጦ ኣውጽእ",
    "admin.form.error": "በጃኹም ብውሑዱ ብሓንቲ ቋንቋ ኣርእስትን መልእኽትን ኣእትዉ።",
    "admin.list.title": "እተውጽኡ ኣፍልጦታት",
    "admin.list.empty": "ክሳብ ሕጂ ዝኾነ ኣፍልጦ ኣየውጻእኩምን።",
    "admin.list.edit": "ኣርም",
    "admin.list.delete": "ደምስስ",
    "admin.list.cancel": "ሰርዝ",
    "admin.list.save": "ለውጢ ኣቐምጥ",
    "admin.confirm.delete": "እዚ ኣፍልጦ ይደምሰስ? እዚ ክምለስ ኣይክእልን እዩ።"
  }
};

const LANG_KEY = "bitania_lang";

function getLang() {
  return localStorage.getItem(LANG_KEY) || "en";
}

function t(key) {
  const lang = getLang();
  return (DICT[lang] && DICT[lang][key]) || DICT.en[key] || key;
}

function applyTranslations() {
  const lang = getLang();
  document.documentElement.setAttribute("lang", lang);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    el.textContent = t(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    el.setAttribute("placeholder", t(key));
  });

  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.setAttribute("aria-pressed", btn.dataset.lang === lang ? "true" : "false");
  });

  // Let other scripts (e.g. news rendering) know language changed
  document.dispatchEvent(new CustomEvent("bitania:langchange", { detail: { lang } }));
}

function setLang(lang) {
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
}

function initLangToggle() {
  document.querySelectorAll(".lang-toggle button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });
  applyTranslations();
}

document.addEventListener("DOMContentLoaded", initLangToggle);
