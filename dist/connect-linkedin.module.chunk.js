webpackJsonp(["connect-linkedin.module"],{

/***/ "./src/app/connect-linkedin/connect-linkedin.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\n<div class=\"text-center\" *ngIf=\"isLoggedIn && !isStatus\">\n  <div class=\"row\">\n    <div class=\"col-lg-12 col-md-12\">\n    <h2>Profile Status: <img src=\"../../assets/images/connect/if_status-offline_46253.png\"></h2>\n    </div>\n      <div class=\"inner-container\">\n          <div  class=\"name row\">\n              <h2 >Click to Connect your LinkedIn Profile </h2>\n          </div>\n        <div  class=\"row info-box\">\n            <img class=\"cannot-upload\" src=\"../../assets/images/conenct-upload-icon.png\" (click)=\"linkedInLogin()\" >\n          </div>\n      </div>\n\n\n\n  </div>\n\n</div>\n<ng-container *ngIf=\"!isLoggedIn && !isStatus\">\n<div class=\"row\">\n  <div class=\"col-lg-12 col-md-12\">\n    <h2>Profile Status: <img src=\"../../assets/images/connect/if_status-offline_46253.png\" title=\"Not Connected\">\n     </h2>\n  </div>\n\n\n  <!-- <h6>Profile Status: <img src=\"../../assets/images/connect/if_status-offline_46253.png\" title=\"Not Connected\"></h6> -->\n  <form (ngSubmit)=\"post_linkedIn(f)\" #f >\n<div class=\"card offset-4\" style=\"width: 18rem;\" >\n  <img class=\"card-img-top\" [src]=\"userURL.photoUrl\" alt=\"card image\" name=\"img\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">LinkedIn Profile</h5>\n    <p class=\"card-text\">Hi, {{userURL.name}}<br> Click to save your your profile</p>\n  </div>\n  <ul class=\"list-group list-group-flush\">\n    <li class=\"list-group-item\">\n      <mat-form-field>\n        <input matInput type=\"text\" [value]=\"userURL.name\" placeholder=\"Name\" name=\"nm\">\n\n      </mat-form-field>\n    </li>\n\n\n    <li class=\"list-group-item\">\n      <mat-form-field>\n        <input matInput type=\"text\" [value]=\"userURL.email\" placeholder=\"Email\" name=\"em\">\n\n      </mat-form-field>\n    </li>\n  </ul>\n  <div class=\"card-body\">\n    <button class=\"btn btn-danger\">CANCEL</button>\n    <button class=\"btn btn-success\" type=\"submit\">SAVE</button>\n  </div>\n</div>\n  </form>\n</div>\n</ng-container>\n\n<ng-container *ngIf=\"postYes && isStatus\">\n    <div class=\"position-r\">\n        <button type=\"button\" class=\"btn profile-btn\" routerLink=\"/manage-profiles\">Manage your Profile</button>\n    </div>\n    <div class=\"text-center col-lg-12 col-md-12\">\n        <h2>Profile Status: <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h2>\n      </div>\n  <!-- <h6>Profile Status: <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"></h6> -->\n    <div class=\"connect-card\" >\n      <div class=\"head\">\n          <h5 class=\"\">LinkedIn Profile</h5>\n      </div>\n\n      <div class=\"img-box\">\n        <img class=\"\" [src]=\"response.image\" alt=\"card image\" name=\"img\">\n      </div>\n      \n      <div class=\"user-box text-center\">\n        <p class=\"user-name\">Hi {{response.name}} </p> \n        <p class=\"detail\"> Your Profile is Connected with LinkedIn.</p>\n      </div>\n      <div class=\"user-box\">\n        <form class=\"sh-signup-form-fix\">\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" [value]=\"response.name\" placeholder=\"Name\" name=\"nm\">\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" [value]=\"response.email\" placeholder=\"Email\" name=\"em\">\n          </mat-form-field>\n        </form>\n      </div>\n</div>\n\n</ng-container>\n"

/***/ }),

/***/ "./src/app/connect-linkedin/connect-linkedin.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  text-align: center !important;\n  -webkit-box-shadow: 1px 1px 1px 1px #888 !important;\n          box-shadow: 1px 1px 1px 1px #888 !important; }\n\n.card-img {\n  height: 80px !important;\n  width: 120px !important; }\n\n.card-img-top {\n  width: 65%;\n  margin-left: 18%;\n  margin-top: 1%; }\n\nhr {\n  background-color: #c00;\n  height: 0.76px !important; }\n\n.mat-form-field-infix {\n  padding: 2rem !important; }\n"

/***/ }),

