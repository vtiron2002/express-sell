const express = require('express')
const route = express.Router()
const Orders = require('../models/orderModel')
const Users = require('../models/userModel')
const Products = require('../models/productModel')

route.post('/place', async (req, res) => {
  const order = await Orders.create(req.body.order)
  if (!order) return res.send({ status: 500 })

  const user = await Users.findById(req.body.order.user)
  if (!user) return res.send({ status: 500 })

  user.orders.push(order)
  await user.save()

  req.body.itemsPlaced.forEach(async (item) => {
    const newQty = item.qty - item.selectedQty
    const product = await Products.findById(item.id)
    if (!product) return res.send({ status: 500 })
    product.qty = newQty
    await product.save()
  })

  res.send({ status: 200, order: order._id })
})

route.get('/all', async (req, res) => {
  try {
    const orders = await Orders.find().populate('user').populate('products')
    res.send(orders)
  } catch (err) {
    res.send({ err: err.message })
  }
})

route.get('/:id', async (req, res) => {
  const { id } = req.params
  const order = await Orders.findById(id)
  res.send({ order })
})

route.get('/mine/:id', async (req, res) => {
  const { id } = req.params
  const { orders } = await Users.findById(id).select('orders').populate('orders')
  res.send(orders)
})

module.exports = route
