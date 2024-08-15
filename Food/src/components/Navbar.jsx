import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import logo from "../assets/img/logo.png";
import Button from "../layouts/Button";
import { BsHandbag } from "react-icons/bs";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate(); 
  
  const handleLoginClick = () => {
    navigate("/signup"); 
  };

  return (
    <nav className="p-3">
      <div className="flex justify-between items-center">
        <img src={logo} alt="Logo" className="w-20" />
        <ul className="flex gap-6 font-medium">
          <li>
            <Link
              to="/"
              className={`cursor-pointer ${
                menu === "home" ? "text-brightColor" : "text-gray-700"
              }`}
              onClick={() => setMenu("home")}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/menu"
              className={`cursor-pointer ${
                menu === "menu" ? "text-brightColor" : "text-gray-700"
              }`}
              onClick={() => setMenu("menu")}
            >
              Menu
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`cursor-pointer ${
                menu === "about" ? "text-brightColor" : "text-gray-700"
              }`}
              onClick={() => setMenu("about")}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact-us"
              className={`cursor-pointer ${
                menu === "contact-us" ? "text-brightColor" : "text-gray-700"
              }`}
              onClick={() => setMenu("contact-us")}
            >
              Contact Us
            </Link>
          </li>
        </ul>

        <div className="flex gap-6">
          <BsHandbag className="text-3xl" />
          <Button title="SignIn/Up" onClick={handleLoginClick} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
