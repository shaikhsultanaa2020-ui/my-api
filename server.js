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
app.post("/ask", async (req, res) => {
  try {
    const { message } = req.body;

    // yahan tum process.env.OPENAI_API_KEY use karke external API call karoge

    res.json({
      reply: `You said: ${message}`
    });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});
