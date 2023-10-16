// routes/favorites.js
const express = require("express");
const router = express.Router();
const {
  addToFavorites,
  removeFromFavorites,
  getFavorites,
} = require("../routes/favoritesManager"); // Import the favoritesManager module

router.get("/", (req, res) => {
  res.json(getFavorites());
});

router.post("/add", (req, res) => {
  const newItem = req.body;
  addToFavorites(newItem); // Use the addToFavorites function from the favoritesManager module
  res.json(getFavorites());
});

// Define the DELETE route for removing a track by its ID
router.delete("/remove/:trackId", (req, res) => {
  const trackIdToRemove = req.params.trackId;
  removeFromFavorites(trackIdToRemove); // Use the removeFromFavorites function from the favoritesManager module
  res.json(getFavorites()); // Respond with the updated list of favorites
});

module.exports = router;
