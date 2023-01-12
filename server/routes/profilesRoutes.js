const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.get('/api/players', requireLogin, (req, res) => {
    res.redirect('/')
  })
}