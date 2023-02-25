var express = require('express');
var router = express.Router();
var indexController = require('../controllers');

const { protectedRoute } = require('../helper/authRouteHelper');

/* GET home page. */
router.get('/', protectedRoute(indexController.displayHomePage));

router.get('/home', protectedRoute(indexController.displayHomePage));

router.get('/about', protectedRoute(indexController.displayAboutPage));

router.get('/projects', protectedRoute(indexController.displayProjectsPage));

router.get('/contact', protectedRoute(indexController.displayContactPage));

router.get('/services', protectedRoute(indexController.displayServicesPage));

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
