import React from "react";
import { FaPlus } from "react-icons/fa";
import useCartStore from "../store/CartStore";

const DishesCard = ({ img, title, description, price, id, onAddToCart }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const handleAddToCart = () => {
    const item = { _id: id, image: img, name: title, description, price }; // Ensure consistent keys
    addToCart(item);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 relative">
      <img
        src={img}
        alt={title}
        className="w-full h-32 object-cover mb-4 rounded-lg"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
      <p className="mt-2 font-bold text-brightColor">${price}</p>
      <div
        className="absolute bottom-2 right-2 bg-brightColor text-white p-2 rounded-full cursor-pointer"
        onClick={handleAddToCart}
      >
        <FaPlus />
      </div>
    </div>
  );
};

export default DishesCard;
