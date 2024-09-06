import express from "express";
//const express = require("express");
//above import works the same, its support import in this way as we added `type="type": "module"`
import bodyParser from "body-parser";
import usersRoutes from "./routes/users.js";

const app = express();
const PORT = 5005;

app.use(bodyParser.json());

app.use("/users", usersRoutes);

//routes
app.get("/", (req, res) => {
  res.send("Hello from Homepage!");
});

app.listen(PORT, () =>
  console.log(`Server is Running on port: http://localhost:${PORT}`)
);
