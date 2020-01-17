const express = require("express"); 
const bodyParser = require("body-parser");
const cors = require('cors');
const formidable = require('express-formidable');
const app = express()
const port = process.env.PORT || 8081;

app.use(cors())   
app.use(express.static(__dirname + "/assets"));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(formidable());

// app.use("/api/v2", require("./routers/router"))
const config = require('config');
app.listen(port, ()=>{

    console.log("Server is running...")
    console.log("http://localhost:"+port)
});
