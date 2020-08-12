const carsRouter = require("express").Router();

carsRouter.get("/hello", (req, res) => {
  res.status(200).json({ hello: "world" });
});

module.exports = carsRouter;
