const jwt = require("jsonwebtoken");

module.exports = {
  createToken(id) {
    return jwt.sign({ id }, "secret", { expiresIn: 60 });
  },

  verifyToken(token) {
    return jwt.verify(token, "secret");
  },
};