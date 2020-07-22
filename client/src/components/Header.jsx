import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Header() {
  const { cart, user } = useSelector((state) => state)

  return (
    <div className='header'>
      <label htmlFor='menu'>
        <i className='fas fa-bars'></i>
      </label>
      <input type='checkbox' name='' id='menu' />

      <Link to='/' className='header__logo'>
        Express <strong>Sell</strong>
      </Link>

      <ul>
        <div className='header__buttons'>
          {!user ? (
            <>
              <Link to='/signup'>Sign Up</Link>
              <Link to='/login'>Login</Link>
            </>
          ) : (
            <>
              <Link to='/profile'>{user.name}</Link>
              <Link to='/orders'>My Orders</Link>
            </>
          )}

          <Link to='/cart'>
            {cart.length !== 0 && <span className='amount'>{cart.length}</span>}
            <i className='fas fa-shopping-cart'></i>
          </Link>
        </div>
      </ul>
    </div>
  )
}

export default Header
