/**
 * garage.js
 * Central list of vehicles shown on garage.html.
 *
 * Fields:
 *   id           — unique string, no spaces (used for image folder path)
 *   name         — vehicle name, shown in the title bar
 *   image        — filename in assets/garage/<id>/ — the main card image
 *   profileImage — filename in assets/garage/<id>/ — circular badge, top-right
 *   specs        — HTML string shown in the text box below the image.
 *                  Plain text works, or use your own <br> / <ul><li> markup
 *                  for multi-line specs. (We'll refine the exact spec fields
 *                  and layout later — for now this is a freeform string.)
 */

const GARAGE = [
  {
    id: "z400",
    name: "'Zorua'",
    image: "main.jpg",
    profileImage: "zorua.jpg",
    specs: "Model: 2019 Kawasaki Z400<br> Acquired: July 2025 (Facebook Marketplace) <br> Mileage: 21500 | My Miles: 4000"
  },
  {
    id: "xs750",
    name: "'Squirtle'",
    image: "squirtle.jpg",
    profileImage: "squirtle.jpg",
    specs: "Model: 1979 Yamaha XS750F Special <br> Acquired: August 2026 (Jonny Pang) <br>"
  },
];