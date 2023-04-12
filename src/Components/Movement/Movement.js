import React from "react";
import "./Movement.css";

function Movement() {
  return (
    <div className="movementContainer">
      <div className="container">
        <h1 className="title2 text-center mb-5">Join the Movement</h1>
        <div className="row text-center" style={{ gap: '4rem' }}>
          <div className="col">
            <div>
              <h1 className="title2">3,500+</h1>
              <p className="testTitle">Accredited Investor Members</p>
            </div>
          </div>
          <div className="col">
            <div>
              <h1 className="title2">$73,000</h1>
              <p className="testTitle">Average Amount Invested Per Investor</p>
              <div className="mt-2">
                <p className="textSmall">
                  Indicates the average amount invested per investing member who
                  invested in 2021. Past performance is not indicative of future
                  results.
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div>
              <h1 className="title2">$2+ Billion</h1>
              <p className="testTitle">Cumulative Raised</p>
              <div className="mt-2">
                <p className="textSmall">
                  Cumulative raised refers to the total amount raised by
                  featured startups on and off Propel(x).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Movement;
