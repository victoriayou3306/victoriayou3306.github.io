/**
 * projects-utils.js
 * Shared helpers loaded by index.html, projects.html, and project.html.
 * No need to edit this file.
 */

/* "YYYY-MM" or "YYYY"  →  "May 2024" or "2024" */
function fmtDate(d) {
  if (!d) return '';
  const [y, m] = d.split('-');
  if (!m) return y;
  return new Date(+y, +m - 1, 1).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

/* Returns "May 2024 – Mar 2025", "May 2024", or "" */
function fmtDateRange(dateStart, dateEnd) {
  const start = fmtDate(dateStart);
  const end   = fmtDate(dateEnd);
  if (start && end)   return `${start} – ${end}`;
  if (end)            return end;
  if (start)          return start;
  return '';
}

/* Sort PROJECTS in-place: newest end date first */
function sortProjects(arr) {
  return arr.sort((a, b) => (b.date || '').localeCompare(a.date || ''));
}

/* Build a card element (used by index.html and projects.html) */
function buildCard(p, { clickable = true } = {}) {
  const card = document.createElement('div');
  card.className = 'card';
  if (clickable) card.style.cursor = 'pointer';

  const dateStr = fmtDateRange(p.dateStart, p.date);

  card.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.5rem;">
      <div class="card-category" style="margin-bottom:0;">${p.cat}</div>
      ${dateStr ? `<span class="card-date">${dateStr}</span>` : ''}
    </div>
    <h3>${p.name}</h3>
    <p>${p.desc}</p>
    <div class="card-tags">${p.tags.map(t => `<span class="card-tag">${t}</span>`).join('')}</div>
    ${p.link ? `<p style="margin-top:0.75rem;"><a href="${p.link}" target="_blank" class="card-ext-link" onclick="event.stopPropagation()">${p.linkLabel || 'View project'} →</a></p>` : ''}
  `;

  if (clickable) {
    card.addEventListener('click', () => {
      window.location.href = `project.html?id=${encodeURIComponent(p.id)}`;
    });
  }

  return card;
}
