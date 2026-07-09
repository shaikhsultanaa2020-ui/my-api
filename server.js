const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Health route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "API is running successfully"
  });
});

// Health check route
app.get("/health", (req, res) => {
  res.json({
    status: "ok",
    app: "my-api"
  });
});

// Example secret route using env variable
app.get("/config", (req, res) => {
  res.json({
    hasApiKey: !!process.env.MY_API_KEY
  });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
