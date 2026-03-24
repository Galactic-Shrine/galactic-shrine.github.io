
document.getElementById('currentYear')?.append(new Date().getFullYear());

(function highlightNav() {
  const current = window.location.pathname.replace(/\/index\.html$/, '/').replace(/index\.html$/, '');
  for (const link of document.querySelectorAll('[data-nav]')) {
    const href = link.getAttribute('href');
    if (!href) continue;
    const normalized = new URL(href, window.location.origin + window.location.pathname).pathname
      .replace(/\/index\.html$/, '/')
      .replace(/index\.html$/, '');
    if (normalized === current) link.classList.add('active');
  }
})();

const menuToggle = document.querySelector('[data-menu-toggle]');
const mobileNav = document.querySelector('[data-mobile-nav]');
if (menuToggle && mobileNav) {
  menuToggle.addEventListener('click', () => {
    const open = mobileNav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(open));
  });
}

function normalizeText(value) {
  return (value || '')
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function filterCards() {
  const search = document.querySelector('[data-filter-search]');
  const category = document.querySelector('[data-filter-category]');
  const cards = document.querySelectorAll('[data-search-card]');
  const empty = document.querySelector('[data-empty-state]');
  if (!search || !cards.length) return;

  const query = normalizeText(search.value);
  const categoryValue = category ? category.value : 'all';
  let visible = 0;

  cards.forEach(card => {
    const haystack = normalizeText(card.dataset.search || '');
    const cardCategory = card.dataset.category || 'all';
    const categoryOk = categoryValue === 'all' || cardCategory === categoryValue;
    const searchOk = !query || haystack.includes(query);
    const show = categoryOk && searchOk;
    card.style.display = show ? '' : 'none';
    if (show) visible++;
  });

  const counter = document.querySelector('[data-results-count]');
  if (counter) counter.textContent = String(visible);
  if (empty) empty.style.display = visible ? 'none' : 'block';
}

document.querySelectorAll('[data-filter-search], [data-filter-category]').forEach(el => {
  el.addEventListener('input', filterCards);
  el.addEventListener('change', filterCards);
});
filterCards();

async function initGlobalSearch() {
  const root = document.querySelector('[data-search-page]');
  if (!root) return;

  const input = root.querySelector('[data-global-search-input]');
  const results = root.querySelector('[data-global-search-results]');
  const counter = root.querySelector('[data-global-search-count]');
  const category = root.querySelector('[data-global-search-category]');

  let items = [];
  try {
    const res = await fetch(root.dataset.indexUrl || '/data/search-index.json');
    items = await res.json();
  } catch (err) {
    results.innerHTML = '<div class="empty-state">Impossible de charger l’index de recherche.</div>';
    return;
  }

  function render() {
    const q = normalizeText(input.value);
    const categoryValue = category.value;
    let matches = items.filter(item => {
      const inCategory = categoryValue === 'all' || item.category === categoryValue;
      if (!inCategory) return false;
      if (!q) return true;
      return normalizeText([item.title, item.summary, item.scope, (item.tags || []).join(' ')].join(' ')).includes(q);
    });

    counter.textContent = String(matches.length);
    if (!matches.length) {
      results.innerHTML = '<div class="empty-state">Aucun résultat pour cette recherche.</div>';
      return;
    }

    const safeRegex = q ? new RegExp(`(${q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'ig') : null;
    results.innerHTML = matches.map(item => {
      const summary = item.summary || '';
      const highlighted = safeRegex ? summary.replace(safeRegex, '<mark>$1</mark>') : summary;
      return `
        <article class="result-card">
          <div class="doc-meta">
            <span class="badge badge-accent">${item.categoryLabel}</span>
            <span class="badge">Version ${item.version || 'n/a'}</span>
          </div>
          <h3><a href="${item.htmlPath}">${item.title}</a></h3>
          <p>${highlighted}</p>
          <div class="tag-list">
            ${(item.tags || []).slice(0, 5).map(tag => `<span class="tag">${tag}</span>`).join('')}
          </div>
          <div class="card-actions" style="margin-top:.9rem;">
            <a class="button small button-primary" href="${item.htmlPath}">Lire</a>
            ${item.rawPath ? `<a class="button small" href="${item.rawPath}">${item.rawLabel || 'Markdown'}</a>` : ''}
          </div>
        </article>
      `;
    }).join('');
  }

  input.addEventListener('input', render);
  category.addEventListener('change', render);
  render();
}

initGlobalSearch();

(() => {
  const StorageKey = "gs-theme";
  const Root = document.documentElement;
  const ThemeButtons = document.querySelectorAll("[data-theme-toggle]");
  const ThemeColorMeta = document.querySelector('meta[name="theme-color"]');

  const GetStoredTheme = () => {
    try {
      return localStorage.getItem(StorageKey);
    } catch {
      return null;
    }
  };

  const StoreTheme = (Theme) => {
    try {
      localStorage.setItem(StorageKey, Theme);
    } catch {
      // Ignore localStorage failures
    }
  };

  const GetButtonLabel = (Theme) => Theme === "light" ? "Lumineux" : "Sombre";
  const GetActionLabel = (Theme) => Theme === "light"
    ? "Activer le thème sombre"
    : "Activer le thème lumineux";

  const ApplyTheme = (Theme, Persist = true) => {
    Root.setAttribute("data-theme", Theme);

    if (Persist) {
      StoreTheme(Theme);
    }

    if (ThemeColorMeta) {
      ThemeColorMeta.setAttribute("content", Theme === "light" ? "#ffffff" : "#22143d");
    }

    ThemeButtons.forEach((Button) => {
      Button.setAttribute("aria-pressed", String(Theme === "light"));
      Button.setAttribute("aria-label", GetActionLabel(Theme));

      const Label = Button.querySelector("[data-theme-label]");
      if (Label) {
        Label.textContent = GetButtonLabel(Theme);
      }
    });
  };

  const InitialTheme = (() => {
    const StoredTheme = GetStoredTheme();
    if (StoredTheme === "light" || StoredTheme === "dark") {
      return StoredTheme;
    }

    return Root.getAttribute("data-theme") || "dark";
  })();

  ApplyTheme(InitialTheme, false);

  ThemeButtons.forEach((Button) => {
    Button.addEventListener("click", () => {
      const CurrentTheme = Root.getAttribute("data-theme") || "dark";
      const NextTheme = CurrentTheme === "dark" ? "light" : "dark";

      ApplyTheme(NextTheme, true);
    });
  });
})();