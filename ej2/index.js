const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to our shop!" });
});

// Products root
app.get("/products", (req, res) => {
  res.status(200).send({ message: "Products list" });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
