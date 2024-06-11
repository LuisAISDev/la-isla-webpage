import React from "react";
import "./section-1-about.css";
import modelorange from "../../../assets/home/aboutmodelgold.png";
import modelblue from "../../../assets/home/aboutmodelblue.png";
import modelpink from "../../../assets/home/aboutmodelwhite.png";

const Section1About = () => {
  return (
    <div className="Section1About">
      <div className="Section1AboutCentered">
        <div className="width-limiter">
          <div className="Section1AboutTitle">
            <h1>
              La Isla Fashion Group, LLC, headquartered in Portland, Oregon,
              operates manufacturing offices in Medellin, Colombia.
            </h1>
          </div>
          <div className="Section1Aboutimages">
            <img src={modelorange} alt="" />
            <img className="Section1AboutCenterImage" src={modelblue} alt="" />
            <img src={modelpink} alt="" />
          </div>
          <div className="Section1AboutText">
            <p>
              With over two decades of experience in the swimwear manufacturing
              industry, our company specializes in full package manufacturing of
              women’s swimwear. Over the years, we have had the privilege of
              working with some of the world’s global brands and celebrities, as
              well as startups and medium-sized companies.
            </p>
            <div />
            <p className="Section1Aboutboldtext">
              Our clients' products have graced the shelves of renowned retail
              destinations such as Nordstrom, Saks 5th AvenueNeiman Marcus,
              Everything but Water, Macy’s, Dillard’s, and more. Leveraging our
              extensive expertise, we offer invaluable guidance and support to
              brands seeking manufacturing solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1About;
