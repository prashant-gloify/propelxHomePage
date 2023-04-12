import React from "react";
import "./InTheNews.css";

function InTheNews() {
  const logsList = [
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/logo-bw-wsj-300x71.png",
      alt: "the wall street journal",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/09/Barrons-Logo-Edited_SA-300x71.jpeg",
      alt: "barrons",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/logo-bw-forbes-300x71.png",
      alt: "forbs",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/logo-bw-inc-300x71.png",
      alt: "inc",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/logo-bw-entrepreneur-300x71.png",
      alt: "entrepreneur",
    },
    {
      src: "https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2022/05/logo-bw-mitreview-300x71.png",
      alt: "mit",
    },
  ];
  return (
    <div className="container mb-5 pb-5">
      <div>
        <h1 className="title2 text-center">In the News</h1>
      </div>
      <div className="newsImageContainer d-flex justify-content-between">
        {logsList.map((logo) => {
          return (
            <div className="logo">
              <img src={logo.src} alt={logo.alt} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InTheNews;
