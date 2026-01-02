import React, { useState } from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import { useCart } from "../context/useCart";
import { useToast } from "../context/ToastContext";

const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));
  const [qty, setQty] = useState(1);
  const { addToCart } = useCart();
  const { showToast } = useToast();

  if (!product) {
    return (
      <div className="max-h-screen flex flex-col items-center justify-center">
        <p className="text-xl text-red-600">Product not found!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: qty,
    });
    showToast(`${product.name} added to cart!`);
  };

  return (
    <div className="max-h-screen flex flex-col">
      {/* MAIN CONTENT */}
      <main className="flex-grow flex w-full mt-20">
        {/* Image Section */}
        <div className="w-[70%] h-[650px] flex justify-center items-center">
          <div className="w-[80%] h-full">
            <img
              src={product.image}
              alt={product.name}
              className="object-cover w-full h-full rounded-xl"
            />
          </div>
        </div>

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
              className="px-3 py-1 bg-gray-700 rounded-full text-white text-lg"
            >
              –
            </button>
            <div className="px-4 py-1 bg-gray-700 text-white border border-gray-500 rounded-md font-semibold">
              {qty}
            </div>
            <button
              onClick={() => setQty(qty + 1)}
              className="px-3 py-1 bg-gray-700 rounded-full text-white text-lg"
            >
              +
            </button>
          </div>

          {/* ADD TO CART */}
          <button
            onClick={handleAddToCart}
            className="mt-4 px-6 py-2 bg-black text-white rounded-lg w-fit hover:bg-gray-900 transition"
          >
            ADD TO CART
          </button>

          {/* SHIPPING INFO */}
          <p className="text-gray-600 text-sm mt-4">
            SHIPPING INFO — Ships within 3–5 business days.
          </p>
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
