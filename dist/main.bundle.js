webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication.module",
		"common"
	],
	"./cards/cards.module": [
		"./src/app/cards/cards.module.ts",
		"common",
		"cards.module"
	],
	"./charts/charts.module": [
		"./src/app/charts/charts.module.ts",
		"charts.module"
	],
	"./components/components.module": [
		"./src/app/components/components.module.ts",
		"components.module"
	],
	"./connect-blogger/connect-blogger.module": [
		"./src/app/connect-blogger/connect-blogger.module.ts",
		"connect-blogger.module"
	],
	"./connect-facebook/connect-facebook.module": [
		"./src/app/connect-facebook/connect-facebook.module.ts",
		"common",
		"connect-facebook.module"
	],
	"./connect-instagram/connect-instagram.module": [
		"./src/app/connect-instagram/connect-instagram.module.ts",
		"connect-instagram.module"
	],
	"./connect-linkedin/connect-linkedin.module": [
		"./src/app/connect-linkedin/connect-linkedin.module.ts",
		"common",
		"connect-linkedin.module"
	],
	"./connect-pinterest/connect-pinterest.module": [
		"./src/app/connect-pinterest/connect-pinterest.module.ts",
		"connect-pinterest.module"
	],
	"./connect-twitter/connect-twitter.module": [
		"./src/app/connect-twitter/connect-twitter.module.ts",
		"common",
		"connect-twitter.module"
	],
	"./connect-youtube/connect-youtube.module": [
		"./src/app/connect-youtube/connect-youtube.module.ts",
		"common",
		"connect-youtube.module"
	],
	"./create-showcase/create-showcase.module": [
		"./src/app/create-showcase/create-showcase.module.ts",
		"create-showcase.module"
	],
	"./datatable/datatable.module": [
		"./src/app/datatable/datatable.module.ts",
		"datatable.module"
	],
	"./docs/docs.module": [
		"./src/app/docs/docs.module.ts",
		"docs.module"
	],
	"./error/error.module": [
		"./src/app/error/error.module.ts",
		"error.module"
	],
	"./fullcalendar/fullcalendar.module": [
		"./src/app/fullcalendar/fullcalendar.module.ts",
		"fullcalendar.module"
	],
	"./icons/icons.module": [
		"./src/app/icons/icons.module.ts",
		"icons.module"
	],
	"./influencers-profile/influencers-profile.module": [
		"./src/app/influencers-profile/influencers-profile.module.ts",
		"influencers-profile.module"
	],
	"./landing/landing.module": [
		"./src/app/landing/landing.module.ts",
		"landing.module"
	],
	"./manage/manage.module": [
		"./src/app/manage/manage.module.ts",
		"manage.module"
	],
	"./media/media.module": [
		"./src/app/media/media.module.ts",
		"media.module"
	],
	"./pages/pages.module": [
		"./src/app/pages/pages.module.ts",
		"pages.module"
	],
	"./post-signup/post-signup.module": [
		"./src/app/post-signup/post-signup.module.ts",
		"post-signup.module"
	],
	"./settings/settings.module": [
		"./src/app/settings/settings.module.ts",
		"settings.module"
	],
	"./social/social.module": [
		"./src/app/social/social.module.ts",
		"social.module"
	],
	"./tables/tables.module": [
		"./src/app/tables/tables.module.ts",
		"tables.module"
	],
	"./taskboard/taskboard.module": [
		"./src/app/taskboard/taskboard.module.ts",
		"common",
		"taskboard.module"
	],
	"./widgets/widgets.module": [
		"./src/app/widgets/widgets.module.ts",
		"widgets.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Agencies/Agencies.component.css":
/***/ (function(module, exports) {

module.exports = ".container-fluid {\r\n    padding-left: 0!important;\r\n    padding-right: 0!important\r\n}\r\n\r\n.nav-tabs {\r\n    border-bottom: none!important;\r\n    margin: 20px 0;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n\r\n.nav-tabs>li>a {\r\n    line-height: 1.42857143;\r\n    border: none!important;\r\n    border-radius: 4px 4px 0 0\r\n}\r\n\r\n.nav-tabs>li.active {\r\n    border-color: color(#B3A9A9)\r\n}\r\n\r\n.nav-tabs>li>a>i {\r\n    zoom: 3;\r\n}\r\n\r\n.nav-tabs>li.active>a {\r\n    color: #c00!important;\r\n    border: 1px solid #f2f5f7!important;\r\n    background: #f2f5f7!important\r\n}\r\n\r\n.nav-tabs>li>a {\r\n    color: #1D1D1D!important;\r\n}\r\n\r\n.lead {\r\n    color: #f5f5f5;\r\n    text-shadow: 0 0 12px #000;\r\n    margin: 31px;\r\n}\r\n\r\n.para-button{\r\n    margin: 8px;\r\n}\r\n\r\n.nav-tabs > li.active > a {\r\n    color: #c00!important;\r\n    border: 1px solid #f2f5f7!important;\r\n    background: #f2f5f7!important;\r\n}\r\n\r\n.nav-tabs > li > a {\r\n    line-height: 1.42857143;\r\n    border: none!important;\r\n    border-radius: 4px 4px 0 0;\r\n    color: #1d1d1d!important;\r\n}\r\n\r\n.agencies-tabs li {\r\n    text-align: center;\r\n    margin: 0 21px;\r\n    background: #f2f2f2;\r\n    border-radius: 5px;\r\n}\r\n\r\n.nav>li>a {\r\n    position: relative;\r\n    display: block;\r\n    padding: 10px 15px;\r\n}\r\n\r\n.upper-container {\r\n    background: url('influence.b15f8c0152b78bee1f3e.png') no-repeat;\r\n    background-size: 100%;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    background-position: 0px;\r\n}\r\n\r\n.title .highlight {\r\n    display: inline;\r\n    background: #2a2e2f;\r\n    color: #fff;\r\n    padding: .5rem 0;\r\n    margin-top: 1%;\r\n    font-family: 'Fjalla One', \"Helvetica Neue\", Helvetica, Arial, sans-serif;\r\n    -webkit-box-shadow: 10px 0 0 #2a2e2f, -10px 0 0 #2a2e2f;\r\n            box-shadow: 10px 0 0 #2a2e2f, -10px 0 0 #2a2e2f\r\n}\r\n\r\n.title {\r\n    line-height: 43px\r\n}\r\n\r\n.row {\r\n    margin-right: 0!important;\r\n    margin-left: 0!important\r\n}\r\n\r\n.tab-pane .col-md-push-6 {\r\n    height: 275px;\r\n    text-align: center;\r\n}\r\n\r\n.tab-pane .col-md-push-6 img{\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n}"

/***/ }),

/***/ "./src/app/Agencies/Agencies.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"container-fluid margin-top-80px\">\r\n    <div class=\"row upper-container\">\r\n        <div class=\"col-md-6 col-md-offset-6 agencies-box\">\r\n            <!-- <h1><span class=\"highlight\">WE LIVE FOR THE STORIES YOU LOVE TO CREATE.</span></h1> -->\r\n            <!--<h1 class=\"title\"><span class=\"highlight\">We live for the stories you love to create.</span></h1>-->\r\n            <br>\r\n            <p class=\"lead\">\r\n                That’s why we support individual creators who strive to grow and strengthen the communities they’ve worked so hard to create. Discover how our vibrant global community is actively collaborating with brands to create one of kind, user generated advertising experiences.From the world’s most powerful influencer technology to campaign development, see how our we can help you take your Brand or Agency content campaigns to the next level.\r\n            </p>\r\n           \r\n                <!-- <a data-toggle=\"modal\" class=\"button\" routerlink=\"/register\">Get Started for FREE</a> -->\r\n                <button class=\"btn btn-primary btn-lg pull-right para-button\"><a routerlink=\"/register\" href=\"/authentication/signup\">Get Started for FREE</a></button>\r\n\r\n            \r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n\r\n<div class=\"container\">\r\n\r\n<ul class=\"nav nav-tabs agencies-tabs\" role=\"tablist\">\r\n    <li  class=\"active\">\r\n        <a  aria-controls=\"home\" role=\"tab\" href=\"#build\" data-toggle=\"tab\" aria-expanded=\"true\">\r\n        <i class=\"fa fa-desktop\"></i><br>\r\n        <span class=\"textwrap\">Build Your Page</span>\r\n        </a>\r\n\r\n    </li>\r\n    <li role=\"presentation\" class=\"\"><a href=\"#find\" aria-controls=\"profile\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-search-plus\"></i><br>\r\n        <span class=\"textwrap\">Find Great Influencers</span></a>\r\n    </li>\r\n    <li role=\"presentation\" class=\"\"><a href=\"#organize\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-sitemap\"></i><br>\r\n        <span class=\"textwrap\">Organize Your Influencers</span></a>\r\n    </li>\r\n    <li role=\"presentation\" class=\"\"><a href=\"#apply\" aria-controls=\"messages\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-angellist\"></i><br>\r\n\r\n        <span class=\"textwrap\">Let Them Apply</span></a>\r\n    </li>\r\n    <li role=\"presentation\" class=\"\"><a href=\"#together\" aria-controls=\"settings\" role=\"tab\" data-toggle=\"tab\" aria-expanded=\"false\">\r\n        <i class=\"fa fa-handshake-o\"></i><br>\r\n        <span class=\"textwrap\">Work Together</span></a>\r\n    </li>\r\n</ul>\r\n\r\n\r\n\r\n    <div class=\"tab-content padding-t-b-10px\">\r\n        <div role=\"tabpanel\" class=\"tab-pane active\" id=\"build\">\r\n            <div class=\"row\" >\r\n                <div class=\"col-md-6 col-md-push-6\">\r\n                    <img class=\"happy\" src=\"../../assets/images/agencies/Build-Your-Own-Page.png\" alt=\"Agency page build 1c5f7604d73fd0fac6cdaf20a99a31624e98aebb97852e8f2b0b75215dca871c\">\r\n                </div>\r\n                <div class=\"col-md-6 col-md-pull-6\">\r\n                    <div class=\"details\">\r\n                        <h5 class=\"heading-2\">Build Your Page</h5>\r\n                        <p>Our global community is made up of creative content creators from almost every genre, interests, and background you could possibly imagine. From fitness to food art, there’s a space for you here to connect with brands who are just as passionate as you are</p>\r\n                        <!--<p>An Agency Page lets you show off your clients to the world and possibly attract new ones. Whether it be your roster of modeling or influencer talent or the companies you run influencer campaigns for, it’s always good to let the world know who you work with. Agency Pages are public so you can share them on your social channels to recruit more clients.</p>-->\r\n                        \r\n                        <p><a class=\"btn btn-primary hidden-xs\" href=\"#find\" aria-controls=\"profile\" role=\"pill\" data-toggle=\"pill\" aria-expanded=\"false\">Next</a></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"find\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-md-push-6\">\r\n                    <img class=\"happy\" src=\"../../assets/images/agencies/Find-Great-Influencers.png\" alt=\"Business page search fce822ec1aa72e1b389b6c1e65897ed924d6e2b2f0ea2736491c64bdb811a0a0\">\r\n                </div>\r\n                <div class=\"col-md-6 col-md-pull-6\">\r\n                    <div class=\"details\">\r\n                        <h5 class=\"heading-2\">Find Great Influencers</h5>\r\n                        <p>Whether you’re looking for new talent to represent or influencers to collaborate with on your campaigns, our world-class search tools will narrow down our 50K influencers to a small group that you think might be a good fit for your project. Influencers build their own pages and show off who they have worked with. Find them by location, category, brands they have worked with and other advanced search criteria.</p>\r\n                        \r\n                        <!-- <p><a class=\"btn btn-primary\" href=\"#landingpage-tabs\">Next</a></p> -->\r\n                        <p><a class=\"btn btn-primary\" href=\"#organize\" aria-controls=\"profile\" role=\"pill\" data-toggle=\"pill\" aria-expanded=\"false\">Next</a></p>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"organize\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-md-push-6\">\r\n                    <img class=\"happy\" src=\"../../assets/images/agencies/Organize.png\" alt=\"Business page list c3a0393629d2ab5bcb23cc61622cefed1de48f4a0147b3611cdcd70acca10d7d\">\r\n                </div>\r\n                <div class=\"col-md-6 col-md-pull-6\">\r\n                    <div class=\"details\">\r\n                        <h5 class=\"heading-2\">Organize Your Influencers</h5>\r\n                        <p>Organize potential influencers or clients into lists. Group them by location, category or even their audience size. You can share these lists with your team members and easily move influencers between lists as you narrow down candidates for your campaign.</p>\r\n                        \r\n                        <!-- <p><a class=\"btn btn-primary\" href=\"#landingpage-tabs\">Next</a></p> -->\r\n                        <p><a class=\"btn btn-primary\" href=\"#apply\" aria-controls=\"profile\" role=\"pill\" data-toggle=\"pill\" aria-expanded=\"false\">Next</a></p>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"apply\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-md-push-6\">\r\n                    <img class=\"happy\" src=\"../../assets/images/agencies/let-them-apply.png\" alt=\"Business page application 4dd2776967bd37196824d937a2f864b9143a48b88e1ce5b94eba22db8e8f7613\">\r\n                </div>\r\n                <div class=\"col-md-6 col-md-pull-6\">\r\n                    <div class=\"details\">\r\n                        <h5 class=\"heading-2\">Let Them Apply</h5>\r\n                        <p>If you don’t want to spend time reaching out influencers, you can set up a campaign and let them apply to you. You can set application criteria such as followers, location, rate information and much more. Most campaigns receive 60-100 qualified inbound candidates in the first week.</p>\r\n                        \r\n                        <!-- <p><a class=\"btn btn-primary\" href=\"#landingpage-tabs\">Next</a></p> -->\r\n                        <p><a class=\"btn btn-primary\" href=\"#together\" aria-controls=\"profile\" role=\"pill\" data-toggle=\"pill\" aria-expanded=\"false\">Next</a></p>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div role=\"tabpanel\" class=\"tab-pane\" id=\"together\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6 col-md-push-6\">\r\n                    <img class=\"happy\" src=\"../../assets/images/agencies/Work-Together.png\" alt=\"Agency page together 0f780c68da81e855e8502f7ae993c2c945c37337b891589d34b45534e13eabe1\">\r\n                </div>\r\n                <div class=\"col-md-6 col-md-pull-6\">\r\n                    <div class=\"details\">\r\n                        <h5 class=\"heading-2\">Work Together</h5>\r\n                        <p>influencexpai allows your team to work together. Your team can build and share lists, manage your clients’ profiles for them and even apply to or manage campaigns on your clients’ behalf. No more logging in and out of Instagram accounts till you’re blue in the face, our team management system lets you jump between profiles easily. </p>\r\n\r\n                        <!-- <p><a data-toggle=\"modal\" class=\"button\" routerlink=\"/register\">Sign-Up Free Now</a></p> -->\r\n\r\n                        <!-- <p><a data-toggle=\"modal\" class=\"button\" href=\"#claim-modal\">Sign-Up Free Now</a></p> -->\r\n                        <button class=\"btn btn-primary\"><a routerlink=\"/signup\" href=\"/signup\">Sign-Up FREE</a></button>\r\n\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/Agencies/Agencies.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AgenciesComponent; });
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

var AgenciesComponent = (function () {
    function AgenciesComponent() {
    }
    AgenciesComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    AgenciesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-agency',
            template: __webpack_require__("./src/app/Agencies/Agencies.component.html"),
            styles: [__webpack_require__("./src/app/Agencies/Agencies.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AgenciesComponent);
    return AgenciesComponent;
}());



/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['authentication/signin'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("./src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(translate) {
        translate.addLangs(['en', 'fr']);
        translate.setDefaultLang('en');
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: '<router-outlet></router-outlet>'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* unused harmony export provideConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__loader_loader_module__ = __webpack_require__("./src/app/loader/loader.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__("./node_modules/@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_sidebar__ = __webpack_require__("./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_recaptcha_blackgeeks__ = __webpack_require__("./node_modules/recaptcha-blackgeeks/esm5/recaptcha-blackgeeks.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_slim_loading_bar__ = __webpack_require__("./node_modules/ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__ = __webpack_require__("./node_modules/angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_jw_angular_social_buttons__ = __webpack_require__("./node_modules/jw-angular-social-buttons/lib/jw-angular-social-buttons.module.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_jw_angular_social_buttons___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_jw_angular_social_buttons__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__ = __webpack_require__("./src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__Agencies_Agencies_component__ = __webpack_require__("./src/app/Agencies/Agencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__brand_brand_component__ = __webpack_require__("./src/app/brand/brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__myshowcase_myshowcase_component__ = __webpack_require__("./src/app/myshowcase/myshowcase.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__app_routing__ = __webpack_require__("./src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__layouts_admin_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__layouts_auth_auth_layout_component__ = __webpack_require__("./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_28_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_material_form_field__ = __webpack_require__("./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__influencers_influencers_component__ = __webpack_require__("./src/app/influencers/influencers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__recapcha_recapcha_module__ = __webpack_require__("./src/app/recapcha/recapcha.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_text_mask__ = __webpack_require__("./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35_angular2_text_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_35_angular2_text_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















// import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular5-social-login';



















function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
// import {AuthServiceConfig, SocialLoginModule, LinkedinLoginProvider, GoogleLoginProvider, FacebookLoginProvider} from 'ng4-social-login';




// const config= new AuthServiceConfig([
//   {
//     id: LinkedinLoginProvider.PROVIDER_ID,
//     provider: new LinkedinLoginProvider('86pmxhblr5nk3j')
//   },
//   {
//     id: GoogleLoginProvider.PROVIDER_ID,
//     provider: new GoogleLoginProvider('275856928145-q1oilas7eb0oils1rnr8u14l04ik60nq.apps.googleusercontent.com')
//   },
//   {
//     id: FacebookLoginProvider.PROVIDER_ID,
//     provider: new FacebookLoginProvider('2076488752606610')
//   }
// ], false);
function provideConfig() {
    // const config= new AuthServiceConfig([
    //   {
    //     id: LinkedinLoginProvider.PROVIDER_ID,
    //     provider: new LinkedinLoginProvider('86pmxhblr5nk3j')
    //   },
    //   {
    //     id: GoogleLoginProvider.PROVIDER_ID,
    //     provider: new GoogleLoginProvider('477803023185-j1sg6vh5tkcjd1f4as65721kcqmht6cj.apps.googleusercontent.com')
    //   },
    //   {
    //     id: FacebookLoginProvider.PROVIDER_ID,
    //     provider: new FacebookLoginProvider('2076488752606610')
    //   }
    // ], false);
    var config = new __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["GoogleLoginProvider"]('477803023185-j1sg6vh5tkcjd1f4as65721kcqmht6cj.apps.googleusercontent.com')
        },
        {
            id: __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["FacebookLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["FacebookLoginProvider"]('2243800905848514')
        }
    ]);
    return config;
}
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_24__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pricing_pricing_component__["a" /* PricingComponent */],
                __WEBPACK_IMPORTED_MODULE_25__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */], __WEBPACK_IMPORTED_MODULE_16__footer_footer_component__["a" /* FooterComponent */], __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["a" /* BlogComponent */], __WEBPACK_IMPORTED_MODULE_17__Agencies_Agencies_component__["a" /* AgenciesComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["b" /* ContactComponent */], __WEBPACK_IMPORTED_MODULE_18__brand_brand_component__["a" /* BrandComponent */],
                __WEBPACK_IMPORTED_MODULE_33__influencers_influencers_component__["a" /* InfluencersComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["c" /* HowItWorksComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["d" /* PrivacyAndPolicyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["e" /* PrivacyComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["f" /* TermsAndConditionsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["g" /* TermsComponent */],
                __WEBPACK_IMPORTED_MODULE_21__contact_contact_component__["h" /* WhatIsInfluexpaiComponent */],
                __WEBPACK_IMPORTED_MODULE_19__myshowcase_myshowcase_component__["a" /* MyshowcaseComponent */]
                // AccountSettingComponent,
                // SigninComponent
                // PostSignupComponent
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_15_jw_angular_social_buttons__["JwSocialButtonsModule"],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["q" /* MatSlideToggleModule */],
                __WEBPACK_IMPORTED_MODULE_12_recaptcha_blackgeeks__["a" /* BlackgeeksRecaptchaModule */],
                __WEBPACK_IMPORTED_MODULE_13_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */],
                // PreloaderModule,
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_34__recapcha_recapcha_module__["a" /* RecapchaModule */],
                __WEBPACK_IMPORTED_MODULE_35_angular2_text_mask__["TextMaskModule"],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["c" /* MatCardModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material__["p" /* MatSelectModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material__["m" /* MatOptionModule */], __WEBPACK_IMPORTED_MODULE_30__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material__["k" /* MatInputModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material__["o" /* MatRippleModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material__["t" /* MatTableModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_32__angular_common_http__["b" /* HttpClientModule */],
                // JwSocialButtonsModule,
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_26__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_6__loader_loader_module__["a" /* LoaderModule */],
                __WEBPACK_IMPORTED_MODULE_32__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_29__angular_material__["b" /* MatButtonModule */], __WEBPACK_IMPORTED_MODULE_30__angular_material_form_field__["c" /* MatFormFieldModule */], __WEBPACK_IMPORTED_MODULE_29__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_22__app_routing__["a" /* AppRoutes */]),
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_28_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_5__angular_http__["Http"]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_9__ng_bootstrap_ng_bootstrap__["g" /* NgbModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ng_sidebar__["SidebarModule"].forRoot(),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["AuthService"],
                { provide: __WEBPACK_IMPORTED_MODULE_14_angular5_social_login__["AuthServiceConfig"], useFactory: provideConfig },
                __WEBPACK_IMPORTED_MODULE_27__guards_index__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_31__app_service__["a" /* App_service */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_23__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__ = __webpack_require__("./src/app/layouts/admin/admin-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__ = __webpack_require__("./src/app/layouts/auth/auth-layout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__ = __webpack_require__("./src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__brand_brand_component__ = __webpack_require__("./src/app/brand/brand.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__influencers_influencers_component__ = __webpack_require__("./src/app/influencers/influencers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Agencies_Agencies_component__ = __webpack_require__("./src/app/Agencies/Agencies.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pricing_pricing_component__ = __webpack_require__("./src/app/pricing/pricing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__myshowcase_myshowcase_component__ = __webpack_require__("./src/app/myshowcase/myshowcase.component.ts");









var AppRoutes = [
    {
        path: 'agencies', component: __WEBPACK_IMPORTED_MODULE_5__Agencies_Agencies_component__["a" /* AgenciesComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["b" /* ContactComponent */]
    },
    {
        path: 'what-is-InfluExpAI',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["h" /* WhatIsInfluexpaiComponent */]
    },
    {
        path: 'How-It-Works',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["c" /* HowItWorksComponent */]
    },
    {
        path: 'Terms-and-Conditions',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["f" /* TermsAndConditionsComponent */]
    },
    {
        path: 'terms',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["g" /* TermsComponent */]
    },
    {
        path: 'privacy_policy',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["d" /* PrivacyAndPolicyComponent */]
    },
    {
        path: 'privacy',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["e" /* PrivacyComponent */]
    },
    {
        path: 'brand',
        component: __WEBPACK_IMPORTED_MODULE_3__brand_brand_component__["a" /* BrandComponent */]
    },
    {
        path: 'influencers',
        component: __WEBPACK_IMPORTED_MODULE_4__influencers_influencers_component__["a" /* InfluencersComponent */]
    },
    {
        path: 'blog',
        component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["a" /* BlogComponent */]
    },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__layouts_admin_admin_layout_component__["a" /* AdminLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './influencers-profile/influencers-profile.module#ProfileModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'components',
                loadChildren: './components/components.module#ComponentsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'profile',
                loadChildren: './influencers-profile/influencers-profile.module#ProfileModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'icons',
                loadChildren: './icons/icons.module#IconsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'cards',
                loadChildren: './cards/cards.module#CardsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'settings',
                loadChildren: './settings/settings.module#SettingsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'connect-blogger',
                loadChildren: './connect-blogger/connect-blogger.module#ConnectBloggerModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'connect-facebook',
                loadChildren: './connect-facebook/connect-facebook.module#ConnectFacebookModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'connect-youtube',
                loadChildren: './connect-youtube/connect-youtube.module#ConnectYoutubeModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'connect_linkedin',
                loadChildren: './connect-linkedin/connect-linkedin.module#ConnectLinkedinModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'connect-pinterest',
                loadChildren: './connect-pinterest/connect-pinterest.module#ConnectPinterestModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'connect-instagram',
                loadChildren: './connect-instagram/connect-instagram.module#ConnectInstagramModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'connect-twitter',
                loadChildren: './connect-twitter/connect-twitter.module#ConnectTwitterModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'create-showcase',
                loadChildren: './create-showcase/create-showcase.module#CreateShowcaseModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'tables',
                loadChildren: './tables/tables.module#TablesModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'datatable',
                loadChildren: './datatable/datatable.module#DatatableModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'charts',
                loadChildren: './charts/charts.module#ChartsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'taskboard',
                loadChildren: './taskboard/taskboard.module#TaskboardModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'calendar',
                loadChildren: './fullcalendar/fullcalendar.module#FullcalendarModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'media',
                loadChildren: './media/media.module#MediaModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'widgets',
                loadChildren: './widgets/widgets.module#WidgetsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }, {
                path: 'social',
                loadChildren: './social/social.module#SocialModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'manage-profiles',
                loadChildren: './manage/manage.module#ManageModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            },
            {
                path: 'docs',
                loadChildren: './docs/docs.module#DocsModule', canActivate: [__WEBPACK_IMPORTED_MODULE_6__guards_index__["a" /* AuthGuard */]]
            }
        ]
    },
    { path: 'myshowcase', component: __WEBPACK_IMPORTED_MODULE_8__myshowcase_myshowcase_component__["a" /* MyshowcaseComponent */] },
    { path: 'pricing', component: __WEBPACK_IMPORTED_MODULE_7__pricing_pricing_component__["a" /* PricingComponent */] },
    { path: 'contactus', component: __WEBPACK_IMPORTED_MODULE_2__contact_contact_component__["b" /* ContactComponent */] },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__layouts_auth_auth_layout_component__["a" /* AuthLayoutComponent */],
        children: [
            {
                path: '',
                loadChildren: './post-signup/post-signup.module#PostSignupModule'
            },
            //     {path: 'forgot',
            //  loadChildren: './forgot/forgot.module#ForgotModule'},
            // {
            //   path: 'signin',
            //   component: SigninComponent
            // },
            // { path: 'forgot',  loadChildren: './authentication/forgot/forgot.module#ForgotModule' },
            {
                path: 'authentication',
                loadChildren: './authentication/authentication.module#AuthenticationModule'
            }, {
                path: 'error',
                loadChildren: './error/error.module#ErrorModule'
            }, {
                path: 'landing',
                loadChildren: './landing/landing.module#LandingModule'
            }
        ]
    },
];


/***/ }),

/***/ "./src/app/app.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App_service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__serv_http_service__ = __webpack_require__("./src/app/serv/http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__ = __webpack_require__("./node_modules/rxjs/_esm5/observable/ErrorObservable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators_tap__ = __webpack_require__("./node_modules/rxjs/_esm5/operators/tap.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var App_service = (function () {
    function App_service(_nav, https, toast, Http, http, platformId) {
        this._nav = _nav;
        this.https = https;
        this.toast = toast;
        this.Http = Http;
        this.http = http;
        this.platformId = platformId;
        this.InstaResponse = {};
    }
    App_service.prototype.showerror = function () {
        this.toast.error('Some Server Side Error');
    };
    App_service.prototype.register_user = function (username, name, first_name, last_name, email, password, country, address, relationship, education, phone, state, city, employment_status, gender) {
        var _this = this;
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/influencer_signup/', {
            'username': username,
            'name': name,
            'first_name': first_name,
            'last_name': last_name,
            'email': email,
            'password': password,
            'country': country,
            'address': null,
            'relationship': relationship,
            'education': education,
            'phone': phone,
            'state': state,
            'city': city,
            'employment_status': employment_status,
            'gender': gender,
        }).map(function (res) {
            if (res.status == 200) {
                _this.CurrentUser = res.json();
                localStorage.setItem('current_User', JSON.stringify(_this.CurrentUser));
                // console.log(JSON.parse(localStorage.getItem('current_User')));
                _this._nav.navigate(['/authentication/signin']);
            }
            else if (res.status = 500) {
                _this.showerror();
            }
        });
    };
    App_service.prototype.onupload = function (image) {
        // const fd= new FormData();
        var fd2 = new FormData();
        fd2.append('input_file0', image);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = this.currentUser.username;
        fd2.append('username', this.username);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/showcase/Upload-Image', fd2)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_tap__["a" /* tap */])(function (res) {
            return res;
        }));
    };
    App_service.prototype.onUpload = function (image) {
        // const fd= new FormData();
        var fd2 = new FormData();
        fd2.append('input_file0', image);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.username = this.currentUser.username;
        fd2.append('username', this.username);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/influencerUploadImage/', fd2)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators_tap__["a" /* tap */])(function (res) {
            return res;
        }));
    };
    App_service.prototype.get_profile_pic = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser != null) {
            var username = this.currentUser.username;
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/getinfluencerimage/' + username).map(function (response) {
                return response.json();
            });
        }
    };
    App_service.prototype.get_All_Blog = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/getallblog/').map(function (response) { return response.json(); });
    };
    //   contact_Us(name, email, phone, message) {
    //     return this.http.post('http://192.168.29.166:8000/contact-us/',
    //     // http://192.168.29.166:8000/contact-us/
    //         {
    //             'name':name,
    //             'email' :email,
    //             'mobile_no': phone,
    //             'message' :message
    //         }).map((response: Response) => {
    //             console.log(response)
    //         });
    // }
    App_service.prototype.contact_Us = function (name, email, phone, message) {
        return this.http.post('http://192.168.29.166:8000/contact-us/', 
        // http://192.168.29.166:8000/contact-us/
        {
            'name': name,
            'email': email,
            'mobile_no': phone,
            'message': message
        }).map(function (response) {
            console.log(response);
        });
    };
    App_service.prototype.getUserData = function () {
        // let currentUser= localStorage.getItem('currentUser');
        // let username = localStorage.getItem('username');
        // let username = localStorage.getItem('currentUser');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser != null) {
            var username = this.currentUser.username;
            return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/influencer_profile_get_edit/' + username).map(function (response) { return response.json(); });
        }
    };
    App_service.prototype.login = function (username, password) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/influencer_login/', JSON.stringify({ username: username, password: password }), { headers: headers })
            .map(function (response) {
            var user = response.json();
            console.log('Response. JSON is .........', response.json());
            localStorage.setItem('currentUser', JSON.stringify(user));
            console.log('current user is...................', JSON.parse(localStorage.getItem('currentUser')));
        });
    };
    App_service.prototype.getCountiresData = function () {
        return this.Http.get('https://raw.githubusercontent.com/Holek/steam-friends-countries/master/data/steam_countries.json').map(function (response) { return response.json(); });
    };
    App_service.prototype.do_SubsCribe = function () {
        var user_email = localStorage.getItem('email');
        // console.log('Current_User Email is', user_email);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/subscribed/', { 'email': user_email })
            .map(function (response) {
            response.json();
        });
    };
    App_service.prototype.do_UnSubsCribe = function () {
        var user_email = localStorage.getItem('email');
        // console.log('Current_User Email is', user_email);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/un-subscribed/', { 'email': user_email })
            .map(function (response) { response.json(); });
    };
    App_service.prototype.post_review = function (user_id, review, rate) {
        user_id = localStorage.getItem('user_id');
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Influexp_Review_Post', {
            'user': user_id,
            'review': review,
            'rate': rate
        }, { headers: headers }).map(function (res) {
            res.json();
        });
    };
    App_service.prototype.opt_In_On = function () {
        var user_id = localStorage.getItem('user_id');
        var user_email = localStorage.getItem('email');
        console.log('Current_User id is', user_id);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.https.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/opt-in-on/', { 'email': user_email })
            .map(function (response) {
            response.json();
        });
    };
    App_service.prototype.opt_In_Off = function () {
        var user_id = localStorage.getItem('user_id');
        // console.log('Current_User Email is', user_email);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/opt-in-off/', { 'user_id': user_id })
            .map(function (response) {
            response.json();
        });
    };
    App_service.prototype.Check_SubsCribe = function () {
        var user_email = localStorage.getItem('email');
        console.log('Current_User Email is', user_email);
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.https.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/subscribed-user/', { 'email': user_email })
            .map(function (response) {
            response.json();
        });
    };
    // mynotes(page) {
    //   let headers = new Headers({ 'Authorization': 'JWT ' + this.token });
    //   headers.append('Content-Type', 'application/json');
    //   return this.http.get(Config.api + 'notesgenie/usernotes/' + this.current.user_id +'?page=' +page, { headers: headers }).map((response: Response) => response.json());
    // }
    App_service.prototype.myshowcase = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        // let username = localStorage.getItem('username');
        return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/showcase/showcase_list_user/', { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.uploadShowCase = function (image1, catagory, title, description, urls, requirement1, requirement2) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/showcase/add-showcase/', {
            'image1': image1,
            // 'catagory': catagory,
            'catagory_id': catagory,
            'title': title,
            'description': description,
            'urls': urls,
            'requirement1': requirement1,
            'requirement2': requirement2
        }, { headers: headers }).map(function (response) {
            response.json();
            console.log('response during map', response.json());
        });
    };
    App_service.httpClientErrorHandler = function (errorResponse) {
        if (errorResponse.error instanceof ErrorEvent) {
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('Client Side Error');
        }
        else {
            __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('Server side Error');
        }
        return new __WEBPACK_IMPORTED_MODULE_8_rxjs_observable_ErrorObservable__["a" /* ErrorObservable */]('There is a problem with a service. we are notified & working on it');
    };
    // Connect LinkedIn API's
    App_service.prototype.postLinkedInData = function (name, email, image, username) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/linkedin_profile_data_post', {
            'name': name,
            'email': email,
            'image': image,
            'user': username
        }, { headers: headers }).map(function (response) {
            response.json();
            var emailLnkedUser = response.json()[0]['email'];
            localStorage.setItem('linkedIn_User_Email', emailLnkedUser);
        });
    };
    App_service.prototype.getLinkedInData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        // let email =  localStorage.getItem('linkedIn_User_Email');
        var username = localStorage.getItem('username');
        console.log('LinkedIn Username is', username);
        return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/linkedin_profile_data_get/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.deleteLinkedInData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.delete(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/linkedin_profile_data_delete/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.delete_FBData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.delete(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Facebook_profile_data_delete/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.linkedInData_Status = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        // let email =  localStorage.getItem('linkedIn_User_Email');
        var username = localStorage.getItem('username');
        console.log('LinkedIn Username is', username);
        return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/linkedin_profile_data_status/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.Youtube_Status = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Youtube_profile_data_status/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.Facebook_Status = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Facebook_profile_data_status/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    // Connect LinkedIn API's End
    // Connect Youtube API's Start
    App_service.prototype.postYouTubeData = function (name, email, image, username) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Youtube_profile_data_post', {
            'name': name,
            'email': email,
            'image': image,
            'user': username
        }, { headers: headers }).map(function (response) {
            response.json();
        });
    };
    App_service.prototype.getYouTubeData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Youtube_profile_data_get/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.deleteYouTubeData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.delete(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Youtube_profile_data_delete/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.deleteFacebookData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.delete(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Facebook_profile_data_delete/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.postYoutubeData = function () {
    };
    // Connect Youtube API's End
    // Connect Facebook API's Start
    App_service.prototype.postFBData = function (name, email, image, username) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Facebook_profile_data_post', {
            'name': name,
            'email': email,
            'image': image,
            'user': username
        }, { headers: headers }).map(function (response) {
            response.json();
            // console.log('Email',localStorage.getItem('linkedIn_User_Email'));
        });
    };
    App_service.prototype.getFBData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.get(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Facebook_profile_data_get/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.deleteFBData = function () {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var username = localStorage.getItem('username');
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/Facebook_profile_data_delete/' + username, { headers: headers }).map(function (response) {
            return response.json();
        });
    };
    // onUpload(image: File)
    // {
    //   const fd= new FormData();
    //   let id= localStorage.getItem('user_id');
    //   fd.append('path', image);
    //   let username =  localStorage.getItem('username');
    //   return this.Http.post(Config.api + '/profile/' + username, fd)
    //     .map(res=>{
    //       console.log('Responce is', res);
    //     })
    // }
    // get_profile_pic(){
    //   this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //   let username =  localStorage.getItem('username');
    //   return this.Http.get(Config.api+ '/profile_view/' + username).map((response: Response) => {
    //     return response.json();
    //   });
    // }
    App_service.prototype.forgot_password_code = function (email) {
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/forgetpasswordcode/', { 'email': email }).map(function (response) {
            return response.json();
        });
    };
    App_service.prototype.checkcode = function (key, email) {
        var _this = this;
        // console.log('Key is ..........', key)
        // console.log('forget_email', localStorage.getItem('forget_email'));
        return this.Http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/verifysentpasswordCode/', {
            'email': email,
            'code': key
        })
            .map(function (response) {
            var Res = response.json();
            console.log('Response is', Res.status);
            if (Res.status == false) {
                __WEBPACK_IMPORTED_MODULE_7_sweetalert2___default()('Code is Expired please Verify again', '', 'warning');
                _this._nav.navigate(['/authentication/confirm']);
            }
        });
    };
    App_service = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __param(5, Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__angular_core__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_6_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_5__serv_http_service__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"],
            Object])
    ], App_service);
    return App_service;
}());



