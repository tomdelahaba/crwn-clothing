import React from "react";

import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='input-wrapper'>
    <input className='form-input' onChange={handleChange} {...otherProps} />
    {label ? (
      <label
        className={`${otherProps.value.length ? "shrink" : ""} form-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
