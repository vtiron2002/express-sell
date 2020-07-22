const express = require('express')
const route = express.Router()
const Users = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { isAuth } = require('../utils')
require('dotenv').config()

const getToken = (user) => {
  return jwt.sign(
    {
      _id: user._id,
      name: user.name,
      email: user.email
    },
    process.env.JWT_SECRET,
    {
      expiresIn: '3h'
    }
  )
}

// USER REGISTER
route.post('/signup', async (req, res) => {
  const { name, email, password, confirmPassword } = req.body
  try {
    const userFound = await Users.findOne({ email })
    console.log(userFound)
    if (userFound) throw Error('User with that email already exists.')
    if (password !== confirmPassword) throw Error(`Passwords don't match.`)

    const hashedPass = bcrypt.hashSync(password, 8)
    const user = await Users.create({ name, email, password: hashedPass })

    res.send({
      ...user._doc,
      password: '',
      token: getToken(user)
    })
  } catch (e) {
    res.send({ err: e.message })
  }
})

// USER LOGIN
route.post('/login', async (req, res) => {
  const { email, password } = req.body

  try {
    const userFound = await Users.findOne({ email })
    if (!userFound) throw Error('Invalid email or password')

    const match = await bcrypt.compare(password, userFound.password)
    if (!match) throw Error('Invalid password')

    res.send({
      ...userFound._doc,
      password: '',
      token: getToken(userFound._doc)
    })
  } catch (e) {
    res.send({ err: e.message })
  }
})

route.get('/allusers', async (req, res) => {
  const all = await Users.find().select('isAdmin _id name email').populate('orders')
  res.send(all)
})

route.post('/edit/:id', isAuth, async (req, res) => {
  const { id } = req.params
  try {
    const user = await Users.findById(id)
    let foundEmail
    if (user.email !== req.body.email) {
      foundEmail = await Users.findOne({ email: req.body.email })
      if (foundEmail) throw Error('Email already in use.')
    }

    let samePassword
    if (req.body.password.length > 0) {
      samePassword = await bcrypt.compare(req.body.password, user.password)
      if (samePassword) throw Error('Cant use the same password.')
      samePassword = user.password
    }

    const hashedPass = samePassword || (await bcrypt.hash(req.body.password, 12))
    await Users.findByIdAndUpdate(id, { ...req.body, password: hashedPass })

    const newUser = await Users.findById(id)
    res.send({ newUser })
  } catch (e) {
    res.send({ err: e.message })
  }
})

module.exports = route
