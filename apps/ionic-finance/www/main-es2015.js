(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../../libs/client/core/src/index.ts":
/*!*************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/index.ts ***!
  \*************************************************************************/
/*! exports provided: CoreModule, AccountService, EventService, TransactionService, SubscriptionService, AuthService, BearerInterceptor, createSession, SessionQuery, SessionStore, AccountQuery, AccountStore, SubscriptionQuery, createSubscription, SubscriptionStore, AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/core.module */ "../../libs/client/core/src/lib/core.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return _lib_core_module__WEBPACK_IMPORTED_MODULE_0__["CoreModule"]; });

/* harmony import */ var _lib_services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/services */ "../../libs/client/core/src/lib/services/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_1__["AccountService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_1__["EventService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_1__["TransactionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_1__["SubscriptionService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _lib_services__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony import */ var _lib_interceptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/interceptors */ "../../libs/client/core/src/lib/interceptors/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BearerInterceptor", function() { return _lib_interceptors__WEBPACK_IMPORTED_MODULE_2__["BearerInterceptor"]; });

/* harmony import */ var _lib_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/state */ "../../libs/client/core/src/lib/state/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSession", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["createSession"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionQuery", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["SessionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStore", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["SessionStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountQuery", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["AccountQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountStore", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["AccountStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionQuery", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["SubscriptionQuery"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSubscription", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["createSubscription"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionStore", function() { return _lib_state__WEBPACK_IMPORTED_MODULE_3__["SubscriptionStore"]; });

/* harmony import */ var _lib_guards__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/guards */ "../../libs/client/core/src/lib/guards/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _lib_guards__WEBPACK_IMPORTED_MODULE_4__["AuthGuard"]; });








/***/ }),

/***/ "../../libs/client/core/src/lib/core.module.ts":
/*!***********************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/core.module.ts ***!
  \***********************************************************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services */ "../../libs/client/core/src/lib/services/index.ts");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tokens */ "../../libs/client/core/src/lib/tokens/index.ts");
/* harmony import */ var _services_finance_subscription_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/finance/subscription.service */ "../../libs/client/core/src/lib/services/finance/subscription.service.ts");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/auth/auth.service */ "../../libs/client/core/src/lib/services/auth/auth.service.ts");
var CoreModule_1;







let CoreModule = CoreModule_1 = class CoreModule {
    static forRoot(option) {
        return {
            ngModule: CoreModule_1,
            providers: [
                _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
                _services__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
                _services_finance_subscription_service__WEBPACK_IMPORTED_MODULE_5__["SubscriptionService"],
                _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"],
                {
                    provide: _tokens__WEBPACK_IMPORTED_MODULE_4__["BASE_URL"],
                    useValue: option.url
                }
            ]
        };
    }
};
CoreModule = CoreModule_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
        providers: [
            _services__WEBPACK_IMPORTED_MODULE_3__["AccountService"],
            _services__WEBPACK_IMPORTED_MODULE_3__["TransactionService"],
            _services_finance_subscription_service__WEBPACK_IMPORTED_MODULE_5__["SubscriptionService"]
        ]
    })
], CoreModule);



/***/ }),

/***/ "../../libs/client/core/src/lib/guards/auth.guard.ts":
/*!*****************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/guards/auth.guard.ts ***!
  \*****************************************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../state */ "../../libs/client/core/src/lib/state/index.ts");




let AuthGuard = class AuthGuard {
    constructor(sessionQuery, router) {
        this.sessionQuery = sessionQuery;
        this.router = router;
    }
    canActivate(route, state) {
        if (!this.sessionQuery.getSession()) {
            this.router.navigate(['auth'])
                .then();
        }
        return !!this.sessionQuery.getSession();
    }
};
AuthGuard.ctorParameters = () => [
    { type: _state__WEBPACK_IMPORTED_MODULE_3__["SessionQuery"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_state__WEBPACK_IMPORTED_MODULE_3__["SessionQuery"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AuthGuard);



/***/ }),

/***/ "../../libs/client/core/src/lib/guards/index.ts":
/*!************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/guards/index.ts ***!
  \************************************************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.guard */ "../../libs/client/core/src/lib/guards/auth.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return _auth_guard__WEBPACK_IMPORTED_MODULE_0__["AuthGuard"]; });




/***/ }),

