const express = require("express");

const router = express.Router();

const Task = require("../models/Moon.model");
const planet = require("../models/Planet.model");

// POST '/api/:planetId/moons' - Creates a new planets' task
router.post("/:planetId/moons", (req, res) => {
  const { planetId } = req.params;
  const { title, description } = req.body;

  Task.create({ title, description, planet: planetId })
    .then((newTask) => {
      return planet
        .findByIdAndUpdate(planetId, {
          $push: { moons: newTask._id },
        })
        .populate("moons");
    })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

module.exports = router;
