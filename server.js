const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(path.join(dirname, "views")));

app.get("/*page/", function (req, res) {
  res.sendFile(path.join(dirname, "views/404.html"));
});

// const port = process.env.PORT ||  ;

app.listen(port);

console.log(`Server running: http://localhost:${port}`);
