import React from "react";
import "./index.css";
import { Coursal } from "../../components";

export const Resource = () => {
  return (
    <>
      <div className="header-section">
        <div className="page-section">
          <p className="page-section-text">Home</p>
          <span className="sign-alignment">&#62;</span>
          <p className="page-section-text">Resources</p>
        </div>
        <div className="main-section">
          <h1 className="main-section-title">RESOURCES</h1>
          <div className="color-bar" />
        </div>
      </div>

      <div className="resource-container">
        <div className="resource-image-section">
          <img src="./assets/bottle.png" alt="bottels" />
        </div>
        <div className="resource-text-section">
          <div className="nearest-class">
            <p className="resource-para-text">The newest</p>
          </div>
          <div>
            <h1 className="heading-resource-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididun
            </h1>
            <p className="resources-para-text">
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
              <p className="writer-name-text">By : Name here</p>
              <p style={{ opacity: "0.7" }}>Just now</p>
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
