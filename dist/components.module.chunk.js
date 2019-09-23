webpackJsonp(["components.module"],{

/***/ "./src/app/components/accordion/accordion.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ngb-accordion #acc=\"ngbAccordion\" activeIds=\"ngb-panel-0\">\r\n      <ngb-panel title=\"Simple\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel>\r\n        <ng-template ngbPanelTitle>\r\n          <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n        </ng-template>\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ngb-accordion [closeOthers]=\"true\" activeIds=\"1\">\r\n      <ngb-panel id=\"1\" title=\"Simple\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel id=\"2\">\r\n        <ng-template ngbPanelTitle>\r\n          <span>&#9733; <b>Fancy</b> title &#9733;</span>\r\n        </ng-template>\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel id=\"3\" title=\"Disabled\" [disabled]=\"true\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n  </div>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <ngb-accordion #acc=\"ngbAccordion\">\r\n      <ngb-panel id=\"1\" title=\"First panel\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel id=\"2\" title=\"Second\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel title=\"Disabled\" [disabled]=\"true\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n    <p class=\"mt-2\">\r\n      <button class=\"btn btn-secondary\" (click)=\"acc.toggle('1')\">Toggle first</button>\r\n      <button class=\"btn btn-secondary\" (click)=\"acc.toggle('2')\">Toggle second</button>\r\n    </p>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <ngb-accordion (panelChange)=\"beforeChange($event)\">\r\n      <ngb-panel id=\"1\" title=\"Simple\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel id=\"2\" title=\"I can't be toggled...\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n      <ngb-panel id=\"3\" title=\"I can be opened, but not closed...\">\r\n        <ng-template ngbPanelContent>\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia\r\n          aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,\r\n          sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica,\r\n          craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings\r\n          occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus\r\n          labore sustainable VHS.\r\n        </ng-template>\r\n      </ngb-panel>\r\n    </ngb-accordion>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/accordion/accordion.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AccordionComponent = (function () {
    function AccordionComponent() {
    }
    AccordionComponent.prototype.beforeChange = function ($event) {
        if ($event.panelId === '2') {
            $event.preventDefault();
        }
        if ($event.panelId === '3' && $event.nextState === false) {
            $event.preventDefault();
        }
    };
    ;
    AccordionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-accordion',
            template: __webpack_require__("./src/app/components/accordion/accordion.component.html"),
            styles: [__webpack_require__("./src/app/components/accordion/accordion.component.scss")]
        })
    ], AccordionComponent);
    return AccordionComponent;
}());



/***/ }),

/***/ "./src/app/components/alert/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Notification Alerts</div>\r\n  <div class=\"card-block\">\r\n    <p>Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.<p>\r\n    <ngb-alert [dismissible]=\"false\">\r\n      <strong>Warning!</strong> Better check yourself, you're not looking too good.\r\n    </ngb-alert>\r\n\r\n    <p class=\"mt-4\">Closeable Alert</p>\r\n    <div *ngFor=\"let alert of alerts\">\r\n      <ngb-alert [type]=\"alert.type\" (close)=\"closeAlert(alert)\">{{ alert.message }}</ngb-alert>\r\n    </div>\r\n    <p>\r\n      <button type=\"button\" class=\"btn btn-primary\" (click)=\"reset()\">Reset</button>\r\n    </p>\r\n\r\n    <p class=\"mt-4\">Self-Closing Alert</p>\r\n    <div>Static self-closing alert that disappears after 20 seconds (refresh the page if it has already disappeared)</div>\r\n    <ngb-alert *ngIf=\"!staticAlertClosed\" (close)=\"staticAlertClosed = true\">Check out our awesome new features!</ngb-alert>\r\n\r\n    <hr/>\r\n\r\n    <p>Show a self-closing success message that disappears after 5 seconds.</p>\r\n    <ngb-alert *ngIf=\"successMessage\" type=\"success\" (close)=\"successMessage = null\">{{ successMessage }}</ngb-alert>\r\n    <p>\r\n      <button class=\"btn btn-primary\" (click)=\"changeSuccessMessage()\">Change message</button>\r\n    </p>\r\n\r\n    <p class=\"mt-4\">Closeable Alert</p>\r\n    <ngb-alert type=\"custom\" [dismissible]=\"false\"><strong>Whoa!</strong> This is a custom alert.</ngb-alert>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.scss":
/***/ (function(module, exports) {

module.exports = ":host > > > .alert-custom {\n  color: #99004d;\n  background-color: #f169b4;\n  border-color: #800040; }\n"

/***/ }),

/***/ "./src/app/components/alert/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertComponent = (function () {
    function AlertComponent() {
        this.alerts = [];
        this._success = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.staticAlertClosed = false;
        this.alerts.push({
            id: 1,
            type: 'success',
            message: 'This is an success alert',
        }, {
            id: 2,
            type: 'info',
            message: 'This is an info alert',
        }, {
            id: 3,
            type: 'warning',
            message: 'This is a warning alert',
        }, {
            id: 4,
            type: 'danger',
            message: 'This is a danger alert',
        });
        this.backup = this.alerts.map(function (alert) { return Object.assign({}, alert); });
    }
    AlertComponent.prototype.closeAlert = function (alert) {
        var index = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    };
    AlertComponent.prototype.reset = function () {
        this.alerts = this.backup.map(function (alert) { return Object.assign({}, alert); });
    };
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () { return _this.staticAlertClosed = true; }, 20000);
        this._success.subscribe(function (message) { return _this.successMessage = message; });
        this._success.debounceTime(5000).subscribe(function () { return _this.successMessage = null; });
    };
    AlertComponent.prototype.changeSuccessMessage = function () {
        this._success.next(new Date() + " - Message successfully changed.");
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], AlertComponent.prototype, "alerts", void 0);
    AlertComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-alert',
            template: __webpack_require__("./src/app/components/alert/alert.component.html"),
            styles: [__webpack_require__("./src/app/components/alert/alert.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], AlertComponent);
    return AlertComponent;
}());



/***/ }),

