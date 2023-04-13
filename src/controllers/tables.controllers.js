const TableService = require("../services/table.service");

const createTable = async (req, res, next) => {
  try {
    console.log("ejecutando controlador");
    const body = req.body;
    const table = await TableService.add(body);
    res.status(201).json(table);
  } catch (error) {
    next(error);
  }
};

const gettableById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const table = await TableService.getById(id);
    res.json(table);
  } catch (error) {
    next(error);
  }
};

const changeAvailability = async (req, res, next) => {
  try {
    const availability = req.body;
    const { id } = req.params;
    await TableService.updateTable(availability, id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

const deleteTables = async (req, res, next) => {
  try {
    const { id } = req.params;
    await TableService.deleteTable(id);
    res.status(204).json();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createTable,
  gettableById,
  changeAvailability,
  deleteTables,
};
