const express = require("express");
const app = express();
const cors = require("cors");
const port = 3001;
require("dotenv").config();
const MY_VARIABLE = `${process.env.REACT_APP_SERVERJS_PORT}`;

const MY_VARIABLE2 = process.env.REACT_APP_SERVERJS_PORT;

console.log(MY_VARIABLE);
console.log(MY_VARIABLE2);

const corsOptions = {
  origin: ['http://20.205.144.85:3000", "http://localhost:3000'],
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
