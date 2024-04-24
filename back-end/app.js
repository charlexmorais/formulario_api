const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let pessoas = [];

app.post("/pessoas", (req, res) => {
  const pessoa = req.body;
  pessoas.push(pessoa);
  res.status(201).json(pessoa);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
