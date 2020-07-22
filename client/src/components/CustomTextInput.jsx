import React from "react";
import { useField } from "formik";

const MyTextField = ({ label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <div className='form-group'>
      <label htmlFor={field.name}>{label}</label>
      <input id={field.name} className='form-control' {...field} {...props} />

      {meta.touched && meta.error ? (
        <div className='error'>{meta.error}</div>
      ) : null}
    </div>
  );
};

export default MyTextField;
