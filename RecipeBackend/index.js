const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModel = require("./models/User.js");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/users");

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UserModel.findOne({ email: email })
    .then(user => {
      if (user) {
        if (user.password === password)
          res.json("Success");
        else
          res.json("Password is incorrect");
      } else {
        res.json("No record existed");
      }
    })
    .catch(err => {
      res.status(500).json({ error: err.message });
    });
});


app.post("/register", (req, res) => {
  UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.status(400).json({ error: err.message }));
});

app.listen(3001, () => {
  console.log("server is running");
});
