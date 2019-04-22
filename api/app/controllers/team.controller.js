const Team = require('../models/team.model.js');

exports.create = (req, res) => {
    const team = new Team({
        name: req.body.name,
        coach: req.body.coach
    });

    team.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message
        }));
};

exports.findAll = (req, res) => {
    Team.find()
        .then(teams => res.send(teams))
        .catch(err => res.status(500).send({
            message: err.message
        }));
};

exports.findOne = (req, res) => {
    Team.findById(req.params.teamId)
        .then(team => {
            if(!team) {
                return res.status(404).send({
                    message: "Team not found with id " + req.params.teamId
                });            
            }
            res.send(team);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Team not found with id " + req.params.teamId
                });                
            }
            return res.status(500).send({
                message: "Error retrieving team with id " + req.params.teamId
            });
        });
}

exports.update = (req, res) => {
    Team.findByIdAndUpdate(req.params.teamId, {
        name: req.body.name,
        coach: req.body.coach
    })
    .then(team => {
        if (!team) {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });
        }
        res.send(team);
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Team not found with id " + req.params.teamId
            });                
        }
        return res.status(500).send({
            message: "Error updating team with id " + req.params.teamId
        });
    });
};

exports.delete = (req, res) => {
    Team.findByIdAndRemove(req.params.teamId)
        .then(team => {
            if(!team) {
                return res.status(404).send({
                    message: "Team not found with id " + req.params.teamId
                });
            }
            res.send({message: "Team deleted successfully!"});
        }).catch(err => {
            if(err.kind === 'ObjectId' || err.name === 'NotFound') {
                return res.status(404).send({
                    message: "Team not found with id " + req.params.teamId
                });                
            }
            return res.status(500).send({
                message: "Could not delete team with id " + req.params.teamId
            });
        });
};