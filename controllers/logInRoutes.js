const router = require('express').Router();


//GET to render login page
router.get('/login', (req, res) => {
  try {
    res.render('login')
  } catch (err) {
    res.status(500).json(err);
  }
})

module.exports = router;