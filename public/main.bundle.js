webpackJsonp([0,4],{

/***/ 1015:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(431);


/***/ },

/***/ 110:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_environments_environment__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_constants__ = __webpack_require__(542);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TokenService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TokenService = (function () {
    function TokenService(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    TokenService.prototype.loadToken = function () {
        return localStorage.getItem(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].clientCredentialTokenName);
    };
    TokenService.prototype.saveToken = function (access_token) {
        this.clearToken();
        localStorage.setItem(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].clientCredentialTokenName, access_token);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].clientCredentialTokenName);
    };
    TokenService.prototype.clearToken = function () {
        localStorage.removeItem(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].clientCredentialTokenName);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(true);
    };
    TokenService.prototype.saveCookie = function (cookie_value) {
        var cookieOption = { path: "/", domain: "." + __WEBPACK_IMPORTED_MODULE_4__common_constants__["a" /* Constants */].getDomainName(), expires: this.addDays(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].cookieExpireDays) };
        this.cookieService.putObject(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].clientCredentialCookieName, cookie_value, cookieOption);
    };
    TokenService.prototype.getCookie = function () {
        this.currentUser = {token: "sss"};//this.cookieService.getObject(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].clientCredentialCookieName);
        return (this.currentUser.token || "");
    };
    TokenService.prototype.clearCookie = function () {
        this.cookieService.remove(__WEBPACK_IMPORTED_MODULE_2_environments_environment__["a" /* environment */].clientCredentialCookieName);
    };
    TokenService.prototype.addDays = function (days) {
        var dt = new Date();
        dt.setDate(dt.getDate() + parseInt(days));
        return dt;
    };
    TokenService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"]) === 'function' && _b) || Object])
    ], TokenService);
    return TokenService;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/token.service.js.map

/***/ },

/***/ 232:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_httphelper_httphelper_service__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginService = (function () {
    function LoginService(http, httpHelperService) {
        this.http = http;
        this.httpHelperService = httpHelperService;
    }
    LoginService.prototype.getCurrentUser = function () {
        return localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : {};
    };
    LoginService.prototype.login = function (login) {
        //return this.http.get(environment.loginApi + '/' + login.username + '/' + login.password, this.httpHelperService.getAuthRequestOptionsArg())
        return this.http.get("../app/login/logindata.json", this.httpHelperService.getAuthRequestOptionsArg())
            .map(this.extractLoginData)
            .catch(this.handleLoginError);
    };
    LoginService.prototype.extractLoginData = function (res) {
        var body = res.json();
        if (body) {
            localStorage.setItem("user", JSON.stringify(body));
            return body;
        }
        else {
            throw new Error("Invalid username and password.");
        }
    };
    LoginService.prototype.handleError = function (error) {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    LoginService.prototype.handleLoginError = function (error) {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    LoginService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_httphelper_httphelper_service__["a" /* HttpHelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_httphelper_httphelper_service__["a" /* HttpHelperService */]) === 'function' && _b) || Object])
    ], LoginService);
    return LoginService;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/login.service.js.map

/***/ },

/***/ 233:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__token_token_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HttpHelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HttpHelperService = (function () {
    function HttpHelperService(tokenService) {
        this.tokenService = tokenService;
    }
    HttpHelperService.prototype.getAuthRequestOptionsArg = function (contentType) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        headers.append('Authorization', this.tokenService.getCookie());
        //if (contentType === 'json') {
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        //}
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        return options;
    };
    HttpHelperService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__token_token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__token_token_service__["a" /* TokenService */]) === 'function' && _a) || Object])
    ], HttpHelperService);
    return HttpHelperService;
    var _a;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/httphelper.service.js.map

/***/ },

/***/ 234:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false,
    clientCredentialTokenName: "sagacito_access_token",
    clientCredentialCookieName: "sagacito_cookie_name",
    cookieExpireDays: 3,
    dashboardApi: "http://rajiv-test.herokuapp.com/dashboard",
    onboardApi: 'http://login.sg.com:3000/api/onboard/'
};
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/environment.js.map

/***/ },

/***/ 353:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(547);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_token_token_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = (function () {
    function LoginComponent(route, router, loginService, tokenService) {
        this.route = route;
        this.router = router;
        this.loginService = loginService;
        this.tokenService = tokenService;
        this.login = new __WEBPACK_IMPORTED_MODULE_2__login__["a" /* Login */]();
    }
    LoginComponent.prototype.ngOnInit = function () {
        // Get the modal
        var modal = document.getElementById('forgotPasswordDiv');
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        };
    };
    LoginComponent.prototype.onLogin = function (event) {
        var _this = this;
        this.errorMessage = "";
        this.loginService.login(this.login)
            .subscribe(function (login) {
            if (login.username == _this.login.username && login.password == _this.login.password) {
                _this.login = login;
                // save token 
                //this.tokenService.saveToken(login.accessToken);
                _this.router.navigate(['/onboard']);
            }
            else {
                _this.errorMessage = "Invalid username and password.";
            }
        }, function (error) { _this.errorMessage = error; });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(729),
            styles: [__webpack_require__(721)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__services_token_token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_token_token_service__["a" /* TokenService */]) === 'function' && _d) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/login.component.js.map

/***/ },

/***/ 354:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnBoardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnBoardComponent = (function () {
    function OnBoardComponent() {
    }
    OnBoardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-onboard',
            template: __webpack_require__(731)
        }), 
        __metadata('design:paramtypes', [])
    ], OnBoardComponent);
    return OnBoardComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/onboard.component.js.map

/***/ },

/***/ 355:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnBoardHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnBoardHomeComponent = (function () {
    function OnBoardHomeComponent() {
    }
    OnBoardHomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-onboard-home',
            template: __webpack_require__(732)
        }), 
        __metadata('design:paramtypes', [])
    ], OnBoardHomeComponent);
    return OnBoardHomeComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/onboard.home.component.js.map

/***/ },

/***/ 356:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnBoardListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OnBoardListComponent = (function () {
    function OnBoardListComponent() {
    }
    OnBoardListComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-onboard-list',
            template: __webpack_require__(733)
        }), 
        __metadata('design:paramtypes', [])
    ], OnBoardListComponent);
    return OnBoardListComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/onboard.list.component.js.map

/***/ },

/***/ 357:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabComponent = (function () {
    function TabComponent() {
        this.active = false;
    }
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('tabTitle'), 
        __metadata('design:type', String)
    ], TabComponent.prototype, "title", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], TabComponent.prototype, "active", void 0);
    TabComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-tab',
            template: __webpack_require__(737),
            styles: [__webpack_require__(726)]
        }), 
        __metadata('design:paramtypes', [])
    ], TabComponent);
    return TabComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/tab.component.js.map

/***/ },

/***/ 358:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PageNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PageNotFoundComponent = (function () {
    function PageNotFoundComponent() {
    }
    PageNotFoundComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: '<h3>Page Not Found</h3>'
        }), 
        __metadata('design:paramtypes', [])
    ], PageNotFoundComponent);
    return PageNotFoundComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/pagenotfound.component.js.map

/***/ },

/***/ 430:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 430;


/***/ },

/***/ 431:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(513);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_app_module__ = __webpack_require__(540);





if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_4__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/main.js.map

/***/ },

