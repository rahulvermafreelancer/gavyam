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
      <div className="page-section">
        <p className="page-section-text">Home</p>
        <span className='sign-alignment'>&#62;</span>
        <p className="page-section-text">{sectionName}</p>
        <span className='sign-alignment'>&#62;</span>
        <p className="page-section-text">{pageName}</p>
      </div>
      <div className='main-section'>
        <h1 className='main-section-title'>{pageTitle}</h1>
        <div className='color-bar' />
        <p className='para-text-desc'>{pageDetails}</p>
      </div>
    </div>
  );
};
