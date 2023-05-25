const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;

const corsOptions = {
  origin: ["http://20.24.133.165:3000", "http://localhost:3000"],
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
app.use(cors(corsOptions));

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

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
