const connection = require("./connection-secrets.json");
const mongo = require("mongoose");

mongo.connect(connection.link)
.then(()=>console.log("MongoDB: Details connected: ProductListing"))
.catch((e)=>console.log("MongoDB: Details connection error: "+ e));


const ProductListingModel = mongo.model("ProductListing",
    mongo.Schema({
        ItemName:{type: String},
        Description:{type: String},
        O_price:{type: Number},
        R_price:{type: Number},
    })
);

module.exports = ProductListingModel;