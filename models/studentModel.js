const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    first_name: {
      type: String,
      required: [true, "Please enter the your first name"],
    },
    last_name: {
      type: String,
      required: [true, "Please enter the your name"],
    },
    registration_number:{
        type:String,
        required:[true,"Please enter your registration number"]
    },
    phone_number:{
        type:Number,
        required:[true,"Please enter your contact number"],
        unique: true,
    }


})

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;