const express = require('express');
const CartedModel = require("../models/CartedModel");
const router = express.Router();

router.post("/putCartItems", async (req,res)=>{
    const data= req.body;
    console.log(data);

    const insertCart = new CartedModel((
        {
            "ItemName":data.item_name,
            "O_price":data.o_price,
            "R_price":data.r_price
        }
    ));
    await insertCart.save()
    .then(()=>res.send({status:true,message:"Added to cart"}))
    .catch((err)=>{
        res.send({status:false,message:"Error occured"})
        console.log(err.message);
    });
})

module.exports = router;