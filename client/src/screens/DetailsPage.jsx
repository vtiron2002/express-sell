import React, { useEffect, useState } from 'react'
import axios from 'axios'
import GoBackBtn from '../components/GoBackBtn'
import { useDispatch, useSelector } from 'react-redux'
import { SET_ITEM, ADD_TO_CART } from '../reducers/constants'
import { ItNumber } from '../utils'
import { useParams } from 'react-router-dom'

function DetailsPage(props) {
  const { id } = useParams()
  const { item, cart } = useSelector((state) => state)
  const dispatch = useDispatch()
  const [selectedQty, setSelectedQty] = useState(1)

  const getData = async () => {
    const { data } = await axios.get(`/api/products/${id}`)
    dispatch({ type: SET_ITEM, payload: data })
  }

  useEffect(() => {
    getData()
    return () => dispatch({ type: SET_ITEM, payload: {} })
  }, [])

  const addToCart = () => {
    const data = { ...item, selectedQty: Math.floor(selectedQty) }
    dispatch({ type: ADD_TO_CART, payload: data })
  }

  const outOfStock = item.qty === 0
  const found = cart.find((i) => i._id === item._id)
  const disabled = !cart.length ? false : found || outOfStock ? true : false

  return (
    <>
      <GoBackBtn history={props.history} />
      {item && (
        <div className='details'>
          <img src={item.image} alt='' className='details__img' />

          <div className='details__desc'>
            <span className='name'>{item.name}</span>
            <div className='price'>${item.price}</div>
            <p className='description'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam molestiae tenetur veritatis minima esse
              dolore aut odio commodi magni ad!
            </p>
          </div>

          <div className='details__addToCart'>
            <div className='price'>Price: ${item.price}</div>
            <div className='availability'>Availability: {item.qty !== 0 ? `${item.qty} in stock` : 'out of stock'}</div>
            <div className='quantity'>
              Quantity:{' '}
              <select value={selectedQty} onChange={(e) => setSelectedQty(e.target.value)}>
                {ItNumber(item.qty).map((n) => (
                  <option key={n}>{n}</option>
                ))}
              </select>
            </div>

            <button disabled={disabled} onClick={addToCart} className='addToCart'>
              Add to Cart
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailsPage
