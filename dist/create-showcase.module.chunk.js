webpackJsonp(["create-showcase.module"],{

/***/ "./src/app/create-showcase/FileValidator.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileValidatorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileValidatorDirective = (function () {
    function FileValidatorDirective() {
    }
    FileValidatorDirective_1 = FileValidatorDirective;
    FileValidatorDirective.validate = function (c) {
        return c.value == null || c.value.length == 0 ? { "required": true } : null;
    };
    FileValidatorDirective.prototype.validate = function (c) {
        return FileValidatorDirective_1.validate(c);
    };
    FileValidatorDirective = FileValidatorDirective_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: 'FileValidatorDirective',
            providers: [{
                    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["NG_VALIDATORS"], useExisting: FileValidatorDirective_1, multi: true
                }],
        })
    ], FileValidatorDirective);
    return FileValidatorDirective;
    var FileValidatorDirective_1;
}());



/***/ }),

/***/ "./src/app/create-showcase/create-showcase.component.html":
/***/ (function(module, exports) {

module.exports = "<app-loader></app-loader>\r\n<div class=\"container text-center\">\r\n  <div class=\"row text-center \">\r\n    <h2 class=\"stepper-heading\">Create ShowCase</h2>\r\n\r\n</div>\r\n</div>\r\n<div class=\"stepper-style\">\r\n<mat-horizontal-stepper [linear]=\"isLinear\" #stepper>\r\n  <mat-step [stepControl]=\"firstFormGroup\">\r\n    <form [formGroup]=\"firstFormGroup\">\r\n      <ng-template matStepLabel>Add Images</ng-template>\r\n\r\n        <div class=\"form-group photos-resume text-center\" style=\"margin-top: 50px;\">\r\n          <div style=\"\" class=\"col-md-4 uploaded-pic\" *ngFor=\"let img of ImgSrc;let ind=index\">\r\n            <div class=\"new\" >\r\n              <img accept=\".jpg, .jpeg, .png\" src=\"{{img}}\" alt=\"your image\" allowmultiple=\"true\"/>\r\n            </div>\r\n            <span (click)=\"removeItem(ind)\" class=\"make-gig-uploaded-img\">\r\n                            <i class=\"fa fa-close cancel-icon\" height=\"20\" width=\"20\"></i>\r\n            </span>\r\n          </div>\r\n\r\n          <!--<label *ngIf=\"FuncCheckNumberOfImages()\" class=\"upload-image left add-img\">-->\r\n            <!--Add Images-->\r\n            <!--<input class=\"file\" style=\"display: none\" (change)=\"  onChange($event)\"-->\r\n                   <!--type=\"file\" data-preview-file-type=\"text\" formControlName=\"firstCtrl\" required id=\"file1\"-->\r\n                   <!--accept=\".jpg, .jpeg, .png\"  name=\"file\"  multiple  />-->\r\n            <!--<img class=\"camera-img\"  src=\"../../assets/data/icons/addimage_512.png\" style=\"max-width: 100px; cursor: pointer; max-height: 50px\" alt=\"Add Image\"/>-->\r\n          <!--</label>-->\r\n          <label *ngIf=\"FuncCheckNumberOfImages()\" class=\"upload-image left add-img\">\r\n            Add Images\r\n            <input class=\"file\" style=\"display: none\" (change)=\"  onChange($event)\"\r\n                   type=\"file\" data-preview-file-type=\"text\" formControlName=\"firstCtrl\" required id=\"file1\"\r\n                   accept=\".jpg, .jpeg, .png\"  name=\"file\"  multiple  />\r\n            <img class=\"camera-img\"  src=\"../../assets/data/icons/addimage_512.png\" alt=\"Add Image\"/>\r\n          </label>\r\n          <!--*ngIf=\"FuncCheckIfImageUploaded()\"-->\r\n          <br>\r\n          <label>{{this.imageName}}</label>\r\n          <img *ngIf=\"FuncCheckNumberOfImages()\" src=\"\">\r\n\r\n          <button mat-raised-button (click)=\"onUpload()\" matStepperNext class=\"next-btn\">\r\n            Next\r\n          </button>\r\n        </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"secondFormGroup\">\r\n    <form [formGroup]=\"secondFormGroup\">\r\n\r\n      <ng-template matStepLabel>Overview</ng-template>\r\n      <div class=\"whole sh-signup-form-fix\">\r\n\r\n\r\n      <div class=\"row\">\r\n      <div class=\"col-lg-3\" id=\"margin\">\r\n      <label>Select Category</label>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n        <mat-form-field style=\"width: 100%;\">\r\n      <mat-select placeholder=\"{{'Please Select Category'}}\"  (change)=\"selectCat($event.value)\" required [(ngModel)]=\"model.catID\" ngDefaultControl [ngModelOptions]=\"{standalone: true}\"  style=\"width: 100%\">\r\n      <mat-option *ngFor=\"let option of options \"  [value]=\"option.id\" >{{ option.name }}</mat-option>\r\n      </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n      <div class=\"col-lg-3\" id=\"margin\">\r\n      <label >Showcase Title</label>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n      <mat-form-field style=\"width: 100%;margin-top: 10px;\">\r\n      <input matInput placeholder=\"Please Write the Title of your Showcase\" [(ngModel)]=\"model.title\" name=\"til\" formControlName=\"secondCtrl\" required  />\r\n\r\n      </mat-form-field>\r\n      </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n      <div class=\"col-lg-3\">\r\n      <label >Profile Link</label>\r\n      </div>\r\n      <div class=\"col-lg-9\">\r\n      <mat-form-field style=\"width: 100%\" >\r\n      <input matInput placeholder=\"Paste here the best social media profile\" [(ngModel)]=\"model.urls\" name=\"link\" formControlName=\"thirdCtrl\" required>\r\n\r\n      </mat-form-field>\r\n      </div>\r\n\r\n      </div>\r\n\r\n\r\n        <button mat-button matStepperPrevious class=\"back-button\">Back</button>\r\n        <button mat-raised-button matStepperNext class=\"next-btn\">\r\n          Next\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </mat-step>\r\n\r\n  <mat-step [stepControl]=\"thirdFromGroup\">\r\n  <form [formGroup]=\"thirdFromGroup\">\r\n  <ng-template matStepLabel>Description</ng-template>\r\n  <div class=\"row sh-signup-form-fix\">\r\n  <div class=\"col-lg-3\" id=\"margin\">\r\n  <label >Write Description</label>\r\n  </div>\r\n  <div class=\"col-lg-9\">\r\n  <mat-form-field class=\"margin-top-10 width100\">\r\n  <textarea matInput placeholder=\"Write Description\" [(ngModel)]=\"model.description\" name=\"des\" formControlName=\"fourthCtrl\" style=\"line-height:8.75px\"></textarea>\r\n  </mat-form-field>\r\n  </div>\r\n\r\n  </div>\r\n  <div>\r\n  <button mat-raised-button matStepperNext class=\"next-btn\">Next</button>\r\n  <button mat-raised-button matStepperPrevious style=\"margin-right: 15px\" class=\"back-button\">Back</button>\r\n  </div>\r\n  </form>\r\n  </mat-step>\r\n\r\n\r\n  <mat-step [stepControl]=\"fourthFromGroup\">\r\n  <form [formGroup]=\"fourthFromGroup\" class=\"sh-signup-form-fix\">\r\n  <ng-template matStepLabel>Requirements</ng-template>\r\n  <div class=\"row\">\r\n  <div class=\"col-lg-3\" id=\"margin\">\r\n  <label >Requirement 1</label>\r\n  </div>\r\n  <div class=\"col-lg-9\">\r\n  <mat-form-field style=\"width: 100%;    margin-top: 10px;\">\r\n  <input matInput placeholder=\"Requirement\" [(ngModel)]=\"model.requirement1\" name=\"req1\" formControlName=\"fifthCtrl\">\r\n\r\n  </mat-form-field>\r\n  </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"row\">\r\n  <div class=\"col-lg-3\" id=\"margin\">\r\n  <label >Requirement 2</label>\r\n  </div>\r\n  <div class=\"col-lg-9\">\r\n  <mat-form-field style=\"width: 100%\">\r\n  <input matInput placeholder=\"Requirement 2\" [(ngModel)]=\"model.requirement2\" name=\"req2\" formControlName=\"sixthCtrl\">\r\n  </mat-form-field>\r\n  </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"row\">\r\n  <div class=\"col-lg-3\" id=\"margin\">\r\n  <label >Requirement 3</label>\r\n  </div>\r\n  <div class=\"col-lg-9\">\r\n  <mat-form-field style=\"width: 100%\">\r\n  <input matInput placeholder=\"Requirement 3(Optional)\">\r\n  </mat-form-field>\r\n  </div>\r\n\r\n  </div>\r\n\r\n  <div>\r\n  <button mat-raised-button matStepperNext class=\"next-btn\">Next</button>\r\n  <button mat-raised-button matStepperPrevious class=\"back-button\" style=\"margin-right: 15px\">Back</button>\r\n  </div>\r\n  </form>\r\n  </mat-step>\r\n\r\n  <mat-step>\r\n    <form #f (ngSubmit)=\"createShowCase(f)\">\r\n    <ng-template matStepLabel>Publish</ng-template>\r\n    <div class=\"row\">\r\n    <div class=\"col-lg-12 text-center\" id=\"margin\">\r\n    <h6> Thanks for creating your ShowCase. Click to publsih your ShowCase,</h6>\r\n    <br>\r\n    <h6>\"Your showcase will be shown after reviewed by admin.</h6>\r\n    </div>\r\n\r\n    </div>\r\n    <div>\r\n      <button mat-button class=\"back-button\" type=\"submit\">Publish</button>\r\n      <button mat-button matStepperPrevious class=\"back-button\">Back</button>\r\n    </div>\r\n    </form>\r\n  </mat-step>\r\n</mat-horizontal-stepper>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/create-showcase/create-showcase.component.scss":
/***/ (function(module, exports) {

module.exports = ".job-postdetails.post-resume {\n  margin-top: 75px; }\n\n.job-bg {\n  background: 0 0; }\n\nsection {\n  min-width: 100%;\n  position: relative;\n  width: 100%; }\n\nnav.navbar.navbar-default {\n  background: #fff;\n  border: none;\n  -webkit-box-shadow: 1px 1px 1px 1px #ece9e9;\n          box-shadow: 1px 1px 1px 1px #ece9e9; }\n\n.res-tabs {\n  border-radius: 0 !important;\n  margin-bottom: 0; }\n\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7; }\n\n.navbar {\n  border-radius: 4px;\n  position: relative;\n  padding: 0 !important;\n  -webkit-box-orient: inherit !important;\n  -webkit-box-direction: inherit !important;\n      -ms-flex-direction: inherit !important;\n          flex-direction: inherit !important;\n  min-height: 50px; }\n\n.panel.panel-default {\n  border: none; }\n\n.res-tabs {\n  border-radius: 0 !important;\n  margin-bottom: 0; }\n\nnav.navbar.navbar-default {\n  background: #fff;\n  border: none;\n  -webkit-box-shadow: 1px 1px 1px 1px #ece9e9;\n          box-shadow: 1px 1px 1px 1px #ece9e9; }\n\n#navbar > ul > li > a {\n  font-size: 20px;\n  color: #616161;\n  cursor: pointer;\n  font-weight: 600; }\n\n#navbar ul li a:hover,\n#navbar ul li a:hover i {\n  color: #f80000; }\n\n.res-tabs ul li a {\n  padding: 10px 25px; }\n\ndiv#quiz label {\n  outline: 0 !important; }\n\nfieldset.rating input {\n  width: 0; }\n\nfieldset.rating label {\n  position: relative;\n  cursor: pointer; }\n\nfieldset.rating label:before {\n  content: \"\\f006\";\n  font-family: FontAwesome;\n  /*color: #ECB100*/ }\n\n.make-gig-delete-img,\n.make-gig-uploaded-img {\n  top: 0;\n  font-size: 20px;\n  color: #000;\n  position: absolute;\n  cursor: pointer;\n  right: 7px; }\n\nfieldset.rating label:hover::before {\n  content: \"\\f005\";\n  font-family: FontAwesome; }\n\nspan.number-step {\n  width: 35px;\n  height: 35px;\n  display: inline-block;\n  text-align: center;\n  border: 2px solid;\n  vertical-align: middle;\n  border-radius: 50%;\n  font-size: 20px;\n  padding-top: 5px;\n  margin-right: 15px; }\n\nnav#affix1 ul li a, nav#affix2 ul li a, nav#affix3 ul li a, nav#affix4 ul li a, nav#affix5 ul li a {\n  color: #fff; }\n\nul.nav.navbar-nav li a {\n  font-size: 26px; }\n\n.navbar-default .navbar-nav > li > a {\n  color: #777; }\n\n.res-tabs ul li a {\n  padding: 10px 25px; }\n\n.create-shw-case li a {\n  font-weight: 600; }\n\n.navbar-nav {\n  float: left;\n  -webkit-box-orient: horizontal !important;\n  -webkit-box-direction: normal !important;\n      -ms-flex-direction: row !important;\n          flex-direction: row !important;\n  margin: 0;\n  padding: 0; }\n\n.navbar-nav > li {\n  float: left; }\n\n.navbar-nav > li > a {\n  padding-top: 15px;\n  padding-bottom: 15px; }\n\n.navbar-form {\n  padding: 10px 15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent; }\n\n.res-tabs[_ngcontent-c3] ul[_ngcontent-c3] li[_ngcontent-c3] a[_ngcontent-c3] {\n  padding: initial;\n  margin-left: 25px; }\n\n.panel-heading.show-case-heading {\n  background: #f80000 !important; }\n\n.show-case-heading {\n  font-size: 36px;\n  border-color: silver !important;\n  color: #fff !important;\n  font-weight: 600; }\n\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px; }\n\n.show-case-content {\n  background: #f5f5f5;\n  padding: 35px; }\n\n.post-resume .upload-image.left {\n  background-color: transparent;\n  float: left;\n  width: 86%;\n  border: 1px solid #e3e3e3;\n  position: relative;\n  padding: 16px 30px;\n  text-align: left; }\n\n.post-resume .upload-image {\n  float: right;\n  background-color: #f80000;\n  width: 29%;\n  text-align: center;\n  cursor: pointer;\n  display: block;\n  padding: 12px 10px 10px;\n  border-radius: 5px; }\n\n.label-title {\n  padding: 10px 0 10px 20px;\n  font-family: sans-serif;\n  font-size: 26px;\n  font-weight: 800; }\n\n.btn {\n  background: #f80000;\n  font-size: 15px;\n  font-weight: bold;\n  margin-top: -5%;\n  border: #f80000; }\n\nmat-step {\n  background-color: #ed372e !important;\n  color: rgba(255, 255, 255, 0.87); }\n\n.camera-img {\n  max-width: 100px;\n  cursor: pointer;\n  max-height: 50px; }\n\n.upload-image {\n  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 3px 15px 0 rgba(0, 0, 0, 0.19) !important;\n          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 3px 15px 0 rgba(0, 0, 0, 0.19) !important;\n  padding: 10px;\n  cursor: pointer;\n  margin-left: 1%;\n  border-radius: 5px; }\n\n.upload-image:hover {\n  background-color: #cc0000 !important;\n  -webkit-transition: 1s;\n  transition: 1s;\n  border: none !important;\n  -webkit-box-shadow: 0 3px 5px 0 #cc0000 0, 0, 0, 0.5, 0 3px 15px 0 #cc0000 0, 0, 0, 0.19 !important;\n          box-shadow: 0 3px 5px 0 #cc0000 0, 0, 0, 0.5, 0 3px 15px 0 #cc0000 0, 0, 0, 0.19 !important;\n  padding: 10px; }\n\n.next-btn {\n  font-weight: bold;\n  background: #000000;\n  color: white;\n  display: block;\n  right: 0;\n  float: right;\n  border-radius: 25px;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12); }\n\n.next-btn:hover {\n  background-color: #cc0000 !important;\n  border: none;\n  -webkit-transition: 1s;\n  transition: 1s; }\n\n.next-btn:focus {\n  outline: none !important;\n  outline-offset: none; }\n\n.back-button {\n  font-weight: bold;\n  background: #000000;\n  color: white;\n  border-radius: 25px;\n  -webkit-box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n          box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);\n  margin-bottom: 5px; }\n\n.back-button:hover {\n  background-color: #cc0000 !important;\n  color: white !important;\n  border: none;\n  -webkit-transition: 1s;\n  transition: 1s; }\n\n.back-button:focus {\n  outline: none !important;\n  outline-offset: none; }\n\n#margin {\n  margin-top: 2%; }\n\nlabel {\n  font-weight: bold;\n  font-size: 19px; }\n\n.mat-horizontal-stepper-header {\n  pointer-events: none; }\n\n.mat-select-trigger {\n  font-size: 18px !important;\n  color: #000 !important; }\n\n.stepper-heading {\n  margin: 0 auto 10px; }\n\nmat-horizontal-stepper {\n  -webkit-box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important;\n          box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.5), 0 6px 20px 0 rgba(0, 0, 0, 0.19) !important; }\n\n.mat-input-element {\n  font-weight: 600;\n  background: 0 0;\n  /* color: currentColor; */\n  color: black;\n  border: none;\n  outline: 0;\n  padding: 3px;\n  margin: 0;\n  width: 100%;\n  max-width: 100%;\n  vertical-align: bottom; }\n\n.mat-select-placeholder {\n  display: none !important; }\n"

/***/ }),

/***/ "./src/app/create-showcase/create-showcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FileValidator_directive__ = __webpack_require__("./src/app/create-showcase/FileValidator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serv_http_service__ = __webpack_require__("./src/app/serv/http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var CreateShowcaseComponent = (function () {
    function CreateShowcaseComponent(_formBuilder, http, router, loader, app_Service) {
        this._formBuilder = _formBuilder;
        this.http = http;
        this.router = router;
        this.loader = loader;
        this.app_Service = app_Service;
        this.StepNo = '1';
        this.input_images = [];
        this.base64textString = [];
        this.model = [];
        this.imgOverLay = '';
        this.isLinear = true;
        this.ImgSrc = [];
        this.options = [];
        this.description = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
        ]);
        this.fileList = [];
        this.myControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]();
        this.varImg = [];
        this.apiURL = 'https://storage.influexpai.com/Showcase/image/';
    }
    CreateShowcaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            thirdCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.thirdFromGroup = this._formBuilder.group({
            fourthCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
        this.fourthFromGroup = this._formBuilder.group({
            fifthCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
            sixthCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required],
        });
        // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        // let headers = new Headers({'Authorization': 'JWT ' + this.currentUser.token});
        // headers.append('Content-Type', 'application/json');
        this.http.get(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */].api + '/ml/categories-list/')
            .subscribe(function (res) {
            _this.options = res;
            // console.log(res.json());
        });
        this.stFpage = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormGroup"]({
            // add_images: new FormControl("", [FileValidatorDirective.validate]),
            file: new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]("", [__WEBPACK_IMPORTED_MODULE_2__FileValidator_directive__["a" /* FileValidatorDirective */].validate])
        });
    };
    CreateShowcaseComponent.prototype.FuncCheckIfImageUploaded = function () {
        if (this.fileList.length >= 1) {
            return true;
        }
        else {
            return false;
        }
    };
    CreateShowcaseComponent.prototype.filterCategory = function (val) {
        return this.options.filter(function (option) {
            return option.toLowerCase().indexOf(val.toLowerCase()) === 0;
        });
    };
    // onChange(event: EventTarget) {
    //   this.input = new FormData();
    //   const eventObj: MSInputMethodContext = <MSInputMethodContext> event;
    //   const target: HTMLInputElement = <HTMLInputElement> eventObj.target;
    //   this.input.append('fileToUpload', target.files[0]);
    //   this.input_images.push(this.input);
    //   // console.log(this.input_images, 'input images');
    //   // console.log(this.input, 'input');
    //   // this.isLinear= true;
    //   this.files = target.files;
    //   this.image = target.files;
    //
    //   if (this.fileList.indexOf(this.files[0]) === -1) {
    //     this.fileList.push(this.files[0]);
    //
    //
    //   }
    //   const reader1 = new FileReader();
    //   reader1.onload = (e: any) => {
    //     if (this.ImgSrc.indexOf(e.target.result) === -1) {
    //       this.ImgSrc.push(e.target.result);
    //       this.varImg= this.ImgSrc
    //
    //       console.log('Base64Image', this.ImgSrc);
    //       // this.stepperFirstpage.patchValue({add_images: reader1.result});
    //     }
    //   };
    //
    //   reader1.readAsDataURL(this.fileList[(this.fileList.length - 1)]);
    // }
    CreateShowcaseComponent.prototype.onChange = function (event) {
        this.image = event.target.files[0];
        this.imageName = event.target.files[0].name;
        console.log('Event is.............', event.srcElement.files[0].name);
    };
    CreateShowcaseComponent.prototype.onUpload = function () {
        var fd = new FormData();
        this.loader.post(__WEBPACK_IMPORTED_MODULE_6__config__["a" /* Config */].api + '/showcase/Upload-Image', fd).subscribe(function (res) {
            console.log('Responce is', res);
        });
    };
    CreateShowcaseComponent.prototype.removeItem = function (ind) {
        this.fileList.splice(ind, 1);
        this.ImgSrc.splice(ind, 1);
        this.imgOverLay = this.ImgSrc[ind];
        console.log('Image OverLay is............', this.imgOverLay);
        this.base64textString.splice(ind, 1);
    };
    CreateShowcaseComponent.prototype.closeNav = function (Mynav) {
        Mynav.style.height = '0%';
    };
    CreateShowcaseComponent.prototype.FuncCheckNumberOfImages = function () {
        if (this.fileList.length >= 5) {
            return false;
        }
        else {
            return true;
        }
    };
    CreateShowcaseComponent.prototype.selectCat = function (event) {
        this.catID = event;
    };
    CreateShowcaseComponent.prototype.createShowCase = function (f) {
        var _this = this;
        console.log('images is', this.imageName);
        this.imageAddress = this.apiURL + this.imageName;
        this.app_Service.uploadShowCase(this.imageAddress, this.model.catID, this.model.title, this.model.description, this.model.urls, this.model.requirement1, this.model.requirement2).subscribe(function (data) {
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('ShowCase successfully Created', '', 'success');
            _this.router.navigate(['/profile']);
        }, function (error) {
            console.log('Error isss', error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('stepper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4__angular_material__["r" /* MatStepper */])
    ], CreateShowcaseComponent.prototype, "stepper", void 0);
    CreateShowcaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-createshowcase',
            template: __webpack_require__("./src/app/create-showcase/create-showcase.component.html"),
            styles: [__webpack_require__("./src/app/create-showcase/create-showcase.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_5__serv_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* App_service */]])
    ], CreateShowcaseComponent);
    return CreateShowcaseComponent;
}());



/***/ }),

