import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import axios from "axios";

const Loginpage = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3000/api/auth/login",
      {
        email,
        password,
      }
    );

    // Save token
    localStorage.setItem("token", res.data.token);

    // Save user
    localStorage.setItem("user", JSON.stringify(res.data.user));

    // 🔥 Navigate based on role
    if (res.data.user.role === "admin") {
      navigate("/books");      // Admin home
    } else {
      navigate("/user-home");  // Normal user home
    }

  } catch (err) {
    console.log(err);
    alert("Invalid credentials");
  }
};



  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      
      {/* Decorative Images */}
      <img
        src="./src/assets/LoginAssets/1.webp"
        alt="decor"
        className="absolute top-20 left-16 w-36 opacity-80 rotate-12 z-0"
      />
      <img
        src="./src/assets/LoginAssets/2.webp"
        alt="decor"
        className="absolute top-32 right-24 w-36 opacity-80 -rotate-6 z-0"
      />
      <img
        src="./src/assets/LoginAssets/3.webp"
        alt="decor"
        className="absolute bottom-28 left-24 w-36 opacity-80 rotate-6 z-0"
      />
      <img
        src="./src/assets/LoginAssets/4.webp"
        alt="decor"
        className="absolute bottom-20 right-20 w-36 opacity-80 -rotate-12 z-0"
      />

      {/* Login Card */}
      <div className="relative z-10 max-w-md w-full bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-gray-200 min-h-[400px]">
        
        <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r 
           from-blue-400 to-blue-700
           bg-clip-text text-transparent">
          Login
        </h2>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          {/* Email */}
          <input
            type="email"
            value={email}
            placeholder="Enter Your Email"
            className="p-3 border border-gray-300 rounded-xl 
            focus:outline-none focus:ring-2 focus:ring-blue-400 
            shadow-inner bg-gray-50 text-gray-800 
            placeholder:text-gray-500"
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Field with Eye Icon */}
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Your Password"
              value={password}
              className="w-full p-3 pr-12 border border-gray-300 rounded-xl 
              focus:outline-none focus:ring-2 focus:ring-blue-400 
              shadow-inner bg-gray-50 text-gray-800 
              placeholder:text-gray-500"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 
              text-gray-500 hover:text-blue-600 transition"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={22} />
              ) : (
                <AiOutlineEye size={22} />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 px-6 py-3 rounded-3xl 
            bg-gradient-to-r from-blue-400 to-blue-700 
            text-white font-semibold text-lg 
            shadow-md hover:from-blue-500 hover:to-blue-800 
            hover:scale-105 transition-all duration-300"
          >
            Login
          </button>

        </form>

        {/* Register Link */}
        <p className="mt-6 text-center text-gray-800 text-lg">
          Don’t have an account?{" "}
          <span
            className="bg-gradient-to-r from-blue-400 to-blue-700 
            bg-clip-text text-transparent underline 
            decoration-blue-500 decoration-1 underline-offset-2 
            cursor-pointer"
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
