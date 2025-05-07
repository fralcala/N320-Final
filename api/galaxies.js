const express = require("express");
const router = express.Router();

// In-memory array to store galaxy discoveries
let galaxies = [
  {
    id: 1,
    username: "StarSeeker",
    galaxyName: "Sombrero Galaxy",
    galaxyType: "Spiral",
    note: "Discovered while scanning the southern sky. Stunning edge-on view!",
  },
  {
    id: 2,
    username: "NovaHunter",
    galaxyName: "Whirlpool Galaxy",
    galaxyType: "Spiral",
    note: "Looks like a cosmic storm. Gorgeous!",
  },
];

// GET all galaxies
router.get("/", (req, res) => {
  res.status(200).json({ galaxies });
});

// POST a new galaxy discovery
router.post("/", (req, res) => {
  const newGalaxy = {
    id: Date.now(),
    ...req.body,
  };

  galaxies.push(newGalaxy);
  res.status(201).json(newGalaxy);
});

// DELETE a galaxy by ID
router.delete("/:id", (req, res) => {
  const galaxyId = parseInt(req.params.id);
  galaxies = galaxies.filter((g) => g.id !== galaxyId);
  res.sendStatus(204);
});

module.exports = router;
