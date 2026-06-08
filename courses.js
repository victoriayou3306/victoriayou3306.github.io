/**
 * courses.js
 * Central list of your education and coursework.
 * Loaded by about.html. Courses with skill tags feed into the skills section —
 * those skills will appear in the homepage pill popups under "Coursework".
 *
 * Fields per course:
 *   name   — course name as you want it displayed
 *   skills — (optional) array of skill strings matching tags used in projects.js
 *            These add to the skill count and appear in the skill popups.
 *
 * Fields per school:
 *   school  — institution name
 *   degree  — degree/program label
 *   dates   — display string, e.g. "2024 – 2028"
 *   courses — array of course objects (see above)
 */

const EDUCATION = [
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "BS · Mechanical Engineering",
    dates: "2024 – 2028",
    courses: [
      { name: "Mechanical Design I",              skills: [] },
      { name: "Dynamics of Mechanical Systems",   skills: [] },
      { name: "Design for Manufacturing",         skills: [] },
      { name: "Thermodynamics",                   skills: [] },
      { name: "Fluid Dynamics",                   skills: [] },
      { name: "Solid Mechanics",                  skills: [] },
      { name: "Electrical Circuits",              skills: ["Arduino"] },
      { name: "Computer Aided Design",            skills: ["Fusion 360"] },
      { name: "Statics",                          skills: [] },
    ]
  },
  {
    school: "University of Illinois Urbana-Champaign",
    degree: "BS · Computational Physics",
    dates: "2024 – 2028",
    courses: [
      { name: "Special Relativity",               skills: [] },
      { name: "Classical Mechanics",              skills: [] },
      { name: "Computational Physics",            skills: ["Python"] },
      { name: "Computer Science I",               skills: ["Java"] },
      { name: "Computer Science II",              skills: ["C++"] },
      { name: "Discrete Structures",              skills: [] },
      { name: "Semiconductor Devices",            skills: [] },
      { name: "Quantum Information Theory",       skills: [] },
      { name: "Electromagnetic Fields",           skills: [] },
    ]
  },
  {
    school: "Vanderbilt University",
    degree: "High School Dual Enrollment",
    dates: "2023 – 2024",
    courses: [
      { name: "Abstract Linear Algebra",          skills: [] },
      { name: "Intro to Robotics",                skills: ["MATLAB"] },
    ]
  },
];
