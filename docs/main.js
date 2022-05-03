(self["webpackChunkduet_angular_template"] = self["webpackChunkduet_angular_template"] || []).push([["main"],{

/***/ 33:
/*!************************************!*\
  !*** ./src/app/agreement.model.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Agreement": () => (/* binding */ Agreement)
/* harmony export */ });
class Agreement {
    constructor(label, price) {
        this.label = label;
        this.price = price;
    }
}


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-page/index-page.component */ 8954);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: "", component: _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_0__.IndexPageComponent }];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(routes, { scrollPositionRestoration: "enabled", useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 970);





class AppComponent {
    constructor(modalService, activeModal) {
        this.modalService = modalService;
        this.activeModal = activeModal;
    }
    ngOnInit() {
        if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
            console.log('IOS Safari Detected!!!!!');
        }
        this.modalService.activeInstances.subscribe((list) => {
            console.log('List::: ', list);
            if (list.length > 0) {
                console.log('Element::: ', document.querySelector('ngb-modal-window').ariaModal);
                if (document.querySelector('ngb-modal-window')) {
                    if ((document.querySelector('ngb-modal-window')).getAttribute('role')) {
                        console.log('Inside Role.......');
                        (document.querySelector('ngb-modal-window')).removeAttribute('role');
                    }
                    setTimeout(() => {
                        if ((document.querySelector('ngb-modal-window')).ariaModal) {
                            console.log('Inside aria-modal.......');
                            (document.querySelector('ngb-modal-window')).removeAttribute('aria-modal');
                            console.log('Element2::: ', document.querySelector('ngb-modal-window'));
                            window.scroll(0, 0);
                        }
                    }, 500);
                    console.log('Data removed....');
                }
            }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbActiveModal)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 0, consts: [[1, "duet-sticky-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index-page/index-page.component */ 8954);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _investment_amount_investment_amount_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./investment-amount/investment-amount.component */ 9631);
/* harmony import */ var _investment_origin_investment_origin_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./investment-origin/investment-origin.component */ 6458);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./summary/summary.component */ 6155);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test/test.component */ 4386);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);

// import { DuetComponents } from "@duetds/angular"












class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbActiveModal], imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _index_page_index_page_component__WEBPACK_IMPORTED_MODULE_2__.IndexPageComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_4__.FooterComponent, _investment_amount_investment_amount_component__WEBPACK_IMPORTED_MODULE_5__.InvestmentAmountComponent, _investment_origin_investment_origin_component__WEBPACK_IMPORTED_MODULE_6__.InvestmentOriginComponent,
        _summary_summary_component__WEBPACK_IMPORTED_MODULE_7__.SummaryComponent, _test_test_component__WEBPACK_IMPORTED_MODULE_8__.TestComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 1443:
