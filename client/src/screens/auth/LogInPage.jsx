import React, { useState } from 'react'
import { Formik } from 'formik'
import { Validation, handleAuthSubmit } from '../../utils'
import CustomTextField from '../../components/CustomTextInput'
import { useDispatch } from 'react-redux'

function LogInPage({ history, location }) {
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  return (
    <div className='login'>
      <div className='login__container'>
        <h2 className='login__title'>Login</h2>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values, actions) =>
            handleAuthSubmit({
              values,
              type: 'login',
              setError,
              dispatch,
              history,
              location
            })
          }
          validationSchema={Validation.login}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <CustomTextField name='email' type='email' label='Email' />
              <CustomTextField
                name='password'
                type='password'
                label='Password'
              />
              {error && (
                <>
                  <div className='error'>{error}</div>
                  <br />
                </>
              )}

              <button className='mainBtn'>Log in</button>
            </form>
          )}
        </Formik>
        <hr />
        <p>New to Express Sell?</p>
        <button
          className='createAccountBtn'
          onClick={() => {
            if (location.state) {
              return history.push('/signup', { checkout: true })
            }
            history.push('/signup')
          }}
        >
          Create an account
        </button>
      </div>
    </div>
  )
}

export default LogInPage
