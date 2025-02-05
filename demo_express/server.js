const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow frontend requests

app.get("/api/message", (req, res) => {
  res.json({ message: "Hello from Express.js!" });
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
