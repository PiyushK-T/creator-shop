import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const Products: React.FC = () => {
  return (
    <div className="h-[calc(100vh-16rem)] px-10 pt-6 pb-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-gray-900">Products</h1>
      <p className="text-gray-500 mt-2 mb-8">
        Handmade crochet, knitting & art.
      </p>

      <div className="h-[calc(100%-6rem)] overflow-y-auto pr-2">
        {/* Masonry grid */}
          <div className="
            columns-2 
            md:columns-3 
            lg:columns-4 
            xl:columns-5 
            gap-6 
            space-y-6
            ">
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
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
