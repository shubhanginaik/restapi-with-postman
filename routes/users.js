import express from "express";
import { v4 as uuidv4 } from "uuid"; // it generates distinct id

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.post("/", (req, res) => {
  const user = req.body;

  const userId = uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

  const userWithId = { ...user, id: userId };
  users.push(userWithId);
  res.send(`User with the name ${user.firstName} added to the database!`);
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const userData = users.find((user) => user.id === id);
  res.send(userData);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  res.send(users);
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age } = req.body;

  let user = users.find((user) => user.id == id);

  if (firstName) user.firstName = firstName;

  if (lastName) user.lastName = lastName;

  if (age) user.age = age;

  res.send(`User with id: ${id} has been updated!`);
});

export default router;
