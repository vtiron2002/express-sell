import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { formatNumber, TOKEN } from '../../utils'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { CLEAR_CART } from '../../reducers/constants'

function PlaceOrderPage({ history }) {
  const [error, setError] = useState('')
  const dispatch = useDispatch()
  const { cart, checkout, user } = useSelector((state) => state)
  const { address, city, zipCode, country, state } = checkout.shipping

  const itemsPrice = cart.reduce((a, b) => a + b.price * b.selectedQty, 0)
  const shippingPrice = itemsPrice > 100 ? 0 : 10
  const taxPrice = 0.15 * itemsPrice
  const totalPrice = itemsPrice + shippingPrice + taxPrice


  const placeOrder = async () => {
    const order = {
      user: user._id,
      shipping: checkout.shipping,
      payment: checkout.payment,
      total: parseFloat(totalPrice.toFixed(2)),
      products: cart.map((c) => c._id)
    }
    const { data } = await axios.post(
      '/api/orders/place',
      {
        order,
        itemsPlaced: cart.map((c) => ({ id: c._id, selectedQty: c.selectedQty, qty: c.qty }))
      },
      { headers: { Authorization: TOKEN} }
    )
    if (data.status === 200) {
      history.push(`/checkout/orderplaced/${data.order}`)
      dispatch({ type: CLEAR_CART })
    } else {
      setError(`Order couldn't be placed.`)
    }
  }

  return (
    <div className='placeOrder'>
      <div className='placeOrder__info'>
        <div className='shipping'>
          <h4 className='title'>Shipping</h4>
          <ul>
            <li>{user.name}</li>
            <li>{address}</li>
            <li>
              {city}, {state} {zipCode}
            </li>
            <li>{country}</li>
          </ul>
        </div>

        <div className='payment'>
          <h4 className='title'>Payment</h4>
          <p>Payment method: {checkout.payment}</p>
        </div>

        <div className='orders'>
          <h4 className='title'>
            <span>Your orders ({cart.length})</span>
            <span>Price</span>
          </h4>

          <div className='ordersGrid'>
            {cart.map((o) => (
              <React.Fragment key={o._id}>
                <hr />
                <div className='order'>
                  <img src={o.image} alt='' className='order__img' />
                  <div className='order__info'>
                    <h5 className='name'>{o.name}</h5>
                    <p>Qty: {o.selectedQty}</p>
                  </div>
                  <div className='price'>${o.price}</div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
      <div className='placeOrder__summary'>
        {error && <div className='error'>{error}</div>}

        <button onClick={placeOrder} className='placeOrderBtn'>
          Place order
        </button>
        <h4 className='title'>Order Summary</h4>
        <ul>
          <li>
            <span>Items</span>
            <span>${formatNumber(itemsPrice)}</span>
          </li>
          <li>
            <span>Shipping</span>
            <span>${formatNumber(shippingPrice)}</span>
          </li>
          <li>
            <span>Tax</span>
            <span>${formatNumber(taxPrice)}</span>
          </li>
          <li>
            <span>Order Total</span>
            <span>${formatNumber(totalPrice)}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default PlaceOrderPage