/***/ "./src/app/create-showcase/create-showcase.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShowcaseModule", function() { return CreateShowcaseModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FileValidator_directive__ = __webpack_require__("./src/app/create-showcase/FileValidator.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__create_showcase_component__ = __webpack_require__("./src/app/create-showcase/create-showcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__create_showcase_routing__ = __webpack_require__("./src/app/create-showcase/create-showcase.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__loader_loader_module__ = __webpack_require__("./src/app/loader/loader.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var CreateShowcaseModule = (function () {
    function CreateShowcaseModule() {
    }
    CreateShowcaseModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["m" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["FormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["s" /* MatStepperModule */], __WEBPACK_IMPORTED_MODULE_9__loader_loader_module__["a" /* LoaderModule */], __WEBPACK_IMPORTED_MODULE_5__angular_forms__["ReactiveFormsModule"], __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_8__create_showcase_routing__["a" /* CreateShowCaseRoutes */]), __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["c" /* NgbCarouselModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["i" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["n" /* MatRadioModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["e" /* MatDatepickerModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_3__angular_material__["l" /* MatNativeDateModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_7__create_showcase_component__["a" /* CreateShowcaseComponent */], __WEBPACK_IMPORTED_MODULE_6__FileValidator_directive__["a" /* FileValidatorDirective */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7__create_showcase_component__["a" /* CreateShowcaseComponent */]]
        })
    ], CreateShowcaseModule);
    return CreateShowcaseModule;
}());



/***/ }),

/***/ "./src/app/create-showcase/create-showcase.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateShowCaseRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_showcase_component__ = __webpack_require__("./src/app/create-showcase/create-showcase.component.ts");

var CreateShowCaseRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__create_showcase_component__["a" /* CreateShowcaseComponent */],
        data: {
            heading: 'Create ShowCase'
        }
    },
];


/***/ })

});
//# sourceMappingURL=create-showcase.module.chunk.js.map