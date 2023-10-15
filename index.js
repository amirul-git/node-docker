const express = require("express");
const port = 3000;
const app = express();

app.get("/", (req, res) => {
  res.json({ message: "Hello world with node + docker + CI/CD" });
});

app.listen(port, () => console.log(`This app run on ${port}`));
