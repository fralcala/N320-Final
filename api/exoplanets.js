//const e
const express = require("express");
const router = express.Router(); 

   let exoplanets = [];

router.get("/", (req, res) => {
 
    res.status(200).json({ planets: exoplanets });
    });
//add
router.post("/", (req, res) => {
  const newPlanet = {
    id: Date.now(), 

    name: req.body.name,
climate: req.body.climate,

    material: req.body.material
  };
  exoplanets.push(newPlanet);
res.status(201).json({ msg: "Exoplanet created", planet: newPlanet });
});

//delete
router.delete("/:id", (req, res) => {
 
    const id = parseInt(req.params.id);
 
  exoplanets = exoplanets.filter(p => p.id !== id);

  res.status(200).json({ msg: "Deleted", id });

});

module.exports = router;