const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended: true}));

// This code below is for simple calculator

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req, res){
  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;
  res.send("Result of the calculator is: " + result);
});

// This code below is for calculating BMI

app.get("/bmiCalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req, res){
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);

  var result = weight / (height*height);

  res.send("Your BMI is: " + result);
});

app.listen(port, function(){
  console.log("Server started at port " + port);
});
