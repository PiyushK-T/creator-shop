import React from "react";

interface FeatureCardProps {
  name: string;
  price: string;
  img: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ name, price, img }) => {
  return (
    <div className="bg-container p-6 rounded-2xl shadow-lg hover:scale-105 transition w-80">
      <img src={img} alt={name} className="rounded-lg mb-4 w-full h-64 object-cover" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-secondary font-semibold">{price}</p>
      <button className="mt-4 w-full bg-primary hover:bg-primary/90 py-2 rounded-lg font-bold transition">
        Buy Now
      </button>
    </div>
  );
};

export default FeatureCard;