/***/ 539:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_token_token_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
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
    // tabsContents = [{tabTitle: "Headers", tabContent: '<app-tab-content1 [src]="html"></app-tab-content1>'}, {tabTitle: "Requirements", tabContent: "Requirements content"}, {tabTitle: "Packages", tabContent: "Packages content"}];
    // logs:string[] = [];
    // log(selectedTab) {
    //   this.logs.push('Selected Tab with title: ' + selectedTab.target.innerText);
    // }
    function AppComponent(tokenService) {
        this.tokenService = tokenService;
        // let cookie = this.tokenService.getCookie();
        // console.log("====== cookie ======");
        // console.log(cookie);
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(727)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_token_token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__services_token_token_service__["a" /* TokenService */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/app.component.js.map

/***/ },

/***/ 540:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pagenotfound_component__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__home_home_component__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__onboard_onboard_module__ = __webpack_require__(550);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing__ = __webpack_require__(541);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_login_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_token_token_service__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__login_login_service__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_httphelper_httphelper_service__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__ = __webpack_require__(545);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__onboard_onboard_service__ = __webpack_require__(552);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var AppModule = (function () {
    function AppModule(router, onBoardService) {
        var _this = this;
        this.router = router;
        this.onBoardService = onBoardService;
        onBoardService.dashboard()
            .subscribe(function (login) {
            _this.router.navigate(['/onboard']);
        }, function (error) { _this.router.navigate(['/login']); });
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_9__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_6__pagenotfound_component__["a" /* PageNotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_12__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["b" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_10__onboard_onboard_module__["a" /* OnBoardModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* RouterModule */].forRoot(__WEBPACK_IMPORTED_MODULE_11__app_routing__["a" /* appRoutes */])
            ],
            exports: [],
            providers: [__WEBPACK_IMPORTED_MODULE_16__guards_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_15__services_httphelper_httphelper_service__["a" /* HttpHelperService */], __WEBPACK_IMPORTED_MODULE_13__services_token_token_service__["a" /* TokenService */], __WEBPACK_IMPORTED_MODULE_14__login_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_5_angular2_cookie_services_cookies_service__["CookieService"], __WEBPACK_IMPORTED_MODULE_17__onboard_onboard_service__["a" /* OnBoardService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_17__onboard_onboard_service__["a" /* OnBoardService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_17__onboard_onboard_service__["a" /* OnBoardService */]) === 'function' && _b) || Object])
    ], AppModule);
    return AppModule;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/app.module.js.map

/***/ },

/***/ 541:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pagenotfound_component__ = __webpack_require__(358);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return appRoutes; });


var appRoutes = [
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    //{ path: 'home', component: HomeComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_1__pagenotfound_component__["a" /* PageNotFoundComponent */] }
];
// export const appRouterProviders: any[] = [
// ];
// export const routingApp = RouterModule.forRoot(appRoutes);
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/app.routing.js.map

/***/ },

/***/ 542:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Constants; });
var Constants = {
    getDomainName: function (hostName) {
        hostName = hostName || document.location.hostname;
        return hostName.substring(hostName.lastIndexOf(".", hostName.lastIndexOf(".") - 1) + 1);
    }
};
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/constants.js.map

/***/ },

/***/ 543:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SliderDirective; });
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

var SliderDirective = (function () {
    function SliderDirective(elementRef, cdr) {
        this.cdr = cdr;
        this.elementRef = elementRef;
    }
    SliderDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        jQuery(this.elementRef.nativeElement).find("#sliderDir").slider({
            range: false,
            orientation: "horizontal",
            min: 0,
            max: 100,
            value: this.slideValue.value,
            slide: function (event, ui) {
                _this.slideValue.value = ui.value;
            }
        });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(), 
        __metadata('design:type', Object)
    ], SliderDirective.prototype, "slideValue", void 0);
    SliderDirective = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'slider',
            template: "\n    <div id=\"sliderDir\"></div>\n    <h5 style='text-align: center;'>Value = {{slideValue.value}}%</h5>\n    "
        }),
        __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"])), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectorRef"]) === 'function' && _b) || Object])
    ], SliderDirective);
    return SliderDirective;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/slider.directive.js.map

/***/ },

/***/ 544:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_service__ = __webpack_require__(232);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AccessPermission; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AccessPermission = (function () {
    function AccessPermission(loginService, _elementRef) {
        this.loginService = loginService;
        this._elementRef = _elementRef;
        this.userRole = undefined;
    }
    AccessPermission.prototype.ngOnInit = function () {
        this.checkPermission();
    };
    AccessPermission.prototype.checkPermission = function () {
        var el = this._elementRef.nativeElement;
        var hasAccess = false;
        var allowedAccess = el.getAttribute("access-permission").split(" ");
        for (var i = 0; i < allowedAccess.length; i++) {
            if (this.userHasRole(allowedAccess[i])) {
                hasAccess = true;
                break;
            }
        }
        if (!hasAccess) {
            el.parentNode.removeChild(el);
        }
    };
    AccessPermission.prototype.userHasRole = function (role) {
        if (!this.userRole) {
            var currentUser = this.loginService.getCurrentUser();
            this.userRole = currentUser ? currentUser.permissions : [];
        }
        for (var j = 0; j < this.userRole.length; j++) {
            if (role == this.userRole[j]) {
                return true;
            }
        }
        return false;
    };
    AccessPermission = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[access-permission]' //this is how you address an attribute directive
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__login_login_service__["a" /* LoginService */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === 'function' && _b) || Object])
    ], AccessPermission);
    return AccessPermission;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/access-permission.js.map

/***/ },

/***/ 545:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_token_token_service__ = __webpack_require__(110);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AuthGuard; });
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
    function AuthGuard(router, tokenService) {
        this.router = router;
        this.tokenService = tokenService;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (state.url !== '/login' && !this.tokenService.loadToken()) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    };
    AuthGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_token_token_service__["a" /* TokenService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_token_token_service__["a" /* TokenService */]) === 'function' && _b) || Object])
    ], AuthGuard);
    return AuthGuard;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/auth.guard.js.map

/***/ },

/***/ 546:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            template: __webpack_require__(728)
        }), 
        __metadata('design:paramtypes', [])
    ], HomeComponent);
    return HomeComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/home.component.js.map

/***/ },

/***/ 547:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Login; });
var Login = (function () {
    function Login() {
    }
    return Login;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/login.js.map

/***/ },

/***/ 548:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(730),
            styles: [__webpack_require__(722)]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderComponent);
    return HeaderComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/header.component.js.map

/***/ },

/***/ 549:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_component__ = __webpack_require__(548);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return HeaderModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderModule = (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__header_component__["a" /* HeaderComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], HeaderModule);
    return HeaderModule;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/header.module.js.map

/***/ },

/***/ 550:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(325);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__onboard_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__onboard_home_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__onboard_list_component__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tab_tab_module__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__header_header_module__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__requirements_requirement_module__ = __webpack_require__(555);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pnp_pnp_module__ = __webpack_require__(554);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__submitforapproval_submitforapproval_module__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__guards_access_permission__ = __webpack_require__(544);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__onboard_routing__ = __webpack_require__(551);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnBoardModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var OnBoardModule = (function () {
    function OnBoardModule() {
    }
    OnBoardModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__onboard_component__["a" /* OnBoardComponent */], __WEBPACK_IMPORTED_MODULE_5__onboard_home_component__["a" /* OnBoardHomeComponent */], __WEBPACK_IMPORTED_MODULE_6__onboard_list_component__["a" /* OnBoardListComponent */], __WEBPACK_IMPORTED_MODULE_12__guards_access_permission__["a" /* AccessPermission */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__tab_tab_module__["a" /* TabsModule */],
                __WEBPACK_IMPORTED_MODULE_8__header_header_module__["a" /* HeaderModule */],
                __WEBPACK_IMPORTED_MODULE_9__requirements_requirement_module__["a" /* RequirementModule */],
                __WEBPACK_IMPORTED_MODULE_10__pnp_pnp_module__["a" /* PnpModule */],
                __WEBPACK_IMPORTED_MODULE_11__submitforapproval_submitforapproval_module__["a" /* SubmitforapprovalModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_13__onboard_routing__["a" /* routesOnboard */])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_4__onboard_component__["a" /* OnBoardComponent */], __WEBPACK_IMPORTED_MODULE_5__onboard_home_component__["a" /* OnBoardHomeComponent */], __WEBPACK_IMPORTED_MODULE_6__onboard_list_component__["a" /* OnBoardListComponent */], __WEBPACK_IMPORTED_MODULE_12__guards_access_permission__["a" /* AccessPermission */]
            ],
            providers: []
        }), 
        __metadata('design:paramtypes', [])
    ], OnBoardModule);
    return OnBoardModule;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/onboard.module.js.map

