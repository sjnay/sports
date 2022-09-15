///////////////////////////////
// DEPENDENCIES
////////////////////////////////

const mongoose = require('mongoose');
require('dotenv').config()

const MONGODB_URI = process.env.MONGODB_URI
console.log(MONGODB_URI)

///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////
mongoose.connect(MONGODB_URI, (msg)=>console.log(`${msg}`))



///////////////////////////////
// DATABASE CONNECTION
////////////////////////////////

// Connection Events
mongoose.connection
  .on("open", () => console.log("Your are connected to mongoose"))
  .on("close", () => console.log("Your are disconnected from mongoose"))
  .on("error", (error) => console.log(error));