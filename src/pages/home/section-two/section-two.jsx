import "./section-two.css";

const SectionOne = () => (
  <div className="section section-two" style={{ backgroundColor: "#EEE2D5" }}>
    <div className="section-content">
      <div className="sec-two-container width-limiter">
        <div className="sec-two-subsection">
          <div className="sec-two-subsection-divider"></div>
          <div className="sec-two-subsection-content">
            <h2>Over two decades of industry expertise</h2>
            <p>
              We stand as a beacon of quality, innovation, and sustainability in
              the world of swimwear production.
            </p>
          </div>
        </div>
        <div className="sec-two-subsection">
          <div className="sec-two-subsection-divider"></div>
          <div className="sec-two-subsection-content">
            <h2>Our US offices</h2>
            <p>
              Are in Portland, Oregon and our manufacturing facilities are in
              Medellin, Colombia.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SectionOne;
