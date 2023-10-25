var express = require("express");
var router = express.Router();
router.get("/", function (req, res, next) {
 var randNumArr = Math.random() * 2;
 var rndNumArr = Math.round(randNumArr);
 if (req.query.x) {
  let x = req.query.x;
  var arr = [Math.abs(x), Math.acos(x), Math.sin(x),Math.sinh(x)];
  var funObj = {
   0: "Math.abs()",
   1: "Math.acos()",
   2: "Math.sin()",
   3: "Math.sinh()",
  };
  var arr = [Math.abs(x), Math.acos(x), Math.sin(x), Math.sinh(x)];
  let response1 = `
  Function ${funObj[rndNumArr]} applied to x: ${x} the result is ${arr[rndNumArr].toFixed(4)}`;
  res.send(response1);
 }
 else {
  var randNumArr = Math.random() * 2;
  var rndNumArr = Math.round(randNumArr);
  var randNum = Math.random() * 10;
  var x = Math.round(randNum);
  var funObj = {
   0: "Math.abs()",
   1: "Math.acos()",
   2: "Math.sin()",
   3: "Math.sinh()",
  };
  var arr = [Math.abs(x), Math.acos(x), Math.sin(x), Math.sinh(x)];
  let response = `
  Function ${funObj[rndNumArr]} applied to the random value for x from 1 to 10 is: ${x} and the result is ${arr[rndNumArr].toFixed(4)}`
  res.send(response);
 }
});
module.exports = router;
