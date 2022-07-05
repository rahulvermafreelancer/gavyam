import React from "react";
import {
  CommonBanner,
  DetailContainer,
  DownloadGuid,
  ToolsDetails
} from "../../components";
import TopImage from "../../assets/dte/dte-tool.svg";
import DownImage from "../../assets/bolus/bolus-down.svg";
import { Unique } from "./Unique";

export const Dte = () => {
  return (
    <>
      <CommonBanner
        sectionName="Product"
        pageName="Bolus"
        pageDetails=""
        pageTitle="DIGITAL THAWING EQUIPMENT"
      />
      <DetailContainer
        title="Efficient sperm thawing unit for artificial insemination"
        subpara="digiGAI Digital Thawing Equipment is the most effective way to liquefy frozen or sex-sorted semen while artificially inseminating a cow or cattle. It equips users to set the correct temperature for the thawing process and also displays live temperature readings to minimize errors during semen insemination."
      />
      <ToolsDetails
        title="Features"
        topImage={TopImage}
        downImage={DownImage}
      />
      <Unique />
      <div
        style={{
          width: "50%",
          margin: "0 auto",
          display: "flex",
          justifyContent: "center"
        }}
      >
        <DownloadGuid />
      </div>
    </>
  );
};
