import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { FaArrowLeft } from "react-icons/fa"; // Import FontAwesome arrow icon
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  // Determine if the back arrow should be shown
  const showBackArrow = location.pathname !== "/";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative md:px-32 px-5">
      {/* Back Arrow Icon */}
      {showBackArrow && (
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-3xl text-gray-700 hover:text-brightColor"
        >
          <FaArrowLeft />
        </button>
      )}

      <h1 className="text-4xl font-semibold text-center lg:pt-16 pt-10 pb-10">
        Customer's Review
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Sophia Azura" />
        <ReviewCard img={img2} name="John Deo" />
        <ReviewCard img={img3} name="Victoria Zoe" />
      </div>
    </div>
  );
};

export default Review;