/*!***********************************************!*\
  !*** ./src/app/currency-formatter.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrencyFormatterService": () => (/* binding */ CurrencyFormatterService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CurrencyFormatterService {
    constructor() {
        this.formatter = new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" });
    }
    format(value) {
        return this.formatter.format(value);
    }
}
CurrencyFormatterService.ɵfac = function CurrencyFormatterService_Factory(t) { return new (t || CurrencyFormatterService)(); };
CurrencyFormatterService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CurrencyFormatterService, factory: CurrencyFormatterService.ɵfac, providedIn: "root" });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = function () { return { label: "Turvallisuus ja k\u00E4ytt\u00F6ehdot", href: "#", external: "true" }; };
const _c1 = function () { return { label: "Ev\u00E4steet", href: "#", external: "true" }; };
const _c2 = function () { return { label: "Henkil\u00F6tietojen k\u00E4sittely", href: "#", external: "true" }; };
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
class FooterComponent {
    constructor() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 1, vars: 8, consts: [["variation", "simple", "language", "fi", 3, "menu"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duet-footer", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("menu", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c2)));
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

const _c0 = function () { return { label: "Takaisin", href: "/" }; };
class HeaderComponent {
    constructor() { }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 1, vars: 2, consts: [["logo-href", "", 3, "back"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "duet-header", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("back", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 8954:
/*!****************************************************!*\
  !*** ./src/app/index-page/index-page.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IndexPageComponent": () => (/* binding */ IndexPageComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _agreement_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../agreement.model */ 33);
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../test/test.component */ 4386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _investment_amount_investment_amount_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../investment-amount/investment-amount.component */ 9631);
/* harmony import */ var _investment_origin_investment_origin_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../investment-origin/investment-origin.component */ 6458);
/* harmony import */ var _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../summary/summary.component */ 6155);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);










const formatter = new Intl.NumberFormat("fi-FI", { style: "currency", currency: "EUR" });
class IndexPageComponent {
    constructor(formBuilder, modalService) {
        this.formBuilder = formBuilder;
        this.modalService = modalService;
        this.currentStep = 0;
        this.completed = false;
        this.modalDetails = false;
        this.form = this.formBuilder.group({
            investmentAmount: this.formBuilder.group({
                agreement: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]],
                additionalInvestment: 50
            }),
            investmentOrigin: this.formBuilder.group({
                salary: false,
                gift: false,
                heritage: false,
                entrepreneurialIncome: false,
                assets: false,
                otherIncome: false,
                investment: false,
                extras: null
            })
        });
        this.agreements = {
            1: new _agreement_model__WEBPACK_IMPORTED_MODULE_0__.Agreement("Vakuutus 1", 2500),
            2: new _agreement_model__WEBPACK_IMPORTED_MODULE_0__.Agreement("Vakuutus 2", 1000)
        };
    }
    get selectedAgreement() {
        return this.agreements[this.form.value.investmentAmount.agreement];
    }
    formatNumber(value) {
        return formatter.format(value);
    }
    handleStepChange(event) {
        this.currentStep = event.detail.toStep;
    }
    handleNextClick(event) {
        event.preventDefault();
        this.currentStep++;
    }
    handleSubmit(event) {
        event.preventDefault();
        this.completed = true;
    }
    openModalWithNgb() {
        const popdata = {
            modalActive: true,
        };
        const modalRef = this.modalService.open(_test_test_component__WEBPACK_IMPORTED_MODULE_1__.TestComponent, {
            windowClass: 'custom-modal custom-modal-medium',
            backdropClass: 'custom-backdrop',
        });
        modalRef.componentInstance.popupObj = popdata;
        return modalRef.result.then(() => {
            return true;
        });
    }
    simpleModal() {
        const modal = document.querySelector('duet-modal');
        this.modalDetails = true;
    }
    hide() {
        console.log('closing..!');
        this.modalDetails = false;
    }
    test() {
        console.log('button clicked');
        this.modalDetails = false;
    }
}
IndexPageComponent.ɵfac = function IndexPageComponent_Factory(t) { return new (t || IndexPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbModal)); };
IndexPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: IndexPageComponent, selectors: [["app-index-page"]], decls: 53, vars: 14, consts: [["center", ""], ["slot", "top", "role", "region"], ["breakpoint", "large", "size", "x-large"], ["level", "h1", "visual-level", "h2"], ["slot", "main"], [3, "formGroup", "ngSubmit"], ["variation", "primary", 3, "click"], [3, "selected", "duetStepChange"], ["heading", "Perustiedot", "formGroupName", "investmentAmount"], [3, "form", "agreements"], ["margin", "none", "variation", "primary", 3, "disabled", "click"], ["heading", "Tarkemmat tiedot", "formGroupName", "investmentOrigin"], [3, "form"], ["heading", "Yhteenveto"], [3, "agreement"], ["submit", "", "margin", "none", "variation", "primary", "expand", "", 3, "disabled"], ["heading", "You entered the following data:", 3, "active"], ["heading", "Normal Duet Modal", "icon", "profile-personal-info", 3, "active"], ["novalidate", "", "action", "#"], [1, "duet-text-center"], ["size", "large"], ["value", "suomi", "label", "Asiointikieli", "direction", "horizontal", "name", "group", "responsive", ""], ["label", "Suomi", "type", "radio", "value", "suomi", "expand", ""], ["label", "Svenska", "type", "radio", "value", "svenska", "expand", ""], ["label", "English", "type", "radio", "value", "english", "expand", ""], ["label", "Katuosoite", "name", "streetaddress", "placeholder", "Kotikatu 123", "expand", ""], [3, "click"]], template: function IndexPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "duet-layout", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "duet-spacer", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "duet-heading", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4, "P\u00E4\u00E4otsikko");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](5, "duet-spacer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function IndexPageComponent_Template_form_ngSubmit_7_listener($event) { return ctx.handleSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "duet-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IndexPageComponent_Template_duet_button_click_8_listener() { return ctx.openModalWithNgb(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "test with ngb");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "duet-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IndexPageComponent_Template_duet_button_click_10_listener() { return ctx.simpleModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "test");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "duet-stepper", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("duetStepChange", function IndexPageComponent_Template_duet_stepper_duetStepChange_12_listener($event) { return ctx.handleStepChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "duet-step", 8)(14, "duet-paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](16, "app-investment-amount", 9)(17, "duet-spacer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "duet-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IndexPageComponent_Template_duet_button_click_18_listener($event) { return ctx.handleNextClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, " Seuraava");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "duet-step", 11)(21, "duet-paragraph");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore etdolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](23, "app-investment-origin", 12)(24, "duet-spacer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "duet-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IndexPageComponent_Template_duet_button_click_25_listener($event) { return ctx.handleNextClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26, " Seuraava ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "duet-step", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](28, "duet-spacer")(29, "app-summary", 14)(30, "duet-spacer");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "duet-button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, " L\u00E4het\u00E4 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "duet-modal", 16)(34, "pre")(35, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](37, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "duet-modal", 17)(39, "form", 18)(40, "duet-paragraph", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " Kaikki kent\u00E4t ovat pakollisia ellei muuten mainita. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](42, "duet-spacer", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "duet-choice-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](44, "duet-choice", 22)(45, "duet-choice", 23)(46, "duet-choice", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](47, "duet-input", 25)(48, "duet-spacer", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "duet-button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IndexPageComponent_Template_duet_button_click_49_listener() { return ctx.test(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "Jatka");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "duet-button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function IndexPageComponent_Template_duet_button_click_51_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52, "Peruuta");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selected", ctx.currentStep);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form.get("investmentAmount"))("agreements", ctx.agreements);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("form", ctx.form.get("investmentOrigin"));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("agreement", ctx.selectedAgreement);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("active", ctx.completed);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](37, 12, ctx.form.value));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("active", ctx.modalDetails);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName, _investment_amount_investment_amount_component__WEBPACK_IMPORTED_MODULE_2__.InvestmentAmountComponent, _investment_origin_investment_origin_component__WEBPACK_IMPORTED_MODULE_3__.InvestmentOriginComponent, _summary_summary_component__WEBPACK_IMPORTED_MODULE_4__.SummaryComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgForm], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbmRleC1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 9631:
/*!******************************************************************!*\
  !*** ./src/app/investment-amount/investment-amount.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestmentAmountComponent": () => (/* binding */ InvestmentAmountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _currency_formatter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currency-formatter.service */ 1443);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




