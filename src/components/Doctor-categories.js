import React from 'react';
import Header from './Header';
import Footer from './Footer';

class Doctor extends React.Component {
 render(){
     return(
        <div>
        {/* <!-- top header --> */}
        < Header/>
        {/* <!-- nav bar --> */}
        <div class="container-fluid p-0 m-0 navigationbar">
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
                        {/* <!-- <li class="nav-item dropdown">
                            <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fa fa-user">&nbsp;</i>&emsp;Account
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><hr class="dropdown-divider"></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> --> */}
                    </ul>
                  </div>
                </div>
            </nav>
        </div>

       
        <div class="container-fluid body-content">
            {/* <!-- second nav --> */}
            <nav class="navbar navbar-expand-lg navbar-dark" id="secondNav">
                <div class="container-fluid px-4 text-left">
                  {/* <!-- <div class="navbar text-left" id="navbarSupportedContent2"> --> */}
                    <ul class="w-100 navbar-nav nav-pills nav-fill p-0">
                        <li class="nav-item">
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
                  {/* <!-- </div> --> */}
                </div>
            </nav>

            {/* <!-- breadcramp --> */}
            <div class="bcramp">
                <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item" aria-current="page">Online Doctor</li>
                        <li class="breadcrumb-item active" aria-current="page">Hair Loss Treatment</li>
                    </ol>
                </nav>
                <hr/>
            </div>

            <div class="doctor-categories-info">
                <div class="row mb-4">
                    <div class="col-md-8">
                        <div class="cat-info">
                            <h3 class="my-4">Hair Loss Treatments</h3>

                            <h5 class="my-4">Hair Loss Tablet</h5>

                            <p>Hair loss tablets such as Propecia and Finasteride are available from our online doctor. Suffering hair loss can be a traumatic experience. While some embrace baldness, for others, it can be a confidence denting experience. At Simple Online Pharmacy, our UK online doctor service allows us to prescribe treatments that help stop and reverse hair loss, so you can regain your hair.</p>
                                
                            <p>The main prescription hair loss is Propecia (also known as finasteride 1mg). You can buy Propecia after filling out an online assessment. No prescription is required, as our doctors will generate this once they have approved your assessment. Propecia is a proven treatment for hair loss in men suffering from male pattern baldness. Propecia is the brand name of the drug Finasteride (1mg), and has been shown to stop hair loss and regrow hair in 90% of men.</p>
                                
                            <p>Once you have completed the online doctor consultation, our doctor will review your assessment and prescribe the selected medication if it is approproate. Our pharmacy will then dispense and deliver your prescription to your door.</p>
                                
                            <p>Our prices are regularly checked against competitors to make sure we have cheap prices across our range of treatments. </p>
                            
                            <button class="w-100 btn mt-4">Compare Price</button>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="category-pic">
                            <img src="./assets/images/hairloss.svg" width="100%"/>
                        </div>
                    </div>
                </div>
            </div>
            <h3 class="my-4">Hair Loss treatment options</h3>
        </div>

        <div class="container-fluid p-0">
            <div class="treatment-options">
                <div class="row">
                    {/* <!-- card start --> */}
                    <div class="col-md-6">
                        <div class="card p-4 m-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-7">
                                        <img src="./assets/images/paracetamol.svg" class="w-100"/>
                                        <p class="py-3">Order within 4 hrs 12 mins for guaranteed next day delivery options</p>
                                        <button class="w-100 btn btn-white">Compare treatments</button>
                                    </div>
                                    <div class="col-4 text-center">
                                        <p class="product-name">Paracetamol 250mg</p>
                                        <p class="">From <span class="text-green">&pound;7.00</span></p>
                                        <button class="my-1 w-100 btn btn-white">Start assessment</button>
                                        <button class="my-1 w-100 btn">Further information</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card start --> */}
                    <div class="col-md-6">
                        <div class="card p-4 m-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-7">
                                        <img src="./assets/images/paracetamol.svg" class="w-100"/>
                                        <p class="py-3">Order within 4 hrs 12 mins for guaranteed next day delivery options</p>
                                        <button class="w-100 btn btn-white">Compare treatments</button>
                                    </div>
                                    <div class="col-4 text-center">
                                        <p class="product-name">Paracetamol 250mg</p>
                                        <p class="">From <span class="text-green">&pound;7.00</span></p>
                                        <button class="my-1 w-100 btn btn-white">Start assessment</button>
                                        <button class="my-1 w-100 btn">Further information</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- card start --> */}
                    <div class="col-md-6">
                        <div class="card p-4 m-4">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-7">
                                        <img src="./assets/images/paracetamol.svg" class="w-100"/>
                                        <p class="py-3">Order within 4 hrs 12 mins for guaranteed next day delivery options</p>
                                        <button class="w-100 btn btn-white">Compare treatments</button>
                                    </div>
                                    <div class="col-4 text-center">
                                        <p class="product-name">Paracetamol 250mg</p>
                                        <p class="">From <span class="text-green">&pound;7.00</span></p>
                                        <button class="my-1 w-100 btn btn-white">Start assessment</button>
                                        <button class="my-1 w-100 btn">Further information</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            
        </div>
        
        <div class="container-fluid">
            {/* <!-- product description --> */}
            <div class="product-detail-description mt-4">
                <ul class="nav nav-justified info-dev mb-3" id="pills-tab" role="tablist">
                    <li class="nav-item first-btn" role="presentation">
                        <button class="nav-link active first-btn" id="pills-overview-tab" data-bs-toggle="pill" data-bs-target="#pills-overview" type="button" role="tab" aria-controls="pills-overview" aria-selected="true">Overview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-faq-tab" data-bs-toggle="pill" data-bs-target="#pills-faq" type="button" role="tab" aria-controls="pills-faq" aria-selected="false">FAQ</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-side-effect-tab" data-bs-toggle="pill" data-bs-target="#pills-side-effect" type="button" role="tab" aria-controls="pills-side-effect" aria-selected="false">Side Effects</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-direction-tab" data-bs-toggle="pill" data-bs-target="#pills-direction" type="button" role="tab" aria-controls="pills-direction" aria-selected="false">Directions</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-warnings-tab" data-bs-toggle="pill" data-bs-target="#pills-warnings" type="button" role="tab" aria-controls="pills-warnings" aria-selected="false">Warnings</button>
                    </li>
                    <li class="nav-item last-btn" role="presentation">
                        <button class="nav-link last-btn" id="pills-ingredients-tab" data-bs-toggle="pill" data-bs-target="#pills-ingredients" type="button" role="tab" aria-controls="pills-ingredients" aria-selected="false">Ingrediants</button>
                    </li>
                </ul>
                <div class="tab-content" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-overview" role="tabpanel" aria-labelledby="pills-overview-tab">
                        <p class="my-4 py-3">There are a number of different types of hair loss - treatment is available for hair loss in the form of male pattern baldness. Male pattern baldness is a genetic disorder affecting millions of men. It occurs when hair follicles convert testosterone into another hormone, dihydrotestosterone (DHT). DHT causes hair follicles to shrink, weaken and eventually die, preventing hair regrowth.</p>
                        <p class="my-4 py-3">Whilst there is no cure for hair loss or baldness, treatment can prevent further hair loss and also lead to renewed hair growth. The two most effective hair loss treatments available in the UK are Propecia (finasteride) and Regaine (minoxidil).</p>
                    </div>
                    <div class="tab-pane fade" id="pills-faq" role="tabpanel" aria-labelledby="pills-faq-tab">
                        <h3>FAQ</h3>
                    </div>
                    <div class="tab-pane fade" id="pills-side-effect" role="tabpanel" aria-labelledby="pills-side-effect-tab">
                        <h3>Side Effects</h3>
                    </div>
                    <div class="tab-pane fade" id="pills-direction" role="tabpanel" aria-labelledby="pills-direction-tab">
                        <h3>Directions</h3>
                    </div>
                    <div class="tab-pane fade" id="pills-warnings" role="tabpanel" aria-labelledby="pills-warnings-tab">
                        <h3>Warnings</h3>
                    </div>
                    <div class="tab-pane fade" id="pills-ingredients" role="tabpanel" aria-labelledby="pills-ingredients-tab">
                        <h3>Ingredients</h3>
                    </div>
                </div>
            </div>
        </div>

    
        {/* <!-- footer starts -->
        <!-- useful linke --> */}
        <div class="container-fluid userful-link">
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
                                <img src="./assets/images/small-icons/twitter.svg" class="mx-1"/>
                                <img src="./assets/images/small-icons/facebook.svg" class="mx-1"/>
                                <img src="./assets/images/small-icons/linkedin.svg" class="mx-1"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- payment integration --> */}
        <div class="container-fluid">
            <div class="mx-auto text-center row">
                <img class="mx-auto col-md-6 offset-md-3" src="./assets/images/payment.svg" width="100%"/>
            </div>
            
        </div>
        <Footer />

        </div>
     );

     }
}

export default Doctor;