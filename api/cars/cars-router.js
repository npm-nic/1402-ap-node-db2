const carsRouter = require("express").Router();
const db = require("../../data/dbConfig");

// // --> GET api/cars/hello <-- // //
carsRouter.get("/hello", (req, res) => {
  res.status(200).json({ hello: "world" });
});

// // --> GET api/cars <-- // //
carsRouter.get("/", (req, res) => {
  db.select("*")
    .from("cars")
    .then((cars) => {
      res.status(200).json({ cars });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ message: "its not you, its me 💔" });
    });
});

// // --> GET api/cars/:id <-- // //
carsRouter.get("/:id", (req, res) => {
  const req_id = req.params.id;

  db.select("*")
    .from("cars")
    .where("id", req_id)
    .then((car) => {
      car.length > 0
        ? res.status(200).json({ car })
        : res.status(404).json({ message: `no car with id: ${req_id}` });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ message: "its not you, its me 💔" });
    });
});

// // --> POST api/cars <-- // //
carsRouter.post("/", (req, res) => {
  const car = req.body;

  db("cars")
    .insert(car)
    .returning("id")
    .then((added_id) => {
      added_id
        ? res.status(201).json({ added_id })
        : res
            .status(201)
            .json({ message: "thats weird...no added_ids to give ya" });
    })
    .catch((err) => {
      err.message
        ? res.status(500).json({ error: err.message })
        : res.status(500).json({ message: "its not you, its me 💔" });
    });
});

module.exports = carsRouter;
