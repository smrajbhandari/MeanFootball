const Match = require('../models/match.model.js');
var ObjectId = require('mongodb').ObjectID;


exports.addMatch = (req, res) => {

    const match = new Match({
        leagueName: req.body.leagueName,
        startDateTime: req.body.startDateTime,
        homeTeam: req.body.homeTeam,
        awayTeam: req.body.awayTeam
    });


    match.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message
        }));

}


exports.getAllMatches = (req, res) => {
    Match.find({}, { leagueName: 1, startDateTime: 1, "homeTeam.name": 1, "awayTeam.name": 1 })
        .then(data => {
            res.json(data);
        })

}

exports.findMatchById = (req, res) => {
    Match.findOne({ _id: ObjectId(req.params.id) })
        .then(data => {
            res.json(data);
        })
}

exports.addSubsitution = (req, res) => {
        let substitutes ={
            "minute": req.body.minute,
            "playerIn": req.body.playerIn,
            "playerOut": req.body.playerOut
        };

        let updateQuery={
            $push:{"homeTeam.substitutes":substitutes}
        }
        
        if (req.body.side === "AWAY")
         updateQuery={
            $push:{"awayTeam.substitutes":substitutes}
        }
   
    Match.updateOne({ _id: ObjectId(req.params.id) },updateQuery,{upsert: true},)
    .then(
        data=>{
            res.json(data);
        }
    )
}


exports.addEvents = (req, res) => {
    let event ={
        "minute": req.body.minute,
        "player": req.body.player,
        "event": req.body.event,
        "homeScore": req.body.homeScore,
        "awayScore": req.body.awayScore
    };
    let updateQuery={
        $push:{events:event}
    };

    Match.updateOne({ _id: ObjectId(req.params.id) },updateQuery,{upsert: true})
    .then(
        data=>{
            res.json(data);
        }
    )
}

exports.addCommentary = (req, res) => {
    let commentary ={
        "minute": req.body.minute,
        "message": req.body.message
    
    };
    let updateQuery={
        $push:{commentaries:commentary}
    }

    Match.updateOne({ _id: ObjectId(req.params.id) },updateQuery,{upsert: true})
    .then(
        data=>{
            res.json(data);
        }
    )

}


exports.addStatistics = (req, res) => {
    let statistics ={
        shotsOnTarget: {
            homeTeam: req.body.shotsOnTargetHome,
            awayTeam: req.body.shotsOnTargetAway
        },
        shotsOffTarget: {
            homeTeam: req.body.shotsOffTargetHome,
            awayTeam: req.body.shotsOffTargetAway
        },
        possession: {
            homeTeam: req.body.possessionHome,
            awayTeam: req.body.possessionAway
        },
        corners: {
            homeTeam: req.body.cornersHome,
            awayTeam: req.body.cornersAway
        },
        offsides: {
            homeTeam: req.body.offsidesHome,
            awayTeam: req.body.offsidesAway
        },
        fouls: {
            homeTeam: req.body.foulsHome,
            awayTeam: req.body.foulsAway
        },
        goalKicks: {
            homeTeam: req.body.goalKicksHome,
            awayTeam: req.body.goalKicksAway
        }
    };

    let updateQuery={
        $push:{statistic:statistics}
    }

    Match.updateOne({ _id: ObjectId(req.params.id) },updateQuery,{upsert: true})
    .then(
        data=>{
            res.json(data);
        }
    )

}

exports.updateStatus = (req, res) => {
    let updateQuery={
        $set:{status:req.body.status}
    }
    Match.updateOne({ _id: ObjectId(req.params.id) },updateQuery,{upsert: true})
    .then(
        data=>{
            res.json(data);
        }
    )

}

