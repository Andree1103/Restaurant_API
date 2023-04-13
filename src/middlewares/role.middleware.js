const isAdmin = async (req, res, next) => {
  const { firstname, role } = req.user;
  if (role != "ADMIN") {
    res.status(401).json({
      message: `${firstname} is not ADMIN`,
    });
  }
  next();
};

const hasRoles = (...roles) => {
  console.log(roles);
  return (req, res, next) => {
    const { role } = req.user;
    if (!roles.includes(role)) {
      res.status(401).json({
        message: `User neer onde of this ${roles} roles`,
      });
    }
    next();
  };
};

module.exports = {
  isAdmin,
  hasRoles,
};
