const withAuth = (req, res, next) => {
  if (!req.session.loggedIn) {
    res.redirect('/loggedin');
  } else {
    next();
  }
};

module.exports = withAuth;