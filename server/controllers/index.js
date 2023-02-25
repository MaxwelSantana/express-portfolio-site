let passport = require('passport');

/*create the userModel instance*/
let UserModel = require('../models/user');
let User = UserModel.User;

protectedRoute = (callbackFn) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.redirect('/login');
    }
    callbackFn(req, res, next);
  };
};

module.exports.displayHomePage = protectedRoute((req, res, next) => {
  res.render('index', {
    title: 'Home',
    displayName: req.user ? req.user.displayName : '',
  });
});

module.exports.displayAboutPage = protectedRoute((req, res, next) => {
  res.render('about', {
    title: 'About',
    displayName: req.user ? req.user.displayName : '',
  });
});

module.exports.displayProjectsPage = protectedRoute((req, res, next) => {
  res.render('projects', {
    title: 'Projects',
    displayName: req.user ? req.user.displayName : '',
  });
});

module.exports.displayServicesPage = protectedRoute((req, res, next) => {
  res.render('services', {
    title: 'Services',
    displayName: req.user ? req.user.displayName : '',
  });
});

module.exports.displayContactPage = protectedRoute((req, res, next) => {
  res.render('contact', {
    title: 'Contact',
    displayName: req.user ? req.user.displayName : '',
  });
});

module.exports.displayLoginPage = (req, res, next) => {
  //check if the user is already logged in*/
  if (!req.user) {
    res.render('auth/login', {
      title: 'Login',
      messages: req.flash('loginMessage'),
      displayName: req.user ? req.user.displayName : '',
    });
  } else {
    return res.redirect('/');
  }
};

module.exports.processLoginPage = (req, res, next) => {
  passport.authenticate('local', (err, User, info) => {
    //server err?
    if (err) {
      return next(err);
    }
    //is there a user login error?
    if (!User) {
      req.flash('loginMessage', 'Authentication Error');
      return res.redirect('/login');
    }
    req.login(User, (err) => {
      //server error?
      if (err) {
        return next(err);
      }
      return res.redirect('/projects');
    });
  })(req, res, next);
};

module.exports.displayRegisterPage = (req, res, next) => {
  //check if the user is not already logged in*/
  if (!req.user) {
    res.render('auth/register', {
      title: 'Register',
      messages: req.flash('registerMessage'),
      displayName: req.user ? req.user.displayName : '',
    });
  } else {
    return res.redirect('/');
  }
};

module.exports.processRegisterPage = (req, res, next) => {
  //instantiate a user object*/
  let newUser = new User({
    username: req.body.username,
    //password:req.body.password,
    email: req.body.email,
    displayName: req.body.displayName,
  });
  User.register(newUser, req.body.password, (err) => {
    if (err) {
      console.log('Error:inserting New User');
      if (err.name == 'UserExits Error') {
        req.flash(
          'registerMessage',
          'Registration Error: User Already Exists!',
        );
        console.log('Error: user Already Exists');
      }

      return res.render('auth/register', {
        title: 'Register',
        messages: req.flash('registerMessage'),
        displayName: req.user ? req.user.displayName : '',
      });
    } else {
      //if no error exists, then registration is successful
      //redirect the user and authenticate them
      return passport.authenticate('local')(req, res, () => {
        res.redirect('/bookList');
      });
    }
  });
};

module.exports.performLogout = (req, res, next) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
};
