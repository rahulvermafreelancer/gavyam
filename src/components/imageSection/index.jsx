import React from "react";
import "./index.css";

export const ImageSection = ({ title, sectionpara, setionImage }) => {
  return (
    <div className="image-section-main">
      <h1 className="image-section-title font-regular font-bold">{title}</h1>
      <p className="image-section-para font-regular">{sectionpara}</p>
      <img src={setionImage} alt="all-cat" />
    </div>
  );
};
