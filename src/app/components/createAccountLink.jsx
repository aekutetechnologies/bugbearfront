import React from 'react';
import Link from 'next/link';

function CreateAccountLink() {
  return (
    <p className="create-account-link">
      Don't have an account? <Link href="/signup">Sign up here.</Link>
    </p>
  );
}

export default CreateAccountLink;