/***/ },

/***/ 551:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__onboard_component__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__onboard_home_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__onboard_list_component__ = __webpack_require__(356);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return routesOnboard; });



var routesOnboard = [
    {
        path: 'onboard', component: __WEBPACK_IMPORTED_MODULE_0__onboard_component__["a" /* OnBoardComponent */],
        children: [
            { path: '', component: __WEBPACK_IMPORTED_MODULE_1__onboard_home_component__["a" /* OnBoardHomeComponent */] },
            { path: 'list/:id', component: __WEBPACK_IMPORTED_MODULE_2__onboard_list_component__["a" /* OnBoardListComponent */] },
        ]
    }
];
//export const onboardRouting = RouterModule.forChild(routes); 
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/onboard.routing.js.map

/***/ },

/***/ 552:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_environments_environment__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_httphelper_httphelper_service__ = __webpack_require__(233);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return OnBoardService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var OnBoardService = (function () {
    function OnBoardService(http, httpHelperService) {
        this.http = http;
        this.httpHelperService = httpHelperService;
    }
    OnBoardService.prototype.dashboard = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_3_environments_environment__["a" /* environment */].dashboardApi, this.httpHelperService.getAuthRequestOptionsArg())
            .map(this.extractDashboardData)
            .catch(this.handleDashboardError);
    };
    OnBoardService.prototype.extractDashboardData = function (res) {
        return res.toString();
    };
    OnBoardService.prototype.handleError = function (error) {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    OnBoardService.prototype.handleDashboardError = function (error) {
        // in a real world app, we might use a remote logging infrastructure
        // we'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errMsg);
    };
    OnBoardService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_httphelper_httphelper_service__["a" /* HttpHelperService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_4__services_httphelper_httphelper_service__["a" /* HttpHelperService */]) === 'function' && _b) || Object])
    ], OnBoardService);
    return OnBoardService;
    var _a, _b;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/onboard.service.js.map

/***/ },

/***/ 553:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(84);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PnpComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PnpComponent = (function () {
    function PnpComponent(http) {
        this.http = http;
        this.sortByWordLength = function (a) {
            return a.city.length;
        };
    }
    PnpComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("../app/onboard/pnp/data.json")
            .subscribe(function (data) {
            setTimeout(function () {
                _this.data = data.json();
            }, 1000);
        });
    };
    PnpComponent.prototype.toInt = function (num) {
        return +num;
    };
    PnpComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-pnp',
            template: __webpack_require__(734),
            styles: [__webpack_require__(723)]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === 'function' && _a) || Object])
    ], PnpComponent);
    return PnpComponent;
    var _a;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/pnp.component.js.map

/***/ },

/***/ 554:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pnp_component__ = __webpack_require__(553);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__ = __webpack_require__(564);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_datatable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_datatable__);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return PnpModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PnpModule = (function () {
    function PnpModule() {
    }
    PnpModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__pnp_component__["a" /* PnpComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3_angular2_datatable__["DataTableModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__pnp_component__["a" /* PnpComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PnpModule);
    return PnpModule;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/pnp.module.js.map

/***/ },

/***/ 555:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_slider_slider_directive__ = __webpack_require__(543);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__requirements_component__ = __webpack_require__(556);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RequirementModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var RequirementModule = (function () {
    function RequirementModule() {
    }
    RequirementModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_3__requirements_component__["a" /* RequirementsComponent */], __WEBPACK_IMPORTED_MODULE_2__common_slider_slider_directive__["a" /* SliderDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__requirements_component__["a" /* RequirementsComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], RequirementModule);
    return RequirementModule;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/requirement.module.js.map

/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__requirements__ = __webpack_require__(557);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RequirementsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//declare var jQuery:any;
var RequirementsComponent = (function () {
    function RequirementsComponent() {
        this.originalRepeatSliderValue = { value: 20 };
        this.liveNonLiveFCTGRP = { value: 60 };
    }
    RequirementsComponent.prototype.onSubmit = function () {
        var data = new __WEBPACK_IMPORTED_MODULE_1__requirements__["a" /* RequirementsModel */]();
        data.originalRepeatSliderValue = this.originalRepeatSliderValue.value;
        data.liveNonLiveFCTGRP = this.liveNonLiveFCTGRP.value;
        console.log(data);
    };
    RequirementsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-requirements',
            template: __webpack_require__(735),
            styles: [__webpack_require__(724)]
        }), 
        __metadata('design:paramtypes', [])
    ], RequirementsComponent);
    return RequirementsComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/requirements.component.js.map

/***/ },

/***/ 557:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return RequirementsModel; });
var RequirementsModel = (function () {
    function RequirementsModel() {
    }
    return RequirementsModel;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/requirements.js.map

/***/ },

/***/ 558:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubmitforapprovalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SubmitforapprovalComponent = (function () {
    function SubmitforapprovalComponent() {
    }
    SubmitforapprovalComponent.prototype.ngOnInit = function () {
    };
    SubmitforapprovalComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-submitforapproval',
            template: __webpack_require__(736),
            styles: [__webpack_require__(725)]
        }), 
        __metadata('design:paramtypes', [])
    ], SubmitforapprovalComponent);
    return SubmitforapprovalComponent;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/submitforapproval.component.js.map

/***/ },

/***/ 559:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__submitforapproval_component__ = __webpack_require__(558);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return SubmitforapprovalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubmitforapprovalModule = (function () {
    function SubmitforapprovalModule() {
    }
    SubmitforapprovalModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_1__submitforapproval_component__["a" /* SubmitforapprovalComponent */]
            ],
            imports: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__submitforapproval_component__["a" /* SubmitforapprovalComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SubmitforapprovalModule);
    return SubmitforapprovalModule;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/submitforapproval.module.js.map

/***/ },

/***/ 560:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_component__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_component__ = __webpack_require__(561);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsModule = (function () {
    function TabsModule() {
    }
    TabsModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__tab_component__["a" /* TabComponent */], __WEBPACK_IMPORTED_MODULE_3__tabs_component__["a" /* TabsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_component__["a" /* TabComponent */], __WEBPACK_IMPORTED_MODULE_3__tabs_component__["a" /* TabsComponent */]
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], TabsModule);
    return TabsModule;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/tab.module.js.map

/***/ },

/***/ 561:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__tab_component__ = __webpack_require__(357);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TabsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TabsComponent = (function () {
    function TabsComponent() {
    }
    TabsComponent.prototype.ngAfterContentInit = function () {
        // get all active tabs
        var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    };
    TabsComponent.prototype.selectTab = function (tab) {
        // deactivate all tabs
        this.tabs.toArray().forEach(function (tab) { return tab.active = false; });
        // activate current tab
        tab.active = true;
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ContentChildren"])(__WEBPACK_IMPORTED_MODULE_1__tab_component__["a" /* TabComponent */]), 
        __metadata('design:type', (typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_core__["QueryList"]) === 'function' && _a) || Object)
    ], TabsComponent.prototype, "tabs", void 0);
    TabsComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'my-tabs',
            template: __webpack_require__(738)
        }), 
        __metadata('design:paramtypes', [])
    ], TabsComponent);
    return TabsComponent;
    var _a;
}());
//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/tabs.component.js.map

/***/ },

