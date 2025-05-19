const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// '/' (root) route; GET method
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to our shop!" });
});

// '/products' route; GET method
app.get("/products", (req, res) => {
  res.status(200).send({ message: "Products list" });
});

// '/products' route; PUT method
app.put("/products/:id", (req, res) => {
  const productId = +req.params.id;
  res.status(200).send({ message: `Update product ${productId}` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
