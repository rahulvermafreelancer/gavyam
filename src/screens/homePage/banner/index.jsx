import "./index.css";
import { MasterBtn } from "../../../components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

const Banner = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000
  };
  return (
    <section className="bg-earth bg-top-align">
      <div className="banner-main-class-container">
        <div className="banner-text-conatiner">
          <div className="banner-text-background-container">
            <div className="banner-container-text-align">
              <h1 className="banner-text-heading">
                INCREASE DAIRY PRODUCTION,
                <br />
                <span className="text-white"> WITHOUT RISK OR ERRORS!</span>
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
