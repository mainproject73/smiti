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

const TherapistSchema=new  Schema({
user_id:String,
qualification:String,
specilization:String,
experience: String,
certificate: String,
Recommendationletter: String,
approved:Boolean,

})


// Model Creation

var therapist =mongoose.model('therapist',TherapistSchema);


module.exports= therapist;
