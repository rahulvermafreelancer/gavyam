import React from "react";
import "./index.css";
import { Coursal } from "../../components";

export const Resource = () => {
  return (
    <>
      <div className="header-section" style={{ paddingBottom: "10%" }}>
        <div className="page-section-banner">
          <p className="page-section-text font-regular text-white">Home</p>
          <img src="/assets/arrowLeft.svg" alt="arrow" />
          <p className="page-section-text font-regular text-white">Resources</p>
        </div>
        <div className="main-section">
          <h1
            className="main-section-title font-regular font-bold text-white"
            style={{ paddingTop: "5%" }}
          >
            RESOURCES
          </h1>
          <div className="color-bar" />
        </div>
      </div>

      <div className="resource-container">
        <div className="resource-image-section">
          <img src="./assets/bottle.png" alt="bottels" />
        </div>
        <div className="resource-text-section">
          <div className="nearest-class">
            <p className="resource-para-text font-regular font-bold">
              The newest
            </p>
          </div>
          <div>
            <h1 className="heading-resource-text font-regular font-bold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </h1>
            <p className="resources-para-text font-regular">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam…
              <span style={{ fontWeight: "bold" }}>READ MORE</span>
            </p>
          </div>

          <div className="writer-main">
            <div className="writer-image">
              <img
                src="./assets/about/test.jfif"
                alt="writer"
                style={{ borderRadius: 25 }}
              />
            </div>
            <div className="writer-desc">
              <p className="writer-name-text font-regular">By : Name here</p>
              <p style={{ opacity: "0.7" }} className="font-light">
                Just now
              </p>
            </div>
          </div>
        </div>
      </div>

      <Coursal heading="News & More" />
      <Coursal heading="Articles" />
      <Coursal heading="Case studies" />
    </>
  );
};
