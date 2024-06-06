import React from "react";
import "./footer.styles.css"; // Import your CSS file for styling
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container width-limiter">
        <div className="footer__contact-info">
          <div className="footer__contact-us">
            <img
              src={process.env.PUBLIC_URL + "/images/logo_white.svg"} // Replace with your logo path
              alt="Company Logo"
              className="footer__logo"
            />
            <p className="footer__contact-details">
              <span>CONTACT US</span>
              <br />
              <span className="span-pace">(555) 555-5555 </span>
              <span>Email: contact@yourcompany.com</span>
            </p>
          </div>
          <div className="footer__industries">
            <h3>Some Industries</h3>
            <div className="footer__industries-divider"></div>
            <div className="list-organizer">
              <ul className="footer__industries-list">
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                {/* Add more industry links as needed */}
              </ul>
              <ul className="footer__industries-list">
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                <li>
                  <span className="footer__arrow">&#8594;</span>
                  <Link to="/la-isla-webpage/">Lorem ipsum dolor sit amet</Link>
                </li>
                {/* Add more industry links as needed */}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__divider"></div>
        <div className="footer__social-media">
          {/* Replace with links to your social media profiles */}
          <Link to="/la-isla-webpage/">
            <img
              src={process.env.PUBLIC_URL + "/images/Facebook.svg"} // Replace with your icon path
              alt="Social Media Icon 1"
              className="footer__social-icon"
            />
          </Link>
          <Link to="/la-isla-webpage/">
            <img
              src={process.env.PUBLIC_URL + "/images/Instagram.svg"} // Replace with your icon path
              alt="Social Media Icon 2"
              className="footer__social-icon"
            />
          </Link>
          {/* Add more social media icons as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