/***/ "../../libs/client/core/src/lib/interceptors/bearer.interceptor.ts":
/*!*******************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/interceptors/bearer.interceptor.ts ***!
  \*******************************************************************************************************/
/*! exports provided: BearerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BearerInterceptor", function() { return BearerInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../state */ "../../libs/client/core/src/lib/state/index.ts");



let BearerInterceptor = class BearerInterceptor {
    constructor(sessionQuery) {
        this.sessionQuery = sessionQuery;
    }
    intercept(request, next) {
        if (this.sessionQuery.getSession()) {
            request = request.clone({
                setHeaders: {
                    'Authorization': `Bearer ${this.sessionQuery.getSession().token}`
                }
            });
        }
        return next.handle(request);
    }
};
BearerInterceptor.ctorParameters = () => [
    { type: _state__WEBPACK_IMPORTED_MODULE_2__["SessionQuery"] }
];
BearerInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_state__WEBPACK_IMPORTED_MODULE_2__["SessionQuery"]])
], BearerInterceptor);



/***/ }),

/***/ "../../libs/client/core/src/lib/interceptors/index.ts":
/*!******************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/interceptors/index.ts ***!
  \******************************************************************************************/
/*! exports provided: BearerInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _bearer_interceptor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bearer.interceptor */ "../../libs/client/core/src/lib/interceptors/bearer.interceptor.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BearerInterceptor", function() { return _bearer_interceptor__WEBPACK_IMPORTED_MODULE_0__["BearerInterceptor"]; });




/***/ }),

/***/ "../../libs/client/core/src/lib/services/auth/auth.service.ts":
/*!**************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/services/auth/auth.service.ts ***!
  \**************************************************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "../../libs/client/core/src/lib/tokens/index.ts");




let AuthService = class AuthService {
    constructor(url, http) {
        this.url = url;
        this.http = http;
        this.baseEndpoint = `${this.url}/auth`;
    }
    signIn(input) {
        return this.http.post(`${this.baseEndpoint}/sign-in`, input);
    }
    signUp(input) {
        return this.http.post(`${this.baseEndpoint}/sign-up`, input);
    }
};
AuthService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_tokens__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "../../libs/client/core/src/lib/services/auth/index.ts":
/*!*******************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/services/auth/index.ts ***!
  \*******************************************************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.service */ "../../libs/client/core/src/lib/services/auth/auth.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_0__["AuthService"]; });




/***/ }),

/***/ "../../libs/client/core/src/lib/services/event.service.ts":
/*!**********************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/services/event.service.ts ***!
  \**********************************************************************************************/
/*! exports provided: EventService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return EventService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");




let EventService = class EventService {
    constructor() {
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.events = this.subject.asObservable();
    }
    dispatch(key, event) {
        this.subject.next({
            routingKey: key,
            payload: event
        });
    }
    route(key) {
        return this.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])((event) => {
            return event.routingKey === key;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(event => event.payload));
    }
};
EventService.ctorParameters = () => [];
EventService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], EventService);



/***/ }),

/***/ "../../libs/client/core/src/lib/services/finance/account.service.ts":
/*!********************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/services/finance/account.service.ts ***!
  \********************************************************************************************************/
/*! exports provided: AccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return AccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../tokens */ "../../libs/client/core/src/lib/tokens/index.ts");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state */ "../../libs/client/core/src/lib/state/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






