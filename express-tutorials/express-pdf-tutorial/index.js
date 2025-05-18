const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

app.get("/getStructure", (req, res) => {
  // Obtener datos de la bd
  // Cargar páginas
  // Devolver un json
  // Total acceso al request & response
});

// REQUEST es el método que PASA toda la información del navegador al servidor.
// Desde una pestición REQUEST, nos puede llega la información de tres maneras:
// 1 - como PARAMETRO (req.params.paramName)
// 2 - como QUERY STRING (req.query.queryName)
// 3 - en el BODY (req.body.bodyObject)

// 1 - como PARAMETRO (req.params.paramName)
// `http://localhost:3000/inicio/${paramName}`;

// 2 - como QUERY STRING (req.query.queryName)
// `http://localhost:3000/inicio?id=${queryName}`;

// 3 - como BODY (req.body.bodyObject)
// `http://localhost:3000/incio`;
// { nombre: "Jane Doe" }

app.use(express.json());

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// app.get("/", (req, res) => {
//   res.send("Hola The Bridge");
// });

// get PARAMETRO
app.get("/myName/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

// get QUERY STRING
app.get("/myName", (req, res) => {
  res.send(`My name is ${req.query.name}`);
});
// localhost:3000/myName?name=Neo

app.post("/myName", (req, res) => {
  res.send(`My name is ${req.body.name}`);
});

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
