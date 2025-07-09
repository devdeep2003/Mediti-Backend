const express = require("express");
const cors = require("cors");
const exercises = require("./data.json");
const app = express();

const PORT = 5000;

app.use(cors());


app.get("/api/exercises", (req, res) => {
  res.json(exercises);
});

app.get("/api/exercises/:id", (req, res) => {
  const id = req.params.id;
  const data = exercises.find((e) => e.id === parseInt(id));
  if (data) res.json(data);
  else res.status(404).send("NOT FOUND");
});

app.listen(PORT, () => {
  console.log(`Server running at PORT ${PORT}`);
});
