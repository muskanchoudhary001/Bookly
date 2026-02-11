import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  // Show Home button only on landing page (same logic kept)
  const isLandingPage = location.pathname === "/";

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

        {/* Logo + Brand */}
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

        {/* 🔵 Right Side Action (Home button) */}
        {isLandingPage && (
          <div className="flex items-center gap-6">
            <Link
              to="/books"
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
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;
