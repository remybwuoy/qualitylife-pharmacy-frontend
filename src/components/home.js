import React from 'react';
import '../assets/css/home.css';

function Home() {
  return (
      <><div class="container-fluid p-0 m-0">
        <div class="top-header" data-component="Top-header">
            <div class="row align-items-center m-0 p-0">
                <div class="col-md-5 col-sm-6 my-3">
                  <img src="./images/top-logo.svg">
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
                        {/* <ul class="nav nav-pills nav-justified">
                            <li class="customer-service-number my-auto">
                                
                            </li>
                            <li class="nav-item">
                              
                            </li>
                            <li class="nav-item">
                              <a class="" href="#">Login</a>
                            </li>
                            <li class="nav-item">
                                <button class="text-center btn btn-rounded">
                                    Register
                                </button>
                            </li>
                        </ul>  */}
                    </div>
                    <div class="input-group mb-3" data-component="SearchInput">
                        <input type="text" class="form-control" placeholder="Search for a product or category" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        <span class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></span>
                    </div>

                </div>
{/* 
                <!-- <div class="col-md-3 col-sm-4 my-3 customer-service-number">
                  <div class="row align-items-center  justify-content-center text-center">
                    <div class="col-2 text-end">
                        <i class="fa fa-phone-alt fa-2x"></i>
                    </div>
                    <div class="col-9 text-start">
                        <p class="m-0 p-0">Customer Service<br>+00 000 00000</p>
                    </div>
                  </div>
                </div> --> */}

            </div>
        </div>
    </div>

    {/* <!-- nav bar --> */}
    <div data-aos="fade-in" class="container-fluid p-0 m-0 navigationbar" data-component="Navbar">
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
                    <li class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i class="fa fa-user">&nbsp;</i>&emsp;Account
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                </ul>
              </div>
            </div>
        </nav>
    </div>

    <div data-aos="fade-in" data-aos-duration="1000" class="container-fluid page-slider" style="min-height: 300px;">
        <div class="slider-text" data-component="slider">
            <p>Quality Life Sundry Shop | UK Online Pharmacy</p>
            <h5 class="big-text">Get your Prescription delivered Direct!</h5>
            <p class="small-text">Our online pharmacy can organise everything!</p>
            <p class="list-text"><i class="fa fa-check-circle"></i>&nbsp;Request your prescription</p>
            <p class="list-text"><i class="fa fa-check-circle"></i>&nbsp;Free Delivery</p>
            <p class="list-text"><i class="fa fa-check-circle"></i>&nbsp;Confidential service</p>
            <button class="text-center btn btn-rounded">
                Register
            </button>
        </div>
    </div>

    {/* <!-- our service --> */}
    <div data-aos="fade-in" data-aos-duration="1000" class="container our-other-service" data-component="header">
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
                        <img src="./images/doc-icon.svg"  width="70%" style="margin-top:10%"/>
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
                        <img src="./images/shop-icon.svg" width="45%" style="margin-top:20%" />
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
                        <img src="./images/crucible.svg" width="50%" style="margin-top:15%" />
                    </div>
                    <p>Private Prescriptions</p>
                    <p>Already have a private prescription? Send it in to us and we can save you money on high price on expensive treatments</p>
                    <button class="btn btn-rounded">
                        Get Started
                    </button>
                </div>
            </div>
        </div>

    </div>
    
    {/* <!-- popular clinics --> */}
    <div data-aos="fade-in" data-aos-duration="1000" class="container popular-clinics text-center">
        <div class="title-text text-center mb-4">
            <h4 class="">Popular Clinics</h4>
            <p class="">
                A selection of our most popular clinics available through our Online Doctor Service. If you require treatments for any of the following conditions, we may be able to help.
            </p>
        </div>
        <div class="row text-center my-4">
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/hairloss.svg" style="width: 100%;"/>
                    <!-- <p>Hair loss</p> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/premature.svg" style="width: 100%;"/>
                    <!-- <p>Premature Ejaculation</p> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/erectile.svg" style="width: 100%;"/>
                    <!-- <p>Erectile Dysfunction</p> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/weightloss.svg" style="width: 100%;"/>
                    <!-- <p>Weight Loss</p> -->
                </div>
            </div>
        </div>
        <div class="row text-center my-4">
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/malaria.svg" style="width: 100%;"/>
                    <!-- <p>Hair loss</p> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/period.svg" style="width: 100%;"/>
                    <!-- <p>Premature Ejaculation</p> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/pills.svg" style="width: 100%;"/>
                    <!-- <p>Erectile Dysfunction</p> -->
                </div>
            </div>
            <div class="col-md-3">
                <div class="mx-auto image-tiles">
                    <img src="./images/clinics/acne.svg" style="width: 100%;"/>
                    <!-- <p>Weight Loss</p> -->
                </div>
            </div>
        </div>
        <button class="text-center btn btn-rounded mt-4">
            View Online Doctor
        </button>
    </div>

    <div data-aos="fade-in" data-aos-duration="1000" class="container-fluid text-center mb-4" id="order-within">
        <div class="row py-2">
            <div class="col-md-4 my-3">
                <img class="social-links mx-3" src="./images/twitter.svg">
                <img class="social-links mx-3" src="./images/facebook.svg">
            </div>
            <div class="col-md-5 my-3">
                <table class="w-100">
                    <tr>
                        <td class="p1">Order within</td>
                        <td class="p2" style="width: 50%;">09 Hrs 22 Mins</td>
                        <td class="p1">for guaranteed next day delivery options</td>
                    </tr>
                </table>
            </div>
            <div class="col-md-4">

            </div>
        </div>
    </div>

    {/* <!-- best seller --> */}
    <div data-aos="fade-up" data-aos-duration="1000" class="container best-seller text-center">
        <div class="title-text text-center mb-4">
            <h4 class="">Best Seller</h4>
            <p class="">
                We offer highly competitive prices on all everyday pharmacy items. Visit the shop to pickup the essentials.
            </p>
        </div>

        <div class="row">
            <div class="col-md-3 p-1">
                <div class="item-div">
                    <img class="img-rounded my-3" src="./images/paracetamol.svg" style="width: 90%;"/>
                    <p class="item-name">Paracetamol 250mg</p>
                    <p class="item-price-now"><span class="save-amount">Save &pound;3.00</span> &nbsp;Now<span class="now-amount"> &pound;7.00</span></p>
                    <p class="item-price-was">Was <span>&pound;10.00</span></p>
                </div>
                <button class="text-center btn btn-rounded">
                    View Item
                </button>
            </div>
            <div class="col-md-3 p-1">
                <div class="item-div">
                    <img class="img-rounded my-3" src="./images/paracetamol.svg" style="width: 90%;"/>
                    <p class="item-name">Paracetamol 250mg</p>
                    <p class="item-price-now">From<span class="now-amount"> &pound;7.00</span></p>
                    <!-- <p></p> -->
                </div>
                
                <button class="text-center btn btn-rounded">
                    View Item
                </button>
            </div>
            <div class="col-md-3 p-1">
                <div class="item-div">
                    <img class="img-rounded my-3" src="./images/paracetamol.svg" style="width: 90%;"/>
                    <p class="item-name">Paracetamol 250mg</p>
                    <p class="item-price-now">From<span class="now-amount"> &pound;7.00</span></p>
                    {/* <!-- <p></p> --> */}
                </div>
                <button class="text-center btn btn-rounded">
                    View Item
                </button>
            </div>
            <div class="col-md-3 p-1">
                <div class="item-div">
                    <img class="img-rounded my-3" src="./images/paracetamol.svg" style="width: 90%;"/>
                    <p class="item-name">Paracetamol 250mg</p>
                    <p class="item-price-now"><span class="save-amount">Save &pound;3.00</span> &nbsp;Now<span class="now-amount"> &pound;7.00</span></p>
                    <p class="item-price-was">Was <span>&pound;10.00</span></p>
                </div>
                
                <button class="text-center btn btn-rounded">
                    View Item
                </button>
            </div>
        </div>
    </div>

    <div data-aos="slide-up" data-aos-duration="1000" class="container how-it-works text-center">
        <div class="title-text text-center mb-4">
            <h4 class="">How it works</h4>
        </div>

        <div class="row">
            <div class="col-md-3 align-items-stretch">
                <div class="mx-auto icon-parent-div">
                    <div class="mx-auto icon-div">
                        <img src="./images/document.svg"  width="70%" style="margin-top:10%"/>
                    </div>
                    <p class="works-title">Free online consultation</p>
                    <p class="works-text">Start a free 2 minutes online consultation with simple questions about your health</p>
                </div>
            </div>
            {/* <!-- arror right --> */}
            <div class="col-md-1 d-flex align-items-center justify-content-center">
                <i class="fa fa-angle-right fa-2x"></i>
            </div>

            <div class="col-md-4 align-items-stretch">
                <div class="mx-auto icon-parent-div">
                    <div class="mx-auto icon-div">
                        <img src="./images/drug.svg" width="45%" style="margin-top:20%" />
                    </div>
                    <p class="works-title">Order Medication</p>
                    <p class="works-text">Our UK team will now recommend a treatment and issue free prescription</p>
                </div>
            </div>

            {/* <!-- arror right --> */}
            <div class="col-md-1 d-flex align-items-center justify-content-center">
                <i class="fa fa-angle-right fa-2x"></i>
            </div>

            <div class="col-md-3 align-items-stretch">
                <div class="mx-auto icon-parent-div">
                     <div class="mx-auto icon-div">
                        <img src="./images/delivery.svg" width="50%" style="margin-top:20%" />
                    </div>
                    <p class="works-title">Express Delivery</p>
                    <p class="works-text">Your treatment will be sent directly from our pharmacy in discrete packaging</p>
                </div>
            </div>
        </div>

        <div class="video-player mx-auto">
            <video width="100%" height="100%" controls>
                <source src="movie.mp4" type="video/mp4">
                <source src="movie.ogg" type="video/ogg">
              Your browser does not support the video tag.
            </video>
        </div>
    </div>

    {/* <!-- what our patients think --> */}
    <div data-aos="zoom-in" data-aos-duration="1000" class="container-fluid patient-thoughts">
        <div class="title-text text-center mb-4">
            <h4 class="">What Do Our Patients Think? We Are Rate 'Excellent' On Trust Pilot</h4>
            <p class="w-50 mx-auto">
                Click on the Trust Pilot link below to read reviews from verified users from our site. While nobody is perfect , our pharmacy and customer services team strive to be.
            </p>
        </div>

        <div class="container-fluid">
            <div class="mx-1 row">
                <div class="col-md-3 p-1">
                    <div class="mx-auto p-4 text-center rounded bg-white w-100 comment-box">
                        <p class="comment-text">Check out our 5,000 reviews</p>
                        <p class="s-pilot"><span><i class="fa fa-star fa-2x star-icon"></i></span><span class="tpilot">Trustpilot</span></p>
                        <p>
                            <span class="star-green-bg"><i class="fa fa-star star-icon-white"></i></span>
                            <span class="star-green-bg"><i class="fa fa-star star-icon-white"></i></span>
                            <span class="star-green-bg"><i class="fa fa-star star-icon-white"></i></span>
                            <span class="star-green-bg"><i class="fa fa-star star-icon-white"></i></span>
                            <span class="star-green-bg"><i class="fa fa-star star-icon-white"></i></span>
                        </p>
                    </div>
                </div>
                <div class="col-md-3 p-1">
                    <div class="mx-auto p-4 text-center rounded bg-white w-100 comment-box">
                        <i class="fa fa-quote-left fa-3x mb-4"></i>
                        <p class="comment-text">Excellent Service and great products! Love their site as well! Easy and convenient to use</p>
                    </div>
                </div>
                <div class="col-md-3 p-1">
                    <div class="mx-auto p-4 text-center rounded bg-white w-100 comment-box">
                        <i class="fa fa-quote-left fa-3x mb-4"></i>
                        <p class="comment-text">Excellent Service and great products! Love their site as well! Easy and convenient to use</p>
                    </div>
                </div>
                <div class="col-md-3 p-1">
                    <div class="mx-auto p-4 text-center rounded bg-white w-100 comment-box">
                        <i class="fa fa-quote-left fa-3x mb-4"></i>
                        <p class="comment-text">Excellent Service and great products! Love their site as well! Easy and convenient to use</p>
                    </div>
                </div>
            </div>
            
        </div>
    </div>

    {/* <!-- our team --> */}
    <div data-aos="fade-right" data-aos-duration="1000" class="container our-team text-center">
        <div class="title-text text-center mb-4">
            <h4 class="">Our Team</h4>
            <p class="">
                All our doctors are based in the UK and are registered under the General Medical & Pharmaceutical Council
            </p>
        </div>
        <div class="row text-center mt-4">
            <div class="col-md-4 align-items-stretch">
                <div class="mx-auto icon-parent-div">
                     <div class="mx-auto icon-div">
                        <img src="./images/doctor.svg" width="100%" />
                    </div>
                    <p class="works-title">Dr. Alfred Opare Saforo</p>
                    <p class="works-text position">General Practioner</p>
                    <p class="works-text position title text-uppercase">PHD/ MRGCP DCH</p>
                    <p class="works-text position gmc-code text-uppercase">GMC : 2234567</p>
                </div>
            </div>
            <div class="col-md-4 align-items-stretch">
                <div class="mx-auto icon-parent-div">
                     <div class="mx-auto icon-div">
                        <img src="./images/doctor.svg" width="100%" />
                    </div>
                    <p class="works-title">Dr. Alfred Opare Saforo</p>
                    <p class="works-text position">General Practioner</p>
                    <p class="works-text position title text-uppercase">PHD/ MRGCP DCH</p>
                    <p class="works-text position gmc-code text-uppercase">GMC : 2234567</p>
                </div>
            </div>
            <div class="col-md-4 align-items-stretch">
                <div class="mx-auto icon-parent-div">
                     <div class="mx-auto icon-div">
                        <img src="./images/doctor.svg" width="100%" />
                    </div>
                    <p class="works-title">Dr. Alfred Opare Saforo</p>
                    <p class="works-text position">General Practioner</p>
                    <p class="works-text position title text-uppercase">PHD/ MRGCP DCH</p>
                    <p class="works-text position gmc-code text-uppercase">GMC : 2234567</p>
                </div>
            </div>
        </div>

        <button class="text-center btn btn-rounded">
            Learn more about how we protect your privacy
        </button>

    </div>

    {/* <!-- discrete services--> */}
    <div data-aos="fade-left" data-aos-duration="1000" class="container our-discrete-service text-center">
        <div class="title-text text-center mb-4">
            <h4 class="">Discrete Services</h4>
        </div>
        <div class="row text-center mt-4">
            <div class="col-md-6 align-items-stretch">
                <div class="mx-auto">
                    <p class="main-text"><i class="fa fa-check-circle"></i>&nbsp; Plain packaging guarnateed</p>
                    <img src="./images/package.svg"/>
                </div>
            </div>
            <div class="col-md-4 align-items-stretch">
                <div class="mx-auto">
                    <p class="main-text"><i class="fa fa-check-circle"></i>&nbsp; Option to collect package from your local Post Office</p>
                    <img src="./images/building.svg"/>
                    <p class="sub-text">500+ local branches</p>
                </div>
            </div>
        </div>

    </div>


    {/* <!-- about us --> */}
    <div data-aos="slide-up" data-aos-duration="1000" class="container-fluid about-us">
        <div class="title-text text-center mb-4">
            <h4 class="">About Quality Life Sundry Shop</h4>
            <p class="w-50 mx-auto">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
            </p>

            <button class="text-center btn btn-rounded">
                Read about us
            </button>
        </div>
    </div>

    {/* <!-- in the press --> */}
    <div data-aos="fade-in" data-aos-duration="1000" class="container-fluid in-the-press">
        <div class="title-text text-center mb-4">
            <h4 class="">In The Press</h4>
        </div>
        <div class="container my-3">
            <div class="row blog">
                <div class="col-md-12">
                    <div id="blogCarousel" class="carousel slide" data-ride="carousel">

                        <ol class="carousel-indicators">
                            <li data-bs-target="#blogCarousel" data-bs-slide-to="0" class="active"></li>
                            <li data-bs-target="#blogCarousel" data-bs-slide-to="1"></li>
                        </ol>

                        {/* <!-- Carousel items --> */}
                        <div class="carousel-inner">

                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/guardian.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/metro.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/mailonline.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/mirror.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                </div>
                       
                            </div>
                            {/* <!--.item--> */}

                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/guardian.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/metro.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/mailonline.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                    <div class="col-md-3 my-2">
                                        <a href="#">
                                            <img src="./images/press/mirror.svg" alt="Image" style="max-width:100%;">
                                        </a>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>

    {/* <!-- useful linke --> */}
    <div data-aos="zoom-in" data-aos-duration="1000" class="container-fluid userful-link">
        <div class="row">
            <div class="col-md-2">
                <div>
                    <ul class="text-left">
                        <li class="title-link">Quick Links</li>
                        <li>Direct Prescriptions</li>
                        <li>Onlline Doctor</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div>
                    <ul class="text-left">
                        <li class="title-link">Popular Products</li>
                        <li>Paracetamol</li>
                        <li>Benzoyl Peroxide</li>
                        <li>Codeine</li>
                        <li>Gebedol</li>
                        <li>Viscos - S</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div>
                    <ul class="text-left">
                        <li class="title-link">Useful Links</li>
                        <li>Fit for travel</li>
                        <li>Medicines.org</li>
                        <li>Direct Prescriptions</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div>
                    <ul class="text-left">
                        <li class="title-link">Customer care</li>
                        <li>About us</li>
                        <li>Contact us</li>
                        <li>Delivery</li>
                        <li>FAQs</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div>
                    <ul class="text-left">
                        <li class="title-link">Find us</li>
                        <li>101 Levites Avenue</li>
                        <li>233 300 240000</li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2">
                <div>
                    <ul class="text-left">
                        <li class="title-link">Follow us</li>
                        <li>
                            <img src="./images/small-icons/twitter.svg" class="mx-1"/>
                            <img src="./images/small-icons/facebook.svg" class="mx-1"/>
                            <img src="./images/small-icons/linkedin.svg" class="mx-1"/>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    {/* <!-- payment integration --> */}
    <div data-aos="slide-left" data-aos-duration="1000" class="container-fluid">
        <div class="mx-auto text-center row">
            <img class="mx-auto col-md-6 offset-md-3" src="./images/payment.svg" width="100%"/>
        </div>
        
    </div>

    {/* <!-- footer --> */}
    <div  class="container-fluid page-footer text-center" >
        <p>Copyright &copy; 2021. Quality Life Pharmacy. All rights reserved</p>
    </div>

  );
 }

export default Home;
