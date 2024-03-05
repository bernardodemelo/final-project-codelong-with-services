/* Require NPM Packages */
const express = require("express");

/* Configure an Express Router for the planet Routes */
const router = express.Router();

/* Require the planet Model */
const planet = require("../models/Planet.model");

/* ROUTES */

// POST '/api/planet' - Creates a new proejct
router.post("/planet", (req, res) => {
  const { name, description } = req.body;

  planet
    .create({ name, description, moons: [] })
    .then((response) => res.json(response))
    .catch((error) => res.json(error));
});

// GET '/api/planets' - Reads all planets
router.get("/planets", (req, res) => {
  planet
    .find()
    .populate("moons")
    .then((allplanets) => res.json(allplanets))
    .catch((error) => res.json(error));
});

// GET '/api/planets/:planetId' - Reads a specific planet
router.get("/planets/:planetId", (req, res) => {
  const { planetId } = req.params;
  planet
    .findById(planetId)
    .populate("moons")
    .then((planet) => res.json(planet))
    .catch((error) => res.json(error));
});

// PUT '/api/planets/:planetId' - Updates a specific planet
router.put("/planets/:planetId", (req, res) => {
  // Object destructuring
  const { planetId } = req.params;
  const { name, description } = req.body;

  planet
    .findByIdAndUpdate(planetId, { name, description }, { new: true })
    .then(() => {
      res.json({ message: "planet Updated!" });
    })
    .catch(() => {
      res.json({ message: "Failed to Update planet." });
    });
});

// DELETE '/api/planets/:planetId' - Deletes a specific planet
router.delete("/planets/:planetId", (req, res) => {
  const { planetId } = req.params;

  planet
    .findByIdAndDelete(planetId)
    .then(() => {
      res.json({ message: "planet deleted" });
    })
    .catch(() => {
      res.json({ error: "Failed to delete a planet" });
    });
});

/* Export the router */
module.exports = router;
