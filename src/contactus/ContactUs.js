import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const ContactUs = () => {
  return (
    <div>
      <div className="container">
        <section className="page-header">
          <h1>Contact Us</h1>
          <Breadcrumb>
            <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
            <Breadcrumb.Item active>Contact Us</Breadcrumb.Item>
          </Breadcrumb>
        </section>
      </div>

      <div className="container">
        <div className="row mb-5">
          <div className="col-md-5 mb-5 pl-md-5">
            <div className="mb-5">
              <h3 className="mb-4">Contact</h3>
              <ul className="list-unstyled">
                <li className="d-block">
                  <span className="d-block">Address:</span>
                  <span>
                    UPES - University of Petroleum and Energy Studies, Bidholi,
                    via Prem Nagar, Dehradun, Uttarakhand 248007
                  </span>
                </li>
                <br />
                <li className="d-block">
                  <span className="d-block">Email:</span>
                  <span>upesopen@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mapouter">
            <div className="gmap_canvas">
              <iframe
                width="550"
                height="350"
                id="gmap_canvas"
                src={
                  "https://maps.google.com/maps?q=upes&t=&z=13&ie=UTF8&iwloc=&output=embed"
                }
                frameborder="0"
                scrolling="no"
                marginheight="0"
                marginwidth="0"
              />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
