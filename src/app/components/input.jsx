import React from 'react';

function Input({ label, type, value, onChange }) {
  return (
    <div className="input-container">
      <label htmlFor={type}>{label}</label>
      <input
        type={type}
        id={type}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}

export default Input;
