import React from "react";
import "./index.css";

export const ToolsDetails = ({ title, topImage, downImage }) => {
  return (
    <div className="tools-details-main ">
      <h1 className="tools-title font-regular font-bold">{title}</h1>
      <div className="image-section-tools">
        <img src={topImage} alt="top" />
        <img src={downImage} alt="down" />
      </div>
    </div>
  );
};
