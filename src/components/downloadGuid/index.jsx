import React from "react";
import "./index.css";
import DownloadIcon from "../../assets/coursal/download.svg";

export const DownloadGuid = () => {
  return (
    <div className="download-align-btn">
      <h1 className="download-heading font-regular font-bold">
        The detailed guide
      </h1>
      <a
        style={{ textDecoration: "none" }}
        href={require("../../assets/file/GavyamBrochure.pdf")}
        download="myFile"
      >
        <button
          data="red"
          className={` border-2 border-brown rounded-full flex flex-nowrap items-center text-brown justify-center gap-4 hvr-bounce-to-right  overflow-hidden py-4 text-xl my-1 px-4 hvr-bounce-to-right-brown`}
        >
          <p className="font-regular">Download the brochure</p>

          <img src={DownloadIcon} alt="download-icon" />
        </button>
      </a>
    </div>
  );
};
