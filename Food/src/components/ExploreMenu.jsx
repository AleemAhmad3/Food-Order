import React, { useState } from "react";
import { menu_list } from "../assets/assets";
import FoodItems from "./FoodItems";

const ExploreMenu = () => {
  const [selectedCategory, setSelectedCategory] = useState("");

  return (
    <div className="text-center">
      <h1 className="font-bold mt-10 text-3xl mb-12">Explore Our Menu</h1>
      <div className="flex flex-wrap justify-center gap-8 mb-12">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="w-24 flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedCategory(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              className="w-full object-cover mb-4"
            />
            <p className="text-lg font-medium">{item.menu_name}</p>
          </div>
        ))}
      </div>
      {/* FoodItems component will handle displaying dishes based on the selected category */}
      <FoodItems selectedCategory={selectedCategory} />
    </div>
  );
};

export default ExploreMenu;
