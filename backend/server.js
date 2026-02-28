const express = require("express");
const app = express();

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    version: "1.0.0",
    deployed_at: new Date(),
    message: "CI/CD Pipeline Working 🚀"
  });
});

app.listen(3000, () => {
  console.log("Backend running on port 3000");
});