/***/ 562:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(579);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(572);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(568);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(574);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(573);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(571);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(570);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(578);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(567);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(566);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(576);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(569);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(577);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(575);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(580);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/home/rajiv/Projects/sagacito/source-code/sagacito-pgov/client/src/polyfills.js.map

/***/ },

/***/ 721:
/***/ function(module, exports) {

module.exports = "form {\n    border: 3px solid #f1f1f1;\n}\n\ninput[type=text], input[type=password] {\n    width: 100%;\n    padding: 12px 20px;\n    margin: 8px 0;\n    display: inline-block;\n    border: 1px solid #ccc;\n    box-sizing: border-box;\n}\n\nbutton {\n    background-color: #4CAF50;\n    color: white;\n    padding: 14px 20px;\n    margin: 8px 0;\n    border: none;\n    cursor: pointer;\n    width: 100%;\n}\n\n.cancelbtn {\n    width: auto;\n    padding: 10px 18px;\n    background-color: #f44336;\n}\n\n.imgcontainer {\n    text-align: center;\n    margin: 24px 0 12px 0;\n}\n\n.error-container {\n    text-align: center;\n    margin-top: 10px;\n}\n\nimg.avatar {\n    width: 40%;\n    border-radius: 50%;\n}\n\n.login-container {\n    padding: 16px;\n}\n\nspan.psw {\n    float: right;\n}\n\n/* Change styles for span and cancel button on extra small screens */\n@media screen and (max-width: 300px) {\n    span.psw {\n       display: block;\n       float: none;\n    }\n    .cancelbtn {\n       width: 100%;\n    }\n}\n\n\n\n/* The Modal (background) */\n.modal {\n    display: none; /* Hidden by default */\n    position: fixed; /* Stay in place */\n    z-index: 1; /* Sit on top */\n    left: 0;\n    top: 0;\n    width: 100%; /* Full width */\n    height: 100%; /* Full height */\n    overflow: auto; /* Enable scroll if needed */\n    background-color: rgb(0,0,0); /* Fallback color */\n    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n    padding-top: 60px;\n}\n\n/* Modal Content/Box */\n.modal-content {\n    background-color: #fefefe;\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\n    border: 1px solid #888;\n    width: 80%; /* Could be more or less, depending on screen size */\n}\n\n/* The Close Button (x) */\n.close {\n    position: absolute;\n    right: 25px;\n    top: 0;\n    color: #000;\n    font-size: 35px;\n    font-weight: bold;\n}\n\n.close:hover,\n.close:focus {\n    color: red;\n    cursor: pointer;\n}\n\n/* Add Zoom Animation */\n.animate {\n    -webkit-animation: animatezoom 0.6s;\n    animation: animatezoom 0.6s\n}\n\n@-webkit-keyframes animatezoom {\n    from {-webkit-transform: scale(0)} \n    to {-webkit-transform: scale(1)}\n}\n    \n@keyframes animatezoom {\n    from {-webkit-transform: scale(0);transform: scale(0)} \n    to {-webkit-transform: scale(1);transform: scale(1)}\n}\n\n.forgot-password-link{\n    position: absolute;\n    left: 11px;\n    top: 0;\n    color: #000;\n    font-size: 20px;\n    font-weight: bold;\n    cursor: pointer;\n}"

/***/ },

/***/ 722:
/***/ function(module, exports) {

module.exports = "#CompensationBonus{\n\twidth: 50px;\n}"

/***/ },

/***/ 723:
/***/ function(module, exports) {

module.exports = ".grid {\n    position: relative;\n}\n \n.grid-item {\n    position: absolute;\n}\n \n.grid-item.moving {\n    z-index: z-index + 1;\n}\n \n.placeholder {\n    position: absolute;\n}"

/***/ },

/***/ 724:
/***/ function(module, exports) {

module.exports = ".outlay-plus-icon{\n\tfont-size: 19px;\n\tfont-weight: bold;\n\tcursor: pointer;\n}\n#copySU, .checkbox-icon{\n\twidth: 28px;\n\tdisplay: inline-block;\n\theight: 28px;\n}\n.form-col-padding-2px{\n\tpadding-left: 2px;\n    padding-right: 2px;\n}\n\n.row-border{\n\tborder: 1px solid #9c9c9c;\n    border-radius: 15px;\n    padding-top: 15px;\n    margin-top: 15px;\n}\n\n.row-border-skey{\n\tborder: 1px solid #9c9c9c;\n    border-radius: 15px;\n    padding-top: 15px;\n}"

/***/ },

/***/ 725:
/***/ function(module, exports) {

module.exports = ""

/***/ },

/***/ 726:
/***/ function(module, exports) {

module.exports = "#tab-container{\n\tpadding: 15px;\n}"

/***/ },

/***/ 727:
/***/ function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ },

/***/ 728:
/***/ function(module, exports) {

module.exports = "<h2 class=\"text-center\">Welcome to the Sagacito Star</h2>"

/***/ },

/***/ 729:
/***/ function(module, exports) {

module.exports = "<h2>Login Form</h2>\n\n<form (ngSubmit)=\"onLogin($event)\">\n  <div class=\"error-container\">\n    <!-- class=\"imgcontainer\" <img src=\"img_avatar2.png\" alt=\"Avatar\" class=\"avatar\"> -->\n    <span style=\"color: #ff0000\">{{errorMessage}}</span>\n  </div>\n\n  <div class=\"login-container\">\n    <label><b>Username</b></label>\n    <input type=\"text\" [(ngModel)]=\"login.username\" placeholder=\"Enter Username\" name=\"uname\" required>\n\n    <label><b>Password</b></label>\n    <input type=\"password\" [(ngModel)]=\"login.password\" placeholder=\"Enter Password\" name=\"psw\" required>\n        \n    <button type=\"submit\">Login</button>\n    <input type=\"checkbox\" checked=\"checked\"> Remember me\n    <span class=\"psw\"><a style=\"cursor: pointer;\" onclick=\"document.getElementById('forgotPasswordDiv').style.display='block'\">Forgot password?</a></span>\n  </div>\n\n  <div id=\"forgotPasswordDiv\" class=\"modal\">\n  \n  <form class=\"modal-content animate\">\n    <div class=\"imgcontainer\">\n    \t<span class=\"forgot-password-link\">Forgot Password</span>\n      <span onclick=\"document.getElementById('forgotPasswordDiv').style.display='none'\" class=\"close\" title=\"Close Modal\">&times;</span>\n      \n    </div>\n\n    <div class=\"login-container\">\n      <label><b>Enter Your Email</b></label>\n      <input type=\"text\" placeholder=\"Enter your email\" name=\"uname\" required>\n        \n      <button type=\"submit\">Submit</button>\n    </div>\n\n  </form>\n</div>\n</form>"

/***/ },

