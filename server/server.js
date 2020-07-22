const express = require('express')
const app = express()
const port = 5000
const mongoose = require('mongoose')
const morgan = require('morgan')
const ProductRoutes = require('./routes/productsRoutes')
const AuthRoutes = require('./routes/authRoutes')
const OrdersRoutes = require('./routes/ordersRoutes')
const { isAuth } = require('./utils')
const path = require('path')
require('dotenv').config()

app.use(express.json())
app.use(morgan('tiny'))
// Routes
app.use('/auth/', AuthRoutes)
app.use('/api/products', ProductRoutes)
app.use('/api/orders', isAuth, OrdersRoutes)

app.use(express.static('../client/build'))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
})

app.listen(port, () => {
  console.log(`Server started running on port ${port}`)
  mongoose.connect(process.env.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, () =>
    console.log('Database connected')
  )
})
