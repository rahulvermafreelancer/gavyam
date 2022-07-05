import React from "react";
import "./index.css";
import DownloadIcon from "../../assets/coursal/download.svg";

export const DownloadGuid = () => {
  return (
    <a
      style={{ textDecoration: "none" }}
      href={require("../../assets/file/GavyamBrochure.pdf")}
      download="myFile"
    >
      <div className="download-align-btn">
        <h1 className="download-heading font-regular font-bold text-center">
          The detailed guide
        </h1>

        <button
          data="red"
          style={{ marginLeft: "25%" }}
          className={`border-2 border-brown rounded-full flex flex-nowrap items-center text-brown justify-center gap-4 hvr-bounce-to-right  overflow-hidden py-4 text-xl my-1 px-4 hvr-bounce-to-right-brown`}
        >
          <p className="font-regular">Download the brochure</p>

          <img src={DownloadIcon} alt="download-icon" />
        </button>
      </div>
    </a>
  );
};
