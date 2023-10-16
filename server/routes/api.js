// routes/api.js
const express = require("express");
const fetch = require("node-fetch");
const router = express.Router();

const ITUNES_API_URL = "https://itunes.apple.com/search";

router.get("/search", async (req, res) => {
  const { term, mediaType } = req.query;

  try {
    const response = await fetch(
      `${ITUNES_API_URL}?term=${term}&media=${mediaType}`
    );
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
