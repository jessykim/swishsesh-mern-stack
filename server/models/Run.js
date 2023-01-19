const mongoose = require('mongoose');

const { Schema } = mongoose

const runSchema = new Schema ({
  start: {
    type: Date,
    required: true
  },
  end: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  cost: {
    type: Number,
    required: true
  },
  spots: {
    type: Number,
    required: true
  },
  gameFormat: String,
  host: { type: Schema.Types.ObjectId, ref: 'profiles'},
  players: [{ type: Schema.Types.ObjectId, ref: 'profiles' }]
}, {
  timestamps: true
})

mongoose.model('runs', runSchema)