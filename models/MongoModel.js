const connection = require("./connection-secrets.json");
const mongo = require("mongoose");

mongo.connect(connection.link)
.then(()=>console.log("MongoDB connected"))
.catch((e)=>console.log("Mongo connection error: "+ e));

const Model = mongo.model("UserSchema",
    mongo.Schema({
        fname:{
            type: String,
            required:[true, "FirstnameRequired"]
        },
        lname:{
            type: String,
            required:[true, "LastnameRequired"]
        },
        email:{
            type: String,
            unique:true,
            required:[true, "EmailRequired"],
        },
        password:{
            type: String,
            minlength: [5,"Password must be atleast 6"],
            required:[true, "PasswordRequired"]
        }
    })
);

module.exports = Model;