const express = require('express');
const router = express.Router();
const Model = require("../models/MongoModel");

router.post("/signup",async (req,res)=>{
    console.log("Request for user creation received!!");
    const userdata = req.body;
    console.log(userdata);
    const createUser = new Model((
        {
            fname:userdata.fname, 
            lname:userdata.lname,
            email:userdata.email, 
            password:userdata.password 
        }
    ));

    await createUser.save()
    .then(()=>res.send({status:true,message:"Account created successfully"}))
    .catch((err)=>{
        if(err.message.includes("E11000")){
            res.send({status:false,message:"This email is already exists"});
        }
        if(err.message.includes("atleast")){
            res.send({status:false,message:"Password should be atleast 5 character long"});
        }
        if(err.message.includes("EmailRequired")){
            res.send({status:false,message:"EmailRequired"});
        }
        console.log(err);
    });
})

module.exports = router;