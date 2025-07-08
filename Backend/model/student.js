const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    age: {
        type: Number,
        required: true,
        min: 17,
        max: 80,
    },
    course: {
        type: String,
        enum: ["Computer Science", "Mathematics", "Physics"],
    },
    enrolled: { type: Boolean, default: true},
    date: { type: Date, default: Date.now },
});

const Student = mongoose.model(" student", studentSchema);

module.exports = Student;