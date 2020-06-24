const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const cors = require( 'cors' );
const route = require("./routers/menurouters");
const app = express();
app.use( cors() );
app.use("/menu",route)

app.listen(9000)
console.log("Server Started at 9000")