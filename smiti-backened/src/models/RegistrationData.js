// Accessing Mongoose Package
const mongoose = require('mongoose');

// Database connection
mongoose.connect('mongodb+srv://smiti:Smiti123@cluster0.uerue.mongodb.net/smiti?retryWrites=true&w=majority',(err)=>{
  if(!err){
      console.log("Database connected");
  }
  else{
      console.log(err);
  }
});

// Schema Definition
const Schema = mongoose.Schema;

const RegistrationSchema = new Schema({
    name: String,
    email: String,
    usertype: String,
    address:String,
   phone:  Number,
    password: String
});

// Model Creation
var registration = mongoose.model('registration', RegistrationSchema);

module.exports = registration;