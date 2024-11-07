import React from "react";
import Hero from "../components/Header/Hero/Hero";
import GridLines from "react-gridlines";

const Home = () => {
  return (
    <div>
      {/* Grid lines Background */}
      <div className="absolute -top-2 left-0 right-0 z-0">
        <GridLines
          className="grid-area"
          cellWidth={180}
          strokeWidth={1}
          strokeWidth2={1}
          cellWidth2={36}
          lineColor="#dfe5eb"
          lineColor2="#dfe5eb"
        >
          <div className="h-screen"></div>
        </GridLines>
      </div>
      <Hero></Hero>
    </div>
  );
};

export default Home;
