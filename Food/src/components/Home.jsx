import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ExploreMenu from "./ExploreMenu";
import About from "./About";
import Footer from "./Footer";
import Review from "./Review";
import Signup from "./Signup";
import SignIn from "./SignIn";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExploreMenu />
      <About />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
