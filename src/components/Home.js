import React from 'react';
import Header from './Header';
import Footer from './Footer';


class Home extends React.Component {
 render(){
     return(
        <div>
            
      <Header />
        {/* <!-- carosel --> */}
        <div data-aos="fade-in" data-aos-duration="1000" class="container-fluid page-slider" style={{minheight: '300px'}}>
              {/* <!-- second nav --> */}
            <div class="container bg-transparent">
                <nav class="navbar navbar-expand-lg navbar-dark" id="secondNav" data-aos="fade-up" data-aos-duration="1000">
                    <div class="container-fluid text-center">
                        <ul class="w-100 navbar-nav nav-pills nav-fill p-0">
                            <li class="nav-item px-4">
                                <a class="nav-link"><i class="fa fa-check-circle"></i>&nbsp;Express Delivery</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-check-circle"></i>&nbsp;Genuine UK Medicine</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-check-circle"></i>&nbsp;Lowest Price Guarnatee</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-check-circle"></i>&nbsp;UK Registered Pharmacy</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#"><i class="fa fa-check-circle"></i>&nbsp;Confidential & Discrete</a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <div class="slider-text">
                <p>Quality Life Sundry Shop | UK Online Pharmacy</p>
                <h5 class="big-text">Get your Prescription delivered Direct!</h5>
                <p class="small-text">Our online pharmacy can organise everything!</p>
                <p class="list-text"><i class="fa fa-check-circle"></i>&nbsp;Request your prescription</p>
                <p class="list-text"><i class="fa fa-check-circle"></i>&nbsp;Free Delivery</p>
                <p class="list-text"><i class="fa fa-check-circle"></i>&nbsp;Confidential service</p>
                <button class="text-center btn btn-rounded"> Register </button>
            </div>
        </div>

        {/* <!-- our service --> */}
        <div data-aos="fade-in" data-aos-duration="1000" class="container our-other-service">
            <div class="title-text text-center mb-4">
                <h4 class="">Our Other Services</h4>
                <p class="">
                    Quality Life Sundry Shop also offers a number of additional services alongside Direct prescriptions.You can shop for everyday pharmacy items or send us existing private prescriptions you have. We can also assess to see if youre suitable for a limited range of prescriptions medications via our online doctor services.
                </p>
            </div>
            <div class="row text-center mt-4">
                <div class="col-md-4 align-items-stretch">
                    <div class="mx-auto icon-parent-div">
                        <div class="mx-auto icon-div d-flex justify-content-center">
                            {/* <img src="./images/doc-icon.svg"  width="70%" style={{margintop: '10%'}}   alt="icon"/> */}
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/doc-icon.svg"  width="70%" style={{margintop: '10%'}}   alt="icon"/>
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
                        <div class="mx-auto icon-div d-flex justify-content-center">
                            {/* <img src="./assets/images/shop-icon.svg" width="45%" style={{margintop: '20%'}}   alt="shop"/> */}
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/shop-icon.svg" width="50%" style={{margintop: '30%'}}   alt="shop"/>                            
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
                         <div class="mx-auto icon-div d-flex justify-content-center">
                            {/* <img src="./assets/images/crucible.svg" width="50%" style={{margintop: '15%'}}   alt="svg"/> */}
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/crucible.svg" width="50%" style={{margintop: '15%'}}   alt="svg"/>                           
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
                        {/* <img src="./assets/images/clinics/hairloss.svg" style={{width: '100%'}}   alt="hair"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/hairloss.svg" style={{width: '100%'}}   alt="hair"/>
                        {/* <!-- <p>Hair loss</p> --> */}
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="mx-auto image-tiles">
                        {/* <img src="./assets/images/clinics/premature.svg" style={{width: '100%'}}  alt="svg"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/premature.svg" style={{width: '100%'}}   alt="hair"/>

                        {/* <!-- <p>Premature Ejaculation</p> --> */}
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="mx-auto image-tiles">
                        {/* <img src="./assets/images/clinics/erectile.svg" style={{width: '100%'}}  alt="svg"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/erectile.svg" style={{width: '100%'}}   alt="erectile-dysfunction"/>
                        {/* <!-- <p>Erectile Dysfunction</p> --> */}
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="mx-auto image-tiles">
                        {/* <img src="./assets/images/clinics/weightloss.svg" style={{width: '100%'}}   alt="svg"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/weightloss.svg" style={{width: '100%'}}   alt="weightloss"/>

                        {/* <!-- <p>Weight Loss</p> --> */}
                    </div>
                </div>
            </div>
            <div class="row text-center my-4">
                <div class="col-md-3">
                    <div class="mx-auto image-tiles">
                        {/* <img src="./assets/images/clinics/malaria.svg" style={{width: '100%'}}   alt="svg"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/malaria.svg" style={{width: '100%'}}   alt="malaria"/>
                        {/* <!-- <p>Hair loss</p> --> */}
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="mx-auto image-tiles">
                        {/* <img src="./assets/images/clinics/period.svg" style={{width: '100%'}} alt="period"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/period.svg" style={{width: '100%'}}   alt="period"/>
                        {/* <!-- <p>Premature Ejaculation</p> --> */}
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="mx-auto image-tiles">
                        {/* <img src="./assets/images/clinics/pills.svg" style={{width: '100%'}}   alt="svg"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/pills.svg" style={{width: '100%'}}   alt="pills"/>
                        {/* <!-- <p>Erectile Dysfunction</p> --> */}
                    </div>
                </div>
                <div class="col-md-3">
                    <div class="mx-auto image-tiles">
                        {/* <img src="./assets/images/clinics/acne.svg" style={{width: '100%'}}  alt="svg"/> */}
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/clinics/acne.svg" style={{width: '100%'}}   alt="acne"/>
                        {/* <!-- <p>Weight Loss</p> --> */}
                    </div>
                </div>
            </div>
            <button class="text-center btn btn-rounded mt-4">
                View Online Doctor
            </button>
        </div>

        {/* <!-- order within --> */}
        <div data-aos="fade-in" data-aos-duration="1000" class="container-fluid text-center mb-4" id="order-within">
            <div class="row py-2">
                <div class="col-md-4 my-3">
                    {/* <img class="social-links mx-3" src="./assets/images/twitter.svg"  alt="svg"/>
                    <img class="social-links mx-3" src="./assets/images/facebook.svg"  alt="svg"/> */}
                    <a href="http://facebook.com" ><i class="fab fa-facebook-square social-links mx-4"></i></a>
                    <a href="http://twitter.com" ><i class="fab fa-twitter text-info social-links mx-4"></i></a>

                </div>
                <div class="col-md-5 my-3">
                    <table class="w-100">
                        <tr>
                            <td class="p1">Order within</td>
                            <td class="p2" style={{width: '50%'}}>09 Hrs 22 Mins</td>
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
                        {/* <img class="img-rounded my-3" src="http://qualitylifepharmacy.teamalfy.online/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/> */}
                        <img class="img-rounded my-3" src="http://qualitylifepharmacy.teamalfy.online/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/>
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
                        {/* <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/> */}
                        <img class="img-rounded my-3" src="http://qualitylifepharmacy.teamalfy.online/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/>
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
                        {/* <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/> */}
                        <img class="img-rounded my-3" src="http://qualitylifepharmacy.teamalfy.online/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/>
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
                        {/* <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/> */}
                        <img class="img-rounded my-3" src="http://qualitylifepharmacy.teamalfy.online/images/paracetamol.svg" style={{width: '90%'}}  alt="svg"/>
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

        {/* <!-- how it works --> */}
        <div data-aos="slide-up" data-aos-duration="1000" class="container how-it-works text-center">
            <div class="title-text text-center mb-4">
                <h4 class="">How it works</h4>
            </div>

            <div class="row">
                <div class="col-md-3 align-items-stretch">
                    <div class="mx-auto icon-parent-div">
                        <div class="mx-auto icon-div">
                            {/* <img src="./assets/images/document.svg"  width="70%" style={{margintop: '10%'}}  alt="svg"/> */}
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/document.svg"  width="70%" style={{margintop: '10%'}}  alt="svg"/>                       
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
                            {/* <img src="./assets/images/drug.svg" width="45%" style={{margintop: '20%'}}  alt="svg" /> */}
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/drug.svg"  width="70%" style={{margintop: '10%'}}  alt="pills"/>                       
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
                            {/* <img src="./assets/images/delivery.svg" width="50%" style={{margintop: '20%'}}  alt="svg" /> */}
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/delivery.svg"  width="70%" style={{margintop: '10%'}}  alt="svg"/>                       
                        </div>
                        <p class="works-title">Express Delivery</p>
                        <p class="works-text">Your treatment will be sent directly from our pharmacy in discrete packaging</p>
                    </div>
                </div>
            </div>

            <div class="video-player mx-auto">
                {/* <video width="100%" height="100%" controls>
                    <source src="https://www.youtube.com/watch?v=QWDaJ65iImM" type="video/mp4"/>
                    <source src="https://www.youtube.com/watch?v=QWDaJ65iImM" type="video/ogg"/>
                  Your browser does not support the video tag.
                </video> */}
                
                <iframe width="100%" height="500" class="rounded-2"
                   src="https://www.youtube.com/embed/O3LmKImd-9Q" title="YouTube video player" frameborder="0" allow="accelerometer; picture-in-picture">
                </iframe>
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
        <div data-aos="fade-up" data-aos-duration="1000" class="container our-team text-center">
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
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/doctor.svg" width="100%"  alt="svg" />
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
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/doctor.svg" width="100%"  alt="svg" />
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
                            <img src="http://qualitylifepharmacy.teamalfy.online/images/doctor.svg" width="100%"  alt="svg" />
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
        <div data-aos="fade-down" data-aos-duration="1000" class="container our-discrete-service text-center">
            <div class="title-text text-center mb-4">
                <h4 class="">Discrete Services</h4>
            </div>
            <div class="row text-center mt-4">
                <div class="col-md-6 align-items-stretch">
                    <div class="mx-auto">
                        <p class="main-text"><i class="fa fa-check-circle"></i>&nbsp; Plain packaging guarnateed</p>
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/package.svg"  alt="svg"/>
                    </div>
                </div>
                <div class="col-md-4 align-items-stretch">
                    <div class="mx-auto">
                        <p class="main-text"><i class="fa fa-check-circle"></i>&nbsp; Option to collect package from your local Post Office</p>
                        <img src="http://qualitylifepharmacy.teamalfy.online/images/building.svg"  alt="svg"/>
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
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/guardian.svg"  alt="svg" style={{maxwidth: '100%'}}/>
                                            </a>
                                        </div>
                                        <div class="col-md-3 my-2">
                                            <a href="#">
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/metro.svg"  alt="metro" style={{maxwidth: '100%'}}/>
                                            </a>
                                        </div>
                                        <div class="col-md-3 my-2">
                                            <a href="#">
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/mailonline.svg"  alt="svg" style={{maxwidth:' 100%'}}/>
                                            </a>
                                        </div>
                                        <div class="col-md-3 my-2">
                                            <a href="#">
                                                {/* <img src="./assets/images/press/mirror.svg"  alt="mirror" style={{maxwidth: '100%'}}/> */}
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/mirror.svg"  alt="mirror" style={{maxwidth: '100%'}}/>
                                                
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!--.row--> */}
                                </div>
                                {/* <!--.item--> */}
    
                                <div class="carousel-item">
                                    <div class="row">
                                        <div class="col-md-3 my-2">
                                            <a href="#">
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/guardian.svg"  alt="svg" style={{maxwidth: '100%'}}/>
                                            </a>
                                        </div>
                                        <div class="col-md-3 my-2">
                                            <a href="#">
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/metro.svg"  alt="metro" style={{maxwidth: '100%'}}/>
                                            </a>
                                        </div>
                                        <div class="col-md-3 my-2">
                                            <a href="#">
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/mailonline.svg"  alt="svg" style={{maxwidth:' 100%'}}/>
                                            </a>
                                        </div>
                                        <div class="col-md-3 my-2">
                                            <a href="#">
                                                {/* <img src="./assets/images/press/mirror.svg"  alt="mirror" style={{maxwidth: '100%'}}/> */}
                                                <img src="http://qualitylifepharmacy.teamalfy.online/images/press/mirror.svg"  alt="mirror" style={{maxwidth: '100%'}}/>
                                                
                                            </a>
                                        </div>
                                    </div>
                                    {/* <!--.row--> */}
                                </div>
                                {/* <!--.item--> */}
    
                            </div>
                            {/* <!--.carousel-inner--> */}
                        </div>
                        {/* <!--.Carousel--> */}
    
                    </div>
                </div>
            </div>
        </div>


        <Footer />
    </div>
     );

 }
}
export default Home;
