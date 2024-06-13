import React from "react";
import "./private-label.css";
import Section1PrivateLabel from "./section-1/section-1";
import Section2PrivateLabel from "./section-2/section-2";
import Section3PrivateLabel from "./section-3/section-3";
import Section4PrivateLabel from "./section-4/section-4";


const PrivateLabelSwimwear = () => {
  return (
    <div className="main-container">
      <Section1PrivateLabel />
      <Section2PrivateLabel />
      <Section3PrivateLabel />
      <Section4PrivateLabel />
    </div>
  );
};
export default PrivateLabelSwimwear;
