import { SET_SHIPPING_ADDRESS, SET_PAYMENT_METHOD } from './constants'

const shipping = JSON.parse(localStorage.getItem('shipping')) || {
  address: '',
  city: '',
  zipCode: '',
  country: '',
  state: ''
}

export const checkoutReducer = (state = { shipping }, action) => {
  switch (action.type) {
    case SET_SHIPPING_ADDRESS:
      localStorage.setItem('shipping', JSON.stringify({ ...action.payload }))
      return { ...state, shipping: action.payload }
    case SET_PAYMENT_METHOD:
      return { ...state, ...action.payload }
    default:
      return state
  }
}
