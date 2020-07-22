import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { TOKEN } from '../../utils'

function OrderPlacedPage() {
  const { orderid } = useParams()
  const [order, setOrder] = useState(null)

  const getOrder = async () => {
    const { data } = await axios.get(`/api/orders/${orderid}`, { headers: { Authorization: TOKEN } })
    setOrder(data.order)
  }
  useEffect(() => {
    getOrder()
  }, [])

  if (!order) return null
  return (
    <div className='orderplaced'>
      <h1>Thank you for your order.</h1>
      <h3>Your order has been placed!</h3>
      <p>Order ID: {order._id}</p>
      <br />
      View your orders <Link to='/orders'>here</Link>
    </div>
  )
}

export default OrderPlacedPage
