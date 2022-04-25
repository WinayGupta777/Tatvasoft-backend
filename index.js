const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());

const routeSignUp = require("./routes/signup");
const routeSignIn = require("./routes/signin");
const routePutCartItem = require("./routes/putCartItem");
const routeGetCartedItems = require("./routes/getCartedItems");
const routeGetProductItems = require("./routes/getProductLists");
const deleteCartItems = require("./routes/deleteCartedItems");


const bodyParser = require("body-parser");
app.use(bodyParser.json());



app.use("/",routeSignUp);
app.use("/",routeSignIn);
app.use("/",routePutCartItem);
app.use("/",routeGetCartedItems);
app.use("/",routeGetProductItems);
app.use("/",deleteCartItems);
// app.all("*",(req,res)=>{res.send("<h1>404 Error</h1>")})
app.listen(8080, console.log("Server Started"));