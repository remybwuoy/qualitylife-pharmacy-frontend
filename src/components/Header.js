import React from 'react';
// import './assets/css/style.css';

class Header extends React.Component {
 render(){
     return(
        <div>
        {/* <!-- top header --> */}
        <div class="container-fluid p-0 m-0">
            <div class="top-header">
                <div class="row align-items-center m-0 p-0">
                    <div class="col-md-4 col-sm-6 my-3">
                       <img src="./assets/images/top-logo.svg" alt="logos" />
                    </div>

                    <div class="col-md-8 col-sm-6 my-3">
                        <div class="mb-4">
                            <div class="row text-center top-customer-service-info">
                                <div class="col-sm-6 customer-service-number mt-2">      
                                    <a class="text-dark" href="tel: 000 000 000"> <i class="fa fa-phone-alt fa-1x"></i> Customer Service +00 000 00000 </a>
                                </div>
                                <div class="col-sm-2 mt-1">
                                    <a class="" href="#">Contact Us</a>
                                </div>
                                <div class="col-sm-2 mt-1">
                                    <a class="" href="#">Login</a>
                                </div>
                                <div class="col-sm-2 mt-1">
                                    <button class="text-center btn btn-rounded">
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="input-group mb-3">
                            <input type="text" class="form-control" placeholder="Search for a product or category" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
                            <span class="input-group-text bg-red" id="basic-addon2"><i class="fa fa-search"></i></span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        {/* <!-- nav bar --> */}
        <div class="container-fluid p-0 m-0">
            <nav class="navbar navbar-expand-lg navbar-dark text-white bg-dark">
                <div class="container-fluid px-4">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse text-white">
                        <ul class="w-100 navbar-nav nav-pills nav-fill p-0 text-white">
                            <li class="nav-item">
                                <a class="nav-link" aria-current="page" href="#">Direct Prescription</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Online Doctor
                                </a>
                                <ul class="dropdown-menu rounded-3" aria-labelledby="navbarDropdown">
                                    <div class="container me-4 overflow-hidden text-left">
                                        <div class="row" style={{width: '400px', height:'auto'}}>
                                            <div class="col-sm-6 border-right border-color-dark text-bold">
                                                <li><a class="dropdown-item" href="#">Mens Health <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Womens Health <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">General Health <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Sexual Health <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Travel Health <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Chronic Conditions <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Testing Kits <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">How it works <i class="fas fa-chevron-right"></i></a></li>
                                            </div>
                                            <div class="col-sm-6">
                                                <li><a class="dropdown-item" href="#">Erectile Dysfuction <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Hair Loss <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Premature Ejaculation <i class="fas fa-chevron-right"></i></a></li>
                                                <li><a class="dropdown-item mt-2" href="#">Low Testosterone <i class="fas fa-chevron-right"></i></a></li>
                                            </div>
                                        </div>
                                    </div>
                                </ul>
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
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="fa fa-user">&nbsp;</i>&emsp;Account
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">Action</a></li>
                                    <li><a class="dropdown-item" href="#">Another action</a></li>
                                    <li><hr class="dropdown-divider"/></li>
                                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

        </div>
     );

     }
}

export default Header;