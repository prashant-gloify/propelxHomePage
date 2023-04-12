import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="container d-flex justify-content-between align-middle">
        <div className="">
          <div class="row">
            <div class="navItem col">
              <div className="logo-container">
                <img className="logo" src={'https://i2f9g7w7.rocketcdn.me/wp-content/uploads/2020/09/Screen-Shot-2022-04-25-at-1.17.14-PM.png'} alt="logo" />
              </div>
            </div>
            <div class="navItem col">
              <p className="navLinkText">
                For Investor
              </p>
            </div>
            <div class="navItem col">
              <p className="navLinkText">
                For Startups
              </p>
            </div>
            <div class="navItem col">
              <p className="navLinkText">
                Insights{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </p>
            </div>
            <div class="navItem col">
              <p className="navLinkText">
                About{" "}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                  <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="navButtonItem d-flex justify-content-end">
            <button className="buttonText">Investor Login</button>
            <button className="buttonColor">Investor Login</button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
