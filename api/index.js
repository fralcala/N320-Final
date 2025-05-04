const express = require("express");
const router = express.Router();


const planetRoutes = require("./planets");

router.use("/planets", planetRoutes);

module.exports = router;