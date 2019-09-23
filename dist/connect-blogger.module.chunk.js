webpackJsonp(["connect-blogger.module"],{

/***/ "./src/app/connect-blogger/connect-blogger.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container-fluid text-center\" *ngIf=\"isLoggedIn\">\r\n  <div class=\"row\">\r\n    <div class=\"col-lg-12 col-md-12\">\r\n      <h2>Profile Status: <img src=\"../../assets/images/connect/if_status-offline_46253.png\"></h2>\r\n    </div>\r\n      <div class=\"inner-container\">\r\n          <div  class=\"name row\">\r\n              <h2 >Click to Connect your Instagram Profile</h2>\r\n          </div>\r\n        <div  class=\"row info-box\">\r\n            <img class=\"cannot-upload\" src=\"../../assets/images/conenct-upload-icon.png\" data-toggle=\"modal\" data-target=\"#myModal\" >\r\n          </div>\r\n\r\n\r\n      </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal fade margin-top-70\" id=\"myModal\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content popupmodel\">\r\n      <div class=\"modal-body model-box\">\r\n        <div class=\"row\">\r\n          <div class=\"col-lg-4 col-md-4 col-sm-3 col-xs-12\" >\r\n            <div class=\"popup-image\">\r\n              <!--<img src={{currentUser.profile_image}} alt=\"\"-->\r\n              <!--(click)=\"processProfileImage()\" style=\"width: 115px; height: 115px!important; margin-top: -20px; float: right\" onerror=\"this.src='../../assets/img/Blank_Avatar.png'\" />-->\r\n              <img class=\"hidden-md-down\"  src=\"../../assets/images/logos/Logo1.png\">\r\n              <img class=\"hidden-lg-up\" src=\"../../assets/images/logos/Logo1.png\" style=\"width: 170px; height: 115px!important; margin-left: -20px; \" alt=\"\">\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"col-lg-8 col-md-8 col-sm-12 col-xs-1 \" >\r\n            <p class=\" modal-v2__main-heading\"> </p>\r\n            <h4 class=\"modal-title body-heading\" style=\"font-size: 17px\">Paste here the Link of your\r\n              best blogging web url if you have? </h4>\r\n\r\n          </div>\r\n\r\n          <div class=\"popup-close-button\" data-dismiss=\"modal\">X</div>\r\n        </div>\r\n          <div class=\"margin-top-10 col-lg-12 col-md-12 col-sm-12\">\r\n            <mat-form-field class=\"full-width\">\r\n              <textarea matInput placeholder=\"Paste URL\"\r\n                        name=\"comt\">\r\n              </textarea>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n        <div class=\"text-right\">\r\n\r\n          <button type=\"button\" class=\"btn btn-fill\" data-dismiss=\"modal\" >Cancel</button>\r\n          <button type=\"button\" class=\"btn btn-fill\"  data-dismiss=\"modal\">Done</button>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"!isLoggedIn\" class=\"container text-center\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <h6>Profile Status: <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6>\r\n    </div>\r\n    <div class=\"col-md-4 offset-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <h4 class=\"card-title\">{{user.name}}</h4><hr>\r\n          <img class=\"card-img\" height=\"150px\" width=\"150px\" [src]=\"user.photoUrl\"><br><hr>\r\n          <a href=\"#\" class=\"card-link\">{{user.email}}</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/connect-blogger/connect-blogger.component.scss":
/***/ (function(module, exports) {

module.exports = ".popup-close-button {\n  border-radius: 100%;\n  background: #000000;\n  position: absolute;\n  top: -13px;\n  right: -12px;\n  padding: 3px 12px;\n  cursor: pointer;\n  -webkit-transition: all .1s ease-in-out;\n  transition: all .1s ease-in-out;\n  color: #fff;\n  font-size: 23px;\n  font-family: \"Open Sans\",sans-serif;\n  font-weight: 500;\n  text-align: center;\n  /* line-height: 0px; */\n  z-index: 1; }\n\n.hidden-md-down {\n  width: 100%;\n  margin: 15px auto; }\n\n.modal-backdrop.show {\n  opacity: 0.8 !important; }\n\ntextarea {\n  height: 40px !important;\n  width: 100% !important;\n  font-size: 25px; }\n"

/***/ }),

/***/ "./src/app/connect-blogger/connect-blogger.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectBloggerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConnectBloggerComponent = (function () {
    function ConnectBloggerComponent() {
        this.isLoggedIn = true;
    }
    ConnectBloggerComponent.prototype.ngOnInit = function () {
    };
    ConnectBloggerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connect-blogger',
            template: __webpack_require__("./src/app/connect-blogger/connect-blogger.component.html"),
            styles: [__webpack_require__("./src/app/connect-blogger/connect-blogger.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ConnectBloggerComponent);
    return ConnectBloggerComponent;
}());



/***/ }),

/***/ "./src/app/connect-blogger/connect-blogger.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectBloggerModule", function() { return ConnectBloggerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connect_blogger_component__ = __webpack_require__("./src/app/connect-blogger/connect-blogger.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__connect_blogger_routing__ = __webpack_require__("./src/app/connect-blogger/connect-blogger.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { DemographicComponent } from './demographic/demographic.component';

// import {MatDatepickerModule} from '@angular/material';
var ConnectBloggerModule = (function () {
    function ConnectBloggerModule() {
    }
    ConnectBloggerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__connect_blogger_routing__["a" /* ConnectBloggerRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__connect_blogger_component__["a" /* ConnectBloggerComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__connect_blogger_component__["a" /* ConnectBloggerComponent */]]
        })
    ], ConnectBloggerModule);
    return ConnectBloggerModule;
}());



/***/ }),

/***/ "./src/app/connect-blogger/connect-blogger.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectBloggerRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_blogger_component__ = __webpack_require__("./src/app/connect-blogger/connect-blogger.component.ts");

var ConnectBloggerRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__connect_blogger_component__["a" /* ConnectBloggerComponent */],
        data: {
            heading: 'Connect Blogger'
        }
    },
];


/***/ })

});
//# sourceMappingURL=connect-blogger.module.chunk.js.map