import React, { useState } from "react";
import { useCart } from "../context/useCart";
import { useToast } from "../context/ToastContext";
import ConfirmModal from "../components/ConfirmModal";
import { useNavigate } from "react-router-dom";

const Cart: React.FC = () => {
  const { cart, addToCart, removeFromCart, clearCart } = useCart();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"remove" | "clear" | null>(null);
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const increaseQty = (id: number) => {
    const item = cart.find((p) => p.id === id);
    if (item) addToCart({ ...item, quantity: 1 });
  };

  const decreaseQty = (id: number) => {
    const item = cart.find((p) => p.id === id);
    if (item && item.quantity > 1) {
      addToCart({ ...item, quantity: -1 });
    } else if (item && item.quantity === 1) {
      openRemoveModal(id);
    }
  };

  const openRemoveModal = (id: number) => {
    setSelectedId(id);
    setModalType("remove");
    setModalOpen(true);
  };

  const openClearModal = () => {
    setModalType("clear");
    setModalOpen(true);
  };

  const handleConfirm = () => {
    if (modalType === "remove" && selectedId !== null) {
      removeFromCart(selectedId);
      showToast("Item removed from cart"); // toast for remove
    } else if (modalType === "clear") {
      clearCart();
      showToast("Cart cleared"); // toast for clear
    }
    closeModal();
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType(null);
    setSelectedId(null);
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-16rem)] bg-gray-50">
        <h1 className="text-3xl text-black font-bold mb-4">Your Cart is Empty</h1>
        <p className="text-gray-600">Add some items to see them here.</p>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-16rem)] px-10 py-6 flex flex-col gap-6 bg-gray-50 relative">
      <h1 className="text-4xl text-black font-bold mb-6">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col md:flex-row md:items-center justify-between border rounded-2xl p-4 shadow-lg hover:shadow-2xl transition bg-white"
          >
            {/* Product Info */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 md:w-32 md:h-32 object-cover rounded-xl"
              />
              <div>
                <h2 className="text-xl text-gray-800 font-semibold">{item.name}</h2>
                <p className="text-gray-600 mt-1">${item.price}</p>
              </div>
            </div>

            {/* Quantity Controls */}
            <div className="flex items-center gap-3 mt-4 md:mt-0">
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                –
              </button>
              <span className="px-4 py-2 border rounded-lg w-12 text-center text-gray-700 bg-gray-100">
                {item.quantity}
              </span>
              <button
                onClick={() => increaseQty(item.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              >
                +
              </button>
            </div>

            {/* Remove Item */}
            <button
              onClick={() => openRemoveModal(item.id)}
              className="px-4 py-2 mt-4 md:mt-0 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      {/* Clear Cart & Total / Checkout */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-6">
        <button
          onClick={openClearModal}
          className="px-6 py-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-2xl hover:from-red-600 hover:to-red-800 transition"
        >
          Clear Cart
        </button>

        <div className="flex items-center gap-4">
          <span className="text-2xl font-bold text-gray-800">Total: ${totalPrice}</span>
          <button
            onClick={() => navigate("/checkout")}
            className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Checkout
          </button>
        </div>
      </div>

      {/* Confirm Modal */}
      <ConfirmModal
        isOpen={modalOpen}
        title={modalType === "remove" ? "Remove Item" : "Clear Cart"}
        message={
          modalType === "remove"
            ? "Are you sure you want to remove this item from your cart?"
            : "Are you sure you want to clear the entire cart?"
        }
        onConfirm={handleConfirm}
        onCancel={closeModal}
      />
    </div>
  );
};

export default Cart;
