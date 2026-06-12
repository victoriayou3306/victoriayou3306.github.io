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
    id: "novoprint",
    name: "NovoPrint MultiExtruder Arm",
    cat: "Club",
    dateStart: "2025-03",
    date: "present",
    desc: "Short description of what this project does and what you learned from it.",
    body: "",
    tags: ["Python", "ROS", "3D Printing", "Fusion 360", "Rapid Prototyping", "Project Management"],
    link: ""
  },
  {
    id: "keyboard",
    name: "Custom Split Keyboard",
    cat: "Personal",
    dateStart: "2025-11",
    date: "2026-06",
    desc: "Fully custom split ortholinear keyboard. Custom design & PCB by JLCPCB, case modeled and 3D printed from PLA/TPU",
    body: "This project was a gift to my mother, who's a Professor at Vanderbilt, after she expressed her discomfort and unsatisfaction with her office setup ergonomics (kind of). Ergonomic mice are relatively cheap with common designs. Keyboards had too much variety based on personal comfort, and were too expensive for my liking. As every engineer/tinkerer/middle-aged father has said, 'I can build that better, and cheaper.' \n Though this also gave me many more constraints than my usual projects. Lots of keyboard design choices are subjective to the user, and this was a surprise gift. Also, my mother isn't very tech-savvy. I had hundreds of ideas to implement, but I also knew she wouldn't use anything that was even slightly overcomplicated.",
    tags: ["KiCad", "Soldering", "Rapid Prototyping", "Autodesk Inventor", "3D Printing"],
    headerImage: "banner.png",
    headerOpacity: .30,
    coverImage:  "main.jpeg",
    link: ""
  },
  {
    id: "boids",
    name: "Boids Algorithm Simulation",
    cat: "Class",
    dateStart: "2026-04",
    date: "2026-05",
    desc: "Simulates Boids Algorithm for bird flocking behavior for Computational Physics Final Project. + my own changes.",
    body: "",
    tags: ["Python", "JavaScript"],
    link: ""
  },
  {
    id: "meca",
    name: "6-Axis Robot Arm Control & Simulation",
    cat: "Class",
    dateStart: "2023-09",
    date: "2023-12",
    desc: "Final Project for Vanderbilt University's ME 4271: Introduction to Robotics, implementing Resolved Rates for Mecademic's MECA500.",
    body: "",
    tags: ["MATLAB"],
    link: ""
  },
  {
    id: "continuum",
    name: "Continuum Robot Model",
    cat: "Research",
    dateStart: "2023-06",
    date: "2023-08",
    desc: "Short description of what this project does and what you learned from it.",
    body: "",
    tags: ["MATLAB", "Arduino"],
    link: ""
  },
  {
    id: "cvt",
    name: "Variable Extruder Design",
    cat: "Research",
    dateStart: "2025-06",
    date: "present",
    desc: "Short description of what this project does and what you learned from it.",
    body: "",
    tags: ["MATLAB", "Autodesk Inventor", "3D Printing", "Rapid Prototyping", "Laser Cutting"],
    link: ""
  },
  {
    id: "mitll",
    name: "MIT Lincoln Laboratory Co-Op",
    cat: "Internship",
    dateStart: "2025-09",
    date: "2026-01",
    desc: "Microfabrication Process Engineering Co-Op focused on thin-film development. My main projects were in Epitaxy, E-beam Evaporation, and ALD.",
    body: "This was my first time working with anything less than millimeter scale, as much of my previous experience was in Mechanical Engineering. Needless to say, there was a steep learning curve, but it was an incredible experience. Special shoutout to my mentor Stephen Margiotta for answering thousands of questions throughout the semester and helping with my awful presentation skills. \n I've condensed my Final Presentation to give an overview of what I worked on, but I've also included the full version including my speaker notes (aka script I forgot to follow) for anyone who's interested.",
    notes: ["hi"],
    tags: ["JMP", "Microfabrication", "CVD", "E-beam Evaporation", "ALD", "SEM", "Ellipsometry"],
    link: "",
    slides: "full_presentation.pdf"
  },
  {
    id: "vex",
    name: "VEX Robotics Competitions",
    cat: "Club",
    dateStart: "2022-09",
    date: "2024-04",
    desc: "empty",
    body: "",
    tags: ["Fusion 360"],
    link: ""
  },
  {
    id: "3dp",
    name: "Miscellaneous Small Projects",
    cat: "Personal",
    dateStart: "2020",
    date: "0000",
    desc: "Miscellaneous projects that are undeserving of their own page. But funny/interesting enough to appear at all",
    body: "",
    tags: ["Fusion 360", "Autodesk Inventor", "Blender", "3D Printing", "Rapid Prototyping"],
    link: ""
  },
];
