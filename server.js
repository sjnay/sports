//dependencies
const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 4000
const cors = require("cors");
const morgan = require("morgan");
require('./config/db.connection');


//controllers

const teamsController = require('./controllers/teamsController.js')
//middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use('/teams', teamsController);

//routes
app.get('/',(req,res)=>{
    res.send("ay ay captain")
})

app.listen(4000,()=>{
    console.log(`i cant hear youuuuu on ${PORT}`)
})