require("./database/mongoose");

const express=require("express");
const app=express();
const cors=require("cors");
const env=require("dotenv");
app.use(express.urlencoded({extended:true}));
const registerRoute=require("./routes/student");

env.config();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(registerRoute);


app.all("*",(req,res)=>{
    res.status(404).send({message:"Page Not Found"});
});

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`);
});