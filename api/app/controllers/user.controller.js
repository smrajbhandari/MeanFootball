const User = require('../models/user.model.js');
const jwt = require("jsonwebtoken");
const dbConfig = require('../../config/database.config.js');

exports.create = (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
    });
    user.password = user.generateHash(req.body.password);

    user.save()
        .then(data => res.send(data))
        .catch(err => res.status(500).send({
            message: err.message
        }));
};

exports.checkEmailNotTaken = (req, res) => {
    User.findOne({email: req.query.email})
        .then(data => {
            if (data)
                res.json({emailNotTaken: false})
            else
                res.json({emailNotTaken: true})
        })
};

exports.login = (req, res) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                res.status(401).json({ message: 'User not found.' });
            }

            if (!user.validPassword(req.body.password)) {
                res.status(401).json({ message: 'Oops! Wrong password.'});
            }

            const token = jwt.sign(
                { email: User.email, isAdmin: User.isAdmin },
                dbConfig.privateKey,
                { expiresIn: "2h" }
              );
                
            res.json(token)
        });
}