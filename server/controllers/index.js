module.exports.displayHomePage = (req, res, next) => {
  res.render('index', {
    title: 'Home',
    displayName: req.user ? req.user.displayName : '',
  });
};
module.exports.displayAboutPage = (req, res, next) => {
  res.render('about', {
    title: 'About',
    displayName: req.user ? req.user.displayName : '',
  });
};

module.exports.displayProjectsPage = (req, res, next) => {
  res.render('projects', {
    title: 'Projects',
    displayName: req.user ? req.user.displayName : '',
  });
};

module.exports.displayServicesPage = (req, res, next) => {
  res.render('services', {
    title: 'Services',
    displayName: req.user ? req.user.displayName : '',
  });
};

module.exports.displayContactPage = (req, res, next) => {
  res.render('contact', {
    title: 'Contact',
    displayName: req.user ? req.user.displayName : '',
  });
};

module.exports.displayLoginPage = (req, res, next) => {
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
};

module.exports.displayRegisterPage = (req, res, next) => {
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
};
