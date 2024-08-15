import React from 'react';

const DishesCard = ({ img, title, price }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-xs w-full">
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

export default DishesCard;
