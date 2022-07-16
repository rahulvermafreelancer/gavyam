import React from "react";
import "./index.css";
import U1 from "../../assets/dte/u1.png";
import U2 from "../../assets/dte/u2.png";
import U3 from "../../assets/dte/u3.png";

export const Unique = () => {
  return (
    <div className="unique-main">
      <h1 className="unique-title font-regular font-bold">
        What makes us unique?
      </h1>

      <div className="unique-main-slider">
        <div className="unique-card-main">
          <div className="card-main-container-unique">
            <div className="unique-card-image-section">
              <img src={U1} alt="u1" />
            </div>
            <div className="unique-card-text-section">
              <h1 className="font-regular font-bold unique-card-title">
                Live temperature reading
              </h1>
              <p className="unique-card-para font-regular ">
                Accurate display of the uniform temperature of the liquid in the
                device helps to thaw semen efficiently for precise time.
              </p>
            </div>
          </div>
        </div>

        <div className="unique-card-main">
          <div className="card-main-container-unique">
            <div className="unique-card-image-section">
              <img src={U2} alt="u1" />
            </div>
            <div className="unique-card-text-section">
              <h1 className="font-regular font-bold unique-card-title">
                Thinnest design in the market
              </h1>
              <p className="unique-card-para font-regular ">
                Compact and easy-to-carry device that eases commute to and helps AI
                workers save time and effort.
              </p>
            </div>
          </div>
        </div>

        <div className="unique-card-main">
          <div className="card-main-container-unique">
            <div className="unique-card-image-section">
              <img src={U3} alt="u1" />
            </div>
            <div className="unique-card-text-section">
              <h1 className="font-regular font-bold unique-card-title">
                Compatible to store frozen semen & sex-sorted semen
              </h1>
              <p className="unique-card-para font-regular ">
                Thaw any semen straws at the ideal temperature, without
                guesswork and errors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
