import React from 'react';
import Link from 'next/link';

function HackerSignup() {

  return (
    <div className="signup-options">
      <h2>Choose your account type:</h2>
      <Link href='/signup/hacker/onemember'>
      <button>I am individual</button>
      </Link>
      <Link href='/signup/company/companymember'>
      <button>I am a company</button>
      </Link>
    </div>
  );
}

export default HackerSignup;
