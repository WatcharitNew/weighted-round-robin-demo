// Import "express" package to create Node.js server
import express from "express";

const app = express();
const PORT = 3003;

let count = 0;

// Create the simple `GET` API
app.get("/", (req, res) => {
  count += 1;
  res.send(`Response from Server C total count: ${count}`);
});

// Listen to the request at PORT 3003
app.listen(PORT, () => {
  // When the server start log `Server C is running ...` message
  console.log(`Server C is running on port ${PORT}`);
});