function InvestmentAmountComponent_duet_table_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "duet-table", 5)(1, "table")(2, "thead")(3, "tr")(4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Sijoituskohde");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "th", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Osuus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "tbody")(9, "tr")(10, "td")(11, "duet-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Kohde 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "duet-spacer", 8)(14, "duet-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "duet-visually-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, ", avautuu uuteen ikkunaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "tr")(20, "td")(21, "duet-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Kohde 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "duet-spacer", 8)(24, "duet-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "duet-visually-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, ", avautuu uuteen ikkunaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "tr")(30, "td")(31, "duet-button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Kohde 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](33, "duet-spacer", 8)(34, "duet-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "duet-visually-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, ", avautuu uuteen ikkunaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "td", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "50%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "tfoot")(40, "tr")(41, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Yhteisarvo");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](44);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatter.format(ctx_r0.selectedAgreement.price), " ");
} }
class InvestmentAmountComponent {
    constructor(formatter) {
        this.formatter = formatter;
    }
    ngOnInit() { }
    get selectedAgreement() {
        return this.agreements[this.form.value.agreement];
    }
    get agreementOptions() {
        return Object.entries(this.agreements).map(([value, { label, price }]) => {
            return {
                value,
                label: `${label} - ${this.formatter.format(price)}`
            };
        });
    }
}
InvestmentAmountComponent.ɵfac = function InvestmentAmountComponent_Factory(t) { return new (t || InvestmentAmountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_currency_formatter_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyFormatterService)); };
InvestmentAmountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: InvestmentAmountComponent, selectors: [["app-investment-amount"]], inputs: { agreements: "agreements", form: "form" }, decls: 6, vars: 3, consts: [[3, "formGroup"], ["formControlName", "agreement", "expand", "", "label", "Valitse sopimus", "placeholder", "Valitse\u2026", 3, "items"], ["variation", "plain", 4, "ngIf"], ["variation", "plain", "background", "gray-lighter"], ["formControlName", "additionalInvestment", "numeric-keyboard", "", "expand", "", "label", "Sy\u00F6t\u00E4 summa", "placeholder", "50", "icon", "form-money", "type", "number"], ["variation", "plain"], [1, "duet-text-right"], ["variation", "plain", "margin", "none", "padding", "none", "url", "https://www.duetds.com/assets/downloads/localtapiola-brand-guidelines.pdf", "external", ""], ["size", "xx-small", "direction", "horizontal"], ["name", "action-new-window-small", "margin", "none", "size", "xx-small"], [1, "duet-font-weight-semi-bold"], [1, "duet-text-right", "duet-font-weight-semi-bold", "duet-font-size-large"]], template: function InvestmentAmountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "duet-select", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, InvestmentAmountComponent_duet_table_2_Template, 45, 1, "duet-table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "duet-spacer");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "duet-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "duet-input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("items", ctx.agreementOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.selectedAgreement);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RtZW50LWFtb3VudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6458:
/*!******************************************************************!*\
  !*** ./src/app/investment-origin/investment-origin.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "InvestmentOriginComponent": () => (/* binding */ InvestmentOriginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function InvestmentOriginComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duet-input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class InvestmentOriginComponent {
    constructor() {
        this.hasExtras = false;
    }
    ngOnInit() { }
    handleExtrasChange(event) {
        this.hasExtras = event.detail.checked;
        if (!event.detail.checked) {
            this.form.get("extras").setValue(null);
        }
    }
}
InvestmentOriginComponent.ɵfac = function InvestmentOriginComponent_Factory(t) { return new (t || InvestmentOriginComponent)(); };
InvestmentOriginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InvestmentOriginComponent, selectors: [["app-investment-origin"]], inputs: { form: "form" }, decls: 9, vars: 2, consts: [[3, "formGroup"], ["formControlName", "salary", "label", "Valinta 1"], ["formControlName", "gift", "label", "Valinta 2"], ["formControlName", "heritage", "label", "Valinta 3"], ["formControlName", "entrepreneurialIncome", "label", "Valinta 4"], ["formControlName", "assets", "label", "Valinta 5"], ["formControlName", "otherIncome", "label", "Valinta 6"], ["label", "Muu, mik\u00E4?", 3, "duetChange"], [4, "ngIf"], ["formControlName", "extras", "label", "Kerro sijoitettavien varojen muu alkuper\u00E4", "label-hidden", ""]], template: function InvestmentOriginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "duet-checkbox", 1)(2, "duet-checkbox", 2)(3, "duet-checkbox", 3)(4, "duet-checkbox", 4)(5, "duet-checkbox", 5)(6, "duet-checkbox", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "duet-checkbox", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("duetChange", function InvestmentOriginComponent_Template_duet_checkbox_duetChange_7_listener($event) { return ctx.handleExtrasChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, InvestmentOriginComponent_div_8_Template, 2, 0, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.hasExtras);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJpbnZlc3RtZW50LW9yaWdpbi5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 6155:
/*!**********************************************!*\
  !*** ./src/app/summary/summary.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryComponent": () => (/* binding */ SummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _currency_formatter_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../currency-formatter.service */ 1443);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



function SummaryComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "duet-input", 1)(2, "duet-spacer");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "duet-paragraph");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Valitsemasi vaihtoehto jakautuu seuraavasti:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "duet-table", 2)(6, "table")(7, "thead")(8, "tr")(9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Sijoituskohde");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Osuus");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Summa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "tbody")(16, "tr")(17, "td")(18, "duet-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Kohde 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](20, "duet-spacer", 5)(21, "duet-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "duet-visually-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, ", avautuu uuteen ikkunaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "tr")(29, "td")(30, "duet-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](31, " Kohde 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](32, "duet-spacer", 5)(33, "duet-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "duet-visually-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](35, ", avautuu uuteen ikkunaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](36, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](37, "25%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "tr")(41, "td")(42, "duet-button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " Kohde 3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](44, "duet-spacer", 5)(45, "duet-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "duet-visually-hidden");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, ", avautuu uuteen ikkunaan");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, "50%");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "td", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "tfoot")(53, "tr")(54, "td", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, "Sijoitettava summa");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ctx_r0.agreement.label);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatter.format(ctx_r0.agreement.price * 0.25));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatter.format(ctx_r0.agreement.price * 0.25));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.formatter.format(ctx_r0.agreement.price * 0.5));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formatter.format(ctx_r0.agreement.price), " ");
} }
class SummaryComponent {
    constructor(formatter) {
        this.formatter = formatter;
    }
    ngOnInit() { }
}
SummaryComponent.ɵfac = function SummaryComponent_Factory(t) { return new (t || SummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_currency_formatter_service__WEBPACK_IMPORTED_MODULE_0__.CurrencyFormatterService)); };
SummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SummaryComponent, selectors: [["app-summary"]], inputs: { agreement: "agreement" }, decls: 1, vars: 1, consts: [[4, "ngIf"], ["expand", "", "disabled", "", "label", "Sopimus", 3, "value"], ["variation", "plain"], [1, "duet-text-right"], ["variation", "plain", "margin", "none", "padding", "none", "url", "https://www.duetds.com/assets/downloads/localtapiola-brand-guidelines.pdf", "external", ""], ["size", "xx-small", "direction", "horizontal"], ["name", "action-new-window-small", "margin", "none", "size", "xx-small"], ["colspan", "2", 1, "duet-font-weight-semi-bold"], [1, "duet-text-right", "duet-font-weight-semi-bold", "duet-font-size-large"]], template: function SummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SummaryComponent_ng_container_0_Template, 58, 5, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.agreement);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzdW1tYXJ5LmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 4386:
/*!****************************************!*\
  !*** ./src/app/test/test.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestComponent": () => (/* binding */ TestComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);



