const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
    Mathematics: {
        type: String,
        required: [true, "Please enter the your mathematics results"],
        default: 0
    },
    English: {
        type: String,
        required: [true, "Please enter the your English results"],
        default: 0
    },
    Kiswahili: {
        type: String,
        required: [true, "Please enter your Kiswahili results"],
        default: 0
    },
    Science: {
        type: String,
        required: [true, "Please enter your Science results"],
        default: 0
    },
    Social_studies: {
        type: String,
        required: [true, "Please enter your Social Studies results"],
        default: 0
    },
    CRE: {
        type: String,
        required: [true, "Please enter your CRE results"],
        default: 0
    },
    Total: {
        type: String,
        required: true,
        default: 0
    },
    Complete: {
        type: Boolean
    },
    registration_number: {
        type: String,
        required: true,
        ref: "Student",
    },
    exam_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "Exam"
    }

},
    { timestamps: true }
)


const Result = mongoose.model("Result", resultSchema);

module.exports = Result;