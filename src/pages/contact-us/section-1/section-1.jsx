import React from "react";
import "./section-1.css";
import model from "../../../assets/home/contactmodelblue.png";
import contactImg from "../../../assets/home/contactimgs.png";

const Section1Contact = () => {
  return (
    <div className="contact-centerer">
      <div className="width-limiter contact-centerer">
      <div className="Section1Contact">
        <div className="Section1ContactForm">
          <h2 className="titles-default">Contact</h2>
          <hr />
          <form>
            <label>Your name (required)</label>
            <input type="text" name="name" placeholder="" required />
            <label>Your email (required)</label>
            <input type="tel" name="phone" placeholder="" required />
            <label>Your message (required)</label>
            <textarea
              name="message"
              rows="9"
              placeholder=""
              required
            ></textarea>
            <button type="submit" className="Section1ContacttcontactBtn">
              SEND
            </button>
          </form>
        </div>
        <div className="Section1ContactImage">
          <img className="contImg1" src={model} alt="" />
          <img className="contImg2" src={contactImg} alt="" />
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Section1Contact;
