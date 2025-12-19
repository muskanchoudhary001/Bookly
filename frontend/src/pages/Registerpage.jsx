import { useNavigate } from "react-router-dom";

const Registerpage = () => {
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    // Register user (API call or local logic)
    navigate("/login"); // Redirect to login after registration
  };

  return (
    <div className="max-w-md mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form onSubmit={handleRegister} className="flex flex-col gap-4">
        <input type="text" placeholder="Name" className="p-2 border" />
        <input type="email" placeholder="Email" className="p-2 border" />
        <input type="password" placeholder="Password" className="p-2 border" />
        <button className="p-2 bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-white rounded">Register</button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <span className="bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent cursor-pointer" onClick={() => navigate("/login")}>
          Login
        </span>
      </p>
    </div>
  );
};

export default Registerpage;
