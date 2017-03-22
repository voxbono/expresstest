var express = require('express');
var router = express.Router();


router.post('/', function(req, res) {
  var name = req.body.name;
  res.render('register', { title: 'Express' , name: name});
});

module.exports = router;