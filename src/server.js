const express = require("express");
const app = express();
const cors = require("cors");
const port = "#{REACT_APP_BACKEND_PORT}#";

const corsOptions = {
  origin: ["#{REACT_APP_FRONTEND_API}#"],
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
