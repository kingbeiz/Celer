const express = require('express');
const bodyParser = require("body-parser")
const https = require("https")

const app = express()

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res)){
    res.sendFile();
}

app.listen(3000, function () {
    console.log("Server is running on Port 3000.");
  });