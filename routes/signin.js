const express = require('express');
const Model = require("../models/MongoModel");
const router = express.Router();

const jwt = require("jsonwebtoken");

router.post("/signin",async (req,res)=>{
    const userdata = req.body;

    const obj = await Model.findOne({email:userdata.email});
    console.log(obj);
    if (obj){
        if (obj.password==userdata.password) {
            const token = jwt.sign({email: userdata.email},"bond007");
            //console.log(token);
            res.send({
                status:true,
                message:"Authentication Successful",
                token: token    
            });
        } else {
            res.send({status:false,message:"Incorrect Password", token:""});
        }
    }else {res.send({status:false,message:"Email does not exists"});}
})

module.exports = router;