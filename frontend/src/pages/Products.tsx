// src/pages/Products.tsx
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { products } from "../data/products";

const Products: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Keep your existing Navbar (do not change it) */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Content: add top padding equal to navbar height (adjust if your navbar is taller) */}
      <main className="flex-1 overflow-y-auto px-10 pt-28 pb-28">
        <h1 className="text-4xl font-bold text-gray-900">Products</h1>
        <p className="text-gray-500 mt-2 mb-8">
          Handmade crochet, knitting & art.
        </p>

        {/* Masonry / variable-size grid using CSS columns */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="block w-full break-inside-avoid rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:scale-[1.02] transition"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              {/* Optionally show a small overlay/title — uncomment if you want */}
              {/*<div className="p-3">
                <h3 className="text-lg font-medium text-gray-900">{product.title}</h3>
                <p className="text-sm text-gray-600">${product.price}</p>
              </div>*/}
            </Link>
          ))}
        </div>
      </main>

      {/* Keep your existing Footer (do not change it) */}
      <Footer />
    </div>
  );
};

export default Products;
