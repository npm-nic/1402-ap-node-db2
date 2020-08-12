// // --> IMPORTS <-- // //
//  packages
const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
//  routers
const carsRouter = require("./cars/cars-router");

// // --> SET UP SERVER <-- // //
const app = express();

// // --> GLOBAL MIDDLEWARE <-- // //
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());

// // --> ROUTES <-- // //
app.use("/api/cars", carsRouter);

app.get("/hello", (req, res) => {
  res.status(200).json({ hello: "world" });
});

// // --> EXPORT <-- // //
module.exports = app;
