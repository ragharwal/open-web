import React from "react";
import logo from "../../assets/icons/logo.png";
import Auth from "../../Authentication/Auth";

const Navbar = ({ user, setUser }) => {
  return (
    <header className="open-header landing-header">
      <div className="container">
        {/* <!-- NAVBAR START --> */}

        <nav className="navbar navbar-expand-lg navbar-light open-navbar">
          <a className="navbar-brand" href="index.html">
            <img
              style={{ height: "110px", width: "120px" }}
              src={logo}
              alt="Open Community Logo"
            />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">
                  Contact Us
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/projects">
                  Projects
                </a>
              </li>
            </ul>
            <ul className="navbar-nav mt-2 mt-lg-0">
              <li className="nav-item mr-2 mb-3 mb-lg-0">
                {user ? <p>Welcome {user.displayName}</p> : ""}
              </li>
              <li className="nav-item">
                <Auth setUser={setUser} />
              </li>
            </ul>
          </div>
        </nav>

        {/* <!-- NAVBAR ENDS --> */}
      </div>
    </header>
  );
};

export default Navbar;
