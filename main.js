"use strict";
(self["webpackChunkporfolioAlex"] = self["webpackChunkporfolioAlex"] || []).push([["main"],{

/***/ 4114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _contacte_contacte_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacte/contacte.component */ 5756);
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cv/cv.component */ 552);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./perfil/perfil.component */ 1642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);







const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__.HomeComponent
}, {
  path: 'cv',
  component: _cv_cv_component__WEBPACK_IMPORTED_MODULE_1__.CvComponent
}, {
  path: 'contacte',
  component: _contacte_contacte_component__WEBPACK_IMPORTED_MODULE_0__.ContacteComponent
}, {
  path: 'perfil',
  component: _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_3__.PerfilComponent
}];
class AppRoutingModule {
  static {
    this.ɵfac = function AppRoutingModule_Factory(t) {
      return new (t || AppRoutingModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(routes, {
        scrollPositionRestoration: 'top' // Restaura la posición al inicio en cada cambio de ruta
      }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
  });
})();

/***/ }),

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ 708);




class AppComponent {
  constructor() {
    this.title = 'porfolioAlex';
  }
  static {
    this.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 9,
      vars: 0,
      consts: [["lang", "es"], ["charset", "UTF-8"], ["name", "viewport", "content", "width=device-width, initial-scale=1.0"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "html", 0)(1, "head");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "meta", 1)(3, "meta", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "title");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Alex Caner");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "app-header")(7, "router-outlet")(8, "app-footer");
          _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterOutlet, _header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__.FooterComponent],
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 4114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _contacte_contacte_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contacte/contacte.component */ 5756);
/* harmony import */ var _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cv/cv.component */ 552);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ 7824);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ 2152);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ 708);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 3835);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/list */ 943);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/button */ 4175);
/* harmony import */ var _video_curriculum_video_curriculum_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video-curriculum/video-curriculum.component */ 6312);
/* harmony import */ var _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./perfil/perfil.component */ 1642);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 7580);
















class AppModule {
  static {
    this.ɵfac = function AppModule_Factory(t) {
      return new (t || AppModule)();
    };
  }
  static {
    this.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    });
  }
  static {
    this.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule]
    });
  }
}

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _contacte_contacte_component__WEBPACK_IMPORTED_MODULE_2__.ContacteComponent, _cv_cv_component__WEBPACK_IMPORTED_MODULE_3__.CvComponent, _home_home_component__WEBPACK_IMPORTED_MODULE_4__.HomeComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_5__.HeaderComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__.FooterComponent, _video_curriculum_video_curriculum_component__WEBPACK_IMPORTED_MODULE_7__.VideoCurriculumComponent, _perfil_perfil_component__WEBPACK_IMPORTED_MODULE_8__.PerfilComponent],
    imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_12__.MatIconModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_13__.MatCardModule, _angular_material_list__WEBPACK_IMPORTED_MODULE_14__.MatListModule, _angular_material_button__WEBPACK_IMPORTED_MODULE_15__.MatButtonModule]
  });
})();

/***/ }),

/***/ 5756:
/*!************************************************!*\
  !*** ./src/app/contacte/contacte.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContacteComponent: () => (/* binding */ ContacteComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ 3840);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/card */ 3777);
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ 943);




class ContacteComponent {
  static {
    this.ɵfac = function ContacteComponent_Factory(t) {
      return new (t || ContacteComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContacteComponent,
      selectors: [["app-contacte"]],
      decls: 24,
      vars: 0,
      consts: [[1, "contact-card"], [1, "title"], [1, "subtitle"], [1, "contact-info"], ["mat-list-icon", ""], [1, "contact-text"], ["href", "https://es.linkedin.com/in/alex-caner-lavandeira-b76bab263", "target", "_blank", 1, "contact-text"]],
      template: function ContacteComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-card", 0)(1, "mat-card-header")(2, "mat-card-title", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u00A1Cont\u00E1ctame!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-subtitle", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Me apasiona trabajar en nuevos proyectos. \u00A1Pong\u00E1monos en contacto!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-card-content")(7, "div", 3)(8, "mat-list")(9, "mat-list-item")(10, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "email");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "alex.caner.lsgi@gmail.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-list-item")(15, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "+34 626 228 632");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item")(20, "mat-icon", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "link");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Mi LinkedIn ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()();
        }
      },
      dependencies: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__.MatIcon, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardContent, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardSubtitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_2__.MatCardTitle, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatList, _angular_material_list__WEBPACK_IMPORTED_MODULE_3__.MatListItem],
      styles: ["\n\n[_nghost-%COMP%] {\n    display: block;\n    width: 100%;\n    height: 86vh;\n    background-color: #2D033B;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .contact-card[_ngcontent-%COMP%] {\n    margin-top: 10%;\n    width: 80%;\n    max-width: 600px;\n    padding: 20px;\n  }\n  \n  .title[_ngcontent-%COMP%] {\n    font-size: 24px;\n    font-weight: bold;\n    color: #2D033B;\n  }\n  \n  .subtitle[_ngcontent-%COMP%] {\n    font-size: 16px;\n    color: #757575;\n  }\n  \n  .contact-info[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n  \n  mat-list-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    margin-bottom: 15px;\n  }\n  \n  .contact-text[_ngcontent-%COMP%] {\n    margin-left: 15px;\n    font-size: 16px;\n    color: #333;\n    text-decoration: none;\n  }\n  \n  .contact-text[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n    color: #3f51b5;\n  }\n  \n  mat-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    color: #2D033B;\n  }\n  \n  .contact-button[_ngcontent-%COMP%] {\n    margin-top: 20px;\n    width: 100%;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29udGFjdGUvY29udGFjdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx5Q0FBeUM7QUFDekM7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWix5QkFBeUI7SUFDekIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsVUFBVTtJQUNWLGdCQUFnQjtJQUNoQixhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0UsMEJBQTBCO0lBQzFCLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixXQUFXO0VBQ2IiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBFc3RpbG9zIGdlbmVyYWxlcyBwYXJhIGVsIGNvbXBvbmVudGUgKi9cclxuOmhvc3Qge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogODZ2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDAzM0I7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1jYXJkIHtcclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICB9XHJcbiAgXHJcbiAgLnRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgY29sb3I6ICMyRDAzM0I7XHJcbiAgfVxyXG4gIFxyXG4gIC5zdWJ0aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBjb2xvcjogIzc1NzU3NTtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtaW5mbyB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIH1cclxuICBcclxuICBtYXQtbGlzdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3QtdGV4dCB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC10ZXh0OmhvdmVyIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgY29sb3I6ICMzZjUxYjU7XHJcbiAgfVxyXG4gIFxyXG4gIG1hdC1pY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGNvbG9yOiAjMkQwMzNCO1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdC1idXR0b24ge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAiXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 552:
/*!************************************!*\
  !*** ./src/app/cv/cv.component.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CvComponent: () => (/* binding */ CvComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class CvComponent {
  static {
    this.ɵfac = function CvComponent_Factory(t) {
      return new (t || CvComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CvComponent,
      selectors: [["app-cv"]],
      decls: 2,
      vars: 0,
      consts: [[1, "cv-container"], ["src", "assets/cvAlexCaner.jpeg", "alt", "Curriculum", 1, "cv-image"]],
      template: function CvComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".cv-container[_ngcontent-%COMP%] {\n    margin-right: 20%; \n\n    margin-top: 10%;\n    margin-left: 20%;\n    display: flex;\n    justify-content: center; \n\n    align-items: center; \n\n  }\n  \n  .cv-image[_ngcontent-%COMP%] {\n    width: 100%; \n\n    height: auto; \n\n  }\n  \n\n  @media (max-width: 768px) {\n    .cv-container[_ngcontent-%COMP%] {\n      margin: 0; \n\n      margin-top: 15%;\n    }\n  \n    .cv-image[_ngcontent-%COMP%] {\n      width: 100%; \n\n      height: auto; \n\n    }\n}\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY3YvY3YuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGlCQUFpQixFQUFFLDBDQUEwQztJQUM3RCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYix1QkFBdUIsRUFBRSxxQ0FBcUM7SUFDOUQsbUJBQW1CLEVBQUUsbUNBQW1DO0VBQzFEOztFQUVBO0lBQ0UsV0FBVyxFQUFFLGlEQUFpRDtJQUM5RCxZQUFZLEVBQUUsaURBQWlEO0VBQ2pFO0VBQ0Esd0NBQXdDO0VBQ3hDO0lBQ0U7TUFDRSxTQUFTLEVBQUUsK0NBQStDO01BQzFELGVBQWU7SUFDakI7O0lBRUE7TUFDRSxXQUFXLEVBQUUseURBQXlEO01BQ3RFLFlBQVksRUFBRSx3Q0FBd0M7SUFDeEQ7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbIi5jdi1jb250YWluZXIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMCU7IC8qIE3Dg8KhcmdlbmVzIGRlIDEwMHB4IHBvciB0b2RvcyBsb3MgbGFkb3MgKi9cclxuICAgIG1hcmdpbi10b3A6IDEwJTtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMCU7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IC8qIENlbnRyYSBsYSBpbWFnZW4gaG9yaXpvbnRhbG1lbnRlICovXHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyAvKiBDZW50cmEgbGEgaW1hZ2VuIHZlcnRpY2FsbWVudGUgKi9cclxuICB9XHJcbiAgXHJcbiAgLmN2LWltYWdlIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBBanVzdGEgZWwgYW5jaG8gZGUgbGEgaW1hZ2VuIGF1dG9tw4PCoXRpY2FtZW50ZSAqL1xyXG4gICAgaGVpZ2h0OiBhdXRvOyAvKiBNYW50aWVuZSBsYSBwcm9wb3JjacODwrNuIG9yaWdpbmFsIGRlIGxhIGltYWdlbiAqL1xyXG4gIH1cclxuICAvKiBNZWRpYSBRdWVyeSBwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhcyAqL1xyXG4gIEBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmN2LWNvbnRhaW5lciB7XHJcbiAgICAgIG1hcmdpbjogMDsgLyogRWxpbWluYSBsb3MgbcODwqFyZ2VuZXMgZW4gcGFudGFsbGFzIHBlcXVlw4PCsWFzICovXHJcbiAgICAgIG1hcmdpbi10b3A6IDE1JTtcclxuICAgIH1cclxuICBcclxuICAgIC5jdi1pbWFnZSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlOyAvKiBBc2VndXJhIHF1ZSBsYSBpbWFnZW4gb2N1cGUgdG9kbyBlbCBhbmNobyBkaXNwb25pYmxlICovXHJcbiAgICAgIGhlaWdodDogYXV0bzsgLyogTWFudGllbmUgbGEgcHJvcG9yY2nDg8KzbiBkZSBsYSBpbWFnZW4gKi9cclxuICAgIH1cclxufVxyXG4gICJdLCJzb3VyY2VSb290IjoiIn0= */"]
    });
  }
}


