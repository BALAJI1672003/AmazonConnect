const express=require('express');
const users=require('./user')
const app=express();
app.use(express.json());
app.get('/getUser',(req,res)=>{
    const phoneNumber=req.query.phoneNumber;
    console.log(phoneNumber);
    if(!phoneNumber){
        res.status(400).send("Phone number is required");
    }
    const userName=users[phoneNumber];
    if(userName){
        res.status(200).json({name: userName});
    }
    else{
        res.status(404).send("User not found");
    }
})
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})