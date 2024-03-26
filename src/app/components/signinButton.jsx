import React from 'react';

function SignInButton({ type, children }) {
  return (
    <button type={type} className="sign-in-button">
      {children}
    </button>
  );
}

export default SignInButton;
