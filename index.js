const express = require("express");
const app = express();

app.use(express.json());

// ✅ Test 1: GET /first → Should return 200 OK
app.get("/first", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Authorization": "Bearer token123",
  });
  res.status(200).end(); // No body required
});

// ✅ Test 2: POST /second → Should return 400 Bad Request
app.post("/second", (req, res) => {
  res.set({
    "Content-Type": "application/json",
    "Authorization": "Bearer token123",
  });
  res.status(400).end(); // No body required
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
