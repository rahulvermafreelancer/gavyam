import React from "react";
import "./index.css";

export const CoreTeam = () => {
  return (
    <div className="core-team-main">
      <h1 className="core-team-heading">Core Team</h1>
      <div className="team-card-main">
        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text">Director</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text">Nithya Nair</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="team-card-body-orange">
          <p className="card-text-para">
            Sed Ut Perspiciatis Unde Omnis Iste Natus Error Sit Voluptatem
            Accusantium Doloremque Laudantium, Totam Rem Aperiam, Eaque Ipsa
            Quae Ab Illo Inventore Veritatis Et Quasi Architecto Beatae Vitae
            Dicta Sunt Explicabo. Nemo Enim Ipsam Voluptatem Quia Voluptas Sit
            Aspernatur Aut Odit Aut Fugit, Sed Quia Consequuntur Magni Dolores
            Eos Qui Ratione Voluptatem Sequi Nesciunt. Neque Porro Quisquam Est,
            Qui Dolorem Ipsum Quia Dolor Sit Amet, Consectetur, Adipisci Velit,
            Sed Quia Non Numquam Eius Modi Tempora Incidunt Ut Labore Et Dolore
            Magnam Aliquam Quaerat Voluptatem. Ut Enim Ad Minima Veniam, Quis
            Nostrum Exercitationem Ullam Corporis Suscipit Laboriosam, Nisi Ut
            Aliquid Ex Ea Commodi Consequatur? Quis Autem Vel Eum Iure
            Reprehenderit Qui In Ea Voluptate Velit Esse Quam Nihil Molestiae
            Consequatur, Vel Illum Qui Dolorem Eum Fugiat Quo Voluptas Nulla
            Pariatur?"
          </p>
        </div>

        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text">Director</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text">Dipen Parmar</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>
      </div>
      <div className="team-card-main">
        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text">CTO</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text">Tejas Vaghela</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="team-card-body">
          <div className="team-card-heading">
            <p className="heading-Text">COO</p>
          </div>
          <div className="team-user-section">
            <img
              src="./assets/about/test.jfif"
              alt="user"
              className="team-image-radius"
            />
          </div>
          <div className="team-user-name">
            <p className="team-name-Text">Sreekanth Naidu</p>
            <div className="icon-section">
              <img src="./assets/about/plus.svg" alt="plus" />
            </div>
          </div>
        </div>

        <div className="team-card-body">
          <h1 className="question-heading">Have a Question?</h1>
          <p className="question-para">
            In case you haven't found the answer to your question, please feel
            free to <span style={{ color: "#B55219" }}>contact us</span>, our
            customer support will be happy to help you.
          </p>
        </div>
      </div>
    </div>
  );
};
