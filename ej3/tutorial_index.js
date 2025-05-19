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

// Middleware
app.use(express.json());

// GET
app.get("/members", (req, res) => {
  res.status(200).send(members);
});

// GET BY ID
app.get("/members/:id", (req, res) => {
  const id = +req.params.id;

  const found = members.some((member) => member.id === id);

  if (found) {
    const result = members.filter((member) => member.id === id);
    res.status(200).send(result);
  } else {
    res.status(404).send({ message: "it does not exist" });
  }
});

// POST
app.post("/members", (req, res) => {
  const { name, email } = req.body; // I didn't destructure 'status' on purpose

  if (name === "" || email === "") {
    res.status(400).send({ message: "error" });
  } else {
    const newMember = {
      id: members.length + 1,
      name,
      email,
      status: req.body.status, // I left this to see the structure behind
    };

    console.log(newMember);

    members.push(newMember);
    res.status(201).send(members);
  }
});

// UPDATE
app.put("/members/id/:id", (req, res) => {
  const id = +req.params.id;

  const found = members.some((member) => member.id === id);

  if (found) {
    const user = members.find((member) => member.id === id);
    user.name = req.body.name || user.name;
    user.email = req.body.email ? req.body.email : user.email;

    res.status(200).send({ message: "actualized", user });
  } else {
    res.status(400).send({ message: "error" });
  }
});

// DELETE
app.delete("/members/:id", (req, res) => {
  const id = +req.params.id;
  const found = members.some((member) => member.id === id);

  if (found) {
    const newMembersArray = members.filter((member) => member.id !== id);
    res.status(200).send(newMembersArray);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
