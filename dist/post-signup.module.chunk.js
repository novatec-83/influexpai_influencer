webpackJsonp(["post-signup.module"],{

/***/ "./src/app/post-signup/add-blog-dialog.html":
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div>\r\n<h1 md-dialog-title style=\"color: #0d47a1\" class=\"text-center\"><b>Blog</b></h1>\r\n<div md-dialog-content>\r\n  <!--<p>Please Enter Your URL</p>-->\r\n      <mat-form-field class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Blog Url\" name=\"blog_url\" [(ngModel)]=\"data.blog_url\" [formControl]=\"urlFormControl\">\r\n          <mat-error *ngIf=\"urlFormControl.hasError('pattern')\">\r\n          Please enter a valid URL address\r\n          </mat-error>\r\n          <mat-error *ngIf=\"urlFormControl.hasError('required')\">\r\n            Url is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n\r\n</div>\r\n\r\n\r\n  <div md-dialog-content>\r\n    <br>\r\n    <!--<p>Blog Title</p>-->\r\n       <mat-form-field class=\"example-full-width\">\r\n          <input mdInput placeholder=\"Blog title\" name=\"blog_title\" [(ngModel)]=\"data.blog_title\" [formControl]=\"tittleFormControl\">\r\n          <mat-error *ngIf=\"tittleFormControl.hasError('pattern')\">\r\n            Please enter a valid blog tittle\r\n          </mat-error>\r\n          <mat-error *ngIf=\"tittleFormControl.hasError('required')\">\r\n            Blog tittle is <strong>required</strong>\r\n          </mat-error>\r\n        </mat-form-field>\r\n  </div>\r\n\r\n\r\n<div md-dialog-actions class=\"button-row pull-right\">\r\n  <button md-button color=\"warn\" (click)=\"onNoClick()\"  tabindex=\"2\">Cancel</button>\r\n  <button md-button color=\"primary\" [disabled]=\"tittleFormControl.hasError('pattern') || tittleFormControl.hasError('pattern') || urlFormControl.hasError('pattern') || urlFormControl.hasError('required')\" [mat-dialog-close]=\"data\" tabindex=\"-1\">Done</button>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post-signup/countries.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Country; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Country = (function () {
    function Country() {
    }
    Country.countries = [
        { "name": "Afghanistan", "code": "AF" },
        { "name": "land Islands", "code": "AX" },
        { "name": "Albania", "code": "AL" },
        { "name": "Algeria", "code": "DZ" },
        { "name": "American Samoa", "code": "AS" },
        { "name": "AndorrA", "code": "AD" },
        { "name": "Angola", "code": "AO" },
        { "name": "Anguilla", "code": "AI" },
        { "name": "Antarctica", "code": "AQ" },
        { "name": "Antigua and Barbuda", "code": "AG" },
        { "name": "Argentina", "code": "AR" },
        { "name": "Armenia", "code": "AM" },
        { "name": "Aruba", "code": "AW" },
        { "name": "Australia", "code": "AU" },
        { "name": "Austria", "code": "AT" },
        { "name": "Azerbaijan", "code": "AZ" },
        { "name": "Bahamas", "code": "BS" },
        { "name": "Bahrain", "code": "BH" },
        { "name": "Bangladesh", "code": "BD" },
        { "name": "Barbados", "code": "BB" },
        { "name": "Belarus", "code": "BY" },
        { "name": "Belgium", "code": "BE" },
        { "name": "Belize", "code": "BZ" },
        { "name": "Benin", "code": "BJ" },
        { "name": "Bermuda", "code": "BM" },
        { "name": "Bhutan", "code": "BT" },
        { "name": "Bolivia", "code": "BO" },
        { "name": "Bosnia and Herzegovina", "code": "BA" },
        { "name": "Botswana", "code": "BW" },
        { "name": "Bouvet Island", "code": "BV" },
        { "name": "Brazil", "code": "BR" },
        { "name": "British Indian Ocean Territory", "code": "IO" },
        { "name": "Brunei Darussalam", "code": "BN" },
        { "name": "Bulgaria", "code": "BG" },
        { "name": "Burkina Faso", "code": "BF" },
        { "name": "Burundi", "code": "BI" },
        { "name": "Cambodia", "code": "KH" },
        { "name": "Cameroon", "code": "CM" },
        { "name": "Canada", "code": "CA" },
        { "name": "Cape Verde", "code": "CV" },
        { "name": "Cayman Islands", "code": "KY" },
        { "name": "Central African Republic", "code": "CF" },
        { "name": "Chad", "code": "TD" },
        { "name": "Chile", "code": "CL" },
        { "name": "China", "code": "CN" },
        { "name": "Christmas Island", "code": "CX" },
        { "name": "Cocos (Keeling) Islands", "code": "CC" },
        { "name": "Colombia", "code": "CO" },
        { "name": "Comoros", "code": "KM" },
        { "name": "Congo", "code": "CG" },
        { "name": "Congo, The Democratic Republic of the", "code": "CD" },
        { "name": "Cook Islands", "code": "CK" },
        { "name": "Costa Rica", "code": "CR" },
        { "name": "Cote D\"Ivoire", "code": "CI" },
        { "name": "Croatia", "code": "HR" },
        { "name": "Cuba", "code": "CU" },
        { "name": "Cyprus", "code": "CY" },
        { "name": "Czech Republic", "code": "CZ" },
        { "name": "Denmark", "code": "DK" },
        { "name": "Djibouti", "code": "DJ" },
        { "name": "Dominica", "code": "DM" },
        { "name": "Dominican Republic", "code": "DO" },
        { "name": "Ecuador", "code": "EC" },
        { "name": "Egypt", "code": "EG" },
        { "name": "El Salvador", "code": "SV" },
        { "name": "Equatorial Guinea", "code": "GQ" },
        { "name": "Eritrea", "code": "ER" },
        { "name": "Estonia", "code": "EE" },
        { "name": "Ethiopia", "code": "ET" },
        { "name": "Falkland Islands (Malvinas)", "code": "FK" },
        { "name": "Faroe Islands", "code": "FO" },
        { "name": "Fiji", "code": "FJ" },
        { "name": "Finland", "code": "FI" },
        { "name": "France", "code": "FR" },
        { "name": "French Guiana", "code": "GF" },
        { "name": "French Polynesia", "code": "PF" },
        { "name": "French Southern Territories", "code": "TF" },
        { "name": "Gabon", "code": "GA" },
        { "name": "Gambia", "code": "GM" },
        { "name": "Georgia", "code": "GE" },
        { "name": "Germany", "code": "DE" },
        { "name": "Ghana", "code": "GH" },
        { "name": "Gibraltar", "code": "GI" },
        { "name": "Greece", "code": "GR" },
        { "name": "Greenland", "code": "GL" },
        { "name": "Grenada", "code": "GD" },
        { "name": "Guadeloupe", "code": "GP" },
        { "name": "Guam", "code": "GU" },
        { "name": "Guatemala", "code": "GT" },
        { "name": "Guernsey", "code": "GG" },
        { "name": "Guinea", "code": "GN" },
        { "name": "Guinea-Bissau", "code": "GW" },
        { "name": "Guyana", "code": "GY" },
        { "name": "Haiti", "code": "HT" },
        { "name": "Heard Island and Mcdonald Islands", "code": "HM" },
        { "name": "Holy See (Vatican City State)", "code": "VA" },
        { "name": "Honduras", "code": "HN" },
        { "name": "Hong Kong", "code": "HK" },
        { "name": "Hungary", "code": "HU" },
        { "name": "Iceland", "code": "IS" },
        { "name": "India", "code": "IN" },
        { "name": "Indonesia", "code": "ID" },
        { "name": "Iran, Islamic Republic Of", "code": "IR" },
        { "name": "Iraq", "code": "IQ" },
        { "name": "Ireland", "code": "IE" },
        { "name": "Isle of Man", "code": "IM" },
        { "name": "Israel", "code": "IL" },
        { "name": "Italy", "code": "IT" },
        { "name": "Jamaica", "code": "JM" },
        { "name": "Japan", "code": "JP" },
        { "name": "Jersey", "code": "JE" },
        { "name": "Jordan", "code": "JO" },
        { "name": "Kazakhstan", "code": "KZ" },
        { "name": "Kenya", "code": "KE" },
        { "name": "Kiribati", "code": "KI" },
        { "name": "Korea, Democratic People\"S Republic of", "code": "KP" },
        { "name": "Korea, Republic of", "code": "KR" },
        { "name": "Kuwait", "code": "KW" },
        { "name": "Kyrgyzstan", "code": "KG" },
        { "name": "Lao People\"S Democratic Republic", "code": "LA" },
        { "name": "Latvia", "code": "LV" },
        { "name": "Lebanon", "code": "LB" },
        { "name": "Lesotho", "code": "LS" },
        { "name": "Liberia", "code": "LR" },
        { "name": "Libyan Arab Jamahiriya", "code": "LY" },
        { "name": "Liechtenstein", "code": "LI" },
        { "name": "Lithuania", "code": "LT" },
        { "name": "Luxembourg", "code": "LU" },
        { "name": "Macao", "code": "MO" },
        { "name": "Macedonia, The Former Yugoslav Republic of", "code": "MK" },
        { "name": "Madagascar", "code": "MG" },
        { "name": "Malawi", "code": "MW" },
        { "name": "Malaysia", "code": "MY" },
        { "name": "Maldives", "code": "MV" },
        { "name": "Mali", "code": "ML" },
        { "name": "Malta", "code": "MT" },
        { "name": "Marshall Islands", "code": "MH" },
        { "name": "Martinique", "code": "MQ" },
        { "name": "Mauritania", "code": "MR" },
        { "name": "Mauritius", "code": "MU" },
        { "name": "Mayotte", "code": "YT" },
        { "name": "Mexico", "code": "MX" },
        { "name": "Micronesia, Federated States of", "code": "FM" },
        { "name": "Moldova, Republic of", "code": "MD" },
        { "name": "Monaco", "code": "MC" },
        { "name": "Mongolia", "code": "MN" },
        { "name": "Montenegro", "code": "ME" },
        { "name": "Montserrat", "code": "MS" },
        { "name": "Morocco", "code": "MA" },
        { "name": "Mozambique", "code": "MZ" },
        { "name": "Myanmar", "code": "MM" },
        { "name": "Namibia", "code": "NA" },
        { "name": "Nauru", "code": "NR" },
        { "name": "Nepal", "code": "NP" },
        { "name": "Netherlands", "code": "NL" },
        { "name": "Netherlands Antilles", "code": "AN" },
        { "name": "New Caledonia", "code": "NC" },
        { "name": "New Zealand", "code": "NZ" },
        { "name": "Nicaragua", "code": "NI" },
        { "name": "Niger", "code": "NE" },
        { "name": "Nigeria", "code": "NG" },
        { "name": "Niue", "code": "NU" },
        { "name": "Norfolk Island", "code": "NF" },
        { "name": "Northern Mariana Islands", "code": "MP" },
        { "name": "Norway", "code": "NO" },
        { "name": "Oman", "code": "OM" },
        { "name": "Pakistan", "code": "PK" },
        { "name": "Palau", "code": "PW" },
        { "name": "Palestinian Territory, Occupied", "code": "PS" },
        { "name": "Panama", "code": "PA" },
        { "name": "Papua New Guinea", "code": "PG" },
        { "name": "Paraguay", "code": "PY" },
        { "name": "Peru", "code": "PE" },
        { "name": "Philippines", "code": "PH" },
        { "name": "Pitcairn", "code": "PN" },
        { "name": "Poland", "code": "PL" },
        { "name": "Portugal", "code": "PT" },
        { "name": "Puerto Rico", "code": "PR" },
        { "name": "Qatar", "code": "QA" },
        { "name": "Reunion", "code": "RE" },
        { "name": "Romania", "code": "RO" },
        { "name": "Russian Federation", "code": "RU" },
        { "name": "RWANDA", "code": "RW" },
        { "name": "Saint Helena", "code": "SH" },
        { "name": "Saint Kitts and Nevis", "code": "KN" },
        { "name": "Saint Lucia", "code": "LC" },
        { "name": "Saint Pierre and Miquelon", "code": "PM" },
        { "name": "Saint Vincent and the Grenadines", "code": "VC" },
        { "name": "Samoa", "code": "WS" },
        { "name": "San Marino", "code": "SM" },
        { "name": "Sao Tome and Principe", "code": "ST" },
        { "name": "Saudi Arabia", "code": "SA" },
        { "name": "Senegal", "code": "SN" },
        { "name": "Serbia", "code": "RS" },
        { "name": "Seychelles", "code": "SC" },
        { "name": "Sierra Leone", "code": "SL" },
        { "name": "Singapore", "code": "SG" },
        { "name": "Slovakia", "code": "SK" },
        { "name": "Slovenia", "code": "SI" },
        { "name": "Solomon Islands", "code": "SB" },
        { "name": "Somalia", "code": "SO" },
        { "name": "South Africa", "code": "ZA" },
        { "name": "South Georgia and the South Sandwich Islands", "code": "GS" },
        { "name": "Spain", "code": "ES" },
        { "name": "Sri Lanka", "code": "LK" },
        { "name": "Sudan", "code": "SD" },
        { "name": "Suriname", "code": "SR" },
        { "name": "Svalbard and Jan Mayen", "code": "SJ" },
        { "name": "Swaziland", "code": "SZ" },
        { "name": "Sweden", "code": "SE" },
        { "name": "Switzerland", "code": "CH" },
        { "name": "Syrian Arab Republic", "code": "SY" },
        { "name": "Taiwan, Province of China", "code": "TW" },
        { "name": "Tajikistan", "code": "TJ" },
        { "name": "Tanzania, United Republic of", "code": "TZ" },
        { "name": "Thailand", "code": "TH" },
        { "name": "Timor-Leste", "code": "TL" },
        { "name": "Togo", "code": "TG" },
        { "name": "Tokelau", "code": "TK" },
        { "name": "Tonga", "code": "TO" },
        { "name": "Trinidad and Tobago", "code": "TT" },
        { "name": "Tunisia", "code": "TN" },
        { "name": "Turkey", "code": "TR" },
        { "name": "Turkmenistan", "code": "TM" },
        { "name": "Turks and Caicos Islands", "code": "TC" },
        { "name": "Tuvalu", "code": "TV" },
        { "name": "Uganda", "code": "UG" },
        { "name": "Ukraine", "code": "UA" },
        { "name": "United Arab Emirates", "code": "AE" },
        { "name": "United Kingdom", "code": "GB" },
        { "name": "United States", "code": "US" },
        { "name": "United States Minor Outlying Islands", "code": "UM" },
        { "name": "Uruguay", "code": "UY" },
        { "name": "Uzbekistan", "code": "UZ" },
        { "name": "Vanuatu", "code": "VU" },
        { "name": "Venezuela", "code": "VE" },
        { "name": "Viet Nam", "code": "VN" },
        { "name": "Virgin Islands, British", "code": "VG" },
        { "name": "Virgin Islands, U.S.", "code": "VI" },
        { "name": "Wallis and Futuna", "code": "WF" },
        { "name": "Western Sahara", "code": "EH" },
        { "name": "Yemen", "code": "YE" },
        { "name": "Zambia", "code": "ZM" },
        { "name": "Zimbabwe", "code": "ZW" }
    ];
    Country = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Country);
    return Country;
}());



/***/ }),

