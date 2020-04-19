function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-top-bar></app-top-bar>\r\n\r\n<div id=\"body-container\">\r\n  <router-outlet ></router-outlet>\r\n</div>\r\n\r\n<!--\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n-->\r\n<div id=\"footer\" align=\"right\">\r\n  <span>Jes's Personal Website 2019</span>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCartCartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2>Cart</h2>\n<div class=\"cart-list\" *ngIf=\"items.length>0\">\n\t<div class=\"cart-item\" *ngFor=\"let item of items, index as itemId\">\n\t\t<span>{{ item.name }}</span>\n\t\t<span>{{ item.price | currency }}</span>\n    <a [title]=\"'Remove this item from Cart'\" (click)=\"removeFromCart(item, itemId)\">Remove</a>\n\t</div>\n\n\t<form [formGroup]=\"checkoutForm\"\n\t(ngSubmit)=\"onSubmit(checkoutForm.value)\">\n\t<div>\n\t    <label for=\"name\">\n\t      Name\n\t    </label>\n\t    <input id=\"name\" type=\"text\" formControlName=\"name\">\n\t  </div>\n\n\t  <div>\n\t    <label for=\"address\">\n\t      Address\n\t    </label>\n\t    <input id=\"address\" type=\"text\" formControlName=\"address\">\n\t  </div>\n\n\t  <button class=\"button\" mat-raised-button\n\t  matTooltip=\"Send a message to Jess for your intention to buy.\"\n\t   aria-label=\"Button that displays a tooltip in various positions\" type=\"submit\">Message Seller</button>\n\n\n\t</form>\n\n</div>\n<div class=\"cart-list\" *ngIf=\"!items.length\">\n\t&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Your cart is empty.\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"homegallery\" [ngStyle]=\"{'width':screenWidth+'px', 'height':screenHeight+'px'}\" >\n\n  <img class=\"bg\" #bg_back src=\"assets/bg_sky.png\" >\n  <img class=\"cloud\" src=\"assets/cloud.png\">\n  <img class=\"cloud2\" src=\"assets/cloud2.png\">\n  <img class=\"bg\" #bg_fore src=\"assets/bg_road.png\">\n  <div id=\"carlightl\" #carlightl></div>\n  <div id=\"carlightr\" #carlightr></div>\n  <img id=\"eagle\" src=\"assets/eagle.gif\">\n</div>\n\n\n<div class=\"side-nav\" id=\"intro\">\n  <p>Hello!</p>\n  <p>Welcome to <b>ZYHA</b>, a website for displaying my journeys in <i>photography</i> and <i>pottery</i>.</p>\n  <p>My name is Jessica. Feel free to give design suggestions and share you ideas!</p>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTopBarTopBarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"navigation\" *ngIf=\"nav.visible\">\n  <div id=\"compass\">\n    <img src=\"assets/icons/compass_needle_80.png\"\n    class=\"compass_needle\"\n    width=\"200px\"\n    height=\"200px\"\n    [@rotatedState]='nav.deg'>\n    <a [@selectN]='nav.deg' [title]=\"'Home'\" [routerLink]=\"['/']\" class=\"navlinks\" id=\"home_link\">\n      <i class=\"material-icons icons\" >home</i>\n    </a>\n    <a [title]=\"'Photography'\" [@selectE]='nav.deg' [routerLink]=\"['/photography']\" class=\"navlinks\" id=\"photo_link\">\n      <i class=\"icons\">影</i>\n    </a>\n    <a [@selectW]='nav.deg' [title]=\"'Pottery'\" [routerLink]=\"['/pottery']\" class=\"navlinks\" id=\"pottery_link\">\n      <i class=\"icons\">陶</i>\n    </a>\n    <a [routerLink]=\"['/cart']\" [@selectS]='nav.deg' class=\"button fancy-button\"  class=\"navlinks\" id=\"cart_link\">\n      <i class=\"material-icons icons\">shopping_cart</i>\n    </a>\n  </div>\n\n</div>\n<!--\nCopyright Google LLC. All Rights Reserved.\nUse of this source code is governed by an MIT-style license that\ncan be found in the LICENSE file at http://angular.io/license\n-->\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _selective_preload_strat_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./selective-preload-strat.service */
    "./src/app/selective-preload-strat.service.ts");

    var appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'photography',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | photography-photography-module */
        [__webpack_require__.e("default~photography-photography-module~pottery-pottery-module"), __webpack_require__.e("photography-photography-module")]).then(__webpack_require__.bind(null,
        /*! ./photography/photography.module */
        "./src/app/photography/photography.module.ts")).then(function (mod) {
          return mod.PhotographyModule;
        });
      },
      data: {
        preload: true
      }
    }, {
      path: 'pottery',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | pottery-pottery-module */
        [__webpack_require__.e("default~photography-photography-module~pottery-pottery-module"), __webpack_require__.e("pottery-pottery-module")]).then(__webpack_require__.bind(null,
        /*! ./pottery/pottery.module */
        "./src/app/pottery/pottery.module.ts")).then(function (mod) {
          return mod.PotteryModule;
        });
      },
      data: {
        preload: true
      }
    }, //{ path: 'pottery/:potteryId', component: PotteryDetailsComponent },
    {
      path: 'cart',
      component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__["CartComponent"]
    }]; //  path: 'crisis-center',
    //  loadChildren: () => import('./crisis-center/crisis-center.module').then(mod => mod.CrisisCenterModule),
    //  data: { preload: true }

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes, {
        //  enableTracing: true,
        preloadingStrategy: _selective_preload_strat_service__WEBPACK_IMPORTED_MODULE_5__["SelectivePreloadingStrategyService"]
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/deep/ app-photography, /deep/ app-pottery, /deep/ app-pottery-details, /deep/ app-cart{\n  margin-left: 155px;\n  margin-top: 155px;\n  display: block;\n  max-width: 800px;\n  padding: 16px;\n}\n\n/deep/ app-top-bar{\n  margin: 0px;\n  padding: 0px;\n  top:0px;\n  left:0px;\n}\n\n/deep/ h2 {\n  display: block;\n  position: fixed;\n  color:#fff;\n  top: 32px;\n  right: 20px;\n  font-size: 2em;\n  z-index:2;\n  text-align: right;\n}\n\n/deep/ #imageViewDescript {\n  color:#fff;\n  font-size:1.2em;\n  display:relative;\n  left:center;\n  font-style:italic;\n}\n\n/deep/ lightbox, /deep/ gallery {\n  background: transparent!important;\n  z-index:11!important;\n}\n\n/deep/ gallery-image div {\n  display:none;\n}\n\n/deep/  gallery::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.8;\n  z-index: -1;\n  background: #2a4d69;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkI7O0FBR0E7RUFDRSxVQUFVO0VBQ1YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25COztBQUlBO0VBQ0UsaUNBQWlDO0VBQ2pDLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLFlBQVk7QUFDZDs7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi9kZWVwLyBhcHAtcGhvdG9ncmFwaHksIC9kZWVwLyBhcHAtcG90dGVyeSwgL2RlZXAvIGFwcC1wb3R0ZXJ5LWRldGFpbHMsIC9kZWVwLyBhcHAtY2FydHtcbiAgbWFyZ2luLWxlZnQ6IDE1NXB4O1xuICBtYXJnaW4tdG9wOiAxNTVweDtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG5cbi9kZWVwLyBhcHAtdG9wLWJhcntcbiAgbWFyZ2luOiAwcHg7XG4gIHBhZGRpbmc6IDBweDtcbiAgdG9wOjBweDtcbiAgbGVmdDowcHg7XG59XG5cbi9kZWVwLyBoMiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGNvbG9yOiNmZmY7XG4gIHRvcDogMzJweDtcbiAgcmlnaHQ6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMmVtO1xuICB6LWluZGV4OjI7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuXG5cbi9kZWVwLyAjaW1hZ2VWaWV3RGVzY3JpcHQge1xuICBjb2xvcjojZmZmO1xuICBmb250LXNpemU6MS4yZW07XG4gIGRpc3BsYXk6cmVsYXRpdmU7XG4gIGxlZnQ6Y2VudGVyO1xuICBmb250LXN0eWxlOml0YWxpYztcbn1cblxuXG5cbi9kZWVwLyBsaWdodGJveCwgL2RlZXAvIGdhbGxlcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6MTEhaW1wb3J0YW50O1xufVxuL2RlZXAvIGdhbGxlcnktaW1hZ2UgZGl2IHtcbiAgZGlzcGxheTpub25lO1xufVxuL2RlZXAvICBnYWxsZXJ5OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogIzJhNGQ2OTtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-gallery/core */
    "./node_modules/@ngx-gallery/core/__ivy_ngcc__/fesm2015/ngx-gallery-core.js");
    /* harmony import */


    var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-gallery/lightbox */
    "./node_modules/@ngx-gallery/lightbox/__ivy_ngcc__/fesm2015/ngx-gallery-lightbox.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-gallery/gallerize */
    "./node_modules/@ngx-gallery/gallerize/__ivy_ngcc__/fesm2015/ngx-gallery-gallerize.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./navbar.service */
    "./src/app/navbar.service.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./top-bar/top-bar.component */
    "./src/app/top-bar/top-bar.component.ts");
    /* harmony import */


    var _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./cart/cart.component */
    "./src/app/cart/cart.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts"); //import { GALLERY_CONFIG } from '@ngx-gallery/core';
    //import { LIGHTBOX_CONFIG } from '@ngx-gallery/lightbox';


    var AppModule = function AppModule(router) {// Use a custom replacer to display function names in the route configs
      // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
      // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));

      _classCallCheck(this, AppModule);
    };

    AppModule.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }];
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__["GallerizeModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_5__["GalleryModule"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__["LightboxModule"].withConfig({
        panelClass: 'fullscreen'
      }), _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"]],
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"], _top_bar_top_bar_component__WEBPACK_IMPORTED_MODULE_15__["TopBarComponent"], _cart_cart_component__WEBPACK_IMPORTED_MODULE_16__["CartComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_17__["HomeComponent"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_14__["AppComponent"]],
      providers: [_cart_service__WEBPACK_IMPORTED_MODULE_12__["CartService"], _navbar_service__WEBPACK_IMPORTED_MODULE_13__["NavbarService"]]
    })], AppModule);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/cart.service.ts":
  /*!*********************************!*\
    !*** ./src/app/cart.service.ts ***!
    \*********************************/

  /*! exports provided: CartService */

  /***/
  function srcAppCartServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartService", function () {
      return CartService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var CartService = /*#__PURE__*/function () {
      function CartService() {
        _classCallCheck(this, CartService);

        this.items = [];
      }

      _createClass(CartService, [{
        key: "addToCart",
        value: function addToCart(product) {
          this.items.push(product);
        }
      }, {
        key: "removeFromCart",
        value: function removeFromCart(productIndex) {
          if (productIndex > -1) {
            this.items.splice(productIndex, 1);
          }
        }
      }, {
        key: "getItems",
        value: function getItems() {
          return this.items;
        }
      }, {
        key: "notInCart",
        value: function notInCart(product) {
          return this.items.indexOf(product);
        }
      }, {
        key: "clearCart",
        value: function clearCart() {
          this.items = [];
          return this.items;
        }
      }]);

      return CartService;
    }();

    CartService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], CartService);
    /***/
  },

  /***/
  "./src/app/cart/cart.component.css":
  /*!*****************************************!*\
    !*** ./src/app/cart/cart.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppCartCartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".cart-list {\n  padding: 20px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2FydC9jYXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jYXJ0L2NhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJ0LWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/cart/cart.component.ts":
  /*!****************************************!*\
    !*** ./src/app/cart/cart.component.ts ***!
    \****************************************/

  /*! exports provided: CartComponent */

  /***/
  function srcAppCartCartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CartComponent", function () {
      return CartComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../navbar.service */
    "./src/app/navbar.service.ts");

    var CartComponent = /*#__PURE__*/function () {
      function CartComponent(cartService, formBuilder, nav) {
        _classCallCheck(this, CartComponent);

        this.cartService = cartService;
        this.formBuilder = formBuilder;
        this.nav = nav;
        this.nav.show();
        this.nav.setDeg(180);
        this.checkoutForm = this.formBuilder.group({
          name: '',
          address: ''
        });
      }

      _createClass(CartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.items = this.cartService.getItems();
        }
      }, {
        key: "addToCart",
        value: function addToCart(pottery) {
          window.alert('Your ' + pottery.name + ' has been added to the cart!');
          this.cartService.addToCart(pottery);
        }
      }, {
        key: "removeFromCart",
        value: function removeFromCart(pottery, potteryId) {
          window.alert('Your ' + pottery.name + ' has been removed from the cart!');
          this.cartService.removeFromCart(potteryId);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(customerData) {
          // Process checkout data here
          console.warn('Your order has been submitted', customerData);
          this.cartService.clearCart();
          this.checkoutForm.reset();
        }
      }]);

      return CartComponent;
    }();

    CartComponent.ctorParameters = function () {
      return [{
        type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]
      }];
    };

    CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/cart/cart.component.css"))["default"]]
    })], CartComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*\n#homegallery:before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    opacity: 0.6;\n    background-image: url('/assets/1-big.jpeg');\n    background-repeat: no-repeat;\n    background-position: 50% 0;\n    -ms-background-size: cover;\n    -o-background-size: cover;\n    -moz-background-size: cover;\n    -webkit-background-size: cover;\n    background-size: cover;\n}\n*/\n\n#homegallery{\n  display:block;\n  position:fixed;\n  left:0px;\n  bottom:0px;\n  z-index:-1;\n}\n\n#homegallery .bg{\n  position:absolute;\n  bottom:0px;\n  left:0px;\n}\n\n#homegallery .cloud{\n  position:absolute;\n  top:50%;\n  width:15%;\n  height:15%;\n  -webkit-animation-name: ani_cloud;\n          animation-name: ani_cloud;\n  -webkit-animation-duration:150s;\n          animation-duration:150s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes ani_cloud{\n  0% {left:-20%;}\n  100% {left:100%;}\n}\n\n@keyframes ani_cloud{\n  0% {left:-20%;}\n  100% {left:100%;}\n}\n\n#homegallery .cloud2{\n  position:absolute;\n  top:30%;\n  left:0px;\n  width:30%;\n  height:15%;\n  -webkit-animation-name: ani_cloud2;\n          animation-name: ani_cloud2;\n  -webkit-animation-duration:300s;\n          animation-duration:300s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes ani_cloud2{\n  0% {left:-30%;}\n  100% {left:110%;}\n}\n\n@keyframes ani_cloud2{\n  0% {left:-30%;}\n  100% {left:110%;}\n}\n\n#homegallery #carlightl{\n  background-image:radial-gradient( #fff, rgba(0,0,0,0) 10px);\n  position:absolute;\n  bottom:8%;\n  left:47.5%;\n  z-index:10;\n  height:10vh;\n  width:10vh;\n  -webkit-animation-name: ani_carlight;\n          animation-name: ani_carlight;\n  -webkit-animation-duration:20s;\n          animation-duration:20s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n#homegallery #carlightr{\n  background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 10px);\n  position:absolute;\n  z-index:10;\n  height:10vh;\n  width:10vh;\n  -webkit-animation-name: ani_carlight;\n          animation-name: ani_carlight;\n  -webkit-animation-duration:20s;\n          animation-duration:20s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n}\n\n@-webkit-keyframes ani_carlight{\n  0% { background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 10px); }\n  50% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 20px);}\n  52% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 5px);}\n  54% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 20px);}\n  100% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 10px); }\n}\n\n@keyframes ani_carlight{\n  0% { background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 10px); }\n  50% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 20px);}\n  52% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 5px);}\n  54% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 20px);}\n  100% {background-image:radial-gradient( #faebd7, rgba(0,0,0,0) 10px); }\n}\n\n#homegallery #eagle{\n  position:absolute;\n  top:0%;\n  left:100%;\n  -webkit-animation-name: ani_eagle;\n          animation-name: ani_eagle;\n  -webkit-animation-duration:20s;\n          animation-duration:20s;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-delay:10s;\n          animation-delay:10s;\n  height: 10vh;\n  width: 10vh;\n}\n\n@-webkit-keyframes ani_eagle{\n  0%{ top:0%; left:100%; -webkit-transform: scale(.5) scaleX(1); transform: scale(.5) scaleX(1);}\n  23%{ top:15%; left:68%;-webkit-transform: scaleX(1);transform: scaleX(1);}\n  41%{ top:43%; left:43%;-webkit-transform: scaleX(1);transform: scaleX(1);}\n\n  48.5%{ top:44%; left:41%;-webkit-transform: scaleX(1) scale(.8);transform: scaleX(1) scale(.8);}\n  49%{ top:44%; left:42%; -webkit-transform: scaleX(-1) scale(1); transform: scaleX(-1) scale(1);}\n\n  54%{ top:53%; left:56%; -webkit-transform: scaleX(-1) scale(1); transform: scaleX(-1) scale(1);}\n\n  58.5%{ top:43%; left:64%; -webkit-transform: scaleX(-1); transform: scaleX(-1);}\n  59%{ top:43%; left:64%; -webkit-transform: scaleX(1); transform: scaleX(1);}\n\n  65%{ top:41%; left:59%; -webkit-transform: scale(1); transform: scale(1);}\n\n  75.5%{ top:55%; left:50%; -webkit-transform: scaleX(1); transform: scaleX(1);}\n  76%{ top:56%; left:50%; -webkit-transform: scaleX(-1); transform: scaleX(-1);}\n\n  80%{ top:60%; left:60%; -webkit-transform: scaleX(-1); transform: scaleX(-1);}\n  100%{ top:65%; left:120%; -webkit-transform:scaleX(-1); transform:scaleX(-1);}\n}\n\n@keyframes ani_eagle{\n  0%{ top:0%; left:100%; -webkit-transform: scale(.5) scaleX(1); transform: scale(.5) scaleX(1);}\n  23%{ top:15%; left:68%;-webkit-transform: scaleX(1);transform: scaleX(1);}\n  41%{ top:43%; left:43%;-webkit-transform: scaleX(1);transform: scaleX(1);}\n\n  48.5%{ top:44%; left:41%;-webkit-transform: scaleX(1) scale(.8);transform: scaleX(1) scale(.8);}\n  49%{ top:44%; left:42%; -webkit-transform: scaleX(-1) scale(1); transform: scaleX(-1) scale(1);}\n\n  54%{ top:53%; left:56%; -webkit-transform: scaleX(-1) scale(1); transform: scaleX(-1) scale(1);}\n\n  58.5%{ top:43%; left:64%; -webkit-transform: scaleX(-1); transform: scaleX(-1);}\n  59%{ top:43%; left:64%; -webkit-transform: scaleX(1); transform: scaleX(1);}\n\n  65%{ top:41%; left:59%; -webkit-transform: scale(1); transform: scale(1);}\n\n  75.5%{ top:55%; left:50%; -webkit-transform: scaleX(1); transform: scaleX(1);}\n  76%{ top:56%; left:50%; -webkit-transform: scaleX(-1); transform: scaleX(-1);}\n\n  80%{ top:60%; left:60%; -webkit-transform: scaleX(-1); transform: scaleX(-1);}\n  100%{ top:65%; left:120%; -webkit-transform:scaleX(-1); transform:scaleX(-1);}\n}\n\n#intro {\n  position:absolute;\n  top: 67%;/*240px*/\n  left: 35px;\n  width: 160px;\n  text-align: center;\n  margin:0px;\n  padding:5px;\n  font-size:13px;\n  z-index:2;\n  /*background:rgb(250,235,215,.6);*/\n\n}\n\n#intro p {\n  color: #faebd7!important;\n  /*text-shadow: -1px 1px 2px #fff,1px -1px px #fff;*/\n}\n\n/*\n/deep/ #homegallery gallery-thumb.g-active-thumb gallery-image .g-image-item {\n  background-size: contain !important;\n}\n\n\n/deep/ gallery-thumb.g-active-thumb{\ndisplay:block;\n\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQW9CQzs7QUFFRDtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsUUFBUTtFQUNSLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtFQUNWLFFBQVE7QUFDVjs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixPQUFPO0VBQ1AsU0FBUztFQUNULFVBQVU7RUFDVixpQ0FBeUI7VUFBekIseUJBQXlCO0VBQ3pCLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLElBQUksU0FBUyxDQUFDO0VBQ2QsTUFBTSxTQUFTLENBQUM7QUFDbEI7O0FBSEE7RUFDRSxJQUFJLFNBQVMsQ0FBQztFQUNkLE1BQU0sU0FBUyxDQUFDO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLE9BQU87RUFDUCxRQUFRO0VBQ1IsU0FBUztFQUNULFVBQVU7RUFDVixrQ0FBMEI7VUFBMUIsMEJBQTBCO0VBQzFCLCtCQUF1QjtVQUF2Qix1QkFBdUI7RUFDdkIsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFDQTtFQUNFLElBQUksU0FBUyxDQUFDO0VBQ2QsTUFBTSxTQUFTLENBQUM7QUFDbEI7O0FBSEE7RUFDRSxJQUFJLFNBQVMsQ0FBQztFQUNkLE1BQU0sU0FBUyxDQUFDO0FBQ2xCOztBQUdBO0VBQ0UsMkRBQTJEO0VBQzNELGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsVUFBVTtFQUNWLFVBQVU7RUFDVixXQUFXO0VBQ1gsVUFBVTtFQUNWLG9DQUE0QjtVQUE1Qiw0QkFBNEI7RUFDNUIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0FBQ3JDOztBQUNBO0VBQ0UsOERBQThEO0VBQzlELGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsV0FBVztFQUNYLFVBQVU7RUFDVixvQ0FBNEI7VUFBNUIsNEJBQTRCO0VBQzVCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIsMkNBQW1DO1VBQW5DLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLEtBQUssOERBQThELEVBQUU7RUFDckUsS0FBSyw4REFBOEQsQ0FBQztFQUNwRSxLQUFLLDZEQUE2RCxDQUFDO0VBQ25FLEtBQUssOERBQThELENBQUM7RUFDcEUsTUFBTSw4REFBOEQsRUFBRTtBQUN4RTs7QUFOQTtFQUNFLEtBQUssOERBQThELEVBQUU7RUFDckUsS0FBSyw4REFBOEQsQ0FBQztFQUNwRSxLQUFLLDZEQUE2RCxDQUFDO0VBQ25FLEtBQUssOERBQThELENBQUM7RUFDcEUsTUFBTSw4REFBOEQsRUFBRTtBQUN4RTs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixNQUFNO0VBQ04sU0FBUztFQUNULGlDQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0QiwyQ0FBbUM7VUFBbkMsbUNBQW1DO0VBQ25DLDJCQUFtQjtVQUFuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLFdBQVc7QUFDYjs7QUFFQTtFQUNFLElBQUksTUFBTSxFQUFFLFNBQVMsRUFBRSxzQ0FBOEIsRUFBOUIsOEJBQThCLENBQUM7RUFDdEQsS0FBSyxPQUFPLEVBQUUsUUFBUSxDQUFDLDRCQUFvQixDQUFwQixvQkFBb0IsQ0FBQztFQUM1QyxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsNEJBQW9CLENBQXBCLG9CQUFvQixDQUFDOztFQUU1QyxPQUFPLE9BQU8sRUFBRSxRQUFRLENBQUMsc0NBQThCLENBQTlCLDhCQUE4QixDQUFDO0VBQ3hELEtBQUssT0FBTyxFQUFFLFFBQVEsRUFBRSxzQ0FBOEIsRUFBOUIsOEJBQThCLENBQUM7O0VBRXZELEtBQUssT0FBTyxFQUFFLFFBQVEsRUFBRSxzQ0FBOEIsRUFBOUIsOEJBQThCLENBQUM7O0VBRXZELE9BQU8sT0FBTyxFQUFFLFFBQVEsRUFBRSw2QkFBcUIsRUFBckIscUJBQXFCLENBQUM7RUFDaEQsS0FBSyxPQUFPLEVBQUUsUUFBUSxFQUFFLDRCQUFvQixFQUFwQixvQkFBb0IsQ0FBQzs7RUFFN0MsS0FBSyxPQUFPLEVBQUUsUUFBUSxFQUFFLDJCQUFtQixFQUFuQixtQkFBbUIsQ0FBQzs7RUFFNUMsT0FBTyxPQUFPLEVBQUUsUUFBUSxFQUFFLDRCQUFvQixFQUFwQixvQkFBb0IsQ0FBQztFQUMvQyxLQUFLLE9BQU8sRUFBRSxRQUFRLEVBQUUsNkJBQXFCLEVBQXJCLHFCQUFxQixDQUFDOztFQUU5QyxLQUFLLE9BQU8sRUFBRSxRQUFRLEVBQUUsNkJBQXFCLEVBQXJCLHFCQUFxQixDQUFDO0VBQzlDLE1BQU0sT0FBTyxFQUFFLFNBQVMsRUFBRSw0QkFBb0IsRUFBcEIsb0JBQW9CLENBQUM7QUFDakQ7O0FBcEJBO0VBQ0UsSUFBSSxNQUFNLEVBQUUsU0FBUyxFQUFFLHNDQUE4QixFQUE5Qiw4QkFBOEIsQ0FBQztFQUN0RCxLQUFLLE9BQU8sRUFBRSxRQUFRLENBQUMsNEJBQW9CLENBQXBCLG9CQUFvQixDQUFDO0VBQzVDLEtBQUssT0FBTyxFQUFFLFFBQVEsQ0FBQyw0QkFBb0IsQ0FBcEIsb0JBQW9CLENBQUM7O0VBRTVDLE9BQU8sT0FBTyxFQUFFLFFBQVEsQ0FBQyxzQ0FBOEIsQ0FBOUIsOEJBQThCLENBQUM7RUFDeEQsS0FBSyxPQUFPLEVBQUUsUUFBUSxFQUFFLHNDQUE4QixFQUE5Qiw4QkFBOEIsQ0FBQzs7RUFFdkQsS0FBSyxPQUFPLEVBQUUsUUFBUSxFQUFFLHNDQUE4QixFQUE5Qiw4QkFBOEIsQ0FBQzs7RUFFdkQsT0FBTyxPQUFPLEVBQUUsUUFBUSxFQUFFLDZCQUFxQixFQUFyQixxQkFBcUIsQ0FBQztFQUNoRCxLQUFLLE9BQU8sRUFBRSxRQUFRLEVBQUUsNEJBQW9CLEVBQXBCLG9CQUFvQixDQUFDOztFQUU3QyxLQUFLLE9BQU8sRUFBRSxRQUFRLEVBQUUsMkJBQW1CLEVBQW5CLG1CQUFtQixDQUFDOztFQUU1QyxPQUFPLE9BQU8sRUFBRSxRQUFRLEVBQUUsNEJBQW9CLEVBQXBCLG9CQUFvQixDQUFDO0VBQy9DLEtBQUssT0FBTyxFQUFFLFFBQVEsRUFBRSw2QkFBcUIsRUFBckIscUJBQXFCLENBQUM7O0VBRTlDLEtBQUssT0FBTyxFQUFFLFFBQVEsRUFBRSw2QkFBcUIsRUFBckIscUJBQXFCLENBQUM7RUFDOUMsTUFBTSxPQUFPLEVBQUUsU0FBUyxFQUFFLDRCQUFvQixFQUFwQixvQkFBb0IsQ0FBQztBQUNqRDs7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixRQUFRLENBQUMsUUFBUTtFQUNqQixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxTQUFTO0VBQ1Qsa0NBQWtDOztBQUVwQzs7QUFDQTtFQUNFLHdCQUF3QjtFQUN4QixtREFBbUQ7QUFDckQ7O0FBRUE7Ozs7Ozs7OztFQVNFIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qXG4jaG9tZWdhbGxlcnk6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvMS1iaWcuanBlZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDA7XG4gICAgLW1zLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4qL1xuXG4jaG9tZWdhbGxlcnl7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIHBvc2l0aW9uOmZpeGVkO1xuICBsZWZ0OjBweDtcbiAgYm90dG9tOjBweDtcbiAgei1pbmRleDotMTtcbn1cblxuI2hvbWVnYWxsZXJ5IC5iZ3tcbiAgcG9zaXRpb246YWJzb2x1dGU7XG4gIGJvdHRvbTowcHg7XG4gIGxlZnQ6MHB4O1xufVxuXG5cbiNob21lZ2FsbGVyeSAuY2xvdWR7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB0b3A6NTAlO1xuICB3aWR0aDoxNSU7XG4gIGhlaWdodDoxNSU7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmlfY2xvdWQ7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoxNTBzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYW5pX2Nsb3Vke1xuICAwJSB7bGVmdDotMjAlO31cbiAgMTAwJSB7bGVmdDoxMDAlO31cbn1cbiNob21lZ2FsbGVyeSAuY2xvdWQye1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjMwJTtcbiAgbGVmdDowcHg7XG4gIHdpZHRoOjMwJTtcbiAgaGVpZ2h0OjE1JTtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaV9jbG91ZDI7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjozMDBzO1xuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYW5pX2Nsb3VkMntcbiAgMCUge2xlZnQ6LTMwJTt9XG4gIDEwMCUge2xlZnQ6MTEwJTt9XG59XG5cblxuI2hvbWVnYWxsZXJ5ICNjYXJsaWdodGx7XG4gIGJhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KCAjZmZmLCByZ2JhKDAsMCwwLDApIDEwcHgpO1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgYm90dG9tOjglO1xuICBsZWZ0OjQ3LjUlO1xuICB6LWluZGV4OjEwO1xuICBoZWlnaHQ6MTB2aDtcbiAgd2lkdGg6MTB2aDtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaV9jYXJsaWdodDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjIwcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG4jaG9tZWdhbGxlcnkgI2NhcmxpZ2h0cntcbiAgYmFja2dyb3VuZC1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoICNmYWViZDcsIHJnYmEoMCwwLDAsMCkgMTBweCk7XG4gIHBvc2l0aW9uOmFic29sdXRlO1xuICB6LWluZGV4OjEwO1xuICBoZWlnaHQ6MTB2aDtcbiAgd2lkdGg6MTB2aDtcbiAgYW5pbWF0aW9uLW5hbWU6IGFuaV9jYXJsaWdodDtcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjIwcztcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG59XG5cbkBrZXlmcmFtZXMgYW5pX2NhcmxpZ2h0e1xuICAwJSB7IGJhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KCAjZmFlYmQ3LCByZ2JhKDAsMCwwLDApIDEwcHgpOyB9XG4gIDUwJSB7YmFja2dyb3VuZC1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoICNmYWViZDcsIHJnYmEoMCwwLDAsMCkgMjBweCk7fVxuICA1MiUge2JhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KCAjZmFlYmQ3LCByZ2JhKDAsMCwwLDApIDVweCk7fVxuICA1NCUge2JhY2tncm91bmQtaW1hZ2U6cmFkaWFsLWdyYWRpZW50KCAjZmFlYmQ3LCByZ2JhKDAsMCwwLDApIDIwcHgpO31cbiAgMTAwJSB7YmFja2dyb3VuZC1pbWFnZTpyYWRpYWwtZ3JhZGllbnQoICNmYWViZDcsIHJnYmEoMCwwLDAsMCkgMTBweCk7IH1cbn1cblxuXG4jaG9tZWdhbGxlcnkgI2VhZ2xle1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOjAlO1xuICBsZWZ0OjEwMCU7XG4gIGFuaW1hdGlvbi1uYW1lOiBhbmlfZWFnbGU7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjoyMHM7XG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICBhbmltYXRpb24tZGVsYXk6MTBzO1xuICBoZWlnaHQ6IDEwdmg7XG4gIHdpZHRoOiAxMHZoO1xufVxuXG5Aa2V5ZnJhbWVzIGFuaV9lYWdsZXtcbiAgMCV7IHRvcDowJTsgbGVmdDoxMDAlOyB0cmFuc2Zvcm06IHNjYWxlKC41KSBzY2FsZVgoMSk7fVxuICAyMyV7IHRvcDoxNSU7IGxlZnQ6NjglO3RyYW5zZm9ybTogc2NhbGVYKDEpO31cbiAgNDEleyB0b3A6NDMlOyBsZWZ0OjQzJTt0cmFuc2Zvcm06IHNjYWxlWCgxKTt9XG5cbiAgNDguNSV7IHRvcDo0NCU7IGxlZnQ6NDElO3RyYW5zZm9ybTogc2NhbGVYKDEpIHNjYWxlKC44KTt9XG4gIDQ5JXsgdG9wOjQ0JTsgbGVmdDo0MiU7IHRyYW5zZm9ybTogc2NhbGVYKC0xKSBzY2FsZSgxKTt9XG5cbiAgNTQleyB0b3A6NTMlOyBsZWZ0OjU2JTsgdHJhbnNmb3JtOiBzY2FsZVgoLTEpIHNjYWxlKDEpO31cblxuICA1OC41JXsgdG9wOjQzJTsgbGVmdDo2NCU7IHRyYW5zZm9ybTogc2NhbGVYKC0xKTt9XG4gIDU5JXsgdG9wOjQzJTsgbGVmdDo2NCU7IHRyYW5zZm9ybTogc2NhbGVYKDEpO31cblxuICA2NSV7IHRvcDo0MSU7IGxlZnQ6NTklOyB0cmFuc2Zvcm06IHNjYWxlKDEpO31cblxuICA3NS41JXsgdG9wOjU1JTsgbGVmdDo1MCU7IHRyYW5zZm9ybTogc2NhbGVYKDEpO31cbiAgNzYleyB0b3A6NTYlOyBsZWZ0OjUwJTsgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO31cblxuICA4MCV7IHRvcDo2MCU7IGxlZnQ6NjAlOyB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7fVxuICAxMDAleyB0b3A6NjUlOyBsZWZ0OjEyMCU7IHRyYW5zZm9ybTpzY2FsZVgoLTEpO31cbn1cblxuXG4jaW50cm8ge1xuICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgdG9wOiA2NyU7LyoyNDBweCovXG4gIGxlZnQ6IDM1cHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46MHB4O1xuICBwYWRkaW5nOjVweDtcbiAgZm9udC1zaXplOjEzcHg7XG4gIHotaW5kZXg6MjtcbiAgLypiYWNrZ3JvdW5kOnJnYigyNTAsMjM1LDIxNSwuNik7Ki9cblxufVxuI2ludHJvIHAge1xuICBjb2xvcjogI2ZhZWJkNyFpbXBvcnRhbnQ7XG4gIC8qdGV4dC1zaGFkb3c6IC0xcHggMXB4IDJweCAjZmZmLDFweCAtMXB4IHB4ICNmZmY7Ki9cbn1cblxuLypcbi9kZWVwLyAjaG9tZWdhbGxlcnkgZ2FsbGVyeS10aHVtYi5nLWFjdGl2ZS10aHVtYiBnYWxsZXJ5LWltYWdlIC5nLWltYWdlLWl0ZW0ge1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW4gIWltcG9ydGFudDtcbn1cblxuXG4vZGVlcC8gZ2FsbGVyeS10aHVtYi5nLWFjdGl2ZS10aHVtYntcbmRpc3BsYXk6YmxvY2s7XG5cbn0qL1xuIl19 */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
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
    /*! ../navbar.service */
    "./src/app/navbar.service.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent(nav, renderer) {
        _classCallCheck(this, HomeComponent);

        this.nav = nav;
        this.renderer = renderer;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getScreenSize();
          this.nav.show();
          this.nav.setDeg(0);
        }
      }, {
        key: "getScreenSize",
        value: function getScreenSize(event) {
          this.screenHeight = window.innerHeight;
          this.screenWidth = window.innerWidth;

          if (this.screenWidth / this.screenHeight > 1.5) {
            console.log("wider");
            this.renderer.setStyle(this.bg1.nativeElement, 'height', 'auto');
            this.renderer.setStyle(this.bg1.nativeElement, 'width', this.screenWidth + "px");
            this.renderer.setStyle(this.bg2.nativeElement, 'height', 'auto');
            this.renderer.setStyle(this.bg2.nativeElement, 'width', this.screenWidth + "px");
            console.log("screen w & h", this.screenWidth, this.screenHeight);
            var l = this.screenWidth;
            var b = l * 2 / 3;
            l = 1155 * l / 2500;
            b = 50 * b / 1667;
            this.setcarlightl(l, b);
            l = this.screenWidth * 1220 / 2500;
            this.setcarlightr(l, b);
          } else {
            this.renderer.setStyle(this.bg1.nativeElement, 'width', 'auto');
            this.renderer.setStyle(this.bg1.nativeElement, 'height', this.screenHeight + "px");
            this.renderer.setStyle(this.bg2.nativeElement, 'width', 'auto');
            this.renderer.setStyle(this.bg2.nativeElement, 'height', this.screenHeight + "px");
            console.log("screen w & h", this.screenWidth, this.screenHeight);
            var _b = this.screenHeight;

            var _l = _b * 3 / 2;

            _l = 1155 * _l / 2500;
            _b = 50 * _b / 1667;
            this.setcarlightl(_l, _b);
            _l = this.screenHeight * 1220 * 3 / 2 / 2500;
            this.setcarlightr(_l, _b);
          }
        }
      }, {
        key: "setcarlightl",
        value: function setcarlightl(w, h) {
          this.renderer.setStyle(this.cll.nativeElement, 'left', w + "px");
          this.renderer.setStyle(this.cll.nativeElement, 'bottom', h + "px");
        }
      }, {
        key: "setcarlightr",
        value: function setcarlightr(w, h) {
          this.renderer.setStyle(this.clr.nativeElement, 'left', w + "px");
          this.renderer.setStyle(this.clr.nativeElement, 'bottom', h + "px");
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ctorParameters = function () {
      return [{
        type: _navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bg_back', {
      "static": true
    })], HomeComponent.prototype, "bg1", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('bg_fore', {
      "static": true
    })], HomeComponent.prototype, "bg2", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carlightl', {
      "static": true
    })], HomeComponent.prototype, "cll", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('carlightr', {
      "static": true
    })], HomeComponent.prototype, "clr", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], HomeComponent.prototype, "getScreenSize", null);
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/navbar.service.ts":
  /*!***********************************!*\
    !*** ./src/app/navbar.service.ts ***!
    \***********************************/

  /*! exports provided: NavbarService */

  /***/
  function srcAppNavbarServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarService", function () {
      return NavbarService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NavbarService = /*#__PURE__*/function () {
      function NavbarService() {
        _classCallCheck(this, NavbarService);

        this.deg = 0; //degree of compass pointing

        this.visible = false;
      }

      _createClass(NavbarService, [{
        key: "hide",
        value: function hide() {
          this.visible = false;
        }
      }, {
        key: "show",
        value: function show() {
          this.visible = true;
        }
      }, {
        key: "toggle",
        value: function toggle() {
          this.visible = !this.visible;
        }
      }, {
        key: "setDeg",
        value: function setDeg(degree) {
          this.deg = degree;
        }
      }, {
        key: "getDeg",
        value: function getDeg() {
          return this.deg;
        }
      }]);

      return NavbarService;
    }();

    NavbarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavbarService);
    /***/
  },

  /***/
  "./src/app/selective-preload-strat.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/selective-preload-strat.service.ts ***!
    \****************************************************/

  /*! exports provided: SelectivePreloadingStrategyService */

  /***/
  function srcAppSelectivePreloadStratServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SelectivePreloadingStrategyService", function () {
      return SelectivePreloadingStrategyService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var SelectivePreloadingStrategyService = /*#__PURE__*/function () {
      function SelectivePreloadingStrategyService() {
        _classCallCheck(this, SelectivePreloadingStrategyService);

        this.preloadedModules = [];
      }

      _createClass(SelectivePreloadingStrategyService, [{
        key: "preload",
        value: function preload(route, load) {
          if (route.data && route.data['preload']) {
            // add the route path to the preloaded module array
            this.preloadedModules.push(route.path);
            return load();
          } else {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
          }
        }
      }]);

      return SelectivePreloadingStrategyService;
    }();

    SelectivePreloadingStrategyService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SelectivePreloadingStrategyService);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/app/top-bar/top-bar.component.css":
  /*!***********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppTopBarTopBarComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvcC1iYXIvdG9wLWJhci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/top-bar/top-bar.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/top-bar/top-bar.component.ts ***!
    \**********************************************/

  /*! exports provided: TopBarComponent */

  /***/
  function srcAppTopBarTopBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TopBarComponent", function () {
      return TopBarComponent;
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
    /*! ../navbar.service */
    "./src/app/navbar.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

    var TopBarComponent = /*#__PURE__*/function () {
      function TopBarComponent(nav) {
        _classCallCheck(this, TopBarComponent);

        this.nav = nav;
      }

      _createClass(TopBarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return TopBarComponent;
    }();

    TopBarComponent.ctorParameters = function () {
      return [{
        type: _navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
      }];
    };

    TopBarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-bar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./top-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html"))["default"],
      animations: [// Each unique animation requires its own trigger. The first argument of the trigger function is the name
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('rotatedState', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'rotate(0deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('90', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'rotate(90deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('180', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'rotate(180deg)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('270', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        transform: 'rotate(270deg)'
      }))]), //  text-shadow:  1px 1px 2px #fff, 1px 1px 5px #03396c;
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('selectN', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('0', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        color: "#faebd7",
        "background": "radial-gradient(closest-side, #2a4d69 50%,#faebd7)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('selectW', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('270', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        color: "#faebd7",
        "background": "radial-gradient(closest-side, #2a4d69 50%,#faebd7)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('selectE', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('90', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        color: "#faebd7",
        "background": "radial-gradient(closest-side, #2a4d69 50%,#faebd7)"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('selectS', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('180', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        color: "#faebd7",
        "background": "radial-gradient(closest-side, #2a4d69 50%,#faebd7)"
      }))])],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./top-bar.component.css */
      "./src/app/top-bar/top-bar.component.css"))["default"]]
    })], TopBarComponent);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]);
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */

    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jessicaha/Desktop/unown/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map