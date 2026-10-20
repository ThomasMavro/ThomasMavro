// Renders the CV (layout B) and sends cookie-free analytics events to Umami.
// Every event carries `a` = application code from ?a=... ("general" when absent), so data adds up across applications.
(function () {
  const params = new URLSearchParams(location.search);
  const APP = (params.get("a") || "general").toLowerCase().replace(/[^a-z0-9-]/g, "").slice(0, 40) || "general";
  let L = params.get("lang") === "fr" ? "fr" : "en";
  let summary = null; // tailored summary for this application, if any

  // ---------- analytics ----------
  const queue = [];
  function send(name, data) {
    const payload = Object.assign({ a: APP, lang: L }, data || {});
    if (window.umami && typeof window.umami.track === "function") window.umami.track(name, payload);
    else queue.push([name, payload]);
  }
  const flush = setInterval(() => {
    if (window.umami && typeof window.umami.track === "function") {
      window.umami.track(); // page view
      while (queue.length) window.umami.track(...queue.shift());
      clearInterval(flush);
    }
  }, 300);
  setTimeout(() => clearInterval(flush), 15000);

  const seen = new Set();          // sections viewed at least once
  const timeMs = {};               // visible time per section
  const visibleSince = {};         // section id -> timestamp when it became visible
  let maxDepth = 0;                // scroll milestones sent: 25/50/75/100
  let sentTimes = false;

  function sectionObserver() {
    return new IntersectionObserver(entries => {
      const now = performance.now();
      entries.forEach(e => {
        const id = e.target.dataset.section;
        if (e.isIntersecting) {
          visibleSince[id] = now;
          if (!seen.has(id)) { seen.add(id); send("section_view", { section: id }); }
        } else if (visibleSince[id] != null) {
          timeMs[id] = (timeMs[id] || 0) + (now - visibleSince[id]);
          delete visibleSince[id];
        }
      });
    }, { threshold: 0.35 });
  }
  function sendTimes() {
    if (sentTimes) return;
    sentTimes = true;
    const now = performance.now();
    Object.keys(visibleSince).forEach(id => { timeMs[id] = (timeMs[id] || 0) + (now - visibleSince[id]); });
    Object.keys(timeMs).forEach(id => {
      const seconds = Math.round(timeMs[id] / 1000);
      if (seconds >= 1) send("section_time", { section: id, seconds: Math.min(seconds, 1800) });
    });
  }
  document.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") sendTimes(); });
  window.addEventListener("pagehide", sendTimes);

  window.addEventListener("scroll", () => {
    const h = document.documentElement;
    const pct = Math.round(100 * (h.scrollTop + innerHeight) / h.scrollHeight);
    [25, 50, 75, 100].forEach(m => { if (pct >= m && maxDepth < m) { maxDepth = m; send("scroll_depth", { depth: m }); } });
  }, { passive: true });

  document.addEventListener("click", e => {
    const a = e.target.closest("a[data-track]");
    if (a) send("link_click", { target: a.dataset.track });
  });

  // ---------- rendering ----------
  const tx = v => (v && typeof v === "object" && "en" in v) ? v[L] : v;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const linksHTML = () => `<ul class="links">${CV.links.map(l => `<li><a href="${l.href}" target="_blank" rel="noopener" data-track="${l.k}">${esc(l.label)}</a></li>`).join("")}</ul>`;
  const chipsHTML = s => s.chips.map(row => `<ul class="chips">${row.map(c => `<li>${esc(tx(c))}</li>`).join("")}</ul>`).join("");
  const bodyHTML = it => (it.b ? `<ul class="bul">${it.b.map(x => `<li>${esc(tx(x))}</li>`).join("")}</ul>` : "")
    + (it.p ? `<p style="margin:6px 0 0">${esc(tx(it.p))}</p>` : "")
    + (it.cta ? `<p style="margin:12px 0 0"><a class="btn" href="${it.href}" target="_blank" rel="noopener" data-track="thesis_pdf">${esc(tx(it.cta))}</a></p>` : "");

  let observer, spy;
  function render() {
    const nav = `<nav aria-label="Sections"><ol>${CV.sections.map((s, i) => `<li><a href="#${s.id}" data-nav="${s.id}" style="--c:var(${s.c})" class="${i === 0 ? "on" : ""}">${esc(tx(s.h))}</a></li>`).join("")}</ol></nav>`;
    const sec = s => `<section id="${s.id}" data-section="${s.id}"><h2>${esc(tx(s.h))}</h2>${
      s.text ? `<p style="margin:0">${esc(tx(s.id === "profile" && summary ? summary : s.text))}</p>` :
      s.chips ? chipsHTML(s) :
      s.items.map(it => `<div class="item"><div class="it">${esc(tx(it.t))}</div><div class="meta">${esc(tx(it.o))} · ${esc(tx(it.d))}</div>${bodyHTML(it)}</div>`).join("")}</section>`;
    document.getElementById("app").innerHTML =
      `<div class="layout"><aside><div class="side"><h1>${CV.name}</h1><p class="tag">${esc(tx(CV.tag))}<br>${esc(tx(CV.place))}</p><div class="rings-bar" aria-hidden="true"><i></i><i></i><i></i><i></i><i></i></div>${linksHTML()}${nav}</div></aside><main>${CV.sections.map(sec).join("")}</main></div>`;
    document.getElementById("foot-note").textContent = tx(FOOT);
    document.documentElement.lang = L;
    document.querySelectorAll(".langs button").forEach(b => b.setAttribute("aria-pressed", b.dataset.l === L));

    if (observer) observer.disconnect();
    if (spy) spy.disconnect();
    if ("IntersectionObserver" in window) {
      observer = sectionObserver();
      spy = new IntersectionObserver(es => es.forEach(e => {
        if (e.isIntersecting) document.querySelectorAll("nav a").forEach(a => a.classList.toggle("on", a.dataset.nav === e.target.id));
      }), { rootMargin: "-30% 0px -60% 0px" });
      document.querySelectorAll("section").forEach(s => { observer.observe(s); spy.observe(s); });
    }
  }

  document.querySelector(".langs").addEventListener("click", e => {
    const b = e.target.closest("button[data-l]");
    if (!b || b.dataset.l === L) return;
    L = b.dataset.l;
    send("lang_switch", { to: L });
    render();
  });

  render();
  if (APP !== "general") {
    fetch(`a/${APP}.json`, { cache: "no-store" })
      .then(r => r.ok ? r.json() : null)
      .then(j => { if (j && j.summary) { summary = j.summary; render(); } })
      .catch(() => {});
  }
})();
