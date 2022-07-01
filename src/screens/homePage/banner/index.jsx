import "./index.css";
import { MasterBtn } from "../../../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import "@splidejs/splide/css";
import "./index.css";
// import "@splidejs/splide/css/core";

const Banner = () => {
  // const splideOptions = {
  //   type: "loop",
  //   perPage: 1,
  //   pagination: true,
  //   drag: true,
  //   autoplay: true,
  //   interval: 2000,
  //   direction: "ttb",
  //   height: "100%",
  //   arrows: false,
  //   paginationDirection: "ttb"
  // };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000
  };
  return (
    <section className=" bg-earth font-regular">
      {/* <section className="w-11/12  d 2xl:w-10/12 mx-auto  pt-6 flex flex-wrap  items-center  justify-around  gap-x-10 banner-master  overflow-visible">
        <div
          // className="bor text-wrapper  flex-1 basis-[30rem] flex  flex-col flex-nowrap items-start justify-around gap-4 pt-1 "
          className="bor text-wrapper"
        >
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
      </section> */}

      <div className="banner-main-class-container">
        <div className="banner-text-conatiner">
          <div className="banner-text-background-container">
            <div className="banner-container-text-align">
              <h1 className="font-regular font-bold banner-text-heading">
                INCREASE DAIRY PRODUCTION,
                <br />
                <span className="text-white"> WITHOUT RISK</span>
                <br />
                <span className="text-white"> OR ERRORS!</span>
              </h1>
              <p className="font-regular banner-para-text">
                Digitizing the Herd Monitoring and Breeding System to Enhance
                Cattle Management/ Animal Welfare / Herd Efficiency / Farm
                Productivity
              </p>
            </div>
          </div>
          <div className="about-button">
            <a href="/about">
              <MasterBtn bgColor="brown" text="About Us" />
            </a>
          </div>
        </div>

        <div className="banner-image-container">
          <div className="banner-border-design">
            <Slider {...settings} className="sliderclass">
              <div className="space-banner">
                <div className="banner-design">
                  <img
                    src="assets/cow.png"
                    alt="banner-design"
                    className="image-size"
                  />
                </div>
              </div>

              <div>
                <div className="banner-design">
                  <img
                    src="assets/cow.png"
                    alt="banner-design"
                    className="image-size"
                  />
                </div>
              </div>
              <div>
                <div className="banner-design">
                  <img
                    src="assets/cow.png"
                    alt="banner-design"
                    className="image-size"
                  />
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
