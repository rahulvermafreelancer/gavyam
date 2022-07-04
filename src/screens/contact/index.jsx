import React, { useState } from "react";
import "./index.css";
import { MasterBtn } from "../../components/masterBtn";
import * as emailjs from "emailjs-com";

var SERVICE_ID = "service_qrp0wkk";
var TEMPLATE_ID = "template_d3jo752";
var USER_ID = "uLmnreJNpzx3y4Ivf";

export const Contact = () => {
  const [isValid, setIsValid] = useState(false);
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [contact, setContact] = useState("");
  const [Orgainization, setOrganisation] = useState("");
  const [msg, setMsg] = useState("");

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

  const handleClick = () => {
    // validateEmail();

    var data = {
      to_email: emailId,
      name: name,
      contact: contact,
      email: emailId,
      Orgainization: Orgainization,
      msg: msg
    };

    emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
      (response) => {
        console.log(response.status, response.text);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  return (
    <>
      <div className="header-section">
        <div className="page-section-banner">
          <p className="page-section-text font-regular text-white">Home</p>
          <img src="/assets/arrowLeft.svg" alt="arrow" />
          <p className="page-section-text font-regular text-white">
            Contact Us
          </p>
        </div>
        <div className="main-section-contact">
          <h1 className="main-section-title font-regular font-bold text-white">
            CONTACT US
          </h1>
          <div className="color-bar" />
        </div>
      </div>

      <div className="contact-main-section-random">
        <div className="contact-section">
          <div className="heading-section">
            <h1 className="contact-title-text font-regular font-bold">
              Gavyam Gentech Pvt. Ltd.
            </h1>
            <p className="contact-para-text font-regular">
              Sed ut perspiciatis unde omnis iste natus error sit.
            </p>
          </div>
          <div className="heading-section">
            <h1 className="contact-office-title font-regular font-bold">
              Office Address
            </h1>
            <p className="contact-office-para font-regular">
              Plot#32, Zone-D/4, Phase-1, GIDC Estate, V.U. Nagar - 388 121
              Gujarat, India
            </p>
          </div>
          <div className="heading-section">
            <h1 className="contact-office-title font-regular font-bold">
              Contact Details
            </h1>
            <p className="contact-office-para font-regular">
              Info@Gavyamgentec.Com +91 70961 56796, +91 98251 56796, +91 2692
              232500
            </p>
          </div>
          <div className="heading-section">
            <h1 className="contact-office-title font-regular font-bold">
              Follow Us
            </h1>
            <div className="social-icons">
              <img src="./assets/contact/fb.svg" alt="social" />
              <img src="./assets/contact/insta.svg" alt="social" />
              <img src="./assets/contact/twitter.svg" alt="social" />
              <img src="./assets/contact/ld.svg" alt="social" />
            </div>
          </div>
        </div>

        <div className="contact-section-left">
          <div className="heading-section-form">
            <h1 className="contact-title-text font-regular font-bold">
              Let's talk!
            </h1>
            <p className="contact-para-text font-regular">
              Wish to digitalize cattle health management?
            </p>
          </div>
          <div className="contact-form-div">
            <div className="input-main-contact-div">
              <div
                style={{
                  marginBottom: "4%",
                  width: "45%"
                }}
              >
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  className="input-field-size font-regular"
                  style={{
                    paddingLeft: 15,
                    fontWeight: "bold",
                    color: "#000"
                  }}
                />
              </div>
              <div
                style={{ marginBottom: "4%", marginLeft: "3%", width: "45%" }}
              >
                <input
                  type="email"
                  placeholder="Email"
                  value={emailId}
                  onChange={(event) => setEmailId(event.target.value)}
                  className="input-field-size font-regular"
                  style={{
                    paddingLeft: 15,
                    fontWeight: "bold",
                    color: "#000"
                  }}
                />

                <div className={`message ${isValid ? "success" : "error"}`}>
                  {message}
                </div>
              </div>
            </div>

            <div className="input-main-contact-div">
              <div style={{ marginBottom: "4%", width: "45%" }}>
                <input
                  type="number"
                  placeholder="Phone number"
                  value={contact}
                  onChange={(event) => setContact(event.target.value)}
                  className="input-field-size font-regular"
                  style={{
                    paddingLeft: 15,
                    fontWeight: "bold",
                    color: "#000"
                  }}
                />
              </div>
              <div
                style={{ marginBottom: "4%", marginLeft: "3%", width: "45%" }}
              >
                <input
                  type="text"
                  placeholder="Orgainization"
                  value={Orgainization}
                  onChange={(event) => setOrganisation(event.target.value)}
                  className="input-field-size font-regular"
                  style={{
                    paddingLeft: 15,
                    fontWeight: "bold",
                    color: "#000"
                  }}
                />
              </div>
            </div>

            <div className="input-main-contact-div">
              <div style={{ width: "95%" }}>
                <input
                  type="textarea"
                  placeholder="Your Message"
                  value={msg}
                  onChange={(event) => setMsg(event.target.value)}
                  className="input-field-size-large font-regular"
                  style={{
                    paddingLeft: 15,
                    fontWeight: "bold",
                    color: "#000"
                  }}
                />
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "2%" }} onClick={handleClick}>
            <MasterBtn bgColor="brown" text="Send to us" />
          </div>
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
