import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Product Images
import img1 from "../assets/images/products/p1.png";
import img2 from "../assets/images/products/p2.png";
import img3 from "../assets/images/products/p3.png";
import img4 from "../assets/images/products/p4.png";
import img5 from "../assets/images/products/p5.png";
import img6 from "../assets/images/products/p6.png";

import { Link } from "react-router-dom";

export default function Products() {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
    { id: 5, src: img5 },
    { id: 6, src: img6 },
  ];

  return (
    <div className="flex flex-col h-screen bg-white">
        <Navbar />
      <main className="flex-1 overflow-y-scroll px-10 pt-32 pb-24">
        <h1 className="text-4xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-500 mt-2 mb-10">
          Handmade crochet, knitting & art.
        </p>

        {/* Masonry Grid */}
        <div
          className="
            columns-1
            sm:columns-2
            lg:columns-3
            gap-6
            space-y-6
          "
        >
          {images.map((img) => (
            <Link
              to={`/product/${img.id}`}
              key={img.id}
              className="block w-full break-inside-avoid rounded-2xl overflow-hidden shadow-sm border border-gray-200 hover:opacity-90 transition"
            >
              <img
                src={img.src}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </Link>
          ))}
        </div>
      </main>

      <Footer />

    </div>
  );
}
