const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.get("Authorization");
    jwt.verify(token, process.env.PRIVATE_KEY);
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};