var express = require('express');
var router = express.Router();

profile = {
  name: 'Yaseen',
  position: 'Applied ML',
  company: 'EY'
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', profile)
});

module.exports = router;
