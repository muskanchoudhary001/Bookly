import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">

      {/* Logo + Brand */}
      <Link to="/" className="flex items-center">
        <img
          src="/src/assets/Logo1.webp"
          alt="Bookly Logo"
          className="w-14 h-12 object-contain"
        />
        <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent">
          Bookly
        </span>
      </Link>

      {/* Navigation Links */}
      <div className="flex gap-6 text-3xl mr-6 font-bold text-blue-600">
        <Link to="/landingpage">Home</Link>
        {/* <Link to="/books/create">Add Book</Link> */}
      </div>

    </nav>
  );
};

export default Navbar;
