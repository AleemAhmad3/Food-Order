import React, { useState, useEffect } from "react";
import { food_list } from "../assets/assets";
import { FaPlus } from 'react-icons/fa';

const getRandomDishes = (num) => {
  let shuffled = [...food_list].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, num);
};

const FoodItems = ({ selectedCategory }) => {
  const [displayedDishes, setDisplayedDishes] = useState(getRandomDishes(8));

  useEffect(() => {
    if (selectedCategory) {
      // Filter dishes by selected category and show up to 4 dishes
      const filteredDishes = food_list.filter(dish => dish.category === selectedCategory);
      setDisplayedDishes(filteredDishes.slice(0, 4));
    } else {
      // Show 8 random dishes when no category is selected
      setDisplayedDishes(getRandomDishes(8));
    }
  }, [selectedCategory]);

  return (
    <div className="py-12">
      <h1 className="font-bold text-3xl text-center mb-8">Top Dishes</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedDishes.map(dish => (
          <div
            key={dish._id}
            className="relative bg-white shadow-lg rounded-lg overflow-hidden"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-32 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">{dish.name}</h2>
              <p className="text-gray-600 mb-4">{dish.description}</p>
              <p className="text-lg font-bold">${dish.price}</p>
            </div>
            <div className="absolute bottom-4 right-4 p-2 bg-gray-800 text-white rounded-full flex items-center justify-center">
              <FaPlus className="text-xl" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodItems;
