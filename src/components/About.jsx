import React from "react";
import { useNavigate, useLocation } from "react-router-dom"; // Import useLocation
import { FaArrowLeft } from "react-icons/fa"; // Import FontAwesome arrow icon
import img from "../assets/img/about.png";
import Button from "../layouts/Button";

const About = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get current route

  // Determine if the back arrow should be shown
  const showBackArrow = location.pathname !== "/";

  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5 mb-16 relative">
      {/* Back Arrow Icon */}
      {showBackArrow && (
        <button
          onClick={() => navigate("/")}
          className="absolute top-4 left-4 text-3xl text-gray-700 hover:text-brightColor"
        >
          <FaArrowLeft />
        </button>
      )}

      <img src={img} alt="About Us" className="w-full lg:w-1/2 mb-6 lg:mb-0" />

      <div className="space-y-4 lg:ml-6">
        <h1 className="font-semibold text-4xl text-center md:text-start">
          Why Choose Us?
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          debitis fugit quidem? Ut iusto quas voluptate rerum quam maxime
          corporis, debitis ipsum et unde, itaque quod atque nihil expedita
          commodi aperiam modi dolorum nesciunt quaerat accusantium illum,
          provident ullam? Adipisci esse, magnam repellendus consequatur
          accusamus hic eligendi suscipit? Itaque, est. Voluptate optio placeat
          veritatis doloremque provident repellendus, voluptas vero fugit odit
          accusamus qui ex eaque nostrum adipisci vitae, at obcaecati?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel minus
          dolorum quas asperiores cupiditate placeat ea accusamus consequuntur
          delectus a fuga numquam, iste voluptatibus voluptates impedit illo
          nobis doloremque enim ut? eveniet natus amet suscipit earum?
        </p>
        <div className="flex justify-center lg:justify-start">
          <Button title="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default About;
