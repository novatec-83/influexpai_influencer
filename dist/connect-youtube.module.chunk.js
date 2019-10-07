webpackJsonp(["connect-youtube.module"],{

/***/ "./src/app/connect-youtube/connect-youtube.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\n\n<div class=\"container-fluid text-center\" *ngIf=\"isLoggedIn && !isStatusYT\">\n\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12\">\n      <h2>Profile Status: <img src=\"../../assets/images/connect/if_status-offline_46253.png\"></h2>\n    </div>\n    <div class=\"inner-container\">\n        <div  class=\"name row\">\n            <h2 >Click to Connect your Youtube Channel </h2>\n        </div>\n      <div  class=\"row info-box\">\n          <img class=\"cannot-upload\" src=\"../../assets/images/conenct-upload-icon.png\" (click)=\"linkedGoogle()\"  >\n        </div>\n    </div>\n  </div>\n</div>\n\n<ng-container *ngIf=\"!isLoggedIn && !isStatusYT\">\n\n<h6>Profile Status: <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6>\n  <form (click)=\"post_Youtube(f)\" #f>\n<div class=\"card offset-4\" style=\"width: 18rem;\" >\n  <img class=\"card-img-top\" [src]=\"user.photoUrl\" alt=\"card image\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Youtube Channel</h5>\n    <p class=\"card-text\">Hi, {{user.name}}<br> Click to save your your Channel.</p>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <mat-form-field>\n        <input matInput type=\"text\" [value]=\"user.name\" placeholder=\"Name\">\n\n      </mat-form-field>\n    </li>\n\n\n    <li class=\"list-group-item\">\n      <mat-form-field>\n        <input matInput type=\"text\" [value]=\"user.email\" placeholder=\"Email\">\n\n      </mat-form-field>\n    </li>\n  </ul>\n  <div class=\"card-body\">\n    <button class=\"btn btn-danger\">CANCEL</button>\n    <button class=\"btn btn-success\" type=\"submit\">SAVE</button>\n  </div>\n</div>\n  </form>\n</ng-container>\n<ng-container *ngIf=\"postYes && isStatusYT\">\n\n\n  <!--<h6>Profile Status:<img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6>\n\n  <div class=\"card offset-4\" style=\"width: 18rem;\" >\n    <img class=\"card-img-top\" [src]=\"response.image\" alt=\"card image\" name=\"img\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Youtube Channel</h5>\n      <p class=\"card-text\">Hi {{response.name}} ,<br> Your Profile is Connected with youtube.</p>\n    </div>\n    <ul class=\"list-group list-group-flush\">\n      <li class=\"list-group-item\">\n        <mat-form-field>\n          <input matInput type=\"text\" [value]=\"response.name\" placeholder=\"Name\" name=\"nm\">\n\n        </mat-form-field>\n      </li>\n\n\n      <li class=\"list-group-item\">\n        <mat-form-field>\n          <input matInput type=\"text\" [value]=\"response.email\" placeholder=\"Email\" name=\"em\">\n\n        </mat-form-field>\n      </li>\n    </ul>\n\n\n  </div>\n   <div>\n    <div class=\"row\">\n      <div class=\"col-md-3 offset-9\">\n        <button type=\"button\" class=\"btn btn-info\" routerLink=\"/manage-profiles\">Manage your Profile</button>\n      </div>\n    </div>\n  </div> -->\n\n\n\n\n\n  <!--  -->\n  <div class=\"position-r\">\n    <button type=\"button\" class=\"btn profile-btn\" routerLink=\"/manage-profiles\">Manage your Profile</button>\n</div>\n<div class=\"text-center col-lg-12 col-md-12\">\n    <h2>Profile Status:<img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h2>\n  </div>\n<!-- <h6>Profile Status: <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6> -->\n<div class=\"connect-card\" >\n  <div class=\"head\">\n      <h5 class=\"\">Youtube Channel</h5>\n  </div>\n\n  <div class=\"img-box\">\n      <img [src]=\"response.image\" alt=\"card image\" name=\"img\">\n  </div>\n  \n  <div class=\"user-box text-center\">\n    <p class=\"user-name\">Hi {{response.name}} </p> \n    <p class=\"detail\">Your Profile is Connected with youtube.</p>\n  </div>\n  <div class=\"user-box\">\n    <form class=\"sh-signup-form-fix\">\n        <mat-form-field class=\"full-width \">\n          <input matInput type=\"text\" [value]=\"response.name\" placeholder=\"Name\" name=\"nm\">\n \n          </mat-form-field>\n          <mat-form-field class=\"full-width \">\n            <input matInput type=\"text\" [value]=\"response.email\" placeholder=\"Email\" name=\"em\">\n   \n            </mat-form-field>\n    </form>\n  </div>\n</div>\n\n\n\n\n\n\n\n</ng-container>\n"

/***/ }),

