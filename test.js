const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json(process.env);
});

app.listen(process.env.PORT || 8080, () => console.log(`Listening on ${process.env.PORT || 8080}`));
