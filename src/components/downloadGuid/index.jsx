import React from "react";
import './index.css'
import DownloadIcon from "../../assets/coursal/download.svg"

export const DownloadGuid = () => {
  return (
    <div className="download-main">
      <h1 className="download-title">The detailed guide</h1>
      <div className="download-div">
        <p className="download-para-text">Download the brochure</p>
        <img src={DownloadIcon} alt="download-icon"/>
      </div>
    </div>
  );
};
