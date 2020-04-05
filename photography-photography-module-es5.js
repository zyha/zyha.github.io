(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photography-photography-module"], {
  /***/
  "./node_modules/@hallysonh/ngx-imageviewer/fesm2015/hallysonh-ngx-imageviewer.js":
  /*!***************************************************************************************!*\
    !*** ./node_modules/@hallysonh/ngx-imageviewer/fesm2015/hallysonh-ngx-imageviewer.js ***!
    \***************************************************************************************/

  /*! exports provided: ImageViewerModule, ImageViewerConfig, createButtonConfig, IMAGEVIEWER_CONFIG, ɵc, ɵb, ɵa */

  /***/
  function node_modulesHallysonhNgxImageviewerFesm2015HallysonhNgxImageviewerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageViewerModule", function () {
      return ImageViewerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ImageViewerConfig", function () {
      return ImageViewerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "createButtonConfig", function () {
      return createButtonConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "IMAGEVIEWER_CONFIG", function () {
      return IMAGEVIEWER_CONFIG;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return ImageCacheService;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return ImageViewerComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return IMAGEVIEWER_CONFIG_DEFAULT;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    class ImageViewerConfig {}
    /**
     * @param {?=} icon
     * @param {?=} tooltip
     * @param {?=} sortId
     * @param {?=} show
     * @return {?}
     */


    function createButtonConfig(icon, tooltip, sortId = 0, show = true) {
      return {
        icon: icon,
        tooltip: tooltip,
        sortId: sortId,
        show: show
      };
    }

    const
    /** @type {?} */
    IMAGEVIEWER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('imageviewer.config');
    let
    /** @type {?} */
    IMAGEVIEWER_CONFIG_DEFAULT = {
      width: 800,
      // component default width
      height: 600,
      // component default height
      bgStyle: '#ECEFF1',
      // component background style
      scaleStep: 0.1,
      // zoom scale step (using the zoom in/out buttons)
      rotateStepper: false,
      loadingMessage: 'Loading...',
      buttonStyle: {
        iconFontFamily: 'Material Icons',
        // font used to render the button icons
        alpha: 0.5,
        // buttons' transparence value
        hoverAlpha: 0.7,
        // buttons' transparence value when mouse is over
        bgStyle: '#000000',
        //  buttons' background style
        iconStyle: '#ffffff',
        // buttons' icon colors
        borderStyle: '#000000',
        // buttons' border style
        borderWidth: 0 // buttons' border width (0 == disabled)

      },
      tooltips: {
        enabled: true,
        // enable or disable tooltips for buttons
        bgStyle: '#000000',
        // tooltip background style
        bgAlpha: 0.5,
        // tooltip background transparence
        textStyle: '#ffffff',
        // tooltip's text style
        textAlpha: 0.9,
        // tooltip's text transparence
        padding: 15,
        // tooltip padding
        radius: 20 // tooltip border radius

      },
      nextPageButton: createButtonConfig(String.fromCharCode(0xE409), 'Next page', 0),
      beforePageButton: createButtonConfig(String.fromCharCode(0xE408), 'Previous page', 1),
      zoomOutButton: createButtonConfig(String.fromCharCode(0xE900), 'Zoom out', 0),
      zoomInButton: createButtonConfig(String.fromCharCode(0xE8FF), 'Zoom in', 1),
      rotateLeftButton: createButtonConfig(String.fromCharCode(0xE419), 'Rotate left', 2),
      rotateRightButton: createButtonConfig(String.fromCharCode(0xE41A), 'Rotate right', 3),
      resetButton: createButtonConfig(String.fromCharCode(0xE863), 'Reset', 4)
    };
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    class Button {
      /**
       * @param {?} config
       * @param {?} style
       */
      constructor(config, style) {
        this.style = style; //#region Properties

        this.sortId = 0; // hover state

        this.hover = false; // show/hide button

        this.display = true;
        this.drawPosition = null;
        this.drawRadius = 0;
        this.sortId = config.sortId;
        this.display = config.show;
        this.icon = config.icon;
        this.tooltip = config.tooltip;
      }
      /**
       * @param {?} evt
       * @return {?}
       */


      onClick(evt) {
        alert('no click action set!');
        return true;
      }
      /**
       * @param {?} evt
       * @return {?}
       */


      onMouseDown(evt) {
        return false;
      }
      /**
       * @param {?} ctx
       * @param {?} x
       * @param {?} y
       * @param {?} radius
       * @return {?}
       */


      draw(ctx, x, y, radius) {
        this.drawPosition = {
          x: x,
          y: y
        };
        this.drawRadius = radius; // preserve context

        ctx.save(); // drawing settings

        const
        /** @type {?} */
        isHover = typeof this.hover === 'function' ? this.hover() : this.hover;
        ctx.globalAlpha = isHover ? this.style.hoverAlpha : this.style.alpha;
        ctx.fillStyle = this.style.bgStyle;
        ctx.lineWidth = 0; // draw circle

        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();

        if (this.style.borderWidth > 0) {
          ctx.lineWidth = this.style.borderWidth;
          ctx.strokeStyle = this.style.borderStyle;
          ctx.stroke();
        } // draw icon


        if (this.icon !== null) {
          ctx.save(); // ctx.globalCompositeOperation = 'destination-out';

          this.drawIconFont(ctx, x, y, radius);
          ctx.restore();
        } // restore context


        ctx.restore();
      }
      /**
       * @param {?} ctx
       * @param {?} centreX
       * @param {?} centreY
       * @param {?} size
       * @return {?}
       */


      drawIconFont(ctx, centreX, centreY, size) {
        // font settings
        ctx.font = size + 'px ' + this.style.iconFontFamily;
        ctx.fillStyle = this.style.iconStyle; // calculate position

        const
        /** @type {?} */
        textSize = ctx.measureText(this.icon);
        const
        /** @type {?} */
        x = centreX - textSize.width / 2;
        const
        /** @type {?} */
        y = centreY + size / 2; // draw it

        ctx.fillText(this.icon, x, y);
      }
      /**
       * @param {?} x
       * @param {?} y
       * @return {?}
       */


      isWithinBounds(x, y) {
        if (this.drawPosition === null) {
          return false;
        }

        const
        /** @type {?} */
        dx = Math.abs(this.drawPosition.x - x),

        /** @type {?} */
        dy = Math.abs(this.drawPosition.y - y);
        return dx * dx + dy * dy <= this.drawRadius * this.drawRadius;
      }

    }
    /**
     * @abstract
     */


    class ResourceLoader {
      constructor() {
        this.viewport = {
          width: 0,
          height: 0,
          scale: 1,
          rotation: 0,
          x: 0,
          y: 0
        };
        this.minScale = 0;
        this.maxScale = 4;
        this.currentItem = 1;
        this.totalItem = 1;
        this.showItemsQuantity = false;
        this.loaded = false;
        this.loading = false;
        this.rendering = false;
        this.resourceChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
      }
      /**
       * @param {?} canvasDim
       * @return {?}
       */


      resetViewport(canvasDim) {
        if (!this.loaded || !canvasDim) {
          return;
        }

        const
        /** @type {?} */
        rotation = this.viewport ? this.viewport.rotation : 0;
        const
        /** @type {?} */
        inverted = toSquareAngle(rotation) / 90 % 2 !== 0;
        const
        /** @type {?} */
        canvas = {
          width: !inverted ? canvasDim.width : canvasDim.height,
          height: !inverted ? canvasDim.height : canvasDim.width
        };

        if (canvas.height / this._image.height * this._image.width <= canvas.width) {
          this.viewport.scale = canvas.height / this._image.height;
        } else {
          this.viewport.scale = canvas.width / this._image.width;
        }

        this.minScale = this.viewport.scale / 4;
        this.maxScale = this.viewport.scale * 4; // start point to draw image

        this.viewport.width = this._image.width * this.viewport.scale;
        this.viewport.height = this._image.height * this.viewport.scale;
        this.viewport.x = (canvasDim.width - this.viewport.width) / 2;
        this.viewport.y = (canvasDim.height - this.viewport.height) / 2;
      }
      /**
       * @param {?} ctx
       * @param {?} config
       * @param {?} canvasDim
       * @param {?} onFinish
       * @return {?}
       */


      draw(ctx, config, canvasDim, onFinish) {
        // clear canvas
        ctx.clearRect(0, 0, canvasDim.width, canvasDim.height); // Draw background color;

        ctx.fillStyle = config.bgStyle;
        ctx.fillRect(0, 0, canvasDim.width, canvasDim.height); // draw image (transformed, rotate and scaled)

        if (!this.loading && this.loaded) {
          ctx.translate(this.viewport.x + this.viewport.width / 2, this.viewport.y + this.viewport.height / 2);
          ctx.rotate(this.viewport.rotation * Math.PI / 180);
          ctx.scale(this.viewport.scale, this.viewport.scale);
          ctx.drawImage(this._image, -this._image.width / 2, -this._image.height / 2);
        } else {
          ctx.fillStyle = '#333';
          ctx.font = '25px Verdana';
          ctx.textAlign = 'center';
          ctx.fillText(config.loadingMessage || 'Loading...', canvasDim.width / 2, canvasDim.height / 2);
        }

        onFinish(ctx, config, canvasDim);
      }
      /**
       * @return {?}
       */


      onResourceChange() {
        return this.resourceChange.asObservable();
      }

    }
    /**
     * @param {?} angle
     * @return {?}
     */


    function toSquareAngle(angle) {
      return 90 * ((Math.trunc(angle / 90) + (Math.trunc(angle % 90) > 45 ? 1 : 0)) % 4);
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    class ImageResourceLoader extends ResourceLoader {
      /**
       * @return {?}
       */
      setUp() {
        this.loadResource();
      }
      /**
       * @return {?}
       */


      loadResource() {
        this.loading = true;
        this._image = new Image();

        this._image.addEventListener('load', evt => {
          this.loaded = true;
          this.loading = false;
          this.resourceChange.next();
        }, false);

        this._image.src = this.src;
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    class ImageCacheService {
      constructor() {
        this._cache = [];
      }
      /**
       * @return {?}
       */


      get cache() {
        return this._cache;
      }
      /**
       * @param {?} url
       * @param {?} page
       * @return {?}
       */


      getCache(url, page) {
        return this.cache.find(i => i.url === url && i.page === page);
      }
      /**
       * @param {?} url
       * @param {?} page
       * @return {?}
       */


      getImage(url, page) {
        const
        /** @type {?} */
        c = this.getCache(url, page);
        return c ? c.image : null;
      }
      /**
       * @param {?} url
       * @param {?} page
       * @param {?} image
       * @return {?}
       */


      saveImage(url, page, image) {
        const
        /** @type {?} */
        cache = this.getCache(url, page);

        if (cache) {
          cache.image = image;
        } else {
          this.cache.push({
            url,
            page,
            image
          });
        }
      }
      /**
       * @return {?}
       */


      disposeCache() {
        this.cache.forEach(i => URL.revokeObjectURL(i.image.src));
        this._cache = [];
      }

    }

    ImageCacheService.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    ImageCacheService.ctorParameters = () => [];
    /** @nocollapse */


    ImageCacheService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({
      factory: function ImageCacheService_Factory() {
        return new ImageCacheService();
      },
      token: ImageCacheService,
      providedIn: "root"
    });
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    class PdfResourceLoader extends ResourceLoader {
      /**
       * @param {?} _imageCache
       */
      constructor(_imageCache) {
        super();
        this._imageCache = _imageCache;

        if (typeof window !== 'undefined' && 'Worker' in window) {
          if (pdfjsLib && pdfjsLib.GlobalWorkerOptions && !pdfjsLib.GlobalWorkerOptions.workerSrc) {
            pdfjsLib.GlobalWorkerOptions.workerSrc = pdfjsWorker;
          }
        }

        this.showItemsQuantity = true;
      }
      /**
       * @return {?}
       */


      setUp() {
        const
        /** @type {?} */
        vm = this;

        if (vm.loading || !vm.src) {
          return;
        }

        const
        /** @type {?} */
        loadingTask = pdfjsLib.getDocument(vm.src);
        vm.loading = true;
        vm.currentItem = 1;
        loadingTask.then(pdf => {
          vm._pdf = pdf;
          vm.totalItem = pdf.numPages;
          vm.loaded = true;
          vm.loadResource();
        }, reason => {
          console.error(reason);
        });
      }
      /**
       * @return {?}
       */


      loadResource() {
        const
        /** @type {?} */
        vm = this;

        if (!vm.loaded) {
          vm._pendingReload = true;
          return;
        }

        vm.loaded = false;
        const
        /** @type {?} */
        url = vm.src;
        const
        /** @type {?} */
        page = vm.currentItem;

        vm._pdf.getPage(page).then(pdfPage => {
          vm._page = pdfPage;
          vm.loadImage(url, page, () => {
            vm.loaded = true;
            vm.loading = false;

            if (vm._pendingReload) {
              vm._pendingReload = false;
              vm.loadResource();
            } else {
              vm.resourceChange.next();
            }
          });
        });
      }
      /**
       * @param {?} src
       * @param {?} page
       * @param {?} onFinish
       * @return {?}
       */


      loadImage(src, page, onFinish) {
        const
        /** @type {?} */
        vm = this;

        const
        /** @type {?} */
        cacheimg = vm._imageCache.getImage(src, page);

        if (cacheimg) {
          vm._image = cacheimg;
          onFinish();
          return;
        }

        const
        /** @type {?} */
        canvas = document.createElement('canvas');
        const
        /** @type {?} */
        context = canvas.getContext('2d');

        const
        /** @type {?} */
        pageVp = vm._page.getViewport(2);

        canvas.width = pageVp.width;
        canvas.height = pageVp.height;
        const
        /** @type {?} */
        renderContext = {
          canvasContext: context,
          viewport: pageVp
        };

        const
        /** @type {?} */
        renderTask = vm._page.render(renderContext);

        renderTask.then(function () {
          canvas.toBlob(blob => {
            const
            /** @type {?} */
            img = new Image();
            img.onload = onFinish;
            img.src = URL.createObjectURL(blob);

            vm._imageCache.saveImage(src, page, img);

            vm._image = img;
          });
        });
      }

    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    const
    /** @type {?} */
    MIN_TOOLTIP_WIDTH_SPACE = 500;

    class ImageViewerComponent {
      /**
       * @param {?} _sanitizer
       * @param {?} _renderer
       * @param {?} _imageCache
       * @param {?} config
       */
      constructor(_sanitizer, _renderer, _imageCache, config) {
        this._sanitizer = _sanitizer;
        this._renderer = _renderer;
        this._imageCache = _imageCache;
        this.config = config;
        this._dirty = true;
        this._buttons = [];
        this._currentTooltip = null;
        this._touchStartState = {};
        this._listenDestroyList = [];
        this.config = this.extendsDefaultConfig(config);
        this._nextPageButton = new Button(this.config.nextPageButton, this.config.buttonStyle);
        this._beforePageButton = new Button(this.config.beforePageButton, this.config.buttonStyle);
        this._zoomOutButton = new Button(this.config.zoomOutButton, this.config.buttonStyle);
        this._zoomInButton = new Button(this.config.zoomInButton, this.config.buttonStyle);
        this._rotateLeftButton = new Button(this.config.rotateLeftButton, this.config.buttonStyle);
        this._rotateRightButton = new Button(this.config.rotateRightButton, this.config.buttonStyle);
        this._resetButton = new Button(this.config.resetButton, this.config.buttonStyle);
        this._buttons = [this._zoomOutButton, this._zoomInButton, this._rotateLeftButton, this._rotateRightButton, this._resetButton].filter(item => item.display).sort((a, b) => a.sortId - b.sortId);
      }
      /**
       * @return {?}
       */


      get src() {
        return this._src;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set src(value) {
        if (value === this._src) {
          return;
        }

        this._src = value;
        this.setUpResource();
      }
      /**
       * @return {?}
       */


      get filetype() {
        return this._filetype;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set filetype(value) {
        if (value === this._filetype) {
          return;
        }

        this._filetype = value;
        this.setUpResource();
      }
      /**
       * @return {?}
       */


      get width() {
        return this._width;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set width(value) {
        if (value === this._width) {
          return;
        }

        this._width = value;

        if (this._canvas) {
          this._canvas.width = this._width;
        }

        this.resetImage();
      }
      /**
       * @return {?}
       */


      get height() {
        return this._height;
      }
      /**
       * @param {?} value
       * @return {?}
       */


      set height(value) {
        if (value === this._height) {
          return;
        }

        this._height = value;

        if (this._canvas) {
          this._canvas.height = this._height;
        }

        this.resetImage();
      }
      /**
       * @return {?}
       */


      ngAfterViewInit() {
        this._canvas = this.canvasRef.nativeElement;
        this._context = this._canvas.getContext('2d'); // setting canvas dimention

        this._canvas.width = this.width || this.config.width;
        this._canvas.height = this.height || this.config.height; // setting buttons actions

        this._nextPageButton.onClick = evt => {
          this.nextPage();
          return false;
        };

        this._beforePageButton.onClick = evt => {
          this.previousPage();
          return false;
        };

        this._zoomOutButton.onClick = evt => {
          this.zoomOut();
          return false;
        };

        this._zoomInButton.onClick = evt => {
          this.zoomIn();
          return false;
        };

        this._rotateLeftButton.onClick = evt => {
          this.rotateLeft();
          return false;
        };

        this._rotateRightButton.onClick = evt => {
          this.rotateRight();
          return false;
        };

        this._resetButton.onClick = evt => {
          this.resetImage();
          return false;
        }; // register event listeners


        this.addEventListeners();
        this.updateCanvas();
      }
      /**
       * @return {?}
       */


      ngOnDestroy() {
        // unregiste event listeners
        this._listenDestroyList.forEach(listenDestroy => {
          if (typeof listenDestroy === 'function') {
            listenDestroy();
          }
        });

        this._imageCache.disposeCache();
      }
      /**
       * @return {?}
       */


      setUpResource() {
        if (this.isImage(this.src) && (!this._resource || !(this._resource instanceof ImageResourceLoader))) {
          if (this._resourceChangeSub) {
            this._resourceChangeSub.unsubscribe();
          }

          if (!this._imageResource) {
            this._imageResource = new ImageResourceLoader();
          }

          this._resource = this._imageResource;
        } else if (this.isPdf(this.src) && (!this._resource || !(this._resource instanceof PdfResourceLoader))) {
          if (this._resourceChangeSub) {
            this._resourceChangeSub.unsubscribe();
          }

          if (!this._pdfResource) {
            this._pdfResource = new PdfResourceLoader(this._imageCache);
          }

          this._resource = this._pdfResource;
        }

        if (this._resource) {
          this._resource.src = this.src instanceof File ? URL.createObjectURL(this.src) : this.src;
          this._resourceChangeSub = this._resource.onResourceChange().subscribe(() => {
            this.updateCanvas();

            if (this.src instanceof File) {
              URL.revokeObjectURL(this._resource.src);
            }
          });

          this._resource.setUp();

          this.resetImage();

          if (this._context) {
            this.updateCanvas();
          }
        }
      }
      /**
       * @param {?} evt
       * @return {?}
       */


      onTap(evt) {
        const
        /** @type {?} */
        activeElement = this.getUIElement(this.screenToCanvasCentre(evt.center));

        if (activeElement !== null) {
          activeElement.onClick(evt);
        }
      }
      /**
       * @return {?}
       */


      onTouchEnd() {
        this._touchStartState.viewport = undefined;
        this._touchStartState.scale = undefined;
        this._touchStartState.rotate = undefined;
      }
      /**
       * @param {?} evt
       * @return {?}
       */


      processTouchEvent(evt) {
        // process pan
        if (!this._touchStartState.viewport) {
          this._touchStartState.viewport = Object.assign({}, this._resource.viewport);
        }

        const
        /** @type {?} */
        viewport = this._resource.viewport;
        viewport.x = this._touchStartState.viewport.x + evt.deltaX;
        viewport.y = this._touchStartState.viewport.y + evt.deltaY; // process pinch in/out

        if (!this._touchStartState.scale) {
          this._touchStartState.scale = this._resource.viewport.scale;
        }

        const
        /** @type {?} */
        newScale = this._touchStartState.scale * evt.scale;
        viewport.scale = newScale > this._resource.maxScale ? this._resource.maxScale : newScale < this._resource.minScale ? this._resource.minScale : newScale; // process rotate left/right

        if (!this._touchStartState.rotate) {
          this._touchStartState.rotate = {
            rotation: viewport.rotation,
            startRotate: evt.rotation
          };
        }

        if (evt.rotation !== 0) {
          const
          /** @type {?} */
          newAngle = this._touchStartState.rotate.rotation + evt.rotation - this._touchStartState.rotate.startRotate;
          viewport.rotation = this.config.rotateStepper ? toSquareAngle(newAngle) : newAngle;
        }

        this._dirty = true;
      }
      /**
       * @return {?}
       */


      addEventListeners() {
        // zooming
        this._listenDestroyList.push(this._renderer.listen(this._canvas, 'DOMMouseScroll', evt => this.onMouseWheel(evt)));

        this._listenDestroyList.push(this._renderer.listen(this._canvas, 'mousewheel', evt => this.onMouseWheel(evt))); // show tooltip when mouseover it


        this._listenDestroyList.push(this._renderer.listen(this._canvas, 'mousemove', evt => this.checkTooltipActivation(this.screenToCanvasCentre({
          x: evt.clientX,
          y: evt.clientY
        }))));
      }
      /**
       * @param {?} evt
       * @return {?}
       */


      onMouseWheel(evt) {
        if (!evt) {
          evt = event;
        }

        evt.preventDefault();

        if (evt.detail < 0 || evt.wheelDelta > 0) {
          // up -> larger
          this.zoomIn();
        } else {
          // down -> smaller
          this.zoomOut();
        }
      }
      /**
       * @param {?} pos
       * @return {?}
       */


      checkTooltipActivation(pos) {
        this.getUIElements().forEach(x => x.hover = false);
        const
        /** @type {?} */
        activeElement = this.getUIElement(pos);
        const
        /** @type {?} */
        oldToolTip = this._currentTooltip;

        if (activeElement !== null) {
          if (typeof activeElement.hover !== 'undefined') {
            activeElement.hover = true;
          }

          if (typeof activeElement.tooltip !== 'undefined') {
            this._currentTooltip = activeElement.tooltip;
          }
        }

        if (oldToolTip !== this._currentTooltip) {
          this._dirty = true;
        }
      }
      /**
       * @return {?}
       */


      nextPage() {
        if (!this._resource) {
          return;
        }

        if (this._resource.currentItem >= this._resource.totalItem) {
          return;
        }

        if (this._resource.currentItem < 1) {
          this._resource.currentItem = 0;
        }

        this._resource.currentItem++;

        this._resource.loadResource();

        this._dirty = true;
      }
      /**
       * @return {?}
       */


      previousPage() {
        if (!this._resource) {
          return;
        }

        if (this._resource.currentItem <= 1) {
          return;
        }

        if (this._resource.currentItem > this._resource.totalItem) {
          this._resource.currentItem = this._resource.totalItem + 1;
        }

        this._resource.currentItem--;

        this._resource.loadResource();

        this._dirty = true;
      }
      /**
       * @return {?}
       */


      zoomIn() {
        if (!this._resource) {
          return;
        }

        const
        /** @type {?} */
        newScale = this._resource.viewport.scale * (1 + this.config.scaleStep);
        this._resource.viewport.scale = newScale > this._resource.maxScale ? this._resource.maxScale : newScale;
        this._dirty = true;
      }
      /**
       * @return {?}
       */


      zoomOut() {
        if (!this._resource) {
          return;
        }

        const
        /** @type {?} */
        newScale = this._resource.viewport.scale * (1 - this.config.scaleStep);
        this._resource.viewport.scale = newScale < this._resource.minScale ? this._resource.minScale : newScale;
        this._dirty = true;
      }
      /**
       * @return {?}
       */


      rotateLeft() {
        if (!this._resource) {
          return;
        }

        const
        /** @type {?} */
        viewport = this._resource.viewport;
        viewport.rotation = viewport.rotation === 0 ? 270 : viewport.rotation - 90;
        this._dirty = true;
      }
      /**
       * @return {?}
       */


      rotateRight() {
        if (!this._resource) {
          return;
        }

        const
        /** @type {?} */
        viewport = this._resource.viewport;
        viewport.rotation = viewport.rotation === 270 ? 0 : viewport.rotation + 90;
        this._dirty = true;
      }
      /**
       * @return {?}
       */


      resetImage() {
        if (!this._resource) {
          return;
        }

        this._resource.resetViewport(this._canvas);

        this._dirty = true;
      }
      /**
       * @return {?}
       */


      updateCanvas() {
        this.resetImage(); // start new render loop

        this.render();
      }
      /**
       * @return {?}
       */


      render() {
        const
        /** @type {?} */
        vm = this; // only re-render if dirty

        if (this._dirty && this._resource) {
          this._dirty = false;
          const
          /** @type {?} */
          ctx = this._context;
          ctx.save();

          this._resource.draw(ctx, this.config, this._canvas, () => {
            ctx.restore();

            if (vm._resource.loaded) {
              // draw buttons
              this.drawButtons(ctx); // draw paginator

              if (this._resource.showItemsQuantity) {
                this.drawPaginator(ctx);
              }
            }
          });
        }

        requestAnimationFrame(() => this.render());
      }
      /**
       * @param {?} ctx
       * @return {?}
       */


      drawButtons(ctx) {
        const
        /** @type {?} */
        padding = this.config.tooltips.padding;
        const
        /** @type {?} */
        radius = this.config.tooltips.radius;
        const
        /** @type {?} */
        gap = 2 * radius + padding;
        const
        /** @type {?} */
        x = this._canvas.width - radius - padding;
        const
        /** @type {?} */
        y = this._canvas.height - radius - padding; // draw buttons

        for (let
        /** @type {?} */
        i = 0; i < this._buttons.length; i++) {
          this._buttons[i].draw(ctx, x, y - gap * i, radius);
        } // draw tooltip


        if (this._currentTooltip !== null && this._canvas.width > MIN_TOOLTIP_WIDTH_SPACE) {
          ctx.save();
          const
          /** @type {?} */
          fontSize = radius;
          ctx.font = fontSize + 'px sans-serif'; // calculate position

          const
          /** @type {?} */
          textSize = ctx.measureText(this._currentTooltip).width,

          /** @type {?} */
          rectWidth = textSize + padding,

          /** @type {?} */
          rectHeight = fontSize * 0.70 + padding,

          /** @type {?} */
          rectX = this._canvas.width - (2 * radius + 2 * padding) // buttons
          - rectWidth,

          /** @type {?} */
          rectY = this._canvas.height - rectHeight - padding,

          /** @type {?} */
          textX = rectX + 0.5 * padding,

          /** @type {?} */
          textY = this._canvas.height - 1.5 * padding;
          ctx.globalAlpha = this.config.tooltips.bgAlpha;
          ctx.fillStyle = this.config.tooltips.bgStyle;
          this.drawRoundRectangle(ctx, rectX, rectY, rectWidth, rectHeight, 8, true, false);
          ctx.globalAlpha = this.config.tooltips.textAlpha;
          ctx.fillStyle = this.config.tooltips.textStyle;
          ctx.fillText(this._currentTooltip, textX, textY);
          ctx.restore();
        }
      }
      /**
       * @param {?} ctx
       * @return {?}
       */


      drawPaginator(ctx) {
        const
        /** @type {?} */
        padding = this.config.tooltips.padding;
        const
        /** @type {?} */
        radius = this.config.tooltips.radius;
        const
        /** @type {?} */
        labelWidth = 50;
        const
        /** @type {?} */
        x1 = (this._canvas.width - labelWidth) / 2 - radius - padding; // PrevPageButton

        const
        /** @type {?} */
        x2 = this._canvas.width / 2; // Label

        const
        /** @type {?} */
        x3 = (this._canvas.width + labelWidth) / 2 + radius + padding; // NextPageButton

        const
        /** @type {?} */
        y = this._canvas.height - radius - padding;
        const
        /** @type {?} */
        label = this._resource.currentItem + '/' + this._resource.totalItem;
        const
        /** @type {?} */
        fontSize = 25;
        ctx.save();

        this._beforePageButton.draw(ctx, x1, y, radius);

        this._nextPageButton.draw(ctx, x3, y, radius);

        ctx.restore();
        ctx.save();
        ctx.font = fontSize + 'px Verdana';
        ctx.textAlign = 'center';
        ctx.fillText(label, x2, this._canvas.height - padding - fontSize / 2, labelWidth);
        ctx.restore();
      }
      /**
       * @param {?} ctx
       * @param {?} x
       * @param {?} y
       * @param {?} width
       * @param {?} height
       * @param {?} radius
       * @param {?} fill
       * @param {?} stroke
       * @return {?}
       */


      drawRoundRectangle(ctx, x, y, width, height, radius, fill, stroke) {
        radius = typeof radius === 'number' ? radius : 5;
        fill = typeof fill === 'boolean' ? fill : true; // fill = default

        stroke = typeof stroke === 'boolean' ? stroke : false; // draw round rectangle

        ctx.beginPath();
        ctx.moveTo(x + radius, y);
        ctx.lineTo(x + width - radius, y);
        ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        ctx.lineTo(x + width, y + height - radius);
        ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        ctx.lineTo(x + radius, y + height);
        ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        ctx.lineTo(x, y + radius);
        ctx.quadraticCurveTo(x, y, x + radius, y);
        ctx.closePath();

        if (fill) {
          ctx.fill();
        }

        if (stroke) {
          ctx.stroke();
        }
      }
      /**
       * @param {?} cfg
       * @return {?}
       */


      extendsDefaultConfig(cfg) {
        const
        /** @type {?} */
        defaultCfg = IMAGEVIEWER_CONFIG_DEFAULT;
        const
        /** @type {?} */
        localCfg = Object.assign({}, defaultCfg, cfg);

        if (cfg.buttonStyle) {
          localCfg.buttonStyle = Object.assign(defaultCfg.buttonStyle, cfg.buttonStyle);
        }

        if (cfg.tooltips) {
          localCfg.tooltips = Object.assign(defaultCfg.tooltips, cfg.tooltips);
        }

        if (cfg.nextPageButton) {
          localCfg.nextPageButton = Object.assign(defaultCfg.nextPageButton, cfg.nextPageButton);
        }

        if (cfg.beforePageButton) {
          localCfg.beforePageButton = Object.assign(defaultCfg.beforePageButton, cfg.beforePageButton);
        }

        if (cfg.zoomOutButton) {
          localCfg.zoomOutButton = Object.assign(defaultCfg.zoomOutButton, cfg.zoomOutButton);
        }

        if (cfg.zoomOutButton) {
          localCfg.zoomOutButton = Object.assign(defaultCfg.zoomOutButton, cfg.zoomOutButton);
        }

        if (cfg.zoomInButton) {
          localCfg.zoomInButton = Object.assign(defaultCfg.zoomInButton, cfg.zoomInButton);
        }

        if (cfg.rotateLeftButton) {
          localCfg.rotateLeftButton = Object.assign(defaultCfg.rotateLeftButton, cfg.rotateLeftButton);
        }

        if (cfg.rotateRightButton) {
          localCfg.rotateRightButton = Object.assign(defaultCfg.rotateRightButton, cfg.rotateRightButton);
        }

        if (cfg.resetButton) {
          localCfg.resetButton = Object.assign(defaultCfg.resetButton, cfg.resetButton);
        }

        return localCfg;
      }
      /**
       * @param {?} pos
       * @return {?}
       */


      screenToCanvasCentre(pos) {
        const
        /** @type {?} */
        rect = this._canvas.getBoundingClientRect();

        return {
          x: pos.x - rect.left,
          y: pos.y - rect.top
        };
      }
      /**
       * @return {?}
       */


      getUIElements() {
        const
        /** @type {?} */
        hoverElements = this._buttons.slice();

        hoverElements.push(this._nextPageButton);
        hoverElements.push(this._beforePageButton);
        return hoverElements;
      }
      /**
       * @param {?} pos
       * @return {?}
       */


      getUIElement(pos) {
        const
        /** @type {?} */
        activeUIElement = this.getUIElements().filter(uiElement => {
          return uiElement.isWithinBounds(pos.x, pos.y);
        });
        return activeUIElement.length > 0 ? activeUIElement[0] : null;
      }
      /**
       * @param {?} file
       * @return {?}
       */


      isImage(file) {
        if (this._filetype && this._filetype.toLowerCase() === 'image') {
          return true;
        }

        return testFile(file, '\\.(png|jpg|jpeg|gif)|image/png');
      }
      /**
       * @param {?} file
       * @return {?}
       */


      isPdf(file) {
        if (this._filetype && this._filetype.toLowerCase() === 'pdf') {
          return true;
        }

        return testFile(file, '\\.(pdf)|application/pdf');
      }

    }

    ImageViewerComponent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
      args: [{
        selector: 'ngx-imageviewer',
        template: "\n    <canvas #imageContainer [width]=\"width\" [height]=\"height\"\n      (tap)=\"onTap($event)\" (pinchin)=\"processTouchEvent($event)\" (pinchout)=\"processTouchEvent($event)\"\n      (panmove)=\"processTouchEvent($event)\" (panend)=\"onTouchEnd()\" (rotatemove)=\"processTouchEvent($event)\"\n        (rotateend)=\"onTouchEnd()\">\n    </canvas>\n  ",
        styles: ["\n    :host { display: block }\n    :host canvas { margin: 0 auto; display: block }\n    [hidden] { display: none !important }\n  "]
      }]
    }]; //#endregion

    /** @nocollapse */

    ImageViewerComponent.ctorParameters = () => [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]
    }, {
      type: ImageCacheService
    }, {
      type: ImageViewerConfig,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
        args: [IMAGEVIEWER_CONFIG]
      }]
    }];

    ImageViewerComponent.propDecorators = {
      "src": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['src']
      }],
      "filetype": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['filetype']
      }],
      "width": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['width']
      }],
      "height": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
        args: ['height']
      }],
      "canvasRef": [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
        args: ['imageContainer']
      }]
    };
    /**
     * @param {?} file
     * @param {?} regexTest
     * @return {?}
     */

    function testFile(file, regexTest) {
      if (!file) {
        return false;
      }

      const
      /** @type {?} */
      name = file instanceof File ? file.name : file;
      return name.toLowerCase().match(regexTest) !== null;
    }
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */


    const ɵ0 = IMAGEVIEWER_CONFIG_DEFAULT;

    class ImageViewerModule {}

    ImageViewerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [{
          provide: IMAGEVIEWER_CONFIG,
          useValue: ɵ0
        }],
        declarations: [ImageViewerComponent],
        exports: [ImageViewerComponent]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes} checked by tsc
     */
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFsbHlzb25oLW5neC1pbWFnZXZpZXdlci5qcy5tYXAiLCJzb3VyY2VzIjpbIm5nOi8vQGhhbGx5c29uaC9uZ3gtaW1hZ2V2aWV3ZXIvbGliL2ltYWdldmlld2VyLmNvbmZpZy50cyIsIm5nOi8vQGhhbGx5c29uaC9uZ3gtaW1hZ2V2aWV3ZXIvbGliL2ltYWdldmlld2VyLm1vZGVsLnRzIiwibmc6Ly9AaGFsbHlzb25oL25neC1pbWFnZXZpZXdlci9saWIvaW1hZ2UubG9hZGVyLnRzIiwibmc6Ly9AaGFsbHlzb25oL25neC1pbWFnZXZpZXdlci9saWIvaW1hZ2VjYWNoZS5zZXJ2aWNlLnRzIiwibmc6Ly9AaGFsbHlzb25oL25neC1pbWFnZXZpZXdlci9saWIvcGRmLmxvYWRlci50cyIsIm5nOi8vQGhhbGx5c29uaC9uZ3gtaW1hZ2V2aWV3ZXIvbGliL2ltYWdldmlld2VyLmNvbXBvbmVudC50cyIsIm5nOi8vQGhhbGx5c29uaC9uZ3gtaW1hZ2V2aWV3ZXIvbGliL2ltYWdldmlld2VyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBJbmplY3Rpb25Ub2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyQ29uZmlnIHtcclxuICB3aWR0aD86IG51bWJlcjtcclxuICBoZWlnaHQ/OiBudW1iZXI7XHJcbiAgYmdTdHlsZT86IHN0cmluZztcclxuICBzY2FsZVN0ZXA/OiBudW1iZXI7XHJcbiAgcm90YXRlU3RlcHBlcj86IGJvb2xlYW47XHJcbiAgYnV0dG9uU3R5bGU/OiBCdXR0b25TdHlsZTtcclxuICBsb2FkaW5nTWVzc2FnZT86IHN0cmluZztcclxuICB0b29sdGlwcz86IHtcclxuICAgIGVuYWJsZWQ/OiBib29sZWFuLFxyXG4gICAgYmdTdHlsZT86IHN0cmluZyxcclxuICAgIGJnQWxwaGE/OiBudW1iZXIsXHJcbiAgICB0ZXh0U3R5bGU/OiBzdHJpbmcsXHJcbiAgICB0ZXh0QWxwaGE/OiBudW1iZXIsXHJcbiAgICBwYWRkaW5nPzogbnVtYmVyLFxyXG4gICAgcmFkaXVzPzogbnVtYmVyXHJcbiAgfTtcclxuICBuZXh0UGFnZUJ1dHRvbj86IEJ1dHRvbkNvbmZpZztcclxuICBiZWZvcmVQYWdlQnV0dG9uPzogQnV0dG9uQ29uZmlnO1xyXG4gIHpvb21PdXRCdXR0b24/OiBCdXR0b25Db25maWc7XHJcbiAgem9vbUluQnV0dG9uPzogQnV0dG9uQ29uZmlnO1xyXG4gIHJvdGF0ZUxlZnRCdXR0b24/OiBCdXR0b25Db25maWc7XHJcbiAgcm90YXRlUmlnaHRCdXR0b24/OiBCdXR0b25Db25maWc7XHJcbiAgcmVzZXRCdXR0b24/OiBCdXR0b25Db25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uU3R5bGUge1xyXG4gIGljb25Gb250RmFtaWx5Pzogc3RyaW5nO1xyXG4gIGFscGhhPzogbnVtYmVyO1xyXG4gIGhvdmVyQWxwaGE/OiBudW1iZXI7XHJcbiAgYmdTdHlsZT86IHN0cmluZztcclxuICBpY29uU3R5bGU/OiBzdHJpbmc7XHJcbiAgYm9yZGVyU3R5bGU/OiBzdHJpbmc7XHJcbiAgYm9yZGVyV2lkdGg/OiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uQ29uZmlnIHtcclxuICBpY29uPzogc3RyaW5nO1xyXG4gIHRvb2x0aXA/OiBzdHJpbmc7XHJcbiAgc29ydElkPzogbnVtYmVyO1xyXG4gIHNob3c/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlQnV0dG9uQ29uZmlnKGljb24/OiBzdHJpbmcsIHRvb2x0aXA/OiBzdHJpbmcsIHNvcnRJZDogbnVtYmVyID0gMCwgc2hvdzogYm9vbGVhbiA9IHRydWUpIHtcclxuICByZXR1cm4geyBpY29uOiBpY29uLCB0b29sdGlwOiB0b29sdGlwLCBzb3J0SWQ6IHNvcnRJZCwgc2hvdzogc2hvdyB9O1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgSU1BR0VWSUVXRVJfQ09ORklHID0gbmV3IEluamVjdGlvblRva2VuPEltYWdlVmlld2VyQ29uZmlnPignaW1hZ2V2aWV3ZXIuY29uZmlnJyk7XHJcblxyXG5leHBvcnQgbGV0IElNQUdFVklFV0VSX0NPTkZJR19ERUZBVUxUOiBJbWFnZVZpZXdlckNvbmZpZyA9IHtcclxuICB3aWR0aDogODAwLCAvLyBjb21wb25lbnQgZGVmYXVsdCB3aWR0aFxyXG4gIGhlaWdodDogNjAwLCAvLyBjb21wb25lbnQgZGVmYXVsdCBoZWlnaHRcclxuICBiZ1N0eWxlOiAnI0VDRUZGMScsIC8vIGNvbXBvbmVudCBiYWNrZ3JvdW5kIHN0eWxlXHJcbiAgc2NhbGVTdGVwOiAwLjEsIC8vIHpvb20gc2NhbGUgc3RlcCAodXNpbmcgdGhlIHpvb20gaW4vb3V0IGJ1dHRvbnMpXHJcbiAgcm90YXRlU3RlcHBlcjogZmFsc2UsXHJcbiAgbG9hZGluZ01lc3NhZ2U6ICdMb2FkaW5nLi4uJyxcclxuICBidXR0b25TdHlsZToge1xyXG4gICAgaWNvbkZvbnRGYW1pbHk6ICdNYXRlcmlhbCBJY29ucycsIC8vIGZvbnQgdXNlZCB0byByZW5kZXIgdGhlIGJ1dHRvbiBpY29uc1xyXG4gICAgYWxwaGE6IDAuNSwgLy8gYnV0dG9ucycgdHJhbnNwYXJlbmNlIHZhbHVlXHJcbiAgICBob3ZlckFscGhhOiAwLjcsIC8vIGJ1dHRvbnMnIHRyYW5zcGFyZW5jZSB2YWx1ZSB3aGVuIG1vdXNlIGlzIG92ZXJcclxuICAgIGJnU3R5bGU6ICcjMDAwMDAwJywgLy8gIGJ1dHRvbnMnIGJhY2tncm91bmQgc3R5bGVcclxuICAgIGljb25TdHlsZTogJyNmZmZmZmYnLCAvLyBidXR0b25zJyBpY29uIGNvbG9yc1xyXG4gICAgYm9yZGVyU3R5bGU6ICcjMDAwMDAwJywgLy8gYnV0dG9ucycgYm9yZGVyIHN0eWxlXHJcbiAgICBib3JkZXJXaWR0aDogMCAvLyBidXR0b25zJyBib3JkZXIgd2lkdGggKDAgPT0gZGlzYWJsZWQpXHJcbiAgfSxcclxuICB0b29sdGlwczoge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSwgLy8gZW5hYmxlIG9yIGRpc2FibGUgdG9vbHRpcHMgZm9yIGJ1dHRvbnNcclxuICAgIGJnU3R5bGU6ICcjMDAwMDAwJywgLy8gdG9vbHRpcCBiYWNrZ3JvdW5kIHN0eWxlXHJcbiAgICBiZ0FscGhhOiAwLjUsIC8vIHRvb2x0aXAgYmFja2dyb3VuZCB0cmFuc3BhcmVuY2VcclxuICAgIHRleHRTdHlsZTogJyNmZmZmZmYnLCAvLyB0b29sdGlwJ3MgdGV4dCBzdHlsZVxyXG4gICAgdGV4dEFscGhhOiAwLjksIC8vIHRvb2x0aXAncyB0ZXh0IHRyYW5zcGFyZW5jZVxyXG4gICAgcGFkZGluZzogMTUsIC8vIHRvb2x0aXAgcGFkZGluZ1xyXG4gICAgcmFkaXVzOiAyMCAvLyB0b29sdGlwIGJvcmRlciByYWRpdXNcclxuICB9LFxyXG4gIG5leHRQYWdlQnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoU3RyaW5nLmZyb21DaGFyQ29kZSgweEU0MDkpLCAnTmV4dCBwYWdlJywgMCksXHJcbiAgYmVmb3JlUGFnZUJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhFNDA4KSwgJ1ByZXZpb3VzIHBhZ2UnLCAxKSxcclxuICB6b29tT3V0QnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoU3RyaW5nLmZyb21DaGFyQ29kZSgweEU5MDApLCAnWm9vbSBvdXQnLCAwKSxcclxuICB6b29tSW5CdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZyhTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RThGRiksICdab29tIGluJywgMSksXHJcbiAgcm90YXRlTGVmdEJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhFNDE5KSwgJ1JvdGF0ZSBsZWZ0JywgMiksXHJcbiAgcm90YXRlUmlnaHRCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZyhTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RTQxQSksICdSb3RhdGUgcmlnaHQnLCAzKSxcclxuICByZXNldEJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhFODYzKSwgJ1Jlc2V0JywgNClcclxufTtcclxuIiwiaW1wb3J0IHsgQnV0dG9uQ29uZmlnLCBCdXR0b25TdHlsZSwgSW1hZ2VWaWV3ZXJDb25maWcgfSBmcm9tICcuL2ltYWdldmlld2VyLmNvbmZpZyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG4gIC8vI3JlZ2lvbiBQcm9wZXJ0aWVzXHJcbiAgc29ydElkID0gMDtcclxuXHJcbiAgaWNvbjogc3RyaW5nO1xyXG4gIHRvb2x0aXA6IHN0cmluZztcclxuXHJcbiAgLy8gaG92ZXIgc3RhdGVcclxuICBob3ZlcjogYm9vbGVhbiB8ICgoKSA9PiBib29sZWFuKSA9IGZhbHNlO1xyXG5cclxuICAvLyBzaG93L2hpZGUgYnV0dG9uXHJcbiAgZGlzcGxheSA9IHRydWU7XHJcblxyXG4gIC8vIGRyYXduIG9uIHBvc2l0aW9uXHJcbiAgcHJpdmF0ZSBkcmF3UG9zaXRpb24gPSBudWxsO1xyXG4gIHByaXZhdGUgZHJhd1JhZGl1cyA9IDA7XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBMaWZlY3ljbGUgZXZlbnRzXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjb25maWc6IEJ1dHRvbkNvbmZpZyxcclxuICAgIHByaXZhdGUgc3R5bGU6IEJ1dHRvblN0eWxlXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNvcnRJZCA9IGNvbmZpZy5zb3J0SWQ7XHJcbiAgICB0aGlzLmRpc3BsYXkgPSBjb25maWcuc2hvdztcclxuICAgIHRoaXMuaWNvbiA9IGNvbmZpZy5pY29uO1xyXG4gICAgdGhpcy50b29sdGlwID0gY29uZmlnLnRvb2x0aXA7XHJcbiAgfVxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gRXZlbnRzXHJcbiAgLy8gY2xpY2sgYWN0aW9uXHJcbiAgb25DbGljayhldnQpIHsgYWxlcnQoJ25vIGNsaWNrIGFjdGlvbiBzZXQhJyk7IHJldHVybiB0cnVlOyB9XHJcblxyXG4gIC8vIG1vdXNlIGRvd24gYWN0aW9uXHJcbiAgb25Nb3VzZURvd24oZXZ0KSB7IHJldHVybiBmYWxzZTsgfVxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gRHJhdyBCdXR0b25cclxuICBkcmF3KGN0eCwgeCwgeSwgcmFkaXVzKSB7XHJcbiAgICB0aGlzLmRyYXdQb3NpdGlvbiA9IHsgeDogeCwgeTogeSB9O1xyXG4gICAgdGhpcy5kcmF3UmFkaXVzID0gcmFkaXVzO1xyXG5cclxuICAgIC8vIHByZXNlcnZlIGNvbnRleHRcclxuICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgLy8gZHJhd2luZyBzZXR0aW5nc1xyXG4gICAgY29uc3QgaXNIb3ZlciA9ICh0eXBlb2YgdGhpcy5ob3ZlciA9PT0gJ2Z1bmN0aW9uJykgPyB0aGlzLmhvdmVyKCkgOiB0aGlzLmhvdmVyO1xyXG4gICAgY3R4Lmdsb2JhbEFscGhhID0gKGlzSG92ZXIpID8gdGhpcy5zdHlsZS5ob3ZlckFscGhhIDogdGhpcy5zdHlsZS5hbHBoYTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLnN0eWxlLmJnU3R5bGU7XHJcbiAgICBjdHgubGluZVdpZHRoID0gMDtcclxuXHJcbiAgICAvLyBkcmF3IGNpcmNsZVxyXG4gICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgY3R4LmFyYyh4LCB5LCByYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgIGN0eC5maWxsKCk7XHJcbiAgICBpZiAodGhpcy5zdHlsZS5ib3JkZXJXaWR0aCA+IDApIHtcclxuICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMuc3R5bGUuYm9yZGVyV2lkdGg7XHJcbiAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuc3R5bGUuYm9yZGVyU3R5bGU7XHJcbiAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IGljb25cclxuICAgIGlmICh0aGlzLmljb24gIT09IG51bGwpIHtcclxuICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgLy8gY3R4Lmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdkZXN0aW5hdGlvbi1vdXQnO1xyXG4gICAgICB0aGlzLmRyYXdJY29uRm9udChjdHgsIHgsIHksIHJhZGl1cyk7XHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVzdG9yZSBjb250ZXh0XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3SWNvbkZvbnQoY3R4LCBjZW50cmVYLCBjZW50cmVZLCBzaXplKSB7XHJcbiAgICAvLyBmb250IHNldHRpbmdzXHJcbiAgICBjdHguZm9udCA9IHNpemUgKyAncHggJyArIHRoaXMuc3R5bGUuaWNvbkZvbnRGYW1pbHk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5pY29uU3R5bGU7XHJcblxyXG4gICAgLy8gY2FsY3VsYXRlIHBvc2l0aW9uXHJcbiAgICBjb25zdCB0ZXh0U2l6ZSA9IGN0eC5tZWFzdXJlVGV4dCh0aGlzLmljb24pO1xyXG4gICAgY29uc3QgeCA9IGNlbnRyZVggLSB0ZXh0U2l6ZS53aWR0aCAvIDI7XHJcbiAgICBjb25zdCB5ID0gY2VudHJlWSArIHNpemUgLyAyO1xyXG5cclxuICAgIC8vIGRyYXcgaXRcclxuICAgIGN0eC5maWxsVGV4dCh0aGlzLmljb24sIHgsIHkpO1xyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFV0aWxzXHJcbiAgaXNXaXRoaW5Cb3VuZHMoeCwgeSkge1xyXG4gICAgaWYgKHRoaXMuZHJhd1Bvc2l0aW9uID09PSBudWxsKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gICAgY29uc3QgZHggPSBNYXRoLmFicyh0aGlzLmRyYXdQb3NpdGlvbi54IC0geCksIGR5ID0gTWF0aC5hYnModGhpcy5kcmF3UG9zaXRpb24ueSAtIHkpO1xyXG4gICAgcmV0dXJuIGR4ICogZHggKyBkeSAqIGR5IDw9IHRoaXMuZHJhd1JhZGl1cyAqIHRoaXMuZHJhd1JhZGl1cztcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3cG9ydCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcixcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcixcclxuICAgIHB1YmxpYyBzY2FsZTogbnVtYmVyLFxyXG4gICAgcHVibGljIHJvdGF0aW9uOiBudW1iZXIsXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyLFxyXG4gICAgcHVibGljIHk6IG51bWJlclxyXG4gICkge31cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEaW1lbnNpb24geyB3aWR0aDogbnVtYmVyOyBoZWlnaHQ6IG51bWJlcjsgfVxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc291cmNlTG9hZGVyIHtcclxuICBwdWJsaWMgc3JjOiBzdHJpbmc7XHJcbiAgcHVibGljIHNvdXJjZURpbTogeyB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciB9O1xyXG4gIHB1YmxpYyB2aWV3cG9ydDogVmlld3BvcnQgPSB7IHdpZHRoOiAwLCBoZWlnaHQ6IDAsIHNjYWxlOiAxLCByb3RhdGlvbjogMCwgeDogMCwgeTogMCB9O1xyXG4gIHB1YmxpYyBtaW5TY2FsZSA9IDA7XHJcbiAgcHVibGljIG1heFNjYWxlID0gNDtcclxuICBwdWJsaWMgY3VycmVudEl0ZW0gPSAxO1xyXG4gIHB1YmxpYyB0b3RhbEl0ZW0gPSAxO1xyXG4gIHB1YmxpYyBzaG93SXRlbXNRdWFudGl0eSA9IGZhbHNlO1xyXG4gIHB1YmxpYyBsb2FkZWQgPSBmYWxzZTtcclxuICBwdWJsaWMgbG9hZGluZyA9IGZhbHNlO1xyXG4gIHB1YmxpYyByZW5kZXJpbmcgPSBmYWxzZTtcclxuXHJcbiAgcHJvdGVjdGVkIF9pbWFnZTtcclxuICBwcm90ZWN0ZWQgcmVzb3VyY2VDaGFuZ2UgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gIGFic3RyYWN0IHNldFVwKCk7XHJcbiAgYWJzdHJhY3QgbG9hZFJlc291cmNlKCk7XHJcblxyXG4gIHB1YmxpYyByZXNldFZpZXdwb3J0KGNhbnZhc0RpbTogRGltZW5zaW9uKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIXRoaXMubG9hZGVkIHx8ICFjYW52YXNEaW0pIHsgcmV0dXJuOyB9XHJcblxyXG4gICAgY29uc3Qgcm90YXRpb24gPSB0aGlzLnZpZXdwb3J0ID8gdGhpcy52aWV3cG9ydC5yb3RhdGlvbiA6IDA7XHJcbiAgICBjb25zdCBpbnZlcnRlZCA9IHRvU3F1YXJlQW5nbGUocm90YXRpb24pIC8gOTAgJSAyICE9PSAwO1xyXG4gICAgY29uc3QgY2FudmFzID0ge1xyXG4gICAgICB3aWR0aDogIWludmVydGVkID8gY2FudmFzRGltLndpZHRoIDogY2FudmFzRGltLmhlaWdodCxcclxuICAgICAgaGVpZ2h0OiAhaW52ZXJ0ZWQgPyBjYW52YXNEaW0uaGVpZ2h0IDogY2FudmFzRGltLndpZHRoXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgoKGNhbnZhcy5oZWlnaHQgLyB0aGlzLl9pbWFnZS5oZWlnaHQpICogdGhpcy5faW1hZ2Uud2lkdGgpIDw9IGNhbnZhcy53aWR0aCkge1xyXG4gICAgICB0aGlzLnZpZXdwb3J0LnNjYWxlID0gY2FudmFzLmhlaWdodCAvIHRoaXMuX2ltYWdlLmhlaWdodDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmlld3BvcnQuc2NhbGUgPSBjYW52YXMud2lkdGggLyB0aGlzLl9pbWFnZS53aWR0aDtcclxuICAgIH1cclxuICAgIHRoaXMubWluU2NhbGUgPSB0aGlzLnZpZXdwb3J0LnNjYWxlIC8gNDtcclxuICAgIHRoaXMubWF4U2NhbGUgPSB0aGlzLnZpZXdwb3J0LnNjYWxlICogNDtcclxuXHJcbiAgICAvLyBzdGFydCBwb2ludCB0byBkcmF3IGltYWdlXHJcbiAgICB0aGlzLnZpZXdwb3J0LndpZHRoID0gdGhpcy5faW1hZ2Uud2lkdGggKiB0aGlzLnZpZXdwb3J0LnNjYWxlO1xyXG4gICAgdGhpcy52aWV3cG9ydC5oZWlnaHQgPSB0aGlzLl9pbWFnZS5oZWlnaHQgKiB0aGlzLnZpZXdwb3J0LnNjYWxlO1xyXG4gICAgdGhpcy52aWV3cG9ydC54ID0gKGNhbnZhc0RpbS53aWR0aCAtIHRoaXMudmlld3BvcnQud2lkdGgpIC8gMjtcclxuICAgIHRoaXMudmlld3BvcnQueSA9IChjYW52YXNEaW0uaGVpZ2h0IC0gdGhpcy52aWV3cG9ydC5oZWlnaHQpIC8gMjtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBkcmF3KGN0eCwgY29uZmlnOiBJbWFnZVZpZXdlckNvbmZpZywgY2FudmFzRGltOiBEaW1lbnNpb24sIG9uRmluaXNoKSB7XHJcbiAgICAvLyBjbGVhciBjYW52YXNcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzRGltLndpZHRoLCBjYW52YXNEaW0uaGVpZ2h0KTtcclxuXHJcbiAgICAvLyBEcmF3IGJhY2tncm91bmQgY29sb3I7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gY29uZmlnLmJnU3R5bGU7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzRGltLndpZHRoLCBjYW52YXNEaW0uaGVpZ2h0KTtcclxuXHJcbiAgICAvLyBkcmF3IGltYWdlICh0cmFuc2Zvcm1lZCwgcm90YXRlIGFuZCBzY2FsZWQpXHJcbiAgICBpZiAoIXRoaXMubG9hZGluZyAmJiB0aGlzLmxvYWRlZCkge1xyXG4gICAgICBjdHgudHJhbnNsYXRlKHRoaXMudmlld3BvcnQueCArIHRoaXMudmlld3BvcnQud2lkdGggLyAyLCB0aGlzLnZpZXdwb3J0LnkgKyB0aGlzLnZpZXdwb3J0LmhlaWdodCAvIDIpO1xyXG4gICAgICBjdHgucm90YXRlKHRoaXMudmlld3BvcnQucm90YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgY3R4LnNjYWxlKHRoaXMudmlld3BvcnQuc2NhbGUsIHRoaXMudmlld3BvcnQuc2NhbGUpO1xyXG4gICAgICBjdHguZHJhd0ltYWdlKHRoaXMuX2ltYWdlLCAtdGhpcy5faW1hZ2Uud2lkdGggLyAyLCAtdGhpcy5faW1hZ2UuaGVpZ2h0IC8gMik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gJyMzMzMnO1xyXG4gICAgICBjdHguZm9udCA9ICcyNXB4IFZlcmRhbmEnO1xyXG4gICAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICAgIGN0eC5maWxsVGV4dChjb25maWcubG9hZGluZ01lc3NhZ2UgfHwgJ0xvYWRpbmcuLi4nLCBjYW52YXNEaW0ud2lkdGggLyAyLCBjYW52YXNEaW0uaGVpZ2h0IC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgb25GaW5pc2goY3R4LCBjb25maWcsIGNhbnZhc0RpbSk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgb25SZXNvdXJjZUNoYW5nZSgpIHsgcmV0dXJuIHRoaXMucmVzb3VyY2VDaGFuZ2UuYXNPYnNlcnZhYmxlKCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRvU3F1YXJlQW5nbGUoYW5nbGU6IG51bWJlcikge1xyXG4gIHJldHVybiA5MCAqICgoTWF0aC50cnVuYyhhbmdsZSAvIDkwKSArIChNYXRoLnRydW5jKGFuZ2xlICUgOTApID4gNDUgPyAxIDogMCkpICUgNCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVzb3VyY2VMb2FkZXIsIERpbWVuc2lvbiwgdG9TcXVhcmVBbmdsZSB9IGZyb20gJy4vaW1hZ2V2aWV3ZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBJbWFnZVZpZXdlckNvbmZpZyB9IGZyb20gJy4vaW1hZ2V2aWV3ZXIuY29uZmlnJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVJlc291cmNlTG9hZGVyIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xyXG5cclxuICBzZXRVcCgpIHtcclxuICAgIHRoaXMubG9hZFJlc291cmNlKCk7XHJcbiAgfVxyXG5cclxuICBsb2FkUmVzb3VyY2UoKSB7XHJcbiAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdGhpcy5faW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHRoaXMuX2ltYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoZXZ0KSA9PiB7XHJcbiAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMucmVzb3VyY2VDaGFuZ2UubmV4dCgpO1xyXG4gICAgfSwgZmFsc2UpO1xyXG4gICAgdGhpcy5faW1hZ2Uuc3JjID0gdGhpcy5zcmM7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FjaGVEZWYge1xyXG4gIHVybDogc3RyaW5nO1xyXG4gIHBhZ2U6IG51bWJlcjtcclxuICBpbWFnZTogYW55O1xyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VDYWNoZVNlcnZpY2Uge1xyXG5cclxuICBwcml2YXRlIF9jYWNoZTogQ2FjaGVEZWZbXSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHt9XHJcblxyXG4gIGdldCBjYWNoZSgpOiBDYWNoZURlZltdIHtcclxuICAgIHJldHVybiB0aGlzLl9jYWNoZTtcclxuICB9XHJcblxyXG4gIGdldENhY2hlKHVybDogc3RyaW5nLCBwYWdlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmNhY2hlLmZpbmQoaSA9PiBpLnVybCA9PT0gdXJsICYmIGkucGFnZSA9PT0gcGFnZSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbWFnZSh1cmw6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XHJcbiAgICBjb25zdCBjID0gdGhpcy5nZXRDYWNoZSh1cmwsIHBhZ2UpO1xyXG4gICAgcmV0dXJuIGMgPyBjLmltYWdlIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHNhdmVJbWFnZSh1cmw6IHN0cmluZywgcGFnZTogbnVtYmVyLCBpbWFnZTogYW55KSB7XHJcbiAgICBjb25zdCBjYWNoZSA9IHRoaXMuZ2V0Q2FjaGUodXJsLCBwYWdlKTtcclxuICAgIGlmIChjYWNoZSkge1xyXG4gICAgICBjYWNoZS5pbWFnZSA9IGltYWdlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYWNoZS5wdXNoKHsgdXJsLCBwYWdlLCBpbWFnZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRpc3Bvc2VDYWNoZSgpIHtcclxuICAgIHRoaXMuY2FjaGUuZm9yRWFjaChpID0+IFVSTC5yZXZva2VPYmplY3RVUkwoaS5pbWFnZS5zcmMpKTtcclxuICAgIHRoaXMuX2NhY2hlID0gW107XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlc291cmNlTG9hZGVyLCBEaW1lbnNpb24sIHRvU3F1YXJlQW5nbGUgfSBmcm9tICcuL2ltYWdldmlld2VyLm1vZGVsJztcclxuaW1wb3J0IHsgSW1hZ2VDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2ltYWdlY2FjaGUuc2VydmljZSc7XHJcbmltcG9ydCB7IEltYWdlVmlld2VyQ29uZmlnIH0gZnJvbSAnLi9pbWFnZXZpZXdlci5jb25maWcnO1xyXG5pbXBvcnQgeyBQREZKU1N0YXRpYywgUERGRG9jdW1lbnRQcm94eSwgUERGUGFnZVByb3h5IH0gZnJvbSAncGRmanMtZGlzdCc7XHJcblxyXG5kZWNsYXJlIHZhciBwZGZqc0xpYjogYW55O1xyXG5kZWNsYXJlIHZhciBwZGZqc1dvcmtlcjogYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIFBkZlJlc291cmNlTG9hZGVyIGV4dGVuZHMgUmVzb3VyY2VMb2FkZXIge1xyXG4gIHByaXZhdGUgX3BkZjogUERGRG9jdW1lbnRQcm94eTtcclxuICBwcml2YXRlIF9wYWdlOiBQREZQYWdlUHJveHk7XHJcbiAgcHJpdmF0ZSBfcGVuZGluZ1JlbG9hZDogYm9vbGVhbjtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfaW1hZ2VDYWNoZTogSW1hZ2VDYWNoZVNlcnZpY2UpIHtcclxuICAgIHN1cGVyKCk7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ1dvcmtlcicgaW4gd2luZG93KSB7XHJcbiAgICAgIGlmIChwZGZqc0xpYiAmJiBwZGZqc0xpYi5HbG9iYWxXb3JrZXJPcHRpb25zICYmICFwZGZqc0xpYi5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYykge1xyXG4gICAgICAgIHBkZmpzTGliLkdsb2JhbFdvcmtlck9wdGlvbnMud29ya2VyU3JjID0gcGRmanNXb3JrZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2hvd0l0ZW1zUXVhbnRpdHkgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0VXAoKSB7XHJcbiAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICBpZiAodm0ubG9hZGluZyB8fCAhdm0uc3JjKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgbG9hZGluZ1Rhc2sgPSBwZGZqc0xpYi5nZXREb2N1bWVudCh2bS5zcmMpO1xyXG4gICAgdm0ubG9hZGluZyA9IHRydWU7XHJcbiAgICB2bS5jdXJyZW50SXRlbSA9IDE7XHJcbiAgICBsb2FkaW5nVGFzay50aGVuKChwZGY6IFBERkRvY3VtZW50UHJveHkpID0+IHtcclxuICAgICAgdm0uX3BkZiA9IHBkZjtcclxuICAgICAgdm0udG90YWxJdGVtID0gcGRmLm51bVBhZ2VzO1xyXG4gICAgICB2bS5sb2FkZWQgPSB0cnVlO1xyXG4gICAgICB2bS5sb2FkUmVzb3VyY2UoKTtcclxuICAgIH0sIChyZWFzb246IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zb2xlLmVycm9yKHJlYXNvbik7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGxvYWRSZXNvdXJjZSgpIHtcclxuICAgIGNvbnN0IHZtID0gdGhpcztcclxuICAgIGlmICghdm0ubG9hZGVkKSB7XHJcbiAgICAgIHZtLl9wZW5kaW5nUmVsb2FkID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdm0ubG9hZGVkID0gZmFsc2U7XHJcbiAgICBjb25zdCB1cmwgPSB2bS5zcmM7XHJcbiAgICBjb25zdCBwYWdlID0gdm0uY3VycmVudEl0ZW07XHJcblxyXG4gICAgdm0uX3BkZi5nZXRQYWdlKHBhZ2UpLnRoZW4oKHBkZlBhZ2UpID0+IHtcclxuICAgICAgdm0uX3BhZ2UgPSBwZGZQYWdlO1xyXG4gICAgICB2bS5sb2FkSW1hZ2UodXJsLCBwYWdlLCAoKSA9PiB7XHJcbiAgICAgICAgdm0ubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB2bS5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHZtLl9wZW5kaW5nUmVsb2FkKSB7XHJcbiAgICAgICAgICB2bS5fcGVuZGluZ1JlbG9hZCA9IGZhbHNlO1xyXG4gICAgICAgICAgdm0ubG9hZFJlc291cmNlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZtLnJlc291cmNlQ2hhbmdlLm5leHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGxvYWRJbWFnZShzcmM6IHN0cmluZywgcGFnZTogbnVtYmVyLCBvbkZpbmlzaDogKCkgPT4gdm9pZCkge1xyXG4gICAgY29uc3Qgdm0gPSB0aGlzO1xyXG4gICAgY29uc3QgY2FjaGVpbWcgPSB2bS5faW1hZ2VDYWNoZS5nZXRJbWFnZShzcmMsIHBhZ2UpO1xyXG4gICAgaWYgKGNhY2hlaW1nKSB7XHJcbiAgICAgIHZtLl9pbWFnZSA9IGNhY2hlaW1nO1xyXG4gICAgICBvbkZpbmlzaCgpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgY29uc3QgcGFnZVZwID0gdm0uX3BhZ2UuZ2V0Vmlld3BvcnQoMik7XHJcblxyXG4gICAgY2FudmFzLndpZHRoID0gcGFnZVZwLndpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHBhZ2VWcC5oZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgcmVuZGVyQ29udGV4dCA9IHtcclxuICAgICAgY2FudmFzQ29udGV4dDogY29udGV4dCxcclxuICAgICAgdmlld3BvcnQ6IHBhZ2VWcFxyXG4gICAgfTtcclxuICAgIGNvbnN0IHJlbmRlclRhc2sgPSB2bS5fcGFnZS5yZW5kZXIocmVuZGVyQ29udGV4dCk7XHJcbiAgICByZW5kZXJUYXNrLnRoZW4oZnVuY3Rpb24gKCkge1xyXG4gICAgICBjYW52YXMudG9CbG9iKGJsb2IgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltZy5vbmxvYWQgPSBvbkZpbmlzaDtcclxuICAgICAgICBpbWcuc3JjID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICB2bS5faW1hZ2VDYWNoZS5zYXZlSW1hZ2Uoc3JjLCBwYWdlLCBpbWcpO1xyXG4gICAgICAgIHZtLl9pbWFnZSA9IGltZztcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBSZW5kZXJlcjIsIEluamVjdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEltYWdlVmlld2VyQ29uZmlnLCBJTUFHRVZJRVdFUl9DT05GSUcsIElNQUdFVklFV0VSX0NPTkZJR19ERUZBVUxULCBCdXR0b25Db25maWcsIEJ1dHRvblN0eWxlIH0gZnJvbSAnLi9pbWFnZXZpZXdlci5jb25maWcnO1xyXG5pbXBvcnQgeyBWaWV3cG9ydCwgQnV0dG9uLCB0b1NxdWFyZUFuZ2xlLCBSZXNvdXJjZUxvYWRlciB9IGZyb20gJy4vaW1hZ2V2aWV3ZXIubW9kZWwnO1xyXG5pbXBvcnQgeyBJbWFnZVJlc291cmNlTG9hZGVyIH0gZnJvbSAnLi9pbWFnZS5sb2FkZXInO1xyXG5pbXBvcnQgeyBJbWFnZUNhY2hlU2VydmljZSB9IGZyb20gJy4vaW1hZ2VjYWNoZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUGRmUmVzb3VyY2VMb2FkZXIgfSBmcm9tICcuL3BkZi5sb2FkZXInO1xyXG5cclxuY29uc3QgTUlOX1RPT0xUSVBfV0lEVEhfU1BBQ0UgPSA1MDA7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1pbWFnZXZpZXdlcicsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxjYW52YXMgI2ltYWdlQ29udGFpbmVyIFt3aWR0aF09XCJ3aWR0aFwiIFtoZWlnaHRdPVwiaGVpZ2h0XCJcclxuICAgICAgKHRhcCk9XCJvblRhcCgkZXZlbnQpXCIgKHBpbmNoaW4pPVwicHJvY2Vzc1RvdWNoRXZlbnQoJGV2ZW50KVwiIChwaW5jaG91dCk9XCJwcm9jZXNzVG91Y2hFdmVudCgkZXZlbnQpXCJcclxuICAgICAgKHBhbm1vdmUpPVwicHJvY2Vzc1RvdWNoRXZlbnQoJGV2ZW50KVwiIChwYW5lbmQpPVwib25Ub3VjaEVuZCgpXCIgKHJvdGF0ZW1vdmUpPVwicHJvY2Vzc1RvdWNoRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAgICAgKHJvdGF0ZWVuZCk9XCJvblRvdWNoRW5kKClcIj5cclxuICAgIDwvY2FudmFzPlxyXG4gIGAsXHJcbiAgc3R5bGVzOiBbYFxyXG4gICAgOmhvc3QgeyBkaXNwbGF5OiBibG9jayB9XHJcbiAgICA6aG9zdCBjYW52YXMgeyBtYXJnaW46IDAgYXV0bzsgZGlzcGxheTogYmxvY2sgfVxyXG4gICAgW2hpZGRlbl0geyBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQgfVxyXG4gIGBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gIC8vI3JlZ2lvbiBJbnB1dCBwcm9wZXJ0aWVzXHJcbiAgcHJpdmF0ZSBfc3JjOiBzdHJpbmcgfCBGaWxlO1xyXG4gIGdldCBzcmMoKSB7IHJldHVybiB0aGlzLl9zcmM7IH1cclxuICBASW5wdXQoJ3NyYycpIHNldCBzcmModmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fc3JjKSB7IHJldHVybjsgfVxyXG4gICAgdGhpcy5fc3JjID0gdmFsdWU7XHJcbiAgICB0aGlzLnNldFVwUmVzb3VyY2UoKTtcclxuICB9XHJcblxyXG4gIC8vIEZJWCBub3Qgd29ya2lnbiBwcm9wZXJseVxyXG4gIHByaXZhdGUgX2ZpbGV0eXBlOiBzdHJpbmc7XHJcbiAgZ2V0IGZpbGV0eXBlKCkgeyByZXR1cm4gdGhpcy5fZmlsZXR5cGU7IH1cclxuICBASW5wdXQoJ2ZpbGV0eXBlJykgc2V0IGZpbGV0eXBlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fZmlsZXR5cGUpIHsgcmV0dXJuOyB9XHJcbiAgICB0aGlzLl9maWxldHlwZSA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRVcFJlc291cmNlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuX3dpZHRoOyB9XHJcbiAgQElucHV0KCd3aWR0aCcpIHNldCB3aWR0aCh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlID09PSB0aGlzLl93aWR0aCkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuX3dpZHRoID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fY2FudmFzKSB7IHRoaXMuX2NhbnZhcy53aWR0aCA9IHRoaXMuX3dpZHRoOyB9XHJcbiAgICB0aGlzLnJlc2V0SW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLl9oZWlnaHQ7IH1cclxuICBASW5wdXQoJ2hlaWdodCcpIHNldCBoZWlnaHQodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5faGVpZ2h0KSB7IHJldHVybjsgfVxyXG4gICAgdGhpcy5faGVpZ2h0ID0gdmFsdWU7XHJcbiAgICBpZiAodGhpcy5fY2FudmFzKSB7IHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLl9oZWlnaHQ7IH1cclxuICAgIHRoaXMucmVzZXRJbWFnZSgpO1xyXG4gIH1cclxuXHJcbiAgQFZpZXdDaGlsZCgnaW1hZ2VDb250YWluZXInKSBjYW52YXNSZWY6IGFueTtcclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFByaXZhdGUgcHJvcGVydGllc1xyXG4gIC8vIENhbnZhcyAyRCBjb250ZXh0XHJcbiAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICBwcml2YXRlIF9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG4gIC8vIGRpcnR5IHN0YXRlXHJcbiAgcHJpdmF0ZSBfZGlydHkgPSB0cnVlO1xyXG5cclxuICAvLyBhY3Rpb24gYnV0dG9uc1xyXG4gIHByaXZhdGUgX25leHRQYWdlQnV0dG9uOiBCdXR0b247XHJcbiAgcHJpdmF0ZSBfYmVmb3JlUGFnZUJ1dHRvbjogQnV0dG9uO1xyXG4gIHByaXZhdGUgX3pvb21PdXRCdXR0b246IEJ1dHRvbjtcclxuICBwcml2YXRlIF96b29tSW5CdXR0b246IEJ1dHRvbjtcclxuICBwcml2YXRlIF9yb3RhdGVMZWZ0QnV0dG9uOiBCdXR0b247XHJcbiAgcHJpdmF0ZSBfcm90YXRlUmlnaHRCdXR0b246IEJ1dHRvbjtcclxuICBwcml2YXRlIF9yZXNldEJ1dHRvbjogQnV0dG9uO1xyXG5cclxuICAvLyBjb250YWlucyBhbGwgYWN0aXZlIGJ1dHRvbnNcclxuICBwcml2YXRlIF9idXR0b25zID0gW107XHJcblxyXG4gIC8vIGN1cnJlbnQgdG9vbCB0aXAgKHVzZWQgdG8gdHJhY2sgY2hhbmdlIG9mIHRvb2wgdGlwKVxyXG4gIHByaXZhdGUgX2N1cnJlbnRUb29sdGlwID0gbnVsbDtcclxuXHJcbiAgLy8gY2FjaGVkIGRhdGEgd2hlbiB0b3VjaCBldmVudHMgc3RhcnRlZFxyXG4gIHByaXZhdGUgX3RvdWNoU3RhcnRTdGF0ZTogYW55ID0ge307XHJcblxyXG4gIC8vIGxpc3Qgb2YgZXZlbnQgbGlzdGVuZXIgZGVzdHJveWVyc1xyXG4gIHByaXZhdGUgX2xpc3RlbkRlc3Ryb3lMaXN0ID0gW107XHJcblxyXG4gIC8vIGltYWdlIC8gUGRmIERyYXdhYmxlIFJlc291cmNlXHJcbiAgcHJpdmF0ZSBfcmVzb3VyY2U6IFJlc291cmNlTG9hZGVyO1xyXG4gIHByaXZhdGUgX3Jlc291cmNlQ2hhbmdlU3ViOiBTdWJzY3JpcHRpb247XHJcblxyXG4gIC8vIENhY2hpbmcgcmVzb3VyY2VMb2FkZXIgaW5zdGFuY2VzIHRvIHJldXNlXHJcbiAgcHJpdmF0ZSBfaW1hZ2VSZXNvdXJjZTogSW1hZ2VSZXNvdXJjZUxvYWRlcjtcclxuICBwcml2YXRlIF9wZGZSZXNvdXJjZTogUGRmUmVzb3VyY2VMb2FkZXI7XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gTGlmZWN5Y2xlIGV2ZW50c1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBfc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgcHJpdmF0ZSBfaW1hZ2VDYWNoZTogSW1hZ2VDYWNoZVNlcnZpY2UsXHJcbiAgICBASW5qZWN0KElNQUdFVklFV0VSX0NPTkZJRykgcHJpdmF0ZSBjb25maWc6IEltYWdlVmlld2VyQ29uZmlnXHJcbiAgKSB7XHJcbiAgICB0aGlzLmNvbmZpZyA9IHRoaXMuZXh0ZW5kc0RlZmF1bHRDb25maWcoY29uZmlnKTtcclxuICAgIHRoaXMuX25leHRQYWdlQnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLmNvbmZpZy5uZXh0UGFnZUJ1dHRvbiwgdGhpcy5jb25maWcuYnV0dG9uU3R5bGUpO1xyXG4gICAgdGhpcy5fYmVmb3JlUGFnZUJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcy5jb25maWcuYmVmb3JlUGFnZUJ1dHRvbiwgdGhpcy5jb25maWcuYnV0dG9uU3R5bGUpO1xyXG4gICAgdGhpcy5fem9vbU91dEJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcy5jb25maWcuem9vbU91dEJ1dHRvbiwgdGhpcy5jb25maWcuYnV0dG9uU3R5bGUpO1xyXG4gICAgdGhpcy5fem9vbUluQnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLmNvbmZpZy56b29tSW5CdXR0b24sIHRoaXMuY29uZmlnLmJ1dHRvblN0eWxlKTtcclxuICAgIHRoaXMuX3JvdGF0ZUxlZnRCdXR0b24gPSBuZXcgQnV0dG9uKHRoaXMuY29uZmlnLnJvdGF0ZUxlZnRCdXR0b24sIHRoaXMuY29uZmlnLmJ1dHRvblN0eWxlKTtcclxuICAgIHRoaXMuX3JvdGF0ZVJpZ2h0QnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLmNvbmZpZy5yb3RhdGVSaWdodEJ1dHRvbiwgdGhpcy5jb25maWcuYnV0dG9uU3R5bGUpO1xyXG4gICAgdGhpcy5fcmVzZXRCdXR0b24gPSBuZXcgQnV0dG9uKHRoaXMuY29uZmlnLnJlc2V0QnV0dG9uLCB0aGlzLmNvbmZpZy5idXR0b25TdHlsZSk7XHJcbiAgICB0aGlzLl9idXR0b25zID0gW1xyXG4gICAgICB0aGlzLl96b29tT3V0QnV0dG9uLFxyXG4gICAgICB0aGlzLl96b29tSW5CdXR0b24sXHJcbiAgICAgIHRoaXMuX3JvdGF0ZUxlZnRCdXR0b24sXHJcbiAgICAgIHRoaXMuX3JvdGF0ZVJpZ2h0QnV0dG9uLFxyXG4gICAgICB0aGlzLl9yZXNldEJ1dHRvblxyXG4gICAgXS5maWx0ZXIoaXRlbSA9PiBpdGVtLmRpc3BsYXkpXHJcbiAgICAgIC5zb3J0KChhLCBiKSA9PiBhLnNvcnRJZCAtIGIuc29ydElkKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIHRoaXMuX2NhbnZhcyA9IHRoaXMuY2FudmFzUmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLl9jb250ZXh0ID0gdGhpcy5fY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgLy8gc2V0dGluZyBjYW52YXMgZGltZW50aW9uXHJcbiAgICB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLndpZHRoIHx8IHRoaXMuY29uZmlnLndpZHRoO1xyXG4gICAgdGhpcy5fY2FudmFzLmhlaWdodCA9IHRoaXMuaGVpZ2h0IHx8IHRoaXMuY29uZmlnLmhlaWdodDtcclxuXHJcbiAgICAvLyBzZXR0aW5nIGJ1dHRvbnMgYWN0aW9uc1xyXG4gICAgdGhpcy5fbmV4dFBhZ2VCdXR0b24ub25DbGljayA9IChldnQpID0+IHsgdGhpcy5uZXh0UGFnZSgpOyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICB0aGlzLl9iZWZvcmVQYWdlQnV0dG9uLm9uQ2xpY2sgPSAoZXZ0KSA9PiB7IHRoaXMucHJldmlvdXNQYWdlKCk7IHJldHVybiBmYWxzZTsgfTtcclxuICAgIHRoaXMuX3pvb21PdXRCdXR0b24ub25DbGljayA9IChldnQpID0+IHsgdGhpcy56b29tT3V0KCk7IHJldHVybiBmYWxzZTsgfTtcclxuICAgIHRoaXMuX3pvb21JbkJ1dHRvbi5vbkNsaWNrID0gKGV2dCkgPT4geyB0aGlzLnpvb21JbigpOyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICB0aGlzLl9yb3RhdGVMZWZ0QnV0dG9uLm9uQ2xpY2sgPSAoZXZ0KSA9PiB7IHRoaXMucm90YXRlTGVmdCgpOyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICB0aGlzLl9yb3RhdGVSaWdodEJ1dHRvbi5vbkNsaWNrID0gKGV2dCkgPT4geyB0aGlzLnJvdGF0ZVJpZ2h0KCk7IHJldHVybiBmYWxzZTsgfTtcclxuICAgIHRoaXMuX3Jlc2V0QnV0dG9uLm9uQ2xpY2sgPSAoZXZ0KSA9PiB7IHRoaXMucmVzZXRJbWFnZSgpOyByZXR1cm4gZmFsc2U7IH07XHJcblxyXG4gICAgLy8gcmVnaXN0ZXIgZXZlbnQgbGlzdGVuZXJzXHJcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgdGhpcy51cGRhdGVDYW52YXMoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gdW5yZWdpc3RlIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5fbGlzdGVuRGVzdHJveUxpc3QuZm9yRWFjaChsaXN0ZW5EZXN0cm95ID0+IHtcclxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5EZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgbGlzdGVuRGVzdHJveSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMuX2ltYWdlQ2FjaGUuZGlzcG9zZUNhY2hlKCk7XHJcbiAgfVxyXG5cclxuICBzZXRVcFJlc291cmNlKCkge1xyXG4gICAgaWYgKHRoaXMuaXNJbWFnZSh0aGlzLnNyYykgJiYgKCF0aGlzLl9yZXNvdXJjZSB8fCAhKHRoaXMuX3Jlc291cmNlIGluc3RhbmNlb2YgSW1hZ2VSZXNvdXJjZUxvYWRlcikpKSB7XHJcbiAgICAgIGlmICh0aGlzLl9yZXNvdXJjZUNoYW5nZVN1Yikge1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLl9pbWFnZVJlc291cmNlKSB7XHJcbiAgICAgICAgdGhpcy5faW1hZ2VSZXNvdXJjZSA9IG5ldyBJbWFnZVJlc291cmNlTG9hZGVyKCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5fcmVzb3VyY2UgPSB0aGlzLl9pbWFnZVJlc291cmNlO1xyXG4gICAgfSBlbHNlIGlmICh0aGlzLmlzUGRmKHRoaXMuc3JjKSAmJiAoIXRoaXMuX3Jlc291cmNlIHx8ICEodGhpcy5fcmVzb3VyY2UgaW5zdGFuY2VvZiBQZGZSZXNvdXJjZUxvYWRlcikpKSB7XHJcbiAgICAgIGlmICh0aGlzLl9yZXNvdXJjZUNoYW5nZVN1Yikge1xyXG4gICAgICAgIHRoaXMuX3Jlc291cmNlQ2hhbmdlU3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCF0aGlzLl9wZGZSZXNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuX3BkZlJlc291cmNlID0gbmV3IFBkZlJlc291cmNlTG9hZGVyKHRoaXMuX2ltYWdlQ2FjaGUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3Jlc291cmNlID0gdGhpcy5fcGRmUmVzb3VyY2U7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5fcmVzb3VyY2UpIHtcclxuICAgICAgdGhpcy5fcmVzb3VyY2Uuc3JjID0gdGhpcy5zcmMgaW5zdGFuY2VvZiBGaWxlID8gVVJMLmNyZWF0ZU9iamVjdFVSTCh0aGlzLnNyYykgOiB0aGlzLnNyYztcclxuICAgICAgdGhpcy5fcmVzb3VyY2VDaGFuZ2VTdWIgPSB0aGlzLl9yZXNvdXJjZS5vblJlc291cmNlQ2hhbmdlKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNhbnZhcygpO1xyXG4gICAgICAgIGlmICh0aGlzLnNyYyBpbnN0YW5jZW9mIEZpbGUpIHtcclxuICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwodGhpcy5fcmVzb3VyY2Uuc3JjKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLl9yZXNvdXJjZS5zZXRVcCgpO1xyXG4gICAgICB0aGlzLnJlc2V0SW1hZ2UoKTtcclxuICAgICAgaWYgKHRoaXMuX2NvbnRleHQpIHsgdGhpcy51cGRhdGVDYW52YXMoKTsgfVxyXG4gICAgfVxyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFRvdWNoIGV2ZW50c1xyXG4gIG9uVGFwKGV2dCkge1xyXG4gICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuZ2V0VUlFbGVtZW50KHRoaXMuc2NyZWVuVG9DYW52YXNDZW50cmUoZXZ0LmNlbnRlcikpO1xyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IG51bGwpIHsgYWN0aXZlRWxlbWVudC5vbkNsaWNrKGV2dCk7IH1cclxuICB9XHJcblxyXG4gIG9uVG91Y2hFbmQoKSB7XHJcbiAgICB0aGlzLl90b3VjaFN0YXJ0U3RhdGUudmlld3BvcnQgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl90b3VjaFN0YXJ0U3RhdGUuc2NhbGUgPSB1bmRlZmluZWQ7XHJcbiAgICB0aGlzLl90b3VjaFN0YXJ0U3RhdGUucm90YXRlID0gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc1RvdWNoRXZlbnQoZXZ0KSB7XHJcbiAgICAvLyBwcm9jZXNzIHBhblxyXG4gICAgaWYgKCF0aGlzLl90b3VjaFN0YXJ0U3RhdGUudmlld3BvcnQpIHsgdGhpcy5fdG91Y2hTdGFydFN0YXRlLnZpZXdwb3J0ID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5fcmVzb3VyY2Uudmlld3BvcnQpOyB9XHJcblxyXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydDtcclxuICAgIHZpZXdwb3J0LnggPSB0aGlzLl90b3VjaFN0YXJ0U3RhdGUudmlld3BvcnQueCArIGV2dC5kZWx0YVg7XHJcbiAgICB2aWV3cG9ydC55ID0gdGhpcy5fdG91Y2hTdGFydFN0YXRlLnZpZXdwb3J0LnkgKyBldnQuZGVsdGFZO1xyXG5cclxuICAgIC8vIHByb2Nlc3MgcGluY2ggaW4vb3V0XHJcbiAgICBpZiAoIXRoaXMuX3RvdWNoU3RhcnRTdGF0ZS5zY2FsZSkgeyB0aGlzLl90b3VjaFN0YXJ0U3RhdGUuc2NhbGUgPSB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydC5zY2FsZTsgfVxyXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLl90b3VjaFN0YXJ0U3RhdGUuc2NhbGUgKiBldnQuc2NhbGU7XHJcbiAgICB2aWV3cG9ydC5zY2FsZSA9IG5ld1NjYWxlID4gdGhpcy5fcmVzb3VyY2UubWF4U2NhbGUgPyB0aGlzLl9yZXNvdXJjZS5tYXhTY2FsZSA6XHJcbiAgICAgIG5ld1NjYWxlIDwgdGhpcy5fcmVzb3VyY2UubWluU2NhbGUgPyB0aGlzLl9yZXNvdXJjZS5taW5TY2FsZSA6IG5ld1NjYWxlO1xyXG5cclxuICAgIC8vIHByb2Nlc3Mgcm90YXRlIGxlZnQvcmlnaHRcclxuICAgIGlmICghdGhpcy5fdG91Y2hTdGFydFN0YXRlLnJvdGF0ZSkgeyB0aGlzLl90b3VjaFN0YXJ0U3RhdGUucm90YXRlID0geyByb3RhdGlvbjogdmlld3BvcnQucm90YXRpb24sIHN0YXJ0Um90YXRlOiBldnQucm90YXRpb24gfTsgfVxyXG4gICAgaWYgKGV2dC5yb3RhdGlvbiAhPT0gMCkge1xyXG4gICAgICBjb25zdCBuZXdBbmdsZSA9IHRoaXMuX3RvdWNoU3RhcnRTdGF0ZS5yb3RhdGUucm90YXRpb24gKyBldnQucm90YXRpb24gLSB0aGlzLl90b3VjaFN0YXJ0U3RhdGUucm90YXRlLnN0YXJ0Um90YXRlO1xyXG4gICAgICB2aWV3cG9ydC5yb3RhdGlvbiA9IHRoaXMuY29uZmlnLnJvdGF0ZVN0ZXBwZXIgPyB0b1NxdWFyZUFuZ2xlKG5ld0FuZ2xlKSA6IG5ld0FuZ2xlO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIE1vdXNlIEV2ZW50c1xyXG4gIHByaXZhdGUgYWRkRXZlbnRMaXN0ZW5lcnMoKSB7XHJcbiAgICAvLyB6b29taW5nXHJcbiAgICB0aGlzLl9saXN0ZW5EZXN0cm95TGlzdC5wdXNoKHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9jYW52YXMsICdET01Nb3VzZVNjcm9sbCcsIChldnQpID0+IHRoaXMub25Nb3VzZVdoZWVsKGV2dCkpKTtcclxuICAgIHRoaXMuX2xpc3RlbkRlc3Ryb3lMaXN0LnB1c2godGhpcy5fcmVuZGVyZXIubGlzdGVuKHRoaXMuX2NhbnZhcywgJ21vdXNld2hlZWwnLCAoZXZ0KSA9PiB0aGlzLm9uTW91c2VXaGVlbChldnQpKSk7XHJcblxyXG4gICAgLy8gc2hvdyB0b29sdGlwIHdoZW4gbW91c2VvdmVyIGl0XHJcbiAgICB0aGlzLl9saXN0ZW5EZXN0cm95TGlzdC5wdXNoKHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9jYW52YXMsICdtb3VzZW1vdmUnLCAoZXZ0KSA9PlxyXG4gICAgICB0aGlzLmNoZWNrVG9vbHRpcEFjdGl2YXRpb24odGhpcy5zY3JlZW5Ub0NhbnZhc0NlbnRyZSh7IHg6IGV2dC5jbGllbnRYLCB5OiBldnQuY2xpZW50WSB9KSlcclxuICAgICkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbk1vdXNlV2hlZWwoZXZ0KSB7XHJcbiAgICBpZiAoIWV2dCkgeyBldnQgPSBldmVudDsgfVxyXG4gICAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZXZ0LmRldGFpbCA8IDAgfHwgZXZ0LndoZWVsRGVsdGEgPiAwKSB7IC8vIHVwIC0+IGxhcmdlclxyXG4gICAgICB0aGlzLnpvb21JbigpO1xyXG4gICAgfSBlbHNlIHsgLy8gZG93biAtPiBzbWFsbGVyXHJcbiAgICAgIHRoaXMuem9vbU91dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja1Rvb2x0aXBBY3RpdmF0aW9uKHBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSB7XHJcbiAgICB0aGlzLmdldFVJRWxlbWVudHMoKS5mb3JFYWNoKHggPT4geC5ob3ZlciA9IGZhbHNlKTtcclxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLmdldFVJRWxlbWVudChwb3MpO1xyXG4gICAgY29uc3Qgb2xkVG9vbFRpcCA9IHRoaXMuX2N1cnJlbnRUb29sdGlwO1xyXG4gICAgaWYgKGFjdGl2ZUVsZW1lbnQgIT09IG51bGwpIHtcclxuICAgICAgaWYgKHR5cGVvZiBhY3RpdmVFbGVtZW50LmhvdmVyICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIGFjdGl2ZUVsZW1lbnQuaG92ZXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0eXBlb2YgYWN0aXZlRWxlbWVudC50b29sdGlwICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgIHRoaXMuX2N1cnJlbnRUb29sdGlwID0gYWN0aXZlRWxlbWVudC50b29sdGlwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAob2xkVG9vbFRpcCAhPT0gdGhpcy5fY3VycmVudFRvb2x0aXApIHsgdGhpcy5fZGlydHkgPSB0cnVlOyB9XHJcbiAgfVxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gQnV0dG9uIEFjdGlvbnNcclxuXHJcbiAgcHJpdmF0ZSBuZXh0UGFnZSgpIHtcclxuICAgIGlmICghdGhpcy5fcmVzb3VyY2UpIHsgcmV0dXJuOyB9XHJcbiAgICBpZiAodGhpcy5fcmVzb3VyY2UuY3VycmVudEl0ZW0gPj0gdGhpcy5fcmVzb3VyY2UudG90YWxJdGVtKSB7IHJldHVybjsgfVxyXG4gICAgaWYgKHRoaXMuX3Jlc291cmNlLmN1cnJlbnRJdGVtIDwgMSkgeyB0aGlzLl9yZXNvdXJjZS5jdXJyZW50SXRlbSA9IDA7IH1cclxuICAgIHRoaXMuX3Jlc291cmNlLmN1cnJlbnRJdGVtKys7XHJcbiAgICB0aGlzLl9yZXNvdXJjZS5sb2FkUmVzb3VyY2UoKTtcclxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcHJldmlvdXNQYWdlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9yZXNvdXJjZSkgeyByZXR1cm47IH1cclxuICAgIGlmICh0aGlzLl9yZXNvdXJjZS5jdXJyZW50SXRlbSA8PSAxKSB7IHJldHVybjsgfVxyXG4gICAgaWYgKHRoaXMuX3Jlc291cmNlLmN1cnJlbnRJdGVtID4gdGhpcy5fcmVzb3VyY2UudG90YWxJdGVtKSB7IHRoaXMuX3Jlc291cmNlLmN1cnJlbnRJdGVtID0gdGhpcy5fcmVzb3VyY2UudG90YWxJdGVtICsgMTsgfVxyXG4gICAgdGhpcy5fcmVzb3VyY2UuY3VycmVudEl0ZW0tLTtcclxuICAgIHRoaXMuX3Jlc291cmNlLmxvYWRSZXNvdXJjZSgpO1xyXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB6b29tSW4oKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Jlc291cmNlKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydC5zY2FsZSAqICgxICsgdGhpcy5jb25maWcuc2NhbGVTdGVwKTtcclxuICAgIHRoaXMuX3Jlc291cmNlLnZpZXdwb3J0LnNjYWxlID0gbmV3U2NhbGUgPiB0aGlzLl9yZXNvdXJjZS5tYXhTY2FsZSA/IHRoaXMuX3Jlc291cmNlLm1heFNjYWxlIDogbmV3U2NhbGU7XHJcbiAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHpvb21PdXQoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Jlc291cmNlKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3QgbmV3U2NhbGUgPSB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydC5zY2FsZSAqICgxIC0gdGhpcy5jb25maWcuc2NhbGVTdGVwKTtcclxuICAgIHRoaXMuX3Jlc291cmNlLnZpZXdwb3J0LnNjYWxlID0gbmV3U2NhbGUgPCB0aGlzLl9yZXNvdXJjZS5taW5TY2FsZSA/IHRoaXMuX3Jlc291cmNlLm1pblNjYWxlIDogbmV3U2NhbGU7XHJcbiAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJvdGF0ZUxlZnQoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Jlc291cmNlKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydDtcclxuICAgIHZpZXdwb3J0LnJvdGF0aW9uID0gdmlld3BvcnQucm90YXRpb24gPT09IDAgPyAyNzAgOiB2aWV3cG9ydC5yb3RhdGlvbiAtIDkwO1xyXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb3RhdGVSaWdodCgpIHtcclxuICAgIGlmICghdGhpcy5fcmVzb3VyY2UpIHsgcmV0dXJuOyB9XHJcbiAgICBjb25zdCB2aWV3cG9ydCA9IHRoaXMuX3Jlc291cmNlLnZpZXdwb3J0O1xyXG4gICAgdmlld3BvcnQucm90YXRpb24gPSB2aWV3cG9ydC5yb3RhdGlvbiA9PT0gMjcwID8gMCA6IHZpZXdwb3J0LnJvdGF0aW9uICsgOTA7XHJcbiAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlc2V0SW1hZ2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Jlc291cmNlKSB7IHJldHVybjsgfVxyXG4gICAgdGhpcy5fcmVzb3VyY2UucmVzZXRWaWV3cG9ydCh0aGlzLl9jYW52YXMpO1xyXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIERyYXcgQ2FudmFzXHJcbiAgcHJpdmF0ZSB1cGRhdGVDYW52YXMoKSB7XHJcbiAgICB0aGlzLnJlc2V0SW1hZ2UoKTtcclxuXHJcbiAgICAvLyBzdGFydCBuZXcgcmVuZGVyIGxvb3BcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgIGNvbnN0IHZtID0gdGhpcztcclxuICAgIC8vIG9ubHkgcmUtcmVuZGVyIGlmIGRpcnR5XHJcbiAgICBpZiAodGhpcy5fZGlydHkgJiYgdGhpcy5fcmVzb3VyY2UpIHtcclxuICAgICAgdGhpcy5fZGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICAgIGNvbnN0IGN0eCA9IHRoaXMuX2NvbnRleHQ7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcblxyXG4gICAgICB0aGlzLl9yZXNvdXJjZS5kcmF3KGN0eCwgdGhpcy5jb25maWcsIHRoaXMuX2NhbnZhcywgKCkgPT4ge1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIGlmICh2bS5fcmVzb3VyY2UubG9hZGVkKSB7XHJcbiAgICAgICAgICAvLyBkcmF3IGJ1dHRvbnNcclxuICAgICAgICAgIHRoaXMuZHJhd0J1dHRvbnMoY3R4KTtcclxuXHJcbiAgICAgICAgICAvLyBkcmF3IHBhZ2luYXRvclxyXG4gICAgICAgICAgaWYgKHRoaXMuX3Jlc291cmNlLnNob3dJdGVtc1F1YW50aXR5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1BhZ2luYXRvcihjdHgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5yZW5kZXIoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdCdXR0b25zKGN0eCkge1xyXG4gICAgY29uc3QgcGFkZGluZyA9IHRoaXMuY29uZmlnLnRvb2x0aXBzLnBhZGRpbmc7XHJcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLmNvbmZpZy50b29sdGlwcy5yYWRpdXM7XHJcbiAgICBjb25zdCBnYXAgPSAyICogcmFkaXVzICsgcGFkZGluZztcclxuICAgIGNvbnN0IHggPSB0aGlzLl9jYW52YXMud2lkdGggLSByYWRpdXMgLSBwYWRkaW5nO1xyXG4gICAgY29uc3QgeSA9IHRoaXMuX2NhbnZhcy5oZWlnaHQgLSByYWRpdXMgLSBwYWRkaW5nO1xyXG5cclxuICAgIC8vIGRyYXcgYnV0dG9uc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9idXR0b25zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIHRoaXMuX2J1dHRvbnNbaV0uZHJhdyhjdHgsIHgsIHkgLSBnYXAgKiBpLCByYWRpdXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdG9vbHRpcFxyXG4gICAgaWYgKHRoaXMuX2N1cnJlbnRUb29sdGlwICE9PSBudWxsICYmIHRoaXMuX2NhbnZhcy53aWR0aCA+IE1JTl9UT09MVElQX1dJRFRIX1NQQUNFKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIGNvbnN0IGZvbnRTaXplID0gcmFkaXVzO1xyXG4gICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgJ3B4IHNhbnMtc2VyaWYnO1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRlIHBvc2l0aW9uXHJcbiAgICAgIGNvbnN0IHRleHRTaXplID0gY3R4Lm1lYXN1cmVUZXh0KHRoaXMuX2N1cnJlbnRUb29sdGlwKS53aWR0aFxyXG4gICAgICAgICwgcmVjdFdpZHRoID0gdGV4dFNpemUgKyBwYWRkaW5nXHJcbiAgICAgICAgLCByZWN0SGVpZ2h0ID0gZm9udFNpemUgKiAwLjcwICsgcGFkZGluZ1xyXG4gICAgICAgICwgcmVjdFggPSB0aGlzLl9jYW52YXMud2lkdGhcclxuICAgICAgICAgIC0gKDIgKiByYWRpdXMgKyAyICogcGFkZGluZykgLy8gYnV0dG9uc1xyXG4gICAgICAgICAgLSByZWN0V2lkdGhcclxuICAgICAgICAsIHJlY3RZID0gdGhpcy5fY2FudmFzLmhlaWdodCAtIHJlY3RIZWlnaHQgLSBwYWRkaW5nXHJcbiAgICAgICAgLCB0ZXh0WCA9IHJlY3RYICsgMC41ICogcGFkZGluZ1xyXG4gICAgICAgICwgdGV4dFkgPSB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gMS41ICogcGFkZGluZztcclxuXHJcbiAgICAgIGN0eC5nbG9iYWxBbHBoYSA9IHRoaXMuY29uZmlnLnRvb2x0aXBzLmJnQWxwaGE7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbmZpZy50b29sdGlwcy5iZ1N0eWxlO1xyXG4gICAgICB0aGlzLmRyYXdSb3VuZFJlY3RhbmdsZShjdHgsIHJlY3RYLCByZWN0WSwgcmVjdFdpZHRoLCByZWN0SGVpZ2h0LCA4LCB0cnVlLCBmYWxzZSk7XHJcblxyXG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmNvbmZpZy50b29sdGlwcy50ZXh0QWxwaGE7XHJcbiAgICAgIGN0eC5maWxsU3R5bGUgPSB0aGlzLmNvbmZpZy50b29sdGlwcy50ZXh0U3R5bGU7XHJcbiAgICAgIGN0eC5maWxsVGV4dCh0aGlzLl9jdXJyZW50VG9vbHRpcCwgdGV4dFgsIHRleHRZKTtcclxuXHJcbiAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdQYWdpbmF0b3IoY3R4KSB7XHJcbiAgICBjb25zdCBwYWRkaW5nID0gdGhpcy5jb25maWcudG9vbHRpcHMucGFkZGluZztcclxuICAgIGNvbnN0IHJhZGl1cyA9IHRoaXMuY29uZmlnLnRvb2x0aXBzLnJhZGl1cztcclxuICAgIGNvbnN0IGxhYmVsV2lkdGggPSA1MDtcclxuICAgIGNvbnN0IHgxID0gKHRoaXMuX2NhbnZhcy53aWR0aCAtIGxhYmVsV2lkdGgpIC8gMiAtIHJhZGl1cyAtIHBhZGRpbmc7IC8vIFByZXZQYWdlQnV0dG9uXHJcbiAgICBjb25zdCB4MiA9IHRoaXMuX2NhbnZhcy53aWR0aCAvIDI7IC8vIExhYmVsXHJcbiAgICBjb25zdCB4MyA9ICh0aGlzLl9jYW52YXMud2lkdGggKyBsYWJlbFdpZHRoKSAvIDIgKyByYWRpdXMgKyBwYWRkaW5nOyAvLyBOZXh0UGFnZUJ1dHRvblxyXG4gICAgY29uc3QgeSA9IHRoaXMuX2NhbnZhcy5oZWlnaHQgLSByYWRpdXMgLSBwYWRkaW5nO1xyXG4gICAgY29uc3QgbGFiZWwgPSB0aGlzLl9yZXNvdXJjZS5jdXJyZW50SXRlbSArICcvJyArIHRoaXMuX3Jlc291cmNlLnRvdGFsSXRlbTtcclxuICAgIGNvbnN0IGZvbnRTaXplID0gMjU7XHJcblxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIHRoaXMuX2JlZm9yZVBhZ2VCdXR0b24uZHJhdyhjdHgsIHgxLCB5LCByYWRpdXMpO1xyXG4gICAgdGhpcy5fbmV4dFBhZ2VCdXR0b24uZHJhdyhjdHgsIHgzLCB5LCByYWRpdXMpO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZvbnQgPSBmb250U2l6ZSArICdweCBWZXJkYW5hJztcclxuICAgIGN0eC50ZXh0QWxpZ24gPSAnY2VudGVyJztcclxuICAgIGN0eC5maWxsVGV4dChsYWJlbCwgeDIsIHRoaXMuX2NhbnZhcy5oZWlnaHQgLSBwYWRkaW5nIC0gZm9udFNpemUgLyAyLCBsYWJlbFdpZHRoKTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGRyYXdSb3VuZFJlY3RhbmdsZShjdHgsIHgsIHksIHdpZHRoLCBoZWlnaHQsIHJhZGl1cywgZmlsbCwgc3Ryb2tlKSB7XHJcbiAgICByYWRpdXMgPSAodHlwZW9mIHJhZGl1cyA9PT0gJ251bWJlcicpID8gcmFkaXVzIDogNTtcclxuICAgIGZpbGwgPSAodHlwZW9mIGZpbGwgPT09ICdib29sZWFuJykgPyBmaWxsIDogdHJ1ZTsgLy8gZmlsbCA9IGRlZmF1bHRcclxuICAgIHN0cm9rZSA9ICh0eXBlb2Ygc3Ryb2tlID09PSAnYm9vbGVhbicpID8gc3Ryb2tlIDogZmFsc2U7XHJcblxyXG4gICAgLy8gZHJhdyByb3VuZCByZWN0YW5nbGVcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5tb3ZlVG8oeCArIHJhZGl1cywgeSk7XHJcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCAtIHJhZGl1cywgeSk7XHJcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHksIHggKyB3aWR0aCwgeSArIHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHggKyB3aWR0aCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XHJcbiAgICBjdHgucXVhZHJhdGljQ3VydmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQsIHggKyB3aWR0aCAtIHJhZGl1cywgeSArIGhlaWdodCk7XHJcbiAgICBjdHgubGluZVRvKHggKyByYWRpdXMsIHkgKyBoZWlnaHQpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSArIGhlaWdodCwgeCwgeSArIGhlaWdodCAtIHJhZGl1cyk7XHJcbiAgICBjdHgubGluZVRvKHgsIHkgKyByYWRpdXMpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCwgeSwgeCArIHJhZGl1cywgeSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcblxyXG4gICAgaWYgKGZpbGwpIHsgY3R4LmZpbGwoKTsgfVxyXG4gICAgaWYgKHN0cm9rZSkgeyBjdHguc3Ryb2tlKCk7IH1cclxuICB9XHJcblxyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gVXRpbHNcclxuXHJcbiAgcHJpdmF0ZSBleHRlbmRzRGVmYXVsdENvbmZpZyhjZmc6IEltYWdlVmlld2VyQ29uZmlnKSB7XHJcbiAgICBjb25zdCBkZWZhdWx0Q2ZnID0gSU1BR0VWSUVXRVJfQ09ORklHX0RFRkFVTFQ7XHJcbiAgICBjb25zdCBsb2NhbENmZyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRDZmcsIGNmZyk7XHJcbiAgICBpZiAoY2ZnLmJ1dHRvblN0eWxlKSB7IGxvY2FsQ2ZnLmJ1dHRvblN0eWxlID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLmJ1dHRvblN0eWxlLCBjZmcuYnV0dG9uU3R5bGUpOyB9XHJcbiAgICBpZiAoY2ZnLnRvb2x0aXBzKSB7IGxvY2FsQ2ZnLnRvb2x0aXBzID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLnRvb2x0aXBzLCBjZmcudG9vbHRpcHMpOyB9XHJcbiAgICBpZiAoY2ZnLm5leHRQYWdlQnV0dG9uKSB7IGxvY2FsQ2ZnLm5leHRQYWdlQnV0dG9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLm5leHRQYWdlQnV0dG9uLCBjZmcubmV4dFBhZ2VCdXR0b24pOyB9XHJcbiAgICBpZiAoY2ZnLmJlZm9yZVBhZ2VCdXR0b24pIHsgbG9jYWxDZmcuYmVmb3JlUGFnZUJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENmZy5iZWZvcmVQYWdlQnV0dG9uLCBjZmcuYmVmb3JlUGFnZUJ1dHRvbik7IH1cclxuICAgIGlmIChjZmcuem9vbU91dEJ1dHRvbikgeyBsb2NhbENmZy56b29tT3V0QnV0dG9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLnpvb21PdXRCdXR0b24sIGNmZy56b29tT3V0QnV0dG9uKTsgfVxyXG4gICAgaWYgKGNmZy56b29tT3V0QnV0dG9uKSB7IGxvY2FsQ2ZnLnpvb21PdXRCdXR0b24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDZmcuem9vbU91dEJ1dHRvbiwgY2ZnLnpvb21PdXRCdXR0b24pOyB9XHJcbiAgICBpZiAoY2ZnLnpvb21JbkJ1dHRvbikgeyBsb2NhbENmZy56b29tSW5CdXR0b24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDZmcuem9vbUluQnV0dG9uLCBjZmcuem9vbUluQnV0dG9uKTsgfVxyXG4gICAgaWYgKGNmZy5yb3RhdGVMZWZ0QnV0dG9uKSB7IGxvY2FsQ2ZnLnJvdGF0ZUxlZnRCdXR0b24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDZmcucm90YXRlTGVmdEJ1dHRvbiwgY2ZnLnJvdGF0ZUxlZnRCdXR0b24pOyB9XHJcbiAgICBpZiAoY2ZnLnJvdGF0ZVJpZ2h0QnV0dG9uKSB7IGxvY2FsQ2ZnLnJvdGF0ZVJpZ2h0QnV0dG9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLnJvdGF0ZVJpZ2h0QnV0dG9uLCBjZmcucm90YXRlUmlnaHRCdXR0b24pOyB9XHJcbiAgICBpZiAoY2ZnLnJlc2V0QnV0dG9uKSB7IGxvY2FsQ2ZnLnJlc2V0QnV0dG9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLnJlc2V0QnV0dG9uLCBjZmcucmVzZXRCdXR0b24pOyB9XHJcbiAgICByZXR1cm4gbG9jYWxDZmc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNjcmVlblRvQ2FudmFzQ2VudHJlKHBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCByZWN0ID0gdGhpcy5fY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgcmV0dXJuIHsgeDogcG9zLnggLSByZWN0LmxlZnQsIHk6IHBvcy55IC0gcmVjdC50b3AgfTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VUlFbGVtZW50cygpOiBCdXR0b25bXSB7XHJcbiAgICBjb25zdCBob3ZlckVsZW1lbnRzID0gdGhpcy5fYnV0dG9ucy5zbGljZSgpO1xyXG4gICAgaG92ZXJFbGVtZW50cy5wdXNoKHRoaXMuX25leHRQYWdlQnV0dG9uKTtcclxuICAgIGhvdmVyRWxlbWVudHMucHVzaCh0aGlzLl9iZWZvcmVQYWdlQnV0dG9uKTtcclxuICAgIHJldHVybiBob3ZlckVsZW1lbnRzO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRVSUVsZW1lbnQocG9zOiB7IHg6IG51bWJlciwgeTogbnVtYmVyIH0pIHtcclxuICAgIGNvbnN0IGFjdGl2ZVVJRWxlbWVudCA9IHRoaXMuZ2V0VUlFbGVtZW50cygpLmZpbHRlcigodWlFbGVtZW50KSA9PiB7XHJcbiAgICAgIHJldHVybiB1aUVsZW1lbnQuaXNXaXRoaW5Cb3VuZHMocG9zLngsIHBvcy55KTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIChhY3RpdmVVSUVsZW1lbnQubGVuZ3RoID4gMCkgPyBhY3RpdmVVSUVsZW1lbnRbMF0gOiBudWxsO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc0ltYWdlKGZpbGU6IHN0cmluZyB8IEZpbGUpIHtcclxuICAgIGlmICh0aGlzLl9maWxldHlwZSAmJiB0aGlzLl9maWxldHlwZS50b0xvd2VyQ2FzZSgpID09PSAnaW1hZ2UnKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICByZXR1cm4gdGVzdEZpbGUoZmlsZSwgJ1xcXFwuKHBuZ3xqcGd8anBlZ3xnaWYpfGltYWdlL3BuZycpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBpc1BkZihmaWxlOiBzdHJpbmcgfCBGaWxlKSB7XHJcbiAgICBpZiAodGhpcy5fZmlsZXR5cGUgJiYgdGhpcy5fZmlsZXR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ3BkZicpIHsgcmV0dXJuIHRydWU7IH1cclxuICAgIHJldHVybiB0ZXN0RmlsZShmaWxlLCAnXFxcXC4ocGRmKXxhcHBsaWNhdGlvbi9wZGYnKTtcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRlc3RGaWxlKGZpbGU6IHN0cmluZyB8IEZpbGUsIHJlZ2V4VGVzdDogc3RyaW5nKSB7XHJcbiAgaWYgKCFmaWxlKSB7IHJldHVybiBmYWxzZTsgfVxyXG4gIGNvbnN0IG5hbWUgPSBmaWxlIGluc3RhbmNlb2YgRmlsZSA/IGZpbGUubmFtZSA6IGZpbGU7XHJcbiAgcmV0dXJuIG5hbWUudG9Mb3dlckNhc2UoKS5tYXRjaChyZWdleFRlc3QpICE9PSBudWxsO1xyXG59XHJcbiIsImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEltYWdlVmlld2VyQ29tcG9uZW50IH0gZnJvbSAnLi9pbWFnZXZpZXdlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBJTUFHRVZJRVdFUl9DT05GSUcsIElNQUdFVklFV0VSX0NPTkZJR19ERUZBVUxUIH0gZnJvbSAnLi9pbWFnZXZpZXdlci5jb25maWcnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBwcm92aWRlcnM6IFt7IHByb3ZpZGU6IElNQUdFVklFV0VSX0NPTkZJRywgdXNlVmFsdWU6IElNQUdFVklFV0VSX0NPTkZJR19ERUZBVUxUIH1dLFxyXG4gIGRlY2xhcmF0aW9uczogW0ltYWdlVmlld2VyQ29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbSW1hZ2VWaWV3ZXJDb21wb25lbnRdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJNb2R1bGUgeyB9XHJcbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0NBMEJDOzs7Ozs7OztBQW1CRCw0QkFBbUMsSUFBYSxFQUFFLE9BQWdCLEVBQUUsU0FBaUIsQ0FBQyxFQUFFLE9BQWdCLElBQUk7SUFDMUcsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsQ0FBQztDQUNyRTtBQUVELHVCQUFhLGtCQUFrQixHQUFHLElBQUksY0FBYyxDQUFvQixvQkFBb0IsQ0FBQyxDQUFDO0FBRTlGLHFCQUFXLDBCQUEwQixHQUFzQjtJQUN6RCxLQUFLLEVBQUUsR0FBRzs7SUFDVixNQUFNLEVBQUUsR0FBRzs7SUFDWCxPQUFPLEVBQUUsU0FBUzs7SUFDbEIsU0FBUyxFQUFFLEdBQUc7O0lBQ2QsYUFBYSxFQUFFLEtBQUs7SUFDcEIsY0FBYyxFQUFFLFlBQVk7SUFDNUIsV0FBVyxFQUFFO1FBQ1gsY0FBYyxFQUFFLGdCQUFnQjs7UUFDaEMsS0FBSyxFQUFFLEdBQUc7O1FBQ1YsVUFBVSxFQUFFLEdBQUc7O1FBQ2YsT0FBTyxFQUFFLFNBQVM7O1FBQ2xCLFNBQVMsRUFBRSxTQUFTOztRQUNwQixXQUFXLEVBQUUsU0FBUzs7UUFDdEIsV0FBVyxFQUFFLENBQUM7S0FDZjtJQUNELFFBQVEsRUFBRTtRQUNSLE9BQU8sRUFBRSxJQUFJOztRQUNiLE9BQU8sRUFBRSxTQUFTOztRQUNsQixPQUFPLEVBQUUsR0FBRzs7UUFDWixTQUFTLEVBQUUsU0FBUzs7UUFDcEIsU0FBUyxFQUFFLEdBQUc7O1FBQ2QsT0FBTyxFQUFFLEVBQUU7O1FBQ1gsTUFBTSxFQUFFLEVB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QUcsU0FBUyxDQUFDLEtBQUs7U0FDdkQsQ0FBQztRQUVGLElBQUksQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLEtBQUssRUFBRTtZQUM5RSxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO1NBQzFEO2FBQU07WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQ3hEO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7O1FBR3hDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzlELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxJQUFJLENBQUMsQ0FBQzs7Ozs7Ozs7O0lBRzNELElBQUksQ0FBQyxHQUFHLEVBQUUsTUFB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U0FBUyxJQUFJLE1BQU0sR0FBRyxLQUFLLENBQUM7O1FBR3hELEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDMUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDM0MsR0FBRyxDQUFDLGdCQUFnQixDQUFDLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDNUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQztRQUNuQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEdBQUcsTUFBTSxDQUFDLENBQUM7UUFDNUQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDO1FBQzFCLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhCLElBQUksSUFBSSxFQUFFO1lBQUUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFD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

    /***/
  },

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


    __webpack_exports__["default"] = "\n<!--Add custom template to image items-->\n<h2 class=\"page_title\">{{name}}</h2>\n\n\n<div class=\"tiles\" [style.width.px]=\"screenWidth - 180\" *ngIf=\"photos\">\n\n  <div *ngFor=\"let pho of photos; let i = index\" class=\"tile\" [lightbox]=\"i\" [gallery]=\"galleryId\">\n    <div class=\"image_container\" >\n      <img class=\"image\" [src]=\"pho.preURL\">\n      <div class=\"image_text\">{{pho.description}}</div>\n    </div>\n    <p>\n      {{pho.title}}\n      <b class=\"date\">{{pho.date}}</b>\n    </p>\n  </div>\n</div>\n\n<ng-template #itemTemplate\n             let-index=\"index\"\n             let-type=\"type\"\n             let-data=\"data\"\n             let-currIndex=\"currIndex\">\n\t<ng-container *ngIf=\"type === 'image' && index === currIndex\">\n      <span class=\"imageViewTitle\" float=\"left\" position=\"absolute\">{{data.title}}</span>\n      <span class=\"imageViewTitle\" float=\"right\">{{data.date}}</span>\n\n    <ngx-imageviewer [src]=\"data.src\"></ngx-imageviewer>\n    <!--//[@slideAnimation] -->\n\n      <p  id=\"imageViewDescript\" >\n        {{data.description}}\n      </p>\n  </ng-container>\n\n</ng-template>\n";
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


    __webpack_exports__["default"] = "<router-outlet>\n\n</router-outlet>\n\n<div id=\"photography\" class=\"tiles\" [style.width.px]=\"screenWidth - 180\"\n*ngIf=\"this.router.url === '/photography'\">\n\n\n<h2 class=\"page_title\">Albums</h2>\n\n<div class=\"tile\"  *ngFor=\"let album of albums$ | async\" >\n  <a [routerLink]=\"[album.name]\"  >\n    <div class=\"image_container\">\n      <img class=\"image\" [src]=\"album.imgs[0].preURL\" [attr.imageSrc]=\"album.imgs[0].srcURL\" [attr.thumbSrc]=\"album.imgs[0].preURL\">\n      <div class=\"image_hover\">\n        <p>\n          <b> {{album.name}} </b>\n        </p>\n      </div>\n    </div>\n  </a>\n</div>\n</div>\n";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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

    let PhotoDetailResolverService = class PhotoDetailResolverService {
      constructor(ps, router) {
        this.ps = ps;
        this.router = router;
      }

      resolve(route, state) {
        let name = route.paramMap.get('name');
        return this.ps.getPhotos(name).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(photos => {
          if (photos) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(photos);
          } else {
            // id not found
            this.router.navigate(['/photography']);
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          }
        }));
      }

    };

    PhotoDetailResolverService.ctorParameters = () => [{
      type: _photos_service__WEBPACK_IMPORTED_MODULE_5__["PhotosService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    PhotoDetailResolverService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
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


    __webpack_exports__["default"] = "/deep/ app-photography .image_container {\n  padding: 0px;\n  width:200px;\n  height:200px;\n  border-radius:  100px;\n  overflow: hidden;\n  background: url(\"/assets/icons/bg.png\") #faebd7;\n}\n/deep/ app-photography .image {\n  -o-object-fit: cover;\n     object-fit: cover;\n    opacity: 1;\n    display: block;\n    width: 100%;\n    height: 100%;\n    -webkit-transition: .5s ease;\n    transition: .5s ease;\n    width:200px;\n    height:200px;\n    border-radius:  100px;\n    overflow: hidden;\n}\n/deep/ app-photography .image_text {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 0;\n  position: relative;\n  top: -50%;\n  left: 50%;\n}\n/deep/ app-photography .image_container:hover .image {\n  opacity: 0.3;\n}\n/deep/ app-photography .image_container:hover .image_text {\n  opacity: 1;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n}\n/deep/ app-photography .image_text {\n  background-color: #fff;\n  color: #767676;\n  font-size: 10px;\n  padding: 8px 16px;\n}\n/deep/ lightbox, /deep/ gallery {\n  background: transparent!important;\n  z-index:11!important;\n}\n/deep/ gallery-image div {\n  display:none;\n}\n/deep/  gallery::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0.8;\n  z-index: -1;\n  background: #2a4d69;\n}\n.tiles {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  align-content: flex-start;\n}\n.tile {\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);\n  margin-bottom: 10px;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-between;\n}\n.tile p {\n  padding: 5px;\n  font-size: 10px;\n  margin: 0px;\n  text-align: justify;\n  font-weight:bold;\n}\n.tile .date {\n  text-align: right;\n  float:right;\n  font-weight: lighter;\n}\n.imageViewTitle {\n  color:#fff;\n  font-size:1em;\n  display: absolute;\n  font-weight: bold;\n  float:left;\n  left:0px;\n  text-align: left;\n}\n/deep/ #imageViewDescript {\n  color:#fff;\n  font-size:1.2em;\n  display:relative;\n  left:center;\n  font-style:italic;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9ncmFwaHkvcGhvdG8tZGV0YWlsL3Bob3RvLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGdCQUFnQjtFQUNoQiwrQ0FBK0M7QUFDakQ7QUFDQTtFQUNFLG9CQUFpQjtLQUFqQixpQkFBaUI7SUFDZixVQUFVO0lBQ1YsY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osNEJBQW9CO0lBQXBCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixnQkFBZ0I7QUFDcEI7QUFDQTtFQUNFLDRCQUFvQjtFQUFwQixvQkFBb0I7RUFDcEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztBQUNYO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVix3Q0FBZ0M7VUFBaEMsZ0NBQWdDO0VBQ2hDLG9DQUFvQztBQUN0QztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQ0FBaUM7RUFDakMsb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFlBQVk7RUFDWixXQUFXO0VBQ1gsbUJBQW1CO0FBQ3JCO0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQix5QkFBeUI7QUFDM0I7QUFFQTtFQUNFLHFIQUFxSDtFQUNySCxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtBQUM5QjtBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxvQkFBb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsUUFBUTtFQUNSLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGh5L3Bob3RvLWRldGFpbC9waG90by1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi9kZWVwLyBhcHAtcGhvdG9ncmFwaHkgLmltYWdlX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6MjAwcHg7XG4gIGhlaWdodDoyMDBweDtcbiAgYm9yZGVyLXJhZGl1czogIDEwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL2ljb25zL2JnLnBuZ1wiKSAjZmFlYmQ3O1xufVxuL2RlZXAvIGFwcC1waG90b2dyYXBoeSAuaW1hZ2Uge1xuICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcbiAgICB3aWR0aDoyMDBweDtcbiAgICBoZWlnaHQ6MjAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogIDEwMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG59XG4vZGVlcC8gYXBwLXBob3RvZ3JhcGh5IC5pbWFnZV90ZXh0IHtcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gIG9wYWNpdHk6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdG9wOiAtNTAlO1xuICBsZWZ0OiA1MCU7XG59XG4vZGVlcC8gYXBwLXBob3RvZ3JhcGh5IC5pbWFnZV9jb250YWluZXI6aG92ZXIgLmltYWdlIHtcbiAgb3BhY2l0eTogMC4zO1xufVxuL2RlZXAvIGFwcC1waG90b2dyYXBoeSAuaW1hZ2VfY29udGFpbmVyOmhvdmVyIC5pbWFnZV90ZXh0IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cbi9kZWVwLyBhcHAtcGhvdG9ncmFwaHkgLmltYWdlX3RleHQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBjb2xvcjogIzc2NzY3NjtcbiAgZm9udC1zaXplOiAxMHB4O1xuICBwYWRkaW5nOiA4cHggMTZweDtcbn1cbi9kZWVwLyBsaWdodGJveCwgL2RlZXAvIGdhbGxlcnkge1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCFpbXBvcnRhbnQ7XG4gIHotaW5kZXg6MTEhaW1wb3J0YW50O1xufVxuL2RlZXAvIGdhbGxlcnktaW1hZ2UgZGl2IHtcbiAgZGlzcGxheTpub25lO1xufVxuL2RlZXAvICBnYWxsZXJ5OjpiZWZvcmUge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC44O1xuICB6LWluZGV4OiAtMTtcbiAgYmFja2dyb3VuZDogIzJhNGQ2OTtcbn1cblxuLnRpbGVzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbi50aWxlIHtcbiAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAuMTIpO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5cbi50aWxlIHAge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XG59XG4udGlsZSAuZGF0ZSB7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmbG9hdDpyaWdodDtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG4uaW1hZ2VWaWV3VGl0bGUge1xuICBjb2xvcjojZmZmO1xuICBmb250LXNpemU6MWVtO1xuICBkaXNwbGF5OiBhYnNvbHV0ZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZsb2F0OmxlZnQ7XG4gIGxlZnQ6MHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4vZGVlcC8gI2ltYWdlVmlld0Rlc2NyaXB0IHtcbiAgY29sb3I6I2ZmZjtcbiAgZm9udC1zaXplOjEuMmVtO1xuICBkaXNwbGF5OnJlbGF0aXZlO1xuICBsZWZ0OmNlbnRlcjtcbiAgZm9udC1zdHlsZTppdGFsaWM7XG59XG4iXX0= */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngx-gallery/core */
    "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @hallysonh/ngx-imageviewer */
    "./node_modules/@hallysonh/ngx-imageviewer/fesm2015/hallysonh-ngx-imageviewer.js");

    const MY_IMAGEVIEWER_CONFIG = {
      bgStyle: 'transparent',
      loadingMessage: 'Loading ...',
      rotateRightButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__["createButtonConfig"])('', '', 4, false),
      rotateLeftButton: Object(_hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__["createButtonConfig"])('', '', 4, false)
    };
    let PhotoDetailComponent = class PhotoDetailComponent {
      constructor(gallery, route) {
        this.route = route;
        this.galleryId = 'gal';
        this.galRef = gallery.ref(this.galleryId);
      }

      ngOnInit() {
        this.route.data.subscribe(data => {
          this.photos = data.photos.imgs;
          this.name = data.photos.name;
          this.items = this.photos.map(pho => {
            return {
              type: 'image',
              data: {
                src: pho.srcURL,
                thumb: pho.preURL,
                title: pho.title,
                description: pho.description,
                date: pho.date
              }
            };
          });
          this.galRef.load(this.items);
        });
        this.getScreenSize();
        this.galRef.setConfig({
          thumb: false,
          loadingMode: 'indeterminate',
          itemTemplate: this.itemTemplate,
          gestures: false,
          //imageSize: 'cover',
          loadingIcon: 'Loading...'
        });
      }

      getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
      }

    };

    PhotoDetailComponent.ctorParameters = () => [{
      type: _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_2__["Gallery"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('itemTemplate', {
      static: true
    })], PhotoDetailComponent.prototype, "itemTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], PhotoDetailComponent.prototype, "getScreenSize", null);
    PhotoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-detail',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photo-detail.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-detail/photo-detail.component.html")).default,
      providers: [{
        provide: _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_4__["IMAGEVIEWER_CONFIG"],
        useValue: MY_IMAGEVIEWER_CONFIG
      }],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photo-detail.component.css */
      "./src/app/photography/photo-detail/photo-detail.component.css")).default]
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _photos_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../photos.service */
    "./src/app/photography/photos.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let PhotoListComponent = class PhotoListComponent {
      constructor(service, route) {
        this.service = service;
        this.route = route;
        this.error = '';
      }

      ngOnInit() {
        this.albums$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(params => {
          return this.service.getAlbum();
        }));
      }

    };

    PhotoListComponent.ctorParameters = () => [{
      type: _photos_service__WEBPACK_IMPORTED_MODULE_3__["PhotosService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }];

    PhotoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photo-list',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photo-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photo-list/photo-list.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photo-list.component.css */
      "./src/app/photography/photo-list/photo-list.component.css")).default]
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
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

    const photoCenterRoutes = [{
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
    let PhotoCenterRoutingModule = class PhotoCenterRoutingModule {};
    PhotoCenterRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngx-gallery/core */
    "./node_modules/@ngx-gallery/core/fesm2015/ngx-gallery-core.js");
    /* harmony import */


    var _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngx-gallery/lightbox */
    "./node_modules/@ngx-gallery/lightbox/fesm2015/ngx-gallery-lightbox.js");
    /* harmony import */


    var _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ngx-gallery/gallerize */
    "./node_modules/@ngx-gallery/gallerize/fesm2015/ngx-gallery-gallerize.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./photo-list/photo-list.component */
    "./src/app/photography/photo-list/photo-list.component.ts");
    /* harmony import */


    var _photography_photography_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./photography/photography.component */
    "./src/app/photography/photography/photography.component.ts");
    /* harmony import */


    var _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./photo-detail/photo-detail.component */
    "./src/app/photography/photo-detail/photo-detail.component.ts");
    /* harmony import */


    var _photography_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./photography-routing.module */
    "./src/app/photography/photography-routing.module.ts");
    /* harmony import */


    var _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @hallysonh/ngx-imageviewer */
    "./node_modules/@hallysonh/ngx-imageviewer/fesm2015/hallysonh-ngx-imageviewer.js");

    let PhotographyModule = class PhotographyModule {};
    PhotographyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _ngx_gallery_gallerize__WEBPACK_IMPORTED_MODULE_5__["GallerizeModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_6__["AngularFontAwesomeModule"], _ngx_gallery_core__WEBPACK_IMPORTED_MODULE_3__["GalleryModule"], _ngx_gallery_lightbox__WEBPACK_IMPORTED_MODULE_4__["LightboxModule"].withConfig({
        panelClass: 'fullscreen',
        hasBackdrop: false
      }), _hallysonh_ngx_imageviewer__WEBPACK_IMPORTED_MODULE_11__["ImageViewerModule"], _photography_routing_module__WEBPACK_IMPORTED_MODULE_10__["PhotoCenterRoutingModule"]],
      declarations: [_photography_photography_component__WEBPACK_IMPORTED_MODULE_8__["PhotographyComponent"], _photo_list_photo_list_component__WEBPACK_IMPORTED_MODULE_7__["PhotoListComponent"], _photo_detail_photo_detail_component__WEBPACK_IMPORTED_MODULE_9__["PhotoDetailComponent"]]
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


    __webpack_exports__["default"] = "#photography .image_container {\n  padding: 0px;\n  width: 200px;\n  height: 200px;\n  border-radius:  100px;\n  background: #faebd7;\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);\n\n}\n#photography .image {\n  -o-object-fit: cover;\n     object-fit: cover;\n    opacity: 0.2;\n    display: block;\n    width: 100%;\n    height: 100%;\n    -webkit-transition: .5s ease;\n    transition: .5s ease;\n    border-radius:  100px;\n}\n#photography .image_hover {\n  -webkit-transition: .5s ease;\n  transition: .5s ease;\n  opacity: 1;\n  position: relative;\n  top: -50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  width: auto;\n  height: auto;\n}\n#photography .image_container:hover .image {\n  opacity: 1;\n}\n#photography .image_container:hover .image_hover {\n  opacity: 0.3;\n}\n#photography {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  align-content: flex-start;\n}\n#photography .tile {\n  margin-bottom: 10px;\n  margin-right: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  align-content: space-between;\n}\n#photography .tile p {\n  padding: 5px;\n  font-size: 14px;\n  margin: 0px;\n  text-align: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGhvdG9ncmFwaHkvcGhvdG9ncmFwaHkvcGhvdG9ncmFwaHkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIscUhBQXFIOztBQUV2SDtBQUNBO0VBQ0Usb0JBQWlCO0tBQWpCLGlCQUFpQjtJQUNmLFlBQVk7SUFDWixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiw0QkFBb0I7SUFBcEIsb0JBQW9CO0lBQ3BCLHFCQUFxQjtBQUN6QjtBQUNBO0VBQ0UsNEJBQW9CO0VBQXBCLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1Qsd0NBQWdDO1VBQWhDLGdDQUFnQztFQUNoQyxvQ0FBb0M7RUFDcEMsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsVUFBVTtBQUNaO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDhCQUFtQjtFQUFuQiw2QkFBbUI7VUFBbkIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZix1QkFBMkI7VUFBM0IsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qiw0QkFBNEI7QUFDOUI7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsV0FBVztFQUNYLGtCQUFrQjtBQUNwQiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvZ3JhcGh5L3Bob3RvZ3JhcGh5L3Bob3RvZ3JhcGh5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGhvdG9ncmFwaHkgLmltYWdlX2NvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xuICBib3JkZXItcmFkaXVzOiAgMTAwcHg7XG4gIGJhY2tncm91bmQ6ICNmYWViZDc7XG4gIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcblxufVxuI3Bob3RvZ3JhcGh5IC5pbWFnZSB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgIG9wYWNpdHk6IDAuMjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdHJhbnNpdGlvbjogLjVzIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogIDEwMHB4O1xufVxuI3Bob3RvZ3JhcGh5IC5pbWFnZV9ob3ZlciB7XG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xuICBvcGFjaXR5OiAxO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB3aWR0aDogYXV0bztcbiAgaGVpZ2h0OiBhdXRvO1xufVxuI3Bob3RvZ3JhcGh5IC5pbWFnZV9jb250YWluZXI6aG92ZXIgLmltYWdlIHtcbiAgb3BhY2l0eTogMTtcbn1cbiNwaG90b2dyYXBoeSAuaW1hZ2VfY29udGFpbmVyOmhvdmVyIC5pbWFnZV9ob3ZlciB7XG4gIG9wYWNpdHk6IDAuMztcbn1cblxuI3Bob3RvZ3JhcGh5IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG59XG5cbiNwaG90b2dyYXBoeSAudGlsZSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24tY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuI3Bob3RvZ3JhcGh5IC50aWxlIHAge1xuICBwYWRkaW5nOiA1cHg7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbWFyZ2luOiAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbiJdfQ== */";
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
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _navbar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../navbar.service */
    "./src/app/navbar.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _photos_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../photos.service */
    "./src/app/photography/photos.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let PhotographyComponent = class PhotographyComponent {
      constructor(nav, service, route, router) {
        this.nav = nav;
        this.service = service;
        this.route = route;
        this.router = router;
        this.getScreenSize();
      }

      ngOnInit() {
        this.albums$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(params => {
          return this.service.getAlbum();
        }));
        this.nav.show();
        this.nav.setDeg(90);
      }

      getScreenSize(event) {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
      }

    };

    PhotographyComponent.ctorParameters = () => [{
      type: _navbar_service__WEBPACK_IMPORTED_MODULE_2__["NavbarService"]
    }, {
      type: _photos_service__WEBPACK_IMPORTED_MODULE_4__["PhotosService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])], PhotographyComponent.prototype, "getScreenSize", null);
    PhotographyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-photography',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./photography.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/photography/photography/photography.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./photography.component.css */
      "./src/app/photography/photography/photography.component.css")).default]
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
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let PhotosService = class PhotosService {
      constructor(httpClient) {
        this.httpClient = httpClient;
        this.TABLE_URL = "https://zyha.tk/a/get-table.php";
      }

      getAlbum() {
        return this.httpClient.get(this.TABLE_URL, {
          params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpParams"]().set('table', 'photos')
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(res => {
          this.albums = res['data'];
          return this.albums;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError));
      }

      handleError(error) {
        console.log(error); // return an observable with a user friendly message

        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])('Error! something went wrong.');
      }

      getPhotos(id) {
        return this.getAlbum().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(photos => photos.find(photos => photos.name === id)));
      }

    };
    PhotosService.nextPhotosId = 100;

    PhotosService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }];

    PhotosService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
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