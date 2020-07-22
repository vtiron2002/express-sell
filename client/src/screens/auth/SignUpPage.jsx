import React, { useState } from 'react'
import { Formik } from 'formik'
import { Validation, handleAuthSubmit } from '../../utils'
import CustomTextField from '../../components/CustomTextInput'
import { useDispatch } from 'react-redux'

function SignUpPage({ location, history }) {
  const [error, setError] = useState('')
  const dispatch = useDispatch()

  return (
    <div className='signup'>
      <div className='signup__container'>
        <h2 className='signup__title'>Create a new account</h2>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
          }}
          onSubmit={(values) => {
            handleAuthSubmit({
              values,
              type: 'signup',
              setError,
              dispatch,
              history,
              location
            })
          }}
          validationSchema={Validation.signUp}
        >
          {(props) => (
            <form onSubmit={props.handleSubmit}>
              <CustomTextField name='name' type='text' label='Name' />
              <CustomTextField name='email' type='email' label='Email' />
              <CustomTextField
                name='password'
                type='password'
                label='Password'
              />
              <CustomTextField
                name='confirmPassword'
                type='password'
                label='Confirm password'
              />
              {error && (
                <>
                  <div className='error'>{error}</div>
                  <br />
                </>
              )}

              <button className='loginBtn'>Create an account</button>
            </form>
          )}
        </Formik>
        <hr />
        <p>Already have an account?</p>
        <button
          className='loginBtn'
          onClick={() => {
            if (location.state) {
              return history.push('/login', { checkout: true })
            }
            history.push('/login')
          }}
        >
          Log in
        </button>
      </div>
    </div>
  )
}

export default SignUpPage
