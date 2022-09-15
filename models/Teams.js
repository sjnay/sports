const mongoose = require('mongoose')

const TeamSchema = new mongoose.Schema({

    teamName: {type:String},
    sport: {type:String},
    league: {type:String},
    logo: {type:String},
    
})

const Team = mongoose.model('Team', TeamSchema)

module.exports = Team