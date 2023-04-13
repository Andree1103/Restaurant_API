const { tables } = require("../models");

class TableService {
  static async add(body) {
    try {
      const newtables = await tables.create(body);
      return newtables;
    } catch (error) {
      throw error;
    }
  }

  static async getById(id) {
    try {
      const table = await tables.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updatedAt"],
        },
      });
      return table;
    } catch (error) {
      throw error;
    }
  }

  static async updateTable(availability, id) {
    try {
      const result = await tables.update(availability, { where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }

  static async deleteTable(id) {
    try {
      const result = await tables.destroy({ where: { id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TableService;
