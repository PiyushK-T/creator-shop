import React from "react";
// import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import FeaturedProducts from "../components/FeaturedProducts";
// import Footer from "../components/Footer";

const Home: React.FC = () => {
  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-black">
      {/* <Navbar /> */}
      <Hero />
      <FeaturedProducts />
      <AboutMe />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;