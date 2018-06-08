(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _client_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./client/add-client/add-client.component */ "./src/app/client/add-client/add-client.component.ts");
/* harmony import */ var _client_mse_mse_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./client/mse/mse.component */ "./src/app/client/mse/mse.component.ts");
/* harmony import */ var _client_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/client-detail/client-detail.component */ "./src/app/client/client-detail/client-detail.component.ts");
/* harmony import */ var _client_session_session_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/session/session.component */ "./src/app/client/session/session.component.ts");
/* harmony import */ var _client_treatment_data_treatment_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/treatment-data/treatment-data.component */ "./src/app/client/treatment-data/treatment-data.component.ts");
/* harmony import */ var _client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client/search-client/search-client.component */ "./src/app/client/search-client/search-client.component.ts");
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sessions/sessions.component */ "./src/app/sessions/sessions.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'client', component: _client_client_component__WEBPACK_IMPORTED_MODULE_3__["ClientComponent"], children: [
            { path: '', redirectTo: 'search', pathMatch: 'full' },
            { path: 'add', component: _client_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_4__["AddClientComponent"] },
            { path: 'search', component: _client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_9__["SearchClientComponent"] },
            { path: ':id', component: _client_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_6__["ClientDetailComponent"] },
            { path: ':id/mse', component: _client_mse_mse_component__WEBPACK_IMPORTED_MODULE_5__["MseComponent"] },
            { path: ':id/sessions', component: _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_10__["SessionsComponent"] },
            { path: ':id/session/:sid', component: _client_session_session_component__WEBPACK_IMPORTED_MODULE_7__["SessionComponent"] },
            { path: ':id/treatment-data', component: _client_treatment_data_treatment_data_component__WEBPACK_IMPORTED_MODULE_8__["TreatmentDataComponent"] },
            { path: 'sessions', component: _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_10__["SessionsComponent"] }
        ] },
    { path: 'page-not-found', component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_11__["PageNotFoundComponent"] },
    { path: '**', redirectTo: '/page-not-found' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(appRoutes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  margin-top: 30px;\n}\n\ninput.ng-invalid.ng-touched, select.ng-invalid.ng-touched {\n  border: 1px solid red;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<app-sidebar></app-sidebar>\n<div class=\"content-wrapper\">\n    <section class=\"content\">\n        <router-outlet></router-outlet>\n    </section>\n</div>\n<app-footer></app-footer>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.genders = ['male', 'female'];
        this.forbiddenUserNames = ['Goru', 'Gadha'];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.signUpForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'userdata': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, this.forbiddenNames.bind(this)]),
                'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email], this.forbiddenEmails),
            }),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('male'),
            'hobbies': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.signUpForm.valueChanges.subscribe(function (value) {
        });
        this.signUpForm.statusChanges.subscribe(function (status) {
        });
    };
    AppComponent.prototype.onSubmit = function () {
    };
    AppComponent.prototype.onAddHobby = function () {
        var control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required);
        this.signUpForm.get('hobbies').push(control);
    };
    AppComponent.prototype.onDeleteHobby = function (index) {
        this.signUpForm.get('hobbies').removeAt(index);
    };
    AppComponent.prototype.forbiddenNames = function (control) {
        if (this.forbiddenUserNames.indexOf(control.value) > -1) {
            return { 'namesIsForbidden': true };
        }
        return null; //in case of valid value send null, not false!
    };
    //async validator
    AppComponent.prototype.forbiddenEmails = function (control) {
        var promise = new Promise(function (resolve, reject) {
            setTimeout(function () {
                if (control.value === 'test@test.com') {
                    resolve({ 'forbiddenEmail': true });
                }
                else {
                    resolve(null);
                }
            }, 1500);
        });
        return promise;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./client/client.component */ "./src/app/client/client.component.ts");
