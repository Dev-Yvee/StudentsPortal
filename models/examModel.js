const mongoose = require("mongoose");

const examSchema = new mongoose.Schema({
    Title: {
      type: String,
      required: [true, "Please enter the title for the exam"],
    }
},
{timestamps:true}
)
const Exam = mongoose.model("Exam", examSchema);

module.exports = Exam;