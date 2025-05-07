const express = require("express");
const router = express.Router();

let planets = [
  {
    id: 1,
    name: "Mercury",
    diameter: "4,879 km",
    mass: "3.30e23 kg",
    color: "Gray",
  },
  {
    id: 2,
    name: "Venus",
    diameter: "12,104 km",
    mass: "4.87e24 kg",
    color: "Yellow",
  },
  {
    id: 3,
    name: "Earth",
    diameter: "12,742 km",
    mass: "5.97e24 kg",
    color: "Blue/Green",
  },
  {
    id: 4,
    name: "Mars",
    diameter: "6,779 km",
    mass: "6.42e23 kg",
    color: "Red",
  },
];

router.get("/", (req, res) => {
  res.status(200).json({ planets });
});

router.post("/", (req, res) => {
  const newPlanet = { id: Date.now(), ...req.body };
  planets.push(newPlanet);
  res.status(201).json(newPlanet);
});

// delete
router.delete("/:id", (req, res) => {
  const planetId = parseInt(req.params.id);
  planets = planets.filter((p) => p.id !== planetId);
  res.sendStatus(204);
});

module.exports = router;