/***/ }),

/***/ "./src/app/brand/brand.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"blog-wrapper\">\r\n\r\n \r\n\r\n  <section class=\"marketing\">\r\n  <div class=\"container\">\r\n      <div class=\"row brand-outer\">\r\n        <div class=\"left\">\r\n          <div class=\"img-div\">\r\n            <img src=\"../../assets/images/img/images/brand/Marketing.jpg\" alt=\"\">\r\n          </div>\r\n        </div>\r\n        <header class=\"right\">\r\n          <div class=\"ico text-center\"><img src=\"../../assets/images/img/images/brand/Marketing.png\" alt=\"\"></div>\r\n          <h3 class=\"s_brand_heading text-center\">Marketing for a new generation</h3>\r\n          <p>Want millions of people to learn about your brand? You’re in the right place. Creators are this generation's storytellers, telling product stories in a way that no one else can. Their audience trusts them and looks to them for advice on the newest products, brands and services.</p>\r\n        </header>\r\n      </div>\r\n    <div class=\"row\">\r\n      <article class=\"article col-md-4 col-sm-4 col-xs-12\" style=\"transition-delay: 0ms;\">\r\n        <div class=\"ico text-center\"><img src=\"../../assets/images/img/images/brand/budget.png\" alt=\"\"></div>\r\n        <h3>Flexible budgets</h3>\r\n        <p>Signing up for FameBit is free and since you set your content budget, you’re in charge of how much you spend. Some brands spend tens of thousands per campaign, but you can start as low as $100.</p>\r\n      </article>\r\n      <article class=\"article border-l-r col-md-4 col-sm-4 col-xs-12\" style=\"transition-delay: 250ms;\">\r\n        <div class=\"ico text-center\"><img src=\"../../assets/images/img/images/brand/Tools.png\" alt=\"\"></div>\r\n        <h3>Tools powered by data</h3>\r\n        <p>Finding the right creators is key. With advanced campaign targeting and proposal filtering, you can target creators who have the audience and engagement to drive results for your brand.</p>\r\n      </article>\r\n      <article class=\"article col-md-4 col-sm-4 col-xs-12\" style=\"transition-delay: 500ms;\">\r\n        <div class=\"ico text-center\"><img src=\"../../assets/images/img/images/brand/Brand-Safe.png\" alt=\"\"></div>\r\n        <h3>Brand safe content</h3>\r\n        <p>We’re here to protect your brand. View creator profiles, review content proposals, send your own talking points, and decide what content gets posted about your brand and when.</p>\r\n      </article>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n  <section class=\"brand\">\r\n    <div class=\"container\">\r\n      <h3>A few brands we work with</h3>\r\n      <ul class=\"logo-list\">\r\n        <li style=\"transition-delay: 0ms;\"><img src=\"../../assets/images/img/images/brand/logo01.png\" alt=\"canon\"></li>\r\n        <li style=\"transition-delay: 100ms;\"><img src=\"../../assets/images/img/images/brand/logo02.png\" alt=\"Activision\"></li>\r\n        <li style=\"transition-delay: 200ms;\"><img src=\"../../assets/images/img/images/brand/logo03.png\" alt=\"adidas\"></li>\r\n        <li style=\"transition-delay: 300ms;\"><img src=\"../../assets/images/img/images/brand/logo04.png\" alt=\"sony\"></li>\r\n        <li style=\"transition-delay: 400ms;\"><img src=\"../../assets/images/img/images/brand/logo05.png\" alt=\"conair\"></li>\r\n        <li style=\"transition-delay: 500ms;\"><img src=\"../../assets/images/img/images/brand/logo06.png\" alt=\"serioulsy\"></li>\r\n      </ul>\r\n    </div>\r\n  </section>\r\n\r\n  <section class=\"promotion\">\r\n    <div class=\"container\">\r\n      <div class=\"row promo-box\">\r\n        <!---->\r\n          <div class=\"col-lg-6 col-md-6\">\r\n            <h4 class=\"textcolor-violet\"><a routerLink=\"/pricing\" href=\"/pricing\">Branded content starting at $100</a></h4>\r\n            <p>Creators are ready to send you proposals. Start a campaign today for Free!</p>\r\n          </div>\r\n          <div class=\"col-lg-6 col-md-6 col-sm-12 sign-up-now-btn\">\r\n            <!-- <a routerLink='/register' rel=\"nofollow\" target=\"_self\" class=\"\">Sign up Now!</a> -->\r\n            <button class=\"btn btn-primary btn-lg button-a pull-right\"><a routerlink=\"/pricing\"  href=\"/pricing\">Sign up Now!</a></button>\r\n\r\n          </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/brand/brand.component.scss":
/***/ (function(module, exports) {

module.exports = ".brand {\n  padding: 20px 0 131px;\n  text-align: center;\n  background: #F5F7FD; }\n  .brand h2 {\n    margin: 0 0 12px;\n    font-size: 30px; }\n  .brand .logo-list {\n    margin: 0;\n    padding: 0;\n    list-style: none; }\n  .brand .logo-list li {\n      -webkit-transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\n      transition: opacity .3s ease-in-out,-webkit-transform .3s ease-in-out;\n      transition: opacity .3s ease-in-out,transform .3s ease-in-out;\n      transition: opacity .3s ease-in-out,transform .3s ease-in-out,-webkit-transform .3s ease-in-out;\n      display: inline-block;\n      vertical-align: middle;\n      margin: 0 0 12px;\n      padding: 0 23px;\n      -webkit-transition-duration: .5s;\n              transition-duration: .5s; }\n  .brand .logo-list li img {\n        border: 0;\n        max-width: 100%;\n        height: auto; }\n  .promotion .promo-box {\n  background: #fff;\n  border-radius: 6px;\n  margin: -116px 0 18px;\n  color: #8293ae;\n  padding: 33px 0 10px;\n  font: 18px/1.57 gt_walsheim,\"Helvetica Neue\",Arial,Helvetica,sans-serif;\n  -webkit-box-shadow: 0 0 20px rgba(91, 105, 141, 0.07);\n          box-shadow: 0 0 20px rgba(91, 105, 141, 0.07);\n  position: relative;\n  z-index: 5; }\n  .promotion .promo-box .promo-box:before {\n    content: '';\n    position: absolute;\n    left: 50%;\n    top: 0;\n    bottom: 0;\n    width: 1px;\n    border-left: 1px solid #e2e7f5; }\n  .promotion .promo-box h3 {\n    font-size: 30px;\n    line-height: 1.2;\n    font-weight: 400;\n    margin-bottom: 15px;\n    letter-spacing: -1px; }\n  .brand-outer .left {\n  width: 32%;\n  float: left; }\n  .brand-outer .right {\n  width: 65%;\n  float: left;\n  padding: 20px; }\n  .ico h3 {\n  text-align: center; }\n  #logo img, img {\n  max-width: 100%; }\n  .img-div {\n  width: 83%;\n  margin: 16px; }\n  .textcolor-violet a {\n  color: #113058;\n  font-size: 21px; }\n"

/***/ }),

/***/ "./src/app/brand/brand.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BrandComponent; });
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

var BrandComponent = (function () {
    function BrandComponent() {
    }
    BrandComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    BrandComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-brand',
            template: __webpack_require__("./src/app/brand/brand.component.html"),
            styles: [__webpack_require__("./src/app/brand/brand.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], BrandComponent);
    return BrandComponent;
}());



/***/ }),

/***/ "./src/app/config-2.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config2 = (function () {
    function Config2() {
    }
    Config2.api = '';
    Config2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Config2);
    return Config2;
}());



/***/ }),

/***/ "./src/app/config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Config; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Config = (function () {
    function Config() {
    }
    // public static api: String = 'https://influexpapi.herokuapp.com';
    // public static api: String = 'http://ns520442.ip-158-69-23.net:4433';
    // public static api: String = 'http://localhost:8000';
    // public static api: String = 'http://192.168.29.162:9000';
    // public static api: String = 'http://127.0.0.1:8000';
    // public static api: String = 'http://192.168.29.166:8000';
    Config.api = 'https://apis.influexpai.com';
    Config = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Config);
    return Config;
}());



/***/ }),

