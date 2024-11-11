const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://ayushmangukiya:kWxM9IlDXFDqinM4@cluster0.fscts.mongodb.net/devTinder"
  );
};

module.exports = connectDB;
