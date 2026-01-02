import React from "react";
import { useCart } from "../context/useCart";
import { useToast } from "../context/ToastContext";
import product1 from "../assets/images/product1.png";
import product2 from "../assets/images/product2.png";
import product3 from "../assets/images/product3.png";

const products = [
  { id: 1, name: "Crochet Hat", description: "Warm, stylish, and handmade.", price: 25, img: product1 },
  { id: 2, name: "Knitting Scarf", description: "Soft wool scarf made with care.", price: 35, img: product2 },
  { id: 3, name: "Sketch Art", description: "Original artwork ready to frame.", price: 50, img: product3 },
];

const FeaturedProducts: React.FC = () => {
  const { addToCart } = useCart();
  const { showToast } = useToast();

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.img,
      quantity: 1,
    });
    showToast(`${product.name} added to cart!`);
  };

  return (
    <section className="w-full min-h-screen py-4 px-8 flex flex-col items-center">
      <h2 className="text-5xl font-extrabold mb-8">Featured Creations</h2>
      <div className="flex justify-between w-full max-w-[1900px] gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-500 hover:-translate-y-4 hover:shadow-2xl flex flex-col flex-1"
            style={{ maxHeight: "55rem" }}
          >
            <div className="overflow-hidden">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-96 object-cover transform transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-4">{product.description}</p>
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-xl font-semibold">${product.price}</p>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="bg-black text-white py-3 rounded-md hover:bg-gray-800 transition-all"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
