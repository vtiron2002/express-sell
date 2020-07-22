import { SET_USER, VERIFY_TOKEN, CLEAR_USER } from "./constants"

const user = JSON.parse(localStorage.getItem('user')) || null

export const userReducer = (state = user, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem('user', JSON.stringify({...action.payload}))
      return {...action.payload}
    case CLEAR_USER:
      return null
    default:
      return state
  }
}
