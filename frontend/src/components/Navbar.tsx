import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full bg-white shadow-md h-24 flex items-center px-8">

      {/* Website Name */}
      <div className="text-3xl font-bold text-black tracking-wide">
        Threads & Pixels
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-8 ml-auto">
        <a
          href="/"
          className="text-lg font-medium text-black hover:text-blue-500 transition"
        >
          Home
        </a>

        <a
          href="/products"
          className="text-lg font-medium text-black hover:text-blue-500 transition"
        >
          Products
        </a>

        <FaShoppingCart
          size={30}
          className="cursor-pointer text-black hover:text-blue-500 transition"
        />
      </div>

    </nav>
  );
};

export default Navbar;
