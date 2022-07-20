import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./index.css";
import { db } from "../../firebase";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

export const Coursal = ({ heading, db_collection }) => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const articleRef = collection(db, `${db_collection}`);
    const q = query(articleRef, orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      const articles = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNews(articles);
    });
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <>
      <div className="title-section">
        <p className="slider-head-para-text font-regular font-bold ">
          {heading}
        </p>
        <div className="arrows-section">
          <div className="left-arrow-section">
            <img src="./assets/left.png" alt="arrows" />
          </div>
          <div className="right-arrow-section">
            <img src="./assets/right.png" alt="arrows" />
          </div>
        </div>
      </div>

      <Slider {...settings} className="sliderclass">
        {news.length === 0 ? (
          <p>No Data Found!!</p>
        ) : (
          news.map(
            ({
              id,
              title,
              description,
              imageUrl,
              createdAt,
              createdBy,
              userId,
            }) => (
              <div>
                <div className="slider-card-main" key={id}>
                  <div className="slider-image-section">
                    <img src={imageUrl} alt="cow"  style={{borderRadius: '5%'}}/>
                  </div>
                  <div className="shop-section">
                    <p className="shop-text font-regular">Shop</p>
                  </div>
                  <div className="card-slick-heading">
                    <h1 className="heading-card-slider font-regular font-bold">
                      {title}
                    </h1>
                    <p className="slider-card-para font-regular">
                      {description}
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
                      <p className="writer-name-text-card font-regular">
                        By : {createdBy}
                      </p>
                      <p style={{ opacity: "0.7", paddingLeft: 15 }}>
                      {createdAt.toDate().toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )}

        {/* <div>
          <div className="slider-card-main">
            <div className="slider-image-section">
              <img src="./assets/image-3.png" alt="cow" />
            </div>
            <div className="shop-section">
              <p className="shop-text font-regular">Shop</p>
            </div>
            <div className="card-slick-heading">
              <h1 className="heading-card-slider font-regular font-bold">
                Lorem ipsum dolor sit amet, Consectetur?
              </h1>
              <p className="slider-card-para font-regular ">
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
                <p className="writer-name-text-card font-regular">By : Name here</p>
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
              <p className="shop-text font-regular">Shop</p>
            </div>
            <div className="card-slick-heading">
              <h1 className="heading-card-slider font-regular font-bold">
                Lorem ipsum dolor sit amet, Consectetur?
              </h1>
              <p className="slider-card-para font-regular">
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
                <p className="writer-name-text-card font-regular">By : Name here</p>
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
              <p className="shop-text font-regular">Shop</p>
            </div>
            <div className="card-slick-heading">
              <h1 className="heading-card-slider font-regular font-bold">
                Lorem ipsum dolor sit amet, Consectetur?
              </h1>
              <p className="slider-card-para font-regular">
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
                <p className="writer-name-text-card font-regular">By : Name here</p>
                <p style={{ opacity: "0.7", paddingLeft: 15 }}>Just now</p>
              </div>
            </div>
          </div>
        </div> */}
      </Slider>
    </>
  );
};
