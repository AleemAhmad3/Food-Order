import React from "react";
import { food_list } from "../assets/assets";
import DishesCard from "../layouts/DishesCard"; // Adjust the import path as needed

// Utility function to get random dishes
const getRandomDishes = (dishes, count) => {
  let shuffled = [...dishes].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const TopDishes = () => {
  // Get 8 random dishes
  const randomDishes = getRandomDishes(food_list, 8);

  return (
    <div className="text-center lg:h-screen">
      <h1 className="font-bold mt-10 text-3xl mb-12">Top Dishes</h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {randomDishes.map((dish, index) => (
          <DishesCard
            key={index}
            img={dish.image}
            title={dish.name}
            description={dish.description}
            price={`${dish.price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TopDishes;
