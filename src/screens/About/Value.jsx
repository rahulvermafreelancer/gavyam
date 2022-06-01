import React from "react";
import "./index.css";

export const Value = () => {
  return (
    <div className="easy-value-main">
      <h1 className="easy-title">5 Things we value</h1>
      <div className="easy-value-card">
        <div className="easy-value-card-body">
          <p>Respect all living beings</p>
          <div className="">
            <img src="./assets/about/l1.png" alt="easy value" />
          </div>
        </div>
        <div>
          <p>Transparency & honesty</p>
          <img src="./assets/about/l2.png" alt="easy value" />
        </div>

        <div>
          <p>Welfare of cattle</p>
          <img src="./assets/about/l3.png" alt="easy value" />
        </div>
        <div>
          <p>Simplicity and accessibility</p>
          <img src="./assets/about/l4.png" alt="easy value" />
        </div>
        <div>
          <p>Thrive with innovation</p>
          <img src="./assets/about/l5.png" alt="easy value" />
        </div>
      </div>
    </div>
  );
};
