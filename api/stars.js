const express = require("express");
const router = express.Router();

let asterisms = [
  {
    id: 1,
    name: "Big Dipper",
    description:
      "Also known as The Plough or Charles's Wain, is composed of the seven brightest stars in Ursa Major. These stars delineate the Bear's hindquarters and exaggerated tail, or alternatively, the 'handle' forming the upper outline of the bear's head and neck. With its longer tail, Ursa Minor hardly appears bearlike at all, and is widely known by its pseudonym, the Little Dipper.",
  },
  {
    id: 2,
    name: "The Summer Triangle",
    description:
      "Of Deneb, Altair, and Vega – α Cygni, α Aquilae, and α Lyrae – is prominent in the northern hemisphere summer skies, as its three stars are all of the 1st magnitude. The stars of the Triangle are in the band of the Milky Way which marks the galactic equator, and are in the direction of the Galactic Center.",
  },
  {
    id: 3,
    name: "The Southern Cross",
    description:
      "Including the first-magnitude stars Acrux and Mimosa, west of the Carina Nebula (one of five first-magnitude deep-sky objects), and with the first-magnitude stars Alpha Centauri (the closest star to the Sun) and Beta Centauri pointing at the cross, distinguishing the cross from less bright and similar asterisms like the Diamond Cross or False Cross.",
  },
  {
    id: 4,
    name: "The Fish Hook",
    description:
      "Is the traditional Hawaiian name for Scorpius. The image will be even more obvious if the chart's lines from Antares (α Sco) to Beta Scorpii (β Sco) and Pi Scorpii (π Sco) are replaced with a line from Beta through Delta Scorpii (δ Sco) to Pi forming a large capped 'J.' Adding vertical lines to connect the limbs at the left and right in the main diagram of Hercules will complete the figure of the Butterfly.",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ asterisms });
});

router.post("/", (req, res) => {
  const newAsterism = { id: Date.now(), ...req.body };
  asterisms.push(newAsterism);
  res.status(201).json(newAsterism);
});

module.exports = router;
