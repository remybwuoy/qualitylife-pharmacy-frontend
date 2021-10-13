import React from 'react';
import Header from './Header';
import Footer from './Footer';


class Shop extends React.Component {
 render(){
     return(
        <div>
        {/* <!-- top header --> */}
        <div class="container-fluid p-0 m-0">
            <div class="top-header">
                <div class="row align-items-center m-0 p-0">
                    <div class="col-md-5 col-sm-6 my-3">
                      <img src="./assets/images/top-logo.svg"/>
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
                            {/* <!-- <ul class="nav nav-pills nav-justified">
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
                            </ul> --> */}
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search for a product or category" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span class="input-group-text" id="basic-addon2"><i class="fa fa-search"></i></span>
                        </div>

                    </div>

                    {/* <!-- <div class="col-md-3 col-sm-4 my-3 customer-service-number">
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

       
        <div data-aos="zoom-in" data-aos-duration="1000" class="container-fluid body-content">
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
                    <li class="breadcrumb-item active" aria-current="page">Shop</li>
                    </ol>
                </nav>
                <hr/>
            </div>
            

            <div class="shop-sheet">
                <p>Refine your search</p>

                <div class="row">
                    {/* <!-- categories --> */}
                    <div class="col-md-3" data-aos="slide-left" data-aos-duration="1000">
                        <div class="accordion" id="accordionExample">
                            <div class="accordion-item">
                              <h2 class="accordion-header filter-accordion">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                  Categories
                                </button>
                              </h2>
                              <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id=""/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Acne
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id=""/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Allegy + Hayfever
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                            <div class="accordion-item">
                              <h2 class="accordion-header filter-accordion" id="headingTwo">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                  Brands
                                </button>
                              </h2>
                              <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                <div class="accordion-body">
                                    <ul>
                                        <li>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id=""/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    4head
                                                </label>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="form-check">
                                                <input class="form-check-input" type="checkbox" value="" id=""/>
                                                <label class="form-check-label" for="flexCheckDefault">
                                                    Aciclovir
                                                </label>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- items --> */}
                    <div class="col-md-9" data-aos="slide-right" data-aos-duration="1000">
                        <div class="item-listed">
                            <h4 class="display-heading">
                                All Products
                            </h4>
                            <hr/>
                            <div class="d-flex bd-highlight mb-3">
                                <div class="p-2">500 products</div>
                                {/* <!-- <div class="p-2">Flex item</div> --> */}
                                <div class="ms-auto p-2">
                                    <div class="dropdown">
                                        <button class="btn dropdown-toggle bg-b-black" id="sortbut" type="button"  data-bs-toggle="dropdown" aria-expanded="false">
                                          Sort
                                        </button>
                                        <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
                                          <li><button class="dropdown-item" type="button">Action</button></li>
                                          <li><button class="dropdown-item" type="button">Another action</button></li>
                                          <li><button class="dropdown-item" type="button">Something else here</button></li>
                                        </ul>
                                      </div>
                                </div>
                            </div>
                            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-4 g-4">
                                <div class="col">
                                  <div class="card h-100 border-0 px-4 mx-auto text-center">
                                    <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style=""/>
                                    <div class="card-body">
                                      <h5 class="card-title">Paracetamol 250mg</h5>
                                      <p class="card-text">From £7.00</p>
                                    </div>
                                    <div class="card-footer mx-auto bg-white border-0">
                                        <button class="mx-auto btn">
                                            View Item
                                        </button>
                                    </div>
                                  </div>
                                </div>

                                <div class="col">
                                    <div class="card h-100 border-0 px-4 mx-auto text-center">
                                      <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style=""/>
                                      <div class="card-body">
                                        <h5 class="card-title">Paracetamol 250mg</h5>
                                        <p class="card-text">From £7.00</p>
                                      </div>
                                      <div class="card-footer mx-auto bg-white border-0">
                                          <button class="mx-auto btn">
                                              View Item
                                          </button>
                                      </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card h-100 border-0 px-4 mx-auto text-center">
                                      <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style=""/>
                                      <div class="card-body">
                                        <h5 class="card-title">Paracetamol 250mg</h5>
                                        <p class="card-text">From £7.00</p>
                                      </div>
                                      <div class="card-footer mx-auto bg-white border-0">
                                          <button class="mx-auto btn">
                                              View Item
                                          </button>
                                      </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card h-100 border-0 px-4 mx-auto text-center">
                                      <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style=""/>
                                      <div class="card-body">
                                        <h5 class="card-title">Paracetamol 250mg</h5>
                                        <p class="card-text">From £7.00</p>
                                      </div>
                                      <div class="card-footer mx-auto bg-white border-0">
                                          <button class="mx-auto btn">
                                              View Item
                                          </button>
                                      </div>
                                    </div>
                                </div>
                                
                                <div class="col">
                                    <div class="card h-100 border-0 px-4 mx-auto text-center">
                                      <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style=""/>
                                      <div class="card-body">
                                        <h5 class="card-title">Paracetamol 250mg</h5>
                                        <p class="card-text">From £7.00</p>
                                      </div>
                                      <div class="card-footer mx-auto bg-white border-0">
                                          <button class="mx-auto btn">
                                              View Item
                                          </button>
                                      </div>
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="card h-100 border-0 px-4 mx-auto text-center">
                                      <img class="img-rounded my-3" src="./assets/images/paracetamol.svg" style=""/>
                                      <div class="card-body">
                                        <h5 class="card-title">Paracetamol 250mg</h5>
                                        <p class="card-text">From £7.00</p>
                                      </div>
                                      <div class="card-footer mx-auto bg-white border-0">
                                          <button class="mx-auto btn">
                                              View Item
                                          </button>
                                      </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <hr class="mt-4 mb-2"/>
            {/* <!-- pagination --> */}
            {/* <!-- <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item disabled">
                    <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#">Next</a>
                  </li>
                </ul>
            </nav> --> */}
            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li class="page-item"><a class="page-link" href="#">1</a></li>
                  <li class="page-item"><a class="page-link" href="#">2</a></li>
                  <li class="page-item"><a class="page-link" href="#">3</a></li>
                  <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next">
                      <span aria-hidden="true">&raquo;</span>
                    </a>
                  </li>
                </ul>
            </nav>
        </div>


        {/* <!-- footer starts -->
        <!-- useful linke --> */}
        <div data-aos="slide-up" data-aos-duration="1000" class="container-fluid userful-link">
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
        <div data-aos="fade-up" data-aos-duration="1000" class="container-fluid">
            <div class="mx-auto text-center row">
                <img class="mx-auto col-md-6 offset-md-3" src="./assets/images/payment.svg" width="100%"/>
            </div>
            
        </div>


        <Footer />

        </div>
     );

     }
}

export default Shop;