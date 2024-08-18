import React from "react";
import { FaPlus } from "react-icons/fa";

const DishesCard = ({ img, title, description, price }) => {
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
      {/* Add the "+" icon */}
      <div className="absolute bottom-2 right-2 bg-brightColor text-white p-2 rounded-full">
        <FaPlus />
      </div>
    </div>
  );
};

export default DishesCard;
