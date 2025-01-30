import React from "react";
import "./Contact.css";
import YellowWhiteBtn from '../YellowWhiteBtn/YellowWhiteBtn';
const Contact = () => {
  return (
    <>
      <div className="contact-us">
        <div className="contact-us-container">
          <p className="something">See something you like? Get in touch</p>
          <p className="enter-your">
            Enter your details below and what you have on your mind. We’ll get
            back to you soon.
          </p>
          <div className="contact-box">
            <form className="form-container">
              <input type="text" placeholder="Name" className="full-width input" />
              <div className="half-width-container">
                <input type="text" placeholder="Mobile Number" className="input"/>
                <input type="email" placeholder="Email" className="input"/>
              </div>
              <div className="half-width-container">
                <input type="text" placeholder="Company Name" className="input" />
                <input type="text" placeholder="City" className="input" />
              </div>
              <textarea placeholder="Message" className="full-width textarea" ></textarea>
            </form>
            <YellowWhiteBtn btnName="Submit"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
