import React, { useState } from "react";
import "./Contact.css";
import YellowWhiteBtn from "../YellowWhiteBtn/YellowWhiteBtn";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    email: "",
    city: "",
    company: "",
  });

  const handleChange =(e) =>{
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    debugger;
    e.preventDefault(); // Prevent page reload
    console.log("Entered Details:", formData);
  };
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
          <form className="form-container" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="full-width input"
              value={formData.name}
              onChange={handleChange}
            />
            <div className="half-width-container">
              <input
                type="text"
                name="phone"
                placeholder="Mobile Number"
                className="input"
                value={formData.phone}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="half-width-container">
              <input
                type="text"
                name="company"
                placeholder="Company Name"
                className="input"
                value={formData.company}
                onChange={handleChange}
              />
              <input
                type="text"
                name="city"
                placeholder="City"
                className="input"
                value={formData.city}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="message"
              placeholder="Message"
              className="full-width textarea"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="ybtn">
            <YellowWhiteBtn btnName="Submit" type="submit" />
            </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
