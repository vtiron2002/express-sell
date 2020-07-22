import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ItNumber, formatNumber } from '../utils'
import { REMOVE_FROM_CART, SET_CART, CLEAR_CART } from '../reducers/constants'
import GoBackBtn from '../components/GoBackBtn'
import { Link } from 'react-router-dom'

function CartPage(props) {
  const { cart, user } = useSelector((state) => state)
  const dispatch = useDispatch()

  const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload: id })
  }
  const subtotal = cart.reduce((total, item) => total + item.price * item.selectedQty, 0)

  const cartEmpty = cart.length === 0

  return (
    <div className='cart'>
      <GoBackBtn history={props.history} />
      <h2>Shopping Cart ({cart.length})</h2>
      {!cartEmpty && (
        <div className='cart__grid'>
          <div className='cart__items'>
            <div className='price-title'>Price</div>
            {cart.map((i) => (
              <CartItem key={i._id} i={i} removeFromCart={removeFromCart} cart={cart} />
            ))}
          </div>
          <div className='cart__subtotal'>
            <h3>
              Subtotal ({cart.length} item{cart.length > 1 && 's'}): ${formatNumber(subtotal)}
            </h3>
            <button onClick={() => dispatch({ type: CLEAR_CART })} className='clearCart'>
              &times; Clear Cart
            </button>
            <button
              onClick={() =>
                props.history.push(`/${user ? 'checkout/shipping' : 'login'}`, {
                  checkout: true
                })
              }
              className='proceedToCheckout'
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

const CartItem = ({ i, removeFromCart, cart }) => {
  const [selectedQty, setSelectedQty] = useState(i.selectedQty)
  const dispatch = useDispatch()

  const changeSelectedQty = (e) => {
    const amount = Math.floor(e.target.value)
    setSelectedQty(amount)
    const newCart = cart.map((item) => (item._id === i._id ? { ...item, selectedQty: amount } : { ...item }))
    dispatch({ type: SET_CART, payload: newCart })
  }

  return (
    <div className='cart__item'>
      <img src={i.image} alt='' className='cart__item__img' />
      <div className='middle'>
        <Link to={`/details/${i._id}`} className='name'>
          {i.name}
        </Link>
        <div className='qty'>
          Qty:{' '}
          <select onChange={changeSelectedQty} value={selectedQty}>
            {ItNumber(i.qty).map((n) => (
              <option key={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>
      <div className='price'>
        ${i.price}
        <button onClick={() => removeFromCart(i._id)}>Remove</button>
      </div>
    </div>
  )
}

export default CartPage