/***/ "./src/app/components/button-icons/button-icons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Social buttons</div>\r\n  <div class=\"card-block\">\r\n    <div>\r\n      <button class=\"btn btn-icon btn-adn mb-1 mr-1\">\r\n        <i class=\"fa fa-adn\"></i>\r\n        App.net\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-bitbucket mb-1 mr-1\">\r\n        <i class=\"fa fa-bitbucket\"></i>\r\n        Bitbucket\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-dropbox mb-1 mr-1\">\r\n        <i class=\"fa fa-dropbox\"></i>\r\n        Dropbox\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-facebook mb-1 mr-1\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n        Facebook\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-flickr mb-1 mr-1\">\r\n        <i class=\"fa fa-flickr\"></i>\r\n        Flickr\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-foursquare mb-1 mr-1\">\r\n        <i class=\"fa fa-foursquare\"></i>\r\n        Foursquare\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-github mb-1 mr-1\">\r\n        <i class=\"fa fa-github\"></i>\r\n        GitHub\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-google mb-1 mr-1\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n        Google\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-instagram mb-1 mr-1\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n        Instagram\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-linkedin mb-1 mr-1\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n        LinkedIn\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-microsoft mb-1 mr-1\">\r\n        <i class=\"fa fa-windows\"></i>\r\n        Microsoft\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-odnoklassniki mb-1 mr-1\">\r\n        <i class=\"fa fa-odnoklassniki\"></i>\r\n        Odnoklassniki\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-openid mb-1 mr-1\">\r\n        <i class=\"fa fa-openid\"></i>\r\n        OpenID\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-pinterest mb-1 mr-1\">\r\n        <i class=\"fa fa-pinterest\"></i>\r\n        Pinterest\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-reddit mb-1 mr-1\">\r\n        <i class=\"fa fa-reddit\"></i>\r\n        Reddit\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-soundcloud mb-1 mr-1\">\r\n        <i class=\"fa fa-soundcloud\"></i>\r\n        SoundCloud\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-tumblr mb-1 mr-1\">\r\n        <i class=\"fa fa-tumblr\"></i>\r\n        Tumblr\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-twitter mb-1 mr-1\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n        Twitter\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-vimeo mb-1 mr-1\">\r\n        <i class=\"fa fa-vimeo-square\"></i>\r\n        Vimeo\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-vk mb-1 mr-1\">\r\n        <i class=\"fa fa-vk\"></i>\r\n        VK\r\n      </button>\r\n\r\n      <button class=\"btn btn-icon btn-yahoo mb-1 mr-1\">\r\n        <i class=\"fa fa-yahoo\"></i>\r\n        Yahoo!\r\n      </button>\r\n    </div>\r\n\r\n    <p class=\"pt-3\">Square</p>\r\n    <div>\r\n      <button class=\"btn btn-icon-icon btn-adn mb-1 mr-1\">\r\n        <i class=\"fa fa-adn\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-bitbucket mb-1 mr-1\">\r\n        <i class=\"fa fa-bitbucket\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-dropbox mb-1 mr-1\">\r\n        <i class=\"fa fa-dropbox\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-facebook mb-1 mr-1\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-flickr mb-1 mr-1\">\r\n        <i class=\"fa fa-flickr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-foursquare mb-1 mr-1\">\r\n        <i class=\"fa fa-foursquare\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-github mb-1 mr-1\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-google mb-1 mr-1\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-instagram mb-1 mr-1\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-linkedin mb-1 mr-1\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-microsoft mb-1 mr-1\">\r\n        <i class=\"fa fa-windows\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-odnoklassniki mb-1 mr-1\">\r\n        <i class=\"fa fa-odnoklassniki\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-openid mb-1 mr-1\">\r\n        <i class=\"fa fa-openid\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-pinterest mb-1 mr-1\">\r\n        <i class=\"fa fa-pinterest\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-reddit mb-1 mr-1\">\r\n        <i class=\"fa fa-reddit\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-soundcloud mb-1 mr-1\">\r\n        <i class=\"fa fa-soundcloud\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-tumblr mb-1 mr-1\">\r\n        <i class=\"fa fa-tumblr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-twitter mb-1 mr-1\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vimeo mb-1 mr-1\">\r\n        <i class=\"fa fa-vimeo-square\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vk mb-1 mr-1\">\r\n        <i class=\"fa fa-vk\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-yahoo mb-1 mr-1\">\r\n        <i class=\"fa fa-yahoo\"></i>\r\n      </button>\r\n    </div>\r\n    <p class=\"pt-3\">Circle</p>\r\n    <div>\r\n      <button class=\"btn btn-icon-icon btn-adn rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-adn\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-bitbucket rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-bitbucket\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-dropbox rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-dropbox\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-facebook rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-flickr rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-flickr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-foursquare rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-foursquare\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-github rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-google rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-instagram rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-linkedin rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-microsoft rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-windows\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-odnoklassniki rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-odnoklassniki\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-openid rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-openid\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-pinterest rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-pinterest\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-reddit rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-reddit\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-soundcloud rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-soundcloud\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-tumblr rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-tumblr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-twitter rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vimeo rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-vimeo-square\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vk rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-vk\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-yahoo rounded-circle mb-1 mr-1\">\r\n        <i class=\"fa fa-yahoo\"></i>\r\n      </button>\r\n    </div>\r\n    <p class=\"pt-3\">Large</p>\r\n    <div>\r\n      <button class=\"btn btn-icon-icon btn-adn btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-adn\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-bitbucket btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-bitbucket\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-dropbox btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-dropbox\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-facebook btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-flickr btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-flickr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-foursquare btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-foursquare\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-github btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-google btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-instagram btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-linkedin btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-microsoft btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-windows\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-odnoklassniki btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-odnoklassniki\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-openid btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-openid\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-pinterest btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-pinterest\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-reddit btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-reddit\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-soundcloud btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-soundcloud\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-tumblr btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-tumblr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-twitter btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vimeo btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-vimeo-square\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vk btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-vk\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-yahoo btn-lg mb-1 mr-1\">\r\n        <i class=\"fa fa-yahoo\"></i>\r\n      </button>\r\n    </div>\r\n    <p class=\"pt-3\">Small</p>\r\n    <div>\r\n      <button class=\"btn btn-icon-icon btn-adn btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-adn\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-bitbucket btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-bitbucket\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-dropbox btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-dropbox\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-facebook btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-flickr btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-flickr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-foursquare btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-foursquare\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-github btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-github\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-google btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-google-plus\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-instagram btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-linkedin btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-linkedin\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-microsoft btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-windows\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-odnoklassniki btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-odnoklassniki\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-openid btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-openid\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-pinterest btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-pinterest\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-reddit btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-reddit\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-soundcloud btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-soundcloud\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-tumblr btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-tumblr\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-twitter btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-twitter\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vimeo btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-vimeo-square\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-vk btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-vk\"></i>\r\n      </button>\r\n      <button class=\"btn btn-icon-icon btn-yahoo btn-sm mb-1 mr-1\">\r\n        <i class=\"fa fa-yahoo\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/button-icons/button-icons.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\r\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */\r\n/* FONT PATH\r\n * -------------------------- */\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  src: url('fontawesome-webfont.674f50d287a8c48dc19b.eot?v=4.7.0');\r\n  src: url('fontawesome-webfont.674f50d287a8c48dc19b.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('fontawesome-webfont.af7ae505a9eed503f8b8.woff2?v=4.7.0') format('woff2'), url('fontawesome-webfont.fee66e712a8a08eef580.woff?v=4.7.0') format('woff'), url('fontawesome-webfont.b06871f281fee6b241d6.ttf?v=4.7.0') format('truetype'), url('fontawesome-webfont.acf3dcb7ff752b5296ca.svg?v=4.7.0#fontawesomeregular') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n/* makes the font 33% larger relative to the icon container */\r\n.fa-lg {\r\n  font-size: 1.33333333em;\r\n  line-height: 0.75em;\r\n  vertical-align: -15%;\r\n}\r\n.fa-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-3x {\r\n  font-size: 3em;\r\n}\r\n.fa-4x {\r\n  font-size: 4em;\r\n}\r\n.fa-5x {\r\n  font-size: 5em;\r\n}\r\n.fa-fw {\r\n  width: 1.28571429em;\r\n  text-align: center;\r\n}\r\n.fa-ul {\r\n  padding-left: 0;\r\n  margin-left: 2.14285714em;\r\n  list-style-type: none;\r\n}\r\n.fa-ul > li {\r\n  position: relative;\r\n}\r\n.fa-li {\r\n  position: absolute;\r\n  left: -2.14285714em;\r\n  width: 2.14285714em;\r\n  top: 0.14285714em;\r\n  text-align: center;\r\n}\r\n.fa-li.fa-lg {\r\n  left: -1.85714286em;\r\n}\r\n.fa-border {\r\n  padding: .2em .25em .15em;\r\n  border: solid 0.08em #eeeeee;\r\n  border-radius: .1em;\r\n}\r\n.fa-pull-left {\r\n  float: left;\r\n}\r\n.fa-pull-right {\r\n  float: right;\r\n}\r\n.fa.fa-pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.fa-pull-right {\r\n  margin-left: .3em;\r\n}\r\n/* Deprecated as of 4.4.0 */\r\n.pull-right {\r\n  float: right;\r\n}\r\n.pull-left {\r\n  float: left;\r\n}\r\n.fa.pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.pull-right {\r\n  margin-left: .3em;\r\n}\r\n.fa-spin {\r\n  -webkit-animation: fa-spin 2s infinite linear;\r\n  animation: fa-spin 2s infinite linear;\r\n}\r\n.fa-pulse {\r\n  -webkit-animation: fa-spin 1s infinite steps(8);\r\n  animation: fa-spin 1s infinite steps(8);\r\n}\r\n@-webkit-keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n@keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.fa-rotate-90 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.fa-rotate-180 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.fa-rotate-270 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.fa-flip-horizontal {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\r\n  -webkit-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n.fa-flip-vertical {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\r\n  -webkit-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n:root .fa-rotate-90,\r\n:root .fa-rotate-180,\r\n:root .fa-rotate-270,\r\n:root .fa-flip-horizontal,\r\n:root .fa-flip-vertical {\r\n  -webkit-filter: none;\r\n          filter: none;\r\n}\r\n.fa-stack {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  vertical-align: middle;\r\n}\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.fa-stack-1x {\r\n  line-height: inherit;\r\n}\r\n.fa-stack-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-inverse {\r\n  color: #ffffff;\r\n}\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\r\n.fa-glass:before {\r\n  content: \"\\f000\";\r\n}\r\n.fa-music:before {\r\n  content: \"\\f001\";\r\n}\r\n.fa-search:before {\r\n  content: \"\\f002\";\r\n}\r\n.fa-envelope-o:before {\r\n  content: \"\\f003\";\r\n}\r\n.fa-heart:before {\r\n  content: \"\\f004\";\r\n}\r\n.fa-star:before {\r\n  content: \"\\f005\";\r\n}\r\n.fa-star-o:before {\r\n  content: \"\\f006\";\r\n}\r\n.fa-user:before {\r\n  content: \"\\f007\";\r\n}\r\n.fa-film:before {\r\n  content: \"\\f008\";\r\n}\r\n.fa-th-large:before {\r\n  content: \"\\f009\";\r\n}\r\n.fa-th:before {\r\n  content: \"\\f00a\";\r\n}\r\n.fa-th-list:before {\r\n  content: \"\\f00b\";\r\n}\r\n.fa-check:before {\r\n  content: \"\\f00c\";\r\n}\r\n.fa-remove:before,\r\n.fa-close:before,\r\n.fa-times:before {\r\n  content: \"\\f00d\";\r\n}\r\n.fa-search-plus:before {\r\n  content: \"\\f00e\";\r\n}\r\n.fa-search-minus:before {\r\n  content: \"\\f010\";\r\n}\r\n.fa-power-off:before {\r\n  content: \"\\f011\";\r\n}\r\n.fa-signal:before {\r\n  content: \"\\f012\";\r\n}\r\n.fa-gear:before,\r\n.fa-cog:before {\r\n  content: \"\\f013\";\r\n}\r\n.fa-trash-o:before {\r\n  content: \"\\f014\";\r\n}\r\n.fa-home:before {\r\n  content: \"\\f015\";\r\n}\r\n.fa-file-o:before {\r\n  content: \"\\f016\";\r\n}\r\n.fa-clock-o:before {\r\n  content: \"\\f017\";\r\n}\r\n.fa-road:before {\r\n  content: \"\\f018\";\r\n}\r\n.fa-download:before {\r\n  content: \"\\f019\";\r\n}\r\n.fa-arrow-circle-o-down:before {\r\n  content: \"\\f01a\";\r\n}\r\n.fa-arrow-circle-o-up:before {\r\n  content: \"\\f01b\";\r\n}\r\n.fa-inbox:before {\r\n  content: \"\\f01c\";\r\n}\r\n.fa-play-circle-o:before {\r\n  content: \"\\f01d\";\r\n}\r\n.fa-rotate-right:before,\r\n.fa-repeat:before {\r\n  content: \"\\f01e\";\r\n}\r\n.fa-refresh:before {\r\n  content: \"\\f021\";\r\n}\r\n.fa-list-alt:before {\r\n  content: \"\\f022\";\r\n}\r\n.fa-lock:before {\r\n  content: \"\\f023\";\r\n}\r\n.fa-flag:before {\r\n  content: \"\\f024\";\r\n}\r\n.fa-headphones:before {\r\n  content: \"\\f025\";\r\n}\r\n.fa-volume-off:before {\r\n  content: \"\\f026\";\r\n}\r\n.fa-volume-down:before {\r\n  content: \"\\f027\";\r\n}\r\n.fa-volume-up:before {\r\n  content: \"\\f028\";\r\n}\r\n.fa-qrcode:before {\r\n  content: \"\\f029\";\r\n}\r\n.fa-barcode:before {\r\n  content: \"\\f02a\";\r\n}\r\n.fa-tag:before {\r\n  content: \"\\f02b\";\r\n}\r\n.fa-tags:before {\r\n  content: \"\\f02c\";\r\n}\r\n.fa-book:before {\r\n  content: \"\\f02d\";\r\n}\r\n.fa-bookmark:before {\r\n  content: \"\\f02e\";\r\n}\r\n.fa-print:before {\r\n  content: \"\\f02f\";\r\n}\r\n.fa-camera:before {\r\n  content: \"\\f030\";\r\n}\r\n.fa-font:before {\r\n  content: \"\\f031\";\r\n}\r\n.fa-bold:before {\r\n  content: \"\\f032\";\r\n}\r\n.fa-italic:before {\r\n  content: \"\\f033\";\r\n}\r\n.fa-text-height:before {\r\n  content: \"\\f034\";\r\n}\r\n.fa-text-width:before {\r\n  content: \"\\f035\";\r\n}\r\n.fa-align-left:before {\r\n  content: \"\\f036\";\r\n}\r\n.fa-align-center:before {\r\n  content: \"\\f037\";\r\n}\r\n.fa-align-right:before {\r\n  content: \"\\f038\";\r\n}\r\n.fa-align-justify:before {\r\n  content: \"\\f039\";\r\n}\r\n.fa-list:before {\r\n  content: \"\\f03a\";\r\n}\r\n.fa-dedent:before,\r\n.fa-outdent:before {\r\n  content: \"\\f03b\";\r\n}\r\n.fa-indent:before {\r\n  content: \"\\f03c\";\r\n}\r\n.fa-video-camera:before {\r\n  content: \"\\f03d\";\r\n}\r\n.fa-photo:before,\r\n.fa-image:before,\r\n.fa-picture-o:before {\r\n  content: \"\\f03e\";\r\n}\r\n.fa-pencil:before {\r\n  content: \"\\f040\";\r\n}\r\n.fa-map-marker:before {\r\n  content: \"\\f041\";\r\n}\r\n.fa-adjust:before {\r\n  content: \"\\f042\";\r\n}\r\n.fa-tint:before {\r\n  content: \"\\f043\";\r\n}\r\n.fa-edit:before,\r\n.fa-pencil-square-o:before {\r\n  content: \"\\f044\";\r\n}\r\n.fa-share-square-o:before {\r\n  content: \"\\f045\";\r\n}\r\n.fa-check-square-o:before {\r\n  content: \"\\f046\";\r\n}\r\n.fa-arrows:before {\r\n  content: \"\\f047\";\r\n}\r\n.fa-step-backward:before {\r\n  content: \"\\f048\";\r\n}\r\n.fa-fast-backward:before {\r\n  content: \"\\f049\";\r\n}\r\n.fa-backward:before {\r\n  content: \"\\f04a\";\r\n}\r\n.fa-play:before {\r\n  content: \"\\f04b\";\r\n}\r\n.fa-pause:before {\r\n  content: \"\\f04c\";\r\n}\r\n.fa-stop:before {\r\n  content: \"\\f04d\";\r\n}\r\n.fa-forward:before {\r\n  content: \"\\f04e\";\r\n}\r\n.fa-fast-forward:before {\r\n  content: \"\\f050\";\r\n}\r\n.fa-step-forward:before {\r\n  content: \"\\f051\";\r\n}\r\n.fa-eject:before {\r\n  content: \"\\f052\";\r\n}\r\n.fa-chevron-left:before {\r\n  content: \"\\f053\";\r\n}\r\n.fa-chevron-right:before {\r\n  content: \"\\f054\";\r\n}\r\n.fa-plus-circle:before {\r\n  content: \"\\f055\";\r\n}\r\n.fa-minus-circle:before {\r\n  content: \"\\f056\";\r\n}\r\n.fa-times-circle:before {\r\n  content: \"\\f057\";\r\n}\r\n.fa-check-circle:before {\r\n  content: \"\\f058\";\r\n}\r\n.fa-question-circle:before {\r\n  content: \"\\f059\";\r\n}\r\n.fa-info-circle:before {\r\n  content: \"\\f05a\";\r\n}\r\n.fa-crosshairs:before {\r\n  content: \"\\f05b\";\r\n}\r\n.fa-times-circle-o:before {\r\n  content: \"\\f05c\";\r\n}\r\n.fa-check-circle-o:before {\r\n  content: \"\\f05d\";\r\n}\r\n.fa-ban:before {\r\n  content: \"\\f05e\";\r\n}\r\n.fa-arrow-left:before {\r\n  content: \"\\f060\";\r\n}\r\n.fa-arrow-right:before {\r\n  content: \"\\f061\";\r\n}\r\n.fa-arrow-up:before {\r\n  content: \"\\f062\";\r\n}\r\n.fa-arrow-down:before {\r\n  content: \"\\f063\";\r\n}\r\n.fa-mail-forward:before,\r\n.fa-share:before {\r\n  content: \"\\f064\";\r\n}\r\n.fa-expand:before {\r\n  content: \"\\f065\";\r\n}\r\n.fa-compress:before {\r\n  content: \"\\f066\";\r\n}\r\n.fa-plus:before {\r\n  content: \"\\f067\";\r\n}\r\n.fa-minus:before {\r\n  content: \"\\f068\";\r\n}\r\n.fa-asterisk:before {\r\n  content: \"\\f069\";\r\n}\r\n.fa-exclamation-circle:before {\r\n  content: \"\\f06a\";\r\n}\r\n.fa-gift:before {\r\n  content: \"\\f06b\";\r\n}\r\n.fa-leaf:before {\r\n  content: \"\\f06c\";\r\n}\r\n.fa-fire:before {\r\n  content: \"\\f06d\";\r\n}\r\n.fa-eye:before {\r\n  content: \"\\f06e\";\r\n}\r\n.fa-eye-slash:before {\r\n  content: \"\\f070\";\r\n}\r\n.fa-warning:before,\r\n.fa-exclamation-triangle:before {\r\n  content: \"\\f071\";\r\n}\r\n.fa-plane:before {\r\n  content: \"\\f072\";\r\n}\r\n.fa-calendar:before {\r\n  content: \"\\f073\";\r\n}\r\n.fa-random:before {\r\n  content: \"\\f074\";\r\n}\r\n.fa-comment:before {\r\n  content: \"\\f075\";\r\n}\r\n.fa-magnet:before {\r\n  content: \"\\f076\";\r\n}\r\n.fa-chevron-up:before {\r\n  content: \"\\f077\";\r\n}\r\n.fa-chevron-down:before {\r\n  content: \"\\f078\";\r\n}\r\n.fa-retweet:before {\r\n  content: \"\\f079\";\r\n}\r\n.fa-shopping-cart:before {\r\n  content: \"\\f07a\";\r\n}\r\n.fa-folder:before {\r\n  content: \"\\f07b\";\r\n}\r\n.fa-folder-open:before {\r\n  content: \"\\f07c\";\r\n}\r\n.fa-arrows-v:before {\r\n  content: \"\\f07d\";\r\n}\r\n.fa-arrows-h:before {\r\n  content: \"\\f07e\";\r\n}\r\n.fa-bar-chart-o:before,\r\n.fa-bar-chart:before {\r\n  content: \"\\f080\";\r\n}\r\n.fa-twitter-square:before {\r\n  content: \"\\f081\";\r\n}\r\n.fa-facebook-square:before {\r\n  content: \"\\f082\";\r\n}\r\n.fa-camera-retro:before {\r\n  content: \"\\f083\";\r\n}\r\n.fa-key:before {\r\n  content: \"\\f084\";\r\n}\r\n.fa-gears:before,\r\n.fa-cogs:before {\r\n  content: \"\\f085\";\r\n}\r\n.fa-comments:before {\r\n  content: \"\\f086\";\r\n}\r\n.fa-thumbs-o-up:before {\r\n  content: \"\\f087\";\r\n}\r\n.fa-thumbs-o-down:before {\r\n  content: \"\\f088\";\r\n}\r\n.fa-star-half:before {\r\n  content: \"\\f089\";\r\n}\r\n.fa-heart-o:before {\r\n  content: \"\\f08a\";\r\n}\r\n.fa-sign-out:before {\r\n  content: \"\\f08b\";\r\n}\r\n.fa-linkedin-square:before {\r\n  content: \"\\f08c\";\r\n}\r\n.fa-thumb-tack:before {\r\n  content: \"\\f08d\";\r\n}\r\n.fa-external-link:before {\r\n  content: \"\\f08e\";\r\n}\r\n.fa-sign-in:before {\r\n  content: \"\\f090\";\r\n}\r\n.fa-trophy:before {\r\n  content: \"\\f091\";\r\n}\r\n.fa-github-square:before {\r\n  content: \"\\f092\";\r\n}\r\n.fa-upload:before {\r\n  content: \"\\f093\";\r\n}\r\n.fa-lemon-o:before {\r\n  content: \"\\f094\";\r\n}\r\n.fa-phone:before {\r\n  content: \"\\f095\";\r\n}\r\n.fa-square-o:before {\r\n  content: \"\\f096\";\r\n}\r\n.fa-bookmark-o:before {\r\n  content: \"\\f097\";\r\n}\r\n.fa-phone-square:before {\r\n  content: \"\\f098\";\r\n}\r\n.fa-twitter:before {\r\n  content: \"\\f099\";\r\n}\r\n.fa-facebook-f:before,\r\n.fa-facebook:before {\r\n  content: \"\\f09a\";\r\n}\r\n.fa-github:before {\r\n  content: \"\\f09b\";\r\n}\r\n.fa-unlock:before {\r\n  content: \"\\f09c\";\r\n}\r\n.fa-credit-card:before {\r\n  content: \"\\f09d\";\r\n}\r\n.fa-feed:before,\r\n.fa-rss:before {\r\n  content: \"\\f09e\";\r\n}\r\n.fa-hdd-o:before {\r\n  content: \"\\f0a0\";\r\n}\r\n.fa-bullhorn:before {\r\n  content: \"\\f0a1\";\r\n}\r\n.fa-bell:before {\r\n  content: \"\\f0f3\";\r\n}\r\n.fa-certificate:before {\r\n  content: \"\\f0a3\";\r\n}\r\n.fa-hand-o-right:before {\r\n  content: \"\\f0a4\";\r\n}\r\n.fa-hand-o-left:before {\r\n  content: \"\\f0a5\";\r\n}\r\n.fa-hand-o-up:before {\r\n  content: \"\\f0a6\";\r\n}\r\n.fa-hand-o-down:before {\r\n  content: \"\\f0a7\";\r\n}\r\n.fa-arrow-circle-left:before {\r\n  content: \"\\f0a8\";\r\n}\r\n.fa-arrow-circle-right:before {\r\n  content: \"\\f0a9\";\r\n}\r\n.fa-arrow-circle-up:before {\r\n  content: \"\\f0aa\";\r\n}\r\n.fa-arrow-circle-down:before {\r\n  content: \"\\f0ab\";\r\n}\r\n.fa-globe:before {\r\n  content: \"\\f0ac\";\r\n}\r\n.fa-wrench:before {\r\n  content: \"\\f0ad\";\r\n}\r\n.fa-tasks:before {\r\n  content: \"\\f0ae\";\r\n}\r\n.fa-filter:before {\r\n  content: \"\\f0b0\";\r\n}\r\n.fa-briefcase:before {\r\n  content: \"\\f0b1\";\r\n}\r\n.fa-arrows-alt:before {\r\n  content: \"\\f0b2\";\r\n}\r\n.fa-group:before,\r\n.fa-users:before {\r\n  content: \"\\f0c0\";\r\n}\r\n.fa-chain:before,\r\n.fa-link:before {\r\n  content: \"\\f0c1\";\r\n}\r\n.fa-cloud:before {\r\n  content: \"\\f0c2\";\r\n}\r\n.fa-flask:before {\r\n  content: \"\\f0c3\";\r\n}\r\n.fa-cut:before,\r\n.fa-scissors:before {\r\n  content: \"\\f0c4\";\r\n}\r\n.fa-copy:before,\r\n.fa-files-o:before {\r\n  content: \"\\f0c5\";\r\n}\r\n.fa-paperclip:before {\r\n  content: \"\\f0c6\";\r\n}\r\n.fa-save:before,\r\n.fa-floppy-o:before {\r\n  content: \"\\f0c7\";\r\n}\r\n.fa-square:before {\r\n  content: \"\\f0c8\";\r\n}\r\n.fa-navicon:before,\r\n.fa-reorder:before,\r\n.fa-bars:before {\r\n  content: \"\\f0c9\";\r\n}\r\n.fa-list-ul:before {\r\n  content: \"\\f0ca\";\r\n}\r\n.fa-list-ol:before {\r\n  content: \"\\f0cb\";\r\n}\r\n.fa-strikethrough:before {\r\n  content: \"\\f0cc\";\r\n}\r\n.fa-underline:before {\r\n  content: \"\\f0cd\";\r\n}\r\n.fa-table:before {\r\n  content: \"\\f0ce\";\r\n}\r\n.fa-magic:before {\r\n  content: \"\\f0d0\";\r\n}\r\n.fa-truck:before {\r\n  content: \"\\f0d1\";\r\n}\r\n.fa-pinterest:before {\r\n  content: \"\\f0d2\";\r\n}\r\n.fa-pinterest-square:before {\r\n  content: \"\\f0d3\";\r\n}\r\n.fa-google-plus-square:before {\r\n  content: \"\\f0d4\";\r\n}\r\n.fa-google-plus:before {\r\n  content: \"\\f0d5\";\r\n}\r\n.fa-money:before {\r\n  content: \"\\f0d6\";\r\n}\r\n.fa-caret-down:before {\r\n  content: \"\\f0d7\";\r\n}\r\n.fa-caret-up:before {\r\n  content: \"\\f0d8\";\r\n}\r\n.fa-caret-left:before {\r\n  content: \"\\f0d9\";\r\n}\r\n.fa-caret-right:before {\r\n  content: \"\\f0da\";\r\n}\r\n.fa-columns:before {\r\n  content: \"\\f0db\";\r\n}\r\n.fa-unsorted:before,\r\n.fa-sort:before {\r\n  content: \"\\f0dc\";\r\n}\r\n.fa-sort-down:before,\r\n.fa-sort-desc:before {\r\n  content: \"\\f0dd\";\r\n}\r\n.fa-sort-up:before,\r\n.fa-sort-asc:before {\r\n  content: \"\\f0de\";\r\n}\r\n.fa-envelope:before {\r\n  content: \"\\f0e0\";\r\n}\r\n.fa-linkedin:before {\r\n  content: \"\\f0e1\";\r\n}\r\n.fa-rotate-left:before,\r\n.fa-undo:before {\r\n  content: \"\\f0e2\";\r\n}\r\n.fa-legal:before,\r\n.fa-gavel:before {\r\n  content: \"\\f0e3\";\r\n}\r\n.fa-dashboard:before,\r\n.fa-tachometer:before {\r\n  content: \"\\f0e4\";\r\n}\r\n.fa-comment-o:before {\r\n  content: \"\\f0e5\";\r\n}\r\n.fa-comments-o:before {\r\n  content: \"\\f0e6\";\r\n}\r\n.fa-flash:before,\r\n.fa-bolt:before {\r\n  content: \"\\f0e7\";\r\n}\r\n.fa-sitemap:before {\r\n  content: \"\\f0e8\";\r\n}\r\n.fa-umbrella:before {\r\n  content: \"\\f0e9\";\r\n}\r\n.fa-paste:before,\r\n.fa-clipboard:before {\r\n  content: \"\\f0ea\";\r\n}\r\n.fa-lightbulb-o:before {\r\n  content: \"\\f0eb\";\r\n}\r\n.fa-exchange:before {\r\n  content: \"\\f0ec\";\r\n}\r\n.fa-cloud-download:before {\r\n  content: \"\\f0ed\";\r\n}\r\n.fa-cloud-upload:before {\r\n  content: \"\\f0ee\";\r\n}\r\n.fa-user-md:before {\r\n  content: \"\\f0f0\";\r\n}\r\n.fa-stethoscope:before {\r\n  content: \"\\f0f1\";\r\n}\r\n.fa-suitcase:before {\r\n  content: \"\\f0f2\";\r\n}\r\n.fa-bell-o:before {\r\n  content: \"\\f0a2\";\r\n}\r\n.fa-coffee:before {\r\n  content: \"\\f0f4\";\r\n}\r\n.fa-cutlery:before {\r\n  content: \"\\f0f5\";\r\n}\r\n.fa-file-text-o:before {\r\n  content: \"\\f0f6\";\r\n}\r\n.fa-building-o:before {\r\n  content: \"\\f0f7\";\r\n}\r\n.fa-hospital-o:before {\r\n  content: \"\\f0f8\";\r\n}\r\n.fa-ambulance:before {\r\n  content: \"\\f0f9\";\r\n}\r\n.fa-medkit:before {\r\n  content: \"\\f0fa\";\r\n}\r\n.fa-fighter-jet:before {\r\n  content: \"\\f0fb\";\r\n}\r\n.fa-beer:before {\r\n  content: \"\\f0fc\";\r\n}\r\n.fa-h-square:before {\r\n  content: \"\\f0fd\";\r\n}\r\n.fa-plus-square:before {\r\n  content: \"\\f0fe\";\r\n}\r\n.fa-angle-double-left:before {\r\n  content: \"\\f100\";\r\n}\r\n.fa-angle-double-right:before {\r\n  content: \"\\f101\";\r\n}\r\n.fa-angle-double-up:before {\r\n  content: \"\\f102\";\r\n}\r\n.fa-angle-double-down:before {\r\n  content: \"\\f103\";\r\n}\r\n.fa-angle-left:before {\r\n  content: \"\\f104\";\r\n}\r\n.fa-angle-right:before {\r\n  content: \"\\f105\";\r\n}\r\n.fa-angle-up:before {\r\n  content: \"\\f106\";\r\n}\r\n.fa-angle-down:before {\r\n  content: \"\\f107\";\r\n}\r\n.fa-desktop:before {\r\n  content: \"\\f108\";\r\n}\r\n.fa-laptop:before {\r\n  content: \"\\f109\";\r\n}\r\n.fa-tablet:before {\r\n  content: \"\\f10a\";\r\n}\r\n.fa-mobile-phone:before,\r\n.fa-mobile:before {\r\n  content: \"\\f10b\";\r\n}\r\n.fa-circle-o:before {\r\n  content: \"\\f10c\";\r\n}\r\n.fa-quote-left:before {\r\n  content: \"\\f10d\";\r\n}\r\n.fa-quote-right:before {\r\n  content: \"\\f10e\";\r\n}\r\n.fa-spinner:before {\r\n  content: \"\\f110\";\r\n}\r\n.fa-circle:before {\r\n  content: \"\\f111\";\r\n}\r\n.fa-mail-reply:before,\r\n.fa-reply:before {\r\n  content: \"\\f112\";\r\n}\r\n.fa-github-alt:before {\r\n  content: \"\\f113\";\r\n}\r\n.fa-folder-o:before {\r\n  content: \"\\f114\";\r\n}\r\n.fa-folder-open-o:before {\r\n  content: \"\\f115\";\r\n}\r\n.fa-smile-o:before {\r\n  content: \"\\f118\";\r\n}\r\n.fa-frown-o:before {\r\n  content: \"\\f119\";\r\n}\r\n.fa-meh-o:before {\r\n  content: \"\\f11a\";\r\n}\r\n.fa-gamepad:before {\r\n  content: \"\\f11b\";\r\n}\r\n.fa-keyboard-o:before {\r\n  content: \"\\f11c\";\r\n}\r\n.fa-flag-o:before {\r\n  content: \"\\f11d\";\r\n}\r\n.fa-flag-checkered:before {\r\n  content: \"\\f11e\";\r\n}\r\n.fa-terminal:before {\r\n  content: \"\\f120\";\r\n}\r\n.fa-code:before {\r\n  content: \"\\f121\";\r\n}\r\n.fa-mail-reply-all:before,\r\n.fa-reply-all:before {\r\n  content: \"\\f122\";\r\n}\r\n.fa-star-half-empty:before,\r\n.fa-star-half-full:before,\r\n.fa-star-half-o:before {\r\n  content: \"\\f123\";\r\n}\r\n.fa-location-arrow:before {\r\n  content: \"\\f124\";\r\n}\r\n.fa-crop:before {\r\n  content: \"\\f125\";\r\n}\r\n.fa-code-fork:before {\r\n  content: \"\\f126\";\r\n}\r\n.fa-unlink:before,\r\n.fa-chain-broken:before {\r\n  content: \"\\f127\";\r\n}\r\n.fa-question:before {\r\n  content: \"\\f128\";\r\n}\r\n.fa-info:before {\r\n  content: \"\\f129\";\r\n}\r\n.fa-exclamation:before {\r\n  content: \"\\f12a\";\r\n}\r\n.fa-superscript:before {\r\n  content: \"\\f12b\";\r\n}\r\n.fa-subscript:before {\r\n  content: \"\\f12c\";\r\n}\r\n.fa-eraser:before {\r\n  content: \"\\f12d\";\r\n}\r\n.fa-puzzle-piece:before {\r\n  content: \"\\f12e\";\r\n}\r\n.fa-microphone:before {\r\n  content: \"\\f130\";\r\n}\r\n.fa-microphone-slash:before {\r\n  content: \"\\f131\";\r\n}\r\n.fa-shield:before {\r\n  content: \"\\f132\";\r\n}\r\n.fa-calendar-o:before {\r\n  content: \"\\f133\";\r\n}\r\n.fa-fire-extinguisher:before {\r\n  content: \"\\f134\";\r\n}\r\n.fa-rocket:before {\r\n  content: \"\\f135\";\r\n}\r\n.fa-maxcdn:before {\r\n  content: \"\\f136\";\r\n}\r\n.fa-chevron-circle-left:before {\r\n  content: \"\\f137\";\r\n}\r\n.fa-chevron-circle-right:before {\r\n  content: \"\\f138\";\r\n}\r\n.fa-chevron-circle-up:before {\r\n  content: \"\\f139\";\r\n}\r\n.fa-chevron-circle-down:before {\r\n  content: \"\\f13a\";\r\n}\r\n.fa-html5:before {\r\n  content: \"\\f13b\";\r\n}\r\n.fa-css3:before {\r\n  content: \"\\f13c\";\r\n}\r\n.fa-anchor:before {\r\n  content: \"\\f13d\";\r\n}\r\n.fa-unlock-alt:before {\r\n  content: \"\\f13e\";\r\n}\r\n.fa-bullseye:before {\r\n  content: \"\\f140\";\r\n}\r\n.fa-ellipsis-h:before {\r\n  content: \"\\f141\";\r\n}\r\n.fa-ellipsis-v:before {\r\n  content: \"\\f142\";\r\n}\r\n.fa-rss-square:before {\r\n  content: \"\\f143\";\r\n}\r\n.fa-play-circle:before {\r\n  content: \"\\f144\";\r\n}\r\n.fa-ticket:before {\r\n  content: \"\\f145\";\r\n}\r\n.fa-minus-square:before {\r\n  content: \"\\f146\";\r\n}\r\n.fa-minus-square-o:before {\r\n  content: \"\\f147\";\r\n}\r\n.fa-level-up:before {\r\n  content: \"\\f148\";\r\n}\r\n.fa-level-down:before {\r\n  content: \"\\f149\";\r\n}\r\n.fa-check-square:before {\r\n  content: \"\\f14a\";\r\n}\r\n.fa-pencil-square:before {\r\n  content: \"\\f14b\";\r\n}\r\n.fa-external-link-square:before {\r\n  content: \"\\f14c\";\r\n}\r\n.fa-share-square:before {\r\n  content: \"\\f14d\";\r\n}\r\n.fa-compass:before {\r\n  content: \"\\f14e\";\r\n}\r\n.fa-toggle-down:before,\r\n.fa-caret-square-o-down:before {\r\n  content: \"\\f150\";\r\n}\r\n.fa-toggle-up:before,\r\n.fa-caret-square-o-up:before {\r\n  content: \"\\f151\";\r\n}\r\n.fa-toggle-right:before,\r\n.fa-caret-square-o-right:before {\r\n  content: \"\\f152\";\r\n}\r\n.fa-euro:before,\r\n.fa-eur:before {\r\n  content: \"\\f153\";\r\n}\r\n.fa-gbp:before {\r\n  content: \"\\f154\";\r\n}\r\n.fa-dollar:before,\r\n.fa-usd:before {\r\n  content: \"\\f155\";\r\n}\r\n.fa-rupee:before,\r\n.fa-inr:before {\r\n  content: \"\\f156\";\r\n}\r\n.fa-cny:before,\r\n.fa-rmb:before,\r\n.fa-yen:before,\r\n.fa-jpy:before {\r\n  content: \"\\f157\";\r\n}\r\n.fa-ruble:before,\r\n.fa-rouble:before,\r\n.fa-rub:before {\r\n  content: \"\\f158\";\r\n}\r\n.fa-won:before,\r\n.fa-krw:before {\r\n  content: \"\\f159\";\r\n}\r\n.fa-bitcoin:before,\r\n.fa-btc:before {\r\n  content: \"\\f15a\";\r\n}\r\n.fa-file:before {\r\n  content: \"\\f15b\";\r\n}\r\n.fa-file-text:before {\r\n  content: \"\\f15c\";\r\n}\r\n.fa-sort-alpha-asc:before {\r\n  content: \"\\f15d\";\r\n}\r\n.fa-sort-alpha-desc:before {\r\n  content: \"\\f15e\";\r\n}\r\n.fa-sort-amount-asc:before {\r\n  content: \"\\f160\";\r\n}\r\n.fa-sort-amount-desc:before {\r\n  content: \"\\f161\";\r\n}\r\n.fa-sort-numeric-asc:before {\r\n  content: \"\\f162\";\r\n}\r\n.fa-sort-numeric-desc:before {\r\n  content: \"\\f163\";\r\n}\r\n.fa-thumbs-up:before {\r\n  content: \"\\f164\";\r\n}\r\n.fa-thumbs-down:before {\r\n  content: \"\\f165\";\r\n}\r\n.fa-youtube-square:before {\r\n  content: \"\\f166\";\r\n}\r\n.fa-youtube:before {\r\n  content: \"\\f167\";\r\n}\r\n.fa-xing:before {\r\n  content: \"\\f168\";\r\n}\r\n.fa-xing-square:before {\r\n  content: \"\\f169\";\r\n}\r\n.fa-youtube-play:before {\r\n  content: \"\\f16a\";\r\n}\r\n.fa-dropbox:before {\r\n  content: \"\\f16b\";\r\n}\r\n.fa-stack-overflow:before {\r\n  content: \"\\f16c\";\r\n}\r\n.fa-instagram:before {\r\n  content: \"\\f16d\";\r\n}\r\n.fa-flickr:before {\r\n  content: \"\\f16e\";\r\n}\r\n.fa-adn:before {\r\n  content: \"\\f170\";\r\n}\r\n.fa-bitbucket:before {\r\n  content: \"\\f171\";\r\n}\r\n.fa-bitbucket-square:before {\r\n  content: \"\\f172\";\r\n}\r\n.fa-tumblr:before {\r\n  content: \"\\f173\";\r\n}\r\n.fa-tumblr-square:before {\r\n  content: \"\\f174\";\r\n}\r\n.fa-long-arrow-down:before {\r\n  content: \"\\f175\";\r\n}\r\n.fa-long-arrow-up:before {\r\n  content: \"\\f176\";\r\n}\r\n.fa-long-arrow-left:before {\r\n  content: \"\\f177\";\r\n}\r\n.fa-long-arrow-right:before {\r\n  content: \"\\f178\";\r\n}\r\n.fa-apple:before {\r\n  content: \"\\f179\";\r\n}\r\n.fa-windows:before {\r\n  content: \"\\f17a\";\r\n}\r\n.fa-android:before {\r\n  content: \"\\f17b\";\r\n}\r\n.fa-linux:before {\r\n  content: \"\\f17c\";\r\n}\r\n.fa-dribbble:before {\r\n  content: \"\\f17d\";\r\n}\r\n.fa-skype:before {\r\n  content: \"\\f17e\";\r\n}\r\n.fa-foursquare:before {\r\n  content: \"\\f180\";\r\n}\r\n.fa-trello:before {\r\n  content: \"\\f181\";\r\n}\r\n.fa-female:before {\r\n  content: \"\\f182\";\r\n}\r\n.fa-male:before {\r\n  content: \"\\f183\";\r\n}\r\n.fa-gittip:before,\r\n.fa-gratipay:before {\r\n  content: \"\\f184\";\r\n}\r\n.fa-sun-o:before {\r\n  content: \"\\f185\";\r\n}\r\n.fa-moon-o:before {\r\n  content: \"\\f186\";\r\n}\r\n.fa-archive:before {\r\n  content: \"\\f187\";\r\n}\r\n.fa-bug:before {\r\n  content: \"\\f188\";\r\n}\r\n.fa-vk:before {\r\n  content: \"\\f189\";\r\n}\r\n.fa-weibo:before {\r\n  content: \"\\f18a\";\r\n}\r\n.fa-renren:before {\r\n  content: \"\\f18b\";\r\n}\r\n.fa-pagelines:before {\r\n  content: \"\\f18c\";\r\n}\r\n.fa-stack-exchange:before {\r\n  content: \"\\f18d\";\r\n}\r\n.fa-arrow-circle-o-right:before {\r\n  content: \"\\f18e\";\r\n}\r\n.fa-arrow-circle-o-left:before {\r\n  content: \"\\f190\";\r\n}\r\n.fa-toggle-left:before,\r\n.fa-caret-square-o-left:before {\r\n  content: \"\\f191\";\r\n}\r\n.fa-dot-circle-o:before {\r\n  content: \"\\f192\";\r\n}\r\n.fa-wheelchair:before {\r\n  content: \"\\f193\";\r\n}\r\n.fa-vimeo-square:before {\r\n  content: \"\\f194\";\r\n}\r\n.fa-turkish-lira:before,\r\n.fa-try:before {\r\n  content: \"\\f195\";\r\n}\r\n.fa-plus-square-o:before {\r\n  content: \"\\f196\";\r\n}\r\n.fa-space-shuttle:before {\r\n  content: \"\\f197\";\r\n}\r\n.fa-slack:before {\r\n  content: \"\\f198\";\r\n}\r\n.fa-envelope-square:before {\r\n  content: \"\\f199\";\r\n}\r\n.fa-wordpress:before {\r\n  content: \"\\f19a\";\r\n}\r\n.fa-openid:before {\r\n  content: \"\\f19b\";\r\n}\r\n.fa-institution:before,\r\n.fa-bank:before,\r\n.fa-university:before {\r\n  content: \"\\f19c\";\r\n}\r\n.fa-mortar-board:before,\r\n.fa-graduation-cap:before {\r\n  content: \"\\f19d\";\r\n}\r\n.fa-yahoo:before {\r\n  content: \"\\f19e\";\r\n}\r\n.fa-google:before {\r\n  content: \"\\f1a0\";\r\n}\r\n.fa-reddit:before {\r\n  content: \"\\f1a1\";\r\n}\r\n.fa-reddit-square:before {\r\n  content: \"\\f1a2\";\r\n}\r\n.fa-stumbleupon-circle:before {\r\n  content: \"\\f1a3\";\r\n}\r\n.fa-stumbleupon:before {\r\n  content: \"\\f1a4\";\r\n}\r\n.fa-delicious:before {\r\n  content: \"\\f1a5\";\r\n}\r\n.fa-digg:before {\r\n  content: \"\\f1a6\";\r\n}\r\n.fa-pied-piper-pp:before {\r\n  content: \"\\f1a7\";\r\n}\r\n.fa-pied-piper-alt:before {\r\n  content: \"\\f1a8\";\r\n}\r\n.fa-drupal:before {\r\n  content: \"\\f1a9\";\r\n}\r\n.fa-joomla:before {\r\n  content: \"\\f1aa\";\r\n}\r\n.fa-language:before {\r\n  content: \"\\f1ab\";\r\n}\r\n.fa-fax:before {\r\n  content: \"\\f1ac\";\r\n}\r\n.fa-building:before {\r\n  content: \"\\f1ad\";\r\n}\r\n.fa-child:before {\r\n  content: \"\\f1ae\";\r\n}\r\n.fa-paw:before {\r\n  content: \"\\f1b0\";\r\n}\r\n.fa-spoon:before {\r\n  content: \"\\f1b1\";\r\n}\r\n.fa-cube:before {\r\n  content: \"\\f1b2\";\r\n}\r\n.fa-cubes:before {\r\n  content: \"\\f1b3\";\r\n}\r\n.fa-behance:before {\r\n  content: \"\\f1b4\";\r\n}\r\n.fa-behance-square:before {\r\n  content: \"\\f1b5\";\r\n}\r\n.fa-steam:before {\r\n  content: \"\\f1b6\";\r\n}\r\n.fa-steam-square:before {\r\n  content: \"\\f1b7\";\r\n}\r\n.fa-recycle:before {\r\n  content: \"\\f1b8\";\r\n}\r\n.fa-automobile:before,\r\n.fa-car:before {\r\n  content: \"\\f1b9\";\r\n}\r\n.fa-cab:before,\r\n.fa-taxi:before {\r\n  content: \"\\f1ba\";\r\n}\r\n.fa-tree:before {\r\n  content: \"\\f1bb\";\r\n}\r\n.fa-spotify:before {\r\n  content: \"\\f1bc\";\r\n}\r\n.fa-deviantart:before {\r\n  content: \"\\f1bd\";\r\n}\r\n.fa-soundcloud:before {\r\n  content: \"\\f1be\";\r\n}\r\n.fa-database:before {\r\n  content: \"\\f1c0\";\r\n}\r\n.fa-file-pdf-o:before {\r\n  content: \"\\f1c1\";\r\n}\r\n.fa-file-word-o:before {\r\n  content: \"\\f1c2\";\r\n}\r\n.fa-file-excel-o:before {\r\n  content: \"\\f1c3\";\r\n}\r\n.fa-file-powerpoint-o:before {\r\n  content: \"\\f1c4\";\r\n}\r\n.fa-file-photo-o:before,\r\n.fa-file-picture-o:before,\r\n.fa-file-image-o:before {\r\n  content: \"\\f1c5\";\r\n}\r\n.fa-file-zip-o:before,\r\n.fa-file-archive-o:before {\r\n  content: \"\\f1c6\";\r\n}\r\n.fa-file-sound-o:before,\r\n.fa-file-audio-o:before {\r\n  content: \"\\f1c7\";\r\n}\r\n.fa-file-movie-o:before,\r\n.fa-file-video-o:before {\r\n  content: \"\\f1c8\";\r\n}\r\n.fa-file-code-o:before {\r\n  content: \"\\f1c9\";\r\n}\r\n.fa-vine:before {\r\n  content: \"\\f1ca\";\r\n}\r\n.fa-codepen:before {\r\n  content: \"\\f1cb\";\r\n}\r\n.fa-jsfiddle:before {\r\n  content: \"\\f1cc\";\r\n}\r\n.fa-life-bouy:before,\r\n.fa-life-buoy:before,\r\n.fa-life-saver:before,\r\n.fa-support:before,\r\n.fa-life-ring:before {\r\n  content: \"\\f1cd\";\r\n}\r\n.fa-circle-o-notch:before {\r\n  content: \"\\f1ce\";\r\n}\r\n.fa-ra:before,\r\n.fa-resistance:before,\r\n.fa-rebel:before {\r\n  content: \"\\f1d0\";\r\n}\r\n.fa-ge:before,\r\n.fa-empire:before {\r\n  content: \"\\f1d1\";\r\n}\r\n.fa-git-square:before {\r\n  content: \"\\f1d2\";\r\n}\r\n.fa-git:before {\r\n  content: \"\\f1d3\";\r\n}\r\n.fa-y-combinator-square:before,\r\n.fa-yc-square:before,\r\n.fa-hacker-news:before {\r\n  content: \"\\f1d4\";\r\n}\r\n.fa-tencent-weibo:before {\r\n  content: \"\\f1d5\";\r\n}\r\n.fa-qq:before {\r\n  content: \"\\f1d6\";\r\n}\r\n.fa-wechat:before,\r\n.fa-weixin:before {\r\n  content: \"\\f1d7\";\r\n}\r\n.fa-send:before,\r\n.fa-paper-plane:before {\r\n  content: \"\\f1d8\";\r\n}\r\n.fa-send-o:before,\r\n.fa-paper-plane-o:before {\r\n  content: \"\\f1d9\";\r\n}\r\n.fa-history:before {\r\n  content: \"\\f1da\";\r\n}\r\n.fa-circle-thin:before {\r\n  content: \"\\f1db\";\r\n}\r\n.fa-header:before {\r\n  content: \"\\f1dc\";\r\n}\r\n.fa-paragraph:before {\r\n  content: \"\\f1dd\";\r\n}\r\n.fa-sliders:before {\r\n  content: \"\\f1de\";\r\n}\r\n.fa-share-alt:before {\r\n  content: \"\\f1e0\";\r\n}\r\n.fa-share-alt-square:before {\r\n  content: \"\\f1e1\";\r\n}\r\n.fa-bomb:before {\r\n  content: \"\\f1e2\";\r\n}\r\n.fa-soccer-ball-o:before,\r\n.fa-futbol-o:before {\r\n  content: \"\\f1e3\";\r\n}\r\n.fa-tty:before {\r\n  content: \"\\f1e4\";\r\n}\r\n.fa-binoculars:before {\r\n  content: \"\\f1e5\";\r\n}\r\n.fa-plug:before {\r\n  content: \"\\f1e6\";\r\n}\r\n.fa-slideshare:before {\r\n  content: \"\\f1e7\";\r\n}\r\n.fa-twitch:before {\r\n  content: \"\\f1e8\";\r\n}\r\n.fa-yelp:before {\r\n  content: \"\\f1e9\";\r\n}\r\n.fa-newspaper-o:before {\r\n  content: \"\\f1ea\";\r\n}\r\n.fa-wifi:before {\r\n  content: \"\\f1eb\";\r\n}\r\n.fa-calculator:before {\r\n  content: \"\\f1ec\";\r\n}\r\n.fa-paypal:before {\r\n  content: \"\\f1ed\";\r\n}\r\n.fa-google-wallet:before {\r\n  content: \"\\f1ee\";\r\n}\r\n.fa-cc-visa:before {\r\n  content: \"\\f1f0\";\r\n}\r\n.fa-cc-mastercard:before {\r\n  content: \"\\f1f1\";\r\n}\r\n.fa-cc-discover:before {\r\n  content: \"\\f1f2\";\r\n}\r\n.fa-cc-amex:before {\r\n  content: \"\\f1f3\";\r\n}\r\n.fa-cc-paypal:before {\r\n  content: \"\\f1f4\";\r\n}\r\n.fa-cc-stripe:before {\r\n  content: \"\\f1f5\";\r\n}\r\n.fa-bell-slash:before {\r\n  content: \"\\f1f6\";\r\n}\r\n.fa-bell-slash-o:before {\r\n  content: \"\\f1f7\";\r\n}\r\n.fa-trash:before {\r\n  content: \"\\f1f8\";\r\n}\r\n.fa-copyright:before {\r\n  content: \"\\f1f9\";\r\n}\r\n.fa-at:before {\r\n  content: \"\\f1fa\";\r\n}\r\n.fa-eyedropper:before {\r\n  content: \"\\f1fb\";\r\n}\r\n.fa-paint-brush:before {\r\n  content: \"\\f1fc\";\r\n}\r\n.fa-birthday-cake:before {\r\n  content: \"\\f1fd\";\r\n}\r\n.fa-area-chart:before {\r\n  content: \"\\f1fe\";\r\n}\r\n.fa-pie-chart:before {\r\n  content: \"\\f200\";\r\n}\r\n.fa-line-chart:before {\r\n  content: \"\\f201\";\r\n}\r\n.fa-lastfm:before {\r\n  content: \"\\f202\";\r\n}\r\n.fa-lastfm-square:before {\r\n  content: \"\\f203\";\r\n}\r\n.fa-toggle-off:before {\r\n  content: \"\\f204\";\r\n}\r\n.fa-toggle-on:before {\r\n  content: \"\\f205\";\r\n}\r\n.fa-bicycle:before {\r\n  content: \"\\f206\";\r\n}\r\n.fa-bus:before {\r\n  content: \"\\f207\";\r\n}\r\n.fa-ioxhost:before {\r\n  content: \"\\f208\";\r\n}\r\n.fa-angellist:before {\r\n  content: \"\\f209\";\r\n}\r\n.fa-cc:before {\r\n  content: \"\\f20a\";\r\n}\r\n.fa-shekel:before,\r\n.fa-sheqel:before,\r\n.fa-ils:before {\r\n  content: \"\\f20b\";\r\n}\r\n.fa-meanpath:before {\r\n  content: \"\\f20c\";\r\n}\r\n.fa-buysellads:before {\r\n  content: \"\\f20d\";\r\n}\r\n.fa-connectdevelop:before {\r\n  content: \"\\f20e\";\r\n}\r\n.fa-dashcube:before {\r\n  content: \"\\f210\";\r\n}\r\n.fa-forumbee:before {\r\n  content: \"\\f211\";\r\n}\r\n.fa-leanpub:before {\r\n  content: \"\\f212\";\r\n}\r\n.fa-sellsy:before {\r\n  content: \"\\f213\";\r\n}\r\n.fa-shirtsinbulk:before {\r\n  content: \"\\f214\";\r\n}\r\n.fa-simplybuilt:before {\r\n  content: \"\\f215\";\r\n}\r\n.fa-skyatlas:before {\r\n  content: \"\\f216\";\r\n}\r\n.fa-cart-plus:before {\r\n  content: \"\\f217\";\r\n}\r\n.fa-cart-arrow-down:before {\r\n  content: \"\\f218\";\r\n}\r\n.fa-diamond:before {\r\n  content: \"\\f219\";\r\n}\r\n.fa-ship:before {\r\n  content: \"\\f21a\";\r\n}\r\n.fa-user-secret:before {\r\n  content: \"\\f21b\";\r\n}\r\n.fa-motorcycle:before {\r\n  content: \"\\f21c\";\r\n}\r\n.fa-street-view:before {\r\n  content: \"\\f21d\";\r\n}\r\n.fa-heartbeat:before {\r\n  content: \"\\f21e\";\r\n}\r\n.fa-venus:before {\r\n  content: \"\\f221\";\r\n}\r\n.fa-mars:before {\r\n  content: \"\\f222\";\r\n}\r\n.fa-mercury:before {\r\n  content: \"\\f223\";\r\n}\r\n.fa-intersex:before,\r\n.fa-transgender:before {\r\n  content: \"\\f224\";\r\n}\r\n.fa-transgender-alt:before {\r\n  content: \"\\f225\";\r\n}\r\n.fa-venus-double:before {\r\n  content: \"\\f226\";\r\n}\r\n.fa-mars-double:before {\r\n  content: \"\\f227\";\r\n}\r\n.fa-venus-mars:before {\r\n  content: \"\\f228\";\r\n}\r\n.fa-mars-stroke:before {\r\n  content: \"\\f229\";\r\n}\r\n.fa-mars-stroke-v:before {\r\n  content: \"\\f22a\";\r\n}\r\n.fa-mars-stroke-h:before {\r\n  content: \"\\f22b\";\r\n}\r\n.fa-neuter:before {\r\n  content: \"\\f22c\";\r\n}\r\n.fa-genderless:before {\r\n  content: \"\\f22d\";\r\n}\r\n.fa-facebook-official:before {\r\n  content: \"\\f230\";\r\n}\r\n.fa-pinterest-p:before {\r\n  content: \"\\f231\";\r\n}\r\n.fa-whatsapp:before {\r\n  content: \"\\f232\";\r\n}\r\n.fa-server:before {\r\n  content: \"\\f233\";\r\n}\r\n.fa-user-plus:before {\r\n  content: \"\\f234\";\r\n}\r\n.fa-user-times:before {\r\n  content: \"\\f235\";\r\n}\r\n.fa-hotel:before,\r\n.fa-bed:before {\r\n  content: \"\\f236\";\r\n}\r\n.fa-viacoin:before {\r\n  content: \"\\f237\";\r\n}\r\n.fa-train:before {\r\n  content: \"\\f238\";\r\n}\r\n.fa-subway:before {\r\n  content: \"\\f239\";\r\n}\r\n.fa-medium:before {\r\n  content: \"\\f23a\";\r\n}\r\n.fa-yc:before,\r\n.fa-y-combinator:before {\r\n  content: \"\\f23b\";\r\n}\r\n.fa-optin-monster:before {\r\n  content: \"\\f23c\";\r\n}\r\n.fa-opencart:before {\r\n  content: \"\\f23d\";\r\n}\r\n.fa-expeditedssl:before {\r\n  content: \"\\f23e\";\r\n}\r\n.fa-battery-4:before,\r\n.fa-battery:before,\r\n.fa-battery-full:before {\r\n  content: \"\\f240\";\r\n}\r\n.fa-battery-3:before,\r\n.fa-battery-three-quarters:before {\r\n  content: \"\\f241\";\r\n}\r\n.fa-battery-2:before,\r\n.fa-battery-half:before {\r\n  content: \"\\f242\";\r\n}\r\n.fa-battery-1:before,\r\n.fa-battery-quarter:before {\r\n  content: \"\\f243\";\r\n}\r\n.fa-battery-0:before,\r\n.fa-battery-empty:before {\r\n  content: \"\\f244\";\r\n}\r\n.fa-mouse-pointer:before {\r\n  content: \"\\f245\";\r\n}\r\n.fa-i-cursor:before {\r\n  content: \"\\f246\";\r\n}\r\n.fa-object-group:before {\r\n  content: \"\\f247\";\r\n}\r\n.fa-object-ungroup:before {\r\n  content: \"\\f248\";\r\n}\r\n.fa-sticky-note:before {\r\n  content: \"\\f249\";\r\n}\r\n.fa-sticky-note-o:before {\r\n  content: \"\\f24a\";\r\n}\r\n.fa-cc-jcb:before {\r\n  content: \"\\f24b\";\r\n}\r\n.fa-cc-diners-club:before {\r\n  content: \"\\f24c\";\r\n}\r\n.fa-clone:before {\r\n  content: \"\\f24d\";\r\n}\r\n.fa-balance-scale:before {\r\n  content: \"\\f24e\";\r\n}\r\n.fa-hourglass-o:before {\r\n  content: \"\\f250\";\r\n}\r\n.fa-hourglass-1:before,\r\n.fa-hourglass-start:before {\r\n  content: \"\\f251\";\r\n}\r\n.fa-hourglass-2:before,\r\n.fa-hourglass-half:before {\r\n  content: \"\\f252\";\r\n}\r\n.fa-hourglass-3:before,\r\n.fa-hourglass-end:before {\r\n  content: \"\\f253\";\r\n}\r\n.fa-hourglass:before {\r\n  content: \"\\f254\";\r\n}\r\n.fa-hand-grab-o:before,\r\n.fa-hand-rock-o:before {\r\n  content: \"\\f255\";\r\n}\r\n.fa-hand-stop-o:before,\r\n.fa-hand-paper-o:before {\r\n  content: \"\\f256\";\r\n}\r\n.fa-hand-scissors-o:before {\r\n  content: \"\\f257\";\r\n}\r\n.fa-hand-lizard-o:before {\r\n  content: \"\\f258\";\r\n}\r\n.fa-hand-spock-o:before {\r\n  content: \"\\f259\";\r\n}\r\n.fa-hand-pointer-o:before {\r\n  content: \"\\f25a\";\r\n}\r\n.fa-hand-peace-o:before {\r\n  content: \"\\f25b\";\r\n}\r\n.fa-trademark:before {\r\n  content: \"\\f25c\";\r\n}\r\n.fa-registered:before {\r\n  content: \"\\f25d\";\r\n}\r\n.fa-creative-commons:before {\r\n  content: \"\\f25e\";\r\n}\r\n.fa-gg:before {\r\n  content: \"\\f260\";\r\n}\r\n.fa-gg-circle:before {\r\n  content: \"\\f261\";\r\n}\r\n.fa-tripadvisor:before {\r\n  content: \"\\f262\";\r\n}\r\n.fa-odnoklassniki:before {\r\n  content: \"\\f263\";\r\n}\r\n.fa-odnoklassniki-square:before {\r\n  content: \"\\f264\";\r\n}\r\n.fa-get-pocket:before {\r\n  content: \"\\f265\";\r\n}\r\n.fa-wikipedia-w:before {\r\n  content: \"\\f266\";\r\n}\r\n.fa-safari:before {\r\n  content: \"\\f267\";\r\n}\r\n.fa-chrome:before {\r\n  content: \"\\f268\";\r\n}\r\n.fa-firefox:before {\r\n  content: \"\\f269\";\r\n}\r\n.fa-opera:before {\r\n  content: \"\\f26a\";\r\n}\r\n.fa-internet-explorer:before {\r\n  content: \"\\f26b\";\r\n}\r\n.fa-tv:before,\r\n.fa-television:before {\r\n  content: \"\\f26c\";\r\n}\r\n.fa-contao:before {\r\n  content: \"\\f26d\";\r\n}\r\n.fa-500px:before {\r\n  content: \"\\f26e\";\r\n}\r\n.fa-amazon:before {\r\n  content: \"\\f270\";\r\n}\r\n.fa-calendar-plus-o:before {\r\n  content: \"\\f271\";\r\n}\r\n.fa-calendar-minus-o:before {\r\n  content: \"\\f272\";\r\n}\r\n.fa-calendar-times-o:before {\r\n  content: \"\\f273\";\r\n}\r\n.fa-calendar-check-o:before {\r\n  content: \"\\f274\";\r\n}\r\n.fa-industry:before {\r\n  content: \"\\f275\";\r\n}\r\n.fa-map-pin:before {\r\n  content: \"\\f276\";\r\n}\r\n.fa-map-signs:before {\r\n  content: \"\\f277\";\r\n}\r\n.fa-map-o:before {\r\n  content: \"\\f278\";\r\n}\r\n.fa-map:before {\r\n  content: \"\\f279\";\r\n}\r\n.fa-commenting:before {\r\n  content: \"\\f27a\";\r\n}\r\n.fa-commenting-o:before {\r\n  content: \"\\f27b\";\r\n}\r\n.fa-houzz:before {\r\n  content: \"\\f27c\";\r\n}\r\n.fa-vimeo:before {\r\n  content: \"\\f27d\";\r\n}\r\n.fa-black-tie:before {\r\n  content: \"\\f27e\";\r\n}\r\n.fa-fonticons:before {\r\n  content: \"\\f280\";\r\n}\r\n.fa-reddit-alien:before {\r\n  content: \"\\f281\";\r\n}\r\n.fa-edge:before {\r\n  content: \"\\f282\";\r\n}\r\n.fa-credit-card-alt:before {\r\n  content: \"\\f283\";\r\n}\r\n.fa-codiepie:before {\r\n  content: \"\\f284\";\r\n}\r\n.fa-modx:before {\r\n  content: \"\\f285\";\r\n}\r\n.fa-fort-awesome:before {\r\n  content: \"\\f286\";\r\n}\r\n.fa-usb:before {\r\n  content: \"\\f287\";\r\n}\r\n.fa-product-hunt:before {\r\n  content: \"\\f288\";\r\n}\r\n.fa-mixcloud:before {\r\n  content: \"\\f289\";\r\n}\r\n.fa-scribd:before {\r\n  content: \"\\f28a\";\r\n}\r\n.fa-pause-circle:before {\r\n  content: \"\\f28b\";\r\n}\r\n.fa-pause-circle-o:before {\r\n  content: \"\\f28c\";\r\n}\r\n.fa-stop-circle:before {\r\n  content: \"\\f28d\";\r\n}\r\n.fa-stop-circle-o:before {\r\n  content: \"\\f28e\";\r\n}\r\n.fa-shopping-bag:before {\r\n  content: \"\\f290\";\r\n}\r\n.fa-shopping-basket:before {\r\n  content: \"\\f291\";\r\n}\r\n.fa-hashtag:before {\r\n  content: \"\\f292\";\r\n}\r\n.fa-bluetooth:before {\r\n  content: \"\\f293\";\r\n}\r\n.fa-bluetooth-b:before {\r\n  content: \"\\f294\";\r\n}\r\n.fa-percent:before {\r\n  content: \"\\f295\";\r\n}\r\n.fa-gitlab:before {\r\n  content: \"\\f296\";\r\n}\r\n.fa-wpbeginner:before {\r\n  content: \"\\f297\";\r\n}\r\n.fa-wpforms:before {\r\n  content: \"\\f298\";\r\n}\r\n.fa-envira:before {\r\n  content: \"\\f299\";\r\n}\r\n.fa-universal-access:before {\r\n  content: \"\\f29a\";\r\n}\r\n.fa-wheelchair-alt:before {\r\n  content: \"\\f29b\";\r\n}\r\n.fa-question-circle-o:before {\r\n  content: \"\\f29c\";\r\n}\r\n.fa-blind:before {\r\n  content: \"\\f29d\";\r\n}\r\n.fa-audio-description:before {\r\n  content: \"\\f29e\";\r\n}\r\n.fa-volume-control-phone:before {\r\n  content: \"\\f2a0\";\r\n}\r\n.fa-braille:before {\r\n  content: \"\\f2a1\";\r\n}\r\n.fa-assistive-listening-systems:before {\r\n  content: \"\\f2a2\";\r\n}\r\n.fa-asl-interpreting:before,\r\n.fa-american-sign-language-interpreting:before {\r\n  content: \"\\f2a3\";\r\n}\r\n.fa-deafness:before,\r\n.fa-hard-of-hearing:before,\r\n.fa-deaf:before {\r\n  content: \"\\f2a4\";\r\n}\r\n.fa-glide:before {\r\n  content: \"\\f2a5\";\r\n}\r\n.fa-glide-g:before {\r\n  content: \"\\f2a6\";\r\n}\r\n.fa-signing:before,\r\n.fa-sign-language:before {\r\n  content: \"\\f2a7\";\r\n}\r\n.fa-low-vision:before {\r\n  content: \"\\f2a8\";\r\n}\r\n.fa-viadeo:before {\r\n  content: \"\\f2a9\";\r\n}\r\n.fa-viadeo-square:before {\r\n  content: \"\\f2aa\";\r\n}\r\n.fa-snapchat:before {\r\n  content: \"\\f2ab\";\r\n}\r\n.fa-snapchat-ghost:before {\r\n  content: \"\\f2ac\";\r\n}\r\n.fa-snapchat-square:before {\r\n  content: \"\\f2ad\";\r\n}\r\n.fa-pied-piper:before {\r\n  content: \"\\f2ae\";\r\n}\r\n.fa-first-order:before {\r\n  content: \"\\f2b0\";\r\n}\r\n.fa-yoast:before {\r\n  content: \"\\f2b1\";\r\n}\r\n.fa-themeisle:before {\r\n  content: \"\\f2b2\";\r\n}\r\n.fa-google-plus-circle:before,\r\n.fa-google-plus-official:before {\r\n  content: \"\\f2b3\";\r\n}\r\n.fa-fa:before,\r\n.fa-font-awesome:before {\r\n  content: \"\\f2b4\";\r\n}\r\n.fa-handshake-o:before {\r\n  content: \"\\f2b5\";\r\n}\r\n.fa-envelope-open:before {\r\n  content: \"\\f2b6\";\r\n}\r\n.fa-envelope-open-o:before {\r\n  content: \"\\f2b7\";\r\n}\r\n.fa-linode:before {\r\n  content: \"\\f2b8\";\r\n}\r\n.fa-address-book:before {\r\n  content: \"\\f2b9\";\r\n}\r\n.fa-address-book-o:before {\r\n  content: \"\\f2ba\";\r\n}\r\n.fa-vcard:before,\r\n.fa-address-card:before {\r\n  content: \"\\f2bb\";\r\n}\r\n.fa-vcard-o:before,\r\n.fa-address-card-o:before {\r\n  content: \"\\f2bc\";\r\n}\r\n.fa-user-circle:before {\r\n  content: \"\\f2bd\";\r\n}\r\n.fa-user-circle-o:before {\r\n  content: \"\\f2be\";\r\n}\r\n.fa-user-o:before {\r\n  content: \"\\f2c0\";\r\n}\r\n.fa-id-badge:before {\r\n  content: \"\\f2c1\";\r\n}\r\n.fa-drivers-license:before,\r\n.fa-id-card:before {\r\n  content: \"\\f2c2\";\r\n}\r\n.fa-drivers-license-o:before,\r\n.fa-id-card-o:before {\r\n  content: \"\\f2c3\";\r\n}\r\n.fa-quora:before {\r\n  content: \"\\f2c4\";\r\n}\r\n.fa-free-code-camp:before {\r\n  content: \"\\f2c5\";\r\n}\r\n.fa-telegram:before {\r\n  content: \"\\f2c6\";\r\n}\r\n.fa-thermometer-4:before,\r\n.fa-thermometer:before,\r\n.fa-thermometer-full:before {\r\n  content: \"\\f2c7\";\r\n}\r\n.fa-thermometer-3:before,\r\n.fa-thermometer-three-quarters:before {\r\n  content: \"\\f2c8\";\r\n}\r\n.fa-thermometer-2:before,\r\n.fa-thermometer-half:before {\r\n  content: \"\\f2c9\";\r\n}\r\n.fa-thermometer-1:before,\r\n.fa-thermometer-quarter:before {\r\n  content: \"\\f2ca\";\r\n}\r\n.fa-thermometer-0:before,\r\n.fa-thermometer-empty:before {\r\n  content: \"\\f2cb\";\r\n}\r\n.fa-shower:before {\r\n  content: \"\\f2cc\";\r\n}\r\n.fa-bathtub:before,\r\n.fa-s15:before,\r\n.fa-bath:before {\r\n  content: \"\\f2cd\";\r\n}\r\n.fa-podcast:before {\r\n  content: \"\\f2ce\";\r\n}\r\n.fa-window-maximize:before {\r\n  content: \"\\f2d0\";\r\n}\r\n.fa-window-minimize:before {\r\n  content: \"\\f2d1\";\r\n}\r\n.fa-window-restore:before {\r\n  content: \"\\f2d2\";\r\n}\r\n.fa-times-rectangle:before,\r\n.fa-window-close:before {\r\n  content: \"\\f2d3\";\r\n}\r\n.fa-times-rectangle-o:before,\r\n.fa-window-close-o:before {\r\n  content: \"\\f2d4\";\r\n}\r\n.fa-bandcamp:before {\r\n  content: \"\\f2d5\";\r\n}\r\n.fa-grav:before {\r\n  content: \"\\f2d6\";\r\n}\r\n.fa-etsy:before {\r\n  content: \"\\f2d7\";\r\n}\r\n.fa-imdb:before {\r\n  content: \"\\f2d8\";\r\n}\r\n.fa-ravelry:before {\r\n  content: \"\\f2d9\";\r\n}\r\n.fa-eercast:before {\r\n  content: \"\\f2da\";\r\n}\r\n.fa-microchip:before {\r\n  content: \"\\f2db\";\r\n}\r\n.fa-snowflake-o:before {\r\n  content: \"\\f2dc\";\r\n}\r\n.fa-superpowers:before {\r\n  content: \"\\f2dd\";\r\n}\r\n.fa-wpexplorer:before {\r\n  content: \"\\f2de\";\r\n}\r\n.fa-meetup:before {\r\n  content: \"\\f2e0\";\r\n}\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n/* $colors\r\n ------------------------------------------*/\r\n.btn-adn {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #d87a68;\n  border-color: #d87a68; }\r\n.btn-adn:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #ce563f;\n    border-color: #cb4f37; }\r\n.btn-adn:focus, .btn-adn.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(216, 122, 104, 0.5);\n            box-shadow: 0 0 0 2px rgba(216, 122, 104, 0.5); }\r\n.btn-adn.disabled, .btn-adn:disabled {\n    background-color: #d87a68;\n    border-color: #d87a68; }\r\n.btn-adn:active, .btn-adn.active,\n  .show > .btn-adn.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #ce563f;\n    background-image: none;\n    border-color: #cb4f37; }\r\n.btn-bitbucket {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #205081;\n  border-color: #205081; }\r\n.btn-bitbucket:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #163758;\n    border-color: #143250; }\r\n.btn-bitbucket:focus, .btn-bitbucket.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(32, 80, 129, 0.5);\n            box-shadow: 0 0 0 2px rgba(32, 80, 129, 0.5); }\r\n.btn-bitbucket.disabled, .btn-bitbucket:disabled {\n    background-color: #205081;\n    border-color: #205081; }\r\n.btn-bitbucket:active, .btn-bitbucket.active,\n  .show > .btn-bitbucket.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #163758;\n    background-image: none;\n    border-color: #143250; }\r\n.btn-dropbox {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #1087dd;\n  border-color: #1087dd; }\r\n.btn-dropbox:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #0d6aad;\n    border-color: #0c64a4; }\r\n.btn-dropbox:focus, .btn-dropbox.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(16, 135, 221, 0.5);\n            box-shadow: 0 0 0 2px rgba(16, 135, 221, 0.5); }\r\n.btn-dropbox.disabled, .btn-dropbox:disabled {\n    background-color: #1087dd;\n    border-color: #1087dd; }\r\n.btn-dropbox:active, .btn-dropbox.active,\n  .show > .btn-dropbox.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #0d6aad;\n    background-image: none;\n    border-color: #0c64a4; }\r\n.btn-facebook {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #3b5998;\n  border-color: #3b5998; }\r\n.btn-facebook:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2d4373;\n    border-color: #2a3f6c; }\r\n.btn-facebook:focus, .btn-facebook.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(59, 89, 152, 0.5);\n            box-shadow: 0 0 0 2px rgba(59, 89, 152, 0.5); }\r\n.btn-facebook.disabled, .btn-facebook:disabled {\n    background-color: #3b5998;\n    border-color: #3b5998; }\r\n.btn-facebook:active, .btn-facebook.active,\n  .show > .btn-facebook.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2d4373;\n    background-image: none;\n    border-color: #2a3f6c; }\r\n.btn-flickr {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #ff0084;\n  border-color: #ff0084; }\r\n.btn-flickr:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc006a;\n    border-color: #c20064; }\r\n.btn-flickr:focus, .btn-flickr.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(255, 0, 132, 0.5);\n            box-shadow: 0 0 0 2px rgba(255, 0, 132, 0.5); }\r\n.btn-flickr.disabled, .btn-flickr:disabled {\n    background-color: #ff0084;\n    border-color: #ff0084; }\r\n.btn-flickr:active, .btn-flickr.active,\n  .show > .btn-flickr.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc006a;\n    background-image: none;\n    border-color: #c20064; }\r\n.btn-foursquare {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f94877;\n  border-color: #f94877; }\r\n.btn-foursquare:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #f71752;\n    border-color: #f70d4b; }\r\n.btn-foursquare:focus, .btn-foursquare.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(249, 72, 119, 0.5);\n            box-shadow: 0 0 0 2px rgba(249, 72, 119, 0.5); }\r\n.btn-foursquare.disabled, .btn-foursquare:disabled {\n    background-color: #f94877;\n    border-color: #f94877; }\r\n.btn-foursquare:active, .btn-foursquare.active,\n  .show > .btn-foursquare.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #f71752;\n    background-image: none;\n    border-color: #f70d4b; }\r\n.btn-github {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #444;\n  border-color: #444; }\r\n.btn-github:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2b2a2a;\n    border-color: #252525; }\r\n.btn-github:focus, .btn-github.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(68, 68, 68, 0.5);\n            box-shadow: 0 0 0 2px rgba(68, 68, 68, 0.5); }\r\n.btn-github.disabled, .btn-github:disabled {\n    background-color: #444;\n    border-color: #444; }\r\n.btn-github:active, .btn-github.active,\n  .show > .btn-github.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2b2a2a;\n    background-image: none;\n    border-color: #252525; }\r\n.btn-google {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #dd4b39;\n  border-color: #dd4b39; }\r\n.btn-google:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #c23321;\n    border-color: #b93120; }\r\n.btn-google:focus, .btn-google.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(221, 75, 57, 0.5);\n            box-shadow: 0 0 0 2px rgba(221, 75, 57, 0.5); }\r\n.btn-google.disabled, .btn-google:disabled {\n    background-color: #dd4b39;\n    border-color: #dd4b39; }\r\n.btn-google:active, .btn-google.active,\n  .show > .btn-google.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #c23321;\n    background-image: none;\n    border-color: #b93120; }\r\n.btn-instagram {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #3f729b;\n  border-color: #3f729b; }\r\n.btn-instagram:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #305777;\n    border-color: #2d526f; }\r\n.btn-instagram:focus, .btn-instagram.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(63, 114, 155, 0.5);\n            box-shadow: 0 0 0 2px rgba(63, 114, 155, 0.5); }\r\n.btn-instagram.disabled, .btn-instagram:disabled {\n    background-color: #3f729b;\n    border-color: #3f729b; }\r\n.btn-instagram:active, .btn-instagram.active,\n  .show > .btn-instagram.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #305777;\n    background-image: none;\n    border-color: #2d526f; }\r\n.btn-linkedin {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #007bb6;\n  border-color: #007bb6; }\r\n.btn-linkedin:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #005983;\n    border-color: #005279; }\r\n.btn-linkedin:focus, .btn-linkedin.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(0, 123, 182, 0.5);\n            box-shadow: 0 0 0 2px rgba(0, 123, 182, 0.5); }\r\n.btn-linkedin.disabled, .btn-linkedin:disabled {\n    background-color: #007bb6;\n    border-color: #007bb6; }\r\n.btn-linkedin:active, .btn-linkedin.active,\n  .show > .btn-linkedin.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #005983;\n    background-image: none;\n    border-color: #005279; }\r\n.btn-microsoft {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #2672ec;\n  border-color: #2672ec; }\r\n.btn-microsoft:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #125acd;\n    border-color: #1156c4; }\r\n.btn-microsoft:focus, .btn-microsoft.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(38, 114, 236, 0.5);\n            box-shadow: 0 0 0 2px rgba(38, 114, 236, 0.5); }\r\n.btn-microsoft.disabled, .btn-microsoft:disabled {\n    background-color: #2672ec;\n    border-color: #2672ec; }\r\n.btn-microsoft:active, .btn-microsoft.active,\n  .show > .btn-microsoft.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #125acd;\n    background-image: none;\n    border-color: #1156c4; }\r\n.btn-odnoklassniki {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f4731c;\n  border-color: #f4731c; }\r\n.btn-odnoklassniki:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #d35b0a;\n    border-color: #c9570a; }\r\n.btn-odnoklassniki:focus, .btn-odnoklassniki.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(244, 115, 28, 0.5);\n            box-shadow: 0 0 0 2px rgba(244, 115, 28, 0.5); }\r\n.btn-odnoklassniki.disabled, .btn-odnoklassniki:disabled {\n    background-color: #f4731c;\n    border-color: #f4731c; }\r\n.btn-odnoklassniki:active, .btn-odnoklassniki.active,\n  .show > .btn-odnoklassniki.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #d35b0a;\n    background-image: none;\n    border-color: #c9570a; }\r\n.btn-openid {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f7931e;\n  border-color: #f7931e; }\r\n.btn-openid:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #da7908;\n    border-color: #d07407; }\r\n.btn-openid:focus, .btn-openid.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(247, 147, 30, 0.5);\n            box-shadow: 0 0 0 2px rgba(247, 147, 30, 0.5); }\r\n.btn-openid.disabled, .btn-openid:disabled {\n    background-color: #f7931e;\n    border-color: #f7931e; }\r\n.btn-openid:active, .btn-openid.active,\n  .show > .btn-openid.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #da7908;\n    background-image: none;\n    border-color: #d07407; }\r\n.btn-pinterest {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #cb2027;\n  border-color: #cb2027; }\r\n.btn-pinterest:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #9f191f;\n    border-color: #96181d; }\r\n.btn-pinterest:focus, .btn-pinterest.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(203, 32, 39, 0.5);\n            box-shadow: 0 0 0 2px rgba(203, 32, 39, 0.5); }\r\n.btn-pinterest.disabled, .btn-pinterest:disabled {\n    background-color: #cb2027;\n    border-color: #cb2027; }\r\n.btn-pinterest:active, .btn-pinterest.active,\n  .show > .btn-pinterest.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #9f191f;\n    background-image: none;\n    border-color: #96181d; }\r\n.btn-reddit {\n  color: #000;\n  background-color: #eff7ff;\n  border-color: #eff7ff; }\r\n.btn-reddit:hover {\n    color: #000;\n    background-color: #bcdeff;\n    border-color: #b2d8ff; }\r\n.btn-reddit:focus, .btn-reddit.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(239, 247, 255, 0.5);\n            box-shadow: 0 0 0 2px rgba(239, 247, 255, 0.5); }\r\n.btn-reddit.disabled, .btn-reddit:disabled {\n    background-color: #eff7ff;\n    border-color: #eff7ff; }\r\n.btn-reddit:active, .btn-reddit.active,\n  .show > .btn-reddit.dropdown-toggle {\n    color: #000;\n    background-color: #bcdeff;\n    background-image: none;\n    border-color: #b2d8ff; }\r\n.btn-soundcloud {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f50;\n  border-color: #f50; }\r\n.btn-soundcloud:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc4400;\n    border-color: #c24100; }\r\n.btn-soundcloud:focus, .btn-soundcloud.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(255, 85, 0, 0.5);\n            box-shadow: 0 0 0 2px rgba(255, 85, 0, 0.5); }\r\n.btn-soundcloud.disabled, .btn-soundcloud:disabled {\n    background-color: #f50;\n    border-color: #f50; }\r\n.btn-soundcloud:active, .btn-soundcloud.active,\n  .show > .btn-soundcloud.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc4400;\n    background-image: none;\n    border-color: #c24100; }\r\n.btn-tumblr {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #2c4762;\n  border-color: #2c4762; }\r\n.btn-tumblr:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1c2e3f;\n    border-color: #192838; }\r\n.btn-tumblr:focus, .btn-tumblr.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(44, 71, 98, 0.5);\n            box-shadow: 0 0 0 2px rgba(44, 71, 98, 0.5); }\r\n.btn-tumblr.disabled, .btn-tumblr:disabled {\n    background-color: #2c4762;\n    border-color: #2c4762; }\r\n.btn-tumblr:active, .btn-tumblr.active,\n  .show > .btn-tumblr.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1c2e3f;\n    background-image: none;\n    border-color: #192838; }\r\n.btn-twitter {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #55acee;\n  border-color: #55acee; }\r\n.btn-twitter:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2795e9;\n    border-color: #1d91e8; }\r\n.btn-twitter:focus, .btn-twitter.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(85, 172, 238, 0.5);\n            box-shadow: 0 0 0 2px rgba(85, 172, 238, 0.5); }\r\n.btn-twitter.disabled, .btn-twitter:disabled {\n    background-color: #55acee;\n    border-color: #55acee; }\r\n.btn-twitter:active, .btn-twitter.active,\n  .show > .btn-twitter.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2795e9;\n    background-image: none;\n    border-color: #1d91e8; }\r\n.btn-vimeo {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #1ab7ea;\n  border-color: #1ab7ea; }\r\n.btn-vimeo:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1295bf;\n    border-color: #118eb6; }\r\n.btn-vimeo:focus, .btn-vimeo.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(26, 183, 234, 0.5);\n            box-shadow: 0 0 0 2px rgba(26, 183, 234, 0.5); }\r\n.btn-vimeo.disabled, .btn-vimeo:disabled {\n    background-color: #1ab7ea;\n    border-color: #1ab7ea; }\r\n.btn-vimeo:active, .btn-vimeo.active,\n  .show > .btn-vimeo.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1295bf;\n    background-image: none;\n    border-color: #118eb6; }\r\n.btn-vk {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #587ea3;\n  border-color: #587ea3; }\r\n.btn-vk:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #466482;\n    border-color: #435f7b; }\r\n.btn-vk:focus, .btn-vk.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(88, 126, 163, 0.5);\n            box-shadow: 0 0 0 2px rgba(88, 126, 163, 0.5); }\r\n.btn-vk.disabled, .btn-vk:disabled {\n    background-color: #587ea3;\n    border-color: #587ea3; }\r\n.btn-vk:active, .btn-vk.active,\n  .show > .btn-vk.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #466482;\n    background-image: none;\n    border-color: #435f7b; }\r\n.btn-yahoo {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #720e9e;\n  border-color: #720e9e; }\r\n.btn-yahoo:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #500a6f;\n    border-color: #490966; }\r\n.btn-yahoo:focus, .btn-yahoo.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(114, 14, 158, 0.5);\n            box-shadow: 0 0 0 2px rgba(114, 14, 158, 0.5); }\r\n.btn-yahoo.disabled, .btn-yahoo:disabled {\n    background-color: #720e9e;\n    border-color: #720e9e; }\r\n.btn-yahoo:active, .btn-yahoo.active,\n  .show > .btn-yahoo.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #500a6f;\n    background-image: none;\n    border-color: #490966; }\r\n.btn-icon {\n  min-width: 160px; }\n"