/* harmony import */ var _client_mse_mse_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./client/mse/mse.component */ "./src/app/client/mse/mse.component.ts");
/* harmony import */ var _client_treatment_data_treatment_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./client/treatment-data/treatment-data.component */ "./src/app/client/treatment-data/treatment-data.component.ts");
/* harmony import */ var _client_session_session_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./client/session/session.component */ "./src/app/client/session/session.component.ts");
/* harmony import */ var _client_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./client/add-client/add-client.component */ "./src/app/client/add-client/add-client.component.ts");
/* harmony import */ var _client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./client/search-client/search-client.component */ "./src/app/client/search-client/search-client.component.ts");
/* harmony import */ var _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sessions/sessions.component */ "./src/app/sessions/sessions.component.ts");
/* harmony import */ var _side_notifications_side_notifications_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./side-notifications/side-notifications.component */ "./src/app/side-notifications/side-notifications.component.ts");
/* harmony import */ var _sessions_upcoming_sessions_upcoming_sessions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sessions/upcoming-sessions/upcoming-sessions.component */ "./src/app/sessions/upcoming-sessions/upcoming-sessions.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _client_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./client/client-detail/client-detail.component */ "./src/app/client/client-detail/client-detail.component.ts");
/* harmony import */ var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./page-not-found/page-not-found.component */ "./src/app/page-not-found/page-not-found.component.ts");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./error-page/error-page.component */ "./src/app/error-page/error-page.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/sidebar/sidebar.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./clients.service */ "./src/app/clients.service.ts");
/* harmony import */ var _directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./directive/dropdown.directive */ "./src/app/directive/dropdown.directive.ts");
/* harmony import */ var _pipes_fuppercase_pipe__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pipes/fuppercase.pipe */ "./src/app/pipes/fuppercase.pipe.ts");
/* harmony import */ var _utility_error_interceptor__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./utility/error.interceptor */ "./src/app/utility/error.interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _client_client_component__WEBPACK_IMPORTED_MODULE_6__["ClientComponent"],
                _client_mse_mse_component__WEBPACK_IMPORTED_MODULE_7__["MseComponent"],
                _client_treatment_data_treatment_data_component__WEBPACK_IMPORTED_MODULE_8__["TreatmentDataComponent"],
                _client_session_session_component__WEBPACK_IMPORTED_MODULE_9__["SessionComponent"],
                _client_add_client_add_client_component__WEBPACK_IMPORTED_MODULE_10__["AddClientComponent"],
                _client_search_client_search_client_component__WEBPACK_IMPORTED_MODULE_11__["SearchClientComponent"],
                _sessions_sessions_component__WEBPACK_IMPORTED_MODULE_12__["SessionsComponent"],
                _side_notifications_side_notifications_component__WEBPACK_IMPORTED_MODULE_13__["SideNotificationsComponent"],
                _sessions_upcoming_sessions_upcoming_sessions_component__WEBPACK_IMPORTED_MODULE_14__["UpcomingSessionsComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_16__["FooterComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_17__["DashboardComponent"],
                _client_client_detail_client_detail_component__WEBPACK_IMPORTED_MODULE_18__["ClientDetailComponent"],
                _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_19__["PageNotFoundComponent"],
                _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_20__["ErrorPageComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_21__["SidebarComponent"],
                _directive_dropdown_directive__WEBPACK_IMPORTED_MODULE_24__["DropdownDirective"],
                _pipes_fuppercase_pipe__WEBPACK_IMPORTED_MODULE_25__["FuppercasePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_22__["AppRoutingModule"]
            ],
            providers: [_clients_service__WEBPACK_IMPORTED_MODULE_23__["ClientsService"], _utility_error_interceptor__WEBPACK_IMPORTED_MODULE_26__["ErrorInterceptorProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client/add-client/add-client.component.css":
/*!************************************************************!*\
  !*** ./src/app/client/add-client/add-client.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/add-client/add-client.component.html":
/*!*************************************************************!*\
  !*** ./src/app/client/add-client/add-client.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h3>Add Client</h3>\n</div>\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <form [formGroup]=\"addClientForm\" (ngSubmit)=\"onSubmit()\">\n\n    <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">              \n            <div class=\"col-md-4\">\n      \n                <div class=\"form-group\">\n                  <label for=\"firstName\">First Name</label>\n                  <input type=\"text\" id=\"firstName\" formControlName=\"firstName\" class=\"form-control\">\n\n                  <span *ngIf=\"addClientForm.get('firstName').touched && \n                                        !addClientForm.get('firstName').valid\" class=\"help-block\">\n                    <span *ngIf=\"addClientForm.get('firstName').errors['pattern']\">\n                      Not a valid name.\n                    </span>\n                    <span *ngIf=\"addClientForm.get('firstName').errors['required']\">\n                      First name is required!\n                    </span>\n                  </span>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"gender\">Gender</label>\n                  <select class=\"form-control medium-select\">\n                    <option [value]=\"gender\" *ngFor=\"let gender of genders\">{{ gender | fuppercase:1 }}</option>\n                  </select>\n                </div>\n\n                <div class=\"form-group\">\n                  <label for=\"maritalstatus\">Marital Status</label>\n                  <select class=\"form-control medium-select\">\n                    <option [value]=\"maritalstatus\" \n                    *ngFor=\"let maritalstatus of maritalstatuses\">{{ maritalstatus | fuppercase:1 }}</option>\n                  </select>\n                </div>\n\n            </div> <!-- 1st column -->\n\n            <div class=\"col-md-4\">\n\n                <div class=\"form-group\">\n                    <label for=\"lastName\">Last Name</label>\n                    <input type=\"text\" id=\"lastName\" formControlName=\"lastName\" class=\"form-control\">\n  \n                    <span *ngIf=\"addClientForm.get('lastName').touched && \n                                            !addClientForm.get('lastName').valid\" class=\"help-block\">\n                      <span *ngIf=\"addClientForm.get('lastName').errors['pattern']\">\n                        Not a valid name.\n                      </span>\n                      <span *ngIf=\"addClientForm.get('lastName').errors['required']\">\n                        Last name is required!\n                      </span>\n                    </span>\n                  </div>\n\n                  <div class=\"form-group\">\n                      <label for=\"age\">Age</label>\n                      <input type=\"text\" id=\"age\" formControlName=\"age\" class=\"form-control\">\n    \n                      <span *ngIf=\"addClientForm.get('age').touched && \n                                        !addClientForm.get('age').valid\" class=\"help-block\">\n                        <span *ngIf=\"addClientForm.get('age').errors['pattern']\">\n                          Not a valid age.\n                        </span>\n                        <span *ngIf=\"addClientForm.get('age').errors['required']\">\n                          Age is required!\n                        </span>\n                      </span>\n                    </div>\n\n                    <div class=\"form-group\">\n                        <label for=\"mobile\">Mobile Number</label>\n                        <input type=\"text\" id=\"mobile\" formControlName=\"mobile\" class=\"form-control\">\n      \n                        <span *ngIf=\"addClientForm.get('mobile').touched && \n                                          !addClientForm.get('mobile').valid\" class=\"help-block\">\n                          <span *ngIf=\"addClientForm.get('mobile').errors['pattern']\">\n                            Not a valid mobile number.\n                          </span>\n                          <span *ngIf=\"addClientForm.get('mobile').errors['required']\">\n                            Mobile number is required!\n                          </span>\n                        </span>\n                      </div>\n            </div> <!-- second column -->\n          </div>  <!-- row -->\n        </div> <!-- card body -->\n        </div>  <!-- card -->\n        \n        <div class=\"card\">\n            <div class=\"card-body\">\n              <div class=\"row\">\n                <div class=\"col-md-4\">\n                  \n                    <div class=\"form-group\">\n                        <label for=\"reference\">Reference</label>\n                        <input type=\"text\" id=\"reference\" formControlName=\"reference\" class=\"form-control\">\n      \n                        <span *ngIf=\"addClientForm.get('reference').touched && \n                                                !addClientForm.get('reference').valid\" class=\"help-block\">\n                            Please add the name who referred here\n                        </span>\n                      </div>\n    \n                </div> <!-- 1st column -->\n                <div class=\"col-md-2\">\n                  \n                    <div class=\"form-group\">\n                      <label for=\"status\">Session Status</label>\n                      <select class=\"form-control medium-select\">\n                          <option [value]=\"status\" \n                          *ngFor=\"let status of sessionstatuses\">{{ status | fuppercase:1 }}</option>\n                        </select>\n                    </div>\n    \n                </div> <!-- 2nd column -->\n                <div class=\"col-md-3\">\n                  \n                    <div class=\"form-group\">\n                      <label for=\"followupDate\">Follow Up Date</label>\n                          <div class=\"input-group\">\n                            <div class=\"input-group-prepend\">\n                              <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\n                            </div>\n                            <input type=\"text\" id = \"datemask\" class=\"form-control\" \n                            formControlName=\"followupDate\"                            \n                            placeholder=\"dd/mm/yyyy\">\n                            <span \n                            *ngIf=\"!addClientForm.get('followupDate').valid && \n                            addClientForm.get('followupDate').touched\"\n                            class=\"help-block\">\n                            <span class=\"help-block text-danger\"\n                            *ngIf=\"addClientForm.get('followupDate').errors['incorrectDate']\">\n                              Invalid date!\n                            </span>\n                          </span>\n                          </div>\n                    </div>\n    \n                </div> <!-- 2nd column -->\n              </div> <!-- row -->\n            </div> <!--card body -->\n          </div> <!-- card -->\n\n        <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n              \n                <div class=\"form-group\">\n                    <label for=\"profession\">Profession</label>\n                    <input type=\"text\" id=\"profession\" formControlName=\"profession\" class=\"form-control\">\n  \n                    <span *ngIf=\"addClientForm.get('profession').touched && \n                                            !addClientForm.get('profession').valid\" class=\"help-block\">\n                        Not a valid profession!\n                    </span>\n                  </div>\n\n            </div> <!-- 1st column -->\n            <div class=\"col-md-4\">\n              \n                <div class=\"form-group\">\n                    <label for=\"education\">Education</label>\n                    <input type=\"text\" id=\"education\" formControlName=\"education\" class=\"form-control\">\n  \n                    <span *ngIf=\"addClientForm.get('education').touched && \n                                            !addClientForm.get('education').valid\" class=\"help-block\">\n                        Not a valid education!\n                    </span>\n                  </div>\n\n            </div> <!-- 2nd column -->\n          </div> <!-- row -->\n        </div> <!--card body -->\n      </div> <!-- card -->\n\n      <div class=\"card\">\n        <div class=\"card-body\">\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n      \n              <div class=\"form-group\">\n                <label for=\"address\">Address - First Line</label>\n                <textarea type=\"text\" id=\"address\" formControlName=\"address\" class=\"form-control\">\n                            </textarea>\n                <span *ngIf=\"addClientForm.get('address').touched && \n                             !addClientForm.get('address').valid\" class=\"help-block\">\n                  Not a valid address!\n                </span>\n              </div>      \n            </div>\n            <!-- 1st column -->\n            <div class=\"col-md-4\">\n      \n              <div class=\"form-group\">\n                <label for=\"pin\">PIN Code</label>\n                <input type=\"text\" id=\"pin\" formControlName=\"pin\" class=\"form-control\">\n      \n                <span *ngIf=\"addClientForm.get('pin').touched && \n                             !addClientForm.get('pin').valid\" class=\"help-block\">\n                  Not a valid pincode!\n                </span>\n              </div>\n            </div>\n            <!-- 2nd column -->\n          </div>\n\n          <div class=\"row\">\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"city\">City</label>\n                    <input type=\"text\" id=\"city\" formControlName=\"city\" class=\"form-control\">\n          \n                    <span *ngIf=\"addClientForm.get('city').touched && \n                                 !addClientForm.get('city').valid\" class=\"help-block\">\n                      <span *ngIf=\"addClientForm.get('city').errors['pattern']\">\n                        Not a valid city!\n                      </span>\n                      <span *ngIf=\"addClientForm.get('city').errors['required']\">\n                        City is required!\n                      </span>\n                    </span>\n                  </div>\n          \n                  <div class=\"form-group\">\n                    <label for=\"state\">State</label>\n                    <input type=\"text\" id=\"state\" formControlName=\"state\" class=\"form-control\">\n          \n                    <span *ngIf=\"addClientForm.get('state').touched && \n                                 !addClientForm.get('state').valid\" class=\"help-block\">\n                      <span *ngIf=\"addClientForm.get('state').errors['pattern']\">\n                        Not a valid state!\n                      </span>\n                      <span *ngIf=\"addClientForm.get('state').errors['required']\">\n                        State is required!\n                      </span>\n                    </span>\n                  </div> \n            </div>\n            <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <label for=\"country\">Country</label>\n                    <input type=\"text\" id=\"country\" formControlName=\"country\" class=\"form-control\">\n          \n                    <span *ngIf=\"addClientForm.get('country').touched && \n                                 !addClientForm.get('country').valid\" class=\"help-block\">\n                      <span *ngIf=\"addClientForm.get('country').errors['pattern']\">\n                        Not a valid Country!\n                      </span>\n                      <span *ngIf=\"addClientForm.get('country').errors['required']\">\n                        Country is required!\n                      </span>\n                    </span>\n                  </div>\n          \n                  <div class=\"form-group\">\n                    <label for=\"email\">Email</label>\n                    <input type=\"text\" id=\"email\" formControlName=\"email\" class=\"form-control\">\n          \n                    <span *ngIf=\"addClientForm.get('email').touched && \n                                 !addClientForm.get('email').valid\" class=\"help-block\">\n                      Not a valid email!\n                    </span>\n                  </div> \n            </div>\n          </div>\n          \n          <!-- row -->\n          <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <button class=\"btn btn-block btn-primary\" \n                     type=\"submit\" [disabled]=\"!addClientForm.valid\">Submit</button>\n                </div>\n              </div>\n              <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                      <button class=\"btn btn-block btn-warning\" \n                      (click)=\"onResetAddClientForm()\">Clear</button>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                        <a routerLink = \"/dashboard\" class=\"btn btn-block btn-danger\">Cancel</a>\n                    </div>\n                  </div>\n          </div>\n        </div>\n        <!--card body -->\n      </div>\n      <!-- card -->\n      \n      </form>\n    </div>\n  \n</section>"

/***/ }),

/***/ "./src/app/client/add-client/add-client.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/client/add-client/add-client.component.ts ***!
  \***********************************************************/
/*! exports provided: AddClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddClientComponent", function() { return AddClientComponent; });
/* harmony import */ var _utility_utility__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../utility/utility */ "./src/app/utility/utility.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AddClientComponent = /** @class */ (function () {
    function AddClientComponent() {
        this.genders = ['male', 'female', 'other'];
        this.maritalstatuses = ['married', 'unmarried'];
        this.sessionstatuses = ['ongoing', 'closed', 'left'];
    }
    AddClientComponent.prototype.ngOnInit = function () {
        this.createAddClientForm();
    };
    AddClientComponent.prototype.createAddClientForm = function () {
        this.addClientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]+")]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]+")]),
            'gender': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('male'),
            'age': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[1-9]{1}[0-9]+")]),
            'maritalstatus': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('married'),
            'mobile': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]{10}")]),
            'profession': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z -.]+")),
            'education': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z -.]+")),
            'reference': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z .]+")),
            'status': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('ongoing'),
            'followupDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _utility_utility__WEBPACK_IMPORTED_MODULE_0__["Utility"].validDate.bind(this)),
            'address': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9a-zA-Z -/\\,.]+")),
            'country': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]+")]),
            'city': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]+")]),
            'state': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z ]+")]),
            'pin': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[0-9]+")),
            'email': new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("[a-zA-Z0-9._\-]+@[a-zA-Z0-9.\-]+[.][a-zA-Z]+"))
        });
    };
    AddClientComponent.prototype.onResetAddClientForm = function () {
        this.createAddClientForm();
    };
    AddClientComponent.prototype.onSubmit = function () {
        console.log(this.addClientForm.value);
    };
    AddClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-client',
            template: __webpack_require__(/*! ./add-client.component.html */ "./src/app/client/add-client/add-client.component.html"),
            styles: [__webpack_require__(/*! ./add-client.component.css */ "./src/app/client/add-client/add-client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AddClientComponent);
    return AddClientComponent;
}());



