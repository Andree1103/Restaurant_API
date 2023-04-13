const { users } = require("../models");
const auth = async (req, res, next) => {
  try {
    const { token } = req.headers;
    const user = await users.findByPk(token);
    if (!user) {
      return next({ message: "User not found" });
    }
    req.user = user;
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = auth;
