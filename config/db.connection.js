///////////////////////////////
// DEPENDENCIES
////////////////////////////////
const mongoose = require('mongoose');
require("dotenv").config();
const connectionString =process.env.MONGODB_URI
console.log(connectionString)

// pull PORT from .env, give default value of 4000

mongoose.connect(connectionString)

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));