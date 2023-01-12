const requireLogin = require('../middlewares/requireLogin')

module.exports = app => {
  app.post('/api/runs', requireLogin, (req, res) => {
    
  })
}