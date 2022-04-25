const express = require("express");
const DetailModel = require("../models/DetailsModel");
const router = express.Router();

router.post("/putDetails", async (req,res)=>{
    const data= req.body;
    console.log(data);

    const putDetail = new DetailModel((
        {
            "item_name":data.item_name,
            "original_price":data.original_price,
            "real_price":data.real_price
        }
    ));
    await putDetail.save()
    .then(()=>res.send({status:true,message:"Added to cart"}))
    .catch((err)=>{
        res.send({status:false,message:"Error occured"})
        console.log(err.message);
    })
})

module.exports = router;