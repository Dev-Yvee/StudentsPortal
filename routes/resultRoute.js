const express = require("express");

const router = express.Router();

const resultController=require("../controllers/resultController")

router.get("/", resultController.getAllResults);
router.get("/getResult/:id", resultController.getResult); //get student result using the registration number

router.post("/addResult",resultController.addResult)

router.patch("/updateResult/:id",resultController.updateResult)


module.exports = router;