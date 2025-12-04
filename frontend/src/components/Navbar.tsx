import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-white shadow-md py-15 px-25">
      <div className="text-4xl font-bold">Threads & Pixel</div>
      <div className="flex items-center gap-8">
        <a
          href="/shop"
          className="text-xl font-semibold text-black hover:text-primary"
        >
          SHOP
        </a>
        <FaShoppingCart
          size={40}
          className="cursor-pointer text-black hover:text-primary"
        />
      </div>
    </nav>
  );
};

export default Navbar;
