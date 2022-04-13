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

const ParentSchema=new  Schema({
    father:String,
    mother:String,
    guardian: String,
    attendedschool: String,
    approved: Boolean
    });


// Model Creation

var parent =mongoose.model('parent',ParentSchema);
module.exports=parent;

