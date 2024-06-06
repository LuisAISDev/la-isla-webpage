import React from "react";

import "./home.styles.css";
import Header from "../../components/header/header.component";
import Footer from "../../components/footer/footer.component";
import SectionOne from "./section-one/section-one";
import SectionTwo from "./section-two/section-two";
const Home = () => {
  return (
    <div className="main-container">
      <Header />
      <SectionOne />
      <SectionTwo /> 
      <Footer />
    </div>
  );
};

export default Home;