/***/ }),

/***/ "./src/app/client/client-detail/client-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/client/client-detail/client-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/client-detail/client-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/client-detail/client-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h3 class=\"left-half\" *ngIf=\"!searchedClient\">Client Detail</h3>\n  <!-- <h5 class=\"left-half\" *ngIf=\"searchedClient\">{{ searchedClient.clientName }}</h5> -->\n</div>\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <div class=\"col-md-6\" *ngIf = \"searchedClient\">\n      <div class=\"box box-default\">\n        <div class=\"box-header with-border\">\n          <h3 class=\"box-title\">{{ searchedClient.clientName }}</h3>\n        </div>\n        <div class=\"box-body\">\n          <table class=\"table\">\n            <tbody>\n              <tr>\n                <td>Name</td>\n                <td>{{ searchedClient.clientName }}</td>\n                <td>Phone</td>\n                <td>{{ searchedClient.mobile }}</td>\n              </tr>\n              <tr>\n                <td>Email</td>\n                <td>{{ searchedClient.email }}</td>\n                <td>Age</td>\n                <td>{{ searchedClient.age > 0 ? searchedClient.age : '' }}</td>\n              </tr>\n              <tr>\n                <td>Follow Up Date</td>\n                <td>{{ searchedClient.followupdate }}</td>\n                <td>Status</td>\n                <td>{{ searchedClient.status }}</td>\n              </tr>\n            </tbody>\n          </table>\n          <hr>\n          <button class=\"btn btn-primary\" type=\"button\" data-toggle=\"modal\" data-target=\"#clientDetailModal\">\n            Tell Me More\n          </button>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-4\">\n      <!-- <div class=\"box box-default\">\n        <div class=\"box-body\"> -->\n      <div class=\"btn-group-vertical\">\n        <button class=\"btn btn-success\" type=\"button\">\n          <i class=\"fa fa-plus\" aria-hidden=\"true\"></i>\n          New Session\n        </button>\n        <button class=\"btn btn-lg btn-info\" type=\"button\">Treatment Data</button>\n        <button class=\"btn btn-lg btn-warning\" type=\"button\">Edit MSE</button>\n      </div>\n      <!-- </div>\n      </div> -->\n    </div>\n    <!-- Modal -->\n    <div class=\"modal fade\" id=\"clientDetailModal\">\n        <div class=\"modal-dialog\">\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n                <span aria-hidden=\"true\">&times;</span></button>\n              <h4 class=\"modal-title\">Default Modal</h4>\n            </div>\n            <div class=\"modal-body\">\n              <p>One fine body&hellip;</p>\n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"button\" class=\"btn btn-default pull-left\" data-dismiss=\"modal\">Close</button>\n            </div>\n          </div>\n          <!-- /.modal-content -->\n        </div>\n        <!-- /.modal-dialog -->\n      </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/client/client-detail/client-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/client-detail/client-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: ClientDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientDetailComponent", function() { return ClientDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../clients.service */ "./src/app/clients.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ClientDetailComponent = /** @class */ (function () {
    function ClientDetailComponent(route, clientsService) {
        this.route = route;
        this.clientsService = clientsService;
    }
    ClientDetailComponent.prototype.ngOnDestroy = function () {
        this.paramSubscription.unsubscribe();
    };
    ClientDetailComponent.prototype.openModal = function () {
        $("#clientDetailModal").modal('show');
    };
    ClientDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientId = +this.route.snapshot.params['id'];
        this.paramSubscription = this.route.params.subscribe(function (params) {
            _this.clientId = +params['id'];
        });
        this.clientsService.findClientById(this.clientId).subscribe(function (client) { return _this.searchedClient = client; });
    };
    ClientDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client-detail',
            template: __webpack_require__(/*! ./client-detail.component.html */ "./src/app/client/client-detail/client-detail.component.html"),
            styles: [__webpack_require__(/*! ./client-detail.component.css */ "./src/app/client/client-detail/client-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]])
    ], ClientDetailComponent);
    return ClientDetailComponent;
}());



