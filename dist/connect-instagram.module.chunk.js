webpackJsonp(["connect-instagram.module"],{

/***/ "./src/app/connect-instagram/connect-instagram.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container text-center\">\r\n  <!-- <div class=\"connect-box\">\r\n    <h2 >Click to Connect your Instagram Profile</h2>\r\n    <img src=\"../../assets/images/conenct-upload-icon.png\" (click)=\"signInWithInsta()\" style=\"max-height: 250px; cursor: pointer; margin: auto; max-width: 250px\" >\r\n  </div> -->\r\n\r\n  <div class=\"col-lg-12 col-md-12\">\r\n      <h2>Profile Status: \r\n        <img src=\"../../assets/images/connect/if_status-offline_46253.png\">\r\n       </h2>\r\n    </div>\r\n  <div  class=\"inner-container\">\r\n      <div  class=\"name row\">\r\n          <h2 >Click to Connect your Instagram Profile</h2>\r\n      </div>\r\n    \r\n      <div  class=\"row info-box\">\r\n        <img class=\"cannot-upload\" src=\"../../assets/images/conenct-upload-icon.png\" (click)=\"signInWithInsta()\" >\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/connect-instagram/connect-instagram.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/connect-instagram/connect-instagram.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectInstagramComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectInstagramComponent = (function () {
    function ConnectInstagramComponent(router, route, obj, http) {
        this.router = router;
        this.route = route;
        this.obj = obj;
        this.http = http;
        this.instaData = {};
        this.clientid = '9687c7ba4b4d46bf8b5a9c21aec91fc3';
    }
    ConnectInstagramComponent.prototype.ngOnInit = function () {
        // const  QueryParams= this.route.snapshot.queryParams;
        this.route
            .queryParams
            .subscribe(function (params) {
            console.log('params: ' + JSON.stringify(params));
            var at = params['#access_token'];
            console.log('access_token: ' + at);
        });
        // this.getData();
    };
    ConnectInstagramComponent.prototype.signInWithInsta = function () {
        var url = 'https://api.instagram.com/oauth/authorize/?client_id=' + this.clientid +
            '&redirect_uri=' + encodeURIComponent('http://localhost:3000/connect-instagram') +
            '&response_type=token';
        // console.log('Responce is.........', getResponseURL('token'));
        // console.log('Respose is.............. ', url);
        // window.location.href = url;
        this.getData();
    };
    // getData(){
    //     this.obj.get_instadata().subscribe((observer)=>{
    //       console.log('Observer is', observer);
    //     });
    //   this.instaData= localStorage.getItem('InstaData');
    //   console.log('Current Instagram User is.....', this.instaData);
    //
    // }
    ConnectInstagramComponent.prototype.getData = function () {
        var _this = this;
        return this.http.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=1117963920.9687c7b.86018ee191224e708e146d4d56a7a4cc')
            .map(function (res) {
            console.log('Response is ', res['data']);
            _this.InstaResponse = res;
            console.log('InstaData is', _this.InstaResponse.data[0]['user']);
        }).subscribe(function (data) {
            console.log('data is....', data);
        });
    };
    ConnectInstagramComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connect-instagram',
            template: __webpack_require__("./src/app/connect-instagram/connect-instagram.component.html"),
            styles: [__webpack_require__("./src/app/connect-instagram/connect-instagram.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* App_service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* App_service */],
            __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], ConnectInstagramComponent);
    return ConnectInstagramComponent;
}());



/***/ }),

/***/ "./src/app/connect-instagram/connect-instagram.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectInstagramModule", function() { return ConnectInstagramModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connect_instagram_component__ = __webpack_require__("./src/app/connect-instagram/connect-instagram.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__connect_instagram_routing__ = __webpack_require__("./src/app/connect-instagram/connect-instagram.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { DemographicComponent } from './demographic/demographic.component';

// import {MatDatepickerModule} from '@angular/material';
var ConnectInstagramModule = (function () {
    function ConnectInstagramModule() {
    }
    ConnectInstagramModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__connect_instagram_routing__["a" /* ConnectInstagramRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__connect_instagram_component__["a" /* ConnectInstagramComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__connect_instagram_component__["a" /* ConnectInstagramComponent */]]
        })
    ], ConnectInstagramModule);
    return ConnectInstagramModule;
}());



/***/ }),

/***/ "./src/app/connect-instagram/connect-instagram.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectInstagramRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_instagram_component__ = __webpack_require__("./src/app/connect-instagram/connect-instagram.component.ts");

var ConnectInstagramRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__connect_instagram_component__["a" /* ConnectInstagramComponent */],
        data: {
            heading: 'Connect Instagram'
        }
    },
];


/***/ })

});
//# sourceMappingURL=connect-instagram.module.chunk.js.map