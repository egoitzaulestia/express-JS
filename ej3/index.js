const express = require("express");

const app = express();
const PORT = 3000;

app.use(express.json());

const dataProducts = {
  description: "Productos",
  items: [
    { id: 1, nombre: "Taza de Harry Potter", precio: 300 },
    { id: 2, nombre: "FIFA 22 PS5", precio: 1000 },
    { id: 3, nombre: "Figura Goku Super Saiyan", precio: 100 },
    { id: 4, nombre: "Zelda Breath of the Wild", precio: 200 },
    { id: 5, nombre: "Skin Valorant", precio: 120 },
    { id: 6, nombre: "Taza de Star Wars", precio: 220 },
  ],
};

// '/products' GET method route to show JSON data
app.get("/products", (req, res) => {
  res.status(200).send(dataProducts);
});

// '/products' POST method route to create a new product
app.post("/products", (req, res) => {
  const { nombre, precio } = req.body;

  if (nombre === "" || precio === "") {
    res.status(400).send({ message: "Error while creating the product" });
  } else {
    const newProduct = {
      id: dataProducts.items.length + 1,
      nombre,
      precio,
    };

    dataProducts.items.push(newProduct);
    res.status(201).send({ message: "New product created" });
  }
});

// '/products/:id' PUT method route to update a product
app.put("/products/:id", (req, res) => {
  const productId = +req.params.id;
  const { nombre, precio } = req.body;

  const found = dataProducts.items.some((product) => product.id === productId);

  if (found) {
    const product = dataProducts.items.find(
      (product) => product.id === productId
    );

    product.nombre = nombre || product.nombre;
    product.precio = precio || product.precio;

    res.status(200).send({ message: "Product actualized", product });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
