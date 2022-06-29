import React from "react";
import "./index.css";

const imageData = [
  {
    id: 1,
    image: "/assets/cone.png"
  },
  {
    id: 2,
    image: "/assets/ctwo.png"
  },
  {
    id: 3,
    image: "/assets/cthree.png"
  },
  {
    id: 4,
    image: "/assets/cfour.png"
  },
  {
    id: 51,
    image: "/assets/cfive.png"
  }
];

export const Value = () => {
  return (
    <div className="easy-value-main">
      <h1 className="easy-title font-regular font-bold">5 Things we value</h1>
      <div className="easy-value-card">
        <div className="value-card-main-section">
          {imageData.map((item) => (
            <div className="value-card-inside-section" key={item.id}>
              <img src={item.image} alt="loop" />
            </div>
          ))}
        </div>

        {/* <div className="easy-value-card-body">
          <p className="card-title-value font-regular">Respect all living beings</p>
          <div className="value-image-card">
            <img src="./assets/about/l1.png" alt="easy value" />
          </div>
        </div> */}

        {/* <div className="easy-value-card-body-two">
          <p className="card-title-value font-regular">Transparency & honesty</p>
          <div className="value-image-card-two">
            <img src="./assets/about/l2.png" alt="easy value" />
          </div>
        </div>

        <div className="easy-value-card-body">
          <p className="card-title-value font-regular">Welfare of cattle</p>
          <div className="value-image-card">
            <img src="./assets/about/l3.png" alt="easy value" />
          </div>
        </div> */}

        {/* <div className="easy-value-card-body-two">
          <p className="card-title-value font-regular">Simplicity and accessibility</p>
          <div className="value-image-card-two-specific">
            <img src="./assets/about/l4.png" alt="easy value" />
          </div>
        </div> */}

        {/* <div className="easy-value-card-body">
          <p className="card-title-value font-regular">Thrive with innovation</p>
          <div className="value-image-card">
            <img src="./assets/about/l5.png" alt="easy value" />
          </div>
        </div> */}
      </div>
    </div>
  );
};
