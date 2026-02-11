import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLandingPage = location.pathname === "/";

  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  const [showMenu, setShowMenu] = useState(false);
  const dropdownRef = useRef();

  // ✅ click outside close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    if (!token) {
      navigate("/login");
    } else {
      setShowMenu(!showMenu); // open dropdown instead of navigating
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav
      className="
      fixed top-0 left-0 w-full z-50
      bg-white/80 backdrop-blur-lg
      border-b border-gray-200/60
      shadow-[0_4px_20px_rgba(0,0,0,0.06)]
      transition-all duration-300
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-1 group">
          <img
            src="/src/assets/Logo1.webp"
            alt="Bookly Logo"
            className="w-14 h-14 object-contain transition-transform duration-300 group-hover:scale-105"
          />
          <span className="
            text-4xl font-bold
            bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
            bg-clip-text text-transparent
          ">
            Bookly
          </span>
        </Link>

        <div className="flex items-center gap-6">

          {isLandingPage && (
            <Link
              to="/guest-home"
              className="
              px-6 py-2.5 rounded-full text-white font-medium
              bg-gradient-to-r from-blue-400 via-blue-600 to-blue-800
              shadow-md shadow-blue-500/20
              hover:scale-105 hover:shadow-lg hover:shadow-blue-600/30
              active:scale-95
              transition-all duration-300
              "
            >
              Home
            </Link>
          )}

          {/* PROFILE BUTTON — UI SAME */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={handleProfileClick}
              className="
              flex items-center gap-2
              px-4 py-2 rounded-full
              bg-gray-100 hover:bg-blue-100
              transition-all duration-300
              "
            >
              <FaUserCircle className="text-xl text-blue-700" />
              <span className="font-medium text-gray-700">
                {token ? user?.name : "Login"}
              </span>
            </button>

            {/* ✅ DROPDOWN (new functionality only) */}
            {token && showMenu && (
  <div className="
    absolute right-0 mt-3 w-52
    bg-white rounded-2xl
    shadow-[0_10px_30px_rgba(0,0,0,0.12)]
    border border-gray-100
    overflow-hidden
    animate-fadeIn
  ">

    {/* header */}
    <div className="px-4 py-3 border-b bg-gray-50">
      <p className="text-sm text-gray-500">Signed in as</p>
      <p className="font-semibold text-gray-800">{user?.name}</p>
    </div>

    {/* user menu */}
    {user?.role === "user" && (
      <button
        onClick={() => navigate("/user-home")}
        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition"
      >
        My Profile
      </button>
    )}

    {/* admin menu */}
    {user?.role === "admin" && (
      <button
        onClick={() => navigate("/books")}
        className="w-full text-left px-4 py-3 hover:bg-blue-50 transition"
      >
        Manage Books
      </button>
    )}

    <div className="border-t" />

    {/* logout */}
    <button
      onClick={handleLogout}
      className="w-full text-left px-4 py-3 text-red-500 hover:bg-red-50 transition"
    >
      Logout
    </button>

  </div>
)}

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
