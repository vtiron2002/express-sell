const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Order = new Schema({
  user: { type: Schema.Types.ObjectId, ref: 'users' },
  shipping: { type: Object, required: true, default: {} },
  payment: { type: String, required: true, default: '' },
  total: { type: Number, required: true, default: '' },
  delivered: { type: Boolean, required: true, default: false },
  products: [{ type: Schema.Types.ObjectId, ref: 'products' }],
  placedOn: { type: Date, required: true, default: new Date() }
})

module.exports = mongoose.model('orders', Order)
