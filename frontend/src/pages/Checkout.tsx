import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/useCart";

type PaymentMethod = "card" | "paypal" | "cod";

const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const { cart, clearCart } = useCart();

  const [paymentMethod, setPaymentMethod] =
    useState<PaymentMethod | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = () => {
    if (!paymentMethod) {
      alert("Please select a payment method.");
      return;
    }

    if (!form.name || !form.email || !form.address) {
      alert("Please fill all required fields.");
      return;
    }

    const order = {
    items: [...cart],
    total,
    paymentMethod,
    shippingInfo: { ...form },
    date: new Date().toISOString(),
    };

    localStorage.setItem("lastOrder", JSON.stringify(order));
    
    clearCart();
    navigate("/order-success");
    // alert(`Order placed using ${paymentMethod.toUpperCase()}!`);
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] px-10 py-8 flex gap-12">
      {/* LEFT */}
      <div className="w-[65%]">
        <h1 className="text-4xl font-bold text-black mb-8">
          Checkout
        </h1>

        {/* SHIPPING FORM */}
        <div className="flex flex-col gap-5 mb-10">
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className="px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
          />

          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className="px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
          />

          <input
            name="address"
            placeholder="Shipping Address"
            value={form.address}
            onChange={handleChange}
            className="px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
          />

          <div className="flex gap-4">
            <input
              name="city"
              placeholder="City"
              value={form.city}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
            />

            <input
              name="zip"
              placeholder="ZIP Code"
              value={form.zip}
              onChange={handleChange}
              className="w-1/2 px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
            />
          </div>
        </div>

        {/* PAYMENT METHOD */}
        <h2 className="text-2xl font-semibold text-black mb-4">
          Payment Method
        </h2>

        <div className="flex flex-col gap-3">
          {[
            { id: "card", label: "Credit / Debit Card" },
            { id: "paypal", label: "PayPal" },
            { id: "cod", label: "Cash on Delivery" },
          ].map((method) => (
            <button
              key={method.id}
              onClick={() =>
                setPaymentMethod(method.id as PaymentMethod)
              }
              className={`px-5 py-4 rounded-lg text-left transition
                ${
                  paymentMethod === method.id
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
            >
              {method.label}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-[35%]">
        <h2 className="text-2xl font-semibold text-black mb-6">
          Order Summary
        </h2>

        <div className="flex flex-col gap-4 mb-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between text-gray-700"
            >
              <span>
                {item.name} × {item.quantity}
              </span>
              <span>${item.price * item.quantity}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-between text-xl font-bold text-black mb-8">
          <span>Total</span>
          <span>${total}</span>
        </div>

        <button
          onClick={handlePlaceOrder}
          disabled={!paymentMethod}
          className={`w-full py-3 rounded-lg transition
            ${
              paymentMethod
                ? "bg-black text-white hover:bg-gray-900"
                : "bg-gray-300 text-gray-600 cursor-not-allowed"
            }`}
        >
          PLACE ORDER
        </button>
        {paymentMethod === "card" && (
        <div className="flex flex-col gap-3 mt-3">
            <input
                type="number"
                placeholder="Card Number"
                className="px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
            />
            <div className="flex gap-3">
                <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-1/2 px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
                />
                <input
                    type="number"
                    placeholder="CVC"
                    className="w-1/2 px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
                />
            </div>
            <input
                type="text"
                placeholder="Mailing address"
                className="px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
            />
            <input
                type="text"
                placeholder="ZIP Code"
                className="px-4 py-3 bg-gray-100 rounded-lg text-black outline-none"
            />
        </div>
        )}

      </div>
    </div>
  );
};

export default Checkout;
