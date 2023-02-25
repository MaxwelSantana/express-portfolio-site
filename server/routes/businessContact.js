let express = require('express');
let router = express.Router();

let businessContactController = require('../controllers/businessContact');
const { protectedRoute } = require('../helper/authRouteHelper');

//GET ROUTE for the business contact list page - READ OPERATION
router.get(
  '/',
  protectedRoute(businessContactController.displayBusinesContactList),
);

module.exports = router;
