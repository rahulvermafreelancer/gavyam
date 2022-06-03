import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";

export const Coursal = ({ heading }) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <>
      <div className="title-section">
        <p className="slider-head-para-text">{heading}</p>
        <div className="arrows-section">
          <div className="left-arrow-section">
            <img src='./assets/left.png' alt="arrows"/>
          </div>
          <div className="right-arrow-section">
            <img src='./assets/right.png' alt="arrows"/>
          </div>
        </div>
      </div>

      <Slider {...settings} className="sliderclass">
        <div>
          <div className="slider-card-main">
            <div className="slider-image-section">
              <img src="./assets/image-3.png" alt="cow" />
            </div>
            <div className="shop-section">
              <p className="shop-text">Shop</p>
            </div>
            <div className="card-slick-heading">
              <h1 className="heading-card-slider">
                Lorem ipsum dolor sit amet, Consectetur?
              </h1>
              <p className="slider-card-para">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                <span style={{ fontWeight: "bold" }}>READ MORE</span>
              </p>
            </div>
            <div className="writer-main-card">
              <div className="writer-card-image">
                <img
                  src="./assets/about/test.jfif"
                  alt="writer"
                  style={{ borderRadius: 25 }}
                />
              </div>
              <div className="writer-desc-card">
                <p className="writer-name-text-card">By : Name here</p>
                <p style={{ opacity: "0.7", paddingLeft: 15 }}>Just now</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="slider-card-main">
            <div className="slider-image-section">
              <img src="./assets/image-3.png" alt="cow" />
            </div>
            <div className="shop-section">
              <p className="shop-text">Shop</p>
            </div>
            <div className="card-slick-heading">
              <h1 className="heading-card-slider">
                Lorem ipsum dolor sit amet, Consectetur?
              </h1>
              <p className="slider-card-para">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                <span style={{ fontWeight: "bold" }}>READ MORE</span>
              </p>
            </div>
            <div className="writer-main-card">
              <div className="writer-card-image">
                <img
                  src="./assets/about/test.jfif"
                  alt="writer"
                  style={{ borderRadius: 25 }}
                />
              </div>
              <div className="writer-desc-card">
                <p className="writer-name-text-card">By : Name here</p>
                <p style={{ opacity: "0.7", paddingLeft: 15 }}>Just now</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="slider-card-main">
            <div className="slider-image-section">
              <img src="./assets/image-3.png" alt="cow" />
            </div>
            <div className="shop-section">
              <p className="shop-text">Shop</p>
            </div>
            <div className="card-slick-heading">
              <h1 className="heading-card-slider">
                Lorem ipsum dolor sit amet, Consectetur?
              </h1>
              <p className="slider-card-para">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                <span style={{ fontWeight: "bold" }}>READ MORE</span>
              </p>
            </div>
            <div className="writer-main-card">
              <div className="writer-card-image">
                <img
                  src="./assets/about/test.jfif"
                  alt="writer"
                  style={{ borderRadius: 25 }}
                />
              </div>
              <div className="writer-desc-card">
                <p className="writer-name-text-card">By : Name here</p>
                <p style={{ opacity: "0.7", paddingLeft: 15 }}>Just now</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="slider-card-main">
            <div className="slider-image-section">
              <img src="./assets/image-3.png" alt="cow" />
            </div>
            <div className="shop-section">
              <p className="shop-text">Shop</p>
            </div>
            <div className="card-slick-heading">
              <h1 className="heading-card-slider">
                Lorem ipsum dolor sit amet, Consectetur?
              </h1>
              <p className="slider-card-para">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem…
                <span style={{ fontWeight: "bold" }}>READ MORE</span>
              </p>
            </div>
            <div className="writer-main-card">
              <div className="writer-card-image">
                <img
                  src="./assets/about/test.jfif"
                  alt="writer"
                  style={{ borderRadius: 25 }}
                />
              </div>
              <div className="writer-desc-card">
                <p className="writer-name-text-card">By : Name here</p>
                <p style={{ opacity: "0.7", paddingLeft: 15 }}>Just now</p>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </>
  );
};