/***/ "./src/app/contact/How-It-Works.html":
/***/ (function(module, exports) {

module.exports = "\r\n<!-- <section class=\"title-top-bg margin-top-80px\">\r\n  <div class=\"container\">\r\n      <h1>How it Works?</h1>\r\n  </div>\r\n</section> -->\r\n\r\n<div class=\"how-it-works-wrapper\" >\r\n  <div class=\"container\">\r\n    <!--step1-->\r\n    <div class=\"row\">\r\n      <h2 class=\"col-sm-12\">How it works for Opt-In Influencers?</h2>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Signup-on-influexpAi.png\">\r\n          <h3>1. Signup on InfluExpAI</h3>\r\n          <p>Signup on InfluExpAI is super easy and takes less than a few minutes on Web or Mobile: Download our next generation Artificially Intelligent App on Google Play Store or Apple App Store.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Set-your-influencer-profile.png\">\r\n          <h3>2.\tSet your Influencer Profile</h3>\r\n          <p>Set your Influencer Profile to start receiving Campaign Offers from Marketers, Entrepreneurs and Organizations. Leverage our AI to connect with prospective Brands & Marketers.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Complete-Content-Assisment.png\">\r\n          <h3>3.\tComplete Content Assignments</h3>\r\n          <p>Create Content in your respective area of Influence for assigned campaigns</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Give-You-Earning-wings.png\">\r\n          <h3>4.\tGive your Earning Wings</h3>\r\n          <p>Give your Influencer Profile Wings and transform your skills into a full-on business!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--step2-->\r\n    <div class=\"row\">\r\n      <h2 class=\"col-sm-12\">How it works for Opt-In Influencers?</h2>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-2\">\r\n          <img src=\"../../assets/images/img/images/How it works/Signup-on-influexpAi.png\">\r\n          <h3>1. Signup on InfluExpAI</h3>\r\n          <p>Signup on InfluExpAI is super easy and takes less than a few minutes on Web or Mobile: Download our next generation Artificially Intelligent App on Google Play Store or Apple App Store. Subscribe to one of our Unbeatable Pricing Plans.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-2\">\r\n          <img src=\"../../assets/images/img/images/How it works/Browse-millions-of-influencers.png\">\r\n          <h3>2.\tBrowse Millions of Influencers</h3>\r\n          <p>Browse through InfluExpAI’s comprehensive database of Bloggers, Social Media, Content Creators and Vetted Opt-In Influencers.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-2\">\r\n          <img src=\"../../assets/images/img/images/How it works/Build-Marketing-Compaings.png\">\r\n          <h3>3.\tBuild Marketing Campaigns</h3>\r\n          <p>Setup Marketing Campaigns with prospective Influencers and contact/email them directly through InfluExpAI.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-2\">\r\n          <img src=\"../../assets/images/img/images/How it works/Request-for-marketing-RFMS.png\">\r\n          <h3>4.\tRequest for Marketing (RFMs)</h3>\r\n          <p>Publish RFM opportunities and Get/Select bids from Content Creators and Influencers.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-2\">\r\n          <img src=\"../../assets/images/img/images/How it works/Leverage-our-Ai.png\">\r\n          <h3>5.\tLeverage our AI</h3>\r\n          <p>Leverage our bleeding edge Machine Learning (ML) and Artificial Intelligence (AI) to connect with millions of SM & Vetted Opt-In Influencers. Run Hard-Core Analytics for Actionable Insight.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-2\">\r\n          <img src=\"../../assets/images/img/images/How it works/CRM.png\">\r\n          <h3>6.\tContact Relationship Management (CRM)</h3>\r\n          <p>Make it simpler & easier for yourself to Setup, Manage and Run Campaigns. Keep track of Contacts, Build Lists,  Send Mass Mails, Measure Influence & do a whole lot more.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-2\">\r\n          <img src=\"../../assets/images/img/images/How it works/Give-Your-Influencer-Marketing-Wings.png\">\r\n          <h3>7.\tGive your Influencer Marketing Wings</h3>\r\n          <p>Give your Influencer Marketing Wings and maximize your Impressions and ROI.</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!--step-->\r\n    <div class=\"row\">\r\n      <h2 class=\"col-sm-12\">How it works for Opt-In Influencers and Content Creators?</h2>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Signup-on-influexpAi.png\">\r\n          <h3>1.\tSignup on InfluExpAI</h3>\r\n          <p>Signup on InfluExpAI is super easy and takes less than a few minutes on Web or Mobile: Download our next generation Artificially Intelligent App on Google Play Store or Apple App Store.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Set-Your-Influencer-create-profile.png\">\r\n          <h3>2.\tSet your Influencer/Creator Profile</h3>\r\n          <p>Set your Influencer Profile to start receiving Campaign Offers from Marketers, Entrepreneurs and Organizations.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Complete-Content-Assisment.png\">\r\n          <h3>3.\tComplete Content Assignments</h3>\r\n          <p>Create Content in your respective area of Influence for assigned campaigns.</p>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-3 col-sm-6 col-xs-12\">\r\n        <div class=\"how-it-works-box how-it-min-height-1\">\r\n          <img src=\"../../assets/images/img/images/How it works/Give-You-Earning-wings.png\">\r\n          <h3>4.\tGive your Earning Wings</h3>\r\n          <p>Give your Influencer Profile Wings and transform your skills into a full-on business!</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact/Terms-and-conditions.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"terms-container-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"terms-condition-wrapper\">\r\n          <h2>InfluExpert.AI Terms of Service</h2>\r\n\r\n          <p>In subscribing to InfluExpert.AI services, you have accepted the purchase order as presented to you by InfluExpert.AI or our designated affiliates. By your subscription, acceptance of the purchase order, and /or any use of InfluExpert.AI products or services, you or the entity that you represent (“Customer”), are unconditionally consenting to be bound by these Terms and Conditions and the applicable purchase order (The Agreement”).</p>\r\n          <h1>This Agreement is effective as of the date of Subscription.</h1>\r\n          <h3>REPRESENTATIONS</h3>\r\n          <p>You represent and warrant that you have the necessary power and authority to enter into this Agreement on the behalf of yourself and/or the entity you represent. You further agree to perform the obligations hereunder</p>\r\n\r\n          <h3>API LICENSE</h3>\r\n          <p>Subject to the terms and conditions of this Agreement, during the Term, InfluExpert.AI grants you a limited, non-exclusive, non-transferable, non-sub-licensable, non-assignable license to access and use the selected proprietary application programming interface solely to implement, integrate and use the InfluExpert.AI Services for personal or internal business purposes.</p>\r\n\r\n          <h3>API KEY</h3>\r\n          <p>InfluExpert.AI makes the API available to you electronically, requiring an InfluExpert.AI API Key for you to access the services. As a condition of receipt and use, of this Key it is acknowledged that API key is to be kept private. It may not be shared or otherwise disclosed to third parties. You acknowledge that it is your responsibility to protect this API Key. You also acknowledge that you will not create multiple accounts to get multiple API Keys at any time and under whatever circumstances.</p>\r\n\r\n          <h3>API RESTRICTIONS</h3>\r\n          <p>Provision of the InfluExpert.AI Service is conditioned upon Customer’s proper use of the InfluExpert.AI API. Except as expressly authorized under this Agreement, Customer may not:</p>\r\n\r\n          <ul class=\"terms-list\">\r\n            <li>Copy, rent, lease, sell, transfer, assign, sublicense, disassemble, reverse engineer, create derivative works, decompile, modify, adapt or alter any part of the InfluExpert.AI API;</li>\r\n            <li>Use the InfluExpert.AI API on behalf of any third party or otherwise make the API available over a network where it could be used by others;</li>\r\n            <li>Create multiple accounts and/or use multiple API Keys;</li>\r\n            <li>Publish information obtained through use of the API;</li>\r\n            <li>Use the Product to reproduce copyrighted material;</li>\r\n            <li>Use the InfluExpert.AI API to disable, interfere with, or override InfluExpert.AI Services in a manner that bypasses this Agreement or the API Key registration process, including but not limited to; proxy servers, spiders, robots or other technology;</li>\r\n            <li>Use the InfluExpert.AI API in any manner that violates any laws directly or indirectly.</li>\r\n          </ul>\r\n\r\n          <h3>DATA LICENSE</h3>\r\n          <p>As part of the InfluExpert.AI Service, InfluExpAI collects and generates certain content by aggregating information regarding publicly available web pages utilizing InfluExpAI’s proprietary technology. As part of the API Service, certain Data is made publicly available to end-users. Data does not contain any personally identifiable information regarding any end users. InfluExpAI owns all right, title and interest in and to all compiled Data and cataloging of Data as presented.\r\n\r\n            Subject to the terms and conditions of this Agreement, InfluExpAI grants to Customer a non-exclusive, non-sublicensable, non-transferable license to use, copy and modify the Data solely for Customer’s internal business purposes. Customer shall have no right to sublicense, sell, syndicate or otherwise share the Data with any third party.\r\n\r\n            You may only use the Data or Content output or provided by InfluExpAI for internal purposes only and, unless expressly authorized herein, you may not publicly release or disclose any data or usage statistics or other information regarding the Data or Content. You agree to and will make available to InfluExpAI any usage statistics or other information regarding the access and use of the InfluExpAI API.\r\n          </p>\r\n\r\n          <h3>ATTRIBUTION</h3>\r\n          <p>Basic or free subscribers using the InfluExpAI API and related Content or Data, shall agree to conspicuously display the InfluExpAI API logo to indicate that InfluExpAI technology is being used.\r\n\r\n            This graphic shall measure at least 200 by 100 pixels and be displayed on all web pages, documents or other renderings where InfluExpAI API Content or API data is used.\r\n\r\n            In addition you provide a clickable hyperlink to InfluExpAI which shall read: “Text Analysis by InfluExpAI API” within your website or application. Similar attributions must be used in all published and/or printed works, including but not limited to research papers and journal articles.\r\n          </p>\r\n\r\n          <h3>TRADEMARK LICENSING</h3>\r\n          <p>InfluExpAI hereby grants a nontransferable, nonexclusive license to use InfluExpAI’s trademarks during the Term to display the InfluExpAI icon and to advertise the use of InfluExpAI’s API on your site or service. Licensee hereby grants to InfluExpAI a nontransferable, nonexclusive license under Licensee’s trademarks during the Term to advertise that Licensee is using InfluExpAI’s Services. Each party will submit advertising materials containing the other party’s trademarks to the other party before release to the public for inspection, and such other party will have the right to modify any such advertisements. Except as set forth in this Section, nothing in this Agreement shall be considered a grant or shall be deemed to grant to one party any right, title or interest in or to the other party’s trademarks. All use of Licensee’s trademarks by InfluExpAI shall inure to the benefit of Licensee and all uses of InfluExpAI trademarks by Licensee shall inure to the benefit of InfluExpAI.</p>\r\n\r\n          <h3>TERM</h3>\r\n          <p>Unless parties have specifically agreed otherwise in a negotiated or customized Purchase Order, this Agreement shall have an initial term of one year from the date of the Purchase Order (“Initial Term”). Thereafter, this Agreement will be extended automatically on an annual basis unless either party gives 30 days prior written notice of its intent not to renew.\r\n\r\n            This Agreement may be terminated: (i) by Customer upon at least 30 days prior written notice to InfluExpAI provided that Customer shall be responsible for and shall pay to InfluExpAI any fees due; or (ii) by either party materially breaches this Agreement.\r\n\r\n            Upon termination or expiration of this Agreement all rights and obligations of the parties under this Agreement shall immediately cease, provided that certain rights and obligations, including but not limited to, the right to payment, shall survive.\r\n          </p>\r\n\r\n          <h3>PAYMENT</h3>\r\n          <p>Unless otherwise set forth in a separate Purchase Order, terms of payment shall be due according to published subscription rates.</p>\r\n\r\n          <h3>REFUND AND CANCELLATION POLICY</h3>\r\n          <p>You may cancel your monthly subscription at any time and you will not be charged for the following month(s). However InfluExpAI will not issue a refund for the current month.</p>\r\n\r\n          <h3>CUSTOMER DATA</h3>\r\n          <p>Any personal information collected from Customer will be securely held and processed in accordance with local law and will never be shared with or sold to third parties.</p>\r\n\r\n          <h3>MODIFICATIONS</h3>\r\n          <p>We may modify or amend these terms of use at any time without notice. It is your duty to read our Terms of Services regularly\r\n\r\n            If for any reason you are unable to comply with any modification or change you must stop using the InfluExpAI Services, or, if applicable, cancel your subscription. You will be deemed to have accepted the terms of use as amended if you continue to use any of InfluExpAI Services after any amendments are posted on the Site.\r\n          </p>\r\n\r\n          <h3>TERMINATION</h3>\r\n          <p>InfluExpAI may immediately suspend access to the InfluExpAI API and/or terminate this Agreement at any time, with or without cause. If you wish to terminate this Agreement you may do so by discontinuing use of the services. InfluExpAI will not be liable for any costs, expenses, or damages as a result of either party choosing to terminate this Agreement. Upon termination of this Agreement, you will promptly cease using the Services and Content.</p>\r\n\r\n          <h3>Intellectual Property Rights</h3>\r\n          <strong>Intellectual Property Rights</strong>\r\n          <p>Influencer shall perform the Services and develop any work product hereunder for InfluExpAI as a “work made for hire” according to U.S. Copyright law, and such work product, including all copyrights, trademarks and other intellectual property rights embodied therein (collectively, the “Work Product”) shall be owned exclusively by InfluExpAI. In the event any portion of the Work Product is not considered “work made for hire” or as otherwise necessary to ensure full ownership of the Work Product by InfluExpAI, Influencer hereby assigns to InfluExpAI all right, title, and interest in and to such Work Product. Influencer will sign any additional documents that may be reasonably necessary to effect such assignment.</p>\r\n\r\n          <strong>Intellectual Property Rights: </strong>\r\n          <p>No license or other right of any kind is granted by InfluExpAI or Client to Influencer, except as expressly provided in these Terms. Influencer shall not use InfluExpAI’s or Client’s copyrights, trademarks, trade names, or other intellectual property in any way except to the limited extent as may be expressly agreed in the Term Sheet.</p>\r\n\r\n          <strong>Influencer’s Content and Attributes: </strong>\r\n          <p>For the Services which Influencer is providing under these Terms and without limiting InfluExpAI’s ownership of the Work Product as specified above, Influencer gives InfluExpAI and Client the irrevocable, sublicenseable, worldwide right and permission to use any Work Product or other video, photo, written or verbal content Influencer shares or provides related to the Services (collectively, “Client-Related Content”) in any manner, in whole or in part, and for any purpose in any and in any and all media, including and without limitation, on InfluExpAI and/or Client owned or controlled websites and platforms, social media, any advertising materials, publications, marketing materials, and/or presentations, and in any and all other media, in perpetuity. Any statements, posts and/or feedback that Influencer provides may be paraphrased, amplified, shortened and/or put into conversational form. Influencer further agrees that InfluExpAI and/or Client may contact (including by means of messages on public social media platforms)</p>\r\n\r\n\r\n          <strong>Influencer about any Client-Related Content. </strong>\r\n          <p>Influencer acknowledges that participation in the Services means InfluExpAI and Client can use Influencer’s Client-Related Content and include Influencer’s name/likeness/social media handle or channel/blog name and any other Influencer attributes in any manner that InfluExpAI and/or Client determine supports the purposes of these Terms, including use in any media that accepts advertising or promotional content or communications (such as, but not limited to, digital, print, television or radio).\r\n\r\n            Influencer agrees that Influencer will not hold InfluExpAI or Client, or their respective licensees, responsible for any liability resulting from their use of Influencer’s Client-Related Content in accordance with the terms hereof. InfluExpAI and Client shall not be liable for any indirect, consequential, exemplary damages (including but not limited to lost profits) and the combined, aggregate liability of InfluExpAI and Client hereunder shall not exceed the fees payable to Influencer under the Term Sheet.\r\n          </p>\r\n\r\n\r\n          <h3>DISCLAIMER</h3>\r\n          <p>The InfluExpAI API, all related Services and Data are provided “AS IS” on an “AS AVAILABLE” basis without warranty or condition of any kind. InfluExpAI disclaims all warranties; express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement, and any warranties or conditions arising out of course of dealing or usage of trade. InfluExpAI is not responsible or liable (and makes no representation or warranty) for the accuracy, content, completeness, legality, reliability, or availability of the API.</p>\r\n\r\n          <h3>INDEMINIFICATION</h3>\r\n          <p>You will defend, indemnify and hold InfluExpAI harmless against any third party claims, liabilities or expenses incurred (including reasonable attorneys’ fees), as well as amounts finally awarded in a settlement or by a court arising from any claim or allegation by a third party arising out of (i) allegations that InfluExpAI’s use infringes or misappropriates any trademark, copyright or other intellectual property of any third party, (ii) Customer’s use of Data, (iii) InfluExpAI Services or the InfluExpAI API that are modified by Customer if the alleged infringement relates to such modification; (iv) InfluExpAI Services or the InfluExpAI API that are combined with any Customer product, process or materials where the alleged infringement relates to such combination; (v) Customer’s use of a version of the InfluExpAI Services or InfluExpAI API other than the version that was current at the time of such use; (vi) infringement or misappropriation of any proprietary right in which Customer has an interest; or (vii) your breach or alleged breach of any of your obligations or representations under this Agreement.</p>\r\n\r\n\r\n          <h3>LIMITATION OF LIABILITY</h3>\r\n          <p>IN NO EVENT WILL INFLUEXPAI BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, OR SPECIAL DAMAGES WHATSOEVER (INCLUDING LOSS OF PROFITS, BUSINESS INTERRUPTION, OR USE) ARISING OUT OF THE USE OF OR INABILITY TO USE THE CONTENT, EVEN IF IT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>\r\n\r\n          <h3>GENERAL</h3>\r\n          <p>This Agreement will be governed by and construed in accordance with the laws of the state of Texas, excluding that body of law pertaining to conflict of laws. Any legal action or proceeding arising under this Agreement will be brought exclusively in the federal or state courts located in Texas and you hereby irrevocably consent to the personal jurisdiction and venue therein. If any action is necessary to enforce the terms of this Agreement, the prevailing party will be entitled to recover its reasonable attorneys’ fees, costs and expenses in addition to any other relief to which such prevailing party may be entitled. You may not assign this Agreement by operation of law or otherwise, without InfluExpAI’s express prior written consent. Any attempt to assign this Agreement without consent will be null and void. The parties to this Agreement are independent contractors and this Agreement will not establish any relationship of partnership, joint venture, employment, franchise, or agency between the parties. The failure by either party to enforce any provision of this Agreement will not constitute a waiver of future enforcement.\r\n\r\n            If a court of competent jurisdiction holds any provision of this Agreement invalid or unenforceable, remaining provisions of the Agreement will remain in full force and effect, and the provision affected will be construed so as to be enforceable to the maximum extent permissible by law. This Agreement constitutes the complete and exclusive understanding and agreement of the parties with respect to the subject matter hereof and supersedes all prior understandings and agreements, whether written or oral, with respect to the subject matter hereof.\r\n          </p>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/contact/blog.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"blog-wrapper\">\r\n  <section class=\"title-top-bg\">\r\n    <div class=\"container-fluid\">\r\n      <h1>Feature Post</h1>\r\n    </div>\r\n  </section>\r\n  <div class=\"container-fluid blog-container\" >\r\n    <div  *ngFor=\"let page of getBlogs\">\r\n      <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12 margin-b mydiv\">-->\r\n        <div class=\"col-lg-3 col-md-3 layer-content\" style=\"margin-left: 4%; margin-top: 14px; \">\r\n          <div>\r\n            <img alt=\"ChoiceGenie\" [src]=\"page['blog_image']\">\r\n          </div>\r\n          <div class=\"blog-layout-content\">\r\n            <a target=\"_blank\">\r\n              <h3>{{page['heading']}}</h3>\r\n            </a>\r\n            <div>\r\n              <p><strong>Lorem ipsum dolor sit amet, sed te facer splendide vituperata,</strong></p>\r\n                <button class=\"btn btn-rounded\" (click)=\"getcurrentBlog(page)\">Read More</button>\r\n            </div>\r\n          </div>\r\n        <!--</div>-->\r\n      </div>\r\n      <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12 margin-b mydiv\">-->\r\n          <!--<div class=\"layer-content\">-->\r\n            <!--<div>-->\r\n              <!--<img alt=\"ChoiceGenie\" src=\"../../assets/images/blog/blog1.jpg\">-->\r\n            <!--</div>-->\r\n            <!--<div class=\"blog-layout-content\">-->\r\n              <!--<a target=\"_blank\">-->\r\n                <!--<h2>A Comprehensive Guide</h2>-->\r\n              <!--</a>-->\r\n              <!--<div>-->\r\n                <!--<p><strong>Lorem ipsum dolor sit amet, sed te facer splendide vituperata,</strong></p>-->\r\n                <!--<button class=\"btn btn-rounded\">Read More</button>-->\r\n\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n        <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12 margin-b mydiv\">-->\r\n            <!--<div class=\"layer-content\">-->\r\n              <!--<div>-->\r\n                <!--<img alt=\"ChoiceGenie\" src=\"../../assets/images/blog/blog1.jpg\">-->\r\n              <!--</div>-->\r\n              <!--<div class=\"blog-layout-content\">-->\r\n                <!--<a target=\"_blank\">-->\r\n                  <!--<h2>A Comprehensive Guide</h2>-->\r\n                <!--</a>-->\r\n                <!--<div>-->\r\n                  <!--<p><strong>Lorem ipsum dolor sit amet, sed te facer splendide vituperata,</strong></p>-->\r\n                  <!--<button class=\"btn btn-rounded\">Read More</button>-->\r\n\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n          <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12 margin-b mydiv\">-->\r\n              <!--<div class=\"layer-content\">-->\r\n                <!--<div>-->\r\n                  <!--<img alt=\"ChoiceGenie\" src=\"../../assets/images/blog/blog1.jpg\">-->\r\n                <!--</div>-->\r\n                <!--<div class=\"blog-layout-content\">-->\r\n                  <!--<a target=\"_blank\">-->\r\n                    <!--<h2>A Comprehensive Guide</h2>-->\r\n                  <!--</a>-->\r\n                  <!--<div>-->\r\n                    <!--<p><strong>Lorem ipsum dolor sit amet, sed te facer splendide vituperata,</strong></p>-->\r\n                    <!--<button class=\"btn btn-rounded\">Read More</button>-->\r\n\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"col-lg-3 col-md-6 col-sm-12 col-xs-12 margin-b mydiv\">-->\r\n                <!--<div class=\"layer-content\">-->\r\n                  <!--<div>-->\r\n                    <!--<img alt=\"ChoiceGenie\" src=\"../../assets/images/blog/blog1.jpg\">-->\r\n                  <!--</div>-->\r\n                  <!--<div class=\"blog-layout-content\">-->\r\n                    <!--<a target=\"_blank\">-->\r\n                      <!--<h2>A Comprehensive Guide</h2>-->\r\n                    <!--</a>-->\r\n                    <!--<div>-->\r\n                      <!--<p><strong>Lorem ipsum dolor sit amet, sed te facer splendide vituperata,</strong></p>-->\r\n                      <!--<button class=\"btn btn-rounded\">Read More</button>-->\r\n\r\n                    <!--</div>-->\r\n                  <!--</div>-->\r\n                <!--</div>-->\r\n              <!--</div>-->\r\n    </div>\r\n  </div>\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact/contact.component.css":
/***/ (function(module, exports) {

module.exports = "/* #contact{padding-top:90px;width:100%;color:#fff}.section-content{text-align:center;color:#000}.contact-section .form-line{border-right:1px solid #B29999}.form-group{margin:0 0 8px}.submit{font-size:25px;float:right;background-color:#000;color:#fff;border:none;border-radius:50px;box-shadow:0 0 10px #ccc;height:55px;padding:0 10px;font-weight:900}\r\n.contact-address h2 {\r\n    font-size: 32px;\r\n    line-height: 32px;\r\n    margin: 0;\r\n    color: #333;\r\n}\r\n.contact-address h5 {\r\n    font-size: 18px;\r\n    margin: 10px 0;\r\n    line-height: 1.1;\r\n}\r\n#contact-map {\r\n    padding: 20px 50px 10px;\r\n    margin-top: 20px;\r\n    background: #fafafa;\r\n} */\r\n/* .textarea{\r\n    \r\n    height: 152px;\r\n}\r\n.fa-paper-plane{\r\n    margin-right: 5px;\r\n}\r\n.heading-1 {\r\n    font-size: 32px;\r\n    color: #000;\r\n    font-weight: 600;\r\n    text-align: center;\r\n    margin: 32px;\r\n}\r\n.section-content p {\r\n    font-size: 20px;\r\n    margin-bottom: 10px;\r\n}\r\n.section-content {\r\n    text-align: center;\r\n    color: #000;\r\n}\r\n.contact-address h5 {\r\n    font-size: 18px;\r\n    margin: 10px 0;\r\n    line-height: 1.1;\r\n}\r\n.contact-address h2 {\r\n    font-size: 32px;\r\n    line-height: 32px;\r\n    margin: 0;\r\n    color: #333;\r\n}\r\n.submit-button{\r\n    margin: 17px\r\n}  */\r\n#contact{padding-top:90px;width:100%;color:#fff}\r\n.section-content{text-align:center;color:#000}\r\n.contact-section .form-line{border-right:1px solid #B29999}\r\n.form-group{margin:0 0 8px}\r\n.submit{font-size:25px;float:right;background-color:#000;color:#fff;border:none;border-radius:50px;-webkit-box-shadow:0 0 10px #ccc;box-shadow:0 0 10px #ccc;height:55px;padding:0 10px;font-weight:900}\r\n.contact-address h2 {\r\n    font-size: 32px;\r\n    line-height: 32px;\r\n    margin: 0;\r\n    color: #333;\r\n}\r\n.contact-address h5 {\r\n    font-size: 18px;\r\n    margin: 10px 0;\r\n    line-height: 1.1;\r\n}\r\n#contact-map {\r\n    padding: 20px 50px 10px;\r\n    margin-top: 20px;\r\n    background: #fafafa;\r\n}\r\n.textarea{\r\n    \r\n    height: 152px;\r\n}\r\n.fa-paper-plane{\r\n    margin-right: 5px;\r\n}"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<!-- <section id=\"contact\">\r\n  <div class=\"section-content\">\r\n    <h1 class=\"heading-1\">Get in Touch with us</h1>\r\n    <p>If you feel any kind of queries Please feel free to contact with Us. Just leave a Message, Our customer support person will contact you</p>\r\n  </div>\r\n  <div class=\"contact-section\">\r\n    <div class=\"container\">\r\n      <form name=\"form\" role=\"form\"  #f=\"ngForm\" novalidate (ngSubmit)=\" f.form.valid && onSubmit()\">\r\n\r\n        <div class=\"col-md-6 form-line\">\r\n          <div class=\"form-group\">\r\n            <label>Your name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\" Enter Your Name\"  [(ngModel)]=\"model.name\" #Name=\"ngModel\" #name\r\n                   required >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Email Address</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\" Enter Your Email\" [(ngModel)]=\"model.email\" #Email=\"ngModel\" #email\r\n                   required >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Mobile No.</label>\r\n            <input type=\"tel\" class=\"form-control\" name=\"telephone\" placeholder=\" Enter Your Mobile No.\" [(ngModel)]=\"model.phone\" #Telephone=\"ngModel\" #telephone\r\n                   required >\r\n          </div>\r\n          <div class=\"g-recaptcha\" data-sitekey=\"6Lf5bj8UAAAAAEXq4N3bX8zZYb8VQfOEQa7-1aWS\"></div>\r\n        </div>\r\n        <div class=\"col-md-6 form-line border-none\">\r\n          <div class=\"form-group\">\r\n            <label> Message</label>\r\n            <textarea class=\"form-control\" name=\"message\" placeholder=\"Enter Your Message\" [(ngModel)]=\"model.message\" #Message=\"ngModel\" #message\r\n                      required > </textarea>\r\n          </div>\r\n          <div>\r\n\r\n            <button type=\"submit\" class=\"button pull-right\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>Send Message</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"contact-map\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <iframe width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=5050%20Quorum%20Drive%20Suite%20700%20Dallas%2C%20TX%2075254&key=AIzaSyBcVkwSRC2BW9c3FsFmhM61fM1c3goI9_4\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <div  class=\"contact-address\">\r\n            <h2 >InfluExpert.AI</h2>\r\n            <h5 > 5050 Quorum Drive Ste 700 Dallas TX 75254</h5>\r\n            <h2 > Establish Contact</h2>\r\n            <h5  class=\"phone-contact\">\r\n              <p ><i  class=\"fa fa-envelope-o\"></i>&nbsp;&nbsp;<span >Email: </span> contact AT RFPGurus DOT com</p>\r\n              <p ><i  class=\"fa fa-phone\"></i>&nbsp;&nbsp; <span >Voice: </span> +1-214-302-7330 </p>\r\n            </h5>\r\n          </div>\r\n\r\n\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</section> -->\r\n\r\n\r\n\r\n<!-- <section>\r\n  <div class=\"section-content\">\r\n    <h1 class=\"heading-1\">Get in Touch with us</h1>\r\n    <p>If you feel any kind of queries Please feel free to contact with Us. Just leave a Message, Our customer support person will contact you</p>\r\n  </div>\r\n  <div class=\"form-section\">\r\n    <div class=\"container \">\r\n      <div class=\"row\">\r\n      <div class=\"col-md-6\">\r\n\r\n      \r\n      <form class=\"contact-us-form\"  name=\"form\" role=\"form\"  #f=\"ngForm\" novalidate (ngSubmit)=\" f.form.valid && onSubmit()\">\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n              <input matInput placeholder=\"Name\"  name=\"name\" [(ngModel)]=\"model.name\" #Name=\"ngModel\" #name\r\n              required>\r\n            </mat-form-field>\r\n            <mat-form-field class=\"example-full-width\">\r\n                <input matInput placeholder=\"Email\"   name=\"email\" [(ngModel)]=\"model.email\" #Email=\"ngModel\" #email\r\n                required>\r\n              </mat-form-field>\r\n              <mat-form-field class=\"example-full-width\">\r\n                  <input matInput placeholder=\"Telephone\"  name=\"telephone\" [(ngModel)]=\"model.phone\" #Telephone=\"ngModel\" #telephone \r\n                  required>\r\n                </mat-form-field>\r\n     \r\n      </form>\r\n    </div>\r\n    <div class=\"col-md-6\">\r\n        <mat-form-field class=\"example-full-width textarea-input\">\r\n            <textarea class=\"textarea\" matInput placeholder=\"Message\"></textarea>\r\n          </mat-form-field>\r\n          <div>\r\n\r\n              <button type=\"submit\" class=\"btn btn-primary submit-button pull-right\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>Send Message</button>\r\n            </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<section id=\"contact-map\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <iframe width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=5050%20Quorum%20Drive%20Suite%20700%20Dallas%2C%20TX%2075254&key=AIzaSyBcVkwSRC2BW9c3FsFmhM61fM1c3goI9_4\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <div  class=\"contact-address\">\r\n            <h2 >InfluExpert.AI</h2>\r\n            <h5 > 5050 Quorum Drive Ste 700 Dallas TX 75254</h5>\r\n            <h2 > Establish Contact</h2>\r\n            <h5  class=\"phone-contact\">\r\n              <p ><i  class=\"fa fa-envelope-o\"></i>&nbsp;&nbsp;<span >Email: </span> contact AT RFPGurus DOT com</p>\r\n              <p ><i  class=\"fa fa-phone\"></i>&nbsp;&nbsp; <span >Voice: </span> +1-214-302-7330 </p>\r\n            </h5>\r\n          </div>\r\n\r\n\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</section>\r\n<app-footer></app-footer> -->\r\n\r\n\r\n\r\n<!-- <app-header></app-header> -->\r\n<section id=\"contact\">\r\n  <div class=\"section-content\">\r\n    <h1 class=\"heading-1\">Get in Touch with us</h1>\r\n    <p>If you feel any kind of queries Please feel free to contact with Us. Just leave a Message, Our customer support person will contact you</p>\r\n  </div>\r\n  <div class=\"contact-section\">\r\n    <div class=\"container\">\r\n      <form name=\"form\" role=\"form\"  #f=\"ngForm\" novalidate (ngSubmit)=\" f.form.valid && onSubmit()\">\r\n\r\n        <div class=\"col-md-6 form-line\">\r\n          <div class=\"form-group\">\r\n            <label>Your name</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"name\" placeholder=\" Enter Your Name\"  [(ngModel)]=\"model.name\" #Name=\"ngModel\" #name\r\n                   required >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Email Address</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" placeholder=\" Enter Your Email\" [(ngModel)]=\"model.email\" #Email=\"ngModel\" #email\r\n                   required >\r\n          </div>\r\n          <div class=\"form-group\">\r\n            <label>Mobile No.</label>\r\n            <input type=\"tel\" class=\"form-control\" name=\"telephone\" placeholder=\" Enter Your Mobile No.\" [(ngModel)]=\"model.phone\" #Telephone=\"ngModel\" #telephone\r\n                   required >\r\n          </div>\r\n          <div class=\"g-recaptcha\" data-sitekey=\"6Lf5bj8UAAAAAEXq4N3bX8zZYb8VQfOEQa7-1aWS\"></div>\r\n        </div>\r\n        <div class=\"col-md-6 form-line border-none\">\r\n          <div class=\"form-group\">\r\n            <label> Message</label>\r\n            <textarea class=\"form-control\" name=\"message\" placeholder=\"Enter Your Message\" [(ngModel)]=\"model.message\" #Message=\"ngModel\" #message\r\n                      required > </textarea>\r\n          </div>\r\n          <div>\r\n\r\n            <button type=\"submit\" class=\"button pull-right\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i>Send Message</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n<section id=\"contact-map\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-8\">\r\n        <iframe width=\"100%\" height=\"350\" frameborder=\"0\" style=\"border:0\" src=\"https://www.google.com/maps/embed/v1/place?q=5050%20Quorum%20Drive%20Suite%20700%20Dallas%2C%20TX%2075254&key=AIzaSyBcVkwSRC2BW9c3FsFmhM61fM1c3goI9_4\" allowfullscreen></iframe>\r\n      </div>\r\n      <div class=\"col-md-4\">\r\n          <div  class=\"contact-address\">\r\n            <h2 >InfluExpert.AI</h2>\r\n            <h5 > 5050 Quorum Drive Ste 700 Dallas TX 75254</h5>\r\n            <h2 > Establish Contact</h2>\r\n            <h5  class=\"phone-contact\">\r\n              <p ><i  class=\"fa fa-envelope-o\"></i>&nbsp;&nbsp;<span >Email: </span> contact AT RFPGurus DOT com</p>\r\n              <p ><i  class=\"fa fa-phone\"></i>&nbsp;&nbsp; <span >Voice: </span> +1-214-302-7330 </p>\r\n            </h5>\r\n          </div>\r\n\r\n\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- <p>{{f.value}}</p> -->\r\n</section>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ContactComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return WhatIsInfluexpaiComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return TermsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return PrivacyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return HowItWorksComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return TermsAndConditionsComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return PrivacyAndPolicyComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BlogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_serv_http_service__ = __webpack_require__("./src/app/serv/http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
// import { Component, OnInit } from '@angular/core';
// import {HttpService} from '../services/http-service';
// import {AuthenticationService} from '../_services';
// import swal from 'sweetalert2'
// import {Router} from '@angular/router';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrls: ['./contact.component.css'],
//   providers:[AuthenticationService]
// })
// export class ContactComponent implements OnInit {
//   resolved(captchaResponse: string) {
//     console.log(`Resolved captcha with response ${captchaResponse}:`);
//   }
//   constructor(private obj: AuthenticationService, private preloadersvc: HttpService) { }
//   ngOnInit() {
//   }
//   model: any= {};
//   onSubmit(){
//           this.obj.contact_Us(this.model.name, this.model.email, this.model.phone, this.model.message)
//               .subscribe(data =>{console.log('Sent')});
//           this.show();
//           this.clear();
//   }
//   show(){
//     swal.fire({
//         type: 'success',
//         title: 'Your Message has been sent'
//     })
//   }
//   clear(){
//     this.model.name= '',
//         this.model.email='',
//           this.model.phone='',
//             this.model.message=''
//   }
// }
// @Component({
//   selector: 'whatisinfluexpai',
//   templateUrl: 'what-is-influexpai.html',
// })
// export class WhatIsInfluexpaiComponent {
//   constructor() { }
//   ngOnInit() {
//   }
// }
// @Component({
//   selector: 'HowItWorks',
//   templateUrl: 'How-It-Works.html',
// })
// export class HowItWorksComponent {
//   constructor() { }
//   ngOnInit() {
//   }
// }
// @Component({
//   selector: 'terms',
//   templateUrl: 'terms.html',
// })
// export class TermsComponent {
//   constructor() { }
//   ngOnInit() {
//   }
// }
// @Component({
//   selector: 'privacy',
//   templateUrl: 'privacy.html',
// })
// export class PrivacyComponent {
//   constructor() { }
//   ngOnInit() {
//   }
// }
// @Component({
//   selector: 'Terms-and-conditions',
//   templateUrl: 'Terms-and-conditions.html',
// })
// export class TermsAndConditionsComponent {
//   constructor() { }
//   ngOnInit() {
//   }
// }
// @Component({
//   selector: 'privacy-and-policy',
//   templateUrl: 'privacy-and-policy.html',
// })
// export class PrivacyAndPolicyComponent {
//   constructor() { }
//   ngOnInit() {
//   }
// }
// @Component({
//   selector: 'blog',
//   templateUrl: 'blog.html',
//     providers: [AuthenticationService]
// })
// export class BlogComponent {
//     getBlogs:any;
//     // @Input() id: ;
//   constructor(private obj:AuthenticationService, private router: Router) { }
//   ngOnInit() {
//   this.getAllBlogs();
//   }
//         getAllBlogs(){
//                 this.obj.get_All_Blog().subscribe(data=>{
//                     this.getBlogs= data
//                 console.log(this.getBlogs);
//                 })
//         }
//     getcurrentBlog(page){
//         this.router.navigate(['blog1'], { queryParams: {Profile: JSON.stringify(page)}});
//     }
// }

// import {HttpService} from '../services/http-service';
// import {AuthenticationService} from '../_services';




var ContactComponent = (function () {
    function ContactComponent(obj, preloadersvc) {
        this.obj = obj;
        this.preloadersvc = preloadersvc;
        this.model = {};
    }
    ContactComponent.prototype.resolved = function (captchaResponse) {
        console.log("Resolved captcha with response " + captchaResponse + ":");
    };
    ContactComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    ContactComponent.prototype.onSubmit = function () {
        this.obj.contact_Us(this.model.name, this.model.email, this.model.phone, this.model.message)
            .subscribe(function (data) { console.log('Sent'); });
        this.show();
        this.clear();
    };
    ContactComponent.prototype.show = function () {
        __WEBPACK_IMPORTED_MODULE_3_sweetalert2___default()({
            type: 'success',
            title: 'Your Message has been sent'
        });
    };
    ContactComponent.prototype.clear = function () {
        this.model.name = '',
            this.model.email = '',
            this.model.phone = '',
            this.model.message = '';
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__("./src/app/contact/contact.component.html"),
            styles: [__webpack_require__("./src/app/contact/contact.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* App_service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* App_service */], __WEBPACK_IMPORTED_MODULE_1_app_serv_http_service__["a" /* HttpService */]])
    ], ContactComponent);
    return ContactComponent;
}());

var WhatIsInfluexpaiComponent = (function () {
    function WhatIsInfluexpaiComponent() {
    }
    WhatIsInfluexpaiComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    WhatIsInfluexpaiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'whatisinfluexpai',
            template: __webpack_require__("./src/app/contact/what-is-influexpai.html"),
        }),
        __metadata("design:paramtypes", [])
    ], WhatIsInfluexpaiComponent);
    return WhatIsInfluexpaiComponent;
}());

var TermsComponent = (function () {
    function TermsComponent() {
    }
    TermsComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    TermsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'terms',
            template: __webpack_require__("./src/app/contact/terms.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TermsComponent);
    return TermsComponent;
}());

var PrivacyComponent = (function () {
    function PrivacyComponent() {
    }
    PrivacyComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    PrivacyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'privacy',
            template: __webpack_require__("./src/app/contact/privacy.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyComponent);
    return PrivacyComponent;
}());

var HowItWorksComponent = (function () {
    function HowItWorksComponent() {
    }
    HowItWorksComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    HowItWorksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'HowItWorks',
            template: __webpack_require__("./src/app/contact/How-It-Works.html"),
        }),
        __metadata("design:paramtypes", [])
    ], HowItWorksComponent);
    return HowItWorksComponent;
}());