/***/ }),

/***/ "./src/app/components/button-icons/button-icons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonIconsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonIconsComponent = (function () {
    function ButtonIconsComponent() {
    }
    ButtonIconsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-button-icons',
            template: __webpack_require__("./src/app/components/button-icons/button-icons.component.html"),
            styles: [__webpack_require__("./src/app/components/button-icons/button-icons.component.scss")]
        })
    ], ButtonIconsComponent);
    return ButtonIconsComponent;
}());



/***/ }),

/***/ "./src/app/components/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Button options</div>\r\n      <div class=\"card-block\">\r\n        <p>Bootstrap includes six predefined button styles, each serving its own semantic purpose.</p>\r\n        <button class=\"btn btn-secondary mr-1 mb-1\">Secondary</button>\r\n        <button type=\"button\" class=\"btn btn-primary mr-1 mb-1\">Primary</button>\r\n        <button type=\"button\" class=\"btn btn-success mr-1 mb-1\">Success</button>\r\n        <button type=\"button\" class=\"btn btn-info mr-1 mb-1\">Info</button>\r\n        <button type=\"button\" class=\"btn btn-warning mr-1 mb-1\">Warning</button>\r\n        <button type=\"button\" class=\"btn btn-danger mr-1 mb-1\">Danger</button>\r\n        <button type=\"button\" class=\"btn btn-primary mr-1 mb-1\" disabled=\"\">Disabled</button>\r\n        <button type=\"button\" class=\"btn btn-link mr-1 mb-1\">Link</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Outline</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          In need of a button, but not the hefty background colors they bring? Replace the default modifier classes with the\r\n          <code>\r\n            .btn-outline-*\r\n          </code>\r\n          ones to remove all background images and colors on any button.\r\n        </p>\r\n        <button class=\"btn btn-outline-secondary mr-1 mb-1\">Secondary</button>\r\n        <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\">Primary</button>\r\n        <button type=\"button\" class=\"btn btn-outline-success mr-1 mb-1\">Success</button>\r\n        <button type=\"button\" class=\"btn btn-outline-info mr-1 mb-1\">Info</button>\r\n        <button type=\"button\" class=\"btn btn-outline-warning mr-1 mb-1\">Warning</button>\r\n        <button type=\"button\" class=\"btn btn-outline-danger mr-1 mb-1\">Danger</button>\r\n        <button type=\"button\" class=\"btn btn-outline-primary mr-1 mb-1\" disabled=\"\">Disabled</button>\r\n        <button type=\"button\" class=\"btn btn-link mr-1 mb-1\">Link</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Checkbox and radio buttons</div>\r\n      <div class=\"card-block\">\r\n        <div [(ngModel)]=\"radioModel\" ngbRadioGroup name=\"radioBasic\">\r\n          <label class=\"btn btn-secondary btn-sm\">\r\n            <input type=\"radio\" [value]=\"1\"> Left (pre-checked)\r\n          </label>\r\n          <label class=\"btn btn-secondary btn-sm\">\r\n            <input type=\"radio\" value=\"middle\"> Middle\r\n          </label>\r\n          <label class=\"btn btn-secondary btn-sm\">\r\n            <input type=\"radio\" [value]=\"false\"> Right\r\n          </label>\r\n          <label class=\"btn btn-secondary btn-sm\">\r\n            <input type=\"radio\" disabled=\"\"> {{radioModel}}\r\n          </label>\r\n        </div>\r\n\r\n        <p>Check-box-like button group can be easily done with pure Angular, no custom directives necessary.\r\n          But we include demo here for completeness.</p>\r\n        <div class=\"btn-group btn-group-sm\" data-toggle=\"buttons\">\r\n          <label class=\"btn btn-secondary\" [class.active]=\"checkboxModel.left\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"checkboxModel.left\"> Left (pre-checked)\r\n          </label>\r\n          <label class=\"btn btn-secondary\" [class.active]=\"checkboxModel.middle\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"checkboxModel.middle\"> Middle\r\n          </label>\r\n          <label class=\"btn btn-secondary\" [class.active]=\"checkboxModel.right\">\r\n            <input type=\"checkbox\" [(ngModel)]=\"checkboxModel.right\"> Right\r\n          </label>\r\n        </div>\r\n        <pre>{{checkboxModel | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Sizing</div>\r\n      <div class=\"card-block\">\r\n        <p>Fancy larger or smaller buttons? Add <code>.btn-lg</code> or <code>.btn-sm</code> for additional sizes.</p>\r\n        <p>\r\n          <a href=\"javascript:;\" class=\"btn btn-secondary btn-lg mr-1\">Large button</a>\r\n          &nbsp;\r\n          <a href=\"javascript:;\" class=\"btn btn-outline-info btn-lg mr-1\">Large button</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"javascript:;\" class=\"btn btn-secondary mr-1\">Default button</a>\r\n          &nbsp;\r\n          <a href=\"javascript:;\" class=\"btn btn-outline-primary mr-1\">Default button</a>\r\n        </p>\r\n        <p>\r\n          <a href=\"javascript:;\" class=\"btn btn-secondary btn-sm mr-1\">Small button</a>\r\n          &nbsp;\r\n          <a href=\"javascript:;\" class=\"btn btn-outline-danger btn-sm mr-1\">Small button</a>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Button styles</div>\r\n  <div class=\"card-block\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n        <p>Button icons</p>\r\n        <p>Custom bootstrap buttons with icons</p>\r\n        <button type=\"button\" class=\"btn btn-primary btn-icon loading-demo mr-1 mb-1\">\r\n          <i class=\"icon icon-basic-paperplane\"></i>\r\n          <span>Submit</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-danger btn-icon mr-1 mb-1\">\r\n          <i class=\"icon icon-basic-ban\"></i>\r\n          <span>Warning</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-info btn-icon mr-1 mb-1\">\r\n          <i class=\"icon icon-basic-server-upload\"></i>\r\n          <span>Upload</span>\r\n        </button>\r\n        <button class=\"btn btn-success btn-icon-icon mr-1 mb-1\">\r\n          <i class=\"icon icon-basic-heart\"></i>\r\n        </button>\r\n      </div>\r\n      <div class=\"col-md-6\">\r\n        <p>Groups</p>\r\n        <p>Wrap a series of buttons with .btn in .btn-group.</p>\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">Left</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">Right</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Toolbar</div>\r\n      <div class=\"card-block\">\r\n        <p>Combine sets of button groups into button toolbars for more complex components.</p>\r\n        <div class=\"btn-toolbar\" role=\"toolbar\">\r\n          <div class=\"btn-group mr-1 mb-1\">\r\n            <button type=\"button\" class=\"btn btn-success\">1</button>\r\n            <button type=\"button\" class=\"btn btn-success\">2</button>\r\n            <button type=\"button\" class=\"btn btn-success\">3</button>\r\n            <button type=\"button\" class=\"btn btn-success\">4</button>\r\n          </div>\r\n          <div class=\"btn-group mr-1 mb-1\">\r\n            <button type=\"button\" class=\"btn btn-primary\">5</button>\r\n            <button type=\"button\" class=\"btn btn-primary\">6</button>\r\n            <button type=\"button\" class=\"btn btn-primary\">7</button>\r\n          </div>\r\n          <div class=\"btn-group mr-1 mb-1\">\r\n            <button type=\"button\" class=\"btn btn-warning\">8</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Nesting</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          Place a\r\n          <code>.btn-group</code>\r\n          within another\r\n          <code>.btn-group</code>\r\n          when you want dropdown menus mixed with a series of buttons.\r\n        </p>\r\n        <div class=\"btn-group\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">1</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">2</button>\r\n          <div class=\"dropdown btn-group\" ngbDropdown>\r\n            <button type=\"button\" class=\"btn btn-secondary dropdown-toggle\" ngbDropdownToggle>\r\n              Dropdown\r\n              <span class=\"caret\"></span>\r\n            </button>\r\n            <div class=\"dropdown-menu\" role=\"menu\">\r\n              <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n              <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n              <div class=\"dropdown-divider\"></div>\r\n              <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-md-6\">   \r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Block level buttons</div>\r\n      <div class=\"card-block\">\r\n        <p>Create block level buttons—those that span the full width of a parent—by adding .btn-block.</p>\r\n        <button type=\"button\" class=\"btn btn-danger btn-lg btn-block mb-1\">\r\n          <span>Block level button</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-info btn-block mb-1\">\r\n          <span>Block level button</span>\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-primary btn-sm btn-block mb-1\">\r\n          <span>Block level button</span>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Vertical groups</div>\r\n      <div class=\"card-block\">\r\n        <p>Make a set of buttons appear vertically stacked rather than horizontally. Split button dropdowns are not supported here.</p>\r\n        <div class=\"btn-group-vertical\">\r\n          <button type=\"button\" class=\"btn btn-secondary\">Top</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">Middle</button>\r\n          <button type=\"button\" class=\"btn btn-secondary\">Bottom</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
        this.radioModel = 1;
        this.checkboxModel = {
            left: true,
            middle: false,
            right: false
        };
    }
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-buttons',
            template: __webpack_require__("./src/app/components/buttons/buttons.component.html"),
            styles: [__webpack_require__("./src/app/components/buttons/buttons.component.scss")]
        })
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "./src/app/components/carousel/carousel.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Carousel</div>\r\n  <div class=\"card-block\">\r\n    <div class=\"d-flex align-items-center justify-content-center\">\r\n      <ngb-carousel>\r\n        <ng-template ngbSlide>\r\n          <img src=\"assets/images/unsplash/16.jpg\" alt=\"Random first slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3 class=\"ff-serif text-uppercase\">First slide label</h3>\r\n            <p class=\"mb-0\">Nulla vitae elit libero, a pharetra augue mollis interdum.</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src=\"assets/images/unsplash/17.jpg\" alt=\"Random second slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3 class=\"ff-serif text-uppercase\">Second slide label</h3>\r\n            <p class=\"mb-0\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\r\n          </div>\r\n        </ng-template>\r\n        <ng-template ngbSlide>\r\n          <img src=\"assets/images/unsplash/21.jpg\" alt=\"Random third slide\">\r\n          <div class=\"carousel-caption\">\r\n            <h3 class=\"ff-serif text-uppercase\">Third slide label</h3>\r\n            <p class=\"mb-0\">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\r\n          </div>\r\n        </ng-template>\r\n      </ngb-carousel>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/carousel/carousel.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarouselComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarouselComponent = (function () {
    function CarouselComponent() {
    }
    CarouselComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-carousel',
            template: __webpack_require__("./src/app/components/carousel/carousel.component.html"),
            styles: [__webpack_require__("./src/app/components/carousel/carousel.component.scss")]
        })
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/components/collapse/collapse.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Collapse</div>\r\n  <div class=\"card-block\">\r\n    <button type=\"button\" class=\"btn btn-primary mb-3\" (click)=\"isCollapsed = !isCollapsed\" [attr.aria-expanded]=\"!isCollapsed\" aria-controls=\"collapseExample\">Toggle</button>\r\n    <div id=\"collapseExample\" [ngbCollapse]=\"isCollapsed\">\r\n      <div class=\"card\">\r\n        <div>You can collapse this card by clicking Toggle.<br/> Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/collapse/collapse.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/collapse/collapse.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CollapseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CollapseComponent = (function () {
    function CollapseComponent() {
        this.isCollapsed = false;
    }
    CollapseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-collapse',
            template: __webpack_require__("./src/app/components/collapse/collapse.component.html"),
            styles: [__webpack_require__("./src/app/components/collapse/collapse.component.scss")]
        })
    ], CollapseComponent);
    return CollapseComponent;
}());



