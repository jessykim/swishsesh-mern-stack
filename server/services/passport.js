const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy
const mongoose = require('mongoose')
const keys = require('../config/keys')

const Profile = mongoose.model('profiles')
const User = mongoose.model('users')

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  User.findById(id)
  .populate('profile', 'name avatar')
  .then(user => {
    done(null, user)
  })
  .catch(err => {
    done(err, null)
  })
})

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback',
      proxy: true
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ googleId: profile.id })
  
      if (existingUser) {
        return done(null, existingUser)
      }
      
      const newProfile = new Profile({
        name: profile.displayName,
        avatar: profile.photos[0].value
      })
      const newUser = new User({ 
        email: profile.emails[0].value,
        googleId: profile.id ,
        profile: newProfile._id
      })
      newProfile.save()
      .then(() => {
        newUser.save()
        .then(() => {
          return(null, newUser)
        })
      })
    }
  )
)