/***/ "./src/app/post-signup/post-signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!--<div class=\"parent\">-->\r\n<!--<div class=\"child\">Foo foo</div>-->\r\n<!--</div>-->\r\n<!--<div style=\"width:800px; margin:0 auto;\">-->\r\n<div class=\"steps\" style=\"width: 80%\">\r\n  <mat-horizontal-stepper [linear]=\"isLinear\">\r\n    <mat-step [stepControl]=\"firstFormGroup\"\r\n             *ngIf=\"currentUser.current_info_step ==1 ||currentUser.current_info_step ==3 || currentUser.current_info_step ==2\">\r\n      <!--<form [formGroup]=\"firstFormGroup\">-->\r\n\r\n\r\n      <h2 style=\"text-align: center\" class=\"mb-4\">Welcome, <span style=\"color: #777\"> {{currentUser.first_name}}</span></h2>\r\n      <ng-template style=\"font-size: 22px; font-weight: bolder\" mdStepLabel>Associate Blog</ng-template>\r\n      <!--<mat-form-field>-->\r\n      <div>\r\n\r\n\r\n        <button class=\"btn btn-icon btn-facebook mb-3 mr-2\">\r\n          <i class=\"fa fa-facebook\"></i>\r\n          Attach Facebook\r\n        </button>\r\n\r\n\r\n\r\n        <button class=\"btn btn-icon btn-google mb-3 mr-2\">\r\n          <i class=\"fa fa-google-plus\"></i>\r\n          Attach Google Plus\r\n        </button>\r\n\r\n        <button (click)=\"openDialog()\" class=\"btn btn-icon btn-google mb-3 mr-2\">\r\n          <i class=\"fa fa-blogger\"></i>\r\n          Add Blog\r\n        </button>\r\n\r\n        <!--{{step.current_info_step}}-->\r\n\r\n\r\n                <button class=\"btn btn-icon btn-instagram mb-3 mr-2\" [disabled]=\"connected_social_medias.instagram\" (click)=\"onLoginWithInstagram()\" >\r\n                  <i class=\"fa fa-instagram\"></i>\r\n                  Attach Instagram\r\n                </button>\r\n\r\n                <button class=\"btn btn-icon btn-linkedin mb-3 mr-2\" >\r\n                  <i class=\"fa fa-linkedin\"></i>\r\n                  Attach LinkedIn\r\n                </button>\r\n\r\n\r\n\r\n                <button class=\"btn btn-icon btn-pinterest mb-3 mr-2\" >\r\n                  <i class=\"fa fa-pinterest\"></i>\r\n                  Attach Pinterest\r\n                </button>\r\n\r\n\r\n\r\n                <button class=\"btn btn-icon btn-tumblr mb-3 mr-2\">\r\n                  <i class=\"fa fa-tumblr\"></i>\r\n                  Attach Tumblr\r\n                </button>\r\n\r\n                <button class=\"btn btn-icon btn-twitter mb-3 mr-2\" >\r\n                  <i class=\"fa fa-twitter\"></i>\r\n                  Attach Twitter\r\n                </button>\r\n\r\n\r\n      </div>\r\n      <!--<input mdInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>-->\r\n      <!--</mat-form-field>-->\r\n      <div class=\"button-row\">\r\n        <!--<button class=\"float-right\" md-button mdStepperNext>Next</button>-->\r\n\r\n        <button md-fab color=\"primary\" class=\"float-right\" style=\"width:55px;height:55px\" (click)=\"showError()\" mdStepperNext><i class=\"fa fa-arrow-right\"></i></button>\r\n      </div>\r\n      <!--</form>-->\r\n    </mat-step>\r\n    <mat-step *ngIf=\"currentUser.current_info_step ==3 || currentUser.current_info_step ==2\"\r\n             [stepControl]=\"secondFormGroup\">\r\n      <!--<form [formGroup]=\"secondFormGroup\">-->\r\n\r\n      <ng-template mdStepLabel>Choose Category</ng-template>\r\n      <!--<mat-form-field>-->\r\n\r\n      <mat-select name=\"selected_choice\" [(ngModel)]=\"selected_category\" placeholder=\"Select Category\"\r\n                 style=\"width: 100%;\">\r\n        <mat-option *ngFor=\"let choice of choices\" [value]=\"choice.code\">{{ choice.name }}</mat-option>\r\n      </mat-select>\r\n      <!--<mat-error *ngIf=\"categoryFormControl.hasError('required')\">-->\r\n        <!--Category is <strong>required</strong>-->\r\n      <!--</mat-error>-->\r\n      <!--</mat-form-field>-->\r\n\r\n\r\n      <div class=\"row\" style=\"margin-top: 66px\">\r\n\r\n        <div class=\"col-md-4\">\r\n\r\n          <mat-card class=\"example-card\" style=\"background-color: palegoldenrod\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n              <mat-card-title>\r\n                <h3> Blog Post Rate</h3>\r\n              </mat-card-title>\r\n              <!--<mat-card-subtitle>Dog Breed</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n            <!--<img mat-card-image src=\"../../assets/images/umer.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n            <mat-card-content>\r\n              <p>\r\n                This is how much you charge for a blog post including sharing to your social networks. The suggested\r\n                rate shown is based on your total reach. You can edit this rate as needed.\r\n              </p>\r\n              <hr>\r\n              <label>Suggested Rate: $25</label>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input mdInput maxlength=\"5\" [(ngModel)]=\"step2Model.blog_post_rate\" name=\"blog_post_rate\" placeholder=\"Blog Post Rate\" [formControl]=\"rateFormControl\">\r\n                <mat-error *ngIf=\"rateFormControl.hasError('pattern')\">\r\n                  Please enter a valid rate\r\n                </mat-error>\r\n                <mat-error *ngIf=\"rateFormControl.hasError('required')\">\r\n                  <strong>Required</strong>\r\n                </mat-error>\r\n              </mat-form-field>\r\n\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n\r\n              <!--<button  md-button>LIKE</button>-->\r\n              <!--<button md-button>SHARE</button>-->\r\n            </mat-card-actions>\r\n          </mat-card>\r\n\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"col-md-4\">\r\n\r\n\r\n          <mat-card class=\"example-card\" style=\"background-color: palegreen\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n              <mat-card-title><h3> Social Share Rate</h3></mat-card-title>\r\n              <!--<mat-card-subtitle>Dog Breed</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n            <!--<img mat-card-image src=\"../../assets/images/umer.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n            <mat-card-content>\r\n              <p>\r\n                This is how much you charge for creating or sharing short content like Tweets, Facebook Shares,\r\n                Pinterest and Instagram photos. The suggested rate shown is based on your total reach. You can edit this\r\n                rate as needed.\r\n              </p>\r\n              <hr>\r\n              <label>Suggested Rate: $5</label>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input mdInput maxlength=\"5\" [(ngModel)]=\"step2Model.social_share_rate\" name=\"social_share_rate\" placeholder=\"Social Share Rate\" [formControl]=\"rateFormControl1\">\r\n                <mat-error *ngIf=\"rateFormControl1.hasError('pattern')\">\r\n                  Please enter a valid rate\r\n                </mat-error>\r\n                <mat-error *ngIf=\"rateFormControl1.hasError('required')\">\r\n                  <strong>Required</strong>\r\n                </mat-error>\r\n\r\n              </mat-form-field>\r\n\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n\r\n\r\n            </mat-card-actions>\r\n          </mat-card>\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n\r\n\r\n          <mat-card class=\"example-card\" style=\"background-color: palevioletred\">\r\n            <mat-card-header>\r\n              <!--<div mat-card-avatar class=\"example-header-image\"></div>-->\r\n              <mat-card-title><h3> Video Rate</h3></mat-card-title>\r\n              <!--<mat-card-subtitle>Dog Breed</mat-card-subtitle>-->\r\n            </mat-card-header>\r\n            <!--<img mat-card-image src=\"../../assets/images/umer.jpg\" alt=\"Photo of a Shiba Inu\">-->\r\n            <mat-card-content>\r\n              <p>\r\n                This is how much you charge to create a video, including sharing to your social networks. You can edit\r\n                this rate as needed. If you do not create video content, please leave this area blank.\r\n              </p>\r\n              <hr>\r\n              <label>Suggested Rate: $5</label>\r\n              <mat-form-field class=\"example-full-width\">\r\n                <input mdInput maxlength=\"5\" [(ngModel)]=\"step2Model.video_rate\" name=\"video_rate\" placeholder=\"Video Share Rate\" [formControl]=\"rateFormControl2\">\r\n                <mat-error *ngIf=\"rateFormControl2.hasError('pattern')\">\r\n                  Please enter a valid rate\r\n                </mat-error>\r\n                <mat-error *ngIf=\"rateFormControl2.hasError('required')\">\r\n                  <strong>Required</strong>\r\n                </mat-error>\r\n\r\n              </mat-form-field>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n\r\n\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"button-row\" style=\"margin-top: 36px\">\r\n\r\n\r\n        <button md-fab class=\"float-left\" mdStepperPrevious>Back</button>\r\n        <button md-fab color=\"primary\" class=\"float-right\" *ngIf=\"currentUser.current_info_step!=3\" (click)=\"saveStep2()\" [disabled]=\"step2disable||rateFormControl2.hasError('pattern')||rateFormControl2.hasError('required')||rateFormControl1.hasError('pattern')||rateFormControl1.hasError('required')||rateFormControl.hasError('pattern')||rateFormControl.hasError('required')\">Submit</button>\r\n        <img class=\"float-right\" *ngIf=\"step2disable\"\r\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA\r\n                        GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ\r\n                        CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd\r\n                        Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W\r\n                        EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm\r\n                        KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf\r\n                        hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI\r\n                        nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA\r\n                        AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC\r\n                        gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW\r\n                        zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq\r\n                        lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n        <button md-fab color=\"primary\" class=\"float-right\" *ngIf=\"currentUser.current_info_step==3\" mdStepperNext>Next</button>\r\n\r\n      </div>\r\n\r\n      <!--</form>-->\r\n    </mat-step>\r\n    <mat-step *ngIf=\"currentUser.current_info_step==3\">\r\n      <ng-template mdStepLabel>Done</ng-template>\r\n      <h1 class=\"text-center\">You're almost done!</h1>\r\n\r\n      <div class=\"row\" style=\"margin-top: 70px\">\r\n        <div class=\"col-md-3\">\r\n          <img mat-card-image src=\"{{currentUser.image_url}}\" style=\"width: auto;height: auto\" alt=\"Image\">\r\n        </div>\r\n        <div class=\"col-md-1\"></div>\r\n\r\n        <div class=\"col-md-4\">\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input mdInput placeholder=\"First Name*\" [(ngModel)]=\"currentUser.first_name\" name=\"first_name\" [formControl]=\"first_nameFormControl\">\r\n            <mat-error *ngIf=\"first_nameFormControl.hasError('required')\">\r\n              First name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input mdInput placeholder=\"Email\"  [formControl]=\"emailFormControl\" [(ngModel)]=\"currentUser.email\" name=\"email\">\r\n            <mat-error *ngIf=\"emailFormControl.hasError('pattern')\">\r\n              Please enter a valid email address\r\n            </mat-error>\r\n            <mat-error *ngIf=\"emailFormControl.hasError('required')\">\r\n              Email is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input mdInput placeholder=\"City*\" [(ngModel)]=\"currentUser.city\" name=\"city\" [formControl]=\"cityFormControl\">\r\n            <mat-error *ngIf=\"cityFormControl.hasError('required')\">\r\n              City is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n           <mat-select [(ngModel)]=\"currentUser.country\" name=\"country\"  placeholder=\"Select country\"\r\n                     style=\"width: 100%;\" >\r\n            <mat-option *ngFor=\"let countrie of countries\" [value]=\"countrie.code \">{{countrie.name}}</mat-option>\r\n          </mat-select>\r\n\r\n\r\n          <mat-radio-group class=\"example-radio-group\" [(ngModel)]=\"currentUser.gender\" name=\"gender\" style=\"margin-top: 22px\">\r\n            <label>Gender*</label>\r\n            <mat-radio-button class=\"example-radio-button\" *ngFor=\"let gender of genders\" [value]=\"gender.value\">\r\n              {{gender.show}}\r\n            </mat-radio-button>\r\n          </mat-radio-group>\r\n          <!--<div class=\"example-selected-value\">Your favorite season is: {{favoriteSeason}}</div>-->\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"col-md-4\">\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input mdInput placeholder=\"Last Name*\" [(ngModel)]=\"currentUser.last_name\" name=\"last_name\" [formControl]=\"last_nameFormControl\">\r\n            <mat-error *ngIf=\"last_nameFormControl.hasError('required')\">\r\n              Last Name is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input mdInput type=\"password\" placeholder=\"password*\" [(ngModel)]=\"currentUser.password\" name=\"password\" [formControl]=\"passwordFormControl\">\r\n            <mat-error *ngIf=\"passwordFormControl.hasError('required')\">\r\n              Password is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input mdInput placeholder=\"State / Province / Region*\" [(ngModel)]=\"currentUser.state\" name=\"state\" [formControl]=\"stateFormControl\">\r\n            <mat-error *ngIf=\"stateFormControl.hasError('required')\">\r\n              <strong>Required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n\r\n          <mat-form-field class=\"example-full-width\">\r\n            <input mdInput type=\"date\" placeholder=\"Date of birth*\" [(ngModel)]=\"currentUser.dob\" name=\"dob\" [formControl]=\"dobFormControl\">\r\n            <mat-error *ngIf=\"dobFormControl.hasError('required')\">\r\n              DOB is <strong>required</strong>\r\n            </mat-error>\r\n          </mat-form-field>\r\n\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div class=\"button-row\">\r\n        <button md-fab class=\"text-center\" mdStepperPrevious>Back</button>\r\n        <button md-fab color=\"primary\" class=\"float-right\" (click)=\"saveStep3()\" [disabled]=\"step3disable||passwordFormControl.hasError('required')||cityFormControl.hasError('required')||stateFormControl.hasError('required')||dobFormControl.hasError('required')||first_nameFormControl.hasError('required')||last_nameFormControl.hasError('required')||emailFormControl.hasError('required')||cityFormControl.hasError('pattern')\">Submit</button>\r\n        <img class=\"float-right\" *ngIf=\"step3disable\"\r\n             src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAA\r\n                        GJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJ\r\n                        CgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAd\r\n                        Ka+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7W\r\n                        EYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhm\r\n                        KtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZf\r\n                        hYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunI\r\n                        nK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEA\r\n                        AQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJC\r\n                        gAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLW\r\n                        zpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtq\r\n                        lAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\"/>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/post-signup/post-signup.component.scss":
/***/ (function(module, exports) {

module.exports = "/*!\r\n *  Font Awesome 4.7.0 by @davegandy - http://fontawesome.io - @fontawesome\r\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\r\n */\r\n/* FONT PATH\r\n * -------------------------- */\r\n@font-face {\r\n  font-family: 'FontAwesome';\r\n  src: url('fontawesome-webfont.674f50d287a8c48dc19b.eot?v=4.7.0');\r\n  src: url('fontawesome-webfont.674f50d287a8c48dc19b.eot?#iefix&v=4.7.0') format('embedded-opentype'), url('fontawesome-webfont.af7ae505a9eed503f8b8.woff2?v=4.7.0') format('woff2'), url('fontawesome-webfont.fee66e712a8a08eef580.woff?v=4.7.0') format('woff'), url('fontawesome-webfont.b06871f281fee6b241d6.ttf?v=4.7.0') format('truetype'), url('fontawesome-webfont.acf3dcb7ff752b5296ca.svg?v=4.7.0#fontawesomeregular') format('svg');\r\n  font-weight: normal;\r\n  font-style: normal;\r\n}\r\n.fa {\r\n  display: inline-block;\r\n  font: normal normal normal 14px/1 FontAwesome;\r\n  font-size: inherit;\r\n  text-rendering: auto;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n/* makes the font 33% larger relative to the icon container */\r\n.fa-lg {\r\n  font-size: 1.33333333em;\r\n  line-height: 0.75em;\r\n  vertical-align: -15%;\r\n}\r\n.fa-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-3x {\r\n  font-size: 3em;\r\n}\r\n.fa-4x {\r\n  font-size: 4em;\r\n}\r\n.fa-5x {\r\n  font-size: 5em;\r\n}\r\n.fa-fw {\r\n  width: 1.28571429em;\r\n  text-align: center;\r\n}\r\n.fa-ul {\r\n  padding-left: 0;\r\n  margin-left: 2.14285714em;\r\n  list-style-type: none;\r\n}\r\n.fa-ul > li {\r\n  position: relative;\r\n}\r\n.fa-li {\r\n  position: absolute;\r\n  left: -2.14285714em;\r\n  width: 2.14285714em;\r\n  top: 0.14285714em;\r\n  text-align: center;\r\n}\r\n.fa-li.fa-lg {\r\n  left: -1.85714286em;\r\n}\r\n.fa-border {\r\n  padding: .2em .25em .15em;\r\n  border: solid 0.08em #eeeeee;\r\n  border-radius: .1em;\r\n}\r\n.fa-pull-left {\r\n  float: left;\r\n}\r\n.fa-pull-right {\r\n  float: right;\r\n}\r\n.fa.fa-pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.fa-pull-right {\r\n  margin-left: .3em;\r\n}\r\n/* Deprecated as of 4.4.0 */\r\n.pull-right {\r\n  float: right;\r\n}\r\n.pull-left {\r\n  float: left;\r\n}\r\n.fa.pull-left {\r\n  margin-right: .3em;\r\n}\r\n.fa.pull-right {\r\n  margin-left: .3em;\r\n}\r\n.fa-spin {\r\n  -webkit-animation: fa-spin 2s infinite linear;\r\n  animation: fa-spin 2s infinite linear;\r\n}\r\n.fa-pulse {\r\n  -webkit-animation: fa-spin 1s infinite steps(8);\r\n  animation: fa-spin 1s infinite steps(8);\r\n}\r\n@-webkit-keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n@keyframes fa-spin {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(359deg);\r\n    transform: rotate(359deg);\r\n  }\r\n}\r\n.fa-rotate-90 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=1)\";\r\n  -webkit-transform: rotate(90deg);\r\n  transform: rotate(90deg);\r\n}\r\n.fa-rotate-180 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2)\";\r\n  -webkit-transform: rotate(180deg);\r\n  transform: rotate(180deg);\r\n}\r\n.fa-rotate-270 {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=3)\";\r\n  -webkit-transform: rotate(270deg);\r\n  transform: rotate(270deg);\r\n}\r\n.fa-flip-horizontal {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)\";\r\n  -webkit-transform: scale(-1, 1);\r\n  transform: scale(-1, 1);\r\n}\r\n.fa-flip-vertical {\r\n  -ms-filter: \"progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)\";\r\n  -webkit-transform: scale(1, -1);\r\n  transform: scale(1, -1);\r\n}\r\n:root .fa-rotate-90,\r\n:root .fa-rotate-180,\r\n:root .fa-rotate-270,\r\n:root .fa-flip-horizontal,\r\n:root .fa-flip-vertical {\r\n  -webkit-filter: none;\r\n          filter: none;\r\n}\r\n.fa-stack {\r\n  position: relative;\r\n  display: inline-block;\r\n  width: 2em;\r\n  height: 2em;\r\n  line-height: 2em;\r\n  vertical-align: middle;\r\n}\r\n.fa-stack-1x,\r\n.fa-stack-2x {\r\n  position: absolute;\r\n  left: 0;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n.fa-stack-1x {\r\n  line-height: inherit;\r\n}\r\n.fa-stack-2x {\r\n  font-size: 2em;\r\n}\r\n.fa-inverse {\r\n  color: #ffffff;\r\n}\r\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\r\n   readers do not read off random characters that represent icons */\r\n.fa-glass:before {\r\n  content: \"\\f000\";\r\n}\r\n.fa-music:before {\r\n  content: \"\\f001\";\r\n}\r\n.fa-search:before {\r\n  content: \"\\f002\";\r\n}\r\n.fa-envelope-o:before {\r\n  content: \"\\f003\";\r\n}\r\n.fa-heart:before {\r\n  content: \"\\f004\";\r\n}\r\n.fa-star:before {\r\n  content: \"\\f005\";\r\n}\r\n.fa-star-o:before {\r\n  content: \"\\f006\";\r\n}\r\n.fa-user:before {\r\n  content: \"\\f007\";\r\n}\r\n.fa-film:before {\r\n  content: \"\\f008\";\r\n}\r\n.fa-th-large:before {\r\n  content: \"\\f009\";\r\n}\r\n.fa-th:before {\r\n  content: \"\\f00a\";\r\n}\r\n.fa-th-list:before {\r\n  content: \"\\f00b\";\r\n}\r\n.fa-check:before {\r\n  content: \"\\f00c\";\r\n}\r\n.fa-remove:before,\r\n.fa-close:before,\r\n.fa-times:before {\r\n  content: \"\\f00d\";\r\n}\r\n.fa-search-plus:before {\r\n  content: \"\\f00e\";\r\n}\r\n.fa-search-minus:before {\r\n  content: \"\\f010\";\r\n}\r\n.fa-power-off:before {\r\n  content: \"\\f011\";\r\n}\r\n.fa-signal:before {\r\n  content: \"\\f012\";\r\n}\r\n.fa-gear:before,\r\n.fa-cog:before {\r\n  content: \"\\f013\";\r\n}\r\n.fa-trash-o:before {\r\n  content: \"\\f014\";\r\n}\r\n.fa-home:before {\r\n  content: \"\\f015\";\r\n}\r\n.fa-file-o:before {\r\n  content: \"\\f016\";\r\n}\r\n.fa-clock-o:before {\r\n  content: \"\\f017\";\r\n}\r\n.fa-road:before {\r\n  content: \"\\f018\";\r\n}\r\n.fa-download:before {\r\n  content: \"\\f019\";\r\n}\r\n.fa-arrow-circle-o-down:before {\r\n  content: \"\\f01a\";\r\n}\r\n.fa-arrow-circle-o-up:before {\r\n  content: \"\\f01b\";\r\n}\r\n.fa-inbox:before {\r\n  content: \"\\f01c\";\r\n}\r\n.fa-play-circle-o:before {\r\n  content: \"\\f01d\";\r\n}\r\n.fa-rotate-right:before,\r\n.fa-repeat:before {\r\n  content: \"\\f01e\";\r\n}\r\n.fa-refresh:before {\r\n  content: \"\\f021\";\r\n}\r\n.fa-list-alt:before {\r\n  content: \"\\f022\";\r\n}\r\n.fa-lock:before {\r\n  content: \"\\f023\";\r\n}\r\n.fa-flag:before {\r\n  content: \"\\f024\";\r\n}\r\n.fa-headphones:before {\r\n  content: \"\\f025\";\r\n}\r\n.fa-volume-off:before {\r\n  content: \"\\f026\";\r\n}\r\n.fa-volume-down:before {\r\n  content: \"\\f027\";\r\n}\r\n.fa-volume-up:before {\r\n  content: \"\\f028\";\r\n}\r\n.fa-qrcode:before {\r\n  content: \"\\f029\";\r\n}\r\n.fa-barcode:before {\r\n  content: \"\\f02a\";\r\n}\r\n.fa-tag:before {\r\n  content: \"\\f02b\";\r\n}\r\n.fa-tags:before {\r\n  content: \"\\f02c\";\r\n}\r\n.fa-book:before {\r\n  content: \"\\f02d\";\r\n}\r\n.fa-bookmark:before {\r\n  content: \"\\f02e\";\r\n}\r\n.fa-print:before {\r\n  content: \"\\f02f\";\r\n}\r\n.fa-camera:before {\r\n  content: \"\\f030\";\r\n}\r\n.fa-font:before {\r\n  content: \"\\f031\";\r\n}\r\n.fa-bold:before {\r\n  content: \"\\f032\";\r\n}\r\n.fa-italic:before {\r\n  content: \"\\f033\";\r\n}\r\n.fa-text-height:before {\r\n  content: \"\\f034\";\r\n}\r\n.fa-text-width:before {\r\n  content: \"\\f035\";\r\n}\r\n.fa-align-left:before {\r\n  content: \"\\f036\";\r\n}\r\n.fa-align-center:before {\r\n  content: \"\\f037\";\r\n}\r\n.fa-align-right:before {\r\n  content: \"\\f038\";\r\n}\r\n.fa-align-justify:before {\r\n  content: \"\\f039\";\r\n}\r\n.fa-list:before {\r\n  content: \"\\f03a\";\r\n}\r\n.fa-dedent:before,\r\n.fa-outdent:before {\r\n  content: \"\\f03b\";\r\n}\r\n.fa-indent:before {\r\n  content: \"\\f03c\";\r\n}\r\n.fa-video-camera:before {\r\n  content: \"\\f03d\";\r\n}\r\n.fa-photo:before,\r\n.fa-image:before,\r\n.fa-picture-o:before {\r\n  content: \"\\f03e\";\r\n}\r\n.fa-pencil:before {\r\n  content: \"\\f040\";\r\n}\r\n.fa-map-marker:before {\r\n  content: \"\\f041\";\r\n}\r\n.fa-adjust:before {\r\n  content: \"\\f042\";\r\n}\r\n.fa-tint:before {\r\n  content: \"\\f043\";\r\n}\r\n.fa-edit:before,\r\n.fa-pencil-square-o:before {\r\n  content: \"\\f044\";\r\n}\r\n.fa-share-square-o:before {\r\n  content: \"\\f045\";\r\n}\r\n.fa-check-square-o:before {\r\n  content: \"\\f046\";\r\n}\r\n.fa-arrows:before {\r\n  content: \"\\f047\";\r\n}\r\n.fa-step-backward:before {\r\n  content: \"\\f048\";\r\n}\r\n.fa-fast-backward:before {\r\n  content: \"\\f049\";\r\n}\r\n.fa-backward:before {\r\n  content: \"\\f04a\";\r\n}\r\n.fa-play:before {\r\n  content: \"\\f04b\";\r\n}\r\n.fa-pause:before {\r\n  content: \"\\f04c\";\r\n}\r\n.fa-stop:before {\r\n  content: \"\\f04d\";\r\n}\r\n.fa-forward:before {\r\n  content: \"\\f04e\";\r\n}\r\n.fa-fast-forward:before {\r\n  content: \"\\f050\";\r\n}\r\n.fa-step-forward:before {\r\n  content: \"\\f051\";\r\n}\r\n.fa-eject:before {\r\n  content: \"\\f052\";\r\n}\r\n.fa-chevron-left:before {\r\n  content: \"\\f053\";\r\n}\r\n.fa-chevron-right:before {\r\n  content: \"\\f054\";\r\n}\r\n.fa-plus-circle:before {\r\n  content: \"\\f055\";\r\n}\r\n.fa-minus-circle:before {\r\n  content: \"\\f056\";\r\n}\r\n.fa-times-circle:before {\r\n  content: \"\\f057\";\r\n}\r\n.fa-check-circle:before {\r\n  content: \"\\f058\";\r\n}\r\n.fa-question-circle:before {\r\n  content: \"\\f059\";\r\n}\r\n.fa-info-circle:before {\r\n  content: \"\\f05a\";\r\n}\r\n.fa-crosshairs:before {\r\n  content: \"\\f05b\";\r\n}\r\n.fa-times-circle-o:before {\r\n  content: \"\\f05c\";\r\n}\r\n.fa-check-circle-o:before {\r\n  content: \"\\f05d\";\r\n}\r\n.fa-ban:before {\r\n  content: \"\\f05e\";\r\n}\r\n.fa-arrow-left:before {\r\n  content: \"\\f060\";\r\n}\r\n.fa-arrow-right:before {\r\n  content: \"\\f061\";\r\n}\r\n.fa-arrow-up:before {\r\n  content: \"\\f062\";\r\n}\r\n.fa-arrow-down:before {\r\n  content: \"\\f063\";\r\n}\r\n.fa-mail-forward:before,\r\n.fa-share:before {\r\n  content: \"\\f064\";\r\n}\r\n.fa-expand:before {\r\n  content: \"\\f065\";\r\n}\r\n.fa-compress:before {\r\n  content: \"\\f066\";\r\n}\r\n.fa-plus:before {\r\n  content: \"\\f067\";\r\n}\r\n.fa-minus:before {\r\n  content: \"\\f068\";\r\n}\r\n.fa-asterisk:before {\r\n  content: \"\\f069\";\r\n}\r\n.fa-exclamation-circle:before {\r\n  content: \"\\f06a\";\r\n}\r\n.fa-gift:before {\r\n  content: \"\\f06b\";\r\n}\r\n.fa-leaf:before {\r\n  content: \"\\f06c\";\r\n}\r\n.fa-fire:before {\r\n  content: \"\\f06d\";\r\n}\r\n.fa-eye:before {\r\n  content: \"\\f06e\";\r\n}\r\n.fa-eye-slash:before {\r\n  content: \"\\f070\";\r\n}\r\n.fa-warning:before,\r\n.fa-exclamation-triangle:before {\r\n  content: \"\\f071\";\r\n}\r\n.fa-plane:before {\r\n  content: \"\\f072\";\r\n}\r\n.fa-calendar:before {\r\n  content: \"\\f073\";\r\n}\r\n.fa-random:before {\r\n  content: \"\\f074\";\r\n}\r\n.fa-comment:before {\r\n  content: \"\\f075\";\r\n}\r\n.fa-magnet:before {\r\n  content: \"\\f076\";\r\n}\r\n.fa-chevron-up:before {\r\n  content: \"\\f077\";\r\n}\r\n.fa-chevron-down:before {\r\n  content: \"\\f078\";\r\n}\r\n.fa-retweet:before {\r\n  content: \"\\f079\";\r\n}\r\n.fa-shopping-cart:before {\r\n  content: \"\\f07a\";\r\n}\r\n.fa-folder:before {\r\n  content: \"\\f07b\";\r\n}\r\n.fa-folder-open:before {\r\n  content: \"\\f07c\";\r\n}\r\n.fa-arrows-v:before {\r\n  content: \"\\f07d\";\r\n}\r\n.fa-arrows-h:before {\r\n  content: \"\\f07e\";\r\n}\r\n.fa-bar-chart-o:before,\r\n.fa-bar-chart:before {\r\n  content: \"\\f080\";\r\n}\r\n.fa-twitter-square:before {\r\n  content: \"\\f081\";\r\n}\r\n.fa-facebook-square:before {\r\n  content: \"\\f082\";\r\n}\r\n.fa-camera-retro:before {\r\n  content: \"\\f083\";\r\n}\r\n.fa-key:before {\r\n  content: \"\\f084\";\r\n}\r\n.fa-gears:before,\r\n.fa-cogs:before {\r\n  content: \"\\f085\";\r\n}\r\n.fa-comments:before {\r\n  content: \"\\f086\";\r\n}\r\n.fa-thumbs-o-up:before {\r\n  content: \"\\f087\";\r\n}\r\n.fa-thumbs-o-down:before {\r\n  content: \"\\f088\";\r\n}\r\n.fa-star-half:before {\r\n  content: \"\\f089\";\r\n}\r\n.fa-heart-o:before {\r\n  content: \"\\f08a\";\r\n}\r\n.fa-sign-out:before {\r\n  content: \"\\f08b\";\r\n}\r\n.fa-linkedin-square:before {\r\n  content: \"\\f08c\";\r\n}\r\n.fa-thumb-tack:before {\r\n  content: \"\\f08d\";\r\n}\r\n.fa-external-link:before {\r\n  content: \"\\f08e\";\r\n}\r\n.fa-sign-in:before {\r\n  content: \"\\f090\";\r\n}\r\n.fa-trophy:before {\r\n  content: \"\\f091\";\r\n}\r\n.fa-github-square:before {\r\n  content: \"\\f092\";\r\n}\r\n.fa-upload:before {\r\n  content: \"\\f093\";\r\n}\r\n.fa-lemon-o:before {\r\n  content: \"\\f094\";\r\n}\r\n.fa-phone:before {\r\n  content: \"\\f095\";\r\n}\r\n.fa-square-o:before {\r\n  content: \"\\f096\";\r\n}\r\n.fa-bookmark-o:before {\r\n  content: \"\\f097\";\r\n}\r\n.fa-phone-square:before {\r\n  content: \"\\f098\";\r\n}\r\n.fa-twitter:before {\r\n  content: \"\\f099\";\r\n}\r\n.fa-facebook-f:before,\r\n.fa-facebook:before {\r\n  content: \"\\f09a\";\r\n}\r\n.fa-github:before {\r\n  content: \"\\f09b\";\r\n}\r\n.fa-unlock:before {\r\n  content: \"\\f09c\";\r\n}\r\n.fa-credit-card:before {\r\n  content: \"\\f09d\";\r\n}\r\n.fa-feed:before,\r\n.fa-rss:before {\r\n  content: \"\\f09e\";\r\n}\r\n.fa-hdd-o:before {\r\n  content: \"\\f0a0\";\r\n}\r\n.fa-bullhorn:before {\r\n  content: \"\\f0a1\";\r\n}\r\n.fa-bell:before {\r\n  content: \"\\f0f3\";\r\n}\r\n.fa-certificate:before {\r\n  content: \"\\f0a3\";\r\n}\r\n.fa-hand-o-right:before {\r\n  content: \"\\f0a4\";\r\n}\r\n.fa-hand-o-left:before {\r\n  content: \"\\f0a5\";\r\n}\r\n.fa-hand-o-up:before {\r\n  content: \"\\f0a6\";\r\n}\r\n.fa-hand-o-down:before {\r\n  content: \"\\f0a7\";\r\n}\r\n.fa-arrow-circle-left:before {\r\n  content: \"\\f0a8\";\r\n}\r\n.fa-arrow-circle-right:before {\r\n  content: \"\\f0a9\";\r\n}\r\n.fa-arrow-circle-up:before {\r\n  content: \"\\f0aa\";\r\n}\r\n.fa-arrow-circle-down:before {\r\n  content: \"\\f0ab\";\r\n}\r\n.fa-globe:before {\r\n  content: \"\\f0ac\";\r\n}\r\n.fa-wrench:before {\r\n  content: \"\\f0ad\";\r\n}\r\n.fa-tasks:before {\r\n  content: \"\\f0ae\";\r\n}\r\n.fa-filter:before {\r\n  content: \"\\f0b0\";\r\n}\r\n.fa-briefcase:before {\r\n  content: \"\\f0b1\";\r\n}\r\n.fa-arrows-alt:before {\r\n  content: \"\\f0b2\";\r\n}\r\n.fa-group:before,\r\n.fa-users:before {\r\n  content: \"\\f0c0\";\r\n}\r\n.fa-chain:before,\r\n.fa-link:before {\r\n  content: \"\\f0c1\";\r\n}\r\n.fa-cloud:before {\r\n  content: \"\\f0c2\";\r\n}\r\n.fa-flask:before {\r\n  content: \"\\f0c3\";\r\n}\r\n.fa-cut:before,\r\n.fa-scissors:before {\r\n  content: \"\\f0c4\";\r\n}\r\n.fa-copy:before,\r\n.fa-files-o:before {\r\n  content: \"\\f0c5\";\r\n}\r\n.fa-paperclip:before {\r\n  content: \"\\f0c6\";\r\n}\r\n.fa-save:before,\r\n.fa-floppy-o:before {\r\n  content: \"\\f0c7\";\r\n}\r\n.fa-square:before {\r\n  content: \"\\f0c8\";\r\n}\r\n.fa-navicon:before,\r\n.fa-reorder:before,\r\n.fa-bars:before {\r\n  content: \"\\f0c9\";\r\n}\r\n.fa-list-ul:before {\r\n  content: \"\\f0ca\";\r\n}\r\n.fa-list-ol:before {\r\n  content: \"\\f0cb\";\r\n}\r\n.fa-strikethrough:before {\r\n  content: \"\\f0cc\";\r\n}\r\n.fa-underline:before {\r\n  content: \"\\f0cd\";\r\n}\r\n.fa-table:before {\r\n  content: \"\\f0ce\";\r\n}\r\n.fa-magic:before {\r\n  content: \"\\f0d0\";\r\n}\r\n.fa-truck:before {\r\n  content: \"\\f0d1\";\r\n}\r\n.fa-pinterest:before {\r\n  content: \"\\f0d2\";\r\n}\r\n.fa-pinterest-square:before {\r\n  content: \"\\f0d3\";\r\n}\r\n.fa-google-plus-square:before {\r\n  content: \"\\f0d4\";\r\n}\r\n.fa-google-plus:before {\r\n  content: \"\\f0d5\";\r\n}\r\n.fa-money:before {\r\n  content: \"\\f0d6\";\r\n}\r\n.fa-caret-down:before {\r\n  content: \"\\f0d7\";\r\n}\r\n.fa-caret-up:before {\r\n  content: \"\\f0d8\";\r\n}\r\n.fa-caret-left:before {\r\n  content: \"\\f0d9\";\r\n}\r\n.fa-caret-right:before {\r\n  content: \"\\f0da\";\r\n}\r\n.fa-columns:before {\r\n  content: \"\\f0db\";\r\n}\r\n.fa-unsorted:before,\r\n.fa-sort:before {\r\n  content: \"\\f0dc\";\r\n}\r\n.fa-sort-down:before,\r\n.fa-sort-desc:before {\r\n  content: \"\\f0dd\";\r\n}\r\n.fa-sort-up:before,\r\n.fa-sort-asc:before {\r\n  content: \"\\f0de\";\r\n}\r\n.fa-envelope:before {\r\n  content: \"\\f0e0\";\r\n}\r\n.fa-linkedin:before {\r\n  content: \"\\f0e1\";\r\n}\r\n.fa-rotate-left:before,\r\n.fa-undo:before {\r\n  content: \"\\f0e2\";\r\n}\r\n.fa-legal:before,\r\n.fa-gavel:before {\r\n  content: \"\\f0e3\";\r\n}\r\n.fa-dashboard:before,\r\n.fa-tachometer:before {\r\n  content: \"\\f0e4\";\r\n}\r\n.fa-comment-o:before {\r\n  content: \"\\f0e5\";\r\n}\r\n.fa-comments-o:before {\r\n  content: \"\\f0e6\";\r\n}\r\n.fa-flash:before,\r\n.fa-bolt:before {\r\n  content: \"\\f0e7\";\r\n}\r\n.fa-sitemap:before {\r\n  content: \"\\f0e8\";\r\n}\r\n.fa-umbrella:before {\r\n  content: \"\\f0e9\";\r\n}\r\n.fa-paste:before,\r\n.fa-clipboard:before {\r\n  content: \"\\f0ea\";\r\n}\r\n.fa-lightbulb-o:before {\r\n  content: \"\\f0eb\";\r\n}\r\n.fa-exchange:before {\r\n  content: \"\\f0ec\";\r\n}\r\n.fa-cloud-download:before {\r\n  content: \"\\f0ed\";\r\n}\r\n.fa-cloud-upload:before {\r\n  content: \"\\f0ee\";\r\n}\r\n.fa-user-md:before {\r\n  content: \"\\f0f0\";\r\n}\r\n.fa-stethoscope:before {\r\n  content: \"\\f0f1\";\r\n}\r\n.fa-suitcase:before {\r\n  content: \"\\f0f2\";\r\n}\r\n.fa-bell-o:before {\r\n  content: \"\\f0a2\";\r\n}\r\n.fa-coffee:before {\r\n  content: \"\\f0f4\";\r\n}\r\n.fa-cutlery:before {\r\n  content: \"\\f0f5\";\r\n}\r\n.fa-file-text-o:before {\r\n  content: \"\\f0f6\";\r\n}\r\n.fa-building-o:before {\r\n  content: \"\\f0f7\";\r\n}\r\n.fa-hospital-o:before {\r\n  content: \"\\f0f8\";\r\n}\r\n.fa-ambulance:before {\r\n  content: \"\\f0f9\";\r\n}\r\n.fa-medkit:before {\r\n  content: \"\\f0fa\";\r\n}\r\n.fa-fighter-jet:before {\r\n  content: \"\\f0fb\";\r\n}\r\n.fa-beer:before {\r\n  content: \"\\f0fc\";\r\n}\r\n.fa-h-square:before {\r\n  content: \"\\f0fd\";\r\n}\r\n.fa-plus-square:before {\r\n  content: \"\\f0fe\";\r\n}\r\n.fa-angle-double-left:before {\r\n  content: \"\\f100\";\r\n}\r\n.fa-angle-double-right:before {\r\n  content: \"\\f101\";\r\n}\r\n.fa-angle-double-up:before {\r\n  content: \"\\f102\";\r\n}\r\n.fa-angle-double-down:before {\r\n  content: \"\\f103\";\r\n}\r\n.fa-angle-left:before {\r\n  content: \"\\f104\";\r\n}\r\n.fa-angle-right:before {\r\n  content: \"\\f105\";\r\n}\r\n.fa-angle-up:before {\r\n  content: \"\\f106\";\r\n}\r\n.fa-angle-down:before {\r\n  content: \"\\f107\";\r\n}\r\n.fa-desktop:before {\r\n  content: \"\\f108\";\r\n}\r\n.fa-laptop:before {\r\n  content: \"\\f109\";\r\n}\r\n.fa-tablet:before {\r\n  content: \"\\f10a\";\r\n}\r\n.fa-mobile-phone:before,\r\n.fa-mobile:before {\r\n  content: \"\\f10b\";\r\n}\r\n.fa-circle-o:before {\r\n  content: \"\\f10c\";\r\n}\r\n.fa-quote-left:before {\r\n  content: \"\\f10d\";\r\n}\r\n.fa-quote-right:before {\r\n  content: \"\\f10e\";\r\n}\r\n.fa-spinner:before {\r\n  content: \"\\f110\";\r\n}\r\n.fa-circle:before {\r\n  content: \"\\f111\";\r\n}\r\n.fa-mail-reply:before,\r\n.fa-reply:before {\r\n  content: \"\\f112\";\r\n}\r\n.fa-github-alt:before {\r\n  content: \"\\f113\";\r\n}\r\n.fa-folder-o:before {\r\n  content: \"\\f114\";\r\n}\r\n.fa-folder-open-o:before {\r\n  content: \"\\f115\";\r\n}\r\n.fa-smile-o:before {\r\n  content: \"\\f118\";\r\n}\r\n.fa-frown-o:before {\r\n  content: \"\\f119\";\r\n}\r\n.fa-meh-o:before {\r\n  content: \"\\f11a\";\r\n}\r\n.fa-gamepad:before {\r\n  content: \"\\f11b\";\r\n}\r\n.fa-keyboard-o:before {\r\n  content: \"\\f11c\";\r\n}\r\n.fa-flag-o:before {\r\n  content: \"\\f11d\";\r\n}\r\n.fa-flag-checkered:before {\r\n  content: \"\\f11e\";\r\n}\r\n.fa-terminal:before {\r\n  content: \"\\f120\";\r\n}\r\n.fa-code:before {\r\n  content: \"\\f121\";\r\n}\r\n.fa-mail-reply-all:before,\r\n.fa-reply-all:before {\r\n  content: \"\\f122\";\r\n}\r\n.fa-star-half-empty:before,\r\n.fa-star-half-full:before,\r\n.fa-star-half-o:before {\r\n  content: \"\\f123\";\r\n}\r\n.fa-location-arrow:before {\r\n  content: \"\\f124\";\r\n}\r\n.fa-crop:before {\r\n  content: \"\\f125\";\r\n}\r\n.fa-code-fork:before {\r\n  content: \"\\f126\";\r\n}\r\n.fa-unlink:before,\r\n.fa-chain-broken:before {\r\n  content: \"\\f127\";\r\n}\r\n.fa-question:before {\r\n  content: \"\\f128\";\r\n}\r\n.fa-info:before {\r\n  content: \"\\f129\";\r\n}\r\n.fa-exclamation:before {\r\n  content: \"\\f12a\";\r\n}\r\n.fa-superscript:before {\r\n  content: \"\\f12b\";\r\n}\r\n.fa-subscript:before {\r\n  content: \"\\f12c\";\r\n}\r\n.fa-eraser:before {\r\n  content: \"\\f12d\";\r\n}\r\n.fa-puzzle-piece:before {\r\n  content: \"\\f12e\";\r\n}\r\n.fa-microphone:before {\r\n  content: \"\\f130\";\r\n}\r\n.fa-microphone-slash:before {\r\n  content: \"\\f131\";\r\n}\r\n.fa-shield:before {\r\n  content: \"\\f132\";\r\n}\r\n.fa-calendar-o:before {\r\n  content: \"\\f133\";\r\n}\r\n.fa-fire-extinguisher:before {\r\n  content: \"\\f134\";\r\n}\r\n.fa-rocket:before {\r\n  content: \"\\f135\";\r\n}\r\n.fa-maxcdn:before {\r\n  content: \"\\f136\";\r\n}\r\n.fa-chevron-circle-left:before {\r\n  content: \"\\f137\";\r\n}\r\n.fa-chevron-circle-right:before {\r\n  content: \"\\f138\";\r\n}\r\n.fa-chevron-circle-up:before {\r\n  content: \"\\f139\";\r\n}\r\n.fa-chevron-circle-down:before {\r\n  content: \"\\f13a\";\r\n}\r\n.fa-html5:before {\r\n  content: \"\\f13b\";\r\n}\r\n.fa-css3:before {\r\n  content: \"\\f13c\";\r\n}\r\n.fa-anchor:before {\r\n  content: \"\\f13d\";\r\n}\r\n.fa-unlock-alt:before {\r\n  content: \"\\f13e\";\r\n}\r\n.fa-bullseye:before {\r\n  content: \"\\f140\";\r\n}\r\n.fa-ellipsis-h:before {\r\n  content: \"\\f141\";\r\n}\r\n.fa-ellipsis-v:before {\r\n  content: \"\\f142\";\r\n}\r\n.fa-rss-square:before {\r\n  content: \"\\f143\";\r\n}\r\n.fa-play-circle:before {\r\n  content: \"\\f144\";\r\n}\r\n.fa-ticket:before {\r\n  content: \"\\f145\";\r\n}\r\n.fa-minus-square:before {\r\n  content: \"\\f146\";\r\n}\r\n.fa-minus-square-o:before {\r\n  content: \"\\f147\";\r\n}\r\n.fa-level-up:before {\r\n  content: \"\\f148\";\r\n}\r\n.fa-level-down:before {\r\n  content: \"\\f149\";\r\n}\r\n.fa-check-square:before {\r\n  content: \"\\f14a\";\r\n}\r\n.fa-pencil-square:before {\r\n  content: \"\\f14b\";\r\n}\r\n.fa-external-link-square:before {\r\n  content: \"\\f14c\";\r\n}\r\n.fa-share-square:before {\r\n  content: \"\\f14d\";\r\n}\r\n.fa-compass:before {\r\n  content: \"\\f14e\";\r\n}\r\n.fa-toggle-down:before,\r\n.fa-caret-square-o-down:before {\r\n  content: \"\\f150\";\r\n}\r\n.fa-toggle-up:before,\r\n.fa-caret-square-o-up:before {\r\n  content: \"\\f151\";\r\n}\r\n.fa-toggle-right:before,\r\n.fa-caret-square-o-right:before {\r\n  content: \"\\f152\";\r\n}\r\n.fa-euro:before,\r\n.fa-eur:before {\r\n  content: \"\\f153\";\r\n}\r\n.fa-gbp:before {\r\n  content: \"\\f154\";\r\n}\r\n.fa-dollar:before,\r\n.fa-usd:before {\r\n  content: \"\\f155\";\r\n}\r\n.fa-rupee:before,\r\n.fa-inr:before {\r\n  content: \"\\f156\";\r\n}\r\n.fa-cny:before,\r\n.fa-rmb:before,\r\n.fa-yen:before,\r\n.fa-jpy:before {\r\n  content: \"\\f157\";\r\n}\r\n.fa-ruble:before,\r\n.fa-rouble:before,\r\n.fa-rub:before {\r\n  content: \"\\f158\";\r\n}\r\n.fa-won:before,\r\n.fa-krw:before {\r\n  content: \"\\f159\";\r\n}\r\n.fa-bitcoin:before,\r\n.fa-btc:before {\r\n  content: \"\\f15a\";\r\n}\r\n.fa-file:before {\r\n  content: \"\\f15b\";\r\n}\r\n.fa-file-text:before {\r\n  content: \"\\f15c\";\r\n}\r\n.fa-sort-alpha-asc:before {\r\n  content: \"\\f15d\";\r\n}\r\n.fa-sort-alpha-desc:before {\r\n  content: \"\\f15e\";\r\n}\r\n.fa-sort-amount-asc:before {\r\n  content: \"\\f160\";\r\n}\r\n.fa-sort-amount-desc:before {\r\n  content: \"\\f161\";\r\n}\r\n.fa-sort-numeric-asc:before {\r\n  content: \"\\f162\";\r\n}\r\n.fa-sort-numeric-desc:before {\r\n  content: \"\\f163\";\r\n}\r\n.fa-thumbs-up:before {\r\n  content: \"\\f164\";\r\n}\r\n.fa-thumbs-down:before {\r\n  content: \"\\f165\";\r\n}\r\n.fa-youtube-square:before {\r\n  content: \"\\f166\";\r\n}\r\n.fa-youtube:before {\r\n  content: \"\\f167\";\r\n}\r\n.fa-xing:before {\r\n  content: \"\\f168\";\r\n}\r\n.fa-xing-square:before {\r\n  content: \"\\f169\";\r\n}\r\n.fa-youtube-play:before {\r\n  content: \"\\f16a\";\r\n}\r\n.fa-dropbox:before {\r\n  content: \"\\f16b\";\r\n}\r\n.fa-stack-overflow:before {\r\n  content: \"\\f16c\";\r\n}\r\n.fa-instagram:before {\r\n  content: \"\\f16d\";\r\n}\r\n.fa-flickr:before {\r\n  content: \"\\f16e\";\r\n}\r\n.fa-adn:before {\r\n  content: \"\\f170\";\r\n}\r\n.fa-bitbucket:before {\r\n  content: \"\\f171\";\r\n}\r\n.fa-bitbucket-square:before {\r\n  content: \"\\f172\";\r\n}\r\n.fa-tumblr:before {\r\n  content: \"\\f173\";\r\n}\r\n.fa-tumblr-square:before {\r\n  content: \"\\f174\";\r\n}\r\n.fa-long-arrow-down:before {\r\n  content: \"\\f175\";\r\n}\r\n.fa-long-arrow-up:before {\r\n  content: \"\\f176\";\r\n}\r\n.fa-long-arrow-left:before {\r\n  content: \"\\f177\";\r\n}\r\n.fa-long-arrow-right:before {\r\n  content: \"\\f178\";\r\n}\r\n.fa-apple:before {\r\n  content: \"\\f179\";\r\n}\r\n.fa-windows:before {\r\n  content: \"\\f17a\";\r\n}\r\n.fa-android:before {\r\n  content: \"\\f17b\";\r\n}\r\n.fa-linux:before {\r\n  content: \"\\f17c\";\r\n}\r\n.fa-dribbble:before {\r\n  content: \"\\f17d\";\r\n}\r\n.fa-skype:before {\r\n  content: \"\\f17e\";\r\n}\r\n.fa-foursquare:before {\r\n  content: \"\\f180\";\r\n}\r\n.fa-trello:before {\r\n  content: \"\\f181\";\r\n}\r\n.fa-female:before {\r\n  content: \"\\f182\";\r\n}\r\n.fa-male:before {\r\n  content: \"\\f183\";\r\n}\r\n.fa-gittip:before,\r\n.fa-gratipay:before {\r\n  content: \"\\f184\";\r\n}\r\n.fa-sun-o:before {\r\n  content: \"\\f185\";\r\n}\r\n.fa-moon-o:before {\r\n  content: \"\\f186\";\r\n}\r\n.fa-archive:before {\r\n  content: \"\\f187\";\r\n}\r\n.fa-bug:before {\r\n  content: \"\\f188\";\r\n}\r\n.fa-vk:before {\r\n  content: \"\\f189\";\r\n}\r\n.fa-weibo:before {\r\n  content: \"\\f18a\";\r\n}\r\n.fa-renren:before {\r\n  content: \"\\f18b\";\r\n}\r\n.fa-pagelines:before {\r\n  content: \"\\f18c\";\r\n}\r\n.fa-stack-exchange:before {\r\n  content: \"\\f18d\";\r\n}\r\n.fa-arrow-circle-o-right:before {\r\n  content: \"\\f18e\";\r\n}\r\n.fa-arrow-circle-o-left:before {\r\n  content: \"\\f190\";\r\n}\r\n.fa-toggle-left:before,\r\n.fa-caret-square-o-left:before {\r\n  content: \"\\f191\";\r\n}\r\n.fa-dot-circle-o:before {\r\n  content: \"\\f192\";\r\n}\r\n.fa-wheelchair:before {\r\n  content: \"\\f193\";\r\n}\r\n.fa-vimeo-square:before {\r\n  content: \"\\f194\";\r\n}\r\n.fa-turkish-lira:before,\r\n.fa-try:before {\r\n  content: \"\\f195\";\r\n}\r\n.fa-plus-square-o:before {\r\n  content: \"\\f196\";\r\n}\r\n.fa-space-shuttle:before {\r\n  content: \"\\f197\";\r\n}\r\n.fa-slack:before {\r\n  content: \"\\f198\";\r\n}\r\n.fa-envelope-square:before {\r\n  content: \"\\f199\";\r\n}\r\n.fa-wordpress:before {\r\n  content: \"\\f19a\";\r\n}\r\n.fa-openid:before {\r\n  content: \"\\f19b\";\r\n}\r\n.fa-institution:before,\r\n.fa-bank:before,\r\n.fa-university:before {\r\n  content: \"\\f19c\";\r\n}\r\n.fa-mortar-board:before,\r\n.fa-graduation-cap:before {\r\n  content: \"\\f19d\";\r\n}\r\n.fa-yahoo:before {\r\n  content: \"\\f19e\";\r\n}\r\n.fa-google:before {\r\n  content: \"\\f1a0\";\r\n}\r\n.fa-reddit:before {\r\n  content: \"\\f1a1\";\r\n}\r\n.fa-reddit-square:before {\r\n  content: \"\\f1a2\";\r\n}\r\n.fa-stumbleupon-circle:before {\r\n  content: \"\\f1a3\";\r\n}\r\n.fa-stumbleupon:before {\r\n  content: \"\\f1a4\";\r\n}\r\n.fa-delicious:before {\r\n  content: \"\\f1a5\";\r\n}\r\n.fa-digg:before {\r\n  content: \"\\f1a6\";\r\n}\r\n.fa-pied-piper-pp:before {\r\n  content: \"\\f1a7\";\r\n}\r\n.fa-pied-piper-alt:before {\r\n  content: \"\\f1a8\";\r\n}\r\n.fa-drupal:before {\r\n  content: \"\\f1a9\";\r\n}\r\n.fa-joomla:before {\r\n  content: \"\\f1aa\";\r\n}\r\n.fa-language:before {\r\n  content: \"\\f1ab\";\r\n}\r\n.fa-fax:before {\r\n  content: \"\\f1ac\";\r\n}\r\n.fa-building:before {\r\n  content: \"\\f1ad\";\r\n}\r\n.fa-child:before {\r\n  content: \"\\f1ae\";\r\n}\r\n.fa-paw:before {\r\n  content: \"\\f1b0\";\r\n}\r\n.fa-spoon:before {\r\n  content: \"\\f1b1\";\r\n}\r\n.fa-cube:before {\r\n  content: \"\\f1b2\";\r\n}\r\n.fa-cubes:before {\r\n  content: \"\\f1b3\";\r\n}\r\n.fa-behance:before {\r\n  content: \"\\f1b4\";\r\n}\r\n.fa-behance-square:before {\r\n  content: \"\\f1b5\";\r\n}\r\n.fa-steam:before {\r\n  content: \"\\f1b6\";\r\n}\r\n.fa-steam-square:before {\r\n  content: \"\\f1b7\";\r\n}\r\n.fa-recycle:before {\r\n  content: \"\\f1b8\";\r\n}\r\n.fa-automobile:before,\r\n.fa-car:before {\r\n  content: \"\\f1b9\";\r\n}\r\n.fa-cab:before,\r\n.fa-taxi:before {\r\n  content: \"\\f1ba\";\r\n}\r\n.fa-tree:before {\r\n  content: \"\\f1bb\";\r\n}\r\n.fa-spotify:before {\r\n  content: \"\\f1bc\";\r\n}\r\n.fa-deviantart:before {\r\n  content: \"\\f1bd\";\r\n}\r\n.fa-soundcloud:before {\r\n  content: \"\\f1be\";\r\n}\r\n.fa-database:before {\r\n  content: \"\\f1c0\";\r\n}\r\n.fa-file-pdf-o:before {\r\n  content: \"\\f1c1\";\r\n}\r\n.fa-file-word-o:before {\r\n  content: \"\\f1c2\";\r\n}\r\n.fa-file-excel-o:before {\r\n  content: \"\\f1c3\";\r\n}\r\n.fa-file-powerpoint-o:before {\r\n  content: \"\\f1c4\";\r\n}\r\n.fa-file-photo-o:before,\r\n.fa-file-picture-o:before,\r\n.fa-file-image-o:before {\r\n  content: \"\\f1c5\";\r\n}\r\n.fa-file-zip-o:before,\r\n.fa-file-archive-o:before {\r\n  content: \"\\f1c6\";\r\n}\r\n.fa-file-sound-o:before,\r\n.fa-file-audio-o:before {\r\n  content: \"\\f1c7\";\r\n}\r\n.fa-file-movie-o:before,\r\n.fa-file-video-o:before {\r\n  content: \"\\f1c8\";\r\n}\r\n.fa-file-code-o:before {\r\n  content: \"\\f1c9\";\r\n}\r\n.fa-vine:before {\r\n  content: \"\\f1ca\";\r\n}\r\n.fa-codepen:before {\r\n  content: \"\\f1cb\";\r\n}\r\n.fa-jsfiddle:before {\r\n  content: \"\\f1cc\";\r\n}\r\n.fa-life-bouy:before,\r\n.fa-life-buoy:before,\r\n.fa-life-saver:before,\r\n.fa-support:before,\r\n.fa-life-ring:before {\r\n  content: \"\\f1cd\";\r\n}\r\n.fa-circle-o-notch:before {\r\n  content: \"\\f1ce\";\r\n}\r\n.fa-ra:before,\r\n.fa-resistance:before,\r\n.fa-rebel:before {\r\n  content: \"\\f1d0\";\r\n}\r\n.fa-ge:before,\r\n.fa-empire:before {\r\n  content: \"\\f1d1\";\r\n}\r\n.fa-git-square:before {\r\n  content: \"\\f1d2\";\r\n}\r\n.fa-git:before {\r\n  content: \"\\f1d3\";\r\n}\r\n.fa-y-combinator-square:before,\r\n.fa-yc-square:before,\r\n.fa-hacker-news:before {\r\n  content: \"\\f1d4\";\r\n}\r\n.fa-tencent-weibo:before {\r\n  content: \"\\f1d5\";\r\n}\r\n.fa-qq:before {\r\n  content: \"\\f1d6\";\r\n}\r\n.fa-wechat:before,\r\n.fa-weixin:before {\r\n  content: \"\\f1d7\";\r\n}\r\n.fa-send:before,\r\n.fa-paper-plane:before {\r\n  content: \"\\f1d8\";\r\n}\r\n.fa-send-o:before,\r\n.fa-paper-plane-o:before {\r\n  content: \"\\f1d9\";\r\n}\r\n.fa-history:before {\r\n  content: \"\\f1da\";\r\n}\r\n.fa-circle-thin:before {\r\n  content: \"\\f1db\";\r\n}\r\n.fa-header:before {\r\n  content: \"\\f1dc\";\r\n}\r\n.fa-paragraph:before {\r\n  content: \"\\f1dd\";\r\n}\r\n.fa-sliders:before {\r\n  content: \"\\f1de\";\r\n}\r\n.fa-share-alt:before {\r\n  content: \"\\f1e0\";\r\n}\r\n.fa-share-alt-square:before {\r\n  content: \"\\f1e1\";\r\n}\r\n.fa-bomb:before {\r\n  content: \"\\f1e2\";\r\n}\r\n.fa-soccer-ball-o:before,\r\n.fa-futbol-o:before {\r\n  content: \"\\f1e3\";\r\n}\r\n.fa-tty:before {\r\n  content: \"\\f1e4\";\r\n}\r\n.fa-binoculars:before {\r\n  content: \"\\f1e5\";\r\n}\r\n.fa-plug:before {\r\n  content: \"\\f1e6\";\r\n}\r\n.fa-slideshare:before {\r\n  content: \"\\f1e7\";\r\n}\r\n.fa-twitch:before {\r\n  content: \"\\f1e8\";\r\n}\r\n.fa-yelp:before {\r\n  content: \"\\f1e9\";\r\n}\r\n.fa-newspaper-o:before {\r\n  content: \"\\f1ea\";\r\n}\r\n.fa-wifi:before {\r\n  content: \"\\f1eb\";\r\n}\r\n.fa-calculator:before {\r\n  content: \"\\f1ec\";\r\n}\r\n.fa-paypal:before {\r\n  content: \"\\f1ed\";\r\n}\r\n.fa-google-wallet:before {\r\n  content: \"\\f1ee\";\r\n}\r\n.fa-cc-visa:before {\r\n  content: \"\\f1f0\";\r\n}\r\n.fa-cc-mastercard:before {\r\n  content: \"\\f1f1\";\r\n}\r\n.fa-cc-discover:before {\r\n  content: \"\\f1f2\";\r\n}\r\n.fa-cc-amex:before {\r\n  content: \"\\f1f3\";\r\n}\r\n.fa-cc-paypal:before {\r\n  content: \"\\f1f4\";\r\n}\r\n.fa-cc-stripe:before {\r\n  content: \"\\f1f5\";\r\n}\r\n.fa-bell-slash:before {\r\n  content: \"\\f1f6\";\r\n}\r\n.fa-bell-slash-o:before {\r\n  content: \"\\f1f7\";\r\n}\r\n.fa-trash:before {\r\n  content: \"\\f1f8\";\r\n}\r\n.fa-copyright:before {\r\n  content: \"\\f1f9\";\r\n}\r\n.fa-at:before {\r\n  content: \"\\f1fa\";\r\n}\r\n.fa-eyedropper:before {\r\n  content: \"\\f1fb\";\r\n}\r\n.fa-paint-brush:before {\r\n  content: \"\\f1fc\";\r\n}\r\n.fa-birthday-cake:before {\r\n  content: \"\\f1fd\";\r\n}\r\n.fa-area-chart:before {\r\n  content: \"\\f1fe\";\r\n}\r\n.fa-pie-chart:before {\r\n  content: \"\\f200\";\r\n}\r\n.fa-line-chart:before {\r\n  content: \"\\f201\";\r\n}\r\n.fa-lastfm:before {\r\n  content: \"\\f202\";\r\n}\r\n.fa-lastfm-square:before {\r\n  content: \"\\f203\";\r\n}\r\n.fa-toggle-off:before {\r\n  content: \"\\f204\";\r\n}\r\n.fa-toggle-on:before {\r\n  content: \"\\f205\";\r\n}\r\n.fa-bicycle:before {\r\n  content: \"\\f206\";\r\n}\r\n.fa-bus:before {\r\n  content: \"\\f207\";\r\n}\r\n.fa-ioxhost:before {\r\n  content: \"\\f208\";\r\n}\r\n.fa-angellist:before {\r\n  content: \"\\f209\";\r\n}\r\n.fa-cc:before {\r\n  content: \"\\f20a\";\r\n}\r\n.fa-shekel:before,\r\n.fa-sheqel:before,\r\n.fa-ils:before {\r\n  content: \"\\f20b\";\r\n}\r\n.fa-meanpath:before {\r\n  content: \"\\f20c\";\r\n}\r\n.fa-buysellads:before {\r\n  content: \"\\f20d\";\r\n}\r\n.fa-connectdevelop:before {\r\n  content: \"\\f20e\";\r\n}\r\n.fa-dashcube:before {\r\n  content: \"\\f210\";\r\n}\r\n.fa-forumbee:before {\r\n  content: \"\\f211\";\r\n}\r\n.fa-leanpub:before {\r\n  content: \"\\f212\";\r\n}\r\n.fa-sellsy:before {\r\n  content: \"\\f213\";\r\n}\r\n.fa-shirtsinbulk:before {\r\n  content: \"\\f214\";\r\n}\r\n.fa-simplybuilt:before {\r\n  content: \"\\f215\";\r\n}\r\n.fa-skyatlas:before {\r\n  content: \"\\f216\";\r\n}\r\n.fa-cart-plus:before {\r\n  content: \"\\f217\";\r\n}\r\n.fa-cart-arrow-down:before {\r\n  content: \"\\f218\";\r\n}\r\n.fa-diamond:before {\r\n  content: \"\\f219\";\r\n}\r\n.fa-ship:before {\r\n  content: \"\\f21a\";\r\n}\r\n.fa-user-secret:before {\r\n  content: \"\\f21b\";\r\n}\r\n.fa-motorcycle:before {\r\n  content: \"\\f21c\";\r\n}\r\n.fa-street-view:before {\r\n  content: \"\\f21d\";\r\n}\r\n.fa-heartbeat:before {\r\n  content: \"\\f21e\";\r\n}\r\n.fa-venus:before {\r\n  content: \"\\f221\";\r\n}\r\n.fa-mars:before {\r\n  content: \"\\f222\";\r\n}\r\n.fa-mercury:before {\r\n  content: \"\\f223\";\r\n}\r\n.fa-intersex:before,\r\n.fa-transgender:before {\r\n  content: \"\\f224\";\r\n}\r\n.fa-transgender-alt:before {\r\n  content: \"\\f225\";\r\n}\r\n.fa-venus-double:before {\r\n  content: \"\\f226\";\r\n}\r\n.fa-mars-double:before {\r\n  content: \"\\f227\";\r\n}\r\n.fa-venus-mars:before {\r\n  content: \"\\f228\";\r\n}\r\n.fa-mars-stroke:before {\r\n  content: \"\\f229\";\r\n}\r\n.fa-mars-stroke-v:before {\r\n  content: \"\\f22a\";\r\n}\r\n.fa-mars-stroke-h:before {\r\n  content: \"\\f22b\";\r\n}\r\n.fa-neuter:before {\r\n  content: \"\\f22c\";\r\n}\r\n.fa-genderless:before {\r\n  content: \"\\f22d\";\r\n}\r\n.fa-facebook-official:before {\r\n  content: \"\\f230\";\r\n}\r\n.fa-pinterest-p:before {\r\n  content: \"\\f231\";\r\n}\r\n.fa-whatsapp:before {\r\n  content: \"\\f232\";\r\n}\r\n.fa-server:before {\r\n  content: \"\\f233\";\r\n}\r\n.fa-user-plus:before {\r\n  content: \"\\f234\";\r\n}\r\n.fa-user-times:before {\r\n  content: \"\\f235\";\r\n}\r\n.fa-hotel:before,\r\n.fa-bed:before {\r\n  content: \"\\f236\";\r\n}\r\n.fa-viacoin:before {\r\n  content: \"\\f237\";\r\n}\r\n.fa-train:before {\r\n  content: \"\\f238\";\r\n}\r\n.fa-subway:before {\r\n  content: \"\\f239\";\r\n}\r\n.fa-medium:before {\r\n  content: \"\\f23a\";\r\n}\r\n.fa-yc:before,\r\n.fa-y-combinator:before {\r\n  content: \"\\f23b\";\r\n}\r\n.fa-optin-monster:before {\r\n  content: \"\\f23c\";\r\n}\r\n.fa-opencart:before {\r\n  content: \"\\f23d\";\r\n}\r\n.fa-expeditedssl:before {\r\n  content: \"\\f23e\";\r\n}\r\n.fa-battery-4:before,\r\n.fa-battery:before,\r\n.fa-battery-full:before {\r\n  content: \"\\f240\";\r\n}\r\n.fa-battery-3:before,\r\n.fa-battery-three-quarters:before {\r\n  content: \"\\f241\";\r\n}\r\n.fa-battery-2:before,\r\n.fa-battery-half:before {\r\n  content: \"\\f242\";\r\n}\r\n.fa-battery-1:before,\r\n.fa-battery-quarter:before {\r\n  content: \"\\f243\";\r\n}\r\n.fa-battery-0:before,\r\n.fa-battery-empty:before {\r\n  content: \"\\f244\";\r\n}\r\n.fa-mouse-pointer:before {\r\n  content: \"\\f245\";\r\n}\r\n.fa-i-cursor:before {\r\n  content: \"\\f246\";\r\n}\r\n.fa-object-group:before {\r\n  content: \"\\f247\";\r\n}\r\n.fa-object-ungroup:before {\r\n  content: \"\\f248\";\r\n}\r\n.fa-sticky-note:before {\r\n  content: \"\\f249\";\r\n}\r\n.fa-sticky-note-o:before {\r\n  content: \"\\f24a\";\r\n}\r\n.fa-cc-jcb:before {\r\n  content: \"\\f24b\";\r\n}\r\n.fa-cc-diners-club:before {\r\n  content: \"\\f24c\";\r\n}\r\n.fa-clone:before {\r\n  content: \"\\f24d\";\r\n}\r\n.fa-balance-scale:before {\r\n  content: \"\\f24e\";\r\n}\r\n.fa-hourglass-o:before {\r\n  content: \"\\f250\";\r\n}\r\n.fa-hourglass-1:before,\r\n.fa-hourglass-start:before {\r\n  content: \"\\f251\";\r\n}\r\n.fa-hourglass-2:before,\r\n.fa-hourglass-half:before {\r\n  content: \"\\f252\";\r\n}\r\n.fa-hourglass-3:before,\r\n.fa-hourglass-end:before {\r\n  content: \"\\f253\";\r\n}\r\n.fa-hourglass:before {\r\n  content: \"\\f254\";\r\n}\r\n.fa-hand-grab-o:before,\r\n.fa-hand-rock-o:before {\r\n  content: \"\\f255\";\r\n}\r\n.fa-hand-stop-o:before,\r\n.fa-hand-paper-o:before {\r\n  content: \"\\f256\";\r\n}\r\n.fa-hand-scissors-o:before {\r\n  content: \"\\f257\";\r\n}\r\n.fa-hand-lizard-o:before {\r\n  content: \"\\f258\";\r\n}\r\n.fa-hand-spock-o:before {\r\n  content: \"\\f259\";\r\n}\r\n.fa-hand-pointer-o:before {\r\n  content: \"\\f25a\";\r\n}\r\n.fa-hand-peace-o:before {\r\n  content: \"\\f25b\";\r\n}\r\n.fa-trademark:before {\r\n  content: \"\\f25c\";\r\n}\r\n.fa-registered:before {\r\n  content: \"\\f25d\";\r\n}\r\n.fa-creative-commons:before {\r\n  content: \"\\f25e\";\r\n}\r\n.fa-gg:before {\r\n  content: \"\\f260\";\r\n}\r\n.fa-gg-circle:before {\r\n  content: \"\\f261\";\r\n}\r\n.fa-tripadvisor:before {\r\n  content: \"\\f262\";\r\n}\r\n.fa-odnoklassniki:before {\r\n  content: \"\\f263\";\r\n}\r\n.fa-odnoklassniki-square:before {\r\n  content: \"\\f264\";\r\n}\r\n.fa-get-pocket:before {\r\n  content: \"\\f265\";\r\n}\r\n.fa-wikipedia-w:before {\r\n  content: \"\\f266\";\r\n}\r\n.fa-safari:before {\r\n  content: \"\\f267\";\r\n}\r\n.fa-chrome:before {\r\n  content: \"\\f268\";\r\n}\r\n.fa-firefox:before {\r\n  content: \"\\f269\";\r\n}\r\n.fa-opera:before {\r\n  content: \"\\f26a\";\r\n}\r\n.fa-internet-explorer:before {\r\n  content: \"\\f26b\";\r\n}\r\n.fa-tv:before,\r\n.fa-television:before {\r\n  content: \"\\f26c\";\r\n}\r\n.fa-contao:before {\r\n  content: \"\\f26d\";\r\n}\r\n.fa-500px:before {\r\n  content: \"\\f26e\";\r\n}\r\n.fa-amazon:before {\r\n  content: \"\\f270\";\r\n}\r\n.fa-calendar-plus-o:before {\r\n  content: \"\\f271\";\r\n}\r\n.fa-calendar-minus-o:before {\r\n  content: \"\\f272\";\r\n}\r\n.fa-calendar-times-o:before {\r\n  content: \"\\f273\";\r\n}\r\n.fa-calendar-check-o:before {\r\n  content: \"\\f274\";\r\n}\r\n.fa-industry:before {\r\n  content: \"\\f275\";\r\n}\r\n.fa-map-pin:before {\r\n  content: \"\\f276\";\r\n}\r\n.fa-map-signs:before {\r\n  content: \"\\f277\";\r\n}\r\n.fa-map-o:before {\r\n  content: \"\\f278\";\r\n}\r\n.fa-map:before {\r\n  content: \"\\f279\";\r\n}\r\n.fa-commenting:before {\r\n  content: \"\\f27a\";\r\n}\r\n.fa-commenting-o:before {\r\n  content: \"\\f27b\";\r\n}\r\n.fa-houzz:before {\r\n  content: \"\\f27c\";\r\n}\r\n.fa-vimeo:before {\r\n  content: \"\\f27d\";\r\n}\r\n.fa-black-tie:before {\r\n  content: \"\\f27e\";\r\n}\r\n.fa-fonticons:before {\r\n  content: \"\\f280\";\r\n}\r\n.fa-reddit-alien:before {\r\n  content: \"\\f281\";\r\n}\r\n.fa-edge:before {\r\n  content: \"\\f282\";\r\n}\r\n.fa-credit-card-alt:before {\r\n  content: \"\\f283\";\r\n}\r\n.fa-codiepie:before {\r\n  content: \"\\f284\";\r\n}\r\n.fa-modx:before {\r\n  content: \"\\f285\";\r\n}\r\n.fa-fort-awesome:before {\r\n  content: \"\\f286\";\r\n}\r\n.fa-usb:before {\r\n  content: \"\\f287\";\r\n}\r\n.fa-product-hunt:before {\r\n  content: \"\\f288\";\r\n}\r\n.fa-mixcloud:before {\r\n  content: \"\\f289\";\r\n}\r\n.fa-scribd:before {\r\n  content: \"\\f28a\";\r\n}\r\n.fa-pause-circle:before {\r\n  content: \"\\f28b\";\r\n}\r\n.fa-pause-circle-o:before {\r\n  content: \"\\f28c\";\r\n}\r\n.fa-stop-circle:before {\r\n  content: \"\\f28d\";\r\n}\r\n.fa-stop-circle-o:before {\r\n  content: \"\\f28e\";\r\n}\r\n.fa-shopping-bag:before {\r\n  content: \"\\f290\";\r\n}\r\n.fa-shopping-basket:before {\r\n  content: \"\\f291\";\r\n}\r\n.fa-hashtag:before {\r\n  content: \"\\f292\";\r\n}\r\n.fa-bluetooth:before {\r\n  content: \"\\f293\";\r\n}\r\n.fa-bluetooth-b:before {\r\n  content: \"\\f294\";\r\n}\r\n.fa-percent:before {\r\n  content: \"\\f295\";\r\n}\r\n.fa-gitlab:before {\r\n  content: \"\\f296\";\r\n}\r\n.fa-wpbeginner:before {\r\n  content: \"\\f297\";\r\n}\r\n.fa-wpforms:before {\r\n  content: \"\\f298\";\r\n}\r\n.fa-envira:before {\r\n  content: \"\\f299\";\r\n}\r\n.fa-universal-access:before {\r\n  content: \"\\f29a\";\r\n}\r\n.fa-wheelchair-alt:before {\r\n  content: \"\\f29b\";\r\n}\r\n.fa-question-circle-o:before {\r\n  content: \"\\f29c\";\r\n}\r\n.fa-blind:before {\r\n  content: \"\\f29d\";\r\n}\r\n.fa-audio-description:before {\r\n  content: \"\\f29e\";\r\n}\r\n.fa-volume-control-phone:before {\r\n  content: \"\\f2a0\";\r\n}\r\n.fa-braille:before {\r\n  content: \"\\f2a1\";\r\n}\r\n.fa-assistive-listening-systems:before {\r\n  content: \"\\f2a2\";\r\n}\r\n.fa-asl-interpreting:before,\r\n.fa-american-sign-language-interpreting:before {\r\n  content: \"\\f2a3\";\r\n}\r\n.fa-deafness:before,\r\n.fa-hard-of-hearing:before,\r\n.fa-deaf:before {\r\n  content: \"\\f2a4\";\r\n}\r\n.fa-glide:before {\r\n  content: \"\\f2a5\";\r\n}\r\n.fa-glide-g:before {\r\n  content: \"\\f2a6\";\r\n}\r\n.fa-signing:before,\r\n.fa-sign-language:before {\r\n  content: \"\\f2a7\";\r\n}\r\n.fa-low-vision:before {\r\n  content: \"\\f2a8\";\r\n}\r\n.fa-viadeo:before {\r\n  content: \"\\f2a9\";\r\n}\r\n.fa-viadeo-square:before {\r\n  content: \"\\f2aa\";\r\n}\r\n.fa-snapchat:before {\r\n  content: \"\\f2ab\";\r\n}\r\n.fa-snapchat-ghost:before {\r\n  content: \"\\f2ac\";\r\n}\r\n.fa-snapchat-square:before {\r\n  content: \"\\f2ad\";\r\n}\r\n.fa-pied-piper:before {\r\n  content: \"\\f2ae\";\r\n}\r\n.fa-first-order:before {\r\n  content: \"\\f2b0\";\r\n}\r\n.fa-yoast:before {\r\n  content: \"\\f2b1\";\r\n}\r\n.fa-themeisle:before {\r\n  content: \"\\f2b2\";\r\n}\r\n.fa-google-plus-circle:before,\r\n.fa-google-plus-official:before {\r\n  content: \"\\f2b3\";\r\n}\r\n.fa-fa:before,\r\n.fa-font-awesome:before {\r\n  content: \"\\f2b4\";\r\n}\r\n.fa-handshake-o:before {\r\n  content: \"\\f2b5\";\r\n}\r\n.fa-envelope-open:before {\r\n  content: \"\\f2b6\";\r\n}\r\n.fa-envelope-open-o:before {\r\n  content: \"\\f2b7\";\r\n}\r\n.fa-linode:before {\r\n  content: \"\\f2b8\";\r\n}\r\n.fa-address-book:before {\r\n  content: \"\\f2b9\";\r\n}\r\n.fa-address-book-o:before {\r\n  content: \"\\f2ba\";\r\n}\r\n.fa-vcard:before,\r\n.fa-address-card:before {\r\n  content: \"\\f2bb\";\r\n}\r\n.fa-vcard-o:before,\r\n.fa-address-card-o:before {\r\n  content: \"\\f2bc\";\r\n}\r\n.fa-user-circle:before {\r\n  content: \"\\f2bd\";\r\n}\r\n.fa-user-circle-o:before {\r\n  content: \"\\f2be\";\r\n}\r\n.fa-user-o:before {\r\n  content: \"\\f2c0\";\r\n}\r\n.fa-id-badge:before {\r\n  content: \"\\f2c1\";\r\n}\r\n.fa-drivers-license:before,\r\n.fa-id-card:before {\r\n  content: \"\\f2c2\";\r\n}\r\n.fa-drivers-license-o:before,\r\n.fa-id-card-o:before {\r\n  content: \"\\f2c3\";\r\n}\r\n.fa-quora:before {\r\n  content: \"\\f2c4\";\r\n}\r\n.fa-free-code-camp:before {\r\n  content: \"\\f2c5\";\r\n}\r\n.fa-telegram:before {\r\n  content: \"\\f2c6\";\r\n}\r\n.fa-thermometer-4:before,\r\n.fa-thermometer:before,\r\n.fa-thermometer-full:before {\r\n  content: \"\\f2c7\";\r\n}\r\n.fa-thermometer-3:before,\r\n.fa-thermometer-three-quarters:before {\r\n  content: \"\\f2c8\";\r\n}\r\n.fa-thermometer-2:before,\r\n.fa-thermometer-half:before {\r\n  content: \"\\f2c9\";\r\n}\r\n.fa-thermometer-1:before,\r\n.fa-thermometer-quarter:before {\r\n  content: \"\\f2ca\";\r\n}\r\n.fa-thermometer-0:before,\r\n.fa-thermometer-empty:before {\r\n  content: \"\\f2cb\";\r\n}\r\n.fa-shower:before {\r\n  content: \"\\f2cc\";\r\n}\r\n.fa-bathtub:before,\r\n.fa-s15:before,\r\n.fa-bath:before {\r\n  content: \"\\f2cd\";\r\n}\r\n.fa-podcast:before {\r\n  content: \"\\f2ce\";\r\n}\r\n.fa-window-maximize:before {\r\n  content: \"\\f2d0\";\r\n}\r\n.fa-window-minimize:before {\r\n  content: \"\\f2d1\";\r\n}\r\n.fa-window-restore:before {\r\n  content: \"\\f2d2\";\r\n}\r\n.fa-times-rectangle:before,\r\n.fa-window-close:before {\r\n  content: \"\\f2d3\";\r\n}\r\n.fa-times-rectangle-o:before,\r\n.fa-window-close-o:before {\r\n  content: \"\\f2d4\";\r\n}\r\n.fa-bandcamp:before {\r\n  content: \"\\f2d5\";\r\n}\r\n.fa-grav:before {\r\n  content: \"\\f2d6\";\r\n}\r\n.fa-etsy:before {\r\n  content: \"\\f2d7\";\r\n}\r\n.fa-imdb:before {\r\n  content: \"\\f2d8\";\r\n}\r\n.fa-ravelry:before {\r\n  content: \"\\f2d9\";\r\n}\r\n.fa-eercast:before {\r\n  content: \"\\f2da\";\r\n}\r\n.fa-microchip:before {\r\n  content: \"\\f2db\";\r\n}\r\n.fa-snowflake-o:before {\r\n  content: \"\\f2dc\";\r\n}\r\n.fa-superpowers:before {\r\n  content: \"\\f2dd\";\r\n}\r\n.fa-wpexplorer:before {\r\n  content: \"\\f2de\";\r\n}\r\n.fa-meetup:before {\r\n  content: \"\\f2e0\";\r\n}\r\n.sr-only {\r\n  position: absolute;\r\n  width: 1px;\r\n  height: 1px;\r\n  padding: 0;\r\n  margin: -1px;\r\n  overflow: hidden;\r\n  clip: rect(0, 0, 0, 0);\r\n  border: 0;\r\n}\r\n.sr-only-focusable:active,\r\n.sr-only-focusable:focus {\r\n  position: static;\r\n  width: auto;\r\n  height: auto;\r\n  margin: 0;\r\n  overflow: visible;\r\n  clip: auto;\r\n}\r\n/* $colors\r\n ------------------------------------------*/\r\n.btn-adn {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #d87a68;\n  border-color: #d87a68; }\r\n.btn-adn:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #ce563f;\n    border-color: #cb4f37; }\r\n.btn-adn:focus, .btn-adn.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(216, 122, 104, 0.5);\n            box-shadow: 0 0 0 2px rgba(216, 122, 104, 0.5); }\r\n.btn-adn.disabled, .btn-adn:disabled {\n    background-color: #d87a68;\n    border-color: #d87a68; }\r\n.btn-adn:active, .btn-adn.active,\n  .show > .btn-adn.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #ce563f;\n    background-image: none;\n    border-color: #cb4f37; }\r\n.btn-bitbucket {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #205081;\n  border-color: #205081; }\r\n.btn-bitbucket:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #163758;\n    border-color: #143250; }\r\n.btn-bitbucket:focus, .btn-bitbucket.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(32, 80, 129, 0.5);\n            box-shadow: 0 0 0 2px rgba(32, 80, 129, 0.5); }\r\n.btn-bitbucket.disabled, .btn-bitbucket:disabled {\n    background-color: #205081;\n    border-color: #205081; }\r\n.btn-bitbucket:active, .btn-bitbucket.active,\n  .show > .btn-bitbucket.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #163758;\n    background-image: none;\n    border-color: #143250; }\r\n.btn-dropbox {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #1087dd;\n  border-color: #1087dd; }\r\n.btn-dropbox:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #0d6aad;\n    border-color: #0c64a4; }\r\n.btn-dropbox:focus, .btn-dropbox.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(16, 135, 221, 0.5);\n            box-shadow: 0 0 0 2px rgba(16, 135, 221, 0.5); }\r\n.btn-dropbox.disabled, .btn-dropbox:disabled {\n    background-color: #1087dd;\n    border-color: #1087dd; }\r\n.btn-dropbox:active, .btn-dropbox.active,\n  .show > .btn-dropbox.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #0d6aad;\n    background-image: none;\n    border-color: #0c64a4; }\r\n.btn-facebook {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #3b5998;\n  border-color: #3b5998; }\r\n.btn-facebook:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2d4373;\n    border-color: #2a3f6c; }\r\n.btn-facebook:focus, .btn-facebook.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(59, 89, 152, 0.5);\n            box-shadow: 0 0 0 2px rgba(59, 89, 152, 0.5); }\r\n.btn-facebook.disabled, .btn-facebook:disabled {\n    background-color: #3b5998;\n    border-color: #3b5998; }\r\n.btn-facebook:active, .btn-facebook.active,\n  .show > .btn-facebook.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2d4373;\n    background-image: none;\n    border-color: #2a3f6c; }\r\n.btn-flickr {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #ff0084;\n  border-color: #ff0084; }\r\n.btn-flickr:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc006a;\n    border-color: #c20064; }\r\n.btn-flickr:focus, .btn-flickr.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(255, 0, 132, 0.5);\n            box-shadow: 0 0 0 2px rgba(255, 0, 132, 0.5); }\r\n.btn-flickr.disabled, .btn-flickr:disabled {\n    background-color: #ff0084;\n    border-color: #ff0084; }\r\n.btn-flickr:active, .btn-flickr.active,\n  .show > .btn-flickr.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc006a;\n    background-image: none;\n    border-color: #c20064; }\r\n.btn-foursquare {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f94877;\n  border-color: #f94877; }\r\n.btn-foursquare:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #f71752;\n    border-color: #f70d4b; }\r\n.btn-foursquare:focus, .btn-foursquare.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(249, 72, 119, 0.5);\n            box-shadow: 0 0 0 2px rgba(249, 72, 119, 0.5); }\r\n.btn-foursquare.disabled, .btn-foursquare:disabled {\n    background-color: #f94877;\n    border-color: #f94877; }\r\n.btn-foursquare:active, .btn-foursquare.active,\n  .show > .btn-foursquare.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #f71752;\n    background-image: none;\n    border-color: #f70d4b; }\r\n.btn-github {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #444;\n  border-color: #444; }\r\n.btn-github:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2b2a2a;\n    border-color: #252525; }\r\n.btn-github:focus, .btn-github.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(68, 68, 68, 0.5);\n            box-shadow: 0 0 0 2px rgba(68, 68, 68, 0.5); }\r\n.btn-github.disabled, .btn-github:disabled {\n    background-color: #444;\n    border-color: #444; }\r\n.btn-github:active, .btn-github.active,\n  .show > .btn-github.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2b2a2a;\n    background-image: none;\n    border-color: #252525; }\r\n.btn-google {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #dd4b39;\n  border-color: #dd4b39; }\r\n.btn-google:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #c23321;\n    border-color: #b93120; }\r\n.btn-google:focus, .btn-google.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(221, 75, 57, 0.5);\n            box-shadow: 0 0 0 2px rgba(221, 75, 57, 0.5); }\r\n.btn-google.disabled, .btn-google:disabled {\n    background-color: #dd4b39;\n    border-color: #dd4b39; }\r\n.btn-google:active, .btn-google.active,\n  .show > .btn-google.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #c23321;\n    background-image: none;\n    border-color: #b93120; }\r\n.btn-instagram {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #3f729b;\n  border-color: #3f729b; }\r\n.btn-instagram:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #305777;\n    border-color: #2d526f; }\r\n.btn-instagram:focus, .btn-instagram.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(63, 114, 155, 0.5);\n            box-shadow: 0 0 0 2px rgba(63, 114, 155, 0.5); }\r\n.btn-instagram.disabled, .btn-instagram:disabled {\n    background-color: #3f729b;\n    border-color: #3f729b; }\r\n.btn-instagram:active, .btn-instagram.active,\n  .show > .btn-instagram.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #305777;\n    background-image: none;\n    border-color: #2d526f; }\r\n.btn-linkedin {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #007bb6;\n  border-color: #007bb6; }\r\n.btn-linkedin:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #005983;\n    border-color: #005279; }\r\n.btn-linkedin:focus, .btn-linkedin.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(0, 123, 182, 0.5);\n            box-shadow: 0 0 0 2px rgba(0, 123, 182, 0.5); }\r\n.btn-linkedin.disabled, .btn-linkedin:disabled {\n    background-color: #007bb6;\n    border-color: #007bb6; }\r\n.btn-linkedin:active, .btn-linkedin.active,\n  .show > .btn-linkedin.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #005983;\n    background-image: none;\n    border-color: #005279; }\r\n.btn-microsoft {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #2672ec;\n  border-color: #2672ec; }\r\n.btn-microsoft:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #125acd;\n    border-color: #1156c4; }\r\n.btn-microsoft:focus, .btn-microsoft.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(38, 114, 236, 0.5);\n            box-shadow: 0 0 0 2px rgba(38, 114, 236, 0.5); }\r\n.btn-microsoft.disabled, .btn-microsoft:disabled {\n    background-color: #2672ec;\n    border-color: #2672ec; }\r\n.btn-microsoft:active, .btn-microsoft.active,\n  .show > .btn-microsoft.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #125acd;\n    background-image: none;\n    border-color: #1156c4; }\r\n.btn-odnoklassniki {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f4731c;\n  border-color: #f4731c; }\r\n.btn-odnoklassniki:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #d35b0a;\n    border-color: #c9570a; }\r\n.btn-odnoklassniki:focus, .btn-odnoklassniki.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(244, 115, 28, 0.5);\n            box-shadow: 0 0 0 2px rgba(244, 115, 28, 0.5); }\r\n.btn-odnoklassniki.disabled, .btn-odnoklassniki:disabled {\n    background-color: #f4731c;\n    border-color: #f4731c; }\r\n.btn-odnoklassniki:active, .btn-odnoklassniki.active,\n  .show > .btn-odnoklassniki.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #d35b0a;\n    background-image: none;\n    border-color: #c9570a; }\r\n.btn-openid {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f7931e;\n  border-color: #f7931e; }\r\n.btn-openid:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #da7908;\n    border-color: #d07407; }\r\n.btn-openid:focus, .btn-openid.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(247, 147, 30, 0.5);\n            box-shadow: 0 0 0 2px rgba(247, 147, 30, 0.5); }\r\n.btn-openid.disabled, .btn-openid:disabled {\n    background-color: #f7931e;\n    border-color: #f7931e; }\r\n.btn-openid:active, .btn-openid.active,\n  .show > .btn-openid.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #da7908;\n    background-image: none;\n    border-color: #d07407; }\r\n.btn-pinterest {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #cb2027;\n  border-color: #cb2027; }\r\n.btn-pinterest:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #9f191f;\n    border-color: #96181d; }\r\n.btn-pinterest:focus, .btn-pinterest.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(203, 32, 39, 0.5);\n            box-shadow: 0 0 0 2px rgba(203, 32, 39, 0.5); }\r\n.btn-pinterest.disabled, .btn-pinterest:disabled {\n    background-color: #cb2027;\n    border-color: #cb2027; }\r\n.btn-pinterest:active, .btn-pinterest.active,\n  .show > .btn-pinterest.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #9f191f;\n    background-image: none;\n    border-color: #96181d; }\r\n.btn-reddit {\n  color: #000;\n  background-color: #eff7ff;\n  border-color: #eff7ff; }\r\n.btn-reddit:hover {\n    color: #000;\n    background-color: #bcdeff;\n    border-color: #b2d8ff; }\r\n.btn-reddit:focus, .btn-reddit.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(239, 247, 255, 0.5);\n            box-shadow: 0 0 0 2px rgba(239, 247, 255, 0.5); }\r\n.btn-reddit.disabled, .btn-reddit:disabled {\n    background-color: #eff7ff;\n    border-color: #eff7ff; }\r\n.btn-reddit:active, .btn-reddit.active,\n  .show > .btn-reddit.dropdown-toggle {\n    color: #000;\n    background-color: #bcdeff;\n    background-image: none;\n    border-color: #b2d8ff; }\r\n.btn-soundcloud {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #f50;\n  border-color: #f50; }\r\n.btn-soundcloud:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc4400;\n    border-color: #c24100; }\r\n.btn-soundcloud:focus, .btn-soundcloud.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(255, 85, 0, 0.5);\n            box-shadow: 0 0 0 2px rgba(255, 85, 0, 0.5); }\r\n.btn-soundcloud.disabled, .btn-soundcloud:disabled {\n    background-color: #f50;\n    border-color: #f50; }\r\n.btn-soundcloud:active, .btn-soundcloud.active,\n  .show > .btn-soundcloud.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #cc4400;\n    background-image: none;\n    border-color: #c24100; }\r\n.btn-tumblr {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #2c4762;\n  border-color: #2c4762; }\r\n.btn-tumblr:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1c2e3f;\n    border-color: #192838; }\r\n.btn-tumblr:focus, .btn-tumblr.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(44, 71, 98, 0.5);\n            box-shadow: 0 0 0 2px rgba(44, 71, 98, 0.5); }\r\n.btn-tumblr.disabled, .btn-tumblr:disabled {\n    background-color: #2c4762;\n    border-color: #2c4762; }\r\n.btn-tumblr:active, .btn-tumblr.active,\n  .show > .btn-tumblr.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1c2e3f;\n    background-image: none;\n    border-color: #192838; }\r\n.btn-twitter {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #55acee;\n  border-color: #55acee; }\r\n.btn-twitter:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2795e9;\n    border-color: #1d91e8; }\r\n.btn-twitter:focus, .btn-twitter.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(85, 172, 238, 0.5);\n            box-shadow: 0 0 0 2px rgba(85, 172, 238, 0.5); }\r\n.btn-twitter.disabled, .btn-twitter:disabled {\n    background-color: #55acee;\n    border-color: #55acee; }\r\n.btn-twitter:active, .btn-twitter.active,\n  .show > .btn-twitter.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #2795e9;\n    background-image: none;\n    border-color: #1d91e8; }\r\n.btn-vimeo {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #1ab7ea;\n  border-color: #1ab7ea; }\r\n.btn-vimeo:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1295bf;\n    border-color: #118eb6; }\r\n.btn-vimeo:focus, .btn-vimeo.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(26, 183, 234, 0.5);\n            box-shadow: 0 0 0 2px rgba(26, 183, 234, 0.5); }\r\n.btn-vimeo.disabled, .btn-vimeo:disabled {\n    background-color: #1ab7ea;\n    border-color: #1ab7ea; }\r\n.btn-vimeo:active, .btn-vimeo.active,\n  .show > .btn-vimeo.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #1295bf;\n    background-image: none;\n    border-color: #118eb6; }\r\n.btn-vk {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #587ea3;\n  border-color: #587ea3; }\r\n.btn-vk:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #466482;\n    border-color: #435f7b; }\r\n.btn-vk:focus, .btn-vk.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(88, 126, 163, 0.5);\n            box-shadow: 0 0 0 2px rgba(88, 126, 163, 0.5); }\r\n.btn-vk.disabled, .btn-vk:disabled {\n    background-color: #587ea3;\n    border-color: #587ea3; }\r\n.btn-vk:active, .btn-vk.active,\n  .show > .btn-vk.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #466482;\n    background-image: none;\n    border-color: #435f7b; }\r\n.btn-yahoo {\n  color: rgba(255, 255, 255, 0.8);\n  background-color: #720e9e;\n  border-color: #720e9e; }\r\n.btn-yahoo:hover {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #500a6f;\n    border-color: #490966; }\r\n.btn-yahoo:focus, .btn-yahoo.focus {\n    -webkit-box-shadow: 0 0 0 2px rgba(114, 14, 158, 0.5);\n            box-shadow: 0 0 0 2px rgba(114, 14, 158, 0.5); }\r\n.btn-yahoo.disabled, .btn-yahoo:disabled {\n    background-color: #720e9e;\n    border-color: #720e9e; }\r\n.btn-yahoo:active, .btn-yahoo.active,\n  .show > .btn-yahoo.dropdown-toggle {\n    color: rgba(255, 255, 255, 0.8);\n    background-color: #500a6f;\n    background-image: none;\n    border-color: #490966; }\r\n.btn-icon {\n  min-width: 160px; }\r\n.steps {\n  position: absolute;\n  margin: auto;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 600px;\n  height: 500px; }\r\n.example-radio-group {\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column; }\r\n.example-radio-button {\n  margin: 5px; }\r\n.example-selected-value {\n  margin: 15px 0; }\n"

/***/ }),

