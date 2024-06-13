import React from "react";
import "./section-five.css";
import modelblue from "../../../assets/home/fourthmodelblue.png";
import modelorange from "../../../assets/home/fourthmodelorange.png";
import modelpink from "../../../assets/home/fourthmodelpink.png";

import swimthin1 from "../../../assets/home/swimthin1.png";
import swimthin2 from "../../../assets/home/swimthin2.png";
import swimthin3 from "../../../assets/home/swimthin3.png";


const SectionFive = () => {
  return (
    <div className="flex-centered section-five-colour">
      <div className="SectionFive width-limiter">
        <div className="fiveTitleCenter">
          <div className="fiveTitle">
            <h2 className="titles-default"> Sustainability</h2>
            <hr />
            <h1 className="bebas-default">
              At La Isla, sustainability isn't just a buzzword – it's a way of
              life.
            </h1>
          </div>
        </div>

        <div className="fiveimages fiveimagesSel1">
          <img src={modelorange} alt="" />
          <img className="fiveCenterImage" src={modelblue} alt="" />
          <img src={modelpink} alt="" />
        </div>

        <div className="fiveimages fiveimagesSel2">
          <img src={swimthin1} alt="" />
          <img className="fiveCenterImage" src={swimthin2} alt="" />
          <img src={swimthin3} alt="" />
        </div>

        <div className="fiveText">
          <p>
            Since our founding, we're proud to operate with a focus on
            environmental responsibility, utilizing eco-friendly production
            methods and embracing initiatives that reduce our carbon footprint.
            From our solar-powered web and email servers, to our dedication to
            utilizing recycled materials, we're committed to making a positive
            impact on both the industry and the planet.
          </p>
          
          <hr/>
          <p className="fiveboldtext">
            Reach out to us so we can help you embark on a journey of
            creativity, innovation, and sustainability!
          </p>
        </div>
        <div className="fiveContact">
          <button className="contactBtn">CONTACT US</button>
        </div>
      </div>
    </div>
  );
};

export default SectionFive;
