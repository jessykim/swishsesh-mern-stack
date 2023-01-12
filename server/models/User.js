const mongoose = require('mongoose');

const { Schema } = mongoose

const userSchema = new Schema ({
  googleId: String,
  email: String,
  profile: { type: Schema.Types.ObjectId, ref: 'Profile' },
}, {
  timestamps: true,
})

mongoose.model('users', userSchema)