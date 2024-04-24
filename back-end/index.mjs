import express from 'express';
import bodyParser from "body-parser";
import cors from "cors";

const port = process.env.DB_PORT || 3000
const app = express();


app.use(cors());
app.use(bodyParser.json());

let pessoas = [];

app.post("/pessoas", (req, res) => {
  const pessoa = req.body;
  pessoas.push(pessoa);
  res.status(201).json(pessoa);
  return res.json("hello word")
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
