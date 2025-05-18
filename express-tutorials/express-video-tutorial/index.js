const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

const members = [
  {
    id: 1,
    name: "John Doe",
    email: "john@gmail.com",
    status: "active",
  },
  {
    id: 2,
    name: "Bob Williams",
    email: "bob@gmail.com",
    status: "inactive",
  },
  {
    id: 3,
    name: "Shannon Jackson",
    email: "shannon@gmail.com",
    status: "active",
  },
];

app.use(express.json());

// GET
app.get("/members", (req, res) => {
  res.status(200).send(members);
});

// GET BY ID
app.get("/members/id/:id", (req, res) => {
  const id = req.params.id;

  const found = members.some((member) => member.id === +id);

  if (found) {
    const result = members.filter((member) => member.id === +id);
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "it does not exist" });
  }
});

// POST
app.post("/members", (req, res) => {
  const { name, email, status } = req.body;

  const newMember = {
    id: members.length + 1,
    name,
    email,
    status,
  };
  console.log(newMember);

  members.push(newMember);

  res.status(201).send(members);
  //        {
  //     id: members.length + 1,
  //     name: "John Doe",
  //     email: "john@gmail.com",
  //     status: "active",
  //   }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
