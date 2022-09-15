const  Router  = require('express');
const express = require('express');
const router = express.Router();
const  db = require('../models');
require('../config/db.connection');





router.get('/',async(req,res)=>{
    try{
        res.status(200).json(await db.Team.find({}))
    } catch(err){
        console.log(err)
    }
})


router.post('/', async (req, res) => {
    try {
        res.status(201).json(await db.Team.create(req.body));
    } catch (err) {
        console.log(err);
    }
})


module.exports = router;