/***/ "./src/app/connect-youtube/connect-youtube.component.scss":
/***/ (function(module, exports) {

module.exports = "h6 {\n  text-align: left; }\n\nhr {\n  background-color: #c00;\n  height: 0.8px; }\n\n.card-img {\n  width: 150px; }\n\n.card {\n  text-align: center !important;\n  -webkit-box-shadow: 1px 1px 1px 1px #888 !important;\n          box-shadow: 1px 1px 1px 1px #888 !important; }\n"

/***/ }),

/***/ "./src/app/connect-youtube/connect-youtube.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectYoutubeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConnectYoutubeComponent = (function () {
    function ConnectYoutubeComponent(socialAuthService, toast, vcr, obj, el) {
        this.socialAuthService = socialAuthService;
        this.toast = toast;
        this.obj = obj;
        this.el = el;
        this.user = __WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["SocialUser"];
        this.isLoggedIn = true;
        this.model = [];
        this.postYes = false;
        this.isStatusYT = false;
        this.toast.setRootViewContainerRef(vcr);
    }
    ConnectYoutubeComponent.prototype.ngOnInit = function () {
        if (this.postYes = this.isStatusYT = true) {
            this.get_youtube_in_data();
        }
        this.checkStatus();
    };
    ConnectYoutubeComponent.prototype.linkedGoogle = function () {
        var _this = this;
        this.socialAuthService.signIn(__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["GoogleLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.user = userData;
            _this.isLoggedIn = false;
            _this.showSuccess();
        });
    };
    ConnectYoutubeComponent.prototype.showSuccess = function () {
        this.toast.success('Please Save your Profile!', 'Success!');
    };
    ConnectYoutubeComponent.prototype.post_Youtube = function (f) {
        var _this = this;
        var username = localStorage.getItem('username');
        this.obj.postYouTubeData(this.user.name, this.user.email, this.user.photoUrl, username).subscribe(function (data) {
            _this.postYes = true;
        }, function (error) {
            console.log(error);
        });
    };
    ConnectYoutubeComponent.prototype.get_youtube_in_data = function () {
        var _this = this;
        this.obj.getYouTubeData().subscribe(function (data) {
            _this.response = data;
        }, function (error) {
        });
    };
    ConnectYoutubeComponent.prototype.checkStatus = function () {
        var _this = this;
        this.obj.Youtube_Status().subscribe(function (data) {
            if (data['Status'] == true) {
                _this.isStatusYT = true;
            }
            else if (data['Status'] == false) {
                _this.isStatusYT = false;
            }
        });
    };
    ConnectYoutubeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connect-youtube',
            template: __webpack_require__("./src/app/connect-youtube/connect-youtube.component.html"),
            styles: [__webpack_require__("./src/app/connect-youtube/connect-youtube.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["AuthService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* App_service */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], ConnectYoutubeComponent);
    return ConnectYoutubeComponent;
}());



/***/ }),

/***/ "./src/app/connect-youtube/connect-youtube.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectYoutubeModule", function() { return ConnectYoutubeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connect_youtube_component__ = __webpack_require__("./src/app/connect-youtube/connect-youtube.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__loader_loader_module__ = __webpack_require__("./src/app/loader/loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connect_youtube_routing__ = __webpack_require__("./src/app/connect-youtube/connect-youtube.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { DemographicComponent } from './demographic/demographic.component';

// import {MatDatepickerModule} from '@angular/material';
var ConnectYoutubeModule = (function () {
    function ConnectYoutubeModule() {
    }
    ConnectYoutubeModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_7__loader_loader_module__["a" /* LoaderModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__connect_youtube_routing__["a" /* ConnectYoutubeRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__connect_youtube_component__["a" /* ConnectYoutubeComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__connect_youtube_component__["a" /* ConnectYoutubeComponent */]]
        })
    ], ConnectYoutubeModule);
    return ConnectYoutubeModule;
}());



/***/ }),

/***/ "./src/app/connect-youtube/connect-youtube.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectYoutubeRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_youtube_component__ = __webpack_require__("./src/app/connect-youtube/connect-youtube.component.ts");

var ConnectYoutubeRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__connect_youtube_component__["a" /* ConnectYoutubeComponent */],
        data: {
            heading: 'Connect Youtube'
        }
    },
];


/***/ })

});
//# sourceMappingURL=connect-youtube.module.chunk.js.map