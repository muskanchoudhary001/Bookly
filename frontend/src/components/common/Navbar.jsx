import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4">
      <Link to="/" className="text-2xl font-bold text-purple-300">
        Bookly
      </Link>

      <div className="flex gap-6 text-lg">
        <Link to="/">Home</Link>
        <Link to="/books/create">Add Book</Link>
      </div>
    </nav>
  );
};

export default Navbar;
