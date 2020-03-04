function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["payments-payment-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/amazon-pay/amazon-pay.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/amazon-pay/amazon-pay.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsAmazonPayAmazonPayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <div class=\"row\">\n    <div\n     class=\"col-md-12\">\n        <div class=\"GoBaskt\"><span class=\"go\">GoBaskt</span> <span class=\"head\">&nbsp;&nbsp;Merchant Plans</span></div>\n<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<h2 style=\"font-weight: bold; font-size: 25px;\">Choose Payment Methods</h2><br>\n    </div>\n  </div>\n</div>\n<div class=\"container\">\n  <div class=\"row\">\n      <div class=\"col-md-4\">\n        <div style=\"width:300px; background-color: rgba(171, 198, 255, 0.39);\" class=\"sidebar\">\n\n\n   <br><button  class=\"btn btn-outlined sidebtn\" [routerLink]=\"['/payment/creditpay']\"><h4><i class=\"far fa-credit-card\"></i><a>&nbsp;&nbsp;Credit/Debit Card</a> </h4></button>\n <br>  <button class=\"btn btn-outlined sidebtn\"  [routerLink]=\"['/payment/gpay']\"><h4><i class=\"fab fa-google-wallet\"></i><a>&nbsp;&nbsp;Google Wallet</a></h4> </button>\n   <br><button class=\"btn btn-outlined sidebtn\" [routerLink]=\"['/payment/netbanking']\"><h4><i class=\"fas fa-university\"></i><a>&nbsp;&nbsp;Netbanking</a></h4></button>\n  <br> <button class=\"btn btn-outlined sidebtn\" [routerLink]=\"['/payment/amazon']\"><h4><i class=\"fab fa-cc-amazon-pay\"></i><a>&nbsp;&nbsp;Amazon Pay<br><br> </a></h4></button>\n           </div>\n       </div>\n        <div class=\"col-md-8\">\n          </div>\n\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/credit-pay/credit-pay.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/credit-pay/credit-pay.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsCreditPayCreditPayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"row followers\" style=\"margin: 0;\">\n  <div class=\"col-3 background\">\n    <app-custom-payment></app-custom-payment>\n  </div>\n  <div class=\"col-9\">\n    <div class=\"container-fluid mt-4\">\n      <div class=\"row\">\n        <!-- <div class=\"col-4\"> -->\n        <mat-card class=\"card1\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              <img src=\"../../../assets/images//subscription/empty-state.png\"></div>\n            <div class=\"col-md-8 font-family\">\n              <h5 style=\"font-weight: bold;\">No Saved Cards</h5>\n              At this moment &nbsp;!\n              <p style=\"font-size:10px;\">please add a new card below</p>\n            </div>\n          </div>\n        </mat-card>\n        <!-- </div> -->\n      </div>\n      <div class=\"row mt-2\">\n        <h4 style=\"font-weight:bold;\">Add a new card</h4>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n          <p>we accept</p>&nbsp;\n          <img src=\"../../../assets//images/subscription/visa.png\"> &nbsp;&nbsp;\n          <img src=\"../../../assets//images/subscription/group-2.png\">&nbsp;&nbsp;\n          <img src=\"../../../assets//images/subscription/bitmap.png\">&nbsp;&nbsp;\n        </div>\n      </div>\n      <div class=\"mt-2\">\n        <h4>Enter Card Details:</h4>\n      </div>\n      <!-- <div class=\"row\"> -->\n      <div>\n        <div class=\"form-group\" style=\"font-weight: 600;\">\n          <input class=\"form-control card-details\" placeholder=\"Card number\" type=\"text\"></div>\n      </div>\n      <!-- </div> -->\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <div>\n            <div class=\"form-group\" style=\"font-weight: 600;\">\n              <input class=\"form-control card-details\" id=\"inputEmail1\" placeholder=\"Valid Through(MM/YY)\" type=\"text\">\n            </div>\n          </div>\n        </div>\n        <div class=\"col-6\">\n          <div>\n            <div class=\"form-group\" style=\"font-weight: 600;\">\n              <input class=\"form-control card-details\" id=\"inputEmail1\" placeholder=\"CVV\" type=\"text\"></div>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"row\"> -->\n      <div>\n        <div class=\"form-group\" style=\"font-weight: 600;\">\n          <input class=\"form-control card-details\" placeholder=\"Name On the Card\" type=\"text\"></div>\n      </div>\n      <!-- </div> -->\n      <div class=\"form-check mb-2\">\n        <input type=\"checkbox\" class=\"form-check-input\" id=\"dropdownCheck\">\n        <label class=\"form-check-label\" for=\"dropdownCheck\">\n          Save this card for future payment\n        </label>\n      </div>\n      <div class=\"form-group last\">\n        <div class=\"col-sm-12\">\n          <button type=\"submit\" class=\"col-sm-12 btn-clr-blue btn btn-sm\">\n            Pay $2650</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/footer/footer.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/footer/footer.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer class=\"pt-5 pb-1 bg-blue font-family\">\n  <div class=\"container\">\n    <div class=\"row f-15\">\n      <div class=\"col-sm-3 text-left text-center-csss\">\n        <a href=\"#\"><img class=\"img-fluid mb-2\" src=\"assets/images/icons/about-us.png\" alt=\"aboutus\" /></a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">About</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Overview</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">How does it work ?</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">FAQ</p>\n        </a>\n      </div>\n      <div class=\"col-sm-3 text-left text-center-csss\">\n        <a href=\"#\"><img class=\"img-fluid mb-2\" src=\"assets/images/icons/partner-portal.png\" alt=\"Partner Portal\" /></a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Partner Portal</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Our partners</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Login</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Join us</p>\n        </a>\n      </div>\n      <div class=\"col-sm-3 text-left text-center-csss\">\n        <a href=\"#\"><img class=\"img-fluid mb-2\" src=\"assets/images/icons/content-services.png\"\n            alt=\"Content & Services\" /></a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Content & Services</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Offers</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Create Shopping list</p>\n        </a>\n        <a href=\"#\">\n          <p class=\"p-15 my-1\">Compare prices</p>\n        </a>\n      </div>\n      <div class=\"col-sm-3 text-center text-center-csss\">\n        <a href=\"#\">\n          <p class=\"p-15 mx-5\">Download & View offers on the go !</p>\n        </a>\n        <a href=\"https://play.google.com/store\" target=\"_blank\"><img class=\"img-fluid mb-2\"\n            src=\"assets/images/google-play.png\" alt=\"Play Store\" /></a>\n        <div class=\"pt-3\">\n          <a href=\"https://www.facebook.com/\" target=\"_blank\" class=\"p-16\"><img class=\"img-fluid mb-2\"\n              src=\"assets/images/icons/facebook.png\" alt=\"facebook\" /></a>\n          <a href=\"https://twitter.com/\" target=\"_blank\" class=\"p-16\"><img class=\"img-fluid mb-2\"\n              src=\"assets/images/icons/twitter.png\" alt=\"twitter\" /></a>\n          <a href=\"https://www.youtube.com/\" target=\"_blank\" class=\"p-16\"><img class=\"img-fluid mb-2\"\n              src=\"assets/images/icons/youtube.png\" alt=\"youtube\" /></a>\n        </div>\n        <div class=\"pt-3\">\n          <a href=\"https://in.linkedin.com/\" target=\"_blank\" class=\"p-16\"><img class=\"img-fluid mb-2\"\n              src=\"assets/images/icons/linkedin.png\" alt=\"linkedin\" /></a>\n          <a href=\"https://www.instagram.com/\" target=\"_blank\" class=\"p-16\"><img class=\"img-fluid mb-2\"\n              src=\"assets/images/icons/instagram.png\" alt=\"instagram\" /></a>\n          <a href=\"https://in.pinterest.com/\" target=\"_blank\" class=\"p-16\"><img class=\"img-fluid mb-2\"\n              src=\"assets/images/icons/pinterest.png\" alt=\"pinterest\" /></a>\n        </div>\n      </div>\n    </div>\n    <div class=\"text-center text-white\">\n      <img class=\"img-fluid mb-2\" src=\"assets/images/logo-transprent.png\" alt=\"Logo\" />\n      <p class=\"copy-right\">Copyright © 2019, GoBaskt. All rights reserved.</p>\n    </div>\n  </div>\n  <!-- /.container -->\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/google-pay/google-pay.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/google-pay/google-pay.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsGooglePayGooglePayComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"row followers\" style=\"margin: 0;\">\n  <div class=\"col-3 background\">\n    <app-custom-payment></app-custom-payment>\n  </div>\n  <div class=\"col-9\">\n    <h6>Google Wallet</h6>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/header/header.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/header/header.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-light-blue\">\n    <!-- [ngClass]=\"bgClass\" -->\n    <nav class=\"navbar navbar-expand-lg navbar-light container mt-0\">\n        <div class=\"d-flex\">\n            <span class=\"w-100 d-lg-none d-block\">\n                <!-- hidden spacer to center brand on mobile --></span>\n            <a [routerLink]=\"['/consumer/home']\" class=\"navbar-brand\">\n                <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\n            </a>\n            <!-- <div>\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n            </div> -->\n        </div>\n        <div class=\"collapse navbar-collapse\" id=\"myNavbar\">\n            <ul class=\"navbar-nav flex-nowrap\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link  menu-item nav-active\">Merchant Plans</a>\n                </li>\n            </ul>\n        </div>\n    </nav>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/netbanking/netbanking.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/netbanking/netbanking.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsNetbankingNetbankingComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"row followers\" style=\"margin: 0;\">\n  <div class=\"col-3 background\">\n    <app-custom-payment></app-custom-payment>\n  </div>\n  <div class=\"col-9\">\n      <div class=\"container\">\n        <p style=\"font-weight: bold;\">Choose desired Bank </p>\n        <div class=\"row\">\n          <div class=\"col-md-4 m-1\">\n            <mat-card>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <img src=\"../../../assets/images/subscription/citi.png\">\n                </div>\n                <div class=\"col-md-9\">\n                  <p style=\"font-weight:bold; font-size: 14px;\">&nbsp;Citi Bank\n                </div>\n              </div>\n            </mat-card>\n          </div>\n          <div class=\"col-md-4 m-1\">\n            <mat-card>\n              <div class=\"row\">\n                <div class=\"col-md-2\">\n            \n                  <img src=\"../../../assets/images/subscription/1200-px-american-express-logo-2018-svg.png\">\n                </div>\n                <div class=\"col-md-9\">\n                  <p style=\"font-weight:bold; font-size: 14px;\">American Express\n                </div>\n              </div>\n            </mat-card>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 m-1\">\n            <mat-card>\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n            \n                  <img src=\"../../../assets/images/subscription/barclays-logo.png\">\n                </div>\n                <div class=\"col-md-9\">\n                  <p style=\"font-weight:bold; font-size: 14px;\"> Barclays bank\n                </div>\n              </div>\n            </mat-card>\n          </div>\n          <div class=\"col-md-4 m-1\">\n            <mat-card >\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n            \n                  <img src=\"../../../assets/images/subscription/hsbc-3.png\">\n                </div>\n                <div class=\"col-md-9\">\n                  <p style=\"font-weight:bold;\"> HSBC bank\n                </div>\n              </div>\n            </mat-card>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-md-4 m-1\">\n            <mat-card >\n              <div class=\"row\">\n                <div class=\"col-md-3\">\n                  <img src=\"../../../assets/images/subscription/download-8.png\">\n                </div>\n                <div class=\"col-md-9\">\n                  <p style=\"font-weight:bold; font-size: 14px;\">RBC Royal Bank\n                </div>\n              </div>\n            </mat-card>\n          </div>\n        </div>\n        <hr class=\"dash\">\n        <div class=\"row\">\n          <select class=\"drop\">\n            <option>Other Banks</option>\n            <option>PNC Financial Services</option>\n            <option> Charles Schwab Corporation</option>\n            <option>The Bank of New orkY Mellon</option>\n            <option>The Bank of New orkY Mellon</option>\n          </select>\n        </div>\n        <div class=\"row  mt-2\">\n          <div class=\"col-sm-6 text-center\">\n            <button type=\"submit\" class=\"col-sm-12 btn-clr-blue btn btn-sm\">\n              Pay $2650</button>\n          </div>\n        </div>\n      </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/paymentPortal/custom-payment.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/paymentPortal/custom-payment.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsPaymentPortalCustomPaymentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n  <div class=\"clearfix\">\n    <div class=\"my-4\"><p class=\"font-weight-bold\">Choose Payment Methods</p></div>\n    <div>\n      <ul style=\"list-style: none;\" class=\"p-0\">\n      <li class=\"font-weight-bold my-4 cursor-pointer\" [routerLink]=\"['/payment/creditpay']\"><i class=\"far fa-credit-card\"></i>&nbsp;&nbsp;Credit/Debit\n            Card</li>\n      <li class=\"font-weight-bold my-4 cursor-pointer\" [routerLink]=\"['/payment/gpay']\"><i class=\"fab fa-google-wallet\"></i>&nbsp;&nbsp;Google Wallet\n      </li>\n      <li class=\"font-weight-bold my-4 cursor-pointer\" [routerLink]=\"['/payment/netbanking']\"><i class=\"fas fa-university\"></i>&nbsp;&nbsp;Netbanking\n      </li>\n      <li class=\"font-weight-bold my-4 cursor-pointer\" [routerLink]=\"['/payment/amazon']\"><i class=\"fab fa-cc-amazon-pay\"></i>&nbsp;&nbsp;Amazon Pay</li>\n      </ul>\n    </div>\n  </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/subscription/subscription.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/payments/subscription/subscription.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPaymentsSubscriptionSubscriptionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n  <app-header></app-header>\n  <div class=\"row my-2\">\n    <div class=\"col-md-4 font-family\">\n      <h1 class=\"mb-4 font-family\">Register for 3 months free trial for Basic Plan</h1>\n      <div>\n        This Free Subscription will include 3 Months free trial for Basic Plan.\n        <img src=\"../../../assets/images/icons/more.png\" class=\"pos\" (click)=\"isCollapsed = !isCollapsed\"\n          [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample \">\n      </div>\n      <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\n        <div>\n          <p class=\"m-0\">-No credit card is required</p>\n          <p class=\"m-0\">-Cancle the subscription anytime</p>\n          <p class=\"m-0\">-1 month free trial for Advance Plan</p>\n          <p class=\"m-0\">-15 days free trial for Premium Plan</p>\n        </div>\n      </div>\n      <p>pay yearly<mat-slide-toggle></mat-slide-toggle>\n        pay monthly<p>\n          <p>All prices are in $USD</p>\n    </div>\n    <div class=\"col-md-8\">\n      <img src=\"../../../assets/images/subscription/group-14.png\">\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-4\">\n      <mat-card class=\"fun\">\n        <h1 class=\"text-center font-weight-bold\">Basic Plan</h1>\n        <p class=\"text-center\"><span class=\"dell\">$33</span>/month</p>\n        <p class=\"text-center\">When billed annually</p>\n        <mat-card-content>\n          <p class=\"m-0\">Upto 2 offers per month on website, mobile app, FB mssgr, alexa mobile app, alexa voice,\n            google assistant, google home, WhatsApp</p>\n          <p class=\"m-0\">All the Offers displayed will be valid for 1 month only</p>\n          <p class=\"m-0\">200$ per ad placed on GoBaskt digital & voice channels</p>\n          <p class=\"m-0\">Upto 10 return offers for customers redeeming offers</p>\n          <p class=\"m-0\">Basic analytics on offers</p>\n          <p class=\"m-0\">Free Offer build</p>\n          <p class=\"m-0\">Free Ad build</p>\n        </mat-card-content>\n        <mat-card-footer class=\"text-center\"><button class=\"GetStarted1\" [routerLink]=\"['/payment/creditpay']\">Get\n            Started</button> </mat-card-footer>\n      </mat-card>\n    </div>\n    <div class=\"col-md-4\">\n      <mat-card class=\"fun\">\n        <h1 class=\"text-center font-weight-bold\">Advance Plan</h1>\n        <p class=\"text-center\"><span class=\"dell\">$90</span>/month</p>\n        <p class=\"text-center\">When billed annually</p>\n        <mat-card-content>\n          <p class=\"m-0\">Upto 2 offers per month on website, mobile app, FB mssgr, alexa mobile app, alexa voice,\n            google assistant, google home, WhatsApp</p>\n          <p class=\"m-0\">All the Offers displayed will be valid for 1 month only</p>\n          <p class=\"m-0\">200$ per ad placed on GoBaskt digital & voice channels</p>\n          <p class=\"m-0\">Upto 10 return offers for customers redeeming offers</p>\n          <p class=\"m-0\">Basic analytics on offers</p>\n          <p class=\"m-0\">Free Offer build</p>\n          <p class=\"m-0\">Free Ad build</p>\n        </mat-card-content>\n        <mat-card-footer class=\"text-center\"><button class=\"GetStarted1\" [routerLink]=\"['/payment/creditpay']\">Get\n            Started</button> </mat-card-footer>\n      </mat-card>\n    </div>\n    <div class=\"col-md-4\">\n      <mat-card class=\"fun\">\n        <h1 class=\"text-center font-weight-bold\">Premium Plan</h1>\n        <p class=\"text-center\"><span class=\"dell\">$220</span>/month</p>\n        <p class=\"text-center\">When billed annually</p>\n        <mat-card-content>\n          <p class=\"m-0\">Upto 2 offers per month on website, mobile app, FB mssgr, alexa mobile app, alexa voice,\n            google assistant, google home, WhatsApp</p>\n          <p class=\"m-0\">All the Offers displayed will be valid for 1 month only</p>\n          <p class=\"m-0\">200$ per ad placed on GoBaskt digital & voice channels</p>\n          <p class=\"m-0\">Upto 10 return offers for customers redeeming offers</p>\n          <p class=\"m-0\">Basic analytics on offers</p>\n          <p class=\"m-0\">Free Offer build</p>\n          <p class=\"m-0\">Free Ad build</p>\n        </mat-card-content>\n        <mat-card-footer class=\"text-center\"><button class=\"GetStarted1\" [routerLink]=\"['/payment/creditpay']\">Get\n            Started</button> </mat-card-footer>\n      </mat-card>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-md-5 font-family\">\n      <h2 class=\"font-family font-weight-bold\">No matter your business\n        is big or small, we’ve got\n        everyone covered.</h2>\n      <div>\n        <p style=\"font-weight: bold;\">The benefits of joining us include - </p>\n        <ul style=\"list-style-type:symbols('-');\">\n          <li>Out to actual customers out there, make your presence felt in the market.</li>\n          <li>Make your own promotional offers / coupons and sell your product your way!</li>\n          <li>Reach out to global audience, make the world your own market place.</li>\n          <li>Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin</li>\n          <li>Curabitur lobortis id lorem id bibendum. Ut id consectetur magna</li>\n          <li>Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui.</li>\n        </ul>\n      </div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <img src=\"../../assets/images/subscription/478.png\">\n        </div>\n        <div class=\"col-6\">\n          <img src=\"../../../assets/images/subscription/2442241.png\">\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 text-center\"><img src=\"../../../assets/images/subscription/14899.jpg\"></div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-6\">\n          <img src=\"../../../assets/images/subscription/1019.jpg\">\n        </div>\n        <div class=\"col-6\">\n          <img src=\"../../../assets/images/subscription/551207-pk-1-o-92-23.jpg\">\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row mt-3\">\n    <div class=\"col-12 text-center font-family\">\n      <img src=\"../../../assets/images/subscription/dinner.svg\">\n      <p>Start with as cheap as a<span style=\"color:#292c44; font-weight:bold;\"> meal per\n          month</span></p>\n      <button class=\"GetStarted1\" [routerLink]=\"['/auth/signup','merchant']\">Get Started</button>\n      <p>Already a member? <a [routerLink]=\"['/auth/login']\">\n          Log in</a></p>\n    </div>\n  </div>\n</div>\n<app-footer></app-footer>";
    /***/
  },

  /***/
  "./src/app/payments/amazon-pay/amazon-pay.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/payments/amazon-pay/amazon-pay.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsAmazonPayAmazonPayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".table :hover {\n  color: black;\n  background-color: skyblue;\n}\n\n.head {\n  color: #2d3263;\n}\n\n.go {\n  font-weight: bold;\n  color: #2d3263;\n  font-size: 25px;\n}\n\n.sidebar {\n  height: 600px;\n  width: 400px;\n}\n\n.sidebtn {\n  width: 300px;\n  height: 100px;\n}\n\n.sidebtn:hover {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvYW1hem9uLXBheS9EOlxcQW5ndWxhclxcR29CYXNrdF9NZXJjaGFudC1tYXN0ZXIvc3JjXFxhcHBcXHBheW1lbnRzXFxhbWF6b24tcGF5XFxhbWF6b24tcGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50cy9hbWF6b24tcGF5L2FtYXpvbi1wYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNBRjs7QURFQTtFQUNFLGNBQUE7QUNDRjs7QURDQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUNFQTs7QURBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDR0E7O0FEREE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0lGOztBREZBO0VBQ0UsdUJBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL2FtYXpvbi1wYXkvYW1hem9uLXBheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4udGFibGUgOmhvdmVye1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG59XHJcbi5oZWFke1xyXG4gIGNvbG9yOiAjMmQzMjYzO1xyXG59XHJcbi5nb3tcclxuZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbmNvbG9yOiAjMmQzMjYzO1xyXG5mb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnNpZGViYXJ7XHJcbmhlaWdodDogNjAwcHg7XHJcbndpZHRoOiA0MDBweDtcclxufVxyXG4uc2lkZWJ0bntcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG4uc2lkZWJ0bjpob3ZlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbn1cclxuIiwiLnRhYmxlIDpob3ZlciB7XG4gIGNvbG9yOiBibGFjaztcbiAgYmFja2dyb3VuZC1jb2xvcjogc2t5Ymx1ZTtcbn1cblxuLmhlYWQge1xuICBjb2xvcjogIzJkMzI2Mztcbn1cblxuLmdvIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiAjMmQzMjYzO1xuICBmb250LXNpemU6IDI1cHg7XG59XG5cbi5zaWRlYmFyIHtcbiAgaGVpZ2h0OiA2MDBweDtcbiAgd2lkdGg6IDQwMHB4O1xufVxuXG4uc2lkZWJ0biB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnNpZGVidG46aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/payments/amazon-pay/amazon-pay.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/payments/amazon-pay/amazon-pay.component.ts ***!
    \*************************************************************/

  /*! exports provided: AmazonPayComponent */

  /***/
  function srcAppPaymentsAmazonPayAmazonPayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AmazonPayComponent", function () {
      return AmazonPayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AmazonPayComponent =
    /*#__PURE__*/
    function () {
      function AmazonPayComponent() {
        _classCallCheck(this, AmazonPayComponent);
      }

      _createClass(AmazonPayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AmazonPayComponent;
    }();

    AmazonPayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-amazon-pay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./amazon-pay.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/amazon-pay/amazon-pay.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./amazon-pay.component.scss */
      "./src/app/payments/amazon-pay/amazon-pay.component.scss")).default]
    })], AmazonPayComponent);
    /***/
  },

  /***/
  "./src/app/payments/credit-pay/credit-pay.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/payments/credit-pay/credit-pay.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsCreditPayCreditPayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-color: rgba(171, 198, 255, 0.39);\n}\n\n.card-details {\n  border: none;\n  background: #ddd0;\n  border-bottom: 2px solid #ccc;\n}\n\nmat-card {\n  font-family: Montserrat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvY3JlZGl0LXBheS9EOlxcQW5ndWxhclxcR29CYXNrdF9NZXJjaGFudC1tYXN0ZXIvc3JjXFxhcHBcXHBheW1lbnRzXFxjcmVkaXQtcGF5XFxjcmVkaXQtcGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50cy9jcmVkaXQtcGF5L2NyZWRpdC1wYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLHVCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50cy9jcmVkaXQtcGF5L2NyZWRpdC1wYXkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzEsIDE5OCwgMjU1LCAwLjM5KTtcclxufVxyXG5cclxuLmNhcmQtZGV0YWlscyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6ICNkZGQwO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xyXG59XHJcblxyXG5tYXQtY2FyZCB7XHJcbiAgZm9udC1mYW1pbHk6IE1vbnRzZXJyYXQ7XHJcbn1cclxuXHJcbi8vIC50YWJsZSA6aG92ZXIge1xyXG4vLyAgIGNvbG9yOiBibGFjaztcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG4vLyB9XHJcblxyXG4vLyAuaGVhZCB7XHJcbi8vICAgY29sb3I6ICMyZDMyNjM7XHJcbi8vIH1cclxuXHJcbi8vIC5nbyB7XHJcbi8vICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbi8vICAgY29sb3I6ICMyZDMyNjM7XHJcbi8vICAgZm9udC1zaXplOiAyNXB4O1xyXG4vLyB9XHJcblxyXG4vLyAuc2lkZWJhciB7XHJcbi8vICAgaGVpZ2h0OiA2MDBweDtcclxuLy8gICB3aWR0aDogNDAwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5zaWRlYnRuOmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuXHJcbi8vIH0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcxLCAxOTgsIDI1NSwgMC4zOSk7XG59XG5cbi5jYXJkLWRldGFpbHMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkZGQwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbn1cblxubWF0LWNhcmQge1xuICBmb250LWZhbWlseTogTW9udHNlcnJhdDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/payments/credit-pay/credit-pay.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/payments/credit-pay/credit-pay.component.ts ***!
    \*************************************************************/

  /*! exports provided: CreditPayComponent */

  /***/
  function srcAppPaymentsCreditPayCreditPayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreditPayComponent", function () {
      return CreditPayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js"); // import { Module as StripeModule } from "stripe-angular";


    var CreditPayComponent =
    /*#__PURE__*/
    function () {
      function CreditPayComponent() {
        _classCallCheck(this, CreditPayComponent);
      }

      _createClass(CreditPayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadStripe();
        }
      }, {
        key: "pay",
        value: function pay(amount) {
          var handler = window.StripeCheckout.configure({
            key: 'pk_test_vWAJc8CU63ACef0DwPXXKHdJ00wqkIhDyC',
            locale: 'auto',
            token: function token(_token) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              console.log(_token);
              alert('Token Created!!');
            }
          });
          handler.open({
            name: "Gobaskt",
            description: 'Subscription Plan',
            amount: amount * 100
          });
        }
      }, {
        key: "loadStripe",
        value: function loadStripe() {
          if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            window.document.body.appendChild(s);
          }
        }
      }]);

      return CreditPayComponent;
    }();

    CreditPayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-credit-pay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./credit-pay.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/credit-pay/credit-pay.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./credit-pay.component.scss */
      "./src/app/payments/credit-pay/credit-pay.component.scss")).default]
    })], CreditPayComponent);
    /***/
  },

  /***/
  "./src/app/payments/footer/footer.component.css":
  /*!******************************************************!*\
    !*** ./src/app/payments/footer/footer.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".pb-5, .py-5 {\n    padding-bottom: 3rem!important;\n}\n\n.pt-5, .py-5 {\n    padding-top: 3rem!important;\n}\n\n.bg-dark {\n    background-color: #2d3263;\n}\n\n.text-white{\n    color: white;\n}\n\n.text-center-csss > a{\n    color:white;\n    text-decoration: none;\n}\n\n.social-css{\n    margin-top: 25px;\n    font-size: 26px;\n}\n\n.social-buttonsx > .list-inline-item > a > i{\n    color:white;\n}\n\n.social-buttonsx > li{\n    margin-left: 14px;\n}\n\n.copy-css{\nfont-size: 14px; \nmargin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMkJBQTJCO0FBQy9COztBQUNBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUNBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxxQkFBcUI7QUFDekI7O0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFFQTtBQUNBLGVBQWU7QUFDZixnQkFBZ0I7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGItNSwgLnB5LTUge1xuICAgIHBhZGRpbmctYm90dG9tOiAzcmVtIWltcG9ydGFudDtcbn1cblxuLnB0LTUsIC5weS01IHtcbiAgICBwYWRkaW5nLXRvcDogM3JlbSFpbXBvcnRhbnQ7XG59XG4uYmctZGFyayB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkMzI2Mztcbn1cbi50ZXh0LXdoaXRle1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnRleHQtY2VudGVyLWNzc3MgPiBhe1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cbi5zb2NpYWwtY3Nze1xuICAgIG1hcmdpbi10b3A6IDI1cHg7XG4gICAgZm9udC1zaXplOiAyNnB4O1xufVxuLnNvY2lhbC1idXR0b25zeCA+IC5saXN0LWlubGluZS1pdGVtID4gYSA+IGl7XG4gICAgY29sb3I6d2hpdGU7XG59XG4uc29jaWFsLWJ1dHRvbnN4ID4gbGl7XG4gICAgbWFyZ2luLWxlZnQ6IDE0cHg7XG59XG5cbi5jb3B5LWNzc3tcbmZvbnQtc2l6ZTogMTRweDsgXG5tYXJnaW4tdG9wOiAxNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/payments/footer/footer.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/payments/footer/footer.component.ts ***!
    \*****************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppPaymentsFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/payments/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/payments/google-pay/google-pay.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/payments/google-pay/google-pay.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsGooglePayGooglePayComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-color: rgba(171, 198, 255, 0.39);\n}\n\n.card-details {\n  border: none;\n  background: #ddd0;\n  border-bottom: 2px solid #ccc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvZ29vZ2xlLXBheS9EOlxcQW5ndWxhclxcR29CYXNrdF9NZXJjaGFudC1tYXN0ZXIvc3JjXFxhcHBcXHBheW1lbnRzXFxnb29nbGUtcGF5XFxnb29nbGUtcGF5LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50cy9nb29nbGUtcGF5L2dvb2dsZS1wYXkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL2dvb2dsZS1wYXkvZ29vZ2xlLXBheS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MSwgMTk4LCAyNTUsIDAuMzkpO1xyXG59XHJcblxyXG4uY2FyZC1kZXRhaWxzIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYmFja2dyb3VuZDogI2RkZDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNjY2M7XHJcbn0iLCIuYmFja2dyb3VuZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcxLCAxOTgsIDI1NSwgMC4zOSk7XG59XG5cbi5jYXJkLWRldGFpbHMge1xuICBib3JkZXI6IG5vbmU7XG4gIGJhY2tncm91bmQ6ICNkZGQwO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/payments/google-pay/google-pay.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/payments/google-pay/google-pay.component.ts ***!
    \*************************************************************/

  /*! exports provided: GooglePayComponent */

  /***/
  function srcAppPaymentsGooglePayGooglePayComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GooglePayComponent", function () {
      return GooglePayComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GooglePayComponent =
    /*#__PURE__*/
    function () {
      function GooglePayComponent() {
        _classCallCheck(this, GooglePayComponent);
      }

      _createClass(GooglePayComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return GooglePayComponent;
    }();

    GooglePayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-google-pay',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./google-pay.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/google-pay/google-pay.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./google-pay.component.scss */
      "./src/app/payments/google-pay/google-pay.component.scss")).default]
    })], GooglePayComponent);
    /***/
  },

  /***/
  "./src/app/payments/header/header.component.css":
  /*!******************************************************!*\
    !*** ./src/app/payments/header/header.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fs-bage {\n    font-size: 10px;\n    position: relative;\n    top: 10px;\n    border-radius: 25px;\n    right: 4px;\n    background-color: #ffd35f;\n    padding: 5px 7px;\n}\n\n.menu-img {\n    width: 20px;\n    margin-right: 16px;\n}\n\n.categories-text-underline {\n    text-align: center;\n    border-top: 1px solid #000;\n    font-weight: 600;\n}\n\n.mat-menu-item {\n    padding: 0px 26px;\n}\n\nagm-map {\n    height: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQiwwQkFBMEI7SUFDMUIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL3BheW1lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mcy1iYWdlIHtcbiAgICBmb250LXNpemU6IDEwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgIHJpZ2h0OiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZDM1ZjtcbiAgICBwYWRkaW5nOiA1cHggN3B4O1xufVxuXG4ubWVudS1pbWcge1xuICAgIHdpZHRoOiAyMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbn1cblxuLmNhdGVnb3JpZXMtdGV4dC11bmRlcmxpbmUge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgIzAwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4ubWF0LW1lbnUtaXRlbSB7XG4gICAgcGFkZGluZzogMHB4IDI2cHg7XG59XG5cbmFnbS1tYXAge1xuICAgIGhlaWdodDogMzAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/payments/header/header.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/payments/header/header.component.ts ***!
    \*****************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppPaymentsHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _shared_core_service_communication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../shared/core/service/communication.service */
    "./src/app/shared/core/service/communication.service.ts");
    /* harmony import */


    var _shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/core/service/http.service */
    "./src/app/shared/core/service/http.service.ts"); // /// <reference types="@types/googlemaps" />
    // import { MapsAPILoader, MouseEvent } from '@agm/core';
    // import { } from '@types/googlemaps';
    // declare var google: any;


    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(communicationService, httpService) {
        _classCallCheck(this, HeaderComponent);

        this.communicationService = communicationService;
        this.httpService = httpService; // private mapsAPILoader: MapsAPILoader,
        // private ngZone: NgZone
        // this.subscription = this.communicationService.getsubject().subscribe(obj => {
        //   //   // console.log("obj", obj);
        //   this.cartlength = obj.value;
        //   console.log(this.cartlength);
        // });
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.addedItem(); // this.mapsAPILoader.load().then(() => {
          //   this.setCurrentLocation();
          //   this.geoCoder = new google.maps.Geocoder();
          //   const autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          //     types: ['address']
          //   });
          //   autocomplete.addListener('place_changed', () => {
          //     this.ngZone.run(() => {
          //       // get the place result
          //       const place: google.maps.places.PlaceResult = autocomplete.getPlace();
          //       // verify result
          //       if (place.geometry === undefined || place.geometry === null) {
          //         return;
          //       }
          //       // set latitude, longitude and zoom
          //       this.latitude = place.geometry.location.lat();
          //       this.longitude = place.geometry.location.lng();
          //       this.zoom = 12;
          //     });
          //   });
          // });
        }
      }, {
        key: "addedItem",
        value: function addedItem() {
          var _this = this;

          this.httpService.getBasketDetails().subscribe(function (response) {
            console.log(response);

            if (response.status === 200) {
              console.log(response.body.data);

              if (response.body.data) {
                if (response.body.data.length !== 0) {
                  _this.cartlength = response.body.data.length;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _shared_core_service_communication_service__WEBPACK_IMPORTED_MODULE_2__["CommunicationService"]
      }, {
        type: _shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/payments/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/payments/netbanking/netbanking.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/payments/netbanking/netbanking.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsNetbankingNetbankingComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".background {\n  background-color: rgba(171, 198, 255, 0.39);\n}\n\n.card-details {\n  border: none;\n  background: #ddd0;\n  border-bottom: 2px solid #ccc;\n}\n\n.bankCard {\n  height: 52px;\n  width: 194px;\n}\n\n.dash {\n  border: 1px dashed #000000;\n}\n\n.drop {\n  border: 10px black;\n}\n\n.pay {\n  background-color: #2d3263;\n  width: 440px;\n  height: 51px;\n  border-radius: 28.5px;\n  border: black;\n}\n\n.table :hover {\n  color: black;\n  background-color: skyblue;\n}\n\n.head {\n  color: #2d3263;\n}\n\n.go {\n  font-weight: bold;\n  color: #2d3263;\n  font-size: 25px;\n}\n\n.sidebar {\n  height: 600px;\n  width: 400px;\n}\n\n.sidebtn {\n  width: 300px;\n  height: 100px;\n}\n\n.sidebtn:hover {\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvbmV0YmFua2luZy9EOlxcQW5ndWxhclxcR29CYXNrdF9NZXJjaGFudC1tYXN0ZXIvc3JjXFxhcHBcXHBheW1lbnRzXFxuZXRiYW5raW5nXFxuZXRiYW5raW5nLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50cy9uZXRiYW5raW5nL25ldGJhbmtpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQ0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsNkJBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSwwQkFBQTtBQ0NGOztBREdBO0VBQ0Usa0JBQUE7QUNBRjs7QURHQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0FGOztBREdBO0VBQ0UsYUFBQTtFQUNBLFlBQUE7QUNBRjs7QURHQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQUY7O0FER0E7RUFDRSx1QkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvcGF5bWVudHMvbmV0YmFua2luZy9uZXRiYW5raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTcxLCAxOTgsIDI1NSwgMC4zOSk7XHJcbn1cclxuXHJcbi5jYXJkLWRldGFpbHMge1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiAjZGRkMDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2NjYztcclxufVxyXG5cclxuLmJhbmtDYXJkIHtcclxuICBoZWlnaHQ6IDUycHg7XHJcbiAgd2lkdGg6IDE5NHB4O1xyXG59XHJcblxyXG4uZGFzaCB7XHJcbiAgYm9yZGVyOiAxcHggZGFzaGVkICMwMDAwMDA7XHJcblxyXG59XHJcblxyXG4uZHJvcCB7XHJcbiAgYm9yZGVyOiAxMHB4IGJsYWNrO1xyXG59XHJcblxyXG4ucGF5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMjYzO1xyXG4gIHdpZHRoOiA0NDBweDtcclxuICBoZWlnaHQ6IDUxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjguNXB4O1xyXG4gIGJvcmRlcjogYmxhY2s7XHJcbn1cclxuXHJcbi50YWJsZSA6aG92ZXIge1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xyXG59XHJcblxyXG4uaGVhZCB7XHJcbiAgY29sb3I6ICMyZDMyNjM7XHJcbn1cclxuXHJcbi5nbyB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6ICMyZDMyNjM7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uc2lkZWJhciB7XHJcbiAgaGVpZ2h0OiA2MDBweDtcclxuICB3aWR0aDogNDAwcHg7XHJcbn1cclxuXHJcbi5zaWRlYnRuIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxufVxyXG5cclxuLnNpZGVidG46aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG5cclxufSIsIi5iYWNrZ3JvdW5kIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxNzEsIDE5OCwgMjU1LCAwLjM5KTtcbn1cblxuLmNhcmQtZGV0YWlscyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogI2RkZDA7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjY2NjO1xufVxuXG4uYmFua0NhcmQge1xuICBoZWlnaHQ6IDUycHg7XG4gIHdpZHRoOiAxOTRweDtcbn1cblxuLmRhc2gge1xuICBib3JkZXI6IDFweCBkYXNoZWQgIzAwMDAwMDtcbn1cblxuLmRyb3Age1xuICBib3JkZXI6IDEwcHggYmxhY2s7XG59XG5cbi5wYXkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMjYzO1xuICB3aWR0aDogNDQwcHg7XG4gIGhlaWdodDogNTFweDtcbiAgYm9yZGVyLXJhZGl1czogMjguNXB4O1xuICBib3JkZXI6IGJsYWNrO1xufVxuXG4udGFibGUgOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xufVxuXG4uaGVhZCB7XG4gIGNvbG9yOiAjMmQzMjYzO1xufVxuXG4uZ28ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyZDMyNjM7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnNpZGViYXIge1xuICBoZWlnaHQ6IDYwMHB4O1xuICB3aWR0aDogNDAwcHg7XG59XG5cbi5zaWRlYnRuIHtcbiAgd2lkdGg6IDMwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xufVxuXG4uc2lkZWJ0bjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/payments/netbanking/netbanking.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/payments/netbanking/netbanking.component.ts ***!
    \*************************************************************/

  /*! exports provided: NetbankingComponent */

  /***/
  function srcAppPaymentsNetbankingNetbankingComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetbankingComponent", function () {
      return NetbankingComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NetbankingComponent =
    /*#__PURE__*/
    function () {
      function NetbankingComponent() {
        _classCallCheck(this, NetbankingComponent);
      }

      _createClass(NetbankingComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NetbankingComponent;
    }();

    NetbankingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-netbanking',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./netbanking.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/netbanking/netbanking.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./netbanking.component.scss */
      "./src/app/payments/netbanking/netbanking.component.scss")).default]
    })], NetbankingComponent);
    /***/
  },

  /***/
  "./src/app/payments/payment-page.route.ts":
  /*!************************************************!*\
    !*** ./src/app/payments/payment-page.route.ts ***!
    \************************************************/

  /*! exports provided: PaymentRoutingModule */

  /***/
  function srcAppPaymentsPaymentPageRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentRoutingModule", function () {
      return PaymentRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _payment_route__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./payment.route */
    "./src/app/payments/payment.route.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var PaymentRoutingModule = function PaymentRoutingModule() {
      _classCallCheck(this, PaymentRoutingModule);
    };

    PaymentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_payment_route__WEBPACK_IMPORTED_MODULE_1__["PaymentRoutes"])],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], PaymentRoutingModule);
    /***/
  },

  /***/
  "./src/app/payments/payment.module.ts":
  /*!********************************************!*\
    !*** ./src/app/payments/payment.module.ts ***!
    \********************************************/

  /*! exports provided: PaymentModule */

  /***/
  function srcAppPaymentsPaymentModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentModule", function () {
      return PaymentModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-slick-carousel */
    "./node_modules/ngx-slick-carousel/fesm2015/ngx-slick-carousel.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-owl-carousel */
    "./node_modules/ngx-owl-carousel/index.js");
    /* harmony import */


    var ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var ng_image_slider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng-image-slider */
    "./node_modules/ng-image-slider/fesm2015/ng-image-slider.js");
    /* harmony import */


    var ngx_rating__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-rating */
    "./node_modules/ngx-rating/index.js");
    /* harmony import */


    var ngx_rating__WEBPACK_IMPORTED_MODULE_7___default =
    /*#__PURE__*/
    __webpack_require__.n(ngx_rating__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var angular2_moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! angular2-moment */
    "./node_modules/angular2-moment/index.js");
    /* harmony import */


    var angular2_moment__WEBPACK_IMPORTED_MODULE_8___default =
    /*#__PURE__*/
    __webpack_require__.n(angular2_moment__WEBPACK_IMPORTED_MODULE_8__);
    /* harmony import */


    var ngx_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-chips */
    "./node_modules/ngx-chips/fesm2015/ngx-chips.js");
    /* harmony import */


    var angular_image_slider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! angular-image-slider */
    "./node_modules/angular-image-slider/fesm2015/angular-image-slider.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_print__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-print */
    "./node_modules/ngx-print/fesm2015/ngx-print.js");
    /* harmony import */


    var _payment_page_route__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./payment-page.route */
    "./src/app/payments/payment-page.route.ts");
    /* harmony import */


    var _paymentPortal_custom_payment_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./paymentPortal/custom-payment.component */
    "./src/app/payments/paymentPortal/custom-payment.component.ts");
    /* harmony import */


    var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./subscription/subscription.component */
    "./src/app/payments/subscription/subscription.component.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/payments/header/header.component.ts");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _credit_pay_credit_pay_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./credit-pay/credit-pay.component */
    "./src/app/payments/credit-pay/credit-pay.component.ts");
    /* harmony import */


    var _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./google-pay/google-pay.component */
    "./src/app/payments/google-pay/google-pay.component.ts");
    /* harmony import */


    var _netbanking_netbanking_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./netbanking/netbanking.component */
    "./src/app/payments/netbanking/netbanking.component.ts");
    /* harmony import */


    var _amazon_pay_amazon_pay_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./amazon-pay/amazon-pay.component */
    "./src/app/payments/amazon-pay/amazon-pay.component.ts");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _payments_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ../payments/footer/footer.component */
    "./src/app/payments/footer/footer.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/button-toggle */
    "./node_modules/@angular/material/esm2015/button-toggle.js"); // import { MaterialModule } from '@angular/material';
    // import { BrowserModule } from '@angular/platform-browser';


    var PaymentModule = function PaymentModule() {
      _classCallCheck(this, PaymentModule);
    };

    PaymentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_paymentPortal_custom_payment_component__WEBPACK_IMPORTED_MODULE_14__["CustomPaymentComponent"], _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__["SubscriptionComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_16__["HeaderComponent"], _credit_pay_credit_pay_component__WEBPACK_IMPORTED_MODULE_18__["CreditPayComponent"], _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_19__["GooglePayComponent"], _netbanking_netbanking_component__WEBPACK_IMPORTED_MODULE_20__["NetbankingComponent"], _payments_footer_footer_component__WEBPACK_IMPORTED_MODULE_23__["FooterComponent"], _amazon_pay_amazon_pay_component__WEBPACK_IMPORTED_MODULE_21__["AmazonPayComponent"]],
      imports: [_angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_22__["MatSlideToggleModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatDividerModule"], // MaterialModule,
      _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_25__["MatButtonToggleModule"], _payment_page_route__WEBPACK_IMPORTED_MODULE_13__["PaymentRoutingModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ngx_slick_carousel__WEBPACK_IMPORTED_MODULE_4__["SlickCarouselModule"], ngx_owl_carousel__WEBPACK_IMPORTED_MODULE_5__["OwlModule"], ng_image_slider__WEBPACK_IMPORTED_MODULE_6__["NgImageSliderModule"], ngx_rating__WEBPACK_IMPORTED_MODULE_7__["RatingModule"], angular2_moment__WEBPACK_IMPORTED_MODULE_8__["MomentModule"], ngx_chips__WEBPACK_IMPORTED_MODULE_9__["TagInputModule"], angular_image_slider__WEBPACK_IMPORTED_MODULE_10__["SliderModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"], ngx_print__WEBPACK_IMPORTED_MODULE_12__["NgxPrintModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"] // BrowserModule
      ]
    })], PaymentModule);
    /***/
  },

  /***/
  "./src/app/payments/payment.route.ts":
  /*!*******************************************!*\
    !*** ./src/app/payments/payment.route.ts ***!
    \*******************************************/

  /*! exports provided: PaymentRoutes */

  /***/
  function srcAppPaymentsPaymentRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PaymentRoutes", function () {
      return PaymentRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./google-pay/google-pay.component */
    "./src/app/payments/google-pay/google-pay.component.ts");
    /* harmony import */


    var _credit_pay_credit_pay_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./credit-pay/credit-pay.component */
    "./src/app/payments/credit-pay/credit-pay.component.ts");
    /* harmony import */


    var _paymentPortal_custom_payment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./paymentPortal/custom-payment.component */
    "./src/app/payments/paymentPortal/custom-payment.component.ts");
    /* harmony import */


    var _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./subscription/subscription.component */
    "./src/app/payments/subscription/subscription.component.ts");
    /* harmony import */


    var _amazon_pay_amazon_pay_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./amazon-pay/amazon-pay.component */
    "./src/app/payments/amazon-pay/amazon-pay.component.ts");
    /* harmony import */


    var _netbanking_netbanking_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./netbanking/netbanking.component */
    "./src/app/payments/netbanking/netbanking.component.ts");

    var PaymentRoutes = [{
      path: 'subscription',
      component: _subscription_subscription_component__WEBPACK_IMPORTED_MODULE_4__["SubscriptionComponent"]
    }, {
      path: 'paymentPortal',
      component: _paymentPortal_custom_payment_component__WEBPACK_IMPORTED_MODULE_3__["CustomPaymentComponent"]
    }, {
      path: 'creditpay',
      component: _credit_pay_credit_pay_component__WEBPACK_IMPORTED_MODULE_2__["CreditPayComponent"]
    }, {
      path: 'amazon',
      component: _amazon_pay_amazon_pay_component__WEBPACK_IMPORTED_MODULE_5__["AmazonPayComponent"]
    }, {
      path: 'netbanking',
      component: _netbanking_netbanking_component__WEBPACK_IMPORTED_MODULE_6__["NetbankingComponent"]
    }, {
      path: 'gpay',
      component: _google_pay_google_pay_component__WEBPACK_IMPORTED_MODULE_1__["GooglePayComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/payments/paymentPortal/custom-payment.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/payments/paymentPortal/custom-payment.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsPaymentPortalCustomPaymentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".table :hover {\n  color: black;\n  background-color: skyblue;\n}\n\n.head {\n  color: #2d3263;\n}\n\n.go {\n  font-weight: bold;\n  color: #2d3263;\n  font-size: 25px;\n}\n\n.sidebar {\n  background-color: rgba(171, 198, 255, 0.39);\n}\n\n.sidebtn {\n  width: 300px;\n  height: 100px;\n}\n\n.sidebar:hover .active {\n  background-color: white;\n  color: white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvcGF5bWVudFBvcnRhbC9EOlxcQW5ndWxhclxcR29CYXNrdF9NZXJjaGFudC1tYXN0ZXIvc3JjXFxhcHBcXHBheW1lbnRzXFxwYXltZW50UG9ydGFsXFxjdXN0b20tcGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGF5bWVudHMvcGF5bWVudFBvcnRhbC9jdXN0b20tcGF5bWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0UsY0FBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsMkNBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDQ0Y7O0FESUU7RUFDRSx1QkFBQTtFQUNBLHVCQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50cy9wYXltZW50UG9ydGFsL2N1c3RvbS1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlIDpob3ZlciB7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHNreWJsdWU7XHJcbn1cclxuXHJcbi5oZWFkIHtcclxuICBjb2xvcjogIzJkMzI2MztcclxufVxyXG5cclxuLmdvIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBjb2xvcjogIzJkMzI2MztcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MSwgMTk4LCAyNTUsIDAuMzkpO1xyXG59XHJcblxyXG4uc2lkZWJ0biB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbn1cclxuXHJcbi5zaWRlYmFyOmhvdmVyIHtcclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuXHJcbn0iLCIudGFibGUgOmhvdmVyIHtcbiAgY29sb3I6IGJsYWNrO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBza3libHVlO1xufVxuXG4uaGVhZCB7XG4gIGNvbG9yOiAjMmQzMjYzO1xufVxuXG4uZ28ge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgY29sb3I6ICMyZDMyNjM7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLnNpZGViYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDE3MSwgMTk4LCAyNTUsIDAuMzkpO1xufVxuXG4uc2lkZWJ0biB7XG4gIHdpZHRoOiAzMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cblxuLnNpZGViYXI6aG92ZXIgLmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/payments/paymentPortal/custom-payment.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/payments/paymentPortal/custom-payment.component.ts ***!
    \********************************************************************/

  /*! exports provided: CustomPaymentComponent */

  /***/
  function srcAppPaymentsPaymentPortalCustomPaymentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CustomPaymentComponent", function () {
      return CustomPaymentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CustomPaymentComponent =
    /*#__PURE__*/
    function () {
      function CustomPaymentComponent() {
        _classCallCheck(this, CustomPaymentComponent);
      }

      _createClass(CustomPaymentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loadStripe();
        }
      }, {
        key: "pay",
        value: function pay(amount) {
          var handler = window.StripeCheckout.configure({
            key: 'pk_test_vWAJc8CU63ACef0DwPXXKHdJ00wqkIhDyC',
            locale: 'auto',
            token: function token(_token2) {
              // You can access the token ID with `token.id`.
              // Get the token ID to your server-side code for use.
              console.log(_token2);
              alert('Token Created!!');
            }
          });
          handler.open({
            name: "Gobaskt",
            description: 'Subscription Plan',
            amount: amount * 100
          });
        }
      }, {
        key: "loadStripe",
        value: function loadStripe() {
          if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            window.document.body.appendChild(s);
          }
        }
      }]);

      return CustomPaymentComponent;
    }();

    CustomPaymentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-custom-payment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./custom-payment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/paymentPortal/custom-payment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./custom-payment.component.scss */
      "./src/app/payments/paymentPortal/custom-payment.component.scss")).default]
    })], CustomPaymentComponent); // tslint:disable-next-line: align

    /***/
  },

  /***/
  "./src/app/payments/subscription/subscription.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/payments/subscription/subscription.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPaymentsSubscriptionSubscriptionComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".Merchant_plans_hover_change {\n  width: 1440px;\n  height: 2658px;\n  background-color: #ffffff;\n}\n\n.Merchant-Plans.r {\n  position: absolute;\n  top: 10px;\n  left: 150px;\n}\n\n.Group-14 {\n  float: right;\n}\n\n.cardCollapse {\n  height: 80px;\n  width: 280px;\n}\n\n.dell {\n  font-size: 32px;\n}\n\n.Month {\n  font-size: 25px;\n}\n\n.collapse {\n  width: 300px;\n}\n\n.GetStarted1 {\n  border-radius: 15px;\n  background-color: #2d3263;\n  color: white;\n  height: 40px;\n  border: white;\n}\n\n.GetStarted1:hover {\n  color: #2d3263;\n  background-color: white;\n}\n\n.NoMatter {\n  font-weight: bold;\n  font-size: 30px;\n}\n\n.center {\n  margin-left: 500px;\n}\n\n#more {\n  display: none;\n}\n\n.fun:hover {\n  color: white;\n  background-color: #2d3263;\n}\n\n.pos {\n  height: 20px;\n  width: 20px;\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGF5bWVudHMvc3Vic2NyaXB0aW9uL0Q6XFxBbmd1bGFyXFxHb0Jhc2t0X01lcmNoYW50LW1hc3Rlci9zcmNcXGFwcFxccGF5bWVudHNcXHN1YnNjcmlwdGlvblxcc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYXltZW50cy9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7QUNDRjs7QURFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUNDRjs7QURFQTtFQUNFLGNBQUE7RUFDQSx1QkFBQTtBQ0NGOztBREVBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYXltZW50cy9zdWJzY3JpcHRpb24vc3Vic2NyaXB0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLk1lcmNoYW50X3BsYW5zX2hvdmVyX2NoYW5nZSB7XHJcbiAgd2lkdGg6IDE0NDBweDtcclxuICBoZWlnaHQ6IDI2NThweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcblxyXG4uTWVyY2hhbnQtUGxhbnMuciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICBsZWZ0OiAxNTBweDtcclxufVxyXG5cclxuLkdyb3VwLTE0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5jYXJkQ29sbGFwc2Uge1xyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogMjgwcHg7XHJcbn1cclxuXHJcbi5kZWxsIHtcclxuICBmb250LXNpemU6IDMycHg7XHJcbn1cclxuXHJcbi5Nb250aCB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcblxyXG4uY29sbGFwc2Uge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG5cclxuLkdldFN0YXJ0ZWQxIHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDMyNjM7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXI6IHdoaXRlO1xyXG59XHJcblxyXG4uR2V0U3RhcnRlZDE6aG92ZXIge1xyXG4gIGNvbG9yOiAjMmQzMjYzO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uTm9NYXR0ZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLmNlbnRlciB7XHJcbiAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xyXG59XHJcblxyXG4jbW9yZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLmZ1bjpob3ZlciB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDMyNjM7XHJcbn1cclxuXHJcbi5wb3Mge1xyXG4gIGhlaWdodDogMjBweDtcclxuICB3aWR0aDogMjBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbn0iLCIuTWVyY2hhbnRfcGxhbnNfaG92ZXJfY2hhbmdlIHtcbiAgd2lkdGg6IDE0NDBweDtcbiAgaGVpZ2h0OiAyNjU4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XG59XG5cbi5NZXJjaGFudC1QbGFucy5yIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwcHg7XG4gIGxlZnQ6IDE1MHB4O1xufVxuXG4uR3JvdXAtMTQge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5jYXJkQ29sbGFwc2Uge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHdpZHRoOiAyODBweDtcbn1cblxuLmRlbGwge1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbi5Nb250aCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbn1cblxuLmNvbGxhcHNlIHtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uR2V0U3RhcnRlZDEge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzMjYzO1xuICBjb2xvcjogd2hpdGU7XG4gIGhlaWdodDogNDBweDtcbiAgYm9yZGVyOiB3aGl0ZTtcbn1cblxuLkdldFN0YXJ0ZWQxOmhvdmVyIHtcbiAgY29sb3I6ICMyZDMyNjM7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuXG4uTm9NYXR0ZXIge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4uY2VudGVyIHtcbiAgbWFyZ2luLWxlZnQ6IDUwMHB4O1xufVxuXG4jbW9yZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5mdW46aG92ZXIge1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyZDMyNjM7XG59XG5cbi5wb3Mge1xuICBoZWlnaHQ6IDIwcHg7XG4gIHdpZHRoOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/payments/subscription/subscription.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/payments/subscription/subscription.component.ts ***!
    \*****************************************************************/

  /*! exports provided: SubscriptionComponent */

  /***/
  function srcAppPaymentsSubscriptionSubscriptionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function () {
      return SubscriptionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubscriptionComponent =
    /*#__PURE__*/
    function () {
      function SubscriptionComponent() {
        _classCallCheck(this, SubscriptionComponent);

        this.isCollapsed = true;
      }

      _createClass(SubscriptionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "myFunction",
        value: function myFunction() {
          var dots = document.getElementById('dots');
          var moreText = document.getElementById('more');
          var btnText = document.getElementById('myBtn');

          if (dots.style.display === 'none') {
            dots.style.display = 'inline';
            btnText.innerHTML = 'Read more';
            moreText.style.display = 'none';
          } else {
            dots.style.display = 'none';
            btnText.innerHTML = 'Read less';
            moreText.style.display = 'inline';
          }
        }
      }]);

      return SubscriptionComponent;
    }();

    SubscriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subscription',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./subscription.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/payments/subscription/subscription.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./subscription.component.scss */
      "./src/app/payments/subscription/subscription.component.scss")).default]
    })], SubscriptionComponent);
    /***/
  }
}]);
//# sourceMappingURL=payments-payment-module-es5.js.map