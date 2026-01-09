import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Register user here
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">

      {/* Decorative Images */}
      <img
        src="./src/assets/LoginAssets/1.webp"
        alt="decor"
        className="absolute top-20 left-16 w-36 opacity-30 rotate-12 z-0"
      />
      <img
        src="./src/assets/LoginAssets/2.webp"
        alt="decor"
        className="absolute top-32 right-24 w-36 opacity-25 -rotate-6 z-0"
      />
      <img
        src="./src/assets/LoginAssets/3.webp"
        alt="decor"
        className="absolute bottom-28 left-24 w-36 opacity-20 rotate-6 z-0"
      />
      <img
        src="./src/assets/LoginAssets/4.webp"
        alt="decor"
        className="absolute bottom-20 right-20 w-36 opacity-30 -rotate-12 z-0"
      />

      {/* Register Card */}
      <div className="relative z-10 max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200 min-h-[450px]">

        {/* Heading */}
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
          Register
        </h2>

        <form onSubmit={handleRegister} className="flex flex-col gap-4">

          <input
            type="text"
            placeholder="Enter Your Name"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner bg-gray-50 text-gray-800 placeholder:text-gray-500"
            required
          />

          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner bg-gray-50 text-gray-800 placeholder:text-gray-500"
            required
          />

          <input
            type="password"
            placeholder="Create Password"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner bg-gray-50 text-gray-800 placeholder:text-gray-500"
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="p-3 border border-gray-300 text-gray-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-inner bg-gray-50 placeholder:text-gray-500"
            required
          />

          {/* Button */}
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded-4xl bg-gradient-to-r from-blue-400 to-blue-700 text-white font-semibold text-lg shadow-lg hover:from-blue-500 hover:to-blue-800 hover:scale-105 transition-all duration-300"
          >
            Register
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-gray-200 text-xl">
          Already have an account?
          <span
            className="ml-1 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent underline decoration-blue-500 underline-offset-2 cursor-pointer inline-block"
            onClick={() => navigate("/login")}
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Registerpage;
