import React from "react";
import "./index.css";

export const ImageSection = ({ title, sectionpara, setionImage }) => {
  return (
    <div className="image-section-main">
      <h1 className="image-section-title">{title}</h1>
      <p className="image-section-para">{sectionpara}</p>
      <img src={setionImage} />
    </div>
  );
};
