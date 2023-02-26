var express = require('express');
var router = express.Router();
var indexController = require('../controllers');

const { requireAuth } = require('../helper/authRouteHelper');

/* GET home page. */
router.get('/', requireAuth, indexController.displayHomePage);

router.get('/home', requireAuth, indexController.displayHomePage);

router.get('/about', requireAuth, indexController.displayAboutPage);

router.get('/projects', requireAuth, indexController.displayProjectsPage);

router.get('/contact', requireAuth, indexController.displayContactPage);

router.get('/services', requireAuth, indexController.displayServicesPage);

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
