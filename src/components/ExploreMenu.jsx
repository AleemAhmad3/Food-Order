import React, { useState } from "react";
import { menu_list, food_list } from "../assets/assets";
import DishesCard from "../layouts/DishesCard"; // Import the DishesCard component
import useCartStore from "../store/CartStore"; // Correct import path for Zustand store

const ExploreMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu_list[0].menu_name);
  const addToCart = useCartStore((state) => state.addToCart);

  // Filter dishes based on the selected category
  const filteredDishes = food_list.filter((food) => food.category === selectedCategory);

  return (
    <div className="text-center lg:h-screen">
      <h1 className="font-bold mt-10 text-3xl mb-12">Explore Our Menu</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`w-28 h-28 mb-5 flex flex-col items-center cursor-pointer relative ${
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
        {filteredDishes.map((dish) => (
          <DishesCard
            key={dish._id}
            id={dish._id}
            img={dish.image}
            title={dish.name}
            description={dish.description}
            price={dish.price}
            onAddToCart={() => addToCart(dish)} // Pass the addToCart function to DishesCard
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
