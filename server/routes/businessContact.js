let express = require('express');
let router = express.Router();

let businessContactController = require('../controllers/businessContact');
const { requireAuth } = require('../helper/authRouteHelper');

// GET ROUTE for the business contact list page - READ OPERATION
router.get(
  '/',
  requireAuth,
  businessContactController.displayBusinesContactList,
);

// GET Route for displaying the Add Page- CREATE Operation
router.get('/add', requireAuth, businessContactController.displayAddPage);

// POST Route for processing the Add Page - CREATE operation
router.post('/add', requireAuth, businessContactController.processAddPage);

// GET Route for displaying the Edit page - UPDATE operation
router.get('/edit/:id', requireAuth, businessContactController.displayEditPage);
// POST Route for processing the Edit page - UPDATE Operation
router.post(
  '/edit/:id',
  requireAuth,
  businessContactController.processEditPage,
);

// GET to perform Deletion - DELETE Operation
router.get('/delete/:id', requireAuth, businessContactController.performDelete);

module.exports = router;
