function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photography-photography-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-detail/photo-detail.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-detail/photo-detail.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotographyPhotoDetailPhotoDetailComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--Add custom template to image items-->\n<h2 class=\"page_title\">{{name}}</h2>\n\n<div class=\"tiles\" [style.width.px]=\"screenWidth - 180\" *ngIf=\"photos\">\n  <div *ngFor=\"let pho of photos; let i = index\" class=\"tile\" [lightbox]=\"i\" [gallery]=\"galleryId\">\n    <div class=\"image_container\" >\n      <img class=\"image\" [src]=\"pho.preURL\">\n      <div class=\"image_text\">{{pho.description}}</div>\n    </div>\n    <p class=\"title\">\n      {{pho.title}}\n      <b class=\"date\">{{pho.date}}</b>\n    </p>\n  </div>\n</div>\n\n<ng-template #itemTemplate\n             let-index=\"index\"\n             let-type=\"type\"\n             let-data=\"data\"\n             let-currIndex=\"currIndex\">\n\t<ng-container *ngIf=\"type === 'image' && index === currIndex\">\n    <span class=\"imageViewTitle\" float=\"left\" position=\"absolute\">{{data.title}}</span>\n    <span class=\"imageViewTitle\" float=\"right\">{{data.date}}</span>\n\n    <ngx-imageviewer [src]=\"data.src\"></ngx-imageviewer>\n    <!--//[@slideAnimation] -->\n\n    <p  id=\"imageViewDescript\" >\n      {{data.description}}\n    </p>\n  </ng-container>\n</ng-template>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-list/photo-list.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-list/photo-list.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotographyPhotoListPhotoListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ul class=\"side-nav\">\n  <li *ngFor=\"let album of albums$ | async\"\n     routerLinkActive=\"selected\">\n    <a [routerLink]=\"[album.name]\">\n      <span>{{ album.name }} </span>\n    </a>\n  </li>\n</ul>\n<router-outlet></router-outlet>\n\n<!--\nCopyright Google LLC. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n-->\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photography/photography.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photography/photography.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPhotographyPhotographyPhotographyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\n\n<div id=\"cover\" class=\"tiles\" [style.width.px]=\"screenWidth - 180\"\n*ngIf=\"this.router.url === '/photography'\">\n\n<h2 class=\"page_title\">Albums</h2>\n\n<div class=\"tile\"  *ngFor=\"let album of albums$ | async\" >\n  <a [routerLink]=\"[album.name]\"  >\n    <div class=\"image_container\">\n      <img class=\"image\" [src]=\"album.imgs[0].preURL\" [attr.imageSrc]=\"album.imgs[0].srcURL\" [attr.thumbSrc]=\"album.imgs[0].preURL\">\n      <div class=\"image_hover\">\n        <p><b> {{album.name}} </b></p>\n      </div>\n    </div>\n  </a>\n</div>\n</div>\n";
    /***/
  },

  /***/
  "./src/app/photography/photo-detail-resolver.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/photography/photo-detail-resolver.service.ts ***!
    \**************************************************************/

  /*! exports provided: PhotoDetailResolverService */

  /***/
  function srcAppPhotographyPhotoDetailResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoDetailResolverService", function () {
      return PhotoDetailResolverService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _photos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./photos.service */
    "./src/app/photography/photos.service.ts");

    var PhotoDetailResolverService = /*#__PURE__*/function () {
      function PhotoDetailResolverService(ps, router) {
        _classCallCheck(this, PhotoDetailResolverService);

        this.ps = ps;
        this.router = router;
      }

      _createClass(PhotoDetailResolverService, [{
        key: "resolve",
        value: function resolve(route, state) {
          var _this = this;

          var name = route.paramMap.get('name');
          return this.ps.getPhotos(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (photos) {
            if (photos) {
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(photos);
            } else {
              // id not found
              _this.router.navigate(['/photography']);

              return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
            }
          }));
        }
      }]);

      return PhotoDetailResolverService;
    }();

    PhotoDetailResolverService.ctorParameters = function () {
      return [{
        type: _photos_service__WEBPACK_IMPORTED_MODULE_5__["PhotosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    PhotoDetailResolverService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PhotoDetailResolverService);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/photography/photo-detail/photo-detail.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/photography/photo-detail/photo-detail.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotographyPhotoDetailPhotoDetailComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGh5L3Bob3RvLWRldGFpbC9waG90by1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/photography/photo-detail/photo-detail.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/photography/photo-detail/photo-detail.component.ts ***!
    \********************************************************************/

  /*! exports provided: PhotoDetailComponent */

  /***/
  function srcAppPhotographyPhotoDetailPhotoDetailComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoDetailComponent", function () {
      return PhotoDetailComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-gallery/core */
    "./node_modules/@ngx-gallery/core/__ivy_ngcc__/fesm2015/ngx-gallery-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @hallysonh/ngx-imageviewer */
    "./node_modules/@hallysonh/ngx-imageviewer/__ivy_ngcc__/fesm2015/hallysonh-ngx-imageviewer.js");

    var MY_IMAGEVIEWER_CONFIG = {
      bgStyle: 'transparent',
      loadingMessage: 'Loading ...',
      rotateRightButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__["createButtonConfig"])('', '', 4, false),
      rotateLeftButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__["createButtonConfig"])('', '', 4, false)
    };

    var PhotoDetailComponent = /*#__PURE__*/function () {
      function PhotoDetailComponent(gallery, route) {
        _classCallCheck(this, PhotoDetailComponent);

        this.route = route;
        this.galleryId = 'gal';
        this.galRef = gallery.ref(this.galleryId);
      }

      _createClass(PhotoDetailComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.getScreenSize();
          this.galRef.setConfig({
            thumb: false,
            loadingMode: 'indeterminate',
            itemTemplate: this.itemTemplate,
            gestures: false,
            //imageSize: 'cover',
            loadingIcon: 'Loading...'
          });
          this.route.data.subscribe(function (data) {
            _this2.photos = data.photos.imgs;
            _this2.name = data.photos.name;
            _this2.items = _this2.photos.map(function (p) {
              return {
                type: 'image',
                data: {
                  src: p.srcURL,
                  thumb: p.preURL,
                  title: p.title,
                  description: p.description,
                  date: p.date
                }
              };
            });

            _this2.galRef.load(_this2.items);
          });
        }
      }, {
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
        }
      }]);

      return PhotoDetailComponent;
    }();

    PhotoDetailComponent.ctorParameters = function () {
      return [{
        type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemTemplate', {
      "static": true
    })], PhotoDetailComponent.prototype, "itemTemplate", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], PhotoDetailComponent.prototype, "getScreenSize", null);
    PhotoDetailComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-detail',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-detail/photo-detail.component.html"))["default"],
      providers: [{
        provide: _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__["IMAGEVIEWER_CONFIG"],
        useValue: MY_IMAGEVIEWER_CONFIG
      }],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-detail.component.css */
      "./src/app/photography/photo-detail/photo-detail.component.css"))["default"]]
    })], PhotoDetailComponent);
    /***/
  },

  /***/
  "./src/app/photography/photo-list/photo-list.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/photography/photo-list/photo-list.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotographyPhotoListPhotoListComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGh5L3Bob3RvLWxpc3QvcGhvdG8tbGlzdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/photography/photo-list/photo-list.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/photography/photo-list/photo-list.component.ts ***!
    \****************************************************************/

  /*! exports provided: PhotoListComponent */

  /***/
  function srcAppPhotographyPhotoListPhotoListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoListComponent", function () {
      return PhotoListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _photos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../photos.service */
    "./src/app/photography/photos.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var PhotoListComponent = /*#__PURE__*/function () {
      function PhotoListComponent(service, route) {
        _classCallCheck(this, PhotoListComponent);

        this.service = service;
        this.route = route;
        this.error = '';
      }

      _createClass(PhotoListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.albums$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this3.service.getAlbum();
          }));
        }
      }]);

      return PhotoListComponent;
    }();

    PhotoListComponent.ctorParameters = function () {
      return [{
        type: _photos_service__WEBPACK_IMPORTED_MODULE_3__["PhotosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PhotoListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-list/photo-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photo-list.component.css */
      "./src/app/photography/photo-list/photo-list.component.css"))["default"]]
    })], PhotoListComponent);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/photography/photography-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/photography/photography-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: PhotoCenterRoutingModule */

  /***/
  function srcAppPhotographyPhotographyRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotoCenterRoutingModule", function () {
      return PhotoCenterRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./photo-list/photo-list.component */
    "./src/app/photography/photo-list/photo-list.component.ts");
    /* harmony import */


    var _photography_photography_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./photography/photography.component */
    "./src/app/photography/photography/photography.component.ts");
    /* harmony import */


    var _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./photo-detail/photo-detail.component */
    "./src/app/photography/photo-detail/photo-detail.component.ts");
    /* harmony import */


    var _photo_detail_resolver_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./photo-detail-resolver.service */
    "./src/app/photography/photo-detail-resolver.service.ts");

    var photoCenterRoutes = [{
      path: '',
      component: _photography_photography_component__WEBPACK_IMPORTED_MODULE_4__["PhotographyComponent"],
      children: [{
        path: '',
        component: _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_3__["PhotoListComponent"],
        children: [{
          path: ':name',
          component: _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_5__["PhotoDetailComponent"],
          resolve: {
            photos: _photo_detail_resolver_service__WEBPACK_IMPORTED_MODULE_6__["PhotoDetailResolverService"]
          }
        }]
      }]
    }];

    var PhotoCenterRoutingModule = function PhotoCenterRoutingModule() {
      _classCallCheck(this, PhotoCenterRoutingModule);
    };

    PhotoCenterRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(photoCenterRoutes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], PhotoCenterRoutingModule);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/photography/photography.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/photography/photography.module.ts ***!
    \***************************************************/

  /*! exports provided: PhotographyModule */

  /***/
  function srcAppPhotographyPhotographyModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotographyModule", function () {
      return PhotographyModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-gallery/core */
    "./node_modules/@ngx-gallery/core/__ivy_ngcc__/fesm2015/ngx-gallery-core.js");
    /* harmony import */


    var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-gallery/lightbox */
    "./node_modules/@ngx-gallery/lightbox/__ivy_ngcc__/fesm2015/ngx-gallery-lightbox.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./photo-list/photo-list.component */
    "./src/app/photography/photo-list/photo-list.component.ts");
    /* harmony import */


    var _photography_photography_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./photography/photography.component */
    "./src/app/photography/photography/photography.component.ts");
    /* harmony import */


    var _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./photo-detail/photo-detail.component */
    "./src/app/photography/photo-detail/photo-detail.component.ts");
    /* harmony import */


    var _photography_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./photography-routing.module */
    "./src/app/photography/photography-routing.module.ts");
    /* harmony import */


    var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @hallysonh/ngx-imageviewer */
    "./node_modules/@hallysonh/ngx-imageviewer/__ivy_ngcc__/fesm2015/hallysonh-ngx-imageviewer.js");

    var PhotographyModule = function PhotographyModule() {
      _classCallCheck(this, PhotographyModule);
    };

    PhotographyModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_5__["FontAwesomeModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"].withConfig({
        panelClass: 'fullscreen',
        hasBackdrop: false
      }), _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_10__["ImageViewerModule"], _photography_routing_module__WEBPACK_IMPORTED_MODULE_9__["PhotoCenterRoutingModule"]],
      declarations: [_photography_photography_component__WEBPACK_IMPORTED_MODULE_7__["PhotographyComponent"], _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_6__["PhotoListComponent"], _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_8__["PhotoDetailComponent"]]
    })], PhotographyModule);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/photography/photography/photography.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/photography/photography/photography.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPhotographyPhotographyPhotographyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGh5L3Bob3RvZ3JhcGh5L3Bob3RvZ3JhcGh5LmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/photography/photography/photography.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/photography/photography/photography.component.ts ***!
    \******************************************************************/

  /*! exports provided: PhotographyComponent */

  /***/
  function srcAppPhotographyPhotographyPhotographyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotographyComponent", function () {
      return PhotographyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../navbar.service */
    "./src/app/navbar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _photos_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../photos.service */
    "./src/app/photography/photos.service.ts");

    var PhotographyComponent = /*#__PURE__*/function () {
      function PhotographyComponent(nav, service, route, router) {
        _classCallCheck(this, PhotographyComponent);

        this.nav = nav;
        this.service = service;
        this.route = route;
        this.router = router;
        this.getScreenSize();
      }

      _createClass(PhotographyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.albums$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (params) {
            return _this4.service.getAlbum();
          }));
          this.nav.show();
          this.nav.setDeg(90);
        }
      }, {
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;
        }
      }]);

      return PhotographyComponent;
    }();

    PhotographyComponent.ctorParameters = function () {
      return [{
        type: _navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
      }, {
        type: _photos_service__WEBPACK_IMPORTED_MODULE_5__["PhotosService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], PhotographyComponent.prototype, "getScreenSize", null);
    PhotographyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photography',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./photography.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photography/photography.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./photography.component.css */
      "./src/app/photography/photography/photography.component.css"))["default"]]
    })], PhotographyComponent);
    /***/
  },

  /***/
  "./src/app/photography/photos.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/photography/photos.service.ts ***!
    \***********************************************/

  /*! exports provided: PhotosService */

  /***/
  function srcAppPhotographyPhotosServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PhotosService", function () {
      return PhotosService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var PhotosService = /*#__PURE__*/function () {
      function PhotosService(httpClient) {
        _classCallCheck(this, PhotosService);

        this.httpClient = httpClient;
        this.TABLE_URL = "https://zyha.tk/a/get-table.php";
      }

      _createClass(PhotosService, [{
        key: "getAlbum",
        value: function getAlbum() {
          var _this5 = this;

          return this.httpClient.get(this.TABLE_URL, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('table', 'photos')
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
            _this5.albums = res['data'];
            return _this5.albums;
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
        }
      }, {
        key: "handleError",
        value: function handleError(error) {
          console.log(error); // return an observable with a user friendly message

          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Error! something went wrong.');
        }
      }, {
        key: "getPhotos",
        value: function getPhotos(id) {
          return this.getAlbum().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (photos) {
            return photos.find(function (photos) {
              return photos.name === id;
            });
          }));
        }
      }]);

      return PhotosService;
    }();

    PhotosService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    PhotosService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
      providedIn: 'root'
    })], PhotosService);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  }
}]);
//# sourceMappingURL=photography-photography-module-es5.js.map