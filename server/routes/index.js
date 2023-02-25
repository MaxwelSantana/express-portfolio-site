var express = require('express');
var router = express.Router();
var indexController = require('../controllers');

/* GET home page. */
router.get('/', indexController.displayHomePage);

router.get('/home', indexController.displayHomePage);

router.get('/about', indexController.displayAboutPage);

router.get('/projects', indexController.displayProjectsPage);

router.get('/contact', indexController.displayContactPage);

router.get('/services', indexController.displayServicesPage);

/*GET Route for displaying the Login page*/
router.get('/login', indexController.displayLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

module.exports = router;
