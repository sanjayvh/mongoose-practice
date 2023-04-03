const mongoose = require("mongoose");

const addressSchema = new mongoose.Schema({
    lane1: String,
    lane2: String,
    street: String,
    city: String,
    country: String,
    pinCode: Number,
});

const studentSchema1 = new mongoose.Schema({
    name: String,
    age: { 
        type: Number,
        min: 16
    },
    email: {
        type: String,
        required: true,
        lowercase: true,    // it will convert email into lowercase 
        minLength: 12,      //  anything < 10 will fail
    },
    createdAt: {
        type: Date,
        // This will ensure that the createdAt column
        // will never update but once in the start
        immutable: true,
        default: () => {
            return Date.now();
        }
    },
    updatedAt: {
        type: Date,
        // This will ensure that the createdAt column
        // will never update but once in the start    
        default: () => {
            return Date.now();
        }
    },
    course: mongoose.Schema.ObjectId,
    subjects: {
        type: [String],
        validate: {
            validator: s => s.length != 0,
            message: props => `${props.value} subject list is not provided`,
        }
    },
    address: addressSchema,
});

module.exports = mongoose.model("Student", studentSchema1);