const jwt = require("jsonwebtoken");
const dbConfig = require('../../config/database.config.js');

module.exports = (req, res, next) => {
  try {
    const token = req.headers.Authorization;
    var decoded=jwt.verify(token, dbConfig.privateKey);
    req._isAdmin=decoded._isAdmin;
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};