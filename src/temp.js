const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

// use(route, routeHandler)
// routeHandler is the one who sends response for corresponding routes, rest routeHandlers are reffered
// as "middleware"
app.get(
  "/user",
  userAuth,
  [
    (req, res, next) => {
      console.log("Handling the route user");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 2");
      next();
    },
    (req, res, next) => {
      console.log("Handling the route user 3");
      next();
    },
  ],
  (req, res, next) => {
    console.log("Handling the route user 4");
    res.send("Data SUccessfully added to Db 4");
  }
);

app.post("/user", (req, res, next) => {
  console.log("Saving Data to DB");
  res.send("Data SUccessfully added to Db");
});

app.get("/user/:userId", (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send({ fname: "ayush", lname: "mangukiya" });
});

app.get("/ab?c", (req, res) => {
  res.send({ fname: "ayush", lname: "mangukiya" });
});

app.get("/ab+c", (req, res) => {
  res.send({ fname: "ayush", lname: "mangukiya" });
});

app.get("/ab*cd", (req, res) => {
  res.send({ fname: "ayush", lname: "mangukiya" });
});

app.get("/a(bc)?d", (req, res) => {
  res.send({ fname: "ayush", lname: "mangukiya" });
});

// app.use() will match all the HTTP method API calls to corresponding routes
// app.use("/hello", (req, res) => {
//   res.send("Hello hello hello");
// });

// app.use("/test", (req, res) => {
//   res.send("Hello from the server Ayush");
// });

// app.use("/", (req, res) => {
//   res.send("Welcome Ayush");
// });
app.get("/student", (req, res) => {
  console.log("Student Route Handler 2");
  res.send("Response from route handler 2");
});
app.get("/student", (req, res, next) => {
  console.log("Student Route Hanlder 1");
  next();
});

// Hsndle Auth Middleware for all requests
// middlewares are generally written via use()
app.use("/admin", adminAuth);

app.get("/admin/adduser", (req, res) => {
  console.log("add user router handler");
  res.send("Added user successfully");
});

app.get("/admin/deleteuser", (req, res) => {
  res.send("User deleted Successfully");
});

app.use("/", (err, req, res, next) => {
  if (err) {
    res.status(500).send("Something went wrong");
  }
});

app.get("/personData", (req, res) => {
  throw new Error("as");
  res.send("Person Data Sent");
});

app.use("/allPersonData", (req, res) => {
  try {
    throw new Error("abcfef");
  } catch {
    res.status(500).send("Something went wrong");
  }
});

app.listen(2438, () => {
  console.log("Server is successfully listening on Port 2438");
});
