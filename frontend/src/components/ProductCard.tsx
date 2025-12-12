import React from "react";
import { type Product } from "../data/products";

type Props = {
  product: Product;
};

const ProductCard: React.FC<Props> = ({ product }) => {
  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden shadow-md transform transition-all duration-400 hover:-translate-y-3 hover:shadow-2xl flex flex-col"
      aria-labelledby={`product-${product.id}-name`}
    >
      <div className="overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 id={`product-${product.id}-name`} className="text-2xl font-semibold mb-2">
            {product.name}
          </h3>
          <p className="text-sm text-gray-500 mb-4">{product.slug}</p>
          <p className="text-lg font-bold">{product.price}</p>
        </div>

        <div className="mt-6">
          <button
            className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProductCard;
