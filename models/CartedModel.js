const connection = require("./connection-secrets.json");
const mongo = require("mongoose");


mongo.connect(connection.link)
.then(()=>console.log("MongoDB: Details connected"))
.catch((e)=>console.log("MongoDB: Details connection error: "+ e));


const CartedModel = mongo.model("CartedItems",
    mongo.Schema({
        ItemName:{
            type: String,
            required:[true, "ItemName required"]
        },
        O_price:{
            type: Number,
            required:[true, "OriginalPrice required"]
        },
        R_price:{
            type: Number,
            required:[true, "RealPrice required"]
        },
    })
);

module.exports = CartedModel;