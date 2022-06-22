import React from "react";
import {
  CommonBanner,
  DetailContainer,
  ImageSection,
  DownloadGuid,
  ToolsDetails
} from "../../components";
import "./index.css";
import CowImage from "../../assets/bolus/cow.svg";
import TopImage from "../../assets/bolus/bolous-tool.svg";
import DownImage from "../../assets/bolus/bolus-down.svg";
import Deskone from "../../assets/bolus/desk-1.png";
import Desktwo from "../../assets/bolus/desk-2.png";

const DATA = [
  {
    id: 1,
    title: "Instant financial benefits",
    paratext:
      "Bolus helps you lower the mortality rates and reduce the economic impact of non-fatal diseases",
    image: "/assets/manage/c1.svg"
  },
  {
    id: 2,
    title: "Keep diseases at bay",
    paratext:
      "The advanced technology identifies & helps prevents illness before the infection spreads",
    image: "/assets/manage/c2.svg"
  },
  {
    id: 3,
    title: "Not just a tracking device",
    paratext:
      "It is a multi-use bolus that observes environmental factors, the effect of feed quality, and other stress-inducing factors",
    image: "/assets/manage/c3.svg"
  },
  {
    id: 4,
    title: "Longer battery life with a better memory span",
    paratext:
      "It offers a long 5-year battery lifespan and prevents data gaps resulting in increased accuracy",
    image: "/assets/manage/c4.svg"
  },
  {
    id: 5,
    title: "Data available at a click",
    paratext:
      "Information can be accessed by multiple devices, and in case of data loss, you can retrieve it from a local PC",
    image: "/assets/manage/c5.svg"
  },
  {
    id: 6,
    title: "Zero guesswork",
    paratext:
      "Algorithms provide accurate information and eliminate fluctuations by establishing a temperature baseline",
    image: "/assets/manage/c6.svg"
  }
];

export const Bolus = () => {
  return (
    <>
      <CommonBanner
        sectionName="Product"
        pageName="Bolus"
        pageDetails="Herd informatics rumen bolus is a revolutionary solution for the dairy industry"
        pageTitle="BOLUS"
      />
      <DetailContainer
        title="Remote Herd Health Management System"
        paragraph="Herd informatics rumen bolus is a revolutionary solution for the dairy industry, designed to provide precise temperature measurements and monitor cattle health in real-time."
        subpara="With Bolus, you can manage your dairy farming seamlessly with accurate and reliable information transmitted automatically to your desktop or mobile device."
      />
      <ImageSection
        title="Get instant cattle health data"
        sectionpara="Herd health data is transmitted remotely to any handheld device via a gateway and cloud support. This enables you to make informed decisions related to cattle health management and livestock breeding."
        setionImage={CowImage}
      />
      <ToolsDetails
        title="Built to ease herd health management"
        topImage={TopImage}
        downImage={DownImage}
      />

      <div className="dashborad-main">
        <div className="dashboard-heading-section">
          <h1 className="dashboard-title font-regular font-bold">
            Cattle Management Portal
          </h1>
          <p className="dasboard-para font-regular">
            A one-stop portal that helps dairy farmers to manage their cattle's
            health data efficiently at any time from anywhere.
          </p>
        </div>
        <div className="desh-section-one">
          <img src={Deskone} alt="desk-1" width="60%" />
        </div>
        <div className="desh-section-two">
          <img src={Desktwo} alt="desk-1" width="60%" />
        </div>
      </div>

      <div className="management-section-main">
        <div className="management-head">
          <h1 className="heading-management font-regular font-bold">
            The Future of Cattle Health Management is here!
          </h1>
        </div>
        <div className="bolus-management-card-main">
          {DATA.map((item) => (
            <div key={item.id} className="bolus-management-card">
              <div className="card-icons">
                <img src={item.image} alt="icon" />
              </div>
              <div className="text-area-card-management">
                <h1 className="management-title font-regular font-bold">
                  {item.title}
                </h1>
                <p className="card-para font-regular">{item.paratext}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <DownloadGuid />
    </>
  );
};
