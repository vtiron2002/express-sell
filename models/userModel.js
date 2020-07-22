const mongoose = require('mongoose')
const Schema = mongoose.Schema

const User = new Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    index: true,
    dropDups: true
  },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, required: true, default: false },
  orders: [{ type: Schema.Types.ObjectId, ref: 'orders' }]
})

module.exports = mongoose.model('users', User)
