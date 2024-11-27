// db.js
const mongoose = require("mongoose");
const config = require("../config");

const connectDB = async () => {
  try {
    await mongoose.connect(config.db.uri, config.db.options);
    console.log("Conectado a la base de datos");
  } catch (error) {
    console.error("Error conectando a la base de datos", error);
    process.exit(1);
  }
};

module.exports = connectDB;
