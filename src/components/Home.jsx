import React from "react";
import { NavLink } from "react-router-dom";
import reactImg from "../images/react-js-developer.png";
const Home = () => {
  return (
    <>
      <div id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    Grow Your Business With
                    <strong className="brand-name"> Paruhang Angdembe </strong>
                  </h1>
                  <h2 className="my-3">React JS Web Developer</h2>
                  <div className="mt-3">
                    <NavLink to="/blog" className="btn-get-started">
                      Get Started
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 oder-lg-2 header-img">
                  <img
                    src={reactImg}
                    className="img-fluid animated"
                    alt="home"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
