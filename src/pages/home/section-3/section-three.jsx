import React from "react";
import "./section-three.css";
import modelwhite from "../../../assets/home/secondmodelwhite.png";
import modelpink from "../../../assets/home/secondmodelpink.png";

import modelwhiteThin from "../../../assets/home/modelthin1.png";
import modelpinkThin from "../../../assets/home/modelthin2.png";

const SectionThree = () => {



  return (
    <div className="section-three-centered">
      <div className="SectionThree width-limiter">
        <div className="threeTextRegion">
          <p>
            Our long and amazing journey began with a commitment to excellence,
            serving some of the most renowned brands worldwide. From household
            names to emerging names, our portfolio boasts a diverse array of
            clients who trust us to bring their swimwear visions to life. <br />
            <br />
            At La Isla, we offer a comprehensive range of manufacturing services
            tailored to suit the needs of brands of all sizes. Whether you're
            seeking simple designs or intricate creations featuring embroidery,
            underwires, and custom cup sizes, our dedicated team is here for
            you.
          </p>
        </div>
        <div className="threeImageRegion threeModelsVisible1">
          <img src={modelwhite} alt="" />
          <img src={modelpink} alt="" />
        </div>
        <div className="threeImageRegion threeModelsVisible2">
          <img src={modelwhiteThin} alt="" />
          <img src={modelpinkThin} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SectionThree;
