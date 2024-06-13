import React from "react";
import "./section-1.css";
import model from "../../../assets/home/privatefirstmodel.png";
import modelsecond1 from "../../../assets/home/privatesecondmodel1.png";
import modelsecond2 from "../../../assets/home/privatesecondmodel2.png";

import model2second1 from "../../../assets/home/fullservice1.png";
import model2second2 from "../../../assets/home/fullservice2.png";

const Section1PrivateLabel = () => {
  return (
    <div className="Section1PrivateLabel">
      <div className="centered-privatelabel width-limiter">
        <div className="Section1Private1">
          <div className="Section1PrivateTextRegion">
            <div className="Section1PrivateTextRegionAdjust">
              <h2 className="titles-default">Our Company</h2>
              <hr />
              <p className="regular-text-extra-height">
                La Isla strategically maintains offices in the United States
                (Portland, Oregon), positioning ourselves as a bridge between
                our clients and our bustling manufacturing hub in Medellín,
                Colombia. This dual presence not only ensures clear and
                efficient communication but also provides our clients with the
                peace of mind that comes with having a local point of contact.
                With our US offices, we offer a responsive and accessible
                support system, addressing any concerns or queries promptly and
                effectively.{" "}
              </p>
              <p className="boldtext">
                Several of our existing clients have encountered challenges with
                overseas dealings and communications, prompting them to choose
                our services instead.
              </p>
            </div>
          </div>
          <div className="Section1PrivateImageRegion">
            <img src={model} alt="" />
          </div>
        </div>

        {/* message prop requires a string */}
        <div className="Section1Private2">
          <div className="Section1PrivateImageRegion2 fullService1">
            <img src={modelsecond1} alt="" />
            <div />
            <img src={modelsecond2} alt="" />
          </div>
          <div className="Section1PrivateImageRegion2 fullService2">
            <img src={model2second1} alt="" />
            <div />
            <img src={model2second2} alt="" />
          </div>

          <div className="Section1PrivateTextRegion2">
            <div className="Section2PrivateTextRegionAdjust">
              <p className="boldtext">
                We are a full service swimwear manufacturing and sourcing
                company, with access to state of the art equipment and highly
                skilled personnel.
              </p>
              <p>
                &nbsp;We specialize in the sourcing manufacturing of private
                label women’s swimwear, private label bikinis, private label
                yoga wear, athleisure garments, board shorts, rash guards, and
                other apparel for the active wear segment. Our capabilities
                include but are not limited to pattern making, sampling, full
                package, design, and hand and machine embroidery. We manufacture
                a broad range of swimwear styles, from contemporary, to cup
                size, children’s and more!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1PrivateLabel;
