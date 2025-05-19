const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

// PRODUCTS ROUTES

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
  res.status(201).send({ message: `Product ${newProduct.product} created` });
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

// USERS ROUTES

// '/users' GET method route
app.get("/users", (req, res) => {
  res.status(200).send({ message: "Users list" });
});

// '/users/:id' POST method route
app.post("/users/:id", (req, res) => {
  const newUser = req.body;
  res.status(201).send({ message: `${newUser} has been registered` });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
