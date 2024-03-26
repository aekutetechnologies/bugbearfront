

import React from 'react';
import Link from 'next/link';



function SignupOptions() {

  return (
    <div className="signup-options">
      <h2>Choose your account type:</h2>
      <link href='/signup/hacker'><button>I am a Hacker</button></link>
      <link href='/signup/company'><button>I am a company</button></link>
    </div>
  );
}

export default SignupOptions;
