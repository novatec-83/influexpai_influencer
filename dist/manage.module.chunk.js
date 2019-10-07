webpackJsonp(["manage.module"],{

/***/ "./src/app/manage/manage.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"inner-container1\">\n  <div class=\"row\">\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\n        <div class=\"single\" *ngIf=\"isFBStatus\">\n            <h5>Facebook Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"> Connected</h6>\n        </div>\n        <div class=\"single\" *ngIf=\"!isFBStatus\">\n            <h5>Facebook Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status-offline_46253.png\" title=\"No tConnected\"> Not Connected</h6>\n        </div>\n\n      </div>\n      <div class=\"col-lg-4 col-sm-4 col-xs-12 text-center\">\n        <button class=\"delete-btn\" *ngIf=\"isFBStatus\" (click)=\"sureDeletedFB()\">Delete </button>\n        <h4 class=\"not-connect\" *ngIf=\"!isFBStatus\">Not Connected</h4>\n      </div>\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\n        <div class=\"single\" *ngIf=\"isYTStatus\">\n            <h5>Youtube Channel </h5>\\\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"> Connected</h6>\n\n        </div>\n        <div class=\"single\" *ngIf=\"!isYTStatus\">\n            <h5>Youtube Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status-offline_46253.png\" title=\"No tConnected\"> Not Connected</h6>\n\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-sm-4 col-xs-12 text-center\">\n        <button class=\"delete-btn\" *ngIf=\"isYTStatus\"  (click)=\"sureDeletedYT()\">Delete </button>\n        <h4 class=\"not-connect\" *ngIf=\"!isYTStatus\">Not Connected</h4>\n\n      </div>\n\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\n        <div class=\"single\">\n            <h5>Twitter Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"> Connected</h6>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-4 col-xs-12\" style=\"text-align: center\">\n        <button class=\"delete-btn\">Delete </button>\n      </div>\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\n        <div class=\"single\">\n            <h5>Instagram Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"> Connected</h6>\n\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-4 col-xs-12\" style=\"text-align: center\">\n        <button class=\"delete-btn\">Delete </button>\n      </div>\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\n        <div class=\"single\">\n            <h5>Blogger Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"> Connected</h6>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-4 col-xs-12\" style=\"text-align: center\">\n        <button class=\"delete-btn\" >Delete </button>\n      </div>\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\n        <div class=\"single\" *ngIf=\"isStatusLD\">\n            <h5>LinkedIn Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"> Connected</h6>\n        </div>\n\n        <div class=\"single\" *ngIf=\"!isStatusLD\">\n            <h5>LinkedIn Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status-offline_46253.png\" title=\"No tConnected\"> Not Connected</h6>\n        </div>\n      </div>\n\n\n      <div class=\"col-lg-4 col-sm-4 col-xs-12 text-center\">\n        <button class=\"delete-btn\" *ngIf=\"isStatusLD\"  (click)=\"sureDeletedLD()\">Delete </button>\n        <h4 class=\"not-connect\" *ngIf=\"!isStatusLD\">Not Connected</h4>\n      </div>\n      <div class=\"col-lg-8 col-sm-8 col-xs-12\">\n        <div class=\"single\">\n            <h5>Pinterest Profile</h5>\n            <h6 class=\"pull-right\"> <img src=\"../../assets/images/connect/if_status_46254.png\" title=\"Connected\"> Connected</h6>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-sm-4 col-xs-12\" style=\"text-align: center\">\n        <button class=\"delete-btn\">Delete </button>\n      </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/manage/manage.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  max-width: 75%;\n  margin-top: 3%; }\n\n.status {\n  text-align: right; }\n\n.bottom {\n  margin-top: 2%; }\n\n.btn-danger {\n  font-weight: 600; }\n\n.btn-danger {\n  background-color: #000;\n  border-color: #000; }\n"

/***/ }),

