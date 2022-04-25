const express = require('express');
const CartedModel = require("../models/CartedModel");
const router = express.Router()

router.post("/deleteCartItem", async (req, res)=>{
    const data= req.body;
    console.log(data);

    CartedModel.findOneAndRemove({ItemName: data.ItemName}, (err,result)=>{
        if (err) res.send(err);
        else res.send(result);
    })
})

module.exports = router;