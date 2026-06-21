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
    // coverImage: "main.jpeg",
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
  // {
  //   id: "boids",
  //   name: "Boids Algorithm Simulation",
  //   cat: "Class",
  //   dateStart: "2026-04",
  //   date: "2026-05",
  //   desc: "Simulates Boids Algorithm for bird flocking behavior for Computational Physics Final Project.",
  //   body: "",
  //   tags: ["Python", "JavaScript"],
  //   link: ""
  // },
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
  // {
  //   id: "cvt",
  //   name: "Variable Extruder Design",
  //   cat: "Research",
  //   dateStart: "2025-06",
  //   date: "present",
  //   desc: "Short description of what this project does and what you learned from it.",
  //   body: "",
  //   tags: ["MATLAB", "Autodesk Inventor", "3D Printing", "Rapid Prototyping", "Laser Cutting"],
  //   link: ""
  // },
  {
    id: "mitll",
    name: "MIT Lincoln Labs Co-Op",
    cat: "Internship",
    dateStart: "2025-09",
    date: "2026-01",
    desc: "Microfabrication Process Engineering Co-Op focused on thin-film development. My main projects were in Epitaxy, E-beam Evaporation, and ALD.",
    body: "This was my first time working with anything less than millimeter scale, as much of my previous experience was in Mechanical Engineering. Needless to say, there was a steep learning curve, but it was an incredible experience. Special shoutout to my mentor Stephen Margiotta for answering thousands of questions throughout the semester and helping with my awful presentation skills. \n I've attached my Final Presentation including my speaker notes (aka script I forgot to follow) for anyone who's interested.",
    notes: ["hi", "", "", "The first project i worked on is with the Beneq in bay 6 for HZO films. We've been getting thickness variations both within individual wafers, as well as between different wafers in a single run. Adding these variations up makes a range of almost a nanometer, which is huge for a 5nm film. This project was started by a previous co-op, giving a few baseline tests of 4 wafer runs. This is how we typically load the 8-slot beneq cassette, as shown in the bottom right here, primarily to reduce scratch risk in the loading and unloading.",
      "Before i get into the actual experiment, I want to give a brief overview of ALD, which is the mechanism the Beneq uses for deposition. So atomic layer deposition allows for Angstrom level control, since the reactants are self limiting in the deposition of a single atomic layer. When you flow in your precursor, so our hafnium and zirconium oxide sources, they only react with and deposit on available surface sites on the wafer. Once the wafer is fully saturated, deposition will stop, at which point you would purge the chamber and flow in your reactant, which we use water. The reactant can then deposit on the new surface sites until full saturation, and then you purge your chamber and repeat the cycle until you reach your target thickness. This self-limiting aspect of ALD is what allows for low variation in your thin films, which we were not really seeing with our Beneq results.",
      "Here is the experiment baseline, with the tests done by the last co-op. You can see with our baseline recipe we have a within wafer standard deviation consistently under 3%. This is under the limit set by the Fiji ALD tool we previously used for these films, so this is acceptable for now. The bigger issue is the wafer-to-wafer variation, which you can see our baseline of 5-7%, which we want to get under 3% as well. The first test that was trialed was a 1-hour temperature stabilization period before deposition, as this is something done on the bay 1 Beneq, but as you can see there was no improvement in our wafer-to-wafer variation. He also tried doubling our step times, in case wafers weren't reaching full saturation between cycles, and doubling purge times, in case the chamber wasn't getting fully purged, and neither of which improved our results.",
      "That's where i picked up the recipe development, and over the course of 10 recipe iterations we've made modifications to variables like the precursor delivery, temperature, and pulse lengths, as well as how we're using the carrier gas and its flow rate. First I want to give a little bit more detail on the precursor delivery modes, since the names alone don't explain much",
      "The tool has 3 valves separating your gas canisters and your deposition source, and theres plenty of ways you can manipulate these valves to flow your gas into the chamber, but the Beneq manual gave 3 examples. The first is the normal mode, so it opens valve #3, relying on the partial pressure of your precursor canister to carry the gas into the deposition chamber.",
      "The Load and Release flows Carrier Gas to pressurize the canister before opening out the hot source valve into the chamber, and then cleans out the lines with carrier gas \n-The graphs give a visual to the pressure in the gas lines- blue/reddish are the hot sources and green is the H2O",
      "The last example mode is the flow through mode. This is very similar to the load and release mode, starting by pressurizing the canister before opening valve 3. but the last step opens all the valves, flowing gas through all of the lines to finish up. Again here you can see the pressure in the different gas lines, and kind of get an idea of how the cycles differ between modes.",
      "The current mode we are using is essentially a modified version of the flow through mode. we pressurize the hot source canister, but skip the step opening valve 3 by itself and just open all the valves, so precursor only enters the chamber when gas is flowing through all the lines. This is the mode that's given us the best results, and again your seeing different patterns in the gas pressures. ",
      "As you can see here, after we figured out the precursor delivery mode, we were making solid improvements to our wafer-to-wafer variation, getting under the original 3% goal by recipes 6 and 7. \nAt this point, we wanted to finalize the recipe development, and finish up testing using repolished wafers. This was mostly because doing 15-20 tests of 4 wafers each gets really expensive with brand new wafers, and since we were only measuring thickness, not particles, this shouldn't matter. However, you can see in the bottom 3 lines that our variation numbers shot up way above the original 3% limits.\nSo we repeated these tests a few times, trying to figure out if it was from the wafers themselves, or if it was from other factors like run-to-run variation in how long we left the wafer in the chamber in between the loading and the unloading. We also wanted to see if this wafer issue was something we could fix, which is what those pre deposition water cycles were for, the idea being to ensure the wafer surfaces are fully saturated with hydroxyl groups before you try to begin deposition. As you can see, this did not help our variation.",
      "Here's a better look at how the wafer types differ. On the left we have within wafer standard deviation, and you can clearly see the new wafers were consistently under 3% while the reclaimed wafers were averaging more than double that. On the right, we have our thickness variation between wafer slots, with wafer 1 being the bottom slot and wafer 7 being the top, alternating 4 wafers in the 8 slots. You can see the blue lines are very uniform and consistent, representing the new wafers, and the red lines showing reclaimed wafers have much higher deposition rates, as well as much worse uniformity. \nEvidently, the different wafer types have a different behavior in deposition, so we went ahead and finished up our recipe development with new wafers.",
      "Disregarding those reclaimed wafer tests, you can see our new recipe is consistently getting below 1% wafer to wafer variation, and within wafer standard deviation values still look good and well within the 3% acceptable range. ",
      "Here is another look at how our recipe compares to the baseline, and clearly, we are seeing much less wafer to wafer variation on our new recipe. The full blue to red range here is about 8.5 angstroms, and our new recipe only reaches about half of that, with a range of 4-4.5 angstroms. \nYou can ese that wafer 1, which is the bottom slot, is still seeing a heavier deposition and a little bit worse uniformity than the others, with this thicker ring at the top of the wafer from the positioning of the gas inflow to the chamber, but it is still under 3% in standard deviation. ",
      "I mentioned at the beginning that all our tests have been done using 4 wafers at a time, and we wanted to briefly look at if there was a better way to load the cassette for uniformity. \nSo the first step was trying a full 8 wafer cassette. Our wafer-to-wafer variation jumped up from less than 1% to almost 4, and you can see a steady increase in wafer thickness as you move from bottom to top slots. The within wafer standard deviation is consistently around 2.3-2.7% throughout the whole cassette, so a much higher average than our 4 wafer tests. \nYou can also see this consistent patterning in the wafer contours, with this thinner region appearing in the top central-ish area of the wafers (from this POV), which is new from our 4 wafer tests. Evidently, the way in which you load the tool, or at least number of wafers in the cassette, has some effect on your deposition uniformity.",
      "We tried another test of 4 wafers, this time in slots 2468 rather than 1357, as well as using a reclaimed wafer in slot 1 acting as a dummy. This only really increases you scratch risk on the dummy wafer, which doesn't matter, and the idea was to reduce the big gap in standard deviation we see in slots 1 and 3, which is now 2 and 4. on the right here, you can see that we still see a higher standard deviation on wafer #2, as well as wafer 8 shooting above our 3% limit. Wafers 1 and 8 are also getting this thinner region in the middle area of the wafer. \nSo in this particular loading method, wafers 246 have a 2cm gap of empty space above them whereas wafers 1 and 8 only have 1cm, which is consistent with the patterning we see on the wafers here and the higher standard deviation, and supports the patterns from the 8 wafer test. \nSo the space between the wafers has an effect on uniformity, and since the recipe is already tuned for our original 4 wafer loading method, we decided it is best to just continue with that.",
      "Here is a quick summary of this recipe development, again huge improvement in our wafer-to-wafer variation, and within wafer standard deviation remaining well within our 3% limit, seeing an improvement from our baseline recipe. To get these uniformity improvements, we did see about a 10% drop in deposition rate, which is just something to note for future HZO films since they've typically assumed 1A/cycle, which is no longer very accurate. ",
      "The second part of this project was to verify the accuracy of our measurements, since all hzo films have been measured using a hafnium oxide model on the KLA rather than a tuned HZO one. So we got 3 wafers, one of hafnium oxide, zirconium oxide, and one HZO, each around 15nm and measured the wafers with multiple different ellipsometry models we found from online papers. We then sent the wafers for XRR measurements to verify, where we could choose a model that best fit that data for future use",
      "Starting with our hafnium model, you can see our KLA measurements have a range of about 8 angstroms, and we measured somewhere around 13-14nm for a 15nm target. Our hafnium oxide deposition rate is actually lower than expected from our HZO testing. The XRR measurement was actually even lower than that, at about 127 angstroms, so we can use that to generate a new dispersion model for future measurements.",
      "Same thing with zirconium, KLA measurements varying by about 8 angstroms. here we deposited somewhere around 17nm compared to our 15nm target, so zirconium's dep rate is clearly higher than our hafnium’s. Again you'll see the XRR measuring much lower, at just over 15nm, so we'll have to develop a new ellipsometry model.",
      "Last is the HZO films. since we didn't find any HZO ellipsometry models, our KLA measurements are just combinations of the models for the two materials, which is a function on the KLA tool. and, as expected by now, XRR measures thinner than our ellipsometry",
      "So using this verified XRR data, we can use the Woollam in e-lab to generate completely new dispersion models, since none of the ones we found online seem to match our films very well. Its also important to note that we've been overestimating our deposition rates, especially after the reduced deposition rate we have with our new HZO recipe. Also, our HZO films are not the 50/50 split that is typically desired, since the hafnium oxide deposition rate is lower than zirconium's by a good margin- again something to just take note of for our HZO films.",
      "The next project i worked on was with the Wordentec. we had a lot that needed both hafnium and tungsten evaporations, and we had neither. Hafnium was done successfully in 2022 by John Hunt, but our tool hasn't had much success with tungsten at all. We also have a good recipe for aluminum evaporations, but only after a long period of crucible conditioning which requires you to pump down the tool for a few hours, do an evaporation, vent, measure, and then repeat until you pass SPC. \nAs we develop these new films, this is a pattern we want to avoid. We tested different crucibles, metal sources, and also evaporation recipes to see if we could get good hafnium and tungsten films for this lot. ",
      "Starting with hafnium, you can see the top 3 lines done in 2022, with very low sheet resistances even down to 5.6, 5.7 when using lower base pressures of 3e-8. However, you can see that we have not been able to get back into the single digit range since then, for similar film thicknesses. You can see the different crucibles we've tried, with RD Mathis and Lesker being two vendors for intermetallic crucibles, where we tried both hafnium pieces and pellets in case the pellet manufacturing was causing some contamination, but you can see the results were all very similar, and also not great. \nThe coloring here is an indication of crucible condition, with darker colors showing a longer conditioning period, since that was something that is important for our aluminum films. Most recently, we've also tried a tungsten crucible, which gave us the best result so far, even though it was done at a comparatively higher base pressure.",
      "As for the actual evaporation recipe, we typically try to avoid too quick of a power ramp up of the e-beam, since this will cause a lot of spitting issues, especially in intermetallic crucibles. But looking at the 2022 data, they were done using a 1 minute ramp up to 40% power, whereas we usually ramp up for 2-5 minutes to half of that and waiting before ramping up across another 2-3 minutes. \nWith the most recent test of the tungsten crucible, we decided to try another quick power ramp, and just keep an eye out for spitting. During the actual test, we didn't see any spitting, but there was this big pressure spike in the chamber vacuum during the ramp up period, which typically is not a good sign for film quality. Even with that, we were able to get our best result so far.",
      "As you can see on the left here, there is a general trend of lower resistivities when done at lower base pressures, but even when we've tested at like 2e-8, which is pretty much as low as the wordentec can go, we are nowhere near as low as we want for sheet resistance. There's a much stronger trend with improving results as you condition the crucible, which makes sense since we've seen this for all of our aluminum evaporations. However, our tungsten crucible test is by far the best evaporation we've gotten before conditioning the crucible, and actually performed better than the intermetallic crucibles even after a few conditioning rounds. \nSo with that, and the fact that the Wordentec was down for so long, it was decided to proceed with the lot using the tungsten crucible melt and the 1 minute power ramp up shown on the last slide. ",
      "The other part of the lot required a tungsten evaporation, and as you can see here, we've tried different crucibles, including tungsten, as well as different metal sources, low base pressures, and heating up the evaporation chamber, but we haven't had much luck with these sheet resistances. However, for this particular lot, the tungsten layer is used as a 6nm templating layer, so sheet resistance isn't as important as the uniformity, which we're seeing consistently low standard deviations with our current melt. so again, it was decided to proceed with the lot using this melt.",
      "As for the actual lot, it went really well, getting a sheet resistance of about 6.8 for a 200nm hafnium film. This is very comparable to past lots done by IBS, so very happy with the results. Adding this data point to our hafnium evaporations, you can see us getting two trends in resistivity. A higher one during our crucible conditioning period, and a lower one after sufficient conditioning. Our tungsten crucible melt is the only one that appears on the lower trend without any conditioning, and this is consistent with the addition of our lot data. It’s not quite as low as the tests from 2022, but overall still pretty happy with the results.",
      "The last project i worked on was selective epitaxial growth of silicon for raised source drain transistors. We have a rad3 pattern on 75nm nitride on 3nm oxide, where we've been monitoring growth thickness, selectivity, as well as dopant concentration using a bare silicon monitor for sheet resistance.",
      "Starting with our thickness measurements, we mostly use the HRP, which is slightly problematic in the sense that it measures your displacement from nitride mask to silicon growth. So if your growth isn't selective, your displacement won't really change, and you get a bad measurement of thickness.Wwe also tried using the gemini SEM for cross sectional images to get thickness, but at the scale we're growing at, as well as the added noise from nonselective growth, we aren't really able to get accurate measurements. \n So unfortunately, unless we have selective growth, we won't have a good gauge of thickness, so our calculated growth rates and resistivities will be off as well\n- The difference in HRP is about 9nm here for a 2400s growth, which is inaccurate",
      "For our thickness, we started with a 100nm oxide monitor wafer, but realized that its easier to be selective on oxide than it is nitride, so even if you have a clean oxide monitor like the right image, its not a good representation of what's happening on your patterned wafers. So we also added a KLA recipe measuring the thickness of our nitride sites, but really looking at goodness of fit. if you have a 0 goodness of fit, your surface isn't nitride, meaning we're nonselective and grew polysilicon on top. Halfway through the experiments, the reveal SEM was also brought in, so we were able to get a better look at our patterned wafers for selectivity.",
      "Since we have so many different ways of monitoring selectivity, it's a little bit harder to quantify, but obviously your worst would be zero selectivity, even on oxide. Next would be oxide selectivity, but a KLA goodness of fit of zero on nitride. Then you get the middle grey area where the KLA starts to see interesting results, like here a 0.97 goodness of fit, but your step height measurements look off and you're still seeing polysilicon growth under the SEM. \nWe've also had selectivity that looks perfect with the KLA, but looking under the SEM reveals some small nucleation sites, and finally, what we want, which is a perfectly clean nitride mask.\n- #3 KLA had mean of 88nm, standard deviation of almost10%",
      "Here's a closer look at where we were able to achieve selectivity on nitride, at 705C and 20 torr with a 2minute higher temperature pre bake. when you raise either pressure or temperature, you get an increased growth rate, but you break your selectivity. If our goal was just selective growth, we would be done here, but we're also looking at dopant concentration. At these lower pressure ranges of 20-40 torr, we're seeing very high resistivities. on the higher temperature, you're seeing a decent sheet resistance, but since we have no idea of our growth thickness, we can't tell the resistivity. \nSo we want to try getting selectivity at higher pressures, which should help our dopant incorporation, and also allow us to lower our temperatures, which should also help with resistivities as well as lowering our thermal budget. For similar reasons we're trying to remove this 1000C pre bake from our recipes.",
      "This is where we are at with our higher pressures. Our best result so far is shown here, 650C and 170 Torr. Obviously not as clean as we really want, but we're getting closer to where we can see fluctuations across different die in the wafer. \nSo really what we're trying to find is the balance between resistivity and selectivity. Since without selectivity, we don't actually have a thickness measurement, you can use this coloring in this chart as an accuracy gauge for our resistivity measurements. We've only been able to achieve selectivity with high resistivity values, and what looks to be really good resistivity is firstly, not selective, and because of that, probably underestimated by a pretty good margin.",
      "That's where we are at with this RSD project, trying to optimize our resistivity values. Future tests will also need to be done with boron doping, since we've only been tried phosphorous so far. It's also important to note here that our mask doesn't show the growth of small features or in enclosed areas, since we're actually growing around the square features on the nitride mask, so its not a perfect representation of what's needed with raised source drain transistors. ",
      ""
    ],
    tags: ["JMP", "Microfabrication", "CVD", "E-beam Evaporation", "ALD", "SEM", "Ellipsometry"],
    coverImage: "wafer.jpg",
    link: "",
    slides: "full_presentation.pdf"
  },
  {
    id: "3dp",
    name: "Miscellaneous Small Projects",
    cat: "Personal",
    dateStart: "2020",
    date: "0000",
    desc: "Miscellaneous projects that are undeserving of their own page. But interesting enough to appear at all",
    body: "",
    tags: ["Fusion 360", "Autodesk Inventor", "Blender", "3D Printing", "Rapid Prototyping"],
    link: "",
    coverImage: "random.jpeg"
  },
];