var TermsAndConditionsComponent = (function () {
    function TermsAndConditionsComponent() {
    }
    TermsAndConditionsComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    TermsAndConditionsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'Terms-and-conditions',
            template: __webpack_require__("./src/app/contact/Terms-and-conditions.html"),
        }),
        __metadata("design:paramtypes", [])
    ], TermsAndConditionsComponent);
    return TermsAndConditionsComponent;
}());

var PrivacyAndPolicyComponent = (function () {
    function PrivacyAndPolicyComponent() {
    }
    PrivacyAndPolicyComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    PrivacyAndPolicyComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'privacy-and-policy',
            template: __webpack_require__("./src/app/contact/privacy-and-policy.html"),
        }),
        __metadata("design:paramtypes", [])
    ], PrivacyAndPolicyComponent);
    return PrivacyAndPolicyComponent;
}());

var BlogComponent = (function () {
    // @Input() id: ;
    function BlogComponent(obj, router) {
        this.obj = obj;
        this.router = router;
    }
    BlogComponent.prototype.ngOnInit = function () {
        this.getAllBlogs();
    };
    BlogComponent.prototype.getAllBlogs = function () {
        var _this = this;
        this.obj.get_All_Blog().subscribe(function (data) {
            _this.getBlogs = data;
            console.log(_this.getBlogs);
        });
    };
    BlogComponent.prototype.getcurrentBlog = function (page) {
        this.router.navigate(['blog1'], { queryParams: { Profile: JSON.stringify(page) } });
    };
    BlogComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'blog',
            template: __webpack_require__("./src/app/contact/blog.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* App_service */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__app_service__["a" /* App_service */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/contact/privacy-and-policy.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"terms-container-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"terms-condition-wrapper\">\r\n          <h2>InfluExpAI Privacy Policy</h2>\r\n\r\n          <h3>Introduction</h3>\r\n          <p>At InfluExpAI (“InfluExpAI”, “we”) we understand you care about data privacy and how your personal information is used and shared by us. We have created this privacy policy (“privacy policy”) to show we are commitment to protecting and safeguarding the privacy of the users (“users”, “customers”, “you”, “your”) of the services (“services”, “service”, “InfluExpAI Services”) we provide.</p>\r\n\r\n          <h3>What information do we collect?</h3>\r\n          <p>As part of the service we offer we gather a range of user data as explained below.</p>\r\n\r\n          <h3>Cookies and website tracking data</h3>\r\n          <p>At InfluExpAI we use cookies, tags and scripts to track usage activity on our website (“website activity”) to enhance user experience or report internally on user activity on our site. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them.\r\n            Our users are free to opt-out of cookie tracking by setting their web browser to refuse cookies, or to alert you when cookies are being sent however, if you do so it may alter the experience of using our website and/or services we provide.\r\n          </p>\r\n\r\n          <h3>Personal identification information</h3>\r\n          <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>\r\n\r\n          <h3>Non-personal identification information</h3>\r\n          <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers’ utilized and other similar information. </p>\r\n\r\n          <h3>Information sharing and storing</h3>\r\n          <p>Personal information will never be sold or rented to third parties but it may be shared in certain circumstances as outlined below:\r\n\r\n            With trusted third parties – We may share information with our subsidiaries, affiliated companies or other trusted business partners (“partners”) for the purpose of processing personal information or Analyzed Data on our behalf. These Partners will only use the information to carry out specific business obligations to InfluExpAI which focuses on providing our service, these Partners are bound to uphold the same standards of security and confidentiality that we have set forth in this privacy policy.\r\n\r\n            In protection of InfluExpAI and others – We reserve the right to share or access your information when necessary to protect the rights and property of InfluExpAI or in compliance with law or a court order.\r\n          </p>\r\n\r\n          <h3>Changes to this policy</h3>\r\n          <p>From time to time this privacy policy may be amended in accordance with how we manage our users’ personal information.</p>\r\n\r\n          <h3>Your acceptance of these terms</h3>\r\n          <p>By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>\r\n\r\n          <h3>Data Security and retention</h3>\r\n          <p>At InfluExpAI we take every precaution possible to protect the security of our Users and Customers information. We use SSL encrypted technology to protect the transfer of data and personal information. We store any personal information on secure servers and use state of the art, industry standard protections and procedures to ensure the safety of such information. We follow generally accepted industry standards to protect the personal information submitted via our service, during transfer and once it has been received.\r\n\r\n            While we take every precaution possible, the nature of the internet and our business means we cannot guarantee that all information stored on or transmitted to or from or servers will be free from unauthorized access. By using the InfluExpAI Services you acknowledge that you understand and agree to the risks involved.\r\n          </p>\r\n\r\n          <h3>Retention</h3>\r\n          <p>Private input text that is submitted by users to the API is not stored or persisted by InfluExpAI. As part of the service we deliver, however, we do store URLs that are submitted for analysis by users. These URLs are anonymized to ensure there is no association between users and URLs submitted.\r\n\r\n            For internal purposes we do track high-level usage stats (“usage stats”) which are necessary for service monitoring and customer billing. These usage stats include features used, number of calls made and SDKs/programming languages used by our users.\r\n          </p>\r\n\r\n          <h3>Hosting providers</h3>\r\n          <p>As is common practice for SaaS providers we partner with hosting providers from whom we lease servers. At InfluExpAI we work with tier 1 hosting providers only, including and not limited to Amazon Web Services, Microsoft Azure, Google Cloud Platform and Digital Ocean.</p>\r\n\r\n          <h3>Secure access and transfer of data</h3>\r\n          <p>Secure access and transfer of data</p>\r\n\r\n          <h3>Contact</h3>\r\n          <p>If you have any concerns or questions regarding our privacy policy please don’t hesitate to contact us. Please email contact@Influexpai.com with your query or question.</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- <app-footer></app-footer> -->"

/***/ }),

/***/ "./src/app/contact/privacy.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"terms-container-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"terms-condition-wrapper\">\r\n          <h2>InfluExpAI Privacy Policy</h2>\r\n\r\n          <h3>Introduction</h3>\r\n          <p>At InfluExpAI (“InfluExpAI”, “we”) we understand you care about data privacy and how your personal information is used and shared by us. We have created this privacy policy (“privacy policy”) to show we are commitment to protecting and safeguarding the privacy of the users (“users”, “customers”, “you”, “your”) of the services (“services”, “service”, “InfluExpAI Services”) we provide.</p>\r\n\r\n          <h3>What information do we collect?</h3>\r\n          <p>As part of the service we offer we gather a range of user data as explained below.</p>\r\n\r\n          <h3>Cookies and website tracking data</h3>\r\n          <p>At InfluExpAI we use cookies, tags and scripts to track usage activity on our website (“website activity”) to enhance user experience or report internally on user activity on our site. User’s web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them.\r\n            Our users are free to opt-out of cookie tracking by setting their web browser to refuse cookies, or to alert you when cookies are being sent however, if you do so it may alter the experience of using our website and/or services we provide.\r\n          </p>\r\n\r\n          <h3>Personal identification information</h3>\r\n          <p>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, register on the site, subscribe to the newsletter, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number, and credit card information. We will collect personal identification information from Users only if they voluntarily submit such information to us. Users can always refuse to supply personally identification information, except that it may prevent them from engaging in certain Site related activities.</p>\r\n\r\n          <h3>Non-personal identification information</h3>\r\n          <p>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means of connection to our Site, such as the operating system and the Internet service providers’ utilized and other similar information. </p>\r\n\r\n          <h3>Information sharing and storing</h3>\r\n          <p>Personal information will never be sold or rented to third parties but it may be shared in certain circumstances as outlined below:\r\n\r\n            With trusted third parties – We may share information with our subsidiaries, affiliated companies or other trusted business partners (“partners”) for the purpose of processing personal information or Analyzed Data on our behalf. These Partners will only use the information to carry out specific business obligations to InfluExpAI which focuses on providing our service, these Partners are bound to uphold the same standards of security and confidentiality that we have set forth in this privacy policy.\r\n\r\n            In protection of InfluExpAI and others – We reserve the right to share or access your information when necessary to protect the rights and property of InfluExpAI or in compliance with law or a court order.\r\n          </p>\r\n\r\n          <h3>Changes to this policy</h3>\r\n          <p>From time to time this privacy policy may be amended in accordance with how we manage our users’ personal information.</p>\r\n\r\n          <h3>Your acceptance of these terms</h3>\r\n          <p>By using this Site, you signify your acceptance of this policy and terms of service. If you do not agree to this policy, please do not use our Site. Your continued use of the Site following the posting of changes to this policy will be deemed your acceptance of those changes.</p>\r\n\r\n          <h3>Data Security and retention</h3>\r\n          <p>At InfluExpAI we take every precaution possible to protect the security of our Users and Customers information. We use SSL encrypted technology to protect the transfer of data and personal information. We store any personal information on secure servers and use state of the art, industry standard protections and procedures to ensure the safety of such information. We follow generally accepted industry standards to protect the personal information submitted via our service, during transfer and once it has been received.\r\n\r\n            While we take every precaution possible, the nature of the internet and our business means we cannot guarantee that all information stored on or transmitted to or from or servers will be free from unauthorized access. By using the InfluExpAI Services you acknowledge that you understand and agree to the risks involved.\r\n          </p>\r\n\r\n          <h3>Retention</h3>\r\n          <p>Private input text that is submitted by users to the API is not stored or persisted by InfluExpAI. As part of the service we deliver, however, we do store URLs that are submitted for analysis by users. These URLs are anonymized to ensure there is no association between users and URLs submitted.\r\n\r\n            For internal purposes we do track high-level usage stats (“usage stats”) which are necessary for service monitoring and customer billing. These usage stats include features used, number of calls made and SDKs/programming languages used by our users.\r\n          </p>\r\n\r\n          <h3>Hosting providers</h3>\r\n          <p>As is common practice for SaaS providers we partner with hosting providers from whom we lease servers. At InfluExpAI we work with tier 1 hosting providers only, including and not limited to Amazon Web Services, Microsoft Azure, Google Cloud Platform and Digital Ocean.</p>\r\n\r\n          <h3>Secure access and transfer of data</h3>\r\n          <p>Secure access and transfer of data</p>\r\n\r\n          <h3>Contact</h3>\r\n          <p>If you have any concerns or questions regarding our privacy policy please don’t hesitate to contact us. Please email contact@Influexpai.com with your query or question.</p>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact/terms.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"terms-container-wrapper\">\r\n  <div class=\"container\">\r\n    <div class=\"row\">\r\n      <div class=\"col-md-12 col-sm-12 col-xs-12\">\r\n        <div class=\"terms-condition-wrapper\">\r\n          <h2>InfluExpert.AI Terms of Service</h2>\r\n\r\n          <p>In subscribing to InfluExpert.AI services, you have accepted the purchase order as presented to you by InfluExpert.AI or our designated affiliates. By your subscription, acceptance of the purchase order, and /or any use of InfluExpert.AI products or services, you or the entity that you represent (“Customer”), are unconditionally consenting to be bound by these Terms and Conditions and the applicable purchase order (The Agreement”).</p>\r\n          <h1>This Agreement is effective as of the date of Subscription.</h1>\r\n          <h3>REPRESENTATIONS</h3>\r\n          <p>You represent and warrant that you have the necessary power and authority to enter into this Agreement on the behalf of yourself and/or the entity you represent. You further agree to perform the obligations hereunder</p>\r\n\r\n          <h3>API LICENSE</h3>\r\n          <p>Subject to the terms and conditions of this Agreement, during the Term, InfluExpert.AI grants you a limited, non-exclusive, non-transferable, non-sub-licensable, non-assignable license to access and use the selected proprietary application programming interface solely to implement, integrate and use the InfluExpert.AI Services for personal or internal business purposes.</p>\r\n\r\n          <h3>API KEY</h3>\r\n          <p>InfluExpert.AI makes the API available to you electronically, requiring an InfluExpert.AI API Key for you to access the services. As a condition of receipt and use, of this Key it is acknowledged that API key is to be kept private. It may not be shared or otherwise disclosed to third parties. You acknowledge that it is your responsibility to protect this API Key. You also acknowledge that you will not create multiple accounts to get multiple API Keys at any time and under whatever circumstances.</p>\r\n\r\n          <h3>API RESTRICTIONS</h3>\r\n          <p>Provision of the InfluExpert.AI Service is conditioned upon Customer’s proper use of the InfluExpert.AI API. Except as expressly authorized under this Agreement, Customer may not:</p>\r\n\r\n          <ul class=\"terms-list\">\r\n            <li>Copy, rent, lease, sell, transfer, assign, sublicense, disassemble, reverse engineer, create derivative works, decompile, modify, adapt or alter any part of the InfluExpert.AI API;</li>\r\n            <li>Use the InfluExpert.AI API on behalf of any third party or otherwise make the API available over a network where it could be used by others;</li>\r\n            <li>Create multiple accounts and/or use multiple API Keys;</li>\r\n            <li>Publish information obtained through use of the API;</li>\r\n            <li>Use the Product to reproduce copyrighted material;</li>\r\n            <li>Use the InfluExpert.AI API to disable, interfere with, or override InfluExpert.AI Services in a manner that bypasses this Agreement or the API Key registration process, including but not limited to; proxy servers, spiders, robots or other technology;</li>\r\n            <li>Use the InfluExpert.AI API in any manner that violates any laws directly or indirectly.</li>\r\n          </ul>\r\n\r\n          <h3>DATA LICENSE</h3>\r\n          <p>As part of the InfluExpert.AI Service, InfluExpAI collects and generates certain content by aggregating information regarding publicly available web pages utilizing InfluExpAI’s proprietary technology. As part of the API Service, certain Data is made publicly available to end-users. Data does not contain any personally identifiable information regarding any end users. InfluExpAI owns all right, title and interest in and to all compiled Data and cataloging of Data as presented.\r\n\r\n            Subject to the terms and conditions of this Agreement, InfluExpAI grants to Customer a non-exclusive, non-sublicensable, non-transferable license to use, copy and modify the Data solely for Customer’s internal business purposes. Customer shall have no right to sublicense, sell, syndicate or otherwise share the Data with any third party.\r\n\r\n            You may only use the Data or Content output or provided by InfluExpAI for internal purposes only and, unless expressly authorized herein, you may not publicly release or disclose any data or usage statistics or other information regarding the Data or Content. You agree to and will make available to InfluExpAI any usage statistics or other information regarding the access and use of the InfluExpAI API.\r\n          </p>\r\n\r\n          <h3>ATTRIBUTION</h3>\r\n          <p>Basic or free subscribers using the InfluExpAI API and related Content or Data, shall agree to conspicuously display the InfluExpAI API logo to indicate that InfluExpAI technology is being used.\r\n\r\n            This graphic shall measure at least 200 by 100 pixels and be displayed on all web pages, documents or other renderings where InfluExpAI API Content or API data is used.\r\n\r\n            In addition you provide a clickable hyperlink to InfluExpAI which shall read: “Text Analysis by InfluExpAI API” within your website or application. Similar attributions must be used in all published and/or printed works, including but not limited to research papers and journal articles.\r\n          </p>\r\n\r\n          <h3>TRADEMARK LICENSING</h3>\r\n          <p>InfluExpAI hereby grants a nontransferable, nonexclusive license to use InfluExpAI’s trademarks during the Term to display the InfluExpAI icon and to advertise the use of InfluExpAI’s API on your site or service. Licensee hereby grants to InfluExpAI a nontransferable, nonexclusive license under Licensee’s trademarks during the Term to advertise that Licensee is using InfluExpAI’s Services. Each party will submit advertising materials containing the other party’s trademarks to the other party before release to the public for inspection, and such other party will have the right to modify any such advertisements. Except as set forth in this Section, nothing in this Agreement shall be considered a grant or shall be deemed to grant to one party any right, title or interest in or to the other party’s trademarks. All use of Licensee’s trademarks by InfluExpAI shall inure to the benefit of Licensee and all uses of InfluExpAI trademarks by Licensee shall inure to the benefit of InfluExpAI.</p>\r\n\r\n          <h3>TERM</h3>\r\n          <p>Unless parties have specifically agreed otherwise in a negotiated or customized Purchase Order, this Agreement shall have an initial term of one year from the date of the Purchase Order (“Initial Term”). Thereafter, this Agreement will be extended automatically on an annual basis unless either party gives 30 days prior written notice of its intent not to renew.\r\n\r\n            This Agreement may be terminated: (i) by Customer upon at least 30 days prior written notice to InfluExpAI provided that Customer shall be responsible for and shall pay to InfluExpAI any fees due; or (ii) by either party materially breaches this Agreement.\r\n\r\n            Upon termination or expiration of this Agreement all rights and obligations of the parties under this Agreement shall immediately cease, provided that certain rights and obligations, including but not limited to, the right to payment, shall survive.\r\n          </p>\r\n\r\n          <h3>PAYMENT</h3>\r\n          <p>Unless otherwise set forth in a separate Purchase Order, terms of payment shall be due according to published subscription rates.</p>\r\n\r\n          <h3>REFUND AND CANCELLATION POLICY</h3>\r\n          <p>You may cancel your monthly subscription at any time and you will not be charged for the following month(s). However InfluExpAI will not issue a refund for the current month.</p>\r\n\r\n          <h3>CUSTOMER DATA</h3>\r\n          <p>Any personal information collected from Customer will be securely held and processed in accordance with local law and will never be shared with or sold to third parties.</p>\r\n\r\n          <h3>MODIFICATIONS</h3>\r\n          <p>We may modify or amend these terms of use at any time without notice. It is your duty to read our Terms of Services regularly\r\n\r\n            If for any reason you are unable to comply with any modification or change you must stop using the InfluExpAI Services, or, if applicable, cancel your subscription. You will be deemed to have accepted the terms of use as amended if you continue to use any of InfluExpAI Services after any amendments are posted on the Site.\r\n          </p>\r\n\r\n          <h3>TERMINATION</h3>\r\n          <p>InfluExpAI may immediately suspend access to the InfluExpAI API and/or terminate this Agreement at any time, with or without cause. If you wish to terminate this Agreement you may do so by discontinuing use of the services. InfluExpAI will not be liable for any costs, expenses, or damages as a result of either party choosing to terminate this Agreement. Upon termination of this Agreement, you will promptly cease using the Services and Content.</p>\r\n\r\n          <h3>Intellectual Property Rights</h3>\r\n          <strong>Intellectual Property Rights</strong>\r\n          <p>Influencer shall perform the Services and develop any work product hereunder for InfluExpAI as a “work made for hire” according to U.S. Copyright law, and such work product, including all copyrights, trademarks and other intellectual property rights embodied therein (collectively, the “Work Product”) shall be owned exclusively by InfluExpAI. In the event any portion of the Work Product is not considered “work made for hire” or as otherwise necessary to ensure full ownership of the Work Product by InfluExpAI, Influencer hereby assigns to InfluExpAI all right, title, and interest in and to such Work Product. Influencer will sign any additional documents that may be reasonably necessary to effect such assignment.</p>\r\n\r\n          <strong>Intellectual Property Rights: </strong>\r\n          <p>No license or other right of any kind is granted by InfluExpAI or Client to Influencer, except as expressly provided in these Terms. Influencer shall not use InfluExpAI’s or Client’s copyrights, trademarks, trade names, or other intellectual property in any way except to the limited extent as may be expressly agreed in the Term Sheet.</p>\r\n\r\n          <strong>Influencer’s Content and Attributes: </strong>\r\n          <p>For the Services which Influencer is providing under these Terms and without limiting InfluExpAI’s ownership of the Work Product as specified above, Influencer gives InfluExpAI and Client the irrevocable, sublicenseable, worldwide right and permission to use any Work Product or other video, photo, written or verbal content Influencer shares or provides related to the Services (collectively, “Client-Related Content”) in any manner, in whole or in part, and for any purpose in any and in any and all media, including and without limitation, on InfluExpAI and/or Client owned or controlled websites and platforms, social media, any advertising materials, publications, marketing materials, and/or presentations, and in any and all other media, in perpetuity. Any statements, posts and/or feedback that Influencer provides may be paraphrased, amplified, shortened and/or put into conversational form. Influencer further agrees that InfluExpAI and/or Client may contact (including by means of messages on public social media platforms)</p>\r\n\r\n\r\n          <strong>Influencer about any Client-Related Content. </strong>\r\n          <p>Influencer acknowledges that participation in the Services means InfluExpAI and Client can use Influencer’s Client-Related Content and include Influencer’s name/likeness/social media handle or channel/blog name and any other Influencer attributes in any manner that InfluExpAI and/or Client determine supports the purposes of these Terms, including use in any media that accepts advertising or promotional content or communications (such as, but not limited to, digital, print, television or radio).\r\n\r\n            Influencer agrees that Influencer will not hold InfluExpAI or Client, or their respective licensees, responsible for any liability resulting from their use of Influencer’s Client-Related Content in accordance with the terms hereof. InfluExpAI and Client shall not be liable for any indirect, consequential, exemplary damages (including but not limited to lost profits) and the combined, aggregate liability of InfluExpAI and Client hereunder shall not exceed the fees payable to Influencer under the Term Sheet.\r\n          </p>\r\n\r\n\r\n          <h3>DISCLAIMER</h3>\r\n          <p>The InfluExpAI API, all related Services and Data are provided “AS IS” on an “AS AVAILABLE” basis without warranty or condition of any kind. InfluExpAI disclaims all warranties; express or implied, including implied warranties of merchantability, fitness for a particular purpose and non-infringement, and any warranties or conditions arising out of course of dealing or usage of trade. InfluExpAI is not responsible or liable (and makes no representation or warranty) for the accuracy, content, completeness, legality, reliability, or availability of the API.</p>\r\n\r\n          <h3>INDEMINIFICATION</h3>\r\n          <p>You will defend, indemnify and hold InfluExpAI harmless against any third party claims, liabilities or expenses incurred (including reasonable attorneys’ fees), as well as amounts finally awarded in a settlement or by a court arising from any claim or allegation by a third party arising out of (i) allegations that InfluExpAI’s use infringes or misappropriates any trademark, copyright or other intellectual property of any third party, (ii) Customer’s use of Data, (iii) InfluExpAI Services or the InfluExpAI API that are modified by Customer if the alleged infringement relates to such modification; (iv) InfluExpAI Services or the InfluExpAI API that are combined with any Customer product, process or materials where the alleged infringement relates to such combination; (v) Customer’s use of a version of the InfluExpAI Services or InfluExpAI API other than the version that was current at the time of such use; (vi) infringement or misappropriation of any proprietary right in which Customer has an interest; or (vii) your breach or alleged breach of any of your obligations or representations under this Agreement.</p>\r\n\r\n\r\n          <h3>LIMITATION OF LIABILITY</h3>\r\n          <p>IN NO EVENT WILL INFLUEXPAI BE LIABLE FOR ANY CONSEQUENTIAL, INCIDENTAL, OR SPECIAL DAMAGES WHATSOEVER (INCLUDING LOSS OF PROFITS, BUSINESS INTERRUPTION, OR USE) ARISING OUT OF THE USE OF OR INABILITY TO USE THE CONTENT, EVEN IF IT HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.</p>\r\n\r\n          <h3>GENERAL</h3>\r\n          <p>This Agreement will be governed by and construed in accordance with the laws of the state of Texas, excluding that body of law pertaining to conflict of laws. Any legal action or proceeding arising under this Agreement will be brought exclusively in the federal or state courts located in Texas and you hereby irrevocably consent to the personal jurisdiction and venue therein. If any action is necessary to enforce the terms of this Agreement, the prevailing party will be entitled to recover its reasonable attorneys’ fees, costs and expenses in addition to any other relief to which such prevailing party may be entitled. You may not assign this Agreement by operation of law or otherwise, without InfluExpAI’s express prior written consent. Any attempt to assign this Agreement without consent will be null and void. The parties to this Agreement are independent contractors and this Agreement will not establish any relationship of partnership, joint venture, employment, franchise, or agency between the parties. The failure by either party to enforce any provision of this Agreement will not constitute a waiver of future enforcement.\r\n\r\n            If a court of competent jurisdiction holds any provision of this Agreement invalid or unenforceable, remaining provisions of the Agreement will remain in full force and effect, and the provision affected will be construed so as to be enforceable to the maximum extent permissible by law. This Agreement constitutes the complete and exclusive understanding and agreement of the parties with respect to the subject matter hereof and supersedes all prior understandings and agreements, whether written or oral, with respect to the subject matter hereof.\r\n          </p>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/contact/what-is-influexpai.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<section class=\"title-top-bg margin-top-80px\">\r\n  <div class=\"container\" style=\"text-align: center\">\r\n    <h1></h1>\r\n  </div>\r\n</section>\r\n\r\n<section class=\"container margin-b\">\r\n  <div class=\"row\">\r\n      <div class=\" col-md-6 col-sm-12 col-xs-12\">\r\n        <h2 class=\"about-title\"><strong>What is  InfluExpAI ?</strong></h2>\r\n        <p class=\"about-text\">\r\n          <!--InfluExpAI is the Influencers Universe! Market with a Roar!-->\r\n\r\n          <!--With millions of Influencers, InfluExpAI is the most comprehensive source of Bloggers, Content Creators, Social Media and Vetted Opt-In Influencers.-->\r\n\r\n          <!--Bleeding Edge Artificial Intelligence. The Industry's most comprehensive Feature Set - One Platform: InfluExpAI propels the marketing realm to a whole new dimension.-->\r\n\r\n          <!--With its proprietary Machine Learning (ML) engine, InfluExpAI provides a next generation Artificially Intelligent Platform to connect Marketers with Opt-In, Bloggers, Facebook, Youtube, Pinterest, LinkedIn, Snapchat, Instagram & Twitter Influencers the world over!-->\r\n\r\n          <!--Unbeatable Transparent Pricing. No Gimmicks. No Hidden Fees. Next generation Web, iOS & Android Mobile Apps.-->\r\n\r\n          <!--InfluExpAI equips Marketers, Entrepreneurs, Organizations and Brands with smarter, more targeted Influencer Marketing Campaigns.-->\r\n\r\n          <!--Cutting to the chase, Experience next generation AI-Driven Influencer Marketing in Motion with InfluExpAI.-->\r\n          Millions of Influencers. InfluExpAI is the most comprehensive source\r\n\r\n          of Bloggers, Content Creaters, Social Media and Vetted Opt-In Influencers.\r\n\r\n          Bleeding Edge Artificial Intelligence. The Industry's most comprehensive\r\n\r\n\r\n          Feature Set - One Platform: InfluExpAI propels the marketing realm to a\r\n\r\n          whole new dimension. With its proprietary Machine Learning (ML) engine,\r\n\r\n          InfluExpAI provides a next generation Artificially Intelligent Platform\r\n\r\n          to connect Marketers with Opt-In, Bloggers, Facebook, Youtube, Pinterest,\r\n\r\n          LinkedIn, Instagram & Twitter Influencers the world over! Unbeatable\r\n\r\n          Transparent Pricing. No Gimmicks. No Hidden Fees. Next generation Web,\r\n\r\n          iOS & Android Mobile Apps. AI-Driven Influencer Marketing in Motion\r\n\r\n          . InfluExpAI is the Influencers Universe!\r\n\r\n        </p>\r\n      </div>\r\n      <div class=\"col-md-6 col-sm-12 col-xs-12 whats-is-influ\">\r\n        <img src=\"../../assets/images/img/images/Influencer.png\"  alt=\"Influencer\">\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\" col-md-6 col-sm-12 col-xs-12 whats-is-influ\">\r\n        <img _ngcontent-c9=\"\" alt=\"\" src=\"../../assets/images/img/images/Influencer2.png\" title=\"Influencer\">\r\n      </div>\r\n      <div class=\" col-md-6 col-sm-12 col-xs-12\">\r\n        <h2 class=\"about-title\"><strong>How we stack up against the Competition?</strong></h2>\r\n        <p class=\"about-text\">\r\n          Unbeatable Pricing. One-Package-Includes-All. Every Feature/Influencer Included Worldwide. No Gimmicks. No Hidden Fees. Next generation Artificially Intelligent Web, iOS & Android Mobile Apps. InfluExpAI is the Influencers Universe. Market with a Roar!\r\n        </p>\r\n      </div>\r\n  </div>\r\n</section>\r\n  <!--feature matrix-->\r\n\r\n  <section class=\"container-fluid gry-back\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-12\">\r\n      <h2 class=\"about-title\"><strong>Features Comparison Matrix</strong></h2>\r\n      <div class=\"com-table\">\r\n      <table class=\"table table-bordered table-comparison feature-matrix-table table-striped\">\r\n        <thead>\r\n        <tr>\r\n          <th>Features</th>\r\n          <th>InfluExpert.AI</th>\r\n          <th>Competitor 1</th>\r\n          <th>Competitor 2</th>\r\n          <th>Competitor 3</th>\r\n          <th>Competitor 4</th>\r\n          <th>Competitor 5</th>\r\n          <th>Competitor 6</th>\r\n        </tr>\r\n        </thead>\r\n        <tbody>\r\n        <tr>\r\n          <td>Average Pricing/Year</td>\r\n          <td><strong>$1499</strong></td>\r\n          <td><strong>$8,388</strong></td>\r\n          <td><strong>$7,188</strong></td>\r\n          <td><strong>$15,899</strong></td>\r\n          <td><strong>$2388</strong></td>\r\n          <td><strong>$7988</strong></td>\r\n          <td><strong>$5988</strong></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Influencer Matching Matching Artificial Intelligence (AI)</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Social Media Classification based on ML/AI</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Request for Marketing: Publish Bids. Accept Bids.</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Influencer Reviews and Custom Scores</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>CRM</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Actionable Analytics</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Email directly from Platform</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Deep Influencer Insight</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Campaign Scheduling</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Daily Email Influencer Alerts & Notifications</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Campaign Monitoring</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Content Creation & Review</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Social Monitoring</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Account Management & Automation</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Realtime Influencer Chat</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Vetted Opt-In Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Bloggers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Twitter Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Instagram Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Facebook Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Snapchat Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Youtube Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Pinterest Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>LinkedIn Influencers</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Search Engine</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n        </tr>\r\n\r\n        <tr>\r\n          <td>Android Mobile App</td>\r\n          <td><i class=\"fa fa-check\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n          <td><i class=\"fa fa-times\"></i></td>\r\n        </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = "#contact {\r\n    width: 100%;\r\n    color: #fff\r\n}\r\n\r\n#footerwrap h4 {\r\n    color: #FFF;\r\n    margin: 10px 0;\r\n    font-size: 28px;\r\n    line-height: 1.1;\r\n}\r\n\r\n#footerwrap p {\r\n    color: #999;\r\n    margin-bottom: 10px;\r\n    font-size: 15px;\r\n    line-height: 18px;\r\n    font-weight: 500!important;\r\n    font-family: Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif!important;\r\n}\r\n\r\n.footer-wrapper ul li a {\r\n    line-height: 35px;\r\n    font-size: 18px;\r\n    color: #777;\r\n    font-weight: 600;\r\n}\r\n\r\nul.footer-social-icons li {\r\n    display: block;\r\n    margin-bottom: 10px;\r\n}\r\n\r\n.footer-social-icons li a i {\r\n    color: #ccc;\r\n    font-size: 20px;\r\n    width: 40px;\r\n    height: 40px;\r\n    border-radius: 100%;\r\n    text-align: center;\r\n    padding: 10px;\r\n    -webkit-transition: .5s;\r\n    transition: .5s;\r\n}\r\n\r\n.footer-social-icons li a:hover .fa-twitter {\r\n    background: #0084b4!important;\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n    color: #fff!important;\r\n}\r\n\r\n.footer-social-icons li a:hover .fa-facebook {\r\n    background: #3b5998!important;\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n    color: #fff!important;\r\n}\r\n\r\n.footer-social-icons li a:hover .fa-pinterest {\r\n    background: #c92228!important;\r\n    -webkit-transform: rotate(360deg);\r\n            transform: rotate(360deg);\r\n    color: #fff!important;\r\n}\r\n\r\nform input[type=text] {\r\n    overflow: hidden;\r\n    border-radius: 50px!important;\r\n    background: #fefefe;\r\n    color: #333;\r\n    border: 1px solid #999;\r\n    border-right: none;\r\n    padding: 5px 10px;\r\n    font-size: 18px!important;\r\n    font-weight: 700;\r\n    height: auto!important;\r\n    width: 100%;\r\n}\r\n\r\n.subscribe-btn {\r\n    border: none;\r\n    position: absolute;\r\n    height: 37px;\r\n    right: 0px;\r\n    top: 0;\r\n    background: transparent !important;\r\n    border-radius: 0 50px 50px 0;\r\n    padding-right: 0;\r\n}\r\n\r\n.subscribe-btn i{\r\n    color: #c00 !important;\r\n}\r\n\r\n.footer-copyright {\r\n    background: #1d1d1d;\r\n    padding: 22px;\r\n    width: 100%;\r\n    display: block;\r\n    height: auto;\r\n}\r\n\r\n.footer-copyright a {\r\n    color: #ccc;   \r\n    padding: 0 5px;\r\n}\r\n\r\n#footerwrap{\r\n    width: 100%;\r\n    display: block;\r\n    min-height: 403px;\r\n}\r\n\r\np.copyright-text {\r\n    margin: 0;\r\n    font-size: 14px;\r\n    color: #ccc !important;\r\n    font-family: Roboto,\"Helvetica Neue\",Helvetica,Arial,sans-serif!important;\r\n    font-weight: 500!important;\r\n}\r\n\r\n.footer-link-border {\r\n    border-right: solid 2px;\r\n    padding-right: 5px\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n    padding: 0\r\n}\r\n\r\nsection#contact i {\r\n    color: #ccc;\r\n    padding-right: 10px\r\n}\r\n\r\n#contact a:hover {\r\n    color: #fff;\r\n}\r\n\r\n.chat {\r\n    list-style: none;\r\n    margin: 0;\r\n    padding: 0\r\n}\r\n\r\n.chat li {\r\n    margin-bottom: 10px;\r\n    padding-bottom: 5px;\r\n    border-bottom: 1px dotted #B3A9A9\r\n}\r\n\r\n.chat-box,\r\nbutton#btn-chat {\r\n    border-color: #c00\r\n}\r\n\r\n.chat li.left .chat-body {\r\n    margin-left: 60px\r\n}\r\n\r\n.chat li.right .chat-body {\r\n    margin-right: 60px\r\n}\r\n\r\n.chat li .chat-body p {\r\n    margin: 0;\r\n    color: #777\r\n}\r\n\r\n.chat .glyphicon,\r\n.panel .slidedown .glyphicon {\r\n    margin-right: 5px\r\n}\r\n\r\n.panel-body {\r\n    overflow-y: scroll;\r\n    height: 250px\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: #F5F5F5\r\n}\r\n\r\n::-webkit-scrollbar {\r\n    width: 12px;\r\n    background-color: #F5F5F5\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, .3);\r\n    background-color: #555\r\n}\r\n\r\nsection#chat-container {\r\n    position: absolute;\r\n    bottom: 30px;\r\n    right: 0;\r\n    z-index: 9\r\n}\r\n\r\nbutton#btn-chat {\r\n    background: #c00;\r\n    padding: 8px 10px;\r\n    font-weight: 700\r\n}\r\n\r\n.chat-font-awesome {\r\n    padding: 0;\r\n    color: #fff!important;\r\n    width: 100%;\r\n    text-align: left;\r\n    border: none\r\n}\r\n\r\n.panel.panel-primary.chat-box .panel-heading {\r\n    background: #c00;\r\n    border: none;\r\n    font-size: 24px;\r\n    font-weight: 700\r\n}\r\n\r\n.rfm {\r\n    background-color: #c00;\r\n    color: #d4d4d4;\r\n    border-color: #c00;\r\n    border-radius: 50x\r\n}\r\n\r\n.swal2-popup .swal2-modal .swalcustom .swal2-show {\r\n    height: 35em!important;\r\n    font-size: 1em!important\r\n}\r\n\r\n.footer-readmore {\r\n    display: block;\r\n    color: #6991c5;\r\n}\r\n\r\n.footer-upper {\r\n    padding: 18px 50px;\r\n    background: #000;\r\n    min-height: 402px;\r\n    float: left;\r\n}\r\n\r\n.footer-stores-img h2 {\r\n    color: #fff;\r\n    font-size: 18px;\r\n    margin: 0 0 10px;\r\n}\r\n\r\n.footer-stores-img img {\r\n    width: 25%;\r\n    margin-left: 90px;\r\n}"

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"contact\">\r\n  <div id=\"footerwrap\" class=\"footer-wrapper\">\r\n    <div class=\"footer-upper\">\r\n      <div class=\"row\">\r\n        <div class=\"col-lg-3 col-md-3 col-sm-4 col-xs-12\">\r\n          <h4>Who Are We?</h4>\r\n          \r\n          <ul>\r\n            <li><a routerLink=\"/How-It-Works\"><i class=\"fa fa-chevron-right\"></i> How it Works?</a> </li>\r\n            <li><a routerLink=\"/what-is-InfluExpAI\"><i class=\"fa fa-chevron-right\"></i> What is InfluExpert.AI?</a> </li>\r\n            <li><a routerLink=\"/contact\"><i class=\"fa fa-chevron-right\"></i> Establish Contact</a> </li>\r\n\r\n          </ul>\r\n          <h4>Stalk Us</h4>\r\n          <div class=\"hline-w\"></div>\r\n          <ul class=\"footer-social-icons\">\r\n            <li><a href=\"https://www.facebook.com/Influ-Expai-1803725316597120/\" target=\"_blank\">\r\n              <i  class=\"fa fa-facebook\"></i> Facebook</a></li>\r\n            <li><a href=\"https://twitter.com/influex_pai\" target=\"_blank\">\r\n              <i  class=\"fa fa-twitter\"></i> Twitter</a></li>\r\n            <li><a href=\"contact@influexpai.com\">\r\n                <i  class=\"fa fa-pinterest\"></i> Pintrest</a></li>\r\n          </ul>\r\n        </div>\r\n        \r\n        <div class=\"col-lg-6 col-md-6 col-sm-8 col-xs-12\">\r\n          <h4 class=\"text-center\">My InfluExpert.AI</h4> \r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-md-6 col-sm-6\">\r\n            <ul>\r\n                <li><a routerLink=\"#\"><i class=\"fa fa-chevron-right\"></i> ML/AI</a> </li>\r\n                <!-- <li><a href=\"https://www.influexpai.com/pricing\"><i class=\"fa fa-chevron-right\"></i> Pricing</a> </li> -->\r\n                <li><a routerLink=\"/pricing\"><i class=\"fa fa-chevron-right\"></i> Pricing</a> </li>\r\n                <!-- <li><a routerLink=\"/blog\"><i class=\"fa fa-chevron-right\"></i> Blog</a> </li> -->\r\n                <li><a href=\"https://meetings.hubspot.com/amjad1pak?_ga=2.231961375.1891010832.1548166411-1961289000.1536910881\" target=\"_blank\"><i class=\"fa fa-chevron-right\"></i> Demo</a> </li>    \r\n                <li><a href=\"/authentication/signin\"><i class=\"fa fa-chevron-right\"></i> Signin</a> </li>\r\n                <!-- <li><a routerLink=\"/authentication/Signup\"><i class=\"fa fa-chevron-right\"></i> Signin</a> </li> -->\r\n\r\n\r\n              </ul>\r\n          </div>\r\n          <div class=\"col-md-6 col-sm-6\">\r\n            <ul>\r\n              <li><a routerLink=\"/brand\"><i class=\"fa fa-chevron-right\"></i> For Brand</a> </li>\r\n              <li><a routerLink=\"/influencers\"><i class=\"fa fa-chevron-right\"></i> For Influencers</a> </li>\r\n              <li><a routerLink=\"/agencies\"><i class=\"fa fa-chevron-right\"></i> For Agencies</a> </li>\r\n              <!-- <li><a routerLink=\"/authentication/Signin\"><i class=\"fa fa-chevron-right\"></i> Signup</a> </li> -->\r\n              <li><a href=\"/authentication/signup\"><i class=\"fa fa-chevron-right\"></i> Signup</a> </li>\r\n\r\n\r\n            </ul>\r\n          </div>\r\n          <div  class=\"col-sm-12 footer-stores-img\">\r\n            <h2>Download and experience our Super-Cool Next-Generation Mobile App Now.</h2>\r\n            <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.influxexpai\" onclick=\"topFunction()\" target=\"_blank\">\r\n              <img  src=\"../../../assets/images/img/apple-store-f.png\">\r\n            </a>\r\n              <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.influxexpai\" onclick=\"topFunction()\" target=\"_blank\">\r\n                <img  src=\"../../../assets/images/img/google-play-f.png\">\r\n                <!-- \\src\\assets\\images\\img\\images -->\r\n              </a>\r\n          </div>\r\n        </div>\r\n\r\n        </div>\r\n        <div class=\"col-lg-3 col-md-3 col-sm-12 col-xs-12\">\r\n          <h4>What is InfluExpert.AI</h4>\r\n          <p>\r\n            Millions of Influencers. InfluExpert.AI is the most comprehensive source of Bloggers, Content Creaters, Social Media and Vetted Opt-In Influencers. Bleeding Edge Artificial Intelligence.\r\n            <a class=\"footer-readmore\" routerLink=\"/what-is-InfluExpAI\">Read More</a>\r\n          </p>\r\n          <form class=\"form-inline\" style=\"position: relative\">\r\n            <input type=\"text\" name=\"subscription\" placeholder=\"Email Address\">\r\n            <button class=\"btn btn-primary subscribe-btn\">\r\n              <i _ngcontent-iap-c3=\"\" aria-hidden=\"true\" class=\"fa fa-arrow-up\"></i>\r\n            </button>\r\n            <!-- <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.influxexpai\" target=\"_blank\">\r\n              <img src=\"../../assets/images/Adroid-Badge.png\" style=\"width: 150px\">\r\n            </a>\r\n            <a href=\"https://play.google.com/store/apps/details?id=com.brainplow.influxexpai\" target=\"_blank\">\r\n              <img src=\"../../assets/images/IOS-Badge.png\" style=\"width: 150px;height:65px\">\r\n            </a> -->\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <!-- --/row ---->\r\n    </div>\r\n    <!-- --/container ---->\r\n  </div>\r\n  <!-- --/footerwrap ---->\r\n  <div class=\"footer-copyright\">\r\n    <div class=\"\">\r\n      <p class=\"copyright-text\">Copyright © 2019, InfluExpert.AI. All rights reserved.\r\n        <span class=\"pull-right\">\r\n          <!-- <a href=\"https://www.influexpai.com/Terms-and-Conditions\" class=\"footer-link-border\">Terms of Use</a> -->\r\n          <!-- <a href=\"https://www.influexpai.com/Terms-and-Conditions\" class=\"footer-link-border\">Terms of Use</a> -->\r\n          <!-- <a href=\"https://www.influexpai.com/privacy_policy\">   Privacy Policy</a> -->\r\n          <!-- <a href=\"https://www.influexpai.com/privacy_policy\">   Privacy Policy</a> -->\r\n          <a routerLink=\"/terms\" class=\"footer-link-border\">Terms of Use</a>\r\n          <a routerLink=\"/privacy\">   Privacy Policy</a>\r\n\r\n        </span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n</section>\r\n\r\n\r\n\r\n<!------ Include the above in your HEAD tag ---------->\r\n\r\n<!--<section id=\"chat-container\">-->\r\n  <!--<div class=\"container\">-->\r\n    <!--<div class=\"row\">-->\r\n      <!--<div class=\"col-md-4 pull-right\">-->\r\n        <!--<div class=\"panel panel-primary chat-box\">-->\r\n          <!--<a type=\"button\" class=\"btn btn-default btn-xs chat-font-awesome\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">-->\r\n            <!--<div class=\"panel-heading\" id=\"accordion\">-->\r\n              <!--<i class=\"fa fa-comments\"></i>-->\r\n              <!--Chat-->\r\n              <!--<div class=\"btn-group pull-right\">-->\r\n                <!--<i class=\"fa fa-minus\"></i>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</a>-->\r\n          <!--<div class=\"panel-collapse collapse\" id=\"collapseOne\">-->\r\n            <!--<div class=\"panel-body\">-->\r\n              <!--<ul class=\"chat\">-->\r\n                <!--<li class=\"left clearfix\"><span class=\"chat-img pull-left\">-->\r\n                    <!--&lt;!&ndash;<img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />&ndash;&gt;-->\r\n                <!--</span>-->\r\n                  <!--<div class=\"chat-body clearfix\">-->\r\n                    <!--<div class=\"header\">-->\r\n                      <!--<strong class=\"primary-font\">Jack Sparrow</strong> <small class=\"pull-right text-muted\">-->\r\n                      <!--<span class=\"glyphicon glyphicon-time\"></span>12 mins ago</small>-->\r\n                    <!--</div>-->\r\n                    <!--<p>-->\r\n                      <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare-->\r\n                      <!--dolor, quis ullamcorper ligula sodales.-->\r\n                    <!--</p>-->\r\n                  <!--</div>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"right clearfix\"><span class=\"chat-img pull-right\">-->\r\n                            <!--&lt;!&ndash;<img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />&ndash;&gt;-->\r\n                        <!--</span>-->\r\n                  <!--<div class=\"chat-body clearfix\">-->\r\n                    <!--<div class=\"header\">-->\r\n                      <!--<small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>13 mins ago</small>-->\r\n                      <!--<strong class=\"pull-right primary-font\">Bhaumik Patel</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<p>-->\r\n                      <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare-->\r\n                      <!--dolor, quis ullamcorper ligula sodales.-->\r\n                    <!--</p>-->\r\n                  <!--</div>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"left clearfix\"><span class=\"chat-img pull-left\">-->\r\n                            <!--&lt;!&ndash;<img src=\"http://placehold.it/50/55C1E7/fff&text=U\" alt=\"User Avatar\" class=\"img-circle\" />&ndash;&gt;-->\r\n                        <!--</span>-->\r\n                  <!--<div class=\"chat-body clearfix\">-->\r\n                    <!--<div class=\"header\">-->\r\n                      <!--<strong class=\"primary-font\">Jack Sparrow</strong> <small class=\"pull-right text-muted\">-->\r\n                      <!--<span class=\"glyphicon glyphicon-time\"></span>14 mins ago</small>-->\r\n                    <!--</div>-->\r\n                    <!--<p>-->\r\n                      <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare-->\r\n                      <!--dolor, quis ullamcorper ligula sodales.-->\r\n                    <!--</p>-->\r\n                  <!--</div>-->\r\n                <!--</li>-->\r\n                <!--<li class=\"right clearfix\"><span class=\"chat-img pull-right\">-->\r\n                    <!--&lt;!&ndash;<img src=\"http://placehold.it/50/FA6F57/fff&text=ME\" alt=\"User Avatar\" class=\"img-circle\" />&ndash;&gt;-->\r\n                <!--</span>-->\r\n                  <!--<div class=\"chat-body clearfix\">-->\r\n                    <!--<div class=\"header\">-->\r\n                      <!--<small class=\" text-muted\"><span class=\"glyphicon glyphicon-time\"></span>15 mins ago</small>-->\r\n                      <!--<strong class=\"pull-right primary-font\">Bhaumik Patel</strong>-->\r\n                    <!--</div>-->\r\n                    <!--<p>-->\r\n                      <!--Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur bibendum ornare-->\r\n                      <!--dolor, quis ullamcorper ligula sodales.-->\r\n                    <!--</p>-->\r\n                  <!--</div>-->\r\n                <!--</li>-->\r\n              <!--</ul>-->\r\n            <!--</div>-->\r\n            <!--<div class=\"panel-footer\">-->\r\n              <!--<div class=\"input-group\">-->\r\n                <!--<input id=\"btn-input\" type=\"text\" class=\"form-control input-sm\" placeholder=\"Type your message here...\" />-->\r\n                <!--<span class=\"input-group-btn\">-->\r\n                  <!--<button class=\"btn btn-warning btn-sm chat-send-btn\" id=\"btn-chat\">Send</button>-->\r\n                <!--</span>-->\r\n              <!--</div>-->\r\n            <!--</div>-->\r\n          <!--</div>-->\r\n        <!--</div>-->\r\n      <!--</div>-->\r\n    <!--</div>-->\r\n  <!--</div>-->\r\n<!--</section>-->\r\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import {OnDestroy} from '@angular/core';
// import {Router} from '@angular/router';
// import {Headers, Response} from '@angular/http';
// import {HttpService} from '../services/http-service';
// import {PushNotificationsService} from 'angular2-notifications';
// import {Config} from '../../config';
// import {DataService} from '../_services';
// import swal from 'sweetalert2';
var FooterComponent = (function () {
    function FooterComponent(obj) {
        this.obj = obj;
    }
    FooterComponent.prototype.ngOnInit = function () {
        // window.scroll(0,0);
    };
    FooterComponent.prototype.scrollTop = function () {
        window.scrollTo(0, 0);
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* App_service */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/influencers/influencers.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<div class=\"blog-wrapper\">\r\n\r\n  <section class=\"title-top-bg\">\r\n    <div class=\"container\">\r\n      <h1>Influencers</h1>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"stories\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <img src=\"../../assets/images/img/images/influencers/1.png\" alt=\"image\">\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <img src=\"../../assets/images/img/images/influencers/2.png\" alt=\"image\">\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <img src=\"../../assets/images/img/images/influencers/3.png\" alt=\"image\">\r\n            </div>\r\n            <div class=\"col-md-6 col-sm-6\">\r\n              <img src=\"../../assets/images/img/images/influencers/4.png\" alt=\"image\">\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6 inner-div\">\r\n          <h2 class=\"heading-2\">We live for the stories you love to create.</h2>\r\n          <p class=\"influencers-special-paragraph\">That’s why we support individual creators who strive to grow and strengthen the communities they’ve worked so hard to create. Discover how our vibrant global community is actively collaborating with brands to create one of kind, user generated advertising experiences.</p>\r\n          <ul class=\"influencers-list\">\r\n            <li>Signup below, tell us about yourself</li>\r\n            <li>Get&nbsp;notified&nbsp;about&nbsp;available campaigns</li>\r\n            <li>Create, post your content</li>\r\n            <li>Earn cash, products,&nbsp;and&nbsp;rewards</li>\r\n          </ul>\r\n          <button class=\"btn btn-primary btn-lg pull-right\"><a class=\"join\" routerlink=\"/authentication/signup\" href=\"/authentication/signup\">Join our Community</a></button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"creators\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-div\">\r\n          <h2 class=\"heading-2\">Here, all creatorsare welcome.</h2>\r\n          <p class=\"influencers-special-paragraph\">Our global community is made up of creative content creators from almost every genre, interests, and background you could possibly imagine. From fitness to food art, there’s a space for you here to connect with brands who are just as passionate as you are.</p>\r\n          <a class=\"btn btn-primary\" href=\"#letsTalk\">Join our Global Community of Creators</a>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <img src=\"../../assets/images/img/images/influencers/all-creators-are-welcome.png\" alt=\"image\">\r\n        </div>\r\n      </div> \r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"community\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 \">\r\n          <img src=\"../../assets/images/img/images/influencers/Stay-Updated.png\" alt=\"image\">\r\n\r\n        </div>\r\n        <div class=\"col-md-6 inner-div\">\r\n          <div class=\"wpb_wrapper\">\r\n            <h2 class=\"heading-2\">Stay up to date on the creator community</h2>\r\n            <p class=\"influencers-special-paragraph\">Get the latest on what’s going on in the creator community. We create and curate information right to your inbox that’s designed to help you grow your community and stay up to date on everything important in the creator economy.</p>\r\n            <a class=\"btn btn-primary\" href=\"#letsTalk\">Get the latest about our creator community</a>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n  <section id=\"help\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-6 inner-div\">\r\n          <div class=\"wpb_wrapper\">\r\n            <h2 class=\"heading-2\">Looking for a little extra help?</h2>\r\n            <p class=\"influencers-special-paragraph\">From the world’s most powerful influencer technology to campaign development, see how our we can help you take your Brand or Agency content campaigns to the next level.</p>\r\n            <button class=\"btn btn-primary btn-lg capitalize ls0\">Explore More</button>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-md-6\">\r\n          <img class=\"width-100per\" src=\"../../assets/images/img/images/influencers/Extra-Help.png\" alt=\"image\">\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n\r\n\r\n</div>\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/influencers/influencers.component.scss":
/***/ (function(module, exports) {

module.exports = "section {\n  margin: 0px 0 25px; }\n  section ul {\n    padding-left: 50px; }\n  section p {\n    font-size: 20px;\n    margin: 6px 0; }\n  section li {\n    font-size: 20px; }\n  .heading-2 {\n  font-size: 25px;\n  color: #000;\n  font-weight: 600;\n  margin: 0;\n  line-height: 40px; }\n  section p {\n  font-size: 14px;\n  margin: 6px 0; }\n  .join {\n  color: #fff; }\n  section li {\n  font-size: 14px; }\n  .inner-div {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center; }\n"

/***/ }),

/***/ "./src/app/influencers/influencers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfluencersComponent; });
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

var InfluencersComponent = (function () {
    function InfluencersComponent() {
    }
    InfluencersComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    InfluencersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-influencers',
            template: __webpack_require__("./src/app/influencers/influencers.component.html"),
            styles: [__webpack_require__("./src/app/influencers/influencers.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], InfluencersComponent);
    return InfluencersComponent;
}());



/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.html":
/***/ (function(module, exports) {

module.exports = "<ng-sidebar-container class=\"app\" [ngClass]=\"{'mode-boxed': isBoxed, 'sidebar-opened': isOpened, 'theme-light': theme == 'light', 'theme-dark': theme == 'dark', 'mode-push': _mode == 'push', 'mode-dock': _mode == 'dock', 'mode-over': _mode == 'over', 'mode-slide': _mode == 'slide', 'no-footer': options?.removeFooter, 'map-header': options?.mapHeader}\">\r\n  <ng-sidebar\r\n    [(opened)]=\"isOpened\"\r\n    [(mode)]=\"_mode\"\r\n    [position]=\"'left'\"\r\n    [dockedSize]=\"'80px'\"\r\n    [autoCollapseWidth]=\"'991'\"\r\n    [closeOnClickOutside]=\"isOver()\"\r\n    [showBackdrop]=\"isOver()\"\r\n    [sidebarClass]=\"'sidebar-panel'\"\r\n    style=\"font-size: larger; font-weight: 900;\"\r\n    #sidebar>\r\n    <nav class=\"navbar custom-navbar main-brand\">\r\n      <a class=\"navbar-brand mr-auto\" [routerLink]=\"['/']\">\r\n        <!--<img src=\"../../../assets/images/logo.png\" class=\"navbar-brand-logo\" alt=\"\">-->\r\n        <img src=\"../../../assets/images/logos/Logo.png\" class=\"navbar-brand-logo\" alt=\"\" style=\"height: 36px; width: 130px\">\r\n        <!--<span class=\"docked-hidden\">&nbsp;InfluExpAI</span>-->\r\n      </a>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"javascript:;\" class=\"nav-link\" (click)=\"toogleSidebar()\">\r\n            <i class=\"fa fa-bars\" *ngIf=\"_mode === 'over' && !isOver()\">\r\n              <span></span>\r\n            </i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </nav>\r\n    <!-- main navigation -->\r\n    <nav class=\"menu\" id=\"menu\">\r\n      <!-- <div  class=\"side-menu-avatar\">\r\n        <div  class=\"avatar-preview avatar-preview-100\">\r\n         <img  alt=\"\" src=\"../../../assets/images/Blank_Avatar.png\"  onerror=\"this.src='../../assets/images/Blank_Avatar.png'\" >\r\n                <input type=\"file\"  class=\"upload-input\" (change)=\"onChange($event)\" accept=\"image/*\">\r\n                <i class=\"fa fa-camera upload-cam-img\"></i>\r\n        </div>\r\n      </div> -->\r\n      <ul class=\"navigation\" appAccordion>\r\n        <li class=\"navigation-item\" appAccordionLink >\r\n          <a class=\"navigation-link\" routerLinkactive=\"active-route\"  appAccordionToggle [routerLink]=\"['/profile']\">\r\n            <img src=\"../../../assets/images/side-menu/man-user.png\" class=\"nav-img\"> \r\n            Profile\r\n          </a>\r\n          </li>\r\n        <li class=\"navigation-item\">\r\n        <div class=\"dropdown\">\r\n          <button class=\"drop-btn dropdown-toggle\" routerLinkactive=\"active-route\" type=\"button\" id=\"dropdownMenuButton\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n            <img src=\"../../../assets/images/side-menu/multiple-variable-bars-data-graphic.png\">\r\n            Linked Profile\r\n          </button>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"dropdownMenuButton\">\r\n            <ul class=\"dropdown-ul\">\r\n              <li><i class=\"fa fa-facebook-f\" ></i><a  [routerLink]=\"['/connect-facebook']\">Facebook</a></li>\r\n              <li><i class=\"fa fa-youtube\" ></i><a  [routerLink]=\"['/connect-youtube']\">Youtube</a></li>\r\n              <li><i class=\"fa fa-twitter-square\" ></i><a  [routerLink]=\"['/connect-twitter']\">Twitter</a></li>\r\n              <li><i class=\"fa fa-instagram\" ></i><a  [routerLink]=\"['/connect-instagram']\">Instagram</a></li>\r\n              <li><i class=\"fa fa-newspaper-o\"></i><a  [routerLink]=\"['/connect-blogger']\">Blogger</a></li>\r\n              <li><i class=\"fa fa-linkedin\"></i><a  [routerLink]=\"['/connect_linkedin']\">LinkedIn</a></li>\r\n              <li><i class=\"fa fa-pinterest-p\"></i><a  [routerLink]=\"['/connect-pinterest']\">Pinterest</a></li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        </li>\r\n\r\n\r\n        <li class=\"navigation-item\" appAccordionLink >\r\n          <a class=\"navigation-link\" routerLinkactive=\"active-route\" appAccordionToggle [routerLink]=\"['/create-showcase']\" >\r\n            <img src=\"../../../assets/images/side-menu/suitcase.png\">\r\n            Create ShowCase\r\n          </a>\r\n        </li>\r\n        <li class=\"navigation-item\" appAccordionLink >\r\n          <a class=\"navigation-link\" routerLinkactive=\"active-route\" appAccordionToggle [routerLink]=\"['/myshowcase']\" >\r\n            <img src=\"../../../assets/images/side-menu/suitcase.png\">\r\n            My ShowCase\r\n          </a>\r\n        </li> <li class=\"navigation-item\" appAccordionLink >\r\n          <a class=\"navigation-link\" routerLinkactive=\"active-route\" appAccordionToggle [routerLink]=\"['/settings']\" >\r\n            <img src=\"../../../assets/images/side-menu/program-settings.png\">\r\n\r\n            Settings\r\n          </a>\r\n        </li>\r\n\r\n        <!--<li class=\"navigation-item\" appAccordionLink>-->\r\n          <!--<a class=\"navigation-link\" appAccordionToggle data-toggle=\"modal\" data-target=\"#myModal3\">-->\r\n            <!--<i class=\"fa fa-comments\"></i>-->\r\n            <!--<span class=\"lbl\">Leave Review</span>-->\r\n          <!--</a>-->\r\n        <!--</li>-->\r\n        <li class=\"navigation-item\" appAccordionLink >\r\n          <a class=\"navigation-link\" appAccordionToggle routerLinkactive=\"active-route\" [routerLink]=\"['/authentication/signin']\" >\r\n            <img src=\"../../../assets/images/side-menu/sign-out-option.png\">\r\n            Sign out\r\n          </a>\r\n        </li>\r\n        <!--<li class=\"navigation-item\"><hr class=\"mt-0 mb-0\" /></li>-->\r\n        <!--<li class=\"navigation-item\">-->\r\n          <!--<a class=\"navigation-link\" (click)=\"addMenuItem()\">-->\r\n            <!--<i class=\"icon icon-basic-add\"></i>-->\r\n            <!--<span>Add</span>-->\r\n          <!--</a>-->\r\n\r\n      </ul>\r\n\r\n\r\n    </nav>\r\n    <!-- /main navigation -->\r\n  </ng-sidebar>\r\n\r\n  <div class=\"modal fade\" id=\"myModal3\" role=\"dialog\" style=\"margin-top: 10%\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content popupmodel\">\r\n        <div class=\"modal-body model-box\">\r\n          <div class=\"row\">\r\n            <div class=\"col-lg-3 col-md-3 col-sm-3 col-xs-4\" style=\"border-bottom: 1px #4f4f4f solid;\">\r\n              <div class=\"popup-image\">\r\n                <img class=\"hidden-md-down\"  src=\"../../../assets/images/logos/Logo1.png\">\r\n                <img class=\"hidden-lg-up\" src=\"../../../assets/images/logos/Logo1.png\" style=\"width: 170px; height: 115px!important; margin-left: -20px; \" alt=\"\">\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"col-lg-8 col-md-8 col-sm-8 col-xs-1 \" style=\"border-bottom: 1px #4f4f4f solid;\">\r\n              <p class=\" modal-v2__main-heading\"> </p>\r\n              <h4 class=\"modal-title body-heading\" style=\"font-size: 17px\">Help others make good choices.<br/>\r\n                Based on your experience, how would you rate this company? </h4>\r\n\r\n            </div>\r\n\r\n            <div class=\"col-lg-1 col-md-1 col-sm-1 col-xs-1  popup-close-button\" style=\"text-align: right\" data-dismiss=\"modal\">X</div>\r\n          </div>\r\n          <div style=\"width: 100%;\">\r\n            <div class=\"rating-starts\">\r\n              <!--<fieldset class=\"ratingq move-to-center\">-->\r\n              <form>\r\n                <fieldset>\r\n    <span class=\"star-cb-group\">\r\n      <input type=\"radio\" id=\"rating-5\" name=\"rating\" value=\"5\" (click)=\"onclick(5)\" /><label title=\"Awesome - 5 stars\" for=\"rating-5\">5</label>\r\n      <input type=\"radio\" id=\"rating-4\" name=\"rating\" value=\"4\"  (click)=\"onclick(4)\"  /><label title=\"Pretty good - 4 stars\"  for=\"rating-4\">4</label>\r\n      <input type=\"radio\" id=\"rating-3\" name=\"rating\" value=\"3\"checked=\"checked\" (click)=\"onclick(3)\" /><label title=\"Meh - 3 stars\" for=\"rating-3\">3</label>\r\n      <input type=\"radio\" id=\"rating-2\" name=\"rating\" value=\"2\" (click)=\"onclick(2)\" /><label title=\"Kinda bad - 2 stars\" for=\"rating-2\">2</label>\r\n      <input type=\"radio\" id=\"rating-1\" name=\"rating\" value=\"1\" (click)=\"onclick(1)\" /><label title=\"Sucks big time - 1 star\" for=\"rating-1\">1</label>\r\n      <!--<input type=\"radio\" id=\"rating-0\" name=\"rating\" value=\"0\" class=\"star-cb-clear\" /><label for=\"rating-0\">0</label>-->\r\n    </span>\r\n                </fieldset>\r\n              </form>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <mat-form-field class=\"padding-L-R txt-area\">\r\n                                  <textarea matInput placeholder=\"Write a review\" [(ngModel)]=\"model.review\"\r\n                                             style=\"height: 75px !important;width:100% !important;\"\r\n                                            name=\"comt\">\r\n    </textarea>\r\n\r\n          </mat-form-field>\r\n          <div class=\"modal-footer\">\r\n\r\n            <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" >Cancel</button>\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"reviewSubmit()\"  data-dismiss=\"modal\">Done</button>\r\n\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"app-inner\">\r\n    <nav class=\"navbar custom-navbar bg-faded main-header\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\">\r\n          <a href=\"javascript:;\" class=\"nav-link\" (click)=\"toogleSidebar()\">\r\n            <i class=\"hamburger-icon v2\" *ngIf=\"_mode !== 'dock'\">\r\n              <span></span>\r\n            </i>\r\n          </a>\r\n        </li>\r\n      </ul>\r\n      <span class=\"navbar-heading hidden-xs-down\">{{options?.heading}}</span>\r\n      <span class=\"mr-auto\"></span>\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item\" ngbDropdown>\r\n          <a href=\"javascript:;\" class=\"nav-link\" ngbDropdownToggle>\r\n            <img [src]=\"profile_image\" class=\"navbar-avatar rounded-circle\" alt=\"user\" title=\"user\">\r\n            <!--<img src=\"{{currentUser.image_url}}\"   class=\"navbar-avatar rounded-circle\" alt=\"user\" title=\"user\">-->\r\n\r\n          </a>\r\n          <div class=\"dropdown-menu dropdown-menu-right\">\r\n\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">\r\n              <i class=\"icon icon-basic-postcard mr-3\"></i>\r\n              <span routerLink='/profile'>Profile</span>\r\n            </a>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">\r\n              <i class=\"icon icon-basic-message-multiple mr-3\"></i>\r\n              <span>Notifications</span>\r\n            </a>\r\n            <div class=\"dropdown-divider\"></div>\r\n            <a class=\"dropdown-item\" href=\"javascript:;\">\r\n              <i class=\"icon icon-arrows-switch-vertical mr-3\"></i>\r\n              <span (click)=\"signout()\">Signout</span>\r\n            </a>\r\n          </div>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <a href=\"javascript:;\" class=\"nav-link\" appToggleFullscreen>\r\n            <i class=\"fi flaticon-fullscreen\"></i>\r\n          </a>\r\n        </li>\r\n\r\n        <li class=\"nav-item\">\r\n          <span class=\"nav-divider\"></span>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a href=\"javascript:;\" class=\"nav-link\" (click)=\"openSearch(search)\">\r\n            <i class=\"fi flaticon-search\"></i>\r\n          </a>\r\n        </li>\r\n\r\n      </ul>\r\n    </nav>\r\n\r\n    <div class=\"main-content\">\r\n      <router-outlet></router-outlet>\r\n      <!-- <nav class=\"navbar custom-navbar navbar-light main-footer small\">\r\n        <ul class=\"navbar-nav mr-auto\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link copy-right\" href=\"javascript:;\">\r\n              <span>Copyright &copy; 2019</span> <span class=\"text-uppercase\">InfluExpert.AI</span> All rights reserved\r\n            </a>\r\n          </li>\r\n        </ul>\r\n        <ul class=\"navbar-nav hidden-xs-down\">\r\n\r\n\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link copy-right\" href=\"javascript:;\">Made with love on Earth</a>\r\n          </li>\r\n\r\n\r\n        </ul>\r\n      </nav> -->\r\n    </div>\r\n  </div>\r\n\r\n</ng-sidebar-container>\r\n\r\n<ng-template #search let-c=\"close\" let-d=\"dismiss\">\r\n  <form class=\"search__form\" action=\"\">\r\n    <input class=\"search-input\" name=\"search\" type=\"search\" placeholder=\"Search...\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\" autofocus=\"true\" />\r\n    <p class=\"text-muted\"><small><strong>Hit enter to search or ESC to close</strong></small></p>\r\n  </form>\r\n  <div class=\"search-suggestions\">\r\n    <h6 class=\"text-uppercase\"><strong>Suggestions?</strong></h6>\r\n    <p class=\"text-primary\">#medical #analytics #fitness #transport #ui #dashboard #admin #bootstrap #angular #typescript</p>\r\n  </div>\r\n  <button type=\"button\" class=\"search-close\" aria-label=\"Close search form\" (click)=\"d('Cross click')\">\r\n    <i class=\"fi flaticon-close\"></i>\r\n  </button>\r\n</ng-template>\r\n\r\n\r\n<!-- <div class=\"configuration hidden-sm-down\" [ngClass]=\"{'active': showSettings}\">\r\n  <div class=\"configuration-cog\" (click)=\"showSettings = !showSettings\">\r\n    <i class=\"icon icon-basic-mixer2\"></i>\r\n  </div>\r\n  <div class=\"card\">\r\n    <div class=\"card-header\">\r\n      Template Options\r\n    </div>\r\n    <div class=\"card-block\">\r\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Explore Sidebar API</strong></small>\r\n      <div class=\"custom-controls-stacked mb-2\">\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"push\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Push mode</span>\r\n        </label>\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"dock\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Docked mode</span>\r\n        </label>\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"over\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Over content mode</span>\r\n        </label>\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"slide\" [(ngModel)]=\"_mode\" (change)=\"isOpened = true; mode = _mode\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Slide mode</span>\r\n        </label>\r\n      </div>\r\n\r\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Layout</strong></small>\r\n      <div class=\"d-flex align-items-center\">\r\n        <label class=\"custom-control custom-checkbox mb-2\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" [(ngModel)]=\"isBoxed\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Boxed</span>\r\n        </label>\r\n      </div>\r\n      <div class=\"d-flex align-items-center mb-2\">\r\n        <label class=\"custom-control custom-checkbox mb-2\">\r\n          <input type=\"checkbox\" class=\"custom-control-input\" [ngModel]=\"options?.removeFooter\" (ngModelChange)=\"options.removeFooter=$event\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Remove footer</span>\r\n        </label>\r\n      </div>\r\n\r\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Theme</strong></small>\r\n      <div class=\"custom-controls-stacked mb-2\">\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"light\" [(ngModel)]=\"theme\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Light theme</span>\r\n        </label>\r\n        <label class=\"custom-control custom-checkbox\">\r\n          <input class=\"custom-control-input\" name=\"radio-stacked\" type=\"radio\" value=\"dark\" [(ngModel)]=\"theme\">\r\n          <span class=\"custom-control-indicator\"></span>\r\n          <span class=\"custom-control-description\">Dark theme</span>\r\n        </label>\r\n      </div>\r\n\r\n      <small class=\"ff-headers text-uppercase mb-3\"><strong>Select A Language</strong></small>\r\n      <div class=\"d-flex align-items-center\">\r\n        <select class=\"custom-select\" [(ngModel)]=\"currentLang\" #langSelect=\"ngModel\" (ngModelChange)=\"translate.use(currentLang)\" placeholder=\"Select language\" style=\"min-width: 50%;\">\r\n          <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{ lang }}</option>\r\n        </select>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.scss":
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.configuration {\n  width: 240px;\n  position: fixed;\n  right: 0;\n  top: 150px;\n  margin-left: 0;\n  z-index: 99999999;\n  -webkit-transition: -webkit-transform .3s ease-in-out;\n  transition: -webkit-transform .3s ease-in-out;\n  transition: transform .3s ease-in-out;\n  transition: transform .3s ease-in-out, -webkit-transform .3s ease-in-out;\n  -webkit-transform: translate(100%, 0);\n          transform: translate(100%, 0); }\n.configuration .card {\n    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n            box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);\n    margin: 0;\n    border-radius: 0; }\n.configuration.active {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0); }\n.configuration-cog {\n  width: 50px;\n  height: 50px;\n  position: absolute;\n  left: -50px;\n  line-height: 50px;\n  font-size: 24px;\n  text-align: center;\n  background: #fff;\n  -webkit-box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 0 1px rgba(0, 0, 0, 0.2);\n  border-top-left-radius: 2px;\n  border-bottom-left-radius: 2px;\n  cursor: pointer; }\n.configuration-cog i:before {\n    line-height: 50px; }\n.badge {\n  font-size: 20px;\n  margin-right: 3px;\n  color: #282828; }\n#inner_ul li {\n  font-size: 17px;\n  margin-top: 4%;\n  margin-left: 20%;\n  font-style: inherit; }\n#inner_ul li i {\n  margin-right: 20px; }\n#inner_ul li a {\n  color: #000; }\n.navigation-item i {\n  color: #555555 !important;\n  position: absolute;\n  left: 14px; }\n.ng-sidebar {\n  position: absolute !important; }\n.main-brand {\n  background: #fff;\n  width: 99%; }\n.hidden-xs-down {\n  font-size: 25px;\n  font-weight: bold;\n  color: #000 !important; }\n.side-menu-avatar {\n  padding: 28px 0;\n  background: #f5f5f5;\n  margin: -10px 0 1px; }\n.side-menu-avatar .avatar-preview {\n  display: block;\n  margin: 0 auto; }\n.avatar-preview.avatar-preview-100 {\n  width: 100px;\n  height: 100px;\n  border-radius: 100%;\n  overflow: hidden; }\n.avatar-preview img {\n  display: block;\n  cursor: pointer;\n  width: 100%;\n  border-radius: 8%; }\n.app ng-sidebar > .sidebar-panel.ng-sidebar .menu {\n  padding-right: 0px !important; }\n.app {\n  height: auto !important; }\n.drop-btn {\n  padding: 16px 36px;\n  border: none;\n  color: #000000 !important;\n  font-weight: bold;\n  width: 100%;\n  background: transparent; }\n.drop-btn:hover {\n  color: #000 !important;\n  background-color: #f5f5f5;\n  width: 100%; }\n.drop-btn i {\n  color: #c00;\n  margin-top: 5px; }\n.dropdown-ul li i {\n  font-size: 22px;\n  color: grey;\n  margin: 4px 0px; }\n.dropdown-ul li a {\n  font-size: 15px;\n  font-weight: bold;\n  color: #000000;\n  display: block;\n  padding: 6px 45px;\n  border-bottom: 1px solid #CCCCCC;\n  -webkit-transition: .5s;\n  transition: .5s; }\n.dropdown-ul li a:hover {\n  background-color: #f5f5f5 !important;\n  color: #555555 !important; }\n.dropdown-menu {\n  width: 95% !important;\n  border: none;\n  -webkit-box-shadow: 0px 0px 5px 3px #ccc;\n          box-shadow: 0px 0px 5px 3px #ccc;\n  padding: 0px; }\n.navigation-item i:hover {\n  color: #ffffff; }\n.main-footer {\n  background: #000 !important; }\n.copy-right {\n  color: #fff !important;\n  font-weight: bold;\n  font-size: 15px; }\n.rating-starts {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  text-align: justify; }\n.rating-starts fieldset {\n  margin: 0 auto;\n  float: none; }\n.popup-close-button {\n  width: 50px;\n  height: 50px;\n  border-radius: 38px;\n  background: #000000;\n  position: absolute;\n  top: -20px;\n  right: -10px;\n  cursor: pointer;\n  -webkit-transition: all .1s ease-in-out;\n  transition: all .1s ease-in-out;\n  color: #fff;\n  font-size: 30px;\n  font-family: \"Open Sans\",sans-serif;\n  font-weight: 500;\n  text-align: center;\n  line-height: 50px;\n  z-index: 1; }\n.hidden-md-down {\n  width: 140px;\n  margin-top: 20%;\n  height: 40px !important;\n  margin-left: -18px; }\n.star-cb-group {\n  /* remove inline-block whitespace */\n  font-size: 0;\n  /* flip the order so we can use the + and ~ combinators */\n  unicode-bidi: bidi-override;\n  direction: rtl;\n  /* the hidden clearer */ }\n.star-cb-group * {\n    font-size: 1rem; }\n.star-cb-group > input {\n    display: none; }\n.star-cb-group > input + label {\n      /* only enough room for the star */\n      display: inline-block;\n      overflow: hidden;\n      text-indent: 9999px;\n      width: 1em;\n      font-size: 35px;\n      white-space: nowrap;\n      cursor: pointer; }\n.star-cb-group > input + label:before {\n        display: inline-block;\n        text-indent: -9999px;\n        content: \"☆\";\n        color: #888; }\n.star-cb-group > input:checked ~ label:before,\n    .star-cb-group > input + label:hover ~ label:before,\n    .star-cb-group > input + label:hover:before {\n      content: \"★\";\n      color: #e52;\n      text-shadow: 0 0 1px #333; }\n.star-cb-group > .star-cb-clear + label {\n    text-indent: -9999px;\n    width: .5em;\n    margin-left: -.5em; }\n.star-cb-group > .star-cb-clear + label:before {\n    width: .5em; }\n.star-cb-group:hover > input + label:before {\n    content: \"☆\";\n    color: #888;\n    text-shadow: none; }\n.star-cb-group:hover > input + label:hover ~ label:before,\n  .star-cb-group:hover > input + label:hover:before {\n    content: \"★\";\n    color: #e52;\n    text-shadow: 0 0 1px #333; }\nfieldset {\n  border: 0;\n  border-radius: 1px;\n  padding: 0.1em 9.5em 0.9em;\n  margin: 1em auto; }\n.upload-input {\n  position: absolute;\n  top: 14% !important;\n  opacity: 0 !important;\n  height: 15% !important;\n  cursor: pointer;\n  z-index: 99; }\n.upload-cam-img {\n  position: absolute;\n  top: 30%;\n  font-size: 75px;\n  color: white;\n  left: 35%;\n  cursor: pointer;\n  display: none; }\n.navigation-item a:hover {\n  background: #f5f5f5 !important;\n  color: #555555 !important; }\n.navigation-item.open a {\n  background: #f5f5f5 !important;\n  border-bottom: 1px solid #d9dbdc;\n  border-top: 1px solid #d9dbdc; }\n.navigation-link:active {\n  color: #c00; }\n.navigation-link {\n  color: #000000 !important;\n  padding-left: 7px;\n  display: flow-root;\n  font-size: 15px;\n  font-weight: bold; }\n.nav-img {\n  -webkit-filter: grayscale(100%) !important;\n  filter: grayscale(100%) !important; }\n.menu .navigation-item {\n  border-bottom: none !important; }\nnav ul li a .nav-img {\n  background: none !important; }\nnav ul li a .nav-img:hover {\n  background: white !important; }\n"

/***/ }),

/***/ "./src/app/layouts/admin/admin-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__ = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__ = __webpack_require__("./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_filter__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__("./node_modules/@ngx-translate/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_service__ = __webpack_require__("./src/app/app.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2__ = __webpack_require__("./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_sweetalert2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var AdminLayoutComponent = (function () {
    function AdminLayoutComponent(menuItems, router, obj, route, http, translate, modalService, titleService, _nav) {
        this.menuItems = menuItems;
        this.router = router;
        this.obj = obj;
        this.route = route;
        this.http = http;
        this.translate = translate;
        this.modalService = modalService;
        this.titleService = titleService;
        this._nav = _nav;
        this.model = [];
        this.currentLang = 'en';
        this.theme = 'light';
        this.showSettings = false;
        this.isDocked = false;
        this.isBoxed = false;
        this.isOpened = true;
        this.mode = 'push';
        this.apiURL = 'https://storage.influexpai.com/Influencer_profile_picture/';
        this._mode = this.mode;
        this._autoCollapseWidth = 991;
        this.width = window.innerWidth;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
        // console.log("okokokokokookokookokokokokokok",this.currentUser);
    }
    AdminLayoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loadprofilepic();
        if (this.isOver()) {
            this._mode = 'over';
            this.isOpened = false;
        }
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            // Scroll to top on view load
            document.querySelector('.main-content').scrollTop = 0;
            if (_this.isOver() || event.url === '/maps/fullscreen') {
                _this.isOpened = false;
            }
            _this.route.children.forEach(function (route) {
                var activeRoute = route;
                while (activeRoute.firstChild) {
                    activeRoute = activeRoute.firstChild;
                }
                _this.options = activeRoute.snapshot.data;
            });
            if (_this.options.hasOwnProperty('heading')) {
                _this.setTitle(_this.options.heading);
            }
        });
    };
    AdminLayoutComponent.prototype.signout = function () {
        localStorage.clear();
        this._nav.navigate(['/authentication/signin']);
        this.logoutsweetalert();
    };
    AdminLayoutComponent.prototype.logoutsweetalert = function () {
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            title: "influexpai<br> Thanks for visiting us",
            type: "success",
            showConfirmButton: false,
            timer: 2000,
        });
        // this.showlink = false;
    };
    AdminLayoutComponent.prototype.ngOnDestroy = function () {
        this._router.unsubscribe();
    };
    AdminLayoutComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle('InfluExp - Influencer| ' + newTitle);
    };
    AdminLayoutComponent.prototype.toogleSidebar = function () {
        if (this._mode !== 'dock') {
            this.isOpened = !this.isOpened;
        }
    };
    AdminLayoutComponent.prototype.isOver = function () {
        return window.matchMedia("(max-width: 991px)").matches;
    };
    AdminLayoutComponent.prototype.openSearch = function (search) {
        this.modalService.open(search, { windowClass: 'search', backdrop: false });
    };
    AdminLayoutComponent.prototype.addMenuItem = function () {
        this.menuItems.add({
            state: 'menu',
            name: 'MENU',
            type: 'sub',
            icon: 'basic-webpage-txt',
            children: [
                { state: 'menu', name: 'MENU' },
                { state: 'menu', name: 'MENU' }
            ]
        });
    };
    AdminLayoutComponent.prototype.onResize = function (event) {
        if (this.width === event.target.innerWidth) {
            return false;
        }
        if (this.isOver()) {
            this._mode = 'over';
            this.isOpened = false;
        }
        else {
            this._mode = this.mode;
            this.isOpened = true;
        }
        this.width = event.target.innerWidth;
    };
    AdminLayoutComponent.prototype.onclick = function (value) {
        this.ratingValue = value;
    };
    AdminLayoutComponent.prototype.reviewSubmit = function () {
        var _this = this;
        this.userid = localStorage.getItem('user_id');
        this.obj.post_review(this.model.userid, this.model.review, this.ratingValue).subscribe(function (data) {
            _this.rate = _this.ratingValue;
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Thanks for rating  ', _this.rate.toString() + ' Star Review', 'success');
        });
    };
    AdminLayoutComponent.prototype.processProfileImage = function () {
        var _this = this;
        __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()({
            title: 'Select profile image!',
            text: 'New profile image will be uploaded',
            type: 'question',
            //html:'',
            input: 'file',
            inputClass: 'form-control',
            preConfirm: function (result) {
                return new Promise(function (resolve, reject) {
                    setTimeout(function () {
                        if (result == null) {
                            reject('Please select an image');
                        }
                        else {
                            if (result.type.match('image.*')) {
                                console.log("is an image");
                                resolve();
                            }
                            else {
                                reject('Please select an image');
                            }
                        }
                    }, 2);
                });
            },
            showCancelButton: true,
            confirmButtonText: 'Save',
            cancelButtonText: 'Cancel'
        }).then(function (result) {
            // console.log(result);
            //
            _this.getBase64(result);
            // }
        }, function (dismiss) {
            // dismiss can be 'overlay', 'cancel', 'close', 'esc', 'timer'
            if (dismiss === 'cancel') {
                __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Cancelled', '', 'error');
            }
        });
    };
    AdminLayoutComponent.prototype.getBase64 = function (file) {
        var _this = this;
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            // console.log(reader.result);
            _this.uploadProfileImage(reader.result);
        };
        reader.onerror = function (error) {
        };
    };
    AdminLayoutComponent.prototype.uploadProfileImage = function (img) {
        // let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var _this = this;
        var headers = new Headers({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        var myhttp;
        myhttp.post('https://apis.influexpai/upload_brand_profile_image/', { profile_image: img }, { headers: headers }).map(function (response) { return response.json(); }).subscribe(function (data) {
            // this.currentUser['profile_image'] = Config.api+'/media/'+data['profile_image'];
            localStorage.setItem('currentUser', JSON.stringify(_this.currentUser));
            // this.comp.loadCurrentUser(Config.api+'/media/'+data['profile_image']);
            // this.data.changeUserData(this.currentUser);
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Image Saved!', '', 'success');
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_8_sweetalert2___default()('Try again after some time!', error.toString(), 'error');
        });
    };
    AdminLayoutComponent.prototype.onChange = function ($event) {
        var _this = this;
        this.image = $event.target.files[0];
        console.log('Image Event...', this.image);
        this.obj.onUpload(this.image).subscribe(function (response) {
            // console.log('set any success actions...');
            _this.loadprofilepic();
        }, function (error) {
            console.log('set any error actions...');
        });
    };
    AdminLayoutComponent.prototype.loadprofilepic = function () {
        var _this = this;
        this.obj.get_profile_pic().subscribe(function (observer) {
            // this.profile_image= observer.Message.path;
            _this.profile_image = observer['message'];
            console.log('Result is ', _this.profile_image);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('sidebar'),
        __metadata("design:type", Object)
    ], AdminLayoutComponent.prototype, "sidebar", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AdminLayoutComponent.prototype, "onResize", null);
    AdminLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: __webpack_require__("./src/app/layouts/admin/admin-layout.component.html"),
            styles: [__webpack_require__("./src/app/layouts/admin/admin-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__shared_menu_items_menu_items__["a" /* MenuItems */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */],
            __WEBPACK_IMPORTED_MODULE_7__app_service__["a" /* App_service */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["Http"],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_3__ng_bootstrap_ng_bootstrap__["f" /* NgbModal */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["Title"],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]])
    ], AdminLayoutComponent);
    return AdminLayoutComponent;
}());



