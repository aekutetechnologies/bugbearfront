// components/RegistrationForm.tsx
import React, { useState } from 'react';
import Input from './Input';

const RegistrationForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement your registration logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input label="Username" type="text" value={username} onChange={handleUsernameChange} />
      <Input label="Password" type="password" value={password} onChange={handlePasswordChange} />
      <Input label="Email" type="email" value={email} onChange={handleEmailChange} />
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
