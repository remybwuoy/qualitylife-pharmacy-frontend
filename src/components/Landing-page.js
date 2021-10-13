import React from 'react';
import Header from './Header';
import Footer from './Footer';


class Landing extends React.Component {
 render(){
     return(
        <div>
        {/* <!-- top header --> */}
        <div class="container-fluid p-0 m-0">
            <div class="top-header">
                <div class="row align-items-center text-center m-0 p-0">
                    <div class="col-md-3 col-sm-4 my-3">
                      <img src="./assets/images/top-logo.svg" alt="logo"/>
                    </div>
                    <div class="col-md-6 col-sm-4 my-3">
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search for a product or category" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></span>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-4 my-3 customer-service-number">
                      <div class="row align-items-center  justify-content-center text-center">
                        <div class="col-2 text-end">
                            <i class="fa fa-phone-alt fa-2x"></i>
                        </div>
                        <div class="col-9 text-start">
                            <p class="m-0 p-0">Customer Service<br/>+00 000 00000</p>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- nav bar --> */}
        <div class="container-fluid p-0 m-0">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid px-4">
                    <a class="navbar-brand" href="#">
                        <i class="fa fa-home text-white"></i>
                    </a>
                  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
                  <div class="collapse navbar-collapse">
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
                        <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user">&nbsp;</i>&emsp;Account
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"/></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                    </ul>
                  </div>
                </div>
            </nav>
        </div>

        {/* <!-- carosel --> */}
        <div class="container-fluid page-slider" style={{height: '300px'}}>
            slider comes here

        </div>

        {/* <!-- our service --> */}
        <div class="container our-other-service">
            <div class="title-text text-center mb-4">
                <h4 class="">Our Other Services</h4>
                <p class="">
                    Quality Life Sundry Shop also offers a number of additional services alongside Direct prescriptions.You can shop for everyday pharmacy items or send us existing private prescriptions you have. We can also assess to see if youre suitable for a limited range of prescriptions medications via our online doctor services.
                </p>
            </div>
            <div class="row text-center mt-4">
                <div class="col-md-4 align-items-stretch">
                    <div class="mx-auto icon-parent-div">
                        <div class="mx-auto icon-div">
                            <img src="./assets/images/doc-icon.svg"  width="70%" style={{margintop:'10%'}} alt="icon"/>
                        </div>
                        <p>Online Doctor</p>
                        <p>Our Online Doctor allows people to complete consultations online to assess suitability for medicines</p>
                        <button class="btn btn-rounded">
                            Get Started
                        </button>
                    </div>
                </div>
                <div class="col-md-4 align-items-stretch">
                    <div class="mx-auto icon-parent-div">
                        <div class="mx-auto icon-div">
                            <img src="./assets/images/shop-icon.svg" width="45%" style={{margintop: '20%'}} alt="icon"/>
                        </div>
                        <p>Shop</p>
                        <p>We stock a wide range of pharmacy products. Why not pickup the essentials while you use our other services</p>
                        <button class="btn btn-rounded">
                            Shop
                        </button>
                    </div>
                </div>
                <div class="col-md-4 align-items-stretch">
                    <div class="mx-auto icon-parent-div">
                         <div class="mx-auto icon-div">
                        <img src="./assets/images/crucible.svg" width="50%" style={{margintop: '15%'}} alt="icon" />
                        </div>
                        <p>Private Prescriptions</p>
                        <p>Already have a private prescription? Send it in to us and we can save you money on high price on expensive treatments</p>
                        <button class="btn btn-rounded">
                            View Online Doctor
                        </button>
                    </div>
                   
                </div>
            </div>

        </div>
        <Footer />

        </div>
     );

     }
}

export default Landing;