let AccountService = class AccountService {
    constructor(baseUrl, http, accountStore) {
        this.baseUrl = baseUrl;
        this.http = http;
        this.accountStore = accountStore;
    }
    getAll() {
        return this.http.get(`${this.baseUrl}/accounts`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(accounts => this.accountStore.set(accounts)));
    }
    update(id, partial) {
        return this.http.put(`${this.baseUrl}/accounts/${id}`, partial)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(account => this.accountStore.update(account.id, account)));
    }
    create(partial) {
        return this.http.post(`${this.baseUrl}/accounts`, partial)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(account => this.accountStore.add(account)));
    }
    delete(accountId) {
        return this.http.delete(`${this.baseUrl}/accounts/${accountId}`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.accountStore.remove(accountId)));
    }
};
AccountService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_tokens__WEBPACK_IMPORTED_MODULE_3__["BASE_URL"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
    { type: _state__WEBPACK_IMPORTED_MODULE_4__["AccountStore"] }
];
AccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
        _state__WEBPACK_IMPORTED_MODULE_4__["AccountStore"]])
], AccountService);



/***/ }),

/***/ "../../libs/client/core/src/lib/services/finance/subscription.service.ts":
/*!*************************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/services/finance/subscription.service.ts ***!
  \*************************************************************************************************************/
/*! exports provided: SubscriptionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return SubscriptionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "../../libs/client/core/src/lib/tokens/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _state_subscription_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../state/subscription.store */ "../../libs/client/core/src/lib/state/subscription.store.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");






let SubscriptionService = class SubscriptionService {
    constructor(baseUrl, http, subscriptionStore) {
        this.baseUrl = baseUrl;
        this.http = http;
        this.subscriptionStore = subscriptionStore;
    }
    all() {
        return this.http.get(`${this.baseUrl}/subscriptions`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(sb => this.subscriptionStore.set(sb)));
    }
    create(payload) {
        return this.http.post(`${this.baseUrl}/subscriptions`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(sb => this.subscriptionStore.add(sb)));
    }
    update(id, payload) {
        return this.http.put(`${this.baseUrl}/subscriptions/${id}`, payload)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(sb => this.subscriptionStore.add(sb)));
    }
    delete(id) {
        return this.http.post(`${this.baseUrl}/subscriptions/${id}`, id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.subscriptionStore.remove(id)));
    }
};
SubscriptionService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_tokens__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _state_subscription_store__WEBPACK_IMPORTED_MODULE_4__["SubscriptionStore"] }
];
SubscriptionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _state_subscription_store__WEBPACK_IMPORTED_MODULE_4__["SubscriptionStore"]])
], SubscriptionService);



/***/ }),

/***/ "../../libs/client/core/src/lib/services/finance/transaction.service.ts":
/*!************************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/services/finance/transaction.service.ts ***!
  \************************************************************************************************************/
/*! exports provided: TransactionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return TransactionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../tokens */ "../../libs/client/core/src/lib/tokens/index.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _account_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.service */ "../../libs/client/core/src/lib/services/finance/account.service.ts");





let TransactionService = class TransactionService {
    constructor(baseUrl, http, accountService) {
        this.baseUrl = baseUrl;
        this.http = http;
        this.accountService = accountService;
    }
    getTransactionsByDate(date) {
        return this.http.get(`${this.baseUrl}/transactions?date=${date}`);
    }
    getTransactions(date) {
        const formattedDate = date.toISOString().slice(0, 10);
        return this.http.get(`${this.baseUrl}/transactions?date=${formattedDate}`);
    }
    withdraw(withdraw) {
        return this.http.post(`${this.baseUrl}/transactions/withdraw`, withdraw);
    }
    income(income) {
        return this.http.post(`${this.baseUrl}/transactions/income`, income);
    }
    transfer(transfer) {
        return this.http.post(`${this.baseUrl}/transactions/transfer`, transfer);
    }
    totalSpendMoney(date) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const response = yield this.getTransactions(date).toPromise();
            return response.data
                .filter(transaction => transaction.operation === 'WITHDRAW')
                .reduce((prev, curr) => prev + curr.amount, 0);
        });
    }
    delete(id) {
        return this.http.delete(`${this.baseUrl}/transactions/${id}`);
    }
};
TransactionService.ctorParameters = () => [
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_tokens__WEBPACK_IMPORTED_MODULE_2__["BASE_URL"],] }] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
    { type: _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"] }
];
TransactionService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"],
        _account_service__WEBPACK_IMPORTED_MODULE_4__["AccountService"]])
], TransactionService);



/***/ }),

