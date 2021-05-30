import React from "react";
import educate from "../images/educate.png";
import contribute from "../images/contribute.png";
import adopt from "../images/adopt.png";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const AboutUs = () => {
  return (
    <main className="page-about">
      <div className="container">
        <section className="page-header">
          <h1>About Us</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>About Us</Breadcrumb.Item>
          </Breadcrumb>
        </section>
        <section className="open-page-section pt-0">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 pr-lg-0">
              <h2 className="about-section-one-title">Aware</h2>
              <div className="about-section-one-content">
                <p>
                  We aim at spreading awareness about the advantage of using
                  Open Source softwares over conventional proprietary softwares.
                </p>
              </div>
            </div>
            <div className="col-md-6 pl-lg-0 d-flex align-items-center align-items-lg-end">
              <img src={educate} alt="about" className="img-fluid" />
            </div>
          </div>
        </section>
        <section className="open-page-section">
          <div className="row">
            <div className="col-md-6 mb-5 mb-md-0">
              <img src={adopt} alt="about 2" className="img-fluid" />
            </div>
            <div className="col-md-6">
              <h2 className="about-section-two-title">Adopt</h2>
              <div className="about-section-two-content">
                <p>
                  Spreading awareness is futile until and unless we motivate
                  people to adopt the prevailing Open Source softwares in their
                  work environment
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="open-page-section pt-0">
          <div className="row">
            <div className="col-md-6 mb-4 mb-md-0 pr-lg-0">
              <h2 className="about-section-one-title">Contribute</h2>
              <div className="about-section-one-content">
                <p>
                  The whole concept of Open Source revolves around community
                  which uses it and contributing to the community is always a
                  matter of prestige.
                </p>
              </div>
            </div>
            <div className="col-md-6 pl-lg-0 d-flex align-items-center align-items-lg-end">
              <img src={contribute} alt="about" className="img-fluid" />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AboutUs;
