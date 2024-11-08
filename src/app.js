const express = require("express");

const app = express();

app.use("/test", (req, res) => {
  res.send("Hello from the server Ayush");
});

app.use("/hello", (req, res) => {
  res.send("Hello hello hello");
});

app.listen(2438, () => {
  console.log("Server is successfully listening on Port 2438");
});