/***/ }),

/***/ "./src/app/client/client.component.css":
/*!*********************************************!*\
  !*** ./src/app/client/client.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/client.component.html":
/*!**********************************************!*\
  !*** ./src/app/client/client.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/*!********************************************!*\
  !*** ./src/app/client/client.component.ts ***!
  \********************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/client/mse/mse.component.css":
/*!**********************************************!*\
  !*** ./src/app/client/mse/mse.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/mse/mse.component.html":
/*!***********************************************!*\
  !*** ./src/app/client/mse/mse.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  mse works!\n</p>\n"

/***/ }),

/***/ "./src/app/client/mse/mse.component.ts":
/*!*********************************************!*\
  !*** ./src/app/client/mse/mse.component.ts ***!
  \*********************************************/
/*! exports provided: MseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MseComponent", function() { return MseComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MseComponent = /** @class */ (function () {
    function MseComponent() {
    }
    MseComponent.prototype.ngOnInit = function () {
    };
    MseComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mse',
            template: __webpack_require__(/*! ./mse.component.html */ "./src/app/client/mse/mse.component.html"),
            styles: [__webpack_require__(/*! ./mse.component.css */ "./src/app/client/mse/mse.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MseComponent);
    return MseComponent;
}());



/***/ }),

/***/ "./src/app/client/search-client/search-client.component.css":
/*!******************************************************************!*\
  !*** ./src/app/client/search-client/search-client.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/search-client/search-client.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/client/search-client/search-client.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n    <h5 class=\"left-half\">Search Client</h5>\n</div>\n<section class=\"content\">\n    <div class=\"container-fluid\">\n    \n        <div class=\"card\"> \n                <div class=\"card-body\">\n                <form [formGroup]=\"searchClientForm\" (ngSubmit)=\"onSubmit()\">\n                 <div class=\"col-md-8\">\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"firstName\">First Name</label>\n                                <input type=\"text\" \n                                        id=\"firstName\" \n                                        formControlName=\"firstName\" \n                                        class=\"form-control\">\n\n                                <span *ngIf=\"searchClientForm.get('firstName').touched && \n                                        !searchClientForm.get('firstName').valid\" class=\"help-block\">\n                                    <span *ngIf=\"searchClientForm.get('firstName').errors['required']\">\n                                        First name is required in search!\n                                    </span>\n                                </span>\n                            </div>\n                        </div>\n                        <span class=\"left-onehalf\"></span>\n                        <div class=\"col-md-4\">\n                            <div class=\"form-group\">\n                                <label for=\"lastName\">Last Name</label>\n                                <input type=\"text\" \n                                        id=\"lastName\" \n                                        formControlName=\"lastName\" \n                                        class=\"form-control\">\n\n                                <span *ngIf=\"searchClientForm.get('lastName').touched &&\n                                        !searchClientForm.get('lastName').valid\" class=\"help-block\">\n                                    <span *ngIf=\"searchClientForm.get('lastName').errors['required']\">\n                                        Last name is required in search!\n                                    </span>\n                                </span>\n                            </div>\n                        </div>\n                    </div>\n                    <br><br>\n                    <div class=\"row\">\n                        <div class=\"col-md-4\">\n                            <div class=\"row\"></div>\n                            <div class=\"form-group\">\n                                <button class=\"btn btn-block btn-primary\" \n                                type=\"submit\" \n                                [disabled]=\"!searchClientForm.valid\">Search</button>\n                            </div>\n                        </div>\n                        <div class=\"col-md-4\">\n                            <div class=\"row\"></div>\n                            <div class=\"form-group\">\n                                <button type= \"button\"\n                                class=\"btn btn-block btn-secondary\" \n                                (click)=\"onResetSearchForm()\">Clear</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                </form>\n                <!-- <div class=\"row\"> -->\n                    <div class=\"col-md-4 top10\">\n                        <div class=\"row\"></div>\n                        <div class=\"row\"></div>\n                        <div class=\"form-group\">\n                            <button \n                            type=\"button\"\n                            class=\"btn btn-block btn-danger float-right\" \n                            (click)=\"onUpcomingSessions()\">Upcoming Sessions</button>\n                        </div>\n                    </div>\n                <!-- </div> -->\n                </div> <!-- card body -->\n        </div> <!-- card --> \n    \n    <!-- Search Result below -->\n    <!-- <div class=\"col-xs-12\"> -->\n    <div class=\"box\">\n        <div class=\"box-header\">\n            Search Result\n        </div>\n        <div class=\"box-body table-responsive no-padding\" *ngIf = \"clientSearchComplete\">\n                <table class=\"table table-hover\">\n                        <tr>\n                          <th>Name</th>                          \n                          <th>Follow Up Date</th>                          \n                          <th>Status</th>\n                        </tr>\n                        <tr>\n                          <td>\n                            <a [routerLink] = \"['../', searchedClient.clientId]\">{{ searchedClient.clientName }}</a>\n                          </td>                          \n                          <td>{{ searchedClient.followupdate }}</td>\n                          <td>\n                            <span \n                            [ngClass]=\"searchedClient.status === 'Y' ? 'label label-success' : \n                                            (searchedClient.status === 'C' ? 'label label-primary' : \n                                            'label label-warning' )\">\n                            {{ searchedClient.status }}\n                            </span></td>\n                        </tr>                        \n                      </table>\n            \n        </div>\n        <!-- Upcoming Sessions -->\n        <div class=\"box-body table-responsive no-padding\" *ngIf = \"sessionSearchComplete\">\n            <table class=\"table table-hover\">\n                <tr>\n                    <th>Name</th>                          \n                    <th>Follow Up Date</th>                          \n                    <th>Status</th>\n                </tr>\n                <tr *ngFor='let psySession of searchedUpcomingSessions'>\n                    <td>\n                        <a [routerLink] = \"['../', psySession.client.clientId]\">{{ psySession.client.clientName }}</a>\n                    </td>                          \n                    <td>{{  psySession.followupDate }}</td>\n                    <td>\n                    <span \n                    [ngClass]=\"psySession.client.status === 'Y' ? 'label label-success' : \n                                (psySession.client.status === 'C' ? 'label label-primary' : \n                                'label label-warning' )\">\n                    {{ psySession.client.status }}\n                    </span></td>\n                </tr>                        \n            </table>\n        </div>\n\n        <div class=\"box-body table-responsive\" *ngIf = \"errorMessage\">\n          <div class=\"row\">\n              <div class=\"col-md-12\">\n                <p class=\"text-red\">{{errorMessage}}</p>\n              </div>\n          </div>\n        </div>\n    </div>\n    <!-- </div> -->\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/client/search-client/search-client.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/client/search-client/search-client.component.ts ***!
  \*****************************************************************/
