const express = require("express");

const router = express.Router();

const studentController=require("../controllers/studentController")

router.get("/", studentController.getAllStudents);
router.get("/getStudent/:id", studentController.getStudent); //get student using the registration number

router.post("/addStudent",studentController.addStudent)

router.patch("/updateStudent/:id",studentController.updateStudent)

router.delete("/deleteStudent/:id",studentController.deleteStudent)

module.exports = router;