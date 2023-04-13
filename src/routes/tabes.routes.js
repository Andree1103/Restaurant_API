const { Router } = require("express");
const {
  createTable,
  gettableById,
  changeAvailability,
  deleteTables,
} = require("../controllers/tables.controllers");
const auth = require("../middlewares/auth.midleware");
const { isAdmin, hasRoles } = require("../middlewares/role.middleware");

const router = Router();

router.post("/tables", auth, isAdmin, createTable);
router
  .route("/tables/:id")
  .get(auth, hasRoles("USER", "SELLER", "ADMIN"), gettableById)
  .put(auth, hasRoles("SELLER", "ADMIN"), changeAvailability)
  .delete(auth, hasRoles("ADMIN"), deleteTables);

module.exports = router;