/*! exports provided: SearchClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchClientComponent", function() { return SearchClientComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _clients_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../clients.service */ "./src/app/clients.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchClientComponent = /** @class */ (function () {
    function SearchClientComponent(clientsService) {
        this.clientsService = clientsService;
        this.searchedUpcomingSessions = new Array();
        this.clientSearchComplete = false;
        this.sessionSearchComplete = false;
    }
    SearchClientComponent.prototype.ngOnInit = function () {
        this.createSearchForm();
    };
    SearchClientComponent.prototype.ngOnDestroy = function () {
        this.unsubscribe();
    };
    SearchClientComponent.prototype.unsubscribe = function () {
        if (this.searchSubscription)
            this.searchSubscription.unsubscribe();
        if (this.sessionSubscription)
            this.sessionSubscription.unsubscribe();
    };
    SearchClientComponent.prototype.onresetSearch = function () {
        this.unsubscribe();
        this.clientSearchComplete = false;
        this.sessionSearchComplete = false;
    };
    SearchClientComponent.prototype.createSearchForm = function () {
        this.searchClientForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'firstName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z ]+")]),
            'lastName': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern("[a-zA-Z ]+")])
        });
    };
    SearchClientComponent.prototype.onSubmit = function () {
        var _this = this;
        this.onresetSearch();
        this.searchSubscription = this.clientsService.searchClient(this.searchClientForm.value['firstName'], this.searchClientForm.value['lastName']).subscribe(function (client) { _this.searchedClient = client; _this.clientSearchComplete = true; }, function (error) { return _this.errorMessage = error; });
    };
    SearchClientComponent.prototype.onUpcomingSessions = function () {
        var _this = this;
        this.onresetSearch();
        this.searchedUpcomingSessions.splice(0, this.searchedUpcomingSessions.length);
        this.sessionSubscription = this.clientsService.findUpcomingSessions()
            .flatMap(function (psyArr) { return psyArr; })
            .flatMap(function (session) {
            _this.searchedUpcomingSessions.push(session);
            return _this.clientsService.findClientById(session.clientId);
        }).subscribe(function (client) {
            _this.searchedUpcomingSessions
                .filter(function (s) { return s.clientId === client.clientId; })
                .map(function (s) { return s.client = client; });
            _this.sessionSearchComplete = true;
        }, function (error) { return _this.errorMessage = error; });
    };
    SearchClientComponent.prototype.onResetSearchForm = function () {
        this.unsubscribe();
        this.createSearchForm();
    };
    SearchClientComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-client',
            template: __webpack_require__(/*! ./search-client.component.html */ "./src/app/client/search-client/search-client.component.html"),
            styles: [__webpack_require__(/*! ./search-client.component.css */ "./src/app/client/search-client/search-client.component.css")]
        }),
        __metadata("design:paramtypes", [_clients_service__WEBPACK_IMPORTED_MODULE_2__["ClientsService"]])
    ], SearchClientComponent);
    return SearchClientComponent;
}());



/***/ }),

