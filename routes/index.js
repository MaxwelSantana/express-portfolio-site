var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home' });
});

/* GET home page. */
router.get('/about', function (req, res, next) {
  res.render('about', { title: 'About' });
});

/* GET home page. */
router.get('/projects', function (req, res, next) {
  res.render('projects', { title: 'Projects' });
});

/* GET home page. */
router.get('/services', function (req, res, next) {
  res.render('services', { title: 'Services' });
});

/* GET home page. */
router.get('/contact', function (req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post('/contact', function (req, res, next) {
  const { firstname, lastname, email, message } = req.body;
  console.log('###################################');
  console.log('First Name: ', firstname);
  console.log('Last Name: ', lastname);
  console.log('Email: ', email);
  console.log('Message: ', message);
  console.log('###################################');
  res.render('index', { title: 'Home' });
});

module.exports = router;
