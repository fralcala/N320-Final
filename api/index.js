const express = require("express");
const router = express.Router();

const planetRoutes = require("./planets");
const exoplanetRoutes = require("./exoplanets");
const galaxyRoutes = require("./galaxies");
const moonsRoutes = require("./moons");

router.use("/planets", planetRoutes);
router.use("/exoplanets", exoplanetRoutes);
router.use("/galaxies", galaxyRoutes);
router.use("/moons", moonsRoutes);

module.exports = router;