/***/ "./src/app/manage/manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sweetalert2__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ManageComponent = (function () {
    function ManageComponent(obj) {
        this.obj = obj;
        this.isStatusLD = false;
        this.isYTStatus = false;
        this.isFBStatus = false;
    }
    ManageComponent.prototype.ngOnInit = function () {
        this.checkStatusLD();
        this.checkStatusYT();
        this.checkStatusFB();
    };
    ManageComponent.prototype.checkStatusLD = function () {
        var _this = this;
        this.obj.linkedInData_Status().subscribe(function (data) {
            if (data['Status'] == true) {
                _this.isStatusLD = true;
            }
            else if (data['Status'] == false) {
                _this.isStatusLD = false;
            }
        });
    };
    ManageComponent.prototype.checkStatusYT = function () {
        var _this = this;
        this.obj.Youtube_Status().subscribe(function (data) {
            if (data['Status'] == true) {
                _this.isYTStatus = true;
            }
            else if (data['Status'] == false) {
                _this.isYTStatus = false;
            }
        });
    };
    ManageComponent.prototype.checkStatusFB = function () {
        var _this = this;
        this.obj.Facebook_Status().subscribe(function (data) {
            if (data['Status'] == true) {
                _this.isFBStatus = true;
                console.log('in True', data);
            }
            else if (data['Status'] == false) {
                _this.isFBStatus = false;
                console.log('in False', data);
            }
        });
    };
    ManageComponent.prototype.delete_Linked_in_data = function () {
        var _this = this;
        this.obj.deleteLinkedInData().subscribe(function (data) {
            _this.response = data;
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Profile delete Sucessfully', '', 'success');
            _this.checkStatusLD();
        }, function (error) {
            console.log('error is ', error);
        });
    };
    ManageComponent.prototype.delete_FB_data = function () {
        var _this = this;
        this.obj.delete_FBData().subscribe(function (data) {
            _this.response = data;
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Profile delete Sucessfully', '', 'success');
            _this.checkStatusFB();
        }, function (error) {
            console.log('error is ', error);
        });
    };
    ManageComponent.prototype.sureDeletedLD = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are You Sure you want to delete your Profile..?',
            type: 'question',
            confirmButtonText: 'Delete',
            preConfirm: function (result) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        _this.delete_Linked_in_data();
                    }, 2);
                });
            },
            showCancelButton: true
        });
    };
    ManageComponent.prototype.sureDeletedFB = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are You Sure you want to delete your Profile..?',
            type: 'question',
            confirmButtonText: 'Delete',
            preConfirm: function (result) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        _this.delete_FB_data();
                    }, 2);
                });
            },
            showCancelButton: true
        });
    };
    ManageComponent.prototype.delete_Yt_in_data = function () {
        var _this = this;
        this.obj.deleteYouTubeData().subscribe(function (data) {
            // console.log('data in get API ........', data);
            _this.responseYt = data;
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Profile delete Sucessfully', '', 'success');
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()('Profile Not Get', error.toString(), 'error');
        });
    };
    ManageComponent.prototype.sureDeletedYT = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_2_sweetalert2___default()({
            title: 'Are You Sure you want to delete your Profile..?',
            type: 'question',
            confirmButtonText: 'Delete',
            preConfirm: function (result) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        _this.delete_Yt_in_data();
                    }, 2);
                });
            },
            showCancelButton: true
        });
    };
    ManageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-manage',
            template: __webpack_require__("./src/app/manage/manage.component.html"),
            styles: [__webpack_require__("./src/app/manage/manage.component.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* App_service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* App_service */]])
    ], ManageComponent);
    return ManageComponent;
}());



/***/ }),

/***/ "./src/app/manage/manage.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageModule", function() { return ManageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__manage_component__ = __webpack_require__("./src/app/manage/manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manage_routing__ = __webpack_require__("./src/app/manage/manage.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ManageModule = (function () {
    function ManageModule() {
    }
    ManageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__manage_routing__["a" /* ManageRoutes */])],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__manage_component__["a" /* ManageComponent */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_4__manage_component__["a" /* ManageComponent */]]
        })
    ], ManageModule);
    return ManageModule;
}());



/***/ }),

/***/ "./src/app/manage/manage.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManageRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__manage_component__ = __webpack_require__("./src/app/manage/manage.component.ts");

var ManageRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__manage_component__["a" /* ManageComponent */],
        data: {
            heading: 'Manage Profiles'
        }
    },
];


/***/ })

});
//# sourceMappingURL=manage.module.chunk.js.map