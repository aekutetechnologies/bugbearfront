import React from 'react';

function RememberMe({ checked, onChange }) {
  return (
    <label className="remember-me">
      <input type="checkbox" checked={checked} onChange={onChange} />
      Remember me
    </label>
  );
}

export default RememberMe;
