const express = require("express");
const bodyParser = require("body-parser");                // require 'body-parser' package

const app = express();

app.use(bodyParser.urlencoded({extended: true}));      // mandatory line, if we use 'body-parser'


app.get("/", function(req, res) {                    // 'get' method
  res.sendFile(__dirname + "/index.html");        //     '/' means route directory
});

app.post("/", function(req, res) {               // 'post' method

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);            // num1, num2 are declared name in 'index.html' in 'input' tag
  var result = num1 + num2;

  res.send("The result of calcultion is: " + result);
});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator", function(req, res){
  var weight = parseFloat(req.body.weight);                  //parseFloat = floating point
  var height = parseFloat(req.body.height);

  var bmi = weight / (height * height);

  res.send("The result of BMI Calculator is: " + bmi);
});


app.listen(3000, function() {               // 'listen' method
  console.log("Server started on port 3000");
});
