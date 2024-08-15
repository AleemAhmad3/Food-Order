import React from "react";
import { food_list } from "../assets/assets"; 
import DishesCard from "../layouts/DishesCard";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col items-center lg:px-32 px-5">
      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Our Menu
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {food_list.map((dish) => (
          <DishesCard
            key={dish._id}
            img={dish.image}
            title={dish.name}
            price={`$${dish.price}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Menu;
