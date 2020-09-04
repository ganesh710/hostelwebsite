var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/admin_warden', function(req, res, next) {
  res.render('admin_warden');
});
router.get('/studentlogin', function(req, res, next) {
  res.render('studentlogin');
});
router.get('/adminpage', function(req, res, next) {
  res.render('adminpage');
});

module.exports = router;
