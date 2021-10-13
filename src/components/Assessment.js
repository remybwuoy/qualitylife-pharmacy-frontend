import React from 'react';
import Header from './Header';
import Footer from './Footer';



class Assessment extends React.Component {
 render(){
     return(
        <div>
        {/* <!-- top header --> */}
        <Header />
       
        <div class="container-fluid body-content">
            {/* <!-- second nav --> */}
            <nav class="navbar navbar-expand-lg navbar-dark" id="secondNav">
                <div class="container-fluid px-4 text-left">
                  {/* <!-- <div class="navbar text-left" id="navbarSupportedContent2"> --> */}
                    <ul class="w-100 navbar-nav nav-pills nav-fill p-0">
                        <li class="nav-item">
                            <a href="#" class="nav-link"><i class="fa fa-check-circle"></i>&nbsp;Express Delivery</a>
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
                            <a  class="nav-link" href="#"><i class="fa fa-check-circle"></i>&nbsp;Confidential & Discrete</a>
                        </li>
                    </ul>
                  {/* <!-- </div> --> */}
                </div>
            </nav>

            <div class="assessment-div">
                <div class="row">
                <h3 class="my-4">Assessment</h3>

                    <div class="col-md-8 ">
                        <div class="login rounded-3">
                            <h5 class="py-3"> Ordered Before? <span class="text-red">Log in</span> now, and save time completing your assessment.</h5>
                        </div>
                    </div>
                </div>
                <div class="row mb-4">
                    <div class="col-md-8">
                        <div class="accordion text-bold rounded-3" id="accordionExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                <b>Your Hair Loss</b>
                                </button>
                                </h2>
                                <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                   <b> Your Health</b>
                                </button>
                                </h2>
                                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="headingThree">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    <b>Consent</b>
                                </button>
                                </h2>
                                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row mt-4 d-flex justify-content-center">
                            <div class="col-md-4">
                                <a href="#"><button class="btn btn-outline-danger btn-lg">Cancel Assessment</button></a>
                            </div>
                            <div class="col-md-4"></div>
                            <div class="col-md-4">
                                <a href="#"><button class="btn btn-danger btn-lg">Continue to medication</button></a>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="assessment-progress">
                            <div class="card">
                                <div class="card-header text-center">
                                    <p class="card-title py-2">Assessment Progress</p>
                                </div>
                                <div class="card-body">
                                {/* const instance = (
                                <Timeline className="custom-timeline">
                                    <Timeline.Item dot={< 1 />}>
                                    <p>Your Hair Loss</p>
                                    </Timeline.Item>
                                    <Timeline.Item dot={<2 />}>
                                    <p>Your Health</p>
                                    </Timeline.Item>
                                    <Timeline.Item dot={<3 />}>
                                    <p>Consent</p>
                                    </Timeline.Item>
                            
                                </Timeline>
                                );

                                ReactDOM.render(instance); */}
                                    <div class="timeline">
                                        <div class="container right">
                                            <div class="content">
                                                <h5>Your Hair Loss</h5>     
                                            </div>
                                        </div>
                                        <div class="container right">
                                            <div class="content">
                                                <h5>Your Health</h5>
                                            </div>
                                        </div>                                       
                                         <div class="container right">
                                            <div class="content">
                                            <h5>Consent</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                </div>
               
            </div>
            <h3 class="my-4 mt-5">Hair Loss treatment options</h3>

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
                                        <img src="./images/paracetamol.svg" class="w-100"/>
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
                                        <img src="./assets/images/paracetamol.svg" alt="paracetamol" class="w-100"/>
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
                                        <img src="./assets/images/paracetamol.svg" alt="paracetamol" class="w-100"/>
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

    
        {/* <!-- footer starts -->*/}
            <Footer />
   
        </div>
     );

     }
}

export default Assessment;