/***/ "./src/app/client/session/session.component.css":
/*!******************************************************!*\
  !*** ./src/app/client/session/session.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/session/session.component.html":
/*!*******************************************************!*\
  !*** ./src/app/client/session/session.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"sessionForm\" (ngSubmit)=\"onSubmit()\">\n<div class=\"content-header\">\n  <h3>{{updateMode ? 'Update' : 'Create' }} Session for {{clientName}}</h3>\n</div>\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    \n    <div class=\"card\">\n        <div class=\"card-body\">\n            <div class=\"row\">              \n                <div class=\"col-md-4\">\n\n                    <div class=\"form-group\">\n                        <label for=\"sessionDate\">Session Date</label>\n                            <div class=\"input-group\">\n                              <div class=\"input-group-prepend\">\n                                <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\n                              </div>\n                              <input type=\"text\" class=\"form-control\"                              \n                              formControlName=\"sessionDate\"\n                              placeholder=\"dd/mm/yyyy\">                             \n                            </div>\n                            <span \n                                *ngIf=\"!sessionForm.get('sessionDate').valid && \n                                sessionForm.get('sessionDate').touched\"\n                                class=\"help-block\">\n                                <span class=\"help-block text-danger\"\n                                    *ngIf=\"sessionForm.get('sessionDate').errors['required']\">\n                                  Session date is required!\n                                </span>\n                                <span class=\"help-block text-danger\"\n                                    *ngIf=\"sessionForm.get('sessionDate').errors['incorrectDate']\">\n                                  Invalid date!\n                                </span>\n                              </span>\n                      </div>\n\n                      <div class=\"form-group\">\n                          <label for=\"impression\">Impression</label>\n                          <textarea id=\"impression\" \n                          formControlName=\"impression\" class=\"form-control\" rows=\"12\">\n                          </textarea>                          \n                        </div>\n\n                        <div class=\"form-group\">\n                            <label for=\"feedback\">Feedback</label>\n                            <textarea id=\"feedback\" \n                              formControlName=\"feedback\" \n                              class=\"form-control\" rows=\"12\">\n                            </textarea>\n                          </div>\n\n                      <div class=\"form-group\">\n                          <label for=\"followupDate\">Follow Up Date</label>\n                              <div class=\"input-group\">\n                                <div class=\"input-group-prepend\">\n                                  <span class=\"input-group-text\"><i class=\"fa fa-calendar\"></i></span>\n                                </div>\n                                <input type=\"text\" id = \"datemask\" class=\"form-control\" \n                                formControlName=\"followupDate\"                            \n                                placeholder=\"dd/mm/yyyy\">\n                                <span \n                                *ngIf=\"!sessionForm.get('followupDate').valid && \n                                sessionForm.get('followupDate').touched\"\n                                class=\"help-block\">\n                                <span class=\"help-block text-danger\"\n                                    *ngIf=\"sessionForm.get('followupDate').errors['incorrectDate']\">\n                                  Invalid date!\n                                </span>\n                              </span>\n                              </div>\n                        </div>\n\n                 </div>\n            </div> \n             <!-- row -->\n          <div class=\"row\">\n              <div class=\"col-md-4\">\n                <div class=\"form-group\">\n                    <button class=\"btn btn-block btn-primary\" \n                     type=\"submit\" [disabled]=\"!sessionForm.valid\">Submit</button>\n                </div>\n              </div>\n              <div class=\"col-md-2\">\n                  <div class=\"form-group\">\n                      <button class=\"btn btn-block btn-warning\" \n                      (click)=\"onResetCreateSessionForm()\">Clear</button>\n                  </div>\n                </div>\n                <div class=\"col-md-2\">\n                    <div class=\"form-group\">\n                        <a routerLink = \"/dashboard\" class=\"btn btn-block btn-danger\">Cancel</a>\n                    </div>\n                    <!-- //TODO This should go back to client/:id -->\n                  </div>\n          </div>     \n        </div>\n    </div>\n  </div>\n</section>\n</form>   \n\n "

/***/ }),

/***/ "./src/app/client/session/session.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/client/session/session.component.ts ***!
  \*****************************************************/
/*! exports provided: SessionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionComponent", function() { return SessionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _utility_utility__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utility/utility */ "./src/app/utility/utility.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SessionComponent = /** @class */ (function () {
    function SessionComponent() {
        this.clientName = "Namaruk Pinlimas";
        this.updateMode = false;
    }
    SessionComponent.prototype.ngOnInit = function () {
        this.createSessionForm();
    };
    SessionComponent.prototype.createSessionForm = function () {
        this.sessionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'sessionDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _utility_utility__WEBPACK_IMPORTED_MODULE_2__["Utility"].validDate.bind(this)]),
            'followupDate': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, _utility_utility__WEBPACK_IMPORTED_MODULE_2__["Utility"].validDate.bind(this)),
            'impression': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null),
            'feedback': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null)
        });
    };
    SessionComponent.prototype.onSubmit = function () {
        console.log(this.sessionForm.value);
    };
    SessionComponent.prototype.onResetCreateSessionForm = function () {
        this.createSessionForm();
    };
    SessionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-session',
            template: __webpack_require__(/*! ./session.component.html */ "./src/app/client/session/session.component.html"),
            styles: [__webpack_require__(/*! ./session.component.css */ "./src/app/client/session/session.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SessionComponent);
    return SessionComponent;
}());



/***/ }),

/***/ "./src/app/client/treatment-data/treatment-data.component.css":
/*!********************************************************************!*\
  !*** ./src/app/client/treatment-data/treatment-data.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/treatment-data/treatment-data.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/client/treatment-data/treatment-data.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  treatment-data works!\n</p>\n"

/***/ }),

/***/ "./src/app/client/treatment-data/treatment-data.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/client/treatment-data/treatment-data.component.ts ***!
  \*******************************************************************/
/*! exports provided: TreatmentDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreatmentDataComponent", function() { return TreatmentDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TreatmentDataComponent = /** @class */ (function () {
    function TreatmentDataComponent() {
    }
    TreatmentDataComponent.prototype.ngOnInit = function () {
    };
    TreatmentDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-treatment-data',
            template: __webpack_require__(/*! ./treatment-data.component.html */ "./src/app/client/treatment-data/treatment-data.component.html"),
            styles: [__webpack_require__(/*! ./treatment-data.component.css */ "./src/app/client/treatment-data/treatment-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TreatmentDataComponent);
    return TreatmentDataComponent;
}());



/***/ }),

/***/ "./src/app/clients.service.ts":
/*!************************************!*\
  !*** ./src/app/clients.service.ts ***!
  \************************************/
/*! exports provided: ClientsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientsService", function() { return ClientsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ClientsService = /** @class */ (function () {
    function ClientsService(httpClient) {
        this.httpClient = httpClient;
    }
    ClientsService.prototype.searchClient = function (f, l) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('fname', f).set('lname', l).set('search-by', 'name');
        return this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/clients/search/', { params: params });
    };
    ClientsService.prototype.findUpcomingSessions = function () {
        return this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/psy-session/upcoming/');
    };
    ClientsService.prototype.findClientById = function (clientId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', '' + clientId).set('search-by', 'id');
        return this.httpClient.get("" + _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiUrl + '/clients/search/', { params: params });
    };
    ClientsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ClientsService);
    return ClientsService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-header\">\n  <h5 class=\"left-half\">Dashboard</h5>\n</div>\n<section class=\"content\">\n  <div class=\"container-fluid\">\n    <!-- <div class=\"card card-default\"> -->\n      <div class=\"row\">\n        <div class=\"col-sm-4 col-md-2\">\n          <a routerLink = \"/client/search\" class=\"btn btn-primary\">\n            Search Client\n          </a>\n        </div>\n        <div class=\"col-sm-4 col-md-2\">\n          <a routerLink = \"/client/add\" class=\"btn btn-success\">\n            Add New Client\n          </a>\n        </div>\n      </div>\n      <div style=\"padding-top: 36px;\"></div>\n    <!-- </div> -->\n    <div class=\"card card-default\">\n      <div class=\"row\">\n        <div class=\"col-md-8\">\n          <div class=\"card card-default\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">\n                <i class=\"fa fa-warning\"></i>\n                Ongoing Sessions\n              </h3>\n            </div>\n            <!-- /.card-header -->\n            <div class=\"card-body\">\n              blah blah blah\n            </div>\n            <!-- /.card-body -->\n          </div>\n          <!-- /.card -->\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card card-default\">\n            <div class=\"card-header\">\n              <h3 class=\"card-title\">\n                <i class=\"fa fa-warning\"></i>\n                Notifications\n              </h3>\n            </div>\n            <!-- /.card-header -->\n            <div class=\"card-body\">\n              <!-- Info Boxes Style 2 -->\n              <div class=\"info-box mb-3 bg-warning\">\n                <span class=\"info-box-icon\">\n                  <i class=\"fa fa-tag\"></i>\n                </span>\n\n                <div class=\"info-box-content\">\n                  <span class=\"info-box-text\">Yet to Start Sessions</span>\n                </div>\n                <!-- /.info-box-content -->\n              </div>\n              <div class=\"info-box mb-3 bg-danger\">\n                <span class=\"info-box-icon\">\n                  <i class=\"fa fa-cloud-download\"></i>\n                </span>\n\n                <div class=\"info-box-content\">\n                  <span class=\"info-box-text\">Crossed Follow Up Date</span>\n                </div>\n                <!-- /.info-box-content -->\n              </div>\n              <!-- /.info-box -->\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/directive/dropdown.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/directive/dropdown.directive.ts ***!
  \*************************************************/
