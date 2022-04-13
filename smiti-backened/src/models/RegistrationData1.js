const mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost:27017/Library');
//mongose and backend connection establishment
mongoose.connect('mongodb+srv://smiti:Smiti123@cluster0.uerue.mongodb.net/smiti?retryWrites=true&w=majority' ,(err)=>{
    if(!err){
        console.log("Database connected");
    }
    else{
        console.log(err);
    }
  });

//schema definition

const Schema1 = mongoose.Schema;
//creating a model ith the collection
var userSchema = new Schema1({
    
    email: String,
    password: String,
    usertype:String
});
var UserInfo = mongoose.model('users', userSchema);
//var ArticleListInfo = mongoose.model('myarticles', myarticleSchema);

module.exports= UserInfo;
//module.exports=ArticleListInfo;