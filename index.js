const mongoose = require("mongoose");

const Student = require("./models/students.model");

// Can also provide extra params for a private db
// mongoose.connect('mongodb://username:password@host:port/database?options...');

connectDb();
// dbOperations();
dbQueries();

async function connectDb() {
    // mongoose.connect("mongodb://127.0.0.1:27017/sample_db");
    mongoose.connect("mongodb://localhost:27017/sample_db")
        .then(() => {
            console.log("Connected to Database");
        })
        .catch(err => {
            console.log("Error connecting to Database: " + err.message);
        });
}

async function dbOperations() {
    try {
        const student = await Student.create({
            name: "Naveen",
            age: 27,
            subjects: ["DSA"],
            email: "gote@gmail.com",
        });

        console.log(student);
    } catch (e) {
        console.log(e.message);
    }
}

async function dbQueries() {
    try {
        // const student = await Student.findById("642a8a269043d621e9bd1393");
        const student = await Student.find({ name: "Naveen"});
        // const student = await Student.findOne({ name: "Naveen"});
        // const student = await Student.deleteOne({ name: "Naveen"});
        console.log(student);
    } catch (e) {
        console.log(e.message);
    }
}