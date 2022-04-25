const connection = require("./connection-secrets.json");
const mongo = require("mongoose");

mongo.connect(connection.link)
.then(()=>console.log("MongoDB: Details connected"))
.catch((e)=>console.log("MongoDB: Details connection error: "+ e));

const DetailModel = mongo.model("CartPage",
    mongo.Schema({
        item_name:{
            type: String,
            required:[true, "ItemName required"]
        },
        original_price:{
            type: Number,
            required:[true, "OriginalPrice required"]
        },
        real_price:{
            type: Number,
            required:[true, "RealPrice required"]
        },
    })
);

module.exports = DetailModel;