class TestComponent {
    constructor(activeModal) {
        this.activeModal = activeModal;
        this.modalActive = false;
    }
    ngOnInit() {
        this.modalActive = this.popupObj.modalActive;
    }
    hide() {
        console.log('closing...!');
        this.modalActive = false;
        this.activeModal.close(true);
    }
    test() {
        console.log('Save button clicked');
        this.modalActive = false;
        this.activeModal.close(false);
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__.NgbActiveModal)); };
TestComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TestComponent, selectors: [["app-test"]], inputs: { popupObj: "popupObj" }, decls: 15, vars: 1, consts: [["heading", "Duet Modal with NGB", "icon", "profile-personal-info", 3, "active", "duetClose"], ["novalidate", "", "action", "#"], [1, "duet-text-center"], ["size", "large"], ["value", "suomi", "label", "Asiointikieli", "direction", "horizontal", "name", "group", "responsive", ""], ["label", "Suomi", "type", "radio", "value", "suomi", "expand", ""], ["label", "Svenska", "type", "radio", "value", "svenska", "expand", ""], ["label", "English", "type", "radio", "value", "english", "expand", ""], ["label", "Katuosoite", "name", "streetaddress", "placeholder", "Kotikatu 123", "expand", ""], ["variation", "primary", 3, "click"], [3, "click"]], template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "duet-modal", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("duetClose", function TestComponent_Template_duet_modal_duetClose_0_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1)(2, "duet-paragraph", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Kaikki kent\u00E4t ovat pakollisia ellei muuten mainita. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "duet-spacer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "duet-choice-group", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "duet-choice", 5)(7, "duet-choice", 6)(8, "duet-choice", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "duet-input", 8)(10, "duet-spacer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "duet-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_duet_button_click_11_listener() { return ctx.test(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Jatka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "duet-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TestComponent_Template_duet_button_click_13_listener() { return ctx.hide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Peruuta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("active", ctx.modalActive);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgForm], encapsulation: 2 });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _duetds_components_lib_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @duetds/components/lib/loader */ 1895);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 2340);