/***/ }),

/***/ "./src/app/layouts/auth/auth-layout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthLayoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AuthLayoutComponent = (function () {
    function AuthLayoutComponent() {
    }
    AuthLayoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-layout',
            template: '<router-outlet></router-outlet>'
        })
    ], AuthLayoutComponent);
    return AuthLayoutComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = ".preloader-full {\r\n  z-index: 100;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background: rgba(2, 2, 2, 0.37);\r\n}\r\n.spinner {\r\n  position:absolute;\r\n  left: 50%;\r\n  top: 50%;\r\n  margin: -70px 0 0 -70px;\r\n  height: 140px;\r\n  width: 140px;\r\n  background-image:url(\"data:image/svg+xml,%3Csvg xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width%3D%22274.257%22 height%3D%22253.428%22 viewBox%3D%220 0 274.257 253.428%22%3E%3Cpath fill%3D%22%23000%22 stroke%3D%22%23000%22 stroke-width%3D%22%22 d%3D%22M274.11 50.347c-.62-22.367-14.982-37.88-31.665-45.667-20-9.333-43.334-3.667-57.667 11-5.135 5.255-8.91 11.958-16 18.667-12.333 11.667-19.96 15.125-31.667 15.333-18.666.333-30.784-11.132-33.536-13.376-4.888-3.986-5.796-9.624-11-15-13.012-13.445-37.35-25.9-63-14-46.796 21.71-38.796 104.71 31 100 9.87 1.043 16.785 5.29 22.537 11.043 2.338 2.338 5.51 5.85 8 10 2.8 4.666 6.226 12.194 7 16 1.57 7.707 1.668 13.666-1.666 22.333-3.06 7.953-9.698 16.35-10.87 22.623-6.796 36.377 20.467 64.06 52 64 27.495-.053 58.293-25.693 51-63-1.412-7.227-5.592-13.913-9.463-21.29-3.85-7.338-3.128-20.623-.665-31.333 3.537-8.956 5.87-12.29 11.333-18 2.915-3.047 16.104-10.896 24.796-12.377 9.537-1.623 17.683-1.638 25.537-4.623 19.462-7.396 34.668-28.333 34-52.333zM51.778 82.36c-14.91 0-27-12.244-27-27.346s12.09-27.346 27-27.346c14.912 0 27 12.243 27 27.346s-12.088 27.346-27 27.346zm85.333 145.666c-14.91 0-27-12.243-27-27.346s12.09-27.346 27-27.346 27 12.243 27 27.346-12.09 27.346-27 27.346zm0-98c-14.91 0-27-12.244-27-27.346s12.09-27.346 27-27.346c14.912 0 27 12.243 27 27.346s-12.088 27.345-27 27.345zm84.667-49.666c-14.91 0-27-12.244-27-27.346s12.09-27.346 27-27.346c14.912 0 27 12.243 27 27.346s-12.088 27.346-27 27.346z%22%2F%3E%3C%2Fsvg%3E%0D\");\r\n  background-repeat: no-repeat;\r\n  background-position: 22px 30px;\r\n  background-size: 96px 97px;\r\n  -webkit-animation: spin 5s ease-in-out infinite ;\r\n          animation: spin 5s ease-in-out infinite ;\r\n  text-align:center;\r\n  /*delay 2s ease-in-out 1*/\r\n}\r\n@-webkit-keyframes spin {\r\n\r\n  0% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transition:ease-in-out; transition:ease-in-out }\r\n  50% { -webkit-transform: rotate(2500deg); transform: rotate(2500deg); -webkit-transition:ease-in-out; transition:ease-in-out}\r\n  100% { -webkit-transform: rotate(360deg); transform: rotate(360deg); -webkit-transition:ease-in-out; transition:ease-in-out}\r\n\r\n}\r\n@-webkit-keyframes delay {\r\n\r\n  0% { opacity: 0;}\r\n  50% { opacity: 0;}\r\n  100% { opacity: 1;}\r\n\r\n}\r\n"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"preloader-full\"\r\n     *ngIf=\"preloaderService.getPreloaderCount('full') > 0\">\r\n  <div class=\"spinner\"></div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__serv_preloader_service__ = __webpack_require__("./src/app/serv/preloader-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = (function () {
    function LoaderComponent(preloaderService) {
        this.preloaderService = preloaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__serv_preloader_service__["a" /* PreloaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export httpServiceFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__serv_preloader_service__ = __webpack_require__("./src/app/serv/preloader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__serv_http_service__ = __webpack_require__("./src/app/serv/http-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






function httpServiceFactory(backend, defaultOptions, preloaderService) {
    return new __WEBPACK_IMPORTED_MODULE_4__serv_http_service__["a" /* HttpService */](backend, defaultOptions, preloaderService);
}
var LoaderModule = (function () {
    function LoaderModule() {
    }
    LoaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__loader_component__["a" /* LoaderComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__serv_preloader_service__["a" /* PreloaderService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_4__serv_http_service__["a" /* HttpService */],
                    useFactory: httpServiceFactory,
                    deps: [__WEBPACK_IMPORTED_MODULE_2__angular_http__["XHRBackend"], __WEBPACK_IMPORTED_MODULE_2__angular_http__["RequestOptions"], __WEBPACK_IMPORTED_MODULE_3__serv_preloader_service__["a" /* PreloaderService */]]
                }
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__loader_component__["a" /* LoaderComponent */]
            ]
        })
    ], LoaderModule);
    return LoaderModule;
}());



