var express = require('express');
var router = express.Router();

router.get('/slowrule', function(req, res, next) {
    res.render('./rule/slowrule');
  });

router.get('/test', function(req, res, next) {
    res.render('test');
  });  
module.exports = router;