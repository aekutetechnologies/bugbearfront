// pages/login.tsx

"use client";
import React, { useState } from 'react';
// import Logo from './Logo';
import Input from '../../components/input';
import RememberMe from '../../components/rememberMe';
import ForgotPassword from '../../components/forgotPassword';
import SignInButton from '../../components/signinButton';
import CreateAccountLink from '../../components/createAccountLink';
import '../../components/loginForm.css';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  // Handle form submission (e.g., send data to server)
 
  return (
    <div className='centerForm'>
    <form className='gapInForm'>
      {/* <Logo /> */}
      <Input label="Email address" type="email" value={email} onChange={setEmail} />
      <Input label="Password" type="password" value={password} onChange={setPassword} />
      <RememberMe checked={rememberMe} onChange={setRememberMe} />
      <ForgotPassword />
      <SignInButton type="submit">Sign in</SignInButton>
      <CreateAccountLink />
      <div className='orLine'>
        <div className='line'></div>
        <p>or</p>
        <div className='line'></div>
      </div>
      <SignInButton type="submit">Sign in with Google</SignInButton>
      <SignInButton type="submit">Sign in with SSO</SignInButton>

    </form>
    </div>
  );
};

export default LoginPage;
