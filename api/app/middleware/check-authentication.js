const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  try {
    const token = req.get("Authorization");
    let decoded=jwt.verify(token, process.env.PRIVATE_KEY);
    
    if (!decoded.isAdmin)
      throw Error("Not Admin");
    next();
  } catch (error) {
    res.status(401).json({ message: "Auth failed!" });
  }
};