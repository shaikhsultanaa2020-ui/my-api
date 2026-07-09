const express = require("express");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json({
    ok: true,
    message: "API running"
  });
});

app.get("/health", (req, res) => {
  res.json({
    ok: true,
    apiKeyFound: !!process.env.API_KEY
  });
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
