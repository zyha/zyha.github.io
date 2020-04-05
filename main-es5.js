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


    __webpack_exports__["default"] = "<div id=\"homegallery\" [ngStyle]=\"{'width':screenWidth-5+'px', 'height':screenHeight-25+'px'}\" >\n  <div id=\"hslider\" [ngStyle]=\"{'left':-currI*170+'px'}\">\n    <div *ngFor=\"let p of hphotos; let i = index\" (click)=\"clickImage(i)\">\n    <div class=\"hitem selected\" *ngIf=\"currI===i\">\n      <img [src]=\"p.srcURL\" [ngStyle]=\"{'height':screenHeight-25+'px', 'width':'auto'}\">\n    </div>\n    <div class=\"hitem\" *ngIf=\"currI!=i\" width=\"200\">\n      <img [src]=\"p.srcURL\" [ngStyle]=\"{'height':screenHeight-25+'px'}\">\n    </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"side-nav\" id=\"intro\">\n  <p>Hello!</p>\n  <p>Welcome to <b>ZYHA</b>, a website for displaying my journeys in <i>photography</i> and <i>pottery</i>.</p>\n  <p>My name is Jessica. Feel free to give design suggestions and share you ideas!</p>\n</div>\n";
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
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
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

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
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

        while (_) try {
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

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
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
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
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
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

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
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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

    const appRoutes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    }, {
      path: 'photography',
      loadChildren: () => __webpack_require__.e(
      /*! import() | photography-photography-module */
      "photography-photography-module").then(__webpack_require__.bind(null,
      /*! ./photography/photography.module */
      "./src/app/photography/photography.module.ts")).then(mod => mod.PhotographyModule),
      data: {
        preload: true
      }
    }, {
      path: 'pottery',
      loadChildren: () => __webpack_require__.e(
      /*! import() | pottery-pottery-module */
      "pottery-pottery-module").then(__webpack_require__.bind(null,
      /*! ./pottery/pottery.module */
      "./src/app/pottery/pottery.module.ts")).then(mod => mod.PotteryModule),
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

    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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


    __webpack_exports__["default"] = "\n/deep/ app-photography, /deep/ app-pottery, /deep/ app-pottery-details, /deep/ app-cart{\n  margin-left: 155px;\n  margin-top: 155px;\n  display: block;\n  max-width: 800px;\n  padding: 16px;\n}\n\n/deep/ app-top-bar{\n  margin: 0px;\n  padding: 0px;\n  top:0px;\n  left:0px;\n}\n\n/deep/ h2 {\n  display: block;\n  position: fixed;\n  color:#fff;\n  top: 32px;\n  right: 20px;\n  font-size: 2em;\n  z-index:2;\n  text-align: right;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osT0FBTztFQUNQLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0VBQ1gsY0FBYztFQUNkLFNBQVM7RUFDVCxpQkFBaUI7QUFDbkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuL2RlZXAvIGFwcC1waG90b2dyYXBoeSwgL2RlZXAvIGFwcC1wb3R0ZXJ5LCAvZGVlcC8gYXBwLXBvdHRlcnktZGV0YWlscywgL2RlZXAvIGFwcC1jYXJ0e1xuICBtYXJnaW4tbGVmdDogMTU1cHg7XG4gIG1hcmdpbi10b3A6IDE1NXB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWF4LXdpZHRoOiA4MDBweDtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuL2RlZXAvIGFwcC10b3AtYmFye1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICB0b3A6MHB4O1xuICBsZWZ0OjBweDtcbn1cblxuL2RlZXAvIGgyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgY29sb3I6I2ZmZjtcbiAgdG9wOiAzMnB4O1xuICByaWdodDogMjBweDtcbiAgZm9udC1zaXplOiAyZW07XG4gIHotaW5kZXg6MjtcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {};
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-gallery/core */
    "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");
    /* harmony import */


    var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-gallery/lightbox */
    "./node_modules/@ngx-gallery/lightbox/fesm2015/ngx-gallery-lightbox.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-gallery/gallerize */
    "./node_modules/@ngx-gallery/gallerize/fesm2015/ngx-gallery-gallerize.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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


    let AppModule = class AppModule {
      constructor(router) {// Use a custom replacer to display function names in the route configs
        // const replacer = (key, value) => (typeof value === 'function') ? value.name : value;
        // console.log('Routes: ', JSON.stringify(router.config, replacer, 2));
      }

    };

    AppModule.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
    }];

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_8__["GallerizeModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_9__["AngularFontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_5__["GalleryModule"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_6__["LightboxModule"].withConfig({
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
    "./node_modules/@angular/core/fesm2015/core.js");

    let CartService = class CartService {
      constructor() {
        this.items = [];
      }

      addToCart(product) {
        this.items.push(product);
      }

      removeFromCart(productIndex) {
        if (productIndex > -1) {
          this.items.splice(productIndex, 1);
        }
      }

      getItems() {
        return this.items;
      }

      notInCart(product) {
        return this.items.indexOf(product);
      }

      clearCart() {
        this.items = [];
        return this.items;
      }

    };
    CartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../cart.service */
    "./src/app/cart.service.ts");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../navbar.service */
    "./src/app/navbar.service.ts");

    let CartComponent = class CartComponent {
      constructor(cartService, formBuilder, nav) {
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

      ngOnInit() {
        this.items = this.cartService.getItems();
      }

      addToCart(pottery) {
        window.alert('Your ' + pottery.name + ' has been added to the cart!');
        this.cartService.addToCart(pottery);
      }

      removeFromCart(pottery, potteryId) {
        window.alert('Your ' + pottery.name + ' has been removed from the cart!');
        this.cartService.removeFromCart(potteryId);
      }

      onSubmit(customerData) {
        // Process checkout data here
        console.warn('Your order has been submitted', customerData);
        this.cartService.clearCart();
        this.checkoutForm.reset();
      }

    };

    CartComponent.ctorParameters = () => [{
      type: _cart_service__WEBPACK_IMPORTED_MODULE_3__["CartService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }, {
      type: _navbar_service__WEBPACK_IMPORTED_MODULE_4__["NavbarService"]
    }];

    CartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cart.component.css */
      "./src/app/cart/cart.component.css")).default]
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


    __webpack_exports__["default"] = "\n#homegallery {\n  background-color: transparent !important;\n}\n/*\n#homegallery:before {\n    content: ' ';\n    display: block;\n    position: absolute;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n    opacity: 0.6;\n    background-image: url('/assets/1-big.jpeg');\n    background-repeat: no-repeat;\n    background-position: 50% 0;\n    -ms-background-size: cover;\n    -o-background-size: cover;\n    -moz-background-size: cover;\n    -webkit-background-size: cover;\n    background-size: cover;\n}\n*/\n#homegallery{\n  display:block;\n  overflow-x: hidden;\n  overflow-y: hidden;\n}\n#homegallery #hslider {\n  display:-webkit-box;\n  display:flex;\n  -webkit-box-orient:horizontal;\n  -webkit-box-direction:normal;\n          flex-direction:row;\n  flex-wrap:nowrap;\n  position:relative;\n  transition: 1s ease-in-out;\n  -webkit-transition: 1s ease-in-out;\n}\n#homegallery .hitem{\n  overflow:hidden;\n  width:150px;\n  opacity:0.4;\n  margin-right:10px;\n  transition: 2s ease-in-out;\n  -webkit-transition: 2s ease-in-out;\n}\n#homegallery .hitem.selected{\n  width:auto;\n  opacity:1;\n  -webkit-transition: 2s ease-in-out;\n  transition: 2s ease-in-out;\n  -webkit-transition: 3s ease-out;\n  -webkit-animation-name: selectHItem;\n          animation-name: selectHItem;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n@-webkit-keyframes selectHItem {\nfrom {\n  width:150px;\n  opacity:0.4;}\nto{\n  width:auto;\n  opacity:1;}\n}\n@keyframes selectHItem {\nfrom {\n  width:150px;\n  opacity:0.4;}\nto{\n  width:auto;\n  opacity:1;}\n}\n#homegallery .hitem.selected img{\n  margin-left:0px;\n  -webkit-animation-name: selectHItemImage;\n          animation-name: selectHItemImage;\n  -webkit-animation-duration: 2s;\n          animation-duration: 2s;\n  -webkit-animation-fill-mode: forwards;\n          animation-fill-mode: forwards;\n}\n#homegallery .hitem img{\n  overflow:hidden;\n  margin-left:-20%;\n}\n@-webkit-keyframes selectHItemImage {\nfrom {\n  margin-left:-20%}\nto{\n  margin-left:0px;\n}\n}\n@keyframes selectHItemImage {\nfrom {\n  margin-left:-20%}\nto{\n  margin-left:0px;\n}\n}\n#intro {\n  position:fixed;\n  top: 240px;\n  left: 35px;\n  width: 160px;\n  text-align: center;\n  margin:0px;\n  padding:5px;\n  font-size:13px;\n  z-index:2;\n}\n#intro p {\n  color: #fff!important;\n  text-shadow: 0px 0px 3px #add8e6,0px 0px 2px #2a4d69;\n}\n/*\n/deep/ #homegallery gallery-thumb.g-active-thumb gallery-image .g-image-item {\n  background-size: contain !important;\n}\n\n\n/deep/ gallery-thumb.g-active-thumb{\ndisplay:block;\n\n}*/\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBb0JDO0FBRUQ7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsbUJBQVk7RUFBWixZQUFZO0VBQ1osNkJBQWtCO0VBQWxCLDRCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQiwwQkFBMEI7RUFDMUIsa0NBQWtDO0FBQ3BDO0FBRUE7RUFDRSxlQUFlO0VBQ2YsV0FBVztFQUNYLFdBQVc7RUFDWCxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7RUFDVCxrQ0FBMEI7RUFBMUIsMEJBQTBCO0VBQzFCLCtCQUErQjtFQUMvQixtQ0FBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLDhCQUFzQjtVQUF0QixzQkFBc0I7RUFDdEIscUNBQTZCO1VBQTdCLDZCQUE2QjtBQUMvQjtBQUVBO0FBQ0E7RUFDRSxXQUFXO0VBQ1gsV0FBVyxDQUFDO0FBQ2Q7RUFDRSxVQUFVO0VBQ1YsU0FBUyxDQUFDO0FBQ1o7QUFQQTtBQUNBO0VBQ0UsV0FBVztFQUNYLFdBQVcsQ0FBQztBQUNkO0VBQ0UsVUFBVTtFQUNWLFNBQVMsQ0FBQztBQUNaO0FBSUE7RUFDRSxlQUFlO0VBQ2Ysd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyw4QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHFDQUE2QjtVQUE3Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7QUFDbEI7QUFFQTtBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0FBTkE7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtFQUNFLGVBQWU7QUFDakI7QUFDQTtBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixVQUFVO0VBQ1YsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztFQUNYLGNBQWM7RUFDZCxTQUFTO0FBQ1g7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixvREFBb0Q7QUFDdEQ7QUFFQTs7Ozs7Ozs7O0VBU0UiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuI2hvbWVnYWxsZXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcbn1cbi8qXG4jaG9tZWdhbGxlcnk6YmVmb3JlIHtcbiAgICBjb250ZW50OiAnICc7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB6LWluZGV4OiAxO1xuICAgIG9wYWNpdHk6IDAuNjtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy9hc3NldHMvMS1iaWcuanBlZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNTAlIDA7XG4gICAgLW1zLWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4qL1xuXG4jaG9tZWdhbGxlcnl7XG4gIGRpc3BsYXk6YmxvY2s7XG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4jaG9tZWdhbGxlcnkgI2hzbGlkZXIge1xuICBkaXNwbGF5OmZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOnJvdztcbiAgZmxleC13cmFwOm5vd3JhcDtcbiAgcG9zaXRpb246cmVsYXRpdmU7XG4gIHRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDFzIGVhc2UtaW4tb3V0O1xufVxuXG4jaG9tZWdhbGxlcnkgLmhpdGVte1xuICBvdmVyZmxvdzpoaWRkZW47XG4gIHdpZHRoOjE1MHB4O1xuICBvcGFjaXR5OjAuNDtcbiAgbWFyZ2luLXJpZ2h0OjEwcHg7XG4gIHRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xuICAtd2Via2l0LXRyYW5zaXRpb246IDJzIGVhc2UtaW4tb3V0O1xufVxuI2hvbWVnYWxsZXJ5IC5oaXRlbS5zZWxlY3RlZHtcbiAgd2lkdGg6YXV0bztcbiAgb3BhY2l0eToxO1xuICB0cmFuc2l0aW9uOiAycyBlYXNlLWluLW91dDtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAzcyBlYXNlLW91dDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNlbGVjdEhJdGVtO1xuICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbn1cblxuQGtleWZyYW1lcyBzZWxlY3RISXRlbSB7XG5mcm9tIHtcbiAgd2lkdGg6MTUwcHg7XG4gIG9wYWNpdHk6MC40O31cbnRve1xuICB3aWR0aDphdXRvO1xuICBvcGFjaXR5OjE7fVxufVxuXG5cblxuI2hvbWVnYWxsZXJ5IC5oaXRlbS5zZWxlY3RlZCBpbWd7XG4gIG1hcmdpbi1sZWZ0OjBweDtcbiAgYW5pbWF0aW9uLW5hbWU6IHNlbGVjdEhJdGVtSW1hZ2U7XG4gIGFuaW1hdGlvbi1kdXJhdGlvbjogMnM7XG4gIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xufVxuI2hvbWVnYWxsZXJ5IC5oaXRlbSBpbWd7XG4gIG92ZXJmbG93OmhpZGRlbjtcbiAgbWFyZ2luLWxlZnQ6LTIwJTtcbn1cblxuQGtleWZyYW1lcyBzZWxlY3RISXRlbUltYWdlIHtcbmZyb20ge1xuICBtYXJnaW4tbGVmdDotMjAlfVxudG97XG4gIG1hcmdpbi1sZWZ0OjBweDtcbn1cbn1cblxuI2ludHJvIHtcbiAgcG9zaXRpb246Zml4ZWQ7XG4gIHRvcDogMjQwcHg7XG4gIGxlZnQ6IDM1cHg7XG4gIHdpZHRoOiAxNjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46MHB4O1xuICBwYWRkaW5nOjVweDtcbiAgZm9udC1zaXplOjEzcHg7XG4gIHotaW5kZXg6Mjtcbn1cbiNpbnRybyBwIHtcbiAgY29sb3I6ICNmZmYhaW1wb3J0YW50O1xuICB0ZXh0LXNoYWRvdzogMHB4IDBweCAzcHggI2FkZDhlNiwwcHggMHB4IDJweCAjMmE0ZDY5O1xufVxuXG4vKlxuL2RlZXAvICNob21lZ2FsbGVyeSBnYWxsZXJ5LXRodW1iLmctYWN0aXZlLXRodW1iIGdhbGxlcnktaW1hZ2UgLmctaW1hZ2UtaXRlbSB7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbiAhaW1wb3J0YW50O1xufVxuXG5cbi9kZWVwLyBnYWxsZXJ5LXRodW1iLmctYWN0aXZlLXRodW1ie1xuZGlzcGxheTpibG9jaztcblxufSovXG4iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _photography_albums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../photography/albums */
    "./src/app/photography/albums.ts");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../navbar.service */
    "./src/app/navbar.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let HomeComponent = class HomeComponent {
      constructor(nav) {
        this.nav = nav;
        this.currI = 0;
        this.hphotos = _photography_albums__WEBPACK_IMPORTED_MODULE_2__["ALBUMS"][0].imgs;
      }

      ngOnInit() {
        this.getScreenSize();
        this.nav.show();
        this.nav.setDeg(0);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["interval"])(10000).subscribe(val => {
          if (this.currI < this.hphotos.length - 1) {
            this.currI++;
          } else {
            this.currI = 0;
          }

          ;
        });
      }

      getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
      }

      clickImage(int) {
        this.currI = int;
      }

    };

    HomeComponent.ctorParameters = () => [{
      type: _navbar_service__WEBPACK_IMPORTED_MODULE_3__["NavbarService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], HomeComponent.prototype, "getScreenSize", null);
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css")).default]
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
    "./node_modules/@angular/core/fesm2015/core.js");

    let NavbarService = class NavbarService {
      constructor() {
        this.deg = 0; //degree of compass pointing

        this.visible = false;
      }

      hide() {
        this.visible = false;
      }

      show() {
        this.visible = true;
      }

      toggle() {
        this.visible = !this.visible;
      }

      setDeg(degree) {
        this.deg = degree;
      }

      getDeg() {
        return this.deg;
      }

    };
    NavbarService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], NavbarService);
    /***/
  },

  /***/
  "./src/app/photography/albums.ts":
  /*!***************************************!*\
    !*** ./src/app/photography/albums.ts ***!
    \***************************************/

  /*! exports provided: ALBUMS */

  /***/
  function srcAppPhotographyAlbumsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ALBUMS", function () {
      return ALBUMS;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    const ALBUMS = [{
      name: "Featured",
      imgs: [{
        srcURL: 'https://zyha.tk/a/1_Aurora/Christmas%20Tree.jpg',
        preURL: '',
        date: '',
        description: '',
        title: ''
      }, {
        srcURL: 'https://zyha.tk/a/1_Aurora/Shroom.jpg',
        preURL: '',
        date: '',
        description: '',
        title: ''
      }, {
        srcURL: 'https://zyha.tk/a/2_Lafarge/Lanterns.jpg',
        preURL: '',
        date: '',
        description: '',
        title: ''
      }, {
        srcURL: 'https://zyha.tk/a/2_Lafarge/Swan%20Lake.jpg',
        preURL: '',
        date: '',
        description: '',
        title: ''
      }, {
        srcURL: 'https://zyha.tk/a/1_Aurora/Fire%20Pit.jpg',
        preURL: '',
        date: '',
        description: '',
        title: ''
      }, {
        srcURL: 'https://zyha.tk/a/1_Aurora/Hello.jpg',
        preURL: '',
        date: '',
        description: '',
        title: ''
      }]
    }];
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let SelectivePreloadingStrategyService = class SelectivePreloadingStrategyService {
      constructor() {
        this.preloadedModules = [];
      }

      preload(route, load) {
        if (route.data && route.data['preload']) {
          // add the route path to the preloaded module array
          this.preloadedModules.push(route.path);
          return load();
        } else {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
      }

    };
    SelectivePreloadingStrategyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../navbar.service */
    "./src/app/navbar.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    let TopBarComponent = class TopBarComponent {
      constructor(nav) {
        this.nav = nav;
      }

      ngOnInit() {}

    };

    TopBarComponent.ctorParameters = () => [{
      type: _navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
    }];

    TopBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-top-bar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./top-bar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/top-bar/top-bar.component.html")).default,
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
        "background": "#2a4d69"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('selectW', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('270', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        color: "#faebd7",
        "background": "#2a4d69"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('selectE', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('90', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        color: "#faebd7",
        "background": "#2a4d69"
      }))]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["trigger"])('selectS', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["state"])('180', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_3__["style"])({
        color: "#faebd7",
        "background": "#2a4d69"
      }))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./top-bar.component.css */
      "./src/app/top-bar/top-bar.component.css")).default]
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
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