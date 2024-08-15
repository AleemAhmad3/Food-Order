import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Signup from "./components/Signup";
import SignIn from "./components/SignIn"; // Import the SignIn component

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<SignIn />} /> {/* Add route for sign-in page */}
      </Routes>
    </div>
  );
};

export default App;
