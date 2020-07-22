import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { SET_ITEMS } from '../reducers/constants'

function HomePage(props) {
  const { items, cart } = useSelector((state) => state)
  const searchRef = useRef()
  const dispatch = useDispatch()


  const getItems = async () => {
    const { data } = await axios.get('/api/products')
    dispatch({ type: SET_ITEMS, payload: data })
  }

  useEffect(() => {
    getItems()
  }, [])

  const handleSortChange = (e) => {
    const { value } = e.target
    const filtered = [...items].sort((a, b) =>
      value === 'lowHigh' ? a.price > b.price : a.price < b.price
    )
    dispatch({ type: SET_ITEMS, payload: filtered })
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    const searchValue = searchRef.current.value
    if (!searchValue) return getItems()
    const { data } = await axios.get(`/api/products/search/${searchValue}`)
    dispatch({ type: SET_ITEMS, payload: data })
  }

  return (
    <div className='home'>
      <div className='top'>
        <div className='top__sort'>
          <select onChange={handleSortChange}>
            <option value=''>Sort by</option>
            <option value='lowHigh'>Low to High</option>
            <option value='highLow'>High to Low</option>
          </select>
        </div>
        <form onSubmit={handleSearch} className='top__searchbar'>
          <input
            type='text'
            placeholder='search..'
            ref={searchRef}
          />

          <button>
            <i className='fas fa-search'></i>
          </button>
        </form>
      </div>

      <div className='home__items'>
        {items &&
          items.map((i) => (
            <Item key={i._id} i={i} props={props} cart={cart} />
          ))}
      </div>
    </div>
  )
}

const Item = ({ i, props, cart }) => {
  const found = cart.find(({ _id }) => _id === i._id)

  return (
    <div
      onClick={() => props.history.push(`/details/${i._id}`)}
      className='item'
    >
      <img src={i.image} alt='' />
      <div className='item__body'>
        <div className='name'>{i.name}</div>
        <div className='bottom'>
          <div className='price'>${i.price}</div>
          {found && <div className='inCart'>In cart</div>}
        </div>
      </div>
    </div>
  )
}

export default HomePage
