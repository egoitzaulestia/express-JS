const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// '/' (root) GET method route
app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to our shop!" });
});

// '/products' GET method route
app.get("/products", (req, res) => {
  res.status(200).send({ message: "Products list" });
});

// '/products/:id' POST methed route
app.post("/products/:id", (req, res) => {
  const newProduct = req.body;
  res
    .status(201)
    .send({ message: `New product created: ${newProduct.product}` });
});

// '/products/:id' PUT method route
app.put("/products/:id", (req, res) => {
  const productId = +req.params.id;
  res.status(200).send({ message: `Update product ${productId}` });
});

// '/products/:is' DELETE method route
app.delete("/products/:id", (req, res) => {
  const productId = +req.params.id;
  res.status(200).send({ message: `Product ${productId} deleted` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
