import React from "react";
import "./index.css";
import LeftImage from "../../assets/about/f1.png";
import RightOne from "../../assets/about/f2.png";
import RightTwo from "../../assets/about/f3.png";
import { Value } from "./Value";

export const About = () => {
  return (
    <>
      <div className="header-section">
        <div className="page-section">
          <p className="page-section-text">Home</p>
          <span className="sign-alignment">&#62;</span>
          <p className="page-section-text">About Us</p>
        </div>
        <div className="main-section">
          <h1 className="main-section-title">ABOUT US</h1>
          <div className="color-bar" />
          <p className="para-text-desc">
            We are dedicated to transforming dairy farming into a smart and
            sustainable industry.
          </p>
        </div>
      </div>

      <div className="about-main-container">
        <div className="about-inside-container">
          <h1 className="about-section-heading">
            digiGAI is where livestock management meets precise technology.
          </h1>
          <div className="flex-para-about">
            <p className="about-para font-bold">
              We are dedicated to transforming dairy farming into a smart and
              sustainable industry. digiGAI solves the need for innovative and
              affordable solutions to optimize dairy farming. We seek to enhance
              the lives of dairy producers, as well as the cattle by automating
              and improving the aspects of dairy farming.
            </p>
            <p className="about-para">
              Through continued innovation, training, and resource improvements,
              Gavyam is striving to revolutionize livestock breeding and herd
              health management with digitization.
            </p>
          </div>
        </div>
        <div className="about-image-section">
          <div className="about-left-image">
            <img src={LeftImage} alt="about-cow" width="90%" />
            <div className="mission-section">
              <h1 className="mission-title">Mission</h1>
              <p className="mission-para">
                Digitalization of the dairy industry to help farmers raise
                healthier and more productive livestock.
              </p>
            </div>
          </div>
          <div>
            <img src={RightOne} alt="about-cow" width="90%" />
            <br />
            <img src={RightTwo} alt="about-cow" width="90%" />
            <div className="vision-section">
              <h1 className="mission-title">Vision</h1>
              <p>
                Transforming livestock breeding and management with affordable &
                smart farming solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Value />
    </>
  );
};
