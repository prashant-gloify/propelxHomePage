import React from "react";
import './Banner.css';

function Banner() {
  return <div className="banner-container">
    <div className="container bannerContent">
        <div className="row">
            <div className="col-6">
                <h1 className="bannerTitle">Unlock your access to alternative investments</h1>
                <p className="bannerText">Invest with us to leave a legacy, diversify your portfolio
and potentially earn great returns. Co-invest alongside
top tier VCs and institutions. Minimums starting at $5,000.</p>
                <div className="bannerLinksContainer">
                    <ul className="bannerLinksUl">
                        <li>
                            <a href="#" className="bannerLink">Startups.</a>
                        </li>
                        <li>
                            <a href="#" className="bannerLink">Venture Funds.</a>
                        </li>
                        <li>
                            <a href="#" className="bannerLink">Hedge Funds.</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="d-flex">
                        <input className="emailInput" placeholder="Your Email Address"></input>
                        <button className="buttonColor emailButton ms-2">Get Started</button>
                    </div>
                </div>
                <div>
                    <p className="bannerTextBottom">
                        Investments on Propel(x) are private placements which are high risk, illiquid, and bear the risk of partial or complete loss of invested capital. Please review the <a className="link" href="#">private placement risk factors statement</a> for investments on Propel(x). 
                    </p>
                </div>
            </div>
            <div className="col-6">

            </div>
        </div>
    </div>
  </div>;
}

export default Banner;
