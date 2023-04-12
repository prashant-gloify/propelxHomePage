import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const portfolio = [
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/Varo-Logo-Propelx.jpeg",
      title: "Varo",
      date: "Series E, 2021",
      type: "Digital Bank",
      note_investor: ["SoftBank", "Tiger Global"],
      footer: "BlackRock",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/Shield-AI-Logo-Propelx.jpeg",
      title: "Shield AI",
      date: "Series Seed, 2015",
      type: "AI Drone Pilot Software",
      note_investor: ["Andreessen Horowitz (A16Z)"],
      footer: "Founder Collective",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/04/Moquality.webp",
      title: "MoQuality",
      date: "Series Seed, 2018",
      type: "AI mobile testing",
      note_investor: [],
      footer: "Acquired by Snapchat, 2020",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/Aperio-Logo-Propelx.jpeg",
      title: "Aperio",
      date: "Series Seed, 2018",
      type: "Industrial data integrity",
      note_investor: ['National Grid Partners'],
      footer: "Data Point Capital",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/BlockApps-Logo-Propelx.jpeg",
      title: "BlockApps",
      date: "Series Seed, 2018",
      type: "Enterprise Blockchain",
      note_investor: ['Morgan Creek', 'Liberty City Capital'],
      footer: "ConsenSys Ventures",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/Brelyon-Logo-Propelx.jpeg",
      title: "BlockApps",
      date: "Series Seed, 2018",
      type: "Enterprise Blockchain",
      note_investor: ['Morgan Creek', 'Liberty City Capital'],
      footer: "ConsenSys Ventures",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/ChEmpower-Corporation-Logo-Propelx.png",
      title: "BlockApps",
      date: "Series Seed, 2018",
      type: "Enterprise Blockchain",
      note_investor: ['Morgan Creek', 'Liberty City Capital'],
      footer: "ConsenSys Ventures",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/04/Drastin.webp",
      title: "BlockApps",
      date: "Series Seed, 2018",
      type: "Enterprise Blockchain",
      note_investor: ['Morgan Creek', 'Liberty City Capital'],
      footer: "ConsenSys Ventures",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/04/Intellivision.jpeg",
      title: "BlockApps",
      date: "Series Seed, 2018",
      type: "Enterprise Blockchain",
      note_investor: ['Morgan Creek', 'Liberty City Capital'],
      footer: "ConsenSys Ventures",
    },
  ];

  return (
    <div className="container my-5">
      <div className="pt-4">
        <h1 className="title2 text-center">
          Portfolio - Early, Growth & Late Stage Startups
        </h1>
      </div>
      <div className="text-center">
        <p className="fs-4 mt-3">
          Listed alongside notable independent investors.
        </p>
        <p className="textSmall text-center mt-1">
          Notable investors did not invest through Propel(x) or Hubble
          Investments.
        </p>
      </div>
      <div className="container py-5">
        <div className="row g-4">
          {portfolio.map((item) => {
            return (
              <div className="col-4">
                <div className="card p-3 d-flex flex-row h-100">
                  <div className="image-container">
                    <img className="image-card" src={item.src} alt="image" />
                  </div>
                  <div className="card-body py-0">
                    <h6 className="fw-bold">{item.title}</h6>
                    <p className="card-date mt-3">{item.date}</p>
                    <p>{item.type}</p>
                    {item.note_investor.length > 0 ? (
                      <>
                        <p className="fst-italic textSmall">Notable Investors Include:</p>
                        <p className="fst-italic textSmall">
                          {item.note_investor.join(", ")}
                        </p>
                      </>
                    ) : null}
										<p className="fst-italic textSmall">{item.footer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
