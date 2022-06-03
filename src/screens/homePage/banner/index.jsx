import "./index.css";
import { MasterBtn } from "../../../components";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import "./index.css";

import "@splidejs/splide/css/core";
import dummy from "./cowImg.png";

const Banner = () => {
  const splideOptions = {
    type: "loop",
    perPage: 1,
    pagination: true,
    drag: true,
    autoplay: true,
    interval: 2000,
    direction: "ttb",
    height: "100%",
    arrows: false,
    paginationDirection: "ttb"
  };

  return (
    <section className=" bg-earth font-regular">
      <section className=" w-11/12  d 2xl:w-10/12 mx-auto  pt-6 flex flex-wrap  items-center  justify-around  gap-x-10 banner-master  overflow-visible">
        <div className="text-wrapper  flex-1 basis-[30rem] flex  flex-col flex-nowrap items-start justify-around gap-4 pt-1 ">
          <div className="bg-wrapper flex  flex-col flex-nowrap items-start justify-around gap-3 md:pl-16 pb-2 ">
            <h1 className="blade-title md:w-10/12  heading-text">
              INCREASE DAIRY PRODUCTION,
            </h1>
            <h1 className="blade-title text-white font-extrabold md:w-10/12 ">
              WITHOUT RISK OR ERRORS!
            </h1>
            <span className="font-subtitle para-text text-white md:w-8/12 py-3 ">
              Digitizing the Herd Monitoring and Breeding System to Enhance
              Cattle Management/ Animal Welfare / Herd Efficiency / Farm
              Productivity
            </span>
          </div>
          <div className="my-9 md:pl-16 ">
            <MasterBtn bgColor="brown" text="About Us" />
          </div>
        </div>

        <div className=" mx-3 w-11/12 cuatom-banner img-wrapper grow-0 shrink basis-[40rem] flex items-start md:items-end justify-center px-4 overflow-x-hidden ">
          <Splide
            options={splideOptions}
            className="font-regular w-9/12  md:w-10/12 2xl:w-9/12 md:mx-auto max-h-min rounded-3xl max-w-screen-2xl mx-2 banner-splide h-[30rem] md:h-[45rem]   2xl:h-[55rem]"
          >
            <SplideSlide className="custom-banner">
              <img src={dummy} alt="banner" />
            </SplideSlide>
            <SplideSlide className="custom-banner">
              <img src={dummy} alt="banner" />
            </SplideSlide>
            <SplideSlide className="custom-banner">
              <img src={dummy} alt="banner" />
            </SplideSlide>
          </Splide>
        </div>
      </section>
    </section>
  );
};

export default Banner;

/*

<div className=" flex-1 basis-[20rem] flex flex-col justify-start  px-4 md:px-8 lg:px-14  h-[30rem]  xl:h-[35rem] py-6 banner_text_wrapper ">
          <h1
            className="font-title text-white  max-w-xl "
            style={{ fontWeight: "bolder" }}
          >
            <span className="text-brown">INCREASE DAIRY PRODUCTION,</span>{" "}
            <br /> WITHOUT RISK OR ERRORS!
          </h1>
          <span className="font-subtitle text-white pt-6 pb-12  max-w-md">
            Digitizing the Herd Monitoring and Breeding System to Enhance Cattle
            Management/ Animal Welfare / Herd Efficiency / Farm Productivity
          </span>
          <div className="">
            <MasterBtn bgColor="brown" text="Read More" />
          </div>
        </div>
        <div className="flex-1 basis-[2rem] d  img-wrapper h-[30rem] px-4 lg:px-10 rounded-br-[5rem] xl:h-[35rem] relative   ">
          <img src={hero} alt="" className=" w-96 my-24" />
        </div>



*/
