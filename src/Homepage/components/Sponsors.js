import React from "react";
import ibm from "../../images/ibm.png";
import linuxfoundation from "../../images/linuxfoundation.png";
import upes from "../../images/upes.png";
import xebia from "../../images/xebia.png";

const Sponsors = () => {
  return (
    <div>
      <section className="py-5 mb-5">
        <div className="container">
          <h2 className="section-title">Our Sponsors</h2>
          <div className="row">
            <div className="col-lg-12">
              <div
                className="carousel slide landing-sponsor-carousel"
                data-ride="carousel"
              >
                <div className="carousel-inner" role="listbox">
                  <div className="carousel-item active">
                    <div className="d-flex flex-wrap justify-content-center">
                      <div className="sponsors-logo">
                        <img
                          src={linuxfoundation}
                          alt="linuxfoundation"
                          className="img-fluid"
                        />
                      </div>
                      <div className="sponsors-logo">
                        <img src={ibm} alt="ibm" className="img-fluid" />
                      </div>
                      <div className="sponsors-logo">
                        <img src={upes} alt="upes" className="img-fluid" />
                      </div>
                      <div className="sponsors-logo">
                        <img src={xebia} alt="xebia" className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sponsors;
