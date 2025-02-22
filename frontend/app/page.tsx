import Link from 'next/link';

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to MindCare!</h1>
      <div className="space-x-4">
        <Link href="/auth/login" className="text-blue-500 text-xl">
          Login
        </Link>
        <Link href="/auth/signup" className="text-blue-500 text-xl">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Home;
