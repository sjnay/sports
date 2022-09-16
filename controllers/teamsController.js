const  {Router}  = require('express');
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

// PEOPLE SHOW ROUTE
router.get("/:id", async (req, res) => {
    try {
      // send one person
      res.json(await db.Team.findById(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE UPDATE ROUTE
  router.put("/:id", async (req, res) => {
    try {
      // update people by ID
      res.json(
        await db.Team.findByIdAndUpdate(req.params.id, req.body, { new: true })
      );
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });
  
  // PEOPLE DELETE ROUTE
  router.delete("/:id", async (req, res) => {
    try {
      // delete people by ID
      res.json(await db.Team.findByIdAndRemove(req.params.id));
    } catch (error) {
      //send error
      res.status(400).json(error);
    }
  });


module.exports = router;