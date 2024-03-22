// components/LoginForm.tsx
import React, { useState } from 'react';
import Input from './Input';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('http://127.0.0.1:8000/api/user/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (response.ok) {
        const data = await response.json();
        const token = data.token; // Assuming the token is returned in the response
        // Store the token in local storage
        localStorage.setItem('token', token);
        console.log('Logged in successfully');
        // Redirect to another page or perform any other action
      } else {
        // Handle errors
        console.error('Failed to login');
        alert('Failed to login');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Email" type="text" value={email} onChange={handleUsernameChange} />
      <Input label="Password" type="password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
