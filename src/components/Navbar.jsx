import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Button from "../layouts/Button";
import { BsHandbag } from "react-icons/bs";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="p-3">
      <div className="flex justify-between items-center">
        <img
          src={logo}
          alt="Logo"
          className="w-20 cursor-pointer"
          onClick={() => navigate("/")}
        />

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center flex-grow">
          <ul className="flex gap-6 font-medium mx-auto">
            {["home", "menu", "about", "contact-us"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`/${item === "home" ? "" : item}`}
                  className={({ isActive }) =>
                    isActive ? "text-brightColor" : "text-gray-700"
                  }
                >
                  {item.charAt(0).toUpperCase() +
                    item.slice(1).replace("-", " ")}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Cart and SignIn Button */}
        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/cart">
            <BsHandbag className="text-3xl" />
          </NavLink>

          <Button title="SignIn" onClick={() => navigate("/signin")} />
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center gap-4">
          <NavLink to="/">
            <BsHandbag className="text-3xl" />
          </NavLink>
          <button onClick={toggleMenu} className="text-3xl">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 left-0 w-full h-full bg-gray-200 shadow-lg transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ zIndex: 50 }} // menu is above other content
      >
        <div className="flex flex-col items-center pt-10 space-y-6 bg-gray-200">
          {["home", "menu", "about", "contact-us"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "home" ? "" : item}`}
              className={({ isActive }) =>
                isActive ? "text-brightColor" : "text-gray-700"
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
            </NavLink>
          ))}

          <Button title="SignIn" onClick={() => navigate("/signin")} />
        </div>
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-3xl text-gray-700"
        >
          <FaTimes />
        </button>
      </div>

      {/* Add margin to the top of the page content when menu is open */}
      <div
        className={`lg:hidden transition-all duration-300 ${
          isMenuOpen ? "mt-[calc(100vh)]" : ""
        }`}
      ></div>
    </nav>
  );
};

export default Navbar;
