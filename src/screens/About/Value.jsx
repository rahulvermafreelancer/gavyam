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
    <>
      <div className="value-main-div">
        <div className="value-haeding-div">
          <h1 className="font-regular font-bold text-white value-font">
            5 Things we value
          </h1>
        </div>
        <div className="value-cards-div">
          <div className="card-one-value">
            <p className="font-regular text-white value-sm-card-text">
              Respect all living beings
            </p>
            <div className="sm-value-card-bg">
              <img
                src="./assets/about/l1.png"
                alt="easy value"
                className="value-image-align"
              />
            </div>
          </div>
          <div className="card-two-value">
            <p className="font-regular text-white value-sm-card-text">
              Transparency & honesty
            </p>
            <div className="sm-value-card-bg">
              <img
                src="./assets/about/l2.png"
                alt="easy value"
                className="value-image-align"
              />
            </div>
          </div>
          <div className="card-one-value">
            <p className="font-regular text-white value-sm-card-text">
              Welfare of cattle
            </p>
            <div className="sm-value-card-bg">
              <img
                src="./assets/about/l3.png"
                alt="easy value"
                className="value-image-align"
              />
            </div>
          </div>
          <div className="card-two-value">
            <p className="font-regular text-white value-sm-card-text">
              Simplicity and accessibility
            </p>
            <div className="sm-value-card-bg">
              <img
                src="./assets/about/l4.png"
                alt="easy value"
                className="value-image-align"
              />
            </div>
          </div>
          <div className="card-one-value">
            <p className="font-regular text-white value-sm-card-text">
              Thrive with innovation
            </p>
            <div className="sm-value-card-bg">
              <img
                src="./assets/about/l5.png"
                alt="easy value"
                className="value-image-align"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

{
  /* <div className="value-card-main-section">
          {imageData.map((item) => (
            <div className="value-card-inside-section" key={item.id}>
              <img src={item.image} alt="loop" />
            </div>
          ))}
        </div> */
}

{
  /* <div className="easy-value-card-body">
          <p className="card-title-value font-regular">Respect all living beings</p>
          <div className="value-image-card">
            <img src="./assets/about/l1.png" alt="easy value" />
          </div>
        </div> */
}

{
  /* <div className="easy-value-card-body-two">
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
        </div> */
}

{
  /* <div className="easy-value-card-body-two">
          <p className="card-title-value font-regular">Simplicity and accessibility</p>
          <div className="value-image-card-two-specific">
            <img src="./assets/about/l4.png" alt="easy value" />
          </div>
        </div> */
}

{
  /* <div className="easy-value-card-body">
          <p className="card-title-value font-regular">Thrive with innovation</p>
          <div className="value-image-card">
            <img src="./assets/about/l5.png" alt="easy value" />
          </div>
        </div> */
}
