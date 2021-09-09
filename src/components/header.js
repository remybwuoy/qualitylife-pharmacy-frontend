import React from 'react';
import '../assets/css/header.css';

function Header() {
  return (
      <><div className="container-fluid p-0 m-0">
          <div className="top-header">
              <div className="row align-items-center m-0 p-0">
                  <div className="col-md-5 col-sm-6 my-3">
                      <img src="./images/top-logo.svg"></>
                  </div>

                  <div className="col-md-7 col-sm-6 my-3">
                      <div className="mb-4">
                          <div className="row text-center top-customer-service-info">
                              <div className="col-sm-6 customer-service-number">
                                  <p>
                                      <i className="fa fa-phone-alt fa-1x"></i> <span className="m-0 p-0">Customer Service +00 000 00000</span>
                                  </p>
                              </div>
                              <div className="col-sm-2">
                                  <a className="" href="#">Contact Us</a>
                              </div>
                              <div className="col-sm-2">
                                  <a className="" href="#">Login</a>
                              </div>
                              <div className="col-sm-2">
                                  <button className="text-center btn btn-rounded">
                                      Register
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div className="input-group mb-3">
                          <input type="text" className="form-control" placeholder="Search for a product or category" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <span className="input-group-text" id="basic-addon2"><i className="fa fa-search"></i></span>
                      </div>

                  </div>

              </div>
          </div>
      </div><div className="container-fluid p-0 m-0 navigationbar">
              <nav className="navbar navbar-expand-lg">
                  <div className="container-fluid px-4">
                      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span className="navbar-toggler-icon"></span>
                      </button>
                      <div className="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul className="w-100 navbar-nav nav-pills nav-fill p-0">
                              <li className="nav-item">
                                  <a className="nav-link active" aria-current="page" href="#">Direct Prescription</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Online Doctor</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Shop</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#">Private Prescription</a>
                              </li>
                              <li className="nav-item">
                                  <a className="nav-link" href="#"> 0 items | $ 0.00</a>
                              </li>

                          </ul>
                      </div>
                  </div>
              </nav>
          </div></>

    );
  }

  export default Header;