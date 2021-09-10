import React from 'react';
import Header from './Header';
import Footer from './Footer';


class Product extends React.Component {
 render(){
     return(
        <div>

        {/* <!-- top header --> */}
        
        {/* <!-- nav bar --> */}
        <Header />
       
        <div class="container-fluid body-content" data-aos="zoom-in" data-aos-duration="1000">
            {/* <!-- second nav --> */}
            <nav class="navbar navbar-expand-lg navbar-dark" id="secondNav" data-aos="slide-up" data-aos-duration="1000">
                <div class="container-fluid px-4 text-left">
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
                </div>
            </nav>

            {/* <!-- breadcramp --> */}
            <div class="bcramp">
                <nav  aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item" aria-current="page">Shop</li>
                        <li class="breadcrumb-item" aria-current="page">Pains</li>
                        <li class="breadcrumb-item active" aria-current="page">Paracetamol</li>
                    </ol>
                </nav>
                <hr/>
            </div>
            

            <div class="product-description-info" data-aos="slide-up" data-aos-duration="1000">
                <div class="row">
                    <div class="col-md-8">
                        {/* <!-- product pics --> */}
                        <div class="product-info row" data-aos="zoom-in" data-aos-duration="1000">
                            
                            <div class="col-md-6">
                                <div class="product-pic">
                                    <img class="img-responsive" width="100%" src="./assets/images/paracetamol.svg"  alt="paracetamol"/>

                                    <div class="row mini-pics">
                                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                                            <div class="col">
                                                <div class="card h-100 border-0 mx-auto text-center">
                                                  <img class="img-rounded my-3" src="./assets/images/paracetamol.svg"  alt="paracetamol"/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card h-100 border-0 mx-auto text-center">
                                                  <img class="img-rounded my-3" src="./assets/images/paracetamol.svg"  alt="paracetamol"/>
                                                </div>
                                            </div>
                                            <div class="col">
                                                <div class="card h-100 border-0 mx-auto text-center">
                                                  <img class="img-rounded my-3" src="./assets/images/paracetamol.svg"  alt="paracetamol"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="ps-3 product-text">
                                    <h3 class="product-name my-4">Paracetamol</h3>
                                    <p class="cost my-4">from $700.0</p>
                                    <p class="product-feature my-4">Product Features</p>
                                    <ul>
                                        <li class="my-4">Natural Fibre</li>
                                        <li class="my-4">Pain Reliever</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* <!-- product description --> */}
                        <div class="product-detail-description mt-4" data-aos="zoom-in" data-aos-duration="1000">
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
                                    <h3 class="my-4 py-3">Buy Paracetamol Online</h3>
                                    <p class="my-4 py-3">
                                        You can buy Fybogel online from our UK registered pharmacy. We have a variety of flavours and sizes available to suit all people. We can quickly get Fybogel to you to relieve your constipation comfortably. Simply add to the basket and we can send the medicine to you directly through the mail, right to your door.
                                    </p>

                                    <h5 class="my-4 py-3">What is Fybogel</h5>
                                    <p class="my-4 py-3">Fybogel provides natural relief from constipation through the active ingredient Ispaghula Husk. This is a natural way of increasing fibre in your diet. Having a high fibre diet promotes regular bowel movements naturally with your body. It promotes healthy bowel function without the need for stimulant laxatives which can cause straining, discomfort or unnatural urgency.</p>

                                    <p class="my-4 py-3">As the medicine contains natural fibre, it may be used to relieve constipation during pregnancy as well as helping to maintain a normal bowel function in those who suffer from haemorrhoids (piles).</p>
                                    <h5 class="my-4 py-3">How does Fybogel work?</h5>
                                    <p class="my-4 py-3">
                                        Fybogel works naturally to relieve constipation by increasing fibre. Fibre increases the weight and size of your stool and softens it. This makes them more regular and easier to pass.
                                    </p>
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

                    <div class="col-md-4" data-aos="fade-in" data-aos-duration="1000">
                        <div class="card product-variation">
                            <div class="card-header">
                                <h5 class="card-title">Order within <span>3 hrs 54 mins</span> for guaranteed next day delivery options</h5>
                            </div>
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label  class="form-label mb-3 cost">from $10.00</label>
                                      </div>
                                      <div class="mb-3">
                                        <label class="form-label mb-3 select-variation">Select Variation</label>
                                      </div>
                                    <div class="mb-3">
                                      <label for="exampleInputEmail1" class="form-label mb-3 text-thin">Strength</label>
                                      <select class="form-control">
                                        <option value="100mg">100mg</option>
                                      </select>
                                    </div>
                                    <div class="mb-3">
                                      <label for="exampleInputPassword1" class="form-label mb-3 text-thin">Quantity</label>
                                      <input type="number" class="form-control" id="exampleInputPassword1" value="2"/>
                                    </div>
                                    <button type="submit" class="btn  w-100">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>


        {/* <!-- footer starts -->*/}


        <Footer />
        </div>
     );

     }
}

export default Product;