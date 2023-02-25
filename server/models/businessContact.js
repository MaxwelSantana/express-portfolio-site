let mongoose = require('mongoose');
let businessContactsModel = mongoose.Schema(
  {
    name: String,
    contactNumber: String,
    email: String,
  },
  {
    collection: 'businessContacts',
  },
);

module.exports = mongoose.model('businessContact', businessContactsModel);
