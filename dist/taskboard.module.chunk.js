webpackJsonp(["taskboard.module"],{

/***/ "./src/app/taskboard/taskboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"taskboard page-height\">\r\n  <div class=\"taskboard-wrapper\">\r\n    <div class=\"taskboard-list\">\r\n      <h6 class=\"taskboard-header\">Backlog</h6>\r\n      <div class=\"taskboard-cards\" [dragula]='\"task-group\"'>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Responsive bug</div>\r\n          <small class=\"card-text text-muted\">Etiam porta sem malesuada magna mollis euismod.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Travel checklist</div>\r\n          <small class=\"card-text text-muted\">Curabitur blandit tempus porttitor.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-success\">\r\n          <div class=\"taskboard-task-title\">Budget review</div>\r\n          <small class=\"card-text text-muted\">Cras justo odio, dapibus ac facilisis in, egestas eget quam. Integer posuere erat a ante venenatis dapibus posuere velit aliquet.</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"taskboard-wrapper\">\r\n    <div class=\"taskboard-list\">\r\n      <h6 class=\"taskboard-header\">To Do</h6>\r\n      <div class=\"taskboard-cards\" [dragula]='\"task-group\"'>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">QA Testing</div>\r\n          <small class=\"card-text text-muted\">Etiam porta sem malesuada magna mollis euismod.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-danger\">\r\n          <div class=\"taskboard-task-title\">Layout design</div>\r\n          <small class=\"card-text text-muted\">Sed posuere consectetur est at lobortis. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-info\">\r\n          <div class=\"taskboard-task-title\">Fix navigation menu</div>\r\n          <small class=\"card-text text-muted\">Donec sed odio dui.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Update bootstrap 4</div>\r\n          <small class=\"card-text text-muted\">Aenean lacinia bibendum nulla sed consectetur.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Run build tools</div>\r\n          <small class=\"card-text text-muted\">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-success\">\r\n          <div class=\"taskboard-task-title\">List article ideas</div>\r\n          <small class=\"card-text text-muted\">Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Reactjs fixes</div>\r\n          <small class=\"card-text text-muted\">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-warning\">\r\n          <div class=\"taskboard-task-title\">Implement SSL</div>\r\n          <small class=\"card-text text-muted\">Etiam porta sem malesuada magna mollis euismod.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-danger\">\r\n          <div class=\"taskboard-task-title\">Cleanup code</div>\r\n          <small class=\"card-text text-muted\">Sollicitudin</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"taskboard-wrapper\">\r\n    <div class=\"taskboard-list\">\r\n      <h6 class=\"taskboard-header\">In Process</h6>\r\n      <div class=\"taskboard-cards\" [dragula]='\"task-group\"'>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">QOS Assessment</div>\r\n          <small class=\"card-text text-muted\">Maecenas sed diam eget risus varius blandit sit amet non magna.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-warning\">\r\n          <div class=\"taskboard-task-title\">Schedule new tasks</div>\r\n          <small class=\"card-text text-muted\">Sed posuere consectetur est at lobortis.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Add dashboard variants</div>\r\n          <small class=\"card-text text-muted\">Nulla vitae elit libero, a pharetra augue.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Extended color scheme support</div>\r\n          <small class=\"card-text text-muted\">Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-info\">\r\n          <div class=\"taskboard-task-title\">Merge unit tests</div>\r\n          <small class=\"card-text text-muted\">Maecenas sed diam eget risus varius blandit sit amet non magna.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Test final version</div>\r\n          <small class=\"card-text text-muted\">Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"taskboard-wrapper\">\r\n    <div class=\"taskboard-list\">\r\n      <h6 class=\"taskboard-header\">In Review</h6>\r\n      <div class=\"taskboard-cards\" [dragula]='\"task-group\"'>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Integrate Angular 4</div>\r\n          <small class=\"card-text text-muted\">Nulla vitae elit libero, a pharetra augue.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Additional fields</div>\r\n          <small class=\"card-text text-muted\">Donec id elit non mi porta gravida at eget metus.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-danger\">\r\n          <div class=\"taskboard-task-title\">Draggable task board</div>\r\n          <small class=\"card-text text-muted\">Sed posuere consectetur est at lobortis.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-danger\">\r\n          <div class=\"taskboard-task-title\">Setup CI server</div>\r\n          <small class=\"card-text text-muted\">Maecenas faucibus mollis interdum.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Assign new tasks</div>\r\n          <small class=\"card-text text-muted\">Nullam quis risus eget urna mollis ornare vel eu leo.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Contact administrator</div>\r\n          <small class=\"card-text text-muted\">Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Commit changes</div>\r\n          <small class=\"card-text text-muted\">Aenean lacinia bibendum nulla sed consectetur.</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"taskboard-wrapper\">\r\n    <div class=\"taskboard-list\">\r\n      <h6 class=\"taskboard-header\">Done</h6>\r\n      <div class=\"taskboard-cards\" [dragula]='\"task-group\"'>\r\n        <div class=\"taskboard-task task-status-info\">\r\n          <div class=\"taskboard-task-title\">Store new files</div>\r\n          <small class=\"card-text text-muted\">Sed posuere consectetur est at lobortis.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Build landing page</div>\r\n          <small class=\"card-text text-muted\">Maecenas sed diam eget risus varius blandit sit amet non magna.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Setup basic layout</div>\r\n          <small class=\"card-text text-muted\">Vestibulum id ligula porta felis euismod semper.</small>\r\n        </div>\r\n        <div class=\"taskboard-task\">\r\n          <div class=\"taskboard-task-title\">Graphical fixes</div>\r\n          <small class=\"card-text text-muted\">Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</small>\r\n        </div>\r\n        <div class=\"taskboard-task task-status-warning\">\r\n          <div class=\"taskboard-task-title\">Email alerts</div>\r\n          <small class=\"card-text text-muted\">Donec sed odio dui.</small>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.scss":
/***/ (function(module, exports) {

module.exports = "/* $colors\r\n ------------------------------------------*/\n.taskboard {\n  overflow-x: auto;\n  overflow-y: hidden;\n  white-space: nowrap;\n  height: calc(100vh - 3.5rem);\n  padding: 1rem; }\n.taskboard .taskboard-wrapper {\n    width: 280px;\n    padding-right: 0.5rem;\n    padding-left: 0.5rem;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: inline-block;\n    vertical-align: top;\n    height: 100%; }\n.taskboard .taskboard-wrapper:first-child {\n      padding-left: 0; }\n.taskboard .taskboard-wrapper:last-child {\n      padding-right: 0; }\n.taskboard .taskboard-list {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    max-height: 100%;\n    white-space: normal;\n    background-color: rgba(0, 0, 0, 0.05);\n    border-radius: 0.125rem; }\n.taskboard .taskboard-header {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    font-family: \"Montserrat\", Helvetica, sans-serif;\n    text-transform: uppercase;\n    letter-spacing: 0.02rem;\n    font-size: 13px;\n    padding: 0.5rem 0.5rem 0; }\n.taskboard .taskboard-task {\n    position: relative;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    border: 0 solid rgba(0, 0, 0, 0.06);\n    border-radius: 0.125rem;\n    padding: 0.5rem;\n    margin-bottom: 0.5rem; }\n.taskboard .taskboard-task:last-child {\n      margin-bottom: 0; }\n.taskboard .taskboard-task:hover {\n      cursor: -webkit-grab;\n      cursor: grab; }\n.taskboard .taskboard-task:after {\n    content: \"\";\n    position: absolute;\n    border: 4px solid transparent;\n    top: 0;\n    border-top-width: 12px;\n    border-bottom-color: transparent;\n    right: 6px; }\n.taskboard .taskboard-task.task-status-success:after {\n    border-top-color: #00c853;\n    border-right-color: #00c853;\n    border-left-color: #00c853; }\n.taskboard .taskboard-task.task-status-info:after {\n    border-top-color: #0091ea;\n    border-right-color: #0091ea;\n    border-left-color: #0091ea; }\n.taskboard .taskboard-task.task-status-warning:after {\n    border-top-color: #ffd600;\n    border-right-color: #ffd600;\n    border-left-color: #ffd600; }\n.taskboard .taskboard-task.task-status-danger:after {\n    border-top-color: #d50000;\n    border-right-color: #d50000;\n    border-left-color: #d50000; }\n.taskboard .taskboard-cards {\n    padding: 0.5rem;\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n    overflow-x: hidden;\n    overflow-y: auto; }\n.taskboard .taskboard-task-title {\n    margin-bottom: 0.5rem; }\n:host {\n  padding: 0 !important;\n  height: 100%; }\n.gu-mirror {\n  background-color: white;\n  border-radius: 0.125rem;\n  padding: 0.5rem;\n  opacity: 1; }\n"

/***/ }),

/***/ "./src/app/taskboard/taskboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TaskboardComponent = (function () {
    function TaskboardComponent() {
    }
    TaskboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-taskboard',
            template: __webpack_require__("./src/app/taskboard/taskboard.component.html"),
            styles: [__webpack_require__("./src/app/taskboard/taskboard.component.scss")]
        })
    ], TaskboardComponent);
    return TaskboardComponent;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskboardModule", function() { return TaskboardModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__ = __webpack_require__("./node_modules/ng2-dragula/ng2-dragula.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__taskboard_component__ = __webpack_require__("./src/app/taskboard/taskboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__taskboard_routing__ = __webpack_require__("./src/app/taskboard/taskboard.routing.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var TaskboardModule = (function () {
    function TaskboardModule() {
    }
    TaskboardModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["CommonModule"], __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_5__taskboard_routing__["a" /* TaskboardRoutes */]), __WEBPACK_IMPORTED_MODULE_3_ng2_dragula_ng2_dragula__["DragulaModule"]],
            declarations: [__WEBPACK_IMPORTED_MODULE_4__taskboard_component__["a" /* TaskboardComponent */]]
        })
    ], TaskboardModule);
    return TaskboardModule;
}());



/***/ }),

/***/ "./src/app/taskboard/taskboard.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TaskboardRoutes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__taskboard_component__ = __webpack_require__("./src/app/taskboard/taskboard.component.ts");

var TaskboardRoutes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__taskboard_component__["a" /* TaskboardComponent */],
        data: {
            heading: 'Taskboard',
            removeFooter: true
        }
    }];


/***/ })

});
//# sourceMappingURL=taskboard.module.chunk.js.map