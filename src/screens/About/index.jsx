import React from "react";
import "./index.css";
import LeftImage from "../../assets/about/f1.png";
import RightOne from "../../assets/about/f2.png";
import RightTwo from "../../assets/about/f3.png";
import { Value } from "./Value";
import { CoreTeam } from "./CoreTeam";

export const About = () => {
  return (
    <>
      <div className="header-section">
        <div className="page-section-banner">
          <p className="page-section-text font-light text-white">Home</p>
          <img src="/assets/arrowLeft.svg" alt="arrow" />
          <p className="page-section-text font-light text-white">About Us</p>
        </div>
        <div className="main-section">
          <h1 className="main-section-title font-regular font-bold text-white">
            ABOUT US
          </h1>
          <div className="color-bar" />
          <p className="para-text-desc font-regular text-white">
            We are dedicated to transforming dairy farming into a smart and
            sustainable industry.
          </p>
        </div>
      </div>

      <div className="about-main-container">
        <div className="about-inside-container">
          <h1 className="about-section-heading font-regular font-bold">
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
            <p className="about-para font-regular">
              Through continued innovation, training, and resource improvements,
              Gavyam is striving to revolutionize livestock breeding and herd
              health management with digitization.
            </p>
          </div>
        </div>

        <div className="about-image-section">
          <div className="main-section-width-align">
            <div className="about-left-image">
              <img src={LeftImage} alt="about-cow" />
            </div>
            <div className="mission-section">
              <h1 className="mission-title font-regular font-bold">Mission</h1>
              <p className="mission-paragraph font-regular font-bold">
                Digitalization of the dairy industry to help farmers raise
                healthier and more productive livestock.
              </p>
            </div>
          </div>

          <div className="main-section-width-align-right">
            <img src={RightOne} alt="about-cow" />
            <br />
            <img src={RightTwo} alt="about-cow" />
            <div className="vision-section">
              <h1 className="mission-title font-regular font-bold">Vision</h1>
              <p className="mission-paragraph font-regular font-bold">
                Transforming livestock breeding and management with affordable &
                smart farming solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Value />
      <CoreTeam />
    </>
  );
};