/***/ "../../libs/client/core/src/lib/services/index.ts":
/*!**************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/services/index.ts ***!
  \**************************************************************************************/
/*! exports provided: AccountService, EventService, TransactionService, SubscriptionService, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _finance_account_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./finance/account.service */ "../../libs/client/core/src/lib/services/finance/account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountService", function() { return _finance_account_service__WEBPACK_IMPORTED_MODULE_0__["AccountService"]; });

/* harmony import */ var _event_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./event.service */ "../../libs/client/core/src/lib/services/event.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "EventService", function() { return _event_service__WEBPACK_IMPORTED_MODULE_1__["EventService"]; });

/* harmony import */ var _finance_transaction_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./finance/transaction.service */ "../../libs/client/core/src/lib/services/finance/transaction.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TransactionService", function() { return _finance_transaction_service__WEBPACK_IMPORTED_MODULE_2__["TransactionService"]; });

/* harmony import */ var _finance_subscription_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./finance/subscription.service */ "../../libs/client/core/src/lib/services/finance/subscription.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionService", function() { return _finance_subscription_service__WEBPACK_IMPORTED_MODULE_3__["SubscriptionService"]; });

/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth */ "../../libs/client/core/src/lib/services/auth/index.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth__WEBPACK_IMPORTED_MODULE_4__["AuthService"]; });








/***/ }),

/***/ "../../libs/client/core/src/lib/state/account.query.ts":
/*!*******************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/account.query.ts ***!
  \*******************************************************************************************/
/*! exports provided: AccountQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountQuery", function() { return AccountQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
/* harmony import */ var _account_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.store */ "../../libs/client/core/src/lib/state/account.store.ts");




let AccountQuery = class AccountQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
AccountQuery.ctorParameters = () => [
    { type: _account_store__WEBPACK_IMPORTED_MODULE_3__["AccountStore"] }
];
AccountQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_account_store__WEBPACK_IMPORTED_MODULE_3__["AccountStore"]])
], AccountQuery);



/***/ }),

/***/ "../../libs/client/core/src/lib/state/account.store.ts":
/*!*******************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/account.store.ts ***!
  \*******************************************************************************************/
/*! exports provided: AccountStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountStore", function() { return AccountStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");



let AccountStore = class AccountStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
AccountStore.ctorParameters = () => [];
AccountStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'account'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AccountStore);



/***/ }),

/***/ "../../libs/client/core/src/lib/state/index.ts":
/*!***********************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/index.ts ***!
  \***********************************************************************************/
/*! exports provided: createSession, SessionQuery, SessionStore, AccountQuery, AccountStore, SubscriptionQuery, createSubscription, SubscriptionStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _session_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./session.model */ "../../libs/client/core/src/lib/state/session.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSession", function() { return _session_model__WEBPACK_IMPORTED_MODULE_0__["createSession"]; });

/* harmony import */ var _session_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./session.query */ "../../libs/client/core/src/lib/state/session.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionQuery", function() { return _session_query__WEBPACK_IMPORTED_MODULE_1__["SessionQuery"]; });

/* harmony import */ var _session_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./session.store */ "../../libs/client/core/src/lib/state/session.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SessionStore", function() { return _session_store__WEBPACK_IMPORTED_MODULE_2__["SessionStore"]; });

/* harmony import */ var _account_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account.query */ "../../libs/client/core/src/lib/state/account.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountQuery", function() { return _account_query__WEBPACK_IMPORTED_MODULE_3__["AccountQuery"]; });

/* harmony import */ var _account_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./account.store */ "../../libs/client/core/src/lib/state/account.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AccountStore", function() { return _account_store__WEBPACK_IMPORTED_MODULE_4__["AccountStore"]; });

/* harmony import */ var _subscription_query__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./subscription.query */ "../../libs/client/core/src/lib/state/subscription.query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionQuery", function() { return _subscription_query__WEBPACK_IMPORTED_MODULE_5__["SubscriptionQuery"]; });

