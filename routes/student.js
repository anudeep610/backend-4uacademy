const express=require('express');
const router=express.Router();
const Student=require("../models/student");

router.post("/register",async(req,res)=>{
    try{
        const newStudent=new Student({
            ...req.body
        });
        await newStudent.save();
        res.status(200).send(newStudent);
    }catch(err){
        res.status(400).send("error");
    }
});

router.get("/asxde/java",async(req,res)=>{
    try{
        const allStudents=await Student.find({course:"java"});
        res.status(200).send(allStudents);
    }catch(err){
        res.status(400).send(err);
    }
});

router.get("/asxde/dsa",async(req,res)=>{
    try{
        const allStudents=await Student.find({course:"dsa"});
        res.status(200).send(allStudents);
    }catch(err){
        res.status(400).send(err);
    }
});

module.exports=router;