(0,_duetds_components_lib_loader__WEBPACK_IMPORTED_MODULE_0__.applyPolyfills)().then(() => {
    (0,_duetds_components_lib_loader__WEBPACK_IMPORTED_MODULE_0__.defineCustomElements)(window);
});
if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
/* if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
  this.isSafari = true
} */
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__.platformBrowser()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 7995:
/*!************************************************************************************************************************************************!*\
  !*** ./node_modules/@duetds/components/lib/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./duet-action-button.entry.js": [
		2436,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"common",
		"node_modules_duetds_components_lib_esm_duet-action-button_entry_js"
	],
	"./duet-alert.entry.js": [
		8058,
		"node_modules_duetds_components_lib_esm_duet-alert_entry_js"
	],
	"./duet-badge.entry.js": [
		3957,
		"node_modules_duetds_components_lib_esm_duet-badge_entry_js"
	],
	"./duet-breadcrumb.entry.js": [
		3642,
		"node_modules_duetds_components_lib_esm_duet-breadcrumb_entry_js"
	],
	"./duet-breadcrumbs.entry.js": [
		3701,
		"node_modules_duetds_components_lib_esm_duet-breadcrumbs_entry_js"
	],
	"./duet-button_2.entry.js": [
		2035,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"common",
		"node_modules_duetds_components_lib_esm_duet-button_2_entry_js"
	],
	"./duet-caption_4.entry.js": [
		3425,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"common",
		"node_modules_duetds_components_lib_esm_duet-caption_4_entry_js"
	],
	"./duet-card.entry.js": [
		8611,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"common",
		"node_modules_duetds_components_lib_esm_duet-card_entry_js"
	],
	"./duet-checkbox.entry.js": [
		6836,
		"node_modules_duetds_components_lib_esm_duet-checkbox_entry_js"
	],
	"./duet-choice_2.entry.js": [
		6849,
		"common",
		"node_modules_duetds_components_lib_esm_duet-choice_2_entry_js"
	],
	"./duet-collapsible.entry.js": [
		1501,
		"default-node_modules_duetds_components_lib_esm_tokens-e110dc89_js",
		"common",
		"node_modules_duetds_components_lib_esm_duet-collapsible_entry_js"
	],
	"./duet-combobox.entry.js": [
		2659,
		"common",
		"node_modules_duetds_components_lib_esm_duet-combobox_entry_js"
	],
	"./duet-cookie-consent.entry.js": [
		2417,
		"node_modules_duetds_components_lib_esm_duet-cookie-consent_entry_js"
	],
	"./duet-date-picker.entry.js": [
		9401,
		"common",
		"node_modules_duetds_components_lib_esm_duet-date-picker_entry_js"
	],
	"./duet-divider_2.entry.js": [
		2041,
		"node_modules_duetds_components_lib_esm_duet-divider_2_entry_js"
	],
	"./duet-editable-table_3.entry.js": [
		3351,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"common",
		"node_modules_duetds_components_lib_esm_duet-editable-table_3_entry_js"
	],
	"./duet-empty-state.entry.js": [
		3195,
		"node_modules_duetds_components_lib_esm_duet-empty-state_entry_js"
	],
	"./duet-fieldset.entry.js": [
		6181,
		"node_modules_duetds_components_lib_esm_duet-fieldset_entry_js"
	],
	"./duet-footer.entry.js": [
		9663,
		"common",
		"node_modules_duetds_components_lib_esm_duet-footer_entry_js"
	],
	"./duet-grid_2.entry.js": [
		4089,
		"default-node_modules_duetds_components_lib_esm_tokens-e110dc89_js",
		"common",
		"node_modules_duetds_components_lib_esm_duet-grid_2_entry_js"
	],
	"./duet-header_2.entry.js": [
		4332,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"default-node_modules_duetds_components_lib_esm_tokens-e110dc89_js",
		"default-node_modules_duetds_components_lib_esm_bodyScrollLock_es6-61b5e9a4_js-node_modules_du-26096e",
		"common",
		"node_modules_duetds_components_lib_esm_duet-header_2_entry_js"
	],
	"./duet-hero.entry.js": [
		3347,
		"common",
		"node_modules_duetds_components_lib_esm_duet-hero_entry_js"
	],
	"./duet-icon.entry.js": [
		8271,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"common",
		"node_modules_duetds_components_lib_esm_duet-icon_entry_js"
	],
	"./duet-input_2.entry.js": [
		8649,
		"common",
		"node_modules_duetds_components_lib_esm_duet-input_2_entry_js"
	],
	"./duet-layout.entry.js": [
		9259,
		"common",
		"node_modules_duetds_components_lib_esm_duet-layout_entry_js"
	],
	"./duet-list_2.entry.js": [
		3179,
		"common",
		"node_modules_duetds_components_lib_esm_duet-list_2_entry_js"
	],
	"./duet-modal.entry.js": [
		6735,
		"default-node_modules_duetds_components_lib_esm_bodyScrollLock_es6-61b5e9a4_js-node_modules_du-26096e",
		"common",
		"node_modules_duetds_components_lib_esm_duet-modal_entry_js"
	],
	"./duet-notification_2.entry.js": [
		7763,
		"common",
		"node_modules_duetds_components_lib_esm_duet-notification_2_entry_js"
	],
	"./duet-number-input.entry.js": [
		3521,
		"node_modules_duetds_components_lib_esm_duet-number-input_entry_js"
	],
	"./duet-pagination_2.entry.js": [
		5276,
		"common",
		"node_modules_duetds_components_lib_esm_duet-pagination_2_entry_js"
	],
	"./duet-progress.entry.js": [
		5362,
		"node_modules_duetds_components_lib_esm_duet-progress_entry_js"
	],
	"./duet-radio_2.entry.js": [
		7554,
		"common",
		"node_modules_duetds_components_lib_esm_duet-radio_2_entry_js"
	],
	"./duet-range-slider.entry.js": [
		5098,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"common",
		"node_modules_duetds_components_lib_esm_duet-range-slider_entry_js"
	],
	"./duet-scrollable_3.entry.js": [
		7684,
		"node_modules_duetds_components_lib_esm_duet-scrollable_3_entry_js"
	],
	"./duet-select.entry.js": [
		4675,
		"node_modules_duetds_components_lib_esm_duet-select_entry_js"
	],
	"./duet-step_2.entry.js": [
		7512,
		"node_modules_duetds_components_lib_esm_duet-step_2_entry_js"
	],
	"./duet-textarea.entry.js": [
		479,
		"common",
		"node_modules_duetds_components_lib_esm_duet-textarea_entry_js"
	],
	"./duet-toggle.entry.js": [
		1532,
		"node_modules_duetds_components_lib_esm_duet-toggle_entry_js"
	],
	"./duet-tooltip.entry.js": [
		2471,
		"node_modules_duetds_components_lib_esm_duet-tooltip_entry_js"
	],
	"./duet-tray.entry.js": [
		9009,
		"default-node_modules_duetds_components_lib_esm_themeable-component-e8fc98bf_js-node_modules_d-0bf02d",
		"node_modules_duetds_components_lib_esm_duet-tray_entry_js"
	],
	"./duet-upload-aria-status.entry.js": [
		4538,
		"node_modules_duetds_components_lib_esm_duet-upload-aria-status_entry_js"
	],
	"./duet-visually-hidden.entry.js": [
		7438,
		"node_modules_duetds_components_lib_esm_duet-visually-hidden_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 7995;
module.exports = webpackAsyncContext;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map