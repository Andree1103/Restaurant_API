"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      tableId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "tables",
          key: "id",
        },
        field: "table_id",
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "users",
          key: "id",
        },
        field: "user_id",
      },
      total: {
        type: Sequelize.FLOAT,
        defaultValue: 0.0,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("orders");
  },
};