/***/ }),

/***/ 708:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class FooterComponent {
  static {
    this.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 3,
      vars: 0,
      consts: [[1, "footer"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0)(1, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u00A9 2025 Mi Portafolio. Todos los derechos reservados.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        }
      },
      styles: [".footer[_ngcontent-%COMP%] {\n    background: #23022d; \n\n    color: white;\n    padding: 20px;\n    text-align: center;\n    font-size: 14px;\n    margin-top: 20px;\n    bottom: 0;\n    width: 100%;\n    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.2); \n\n  }\n  \n  .footer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  \n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CLEVBQUUsNkJBQTZCO0lBQ2xELFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsU0FBUztJQUNULFdBQVc7SUFDWCx5Q0FBeUMsRUFBRSxpQkFBaUI7RUFDOUQ7O0VBRUE7SUFDRSxTQUFTO0VBQ1giLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICMyMzAyMmQ7IC8qIE1vcmFkbyBtZWRpYW5vY2hlIG9zY3VybyAqL1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJveC1zaGFkb3c6IDAgLTJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjIpOyAvKiBTb21icmEgc3VhdmUgKi9cclxuICB9XHJcbiAgXHJcbiAgLmZvb3RlciBwIHtcclxuICAgIG1hcmdpbjogMDtcclxuICB9XHJcbiAgIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 2152:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/icon */ 3840);



class HeaderComponent {
  onWindowScroll() {
    const header = document.getElementById('header');
    if (header) {
      if (window.pageYOffset > 100) {
        // Cambia este valor a la cantidad de desplazamiento que desees
        header.classList.add('minimized');
      } else {
        header.classList.remove('minimized');
      }
    }
  }
  static {
    this.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      hostBindings: function HeaderComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function HeaderComponent_scroll_HostBindingHandler() {
            return ctx.onWindowScroll();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
        }
      },
      decls: 22,
      vars: 0,
      consts: [["id", "header", 1, "header"], ["routerLink", "/home", 1, "nav-link"], ["routerLink", "/perfil", 1, "nav-link"], ["routerLink", "/cv", 1, "nav-link"], ["routerLink", "/contacte", 1, "nav-link"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0)(1, "nav")(2, "a", 1)(3, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Home");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 2)(8, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "account_circle");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Perfil");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 3)(13, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "description");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "CV");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 4)(18, "mat-icon");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "phone");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Contacto");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink, _angular_material_icon__WEBPACK_IMPORTED_MODULE_2__.MatIcon],
      styles: ["\n\n.header[_ngcontent-%COMP%] {\n  background: #23022d; \n\n  color: white;\n  padding: 20px 40px; \n\n  text-align: center; \n\n  display: flex;\n  justify-content: center; \n\n  align-items: center; \n\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000; \n\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2); \n\n  border-bottom-left-radius: 10px; \n\n  border-bottom-right-radius: 10px; \n\n  transition: padding 0.3s ease, box-shadow 0.3s ease; \n\n  font-family: 'Poppins', sans-serif;\n  overflow: hidden;\n}\n\n\n\nnav[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 30px;\n  align-items: center;\n  justify-content: center; \n\n}\n\n\n\n.nav-link[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n  font-size: 18px;\n  display: flex;\n  align-items: center;\n  justify-content: center; \n\n  gap: 8px;\n  padding: 12px 20px;\n  border-radius: 8px;\n  transition: background 0.3s ease, transform 0.2s ease;\n  font-family: 'Roboto', sans-serif;\n}\n\n\n\n.nav-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px; \n\n  transition: font-size 0.3s ease;\n}\n\n\n\n.nav-link[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.1); \n\n  transform: scale(1.1); \n\n}\n\n\n\n.header.minimized[_ngcontent-%COMP%] {\n  padding: 5px 20px; \n\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.15); \n\n}\n\n\n\n.header.minimized[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  width: 60px; \n\n}\n\n.header.minimized[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: none; \n\n}\n\n\n\n.header.minimized[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px; \n\n}\n\n\n\n@media (max-width: 768px) {\n  .header[_ngcontent-%COMP%] {\n    padding: 10px;\n  }\n\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n\n  .header.minimized[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    width: 70px; \n\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJCQUEyQjtBQUMzQjtFQUNFLG1CQUFtQixFQUFFLDRCQUE0QjtFQUNqRCxZQUFZO0VBQ1osa0JBQWtCLEVBQUUscUNBQXFDO0VBQ3pELGtCQUFrQixFQUFFLHlCQUF5QjtFQUM3QyxhQUFhO0VBQ2IsdUJBQXVCLEVBQUUsd0JBQXdCO0VBQ2pELG1CQUFtQixFQUFFLGdDQUFnQztFQUNyRCxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYSxFQUFFLG9DQUFvQztFQUNuRCx5Q0FBeUMsRUFBRSxxQkFBcUI7RUFDaEUsK0JBQStCLEVBQUUsdUJBQXVCO0VBQ3hELGdDQUFnQyxFQUFFLHVCQUF1QjtFQUN6RCxtREFBbUQsRUFBRSxnQ0FBZ0M7RUFDckYsa0NBQWtDO0VBQ2xDLGdCQUFnQjtBQUNsQjs7QUFFQSxpQ0FBaUM7QUFDakM7RUFDRSxhQUFhO0VBQ2IsU0FBUztFQUNULG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBRSxzQ0FBc0M7QUFDakU7O0FBRUEsaUNBQWlDO0FBQ2pDO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBRSx3QkFBd0I7RUFDakQsUUFBUTtFQUNSLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscURBQXFEO0VBQ3JELGlDQUFpQztBQUNuQzs7QUFFQSxzQ0FBc0M7QUFDdEM7RUFDRSxlQUFlLEVBQUUsdUNBQXVDO0VBQ3hELCtCQUErQjtBQUNqQzs7QUFFQSx1QkFBdUI7QUFDdkI7RUFDRSxvQ0FBb0MsRUFBRSxrQ0FBa0M7RUFDeEUscUJBQXFCLEVBQUUscUJBQXFCO0FBQzlDOztBQUVBLHdCQUF3QjtBQUN4QjtFQUNFLGlCQUFpQixFQUFFLDJDQUEyQztFQUM5RCx5Q0FBeUMsRUFBRSxpQkFBaUI7QUFDOUQ7O0FBRUEsOEVBQThFO0FBQzlFO0VBQ0UsV0FBVyxFQUFFLGtEQUFrRDtBQUNqRTs7QUFFQTtFQUNFLGFBQWEsRUFBRSx1QkFBdUI7QUFDeEM7O0FBRUEsNkRBQTZEO0FBQzdEO0VBQ0UsZUFBZSxFQUFFLHNEQUFzRDtBQUN6RTs7QUFFQSwwRkFBMEY7QUFDMUY7RUFDRTtJQUNFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxXQUFXLEVBQUUseURBQXlEO0VBQ3hFO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBIZWFkZXIgc2llbXByZSB2aXNpYmxlICovXHJcbi5oZWFkZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyMzAyMmQ7IC8qIEZvbmRvIGRlZ3JhZGFkbyBtb2Rlcm5vICovXHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBhZGRpbmc6IDIwcHggNDBweDsgLyogQW1wbGlhbW9zIGxvcyBlc3BhY2lvcyBsYXRlcmFsZXMgKi9cclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IC8qIEFsaW5lYWNpw4PCs24gYWwgY2VudHJvICovXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQWxpbmVhY2nDg8KzbiBjZW50cmFkYSAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIEFsaW5lYWNpw4PCs24gZGUgbG9zIGVsZW1lbnRvcyAqL1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICB6LWluZGV4OiAxMDAwOyAvKiBBc2VndXJhIHF1ZSBlc3TDg8KpIHNpZW1wcmUgZW5jaW1hICovXHJcbiAgYm94LXNoYWRvdzogMCAycHggMTBweCByZ2JhKDAsIDAsIDAsIDAuMik7IC8qIFNvbWJyYSBtw4PCoXMgc3VhdmUgKi9cclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4OyAvKiBCb3JkZXMgcmVkb25kZWFkb3MgKi9cclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDsgLyogQm9yZGVzIHJlZG9uZGVhZG9zICovXHJcbiAgdHJhbnNpdGlvbjogcGFkZGluZyAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlOyAvKiBTdWF2aXphIGVsIGNhbWJpbyBkZSB0YW1hw4PCsW8gKi9cclxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIE5hdmVnYWNpw4PCs24gZGVudHJvIGRlbCBoZWFkZXIgKi9cclxubmF2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogMzBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBDZW50cmEgbG9zIGVsZW1lbnRvcyBlbiBlbCBoZWFkZXIgKi9cclxufVxyXG5cclxuLyogRXN0aWxvIGRlIGxvcyBsaW5rcyBkZWwgbWVuw4PCuiAqL1xyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyogQ2VudHJhIGVsIGNvbnRlbmlkbyAqL1xyXG4gIGdhcDogOHB4O1xyXG4gIHBhZGRpbmc6IDEycHggMjBweDtcclxuICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZCAwLjNzIGVhc2UsIHRyYW5zZm9ybSAwLjJzIGVhc2U7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcblxyXG4vKiBBanVzdGUgZW4gZWwgdGFtYcODwrFvIGRlIGxvcyBpY29ub3MgKi9cclxuLm5hdi1saW5rIG1hdC1pY29uIHtcclxuICBmb250LXNpemU6IDI0cHg7IC8qIEF1bWVudGFtb3MgZWwgdGFtYcODwrFvIGRlIGxvcyBpY29ub3MgKi9cclxuICB0cmFuc2l0aW9uOiBmb250LXNpemUgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBIb3ZlciBkZSBsb3MgbGlua3MgKi9cclxuLm5hdi1saW5rOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7IC8qIEZvbmRvIHN1YXZlIGFsIHBhc2FyIGVsIG1vdXNlICovXHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpOyAvKiBFZmVjdG8gZGUgZXNjYWxhICovXHJcbn1cclxuXHJcbi8qIE1pbmltaXphciBlbCBoZWFkZXIgKi9cclxuLmhlYWRlci5taW5pbWl6ZWQge1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4OyAvKiBSZWR1Y2ltb3MgZWwgdGFtYcODwrFvIGN1YW5kbyBzZSBtaW5pbWl6YSAqL1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTUpOyAvKiBNZW5vcyBzb21icmEgKi9cclxufVxyXG5cclxuLyogTWluaW1pemFyIGVsIGNvbnRlbmlkbyBkZSBsb3MgbGlua3MgKG9jdWx0YXIgdGV4dG8geSBtb3N0cmFyIHNvbG8gw4PCrWNvbm9zKSAqL1xyXG4uaGVhZGVyLm1pbmltaXplZCAubmF2LWxpbmsge1xyXG4gIHdpZHRoOiA2MHB4OyAvKiBBanVzdGFtb3MgZWwgYW5jaG8gZGUgbG9zIGVubGFjZXMgbWluaW1pemFkb3MgKi9cclxufVxyXG5cclxuLmhlYWRlci5taW5pbWl6ZWQgLm5hdi1saW5rIHNwYW4ge1xyXG4gIGRpc3BsYXk6IG5vbmU7IC8qIE9jdWx0YW1vcyBlbCB0ZXh0byAqL1xyXG59XHJcblxyXG4vKiBFc3RpbG9zIHBhcmEgbG9zIMODwq1jb25vcyBjdWFuZG8gZWwgaGVhZGVyIGVzdMODwqEgbWluaW1pemFkbyAqL1xyXG4uaGVhZGVyLm1pbmltaXplZCBtYXQtaWNvbiB7XHJcbiAgZm9udC1zaXplOiAyMHB4OyAvKiBBdW1lbnRhbW9zIGVsIHRhbWHDg8KxbyBkZWwgaWNvbm8gY3VhbmRvIHNlIG1pbmltaXphICovXHJcbn1cclxuXHJcbi8qIEVzdGlsb3MgcmVzcG9uc2l2b3MgKGVuIHBhbnRhbGxhcyBwZXF1ZcODwrFhcywgbG9zIMODwq1jb25vcyBkZWJlbiBvY3VwYXIgdG9kYSBsYSBwYW50YWxsYSkgKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmhlYWRlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXIubWluaW1pemVkIC5uYXYtbGluayB7XHJcbiAgICB3aWR0aDogNzBweDsgLyogQXVtZW50YSB1biBwb2NvIG3Dg8KhcyBlbCBhbmNobyBwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhcyAqL1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
    });
  }
}


