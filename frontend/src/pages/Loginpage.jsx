import { useNavigate } from "react-router-dom";

const Loginpage = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // Authenticate user here (API or dummy check)
    navigate("/home");
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800">
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

      {/* Login Card */}
      <div className="relative z-10 max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200 min-h-[400px] ">
        <h2 className="text-3xl font-bold mb-6 text-center text-pink-500">Login</h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner bg-gray-50 placeholder:text-gray-500"
            required
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-inner bg-gray-50 placeholder:text-gray-500"
            required
          />
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded-4xl bg-gradient-to-r from-pink-500 to-pink-700 text-white font-semibold text-lg shadow-lg hover:scale-105 transition-transform duration-300"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-gray-200 ">
          Don’t have an account?{" "}
          <span
            className="bg-gradient-to-r from-pink-500 to-pink-700 text-white px-4 py-2 rounded-4xl cursor-pointer inline-block hover:scale-105 transition-transform duration-300 "
            onClick={() => navigate("/register")}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
};

export default Loginpage;
