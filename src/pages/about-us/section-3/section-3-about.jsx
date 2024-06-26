import React from "react";
import "./section-3-about.css";
import model from "../../../assets/home/aboutmodelblue3.png";
import aboutleangirl from "../../../assets/home/aboutleangirl.png";

const Section3About = () => {
  return (
    <div className="Section3About">
      <div className="Section3About1 width-limiter">
        <div className="Section3AboutTextRegion">
          <p>
            At La Isla, we maintain exclusive partnerships with reputable
            Colombian and European suppliers to procure premium-quality fabrics,
            threads, hardware, and trims. Our longstanding relationships with
            these suppliers afford us preferential treatment, resulting in
            streamlined processes and enhanced brand offerings for our clients.{" "}
            <br />
            <br />
            <b>
              We look forward to the opportunity to collaborate with you and
              address your full package swimwear private label manufacturing
              needs.
            </b>
          </p>
          <div className="Section3AboutContact">
            <button className="Section3AboutcontactBtn">CONTACT US</button>
          </div>
        </div>
        <div className="Section3AboutImageRegion">
          <img className="leanGirl1" src={model} alt="" />
          <img className="leanGirl2" src={aboutleangirl} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Section3About;
