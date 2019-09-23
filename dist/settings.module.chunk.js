webpackJsonp(["settings.module"],{

/***/ "./src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\r\n\r\n<div  class=\"inner-container\">\r\n\r\n\r\n  <div  class=\"row info-box\">\r\n    <div class=\"row pt-3 pb-2 mb-3 info-box\">\r\n      <div class=\"card-header card-header-icon\" data-background-color=\"rose\">\r\n        <img src=\"../../assets/images/preferences_32.png\">\r\n      </div>\r\n      <div>\r\n        <h4 style=\"font-weight: 600\">Preferences</h4></div>\r\n    <div class=\"setting-bar\">\r\n        <h5>Add me in Opt-In influencer's searches </h5>\r\n        <label class=\"switch\">\r\n          <input type=\"checkbox\" [(ngModel)]=\"opt_In\" (change)=\"OPT_IN()\">\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n    </div>\r\n  \r\n    <div class=\"setting-bar\" >\r\n        <h5>Allow brands & agencies to contact me directly</h5>\r\n        <label class=\"switch\">\r\n          <input type=\"checkbox\">\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n    </div>\r\n  \r\n  \r\n    <div class=\"setting-bar\">\r\n        <h5>Subscribe now to get InfluExpert.AI email updates</h5>\r\n        <label class=\"switch\">\r\n          <input type=\"checkbox\" [(ngModel)]=\"switch\" (change)=\"Subscribe()\">\r\n          <span class=\"slider round\"></span>\r\n        </label>\r\n    </div>\r\n\r\n   \r\n      \r\n    \r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/settings/settings.component.scss":
/***/ (function(module, exports) {

module.exports = ".switch {\n  position: relative;\n  display: inline-block;\n  width: 55px;\n  height: 27px;\n  margin: 0;\n  float: right; }\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  display: none; }\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  -webkit-transition: .4s;\n  transition: .4s; }\n\ninput:checked + .slider {\n  background-color: #2196F3; }\n\ninput:focus + .slider {\n  -webkit-box-shadow: 0 0 1px #2196F3;\n          box-shadow: 0 0 1px #2196F3; }\n\ninput:checked + .slider:before {\n  -webkit-transform: translateX(26px);\n  transform: translateX(26px); }\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px; }\n\n.slider.round:before {\n  border-radius: 50%; }\n\n.card-header {\n  padding: 1.4rem 1.4rem !important;\n  margin: -30px 10px 35px !important;\n  background-color: #030303 !important;\n  border-bottom: 0 solid rgba(0, 0, 0, 0.06) !important; }\n\ninput[_ngcontent-c4]:checked + .slider[_ngcontent-c4] {\n  background-color: black !important; }\n\n.inner-container {\n  width: 70%;\n  margin: 30px auto;\n  -webkit-box-shadow: 1px 1px 19px 2px #ccc;\n  box-shadow: 1px 1px 19px 2px #ccc; }\n"

/***/ }),

/***/ "./src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serv_http_service__ = __webpack_require__("./src/app/serv/http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SettingsComponent = (function () {
    function SettingsComponent(srvc_obj, https, Http) {
        this.srvc_obj = srvc_obj;
        this.https = https;
        this.Http = Http;
        this.switch = false;
        this.opt_In = false;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkOpt_In();
        var user_email = localStorage.getItem('email');
        // console.log('Current_User Email is', user_email);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        return this.https.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/subscribed-user/', { 'email': user_email })
            .map(function (response) {
            response.json();
            console.log('SUBSCRIBED USER', response.json());
            if (response.status == 202) {
                _this.switch = true;
            }
            else if (response.status == 500) {
                _this.switch = false;
            }
        }).subscribe(function (data) { });
    };
    SettingsComponent.prototype.checkOpt_In = function () {
        var _this = this;
        var email = localStorage.getItem('email');
        // console.log('user id', user_Id);
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/opt-in-user/', { 'email': email })
            .map(function (response) {
            response.json();
            console.log('OPT_IN  USER', response.json());
            if (response.status == 202) {
                _this.opt_In = true;
            }
            else if (response.status == 400) {
                _this.opt_In = false;
            }
        }).subscribe(function (data) { });
    };
    SettingsComponent.prototype.Subscribe = function () {
        if (this.switch) {
            this.srvc_obj.do_SubsCribe().subscribe(function (data) {
                // alert('Subscribe ....');
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Subscribe Successfull', '', 'success');
            });
        }
        else if (this.switch = true) {
            this.srvc_obj.do_UnSubsCribe().subscribe(function (data) {
                console.log('data is', data);
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('You are now Unubscribe', '', 'success');
            });
        }
    };
    SettingsComponent.prototype.OPT_IN = function () {
        if (this.opt_In) {
            this.srvc_obj.opt_In_On().subscribe(function (data) {
                // alert('Subscribe ....');
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Added to Opt-In Successfully', '', 'success');
            });
        }
        else if (this.opt_In = true) {
            this.srvc_obj.opt_In_Off().subscribe(function (data) {
                // console.log('data is', data);
                __WEBPACK_IMPORTED_MODULE_5_sweetalert2___default()('Removed from Opt-In Successfully', '', 'success');
            });
        }
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-settings',
            template: __webpack_require__("./src/app/settings/settings.component.html"),
            styles: [__webpack_require__("./src/app/settings/settings.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* App_service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* App_service */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* Http */], __WEBPACK_IMPORTED_MODULE_3__serv_http_service__["a" /* HttpService */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "./src/app/settings/settings.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsModule", function() { return SettingsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_loader_module__ = __webpack_require__("./src/app/loader/loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__settings_routing__ = __webpack_require__("./src/app/settings/settings.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















// import { DemographicComponent } from './demographic/demographic.component';

// import {MatDatepickerModule} from '@angular/material';
var SettingsModule = (function () {
    function SettingsModule() {
    }
    SettingsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_6__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_5__loader_loader_module__["a" /* LoaderModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_7__settings_routing__["a" /* SettingsRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_8__settings_component__["a" /* SettingsComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_8__settings_component__["a" /* SettingsComponent */]]
        })
    ], SettingsModule);
    return SettingsModule;
}());



/***/ }),

/***/ "./src/app/settings/settings.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__settings_component__ = __webpack_require__("./src/app/settings/settings.component.ts");

var SettingsRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__settings_component__["a" /* SettingsComponent */],
        data: {
            heading: 'Settings'
        }
    },
];


/***/ })

});
//# sourceMappingURL=settings.module.chunk.js.map