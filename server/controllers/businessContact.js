//create a reference to the db Schema which is the model
let BusinessContact = require('../models/businessContact');

//we want to display the bookList
module.exports.displayBusinesContactList = (req, res, next) => {
  BusinessContact.find((err, businessContactList) => {
    if (err) {
      return console.error(err);
    } else {
      res.render('business-contact/list', {
        title: 'Business Contact',
        BusinessContactList: businessContactList,
        displayName: req.user ? req.user.displayName : '',
      });
    }
  });
};