/***/ "./src/app/post-signup/post-signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PostSignupComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddBlogDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__("./src/app/config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__countries__ = __webpack_require__("./src/app/post-signup/countries.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__ = __webpack_require__("./node_modules/ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_toastr__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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

// declare var jquery:any; declare var $ :any;
// import * as $ from 'jquery/dist/jquery.min.js';








var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var PostSignupComponent = (function () {
    function PostSignupComponent(_formBuilder, dialog, http, toastr, vcr, _nav, route) {
        this._formBuilder = _formBuilder;
        this.dialog = dialog;
        this.http = http;
        this.toastr = toastr;
        this._nav = _nav;
        this.route = route;
        this.isLinear = false;
        this.countries = __WEBPACK_IMPORTED_MODULE_6__countries__["a" /* Country */].countries;
        this.step2Model = {};
        this.connected_social_medias = {};
        this.emailFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(EMAIL_REGEX)
        ]);
        this.categoryFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.rateFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(0|[1-9][0-9]*)$/)
        ]);
        this.rateFormControl1 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(0|[1-9][0-9]*)$/)
        ]);
        this.rateFormControl2 = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(/^(0|[1-9][0-9]*)$/)
        ]);
        this.dobFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.first_nameFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.last_nameFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.passwordFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.cityFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.stateFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
        ]);
        this.genders = [
            { show: 'Male', value: 'male' },
            { show: 'Female', value: 'female' }
        ];
        // selected_choice = '-id';
        this.choices = [
            { code: 'Automotive', name: 'Automotive' },
            { code: 'Beauty', name: 'Beauty' },
            { code: 'Business Finance', name: 'Business Finance' },
            { code: 'Crafts', name: 'Crafts' },
            { code: 'Education', name: 'Education' },
            { code: 'Entertainment Sports', name: 'Entertainment Sports' },
            { code: 'Event Partyplanning', name: 'Event Partyplanning' },
            { code: 'Family Parenting', name: 'Family Parenting' },
            { code: 'Fashion', name: 'Fashion' },
            { code: 'Fitness And Health', name: 'Fitness and Health' },
            { code: 'Food And Recipes', name: 'Food And Recipes' },
            { code: 'Green Living And Environment', name: 'Green Living And Environment' },
            { code: 'Home And Garden, DIY', name: 'Home And Garden, DIY' },
            { code: 'Lifestyle Personal', name: 'Lifestyle Personal' },
            { code: 'Music', name: 'Music' },
            { code: 'News, Law And Politics', name: 'News, Law And Politics' },
            { code: 'Pets', name: 'Pets' },
            { code: 'Retail Shopping', name: 'Retail Shopping' },
            { code: 'Sports', name: 'Sports' },
            { code: 'Technology And Social Media', name: 'Technology And Social Media' },
            { code: 'Travel', name: 'Travel' },
        ];
        this.toastr.setRootViewContainerRef(vcr);
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        console.log("jeshany ishaka", this.currentUser);
    }
    PostSignupComponent.prototype.checkSocialMedias = function () {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.get(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].api + '/check_social_medias/', { headers: headers })
            .subscribe(function (res) {
            _this.connected_social_medias = res.json();
        }, function (error) {
        });
    };
    PostSignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.checkSocialMedias();
        this.sub = this.route.queryParams.subscribe(function (params) {
            console.log(params);
            var code = params['code'];
            var currentUser = JSON.parse(localStorage.getItem('currentUser'));
            var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + currentUser.token });
            headers.append('Content-Type', 'application/json');
            _this.http.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].api + '/attach_instagram/', JSON.stringify({ 'code': code }), { headers: headers })
                .subscribe(function (res) {
                var newObj = __assign({ linkedin: res.json() }, currentUser);
                localStorage.setItem('currentUser', JSON.stringify(newObj));
                window.close();
            }, function (error) {
            });
            console.log(code);
        });
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]
        });
    };
    PostSignupComponent.prototype.post_onboarding_step1 = function (blog_url, blog_title) {
        var _this = this;
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].api + '/onboarding_step1/', { blog_url: blog_url, blog_title: blog_title }, { headers: headers })
            .subscribe(function (res) {
            currentUser.current_info_step = res.json()['current_info_step'];
            _this.currentUser = currentUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            _this.toastr.success('Blog Added');
        }, function (error) {
        });
    };
    // onLoginWithInstagram() {
    //   window.location.href = `https://api.instagram.com/oauth/authorize/?client_id=${env.INST_CLIENT_ID}&redirect_uri=${env.INST_REDIRECT_URI}&response_type=code`;
    // }
    PostSignupComponent.prototype.post_onboarding_step2 = function () {
        var _this = this;
        this.step2disable = true;
        var catList = [];
        catList.push(this.selected_category);
        this.step2Model['categories'] = catList;
        console.log(this.step2Model);
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].api + '/onboarding_step2/', this.step2Model, { headers: headers })
            .subscribe(function (res) {
            _this.step2disable = false;
            currentUser.current_info_step = res.json()['current_info_step'];
            _this.currentUser = currentUser;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            _this.toastr.success('Successfully saved!');
        }, function (error) {
        });
    };
    PostSignupComponent.prototype.post_onboarding_step3 = function () {
        var _this = this;
        this.step3disable = true;
        var headers = new __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* Headers */]({ 'Authorization': 'JWT ' + this.currentUser.token });
        headers.append('Content-Type', 'application/json');
        this.http.post(__WEBPACK_IMPORTED_MODULE_5__config__["a" /* Config */].api + '/onboarding_step3/', this.currentUser, { headers: headers })
            .subscribe(function (res) {
            // currentUser.current_info_step = res.json()['current_info_step'];
            _this.currentUser = res.json();
            localStorage.setItem('currentUser', JSON.stringify(res.json()));
            _this.toastr.success('Successfully saved!', 'Success');
            _this.step3disable = false;
            _this._nav.navigate(['']);
        }, function (error) {
        });
    };
    PostSignupComponent.prototype.showError = function () {
        if (this.currentUser.current_info_step === 1) {
            this.toastr.warning('Please add blog first');
        }
    };
    PostSignupComponent.prototype.saveStep2 = function () {
        if (!this.selected_category) {
            this.toastr.warning('Please select category');
        }
        else {
            this.post_onboarding_step2();
        }
    };
    PostSignupComponent.prototype.saveStep3 = function () {
        console.log(this.currentUser);
        if (!this.currentUser.country) {
            this.toastr.warning('Please select country');
        }
        else if (!this.currentUser.dob) {
            this.toastr.warning('Please select date of birth');
        }
        else if (!this.currentUser.gender) {
            this.toastr.warning('Please select gender');
        }
        else if (!this.currentUser.password) {
            this.toastr.error('Please set password');
        }
        else {
            this.post_onboarding_step3();
        }
        // else{
        //   this.post_onboarding_step2()
        // }
    };
    PostSignupComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(AddBlogDialog, {
            width: '550px',
            data: { blog_title: this.blog_title, blog_url: this.blog_url }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
            // this.animal = result;
            if (result) {
                _this.post_onboarding_step1(result.blog_url, result.blog_title);
            }
            console.log(result);
        });
    };
    PostSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-post-signup',
            template: __webpack_require__("./src/app/post-signup/post-signup.component.html"),
            styles: [__webpack_require__("./src/app/post-signup/post-signup.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"], __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* Http */],
            __WEBPACK_IMPORTED_MODULE_7_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"], __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]])
    ], PostSignupComponent);
    return PostSignupComponent;
}());

