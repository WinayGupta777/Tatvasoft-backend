const express = require('express');
const ProductListingModel = require("../models/ProductListingModel");
const router = express.Router();

router.get("/getProductItems", async (req, res)=>{
    const obj = await ProductListingModel.find();
    console.log(obj);

    res.send({status:true,details:obj});
})

module.exports = router;