/*! exports provided: DropdownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownDirective", function() { return DropdownDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DropdownDirective = /** @class */ (function () {
    function DropdownDirective() {
        this.isOpen = false;
    }
    DropdownDirective.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])('class.open'),
        __metadata("design:type", Object)
    ], DropdownDirective.prototype, "isOpen", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('click'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], DropdownDirective.prototype, "toggleOpen", null);
    DropdownDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appDropdown]'
        })
    ], DropdownDirective);
    return DropdownDirective;
}());



/***/ }),

/***/ "./src/app/error-page/error-page.component.css":
/*!*****************************************************!*\
  !*** ./src/app/error-page/error-page.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/error-page/error-page.component.html":
/*!******************************************************!*\
  !*** ./src/app/error-page/error-page.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  error-page works!\n</p>\n"

/***/ }),

/***/ "./src/app/error-page/error-page.component.ts":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ErrorPageComponent = /** @class */ (function () {
    function ErrorPageComponent() {
    }
    ErrorPageComponent.prototype.ngOnInit = function () {
    };
    ErrorPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-error-page',
            template: __webpack_require__(/*! ./error-page.component.html */ "./src/app/error-page/error-page.component.html"),
            styles: [__webpack_require__(/*! ./error-page.component.css */ "./src/app/error-page/error-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ErrorPageComponent);
    return ErrorPageComponent;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <p>\n    footer works!\n  </p>  \n</footer>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n  <nav class=\"navbar navbar-static-top\">\n    <ul class=\"navbar-nav\">\n      <!-- <li class=\"nav-item\">\n        <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"push-menu\" role=\"button\"></a>\n      </li> -->\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\n      </li>\n    </ul>\n\n    <ul class=\"navbar-nav ml-auto\">\n      <li>\n        Welcome, Sahana Ray\n      </li>\n    </ul>\n\n  </nav>\n</header>\n\n\n<!-- Navbar \n <nav class=\"main-header-no-sidebar navbar navbar-expand bg-white navbar-light border-bottom\">\n   Left navbar links\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" data-widget=\"pushmenu\" href=\"#\"><i class=\"fa fa-bars\"></i></a>\n      </li>\n      <li class=\"nav-item d-none d-sm-inline-block\">\n        <a routerLink=\"/\" class=\"navbar-brand\">Touching Hand</a>\n      </li>\n    </ul> -->\n\n<!-- Right navbar links \n    <ul class=\"navbar-nav ml-auto\">\n      Welcome, Sahana Ray\n    </ul>\n  </nav>\n  navbar -->"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.css":
/*!*************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.html":
/*!**************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  page-not-found works!\n</p>\n"

/***/ }),

/***/ "./src/app/page-not-found/page-not-found.component.ts":
/*!************************************************************!*\
  !*** ./src/app/page-not-found/page-not-found.component.ts ***!
  \************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = /** @class */ (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent.prototype.ngOnInit = function () {
    };
    PageNotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-page-not-found',
            template: __webpack_require__(/*! ./page-not-found.component.html */ "./src/app/page-not-found/page-not-found.component.html"),
            styles: [__webpack_require__(/*! ./page-not-found.component.css */ "./src/app/page-not-found/page-not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pipes/fuppercase.pipe.ts":
/*!******************************************!*\
  !*** ./src/app/pipes/fuppercase.pipe.ts ***!
  \******************************************/
/*! exports provided: FuppercasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FuppercasePipe", function() { return FuppercasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FuppercasePipe = /** @class */ (function () {
    function FuppercasePipe() {
    }
    FuppercasePipe.prototype.transform = function (value, howmany) {
        if (value.length === 0 || howmany === 0)
            return value;
        return value.substr(0, howmany).toUpperCase() + value.slice(howmany, value.length);
    };
    FuppercasePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'fuppercase'
        })
    ], FuppercasePipe);
    return FuppercasePipe;
}());



/***/ }),

/***/ "./src/app/sessions/sessions.component.css":
/*!*************************************************!*\
  !*** ./src/app/sessions/sessions.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sessions/sessions.component.html":
/*!**************************************************!*\
  !*** ./src/app/sessions/sessions.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  sessions works!\n</p>\n"

/***/ }),

/***/ "./src/app/sessions/sessions.component.ts":
/*!************************************************!*\
  !*** ./src/app/sessions/sessions.component.ts ***!
  \************************************************/
/*! exports provided: SessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionsComponent", function() { return SessionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SessionsComponent = /** @class */ (function () {
    function SessionsComponent() {
    }
    SessionsComponent.prototype.ngOnInit = function () {
    };
    SessionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sessions',
            template: __webpack_require__(/*! ./sessions.component.html */ "./src/app/sessions/sessions.component.html"),
            styles: [__webpack_require__(/*! ./sessions.component.css */ "./src/app/sessions/sessions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SessionsComponent);
    return SessionsComponent;
}());



/***/ }),

/***/ "./src/app/sessions/upcoming-sessions/upcoming-sessions.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/sessions/upcoming-sessions/upcoming-sessions.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sessions/upcoming-sessions/upcoming-sessions.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/sessions/upcoming-sessions/upcoming-sessions.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  upcoming-sessions works!\n</p>\n"

/***/ }),

/***/ "./src/app/sessions/upcoming-sessions/upcoming-sessions.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/sessions/upcoming-sessions/upcoming-sessions.component.ts ***!
  \***************************************************************************/
