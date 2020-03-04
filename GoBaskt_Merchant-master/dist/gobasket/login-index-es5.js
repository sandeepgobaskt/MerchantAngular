function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-index"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<header>\n    <nav class=\"navbar navbar-expand-lg navbar-light container mt-0\">\n        <div class=\"d-flex flex-grow-1\">\n            <span class=\"w-100 d-lg-none d-block\">\n                <!-- hidden spacer to center brand on mobile -->\n            </span>\n            <a class=\"navbar-brand\">\n                <img class=\"img-fluid\" src=\"assets/images/logo.png\" alt=\"Theme-Logo\" />\n            </a>\n            <ul class=\"navbar-nav ml-auto flex-nowrap \">\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/payment/subscription']\" class=\"nav-link  menu-item nav-active\">Subscription\n                        Plans</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a href=\"http://consumer.gobaskt.com/\" class=\"nav-link  menu-item\">Consumer Portal</a>\n                </li>\n            </ul>\n            <!-- <div class=\"w-100 text-right\">\n                <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#myNavbar\">\n                    <span class=\"navbar-toggler-icon\"></span>\n                </button>\n            </div> -->\n        </div>\n        <!-- <div class=\"collapse navbar-collapse flex-grow-1 text-right\" id=\"myNavbar\">\n            <ul class=\"navbar-nav ml-auto flex-nowrap\">\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/payment/subscription']\" class=\"nav-link  menu-item nav-active\">Subscription\n                        Plans</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a [routerLink]=\"['/consumer/home']\" class=\"nav-link  menu-item\">Consumer Portal</a>\n                </li>\n            </ul>\n        </div> -->\n    </nav>\n</header>\n<div class=\"pt-3 login-bg\">\n    <div class=\"container\">\n        <div class=\"row m-0\">\n            <div class=\"col-md-6\">\n                <img class=\"img-fluid max-165\" src=\"assets/images/login-bg.png\" alt=\"signup\" />\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"panel panel-default cus-bg\">\n                    <div>\n                        <h3 class=\"title-partner\">Partner Login</h3>\n                    </div>\n                    <div class=\"panel-body\">\n                        <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"merchantLoginForm\"\n                            (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"fname\" class=\"form-control inpt\" formControlName=\"emailId\"\n                                        id=\"inputfName\" [ngClass]=\"{ 'is-invalid': submitted && f.emailId.errors }\"\n                                        placeholder=\"Email Id\" required pattern=\"/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)*$/\">\n                                    <span class=\"invalid-feedback cust-feedback-align\"\n                                        *ngIf=\"f.emailId.errors?.required\">Enter\n                                        Email Id</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"password\" class=\"form-control inpt\" formControlName=\"password\"\n                                        id=\"inputlName\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\"\n                                        placeholder=\"Password\" required >\n                                    <span class=\"invalid-feedback cust-feedback-align\"\n                                        *ngIf=\"f.password.errors?.required\">Enter your\n                                        Password</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group last\">\n                                <div class=\"col-sm-12\">\n                                    <button type=\"submit\" class=\"col-sm-12 btn-clr-blue btn btn-sm\">\n                                        Sign In</button>\n                                    <div *ngIf=\"errMsg\">\n                                        <p class=\"mail-already-exist\">Invalid Credentials!</p>\n                                    </div>\n                                    <p class=\"text-center pt-3\"> Already a partner? If not,  <span\n                                            class=\"f-bold clr-blue cursor-pointer\"\n                                            [routerLink]=\"['/auth/signup','merchant']\">Click\n                                            Here</span></p>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/signup-complete/signup-complete.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/signup-complete/signup-complete.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginSignupCompleteSignupCompleteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pt-3 signup-bg\">\n    <div class=\"container\">\n        <div class=\"col-md-12 text-center pb-80\">\n            <!-- <span class=\"f-18 mr-10\">Make</span> -->\n            <h3 class=\"d-inline f-bold f-28\">Your Brand known to All</h3>\n            <p class=\"f-18\">Partner with us today & increase your reach <span [routerLink]=\"['/auth/login']\"\n                    class=\"cursor-pointer f-bold clr-blue\">Click Here</span></p>\n        </div>\n        <div class=\"row m-0\">\n            <div class=\"col-md-6\">\n                <img class=\"img-fluid h-20\" src=\"assets/images/signup_img.png\" alt=\"signup\" />\n            </div>\n            <div class=\"col-md-6\">\n                <div class=\"panel panel-default cus-bg\">\n                    <div class=\"partner-login\">\n                        <h3 class=\"title-partner\">Consumer Sign Up Complete</h3>\n                        <!-- <p class=\"f-15\">Quick 4 step form, helping you save your time</p> -->\n                    </div>\n                    <div class=\"panel-body\">\n                        <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"completeForm\" (ngSubmit)=\"onSubmit()\">\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"fname\" class=\"form-control inpt\" formControlName=\"primaryMobile\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.primaryMobile.errors }\"\n                                        placeholder=\"Mobile Number\" >\n                                    <span class=\"invalid-feedback cust-feedback-align\"\n                                        *ngIf=\"f.primaryMobile.errors?.required\">Enter Mobile Number</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"fname\" class=\"form-control inpt\" formControlName=\"secondaryMobile\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.secondaryMobile.errors }\" placeholder=\"Alternate Mobile Number\">\n                                    <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.secondaryMobile.errors?.required\">Enter your alternate Mobile\n                                        Number</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"fname\" class=\"form-control inpt\" formControlName=\"address\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.address.errors }\" placeholder=\"Address\">\n                                    <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.address.errors?.required\">Enter your\n                                        Address</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"fname\" class=\"form-control inpt\" formControlName=\"city\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.city.errors }\" placeholder=\"City\">\n                                    <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.city.errors?.required\">Enter your\n                                        City</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"fname\" class=\"form-control inpt\" formControlName=\"state\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.state.errors }\" placeholder=\"State\">\n                                    <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.state.errors?.required\">Enter your\n                                        State</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"number\" class=\"form-control inpt\" formControlName=\"zipcode\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.zipcode.errors }\" placeholder=\"Pincode\">\n                                    <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.zipcode.errors?.required\">Enter your\n                                        Pincode</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group\">\n                                <div class=\"col-sm-12\">\n                                    <input type=\"text\" class=\"form-control inpt\" formControlName=\"dateOfBirth\"\n                                        [ngClass]=\"{ 'is-invalid': submitted && f.dateOfBirth.errors }\" placeholder=\"Date Of Birth\">\n                                    <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.dateOfBirth.errors?.required\">Enter your\n                                        Date of Birth</span>\n                                </div>\n                            </div>\n                            <div class=\"form-group last\">\n                                <div class=\"col-sm-12\">\n                                    <button type=\"submit\" class=\"col-sm-12 btn-clr-blue btn btn-sm\">\n                                      Complete Sign Up</button>\n                                    <p class=\"text-center pt-3\">Already a member?<a [routerLink]=\"['auth/login']\"\n                                            class=\"cursor-pointer f-bold clr-blue\">Click Here</a></p>\n                                </div>\n                            </div>\n                        </form>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/signup/signup.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/signup/signup.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"pt-3 signup-bg\" *ngIf=\"category === 'consumer'\">\n  <div class=\"container\">\n    <div class=\"col-md-12 text-center pb-80\">\n      <!-- <span class=\"f-18 mr-10\">Make</span> -->\n      <h3 class=\"d-inline f-bold f-28\">Make Your Brand known to All</h3>\n      <p class=\"f-18\">Discover Great deals quickly and save time money and efforts while engaging with business </p>\n    </div>\n    <div class=\"row m-0\">\n      <div class=\"col-md-6\">\n        <img class=\"img-fluid h-20\" src=\"assets/images/signup_img.png\" alt=\"signup\" />\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"panel panel-default cus-bg\">\n          <div class=\"partner-login\">\n            <h3 class=\"title-partner\">Sign Up as New User</h3>\n            <p class=\"f-15\">Quick 4 step form, helping you save your time</p>\n          </div>\n          <div class=\"panel-body\">\n            <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input type=\"fname\" class=\"form-control inpt\" formControlName=\"firstName\" id=\"inputfName\"\n                    maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && f.firstName.errors }\"\n                    placeholder=\"First name\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.firstName.errors?.required\">Enter your\n                    name</span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input type=\"lname\" class=\"form-control inpt\" formControlName=\"lastName\" id=\"inputlName\"\n                    maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && f.lastName.errors }\" placeholder=\"Last name\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.lastName.errors?.required\">Enter your\n                    name</span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input type=\"email\" class=\"form-control inpt\" formControlName=\"emailId\" id=\"inputEmail\" maxlength=\"50\"\n                    [ngClass]=\"{ 'is-invalid': submitted && f.emailId.errors }\" placeholder=\"Enter your email\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.emailId.errors?.required\">Enter proper\n                    email\n                    id</span>\n\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input type=\"password\" class=\"form-control inpt\" formControlName=\"password\" id=\"inputPassword\"\n                    maxlength=\"10\" [ngClass]=\"{ 'is-invalid': submitted && f.password.errors }\" placeholder=\"Password\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.password.errors?.required\">Enter valid\n                    password</span>\n                </div>\n              </div>\n              <!--  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"f.emailAlredyExist.errors?.required\">Enter valid\n                password</span> -->\n              <div class=\"form-group last\">\n                <div class=\"col-sm-12\">\n                  <button type=\"submit\" class=\"col-sm-12 btn-clr-blue btn btn-sm\">\n                    Sign Up</button>\n                  <div *ngIf=\"errorMsg\">\n                    <p class=\"mail-already-exist\">Your Email {{errorMsg}}</p>\n                  </div>\n                  <div *ngIf=\"successMsg\">\n                    <p class=\"mail-sent\">{{successMsg}}</p>\n                  </div>\n                  <p class=\"text-center pt-3\">Already has a merchant account with us? <a [routerLink]=\"['/auth/login']\"\n                      class=\"cursor-pointer f-bold clr-blue\">Click Here</a> to login</p>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"pt-3 signup-bg\" *ngIf=\"category === 'merchant'\">\n  <div class=\"container\">\n    <div class=\"col-md-12 text-center pb-80\">\n      <!-- <span class=\"f-18 mr-10\">Make</span> -->\n      <h3 class=\"d-inline f-bold\" style=\"font-size: 20px;\">Make Your Brand known to customer in your locality</h3>\n      <p class=\"f-18\">Partner with us today & increase your reach.</p>\n    </div>\n    <div class=\"row m-0\">\n      <div class=\"col-md-6\">\n        <img class=\"img-fluid h-20\" src=\"assets/images/signup_img.png\" alt=\"signup\" />\n      </div>\n      <div class=\"col-md-6\">\n        <div class=\"panel panel-default cus-bg\">\n          <div class=\"partner-login\">\n            <h3 class=\"title-partner\">Sign Up as a New Merchant</h3>\n            <!-- <p class=\"f-15\">Quick 4 step form, helping you save your time</p> -->\n          </div>\n          <div class=\"panel-body\">\n            <form class=\"form-horizontal\" role=\"form\" [formGroup]=\"merchantRegisterForm\" (ngSubmit)=\"onSubmit()\">\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input type=\"fname\" class=\"form-control inpt\" formControlName=\"bpprimaryContactName\" id=\"inputfName\"\n                    maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && g.bpprimaryContactName.errors }\"\n                    placeholder=\"First name\">\n                  <span class=\"invalid-feedback cust-feedback-align\"\n                    *ngIf=\"g.bpprimaryContactName.errors?.required\">Enter your\n                    First Name</span>\n                </div>\n              </div>\n              <!-- <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input type=\"fname\" class=\"form-control inpt\" formControlName=\"bpprimaryContactName\" id=\"inputfName\"\n                    maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && g.bpprimaryContactName.errors }\"\n                    placeholder=\"Last Name\">\n                  <span class=\"invalid-feedback cust-feedback-align\"\n                    *ngIf=\"g.bpprimaryContactName.errors?.required\">Enter your\n                    Last Name</span>\n                </div>\n              </div> -->\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input type=\"text\" class=\"form-control inpt\" formControlName=\"bpname\" id=\"inputlName\" maxlength=\"50\"\n                    [ngClass]=\"{ 'is-invalid': submitted && g.bpname.errors }\" placeholder=\"Business Name\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"g.bpname.errors?.required\">Enter your\n                    Business Name</span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input [class.is-invalid]=\"merchantRegisterForm.get('emailId').invalid && merchantRegisterForm.get('emailId').touched\" type=\"email\" class=\"form-control inpt\" formControlName=\"emailId\" id=\"inputEmail\" maxlength=\"50\"\n                      placeholder=\"Business Email\"/>\n                      <div *ngIf=\"(primEmail.invalid && primEmail.touched) || primEmail.dirty\">\n                        <small *ngIf=\"primEmail.errors?.required\" class=\"text-danger\">Email is required</small>\n                        <!--question mark(?) is a safe navigation operator-->\n                        <small *ngIf=\"primEmail.errors?.pattern\" class=\"text-danger\">Please provide a valid email address</small>\n                      </div>\n                  <!-- <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"g.emailId.errors?.required\">Enter proper\n                    email\n                    id</span> -->\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input [class.is-invalid]=\"merchantRegisterForm.get('password').invalid && merchantRegisterForm.get('password').touched\" type=\"password\" class=\"form-control inpt\" formControlName=\"password\" id=\"inputEmail\" maxlength=\"50\"\n                      placeholder=\"Password\"/>\n                      <div *ngIf=\"(passVal.invalid && passVal.touched) || passVal.dirty\">\n                        <small *ngIf=\"passVal.errors?.required\" class=\"text-danger\">Password is required</small>\n                        <!--question mark(?) is a safe navigation operator-->\n                        <small *ngIf=\"passVal.errors?.pattern\" class=\"text-danger\">At least 8 characters in length,Lowercase letters,\n                          Uppercase letters,\n                          Numbers,\n                          Special characters</small>\n                      </div>\n                  <!-- <input type=\"password\" class=\"form-control inpt\" formControlName=\"password\" id=\"inputPassword\"\n                    maxlength=\"10\" [ngClass]=\"{ 'is-invalid': submitted && g.password.errors }\" placeholder=\"Password\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"g.password.errors?.required\">Enter Valid\n                    Password\n                  </span> -->\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input [class.is-invalid]=\"merchantRegisterForm.get('bpcity').invalid && merchantRegisterForm.get('bpcity').touched\" type=\"text\" class=\"form-control inpt\" formControlName=\"bpcity\" id=\"inputCity\" maxlength=\"25\"\n                  placeholder=\"City\"/>\n                  <div *ngIf=\"(cityVal.invalid && cityVal.touched) || cityVal.dirty\">\n                    <small *ngIf=\"cityVal.errors?.required\" class=\"text-danger\">City is required</small>\n                    <!--question mark(?) is a safe navigation operator-->\n                    <small *ngIf=\"cityVal.errors?.pattern\" class=\"text-danger\">Please provide a valid City</small>\n                  </div>\n                  <!-- <input type=\"text\" class=\"form-control inpt\" formControlName=\"bpcity\" id=\"inputCity\" maxlength=\"50\"\n                    [ngClass]=\"{ 'is-invalid': submitted && g.bpcity.errors }\" placeholder=\"City\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"g.bpcity.errors?.required\">Enter valid\n                    City</span> -->\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input [class.is-invalid]=\"merchantRegisterForm.get('bpzipcode').invalid && merchantRegisterForm.get('bpzipcode').touched\" type=\"text\" class=\"form-control inpt\" formControlName=\"bpzipcode\" id=\"inputZipCode\" maxlength=\"6\"\n                      placeholder=\"ZipCode\"/>\n                      <div *ngIf=\"(zipVal.invalid && zipVal.touched) || zipVal.dirty\">\n                        <small *ngIf=\"zipVal.errors?.required\" class=\"text-danger\">ZipCode is required</small>\n                        <!--question mark(?) is a safe navigation operator-->\n                        <small *ngIf=\"zipVal.errors?.pattern\" class=\"text-danger\">Please provide a valid ZipCode</small>\n                      </div>\n\n                  <!-- <input type=\"text\" class=\"form-control inpt\" formControlName=\"bpzipcode\" id=\"inputZipCode\"\n                    maxlength=\"6\" [ngClass]=\"{ 'is-invalid': submitted && g.bpzipcode.errors }\" placeholder=\"Zip Code\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"g.bpzipcode.errors?.required\">Enter valid\n                    Zip Code</span> -->\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <div class=\"col-sm-12\">\n                  <input [class.is-invalid]=\"merchantRegisterForm.get('bpwebsite').invalid && merchantRegisterForm.get('bpwebsite').touched\" type=\"text\" class=\"form-control inpt\" formControlName=\"bpwebsite\" id=\"inputwebsite\" maxlength=\"50\"\n                      placeholder=\"WebSite\"/>\n                      <div *ngIf=\"(webVal.invalid && webVal.touched) || webVal.dirty\">\n                        <small *ngIf=\"webVal.errors?.required\" class=\"text-danger\">WebSite is required</small>\n                        <!--question mark(?) is a safe navigation operator-->\n                        <small *ngIf=\"webVal.errors?.pattern\" class=\"text-danger\">Please provide a valid Website Name</small>\n                      </div>\n                  <!-- <input type=\"text\" class=\"form-control inpt\" formControlName=\"bpwebsite\" id=\"inputwebsite\"\n                    maxlength=\"50\" [ngClass]=\"{ 'is-invalid': submitted && g.bpwebsite.errors }\" placeholder=\"WebSite\">\n                  <span class=\"invalid-feedback cust-feedback-align\" *ngIf=\"g.bpwebsite.errors?.required\">Enter valid\n                    Website</span> -->\n                </div>\n              </div>\n              <div class=\"form-group last\">\n                <div class=\"col-sm-12\">\n                  <button type=\"submit\" class=\"col-sm-12 btn-clr-blue btn btn-sm\">\n                    Sign Up</button>\n                  <div *ngIf=\"errorMsg\">\n                    <p class=\"mail-already-exist\">Your Email {{errorMsg}}</p>\n                  </div>\n                  <div *ngIf=\"errMsg\">\n                    <p class=\"mail-already-exist\">{{errMsg}}</p>\n                  </div>\n                  <div *ngIf=\"successMsg\">\n                    <p class=\"mail-sent\">{{successMsg}}</p>\n                  </div>\n                  <p class=\"text-center pt-3\">Already has a merchant account with us? <a [routerLink]=\"['/auth/login']\"\n                      class=\"cursor-pointer f-bold clr-blue\">Click Here</a> to Login</p>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- <div *ngIf=\"pass\" style=\"display: none;\">\n  <app-signup-complete [email]=\"email\"></app-signup-complete>\n</div> -->";
    /***/
  },

  /***/
  "./src/app/login/index.ts":
  /*!********************************!*\
    !*** ./src/app/login/index.ts ***!
    \********************************/

  /*! exports provided: LoginModule */

  /***/
  function srcAppLoginIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginModule", function () {
      return LoginModule;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/login/signup/signup.component.ts");
    /* harmony import */


    var _login_route__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.route */
    "./src/app/login/login.route.ts");
    /* harmony import */


    var _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./signup-complete/signup-complete.component */
    "./src/app/login/signup-complete/signup-complete.component.ts");

    var LoginModule = function LoginModule() {
      _classCallCheck(this, LoginModule);
    };

    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"], _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_7__["SignupCompleteComponent"]],
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _login_route__WEBPACK_IMPORTED_MODULE_6__["LoginRoutingModule"]],
      exports: [],
      providers: []
    })], LoginModule);
    /***/
  },

  /***/
  "./src/app/login/login.route.ts":
  /*!**************************************!*\
    !*** ./src/app/login/login.route.ts ***!
    \**************************************/

  /*! exports provided: LoginRoutes, LoginRoutingModule */

  /***/
  function srcAppLoginLoginRouteTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutes", function () {
      return LoginRoutes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function () {
      return LoginRoutingModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/login/signup/signup.component.ts");
    /* harmony import */


    var _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./signup-complete/signup-complete.component */
    "./src/app/login/signup-complete/signup-complete.component.ts");

    var LoginRoutes = [{
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: 'login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: 'signup/:category',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'complete',
      component: _signup_complete_signup_complete_component__WEBPACK_IMPORTED_MODULE_5__["SignupCompleteComponent"]
    }];

    var LoginRoutingModule = function LoginRoutingModule() {
      _classCallCheck(this, LoginRoutingModule);
    };

    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(LoginRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginRoutingModule);
    /***/
  },

  /***/
  "./src/app/login/login/login.component.css":
  /*!*************************************************!*\
    !*** ./src/app/login/login/login.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".panel.panel-default {\n    padding: 28px 70px;\n    margin-left: 25px;\n    margin-top: 30%;\n    border-radius: 15.4px;\n}\n\n.partner-login {\n    padding-left: 15px;\n}\n\n.title-partner {\n    font-weight: 600;\n}\n\n.inpt {\n    border: none;\n    border-radius: 0;\n    box-shadow: none;\n    border-bottom: 1px solid #dcdcdc;\n    padding-left: 0;\n}\n\n.max-165 {\n    max-width: 165%;\n}\n\n.mail-already-exist {\n    text-align: center;\n    padding-top: 16px;\n    color: #f00;\n    font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLHFCQUFxQjtBQUN6Qjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsV0FBVztJQUNYLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFuZWwucGFuZWwtZGVmYXVsdCB7XG4gICAgcGFkZGluZzogMjhweCA3MHB4O1xuICAgIG1hcmdpbi1sZWZ0OiAyNXB4O1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiAxNS40cHg7XG59XG5cbi5wYXJ0bmVyLWxvZ2luIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi50aXRsZS1wYXJ0bmVyIHtcbiAgICBmb250LXdlaWdodDogNjAwO1xufVxuXG4uaW5wdCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RjZGNkYztcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5tYXgtMTY1IHtcbiAgICBtYXgtd2lkdGg6IDE2NSU7XG59XG5cbi5tYWlsLWFscmVhZHktZXhpc3Qge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICBjb2xvcjogI2YwMDtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login/login.component.ts":
  /*!************************************************!*\
    !*** ./src/app/login/login/login.component.ts ***!
    \************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var src_app_shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/shared/core/service/http.service */
    "./src/app/shared/core/service/http.service.ts");
    /* harmony import */


    var src_app_shared_core_models_common_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/core/models/common.models */
    "./src/app/shared/core/models/common.models.ts");
    /* harmony import */


    var src_app_shared_core_service_helper_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/shared/core/service/helper.service */
    "./src/app/shared/core/service/helper.service.ts");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      // tslint:disable-next-line:max-line-length
      function LoginComponent(document, renderer, httpService, formBuilder, router, helperService) {
        _classCallCheck(this, LoginComponent);

        this.document = document;
        this.renderer = renderer;
        this.httpService = httpService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.helperService = helperService;
        this.bgClass = 'home';
        this.submitted = false;
        this.loading = false;
        this.error = '';
        this.loginData = new src_app_shared_core_models_common_models__WEBPACK_IMPORTED_MODULE_6__["loginParams"]();
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.renderer.addClass(this.document.body, 'embedded-body');
          this.buildMerchantLoginForm();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.renderer.removeClass(document.body, 'embedded-body');
        }
      }, {
        key: "buildMerchantLoginForm",
        value: function buildMerchantLoginForm() {
          this.merchantLoginForm = this.formBuilder.group({
            emailId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this = this;

          // if (this.merchantLoginForm.invalid) {
          //   console.log('In');
          //   return;
          // }
          this.loginData.emailId = this.merchantLoginForm.value.emailId;
          this.loginData.password = this.merchantLoginForm.value.password;
          this.httpService.merchantLogin(this.loginData).subscribe(function (response) {
            console.log(response);

            if (response.status === 200) {
              if (response.body) {
                console.log(response.body.data.bpprimaryContactName);

                _this.router.navigate(['/merchant/draft-offer']); // this.router.navigate(['/merchant/create-offer']);


                _this.userName = response.body.data.bpprimaryContactName;
                _this.bpname = response.body.data.bpname;

                _this.helperService.setToLocalStorage('userName', _this.userName);

                _this.helperService.setToLocalStorage('bpname', _this.bpname);
              }
            }
          }, function (error) {
            console.log(error);
            _this.errMsg = error.error.message;
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.merchantLoginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: Document,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }, {
        type: src_app_shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_5__["HttpService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_shared_core_service_helper_service__WEBPACK_IMPORTED_MODULE_7__["HelperService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login/login.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_2__["DOCUMENT"]))], LoginComponent);
    /***/
  },

  /***/
  "./src/app/login/signup-complete/signup-complete.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/login/signup-complete/signup-complete.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginSignupCompleteSignupCompleteComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".panel.panel-default {\n  padding: 28px;\n  margin-left: 68px;\n  border-radius: 15.4px;\n}\n\n.partner-login {\n  padding-left: 15px;\n}\n\n.title-partner {\n  font-weight: 600;\n}\n\n.inpt {\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 1px solid #dcdcdc;\n  padding-left: 0;\n}\n\n.form-control.is-invalid:focus,\n.was-validated .form-control:invalid:focus {\n  box-shadow: none;\n}\n\n.mail-already-exist {\n  text-align: center;\n  padding-top: 16px;\n  color: #f00;\n  font-weight: 600;\n}\n\n.mail-sent {\n  text-align: center;\n  padding-top: 16px;\n  color: green;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc2lnbnVwLWNvbXBsZXRlL0Q6XFxBbmd1bGFyXFxHb0Jhc2t0X01lcmNoYW50LW1hc3Rlci9zcmNcXGFwcFxcbG9naW5cXHNpZ251cC1jb21wbGV0ZVxcc2lnbnVwLWNvbXBsZXRlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9zaWdudXAtY29tcGxldGUvc2lnbnVwLWNvbXBsZXRlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTs7RUFFSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vc2lnbnVwLWNvbXBsZXRlL3NpZ251cC1jb21wbGV0ZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC5wYW5lbC1kZWZhdWx0IHtcclxuICAgIHBhZGRpbmc6IDI4cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNjhweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1LjRweDtcclxufVxyXG5cclxuLnBhcnRuZXItbG9naW4ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG59XHJcblxyXG4udGl0bGUtcGFydG5lciB7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4uaW5wdCB7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcblxyXG4uZm9ybS1jb250cm9sLmlzLWludmFsaWQ6Zm9jdXMsXHJcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZDpmb2N1cyB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4ubWFpbC1hbHJlYWR5LWV4aXN0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgY29sb3I6ICNmMDA7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ubWFpbC1zZW50IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxufSIsIi5wYW5lbC5wYW5lbC1kZWZhdWx0IHtcbiAgcGFkZGluZzogMjhweDtcbiAgbWFyZ2luLWxlZnQ6IDY4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1LjRweDtcbn1cblxuLnBhcnRuZXItbG9naW4ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi50aXRsZS1wYXJ0bmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmlucHQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZDpmb2N1cyxcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tYWlsLWFscmVhZHktZXhpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBjb2xvcjogI2YwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1haWwtc2VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/signup-complete/signup-complete.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/login/signup-complete/signup-complete.component.ts ***!
    \********************************************************************/

  /*! exports provided: SignupCompleteComponent */

  /***/
  function srcAppLoginSignupCompleteSignupCompleteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupCompleteComponent", function () {
      return SignupCompleteComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/core/service/http.service */
    "./src/app/shared/core/service/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _shared_core_models_common_models__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../shared/core/models/common.models */
    "./src/app/shared/core/models/common.models.ts");
    /* harmony import */


    var src_app_shared_core_service_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/core/service/helper.service */
    "./src/app/shared/core/service/helper.service.ts");

    var SignupCompleteComponent =
    /*#__PURE__*/
    function () {
      // tslint:disable-next-line:max-line-length
      function SignupCompleteComponent(formBuilder, httpService, router, helperService) {
        _classCallCheck(this, SignupCompleteComponent);

        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.router = router;
        this.helperService = helperService;
        this.submitted = false;
        this.registraionSuccess = false;
        this.completeData = new _shared_core_models_common_models__WEBPACK_IMPORTED_MODULE_5__["CompleteParams"]();
      }

      _createClass(SignupCompleteComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.email = this.helperService.getFromLocalStorage('email');
          this.buildRegistraionForm();
          this.getEmail();
        }
      }, {
        key: "buildRegistraionForm",
        value: function buildRegistraionForm() {
          this.completeForm = this.formBuilder.group({
            primaryMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            secondaryMobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            address: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            state: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            zipcode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            dateOfBirth: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          var _this2 = this;

          this.httpService.getId(this.email).subscribe(function (response) {
            console.log(response);

            if (response.status === 202) {
              if (response.body) {
                if (response.body.responseData.length !== 0) {
                  _this2.id = response.body.responseData.id;
                }
              }
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this3 = this;

          this.submitted = true;

          if (this.completeForm.invalid) {
            return;
          }

          this.completeData.id = this.id;
          this.completeData.primaryMobile = this.completeForm.value.primaryMobile;
          this.completeData.secondaryMobile = this.completeForm.value.secondaryMobile;
          this.completeData.address = this.completeForm.value.address;
          this.completeData.state = this.completeForm.value.state;
          this.completeData.city = this.completeForm.value.city;
          this.completeData.zipcode = this.completeForm.value.zipcode;
          this.completeData.dateOfBirth = this.completeForm.value.dateOfBirth;
          console.log(this.completeData);
          this.httpService.postCreateUser(this.completeData).subscribe(function (response) {
            console.log(response);

            if (response.status === 202) {
              _this3.router.navigate(['/merchant/dashboard']);
            }
          }, function (error) {
            console.log(error);
          });
        }
      }, {
        key: "f",
        get: function get() {
          return this.completeForm.controls;
        }
      }]);

      return SignupCompleteComponent;
    }();

    SignupCompleteComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_3__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: src_app_shared_core_service_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }];
    };

    SignupCompleteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-complete',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup-complete.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/signup-complete/signup-complete.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup-complete.component.scss */
      "./src/app/login/signup-complete/signup-complete.component.scss")).default]
    })], SignupCompleteComponent);
    /***/
  },

  /***/
  "./src/app/login/signup/signup.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/login/signup/signup.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginSignupSignupComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".panel.panel-default {\n  padding: 28px;\n  margin-left: 68px;\n  border-radius: 15.4px;\n}\n\n.partner-login {\n  padding-left: 15px;\n}\n\n.title-partner {\n  font-weight: 600;\n}\n\n.inpt {\n  border: none;\n  border-radius: 0;\n  box-shadow: none;\n  border-bottom: 1px solid #dcdcdc;\n  padding-left: 0;\n}\n\n.form-control.is-invalid:focus,\n.was-validated .form-control:invalid:focus {\n  box-shadow: none;\n}\n\n.mail-already-exist {\n  text-align: center;\n  padding-top: 16px;\n  color: #f00;\n  font-weight: 600;\n}\n\n.mail-sent {\n  text-align: center;\n  padding-top: 16px;\n  color: green;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vc2lnbnVwL0Q6XFxBbmd1bGFyXFxHb0Jhc2t0X01lcmNoYW50LW1hc3Rlci9zcmNcXGFwcFxcbG9naW5cXHNpZ251cFxcc2lnbnVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7QUNDSjs7QURFQTs7RUFFSSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vc2lnbnVwL3NpZ251cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYW5lbC5wYW5lbC1kZWZhdWx0IHtcbiAgICBwYWRkaW5nOiAyOHB4O1xuICAgIG1hcmdpbi1sZWZ0OiA2OHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDE1LjRweDtcbn1cblxuLnBhcnRuZXItbG9naW4ge1xuICAgIHBhZGRpbmctbGVmdDogMTVweDtcbn1cblxuLnRpdGxlLXBhcnRuZXIge1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5pbnB0IHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBib3gtc2hhZG93OiBub25lO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICAgIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmZvcm0tY29udHJvbC5pcy1pbnZhbGlkOmZvY3VzLFxuLndhcy12YWxpZGF0ZWQgLmZvcm0tY29udHJvbDppbnZhbGlkOmZvY3VzIHtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4ubWFpbC1hbHJlYWR5LWV4aXN0IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDE2cHg7XG4gICAgY29sb3I6ICNmMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1haWwtc2VudCB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgIGNvbG9yOiBncmVlbjtcbiAgICBmb250LXdlaWdodDogNjAwO1xufSIsIi5wYW5lbC5wYW5lbC1kZWZhdWx0IHtcbiAgcGFkZGluZzogMjhweDtcbiAgbWFyZ2luLWxlZnQ6IDY4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDE1LjRweDtcbn1cblxuLnBhcnRuZXItbG9naW4ge1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG59XG5cbi50aXRsZS1wYXJ0bmVyIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLmlucHQge1xuICBib3JkZXI6IG5vbmU7XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGNkY2RjO1xuICBwYWRkaW5nLWxlZnQ6IDA7XG59XG5cbi5mb3JtLWNvbnRyb2wuaXMtaW52YWxpZDpmb2N1cyxcbi53YXMtdmFsaWRhdGVkIC5mb3JtLWNvbnRyb2w6aW52YWxpZDpmb2N1cyB7XG4gIGJveC1zaGFkb3c6IG5vbmU7XG59XG5cbi5tYWlsLWFscmVhZHktZXhpc3Qge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHBhZGRpbmctdG9wOiAxNnB4O1xuICBjb2xvcjogI2YwMDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1haWwtc2VudCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZy10b3A6IDE2cHg7XG4gIGNvbG9yOiBncmVlbjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/login/signup/signup.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/login/signup/signup.component.ts ***!
    \**************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppLoginSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _shared_core_models_common_models__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared/core/models/common.models */
    "./src/app/shared/core/models/common.models.ts");
    /* harmony import */


    var _shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../shared/core/service/http.service */
    "./src/app/shared/core/service/http.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_shared_core_service_helper_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/shared/core/service/helper.service */
    "./src/app/shared/core/service/helper.service.ts");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(formBuilder, httpService, router, helperService, route) {
        _classCallCheck(this, SignupComponent);

        this.formBuilder = formBuilder;
        this.httpService = httpService;
        this.router = router;
        this.helperService = helperService;
        this.route = route;
        this.submitted = false;
        this.registraionSuccess = false;
        this.RegistrationData = new _shared_core_models_common_models__WEBPACK_IMPORTED_MODULE_3__["registrationParams"]();
        this.MerchantRegData = new _shared_core_models_common_models__WEBPACK_IMPORTED_MODULE_3__["MerchantRegParams"]();
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          // tslint:disable-next-line:no-string-literal
          this.category = this.route.snapshot.params['category'];

          if (this.category === 'consumer') {
            this.buildRegistraionForm();
          }

          if (this.category === 'merchant') {
            this.buildMerchantRegistrationForm();
          }

          this.registrationMsg = '';
        }
      }, {
        key: "buildRegistraionForm",
        value: function buildRegistraionForm() {
          this.registerForm = this.formBuilder.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(6)]]
          });
        }
      }, {
        key: "buildMerchantRegistrationForm",
        value: function buildMerchantRegistrationForm() {
          this.merchantRegisterForm = this.formBuilder.group({
            bpprimaryContactName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            bpname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            emailId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}')]],
            bpcity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z\- ]+$')]],
            bpzipcode: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required,, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[0-9]{6}')]],
            bpwebsite: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^(?!:\/\/)([a-zA-Z0-9-_]+\.)*[a-zA-Z0-9][a-zA-Z0-9-_]+\.[a-zA-Z]{2,11}?$')]]
          });
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          if (this.category === 'consumer') {
            this.submitted = true;

            if (this.registerForm.invalid) {
              return;
            }

            this.RegistrationData.emailId = this.registerForm.value.emailId;
            this.RegistrationData.firstName = this.registerForm.value.firstName;
            this.RegistrationData.lastName = this.registerForm.value.lastName;
            this.RegistrationData.password = this.registerForm.value.password;
            console.log(this.RegistrationData);
            var x = this.RegistrationData.emailId;
            var atposition = x.indexOf('@');
            var dotposition = x.lastIndexOf('.');

            if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= x.length) {
              this.errMsg = 'Please enter a valid E-mail address!';
              return false;
            }

            this.httpService.postCreateUser(this.RegistrationData).subscribe(function (response) {
              console.log(response);

              if (response.status === 202) {
                console.log(response.body.statusMessage);
                _this4.successMsg = response.body.statusMessage;
                _this4.email = response.body.responseData.emailId;

                _this4.helperService.setToLocalStorage('email', _this4.email);

                _this4.pass = true; // this.router.navigate(['/auth/complete']);
              }
            }, function (error) {
              console.log(error);
              _this4.errorMsg = error.error.statusMessage;
              console.log(_this4.errorMsg);
            });
          }

          if (this.category === 'merchant') {
            this.submitted = true;

            if (this.merchantRegisterForm.invalid) {
              return;
            }

            this.MerchantRegData.bpprimaryContactName = this.merchantRegisterForm.value.bpprimaryContactName;
            this.MerchantRegData.bpname = this.merchantRegisterForm.value.bpname;
            this.MerchantRegData.emailId = this.merchantRegisterForm.value.emailId;
            this.MerchantRegData.password = this.merchantRegisterForm.value.password;
            this.MerchantRegData.bpcity = this.merchantRegisterForm.value.bpcity;
            this.MerchantRegData.bpzipcode = this.merchantRegisterForm.value.bpzipcode;
            this.MerchantRegData.bpwebsite = this.merchantRegisterForm.value.bpwebsite;
            console.log(this.MerchantRegData); // Email Id  Validation

            if (this.MerchantRegData.emailId !== '') {
              var _x = this.MerchantRegData.emailId;

              var _atposition = _x.indexOf('@');

              var _dotposition = _x.lastIndexOf('.');

              if (_atposition < 1 || _dotposition < _atposition + 2 || _dotposition + 2 >= _x.length) {
                this.errMsg = 'Please enter a valid E-mail address!';
                return false;
              }
            } // Zip code Validation
            // if (this.MerchantRegData.bpzipcode !== '') {
            //   const check = /^\d{6}$|^\d{5}$/;
            //   if (!check.test(this.MerchantRegData.bpzipcode)) {
            //     this.errMsg = 'Enter Valid Zip Code';
            //     return false;
            //   }
            // }


            this.httpService.postMerchantCreateUser(this.MerchantRegData).subscribe(function (response) {
              console.log(response);

              if (response.status === 200) {
                _this4.router.navigate(['/auth/login']);
              }
            }, function (error) {
              console.log(error);
              _this4.errorMsg = error.error.message;
              console.log(_this4.errorMsg);
            });
          }
        }
      }, {
        key: "f",
        get: function get() {
          return this.registerForm.controls;
        }
      }, {
        key: "g",
        get: function get() {
          return this.merchantRegisterForm.controls;
        }
      }, {
        key: "primEmail",
        get: function get() {
          return this.merchantRegisterForm.get('emailId');
        }
      }, {
        key: "passVal",
        get: function get() {
          return this.merchantRegisterForm.get('password');
        }
      }, {
        key: "zipVal",
        get: function get() {
          return this.merchantRegisterForm.get('bpzipcode');
        }
      }, {
        key: "webVal",
        get: function get() {
          return this.merchantRegisterForm.get('bpwebsite');
        }
      }, {
        key: "cityVal",
        get: function get() {
          return this.merchantRegisterForm.get('bpcity');
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _shared_core_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_shared_core_service_helper_service__WEBPACK_IMPORTED_MODULE_6__["HelperService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.scss */
      "./src/app/login/signup/signup.component.scss")).default]
    })], SignupComponent);
    /***/
  }
}]);
//# sourceMappingURL=login-index-es5.js.map