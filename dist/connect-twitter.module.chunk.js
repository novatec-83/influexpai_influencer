webpackJsonp(["connect-twitter.module"],{

/***/ "./src/app/connect-twitter/connect-twitter.component.html":
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container text-center\">\n  <!-- <div class=\"connect-box\">\n    <h2 >Click to Connect your Twitter Profile</h2>\n    <img src=\"../../assets/images/conenct-upload-icon.png\" (click)=\"getTwAccessToken()\" style=\"max-height: 250px; margin: auto; max-width: 250px\" >\n  </div> -->\n\n\n  <div class=\"col-lg-12 col-md-12\">\n      <h2>Profile Status: \n        <img src=\"../../assets/images/connect/if_status-offline_46253.png\">\n       </h2>\n    </div>\n  <div  class=\"inner-container\">\n      <div  class=\"name row\">\n        <h2>Click to Connect your Twitter Profile</h2>\n      </div>\n    \n      <div  class=\"row info-box\">\n        <img class=\"cannot-upload\" src=\"../../assets/images/conenct-upload-icon.png\" (click)=\"getTwAccessToken()\" >\n      </div>\n    </div>\n\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/connect-twitter/connect-twitter.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connect-twitter/connect-twitter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(Buffer) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectTwitterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConnectTwitterComponent = (function () {
    function ConnectTwitterComponent(http) {
        this.http = http;
        this.consumerkey = 'FjRW5PnI1hE2TvpYuGSxEeGKY';
        this.consumersecret = 'hDBBlbxN3Ua8w4NQ2cbddy1pD3YULnEyas3jVWMXhxMLM3H7ir';
        this.bearertoken = '';
    }
    ConnectTwitterComponent.prototype.ngOnInit = function () {
    };
    ConnectTwitterComponent.prototype.getTwAccessToken = function () {
        var _this = this;
        console.log("hello");
        var header = this.consumerkey + ':' + this.consumersecret;
        var encheader = new Buffer(header).toString('base64');
        var finalheader = 'Basic ' + encheader;
        this.http.post('https://api.twitter.com/oauth2/token', {
            form: { 'grant_type': 'client_credentials' },
            headers: { Authorization: finalheader }
        }).map(function (response) {
            // login successful if there's a jwt token in the response
            console.log(response + 'oyyy');
            _this.bearertoken = response.json().access_token;
            if (_this.bearertoken) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                console.log(_this.bearertoken);
            }
        });
    };
    ConnectTwitterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connect-twitter',
            template: __webpack_require__("./src/app/connect-twitter/connect-twitter.component.html"),
            styles: [__webpack_require__("./src/app/connect-twitter/connect-twitter.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]])
    ], ConnectTwitterComponent);
    return ConnectTwitterComponent;
}());


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/buffer/index.js").Buffer))

/***/ }),

/***/ "./src/app/connect-twitter/connect-twitter.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectTwitterModule", function() { return ConnectTwitterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connect_twitter_component__ = __webpack_require__("./src/app/connect-twitter/connect-twitter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__connect_twitter_routing__ = __webpack_require__("./src/app/connect-twitter/connect-twitter.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { DemographicComponent } from './demographic/demographic.component';

// import {MatDatepickerModule} from '@angular/material';
var ConnectTwitterModule = (function () {
    function ConnectTwitterModule() {
    }
    ConnectTwitterModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__connect_twitter_routing__["a" /* ConnectTwitterRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__connect_twitter_component__["a" /* ConnectTwitterComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__connect_twitter_component__["a" /* ConnectTwitterComponent */]]
        })
    ], ConnectTwitterModule);
    return ConnectTwitterModule;
}());



/***/ }),

/***/ "./src/app/connect-twitter/connect-twitter.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectTwitterRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_twitter_component__ = __webpack_require__("./src/app/connect-twitter/connect-twitter.component.ts");

var ConnectTwitterRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__connect_twitter_component__["a" /* ConnectTwitterComponent */],
        data: {
            heading: 'Connect Twitter'
        }
    },
];


/***/ })

});
//# sourceMappingURL=connect-twitter.module.chunk.js.map