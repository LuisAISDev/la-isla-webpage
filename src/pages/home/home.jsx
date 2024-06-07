import React from "react";

import "./home.styles.css";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import SectionOne from "./section-1/section-one";
import SectionTwo from "./section-2/section-two";
import SectionThree from "./section-3/section-three";
import SectionFour from "./section-4/section-four";
import SectionFive from "./section-5/section-five";

const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <SectionOne />
      <SectionTwo /> 
      <SectionThree /> 
      <SectionFour /> 
      <SectionFive /> 
      <Footer />
    </div>
  );
};

export default Home;
