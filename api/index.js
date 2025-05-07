const express = require("express");
const router = express.Router();


const planetRoutes = require("./planets");
const exoplanetRoutes = require("./exoplanets");
const galaxyRoutes = require("./galaxies");

router.use("/planets", planetRoutes);
 router.use("/exoplanets", exoplanetRoutes);
 router.use("/galaxies", galaxyRoutes);

module.exports = router;