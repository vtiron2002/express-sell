import React, { useState } from "react";
import { Formik, useField } from "formik";
import { useDispatch } from "react-redux";
import { SET_PAYMENT_METHOD } from "../../reducers/constants";
import GoBackBtn from "../../components/GoBackBtn";

const MyRadio = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <div className='radio-group'>
      <input
        id={props.value}
        className='form-control'
        type='radio'
        {...field}
        {...props}
      />

      <label htmlFor={props.value}>{label}</label>
    </div>
  );
};

function PaymentPage({ history }) {
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  return (
    <>
      <GoBackBtn history={history} />
      <div className='payment'>
        <div className='payment__container'>
          <h2 className='payment__title'>Payment</h2>

          <Formik
            initialValues={{
              payment: ""
            }}
            onSubmit={(values, actions) => {
              if (!values.payment) return setError(true)
              dispatch({ type: SET_PAYMENT_METHOD, payload: values });
              history.push("/checkout/placeorder");
            }}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <MyRadio name='payment' label='PayPal' value='PayPal' />
                <MyRadio
                  name='payment'
                  label='Credit Card'
                  value='Credit Card'
                />
                <MyRadio name='payment' label='Debit Card' value='Debit Card' />

                <button className='nextBtn'>Next</button>
              </form>
            )}
          </Formik>

          <div className='error'>{error && "Select a payment method"}</div>
        </div>
      </div>
    </>
  );
}

export default PaymentPage;