/***/ }),

/***/ "./src/app/components/components.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsModule", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_routing__ = __webpack_require__("./src/app/components/components.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buttons_buttons_component__ = __webpack_require__("./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__ = __webpack_require__("./src/app/components/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_component__ = __webpack_require__("./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__spinners_spinners_component__ = __webpack_require__("./src/app/components/spinners/spinners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__accordion_accordion_component__ = __webpack_require__("./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__alert_alert_component__ = __webpack_require__("./src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__carousel_carousel_component__ = __webpack_require__("./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__collapse_collapse_component__ = __webpack_require__("./src/app/components/collapse/collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__datepicker_datepicker_component__ = __webpack_require__("./src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__dropdown_dropdown_component__ = __webpack_require__("./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__modal_modal_component__ = __webpack_require__("./src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popover_popover_component__ = __webpack_require__("./src/app/components/popover/popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__rating_rating_component__ = __webpack_require__("./src/app/components/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tabs_tabs_component__ = __webpack_require__("./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__timepicker_timepicker_component__ = __webpack_require__("./src/app/components/timepicker/timepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__tooltip_tooltip_component__ = __webpack_require__("./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__typeahead_typeahead_component__ = __webpack_require__("./src/app/components/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__button_icons_button_icons_component__ = __webpack_require__("./src/app/components/button-icons/button-icons.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_6__components_routing__["a" /* ComponentsRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["f" /* JsonpModule */],
                __WEBPACK_IMPORTED_MODULE_5__ng_bootstrap_ng_bootstrap__["g" /* NgbModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__progress_progress_component__["a" /* ProgressComponent */],
                __WEBPACK_IMPORTED_MODULE_9__pagination_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__spinners_spinners_component__["a" /* SpinnersComponent */],
                __WEBPACK_IMPORTED_MODULE_11__accordion_accordion_component__["a" /* AccordionComponent */],
                __WEBPACK_IMPORTED_MODULE_12__alert_alert_component__["a" /* AlertComponent */],
                __WEBPACK_IMPORTED_MODULE_13__carousel_carousel_component__["a" /* CarouselComponent */],
                __WEBPACK_IMPORTED_MODULE_14__collapse_collapse_component__["a" /* CollapseComponent */],
                __WEBPACK_IMPORTED_MODULE_15__datepicker_datepicker_component__["a" /* DatepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_16__dropdown_dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_17__modal_modal_component__["a" /* ModalComponent */],
                __WEBPACK_IMPORTED_MODULE_18__popover_popover_component__["a" /* PopoverComponent */],
                __WEBPACK_IMPORTED_MODULE_19__rating_rating_component__["a" /* RatingComponent */],
                __WEBPACK_IMPORTED_MODULE_20__tabs_tabs_component__["a" /* TabsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__timepicker_timepicker_component__["a" /* TimepickerComponent */],
                __WEBPACK_IMPORTED_MODULE_22__tooltip_tooltip_component__["a" /* TooltipComponent */],
                __WEBPACK_IMPORTED_MODULE_23__typeahead_typeahead_component__["a" /* TypeaheadComponent */],
                __WEBPACK_IMPORTED_MODULE_24__button_icons_button_icons_component__["a" /* ButtonIconsComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());



/***/ }),

/***/ "./src/app/components/components.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__ = __webpack_require__("./src/app/components/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__progress_progress_component__ = __webpack_require__("./src/app/components/progress/progress.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pagination_pagination_component__ = __webpack_require__("./src/app/components/pagination/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__spinners_spinners_component__ = __webpack_require__("./src/app/components/spinners/spinners.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_component__ = __webpack_require__("./src/app/components/accordion/accordion.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__ = __webpack_require__("./src/app/components/alert/alert.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__ = __webpack_require__("./src/app/components/carousel/carousel.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__collapse_collapse_component__ = __webpack_require__("./src/app/components/collapse/collapse.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__datepicker_datepicker_component__ = __webpack_require__("./src/app/components/datepicker/datepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dropdown_dropdown_component__ = __webpack_require__("./src/app/components/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_modal_component__ = __webpack_require__("./src/app/components/modal/modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__popover_popover_component__ = __webpack_require__("./src/app/components/popover/popover.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rating_rating_component__ = __webpack_require__("./src/app/components/rating/rating.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_component__ = __webpack_require__("./src/app/components/tabs/tabs.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_component__ = __webpack_require__("./src/app/components/timepicker/timepicker.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_component__ = __webpack_require__("./src/app/components/tooltip/tooltip.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_component__ = __webpack_require__("./src/app/components/typeahead/typeahead.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__button_icons_button_icons_component__ = __webpack_require__("./src/app/components/button-icons/button-icons.component.ts");


















var ComponentsRoutes = [
    {
        path: '',
        children: [{
                path: 'buttons',
                component: __WEBPACK_IMPORTED_MODULE_0__buttons_buttons_component__["a" /* ButtonsComponent */],
                data: {
                    heading: 'Buttons'
                }
            }, {
                path: 'buttonicons',
                component: __WEBPACK_IMPORTED_MODULE_17__button_icons_button_icons_component__["a" /* ButtonIconsComponent */],
                data: {
                    heading: 'Social Button Icons'
                }
            }, {
                path: 'progress',
                component: __WEBPACK_IMPORTED_MODULE_1__progress_progress_component__["a" /* ProgressComponent */],
                data: {
                    heading: 'Progress bars'
                }
            }, {
                path: 'pagination',
                component: __WEBPACK_IMPORTED_MODULE_2__pagination_pagination_component__["a" /* PaginationComponent */],
                data: {
                    heading: 'Pagination'
                }
            }, {
                path: 'spinners',
                component: __WEBPACK_IMPORTED_MODULE_3__spinners_spinners_component__["a" /* SpinnersComponent */],
                data: {
                    heading: 'Spinner'
                }
            }, {
                path: 'accordion',
                component: __WEBPACK_IMPORTED_MODULE_4__accordion_accordion_component__["a" /* AccordionComponent */],
                data: {
                    heading: 'Accordion'
                }
            }, {
                path: 'alert',
                component: __WEBPACK_IMPORTED_MODULE_5__alert_alert_component__["a" /* AlertComponent */],
                data: {
                    heading: 'Alert'
                }
            }, {
                path: 'carousel',
                component: __WEBPACK_IMPORTED_MODULE_6__carousel_carousel_component__["a" /* CarouselComponent */],
                data: {
                    heading: 'Carousel'
                }
            }, {
                path: 'collapse',
                component: __WEBPACK_IMPORTED_MODULE_7__collapse_collapse_component__["a" /* CollapseComponent */],
                data: {
                    heading: 'Collapse'
                }
            }, {
                path: 'datepicker',
                component: __WEBPACK_IMPORTED_MODULE_8__datepicker_datepicker_component__["a" /* DatepickerComponent */],
                data: {
                    heading: 'Datepicker'
                }
            }, {
                path: 'dropdown',
                component: __WEBPACK_IMPORTED_MODULE_9__dropdown_dropdown_component__["a" /* DropdownComponent */],
                data: {
                    heading: 'Dropdown'
                }
            }, {
                path: 'modal',
                component: __WEBPACK_IMPORTED_MODULE_10__modal_modal_component__["a" /* ModalComponent */],
                data: {
                    heading: 'Modal'
                }
            }, {
                path: 'popover',
                component: __WEBPACK_IMPORTED_MODULE_11__popover_popover_component__["a" /* PopoverComponent */],
                data: {
                    heading: 'Popovers'
                }
            }, {
                path: 'rating',
                component: __WEBPACK_IMPORTED_MODULE_12__rating_rating_component__["a" /* RatingComponent */],
                data: {
                    heading: 'Rating'
                }
            }, {
                path: 'tabs',
                component: __WEBPACK_IMPORTED_MODULE_13__tabs_tabs_component__["a" /* TabsComponent */],
                data: {
                    heading: 'Tabs'
                }
            }, {
                path: 'timepicker',
                component: __WEBPACK_IMPORTED_MODULE_14__timepicker_timepicker_component__["a" /* TimepickerComponent */],
                data: {
                    heading: 'Timepicker'
                }
            }, {
                path: 'tooltip',
                component: __WEBPACK_IMPORTED_MODULE_15__tooltip_tooltip_component__["a" /* TooltipComponent */],
                data: {
                    heading: 'Tooltips'
                }
            }, {
                path: 'typeahead',
                component: __WEBPACK_IMPORTED_MODULE_16__typeahead_typeahead_component__["a" /* TypeaheadComponent */],
                data: {
                    heading: 'Typeahead'
                }
            }]
    }
];


/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Simple datepicker</div>\r\n      <div class=\"card-block\">\r\n        <ngb-datepicker #dp [(ngModel)]=\"model\" (navigate)=\"date = $event.next\"></ngb-datepicker>\r\n\r\n        <div class=\"block mt-3 mb-3\">\r\n          <button class=\"btn btn-sm btn-outline-primary\" (click)=\"selectToday()\">Select Today</button>\r\n          <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo()\">To current month</button>\r\n          <button class=\"btn btn-sm btn-outline-primary\" (click)=\"dp.navigateTo({year: 2013, month: 2})\">To Feb 2013</button>\r\n        </div>\r\n\r\n        <pre>Month: {{ date.month }}.{{ date.year }}</pre>\r\n        <pre>Model: {{ model | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Multiple months</div>\r\n      <div class=\"card-block\">\r\n        <ngb-datepicker [displayMonths]=\"displayMonths\" [navigation]=\"navigation\"></ngb-datepicker>\r\n\r\n        <p class=\"pt-3\">Inline</p>\r\n\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                    name=\"dp\" [displayMonths]=\"displayMonths\" [navigation]=\"navigation\" ngbDatepicker #d=\"ngbDatepicker\">\r\n              <div class=\"input-group-addon\" (click)=\"d.toggle()\" >\r\n                <i class=\"icon icon-basic-calendar\" style=\"cursor: pointer;\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <p class=\"pt-3\">Options</p>\r\n\r\n        <select class=\"custom-select\" [(ngModel)]=\"displayMonths\">\r\n          <option [ngValue]=\"1\">One month</option>\r\n          <option [ngValue]=\"2\">Two months</option>\r\n          <option [ngValue]=\"3\">Three months</option>\r\n        </select>\r\n\r\n        <select class=\"custom-select\" [(ngModel)]=\"navigation\">\r\n          <option value=\"none\">Without navigation</option>\r\n          <option value=\"select\">With select boxes</option>\r\n          <option value=\"arrows\">Without select boxes</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Datepicker in a popup</div>\r\n      <div class=\"card-block\">\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                     name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d2=\"ngbDatepicker\">\r\n              <div class=\"input-group-addon\" (click)=\"d2.toggle()\" >\r\n                <i class=\"icon icon-basic-calendar\" style=\"cursor: pointer;\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n        <pre>Model: {{ popupModel | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Custom day view</div>\r\n      <div class=\"card-block\">\r\n        <p>This datepicker uses a custom template to display days. All week-ends are displayed with an orange background.</p>\r\n\r\n        <form class=\"form-inline\">\r\n          <div class=\"form-group\">\r\n            <div class=\"input-group\">\r\n              <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                     name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker [dayTemplate]=\"customDay\" [markDisabled]=\"isDisabled\" #d3=\"ngbDatepicker\">\r\n              <div class=\"input-group-addon\" (click)=\"d3.toggle()\" >\r\n                <i class=\"icon icon-basic-calendar\" style=\"cursor: pointer;\"></i>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </form>\r\n\r\n        <ng-template #customDay let-date=\"date\" let-currentMonth=\"currentMonth\" let-selected=\"selected\" let-disabled=\"disabled\">\r\n          <span class=\"custom-day\" [class.weekend]=\"isWeekend(date)\"\r\n                [class.bg-primary]=\"selected\" [class.hidden]=\"date.month !== currentMonth\" [class.text-muted]=\"disabled\">\r\n            {{ date.day }}\r\n          </span>\r\n        </ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Disabled datepicker</div>\r\n      <div class=\"card-block\">\r\n        <ngb-datepicker [(ngModel)]=\"disabledModel\" [disabled]=\"disabled\"></ngb-datepicker>\r\n\r\n        <div class=\"block mt-3\">\r\n          <button class=\"btn btn-sm btn-outline-{{disabled ? 'danger' : 'success'}}\" (click)=\"disabled = !disabled\">\r\n            {{ disabled ? \"disabled\" : \"enabled\"}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Internationalization of datepickers</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"block mb-3\">\r\n          <div [(ngModel)]=\"language\" ngbRadioGroup>\r\n            <label class=\"btn btn-primary btn-sm\">\r\n              <input type=\"radio\" value=\"en\"> English\r\n            </label>\r\n            <label class=\"btn btn-primary btn-sm\">\r\n              <input type=\"radio\" value=\"fr\"> Français\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <ngb-datepicker [(ngModel)]=\"intModel\"></ngb-datepicker>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.scss":
/***/ (function(module, exports) {

module.exports = ".custom-day {\n  text-align: center;\n  padding: 0.185rem 0.25rem;\n  border-radius: 0;\n  display: inline-block;\n  width: 2rem; }\n\n.custom-day:hover {\n  background-color: #e6e6e6; }\n\n.weekend {\n  background-color: #f0ad4e;\n  border-radius: 0;\n  color: white; }\n\n.hidden {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/datepicker/datepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export I18n */
/* unused harmony export CustomDatepickerI18n */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var now = new Date();
var I18N_VALUES = {
    en: {
        weekdays: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
        months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    },
    fr: {
        weekdays: ['Lu', 'Ma', 'Me', 'Je', 'Ve', 'Sa', 'Di'],
        months: ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Déc'],
    }
};
// Define a service holding the language. You probably already have one if your app is i18ned.
var I18n = (function () {
    function I18n() {
        this.language = 'en';
    }
    I18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], I18n);
    return I18n;
}());

// Define custom service providing the months and weekdays translations
var CustomDatepickerI18n = (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbDatepickerI18n */]));

var DatepickerComponent = (function () {
    function DatepickerComponent(_i18n) {
        this._i18n = _i18n;
        this.displayMonths = 2;
        this.navigation = 'select';
        this.disabledModel = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        this.disabled = true;
    }
    Object.defineProperty(DatepickerComponent.prototype, "language", {
        get: function () {
            return this._i18n.language;
        },
        set: function (language) {
            this._i18n.language = language;
        },
        enumerable: true,
        configurable: true
    });
    DatepickerComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
    };
    DatepickerComponent.prototype.isWeekend = function (date) {
        var d = new Date(date.year, date.month - 1, date.day);
        return d.getDay() === 0 || d.getDay() === 6;
    };
    DatepickerComponent.prototype.isDisabled = function (date, current) {
        return date.month !== current.month;
    };
    DatepickerComponent.prototype.ngOnInit = function () {
        this.selectToday();
    };
    DatepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-datepicker',
            template: __webpack_require__("./src/app/components/datepicker/datepicker.component.html"),
            styles: [__webpack_require__("./src/app/components/datepicker/datepicker.component.scss")],
            providers: [I18n, { provide: __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["e" /* NgbDatepickerI18n */], useClass: CustomDatepickerI18n }] // define custom NgbDatepickerI18n provider
        }),
        __metadata("design:paramtypes", [I18n])
    ], DatepickerComponent);
    return DatepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Basic dropdown</div>\r\n  <div class=\"card-block\">\r\n    <div ngbDropdown class=\"d-inline-block\">\r\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n        <button class=\"dropdown-item\">Action - 1</button>\r\n        <button class=\"dropdown-item\">Another Action</button>\r\n        <button class=\"dropdown-item\">Something else is here</button>\r\n      </div>\r\n    </div>\r\n\r\n    <!--<div ngbDropdown [up]=\"true\" class=\"d-inline-block\">-->\r\n    <div ngbDropdown  class=\"d-inline-block\">\r\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu2\" ngbDropdownToggle>Toggle dropup</button>\r\n      <div class=\"dropdown-menu dropdown-menu-right\" aria-labelledby=\"dropdownMenu2\">\r\n        <button class=\"dropdown-item\">Action - 1</button>\r\n        <button class=\"dropdown-item\">Another Action</button>\r\n        <button class=\"dropdown-item\">Something else is here</button>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"mt-4\">You can easily control dropdowns programmatically using the exported dropdown instance.</p>\r\n\r\n    <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n        <button class=\"dropdown-item\">Action - 1</button>\r\n        <button class=\"dropdown-item\">Another Action</button>\r\n        <button class=\"dropdown-item\">Something else is here</button>\r\n      </div>\r\n\r\n      <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\r\n      <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\r\n    </div>\r\n\r\n    <p class=\"mt-4\">Manual triggers</p>\r\n    <p>You can easily control dropdowns programmatically using the exported dropdown instance.</p>\r\n\r\n    <div class=\"d-inline-block\" ngbDropdown #myDrop=\"ngbDropdown\">\r\n      <button class=\"btn btn-outline-primary\" id=\"dropdownMenu1\" ngbDropdownToggle>Toggle dropdown</button>\r\n      <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenu1\">\r\n        <button class=\"dropdown-item\">Action - 1</button>\r\n        <button class=\"dropdown-item\">Another Action</button>\r\n        <button class=\"dropdown-item\">Something else is here</button>\r\n      </div>\r\n\r\n      <button class=\"btn btn-outline-success\" (click)=\"$event.stopPropagation(); myDrop.open();\">Open from outside</button>\r\n      <button class=\"btn btn-outline-danger\" (click)=\"$event.stopPropagation(); myDrop.close();\">Close from outside</button>\r\n    </div>\r\n\r\n\r\n    <p class=\"mt-4\">Turn a button into a dropdown toggle with some basic markup changes.</p>\r\n    <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\r\n      <button type=\"button\" class=\"btn btn-danger\">Action</button>\r\n      <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle Dropdown</span>\r\n      </button>\r\n      <div class=\"dropdown-menu\" role=\"menu\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"dropdown btn-group dropup mr-1 mb-1\" ngbDropdown>\r\n      <button type=\"button\" class=\"btn btn-outline-danger\">Action</button>\r\n      <button type=\"button\" class=\"btn btn-outline-danger dropdown-toggle\" ngbDropdownToggle aria-haspopup=\"true\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle Dropdown</span>\r\n      </button>\r\n      <div class=\"dropdown-menu\" role=\"menu\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\r\n      <button type=\"button\" class=\"btn btn-info dropdown-toggle\" ngbDropdownToggle>\r\n        Dropdown\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <div class=\"dropdown-menu\" role=\"menu\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n      </div>\r\n    </div>\r\n    <div class=\"dropdown btn-group mr-1 mb-1\" ngbDropdown>\r\n      <button type=\"button\" class=\"btn btn-outline-info dropdown-toggle\" ngbDropdownToggle>\r\n        Dropdown\r\n        <span class=\"caret\"></span>\r\n      </button>\r\n      <div class=\"dropdown-menu\" role=\"menu\">\r\n        <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n        <div class=\"dropdown-divider\"></div>\r\n        <a class=\"dropdown-item\" href=\"#\">Separated link</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DropdownComponent = (function () {
    function DropdownComponent() {
    }
    DropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dropdown',
            template: __webpack_require__("./src/app/components/dropdown/dropdown.component.html"),
            styles: [__webpack_require__("./src/app/components/dropdown/dropdown.component.scss")]
        })
    ], DropdownComponent);
    return DropdownComponent;
}());



/***/ }),

/***/ "./src/app/components/modal/modal.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Modal</div>\r\n  <div class=\"card-block\">\r\n    <button class=\"btn btn-secondary\" (click)=\"open(content)\">Modal with default options</button>\r\n    <pre>{{closeResult}}</pre>\r\n\r\n    <div role=\"document\" class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h6 class=\"modal-title text-uppercase\">Modal title</h6>\r\n          <button aria-label=\"Close\" class=\"close\" type=\"button\">\r\n            <span aria-hidden=\"true\">×</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>One fine body…</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button class=\"btn btn-secondary\" type=\"button\">Close</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<ng-template ngbModalContainer></ng-template>\r\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\r\n  <div class=\"modal-header\">\r\n    <h6 class=\"modal-title text-uppercase\">Modal title</h6>\r\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n    </button>\r\n  </div>\r\n  <div class=\"modal-body\">\r\n    <p>One fine body&hellip;</p>\r\n  </div>\r\n  <div class=\"modal-footer\">\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"c('Close click')\">Close</button>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/components/modal/modal.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/modal/modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalComponent = (function () {
    function ModalComponent(modalService) {
        this.modalService = modalService;
    }
    ModalComponent.prototype.open = function (content) {
        var _this = this;
        this.modalService.open(content).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ModalComponent.prototype.getDismissReason = function (reason) {
        if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["a" /* ModalDismissReasons */].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ModalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-modal',
            template: __webpack_require__("./src/app/components/modal/modal.component.html"),
            styles: [__webpack_require__("./src/app/components/modal/modal.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */]])
    ], ModalComponent);
    return ModalComponent;
}());



/***/ }),

/***/ "./src/app/components/pagination/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Pagination options</div>\r\n  <div class=\"card-block\">\r\n    <div class=\"row\">\r\n      <div class=\"col-lg-6\">\r\n        <div>Default pagination</div>\r\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\"></ngb-pagination>\r\n\r\n        <div>directionLinks = false</div>\r\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [directionLinks]=\"false\"></ngb-pagination>\r\n\r\n        <div>boundaryLinks = true</div>\r\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n        <div>Pagination sizes</div>\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"lg\"></ngb-pagination>\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\"></ngb-pagination>\r\n        <ngb-pagination [collectionSize]=\"50\" [(page)]=\"currentPage\" size=\"sm\"></ngb-pagination>\r\n      </div>\r\n      <div class=\"col-lg-6\">\r\n        <div>maxSize = 5, rotate = false</div>\r\n        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n        <div>maxSize = 5, rotate = true</div>\r\n        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n        <div>maxSize = 5, rotate = true, ellipses = false</div>\r\n        <ngb-pagination [collectionSize]=\"120\" [(page)]=\"page\" [maxSize]=\"5\" [rotate]=\"true\" [ellipses]=\"false\" [boundaryLinks]=\"true\"></ngb-pagination>\r\n\r\n        <pre>Current page: {{page}}</pre>\r\n\r\n        <div>Pagination control can be disabled</div>\r\n        <ngb-pagination [collectionSize]=\"70\" [(page)]=\"page\" [disabled]='isDisabled'></ngb-pagination>\r\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"toggleDisabled()\">\r\n          Toggle disabled\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/pagination/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PaginationComponent = (function () {
    function PaginationComponent() {
        this.page = 4;
        this.currentPage = 3;
        this.isDisabled = true;
    }
    PaginationComponent.prototype.toggleDisabled = function () {
        this.isDisabled = !this.isDisabled;
    };
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__("./src/app/components/pagination/pagination.component.html"),
            styles: [__webpack_require__("./src/app/components/pagination/pagination.component.scss")]
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/popover/popover.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Quick and easy popovers</div>\r\n      <div class=\"card-block\">\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"top\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\">\r\n          Popover on top\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"right\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on right\">\r\n          Popover on right\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"bottom\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on bottom\">\r\n          Popover on bottom\r\n        </button>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"left\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on left\">\r\n          Popover on left\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">HTML and bindings in popovers</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          Popovers can contain any arbitrary HTML, Angular bindings and even directives!\r\n          Simply enclose desired content in a <code>&lt;template&gt;</code> element.\r\n        </p>\r\n\r\n        <ng-template #popContent>Hello, <b>{{name}}</b>!</ng-template>\r\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\" [ngbPopover]=\"popContent\" popoverTitle=\"Fancy content\">\r\n          I've got markup and bindings in my popover!\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Custom and manual triggers</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\r\n        </p>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" ngbPopover=\"You see, I show up on hover!\" triggers=\"mouseenter:mouseleave\" popoverTitle=\"Pop title\">\r\n          Hover over me!\r\n        </button>\r\n\r\n        <p class=\"pt-3\">\r\n          Alternatively you can take full manual control over popover opening / closing events.\r\n        </p>\r\n\r\n        <button type=\"button\" class=\"btn btn-secondary\" ngbPopover=\"What a great tip!\" triggers=\"manual\" #p=\"ngbPopover\" (click)=\"p.open()\" popoverTitle=\"Pop title\">\r\n          Click me to open a popover\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"p.close()\">\r\n          Click me to close a popover\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Append popover in the body</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          Set the <code>container</code> property to \"body\" to have the popover be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the popover is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\r\n        </p>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"card mb-0\" style=\"padding: 20px 0; text-align: center; overflow:hidden\">\r\n            <button type=\"button\" class=\"btn btn-secondary btn-sm mb-3\"\r\n                    ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\r\n              Popover appended to body\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary btn-sm\"\r\n                    ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n              Default popover\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Context and manual triggers</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          You can optionally pass in a context when manually triggering a popover.\r\n        </p>\r\n\r\n        <ng-template #popContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\r\n        <p>\r\n          How would you like to greet <strong [ngbPopover]=\"popContent\" popoverTitle=\"Greeting\" #p=\"ngbPopover\" triggers=\"manual\">me</strong>?\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n          French\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n          German\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n          English\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Popover visibility events</div>\r\n      <div class=\"card-block\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" placement=\"top\"\r\n                ngbPopover=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" popoverTitle=\"Popover on top\" \r\n                #popover=\"ngbPopover\">\r\n          Open Popover\r\n        </button>\r\n\r\n        <p class=\"pt-3\">\r\n          Popover is currently: <code>{{ popover.isOpen() ? 'open' : 'closed' }}</code>\r\n        </p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/popover/popover.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/popover/popover.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopoverComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopoverComponent = (function () {
    function PopoverComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    PopoverComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.popover.isOpen();
        this.popover.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.popover.open(greeting);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('p'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["h" /* NgbPopover */])
    ], PopoverComponent.prototype, "popover", void 0);
    PopoverComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-popover',
            template: __webpack_require__("./src/app/components/popover/popover.component.html"),
            styles: [__webpack_require__("./src/app/components/popover/popover.component.scss")]
        })
    ], PopoverComponent);
    return PopoverComponent;
}());



