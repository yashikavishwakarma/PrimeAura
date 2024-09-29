import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/horizontal-logo-less.png';

const Header = () => {
  return (
    <header className="py-4 mb-8 border-b">
      <div className="container mx-auto flex justify-between items-center px-2 sm:px-4">
        {/* Logo */}
        <Link to="/">
          <img className="w-28 sm:w-32 md:w-40" src={Logo} alt="Logo" />
        </Link>
        {/* Links */}
        <div className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <Link className="text-sm sm:text-base hover:text-blue-900 transition" to="">
            Log In
          </Link>
          <Link
            className="text-sm sm:text-base bg-blue-700 hover:bg-blue-800 text-white px-2 sm:px-3 py-1 sm:py-2 rounded-lg transition"
            to=""
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;


