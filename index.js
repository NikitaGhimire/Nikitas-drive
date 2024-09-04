const express = require("express");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const app = express();

//Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Session setup
app.use(
  session({
    secret: process.env.SECRET_KEY,
    resave: false,
    saveUninitialized: true,
  })
);

//passport setup
app.use(passport.initialize());
app.use(passport.session());

//basic route
app.get("/", (req, res) => {
  res.send(`Hello, Welcome to Nikita's Drive!`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
