const express = require("express");
const app = express();

app.use(express.json()); // Ensure JSON parsing is enabled

// ✅ Test 1: GET /first → Should return 200 OK with headers (no body)
app.get("/first", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Authorization": "Bearer token123",
  });
  res.status(200).end(); // No body required
});

// ✅ Test 2: GET /second → Should return 400 Bad Request with headers & body
app.get("/second", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Authorization": "Bearer token123",
  });
  res.status(400).json({
    param1: "value1",
    param2: "value2",
  });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
