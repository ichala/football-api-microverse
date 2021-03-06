"use strict";
//Require dotenv and config
const dotenv = require("dotenv");
dotenv.config();
//Require express and config
const express = require("express");
const app = express();
const session = require("express-session");
const port = process.env.PORT; // Heroku port goes in here
var bodyParser = require("body-parser");
app.use(
  bodyParser.json({ limit: "10kb", strict: true }),
  function (err, req, res, next) {
    if (err) {
      res.status(400).send("invalid request");
    } else {
      next(err);
    }
  }
);
//Require toobusy-js and config
var toobusy = require("toobusy-js");
//Require express-rate-limit and config
const rateLimit = require("express-rate-limit");
//Require express-helmet and config
const helmet = require("helmet");
app.use(helmet());
app.use(helmet.frameguard({ action: "deny" }));
var cors = require("cors");
app.use(cors())
app.set("trust proxy", 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 20000, // limit each IP to 20000 requests per 15 min
  message: {
    code: 429,
    message: "Too many request try again after few minutes",
  },
});


app.use(limiter);

app.use(function (req, res, next) {
  if (toobusy()) {
    res.send(503, "Server is Busy right now try again later.");
  } else {
    next();
  }
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use((err, req, res, next) => {
  // body-parser will set this to 400 if the json is in error
  if (err.status === 400)
    return res.status(err.status).json({ error: "invalid request" });
  return next(err); // if it's not a 400, let the default error handling do it.
});
//Routes
const Leagues = require("./Routes/leagues/leagues");
app.use("/api/v1", limiter, Leagues);

//rest of Routes
app.get("*", (req, res) => {
  const welcome = {
    message: "Api Running ",
    status: 200,
    endpoints :[
      "https://football-apis.herokuapp.com/api/v1/leagues",
  ]
  };
  res.status(200).json(welcome);
});
//Running Server
app.listen(process.env.PORT || port, () => {
  console.log("Backend server is running at " + port);
});
