const express=require("express")
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
//const http = require("http");
const dotenv = require("dotenv");
dotenv.config();

const studentRoute=require("./routes/studentRoute")
const examRoute=require("./routes/examRoute")
const resultRoute=require("./routes/resultRoute")

const port = process.env.PORT;
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.once("connected", () => {
  console.log("Database Connected");
});

database.on("error", (error) => {
  console.log(error);
});

app.get("/", (req, res) => {
  res.send("<h1>Student Portal</h1>");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api/v1/students", studentRoute)
//app.use("/api/v1/drivers", driverRoutes);


app.listen(port, () => console.log(`Server is running on port ${port}`));
// const server = http.createServer(app);
// console.log(`Server running on port ${port}`)


//module.exports = server;
