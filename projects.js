/**
 * projects.js
 * Central list of all your projects.
 * Edit this file to add/remove/update projects — the homepage and projects page
 * both load from here automatically.
 *
 * Fields:
 *   id       — unique string, no spaces (used internally)
 *   name     — project title
 *   cat      — category label (shows as a badge)
 *   date     — "YYYY-MM" format (e.g. "2024-05"). Most recent shows first.
 *              Use "YYYY" if you only know the year (e.g. "2023").
 *   desc     — 1–2 sentence description
 *   tags     — array of skill/tool strings (shown as chips; drives homepage popups)
 *   link     — (optional) URL to demo, repo, writeup, etc.
 */

const PROJECTS = [
  {
    id: "project-one",
    name: "Project Title One",
    cat: "Engineering",
    date: "2025-03",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["Python", "SQL", "Tool A"],
    link: ""
  },
  {
    id: "project-two",
    name: "Project Title Two",
    cat: "Research",
    date: "2024-11",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["Python", "Data Analysis", "Tool B"],
    link: ""
  },
  {
    id: "project-three",
    name: "Project Title Three",
    cat: "Design",
    date: "2024-08",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["Figma", "Tool A", "Tool C"],
    link: ""
  },
  {
    id: "project-four",
    name: "Project Title Four",
    cat: "Engineering",
    date: "2024-05",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["SQL", "Tool C", "Tool D"],
    link: ""
  },
  {
    id: "project-five",
    name: "Project Title Five",
    cat: "Research",
    date: "2023-09",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["Data Analysis", "Tool B", "Tool D"],
    link: ""
  },
  {
    id: "project-six",
    name: "Project Title Six",
    cat: "Design",
    date: "2023-04",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["Figma", "Tool C"],
    link: ""
  },
];
