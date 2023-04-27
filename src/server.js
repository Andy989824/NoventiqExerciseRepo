const express = require("express");
const app = express();
const port = 3000;

// Health check endpoint
app.get("/api/health", (req, res) => {
  const healthStatus = {
    status: "OK",
    message: "Application is running smoothly.",
  };
  res.status(200).json(healthStatus);
});

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// CORS configuration (adjust the allowed origin accordingly)
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
  res.setHeader("Access-Control-Allow-Methods", "GET");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
