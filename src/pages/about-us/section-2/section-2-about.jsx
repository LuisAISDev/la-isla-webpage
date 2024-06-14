import React from "react";
import "./section-2-about.css";
import model from "../../../assets/home/aboutmodelwhite2.png";
import aboutmodel from "../../../assets/home/aboutaloneimg.png";

const Section2About = () => {
  return (
    <div className="Section2About">
      <div className="width-limiter Section2Centered">
        <div className="Section2Centered">
          <div className="Section2ImageRegion">
            <img className="aloneimgAbout1" src={model} alt="" />
            <img className="aloneimgAbout2" src={aboutmodel} alt="" />
          </div>
          <div className="Section2TextRegionOrganizer">
            <div className="Section2TextRegion-About">
              <h2 className="titles-default">Ancillary services</h2>
              <hr />
              <h1 className="bebas-default">
                In today’s fiercely competitive market, these services are
                indispensable for brand launch and growth.
              </h1>
              <p>
                In addition to our manufacturing services, we provide a
                comprehensive suite of ancillary services, including brand
                consulting, branding services, web design, and SEO
                implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2About;