/* harmony import */ var _subscription_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./subscription.model */ "../../libs/client/core/src/lib/state/subscription.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSubscription", function() { return _subscription_model__WEBPACK_IMPORTED_MODULE_6__["createSubscription"]; });

/* harmony import */ var _subscription_store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subscription.store */ "../../libs/client/core/src/lib/state/subscription.store.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubscriptionStore", function() { return _subscription_store__WEBPACK_IMPORTED_MODULE_7__["SubscriptionStore"]; });











/***/ }),

/***/ "../../libs/client/core/src/lib/state/session.model.ts":
/*!*******************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/session.model.ts ***!
  \*******************************************************************************************/
/*! exports provided: createSession */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSession", function() { return createSession; });
function createSession(params) {
    return {};
}


/***/ }),

/***/ "../../libs/client/core/src/lib/state/session.query.ts":
/*!*******************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/session.query.ts ***!
  \*******************************************************************************************/
/*! exports provided: SessionQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionQuery", function() { return SessionQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
/* harmony import */ var _session_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./session.store */ "../../libs/client/core/src/lib/state/session.store.ts");




let SessionQuery = class SessionQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
    currentSession() {
        return this.select(state => state.ui);
    }
    getSession() {
        if (this.store.getValue().ui.token === '') {
            return null;
        }
        return this.store.getValue().ui;
    }
    logged$() {
        return this.select(state => state.ui.token !== '');
    }
    token$() {
        return this.select(state => state.ui.token);
    }
};
SessionQuery.ctorParameters = () => [
    { type: _session_store__WEBPACK_IMPORTED_MODULE_3__["SessionStore"] }
];
SessionQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_session_store__WEBPACK_IMPORTED_MODULE_3__["SessionStore"]])
], SessionQuery);



/***/ }),

/***/ "../../libs/client/core/src/lib/state/session.store.ts":
/*!*******************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/session.store.ts ***!
  \*******************************************************************************************/
/*! exports provided: SessionStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStore", function() { return SessionStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");



let SessionStore = class SessionStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super({
            ui: {
                token: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        });
    }
    logged(token, firstName, lastName, email) {
        this.update({
            ui: {
                token: token,
                firstName: firstName,
                lastName: lastName,
                email: email
            }
        });
    }
    logout() {
        this.update({
            ui: {
                token: '',
                firstName: '',
                lastName: '',
                email: ''
            }
        });
    }
};
SessionStore.ctorParameters = () => [];
SessionStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'session'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SessionStore);



/***/ }),

/***/ "../../libs/client/core/src/lib/state/subscription.model.ts":
/*!************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/subscription.model.ts ***!
  \************************************************************************************************/
/*! exports provided: createSubscription */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSubscription", function() { return createSubscription; });
function createSubscription(params) {
    return {};
}


/***/ }),

/***/ "../../libs/client/core/src/lib/state/subscription.query.ts":
/*!************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/subscription.query.ts ***!
  \************************************************************************************************/
/*! exports provided: SubscriptionQuery */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionQuery", function() { return SubscriptionQuery; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
/* harmony import */ var _subscription_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./subscription.store */ "../../libs/client/core/src/lib/state/subscription.store.ts");




let SubscriptionQuery = class SubscriptionQuery extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["QueryEntity"] {
    constructor(store) {
        super(store);
        this.store = store;
    }
};
SubscriptionQuery.ctorParameters = () => [
    { type: _subscription_store__WEBPACK_IMPORTED_MODULE_3__["SubscriptionStore"] }
];
SubscriptionQuery = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_subscription_store__WEBPACK_IMPORTED_MODULE_3__["SubscriptionStore"]])
], SubscriptionQuery);



/***/ }),

/***/ "../../libs/client/core/src/lib/state/subscription.store.ts":
/*!************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/state/subscription.store.ts ***!
  \************************************************************************************************/
/*! exports provided: SubscriptionStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionStore", function() { return SubscriptionStore; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");



let SubscriptionStore = class SubscriptionStore extends _datorama_akita__WEBPACK_IMPORTED_MODULE_2__["EntityStore"] {
    constructor() {
        super();
    }
};
SubscriptionStore.ctorParameters = () => [];
SubscriptionStore = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
    Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_2__["StoreConfig"])({
        name: 'subscription'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], SubscriptionStore);



/***/ }),

