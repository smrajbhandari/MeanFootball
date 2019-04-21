const User = require('../models/user.model.js');
const jwt = require("jsonwebtoken");

exports.create = (req, res) => {
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    });

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
    User.findOne({email: req.body.email, password: req.body.password})
        .then(data => {
            const token = jwt.sign(
                { email: "email", isAdmin:true },
                process.env.PRIVATE_KEY,
                { expiresIn: "2h" }
              );
            res.json(token)
        
        });

       
}