/***/ }),

/***/ "./src/app/components/progress/progress.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\r\n  <div class=\"card-header\">Contextual progress bars</div>\r\n  <div class=\"card-block\">\r\n    <p>Stylize the HTML5 <code>progress</code> element with a few extra classes and some crafty browser-specific CSS. Be sure to read up on the browser support.</p>\r\n    <p><ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"warning\" [value]=\"75\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"danger\" [value]=\"100\"></ngb-progressbar></p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Progress bars with current value labels</div>\r\n  <div class=\"card-block\">\r\n    <p>Add labels to your progress bars by placing text within the <code class=\"highlighter-rouge\">.progress-bar</code>.</p>\r\n    <p><ngb-progressbar showValue=\"true\" type=\"success\" [value]=\"25\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar [showValue]=\"true\" type=\"info\" [value]=\"50\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar showValue=\"true\" type=\"warning\" [value]=\"150\" [max]=\"200\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar [showValue]=\"true\" type=\"danger\" [value]=\"150\" [max]=\"150\"></ngb-progressbar></p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Striped progress bars</div>\r\n  <div class=\"card-block\">\r\n    <p>Uses a gradient to create a striped effect.</p>\r\n    <p><ngb-progressbar type=\"success\" [value]=\"25\" [striped]=\"true\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"info\" [value]=\"50\" [striped]=\"true\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\"></ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\"></ngb-progressbar></p>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Progress bars with custom labels</div>\r\n  <div class=\"card-block\">\r\n    <p><ngb-progressbar type=\"success\" [value]=\"25\">25</ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"info\" [value]=\"50\">Copying file <b>2 of 4</b>...</ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"warning\" [value]=\"75\" [striped]=\"true\" [animated]=\"true\"><i>50%</i></ngb-progressbar></p>\r\n    <p><ngb-progressbar type=\"danger\" [value]=\"100\" [striped]=\"true\">Completed!</ngb-progressbar></p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/progress/progress.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/progress/progress.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressComponent = (function () {
    function ProgressComponent() {
    }
    ProgressComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-progress',
            template: __webpack_require__("./src/app/components/progress/progress.component.html"),
            styles: [__webpack_require__("./src/app/components/progress/progress.component.scss")]
        })
    ], ProgressComponent);
    return ProgressComponent;
}());



