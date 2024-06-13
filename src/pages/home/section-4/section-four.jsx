import React from "react";
import "./section-four.css";
import model from "../../../assets/home/thirdmodelwhite.png";
import modeltwo from "../../../assets/home/fourth-model-quality.png";

const SectionFour = () => {
  return (
    <div className="four-sec-centered">
      <div className="four-section-width">
        <div className="SectionFour">
          <div className="fourImageRegion">
            <img className="selectimg1" src={model} alt="" />
            <img className="selectimg2" src={modeltwo} alt="" />
          </div>
          <div className="fourTextContent">
            <div className="fourTextRegion">
              <h2 className="titles-default">Quality</h2>
              <hr />
              <h1 className="bebas-default">
                We all know that in the pursuit of perfection, quality reigns
                supreme!
              </h1>
              <p>
                We prioritize craftsmanship and attention to detail in every
                garment we produce, ensuring that each piece meets the highest
                standards of excellence. Our unwavering commitment to quality
                extends to our sourcing practices, where we partner with some of
                the best suppliers in the world, like Carvico, to utilize
                sustainable, recycled fabrics that not only elevate your designs
                but also contribute to a more eco-conscious future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionFour;
