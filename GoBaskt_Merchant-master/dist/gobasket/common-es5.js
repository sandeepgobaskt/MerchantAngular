function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/shared/core/models/common.models.ts":
  /*!*****************************************************!*\
    !*** ./src/app/shared/core/models/common.models.ts ***!
    \*****************************************************/

  /*! exports provided: loginParams, registrationParams, CompleteParams, MerchantRegParams, CreateOfferParams, RunCampaign */

  /***/
  function srcAppSharedCoreModelsCommonModelsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "loginParams", function () {
      return loginParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "registrationParams", function () {
      return registrationParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CompleteParams", function () {
      return CompleteParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MerchantRegParams", function () {
      return MerchantRegParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateOfferParams", function () {
      return CreateOfferParams;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RunCampaign", function () {
      return RunCampaign;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // tslint:disable-next-line:class-name


    var loginParams = function loginParams() {
      _classCallCheck(this, loginParams);
    }; // tslint:disable-next-line:class-name


    var registrationParams =
    /*#__PURE__*/
    function () {
      _createClass(registrationParams, [{
        key: "get",
        value: function get(arg0) {
          throw new Error("Method not implemented.");
        }
      }]);

      function registrationParams() {
        _classCallCheck(this, registrationParams);
      }

      return registrationParams;
    }();

    var CompleteParams = function CompleteParams() {
      _classCallCheck(this, CompleteParams);
    };

    var MerchantRegParams = function MerchantRegParams() {
      _classCallCheck(this, MerchantRegParams);
    };

    var CreateOfferParams = function CreateOfferParams() {
      _classCallCheck(this, CreateOfferParams);
    };

    var RunCampaign = function RunCampaign() {
      _classCallCheck(this, RunCampaign);
    };
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map