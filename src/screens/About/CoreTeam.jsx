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

        <div className="team-card-body-orange">
          <p className="card-text-para font-regular">
            Team is the core strength that builds a dream into a mission, and a
            mission into revolution. Our incredibly talented team works
            tirelessly to ease up every dairy farmer's life with digitalization
            and optimize cattle management and breeding with innovative
            solutions. Each member of our team brings different skillset to the
            table, and their ideologies aligned for one single vision is what
            makes us best in the business.
          </p>
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
            free to{" "}
            <span style={{ color: "#B55219" }}>
              <a href="/contact">contact us </a>
            </span>
            , our customer support will be happy to help you.
          </p>
        </div>
      </div>
    </div>
  );
};