/***/ }),

/***/ "./src/app/components/rating/rating.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">   \r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Basic demo</div>\r\n      <div class=\"card-block\">\r\n        <ngb-rating [(rate)]=\"currentRate\"></ngb-rating>\r\n        <pre>Rate: <b>{{currentRate}}</b></pre>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Events and readonly ratings</div>\r\n      <div class=\"card-block\">\r\n        <ngb-rating [(rate)]=\"selected\" (hover)=\"hovered=$event\" (leave)=\"hovered=0\" [readonly]=\"readonly\"></ngb-rating>\r\n        <pre>Selected: <b>{{selected}}</b>\r\nHovered: <b>{{hovered}}</b>\r\n        </pre>\r\n        <button class=\"btn btn-sm btn-outline-{{readonly ? 'danger' : 'success'}}\" (click)=\"readonly = !readonly\">\r\n          {{ readonly ? \"readonly\" : \"editable\"}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Custom star template</div>\r\n      <div class=\"card-block\">\r\n        <p>Custom rating template provided as child element</p>\r\n        <ngb-rating [(rate)]=\"currentRate\">\r\n          <ng-template let-fill=\"fill\">\r\n            <span class=\"star\" [class.filled]=\"fill === 100\">&#9733;</span>\r\n          </ng-template>\r\n        </ngb-rating>\r\n        <pre>Rate: <b>{{currentRate}}</b></pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Custom decimal rating</div>\r\n      <div class=\"card-block\">\r\n        <p>Custom rating template provided via a variable. Shows fine-grained rating display</p>\r\n\r\n        <ng-template #t let-fill=\"fill\">\r\n          <span *ngIf=\"fill === 100\" class=\"star full\">&hearts;</span>\r\n          <span *ngIf=\"fill === 0\" class=\"star\">&hearts;</span>\r\n          <span *ngIf=\"fill < 100 && fill > 0\" class=\"star\">\r\n            <span class=\"half\" [style.width.%]=\"fill\">&hearts;</span>&hearts;\r\n          </span>\r\n        </ng-template>\r\n\r\n        <ngb-rating [(rate)]=\"decimalCurrentRate\" [starTemplate]=\"t\" [readonly]=\"true\" max=\"5\"></ngb-rating>\r\n        <pre>Rate: <b>{{decimalCurrentRate}}</b></pre>\r\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 1.35\">1.35</button>\r\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"decimalCurrentRate = 4.72\">4.72</button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Form integration</div>\r\n      <div class=\"card-block\">\r\n        <p>NgModel and reactive forms can be used without the 'rate' binding</p>\r\n\r\n        <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"ctrl.invalid\">\r\n          <ngb-rating [formControl]=\"ctrl\"></ngb-rating>\r\n          <div class=\"form-control-feedback\">\r\n            <div *ngIf=\"ctrl.valid\">Thanks!</div>\r\n            <div *ngIf=\"ctrl.errors\">Please rate us</div>\r\n          </div>\r\n        </div>\r\n\r\n        <pre>Model: <b>{{ ctrl.value }}</b></pre>\r\n        <button class=\"btn btn-sm btn-outline-{{ ctrl.disabled ? 'danger' : 'success'}}\" (click)=\"toggle()\">\r\n          {{ ctrl.disabled ? \"control disabled\" : \" control enabled\" }}\r\n        </button>\r\n        <button class=\"btn btn-sm btn-outline-primary\" (click)=\"ctrl.setValue(null)\">Clear</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/rating/rating.component.scss":
/***/ (function(module, exports) {

module.exports = ".star {\n  font-size: 1.5rem;\n  color: #b0c4de; }\n\n.filled {\n  color: #1e90ff; }\n\n.star {\n  position: relative;\n  display: inline-block;\n  font-size: 2rem;\n  color: #d3d3d3; }\n\n.full {\n  color: red; }\n\n.half {\n  position: absolute;\n  display: inline-block;\n  overflow: hidden;\n  color: red; }\n"

/***/ }),

