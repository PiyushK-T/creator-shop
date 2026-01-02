import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

type Order = {
  items: { id: number; name: string; price: number; quantity: number }[];
  total: number;
  paymentMethod: string;
  shippingInfo: {
    name: string;
    email: string;
    address: string;
    city?: string;
    zip?: string;
  };
  date: string;
};

const OrderSuccess: React.FC = () => {
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    const lastOrder = localStorage.getItem("lastOrder");
    if (lastOrder) setOrder(JSON.parse(lastOrder));
  }, []);

  if (!order) {
    return (
      <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center px-10 pt-28 text-center">
        <h1 className="text-3xl text-black font-bold mb-4">No order found!</h1>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
        >
          Go Home
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center px-10 pt-28 text-center">
      <h1 className="text-5xl font-bold text-black mb-4">🎉 Order Confirmed!</h1>
      <p className="text-gray-700 mb-6">
        Thank you {order.shippingInfo.name}! Your order has been successfully placed.
      </p>

      <div className="w-full max-w-2xl mb-6 text-left flex flex-col gap-4">
        <h2 className="text-2xl font-semibold text-black mb-3">Order Summary</h2>

        {/* Scrollable order items container, invisible borders */}
        <div className="flex flex-col gap-2 max-h-64 overflow-y-auto px-2 py-1">
          {order.items.map((item) => (
            <div key={item.id} className="flex justify-between text-gray-700">
              <span>{item.name} × {item.quantity}</span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between font-bold text-black mt-4 text-xl">
          <span>Total</span>
          <span>${order.total}</span>
        </div>

        <p className="mt-4 text-gray-700">
          Payment Method: {order.paymentMethod.toUpperCase()}
        </p>
        <p className="mt-2 text-gray-700">
          Shipping: {order.shippingInfo.address}, {order.shippingInfo.city}, {order.shippingInfo.zip}
        </p>
      </div>

      <button
        onClick={() => navigate("/products")}
        className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-900 transition"
      >
        Continue Shopping
      </button>
    </div>
  );
};

export default OrderSuccess;
