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
    id: "Novoprint",
    name: "NovoPrint MultiExtruder Arm",
    cat: "Research",
    date: "2025-03",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["Python", "SQL", "Tool A"],
    link: ""
  },
  {
    id: "keyboard",
    name: "Custom Split Keyboard",
    cat: "Personal",
    date: "2026-06",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["KiCad", "Soldering", "Rapid Prototyping", "Inventor"],
    link: ""
  },
  {
    id: "boids",
    name: "Boids Algorithm Simulation",
    cat: "Class",
    date: "2026-05",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["Python", "JavaScript"],
    link: ""
  },
  {
    id: "meca",
    name: "Meca 6-Axis Arm Control & Simulation",
    cat: "Class",
    date: "2023-12",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["MATLAB"],
    link: ""
  },
  {
    id: "continuum",
    name: "Continuum Robot Model",
    cat: "Research",
    date: "2023-08",
    desc: "Short description of what this project does and what you learned from it.",
    tags: ["MATLAB", "Tool B", "Tool D"],
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
