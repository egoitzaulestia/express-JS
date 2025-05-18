const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Hello The Bridge");
// });

app.get("/myName/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.get("/myName", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

app.post("/myName", (req, res) => {
  res.send(`Hello ${req.body.name}`);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
