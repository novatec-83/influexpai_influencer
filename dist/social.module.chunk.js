webpackJsonp(["social.module"],{

/***/ "./src/app/social/social.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"card\">\r\n        <div class=\"card-block\">\r\n          <div class=\"row\">\r\n            <div class=\"col\">\r\n              <h4 class=\"ma-0\"><span class=\"fw-400\">Gerald</span> <b>Morris</b></h4>\r\n              <small>gerald@morris.com</small>\r\n              <p class=\"mb-2\">UX Developer</p>\r\n              <a href=\"javascript:;\" class=\"mt-1 d-block\">email@contact.com</a>\r\n              <a href=\"javascript:;\" class=\"mt-1 d-block\">www.example.com</a>\r\n              <a href=\"javascript:;\" class=\"mt-1 d-block\">+1234567890</a>\r\n            </div>\r\n            <div class=\"col\">\r\n              <figure>\r\n                <div class=\"text-center\">\r\n                  <div class=\"avatar-status bg-red\">\r\n                    <img src=\"assets/images/avatar.jpg\" alt=\"\" class=\"rounded-circle\">\r\n                  </div>\r\n                  <div class=\"mt-1\">Account Usage</div>\r\n                </div>\r\n                <div class=\"m-1\">\r\n                  <ngb-progressbar type=\"success\" [value]=\"25\"></ngb-progressbar>\r\n                </div>\r\n                <div class=\"text-center\"><small>234Gb of 879Gb</small></div>\r\n              </figure>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <div class=\"row text-center\">\r\n            <div class=\"col\">\r\n              <h2 class=\"mt-0\"><b>23,8K</b></h2>\r\n              <small>Followers</small>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h2 class=\"mt-0\"><b>569</b></h2>\r\n              <small>Following</small>\r\n            </div>\r\n            <div class=\"col\">\r\n              <h2 class=\"mt-0\"><b>67</b></h2>\r\n              <small>Posts</small>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-block\">\r\n          <p class=\"ff-headers text-uppercase mb-3\"><strong>About Me</strong></p>\r\n          <p>Maecenas sed diam eget risus varius blandit sit amet non magna. Curabitur blandit tempus porttitor. Vestibulum id ligula porta felis euismod semper.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n      <div class=\"card\">\r\n        <ngb-tabset class=\"card-tab\">\r\n          <ngb-tab title=\"Activity\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"activity-stream\">\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <img class=\"card-avatar\" src=\"assets/images/face1.jpg\">\r\n                    <div class=\"card-header-text\">\r\n                      <div class=\"card-title\">Received a call from Joel</div>\r\n                      <div class=\"card-subtitle\">Header subtitle</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <img class=\"card-avatar\" src=\"assets/images/avatar.jpg\">\r\n                    <div class=\"card-header-text\">\r\n                      <div class=\"card-title\">Header title</div>\r\n                      <div class=\"card-subtitle\">Header subtitle</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-block\">\r\n                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\r\n                    <a href=\"javascript:;\" class=\"mr-1\">Like</a>\r\n                    <a href=\"javascript:;\">Comment</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <img class=\"card-avatar\" src=\"assets/images/face2.jpg\">\r\n                    <div class=\"card-header-text\">\r\n                      <div class=\"card-title\">Header title</div>\r\n                      <div class=\"card-subtitle\">Added a photo</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-block\">\r\n                    <img src=\"assets/images/unsplash/20.jpg\" style=\"width: 300px\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <img class=\"card-avatar\" src=\"assets/images/face3.jpg\">\r\n                    <div class=\"card-header-text\">\r\n                      <div class=\"card-title\">Header title</div>\r\n                      <div class=\"card-subtitle\">Header subtitle</div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"card-block\">\r\n                    <p>Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Donec id elit non mi porta gravida at eget metus. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                  <div class=\"card-header\">\r\n                    <img class=\"card-avatar\" src=\"assets/images/face4.jpg\">\r\n                    <div class=\"card-header-text\">\r\n                      <div class=\"card-title\">Uploaded new file</div>\r\n                      <div class=\"card-subtitle\">Header subtitle</div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab>\r\n            <ng-template ngbTabTitle>Bio</ng-template>\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card\">\r\n                <div class=\"card-block\">\r\n                  <h6 class=\"text-uppercase mt-0 mb-3\">Basic Information</h6>\r\n                  \r\n                  <div class=\"row mb-2\">\r\n                    <div class=\"col\">\r\n                      <div class=\"d-flex justify-content-start\">   \r\n                        <span class=\"mr-auto\">Mobile</span>\r\n                        <strong>+20 0593 4095</strong>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">          \r\n                      <div class=\"d-flex justify-content-start\">\r\n                        <span class=\"mr-auto\">Extension</span>\r\n                        <strong>94</strong>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row mb-2\">\r\n                    <div class=\"col\">       \r\n                      <div class=\"d-flex justify-content-start\">\r\n                        <span class=\"mr-auto\">Birthday</span>\r\n                        <strong>30.09.67</strong>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">          \r\n                      <div class=\"d-flex justify-content-start\">\r\n                        <span class=\"mr-auto\">Country</span>\r\n                        <strong>South Africa</strong>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row mb-2\">\r\n                    <div class=\"col\">          \r\n                      <div class=\"d-flex justify-content-start\">\r\n                        <span class=\"mr-auto\">Occupation</span>\r\n                        <strong>Assistant</strong>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">          \r\n                      <div class=\"d-flex justify-content-start\">\r\n                        <span class=\"mr-auto\">Mobile</span>\r\n                        <strong>+23908924</strong>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row mb-2\">\r\n                    <div class=\"col\">          \r\n                      <div class=\"d-flex justify-content-start\">\r\n                        <span class=\"mr-auto\">Twitter</span>\r\n                        <strong>@mrperkins</strong>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col\">          \r\n                      <div class=\"d-flex justify-content-start\">\r\n                        <span class=\"mr-auto\">Facebook</span>\r\n                        <strong>mrperkins</strong>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n          <ngb-tab title=\"Media\">\r\n            <ng-template ngbTabContent>\r\n              <div class=\"card card-block mb-0 pb-0\">\r\n                <div class=\"row\">\r\n                  <div class=\"media-tile media-tile-footer col-lg-3 col-sm-6\" *ngFor=\"let id of images\">\r\n                    <figure>\r\n                      <img src=\"assets/images/unsplash/{{id}}.jpg\" alt=\"Card image cap\" class=\"img-fluid\" />\r\n                      <figcaption>\r\n                        <h6 class=\"media-title fw-300\">{{ id }}</h6>\r\n                        <small class=\"media-subtitle\">Tile image {{ id }}</small>\r\n                      </figcaption>     \r\n                    </figure>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-template>\r\n          </ngb-tab>\r\n        </ngb-tabset>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/social/social.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/social/social.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialComponent; });
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

var SocialComponent = (function () {
    function SocialComponent() {
        this.images = [];
        this.num = 1;
        for (this.num; this.num <= 18; this.num += 1) {
            this.images.push(this.num);
        }
    }
    SocialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-social',
            template: __webpack_require__("./src/app/social/social.component.html"),
            styles: [__webpack_require__("./src/app/social/social.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SocialComponent);
    return SocialComponent;
}());



/***/ }),

/***/ "./src/app/social/social.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialModule", function() { return SocialModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__social_component__ = __webpack_require__("./src/app/social/social.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__social_routing__ = __webpack_require__("./src/app/social/social.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var SocialModule = (function () {
    function SocialModule() {
    }
    SocialModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__social_routing__["a" /* SocialRoutes */]), __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["i" /* NgbProgressbarModule */], __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["j" /* NgbTabsetModule */]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__social_component__["a" /* SocialComponent */]]
        })
    ], SocialModule);
    return SocialModule;
}());



/***/ }),

/***/ "./src/app/social/social.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__social_component__ = __webpack_require__("./src/app/social/social.component.ts");

var SocialRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__social_component__["a" /* SocialComponent */],
        data: {
            heading: 'Social'
        }
    }];


/***/ })

});
//# sourceMappingURL=social.module.chunk.js.map