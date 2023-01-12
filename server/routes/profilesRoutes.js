const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin')

const Profile = mongoose.model('Profile')

module.exports = app => {
  app.get('/api/profiles', requireLogin, async (req, res) => {
    const profiles = await Profile.find({})
    res.send(profiles)
  })
}