const { users } = require("../models");

class UserService {
  static async add(userData) {
    try {
      const result = await users.create(userData);
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = UserService;
