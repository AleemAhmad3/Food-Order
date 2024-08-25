import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa"; // Import plus and minus icons
import { FaArrowLeft } from "react-icons/fa"; // Import FontAwesome arrow icon
import { useNavigate } from "react-router-dom"; // Import useNavigate
import useCartStore from "../store/CartStore";

const Cart = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const cartItems = useCartStore((state) => state.cartItems);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const clearCart = useCartStore((state) => state.clearCart);
  const updateQuantity = useCartStore((state) => state.updateQuantity);

  const total = cartItems.reduce(
    (acc, item) => acc + (item.price * item.quantity || 0),
    0
  );

  const handleIncrease = (item) => {
    updateQuantity(item._id, item.quantity + 1);
  };

  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      updateQuantity(item._id, item.quantity - 1);
    } else {
      removeFromCart(item._id);
    }
  };

  return (
    <div className="min-h-screen bg-white-100 p-6">
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-3xl text-gray-700 hover:text-brightColor"
      >
        <FaArrowLeft />
      </button>
      <h1 className="text-4xl font-bold text-center mb-8">My Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-lg text-gray-600">Cart is empty.</p>
      ) : (
        <div className="max-w-4xl mx-auto bg-gray-50 rounded-lg shadow-lg p-6">
          <ul className="space-y-6">
            {cartItems.map((item) => (
              <li
                key={item._id} // Use unique item ID as the key
                className="flex items-center justify-between border-b border-gray-300 pb-4 last:border-b-0"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-gray-600">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                    <div className="flex items-center mt-2">
                      <button
                        onClick={() => handleDecrease(item)}
                        className="text-gray-600 hover:text-gray-800 mr-2"
                      >
                        <FaMinus />
                      </button>
                      <span className="text-lg font-semibold">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => handleIncrease(item)}
                        className="text-gray-600 hover:text-gray-800 ml-2"
                      >
                        <FaPlus />
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  className="text-red-500 hover:text-red-700 font-semibold ml-4"
                  onClick={() => removeFromCart(item._id)} // Use item ID for removal
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6 border-t border-gray-300 pt-4">
            <span className="text-lg font-bold">
              Total: ${total.toFixed(2)}
            </span>
            <button
              onClick={clearCart}
              className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
