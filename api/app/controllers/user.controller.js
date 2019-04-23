const User = require('../models/user.model.js');
const jwt = require("jsonwebtoken");

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

exports.checkExistingEmail = (req, res) => {
    User.findOne({ email: req.query.email })
        .then(data => {
            if (data)
                res.status(401).json({ emailExists: true });
            else
                res.json({ emailExists: false });
        })
};

exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (!user) {
                res.status(401).json({ message: 'User not found.' });
            }

            if (!user.validPassword(req.body.password)) {
                res.status(401).json({ message: 'Oops! Wrong password.' });
            }

            const token = jwt.sign(
                { email: "email", isAdmin: true },
                process.env.PRIVATE_KEY,
                { expiresIn: "2h" }
            );

            const responseData = {};
            responseData.token = token;
            responseData.user = user;
            res.json(responseData)
        });
}