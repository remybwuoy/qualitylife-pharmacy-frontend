import React from 'react';

class Footer extends React.Component {
 render(){
     return(
        <div>
              {/* <!-- useful linke --> */}
        <div data-aos="fade-in" data-aos-duration="1000" class="container-fluid userful-link">
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
                                <img src="./assets/images/small-icons/twitter.svg" class="mx-1" alt="icon"/>
                                <img src="./assets/images/small-icons/facebook.svg" class="mx-1" alt="icon"/>
                                <img src="./assets/images/small-icons/linkedin.svg" class="mx-1" alt="icon"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        {/* <!-- payment integration --> */}
        <div data-aos="fade-out" data-aos-duration="1000" class="container-fluid">
            <div class="mx-auto text-center row">
                <img class="mx-auto col-md-6 offset-md-3" src="http://qualitylifepharmacy.teamalfy.online/images/payment.svg" alt="svg" width="100%"/>
            </div>
            
        </div>
            {/* <!-- footer --> */}
            <div class="container-fluid page-footer text-center">
                <p>Copyright &copy; 2021. Quality Life Pharmacy. All rights reserved</p>
            </div>
        </div>
     );

     }
}

export default Footer;