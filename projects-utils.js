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

/* ── Skill pill color ──────────────────────────────────────────────────────
   Interpolates from light mint (1 use) to deep forest green (max uses).
   Returns { bg, text } CSS color strings. */
function pillColor(count, maxCount) {
  const t    = maxCount <= 1 ? 0 : (count - 1) / (maxCount - 1);
  const l    = Math.round(86 - t * 60);
  const s    = Math.round(28 + t * 14);
  const textL = l < 55 ? 95 : 22;
  return {
    bg:   `hsl(162, ${s}%, ${l}%)`,
    text: `hsl(162, 30%, ${textL}%)`
  };
}

/* ── Build skill pills ─────────────────────────────────────────────────────
   container    : DOM element to append pills into
   allTags      : sorted array of tag strings (sorted by count desc before calling)
   tagCounts    : { tagName: totalCount }   (projects + courses combined)
   maxCount     : highest count value
   projectsMap  : { tagName: [{name, cat}] }
   coursesMap   : { tagName: ["Course Name", ...] }   (pass {} if no courses data)
   options:
     collapse   : true = hide pills beyond 2 rows, show (+N) expander
*/
function buildSkillPills(container, { allTags, tagCounts, maxCount, projectsMap, coursesMap = {}, collapse = false }) {
  container.innerHTML = '';

  allTags.forEach(tag => {
    const count    = tagCounts[tag] || 1;
    const projects = projectsMap[tag] || [];
    const courses  = coursesMap[tag]  || [];
    const { bg, text } = pillColor(count, maxCount);

    const pill = document.createElement('div');
    pill.className = 'skill-pill';
    pill.style.cssText = `background:${bg};color:${text};border-color:transparent;`;

    const projectRows = projects.map(p => `
      <div class="popup-project">
        <div class="popup-dot"></div>
        <div>
          <div class="popup-project-name">${p.name}</div>
          <div class="popup-project-cat">${p.cat}</div>
        </div>
      </div>`).join('');

    const courseRows = courses.length ? `
      <div class="popup-section-label">Coursework</div>
      <div class="popup-courses">${courses.join(' · ')}</div>` : '';

    const totalLabel = count === 1 ? '1 use' : `${count} uses`;

    pill.innerHTML = `${tag}
      <div class="skill-popup">
        <div class="popup-heading">${totalLabel}</div>
        ${projectRows}
        ${courseRows}
      </div>`;

    pill.addEventListener('mouseenter', () => { pill.style.filter = 'brightness(0.88)'; });
    pill.addEventListener('mouseleave', () => { pill.style.filter = ''; });

    container.appendChild(pill);
  });

  /* Collapse to 2 rows if requested */
  if (collapse) _applyCollapse(container);
}

/* Internal: measure pill rows and hide overflow beyond 2, add expander */
function _applyCollapse(container) {
  // Run after paint so offsetTop is populated
  requestAnimationFrame(() => {
    const pills = [...container.querySelectorAll('.skill-pill')];
    if (!pills.length) return;

    const rowH   = pills[0].offsetHeight + 8; // height + gap
    const top0   = pills[0].offsetTop;
    const cutoff = top0 + rowH * 2 + 4;       // allow 2 rows

    let hiddenCount = 0;
    pills.forEach(p => {
      if (p.offsetTop > cutoff) { p.dataset.collapsedHidden = '1'; p.style.display = 'none'; hiddenCount++; }
    });

    if (!hiddenCount) return;

    // Remove any existing expander
    const old = container.querySelector('.pill-expander');
    if (old) old.remove();

    const expander = document.createElement('div');
    expander.className = 'skill-pill pill-expander';
    expander.style.cssText = 'background:#e5e2dd;color:#6b6b6b;cursor:pointer;border-color:transparent;';
    expander.textContent = `+${hiddenCount} more`;
    expander.addEventListener('click', () => {
      container.querySelectorAll('[data-collapsed-hidden]').forEach(p => { p.style.display = ''; delete p.dataset.collapsedHidden; });
      expander.remove();
    });
    container.appendChild(expander);
  });
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