/***/ 730:
/***/ function(module, exports) {

module.exports = "<div id=\"header-container\">\n\t<form class=\"form-horizontal\" role=\"form\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t<div class=\"form-group\">\n\t                <label for=\"dealId\" class=\"col-sm-3 col-md-3 control-label\">Deal Id*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"dealId\" placeholder=\"Deal Id\" class=\"form-control\" autofocus>\n\t                    <span class=\"help-block\">Delas</span>\n\t                </div>\n\t            </div>\n\t\t\t\t<div class=\"form-group\">\n\t                <label for=\"channel\" class=\"col-sm-3 col-md-3 control-label\">Channel*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"channel\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Agency\" class=\"col-sm-3 col-md-3 control-label\">Agency</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"Agency\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"AgencyUser\" class=\"col-sm-3 col-md-3 control-label\">Agency User</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"AgencyUser\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"AgencyTeam\" class=\"col-sm-3 col-md-3 control-label\">Agency Team</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"AgencyTeam\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"DealName\" class=\"col-sm-3 col-md-3 control-label\">Deal Name*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"DealName\" placeholder=\"Deal Name\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Category\" class=\"col-sm-3 col-md-3 control-label\">Category*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"Category\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"SubCategory\" class=\"col-sm-3 col-md-3 control-label\">Sub Category</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"SubCategory\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"ParentDeal\" class=\"col-sm-3 col-md-3 control-label\">Parent Deal*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"ParentDeal\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"RatingPeriod\" class=\"col-sm-3 col-md-3 control-label\">Rating Period</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"RatingPeriod\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t\t\t\t<div class=\"form-group\">\n\t                <label for=\"Brand\" class=\"col-sm-3 col-md-3 control-label\">Brand</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"Brand\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"RatingPeriod\" class=\"col-sm-3 col-md-3 control-label\">Rating Period</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"RatingPeriod\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\n\n\t            <div class=\"form-group\">\n\t                <label for=\"TotalOutlay\" class=\"col-sm-3 col-md-3 control-label\">Total Outlay*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"TotalOutlay\" placeholder=\"TotalOutlay\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"DealCurrency\" class=\"col-sm-3 col-md-3 control-label\">Deal Currency</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"DealCurrency\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"ShareinCampaign\" class=\"col-sm-3 col-md-3 control-label\">Share in Campaign</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"ShareinCampaign\" placeholder=\"ShareinCampaign\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Discount\" class=\"col-sm-3 col-md-3 control-label\">% Discount</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"Discount\" placeholder=\"Discount\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"GRP\" class=\"col-sm-3 col-md-3 control-label\">GRP</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"GRP\" placeholder=\"GRP\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"CPP\" class=\"col-sm-3 col-md-3 control-label\">CPP</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"CPP\" placeholder=\"CPP\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"CPT\" class=\"col-sm-3 col-md-3 control-label\">CPT</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"CPT\" placeholder=\"CPT\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"InvoicingMethod\" class=\"col-sm-3 col-md-3 control-label\">Invoicing Method</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"InvoicingMethod\" placeholder=\"InvoicingMethod\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"RateCard\" class=\"col-sm-3 col-md-3 control-label\">Rate Card</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"RateCard\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"AgencyCommision\" class=\"col-sm-3 col-md-3 control-label\">Agency Commision</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"AgencyCommision\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Impressions\" class=\"col-sm-3 col-md-3 control-label\">Impressions</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"Impressions\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-6 col-sm-6 col-md-6 col-lg-6\">\n\t\t\t\t<div class=\"form-group\">\n\t                <label for=\"CompensationBonus\" class=\"col-sm-3 col-md-3 control-label\">Compensation/Bonus</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"checkbox\" id=\"CompensationBonus\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t\t\t\t<div class=\"form-group\">\n\t                <label for=\"AdvertiserClient\" class=\"col-sm-3 col-md-3 control-label\">Advertiser/Client*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"AdvertiserClient\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"ProposalType\" class=\"col-sm-3 col-md-3 control-label\">Proposal/Type*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"ProposalType\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"ValidityDate\" class=\"col-sm-3 col-md-3 control-label\">Validity Date</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input id=\"ValidityDate\" placeholder=\"Validity Date\" type=\"date\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Buyer\" class=\"col-sm-3 col-md-3 control-label\">Buyer</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"Buyer\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"CompaignType\" class=\"col-sm-3 col-md-3 control-label\">Compaign Type</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"CompaignType\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"CompaignStartDate\" class=\"col-sm-3 col-md-3 control-label\">Compaign Start Date</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"date\" placeholder=\"Compaign Start Date\" id=\"CompaignStartDate\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"CompaignEndDate\" class=\"col-sm-3 col-md-3 control-label\">Compaign End Date</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"date\" placeholder=\"Compaign End Date\" id=\"CompaignEndDate\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"DemoPrimary\" class=\"col-sm-3 col-md-3 control-label\">Demo Primary*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"DemoPrimary\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"SecondaryPeriod\" class=\"col-sm-3 col-md-3 control-label\">Demo Secondary Period</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"SecondaryPeriod\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t\t\t\t<div class=\"form-group\">\n\t                <label for=\"PrimaryMarket\" class=\"col-sm-3 col-md-3 control-label\">Primary Market*</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"PrimaryMarket\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"SecondaryMarket\" class=\"col-sm-3 col-md-3 control-label\">Secondary Market</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"SecondaryMarket\" class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\n\n\t            <div class=\"form-group\">\n\t                <label for=\"SalesPerspon\" class=\"col-sm-3 col-md-3 control-label\">Sales Perspon</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"SalesPerspon\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"SalesTeam\" class=\"col-sm-3 col-md-3 control-label\">Sales Team</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"SalesTeam\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"RatingSourceBreakdown\" class=\"col-sm-3 col-md-3 control-label\">Rating Source Breakdown</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"RatingSourceBreakdown\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"PricingMethod\" class=\"col-sm-3 col-md-3 control-label\">Pricing Method</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"PricingMethod\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"PricingSource\" class=\"col-sm-3 col-md-3 control-label\">Pricing Source</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"PricingSource\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"TimeZone\" class=\"col-sm-3 col-md-3 control-label\">Time Zone</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"TimeZone\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"PONumber\" class=\"col-sm-3 col-md-3 control-label\">PO Number</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"PONumber\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"TAX\" class=\"col-sm-3 col-md-3 control-label\">TAX</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"TAX\"  class=\"form-control\"></select>\n\t                </div>\n\t            </div>\n\t\t\t</div>\n\t\t\t\n\t\t</div>\n\t\t<div class=\"row\">\n\t\t\t<label for=\"Notes\" class=\"col-sm-1 col-md-1 control-label\">Notes</label>\n\t        <div class=\"col-sm-11 col-md-11\">\n\t            <textarea id=\"Notes\" class=\"form-control\"></textarea>\n\t        </div>\n\t\t</div>\n\t</form>\n</div>\n"

/***/ },

/***/ 731:
/***/ function(module, exports) {

module.exports = "<header>\n  <ul>\n    <li><a href=\"/onboard\">Home</a></li>\n    <li><a href=\"/onboard/list/1\">List</a></li>\n  </ul>\n</header>\n<router-outlet></router-outlet>\n<footer>Footer text</footer>\n"

/***/ },

/***/ 732:
/***/ function(module, exports) {

module.exports = "<my-tabs> <!--  (click)=\"log($event)\" -->\n    <!-- <my-tab *ngFor=\"let tab of tabsContents\" [tabTitle]=\"tab.tabTitle\">{{tab.tabContent}}</my-tab> -->\n<my-tab [tabTitle]=\"'Header'\">\n    <app-header></app-header>\n  </my-tab>\n  <my-tab [tabTitle]=\"'Requirements'\">\n    <app-requirements></app-requirements>\n  </my-tab>\n  <my-tab [tabTitle]=\"'Product and Packages'\">\n    <app-pnp></app-pnp>\n  </my-tab>\n  <my-tab [tabTitle]=\"'Submit for Approval'\">\n    <app-submitforapproval></app-submitforapproval>\n  </my-tab>\n</my-tabs>\n<!-- <h3>Logs:</h3>\n<ul>\n  <li *ngFor=\"let log of logs\">\n    {{log}}\n  </li>\n</ul>\n<hr> -->\n"

/***/ },

/***/ 733:
/***/ function(module, exports) {

module.exports = "<p>Onboard list component</p>"

/***/ },

