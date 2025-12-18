import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useCart } from "../context/useCart";

const Navbar: React.FC = () => {
  const { cart } = useCart();

  const cartCount = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="w-full bg-white shadow-md h-24 flex items-center px-8">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-bold text-black tracking-wide"
      >
        Threads & Pixels
      </Link>

      {/* Links */}
      <div className="flex items-center gap-8 ml-auto">
        <Link
          to="/"
          className="text-lg font-medium text-black hover:text-blue-500 transition"
        >
          Home
        </Link>

        <Link
          to="/products"
          className="text-lg font-medium text-black hover:text-blue-500 transition"
        >
          Products
        </Link>

        {/* Cart */}
        <div className="relative cursor-pointer">
          <FaShoppingCart
            size={30}
            className="text-black hover:text-blue-500 transition"
          />

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
