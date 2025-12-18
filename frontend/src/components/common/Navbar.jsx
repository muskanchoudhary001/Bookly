import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">

      {/* Logo + Brand */}
      <Link to="/" className="flex items-center gap-2">
        <img
          src="/src/assets/logo.webp"
          alt="Bookly Logo"
          className="w-8 h-8 object-contain"
        />
        <span className="text-2xl font-bold text-purple-300">
          Bookly
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-lg font-bold text-purple-300">
        <Link to="/">Home</Link>
        <Link to="/books/create">Add Book</Link>
      </div>

    </nav>
  );
};

export default Navbar;
