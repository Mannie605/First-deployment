// require("dotenv").config();
// const express = require("express");
// const mongoose = require("mongoose");
// const userRoutes = require("./routes/user");
// const studentRoutes = require("./routes/student");
// const path = require("path");
// const Student = require ("./model/student");

// const app = express();
// // const logger = require("./middleware/logger");
// const PORT = process.env.PORT || 2468;

// app.listen (PORT, () => {
//     console.log(`App running on port ${PORT}`);
// });

// // app.use(logger);

// // app.use((req, res, next) => {
// //     console.log(
// //         `[${new Date(). toISOString()}] ${req.method} request to ${req.url}`
// //     );
// //     next();
// // });

// // app.get("/", (req, res) => {
// //     res.send ("welcome to OTS");
// // });

// // // GET: Fetch data (e.g., app.get ('/route', callback))
// // // POST: Submit data (e.g., app.post('/route', callback))
// // // PUT: Update data (e.g., app.put('/route', callback))
// // // DELETE: Remove data (e.g., app.delete ('/route', callback))

// // //dynamic route with parameters
// // app.get ("/user/:id", (req,res) => {
// //     const userId = req.params.id;
// //     res.send(`user ID: ${userId}`)
// // })

// // //query parameters
// // app.get("/search", (req, res) => {
// //     const query = req.query.q;
// //     res.send(`search query: ${query}`);
// // });

// // // Standard middleware function
// // function (req, res, next) {
// //     // logic in here
// // }

// // // Custom middleware 
// // function logger(req, res, next) {
// //     console.log(`${req.method} ${req.url}`);
// //     next();
// // }

// // app.use(logger);

// // app.use((req, res, next) => {
// //     console.log("first middleware");
// //     next(); //pass to the next middleware
// // });

// // app.use(logger);
// // app.use(express.json());
// // app.use(express.static(path.join(__dirname, "public")));

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.DB_URI);
//         console.log("MongoDB Connected");
//     } catch (err) {
//         console.log("Connection Error:", err.message);
//         process.exit(1);
//     }
// };
// connectDB();

// // async function addStudent(name, age, course) {
// //     const student = new Student({ name, age, course });
// //     try {
// //         const result = await student.save();
// //         console.log("Student Added:", result);
// //     } catch (err) {
// //         console.error("Error Adding Student:", err.message);
// //     }
// // }

// // addStudent ("Alice Smith", 21, "Mathematics");

// async function getStudents() {
//     const students = await Student.find({ age: {$gte: 18}})
//     .sort({ name: 1 }) // Sort by name (ascending)
//     .limit(10) // Limit results
//     .select(" name age course "); // Select specific fields
//     console.log("students:", students);
// }
// getStudents();

// async function addStudent(name, age, course) {
//     const student = new Student({ name, age, course });
//     try {
//         const result = await student.save();
//         console.log("Student Added:", result);
//     } catch (err) {
//         console.error("Error Adding Student:", err.message);
//     }
// }

// addStudent ("Alice Smith", 17, "Mathematics");


// async function getStudents() {
//     const students = await Student.find({ age: {$gte: 18}})
//     .sort({ name: 1 }) // Sort by name (ascending)
//     .limit(10) // Limit results
//     .select(" name age course "); // Select specific fields
//     console.log("students:", students);
// }
// getStudents();

// async function updateStudent(id, updates) {
//     try {
//         const student = await Student.findByIdAndUpdate(
//             id,
//             updates,
//             { new: true, runValidators: true } // Returns updated doc and runs schema validators
//         );
//         console.log("Updated Student:", student);
//     } catch (err) {
//         console.error("Error Updating Student:", err.message);
//     }
// }

// updateStudent("685595215049b37e532b91e8", { age: 23 });

// async function deleteStudent(id) {
//     try{
//         const result = await Student.findByIdAndDelete(id);
//         console.log("Deleted Student:", result);
//     } catch (err) {
//         console.error("Error Deleting Student:", err.message);
//     }
// }

// deleteStudent("6852ec39b5eb6f14f1b3951f");

// app.get("/app/api/:id", async (req, res) => {
//     const {id} = req.params;
//     try {
//         const student = await Student.findById(id);

//         res.status(200).json(student);
//     } catch (err) {
//         res.status(500).json("Student not found");
//     }
// });

// // app.get("/", (req, res) => {
// //     res.sendFile(path.join(__dirname, "public", "index.html"));
// // });

// // // app.use((req, res, next) => {
// // //     console.log("second middleware");
// // //      res.send("request processed!")
// // // });

// // app.use("/users", userRoutes)

// // // app.use((req, res) => {
// // //     res.status(404).send("404 Not Found");
// // // });

// // //res.status(200).send("OK");//SUCCESS
// // //res.status(404).send("Not Found");//Resource not found
// // //res.status(500).send("Server Error"); // Internal sever error

// app.listen (port, () => {
//     console.log(`App running on port ${port}`);
// });