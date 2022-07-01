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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
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
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
