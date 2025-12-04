import React from "react";
import HeroImg from "../assets/images/hero.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-white text-black flex flex-col">
<section className="w-full flex flex-col lg:flex-row h-screen">
  <div className="lg:w-1/2 flex flex-col justify-start h-full px-12 lg:px-22 pt-45">
 <h1
  className="font-extrabold leading-tight mb-6"
  style={{ fontSize: '5.4rem', lineHeight: 1.1 }}
>
  <span className="block">Handmade</span>
  <span className="block">Creations by</span>
  <span className="block">Piyush</span>
</h1>

    <p className="text-3xl mb-10 text-gray-500">
      Crochet. Art. Crafts. Made with Love.
    </p>

    {/* Buttons */}
<div className="flex gap-10"> {/* increased gap from 6 to 8 */}
  <button className="bg-black text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-800 transition transform scale-105">
    Shop Now
  </button>
  <button className="bg-white border border-gray-300 text-black px-8 py-4 rounded-xl text-lg font-semibold hover:bg-gray-100 transition transform scale-105">
    Contact
  </button>
</div>
  </div>

  {/* Right Image */}
  <div className="lg:w-1/2 h-[75%] flex justify-end items-center">
      <img
      src={HeroImg}
      alt="Hero"
      className="h-full w-auto object-cover"
    />
  </div>
</section>

    </div>
  );
};

export default Home;
