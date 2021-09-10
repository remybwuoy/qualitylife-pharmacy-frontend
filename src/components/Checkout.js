import React from 'react';
import Header from './Header';
import Footer from './Footer';


class Checkout extends React.Component {
 render(){
     return(
        <div>
            <Header />

       
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
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item">Home</li>
                        <li class="breadcrumb-item" aria-current="page">Shop</li>
                        <li class="breadcrumb-item" aria-current="page">Pains</li>
                        <li class="breadcrumb-item" aria-current="page">Paracetamol</li>
                        <li class="breadcrumb-item active" aria-current="page">Checkout</li>
                    </ol>
                </nav>
                <hr/>
            </div>        

            <div class="product-checkout-info">
                <div class="row">
                    <div class="col-md-8">
                        {/* <!-- product pics --> */}
                        <div class="card order-summary p-4">
                            <h3>Order Summary</h3>
                            <hr/>
                            <table class="my-3">
                                <tr>
                                    <th class="t-item">Item</th>
                                    <th class="t-variation">Variation</th>
                                    <th class="t-unit">Unit</th>
                                    <th class="t-quantity">Quantity</th>
                                    <th class="t-cost">Cost</th>
                                    <th class="t-trash"></th>
                                </tr>
                                <tr>
                                    <td>
                                        <p><img src="./assets/images/paracetamol.svg" width="100px"/></p>
                                    </td>
                                    <td>
                                        <p>1000mg</p>
                                    </td>
                                    <td>
                                        <p>&pound; 7.00</p>
                                    </td>
                                    <td class="mx-auto">
                                        <p class="border text-center w-50">1</p>
                                    </td>
                                    <td>
                                        <p>&pound; 7.00</p>
                                    </td>
                                    <td>
                                        <p><i class="fa fa-trash"></i></p>
                                    </td>
                                </tr>
                                {/* <!-- subtotal dive --> */}
                                <tr>
                                    <td colspan="4">
                                        <p>Sub total</p>
                                    </td>
                                    <td>
                                        <p>&pound; 7.00</p>
                                    </td>
                                    <td>
                                        <p>&nbsp;</p>
                                    </td>
                                </tr>
                                {/* <!-- divider line --> */}
                                <tr>
                                    <td colspan="6">
                                        <hr/>
                                    </td>
                                </tr>
                                {/* <!-- voucher code --> */}
                                <tr>
                                    <td colspan="2" class="py-3">
                                        <p>Voucher Code</p>
                                    </td>
                                    <td colspan="4">
                                        <div class="input-group">
                                            <input type="text" class="form-control" aria-describedby="basic-addon2"/>
                                            <span class="input-group-text bg-red" id="basic-addon2">Apply Code</span>
                                        </div>
                                    </td>
                                </tr>
                                {/* <!-- divider line --> */}
                                <tr>
                                    <td colspan="6">
                                        <hr/>
                                    </td>
                                </tr>
                                {/* <!-- standard delivery drop-down --> */}
                                <tr class="my-3">
                                    <td colspan="2" >
                                        
                                        <div class="form-group">
                                            <select class="form-control">
                                                <option class="text-bold">Standard Delivery (2-5 days)</option>
                                            </select>
                                        </div>
                                    </td>
                                    <td colspan="2">
                                        {/* <!-- <p class="text-right">&pound;3.00</p> --> */}
                                    </td>
                                    <td>
                                        <p class="text-right">&pound;3.00</p>
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                {/* <!-- divider line --> */}
                                <tr class="py-3">
                                    <td colspan="6">
                                        <hr/>
                                    </td>
                                </tr>
                                {/* <!-- total --> */}
                                <tr class="my-3">
                                    <td colspan="4" >
                                        <h3>Total</h3>
                                    </td>
                                    <td colspan="2">
                                        <h3 class="text-green">&pound;13.00</h3>
                                    </td>
                                </tr>
                            </table>
                            <button type="submit" class="btn  w-100">Continue Shipping</button>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <h3>Checkout Now</h3>
                        <div class="card my-3">
                            <div class="card-body">
                                <form>
                                    <div class="mb-3">
                                        <label  class="form-label mb-3">Member Already?</label>
                                    </div>
                                    <div class="mb-3">
                                        <label  class="form-label mb-3">Signed up for an account previously? Sign in here to speed up the checkout process.</label>
                                    </div>
                                    <button type="submit" class="btn  w-100">Sign in</button>
                                </form>
                            </div>
                        </div>

                        <label class="my-4 form-heading">Patients Details</label>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Gender <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">First name <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Last name <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Email <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Password <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class=" my-4 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                Click to check Password
                            </label>
                        </div>
                        <label class="my-4 form-heading">Billing Details</label>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Country <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Phone <span class="text-danger">*</span></label>
                            <div class="col-sm-3">
                              <input type="text" class="form-control" value="+233"/>
                            </div>
                            <div class="col-sm-6">
                                <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Postal/Zip <span class="text-danger">*</span></label>
                            <div class="col-sm-9 ">
                                <div class="input-group">
                                    <input type="text" class="form-control" aria-describedby="basic-addon2"/>
                                    <span class="input-group-text bg-red" id="basic-addon2">Find Address</span>
                                </div>
                            </div>
                        </div>
                        <div class=" my-4 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                              I cant find my address
                            </label>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Address 1 <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-3 col-form-label">Address 2 <span class="text-danger">*</span></label>
                            <div class="col-sm-9">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class="my-4 row">
                            <label for="inputGender" class="col-sm-2 col-form-label">City <span class="text-danger">*</span></label>
                            <div class="col-sm-10">
                              <input type="text" class="form-control"/>
                            </div>
                        </div>
                        <div class=" my-4 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                              Ship to this address
                            </label>
                        </div>
                        <div class=" my-4 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                I would like to be sent discount codes on products
                            </label>
                        </div>
                        <div class=" my-4 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label" for="flexCheckDefault">
                                I would like to be sent special offers on products
                            </label>
                        </div>
                        <div class=" my-4 form-check">
                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                            <label class="form-check-label comfirm-text" for="flexCheckDefault">
                                Please confirm that you have read the <span class="text-danger">Terms & Conditions</span>
                            </label>
                        </div>
                        <button type="submit" class="btn  w-100">Review and Pay for your order</button>
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

export default Checkout;