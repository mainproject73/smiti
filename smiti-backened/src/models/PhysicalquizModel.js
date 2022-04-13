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

const PhysicalquizSchema = new Schema({
    q1:String,
    q2:String,
    q3:String,
    q4:String,
    
    
});

// Model Creation
var physicalquiz = mongoose.model('Physicalquiz', PhysicalquizSchema);

module.exports = physicalquiz;