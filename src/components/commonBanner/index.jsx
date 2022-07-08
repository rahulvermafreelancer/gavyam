import React from "react";
import "./index.css";

export const CommonBanner = ({
  sectionName,
  pageName,
  pageDetails,
  pageTitle
}) => {
  return (
    <div className="header-section">
      {/* <div className="page-section-banner">
        <p className="page-section-text text-white font-light">Home</p>
        <img src="/assets/arrowLeft.svg" alt="arrow" />
        <p className="page-section-text text-white font-light">{sectionName}</p>
        <img src="/assets/arrowLeft.svg" alt="arrow" />
        <p className="page-section-text text-white font-regular">{pageName}</p>
      </div> */}
      <div className="main-section-one">
        <h1 className="main-section-title text-white font-regular font-bold">
          {pageTitle}
        </h1>
        <div className="color-bar" />
        <p className="para-text-desc text-white font-light">{pageDetails}</p>
      </div>
    </div>
  );
};
