// server.js
const express = require("express");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const cors = require("cors"); // Import the cors middleware
const apiRoutes = require("./routes/api");
const favoritesRoutes = require("./routes/favorites");

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(helmet());

// Enable CORS for all routes
app.use(cors());

app.use("/api", apiRoutes);
app.use("/favorites", favoritesRoutes);

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = { app, server };