/***/ }),

/***/ "./src/app/myshowcase/myshowcase.component.html":
/***/ (function(module, exports) {

module.exports = "<section>\r\n<div class=\"container-fluid p-0\">\r\n  <div class=\"profile showcase-background\">\r\n    <div class=\"container\" >\r\n      <!-- <img src=\"{{message.show_image[0]?.image}}\"  onerror=\"this.src='../../../assets/images/logos/Logo1.png'\" alt=\"\"> -->\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\" >\r\n  <div class=\"col-md-4\">\r\n\r\n  </div>\r\n</div>\r\n<div *ngFor=\"let data of datashowcase \">\r\n    <p>{{data.city}}</p>\r\n    <p>{{data.email}}</p>\r\n  \r\n  </div>\r\n  <div *ngFor=\"let message of showcase\">\r\n    <p>{{message.title}}</p>\r\n    <p>{{message.description}}</p>\r\n    <p>{{message.urls}}</p>\r\n    <p>{{message.status}}</p>\r\n    <!-- <p *ngIf=\"{{show_image.show_image}} === P\">Pending</p> -->\r\n    <!-- <p *ngIf=\"messgae.status == N\">Not Approved </p>\r\n    <p *ngIf=\"messgae.status == A\">Approved </p> -->\r\n    <p> <img src=\"{{message.show_image[0]?.image}}\" onerror=\"this.src='../../../assets/images/logos/Logo1.png'\" alt=\"\"></p>\r\n  </div>\r\n</section>"

/***/ }),

