import { useState } from "react";

function Input({ value, handleChange, placeholder }) {
  const onChange = (event) => handleChange(event.target.value);
  return (
    <input
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