/***/ "../../libs/client/core/src/lib/tokens/index.ts":
/*!************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/libs/client/core/src/lib/tokens/index.ts ***!
  \************************************************************************************/
/*! exports provided: BASE_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BASE_URL", function() { return BASE_URL; });
const BASE_URL = "BASE_URL";


/***/ }),

/***/ "../../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$":
/*!***************************************************************************************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \***************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-action-sheet.entry.js",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-alert.entry.js",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-app_8.entry.js",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-avatar_3.entry.js",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-back-button.entry.js",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js",
		5
	],
	"./ion-button_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-button_2.entry.js",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-card_5.entry.js",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-checkbox.entry.js",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-chip.entry.js",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-col_3.entry.js",
		10
	],
	"./ion-datetime_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-datetime_3.entry.js",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-fab_3.entry.js",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-img.entry.js",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-infinite-scroll_2.entry.js",
		14
	],
	"./ion-input.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-input.entry.js",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-item-option_3.entry.js",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-item_8.entry.js",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-loading.entry.js",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-menu_3.entry.js",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-modal.entry.js",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-nav_2.entry.js",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-popover.entry.js",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-progress-bar.entry.js",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-radio_2.entry.js",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-range.entry.js",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-refresher_2.entry.js",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-reorder_2.entry.js",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-ripple-effect.entry.js",
		28
	],
	"./ion-route_4.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-route_4.entry.js",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-searchbar.entry.js",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-segment_2.entry.js",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-select_3.entry.js",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-slide_2.entry.js",
		33
	],
	"./ion-spinner.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-spinner.entry.js",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-split-pane.entry.js",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-tab-bar_2.entry.js",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-tab_2.entry.js",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-text.entry.js",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-textarea.entry.js",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-toast.entry.js",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-toggle.entry.js",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"../../node_modules/@ionic/core/dist/esm/ion-virtual-scroll.entry.js",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../node_modules/@ionic/core/dist/esm lazy recursive ^\\.\\/.*\\.entry\\.js$ include: \\.entry\\.js$ exclude: \\.system\\.entry\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!************************************************************************************************************!*\
  !*** /home/gelleson/WebstormProjects/bff/node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n\n  <ion-toolbar>\n    <ion-buttons slot=\"end\">\n      <ion-button>\n        <ion-icon name=\"ellipsis-horizontal-outline\"></ion-icon>\n      </ion-button>\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title color=\"primary\">\n\n      <h4 class=\"title\">BFF.mobile</h4>\n    </ion-title>\n  </ion-toolbar>\n\n  <ion-content>\n    <ion-router-outlet></ion-router-outlet>\n  </ion-content>\n</ion-app>\n\n");

/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _bff_client_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @bff/client/core */ "../../libs/client/core/src/index.ts");




const routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        canActivate: [_bff_client_core__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"]],
        loadChildren: () => Promise.all(/*! import() | home-home-module */[__webpack_require__.e("common"), __webpack_require__.e("home-home-module")]).then(__webpack_require__.bind(null, /*! ./home/home.module */ "./src/app/home/home.module.ts")).then((m) => m.HomePageModule),
    },
    {
        path: 'auth',
        loadChildren: () => Promise.all(/*! import() | auth-auth-module */[__webpack_require__.e("common"), __webpack_require__.e("auth-auth-module")]).then(__webpack_require__.bind(null, /*! ./auth/auth.module */ "./src/app/auth/auth.module.ts")).then((m) => m.AuthModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] }),
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".title {\n  color: #02ff73;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvaW9uaWMtZmluYW5jZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQUxGIiwiZmlsZSI6ImFwcHMvaW9uaWMtZmluYW5jZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIEFwcCBTdHlsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFB1dCBzdHlsZSBydWxlcyBoZXJlIHRoYXQgeW91IHdhbnQgdG8gYXBwbHkgdG8gdGhlIGVudGlyZSBhcHBsaWNhdGlvbi4gVGhlc2Vcbi8vIHN0eWxlcyBhcmUgZm9yIHRoZSBlbnRpcmUgYXBwIGFuZCBub3QganVzdCBvbmUgY29tcG9uZW50LiBBZGRpdGlvbmFsbHksIHRoaXNcbi8vIGZpbGUgY2FuIGhvbGQgU2FzcyBtaXhpbnMsIGZ1bmN0aW9ucywgYW5kIHBsYWNlaG9sZGVyIGNsYXNzZXMgdG8gYmUgaW1wb3J0ZWRcbi8vIGFuZCB1c2VkIHRocm91Z2hvdXQgdGhlIGFwcGxpY2F0aW9uLlxuLnRpdGxlIHtcbiAgY29sb3I6ICMwMmZmNzM7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuIl19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @capacitor/core */ "./node_modules/@capacitor/core/dist/esm/index.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "../../node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "../../node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");




