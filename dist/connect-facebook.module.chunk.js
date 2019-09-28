webpackJsonp(["connect-facebook.module"],{

/***/ "./src/app/connect-facebook/connect-facebook.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\n<div class=\"container-fluid text-center\" *ngIf=\"isLoggedIn && !isFBStatus\">\n   <div class=\"row\">\n     <div class=\"col-lg-12 col-md-12\">\n       <h2>Profile Status: \n         <img src=\"../../assets/images/connect/if_status-offline_46253.png\">\n        </h2>\n     </div>\n\n     <div  class=\"inner-container\">\n      <div  class=\"name row\">\n        <h2>Click to Connect your Facebook Profile </h2>\n      </div>\n    \n      <div  class=\"row info-box\">\n        <img class=\"cannot-upload\" src=\"../../assets/images/conenct-upload-icon.png\" (click)=\"linkedFacebook()\" >\n      </div>\n    </div>\n\n\n\n\n\n\n    \n   </div>\n  </div>\n\n\n <ng-container *ngIf=\"!isLoggedIn && !isFBStatus\">\n\n   <h6>Profile Status: <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6>\n   <form  (ngSubmit)=\"post_FB(f)\" #f >\n   <div class=\"card offset-4\" style=\"width: 18rem;\" >\n     <img class=\"card-img-top\" [src]=\"user.photoUrl\" alt=\"card image\">\n     <div class=\"card-body\">\n       <h5 class=\"card-title\">Facebook Profile</h5>\n       <p class=\"card-text\">Hi, {{user.name}}<br> Click to save your your Profile.</p>\n     </div>\n     <ul class=\"list-group list-group-flush\">\n       <li class=\"list-group-item\">\n         <mat-form-field>\n           <input matInput type=\"text\" [value]=\"user.name\" placeholder=\"Name\">\n\n         </mat-form-field>\n       </li>\n\n\n       <li class=\"list-group-item\">\n         <mat-form-field>\n           <input matInput type=\"text\" [value]=\"user.email\" placeholder=\"Email\">\n\n         </mat-form-field>\n       </li>\n     </ul>\n     <div class=\"card-body\">\n       <button class=\"btn btn-danger\">CANCEL</button>\n       <button class=\"btn btn-success\" type=\"submit\">SAVE</button>\n     </div>\n   </div>\n   </form>\n </ng-container>\n <ng-container *ngIf=\"postYes && isFBStatus\">\n\n\n    <div class=\"position-r\">\n        <button type=\"button\" class=\"btn profile-btn\" routerLink=\"/manage-profiles\">Manage your Profile</button>\n    </div>\n    <div class=\"text-center col-lg-12 col-md-12\">\n        <h2>Profile Status:<img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h2>\n      </div>\n  <!-- <h6>Profile Status: <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6> -->\n    <div class=\"connect-card\" >\n      <div class=\"head\">\n          <h5 class=\"\">LinkedIn Profile</h5>\n      </div>\n\n      <div class=\"img-box\">\n          <img class=\"\" [src]=\"response.image\" alt=\"card image\" name=\"img\">\n      </div>\n      \n      <div class=\"user-box text-center\">\n        <p class=\"user-name\">Hi {{response.name}} </p> \n        <p class=\"detail\">Your Profile is Connected with Facebook.</p>\n      </div>\n      <div class=\"user-box\">\n        <form class=\"sh-signup-form-fix\">\n            <mat-form-field class=\"full-width \">\n                <input matInput type=\"text\" [value]=\"response.name\" placeholder=\"Name\" name=\"nm\">\n     \n              </mat-form-field>\n              <mat-form-field class=\"full-width \">\n                  <input matInput type=\"text\" [value]=\"response.email\" placeholder=\"Email\" name=\"em\">\n       \n                </mat-form-field>\n        </form>\n      </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n   <!-- <h6>Profile Status:<img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6>\n   <div class=\"card offset-4\" style=\"width: 18rem;\" >\n     <img class=\"card-img-top\" [src]=\"response.image\" alt=\"card image\" name=\"img\">\n     <div class=\"card-body\">\n       <h5 class=\"card-title\">LinkedIn Profile</h5>\n       <p class=\"card-text\">Hi {{response.name}} ,<br> Your Profile is Connected with Facebook.</p>\n     </div>\n     <ul class=\"list-group list-group-flush\">\n       <li class=\"list-group-item\">\n         <mat-form-field>\n           <input MatInput type=\"text\" [value]=\"response.name\" placeholder=\"Name\" name=\"nm\">\n\n         </mat-form-field>\n       </li>\n\n\n       <li class=\"list-group-item\">\n         <mat-form-field>\n           <input MatInput type=\"text\" [value]=\"response.email\" placeholder=\"Email\" name=\"em\">\n\n         </mat-form-field>\n       </li>\n     </ul>\n   </div>\n   <div>\n     <div class=\"row\">\n       <div class=\"col-md-3 offset-9\">\n         <button type=\"button\" class=\"btn btn-info\" routerLink=\"/manage-profiles\">Manage your Profile</button>\n       </div>\n     </div>\n   </div> -->\n"

/***/ }),

