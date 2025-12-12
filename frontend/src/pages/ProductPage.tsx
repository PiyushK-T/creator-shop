import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex justify-center items-center">
          <p className="text-xl text-red-600">Product not found!</p>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      {/* MAIN CONTENT */}
      <main className="flex-grow flex w-full mt-20">
        {/* Image Section (70%) */}
        <div className="w-[70%] h-[650px] flex justify-center items-center">
          {/* Actual Image with side spacing */}
          <div className="w-[80%] h-full">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>

        {/* Text Section (30%) with right padding */}
        <div className="w-[30%] h-[500px] flex flex-col gap-6 py-4 pr-6">
          <h2 className="text-4xl font-bold text-black">{product.name}</h2>

          <p className="text-gray-700 text-base leading-relaxed">
            {product.description}
          </p>

          <p className="text-2xl font-semibold text-black mt-2">
            Price: <span className="font-bold">${product.price}</span>
          </p>

          {/* QUANTITY */}
          <div className="flex items-center gap-4 mt-2">
            <span className="font-semibold text-black">Quantity:</span>
            <button
              onClick={() => qty > 1 && setQty(qty - 1)}
              className="px-3 py-1 bg-gray-700 rounded-full text-lg"
            >
              –
            </button>
            <div className="px-4 py-1 bg-gray-700 text-white border border-gray-500 rounded-md font-semibold">
              {qty}
            </div>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 bg-gray-700 rounded-full text-lg"
            >
              +
            </button>
          </div>

          <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg w-fit hover:bg-gray-900 transition">
            ADD TO CART
          </button>

          <p className="text-gray-600 text-sm mt-4">
            SHIPPING INFO — Ships within 3–5 business days.
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductPage;
