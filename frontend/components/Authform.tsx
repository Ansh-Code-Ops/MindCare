export default function AuthForm({ type, onSubmit }) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-6">
            {type === "login" ? "Login" : "Sign Up"}
          </h2>
          <form onSubmit={onSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              {type === "login" ? "Login" : "Sign Up"}
            </button>
          </form>
          <p className="text-center mt-4">
            {type === "login" ? "Don't have an account?" : "Already have an account?"} 
            <a href={type === "login" ? "/auth/signup" : "/auth/login"} className="text-blue-500 hover:underline">
              {type === "login" ? "Sign Up" : "Login"}
            </a>
          </p>
        </div>
      </div>
    );
  }
  