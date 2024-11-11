const express = require("express");
const connectDB = require("./config/database");
const User = require("./models/user");
const app = express();

// Creating APIs
app.post("/signup", async (req, res) => {
  const userObj = {
    firstName: "Luis",
    lastName: "Suarez",
    emailId: "luis@suarez.com",
    password: "suarez@456",
  };

  // Creating new instance of the User model
  const user = new User(userObj);
  try {
    await user.save();
    res.send("User added successfully");
  } catch {
    res.status(400).send("Failed to add user!");
  }
});

// First Connect to DB and then Start server o/w things could messed up!
connectDB()
  .then(() => {
    console.log("Database connection established!");

    app.listen(2438, () => {
      console.log("Server is successfully listening on Port 2438");
    });
  })
  .catch((error) => {
    console.log("Database can not be connected");
  });
