const UserService = require("../services/user.service");

const createUser = async (req, res, next) => {
  try {
    const userData = req.body;
    await UserService.add(userData);
    res.status(201).send();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUser,
};