/***/ 734:
/***/ function(module, exports) {

module.exports = "<div id=\"pNp-container\">\n\t<table class=\"table table-striped\" [mfData]=\"data\" #mf=\"mfDataTable\" [mfRowsOnPage]=\"5\">\n\t    <thead>\n\t    <tr>\n\t        <th style=\"width: 20%\">\n\t            <mfDefaultSorter by=\"name\">Name</mfDefaultSorter>\n\t        </th>\n\t        <th style=\"width: 50%\">\n\t            <mfDefaultSorter by=\"email\">Email</mfDefaultSorter>\n\t        </th>\n\t        <th style=\"width: 10%\">\n\t            <mfDefaultSorter by=\"age\">Age</mfDefaultSorter>\n\t        </th>\n\t        <th style=\"width: 20%\">\n\t            <mfDefaultSorter by=\"city\">City</mfDefaultSorter>\n\t        </th>\n\t    </tr>\n\t    </thead>\n\t    <tbody>\n\t    <tr *ngFor=\"let item of mf.data\">\n\t        <td>{{item.name}}</td>\n\t        <td>{{item.email}}</td>\n\t        <td class=\"text-right\">{{item.age}}</td>\n\t        <td>{{item.city | uppercase}}</td>\n\t    </tr>\n\t    </tbody>\n\t    <tfoot>\n\t    <tr>\n\t        <td colspan=\"4\">\n\t            <mfBootstrapPaginator [rowsOnPageSet]=\"[5,10,25]\"></mfBootstrapPaginator>\n\t        </td>\n\t    </tr>\n\t    </tfoot>\n\t</table>\n</div>"

/***/ },