/***/ "./src/app/connect-linkedin/connect-linkedin.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectLinkedinComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_social_login__ = __webpack_require__("./node_modules/ng4-social-login/ng4-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ng4_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConnectLinkedinComponent = (function () {
    function ConnectLinkedinComponent(socialAuthService, router, toast, vcr, obj) {
        this.socialAuthService = socialAuthService;
        this.router = router;
        this.toast = toast;
        this.obj = obj;
        this.model = [];
        this.postYes = false;
        this.user = __WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["SocialUser"];
        this.userURL = __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["LoginProviderClass"];
        this.isLoggedIn = true;
        this.isStatus = false;
        this.toast.setRootViewContainerRef(vcr);
    }
    ConnectLinkedinComponent.prototype.ngOnInit = function () {
        if (this.postYes = this.isStatus = true) {
            this.get_Linked_in_data();
        }
        this.checkStatus();
    };
    ConnectLinkedinComponent.connectlinkedin = function () {
        alert('opened');
        var x = screen.width / 2 - 700 / 2;
        var y = screen.height / 2 - 450 / 2;
        var strWindowFeatures = "location=yes,height=624,width=584,scrollbars=yes,status=yes,left=" + x + ",top=" + y;
        // let URL = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=77a1j72f9bf5ld&redirect_uri="+Config.api+"/influencer/profile/connect-linkedin&state=49f98033f3b6a37ef2d42be0399349e46fe7b37skladkas9eed7e5cd&scope=r_basicprofile+r_emailaddress";
        var URL = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=77a1j72f9bf5ld&redirect_uri=http://localhost:4200/profile/connect-linkedin&state=49f98033f3b6a37ef2d42be0399349e46fe7b37skladkas9eed7e5cd&scope=r_basicprofile+r_emailaddress";
        // let URL = "https://www.linkedin.com/uas/oauth2/authorization?response_type=code&client_id=77a1j72f9bf5ld&redirect_uri=https://influencer.influexpai.com/connect-linkedin&state=49f98033f3b6a37ef2d42be0399349e46fe7b37skladkas9eed7e5cd&scope=r_basicprofile+r_emailaddress";
        var win = window.open(URL, "_blank", strWindowFeatures);
        if (win.status) {
            alert(win.status);
            console.log('Window Status is...........', win.status);
        }
    };
    ConnectLinkedinComponent.prototype.linkedInLogin = function () {
        var _this = this;
        this.socialAuthService.signIn(__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["LinkedinLoginProvider"].PROVIDER_ID).then(function (userData) {
            // this.user= userData;
            _this.isLoggedIn = false;
            _this.userURL = userData;
            console.log('user url is', _this.userURL);
            _this.showSuccess();
        });
    };
    ConnectLinkedinComponent.prototype.refresh = function () {
        window.location.reload();
    };
    ConnectLinkedinComponent.prototype.showSuccess = function () {
        this.toast.success('Please Save your Profile!', 'Success!');
    };
    ConnectLinkedinComponent.prototype.post_linkedIn = function (f) {
        var _this = this;
        var username = localStorage.getItem('username');
        console.log(username);
        this.obj.postLinkedInData(this.userURL.name, this.userURL.email, this.userURL.photoUrl, username).subscribe(function (data) {
            _this.postYes = true;
            _this.isStatus = true;
            // Swal('Profile get Sucessfully', '', 'success');
            _this.getSuccessfullyProfile();
            _this.get_Linked_in_data();
        }, function (error) {
            // Swal('Profile Not Get', error.toString(), 'error');
            console.log('error is ', error);
            alert(error.toString());
        });
    };
    ConnectLinkedinComponent.prototype.getSuccessfullyProfile = function () {
        this.toast.success('Profile get Sucessfully!', 'Success!');
    };
    ConnectLinkedinComponent.prototype.clicktoLogin = function () {
        this.toast.warning('Login to Connect Your Profile', 'Please Login');
    };
    ConnectLinkedinComponent.prototype.get_Linked_in_data = function () {
        var _this = this;
        this.obj.getLinkedInData().subscribe(function (data) {
            _this.response = data;
            _this.getSuccessfullyProfile();
        }, function (error) {
            _this.clicktoLogin();
        });
    };
    ConnectLinkedinComponent.prototype.checkStatus = function () {
        var _this = this;
        this.obj.linkedInData_Status().subscribe(function (data) {
            if (data['Status'] == true) {
                _this.isStatus = true;
            }
            else if (data['Status'] == false) {
                _this.isStatus = false;
            }
        });
    };
    ConnectLinkedinComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-connect-linkedin',
            template: __webpack_require__("./src/app/connect-linkedin/connect-linkedin.component.html"),
            styles: [__webpack_require__("./src/app/connect-linkedin/connect-linkedin.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["AuthService"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ng4_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* App_service */]])
    ], ConnectLinkedinComponent);
    return ConnectLinkedinComponent;
}());



/***/ }),

/***/ "./src/app/connect-linkedin/connect-linkedin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConnectLinkedinModule", function() { return ConnectLinkedinModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_module__ = __webpack_require__("./src/app/loader/loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__connect_linkedin_component__ = __webpack_require__("./src/app/connect-linkedin/connect-linkedin.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__connect_linkedin_routing__ = __webpack_require__("./src/app/connect-linkedin/connect-linkedin.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { DemographicComponent } from './demographic/demographic.component';


// import {MatDatepickerModule} from '@angular/material';
var ConnectLinkedinModule = (function () {
    function ConnectLinkedinModule() {
    }
    ConnectLinkedinModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_5__loader_loader_module__["a" /* LoaderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__connect_linkedin_routing__["a" /* ConnectLinkenInRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__connect_linkedin_component__["a" /* ConnectLinkedinComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__connect_linkedin_component__["a" /* ConnectLinkedinComponent */]]
        })
    ], ConnectLinkedinModule);
    return ConnectLinkedinModule;
}());



/***/ }),

/***/ "./src/app/connect-linkedin/connect-linkedin.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConnectLinkenInRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__connect_linkedin_component__ = __webpack_require__("./src/app/connect-linkedin/connect-linkedin.component.ts");

var ConnectLinkenInRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__connect_linkedin_component__["a" /* ConnectLinkedinComponent */],
        data: {
            heading: 'Connect LinkedIn'
        }
    },
];


/***/ })

});
//# sourceMappingURL=connect-linkedin.module.chunk.js.map