const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Product = new Schema({
  name: { type: String, required: true },
  price: {
    type: Number,
    required: true
  },
  image: { type: String, required: true },
  qty: { type: Number, required: true, default: 0 }
})

module.exports = mongoose.model('products', Product)
