import React from "react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-300 bg-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6
                      flex flex-col sm:flex-row
                      items-center justify-between
                      text-sm text-gray-800 gap-2">

        <p>© 2026 Bookly. All rights reserved.</p>

        <div className="flex items-center gap-6">
          <span className="hover:text-gray-700 cursor-pointer">Privacy</span>
          <span className="hover:text-gray-700 cursor-pointer">Terms</span>
          <span className="hover:text-gray-700 cursor-pointer">Contact</span>
        </div>

      </div>
    </footer>
  );
};


export default Footer;
