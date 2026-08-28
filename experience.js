/**
 * experience.js
 * Central list of work/research experience.
 * Loaded by about.html (renders the Experience timeline) and index.html
 * (merges skills into the homepage skill pills) so both stay in sync.
 *
 * Fields per entry:
 *   date       — display string, can include HTML like <em>Present</em>
 *   title      — role title
 *   sub        — org / location line, can include HTML
 *   bullets    — array of strings, each rendered as a bullet point
 *   thumb      — (optional) path to a small image
 *   link       — (optional) URL for "See more →" (use "project.html?id=X" for project pages)
 *   linkLabel  — (optional) override the default "See more →" text
 *   skills     — (optional) array of skill strings. These are ADDED to the
 *                skill pill counts on about.html and index.html — they do
 *                NOT affect anything else. Category shown in the popup is
 *                auto-derived from the title:
 *                  "Undergraduate Research..." → "Research"
 *                  title containing "Intern"   → "Internship"
 *                  otherwise                   → the title itself
 *   photos     — (optional) array of { src, caption } objects, same shape
 *                as BIO_PHOTOS on about.html. When present, a "📷 Photos"
 *                link appears on that entry — clicking it opens a
 *                fullscreen slideshow popup. Use this for experiences
 *                that don't have a project page (no `link` field) but you
 *                still want to show a few photos.
 */

const EXPERIENCE_LIST = [
  {
    date:  "July 2026 – <em>Present</em>",
    title: "Undergraduate Research",
    sub:   "Hooberman High Energy Physics Group · <em>Champaign, IL</em>",
    bullets: ["Designing cosmic-ray muon tomography for rare mineral and metal detection"],
    skills: ["Autodesk Inventor"],
    // photos: [
    //   { src: "assets/experience/hooberman/1.jpg", caption: "" },
    //   { src: "assets/experience/hooberman/2.jpg", caption: "" },
    // ],
  },
  {
    date:  "May 2026 – August 2026",
    title: "Mechatronics Intern",
    sub:   "KLA · <em>Ann Arbor, MI</em>",
    bullets: [
      "Developed a Python based system identification pipeline for generating precision motion stage models for controls",
      "Automated the evaluation of different excitation and processing methods to build Frequency Response Functions",
      "Validated an array of 700+ models, comparing simulated vs experimental trajectories in a range of 1 µm – 5 cm",
      "Designed a live update GUI for loop shaping to visualize system stability margins using plant & controller Bode Plots",
    ],
    skills: ["Python"],
    // photos: [
    //   { src: "assets/experiences/KLAphoto.jpg", caption: "" },
    // ],
  },
  {
    date:  "March 2026 – <em>Present</em>",
    title: "Undergraduate Research",
    sub:   "Quantum and Nanoscale Photonics Laboratory · <em>Champaign, IL</em>",
    bullets: ["Embedding nanodiamonds in SiN for scalable quantum technologies"],
    skills: ["Microfabrication", "Ellipsometry", "SEM", "XRR"],
  },
  {
    date:  "February 2026 – May 2026",
    title: "Web Content Developer",
    sub:   "UIUC Mechanical Sciences &amp; Engineering · <em>Champaign, IL</em>",
    bullets: [
      "Developing and maintaining online reference pages for ME 270: Design for Manufacturing coursework and materials",
      "Typesetting lecture slides as technical documents in LaTeX and generating supplemental examples and figures",
      "Managing version control and collaborative workflows with GitHub while optimizing functionality and accessibility",
    ],
    skills: [],
  },
  {
    date:  "September 2025 – January 2026",
    title: "Microfabrication Process Engineering Co-Op",
    sub:   "MIT Lincoln Laboratory · <em>Lexington, MA</em>",
    thumb: "assets/projects/mitll/wafer.jpg",
    link:  "project.html?id=mitll",
    bullets: [
      "Increased multi-wafer uniformity of HZO Atomic Layer Deposition films by 88% with iterative recipe optimization",
      "Identified an 8% ellipsometry measurement error via XRR cross-validation and generated revised optical models",
      "Refined stability and conditioning for metals E-beam Evaporation, improving Hf deposition conductivity by 49%",
      "Developed Selective Si Epitaxial Growth processes for in-house fabrication of RSD transistors and sub 90nm CMOS",
    ],
    skills: [],
  },
  {
    date:  "February 2025 – August 2025",
    title: "R&amp;D Engineering Intern",
    sub:   "Cygnus Photonics · <em>Champaign, IL</em>",
    bullets: [
      "Manufactured UV/VUV exposure systems for customer research and performed post-use troubleshooting and repair",
      "Facilitated incoming quality control to drive design revisions; created 25+ technical part drawings for manufacturing",
      "Designed and iterated modular experimentation units from 3D-printed and laser cut prototypes to machined products",
      "Reprogrammed a 3D-Printing Gantry using LabVIEW to determine uniformity for lamp area increases of up to 500%",
    ],
    skills: ["3D Printing", "Laser Cutting", "Autodesk Inventor", "LabVIEW", "Rapid Prototyping"],
    // photos: [
    //   { src: "assets/experience/cygnus/1.jpg", caption: "" },
    // ],
  },
  {
    date:  "May 2024 – August 2024",
    title: "Restoration Mechanic Intern",
    sub:   "Nashville Motorcycle Repair · <em>Nashville, TN</em>",
    bullets: [
      "Fully restored non-running motorcycles for resale: Honda Z50 Minibike; 1982 Suzuki GS1100EZ",
      "Partially restored motorcycles in poor condition for resale: 1996 Moto Guzzi Sport 1000; Suzuki LS650 Savage Ryca",
      "Rebuilt and serviced all customer Ural Motorcycle wheels affected by the 2011-2017 Ural Factory Rim Recalls",
    ],
    skills: [],
    // photos: [
    //   { src: "assets/experience/motorcycle/1.jpg", caption: "" },
    //   { src: "assets/experience/motorcycle/2.jpg", caption: "" },
    // ],
  },
];