import React, { useState } from "react";
import { menu_list, food_list } from "../assets/assets";
import { FaPlus } from "react-icons/fa"; // Import FontAwesome plus icon

const ExploreMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu_list[0].menu_name);

  // Filter dishes based on the selected category
  const filteredDishes = food_list.filter((food) => food.category === selectedCategory);

  return (
    <div className="text-center lg:h-screen">
      <h1 className="font-bold mt-10 text-3xl mb-12">Explore Our Menu</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`w-32 h-32 flex flex-col items-center cursor-pointer relative ${
              selectedCategory === item.menu_name
                ? "border-4 border-brightColor rounded-full p-1"
                : ""
            }`}
            onClick={() => setSelectedCategory(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className="w-full h-full object-cover rounded-full"
            />
            <p className="text-lg font-medium mt-2">{item.menu_name}</p>
          </div>
        ))}
      </div>
      
      {/* Display related dishes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredDishes.map((dish, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-4 relative">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h3 className="text-lg font-semibold mb-2">{dish.name}</h3>
            <p className="text-gray-600">{dish.description}</p>
            <p className="mt-2 font-bold text-brightColor">${dish.price}</p>
            {/* Add the "+" icon */}
            <div className="absolute bottom-2 right-2 bg-brightColor text-white p-2 rounded-full">
              <FaPlus />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
