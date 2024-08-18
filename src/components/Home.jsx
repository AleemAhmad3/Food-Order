import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import ExploreMenu from "./ExploreMenu";
import About from "./About";
import Footer from "./Footer";
import Review from "./Review";
import TopDishes from "./TopDishes";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <ExploreMenu />
      <TopDishes />
      <About />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
