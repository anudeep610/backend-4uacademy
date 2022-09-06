const mongoose=require("mongoose");

const studentSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    college:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    yearOfStudy:{
        type:String,
        required:true
    },
    course:{
        type:String,
        required:true
    },
    langKnow:{
        type:String
    },
    expectation:{
        type:String,
        required:true
    }
},{timestamps:true});

module.exports=mongoose.model("Student",studentSchema);