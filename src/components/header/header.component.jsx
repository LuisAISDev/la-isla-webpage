import React from "react";
import "./header.styles.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container width-limiter">
        <img
          src={process.env.PUBLIC_URL + "/images/LaIsla_Logo_PMS1.png"}
          alt="Company logo"
          className="logo"
        />{" "}
        <nav className="header__nav">
          <ul>
            <li>
              <Link to="/la-isla-webpage/monsters">HOME</Link>
            </li>
            <li>
              <Link to="/la-isla-webpage/monsters">PRIVATE LABEL SWIMWEAR</Link>
            </li>
            <li>
              <Link to="/la-isla-webpage/monsters">ABOUT US</Link>
            </li>
            <li>
              <Link to="/la-isla-webpage/monsters">CONTACT US</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
