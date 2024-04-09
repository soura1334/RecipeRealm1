import React from "react";
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import Title from "../Title/Title";
import Slides from "../Slides/Slides";

const Home = () => {
  return (
    <div >
      <Hero />
      <Title title="Search By Ingredients" />
      <Search />
      <Title title="Random Recipes" />
      <Slides/>
    </div>
  );
};

export default Home;
