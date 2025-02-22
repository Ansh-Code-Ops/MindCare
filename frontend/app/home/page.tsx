import Link from "next/link";

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 p-6">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center w-3/4 max-w-lg">
        <h1 className="text-3xl font-bold text-blue-600">Welcome to MindCare</h1>
        <p className="mt-4 text-gray-600">
          Your mental health companion, providing resources, AI support, and a supportive community.
        </p>
        
        
        <Link href="/about" className="mt-4 text-blue-500 text-xl underline">
          Learn More About Us
        </Link>
        <Link href="/clinic-locator" className="text-blue-500 text-xl mt-2">Find Clinics</Link>

      </div>
    </div>
  );
}
