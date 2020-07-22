const express = require('express')
const route = express.Router()
const fuzzysort = require('fuzzysort')

const Products = require('../models/productModel')

route.get('/', async (req, res) => {
  try {
    const data = await Products.find()
    res.send(data)
  } catch (e) {
    res.send({ msg: e.message })
  }
})

route.get('/:id', async (req, res) => {
  try {
    const data = await Products.findOne({ _id: req.params.id })
    res.send(data)
  } catch (e) {
    res.send({ msg: e.message })
  }
})

route.get('/search/:searchTerm', async (req, res) => {
  const { searchTerm } = req.params
  try {
    const data = await Products.find()
    const results = fuzzysort.go(searchTerm, data, { key: 'name' })
    res.send(results.map((r) => r.obj))
  } catch (e) {
    res.send(data)
  }
})

module.exports = route