/***/ "./src/app/myshowcase/myshowcase.component.scss":
/***/ (function(module, exports) {

module.exports = ".showcase-background {\n  background: url('showcase.716e60a3f5a03690e70f.jpg');\n  width: 100%;\n  height: 500px; }\n"

/***/ }),

/***/ "./src/app/myshowcase/myshowcase.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyshowcaseComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__("./src/app/app.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MyshowcaseComponent = (function () {
    function MyshowcaseComponent(app_Service) {
        this.app_Service = app_Service;
        this.showcase = [];
        this.datashowcase = [];
    }
    MyshowcaseComponent.prototype.ngOnInit = function () {
        // this.username= localStorage.getItem('username');
        var _this = this;
        this.mysc();
        this.app_Service.getUserData().subscribe(function (data) {
            _this.datashowcase = data.message;
            console.log(_this.datashowcase);
            _this.userdata = data.message;
            _this.show_image = data.show_image;
            _this.userdata1 = data.User_data;
            _this.city = _this.datashowcase['city'];
            for (var _i = 0, _a = _this.datashowcase; _i < _a.length; _i++) {
                var citys = _a[_i];
                console.log(citys.city);
            }
            console.log(_this.city);
            localStorage.setItem('email', _this.userdata1['email']);
            localStorage.setItem('user_id', _this.userdata[0]['user']);
            // localStorage.setItem('city', this.city[0]['city']);
        });
    };
    MyshowcaseComponent.prototype.mysc = function () {
        var _this = this;
        this.app_Service.myshowcase().subscribe(function (showcase) {
            console.log(showcase);
            _this.showcase = showcase.message;
            for (var _i = 0, _a = _this.showcase; _i < _a.length; _i++) {
                var abc = _a[_i];
                console.log(abc);
            }
            _this.showshowcase = showcase;
        });
    };
    MyshowcaseComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-myshowcase',
            template: __webpack_require__("./src/app/myshowcase/myshowcase.component.html"),
            styles: [__webpack_require__("./src/app/myshowcase/myshowcase.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* App_service */]])
    ], MyshowcaseComponent);
    return MyshowcaseComponent;
}());



/***/ }),

/***/ "./src/app/pricing/pricing.component.css":
/***/ (function(module, exports) {

module.exports = ".com-table strong{font-weight:700!important}.com-table .fa-check{color:#00cd00;font-size:21px}.com-table .fa-times{color:#cd0a0e;font-size:21px}.com-table table tr td a{color:#000000}.right{right:-42px}.items img{margin-left:10%}.com-table .fa-times{color: black}.page-section{\r\n    margin-top: 50px;\r\n}.pricing [class^=col-] {\r\n    padding: 0;\r\n    margin-top: 0px;\r\n}.true{\r\n    color: #01b301;\r\n        font-size: 13px;\r\n    font-weight: 600;\r\n    width: 23px;\r\n    height: 23px;\r\n    border-radius: 50%;\r\n    border: 1px solid;\r\n    padding: 4px;\r\n  }"

/***/ }),

/***/ "./src/app/pricing/pricing.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <app-header></app-header> -->\r\n<!-- Modal -->\r\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\" *ngIf=\"isModal\">\r\n  <div class=\"modal-dialog\">\r\n    <!-- Modal content-->\r\n    <div class=\"modal-content\">\r\n      <!--<div class=\"modal-body\">-->\r\n      <div class=\"block divcenter\" style=\"background-color: #FFF; max-width: 800px;\">\r\n        <div class=\"modal-body price-model\">\r\n          <form name=\"form\" method=\"post\" class=\"nobottommargin\" (ngSubmit)=\"f.form.valid && getStarted()\" #f=\"ngForm\" novalidate>\r\n            <div class=\"row clearfix\">\r\n              <div class=\"col-sm-12\">\r\n                <h3 class=\"\">Enter email to continue</h3>\r\n              </div>\r\n              <div class=\"col-sm-4\">\r\n                <div id=\"modal-get-started-package\"></div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col_last\">\r\n              <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !email123.valid }\">\r\n                <label class=\"\" for=\"get-started-form-email\">Your Email:</label>\r\n                <input type=\"email\" id=\"get-started-form-email\" name=\"email123\" autocomplete=\"off\" [(ngModel)]=\"email\" #email123=\"ngModel\"\r\n                       required   pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" class=\"form-control required email no-error-msg\" (keyup)=\"check(email123.valid)\"  />\r\n              </div>\r\n              <div class=\"clear\"></div>\r\n              <div class=\"md-errors-spacer\" [hidden]=\"email123.valid || email123.untouched\">\r\n                <div class=\"help-block\" style=\"color: red\"  *ngIf=\"email123.errors && email123.errors.required\">\r\n                  Email is required\r\n                </div>\r\n                <div class=\"help-block\" style=\"color: red\"  *ngIf=\"email123.errors && email123.errors.pattern\">\r\n                  Email is invalid\r\n                </div>\r\n              </div>\r\n              <div *ngIf=\"exists\" class=\"alert alert-danger\">\r\n                <span>Email already exists.</span>\r\n              </div>\r\n              <div class=\"style-msg successmsg\" *ngIf=\"emailchk && !exists\">\r\n                <div class=\"sb-msg\"><i class=\"icon-ok\"></i><span>Email is not registered.</span> You can continue.</div>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">×</button>\r\n              </div>\r\n            </div>\r\n            <div class=\"clear\"></div>\r\n            <div class=\"form-group\" >\r\n              <div class=\"col_full nobottommargin\">\r\n                <!--<button  class=\"btn btn-rounded btn-success sign-up\">Register</button>-->\r\n                <!--<button class=\"button button-rounded nomargin\" id=\"get-started-form-submit\" name=\"get-started-form-submit\" (click)=\"getStarted()\" value=\"login\">Get Started</button>-->\r\n                <button [disabled]=\"!emailchk || loading\" class=\"button button-rounded nomargin\" >Get Started</button>\r\n                <img *ngIf=\"loading\"\r\n                     src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n                <a href=\"#\" data-scrollto=\"#section-pricing\" data-easing=\"easeInOutExpo\" data-speed=\"1250\" data-offset=\"160\" class=\"fright\" (click)=\"closeModal()\">Change Plan?</a>\r\n              </div>\r\n            </div>\r\n          </form>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button class=\"btn btn-lg btn-primary register\"  type=\"button\"  data-dismiss=\"modal\" (click)=\"closeModal()\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<br>\r\n<!-- <preloader-full></preloader-full> -->\r\n<div class=\"container clearfix\">\r\n  <div id=\"section-pricing\" class=\"page-section nopadding\" style=\"margin-top: 40px\">\r\n    <br/>\r\n    <div class=\"pricing-tenure-switcher center\" data-container=\"#pricing-switch\">\r\n      <span class=\"pts-left\" *ngIf=\"!isright\" style=\"color: black; font-weight: bolder; font-size: 17px\">Monthly</span>\r\n\r\n\r\n        <span class=\"pts-left\" *ngIf=\"isright\">Monthly</span>\r\n      <div class=\"pts-switcher\">\r\n        <div class=\"switch\">\r\n          <!--<input [(ngModel)]=\"isright\" id=\"switch-toggle-pricing-tenure\" class=\"switch-toggle switch-toggle-round\" type=\"checkbox\">-->\r\n            <mat-slide-toggle [(ngModel)]=\"isright\" id=\"switch-toggle-pricing-tenure\" class=\"switch-toggle switch-toggle-round\"></mat-slide-toggle>\r\n\r\n            <label for=\"switch-toggle-pricing-tenure\"></label>\r\n        </div>\r\n      </div>\r\n      <span class=\"pts-right\" *ngIf=\"!isright\">Yearly</span>\r\n        <span class=\"pts-right\" *ngIf=\"isright\" style=\"color: black; font-weight: bolder; font-size: 17px\">Yearly</span>\r\n    </div>\r\n    <div id=\"pricing-switch\" class=\"pricing bottommargin-lg row\">\r\n        <div class=\"col-md-2 col-sm-6\"></div>\r\n\r\n      <div class=\"col-md-4 col-sm-6\" *ngIf=\"!isright\">\r\n        <div class=\"pricing-box\">\r\n            <!-- <button data-toggle=\"modal\" data-target=\"#myModal\" data-pricing-plan=\"Starter Plan\"\r\n            (click)=\"pricingpackage('free')\"\r\n            class=\"button button-large button-rounded capitalize ls0\" style=\"border-radius: 23px;\">\r\n            Register Now\r\n          </button> -->\r\n        \r\n          <div class=\"pricing-price starter\">\r\n              <div class=\"pricing-title\">\r\n                  <h3>Flex</h3>\r\n                </div>\r\n            <div class=\"pts-switch-content-left\"><span class=\"price-unit1\">$</span><span class=\"price\">34.99</span><span\r\n              class=\"price-unit\">Monthly</span>\r\n            </div>\r\n          </div>\r\n          <!--<div class=\"pricing-price\">-->\r\n          <!--FREE<span class=\"price-unit\">Limited Access</span>-->\r\n          <!--</div>-->\r\n          <div class=\"pricing-features\">\r\n            <ul>\r\n                <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">Unlimited</span> Searches</li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Store up to 2000 Contacts</span></li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Send up to 1,000,000 emails</span></li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> 1 Seat</span></li>\r\n                <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">1 Month License</span></li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Email Support</span></li>\r\n            </ul>\r\n            <button class=\"btn btn-lg btn-primary register\"  data-toggle=\"modal\" data-target=\"#myModal\" data-pricing-plan=\"Starter Plan\"\r\n                    (click)=\"pricingpackage('free')\"\r\n                     >\r\n                    Register Now\r\n            </button>\r\n          </div>\r\n         \r\n        </div>\r\n      </div>\r\n      <!--pro pack yearly start-->\r\n      <!---->\r\n      <div class=\"col-md-4 col-sm-6\" *ngIf=\"isright\">\r\n        <div class=\"pricing-box\">\r\n            <!-- <button data-toggle=\"modal\" data-target=\"#myModal\"\r\n            data-pricing-plan=\"Professional Yearly Plan\"\r\n            (click)=\"pricingpackage(propacky.value)\"\r\n            class=\"button button-large button-rounded capitalize ls0\"\r\n            style=\"border-radius: 23px;\"> Register Now\r\n          </button> -->\r\n         \r\n          <div class=\"pricing-price starter\">\r\n              <div class=\"pricing-title\">\r\n                  <h3>Flex</h3>\r\n                </div>\r\n            <div><span class=\"price-unit1\">$</span><span class=\"price\">299.99</span><span class=\"price-unit\">Yearly</span></div>\r\n          </div>\r\n          <div class=\"pricing-features\">\r\n            <input type=\"hidden\" value=\"pro monthly\" #propackm>\r\n            <input type=\"hidden\" value=\"pro yearly\" #propacky>\r\n            <ul>\r\n                <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">Unlimited</span> Searches</li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Store up to 8000  Contacts</span></li>\r\n                <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">Send up to 1,000,000 emails</span></li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> 3 Seat</span></li>\r\n                <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">1 Month</span> License</li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\">Email Support</span> </li>\r\n            </ul>\r\n            <button class=\"btn btn-lg btn-primary register\"  data-toggle=\"modal\" data-target=\"#myModal\"\r\n            data-pricing-plan=\"Professional Yearly Plan\"\r\n            (click)=\"pricingpackage(propacky.value)\"\r\n          > Register Now\r\n            </button>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      <!---->\r\n      <!--pro pack yearly end-->\r\n      <!--pro pack monthly start-->\r\n      <!---->\r\n      <div class=\"col-md-4 col-sm-6\" *ngIf=\"!isright\">\r\n        <div class=\"pricing-box\" *ngIf=\"!isright\">\r\n            <!-- <button data-toggle=\"modal\" data-target=\"#myModal\"\r\n                      data-pricing-plan=\"Professional Monthly Plan\"\r\n                      (click)=\"pricingpackage(propackm.value)\"\r\n                      class=\"button button-large button-rounded capitalize ls0\"\r\n                      style=\"border-radius: 23px;\">Register Now\r\n              </button> -->\r\n         \r\n          <div class=\"\">\r\n              \r\n            <div class=\"pts-switch-content-left pricing-price professional\">\r\n                <div class=\"pricing-title\">\r\n                    <h3>Pro</h3>\r\n                  </div>\r\n              \r\n              <span class=\"price-unit1\">$</span><span class=\"price\">299.99</span><span\r\n              class=\"price-unit\">Monthly</span>\r\n            </div>\r\n            <div class=\"pricing-features\">\r\n              <input type=\"hidden\" value=\"pro monthly\" #propackm>\r\n              <input type=\"hidden\" value=\"pro yearly\" #propacky>\r\n              <ul>\r\n                      \r\n                  <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">Unlimited</span> Searches</li>\r\n                  <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Store up to 8000  Contacts</span></li>\r\n                  <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\">Send up to 1,000,000 emails</span> </li>\r\n                  <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> 1 Seat</span></li>\r\n                  <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">1 Year</span> License</li>\r\n                  <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Email Support</span></li>\r\n              </ul>\r\n              <button class=\"btn btn-lg btn-primary register\" data-toggle=\"modal\" data-target=\"#myModal\"\r\n                      data-pricing-plan=\"Professional Monthly Plan\"\r\n                      (click)=\"pricingpackage(propackm.value)\"\r\n                     >Register Now\r\n              </button>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!---->\r\n      <!--pro pack monthly end-->\r\n      <!--Business pack monthly start-->\r\n      <!--Business pack monthly end-->\r\n      <!--Business pack yearly start-->\r\n      <div class=\"col-md-4 col-md-offset-0 col-sm-6 col-sm-offset-3\" *ngIf=\"isright\">\r\n        <div class=\"pricing-box\">\r\n            <!-- <button data-toggle=\"modal\" data-target=\"#myModal\" data-pricing-plan=\"Business Yearly Plan\"\r\n            (click)=\"pricingpackage(bpacky.value)\"\r\n            class=\"button button-large button-rounded capitalize ls0\" style=\"border-radius: 23px;\">\r\n            Register Now\r\n    </button> -->\r\n         \r\n          <div class=\"pricing-price business\">\r\n              <div class=\"pricing-title\">\r\n                  <h3>Pro</h3>\r\n                </div>\r\n            <div><span class=\"price-unit1\">$</span><span class=\"price\">999.99</span><span class=\"price-unit\">Yearly</span></div>\r\n          </div>\r\n          <div class=\"pricing-features\">\r\n            <ul>\r\n                <li><i class=\"fa fa-check true\"></i> <span class=\"paddings-strong\">Unlimited</span> Searches</li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\">  Store up to 8000  Contacts</span></li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Send up to 1,000,000 emails </span> </li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\">  3 Seat</span></li>\r\n                <li><i class=\"fa fa-check true\"></i> <span>1 Year</span> License</li>\r\n                <li><i class=\"fa fa-check true\"></i><span class=\"paddings-strong\"> Email Support</span></li>\r\n            </ul>\r\n            <button class=\"btn btn-lg btn-primary register\" data-toggle=\"modal\" data-target=\"#myModal\" data-pricing-plan=\"Business Yearly Plan\"\r\n                    (click)=\"pricingpackage(bpacky.value)\"\r\n            >\r\n                    Register Now\r\n            </button>\r\n          </div>\r\n          <input type=\"hidden\" value=\"bui monthly\" #bpackm>\r\n          <input type=\"hidden\" value=\"bui yearly\" #bpacky>\r\n         \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!--Business pack yearly end-->\r\n  </div>\r\n</div>\r\n\r\n<!-- <section id=\"f-c\">\r\n    <div class=\"container-fluid container-wide\">\r\n        <h1 class=\"title text-center\">How we stack up against the Competition?</h1>\r\n        <p class=\"text-center\" style=\"font-weight:700;margin:0 0 30px;\">Unbeatable Pricing. One-Package-Includes-All. The Industry’s most comprehensive Feature Set - Your One-Stop-Shop for Influencer <br />No Gimmicks. No Hidden Fees. Next generation Web, iOS & Android Mobile Apps.</p>\r\n        <div class=\"com-table\">\r\n\r\n\r\n            style=\"border: 1px solid red; border-radius: 25px; padding: 19px 15px; box-shadow: 0px 0px 17px 0px;\"\r\n\r\n\r\n            <table class=\"table table-bordered table-striped\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Features</th>\r\n                    <th>InfluExpert.AI</th>\r\n                    <th>Competitor 1</th>\r\n                    <th>Competitor 2</th>\r\n                    <th>Competitor 3</th>\r\n                    <th>Competitor 4</th>\r\n                    <th>Competitor 5</th>\r\n                    <th>Competitor 6</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody>\r\n                <tr>\r\n                    <td><span>Average Pricing / Year</span></td>\r\n                    <td>$ 1499.99</td>\r\n                    <td>$ 8388</td>\r\n                    <td>$ 7188</td>\r\n                    <td>$ 15,899</td>\r\n                    <td>$ 2388</td>\r\n                    <td>$ 7988</td>\r\n                    <td>$ 5988</td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Influencer Matching Artificial Intelligence (AI)</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Social Media Classification based on ML/AI</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Request For Marketing: Publish Bids</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Influencer Review and Custom Scroes</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>CRM</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Actionable Analytics</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Email directly from Platform</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Deep Influencer Insight</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Campaign Scheduling</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Daily Email Influencer Alerts & Notifications</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Campaign Monitoring</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Content Creation & Review</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Social Monitoring</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Account Management & Automation</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Realtime Influencer Chat</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Vetted Opt-In Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Bloggers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Twitter Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Instagram Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Facebook Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Snapchat Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Youtube Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Pinterest Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>LinkedIn Influencers</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Search Engine</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Android Mobile App</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>iOS Mobile App</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Electronic Bid Submission</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Winning Bidder Insight</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n                <tr>\r\n                    <td><span>Technical Support Chat</span></td>\r\n                    <td><i class=\"fa fa-check true\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                    <td><i class=\"fa fa-times\"></i></td>\r\n                </tr>\r\n\r\n                </tbody>\r\n            </table>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</section> -->\r\n<!-- Table Section-->\r\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/pricing/pricing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PricingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_serv_http_service__ = __webpack_require__("./src/app/serv/http-service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import {HttpService} from '../services/http-service';