/***/ "./src/app/components/rating/rating.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RatingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var RatingComponent = (function () {
    function RatingComponent() {
        this.currentRate = 8;
        this.selected = 0;
        this.hovered = 0;
        this.readonly = false;
        this.decimalCurrentRate = 3.14;
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"](null, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required);
    }
    RatingComponent.prototype.toggle = function () {
        if (this.ctrl.disabled) {
            this.ctrl.enable();
        }
        else {
            this.ctrl.disable();
        }
    };
    RatingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-rating',
            template: __webpack_require__("./src/app/components/rating/rating.component.html"),
            styles: [__webpack_require__("./src/app/components/rating/rating.component.scss")]
        })
    ], RatingComponent);
    return RatingComponent;
}());



/***/ }),

/***/ "./src/app/components/spinners/spinners.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row demo-spinkit\">\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>01</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader01\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>02</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader02\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>03</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader03\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>04</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader04\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>05</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader05\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>06</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader06\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>07</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader07\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>08</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader08\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>09</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader09\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>10</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader10\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>11</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader11\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-xs-6 col-sm-4 col-md-3\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header no-shadow block\"><span class=\"mr-auto\"></span>12</div>\r\n      <div class=\"card-block\">\r\n        <div class=\"loader12\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/spinners/spinners.component.scss":
/***/ (function(module, exports) {

module.exports = "/* $colors\r\n ------------------------------------------*/\n.loader01 {\n  width: 56px;\n  height: 56px;\n  border: 8px solid #304ffe;\n  border-right-color: transparent;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s linear infinite;\n          animation: loader-rotate 1s linear infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader01::after {\n    content: '';\n    width: 8px;\n    height: 8px;\n    background: #304ffe;\n    border-radius: 50%;\n    position: absolute;\n    top: -1px;\n    left: 33px; }\n@-webkit-keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader02 {\n  width: 56px;\n  height: 56px;\n  border: 8px solid rgba(48, 79, 254, 0.25);\n  border-top-color: #304ffe;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s linear infinite;\n          animation: loader-rotate 1s linear infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader03 {\n  width: 56px;\n  height: 56px;\n  border: 8px solid transparent;\n  border-top-color: #304ffe;\n  border-bottom-color: #304ffe;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s linear infinite;\n          animation: loader-rotate 1s linear infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader04 {\n  width: 56px;\n  height: 56px;\n  border: 2px solid rgba(48, 79, 254, 0.5);\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-rotate 1s ease-in-out infinite;\n          animation: loader-rotate 1s ease-in-out infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader04::after {\n    content: '';\n    width: 10px;\n    height: 10px;\n    border-radius: 50%;\n    background: #304ffe;\n    position: absolute;\n    top: -6px;\n    left: 50%;\n    margin-left: -5px; }\n@keyframes loader-rotate {\n  0% {\n    -webkit-transform: rotate(0);\n            transform: rotate(0); }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg); } }\n.loader05 {\n  width: 56px;\n  height: 56px;\n  border: 4px solid #304ffe;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-scale 1s ease-out infinite;\n          animation: loader-scale 1s ease-out infinite;\n  top: 50%;\n  margin: -28px auto 0; }\n@-webkit-keyframes loader-scale {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n@keyframes loader-scale {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n.loader06 {\n  width: 56px;\n  height: 56px;\n  border: 4px solid transparent;\n  border-radius: 50%;\n  position: relative;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader06::before {\n    content: '';\n    border: 4px solid rgba(48, 79, 254, 0.5);\n    border-radius: 50%;\n    width: 67.2px;\n    height: 67.2px;\n    position: absolute;\n    top: -9.6px;\n    left: -9.6px;\n    -webkit-animation: loader-scale 1s ease-out infinite;\n            animation: loader-scale 1s ease-out infinite;\n    -webkit-animation-delay: 1s;\n            animation-delay: 1s;\n    opacity: 0; }\n.loader06::after {\n    content: '';\n    border: 4px solid #304ffe;\n    border-radius: 50%;\n    width: 56px;\n    height: 56px;\n    position: absolute;\n    top: -4px;\n    left: -4px;\n    -webkit-animation: loader-scale 1s ease-out infinite;\n            animation: loader-scale 1s ease-out infinite;\n    -webkit-animation-delay: 0.5s;\n            animation-delay: 0.5s; }\n@keyframes loader-scale {\n  0% {\n    -webkit-transform: scale(0);\n            transform: scale(0);\n    opacity: 0; }\n  50% {\n    opacity: 1; }\n  100% {\n    -webkit-transform: scale(1);\n            transform: scale(1);\n    opacity: 0; } }\n.loader07 {\n  width: 16px;\n  height: 16px;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader-circles 1s linear infinite;\n          animation: loader-circles 1s linear infinite;\n  top: 50%;\n  margin: -8px auto 0; }\n@-webkit-keyframes loader-circles {\n  0% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; }\n  12.5% {\n    -webkit-box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8);\n            box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8); }\n  25% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6); }\n  37.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4); }\n  50% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3); }\n  62.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1); }\n  87.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05); }\n  100% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; } }\n@keyframes loader-circles {\n  0% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; }\n  12.5% {\n    -webkit-box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8);\n            box-shadow: 0 -27px 0 0 #304ffe, 19px -19px 0 0 rgba(48, 79, 254, 0.05), 27px 0 0 0 rgba(48, 79, 254, 0.1), 19px 19px 0 0 rgba(48, 79, 254, 0.2), 0 27px 0 0 rgba(48, 79, 254, 0.3), -19px 19px 0 0 rgba(48, 79, 254, 0.4), -27px 0 0 0 rgba(48, 79, 254, 0.6), -19px -19px 0 0 rgba(48, 79, 254, 0.8); }\n  25% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.8), 19px -19px 0 0 #304ffe, 27px 0 0 0 rgba(48, 79, 254, 0.05), 19px 19px 0 0 rgba(48, 79, 254, 0.1), 0 27px 0 0 rgba(48, 79, 254, 0.2), -19px 19px 0 0 rgba(48, 79, 254, 0.3), -27px 0 0 0 rgba(48, 79, 254, 0.4), -19px -19px 0 0 rgba(48, 79, 254, 0.6); }\n  37.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.6), 19px -19px 0 0 rgba(48, 79, 254, 0.8), 27px 0 0 0 #304ffe, 19px 19px 0 0 rgba(48, 79, 254, 0.05), 0 27px 0 0 rgba(48, 79, 254, 0.1), -19px 19px 0 0 rgba(48, 79, 254, 0.2), -27px 0 0 0 rgba(48, 79, 254, 0.3), -19px -19px 0 0 rgba(48, 79, 254, 0.4); }\n  50% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.4), 19px -19px 0 0 rgba(48, 79, 254, 0.6), 27px 0 0 0 rgba(48, 79, 254, 0.8), 19px 19px 0 0 #304ffe, 0 27px 0 0 rgba(48, 79, 254, 0.05), -19px 19px 0 0 rgba(48, 79, 254, 0.1), -27px 0 0 0 rgba(48, 79, 254, 0.2), -19px -19px 0 0 rgba(48, 79, 254, 0.3); }\n  62.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.3), 19px -19px 0 0 rgba(48, 79, 254, 0.4), 27px 0 0 0 rgba(48, 79, 254, 0.6), 19px 19px 0 0 rgba(48, 79, 254, 0.8), 0 27px 0 0 #304ffe, -19px 19px 0 0 rgba(48, 79, 254, 0.05), -27px 0 0 0 rgba(48, 79, 254, 0.1), -19px -19px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.2), 19px -19px 0 0 rgba(48, 79, 254, 0.3), 27px 0 0 0 rgba(48, 79, 254, 0.4), 19px 19px 0 0 rgba(48, 79, 254, 0.6), 0 27px 0 0 rgba(48, 79, 254, 0.8), -19px 19px 0 0 #304ffe, -27px 0 0 0 rgba(48, 79, 254, 0.05), -19px -19px 0 0 rgba(48, 79, 254, 0.1); }\n  87.5% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05);\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.1), 19px -19px 0 0 rgba(48, 79, 254, 0.2), 27px 0 0 0 rgba(48, 79, 254, 0.3), 19px 19px 0 0 rgba(48, 79, 254, 0.4), 0 27px 0 0 rgba(48, 79, 254, 0.6), -19px 19px 0 0 rgba(48, 79, 254, 0.8), -27px 0 0 0 #304ffe, -19px -19px 0 0 rgba(48, 79, 254, 0.05); }\n  100% {\n    -webkit-box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe;\n            box-shadow: 0 -27px 0 0 rgba(48, 79, 254, 0.05), 19px -19px 0 0 rgba(48, 79, 254, 0.1), 27px 0 0 0 rgba(48, 79, 254, 0.2), 19px 19px 0 0 rgba(48, 79, 254, 0.3), 0 27px 0 0 rgba(48, 79, 254, 0.4), -19px 19px 0 0 rgba(48, 79, 254, 0.6), -27px 0 0 0 rgba(48, 79, 254, 0.8), -19px -19px 0 0 #304ffe; } }\n.loader08 {\n  width: 20px;\n  height: 20px;\n  position: relative;\n  -webkit-animation: loader08 1s ease infinite;\n          animation: loader08 1s ease infinite;\n  top: 50%;\n  margin: -46px auto 0; }\n@-webkit-keyframes loader08 {\n  0%, 100% {\n    -webkit-box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe;\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe; } }\n@keyframes loader08 {\n  0%, 100% {\n    -webkit-box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 #304ffe, 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 #304ffe, 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 #304ffe, -13px 46px 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe;\n            box-shadow: -13px 20px 0 rgba(48, 79, 254, 0.2), 13px 20px 0 rgba(48, 79, 254, 0.2), 13px 46px 0 rgba(48, 79, 254, 0.2), -13px 46px 0 #304ffe; } }\n.loader09 {\n  width: 10px;\n  height: 48px;\n  background: #304ffe;\n  position: relative;\n  -webkit-animation: loader09 1s ease-in-out infinite;\n          animation: loader09 1s ease-in-out infinite;\n  -webkit-animation-delay: 0.4s;\n          animation-delay: 0.4s;\n  top: 50%;\n  margin: -28px auto 0; }\n.loader09::after, .loader09::before {\n    content: '';\n    position: absolute;\n    width: 10px;\n    height: 48px;\n    background: #304ffe;\n    -webkit-animation: loader09 1s ease-in-out infinite;\n            animation: loader09 1s ease-in-out infinite; }\n.loader09::before {\n    right: 18px;\n    -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s; }\n.loader09::after {\n    left: 18px;\n    -webkit-animation-delay: 0.6s;\n            animation-delay: 0.6s; }\n@-webkit-keyframes loader09 {\n  0%, 100% {\n    -webkit-box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe;\n            box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe; }\n  50% {\n    -webkit-box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe;\n            box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe; } }\n@keyframes loader09 {\n  0%, 100% {\n    -webkit-box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe;\n            box-shadow: 0 0 0 #304ffe, 0 0 0 #304ffe; }\n  50% {\n    -webkit-box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe;\n            box-shadow: 0 -8px 0 #304ffe, 0 8px 0 #304ffe; } }\n.loader10 {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader10 0.9s ease alternate infinite;\n          animation: loader10 0.9s ease alternate infinite;\n  -webkit-animation-delay: 0.36s;\n          animation-delay: 0.36s;\n  top: 50%;\n  margin: -42px auto 0; }\n.loader10::after, .loader10::before {\n    content: '';\n    position: absolute;\n    width: 28px;\n    height: 28px;\n    border-radius: 50%;\n    -webkit-animation: loader10 0.9s ease alternate infinite;\n            animation: loader10 0.9s ease alternate infinite; }\n.loader10::before {\n    left: -40px;\n    -webkit-animation-delay: 0.18s;\n            animation-delay: 0.18s; }\n.loader10::after {\n    right: -40px;\n    -webkit-animation-delay: 0.54s;\n            animation-delay: 0.54s; }\n@-webkit-keyframes loader10 {\n  0% {\n    -webkit-box-shadow: 0 28px 0 -28px #304ffe;\n            box-shadow: 0 28px 0 -28px #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 28px 0 #304ffe;\n            box-shadow: 0 28px 0 #304ffe; } }\n@keyframes loader10 {\n  0% {\n    -webkit-box-shadow: 0 28px 0 -28px #304ffe;\n            box-shadow: 0 28px 0 -28px #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 28px 0 #304ffe;\n            box-shadow: 0 28px 0 #304ffe; } }\n.loader11 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  -webkit-box-shadow: 0 40px 0 #304ffe;\n          box-shadow: 0 40px 0 #304ffe;\n  position: relative;\n  -webkit-animation: loader11 0.8s ease-in-out alternate infinite;\n          animation: loader11 0.8s ease-in-out alternate infinite;\n  -webkit-animation-delay: 0.32s;\n          animation-delay: 0.32s;\n  top: 50%;\n  margin: -50px auto 0; }\n.loader11::after, .loader11::before {\n    content: '';\n    position: absolute;\n    width: 20px;\n    height: 20px;\n    border-radius: 50%;\n    -webkit-box-shadow: 0 40px 0 #304ffe;\n            box-shadow: 0 40px 0 #304ffe;\n    -webkit-animation: loader11 0.8s ease-in-out alternate infinite;\n            animation: loader11 0.8s ease-in-out alternate infinite; }\n.loader11::before {\n    left: -30px;\n    -webkit-animation-delay: 0.48s;\n            animation-delay: 0.48s; }\n.loader11::after {\n    right: -30px;\n    -webkit-animation-delay: 0.16s;\n            animation-delay: 0.16s; }\n@-webkit-keyframes loader11 {\n  0% {\n    -webkit-box-shadow: 0 40px 0 #304ffe;\n            box-shadow: 0 40px 0 #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 20px 0 #304ffe;\n            box-shadow: 0 20px 0 #304ffe; } }\n@keyframes loader11 {\n  0% {\n    -webkit-box-shadow: 0 40px 0 #304ffe;\n            box-shadow: 0 40px 0 #304ffe; }\n  100% {\n    -webkit-box-shadow: 0 20px 0 #304ffe;\n            box-shadow: 0 20px 0 #304ffe; } }\n.loader12 {\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  position: relative;\n  -webkit-animation: loader12 1s linear alternate infinite;\n          animation: loader12 1s linear alternate infinite;\n  top: 50%;\n  margin: -50px auto 0; }\n@-webkit-keyframes loader12 {\n  0% {\n    -webkit-box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  100% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe;\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe; } }\n@keyframes loader12 {\n  0% {\n    -webkit-box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 2px #304ffe, -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  25% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 2px #304ffe, 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  50% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 2px #304ffe, 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  75% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2);\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 2px #304ffe, 60px 40px 0 0 rgba(48, 79, 254, 0.2); }\n  100% {\n    -webkit-box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe;\n            box-shadow: -60px 40px 0 0 rgba(48, 79, 254, 0.2), -30px 40px 0 0 rgba(48, 79, 254, 0.2), 0 40px 0 0 rgba(48, 79, 254, 0.2), 30px 40px 0 0 rgba(48, 79, 254, 0.2), 60px 40px 0 2px #304ffe; } }\n.card {\n  min-height: 160px; }\n"

/***/ }),

/***/ "./src/app/components/spinners/spinners.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SpinnersComponent = (function () {
    function SpinnersComponent() {
    }
    SpinnersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-spinners',
            template: __webpack_require__("./src/app/components/spinners/spinners.component.html"),
            styles: [__webpack_require__("./src/app/components/spinners/spinners.component.scss")]
        })
    ], SpinnersComponent);
    return SpinnersComponent;
}());



/***/ }),

/***/ "./src/app/components/tabs/tabs.component.html":
/***/ (function(module, exports) {

module.exports = "<p class=\"ff-headers text-uppercase mb-3 fw-600\">Tabset</p>\r\n<div class=\"mb-5\">\r\n  <ngb-tabset>\r\n    <ngb-tab title=\"Simple\">\r\n      <ng-template ngbTabContent>Simple content</ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n      <ng-template ngbTabContent>Fancy title content</ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n      <ng-template ngbTabContent>Disabled content</ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n\r\n<p class=\"ff-headers text-uppercase mb-3 fw-600\">Pills</p>\r\n<div class=\"mb-5\">\r\n  <ngb-tabset type=\"pills\">\r\n    <ngb-tab title=\"Simple\">\r\n      <ng-template ngbTabContent>Simple content</ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab>\r\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n      <ng-template ngbTabContent>Fancy title content</ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"Disabled\" [disabled]=\"true\">\r\n      <ng-template ngbTabContent>Disabled content</ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n\r\n<p class=\"ff-headers text-uppercase mb-3 fw-600\">Select an active tab by id</p>\r\n<div class=\"mb-5\">\r\n  <ngb-tabset #t=\"ngbTabset\">\r\n    <ngb-tab title=\"Simple\" id=\"foo\">\r\n      <ng-template ngbTabContent>Simple content</ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"bar\">\r\n      <ng-template ngbTabTitle><b>Fancy</b> title</ng-template>\r\n      <ng-template ngbTabContent>Fancy title content</ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n  <p>\r\n    <button class=\"btn btn-outline-primary\" (click)=\"t.select('bar')\">Selected tab with \"bar\" id</button>\r\n  </p>\r\n</div>\r\n\r\n<p class=\"ff-headers text-uppercase mb-3 fw-600\">Prevent tab change</p>\r\n<div class=\"mb-5\">\r\n  <ngb-tabset (tabChange)=\"beforeChange($event)\">\r\n    <ngb-tab title=\"Simple\" id=\"foo\">\r\n      <ng-template ngbTabContent>Simple content</ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab id=\"bar\" title=\"I can't be selected...\">\r\n      <ng-template ngbTabContent>I can't be selected content</ng-template>\r\n    </ngb-tab>\r\n    <ngb-tab title=\"But I can!\" >\r\n      <ng-template ngbTabContent>But I can content</ng-template>\r\n    </ngb-tab>\r\n  </ngb-tabset>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tabs/tabs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.beforeChange = function ($event) {
        if ($event.nextId === 'bar') {
            $event.preventDefault();
        }
    };
    ;
    TabsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tabs',
            template: __webpack_require__("./src/app/components/tabs/tabs.component.html"),
            styles: [__webpack_require__("./src/app/components/tabs/tabs.component.scss")]
        })
    ], TabsComponent);
    return TabsComponent;
}());



