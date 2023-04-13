const AuthServices = require("../services/auth.service");
const bcrypt = require("bcrypt");

const userLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await UsersService.getUser(email);
    if (!user) {
      return next({
        status: 400,
        message: "Invalid email",
        error: "User not found",
      });
    }
    if (!user.emailVerifed) {
      return next({
        status: 400,
        message: "User email is not verified",
        error: "Email verification",
      });
    }
    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) {
      return next({
        status: 400,
        message: "The password doesnt match with email user",
        error: "Invalid pasword",
      });
    }
    const { id, name, lastname, username } = user;
    const token = AuthServices.getToken({ id, name, lastname, username });
    res.json({
      id,
      name,
      lastname,
      username,
      email,
      token,
    });
  } catch (error) {
    next(error);
  }
};
