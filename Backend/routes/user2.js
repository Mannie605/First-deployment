const express = require("express");
const router = express.Router();
const {
    addUser,
    getUserById,
    updateUser,
    deleteUser,
    loginUser,
    getUsers
} = require("../Controllers/userController");

const { verifyToken, verifyAdmin } = require("../middleware/authenticate");

router.post("/", addUser);
router.post("/login", loginUser);
router.get("/users", verifyToken, verifyAdmin, getUsers);
router.get("/:id", verifyToken, getUserById);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

module.exports = router;