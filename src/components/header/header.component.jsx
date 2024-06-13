import React from "react";
import "./header.styles.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";
import navmenu from "../../assets/home/NavMenu.svg";
import { useState } from "react";

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <header className="header">
      <div className="header-container width-limiter">
        <nav className="header__nav">
          <Link to={"/la-isla-webpage/"}>
            <img
              src={process.env.PUBLIC_URL + "/images/LaIsla_Logo_PMS1.png"}
              alt="Company logo"
              className="logo"
            />{" "}
          </Link>
          <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
            <li>
              {" "}
              <Link to="/la-isla-webpage/">HOME</Link>
            </li>
            <li>
              {" "}
              <Link to="/la-isla-webpage/private">
                PRIVATE LABEL SWIMWEAR
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/la-isla-webpage/about">ABOUT US</Link>
            </li>
            <li>
              {" "}
              <Link to="/la-isla-webpage/journal">JOURNAL</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/la-isla-webpage/contact">CONTACT US</Link>
            </li>
          </ul>
          <img
            src={navmenu}
            alt=""
            className="menu-icon"
            onClick={toggleMenu}
          />
        </nav>
      </div>
    </header>
  );
};

export default Header;
