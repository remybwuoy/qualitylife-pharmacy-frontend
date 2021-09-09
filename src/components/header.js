import React from 'react';
import '../assets/css/header.css';

function Header() {
  return (
      <><div class="container-fluid p-0 m-0">
          <div class="top-header">
              <div class="row align-items-center m-0 p-0">
                  <div class="col-md-5 col-sm-6 my-3">
                      <img src="./images/top-logo.svg"></>
                  </div>

                  <div class="col-md-7 col-sm-6 my-3">
                      <div class="mb-4">
                          <div class="row text-center top-customer-service-info">
                              <div class="col-sm-6 customer-service-number">
                                  <p>
                                      <i class="fa fa-phone-alt fa-1x"></i> <span class="m-0 p-0">Customer Service +00 000 00000</span>
                                  </p>
                              </div>
                              <div class="col-sm-2">
                                  <a class="" href="#">Contact Us</a>
                              </div>
                              <div class="col-sm-2">
                                  <a class="" href="#">Login</a>
                              </div>
                              <div class="col-sm-2">
                                  <button class="text-center btn btn-rounded">
                                      Register
                                  </button>
                              </div>
                          </div>
                      </div>
                      <div class="input-group mb-3">
                          <input type="text" class="form-control" placeholder="Search for a product or category" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                          <span class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></span>
                      </div>

                  </div>

              </div>
          </div>
      </div><div class="container-fluid p-0 m-0 navigationbar">
              <nav class="navbar navbar-expand-lg">
                  <div class="container-fluid px-4">
                      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                      </button>
                      <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <ul class="w-100 navbar-nav nav-pills nav-fill p-0">
                              <li class="nav-item">
                                  <a class="nav-link active" aria-current="page" href="#">Direct Prescription</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Online Doctor</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Shop</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#">Private Prescription</a>
                              </li>
                              <li class="nav-item">
                                  <a class="nav-link" href="#"> 0 items | $ 0.00</a>
                              </li>

                          </ul>
                      </div>
                  </div>
              </nav>
          </div></>

    );
  }

  export default Header;