import React from "react";
import Breadcrumb from "react-bootstrap/Breadcrumb";

const Register = () => {
  return (
    <div>
      <main className="page-about">
        <div className="container">
          <section className="page-header">
            <h1>Register For EventName</h1>
            <Breadcrumb>
              <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Register</Breadcrumb.Item>
            </Breadcrumb>
          </section>
        </div>

        <section className="py-5 mb-5">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="d-flex flex-wrap justify-content-center">
                  <iframe
                    src={
                      "https://docs.google.com/forms/d/e/1FAIpQLScmqxveWYuWMaT0AVaRywpKEEZS6O-3hvvO1xRSD9KQP-mENw/viewform?embedded=true"
                    }
                    title="google-doc"
                    width="640"
                    height="600"
                    frameborder="0"
                    marginheight="0"
                    marginwidth="0"
                  >
                    Loading…
                  </iframe>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Register;
