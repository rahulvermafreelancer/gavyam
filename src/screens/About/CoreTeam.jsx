import React from "react";
import "./index.css";

export const CoreTeam = () => {
  return (
    <div className="core-team-main">
      <h1 className="core-team-heading font-regular font-bold">Core Team</h1>

      <div className="team-card-main">
        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text font-regular">Director</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text font-regular">Nithya Nair</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text font-regular">Director</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text font-regular">Nithya Nair</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>
        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text font-regular">Director</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text font-regular">Dipen Parmar</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text font-regular">CTO</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text font-regular">Tejas Vaghela</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text font-regular">COO</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text font-regular">Sreekanth Naidu</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="team-card-body">
          <h1 className="question-heading font-regular font-bold">
            Have a Question?
          </h1>
          <p className="question-para font-regular">
            In case you haven't found the answer to your question, please feel
            free to
            <span style={{ color: "#B55219" }}>
              <a href="/contact" style={{ textDecoration: "none" }}>
                contact us
              </a>
            </span>
            , our customer support will be happy to help you.
          </p>
        </div>
      </div>
    </div>
  );
};
