module.exports.protectedRoute = (callbackFn) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.redirect('/login');
    }
    callbackFn(req, res, next);
  };
};
