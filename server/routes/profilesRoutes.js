const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const Profile = mongoose.model('Profile')

module.exports = app => {
  app.get('/api/profiles', requireLogin, (req, res) => {
    Profile.find({})
    .then(profiles => {
      res.send(profiles)
    })
  })
}