/***/ }),

/***/ "./src/app/components/timepicker/timepicker.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-4\"> \r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Basic Timepicker</div>\r\n      <div class=\"card-block\">\r\n        <ngb-timepicker [(ngModel)]=\"time\"></ngb-timepicker>\r\n        <button class=\"btn mb-3 mt-3\" style=\"opacity: 0;\">&nbsp;</button>\r\n        <pre>Selected time: {{time | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4\"> \r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Meridian</div>\r\n      <div class=\"card-block\">\r\n        <ngb-timepicker [(ngModel)]=\"time\" [meridian]=\"meridian\"></ngb-timepicker>\r\n        <button class=\"btn btn-outline-{{meridian ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleMeridian()\">\r\n            Meridian - {{meridian ? \"ON\" : \"OFF\"}}\r\n        </button>\r\n        <pre>Selected time: {{time | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4\"> \r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Seconds</div>\r\n      <div class=\"card-block\">\r\n        <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"seconds\"></ngb-timepicker>\r\n        <button class=\"btn btn-outline-{{seconds ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSeconds()\">\r\n            Seconds - {{seconds ? \"ON\" : \"OFF\"}}\r\n        </button>\r\n        <pre>Selected time: {{time | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-4\"> \r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Spinners</div>\r\n      <div class=\"card-block\">\r\n        <ngb-timepicker [(ngModel)]=\"time\" [spinners]=\"spinners\"></ngb-timepicker>\r\n\r\n        <button class=\"m-t-1 btn btn-outline-{{spinners ? 'success' : 'danger'}} mb-3 mt-3\" (click)=\"toggleSpinners()\">\r\n            Spinners - {{spinners ? \"ON\" : \"OFF\"}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Custom steps</div>\r\n      <div class=\"card-block\">\r\n        <ngb-timepicker [(ngModel)]=\"time\" [seconds]=\"true\" \r\n        [hourStep]=\"hourStep\" [minuteStep]=\"minuteStep\" [secondStep]=\"secondStep\"></ngb-timepicker>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-3\">\r\n                <label for=\"changeHourStep\">Hour Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"hourStep\" />\r\n            </div>    \r\n            <div class=\"col-sm-3\">\r\n                <label for=\"changeMinuteStep\">Minute Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"minuteStep\" />\r\n            </div>\r\n            <div class=\"col-sm-3\">\r\n                <label for=\"changeSecondStep\">Second Step</label>\r\n                <input type=\"number\" class=\"form-control form-control-sm\" [(ngModel)]=\"secondStep\" />\r\n            </div>\r\n        </div>\r\n        <pre>Selected time: {{time | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Custom validation</div>\r\n      <div class=\"card-block\">\r\n        <p>Illustrates custom validation, you have to select time between 12:00 and 13:59</p>\r\n\r\n        <div class=\"form-group\" [class.has-success]=\"ctrl.valid\" [class.has-danger]=\"!ctrl.valid\">\r\n          <ngb-timepicker [(ngModel)]=\"time\" [formControl]=\"ctrl\" required></ngb-timepicker>\r\n          <div class=\"form-control-feedback\">\r\n            <div *ngIf=\"ctrl.valid\">Great choice</div>\r\n            <div *ngIf=\"ctrl.errors && ctrl.errors['required']\">Select some time during lunchtime</div>\r\n            <div *ngIf=\"ctrl.errors && ctrl.errors['tooLate']\">Oh no, it's way too late</div>\r\n            <div *ngIf=\"ctrl.errors && ctrl.errors['tooEarly']\">It's a bit too early</div>\r\n          </div>\r\n        </div>\r\n\r\n        <pre>Selected time: {{time | json}}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/timepicker/timepicker.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/timepicker/timepicker.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimepickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var TimepickerComponent = (function () {
    function TimepickerComponent() {
        this.meridian = true;
        this.time = { hour: 13, minute: 30, second: 30 };
        this.seconds = true;
        this.spinners = true;
        this.hourStep = 1;
        this.minuteStep = 15;
        this.secondStep = 30;
        this.ctrl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', function (control) {
            var value = control.value;
            if (!value) {
                return null;
            }
            if (value.hour < 12) {
                return { tooEarly: true };
            }
            if (value.hour > 13) {
                return { tooLate: true };
            }
            return null;
        });
    }
    TimepickerComponent.prototype.toggleMeridian = function () {
        this.meridian = !this.meridian;
    };
    TimepickerComponent.prototype.toggleSeconds = function () {
        this.seconds = !this.seconds;
    };
    TimepickerComponent.prototype.toggleSpinners = function () {
        this.spinners = !this.spinners;
    };
    TimepickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-timepicker',
            template: __webpack_require__("./src/app/components/timepicker/timepicker.component.html"),
            styles: [__webpack_require__("./src/app/components/timepicker/timepicker.component.scss")]
        })
    ], TimepickerComponent);
    return TimepickerComponent;
}());



/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Quick and easy tooltips</div>\r\n      <div class=\"card-block\">\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"top\" ngbTooltip=\"Tooltip on top\">\r\n          Tooltip on top\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"right\" ngbTooltip=\"Tooltip on right\">\r\n          Tooltip on right\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"bottom\" ngbTooltip=\"Tooltip on bottom\">\r\n          Tooltip on bottom\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary mr-1 mb-1\" placement=\"left\" ngbTooltip=\"Tooltip on left\">\r\n          Tooltip on left\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">HTML and bindings in tooltips</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          Tooltips can contain any arbitrary HTML, Angular bindings and even directives!\r\n          Simply enclose desired content in a <code>&lt;template&gt;</code> element.\r\n        </p>\r\n\r\n        <ng-template #tipContent>Hello, <b>{{name}}</b>!</ng-template>\r\n        <button type=\"button\" class=\"btn btn-secondary\" [ngbTooltip]=\"tipContent\">\r\n          I've got markup and bindings in my tooltip!\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"card\">\r\n  <div class=\"card-header\">Custom and manual triggers</div>\r\n  <div class=\"card-block\">\r\n    <p>\r\n      You can easily override open and close triggers by specifying event names (separated by <code>:</code>) in the <code>triggers</code> property.\r\n    </p>\r\n\r\n    <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"You see, I show up on click!\" triggers=\"click:blur\">\r\n      Click me!\r\n    </button>\r\n\r\n    <p class=\"pt-3\">\r\n      Alternatively you can take full manual control over tooltip opening / closing events.\r\n    </p>\r\n\r\n    <button type=\"button\" class=\"btn btn-secondary\" ngbTooltip=\"What a great tip!\" triggers=\"manual\" #t=\"ngbTooltip\" (click)=\"t.open()\">\r\n      Click me to open a tooltip\r\n    </button>\r\n    <button type=\"button\" class=\"btn btn-secondary\" (click)=\"t.close()\">\r\n      Click me to close a tooltip\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Context and manual triggers</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          You can optionally pass in a context when manually triggering a popover.\r\n        </p>\r\n\r\n        <ng-template #tipContent let-greeting=\"greeting\">{{greeting}}, <b>{{name}}</b>!</ng-template>\r\n        <p>\r\n          How would you like to greet <strong [ngbTooltip]=\"tipContent\" #t=\"ngbTooltip\" triggers=\"manual\">me</strong>?\r\n        </p>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Bonjour' })\">\r\n          French\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Gutentag' })\">\r\n          German\r\n        </button>\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"changeGreeting({ greeting: 'Hello' })\">\r\n          English\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Modal</div>\r\n      <div class=\"card-block\">\r\n        <p>\r\n          Set the <code>container</code> property to \"body\" to have the tooltip be appended to the body instead of the triggering element's parent. This option is useful if the element triggering the tooltip is inside an element that clips its contents (i.e. <code>overflow: hidden</code>).\r\n        </p>\r\n\r\n        <div class='row'>\r\n          <div class='card' style=\"padding: 50px 0; text-align: center; overflow:hidden\">\r\n            <button type=\"button\" class=\"btn btn-secondary\"\r\n                    ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\">\r\n              Default tooltip\r\n            </button>\r\n            <button type=\"button\" class=\"btn btn-secondary\"\r\n                    ngbTooltip=\"Vivamus sagittis lacus vel augue laoreet rutrum faucibus.\" container=\"body\">\r\n              Tooltip appended to body\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/tooltip/tooltip.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TooltipComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TooltipComponent = (function () {
    function TooltipComponent() {
        this.greeting = {};
        this.name = 'World';
    }
    TooltipComponent.prototype.changeGreeting = function (greeting) {
        var isOpen = this.tooltip.isOpen();
        this.tooltip.close();
        if (greeting !== this.greeting || !isOpen) {
            this.greeting = greeting;
            this.tooltip.open(greeting);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('t'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__ng_bootstrap_ng_bootstrap__["k" /* NgbTooltip */])
    ], TooltipComponent.prototype, "tooltip", void 0);
    TooltipComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-tooltip',
            template: __webpack_require__("./src/app/components/tooltip/tooltip.component.html"),
            styles: [__webpack_require__("./src/app/components/tooltip/tooltip.component.scss")]
        })
    ], TooltipComponent);
    return TooltipComponent;
}());



/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Simple Typeahead</div>\r\n      <div class=\"card-block\">\r\n        A typeahead example that gets values from a static <code>string[]</code>\r\n        <ul>\r\n          <li><code>debounceTime</code> operator</li>\r\n          <li>kicks in only if 2+ characters typed</li>\r\n          <li>limits to 10 results</li>\r\n        </ul>\r\n\r\n        <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" />\r\n\r\n        <pre>Model: {{ model | json }}</pre>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Formatted results</div>\r\n      <div class=\"card-block\">\r\n        <p>A typeahead example that uses a formatter function for string results</p>\r\n\r\n        <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"search\" [resultFormatter]=\"formatter\" />\r\n\r\n        <pre>Model: {{ model | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Wikipedia search</div>\r\n      <div class=\"card-block\">\r\n        A typeahead example that gets values from the <code>WikipediaService</code>\r\n        <ul>\r\n          <li>remote data retrieval</li>\r\n          <li><code>debounceTime</code> operator</li>\r\n          <li><code>do</code> operator</li>\r\n          <li><code>distinctUntilChanged</code> operator</li>\r\n          <li><code>switchMap</code> operator</li>\r\n          <li><code>catch</code> operator to display an error message in case of connectivity issue</li>\r\n        </ul>\r\n\r\n        <div class=\"form-group\" [class.has-danger]=\"searchFailed\">\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"model\" [ngbTypeahead]=\"searchWiki\" placeholder=\"Wikipedia search\" />\r\n          <span *ngIf=\"searching\">searching...</span>\r\n          <div class=\"form-control-feedback\" *ngIf=\"searchFailed\">Sorry, suggestions could not be loaded.</div>\r\n        </div>\r\n\r\n        <pre>Model: {{ model | json }}</pre>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"card\">\r\n      <div class=\"card-header\">Template for results</div>\r\n      <div class=\"card-block\">\r\n        <p>A typeahead example that uses custom template for results display and uses object as a model</p>\r\n\r\n        <ng-template #rt let-r=\"result\" let-t=\"term\">\r\n          <img [src]=\"'https://upload.wikimedia.org/wikipedia/commons/thumb/' + r.flag\" width=\"16\">\r\n          {{ r.name}}\r\n        </ng-template>\r\n\r\n        <input type=\"text\" class=\"form-control mb-3\" [(ngModel)]=\"model\" [ngbTypeahead]=\"searchFlags\" [resultTemplate]=\"rt\" [inputFormatter]=\"formatter\" />\r\n\r\n        <pre>Model: {{ model | json }}</pre>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">\r\n  </div>\r\n\r\n  <div class=\"col-lg-6\">  \r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/typeahead/typeahead.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export WikipediaService */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TypeaheadComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_switchMap__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/switchMap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var states = ['Alabama', 'Alaska', 'American Samoa', 'Arizona', 'Arkansas', 'California', 'Colorado',
    'Connecticut', 'Delaware', 'District Of Columbia', 'Federated States Of Micronesia', 'Florida', 'Georgia',
    'Guam', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine',
    'Marshall Islands', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana',
    'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota',
    'Northern Mariana Islands', 'Ohio', 'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico', 'Rhode Island',
    'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virgin Islands', 'Virginia',
    'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];
var statesWithFlags = [
    { 'name': 'Alabama', 'flag': '5/5c/Flag_of_Alabama.svg/45px-Flag_of_Alabama.svg.png' },
    { 'name': 'Alaska', 'flag': 'e/e6/Flag_of_Alaska.svg/43px-Flag_of_Alaska.svg.png' },
    { 'name': 'Arizona', 'flag': '9/9d/Flag_of_Arizona.svg/45px-Flag_of_Arizona.svg.png' },
    { 'name': 'Arkansas', 'flag': '9/9d/Flag_of_Arkansas.svg/45px-Flag_of_Arkansas.svg.png' },
    { 'name': 'California', 'flag': '0/01/Flag_of_California.svg/45px-Flag_of_California.svg.png' },
    { 'name': 'Colorado', 'flag': '4/46/Flag_of_Colorado.svg/45px-Flag_of_Colorado.svg.png' },
    { 'name': 'Connecticut', 'flag': '9/96/Flag_of_Connecticut.svg/39px-Flag_of_Connecticut.svg.png' },
    { 'name': 'Delaware', 'flag': 'c/c6/Flag_of_Delaware.svg/45px-Flag_of_Delaware.svg.png' },
    { 'name': 'Florida', 'flag': 'f/f7/Flag_of_Florida.svg/45px-Flag_of_Florida.svg.png' },
    { 'name': 'Georgia', 'flag': '5/54/Flag_of_Georgia_%28U.S._state%29.svg/46px-Flag_of_Georgia_%28U.S._state%29.svg.png' },
    { 'name': 'Hawaii', 'flag': 'e/ef/Flag_of_Hawaii.svg/46px-Flag_of_Hawaii.svg.png' },
    { 'name': 'Idaho', 'flag': 'a/a4/Flag_of_Idaho.svg/38px-Flag_of_Idaho.svg.png' },
    { 'name': 'Illinois', 'flag': '0/01/Flag_of_Illinois.svg/46px-Flag_of_Illinois.svg.png' },
    { 'name': 'Indiana', 'flag': 'a/ac/Flag_of_Indiana.svg/45px-Flag_of_Indiana.svg.png' },
    { 'name': 'Iowa', 'flag': 'a/aa/Flag_of_Iowa.svg/44px-Flag_of_Iowa.svg.png' },
    { 'name': 'Kansas', 'flag': 'd/da/Flag_of_Kansas.svg/46px-Flag_of_Kansas.svg.png' },
    { 'name': 'Kentucky', 'flag': '8/8d/Flag_of_Kentucky.svg/46px-Flag_of_Kentucky.svg.png' },
    { 'name': 'Louisiana', 'flag': 'e/e0/Flag_of_Louisiana.svg/46px-Flag_of_Louisiana.svg.png' },
    { 'name': 'Maine', 'flag': '3/35/Flag_of_Maine.svg/45px-Flag_of_Maine.svg.png' },
    { 'name': 'Maryland', 'flag': 'a/a0/Flag_of_Maryland.svg/45px-Flag_of_Maryland.svg.png' },
    { 'name': 'Massachusetts', 'flag': 'f/f2/Flag_of_Massachusetts.svg/46px-Flag_of_Massachusetts.svg.png' },
    { 'name': 'Michigan', 'flag': 'b/b5/Flag_of_Michigan.svg/45px-Flag_of_Michigan.svg.png' },
    { 'name': 'Minnesota', 'flag': 'b/b9/Flag_of_Minnesota.svg/46px-Flag_of_Minnesota.svg.png' },
    { 'name': 'Mississippi', 'flag': '4/42/Flag_of_Mississippi.svg/45px-Flag_of_Mississippi.svg.png' },
    { 'name': 'Missouri', 'flag': '5/5a/Flag_of_Missouri.svg/46px-Flag_of_Missouri.svg.png' },
    { 'name': 'Montana', 'flag': 'c/cb/Flag_of_Montana.svg/45px-Flag_of_Montana.svg.png' },
    { 'name': 'Nebraska', 'flag': '4/4d/Flag_of_Nebraska.svg/46px-Flag_of_Nebraska.svg.png' },
    { 'name': 'Nevada', 'flag': 'f/f1/Flag_of_Nevada.svg/45px-Flag_of_Nevada.svg.png' },
    { 'name': 'New Hampshire', 'flag': '2/28/Flag_of_New_Hampshire.svg/45px-Flag_of_New_Hampshire.svg.png' },
    { 'name': 'New Jersey', 'flag': '9/92/Flag_of_New_Jersey.svg/45px-Flag_of_New_Jersey.svg.png' },
    { 'name': 'New Mexico', 'flag': 'c/c3/Flag_of_New_Mexico.svg/45px-Flag_of_New_Mexico.svg.png' },
    { 'name': 'New York', 'flag': '1/1a/Flag_of_New_York.svg/46px-Flag_of_New_York.svg.png' },
    { 'name': 'North Carolina', 'flag': 'b/bb/Flag_of_North_Carolina.svg/45px-Flag_of_North_Carolina.svg.png' },
    { 'name': 'North Dakota', 'flag': 'e/ee/Flag_of_North_Dakota.svg/38px-Flag_of_North_Dakota.svg.png' },
    { 'name': 'Ohio', 'flag': '4/4c/Flag_of_Ohio.svg/46px-Flag_of_Ohio.svg.png' },
    { 'name': 'Oklahoma', 'flag': '6/6e/Flag_of_Oklahoma.svg/45px-Flag_of_Oklahoma.svg.png' },
    { 'name': 'Oregon', 'flag': 'b/b9/Flag_of_Oregon.svg/46px-Flag_of_Oregon.svg.png' },
    { 'name': 'Pennsylvania', 'flag': 'f/f7/Flag_of_Pennsylvania.svg/45px-Flag_of_Pennsylvania.svg.png' },
    { 'name': 'Rhode Island', 'flag': 'f/f3/Flag_of_Rhode_Island.svg/32px-Flag_of_Rhode_Island.svg.png' },
    { 'name': 'South Carolina', 'flag': '6/69/Flag_of_South_Carolina.svg/45px-Flag_of_South_Carolina.svg.png' },
    { 'name': 'South Dakota', 'flag': '1/1a/Flag_of_South_Dakota.svg/46px-Flag_of_South_Dakota.svg.png' },
    { 'name': 'Tennessee', 'flag': '9/9e/Flag_of_Tennessee.svg/46px-Flag_of_Tennessee.svg.png' },
    { 'name': 'Texas', 'flag': 'f/f7/Flag_of_Texas.svg/45px-Flag_of_Texas.svg.png' },
    { 'name': 'Utah', 'flag': 'f/f6/Flag_of_Utah.svg/45px-Flag_of_Utah.svg.png' },
    { 'name': 'Vermont', 'flag': '4/49/Flag_of_Vermont.svg/46px-Flag_of_Vermont.svg.png' },
    { 'name': 'Virginia', 'flag': '4/47/Flag_of_Virginia.svg/44px-Flag_of_Virginia.svg.png' },
    { 'name': 'Washington', 'flag': '5/54/Flag_of_Washington.svg/46px-Flag_of_Washington.svg.png' },
    { 'name': 'West Virginia', 'flag': '2/22/Flag_of_West_Virginia.svg/46px-Flag_of_West_Virginia.svg.png' },
    { 'name': 'Wisconsin', 'flag': '2/22/Flag_of_Wisconsin.svg/45px-Flag_of_Wisconsin.svg.png' },
    { 'name': 'Wyoming', 'flag': 'b/bc/Flag_of_Wyoming.svg/43px-Flag_of_Wyoming.svg.png' }
];
var WikipediaService = (function () {
    function WikipediaService(_jsonp) {
        this._jsonp = _jsonp;
    }
    WikipediaService.prototype.search = function (term) {
        if (term === '') {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
        }
        var wikiUrl = 'https://en.wikipedia.org/w/api.php';
        var params = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["h" /* URLSearchParams */]();
        params.set('search', term);
        params.set('action', 'opensearch');
        params.set('format', 'json');
        params.set('callback', 'JSONP_CALLBACK');
        return this._jsonp
            .get(wikiUrl, { search: params })
            .map(function (response) { return response.json()[1]; });
    };
    WikipediaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Jsonp */]])
    ], WikipediaService);
    return WikipediaService;
}());

var TypeaheadComponent = (function () {
    function TypeaheadComponent(_service) {
        var _this = this;
        this._service = _service;
        this.searching = false;
        this.searchFailed = false;
        this.search = function (text$) {
            return text$
                .debounceTime(200)
                .distinctUntilChanged()
                .map(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return new RegExp(term, 'gi').test(v); }).splice(0, 10); });
        };
        this.searchWiki = function (text$) {
            return text$
                .debounceTime(300)
                .distinctUntilChanged()
                .do(function () { return _this.searching = true; })
                .switchMap(function (term) {
                return _this._service.search(term)
                    .do(function () { return _this.searchFailed = false; })
                    .catch(function () {
                    _this.searchFailed = true;
                    return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of([]);
                });
            })
                .do(function () { return _this.searching = false; });
        };
        this.searchFlags = function (text$) {
            return text$
                .debounceTime(200)
                .map(function (term) { return term === '' ? []
                : statesWithFlags.filter(function (v) { return new RegExp(term, 'gi').test(v.name); }).slice(0, 10); });
        };
        this.formatter = function (x) { return x.name; };
    }
    TypeaheadComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-typeahead',
            template: __webpack_require__("./src/app/components/typeahead/typeahead.component.html"),
            styles: [__webpack_require__("./src/app/components/typeahead/typeahead.component.scss")],
            providers: [WikipediaService]
        }),
        __metadata("design:paramtypes", [WikipediaService])
    ], TypeaheadComponent);
    return TypeaheadComponent;
}());



/***/ })

});
//# sourceMappingURL=components.module.chunk.js.map