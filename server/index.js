const express=require("express");
const mongoose=require("mongoose")
const cors=require("cors")
const UserModel=require('./models/Users')
const app=express()
app.use(express.json())
app.use(cors())
mongoose.connect("mongodb+srv://admin:admin@mern.semf1.mongodb.net/constitution?retryWrites=true&w=majority&appName=MERN");

app.post("/login",(req,res)=>{
    const{email,password}=req.body;
    UserModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Sucess")
            }
        
        else{
            res.json("incorrect password")
        }
    }
    else{
        res.json("no record existed")
    }
    })
})
app.post('/register',(req,res)=>{
UserModel.create(req.body)
.then(users=>res.json(users))
.catch(err=>res.json(err))
})
app.listen(3001,()=>{
    console.log("server is running");
    console.log("DB is connected");
    
})