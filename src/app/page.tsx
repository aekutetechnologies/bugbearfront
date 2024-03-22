// src/app/pages/index.tsx
import Link from 'next/link';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to My Next.js Project</h1>
      <p>This is the homepage of my Next.js project.</p>
      <p>
        Go to{' '}
        <Link href="/login">Login</Link>{' '}
        or{' '}
        <Link href="/register">Register</Link>
      </p>
    </div>
  );
};

export default HomePage;
