const express = require('express');
const DetailModel = require("../models/DetailsModel");
const router = express.Router();

router.post("/getDetails", async (req,res)=>{
    const obj = await DetailModel.find();
    console.log(obj);
    
    res.send({status:true,details:obj});
})
module.exports = router;    