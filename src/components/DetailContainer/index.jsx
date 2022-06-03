import React from "react";
import "./index.css";

export const DetailContainer = ({ title, paragraph, subpara }) => {
  return (
    <div className="details-main-container">
      <h1 className="title-text-details font-regular font-bold">{title}</h1>
      <p className="bold-para-details font-regular font-bold">{paragraph}</p>
      <p className="subpara-details font-regular">{subpara}</p>
    </div>
  );
};