/***/ 735:
/***/ function(module, exports) {

module.exports = "<div id=\"header-container\">\n\t<form class=\"form-horizontal\" role=\"form\">\n\t<div class=\"row\"></div>\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-4 col-sm-4 col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t                <label class=\"col-sm-3 col-md-3\">Outlay:</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <span class=\"outlay-plus-icon\">+</span>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Regular\" class=\"col-sm-3 col-md-3 control-label\">Regular</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Regular\" placeholder=\"Regular\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Impact\" class=\"col-sm-3 col-md-3 control-label\">Impact</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Impact\" placeholder=\"Impact\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Total\" class=\"col-sm-3 col-md-3 control-label\">Total</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Total\" placeholder=\"Total\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-4 col-sm-4 col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t                <label class=\"col-sm-12 col-md-12\">Effective Rate (ER):</label>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Regular1\" class=\"col-sm-3 col-md-3 control-label\">Regular</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Regular1\" placeholder=\"Regular\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Impact1\" class=\"col-sm-3 col-md-3 control-label\">Impact</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Impact1\" placeholder=\"Impact\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Total1\" class=\"col-sm-3 col-md-3 control-label\">Total</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Total1\" placeholder=\"Total\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t\t\t</div>\n\t\t\t<div class=\"col-xs-4 col-sm-4 col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t                <div class=\"col-sm-12 col-md-12\">\n\t                \t<label for=\"CPT\" class=\"col-sm-4 col-md-4 control-label\">\n\t                \t\t<input type=\"radio\" name=\"rbCPRP\" id=\"CPT\">CPT:\n\t                \t</label>\n\t                \t<label for=\"CPRP\" class=\"col-sm-8 col-md-8 control-label\">\n\t                \t\t<input type=\"radio\" name=\"rbCPRP\" id=\"CPRP\">Cost Per Rating Point (CPRP):\n\t                \t</label>\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Regular2\" class=\"col-sm-3 col-md-3 control-label\">Regular</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Regular2\" placeholder=\"Regular\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Impact2\" class=\"col-sm-3 col-md-3 control-label\">Impact</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Impact2\" placeholder=\"Impact\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t            <div class=\"form-group\">\n\t                <label for=\"Total2\" class=\"col-sm-3 col-md-3 control-label\">Total</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <input type=\"text\" id=\"Total2\" placeholder=\"Total\" class=\"form-control\">\n\t                </div>\n\t            </div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-4 col-sm-4 col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t                <label class=\"col-sm-12 col-md-12\">Skew's Definition:</label>\n\t            </div>\n            </div>\n\t\t</div>\n\t\t<div class=\"row row-border-skey\">\n\t\t\t<div class=\"col-xs-4 col-sm-4 col-md-4\">\n            \t<div class=\"form-group\">\n\t                <label for=\"CorePT\" class=\"col-sm-3 col-md-3 control-label\">Core PT</label>\n\t                <div class=\"col-sm-9 col-md-9\">\n\t                    <select id=\"CorePT\" class=\"form-control\"></select>\n\t                </div>\n            \t</div>\n            </div>\n            <div class=\"col-xs-4 col-sm-4 col-md-4\">\n            \t<div class=\"form-group\">\n\t                <label for=\"From\" class=\"col-sm-2 col-md-2 control-label\">From</label>\n\t                <div class=\"col-sm-4 col-md-4\">\n\t                    <select id=\"From\" class=\"form-control\"></select>\n\t                </div>\n\n\t                <label for=\"To\" class=\"col-sm-2 col-md-2 control-label\">To</label>\n\t                <div class=\"col-sm-4 col-md-4\">\n\t                    <select id=\"To\" class=\"form-control\"></select>\n\t                </div>\n            \t</div>\n            </div>\n            <div class=\"col-xs-4 col-sm-4 col-md-4\">\n            \t<div class=\"form-group\">\n            \t\t<div class=\"col-sm-1 col-md-1\"></div>\n\t                <label for=\"From1\" class=\"col-sm-2 col-md-2 control-label\">From</label>\n\t                <div class=\"col-sm-3 col-md-3\">\n\t                    <select id=\"From1\" class=\"form-control\"></select>\n\t                </div>\n\n\t                <label for=\"To1\" class=\"col-sm-2 col-md-2 control-label\">To</label>\n\t                <div class=\"col-sm-3 col-md-3\">\n\t                    <select id=\"To1\" class=\"form-control\"></select>\n\t                </div>\n\t                <div class=\"col-sm-1 col-md-1\">\n\t                    <span class=\"outlay-plus-icon\">+</span>\n\t                </div>\n            \t</div>\n            </div>\n\t\t</div>\n\n\t\t<div class=\"row row-border\" style=\"padding-left: 40px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n            \t<div class=\"form-group\">\n            \t\t<label for=\"GRP\">\n                \t\t<input type=\"radio\" name=\"rgGRP\" id=\"GRP\">GRP:\n                \t</label>\n                \t<label for=\"FCT\" style=\"margin-left: 15px\">\n                \t\t<input type=\"radio\" name=\"rgGRP\" id=\"FCT\"> FCT\n                \t</label>\n            \t</div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12 row-border\">\n            \t<div>\n            \t\t<div class=\"form-group\">\n\t\t                <label class=\"col-sm-12 col-md-12\">PT/NPT Weekend/Weekday Requirements</label>\n\t\t            </div>\n            \t</div>\n            \t<div>\n            \t\t<div class=\"col-xs-5 col-sm-5 col-md-5\">\n\t\t            \t<div class=\"form-group\">\n\t\t\t                <label for=\"CorePT\" class=\"col-sm-3 col-md-3 control-label\">Core PT</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"CorePT\" placeholder=\"Core PT\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"PT\" class=\"col-sm-3 col-md-3 control-label\">PT</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"PT\" placeholder=\"PT\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"NPT\" class=\"col-sm-3 col-md-3 control-label\">NPT</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"NPT\" placeholder=\"NPT\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"Weekend\" class=\"col-sm-3 col-md-3 control-label\">Weekend</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"Weekend\" placeholder=\"Weekend\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t            </div>\n\t\t            <div class=\"col-xs-5 col-sm-5 col-md-5\">\n\t\t            \t<div class=\"form-group\">\n\t\t\t                <label for=\"WeekdayPT\" class=\"col-sm-3 col-md-3 control-label\">Weekday PT</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"WeekdayPT\" placeholder=\"Weekday PT\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"WeekdayNPT\" class=\"col-sm-3 col-md-3 control-label\">Weekday NPT</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"WeekdayNPT\" placeholder=\"Weekday NPT\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"WeekendPT\" class=\"col-sm-3 col-md-3 control-label\">Weekend PT</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"WeekendPT\" placeholder=\"Weekend PT\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"WeekendNPT\" class=\"col-sm-3 col-md-3 control-label\">Weekend NPT</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"WeekendNPT\" placeholder=\"Weekend NPT\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t            </div>\n            \t</div>\n            </div>\n\n            <div class=\"col-xs-12 col-sm-12 col-md-12 row-border\">\n            \t<div>\n            \t\t<div class=\"form-group\">\n\t\t                <label class=\"col-sm-12 col-md-12\">Time Band Requirements</label>\n\t\t            </div>\n            \t</div>\n            \t<div>\n\t\t            <div class=\"col-xs-10 col-sm-10 col-md-10\">\n\t\t            \t<div class=\"form-group\">\n\t\t\t                <label for=\"From\" class=\"col-sm-1 col-md-1 control-label\">From</label>\n\t\t\t                <div class=\"col-sm-2 col-md-2\">\n\t\t\t                    <input id=\"From\" class=\"form-control\">\n\t\t\t                </div>\n\n\t\t\t                <label for=\"To\" class=\"col-sm-1 col-md-1 control-label\">To</label>\n\t\t\t                <div class=\"col-sm-2 col-md-2\">\n\t\t\t                    <input id=\"To\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t                <div class=\"col-sm-2 col-md-2\">\n\t\t\t                    <input class=\"form-control\">\n\n\t\t\t                </div>\n\t\t\t                <div class=\"col-sm-1 col-md-1\">\n\t\t\t                    <span class=\"outlay-plus-icon\">+</span>\n\t\t\t                </div>\n\t\t            \t</div>\n\t\t            \t\n\t\t            </div>\n            \t</div>\n\t\t\t</div>\n\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 row-border\">\n            \t<div>\n\t\t            <div class=\"col-xs-10 col-sm-10 col-md-10\">\n\t\t            \t<div class=\"form-group\">\n\t\t            \t\t<label for=\"From\" class=\"col-sm-3 col-md-3 control-label\">Original/Repeat</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7 col-md-7 control-label\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-1 col-md-1\">0%</label>\n\t\t\t\t\t\t\t\t<slider class=\"col-sm-5 col-md-5\" [slideValue]='originalRepeatSliderValue'></slider>\n\t\t\t\t\t\t\t\t<label class=\"col-sm-1 col-md-1\">100%</label>\n\t\t\t\t\t\t\t</div>\n\t\t            \t</div>\n\t\t            \t<div class=\"form-group\">\n\t\t            \t\t<label for=\"From\" class=\"col-sm-3 col-md-3 control-label\">Live/Non Live (FCT/GRP)</label>\n\t\t\t\t\t\t\t<div class=\"col-sm-7 col-md-7 control-label\">\n\t\t\t\t\t\t\t\t<label class=\"col-sm-1 col-md-1\">0%</label>\n\t\t\t\t\t\t\t\t<slider class=\"col-sm-5 col-md-5\" [slideValue]='liveNonLiveFCTGRP'></slider>\n\t\t\t\t\t\t\t\t<label class=\"col-sm-1 col-md-1\">100%</label>\n\t\t\t\t\t\t\t</div>\n\t\t            \t</div>\n\t\t            </div>\n            \t</div>\n\t\t\t</div>\n\t\t</div>\n\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-xs-4 col-sm-4 col-md-4\">\n\t\t\t\t<div class=\"form-group\">\n\t                <label class=\"col-sm-12 col-md-12\">Phasing:</label>\n\t            </div>\n            </div>\n\t\t</div>\n\t\t<div class=\"row\" style=\"padding-left: 40px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n            \t<div>\n            \t\t<div class=\"col-xs-5 col-sm-5 col-md-5\">\n\t\t            \t<div class=\"form-group\">\n\t\t\t                <label for=\"Month1\" class=\"col-sm-3 col-md-3 control-label\">Month 1</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"Month1\" placeholder=\"Month 1\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"Month2\" class=\"col-sm-3 col-md-3 control-label\">Month 2</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"Month2\" placeholder=\"Month 2\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"Month3\" class=\"col-sm-3 col-md-3 control-label\">Month 3</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"Month3\" placeholder=\"Month 3\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t            </div>\n\t\t            <div class=\"col-xs-5 col-sm-5 col-md-5\">\n\t\t            \t<div class=\"form-group\">\n\t\t\t                <label for=\"Month4\" class=\"col-sm-3 col-md-3 control-label\">Month 4</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"Month4\" placeholder=\"Month 4\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"Month5\" class=\"col-sm-3 col-md-3 control-label\">Month 5</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"Month5\" placeholder=\"Month 5\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t\t            <div class=\"form-group\">\n\t\t\t                <label for=\"Month6\" class=\"col-sm-3 col-md-3 control-label\">Month 6</label>\n\t\t\t                <div class=\"col-sm-9 col-md-9\">\n\t\t\t                    <input type=\"text\" id=\"Month6\" placeholder=\"Month 6\" class=\"form-control\">\n\t\t\t                </div>\n\t\t\t            </div>\n\t\t            </div>\n            \t</div>\n            </div>\n\t\t</div>\n\n\t\t<div class=\"row row-border\" style=\"padding-left: 40px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n            \t<div class=\"form-group\">\n            \t\t<label class=\"col-sm-2 col-md-2\">Sales Unit: </label>\n            \t\t<label for=\"GRP\" class=\"col-sm-1 col-md-1\">\n                \t\t<input type=\"radio\" name=\"rgGRP\" id=\"GRP\">GRP:\n                \t</label>\n                \t<label for=\"FCT\" class=\"col-sm-2 col-md-2\">\n                \t\t<input type=\"radio\" name=\"rgGRP\" id=\"FCT\"> FCT\n                \t</label>\n                \t<label for=\"copySU\" class=\"col-sm-5 col-md-5\">\n                \t\t<input type=\"checkbox\" class=\"form-control\" id=\"copySU\"> Copy existing grid SU\n                \t</label>\n            \t</div>\n            </div>\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12 row-border\">\n        \t\t<div class=\"form-group\">\n            \t\t<label class=\"col-sm-2 col-md-2\">Must Have</label>\n            \t\t<label for=\"MustHave\" class=\"col-sm-3 col-md-3\">\n                \t\t<select id=\"MustHave\" class=\"form-control\"></select>\n                \t</label>\n                \t<div class=\"col-sm-2 col-md-2\">\n                \t\t<input id=\"Min\" placeholder=\"Min\" class=\"form-control\">\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2\">\n                \t\t<input id=\"Max\" placeholder=\"Max\" class=\"form-control\">\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1\">\n\t                    <span class=\"outlay-plus-icon\">+</span>\n\t                </div>\n            \t</div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12 row-border\">\n        \t\t<div class=\"form-group\">\n            \t\t<label class=\"col-sm-2 col-md-2\">Must Not Have</label>\n            \t\t<label for=\"MustNotHave\" class=\"col-sm-3 col-md-3\">\n                \t\t<select id=\"MustNotHave\" class=\"form-control\"></select>\n                \t</label>\n                \t<div class=\"col-sm-1 col-md-1\">\n\t                    <span class=\"outlay-plus-icon\">+</span>\n\t                </div>\n            \t</div>\n            </div>\n\t\t</div>\n\t\t<div class=\"row row-border\" style=\"padding-left: 40px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n            \t<div class=\"form-group\">\n            \t\t<label>Must Have Primary/Secondary Elements</label>\n            \t</div>\n            </div>\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n        \t\t<div class=\"form-group\">\n            \t\t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-6 col-md-6\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"EventTyp12\">\n                \t\t\tEvent Type\n\t                \t\t<select id=\"EventType\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"CommercialType\">\n                \t\t\tCommercial Type\n\t                \t\t<select id=\"CommercialType\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"DealLineItems\">\n                \t\t\tDeal Line Items\n\t                \t\t<select id=\"DealLineItems\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"Outlay\">\n                \t\t\tOutlay\n\t                \t\t<input id=\"Outlay\" placeholder=\"Outlay\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"StartDate\">\n                \t\t\tStart Date\n\t                \t\t<input placeholder=\"Start Date\" id=\"StartDate\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"EndDate\">\n                \t\t\tEnd Date\n\t                \t\t<input placeholder=\"End Date\" id=\"EndDate\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"ValueAdd\">\n                \t\t\tValue Add\n\t                \t\t<input type=\"checkbox\" id=\"ValueAdd\" class=\"checkbox-icon\">\n\t                \t\t<span class=\"outlay-plus-icon\" style=\"margin-left: 15px;\">+</span>\n\t                \t</label>\n                \t</div>\n            \t</div>\n            </div>\n            <div class=\"col-xs-12 col-sm-12 col-md-12\">\n        \t\t<div class=\"form-group\">\n            \t\t<div class=\"col-sm-4 col-md-4\">\n            \t\t\t<label class=\"col-sm-4 col-md-4\">Duration/FCT</label>\n                \t\t<label class=\"col-sm-7 col-md-7\" for=\"DurationFCT\">\n\t                \t\t<select id=\"DurationFCT\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-5 col-md-5\">\n            \t\t\t<label class=\"col-sm3 col-md-3\">Sales Unit</label>\n                \t\t<label class=\"col-sm-9 col-md-9\" for=\"SalesUnit\">\n\t                \t\t<select id=\"SalesUnit\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1\">\n\t                    <span class=\"outlay-plus-icon\">+</span>\n\t                </div>\n                </div>\n            </div>\n\t\t</div>\n\n\n\t\t<div class=\"row row-border\" style=\"padding-left: 40px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n            \t<div class=\"form-group\">\n            \t\t<label>Must Have Secondary Billing Elements</label>\n            \t</div>\n            </div>\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n        \t\t<div class=\"form-group\">\n        \t\t\t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-6 col-md-6\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"DealLine12tems2\">\n                \t\t\tDeal Line Items\n\t                \t\t<select id=\"DealLineItems2\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"Outlay\">\n                \t\t\tOutlay\n\t                \t\t<input id=\"Outlay\" placeholder=\"Outlay\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"StartDate\">\n                \t\t\tStart Date\n\t                \t\t<input placeholder=\"Start Date\" id=\"StartDate\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"EndDate\">\n                \t\t\tEnd Date\n\t                \t\t<input placeholder=\"End Date\" id=\"EndDate\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"SalesUnit2\">\n                \t\t\tSales Unit\n\t                \t\t<select id=\"SalesUnit2\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"FCT2\">\n                \t\t\tFCT\n\t                \t\t<input placeholder=\"End Date\" id=\"FCT2\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label class=\"col-sm-12 col-md-12\" for=\"NoofEpisides\">\n                \t\t\tNo of Episides\n\t                \t\t<input placeholder=\"End Date\" id=\"NoofEpisides\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<!-- <label class=\"col-sm-12 col-md-12\"></label> -->\n                \t\t<label for=\"ValueAdd\">\n                \t\t\tValue Add\n\t                \t\t<input type=\"checkbox\" id=\"ValueAdd\" class=\"checkbox-icon\">\n\t                \t\t<span class=\"outlay-plus-icon\" style=\"margin-left: 15px\">+</span>\n\t                \t</label>\n\t                \t\n                \t</div>\n            \t</div>\n            </div>\n        </div>\n\n\n\n        <div class=\"row row-border\" style=\"padding-left: 40px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n            \t<div class=\"form-group\">\n            \t\t<label>Must Have Product Package</label>\n            \t</div>\n            </div>\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n        \t\t<div class=\"form-group\">\n        \t\t\t<div class=\"col-sm-3 col-md-3 form-col-padding-2px\">\n            \t\t\t<label class=\"col-sm-6 col-md-6\">Package Type</label>\n                \t\t<label class=\"col-sm-6 col-md-6\" for=\"PackageType\">\n\t                \t\t<select id=\"PackageType\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-3 col-md-3 form-col-padding-2px\">\n            \t\t\t<label class=\"col-sm-6 col-md-6\">Package Name</label>\n                \t\t<label class=\"col-sm-6 col-md-6\" for=\"PackageName\">\n\t                \t\t<select id=\"PackageName\" class=\"form-control\"></select>\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-3 col-md-3 form-col-padding-2px\">\n            \t\t\t<label class=\"col-sm-6 col-md-6\">Outlay</label>\n                \t\t<label class=\"col-sm-6 col-md-6\" for=\"Outlay\">\n\t                \t\t<input id=\"Outlay\" placeholder=\"Outlay\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-2 col-md-2 form-col-padding-2px\">\n            \t\t\t<label class=\"col-sm-6 col-md-6\">Date?</label>\n                \t\t<label class=\"col-sm-6 col-md-6\" for=\"DateProductPackage\">\n\t                \t\t<input placeholder=\"Date\" id=\"DateProductPackage\" class=\"form-control\">\n\t                \t</label>\n                \t</div>\n                \t<div class=\"col-sm-1 col-md-1 form-col-padding-2px\">\n\t                \t<span class=\"outlay-plus-icon\">+</span>\n                \t</div>\n            \t</div>\n            </div>\n        </div>\n        <div class=\"row row-border\" style=\"padding-left: 40px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n        \t\t<div class=\"form-group\">\n        \t\t\t<label class=\"col-sm-2 col-md-2\">Demand Confidence</label>\n        \t\t\t<div class=\"col-sm-8 col-md-8\">\n            \t\t\t<label for=\"CPTLow\" class=\"col-sm-2 col-md-2\">\n\t                \t\t<input type=\"radio\" name=\"rgDemand\" id=\"Low\">Low\n\t                \t</label>\n\t                \t<label for=\"High\" class=\"col-sm-2 col-md-2\">\n\t                \t\t<input type=\"radio\" name=\"rgDemand\" id=\"High\">High\n\t                \t</label>\n                \t</div>\n            \t</div>\n            </div>\n        </div>\n\n        <div class=\"row\" style=\"padding-left: 40px; padding-top: 15px;\">\n\t\t\t<div class=\"col-xs-12 col-sm-12 col-md-12\">\n        \t\t<div class=\"form-group\" style=\"text-align: center;\">\n        \t\t\t<input type=\"button\" name=\"\" value=\"Reset\">\n        \t\t\t<input type=\"button\" name=\"\" value=\"Submit\" (click)=\"onSubmit()\" style=\"margin-left: 20px\">\n            \t</div>\n            </div>\n        </div>\n\t</form>\n</div>"

/***/ },

/***/ 736:
/***/ function(module, exports) {

module.exports = "<p>\n  submitforapproval works!\n</p>\n"

/***/ },

/***/ 737:
/***/ function(module, exports) {

module.exports = "<div [hidden]=\"!active\" id=\"tab-container\">\n  <ng-content></ng-content>\n</div>\n"

/***/ },

/***/ 738:
/***/ function(module, exports) {

module.exports = "<ul class=\"nav nav-tabs\">\n  <li *ngFor=\"let tab of tabs\" [class]=\"tab.active ? 'active' : ''\">\n    <a data-toggle=\"tab\" style=\"cursor: pointer;\" (click)=\"selectTab(tab)\">{{tab.title}}</a>\n  </li>\n</ul>\n<ng-content></ng-content>"

/***/ }

},[1015]);
//# sourceMappingURL=main.bundle.map