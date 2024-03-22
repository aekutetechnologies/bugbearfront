// components/Input.tsx
import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ label, type, value, onChange }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <input type={type} id={label} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
