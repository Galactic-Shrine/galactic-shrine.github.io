document.getElementById('currentYear')?.append(new Date().getFullYear());

const current = window.location.pathname.replace(/\/index\.html$/, '/').replace(/index\.html$/, '');
for (const link of document.querySelectorAll('[data-nav]')) {
  const href = link.getAttribute('href');
  if (!href) continue;
  const normalized = new URL(href, window.location.origin + window.location.pathname).pathname
    .replace(/\/index\.html$/, '/')
    .replace(/index\.html$/, '');
  if (normalized === current) link.classList.add('active');
}