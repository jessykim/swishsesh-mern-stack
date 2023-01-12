const mongoose = require('mongoose');

const { Schema } = mongoose

const userSchema = new Schema ({
  googleId: String,
  email: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

module.exports = mongoose.model('User', userSchema)