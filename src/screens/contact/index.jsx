import React, { useState } from "react";
import "./index.css";

export const Contact = () => {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;
    if (emailRegex.test(email)) {
      setIsValid(true);
      setMessage("Your email looks good!");
    } else {
      setIsValid(false);
      setMessage("Please enter a valid email!");
    }
  };

  return (
    <>
      <div className="header-section">
        <div className="page-section">
          <p className="page-section-text">Home</p>
          <span className="sign-alignment">&#62;</span>
          <p className="page-section-text">Contact Us</p>
        </div>
        <div className="main-section">
          <h1 className="main-section-title">CONTACT US</h1>
          <div className="color-bar" />
        </div>
      </div>

      <div className="contact-main-section">
        <div className="contact-section">
          <div className="heading-section">
            <h1 className="contact-title-text">Gavyam Gentech Pvt. Ltd.</h1>
            <p className="contact-para-text">
              Sed ut perspiciatis unde omnis iste natus error sit.
            </p>
          </div>
          <div className="heading-section">
            <h1 className="contact-office-title">Office Address</h1>
            <p className="contact-office-para">
              Plot#32, Zone-D/4, Phase-1, GIDC Estate, V.U. Nagar - 388 121
              Gujarat, India
            </p>
          </div>
          <div className="heading-section">
            <h1 className="contact-office-title">Contact Details</h1>
            <p className="contact-office-para">
              Info@Gavyamgentec.Com +91 70961 56796, +91 98251 56796, +91 2692
              232500
            </p>
          </div>
          <div className="heading-section">
            <h1 className="contact-office-title">Follow Us</h1>
            <div className="social-icons">
              <img src="./assets/contact/fb.svg" alt="social" />
              <img src="./assets/contact/insta.svg" alt="social" />
              <img src="./assets/contact/twitter.svg" alt="social" />
              <img src="./assets/contact/ld.svg" alt="social" />
            </div>
          </div>
        </div>

        <div className="contact-section">
          <div className="heading-section-form">
            <h1 className="contact-title-text">Let's talk!</h1>
            <p className="contact-para-text">
              Wish to digitalize cattle health management?
            </p>
          </div>
          <form className="contact-form-div">
            <div className="input-main">
              <div>
                <input
                  type="text"
                  placeholder="Your name"
                  className="input-field-size"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="input-field-size"
                  onChange={validateEmail}
                />

                <div className={`message ${isValid ? "success" : "error"}`}>
                  {message}
                </div>
              </div>
            </div>

            <div className="input-main">
              <div>
                <input
                  type="number"
                  placeholder="Phone number"
                  className="input-field-size"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Orgainization"
                  className="input-field-size"
                />
              </div>
            </div>

            <div className="input-main">
              <div>
                <input
                  type="textarea"
                  placeholder="Your Message"
                  className="input-field-size-large"
                />
              </div>
            </div>

            <div className="form-button-section">
              <p className="send-text">Send to us</p>
             <div className="arrow-align">
             <svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.11"
                height="18.081"
                viewBox="0 0 27.11 18.081"
                className="fill-current"
                stroke="#B55219"
              >
                <path
                  id="Icon_ionic-ios-arrow-round-forward"
                  data-name="Icon ionic-ios-arrow-round-forward"
                  d="M25.164,11.6a1.23,1.23,0,0,0-.009,1.733l5.725,5.735H9.09a1.224,1.224,0,0,0,0,2.448H30.87l-5.725,5.735a1.239,1.239,0,0,0,.009,1.733,1.219,1.219,0,0,0,1.723-.009l7.759-7.816h0a1.375,1.375,0,0,0,.254-.386,1.168,1.168,0,0,0,.094-.471,1.227,1.227,0,0,0-.348-.857l-7.759-7.816A1.2,1.2,0,0,0,25.164,11.6Z"
                  transform="translate(-7.875 -11.252)"
                />
              </svg>
             </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.245174446712!2d75.86088531535101!3d22.756280831937364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0e0fffffff%3A0x9bb2a69245d1bc90!2sTalati%20Marketing!5e0!3m2!1sen!2sin!4v1640081278511!5m2!1sen!2sin"
          width="100%"
          height="650"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
    </>
  );
};
