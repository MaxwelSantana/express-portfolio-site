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

/* POST contact form */
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

router.get('/login', function (req, res, next) {
  //check if the user is already logged in*/
  if (!req.user) {
    res.render('auth/login', {
      title: 'Login',
      messages: [], //req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : '',
    });
  } else {
    return res.redirect('/');
  }
});

router.get('/register', function (req, res, next) {
  //check if the user is not already logged in*/
  if (!req.user) {
    res.render('auth/register', {
      title: 'Register',
      messages: [], //req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : '',
    });
  } else {
    return res.redirect('/');
  }
});

module.exports = router;
