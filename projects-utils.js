/**
 * projects-utils.js
 * Shared helpers loaded by index.html, projects.html, and project.html.
 * No need to edit this file.
 */

/* "YYYY-MM" or "YYYY"  →  "May 2024" or "2024" */
function fmtDate(d) {
  if (!d) return '';
  if (d === 'present' || d === '9999') return 'Present';
  if (d === '0000' || d === '0001') return '';
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

/* ── Experience category label (for skill popups) ──────────────────────────
   "Undergraduate Research" → "Research"
   Any title containing "Intern" → "Internship"
   Otherwise, the title itself is used as the category. */
function expCategory(title) {
  if (/^Undergraduate Research/i.test(title)) return 'Research';
  if (/Intern/i.test(title)) return 'Internship';
  return title;
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

/* ── Skill popup (floating, viewport-aware) ───────────────────────────────
   A single shared popup lives on <body> and is positioned with position:fixed
   from the hovered pill's bounding box. Because it isn't nested inside the
   pill (or any container), it can't be clipped by parents, and it adapts to
   any screen size / aspect ratio:
     • opens above the pill, or flips below when there isn't room above
     • slides left/right to stay inside the viewport (the arrow keeps
       pointing at the pill)
     • tap a pill on touch screens to open it; tap anywhere else to close
   Its styles are injected once from here, so no stylesheet edits are needed.
*/
const _SKILL_POPUP_CSS = `
.skill-popup-float {
  position: fixed;
  left: 0; top: 0;
  z-index: 300;
  box-sizing: border-box;
  width: max-content;
  min-width: min(210px, calc(100vw - 24px));
  max-width: min(280px, calc(100vw - 24px));
  background: var(--surface, #fff);
  border: 1px solid var(--border, #e5e2dd);
  border-radius: 10px;
  box-shadow: 0 6px 20px rgba(0,0,0,0.1);
  padding: 12px 14px;
  font-size: 0.82rem;
  font-weight: 500;
  text-align: left;
  white-space: normal;
  pointer-events: none;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.12s ease, visibility 0.12s;
}
.skill-popup-float.show { opacity: 1; visibility: visible; }
.skill-popup-inner { max-height: calc(100vh - 42px); overflow: hidden; }
.skill-popup-float::before {
  content: '';
  display: none;
  position: absolute;
  left: var(--arrow-x, 50%);
  width: 10px; height: 10px;
  background: var(--surface, #fff);
  border: 1px solid var(--border, #e5e2dd);
  transform: translateX(-50%) rotate(45deg);
}
.skill-popup-float[data-placement="top"]::before    { display: block; bottom: -6px; border-top: none;    border-left: none; }
.skill-popup-float[data-placement="bottom"]::before { display: block; top: -6px;    border-bottom: none; border-right: none; }
`;

let _skillPopupEl   = null;   // the shared popup element
let _skillPopupPill = null;   // the pill it's currently attached to

function _ensureSkillPopup() {
  if (_skillPopupEl) return _skillPopupEl;

  const style = document.createElement('style');
  style.id = 'skill-popup-styles';
  style.textContent = _SKILL_POPUP_CSS;
  document.head.appendChild(style);

  const el = document.createElement('div');
  el.className = 'skill-popup-float';
  el.setAttribute('role', 'tooltip');
  document.body.appendChild(el);
  _skillPopupEl = el;

  // Keep the popup glued to its pill if the page scrolls or resizes while open
  let queued = false;
  const reposition = () => {
    if (!_skillPopupPill || queued) return;
    queued = true;
    requestAnimationFrame(() => { queued = false; _positionSkillPopup(); });
  };
  window.addEventListener('scroll', reposition, { passive: true, capture: true });
  window.addEventListener('resize', reposition);

  // Touch: tapping anywhere that isn't a pill closes the popup
  document.addEventListener('click', _hideSkillPopup);
  document.addEventListener('touchstart', e => {
    if (!(e.target && e.target.closest && e.target.closest('.skill-pill'))) _hideSkillPopup();
  }, { passive: true });

  return el;
}

function _positionSkillPopup() {
  const el = _skillPopupEl, pill = _skillPopupPill;
  if (!el || !pill) return;

  const r = pill.getBoundingClientRect();
  if (!r.width && !r.height) { _hideSkillPopup(); return; }   // pill is hidden/collapsed

  const MARGIN = 8, GAP = 10, ARROW_PAD = 16;
  const vw  = document.documentElement.clientWidth;
  const vh  = document.documentElement.clientHeight;
  const nav = document.querySelector('nav');
  const topLimit = Math.max(0, nav ? nav.getBoundingClientRect().bottom : 0) + MARGIN;

  const w = el.offsetWidth, h = el.offsetHeight;

  // Vertical: prefer above, then below, else whichever side has more room
  const spaceAbove = r.top - GAP - topLimit;
  const spaceBelow = vh - MARGIN - (r.bottom + GAP);
  let placement;
  if (h <= spaceAbove)       placement = 'top';
  else if (h <= spaceBelow)  placement = 'bottom';
  else                       placement = spaceAbove >= spaceBelow ? 'top' : 'bottom';

  let top = placement === 'top' ? r.top - GAP - h : r.bottom + GAP;
  top = Math.min(Math.max(top, topLimit), vh - MARGIN - h);

  // If it was squeezed so far that it covers the pill, drop the arrow
  if (top < r.bottom && top + h > r.top) placement = 'none';

  // Horizontal: center on the pill, then clamp inside the viewport
  let left = r.left + r.width / 2 - w / 2;
  left = Math.min(Math.max(left, MARGIN), vw - MARGIN - w);
  const arrowX = Math.min(Math.max(r.left + r.width / 2 - left, ARROW_PAD), w - ARROW_PAD);

  el.style.left = Math.round(left) + 'px';
  el.style.top  = Math.round(top)  + 'px';
  el.style.setProperty('--arrow-x', Math.round(arrowX) + 'px');
  el.dataset.placement = placement;
}

function _showSkillPopup(pill, html) {
  const el = _ensureSkillPopup();
  _skillPopupPill = pill;
  el.innerHTML = '<div class="skill-popup-inner">' + html + '</div>';
  _positionSkillPopup();           // measure + place while still invisible
  el.classList.add('show');
}

function _hideSkillPopup() {
  _skillPopupPill = null;
  if (_skillPopupEl) _skillPopupEl.classList.remove('show');
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
   Hovering (or tapping, on touch screens) a pill shows the shared floating
   popup — see _showSkillPopup above.
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
    pill.textContent = tag;

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

    const popupHTML = `
      <div class="popup-heading">${totalLabel}</div>
      ${projectRows}
      ${courseRows}`;

    pill.addEventListener('mouseenter', () => {
      pill.style.filter = 'brightness(0.88)';
      _showSkillPopup(pill, popupHTML);
    });
    pill.addEventListener('mouseleave', () => {
      pill.style.filter = '';
      if (_skillPopupPill === pill) _hideSkillPopup();
    });
    // Touch screens have no hover: a tap opens the popup, tapping elsewhere closes it
    pill.addEventListener('click', e => {
      e.stopPropagation();
      _showSkillPopup(pill, popupHTML);
    });

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

  const dateStr  = fmtDateRange(p.dateStart, p.date);
  const imgPath  = p.coverImage ? `assets/projects/${p.id}/${p.coverImage}` : null;

  /* Cover image block (only when coverImage is set) */
  const coverHTML = imgPath ? `
    <div class="card-cover">
      <img src="${imgPath}" alt="${p.name}" loading="lazy"
           onerror="this.parentElement.style.display='none'">
      <div class="card-cover-desc">${p.desc}</div>
    </div>` : '';

  /* Tag chips — rendered all at once; JS below handles 2-row overflow */
  const tagsHTML = p.tags.map(t =>
    `<span class="card-tag">${t}</span>`
  ).join('');

  card.innerHTML = `
    <div class="card-body card-body-top" style="padding-bottom:0.6rem;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem;">
        <div class="card-category" style="margin-bottom:0;">${p.cat}</div>
        ${dateStr ? `<span class="card-date">${dateStr}</span>` : ''}
      </div>
      <h3>${p.name}</h3>
    </div>
    ${coverHTML}
    <div class="card-body card-body-bottom" style="padding-top:0.6rem;">
      ${!imgPath ? `<div class="card-desc-inline">${p.desc}</div>` : ''}
      <div class="card-tags">${tagsHTML}</div>
      ${p.link ? `<p style="margin-top:0.6rem;margin-bottom:0;"><a href="${p.link}" target="_blank" class="card-ext-link" onclick="event.stopPropagation()">${p.linkLabel || 'View project'} →</a></p>` : ''}
    </div>
  `;

  /* Collapse tags to 2 rows with a (…) overflow bubble */
  requestAnimationFrame(() => {
    const tagsEl  = card.querySelector('.card-tags');
    const tagEls  = [...tagsEl.querySelectorAll('.card-tag')];
    if (!tagEls.length) return;

    // Measure: find where the 3rd row starts
    const rowH   = tagEls[0].offsetHeight + 5; // tag height + gap
    const top0   = tagEls[0].offsetTop;
    const cutoff = top0 + rowH * 2 + 3;

    const hidden = tagEls.filter(t => t.offsetTop > cutoff);
    if (!hidden.length) return;

    hidden.forEach(t => t.style.display = 'none');
    const more = document.createElement('span');
    more.className = 'card-tags-more';
    more.textContent = `+${hidden.length}`;
    more.title = hidden.map(t => t.textContent).join(', ');
    tagsEl.appendChild(more);
  });

  if (clickable) {
    card.addEventListener('click', () => {
      window.location.href = `project.html?id=${encodeURIComponent(p.id)}`;
    });
  }

  return card;
}

/* ── Build a garage card ─────────────────────────────────────────────────
   Structure: title bar (with circular profile badge overlapping top-right,
   bleeding onto both the title and the image below) → full image, no hover
   description → spec text box below.

   v fields:
     id            — unique string, used for image paths
     name          — vehicle name, shown in title bar
     image         — filename in assets/garage/<id>/
     profileImage  — filename in assets/garage/<id>/ for the circular badge
     specs         — HTML string shown in the box below the image
                     (plain text or your own <br>/<ul> markup)
*/
function buildGarageCard(v) {
  const card = document.createElement('div');
  card.className = 'garage-card';

  const imgPath     = v.image        ? `assets/garage/${v.id}/${v.image}`        : null;
  const profilePath = v.profileImage ? `assets/garage/${v.id}/${v.profileImage}` : null;

  const profileHTML = profilePath ? `
    <div class="garage-card-profile">
      <img src="${profilePath}" alt="${v.name} profile" loading="lazy"
           onerror="this.parentElement.style.display='none'">
    </div>` : '';

  const coverHTML = imgPath ? `
    <div class="garage-card-cover">
      <img src="${imgPath}" alt="${v.name}" loading="lazy"
           onerror="this.style.display='none';this.parentElement.style.background='var(--accent-light)'">
    </div>` : '';

  card.innerHTML = `
    <div class="garage-card-title">
      <h3>${v.name}</h3>
      ${profileHTML}
    </div>
    ${coverHTML}
    <div class="garage-card-specs">${v.specs || ''}</div>
  `;

  return card;
}