/*! exports provided: UpcomingSessionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpcomingSessionsComponent", function() { return UpcomingSessionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UpcomingSessionsComponent = /** @class */ (function () {
    function UpcomingSessionsComponent() {
    }
    UpcomingSessionsComponent.prototype.ngOnInit = function () {
    };
    UpcomingSessionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-upcoming-sessions',
            template: __webpack_require__(/*! ./upcoming-sessions.component.html */ "./src/app/sessions/upcoming-sessions/upcoming-sessions.component.html"),
            styles: [__webpack_require__(/*! ./upcoming-sessions.component.css */ "./src/app/sessions/upcoming-sessions/upcoming-sessions.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UpcomingSessionsComponent);
    return UpcomingSessionsComponent;
}());



/***/ }),

/***/ "./src/app/side-notifications/side-notifications.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/side-notifications/side-notifications.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/side-notifications/side-notifications.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/side-notifications/side-notifications.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  side notification works!\n</p>"

/***/ }),

/***/ "./src/app/side-notifications/side-notifications.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/side-notifications/side-notifications.component.ts ***!
  \********************************************************************/
/*! exports provided: SideNotificationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNotificationsComponent", function() { return SideNotificationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SideNotificationsComponent = /** @class */ (function () {
    function SideNotificationsComponent() {
    }
    SideNotificationsComponent.prototype.ngOnInit = function () {
    };
    SideNotificationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-side-notifications',
            template: __webpack_require__(/*! ./side-notifications.component.html */ "./src/app/side-notifications/side-notifications.component.html"),
            styles: [__webpack_require__(/*! ./side-notifications.component.css */ "./src/app/side-notifications/side-notifications.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SideNotificationsComponent);
    return SideNotificationsComponent;
}());



/***/ }),

/***/ "./src/app/sidebar/sidebar.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.html":
/*!************************************************!*\
  !*** ./src/app/sidebar/sidebar.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Sidebar Container -->\n<aside class=\"main-sidebar sidebar-dark-primary\">\n  <div class=\"sidebar\">\n    <nav class=\"mt-2\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"tree\">\n        <li class=\"nav-item\">\n          <!-- Brand Logo -->\n          <a routerLink=\"dashboard\" class=\"brand-link\">\n            <span class=\"brand-text font-weight-light\">Touching Hands</span>\n          </a>\n        </li>\n        <li class=\"nav-item\">\n          <a routerLink=\"dashboard\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">\n              Dashboard\n            </a>\n      </li>\n        <li class=\"nav-item\">\n            <a routerLink=\"client/search\" [routerLinkActive]=\"['router-link-active']\" class=\"nav-link\">\n                Search Clients\n              </a>\n        </li>\n      </ul>\n    </nav>\n  </div>\n</aside>\n<!-- Sidebar \n  <div class=\"sidebar\">\n     Sidebar user panel (optional) \n    <div class=\"user-panel mt-3 pb-3 mb-3 d-flex\">\n      <div class=\"image\">\n        <img src=\"../../assets/image/user2-160x160.jpg\" class=\"img-circle elevation-2\" alt=\"User Image\">\n      </div>\n      <div class=\"info\">\n        <a href=\"#\" class=\"d-block\">Alexander Pierce</a>\n      </div>\n    </div>\n\n     Sidebar Menu \n    <nav class=\"mt-2\">\n      <ul class=\"nav nav-pills nav-sidebar flex-column\" data-widget=\"treeview\" role=\"menu\" data-accordion=\"false\">\n         Add icons to the links using the .nav-icon class\n             with font-awesome or any other icon font library \n        <li class=\"nav-item has-treeview menu-open\">\n          <a href=\"#\" class=\"nav-link active\">\n            <i class=\"nav-icon fa fa-dashboard\"></i>\n            <p>\n              Dashboard\n              <i class=\"right fa fa-angle-left\"></i>\n            </p>\n          </a>\n          <ul class=\"nav nav-treeview\">\n            <li class=\"nav-item\">\n              <a href=\"../../index.html\" class=\"nav-link active\">\n                <i class=\"fa fa-circle-o nav-icon\"></i>\n                <p>Dashboard v1</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"../../index2.html\" class=\"nav-link\">\n                <i class=\"fa fa-circle-o nav-icon\"></i>\n                <p>Dashboard v2</p>\n              </a>\n            </li>\n            <li class=\"nav-item\">\n              <a href=\"../../index3.html\" class=\"nav-link\">\n                <i class=\"fa fa-circle-o nav-icon\"></i>\n                <p>Dashboard v3</p>\n              </a>\n            </li>\n          </ul>\n        </li>        \n      </ul>\n    </nav>\n    /.sidebar-menu \n  </div>\n  sidebar \n</aside>-->"

/***/ }),

/***/ "./src/app/sidebar/sidebar.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidebar/sidebar.component.ts ***!
  \**********************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! ./sidebar.component.html */ "./src/app/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/utility/error.interceptor.ts":
/*!**********************************************!*\
  !*** ./src/app/utility/error.interceptor.ts ***!
  \**********************************************/
/*! exports provided: ErrorInterceptor, ErrorInterceptorProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptorProvider", function() { return ErrorInterceptorProvider; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/throw */ "./node_modules/rxjs-compat/_esm5/observable/throw.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




/**
 * Intercepts the HTTP responses, and in case that an error/exception is thrown, handles it
 * and extract the relevant information of it.
 */
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor() {
    }
    /**
     * Intercepts an outgoing HTTP request, executes it and handles any error that could be triggered in execution.
     * @see HttpInterceptor
     * @param req the outgoing HTTP request
     * @param next a HTTP request handler
     */
    ErrorInterceptor.prototype.intercept = function (req, next) {
        return next.handle(req)
            .catch(function (errorResponse) {
            var errMsg;
            if (errorResponse.error instanceof Error) {
                errMsg = errorResponse.error.message;
            }
            else {
                if (errorResponse.error != null) {
                    errMsg = errorResponse.error.responseMessage;
                }
                else {
                    errMsg = 'Error Message: Internal Technical Error occured';
                }
            }
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_2__["_throw"])(errMsg);
        });
    };
    ErrorInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());

/**
 * Provider POJO for the interceptor
 */
var ErrorInterceptorProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HTTP_INTERCEPTORS"],
    useClass: ErrorInterceptor,
    multi: true,
};


/***/ }),

/***/ "./src/app/utility/utility.ts":
/*!************************************!*\
  !*** ./src/app/utility/utility.ts ***!
  \************************************/
/*! exports provided: Utility */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Utility", function() { return Utility; });
var Utility = /** @class */ (function () {
    function Utility() {
    }
    Utility.validDate = function (control) {
        var datePattern = /^(0[1-9]|[12][0-9]|3[01])[\/](0[1-9]|1[012])[\/](19|20)\d\d$/;
        if (control.value !== null && !control.value.match(datePattern)) {
            return { 'incorrectDate': true };
        }
        return null; //in case of valid value send null, not false!
    };
    return Utility;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    apiUrl: "http://localhost:8090/onlinecounselling/service"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/devuser/dev/onlinecounselling/ui/touching-hand-ui-v0.1/touchinghand_ui/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map