/***/ "./src/app/connect-facebook/connect-facebook.component.scss":
/***/ (function(module, exports) {

module.exports = "img {\n  cursor: pointer; }\n\n.card-img {\n  width: 150px; }\n\n.card {\n  text-align: center !important;\n  -webkit-box-shadow: 1px 1px 1px 1px #888 !important;\n          box-shadow: 1px 1px 1px 1px #888 !important; }\n\n.mat-form-field {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  font-size: 14px;\n  font-weight: bold; }\n"

/***/ }),

/***/ "./src/app/connect-facebook/connect-facebook.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectFacebookComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__ = __webpack_require__("./node_modules/ngx-facebook/dist/esm/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ConnectFacebookComponent = (function () {
    function ConnectFacebookComponent(fb, router, http, FB, toast, vcr, socialAuthService, obj) {
        this.fb = fb;
        this.router = router;
        this.http = http;
        this.FB = FB;
        this.toast = toast;
        this.socialAuthService = socialAuthService;
        this.obj = obj;
        this.user = __WEBPACK_IMPORTED_MODULE_7_ng4_social_login__["SocialUser"];
        this.isLoggedIn = true;
        this.model = [];
        this.postYes = false;
        this.isFBStatus = false;
        this.toast.setRootViewContainerRef(vcr);
        var initParams = {
            appId: '2076488752606610',
            xfbml: true,
            version: 'v2.12'
        };
        FB.init(initParams);
    }
    ConnectFacebookComponent.prototype.ngOnInit = function () {
        if (this.postYes = this.isFBStatus = true) {
            this.get_FB_in_data();
        }
        this.checkStatus();
    };
    ConnectFacebookComponent.prototype.signUpFB = function () {
        var _this = this;
        this.FB.login().then(function (response) {
            console.log('response is calling SignUpFB ', response);
            _this.storeFb(response['authResponse']['accessToken'].toString());
            // this.showSuccess();
        })
            .catch(function (error) { return console.error(error); });
    };
    ConnectFacebookComponent.prototype.storeFb = function (token) {
        var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Authorization': 'Bearer facebook ' + token });
        headers.append('Content-Type', 'application/json');
        this.http.get(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].api + '/get_fb_data/', { headers: headers })
            .subscribe(function (res) {
            // console.log(res.json());
            // this.toastr.success('Account Created!', 'Success!');
            localStorage.setItem('current_User', JSON.stringify(res.json()));
        }, function (error) {
            alert('exists');
        });
    };
    ConnectFacebookComponent.prototype.signinFb = function () {
        var _this = this;
        this.FB.logout();
        this.FB.login()
            .then(function (response) {
            var headers = new __WEBPACK_IMPORTED_MODULE_4__angular_http__["Headers"]({ 'Authorization': 'Bearer facebook ' + response['authResponse']['accessToken'].toString() });
            headers.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_3__config__["a" /* Config */].api + '/login_inf_socialAccnt/', { uid: response['authResponse']['userID'] }, { headers: headers })
                .subscribe(function (res) {
                console.log(res.json());
                localStorage.setItem('currentUser', JSON.stringify(res.json()));
                _this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
            }, function (error) {
                alert('Error');
            });
        })
            .catch(function (error) { return console.error(error); });
    };
    ConnectFacebookComponent.prototype.linkedFacebook = function () {
        var _this = this;
        this.socialAuthService.signIn(__WEBPACK_IMPORTED_MODULE_7_ng4_social_login__["FacebookLoginProvider"].PROVIDER_ID).then(function (userData) {
            _this.user = userData;
            _this.isLoggedIn = false;
            _this.showSuccess();
        });
    };
    ConnectFacebookComponent.prototype.showSuccess = function () {
        this.toast.success('Please Save your Profile!', 'Success!');
    };
    ConnectFacebookComponent.prototype.post_FB = function (f) {
        var _this = this;
        var username = localStorage.getItem('username');
        // console.log('Data isss', this.user.name, this.user.email, this.user.photoUrl);
        this.obj.postFBData(this.user.name, this.user.email, this.user.photoUrl, username).subscribe(function (data) {
            // console.log('data is ........', data);
            _this.postYes = true;
            // console.log('Email is............', localStorage.getItem('linkedIn_User_Email'))
        }, function (error) {
            // Swal('Profile Not Get', error.toString(), 'error');
        });
    };
    ConnectFacebookComponent.prototype.get_FB_in_data = function () {
        var _this = this;
        this.obj.getFBData().subscribe(function (data) {
            _this.response = data;
            // Swal('Profile get Sucessfully', '', 'success');
        }, function (error) {
            // Swal('Login to Connect Your Profile', '',  'error');
            _this.toast.warning('Login to Connect Your Profile');
        });
    };
    ConnectFacebookComponent.prototype.checkStatus = function () {
        var _this = this;
        this.obj.Facebook_Status().subscribe(function (data) {
            if (data['Status'] == true) {
                _this.isFBStatus = true;
            }
            else if (data['Status'] == false) {
                _this.isFBStatus = false;
            }
        });
    };
    ConnectFacebookComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connect-facebook',
            template: __webpack_require__("./src/app/connect-facebook/connect-facebook.component.html"),
            styles: [__webpack_require__("./src/app/connect-facebook/connect-facebook.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */], __WEBPACK_IMPORTED_MODULE_7_ng4_social_login__["AuthService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_5_ngx_facebook__["b" /* FacebookService */],
            __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_7_ng4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_8__app_service__["a" /* App_service */]])
    ], ConnectFacebookComponent);
    return ConnectFacebookComponent;
}());