var PricingComponent = (function () {
    function PricingComponent(router, http, preloadersvc) {
        this.router = router;
        this.http = http;
        this.preloadersvc = preloadersvc;
        this.email = '';
        this.emailchk = false;
        this.loading = false;
        this.exists = false;
        this.isModal = false;
        this.isright = false;
    }
    PricingComponent.prototype.ngOnInit = function () {
        window.scroll(0, 0);
    };
    PricingComponent.prototype.getStarted = function () {
        this.loading = true;
        this.proceedstep1();
    };
    PricingComponent.prototype.closeModal = function () {
        this.isModal = false;
    };
    PricingComponent.prototype.pricingpackage = function (value) {
        this.isModal = true;
        localStorage.setItem('package', value);
        console.log(value);
    };
    PricingComponent.prototype.check = function (valid) {
        this.exists = false;
        console.log(valid);
        this.emailchk = valid;
        if (valid) {
            this.chkmail();
        }
    };
    PricingComponent.prototype.uniquemail = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/validate/email/', JSON.stringify({
            email: this.email
        }), { headers: headers })
            .map(function (response) {
            console.log(response);
        });
    };
    PricingComponent.prototype.sendmail = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.preloadersvc.post(__WEBPACK_IMPORTED_MODULE_4__config__["a" /* Config */].api + '/confirm/email/', JSON.stringify({
            email: this.email
        }), { headers: headers })
            .map(function (response) {
            console.log(response);
        });
    };
    PricingComponent.prototype.proceedstep1 = function () {
        var _this = this;
        // this.isModal = false;
        this.sendmail()
            .subscribe(function (data) {
            _this.isModal = false;
            localStorage.setItem('brandemail', _this.email);
            // this.router.navigate([this.returnUrl]);
            _this.router.navigate(['pricing/steps']);
        }, function (error) {
            // this.alertService.error(error);
            _this.loading = false;
            alert('Server is down please try again after some time.');
        });
    };
    PricingComponent.prototype.chkmail = function () {
        var _this = this;
        this.loading = true;
        this.uniquemail()
            .subscribe(function (data) {
            // this.router.navigate([this.returnUrl]);
            _this.loading = false;
        }, function (error) {
            _this.emailchk = false;
            // this.alertService.error(error);
            _this.loading = false;
            _this.exists = true;
            // alert(error)
        });
    };
    PricingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__("./src/app/pricing/pricing.component.html"),
            styles: [__webpack_require__("./src/app/pricing/pricing.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["Http"], __WEBPACK_IMPORTED_MODULE_5_app_serv_http_service__["a" /* HttpService */]])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/recapcha/recapcha.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\" style=\"margin: 0 auto; float:right\">\r\n    <div class=\"main\">\r\n        <img [src]=\"imgName\">\r\n        <button  type=\"button\" (click)=\"resetImg()\" mat-icon-button>\r\n        <img src=\"../../assets/refresh-page-option.svg\" class=\"recapcha-img\">\r\n        </button>\r\n    </div>\r\n    \r\n        <input class=\"focus-border\" [(ngModel)]=\"capchaText\" autocomplete=\"off\" maxlength=\"5\" (ngModelChange)=\"checkChange()\" placeholder=\"Enter above text\">\r\n    \r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/recapcha/recapcha.component.scss":
/***/ (function(module, exports) {

module.exports = ".card {\n  width: 162px;\n  padding: 10px !important; }\n  .card .mat-form-field {\n    text-align: center;\n    font-size: 16px; }\n  .card .main {\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between; }\n  .card button {\n    background: #000;\n    border: none;\n    color: #fff;\n    border-radius: 50%;\n    width: 30px;\n    height: 30px;\n    padding: 0;\n    float: right;\n    outline: 0; }\n  .card button .mat-icon {\n      color: white; }\n  input[_ngcontent-c4] {\n  margin: 8px 0 0;\n  background: #fff;\n  padding: 4px;\n  /* border-radius: 5px; */\n  font-size: 18px;\n  border: 2px inset;\n  width: 100%;\n  border: none;\n  border-bottom: 1px solid;\n  font: inherit;\n  font-size: 16px;\n  text-align: center; }\n  .main img {\n  width: 80%;\n  border-radius: 5px; }\n  .focus-border:focus {\n  outline: none !important; }\n  .focus-border {\n  border: none;\n  border-bottom: 1px solid;\n  text-align: center;\n  font-size: inherit;\n  width: 90%; }\n  .recapcha-img {\n  height: 16px;\n  position: absolute;\n  top: 7px;\n  right: 3px; }\n"

/***/ }),

/***/ "./src/app/recapcha/recapcha.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapchaComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__recapcha_service__ = __webpack_require__("./src/app/recapcha/recapcha.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecapchaComponent = (function () {
    function RecapchaComponent(recapchaService) {
        this.recapchaService = recapchaService;
    }
    RecapchaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.recapchaService.resetImg();
        this.recapchaService.img.subscribe(function (res) { _this.imgName = res; });
    };
    RecapchaComponent.prototype.resetImg = function () {
        var _this = this;
        this.recapchaService.resetImg();
        this.recapchaService.img.subscribe(function (res) { return _this.imgName = res; });
    };
    RecapchaComponent.prototype.checkChange = function () {
        this.recapchaService.changeData(this.capchaText);
        // console.log(this.capchaText)
    };
    RecapchaComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-recapcha',
            template: __webpack_require__("./src/app/recapcha/recapcha.component.html"),
            styles: [__webpack_require__("./src/app/recapcha/recapcha.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__recapcha_service__["a" /* RecapchaService */]])
    ], RecapchaComponent);
    return RecapchaComponent;
}());



/***/ }),

/***/ "./src/app/recapcha/recapcha.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapchaModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__recapcha_component__ = __webpack_require__("./src/app/recapcha/recapcha.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var RecapchaModule = (function () {
    function RecapchaModule() {
    }
    RecapchaModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__recapcha_component__["a" /* RecapchaComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["j" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["d" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["HttpModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_material__["b" /* MatButtonModule */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__recapcha_component__["a" /* RecapchaComponent */]
            ]
        })
    ], RecapchaModule);
    return RecapchaModule;
}());



/***/ }),

/***/ "./src/app/recapcha/recapcha.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecapchaService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("./node_modules/rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecapchaService = (function () {
    function RecapchaService() {
        this.isn = "../assets/Recaptcha Images/Recaptcha Images-";
        this.recapchaImages = [
            { img: this.isn + "01.jpg", text: "FFhtq" },
            { img: this.isn + "02.jpg", text: "ghTkn" },
            { img: this.isn + "03.jpg", text: "OfrHt" },
            { img: this.isn + "04.jpg", text: "qjRtf" },
            { img: this.isn + "05.jpg", text: "sbCwt" },
            { img: this.isn + "06.jpg", text: "pdkOs" },
            { img: this.isn + "07.jpg", text: "efiQx" },
            { img: this.isn + "08.jpg", text: "nVbra" },
            { img: this.isn + "09.jpg", text: "pLkub" },
            { img: this.isn + "10.jpg", text: "Vbnuy" },
            { img: this.isn + "12.jpg", text: "iYhjE" },
            { img: this.isn + "13.jpg", text: "zUIds" },
            { img: this.isn + "14.jpg", text: "pScNo" },
            { img: this.isn + "15.jpg", text: "xxFyt" },
            { img: this.isn + "16.jpg", text: "dApmt" },
            { img: this.isn + "17.jpg", text: "cHejp" },
            { img: this.isn + "19.jpg", text: "LqwRc" },
            { img: this.isn + "20.jpg", text: "qXfrt" },
            { img: this.isn + "21.jpg", text: "ZbyvC" },
            { img: this.isn + "22.jpg", text: "Mrysi" },
            { img: this.isn + "23.jpg", text: "DgEqt" },
            { img: this.isn + "24.jpg", text: "jXbed" },
            { img: this.isn + "25.jpg", text: "pStuK" },
            { img: this.isn + "26.jpg", text: "mCrgt" },
            { img: this.isn + "27.jpg", text: "ieTyu" },
            { img: this.isn + "28.jpg", text: "XgdzV" },
            { img: this.isn + "29.jpg", text: "OsYrt" },
            { img: this.isn + "30.jpg", text: "fgWrk" },
            { img: this.isn + "31.jpg", text: "iQsdh" },
            { img: this.isn + "32.jpg", text: "bnLnp" },
            { img: this.isn + "33.jpg", text: "iQrgb" },
            { img: this.isn + "34.jpg", text: "pHzsn" },
            { img: this.isn + "35.jpg", text: "ZyUie" },
            { img: this.isn + "36.jpg", text: "qRvbx" },
            { img: this.isn + "37.jpg", text: "SfciG" },
            { img: this.isn + "38.jpg", text: "KrXdb" },
            { img: this.isn + "39.jpg", text: "gWjyb" },
            { img: this.isn + "40.jpg", text: "Rxjod" },
            { img: this.isn + "41.jpg", text: "Bvkjr" },
            { img: this.isn + "42.jpg", text: "YodxV" },
            { img: this.isn + "43.jpg", text: "eyTsM" },
            { img: this.isn + "44.jpg", text: "ilGkx" },
            { img: this.isn + "45.jpg", text: "mKeqr" },
            { img: this.isn + "46.jpg", text: "ulbcN" },
            { img: this.isn + "47.jpg", text: "hBjxV" },
            { img: this.isn + "49.jpg", text: "AqfGu" },
            { img: this.isn + "50.jpg", text: "sAwio" },
            { img: this.isn + "51.jpg", text: "ExJua" },
            { img: this.isn + "53.jpg", text: "FcVbm" },
            { img: this.isn + "54.jpg", text: "SvJkl" },
            { img: this.isn + "56.jpg", text: "JrExF" }
        ];
        this.datas = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.data = this.datas.asObservable();
        this.imgData = new __WEBPACK_IMPORTED_MODULE_1_rxjs__["BehaviorSubject"](null);
        this.img = this.imgData.asObservable();
        this.capchaText = "";
        this.imgText = "";
        this.rn = Math.round(Math.random() * Math.floor(this.recapchaImages.length - 1));
    }
    RecapchaService.prototype.changeData = function (dataa) {
        this.datas.next(dataa);
    };
    RecapchaService.prototype.changeImgData = function (d) {
        this.imgData.next(d);
    };
    RecapchaService.prototype.resetImg = function () {
        this.nrn = Math.round(Math.random() * Math.floor(this.recapchaImages.length - 1));
        this.imgText = this.recapchaImages[this.nrn].text;
        this.changeImgData(this.recapchaImages[this.nrn].img);
        return this.recapchaImages[this.nrn].img;
    };
    RecapchaService.prototype.check = function () {
        var text;
        this.data.subscribe(function (res) { return text = res; });
        var status = this.imgText === text ? true : false;
        this.resetImg();
        return status;
    };
    RecapchaService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], RecapchaService);
    return RecapchaService;
}());



/***/ }),

/***/ "./src/app/serv/http-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__preloader_service__ = __webpack_require__("./src/app/serv/preloader-service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__config_2__ = __webpack_require__("./src/app/config-2.ts");
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







var HttpService = (function (_super) {
    __extends(HttpService, _super);
    function HttpService(backend, defaultOptions, preloaderService) {
        var _this = _super.call(this, backend, defaultOptions) || this;
        _this.preloaderService = preloaderService;
        return _this;
    }
    /**
     * Performs any type of http request.
     * @param url
     * @param options
     * @returns {Observable<Response>}
     */
    HttpService.prototype.request = function (url, options) {
        return _super.prototype.request.call(this, url, options);
    };
    /**
     * Performs a request with `get` http method.
     * @param url
     * @param options
     * @param preloaderType
     * @returns {Observable<>}
     */
    HttpService.prototype.get = function (url, options, preloaderType) {
        var _this = this;
        this.requestInterceptor(preloaderType);
        var fullUrl = this.getFullUrl(url);
        return _super.prototype.get.call(this, fullUrl, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally(preloaderType);
        });
    };
    /**
     * Performs a request with `post` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.post = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        var fullUrl = this.getFullUrl(url);
        return _super.prototype.post.call(this, fullUrl, body, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `put` http method.
     * @param url
     * @param body
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.put = function (url, body, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.put.call(this, this.getFullUrl(url), body, this.requestOptions(options))
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    /**
     * Performs a request with `delete` http method.
     * @param url
     * @param options
     * @returns {Observable<>}
     */
    HttpService.prototype.delete = function (url, options) {
        var _this = this;
        this.requestInterceptor();
        return _super.prototype.delete.call(this, this.getFullUrl(url), options)
            .catch(this.onCatch)
            .do(function (res) {
            _this.onSubscribeSuccess(res);
        }, function (error) {
            _this.onSubscribeError(error);
        })
            .finally(function () {
            _this.onFinally();
        });
    };
    //
    /**
     * Build full URL for request.
     * @param str
     * @returns {string}
     */
    HttpService.prototype.getFullUrl = function (str) {
        return __WEBPACK_IMPORTED_MODULE_6__config_2__["a" /* Config2 */].api + str;
    };
    /**
     * Request options.
     * @param options
     * @returns {RequestOptionsArgs}
     */
    HttpService.prototype.requestOptions = function (options) {
        if (options == null) {
            options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"]();
        }
        if (options.headers == null) {
            options.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["Headers"]();
        }
        return options;
    };
    /**
     * Request interceptor.
     */
    HttpService.prototype.requestInterceptor = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        this.preloaderService.showPreloader(preloaderType);
    };
    /**
     * Response interceptor.
     */
    HttpService.prototype.responseInterceptor = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        this.preloaderService.hidePreloader(preloaderType);
    };
    /**
     * Error handler.
     * @param error
     * @param caught
     * @returns {ErrorObservable}
     */
    HttpService.prototype.onCatch = function (error) {
        console.log('onCatch');
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    /**
     * onSubscribeSuccess
     * @param res
     */
    HttpService.prototype.onSubscribeSuccess = function (res) {
    };
    /**
     * onSubscribeError
     * @param error
     */
    HttpService.prototype.onSubscribeError = function (error) {
    };
    /**
     * onFinally
     */
    HttpService.prototype.onFinally = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        this.responseInterceptor(preloaderType);
    };
    HttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["ConnectionBackend"],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["RequestOptions"],
            __WEBPACK_IMPORTED_MODULE_5__preloader_service__["a" /* PreloaderService */]])
    ], HttpService);
    return HttpService;
}(__WEBPACK_IMPORTED_MODULE_1__angular_http__["Http"]));



/***/ }),

/***/ "./src/app/serv/preloader-service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreloaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PreloaderService = (function () {
    function PreloaderService() {
    }
    PreloaderService_1 = PreloaderService;
    PreloaderService.prototype.getPreloaderCount = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        if (preloaderType === 'full') {
            return PreloaderService_1.fullLoadingCount;
        }
        else if (preloaderType === 'small') {
            return PreloaderService_1.smallLoadingCount;
        }
    };
    PreloaderService.prototype.showPreloader = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        if (preloaderType === 'full') {
            PreloaderService_1.fullLoadingCount++;
        }
        else if (preloaderType === 'small') {
            PreloaderService_1.smallLoadingCount++;
        }
    };
    PreloaderService.prototype.hidePreloader = function (preloaderType) {
        if (preloaderType === void 0) { preloaderType = 'full'; }
        if (preloaderType === 'full') {
            PreloaderService_1.fullLoadingCount--;
        }
        else if (preloaderType === 'small') {
            PreloaderService_1.smallLoadingCount--;
        }
    };
    PreloaderService.fullLoadingCount = 0;
    PreloaderService.smallLoadingCount = 0;
    PreloaderService = PreloaderService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], PreloaderService);
    return PreloaderService;
    var PreloaderService_1;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordion.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccordionDirective = (function () {
    function AccordionDirective(router) {
        this.router = router;
        this.navlinks = [];
    }
    AccordionDirective.prototype.closeOtherLinks = function (openLink) {
        this.navlinks.forEach(function (link) {
            if (link !== openLink) {
                link.open = false;
            }
        });
    };
    AccordionDirective.prototype.addLink = function (link) {
        this.navlinks.push(link);
    };
    AccordionDirective.prototype.removeGroup = function (link) {
        var index = this.navlinks.indexOf(link);
        if (index !== -1) {
            this.navlinks.splice(index, 1);
        }
    };
    AccordionDirective.prototype.getUrl = function () {
        return this.router.url;
    };
    AccordionDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._router = this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; }).subscribe(function (event) {
            _this.navlinks.forEach(function (link) {
                if (link.group) {
                    var routeUrl = _this.getUrl();
                    var currentUrl = routeUrl.split('/');
                    if (currentUrl.indexOf(link.group) > 0) {
                        link.open = true;
                        _this.closeOtherLinks(link);
                    }
                }
            });
        });
    };
    AccordionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordion]',
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]])
    ], AccordionDirective);
    return AccordionDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionanchor.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionAnchorDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/shared/accordion/accordionlink.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionAnchorDirective = (function () {
    function AccordionAnchorDirective(navlink) {
        this.navlink = navlink;
    }
    AccordionAnchorDirective.prototype.onClick = function (e) {
        this.navlink.toggle();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AccordionAnchorDirective.prototype, "onClick", null);
    AccordionAnchorDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionToggle]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a" /* AccordionLinkDirective */]])
    ], AccordionAnchorDirective);
    return AccordionAnchorDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/accordionlink.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccordionLinkDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordion_directive__ = __webpack_require__("./src/app/shared/accordion/accordion.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var AccordionLinkDirective = (function () {
    function AccordionLinkDirective(nav) {
        this.nav = nav;
    }
    Object.defineProperty(AccordionLinkDirective.prototype, "open", {
        get: function () {
            return this._open;
        },
        set: function (value) {
            this._open = value;
            if (value) {
                this.nav.closeOtherLinks(this);
            }
        },
        enumerable: true,
        configurable: true
    });
    AccordionLinkDirective.prototype.ngOnInit = function () {
        this.nav.addLink(this);
    };
    AccordionLinkDirective.prototype.ngOnDestroy = function () {
        this.nav.removeGroup(this);
    };
    AccordionLinkDirective.prototype.toggle = function () {
        this.open = !this.open;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], AccordionLinkDirective.prototype, "group", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostBinding"])('class.open'),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], AccordionLinkDirective.prototype, "open", null);
    AccordionLinkDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appAccordionLink]'
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__accordion_directive__["a" /* AccordionDirective */]])
    ], AccordionLinkDirective);
    return AccordionLinkDirective;
}());



/***/ }),

/***/ "./src/app/shared/accordion/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__ = __webpack_require__("./src/app/shared/accordion/accordionanchor.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__accordionanchor_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__ = __webpack_require__("./src/app/shared/accordion/accordionlink.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__accordionlink_directive__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion_directive__ = __webpack_require__("./src/app/shared/accordion/accordion.directive.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__accordion_directive__["a"]; });





/***/ }),

/***/ "./src/app/shared/fullscreen/toggle-fullscreen.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleFullscreenDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull__ = __webpack_require__("./node_modules/screenfull/dist/screenfull.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_screenfull___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_screenfull__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToggleFullscreenDirective = (function () {
    function ToggleFullscreenDirective() {
    }
    ToggleFullscreenDirective.prototype.onClick = function () {
        if (__WEBPACK_IMPORTED_MODULE_1_screenfull__["enabled"]) {
            __WEBPACK_IMPORTED_MODULE_1_screenfull__["toggle"]();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ToggleFullscreenDirective.prototype, "onClick", null);
    ToggleFullscreenDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[appToggleFullscreen]'
        })
    ], ToggleFullscreenDirective);
    return ToggleFullscreenDirective;
}());



/***/ }),

/***/ "./src/app/shared/menu-items/menu-items.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MENUITEMS = [
    {
        state: '/',
        name: 'My Profile',
        type: 'link',
        icon: 'basic-accelerator'
    },
    {
        state: 'widgets',
        name: 'Contact Info',
        type: 'link',
        icon: 'software-scale-reduce'
    },
    {
        state: 'social',
        name: 'Settings',
        type: 'link',
        icon: 'basic-elaboration-message-happy'
    },
];
var MenuItems = (function () {
    function MenuItems() {
    }
    MenuItems.prototype.getAll = function () {
        return MENUITEMS;
    };
    MenuItems.prototype.add = function (menu) {
        MENUITEMS.push(menu);
    };
    MenuItems = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], MenuItems);
    return MenuItems;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__ = __webpack_require__("./src/app/shared/menu-items/menu-items.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__accordion__ = __webpack_require__("./src/app/shared/accordion/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__ = __webpack_require__("./src/app/shared/fullscreen/toggle-fullscreen.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SharedModule = (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionLinkDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionDirective */], __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__accordion__["a" /* AccordionAnchorDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["c" /* AccordionLinkDirective */], __WEBPACK_IMPORTED_MODULE_2__accordion__["b" /* AccordionDirective */], __WEBPACK_IMPORTED_MODULE_3__fullscreen_toggle_fullscreen_directive__["a" /* ToggleFullscreenDirective */]],
            providers: [__WEBPACK_IMPORTED_MODULE_1__menu_items_menu_items__["a" /* MenuItems */]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    INST_CLIENT_ID: '5209a6a75c6c4196829dbf3a45fb16d0',
    INST_REDIRECT_URI: 'http://localhost:4200/onboarding'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map