const { StatusBar } = _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["Plugins"];


let AppComponent = class AppComponent {
    constructor(platform, splashScreen, statusBar) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.initializeApp();
    }
    initializeApp() {
        this.platform.ready().then(() => {
            if (this.platform.is('capacitor')) {
                StatusBar.setStyle({
                    style: _capacitor_core__WEBPACK_IMPORTED_MODULE_3__["StatusBarStyle"].Dark,
                });
            }
            else {
                this.statusBar.styleDefault();
                this.splashScreen.hide();
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
    { type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"] },
    { type: _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "../../node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"],
        _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__["SplashScreen"],
        _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__["StatusBar"]])
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "../../node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/splash-screen/ngx */ "../../node_modules/@ionic-native/splash-screen/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/status-bar/ngx */ "../../node_modules/@ionic-native/status-bar/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-zorro-antd/typography */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-typography.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @datorama/akita-ngdevtools */ "../../node_modules/@datorama/akita-ngdevtools/__ivy_ngcc__/fesm2015/datorama-akita-ngdevtools.js");
/* harmony import */ var ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-zorro-antd/drawer */ "../../node_modules/ng-zorro-antd/__ivy_ngcc__/fesm2015/ng-zorro-antd-drawer.js");
/* harmony import */ var _bff_client_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bff/client/core */ "../../libs/client/core/src/index.ts");














let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"],
            _datorama_akita_ngdevtools__WEBPACK_IMPORTED_MODULE_11__["AkitaNgDevtools"].forRoot(),
            _bff_client_core__WEBPACK_IMPORTED_MODULE_13__["CoreModule"].forRoot({
                url: 'http://localhost:3333/api'
            }),
            ng_zorro_antd_typography__WEBPACK_IMPORTED_MODULE_9__["NzTypographyModule"],
            ng_zorro_antd_drawer__WEBPACK_IMPORTED_MODULE_12__["NzDrawerModule"]
        ],
        providers: [
            _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_6__["StatusBar"],
            _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__["SplashScreen"],
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouteReuseStrategy"],
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicRouteStrategy"]
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"],
                useClass: _bff_client_core__WEBPACK_IMPORTED_MODULE_13__["BearerInterceptor"],
                multi: true
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
    })
], AppModule);



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    url: 'http://localhost:3333/api'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _datorama_akita__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @datorama/akita */ "../../node_modules/@datorama/akita/__ivy_ngcc__/fesm2015/datorama-akita.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! localforage */ "../../node_modules/localforage/dist/localforage.js");
/* harmony import */ var localforage__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(localforage__WEBPACK_IMPORTED_MODULE_5__);






localforage__WEBPACK_IMPORTED_MODULE_5__["config"]({
    driver: localforage__WEBPACK_IMPORTED_MODULE_5__["LOCALSTORAGE"],
    name: 'Akita',
    version: 1.0,
    storeName: 'akita-storage'
});
Object(_datorama_akita__WEBPACK_IMPORTED_MODULE_4__["persistState"])({ include: ['session'], storage: localforage__WEBPACK_IMPORTED_MODULE_5__ });
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/gelleson/WebstormProjects/bff/apps/ionic-finance/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map