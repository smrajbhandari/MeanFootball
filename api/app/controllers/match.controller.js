const Match = require('../models/match.model.js');
var ObjectId = require('mongodb').ObjectID;


exports.addMatch = (req, res) => {

    const match = new Match({
        leagueName: req.body.leagueName,
        startDateTime: req.body.startDateTime,
        homeTeam:req.body.homeTeam,
        awayTeam: req.body.awayTeam
    });


    match.save()
    .then(data => res.send(data))
    .catch(err => res.status(500).send({
        message: err.message
    }));
   
}


exports.getAllMatches = (req, res) => {
    Match.find({})
    .then(data => {
            res.json(data);
    })

}

exports.findMatchById = (req, res) => {
    console.log(req.params.id);
Match.findOne({_id: ObjectId(req.params.id)})
        .then(data => {
                res.json(data);
        })
    }