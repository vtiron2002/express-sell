import React from "react";
import { Formik } from "formik";
import { Validation } from "../../utils";
import CustomTextField from "../../components/CustomTextInput";
import { useSelector, useDispatch } from "react-redux";
import { SET_SHIPPING_ADDRESS } from "../../reducers/constants";
import GoBackBtn from "../../components/GoBackBtn";

function ShippingPage({ history }) {
  const dispatch = useDispatch();
  const { checkout } = useSelector(state => state);

  return (
    <>
      <GoBackBtn history={history} />
      <div className='shipping'>
        <div className='shipping__container'>
          <h2 className='shipping__title'>Shipping</h2>
          <Formik
            initialValues={checkout.shipping}
            onSubmit={(values, actions) => {
              dispatch({ type: SET_SHIPPING_ADDRESS, payload: values });
              history.push("/checkout/payment");
            }}
            validationSchema={Validation.shipping}
          >
            {props => (
              <form onSubmit={props.handleSubmit}>
                <CustomTextField name='address' type='text' label='Address' />
                <CustomTextField name='city' type='text' label='City' />
                <CustomTextField name='state' type='text' label='State' />
                <CustomTextField name='zipCode' type='text' label='Zip code' />
                <CustomTextField name='country' type='text' label='Country' />

                <button className='nextBtn'>Next</button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default ShippingPage;
