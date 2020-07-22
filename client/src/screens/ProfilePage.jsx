import React, { useState } from 'react'
import { Formik } from 'formik'
import CustomTextField from '../components/CustomTextInput'
import { useSelector, useDispatch } from 'react-redux'
import { Validation, TOKEN } from '../utils'
import axios from 'axios'
import { SET_USER, CLEAR_USER } from '../reducers/constants'

function ProfilePage({ history }) {
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)
  const userDetails = {
    name: user.name,
    email: user.email,
    password: ''
  }
  return (
    <div className='profile'>
      <h2>My profile</h2>
      <br />
      <hr />
      <Formik
        initialValues={userDetails}
        validationSchema={Validation.profileChange}
        onSubmit={async (values) => {
          const { data } = await axios.post(`/auth/edit/${user._id}`, values, { headers: { Authorization: TOKEN } })
          if (data.err) return setError(data.err)
          setError('')
          dispatch({ type: SET_USER, payload: data.newUser })
          setMessage('Profile Updated')
          setTimeout(() => {
            setMessage('')
          }, 3000)
        }}
      >
        {(props) => (
          <form onSubmit={props.handleSubmit}>
            <CustomTextField name='name' type='text' label='Name' />
            <CustomTextField name='email' type='email' label='Email' />
            <CustomTextField name='password' type='password' label='Password' />
            {error && <div className='error'>{error}</div>}
            {message && (
              <div style={{ color: 'green' }} className='message'>
                {message}
              </div>
            )}
            <button>Save Changes</button>
          </form>
        )}
      </Formik>
      <button
        onClick={() => {
          delete localStorage.user
          delete localStorage.token
          history.push('/')
          dispatch({ type: CLEAR_USER })
        }}
        className='signOutBtn'
      >
        Sign out
      </button>
    </div>
  )
}

export default ProfilePage
