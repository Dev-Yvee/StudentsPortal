const Result = require("../models/resultModel");
const Student = require("../models/studentModel");
const Exam = require("../models/examModel");

//FUNCTION TO PERFORM ADDITION
let addition = (
  Mathematics,
  English,
  Kiswahili,
  Science,
  Social_studies,
  CRE
) =>
  parseInt(Mathematics) +
  parseInt(English) +
  parseInt(Kiswahili) +
  parseInt(Science) +
  parseInt(Social_studies) +
  parseInt(CRE);

//MIDDLEWARE TO GET ALL RESULTS
exports.getAllResults = async (req, res, next) => {
  try {
    const data = await Result.find();
    res.status(200).json({ totalStudents: data.length, data });
    // data: { Result: newResult }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//MIDDLEWARE TO GET A SPECIFIC STUDENT RESULT USING THE REGISTRATION NUMBER
exports.getResult = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await Result.findOne({ registration_number: id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//MIDDLEWARE TO ADD A RESULT
exports.addResult = async (req, res, next) => {
  let total = addition();
  const newResult = await Result.create({
    Total: total,

    registration_number: req.body.registration_number,
    exam_id: req.body.exam_id,
    Mathematics: req.body.Mathematics,
    English: req.body.English,
    Kiswahili: req.body.Kiswahili,
    Science: req.body.Science,
    Social_studies: req.body.Social_studies,
    CRE: req.body.CRE,

    // const { Mathematics, English, Kiswahili, Science, Social_studies,cre, registration_number, exam_id } = req.body;
  });
  res.json(newResult);
};
//MIDDLEWARE TO UPDATE A RESULT
exports.updateResult = async (req, res, next) => {
  const id = req.params.id;

  const { Mathematics, English, Kiswahili, Science, Social_studies, CRE } =
    req.body;

  if (
    !Mathematics ||
    !English ||
    !Kiswahili ||
    !Science ||
    !Social_studies ||
    !CRE
  ) {
    return res.status(400).json("Input all the subjects");
  }
  const total =
    parseInt(Mathematics) +
    parseInt(English) +
    parseInt(Kiswahili) +
    parseInt(Science) +
    parseInt(Social_studies) +
    parseInt(CRE);

  Result.findOneAndUpdate(
    { _id: id },
    {
      Mathematics: Mathematics,
      English: English,
      Kiswahili: Kiswahili,
      Science: Science,
      Social_studies: Social_studies,
      CRE: CRE,
      total: total,
      completed: true,
    },
    { new: true }
  )
    .then((newResult) => {
      res
        .status(200)
        .json({ message: "Result updated successfully", newResult });
    })
    .catch((err) => {
      console.log(err.message);
      res.status(400).json(err.message);
    });
};
//MIDDLEWARE TO SEND EXAM RESULTS
