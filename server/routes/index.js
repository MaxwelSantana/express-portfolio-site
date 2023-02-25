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

/*POST Route for displaying the Login page*/
router.post('/login', indexController.processLoginPage);

/*GET Route for register page*/
router.get('/register', indexController.displayRegisterPage);

/*POST Route for processing the Register page*/
router.post('/register', indexController.processRegisterPage);

/*GET to perform userLogout*/
router.get('/logout', indexController.performLogout);

module.exports = router;
