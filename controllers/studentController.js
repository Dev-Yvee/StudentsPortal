const Student = require("../models/studentModel");

//GENERATING OUR ID
function generateId() {
  let random = `${Math.random()}`;
  // return 10 characters
  return random.substring(2, 8);
}

//MIDDLEWARE TO GET ALL THE STUDENTS
exports.getAllStudents = async (req, res, next) => {
  try {
    const data = await Student.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//MIDDLEWARE TO GET A SPECIFIC STUDENT-USING REGISTRATION NUMBER
exports.getStudent = async (req, res, next) => {
  const id = req.params.id;
  try {
    const data = await Student.findOne({ registration_number: id });
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//MIDDLEWARE TO ADD A NEW STUDENT
exports.addStudent = async (req, res, next) => {
  const beginWith = "YV";
  let registration_number = beginWith.concat(generateId());
  const newStudent = await Student.create({
    registration_number: registration_number,

    first_name: req.body.first_name,
    last_name: req.body.last_name,
    phone_number: req.body.phone_number,
  });
  res.status(201).json({
    status: "Success",
    data: { Student: newStudent },
  });
};

//MIDDLEWARE TO UPDATE A STUDENT
exports.updateStudent = async (req, res) => {
  const id = req.params.id;

  try {
    const data = await Student.updateOne(
      { registration_number: id },
      {
        $set: {
          contact: req.body.contact,
          first_name: req.body.first_name,
        },
      }
    );
    res.json(`Student with registration number ${id} has been updated`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//MIDDLEWARE TO DELETE A STUDENT
exports.deleteStudent = async (req, res, next) => {
  const id = req.params.id;
  try {
    await Student.deleteOne({ registration_number: id });
    res.json(`Student with registration number ${id} has been deleted`);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
