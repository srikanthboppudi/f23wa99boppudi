var express = require('express');
var router = express.Router();

/* getting mydata page */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Srikanth Boppudi' });
});

module.exports = router;
