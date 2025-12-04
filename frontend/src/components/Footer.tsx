import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-black py-10 px-12 flex flex-col items-center shadow-md">

      {/* Top Row: Name + Icons */}
      <div className="w-full flex justify-between items-center mb-6">
        <div className="font-bold text-3xl tracking-wide">
          Threads & Pixel
        </div>

        <div className="flex gap-8">
          <FaFacebook
            className="text-4xl hover:opacity-70 cursor-pointer"
            style={{ color: "#3b5998" }}
          />
          <FaInstagram
            className="text-4xl hover:opacity-70 cursor-pointer"
            style={{ color: "#E1306C" }}
          />
          <FaTwitter
            className="text-4xl hover:opacity-70 cursor-pointer"
            style={{ color: "#1DA1F2" }}
          />
        </div>
      </div>

      {/* Bottom: Copyright */}
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Threads & Pixel. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
