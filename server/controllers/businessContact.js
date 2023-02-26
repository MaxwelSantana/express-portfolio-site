//create a reference to the db Schema which is the model
let BusinessContact = require('../models/businessContact');

//we want to display the businessContactList
module.exports.displayBusinesContactList = (req, res, next) => {
  BusinessContact.find((err, businessContactList) => {
    if (err) {
      return console.error(err);
    } else {
      businessContactList.sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }

        if (a.name > b.name) {
          return 1;
        }

        return 0;
      });
      res.render('business-contact/list', {
        title: 'Business Contact List',
        businessContactList: businessContactList,
        displayName: req.user ? req.user.displayName : '',
      });
    }
  });
};

module.exports.displayAddPage = (req, res, next) => {
  res.render('business-contact/add', {
    title: 'Add Business Contact',
    displayName: req.user ? req.user.displayName : '',
  });
};

module.exports.processAddPage = (req, res, next) => {
  let newBusinessContact = BusinessContact({
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
  });
  BusinessContact.create(newBusinessContact, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/businessContactList');
    }
  });
};

module.exports.displayEditPage = (req, res, next) => {
  let id = req.params.id;
  BusinessContact.findById(id, (err, businessContactToEdit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.render('business-contact/edit', {
        title: 'Edit Business Contact',
        businessContact: businessContactToEdit,
        displayName: req.user ? req.user.displayName : '',
      });
    }
  });
};

module.exports.processEditPage = (req, res, next) => {
  let id = req.params.id;
  let updatedBusinessContact = BusinessContact({
    _id: id,
    name: req.body.name,
    contactNumber: req.body.contactNumber,
    email: req.body.email,
  });
  console.log('req.body', req.body);
  BusinessContact.updateOne({ _id: id }, updatedBusinessContact, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/businessContactList');
    }
  });
};

module.exports.performDelete = (req, res, next) => {
  let id = req.params.id;
  BusinessContact.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      res.redirect('/businessContactList');
    }
  });
};