var url_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/;
var AddBlogDialog = (function () {
    function AddBlogDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.urlFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required,
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(url_REGEX)
        ]);
        this.tittleFormControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormControl"]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required
            // Validators.pattern(url_REGEX)
        ]);
    }
    AddBlogDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AddBlogDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'add-blog-dialog',
            template: __webpack_require__("./src/app/post-signup/add-blog-dialog.html"),
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatDialogRef */], Object])
    ], AddBlogDialog);
    return AddBlogDialog;
}());



/***/ }),

/***/ "./src/app/post-signup/post-signup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostSignupModule", function() { return PostSignupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__post_signup_routing__ = __webpack_require__("./src/app/post-signup/post-signup.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__post_signup_component__ = __webpack_require__("./src/app/post-signup/post-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import {FacebookModule, FacebookService} from 'ngx-facebook';


// import { SignupComponent } from './signup/signup.component';
// import { ForgotComponent } from './forgot/forgot.component';
// import { LockscreenComponent } from './lockscreen/lockscreen.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


// import {MatInputModule} from '@angular/material';
// import {MatButtonModule} from '@angular/material';

// import {MatDialogModule} from '@angular/material';

var PostSignupModule = (function () {
    function PostSignupModule() {
    }
    PostSignupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_4__post_signup_routing__["a" /* PostSignupRoutes */]),
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["ReactiveFormsModule"],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["s" /* MatStepperModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["p" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["k" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["n" /* MatRadioModule */]
                // BrowserAnimationsModule
                // FacebookModule
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_5__post_signup_component__["b" /* PostSignupComponent */], __WEBPACK_IMPORTED_MODULE_5__post_signup_component__["a" /* AddBlogDialog */]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__post_signup_component__["a" /* AddBlogDialog */]]
            // providers: [FacebookService]
        })
    ], PostSignupModule);
    return PostSignupModule;
}());



/***/ }),

/***/ "./src/app/post-signup/post-signup.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostSignupRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__post_signup_component__ = __webpack_require__("./src/app/post-signup/post-signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__guards_index__ = __webpack_require__("./src/app/_guards/index.ts");


var PostSignupRoutes = [
    {
        path: '',
        children: [{
                path: 'onboarding',
                component: __WEBPACK_IMPORTED_MODULE_0__post_signup_component__["b" /* PostSignupComponent */],
                canActivate: [__WEBPACK_IMPORTED_MODULE_1__guards_index__["a" /* AuthGuard */]]
            }]
    }
];


/***/ })

});
//# sourceMappingURL=post-signup.module.chunk.js.map