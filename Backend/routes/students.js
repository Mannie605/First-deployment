const express = require("express");
const router = express.Router();
const {
    addStudent,
    getStudent,
    updateStudent,
    deleteStudent
} = require("../Controllers/studentController");

router.post("/", addStudent);
router.get("/", getStudent);
router.put('/', updateStudent);
router.delete("/", deleteStudent);

module.exports = router;