/***/ }),

/***/ "./src/app/connect-facebook/connect-facebook.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectFacebookModule", function() { return ConnectFacebookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__connect_facebook_component__ = __webpack_require__("./src/app/connect-facebook/connect-facebook.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__connect_facebook_routing__ = __webpack_require__("./src/app/connect-facebook/connect-facebook.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__loader_loader_module__ = __webpack_require__("./src/app/loader/loader.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { DemographicComponent } from './demographic/demographic.component';

// import {MatDatepickerModule} from '@angular/material';
var ConnectFacebookModule = (function () {
    function ConnectFacebookModule() {
    }
    ConnectFacebookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_8__loader_loader_module__["a" /* LoaderModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__connect_facebook_routing__["a" /* ConnectFacebookRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_6__connect_facebook_component__["a" /* ConnectFacebookComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_6__connect_facebook_component__["a" /* ConnectFacebookComponent */]]
        })
    ], ConnectFacebookModule);
    return ConnectFacebookModule;
}());



/***/ }),

/***/ "./src/app/connect-facebook/connect-facebook.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectFacebookRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_facebook_component__ = __webpack_require__("./src/app/connect-facebook/connect-facebook.component.ts");

var ConnectFacebookRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__connect_facebook_component__["a" /* ConnectFacebookComponent */],
        data: {
            heading: 'Connect Facebook'
        }
    },
];


/***/ })

});
//# sourceMappingURL=connect-facebook.module.chunk.js.map