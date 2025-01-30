import React from "react";
import Contact from "../../Components/Contact/Contact";
import "../ContactUs/ContactUs.css";
import location from "../../assets/c-location.svg";
import mail from '../../assets/cmail.svg';
import call from '../../assets/cphone.svg';
import BannerTop from '../../Components/service/BannerTop/BannerTop';

const ContactUs = () => {
  return (
    <>
    <BannerTop btitle="Contact"/>
      <Contact />

      <div className="con-page">
        <div className="con-page-container">
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.3812259333477!2d72.52005427386537!3d23.009770716808553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa43da99557fa49cf%3A0xa31f06eacb32b24c!2sFlourish%20Creations%20Pvt.%20Ltd%20%7C%20Branding%20%7C%20Marketing%20%7C%20Advertising!5e0!3m2!1sen!2sin!4v1738222614116!5m2!1sen!2sin"
              title="Google Map"
              width="100%"
              height="550"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-b-100">
            <div className="office">
              <p className="india-c-o">India Corporate Office</p>
              <div className="container-ofc">
                <div className="info-box">
                  {/* Location */}
                  <div className="info-item w-657">
                    <div className="office-d-f">
                      <img src={location} alt="" className="img-icon-contact" />
                      <div className="hr-line-ofc">
                        <span className="label">Location</span>
                        <p className="text">
                          A-206, PNTC, radio mirchi road, Vejalpur, Ahmedabad
                          380015
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-item">
                    <div className="office-d-f">
                      <img src={mail} alt="" className="img-icon-contact" />
                      <div className="hr-line-ofc">
                        <span className="label">Email</span>
                        <p className="text">
                          <a href="mailto:info@teamflourish.com">
                            info@teamflourish.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call */}
                  <div className="info-item-l">
                    <div className="office-d-f">
                      <img src={call} alt="" className="img-icon-contact" />
                      <div className="hr-line-ofc">
                        <span className="label">Call</span>
                        <p className="text">
                          <a href="tel:+919499619901">+91 94996 19901</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="office">
              <p className="india-c-o">Canada Branch Office</p>
              <div className="container-ofc">
                <div className="info-box">
                  {/* Location */}
                  <div className="info-item w-657">
                    <div className="office-d-f">
                      <img src={location} alt="" className="img-icon-contact" />
                      <div className="hr-line-ofc">
                        <span className="label">Location</span>
                        <p className="text">
                          101, Bank Side Drive, Kitchener, Ontario, Canada
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="info-item">
                    <div className="office-d-f">
                      <img src={mail} alt="" className="img-icon-contact" />
                      <div className="hr-line-ofc">
                        <span className="label">Email</span>
                        <p className="text">
                          <a href="mailto:info@teamflourish.com">
                            info@teamflourish.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Call */}
                  <div className="info-item-l">
                    <div className="office-d-f">
                      <img src={call} alt="" className="img-icon-contact" />
                      <div className="hr-line-ofc">
                        <span className="label">Call</span>
                        <p className="text">
                          <a href="tel:+919499619901">+1 90241 28339</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="office">
              <p className="india-c-o">UK Branch Office</p>
              <div className="container-ofc">
                <div className="info-box-c-s">
                  <p className="coming-soon-txt">Coming Soon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
