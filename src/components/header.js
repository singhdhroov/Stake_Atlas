import React from "react";
import { ReactDOM } from "react-dom";

function Header() {
  return (
    <div className="header">
      <nav className="sticky-top navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="https://s3-recruiting.cdn.greenhouse.io/external_greenhouse_job_boards/logos/400/674/900/original/Cars_and_Bids.png?1628196280"
              alt=""
              width="180"
              height="80"
            />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active ligh link"
                  aria-current="page"
                  href="#"
                >
                  Auctions
                </a>
              </li>
              <li className="nav-item highlight ">
                <a className="nav-link high link" href="#">
                  Sell a Car
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ligh link" href="#">
                  What’s Cars & Bids?
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link ligh link" href="#">
                  Daily Email
                </a>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="&#xf002;     Search for
                cars (ex. BMW, Audi, Ford)"
                aria-label="Search"
              />
            </form>
            <button className="btn btn-outline-success" type="Search">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
export default Header;
