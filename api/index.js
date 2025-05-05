const express = require("express");
const router = express.Router();


const planetRoutes = require("./planets");
const exoplanetRoutes = require("./exoplanets");

router.use("/planets", planetRoutes);
 router.use("/exoplanets", exoplanetRoutes);

module.exports = router;