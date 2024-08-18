import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaArrowLeft } from "react-icons/fa"; // Import FontAwesome arrow icon
import { food_list } from "../assets/assets";
import DishesCard from "../layouts/DishesCard";

// Utility function to chunk array into rows
const chunkArray = (array, size) => {
  const result = [];
  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }
  return result;
};

const Menu = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Define the headings for each row
  const headings = [
    "Salad",
    "Rolls",
    "Desserts",
    "Sandwich",
    "Cake",
    "Pure Veg",
    "Pasta",
    "Noodles",
  ];

  // Chunk the food_list into rows of 4 items each
  const rows = chunkArray(food_list, 4);

  return (
    <div className="min-h-screen flex flex-col items-center lg:px-32 px-5 relative">
      {/* Back Arrow Icon */}
      <button
        onClick={() => navigate("/")}
        className="absolute top-4 left-4 text-3xl text-gray-700 hover:text-brightColor"
      >
        <FaArrowLeft />
      </button>

      <h1 className="text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Our Menu
      </h1>

      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="w-full mb-12">
          {/* Use the heading from the array */}
          <h2 className="text-2xl font-semibold text-left mb-4">
            {headings[rowIndex] || `Category ${rowIndex + 1}`}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
            {row.map((dish) => (
              <DishesCard
                key={dish._id}
                img={dish.image}
                title={dish.name}
                description={dish.description}
                price={`${dish.price}`}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Menu;
