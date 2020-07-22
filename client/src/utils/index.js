import * as Yup from 'yup'
import axios from 'axios'
import { SET_USER } from '../reducers/constants'

export const ItNumber = (n) => new Array(n).fill(0).map((_, i) => i + 1)
export const addComma = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

export const formatNumber = (n) => {
  return addComma(n.toFixed(2))
}

export class Validation {
  static login = Yup.object({
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().required('Password is required')
  })

  static signUp = Yup.object({
    name: Yup.string().required('Name is required').min(3),
    email: Yup.string().email().required('Email is required'),
    password: Yup.string().min(8).required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match')
  })

  static profileChange = Yup.object({
    name: Yup.string().min(3).required('Name cant be empty'),
    email: Yup.string().email().required(),
    password: Yup.string().min(8)
  })

  static shipping = Yup.object({
    address: Yup.string().required('Must provide address'),
    city: Yup.string().required('Must provide city'),
    state: Yup.string().required('Must provide state'),
    zipCode: Yup.string().min(5, 'Must be at least 5 digits').required('Must provide zip code'),
    country: Yup.string().required('Must provide country')
  })
}

export const handleAuthSubmit = async ({ values, type, setError, dispatch, history, location }) => {
  const { data } = await axios.post(`/auth/${type}`, values)
  if (data.err) return setError(data.err)
  const { _id, isAdmin, name, email, token } = data

  setError('')
  dispatch({ type: SET_USER, payload: { _id, isAdmin, name, email } })
  localStorage.setItem('token', token)

  if (location.state) {
    history.push('/checkout/shipping')
  } else {
    history.push('/')
  }
}

export const truncate = (str, num) => {
  if (num <= 3) {
    return str.slice(0, num) + '...'
  } else {
    if (num >= str.length) {
      return str
    }
    num = num - 3
    return str.slice(0, num) + '...'
  }
}

export const TOKEN = `Bearer ${localStorage.token}`
