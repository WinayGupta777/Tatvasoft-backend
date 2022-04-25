const express = require('express');
const CartedModel = require("../models/CartedModel")
const router = express.Router();

router.post("/getCartedItems", async (req, res)=>{
    const obj = await CartedModel.find();
    console.log(obj);

    res.send({status:true,details:obj});
})

module.exports = router;