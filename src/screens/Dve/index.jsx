import React from "react";
import {
  CommonBanner,
  DetailContainer,
  ImageSection,
  DownloadGuid,
  ToolsDetails
} from "../../components";
import CowTwo from "../../assets/dve/two.png"
import TopImage from "../../assets/dve/dve-tool.svg";
import DownImage from "../../assets/bolus/bolus-down.svg";

export const Dve = () => {
  return (
    <>
      <CommonBanner
        sectionName="Product"
        pageName="Bolus"
        pageDetails="digiGAI Digital Vet Endoscope is digitizing artificial insemination by offering live streaming and recorded video of the insemination process."
        pageTitle="DIGITAL VET ENDOSCOPE"
      />
      <DetailContainer
        title="Stream the cattle insemination process remotely!"
        paragraph="digiGAI Digital Vet Endoscope is digitizing artificial insemination by offering live streaming and recorded video of the insemination process. Our medical endoscope provides accuracy to the semen deposition process via real-time wireless data streaming."
        subpara="As the medical endoscope provides a visual understanding of the breeding process, it doesn't matter whether the operator is an experienced veterinarian or not. Artificial insemination of cattle can acquire higher accuracy than the conventional semen deposition method with digiGAI’s Digital Vet Endoscope."
      />
      <ImageSection title="Explore the process" setionImage={CowTwo} />

      <ToolsDetails
        title="Features"
        topImage={TopImage}
        downImage={DownImage}
      />
      <DownloadGuid />
    </>
  );
};
