const dotenv = require("dotenv");
dotenv.config();

//setting up the app credentials
const credentials = {
    apiKey: process.env.API_KEY,
    username: process.env.USER_NAME,
  };

//initializing the software development Kit(SDK)
const AfricasTalking = require("africastalking")(credentials);

// Get the SMS service
const sms = AfricasTalking.SMS;