/***/ }),

/***/ 7824:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 5072);


class HomeComponent {
  static {
    this.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 90,
      vars: 0,
      consts: [[1, "home-container"], [1, "intro"], [1, "photo"], ["src", "assets/fotoAlex.jpeg", "alt", "Mi Foto"], [1, "text"], [1, "text1"], [1, "text3"], [1, "about-me"], [1, "skills"], [1, "skill-icons"], ["src", "assets/html.png", "alt", "HTML5"], ["src", "assets/css.jpeg", "alt", "CSS"], ["src", "assets/angular.png", "alt", "Angular"], ["src", "assets/php.png", "alt", "PHP"], ["src", "assets/vue.png", "alt", "Vue.js"], ["src", "assets/sql.png", "alt", "MySQL"], ["src", "assets/csharp.png", "alt", "C#"], ["src", "assets/js.png", "alt", "JavaScript"], ["src", "assets/ts.png", "alt", "TypeScript"], ["src", "assets/docker.png", "alt", "Docker"], ["src", "assets/python.png", "alt", "Python"], ["src", "assets/git.png", "alt", "Git"], ["src", "assets/mongodb.png", "alt", "MongoDB"], ["src", "assets/aws.png", "alt", "AWS"], ["src", "assets/bootstrap.png", "alt", "Bootstrap"], ["routerLink", "/perfil", 1, "button-perfil"], [1, "knowledge"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Alex Caner Lavandeira");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h3", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "T\u00E9cnico Inform\u00E1tico de Redes");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "h3", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Desarrollador Web Full-Stack");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7)(12, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sobre M\u00ED");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Soy un programador web full stack con una gran pasi\u00F3n por la tecnolog\u00EDa y el desarrollo de aplicaciones. Me considero una persona muy proactiva, aprendo r\u00E1pidamente y me entrego al m\u00E1ximo en cada proyecto. Me encanta tanto trabajar en equipo como de manera individual, y siempre busco la oportunidad de mejorar y crecer profesionalmente. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Mi enfoque es aportar valor a cada proyecto y colaborar con equipos para lograr objetivos comunes. Soy muy comprometido y siempre estoy dispuesto a dar el 100% para asegurar que cada trabajo sea de la m\u00E1s alta calidad. Si buscas a alguien que sea dedicado, entusiasta y que se adapta r\u00E1pidamente a nuevas tecnolog\u00EDas, te animo a que me contactes. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8)(20, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Mis Habilidades");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "img", 10)(24, "img", 11)(25, "img", 12)(26, "img", 13)(27, "img", 14)(28, "img", 15)(29, "img", 16)(30, "img", 17)(31, "img", 18)(32, "img", 19)(33, "img", 20)(34, "img", 21)(35, "img", 22)(36, "img", 23)(37, "img", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 25)(39, "span");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Mi Perfil Profesional");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 26)(42, "ul")(43, "p")(44, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Programador Web Full-Stack");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li")(48, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Frontend:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Trabajo con Angular, Vue.js, HTML, CSS, JavaScript.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li")(52, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Backend:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Desarrollo de APIs y aplicaciones con Node.js y PHP.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "li")(56, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Base de Datos:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " MySQL, MongoDB.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "li")(60, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Despliegue:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Docker, AWS.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "li")(64, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Dise\u00F1o:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Dise\u00F1o de BDD, vistas, funcionamiento...");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br")(68, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p")(70, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "T\u00E9cnico en Redes y Sistemas Inform\u00E1ticos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](72, "br");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "ul")(74, "li")(75, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Montaje y configuraci\u00F3n de redes:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Instalaci\u00F3n y mantenimiento de redes LAN y privadas.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "li")(79, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Reparaci\u00F3n y mantenimiento de servidores:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Diagn\u00F3stico y reparaci\u00F3n de servidores.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "li")(83, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Preparaci\u00F3n de equipos inform\u00E1ticos:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, " Reparaci\u00F3n y configuraci\u00F3n de equipos de hardware.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "li")(87, "strong");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, "Seguridad inform\u00E1tica:");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Implementaci\u00F3n de pr\u00E1cticas de protecci\u00F3n de redes y sistemas.");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        }
      },
      dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLink],
      styles: [".home-container[_ngcontent-%COMP%] {\n  background: #2D033B; \n\n  margin: 0 20px;\n  margin-top: 2%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: white;\n  padding: 50px 0;\n}\n\n.intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 50px;\n  gap: 40px;\n}\n\n.photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 300px; \n\n  height: 300px;\n  border-radius: 50%;\n  object-fit: cover;\n}\n\n.text[_ngcontent-%COMP%] {\n  text-align: left;\n}\n\n.text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 3rem; \n\n  color: #fff;\n}\n\n.text1[_ngcontent-%COMP%] {\n  margin: 5px 0 20px;\n  width: 100%;\n  font-size: 1.8rem; \n\n  color: #8318a3;\n}\n\n.text3[_ngcontent-%COMP%] {\n  margin-top: -5px;\n  font-size: 1.8rem;\n  color: #8318a3;\n}\n\n\n\n.about-me[_ngcontent-%COMP%] {\n  background-color: #350743; \n\n  margin-top: 50px;\n  padding: 40px 20px; \n\n  text-align: center;\n  width: 110%; \n\n  box-sizing: border-box; \n\n}\n\n.about-me[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem; \n\n  color: #fff;\n  margin-bottom: 20px; \n\n}\n\n.about-me[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  max-width: 800px;\n  line-height: 1.6;\n  margin: 0 auto;\n  color: #fff;\n}\n\n.skills[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 60px;\n  width: 75%;\n  margin-bottom: 10px;\n}\n\n.skills[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  color: #fff;\n  margin-bottom: 30px;\n}\n\n.skill-icons[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 30px;\n}\n\n.skill-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 80px; \n\n  height: 80px;\n  transition: transform 0.3s ease-in-out;\n}\n\n.skill-icons[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  transform: scale(1.2); \n\n}\n.button-perfil[_ngcontent-%COMP%] {\n  margin-top: 5%;\n  display: inline-block;\n  padding: 15px 30px;\n  background-color: #fdca00;\n  color: white;\n  font-size: 1.2rem;\n  text-decoration: none;\n  text-align: center;\n  border-radius: 30px;\n  font-weight: bold;\n  transition: background-color 0.3s, transform 0.3s ease;\n  box-shadow: 1px solid black\n}\n\n.button-perfil[_ngcontent-%COMP%]:hover {\n  background-color: #d5af17;\n  transform: translateY(-5px);\n}\n\n.button-perfil[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  transition: transform 0.3s ease;\n}\n\n.button-perfil[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n\n.button-perfil[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n\n\n\n\n@media (max-width: 768px) {\n  .intro[_ngcontent-%COMP%] {\n    flex-direction: column; \n\n    gap: 20px; \n\n  }\n\n  .photo[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 200px; \n\n    height: 200px;\n  }\n\n  .text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem; \n\n  }\n\n  .text1[_ngcontent-%COMP%], .text3[_ngcontent-%COMP%] {\n    font-size: 1.6rem; \n\n  }\n\n  .skills[_ngcontent-%COMP%] {\n    width: 100%; \n\n  }\n  \n}\n\n\n.knowledge[_ngcontent-%COMP%] {\n  background-color: #350743; \n\n  margin-top: 50px;\n  padding: 40px 20px;\n  text-align: center;\n  width: 110%;\n  box-sizing: border-box;\n}\n\n.knowledge[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.5rem; \n\n  color: #fff;\n  margin-bottom: 20px;\n}\n\n.knowledge[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  max-width: 800px;\n  line-height: 1.6;\n  margin: 0 auto;\n  color: #fff;\n}\n\n.knowledge[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none; \n\n  padding: 0;\n  margin-top: 20px;\n}\n\n.knowledge[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  line-height: 1.6;\n  margin-bottom: 10px;\n  text-align: center;\n  color: #fff;\n}\n\n.knowledge[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #8318a3; \n\n}\n\n.knowledge[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .knowledge[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  text-align: center;\n  max-width: 900px;\n  margin: 0 auto;\n}\n\n@media (max-width: 768px) {\n  .knowledge[_ngcontent-%COMP%] {\n    padding: 30px 15px; \n\n  }\n\n  .knowledge[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2rem; \n\n  }\n\n  .knowledge[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .knowledge[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n    font-size: 1rem; \n\n  }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUIsRUFBRSwyREFBMkQ7RUFDaEYsY0FBYztFQUNkLGNBQWM7RUFDZCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZLEVBQUUsc0JBQXNCO0VBQ3BDLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsU0FBUztFQUNULGVBQWUsRUFBRSwrQkFBK0I7RUFDaEQsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxpQkFBaUIsRUFBRSwrQkFBK0I7RUFDbEQsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsY0FBYztBQUNoQjs7QUFFQSxrQ0FBa0M7QUFDbEM7RUFDRSx5QkFBeUIsRUFBRSx3REFBd0Q7RUFDbkYsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFFLCtDQUErQztFQUNuRSxrQkFBa0I7RUFDbEIsV0FBVyxFQUFFLG9DQUFvQztFQUNqRCxzQkFBc0IsRUFBRSxrREFBa0Q7QUFDNUU7O0FBRUE7RUFDRSxpQkFBaUIsRUFBRSxpQ0FBaUM7RUFDcEQsV0FBVztFQUNYLG1CQUFtQixFQUFFLHlDQUF5QztBQUNoRTs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsdUJBQXVCO0VBQ3ZCLFNBQVM7QUFDWDs7QUFFQTtFQUNFLFdBQVcsRUFBRSxpQ0FBaUM7RUFDOUMsWUFBWTtFQUNaLHNDQUFzQztBQUN4Qzs7QUFFQTtFQUNFLHFCQUFxQixFQUFFLHNEQUFzRDtBQUMvRTtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNEQUFzRDtFQUN0RDtBQUNGOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLDJCQUEyQjtBQUM3Qjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7OztBQUdBLHdDQUF3QztBQUN4QztFQUNFO0lBQ0Usc0JBQXNCLEVBQUUseURBQXlEO0lBQ2pGLFNBQVMsRUFBRSxrREFBa0Q7RUFDL0Q7O0VBRUE7SUFDRSxZQUFZLEVBQUUsMkRBQTJEO0lBQ3pFLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGlCQUFpQixFQUFFLGdDQUFnQztFQUNyRDs7RUFFQTtJQUNFLGlCQUFpQixFQUFFLG9DQUFvQztFQUN6RDs7RUFFQTtJQUNFLFdBQVcsRUFBRSxvRUFBb0U7RUFDbkY7O0FBRUY7QUFDQSx5Q0FBeUM7QUFDekM7RUFDRSx5QkFBeUIsRUFBRSxpREFBaUQ7RUFDNUUsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGlCQUFpQixFQUFFLHNDQUFzQztFQUN6RCxXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLFdBQVc7QUFDYjs7QUFFQTtFQUNFLHFCQUFxQixFQUFFLG9DQUFvQztFQUMzRCxVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGNBQWMsRUFBRSxxQ0FBcUM7QUFDdkQ7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQixFQUFFLDBDQUEwQztFQUNoRTs7RUFFQTtJQUNFLGVBQWUsRUFBRSw2QkFBNkI7RUFDaEQ7O0VBRUE7SUFDRSxlQUFlLEVBQUUsbURBQW1EO0VBQ3RFO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyRDAzM0I7IC8qIE1vcmFkbyBtZWRpYW5vY2hlIG9zY3VybywgaWd1YWwgcXVlIGVsIGhlYWRlciB5IGZvb3RlciAqL1xyXG4gIG1hcmdpbjogMCAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBwYWRkaW5nOiA1MHB4IDA7XHJcbn1cclxuXHJcbi5pbnRybyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG59XHJcblxyXG4ucGhvdG8gaW1nIHtcclxuICB3aWR0aDogMzAwcHg7IC8qIEltYWdlbiBtw4PCoXMgZ3JhbmRlICovXHJcbiAgaGVpZ2h0OiAzMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbn1cclxuXHJcbi50ZXh0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4udGV4dCBoMSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGZvbnQtc2l6ZTogM3JlbTsgLyogQXVtZW50YXIgdGFtYcODwrFvIGRlbCBub21icmUgKi9cclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLnRleHQxIHtcclxuICBtYXJnaW46IDVweCAwIDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxLjhyZW07IC8qIEF1bWVudGFyIHRhbWHDg8KxbyBkZWwgdMODwq10dWxvICovXHJcbiAgY29sb3I6ICM4MzE4YTM7XHJcbn1cclxuXHJcbi50ZXh0MyB7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxuICBmb250LXNpemU6IDEuOHJlbTtcclxuICBjb2xvcjogIzgzMThhMztcclxufVxyXG5cclxuLyogRXN0aWxvIGRlIGxhIHNlY2Npw4PCs24gU29icmUgTcODwq0gKi9cclxuLmFib3V0LW1lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUwNzQzOyAvKiBNb3JhZG8gbGlnZXJhbWVudGUgbcODwqFzIGNsYXJvIHF1ZSBlbCBmb25kbyBwcmluY2lwYWwgKi9cclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHBhZGRpbmc6IDQwcHggMjBweDsgLyogQcODwrFhZGltb3MgYWxnbyBkZSBwYWRkaW5nIHBhcmEgZWwgZXNwYWNpYWRvICovXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMTAlOyAvKiBBc2VndXJhIHF1ZSBvY3VwZSB0b2RvIGVsIGFuY2hvICovXHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogUGFyYSBxdWUgZWwgcGFkZGluZyBubyBhZmVjdGUgZWwgdGFtYcODwrFvIHRvdGFsICovXHJcbn1cclxuXHJcbi5hYm91dC1tZSBoMiB7XHJcbiAgZm9udC1zaXplOiAyLjVyZW07IC8qIFRhbWHDg8KxbyBkZWwgdMODwq10dWxvIFwiU29icmUgTcODwq1cIiAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7IC8qIEVzcGFjaW8gZW50cmUgZWwgdMODwq10dWxvIHkgZWwgcMODwqFycmFmbyAqL1xyXG59XHJcblxyXG4uYWJvdXQtbWUgcCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4uc2tpbGxzIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luLXRvcDogNjBweDtcclxuICB3aWR0aDogNzUlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuXHJcbi5za2lsbHMgaDIge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuXHJcbi5za2lsbC1pY29ucyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgZ2FwOiAzMHB4O1xyXG59XHJcblxyXG4uc2tpbGwtaWNvbnMgaW1nIHtcclxuICB3aWR0aDogODBweDsgLyogQWp1c3RhciB0YW1hw4PCsW8gZGUgbG9zIGljb25vcyAqL1xyXG4gIGhlaWdodDogODBweDtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluLW91dDtcclxufVxyXG5cclxuLnNraWxsLWljb25zIGltZzpob3ZlciB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpOyAvKiBFZmVjdG8gZGUgaG92ZXIgcGFyYSBoYWNlciBsb3MgaWNvbm9zIG3Dg8KhcyBncmFuZGVzICovXHJcbn1cclxuLmJ1dHRvbi1wZXJmaWwge1xyXG4gIG1hcmdpbi10b3A6IDUlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwYWRkaW5nOiAxNXB4IDMwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZkY2EwMDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxuICBib3gtc2hhZG93OiAxcHggc29saWQgYmxhY2tcclxufVxyXG5cclxuLmJ1dHRvbi1wZXJmaWw6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNkNWFmMTc7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01cHgpO1xyXG59XHJcblxyXG4uYnV0dG9uLXBlcmZpbCBzcGFuIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZTtcclxufVxyXG5cclxuLmJ1dHRvbi1wZXJmaWw6aG92ZXIgc3BhbiB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjA1KTtcclxufVxyXG5cclxuLmJ1dHRvbi1wZXJmaWw6YWN0aXZlIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbn1cclxuXHJcblxyXG4vKiBNZWRpYSBRdWVyeSBwYXJhIHBhbnRhbGxhcyBwZXF1ZcODwrFhcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAuaW50cm8ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogQ2FtYmlhciBsYSBkaXJlY2Npw4PCs24gYSBjb2x1bW5hIGVuIHBhbnRhbGxhcyBwZXF1ZcODwrFhcyAqL1xyXG4gICAgZ2FwOiAyMHB4OyAvKiBSZWR1Y2lyIGVsIGVzcGFjaW8gZW50cmUgbGEgaW1hZ2VuIHkgZWwgdGV4dG8gKi9cclxuICB9XHJcblxyXG4gIC5waG90byBpbWcge1xyXG4gICAgd2lkdGg6IDIwMHB4OyAvKiBBanVzdGFyIGVsIHRhbWHDg8KxbyBkZSBsYSBpbWFnZW4gcGFyYSBwYW50YWxsYXMgcGVxdWXDg8KxYXMgKi9cclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG5cclxuICAudGV4dCBoMSB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTsgLyogQWp1c3RhciBlbCB0YW1hw4PCsW8gZGVsIHRleHRvICovXHJcbiAgfVxyXG5cclxuICAudGV4dDEsIC50ZXh0MyB7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTsgLyogUmVkdWNpciBlbCB0YW1hw4PCsW8gZGUgbG9zIHRleHRvcyAqL1xyXG4gIH1cclxuXHJcbiAgLnNraWxscyB7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogSGFjZXIgbGEgc2VjY2nDg8KzbiBkZSBoYWJpbGlkYWRlcyBtw4PCoXMgYW5jaGEgZW4gcGFudGFsbGFzIHBlcXVlw4PCsWFzICovXHJcbiAgfVxyXG4gIFxyXG59XHJcbi8qIEVzdGlsbyBwYXJhIGxhIHNlY2Npw4PCs24gQ29ub2NpbWllbnRvcyAqL1xyXG4ua25vd2xlZGdlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUwNzQzOyAvKiBNb3JhZG8gY2xhcm8gc2ltaWxhciBhIGxhIHNlY2Npw4PCs24gXCJTb2JyZSBNw4PCrVwiICovXHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMTAlO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5rbm93bGVkZ2UgaDIge1xyXG4gIGZvbnQtc2l6ZTogMi41cmVtOyAvKiBUYW1hw4PCsW8gZGVsIHTDg8KtdHVsbyBcIkNvbm9jaW1pZW50b3NcIiAqL1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuXHJcbi5rbm93bGVkZ2UgcCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4ua25vd2xlZGdlIHVsIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7IC8qIEVsaW1pbmFyIGxvcyBwdW50b3MgZGUgbGEgbGlzdGEgKi9cclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5rbm93bGVkZ2UgbGkge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5rbm93bGVkZ2UgbGkgc3Ryb25nIHtcclxuICBjb2xvcjogIzgzMThhMzsgLyogQ29sb3IgcGFyYSBsb3MgdGV4dG9zIGVuIG5lZ3JpdGEgKi9cclxufVxyXG5cclxuLmtub3dsZWRnZSBwLCAua25vd2xlZGdlIHVsIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWF4LXdpZHRoOiA5MDBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmtub3dsZWRnZSB7XHJcbiAgICBwYWRkaW5nOiAzMHB4IDE1cHg7IC8qIFJlZHVjaXIgcGFkZGluZyBlbiBwYW50YWxsYXMgcGVxdWXDg8KxYXMgKi9cclxuICB9XHJcblxyXG4gIC5rbm93bGVkZ2UgaDIge1xyXG4gICAgZm9udC1zaXplOiAycmVtOyAvKiBBanVzdGFyIHRhbWHDg8KxbyBkZSB0w4PCrXR1bG8gKi9cclxuICB9XHJcblxyXG4gIC5rbm93bGVkZ2UgcCwgLmtub3dsZWRnZSBsaSB7XHJcbiAgICBmb250LXNpemU6IDFyZW07IC8qIEFqdXN0YXIgdGFtYcODwrFvIGRlbCB0ZXh0byBlbiBwYW50YWxsYXMgcGVxdWXDg8KxYXMgKi9cclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 1642:
/*!********************************************!*\
  !*** ./src/app/perfil/perfil.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PerfilComponent: () => (/* binding */ PerfilComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 316);


function PerfilComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const job_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r3.position);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r3.company);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", job_r3.years, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](job_r3.description);
  }
}
function PerfilComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13)(3, "h3", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const project_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("alt", "Imagen de ", project_r4.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", project_r4.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r4.description);
  }
}
function PerfilComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16)(1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p")(4, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const course_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r5.institution);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" - ", course_r5.year, "");
  }
}
class PerfilComponent {
  constructor() {
    this.experience = [{
      position: 'Desarrollador Web Full-Stack',
      company: 'DXC',
      years: '09 / 2024 - Actualidad',
      description: 'Desarrollo de aplicaciones web con Angular, mantenimiento de bases de datos y optimización de rendimiento.'
    }, {
      position: 'Dependiente en Tienda de Ropa',
      company: 'Snipes',
      years: '05 / 2024 - 09 / 2024',
      description: 'Atención al cliente, reposición de mercancía y control de stock.'
    }, {
      position: 'Técnico en Redes',
      company: 'Cref Systems',
      years: '09 / 2022 - 12 / 2022',
      description: 'Preparación de Hardware, instalación de software, mantenimiento de Servidor y Base de Datos.'
    }, {
      position: 'Técnico en Redes',
      company: 'RSystems',
      years: '05 / 2022 - 08 / 2022',
      description: 'Creación y mantenimiento de webs, preparación de Hardware, instalación de software, mantenimiento de Servidor y Base de Datos.'
    }];
    this.education = [{
      title: 'CFGS - Desarrollador De Aplicaciones Web',
      institution: 'Institut Montilivi',
      year: '09 / 2023 - Actualidad'
    }, {
      title: 'CFGM - Técnico en Redes y Sistemas Microinformáticos',
      institution: 'La Salle Girona',
      year: '09 / 2021 - 06 / 2023'
    }, {
      title: 'Título - Desenvolupador Python',
      institution: 'DXC Learning',
      year: '40 Horas'
    }, {
      title: 'Título - Packet Tracer - Diseño de Redes',
      institution: 'Cisco',
      year: '20 Horas'
    }, {
      title: 'Título - Amazon Web Services',
      institution: 'AWS',
      year: '30 Horas'
    }];
    this.projects = [{
      title: 'TALICS',
      description: 'TALICS es una aplicación web de recursos humanos desarrollada para el ICS (Institut Català de la Salut). En este proyecto, formé parte del equipo de DXC, donde yo me encargué de parte del diseño de la interfaz, asegurándome de que fuera intuitiva y fácil de usar. Además, desarrollé  parte del código del front-end, utilizando Angular, implementando funciones interactivas y accesibles. También redacté manuales detallados tanto para el usuario final como para los programadores, garantizando una fácil comprensión y utilización de la plataforma. La aplicación continúa en desarrollo.',
      image: 'assets/TALICSproject.png'
    }, {
      title: 'Sabor Mediterráneo',
      description: 'Sabor Mediterráneo es una plataforma web para gestionar los pedidos de un restaurante. Los usuarios pueden navegar por el menú, realizar pedidos y gestionar su cuenta, mientras que los administradores administran el menú y los pedidos. Para ello, desarrollé una API en PHP que gestiona la comunicación entre el front-end y la base de datos, permitiendo un flujo de datos seguro y eficiente. Utilicé Vue, HTML, CSS y JavaScript para crear una experiencia fluida. El reto principal fue garantizar una experiencia intuitiva para usuarios y administradores. La plataforma mejora la eficiencia operativa y la satisfacción del cliente, con una base de datos robusta y diseño responsivo. El proyecto fue realizado como aprendizaje propio.',
      image: 'assets/SaborMediterraneo.png'
    }, {
      title: 'A2GymHub',
      description: 'A2GymHub es una aplicación avanzada para gestionar usuarios, actividades y reservas en un gimnasio. Utilizando el patrón Modelo-Vista-Controlador (MVC), creé una estructura robusta para manejar la información de manera eficiente. Los usuarios pueden registrarse, reservar actividades y seguir su progreso, mientras que los administradores gestionan usuarios, reservas y actividades. El proyecto lo desarrollé para aprender sobre la arquitectura MVC y mejorar mis habilidades en programación web. Utilicé tecnologías como JavaScript, PHP, MySQL, y CSS, garantizando una experiencia funcional y escalable.',
      image: 'assets/A2GymHub.png'
    }];
  }
  ngOnInit() {}
  static {
    this.ɵfac = function PerfilComponent_Factory(t) {
      return new (t || PerfilComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PerfilComponent,
      selectors: [["app-perfil"]],
      decls: 15,
      vars: 3,
      consts: [[1, "perfil-container"], [1, "experience"], [1, "experience-container"], ["class", "experience-item", 4, "ngFor", "ngForOf"], [1, "projects-container"], [1, "section-title"], ["class", "project", 4, "ngFor", "ngForOf"], [1, "education"], [1, "education-container"], ["class", "education-item", 4, "ngFor", "ngForOf"], [1, "experience-item"], [1, "project"], [1, "project-image", 3, "src", "alt"], [1, "project-info"], [1, "project-title"], [1, "project-description"], [1, "education-item"]],
      template: function PerfilComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "section", 1)(2, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Experiencia Laboral");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PerfilComponent_div_5_Template, 9, 4, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4)(7, "h2", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Algunos de Mis Proyectos");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, PerfilComponent_div_9_Template, 7, 4, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7)(11, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Informaci\u00F3n Acad\u00E9mica");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PerfilComponent_div_14_Template, 7, 3, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.experience);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.projects);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.education);
        }
      },
      dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf],
      styles: [".perfil-container[_ngcontent-%COMP%] {\n    background: #2D033B;\n    margin: 0 20px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    color: white;\n    padding: 50px 0;\n}\n\n\n\n.experience[_ngcontent-%COMP%] {\n    background-color: #350743;\n    margin-top: 50px;\n    padding: 40px 20px;\n    text-align: center;\n    width: 110%;\n    box-sizing: border-box;\n}\n\n.experience[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    color: #fff;\n    margin-bottom: 30px;\n}\n\n\n\n.experience-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(2, 1fr);\n    grid-gap: 20px;\n    max-width: 900px;\n    margin: 0 auto;\n}\n\n\n\n.experience-item[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #350743;\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n\n\n.experience-item[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n}\n\n.experience-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n    color: #8318a3;\n}\n\n.experience-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n}\n\n\n\n.education[_ngcontent-%COMP%] {\n    background-color: #350743;\n    margin-top: 50px;\n    padding: 40px 20px;\n    text-align: center;\n    width: 110%;\n    box-sizing: border-box;\n}\n\n.education[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    color: #fff;\n    margin-bottom: 30px;\n}\n\n\n\n.education-container[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    gap: 20px;\n    max-width: 1100px;\n    margin: 0 auto;\n}\n\n\n\n.education-item[_ngcontent-%COMP%] {\n    background-color: white;\n    color: #350743;\n    padding: 20px;\n    border-radius: 10px;\n    text-align: center;\n    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);\n    transition: transform 0.3s ease, box-shadow 0.3s ease;\n}\n\n\n\n.education-item[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);\n}\n\n.education-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin-bottom: 10px;\n    color: #8318a3;\n}\n\n\n\n.projects-container[_ngcontent-%COMP%] {\n    background-color: #2D033B;\n    color: white;\n    padding: 40px 60px;\n    text-align: left;\n}\n\n.section-title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 36px;\n    margin-bottom: 30px;\n}\n\n.project[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin: 20px 0;\n    border-radius: 10px;\n    background-color: rgba(255, 255, 255, 0.1);\n    padding: 20px;\n    transition: transform 0.3s ease;\n}\n\n.project[_ngcontent-%COMP%]:hover {\n    transform: scale(1.05);\n}\n\n.project-image[_ngcontent-%COMP%] {\n    max-width: 350px;\n    max-height: 250px;\n    margin-right: 20px;\n    border-radius: 8px;\n}\n\n.project-info[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n    max-width: 60%;\n}\n\n.project-title[_ngcontent-%COMP%] {\n    font-size: 24px;\n}\n\n.project-description[_ngcontent-%COMP%] {\n    font-size: 16px;\n    line-height: 1.5;\n}\n\n\n\n@media (max-width: 1024px) {\n    .education-container[_ngcontent-%COMP%] {\n        grid-template-columns: repeat(2, 1fr);\n    }\n}\n\n@media (max-width: 768px) {\n    .experience-container[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .education-container[_ngcontent-%COMP%] {\n        grid-template-columns: 1fr;\n    }\n\n    .education-item[_ngcontent-%COMP%] {\n        width: 90%;\n    }\n\n    .project[_ngcontent-%COMP%] {\n        flex-direction: column;\n        text-align: center;\n    }\n\n    .project-image[_ngcontent-%COMP%] {\n        margin-bottom: 15px;\n        margin-right: 0;\n    }\n}\n\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvcGVyZmlsL3BlcmZpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQSxtQ0FBbUM7QUFDbkM7SUFDSSx5QkFBeUI7SUFDekIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsbUJBQW1CO0FBQ3ZCOztBQUVBLDZDQUE2QztBQUM3QztJQUNJLGFBQWE7SUFDYixxQ0FBcUM7SUFDckMsY0FBYztJQUNkLGdCQUFnQjtJQUNoQixjQUFjO0FBQ2xCOztBQUVBLG9DQUFvQztBQUNwQztJQUNJLHVCQUF1QjtJQUN2QixjQUFjO0lBQ2QsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLHFEQUFxRDtBQUN6RDs7QUFFQSxvQkFBb0I7QUFDcEI7SUFDSSxzQkFBc0I7SUFDdEIseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBLHFDQUFxQztBQUNyQztJQUNJLHlCQUF5QjtJQUN6QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUEsdUNBQXVDO0FBQ3ZDO0lBQ0ksYUFBYTtJQUNiLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEI7O0FBRUEsMEJBQTBCO0FBQzFCO0lBQ0ksdUJBQXVCO0lBQ3ZCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMscURBQXFEO0FBQ3pEOztBQUVBLG9CQUFvQjtBQUNwQjtJQUNJLHNCQUFzQjtJQUN0Qix5Q0FBeUM7QUFDN0M7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGNBQWM7QUFDbEI7O0FBRUEseUJBQXlCO0FBQ3pCO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxhQUFhO0lBQ2IsK0JBQStCO0FBQ25DOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsZ0JBQWdCO0FBQ3BCOztBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0kscUNBQXFDO0lBQ3pDO0FBQ0o7O0FBRUE7SUFDSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLFVBQVU7SUFDZDs7SUFFQTtRQUNJLHNCQUFzQjtRQUN0QixrQkFBa0I7SUFDdEI7O0lBRUE7UUFDSSxtQkFBbUI7UUFDbkIsZUFBZTtJQUNuQjtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLnBlcmZpbC1jb250YWluZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJEMDMzQjtcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNTBweCAwO1xyXG59XHJcblxyXG4vKiBTZWNjacODwrNuIGRlIEV4cGVyaWVuY2lhIExhYm9yYWwgKi9cclxuLmV4cGVyaWVuY2Uge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM1MDc0MztcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogMTEwJTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4vKiBDb250ZW5lZG9yIGVuIEdyaWQgKDIgY29sdW1uYXMsIDIgZmlsYXMpICovXHJcbi5leHBlcmllbmNlLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICAgIGdyaWQtZ2FwOiAyMHB4O1xyXG4gICAgbWF4LXdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiBUYXJqZXRhcyBkZSBleHBlcmllbmNpYSBsYWJvcmFsICovXHJcbi5leHBlcmllbmNlLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzM1MDc0MztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBFZmVjdG8gZGUgaG92ZXIgKi9cclxuLmV4cGVyaWVuY2UtaXRlbTpob3ZlciB7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMDUpO1xyXG4gICAgYm94LXNoYWRvdzogMCA2cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWl0ZW0gaDMge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgY29sb3I6ICM4MzE4YTM7XHJcbn1cclxuXHJcbi5leHBlcmllbmNlLWl0ZW0gcCB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuLyogU2VjY2nDg8KzbiBkZSBJbmZvcm1hY2nDg8KzbiBBY2Fkw4PCqW1pY2EgKi9cclxuLmVkdWNhdGlvbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzUwNzQzO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHBhZGRpbmc6IDQwcHggMjBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMTAlO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLmVkdWNhdGlvbiBoMiB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxufVxyXG5cclxuLyogQ29udGVuZWRvciBlbiBHcmlkIHBhcmEgMyBjb2x1bW5hcyAqL1xyXG4uZWR1Y2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcclxuICAgIGdhcDogMjBweDtcclxuICAgIG1heC13aWR0aDogMTEwMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbi8qIFRhcmpldGFzIGRlIGZvcm1hY2nDg8KzbiAqL1xyXG4uZWR1Y2F0aW9uLWl0ZW0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBjb2xvcjogIzM1MDc0MztcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2UsIGJveC1zaGFkb3cgMC4zcyBlYXNlO1xyXG59XHJcblxyXG4vKiBFZmVjdG8gZGUgaG92ZXIgKi9cclxuLmVkdWNhdGlvbi1pdGVtOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxufVxyXG5cclxuLmVkdWNhdGlvbi1pdGVtIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGNvbG9yOiAjODMxOGEzO1xyXG59XHJcblxyXG4vKiBTZWNjacODwrNuIGRlIFByb3llY3RvcyAqL1xyXG4ucHJvamVjdHMtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyRDAzM0I7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiA0MHB4IDYwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2U7XHJcbn1cclxuXHJcbi5wcm9qZWN0OmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNSk7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltYWdlIHtcclxuICAgIG1heC13aWR0aDogMzUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAyNTBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxufVxyXG5cclxuLnByb2plY3QtaW5mbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgbWF4LXdpZHRoOiA2MCU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LXRpdGxlIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb24ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcclxufVxyXG5cclxuLyogRGlzZcODwrFvIHJlc3BvbnNpdm8gKi9cclxuQG1lZGlhIChtYXgtd2lkdGg6IDEwMjRweCkge1xyXG4gICAgLmVkdWNhdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmV4cGVyaWVuY2UtY29udGFpbmVyIHtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIH1cclxuXHJcbiAgICAuZWR1Y2F0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcblxyXG4gICAgLmVkdWNhdGlvbi1pdGVtIHtcclxuICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5wcm9qZWN0IHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 6312:
/*!****************************************************************!*\
  !*** ./src/app/video-curriculum/video-curriculum.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoCurriculumComponent: () => (/* binding */ VideoCurriculumComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

class VideoCurriculumComponent {
  static {
    this.ɵfac = function VideoCurriculumComponent_Factory(t) {
      return new (t || VideoCurriculumComponent)();
    };
  }
  static {
    this.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: VideoCurriculumComponent,
      selectors: [["app-video-curriculum"]],
      decls: 2,
      vars: 0,
      template: function VideoCurriculumComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "video-curriculum works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
    });
  }
}


/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);


// Arranca la aplicación usando el módulo principal
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map