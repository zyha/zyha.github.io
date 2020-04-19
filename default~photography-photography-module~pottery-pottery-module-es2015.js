(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~photography-photography-module~pottery-pottery-module"],{

/***/ "./node_modules/@hallysonh/ngx-imageviewer/__ivy_ngcc__/fesm2015/hallysonh-ngx-imageviewer.js":
/*!****************************************************************************************************!*\
  !*** ./node_modules/@hallysonh/ngx-imageviewer/__ivy_ngcc__/fesm2015/hallysonh-ngx-imageviewer.js ***!
  \****************************************************************************************************/
/*! exports provided: ImageViewerModule, ImageViewerConfig, createButtonConfig, IMAGEVIEWER_CONFIG, ɵc, ɵb, ɵa */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerModule", function() { return ImageViewerModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageViewerConfig", function() { return ImageViewerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createButtonConfig", function() { return createButtonConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IMAGEVIEWER_CONFIG", function() { return IMAGEVIEWER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵc", function() { return ImageCacheService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return ImageViewerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return IMAGEVIEWER_CONFIG_DEFAULT; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



const _c0 = ["imageContainer"];
class ImageViewerConfig {
}
/**
 * @param {?=} icon
 * @param {?=} tooltip
 * @param {?=} sortId
 * @param {?=} show
 * @return {?}
 */
function createButtonConfig(icon, tooltip, sortId = 0, show = true) {
    return { icon: icon, tooltip: tooltip, sortId: sortId, show: show };
}
const /** @type {?} */ IMAGEVIEWER_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('imageviewer.config');
let /** @type {?} */ IMAGEVIEWER_CONFIG_DEFAULT = {
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
        this.style = style;
        //#region Properties
        this.sortId = 0;
        // hover state
        this.hover = false;
        // show/hide button
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
    onClick(evt) { alert('no click action set!'); return true; }
    /**
     * @param {?} evt
     * @return {?}
     */
    onMouseDown(evt) { return false; }
    /**
     * @param {?} ctx
     * @param {?} x
     * @param {?} y
     * @param {?} radius
     * @return {?}
     */
    draw(ctx, x, y, radius) {
        this.drawPosition = { x: x, y: y };
        this.drawRadius = radius;
        // preserve context
        ctx.save();
        // drawing settings
        const /** @type {?} */ isHover = (typeof this.hover === 'function') ? this.hover() : this.hover;
        ctx.globalAlpha = (isHover) ? this.style.hoverAlpha : this.style.alpha;
        ctx.fillStyle = this.style.bgStyle;
        ctx.lineWidth = 0;
        // draw circle
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.fill();
        if (this.style.borderWidth > 0) {
            ctx.lineWidth = this.style.borderWidth;
            ctx.strokeStyle = this.style.borderStyle;
            ctx.stroke();
        }
        // draw icon
        if (this.icon !== null) {
            ctx.save();
            // ctx.globalCompositeOperation = 'destination-out';
            this.drawIconFont(ctx, x, y, radius);
            ctx.restore();
        }
        // restore context
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
        ctx.fillStyle = this.style.iconStyle;
        // calculate position
        const /** @type {?} */ textSize = ctx.measureText(this.icon);
        const /** @type {?} */ x = centreX - textSize.width / 2;
        const /** @type {?} */ y = centreY + size / 2;
        // draw it
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
        const /** @type {?} */ dx = Math.abs(this.drawPosition.x - x), /** @type {?} */ dy = Math.abs(this.drawPosition.y - y);
        return dx * dx + dy * dy <= this.drawRadius * this.drawRadius;
    }
}
/**
 * @abstract
 */
class ResourceLoader {
    constructor() {
        this.viewport = { width: 0, height: 0, scale: 1, rotation: 0, x: 0, y: 0 };
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
        const /** @type {?} */ rotation = this.viewport ? this.viewport.rotation : 0;
        const /** @type {?} */ inverted = toSquareAngle(rotation) / 90 % 2 !== 0;
        const /** @type {?} */ canvas = {
            width: !inverted ? canvasDim.width : canvasDim.height,
            height: !inverted ? canvasDim.height : canvasDim.width
        };
        if (((canvas.height / this._image.height) * this._image.width) <= canvas.width) {
            this.viewport.scale = canvas.height / this._image.height;
        }
        else {
            this.viewport.scale = canvas.width / this._image.width;
        }
        this.minScale = this.viewport.scale / 4;
        this.maxScale = this.viewport.scale * 4;
        // start point to draw image
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
        ctx.clearRect(0, 0, canvasDim.width, canvasDim.height);
        // Draw background color;
        ctx.fillStyle = config.bgStyle;
        ctx.fillRect(0, 0, canvasDim.width, canvasDim.height);
        // draw image (transformed, rotate and scaled)
        if (!this.loading && this.loaded) {
            ctx.translate(this.viewport.x + this.viewport.width / 2, this.viewport.y + this.viewport.height / 2);
            ctx.rotate(this.viewport.rotation * Math.PI / 180);
            ctx.scale(this.viewport.scale, this.viewport.scale);
            ctx.drawImage(this._image, -this._image.width / 2, -this._image.height / 2);
        }
        else {
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
    onResourceChange() { return this.resourceChange.asObservable(); }
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
        this._image.addEventListener('load', (evt) => {
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
        const /** @type {?} */ c = this.getCache(url, page);
        return c ? c.image : null;
    }
    /**
     * @param {?} url
     * @param {?} page
     * @param {?} image
     * @return {?}
     */
    saveImage(url, page, image) {
        const /** @type {?} */ cache = this.getCache(url, page);
        if (cache) {
            cache.image = image;
        }
        else {
            this.cache.push({ url, page, image });
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
ImageCacheService.ɵfac = function ImageCacheService_Factory(t) { return new (t || ImageCacheService)(); };
ImageCacheService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ImageCacheService, factory: ImageCacheService.ɵfac, providedIn: 'root' });
/** @nocollapse */
ImageCacheService.ctorParameters = () => [];
/** @nocollapse */ ImageCacheService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["defineInjectable"])({ factory: function ImageCacheService_Factory() { return new ImageCacheService(); }, token: ImageCacheService, providedIn: "root" });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageCacheService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return []; }, null); })();

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
        const /** @type {?} */ vm = this;
        if (vm.loading || !vm.src) {
            return;
        }
        const /** @type {?} */ loadingTask = pdfjsLib.getDocument(vm.src);
        vm.loading = true;
        vm.currentItem = 1;
        loadingTask.then((pdf) => {
            vm._pdf = pdf;
            vm.totalItem = pdf.numPages;
            vm.loaded = true;
            vm.loadResource();
        }, (reason) => {
            console.error(reason);
        });
    }
    /**
     * @return {?}
     */
    loadResource() {
        const /** @type {?} */ vm = this;
        if (!vm.loaded) {
            vm._pendingReload = true;
            return;
        }
        vm.loaded = false;
        const /** @type {?} */ url = vm.src;
        const /** @type {?} */ page = vm.currentItem;
        vm._pdf.getPage(page).then((pdfPage) => {
            vm._page = pdfPage;
            vm.loadImage(url, page, () => {
                vm.loaded = true;
                vm.loading = false;
                if (vm._pendingReload) {
                    vm._pendingReload = false;
                    vm.loadResource();
                }
                else {
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
        const /** @type {?} */ vm = this;
        const /** @type {?} */ cacheimg = vm._imageCache.getImage(src, page);
        if (cacheimg) {
            vm._image = cacheimg;
            onFinish();
            return;
        }
        const /** @type {?} */ canvas = document.createElement('canvas');
        const /** @type {?} */ context = canvas.getContext('2d');
        const /** @type {?} */ pageVp = vm._page.getViewport(2);
        canvas.width = pageVp.width;
        canvas.height = pageVp.height;
        const /** @type {?} */ renderContext = {
            canvasContext: context,
            viewport: pageVp
        };
        const /** @type {?} */ renderTask = vm._page.render(renderContext);
        renderTask.then(function () {
            canvas.toBlob(blob => {
                const /** @type {?} */ img = new Image();
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
const /** @type {?} */ MIN_TOOLTIP_WIDTH_SPACE = 500;
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
        this._buttons = [
            this._zoomOutButton,
            this._zoomInButton,
            this._rotateLeftButton,
            this._rotateRightButton,
            this._resetButton
        ].filter(item => item.display)
            .sort((a, b) => a.sortId - b.sortId);
    }
    /**
     * @return {?}
     */
    get src() { return this._src; }
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
    get filetype() { return this._filetype; }
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
    get width() { return this._width; }
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
    get height() { return this._height; }
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
        this._context = this._canvas.getContext('2d');
        // setting canvas dimention
        this._canvas.width = this.width || this.config.width;
        this._canvas.height = this.height || this.config.height;
        // setting buttons actions
        this._nextPageButton.onClick = (evt) => { this.nextPage(); return false; };
        this._beforePageButton.onClick = (evt) => { this.previousPage(); return false; };
        this._zoomOutButton.onClick = (evt) => { this.zoomOut(); return false; };
        this._zoomInButton.onClick = (evt) => { this.zoomIn(); return false; };
        this._rotateLeftButton.onClick = (evt) => { this.rotateLeft(); return false; };
        this._rotateRightButton.onClick = (evt) => { this.rotateRight(); return false; };
        this._resetButton.onClick = (evt) => { this.resetImage(); return false; };
        // register event listeners
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
        }
        else if (this.isPdf(this.src) && (!this._resource || !(this._resource instanceof PdfResourceLoader))) {
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
        const /** @type {?} */ activeElement = this.getUIElement(this.screenToCanvasCentre(evt.center));
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
        const /** @type {?} */ viewport = this._resource.viewport;
        viewport.x = this._touchStartState.viewport.x + evt.deltaX;
        viewport.y = this._touchStartState.viewport.y + evt.deltaY;
        // process pinch in/out
        if (!this._touchStartState.scale) {
            this._touchStartState.scale = this._resource.viewport.scale;
        }
        const /** @type {?} */ newScale = this._touchStartState.scale * evt.scale;
        viewport.scale = newScale > this._resource.maxScale ? this._resource.maxScale :
            newScale < this._resource.minScale ? this._resource.minScale : newScale;
        // process rotate left/right
        if (!this._touchStartState.rotate) {
            this._touchStartState.rotate = { rotation: viewport.rotation, startRotate: evt.rotation };
        }
        if (evt.rotation !== 0) {
            const /** @type {?} */ newAngle = this._touchStartState.rotate.rotation + evt.rotation - this._touchStartState.rotate.startRotate;
            viewport.rotation = this.config.rotateStepper ? toSquareAngle(newAngle) : newAngle;
        }
        this._dirty = true;
    }
    /**
     * @return {?}
     */
    addEventListeners() {
        // zooming
        this._listenDestroyList.push(this._renderer.listen(this._canvas, 'DOMMouseScroll', (evt) => this.onMouseWheel(evt)));
        this._listenDestroyList.push(this._renderer.listen(this._canvas, 'mousewheel', (evt) => this.onMouseWheel(evt)));
        // show tooltip when mouseover it
        this._listenDestroyList.push(this._renderer.listen(this._canvas, 'mousemove', (evt) => this.checkTooltipActivation(this.screenToCanvasCentre({ x: evt.clientX, y: evt.clientY }))));
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
        }
        else {
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
        const /** @type {?} */ activeElement = this.getUIElement(pos);
        const /** @type {?} */ oldToolTip = this._currentTooltip;
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
        const /** @type {?} */ newScale = this._resource.viewport.scale * (1 + this.config.scaleStep);
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
        const /** @type {?} */ newScale = this._resource.viewport.scale * (1 - this.config.scaleStep);
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
        const /** @type {?} */ viewport = this._resource.viewport;
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
        const /** @type {?} */ viewport = this._resource.viewport;
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
        this.resetImage();
        // start new render loop
        this.render();
    }
    /**
     * @return {?}
     */
    render() {
        const /** @type {?} */ vm = this;
        // only re-render if dirty
        if (this._dirty && this._resource) {
            this._dirty = false;
            const /** @type {?} */ ctx = this._context;
            ctx.save();
            this._resource.draw(ctx, this.config, this._canvas, () => {
                ctx.restore();
                if (vm._resource.loaded) {
                    // draw buttons
                    this.drawButtons(ctx);
                    // draw paginator
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
        const /** @type {?} */ padding = this.config.tooltips.padding;
        const /** @type {?} */ radius = this.config.tooltips.radius;
        const /** @type {?} */ gap = 2 * radius + padding;
        const /** @type {?} */ x = this._canvas.width - radius - padding;
        const /** @type {?} */ y = this._canvas.height - radius - padding;
        // draw buttons
        for (let /** @type {?} */ i = 0; i < this._buttons.length; i++) {
            this._buttons[i].draw(ctx, x, y - gap * i, radius);
        }
        // draw tooltip
        if (this._currentTooltip !== null && this._canvas.width > MIN_TOOLTIP_WIDTH_SPACE) {
            ctx.save();
            const /** @type {?} */ fontSize = radius;
            ctx.font = fontSize + 'px sans-serif';
            // calculate position
            const /** @type {?} */ textSize = ctx.measureText(this._currentTooltip).width, /** @type {?} */ rectWidth = textSize + padding, /** @type {?} */ rectHeight = fontSize * 0.70 + padding, /** @type {?} */ rectX = this._canvas.width
                - (2 * radius + 2 * padding) // buttons
                - rectWidth, /** @type {?} */ rectY = this._canvas.height - rectHeight - padding, /** @type {?} */ textX = rectX + 0.5 * padding, /** @type {?} */ textY = this._canvas.height - 1.5 * padding;
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
        const /** @type {?} */ padding = this.config.tooltips.padding;
        const /** @type {?} */ radius = this.config.tooltips.radius;
        const /** @type {?} */ labelWidth = 50;
        const /** @type {?} */ x1 = (this._canvas.width - labelWidth) / 2 - radius - padding; // PrevPageButton
        const /** @type {?} */ x2 = this._canvas.width / 2; // Label
        const /** @type {?} */ x3 = (this._canvas.width + labelWidth) / 2 + radius + padding; // NextPageButton
        const /** @type {?} */ y = this._canvas.height - radius - padding;
        const /** @type {?} */ label = this._resource.currentItem + '/' + this._resource.totalItem;
        const /** @type {?} */ fontSize = 25;
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
        radius = (typeof radius === 'number') ? radius : 5;
        fill = (typeof fill === 'boolean') ? fill : true; // fill = default
        stroke = (typeof stroke === 'boolean') ? stroke : false;
        // draw round rectangle
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
        const /** @type {?} */ defaultCfg = IMAGEVIEWER_CONFIG_DEFAULT;
        const /** @type {?} */ localCfg = Object.assign({}, defaultCfg, cfg);
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
        const /** @type {?} */ rect = this._canvas.getBoundingClientRect();
        return { x: pos.x - rect.left, y: pos.y - rect.top };
    }
    /**
     * @return {?}
     */
    getUIElements() {
        const /** @type {?} */ hoverElements = this._buttons.slice();
        hoverElements.push(this._nextPageButton);
        hoverElements.push(this._beforePageButton);
        return hoverElements;
    }
    /**
     * @param {?} pos
     * @return {?}
     */
    getUIElement(pos) {
        const /** @type {?} */ activeUIElement = this.getUIElements().filter((uiElement) => {
            return uiElement.isWithinBounds(pos.x, pos.y);
        });
        return (activeUIElement.length > 0) ? activeUIElement[0] : null;
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
ImageViewerComponent.ɵfac = function ImageViewerComponent_Factory(t) { return new (t || ImageViewerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ImageCacheService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](IMAGEVIEWER_CONFIG)); };
ImageViewerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ImageViewerComponent, selectors: [["ngx-imageviewer"]], viewQuery: function ImageViewerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.canvasRef = _t.first);
    } }, inputs: { src: "src", filetype: "filetype", width: "width", height: "height" }, decls: 2, vars: 2, consts: [[3, "width", "height", "tap", "pinchin", "pinchout", "panmove", "panend", "rotatemove", "rotateend"], ["imageContainer", ""]], template: function ImageViewerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "canvas", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("tap", function ImageViewerComponent_Template_canvas_tap_0_listener($event) { return ctx.onTap($event); })("pinchin", function ImageViewerComponent_Template_canvas_pinchin_0_listener($event) { return ctx.processTouchEvent($event); })("pinchout", function ImageViewerComponent_Template_canvas_pinchout_0_listener($event) { return ctx.processTouchEvent($event); })("panmove", function ImageViewerComponent_Template_canvas_panmove_0_listener($event) { return ctx.processTouchEvent($event); })("panend", function ImageViewerComponent_Template_canvas_panend_0_listener() { return ctx.onTouchEnd(); })("rotatemove", function ImageViewerComponent_Template_canvas_rotatemove_0_listener($event) { return ctx.processTouchEvent($event); })("rotateend", function ImageViewerComponent_Template_canvas_rotateend_0_listener() { return ctx.onTouchEnd(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.width)("height", ctx.height);
    } }, styles: ["[_nghost-%COMP%] { display: block }\n    [_nghost-%COMP%]   canvas[_ngcontent-%COMP%] { margin: 0 auto; display: block }\n    [hidden][_ngcontent-%COMP%] { display: none !important }"] });
//#endregion
/** @nocollapse */
ImageViewerComponent.ctorParameters = () => [
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"], },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], },
    { type: ImageCacheService, },
    { type: ImageViewerConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [IMAGEVIEWER_CONFIG,] },] },
];
ImageViewerComponent.propDecorators = {
    "src": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['src',] },],
    "filetype": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['filetype',] },],
    "width": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['width',] },],
    "height": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['height',] },],
    "canvasRef": [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['imageContainer',] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageViewerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-imageviewer',
                template: `
    <canvas #imageContainer [width]="width" [height]="height"
      (tap)="onTap($event)" (pinchin)="processTouchEvent($event)" (pinchout)="processTouchEvent($event)"
      (panmove)="processTouchEvent($event)" (panend)="onTouchEnd()" (rotatemove)="processTouchEvent($event)"
        (rotateend)="onTouchEnd()">
    </canvas>
  `,
                styles: [`
    :host { display: block }
    :host canvas { margin: 0 auto; display: block }
    [hidden] { display: none !important }
  `]
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: ImageCacheService }, { type: ImageViewerConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [IMAGEVIEWER_CONFIG]
            }] }]; }, { src: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['src']
        }], filetype: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['filetype']
        }], width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['width']
        }], height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['height']
        }], canvasRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imageContainer']
        }] }); })();
/**
 * @param {?} file
 * @param {?} regexTest
 * @return {?}
 */
function testFile(file, regexTest) {
    if (!file) {
        return false;
    }
    const /** @type {?} */ name = file instanceof File ? file.name : file;
    return name.toLowerCase().match(regexTest) !== null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const ɵ0 = IMAGEVIEWER_CONFIG_DEFAULT;
class ImageViewerModule {
}
ImageViewerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ImageViewerModule });
ImageViewerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ImageViewerModule_Factory(t) { return new (t || ImageViewerModule)(); }, providers: [{ provide: IMAGEVIEWER_CONFIG, useValue: ɵ0 }] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ImageViewerModule, { declarations: [ImageViewerComponent], exports: [ImageViewerComponent] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ImageViewerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                providers: [{ provide: IMAGEVIEWER_CONFIG, useValue: ɵ0 }],
                declarations: [ImageViewerComponent],
                exports: [ImageViewerComponent]
            }]
    }], null, null); })();

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */



//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGFsbHlzb25oLW5neC1pbWFnZXZpZXdlci5qcyIsInNvdXJjZXMiOlsibmc6L0BoYWxseXNvbmgvbmd4LWltYWdldmlld2VyL2xpYi9pbWFnZXZpZXdlci5jb25maWcudHMiLCJuZzovQGhhbGx5c29uaC9uZ3gtaW1hZ2V2aWV3ZXIvbGliL2ltYWdldmlld2VyLm1vZGVsLnRzIiwibmc6L0BoYWxseXNvbmgvbmd4LWltYWdldmlld2VyL2xpYi9pbWFnZS5sb2FkZXIudHMiLCJuZzovQGhhbGx5c29uaC9uZ3gtaW1hZ2V2aWV3ZXIvbGliL2ltYWdlY2FjaGUuc2VydmljZS50cyIsIm5nOi9AaGFsbHlzb25oL25neC1pbWFnZXZpZXdlci9saWIvcGRmLmxvYWRlci50cyIsIm5nOi9AaGFsbHlzb25oL25neC1pbWFnZXZpZXdlci9saWIvaW1hZ2V2aWV3ZXIuY29tcG9uZW50LnRzIiwibmc6L0BoYWxseXNvbmgvbmd4LWltYWdldmlld2VyL2xpYi9pbWFnZXZpZXdlci5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7Q0EwQkM7Ozs7Ozs7O0FBbUJELDRCQUFtQyxJQUFhLEVBQUUsT0FBZ0IsRUFBRSxTQUFpQixDQUFDLEVBQUUsT0FBZ0IsSUFBSTtJQUMxRyxPQUFPLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO0NBQ3JFO0FBRUQsdUJBQWEsa0JBQWtCLEdBQUcsSUFBSSxjQUFjLENBQW9CLG9CQUFvQixDQUFDLENBQUM7QUFFOUYscUJBQVcsMEJBQTBCLEdBQXNCO0lBQ3pELEtBQUssRUFBRSxHQUFHOztJQUNWLE1BQU0sRUFBRSxHQUFHOztJQUNYLE9BQU8sRUFBRSxTQUFTOztJQUNsQixTQUFTLEVBQUUsR0FBRzs7SUFDZCxhQUFhLEVBQUUsS0FBSztJQUNwQixjQUFjLEVBQUUsWUFBWTtJQUM1QixX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SSxDQUFDLFNBQVMsRUFBRTtZQUFFLE9BQU87U0FBRTtRQUUzQyx1QkFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7UUFDNUQsdUJBQU0sUUFBUSxHQUFHLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN4RCx1QkFBTSxNQUFNLEdBQUc7WUFDYixLQUFLLEVBQUUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsTUFBTTtZQUNyRCxNQUFNLEVBQUUsQ0FBQyxRQUFRLEdBQUcsU0FBUyxDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsS0FBSztTQUN2RCxDQUFDO1FBRUYsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsS0FBSyxFQUFFO1lBQzlFLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUM7U0FDMUQ7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDeEQ7UUFDRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQzs7UUFHeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDOUQsSUFB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WSxFQUFFLENBQUMsb0JBQW9CLENBQUM7T0FDcEMsT0FBTyxFQUFFLENBQUMsb0JBQW9CLENBQUMsZUFDaEM7Ozs7Ozs7OzBCQUNLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgSW5qZWN0aW9uVG9rZW4gfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZVZpZXdlckNvbmZpZyB7XHJcbiAgd2lkdGg/OiBudW1iZXI7XHJcbiAgaGVpZ2h0PzogbnVtYmVyO1xyXG4gIGJnU3R5bGU/OiBzdHJpbmc7XHJcbiAgc2NhbGVTdGVwPzogbnVtYmVyO1xyXG4gIHJvdGF0ZVN0ZXBwZXI/OiBib29sZWFuO1xyXG4gIGJ1dHRvblN0eWxlPzogQnV0dG9uU3R5bGU7XHJcbiAgbG9hZGluZ01lc3NhZ2U/OiBzdHJpbmc7XHJcbiAgdG9vbHRpcHM/OiB7XHJcbiAgICBlbmFibGVkPzogYm9vbGVhbixcclxuICAgIGJnU3R5bGU/OiBzdHJpbmcsXHJcbiAgICBiZ0FscGhhPzogbnVtYmVyLFxyXG4gICAgdGV4dFN0eWxlPzogc3RyaW5nLFxyXG4gICAgdGV4dEFscGhhPzogbnVtYmVyLFxyXG4gICAgcGFkZGluZz86IG51bWJlcixcclxuICAgIHJhZGl1cz86IG51bWJlclxyXG4gIH07XHJcbiAgbmV4dFBhZ2VCdXR0b24/OiBCdXR0b25Db25maWc7XHJcbiAgYmVmb3JlUGFnZUJ1dHRvbj86IEJ1dHRvbkNvbmZpZztcclxuICB6b29tT3V0QnV0dG9uPzogQnV0dG9uQ29uZmlnO1xyXG4gIHpvb21JbkJ1dHRvbj86IEJ1dHRvbkNvbmZpZztcclxuICByb3RhdGVMZWZ0QnV0dG9uPzogQnV0dG9uQ29uZmlnO1xyXG4gIHJvdGF0ZVJpZ2h0QnV0dG9uPzogQnV0dG9uQ29uZmlnO1xyXG4gIHJlc2V0QnV0dG9uPzogQnV0dG9uQ29uZmlnO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvblN0eWxlIHtcclxuICBpY29uRm9udEZhbWlseT86IHN0cmluZztcclxuICBhbHBoYT86IG51bWJlcjtcclxuICBob3ZlckFscGhhPzogbnVtYmVyO1xyXG4gIGJnU3R5bGU/OiBzdHJpbmc7XHJcbiAgaWNvblN0eWxlPzogc3RyaW5nO1xyXG4gIGJvcmRlclN0eWxlPzogc3RyaW5nO1xyXG4gIGJvcmRlcldpZHRoPzogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEJ1dHRvbkNvbmZpZyB7XHJcbiAgaWNvbj86IHN0cmluZztcclxuICB0b29sdGlwPzogc3RyaW5nO1xyXG4gIHNvcnRJZD86IG51bWJlcjtcclxuICBzaG93PzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1dHRvbkNvbmZpZyhpY29uPzogc3RyaW5nLCB0b29sdGlwPzogc3RyaW5nLCBzb3J0SWQ6IG51bWJlciA9IDAsIHNob3c6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgcmV0dXJuIHsgaWNvbjogaWNvbiwgdG9vbHRpcDogdG9vbHRpcCwgc29ydElkOiBzb3J0SWQsIHNob3c6IHNob3cgfTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IElNQUdFVklFV0VSX0NPTkZJRyA9IG5ldyBJbmplY3Rpb25Ub2tlbjxJbWFnZVZpZXdlckNvbmZpZz4oJ2ltYWdldmlld2VyLmNvbmZpZycpO1xyXG5cclxuZXhwb3J0IGxldCBJTUFHRVZJRVdFUl9DT05GSUdfREVGQVVMVDogSW1hZ2VWaWV3ZXJDb25maWcgPSB7XHJcbiAgd2lkdGg6IDgwMCwgLy8gY29tcG9uZW50IGRlZmF1bHQgd2lkdGhcclxuICBoZWlnaHQ6IDYwMCwgLy8gY29tcG9uZW50IGRlZmF1bHQgaGVpZ2h0XHJcbiAgYmdTdHlsZTogJyNFQ0VGRjEnLCAvLyBjb21wb25lbnQgYmFja2dyb3VuZCBzdHlsZVxyXG4gIHNjYWxlU3RlcDogMC4xLCAvLyB6b29tIHNjYWxlIHN0ZXAgKHVzaW5nIHRoZSB6b29tIGluL291dCBidXR0b25zKVxyXG4gIHJvdGF0ZVN0ZXBwZXI6IGZhbHNlLFxyXG4gIGxvYWRpbmdNZXNzYWdlOiAnTG9hZGluZy4uLicsXHJcbiAgYnV0dG9uU3R5bGU6IHtcclxuICAgIGljb25Gb250RmFtaWx5OiAnTWF0ZXJpYWwgSWNvbnMnLCAvLyBmb250IHVzZWQgdG8gcmVuZGVyIHRoZSBidXR0b24gaWNvbnNcclxuICAgIGFscGhhOiAwLjUsIC8vIGJ1dHRvbnMnIHRyYW5zcGFyZW5jZSB2YWx1ZVxyXG4gICAgaG92ZXJBbHBoYTogMC43LCAvLyBidXR0b25zJyB0cmFuc3BhcmVuY2UgdmFsdWUgd2hlbiBtb3VzZSBpcyBvdmVyXHJcbiAgICBiZ1N0eWxlOiAnIzAwMDAwMCcsIC8vICBidXR0b25zJyBiYWNrZ3JvdW5kIHN0eWxlXHJcbiAgICBpY29uU3R5bGU6ICcjZmZmZmZmJywgLy8gYnV0dG9ucycgaWNvbiBjb2xvcnNcclxuICAgIGJvcmRlclN0eWxlOiAnIzAwMDAwMCcsIC8vIGJ1dHRvbnMnIGJvcmRlciBzdHlsZVxyXG4gICAgYm9yZGVyV2lkdGg6IDAgLy8gYnV0dG9ucycgYm9yZGVyIHdpZHRoICgwID09IGRpc2FibGVkKVxyXG4gIH0sXHJcbiAgdG9vbHRpcHM6IHtcclxuICAgIGVuYWJsZWQ6IHRydWUsIC8vIGVuYWJsZSBvciBkaXNhYmxlIHRvb2x0aXBzIGZvciBidXR0b25zXHJcbiAgICBiZ1N0eWxlOiAnIzAwMDAwMCcsIC8vIHRvb2x0aXAgYmFja2dyb3VuZCBzdHlsZVxyXG4gICAgYmdBbHBoYTogMC41LCAvLyB0b29sdGlwIGJhY2tncm91bmQgdHJhbnNwYXJlbmNlXHJcbiAgICB0ZXh0U3R5bGU6ICcjZmZmZmZmJywgLy8gdG9vbHRpcCdzIHRleHQgc3R5bGVcclxuICAgIHRleHRBbHBoYTogMC45LCAvLyB0b29sdGlwJ3MgdGV4dCB0cmFuc3BhcmVuY2VcclxuICAgIHBhZGRpbmc6IDE1LCAvLyB0b29sdGlwIHBhZGRpbmdcclxuICAgIHJhZGl1czogMjAgLy8gdG9vbHRpcCBib3JkZXIgcmFkaXVzXHJcbiAgfSxcclxuICBuZXh0UGFnZUJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhFNDA5KSwgJ05leHQgcGFnZScsIDApLFxyXG4gIGJlZm9yZVBhZ2VCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZyhTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RTQwOCksICdQcmV2aW91cyBwYWdlJywgMSksXHJcbiAgem9vbU91dEJ1dHRvbjogY3JlYXRlQnV0dG9uQ29uZmlnKFN0cmluZy5mcm9tQ2hhckNvZGUoMHhFOTAwKSwgJ1pvb20gb3V0JywgMCksXHJcbiAgem9vbUluQnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoU3RyaW5nLmZyb21DaGFyQ29kZSgweEU4RkYpLCAnWm9vbSBpbicsIDEpLFxyXG4gIHJvdGF0ZUxlZnRCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZyhTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RTQxOSksICdSb3RhdGUgbGVmdCcsIDIpLFxyXG4gIHJvdGF0ZVJpZ2h0QnV0dG9uOiBjcmVhdGVCdXR0b25Db25maWcoU3RyaW5nLmZyb21DaGFyQ29kZSgweEU0MUEpLCAnUm90YXRlIHJpZ2h0JywgMyksXHJcbiAgcmVzZXRCdXR0b246IGNyZWF0ZUJ1dHRvbkNvbmZpZyhTdHJpbmcuZnJvbUNoYXJDb2RlKDB4RTg2MyksICdSZXNldCcsIDQpXHJcbn07XHJcbiIsImltcG9ydCB7IEJ1dHRvbkNvbmZpZywgQnV0dG9uU3R5bGUsIEltYWdlVmlld2VyQ29uZmlnIH0gZnJvbSAnLi9pbWFnZXZpZXdlci5jb25maWcnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAvLyNyZWdpb24gUHJvcGVydGllc1xyXG4gIHNvcnRJZCA9IDA7XHJcblxyXG4gIGljb246IHN0cmluZztcclxuICB0b29sdGlwOiBzdHJpbmc7XHJcblxyXG4gIC8vIGhvdmVyIHN0YXRlXHJcbiAgaG92ZXI6IGJvb2xlYW4gfCAoKCkgPT4gYm9vbGVhbikgPSBmYWxzZTtcclxuXHJcbiAgLy8gc2hvdy9oaWRlIGJ1dHRvblxyXG4gIGRpc3BsYXkgPSB0cnVlO1xyXG5cclxuICAvLyBkcmF3biBvbiBwb3NpdGlvblxyXG4gIHByaXZhdGUgZHJhd1Bvc2l0aW9uID0gbnVsbDtcclxuICBwcml2YXRlIGRyYXdSYWRpdXMgPSAwO1xyXG4gIC8vI2VuZHJlZ2lvblxyXG5cclxuICAvLyNyZWdpb24gTGlmZWN5Y2xlIGV2ZW50c1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgY29uZmlnOiBCdXR0b25Db25maWcsXHJcbiAgICBwcml2YXRlIHN0eWxlOiBCdXR0b25TdHlsZVxyXG4gICkge1xyXG4gICAgdGhpcy5zb3J0SWQgPSBjb25maWcuc29ydElkO1xyXG4gICAgdGhpcy5kaXNwbGF5ID0gY29uZmlnLnNob3c7XHJcbiAgICB0aGlzLmljb24gPSBjb25maWcuaWNvbjtcclxuICAgIHRoaXMudG9vbHRpcCA9IGNvbmZpZy50b29sdGlwO1xyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEV2ZW50c1xyXG4gIC8vIGNsaWNrIGFjdGlvblxyXG4gIG9uQ2xpY2soZXZ0KSB7IGFsZXJ0KCdubyBjbGljayBhY3Rpb24gc2V0IScpOyByZXR1cm4gdHJ1ZTsgfVxyXG5cclxuICAvLyBtb3VzZSBkb3duIGFjdGlvblxyXG4gIG9uTW91c2VEb3duKGV2dCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIERyYXcgQnV0dG9uXHJcbiAgZHJhdyhjdHgsIHgsIHksIHJhZGl1cykge1xyXG4gICAgdGhpcy5kcmF3UG9zaXRpb24gPSB7IHg6IHgsIHk6IHkgfTtcclxuICAgIHRoaXMuZHJhd1JhZGl1cyA9IHJhZGl1cztcclxuXHJcbiAgICAvLyBwcmVzZXJ2ZSBjb250ZXh0XHJcbiAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgIC8vIGRyYXdpbmcgc2V0dGluZ3NcclxuICAgIGNvbnN0IGlzSG92ZXIgPSAodHlwZW9mIHRoaXMuaG92ZXIgPT09ICdmdW5jdGlvbicpID8gdGhpcy5ob3ZlcigpIDogdGhpcy5ob3ZlcjtcclxuICAgIGN0eC5nbG9iYWxBbHBoYSA9IChpc0hvdmVyKSA/IHRoaXMuc3R5bGUuaG92ZXJBbHBoYSA6IHRoaXMuc3R5bGUuYWxwaGE7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5zdHlsZS5iZ1N0eWxlO1xyXG4gICAgY3R4LmxpbmVXaWR0aCA9IDA7XHJcblxyXG4gICAgLy8gZHJhdyBjaXJjbGVcclxuICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgIGN0eC5hcmMoeCwgeSwgcmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICBjdHguZmlsbCgpO1xyXG4gICAgaWYgKHRoaXMuc3R5bGUuYm9yZGVyV2lkdGggPiAwKSB7XHJcbiAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLnN0eWxlLmJvcmRlcldpZHRoO1xyXG4gICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLnN0eWxlLmJvcmRlclN0eWxlO1xyXG4gICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyBpY29uXHJcbiAgICBpZiAodGhpcy5pY29uICE9PSBudWxsKSB7XHJcbiAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgIC8vIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnZGVzdGluYXRpb24tb3V0JztcclxuICAgICAgdGhpcy5kcmF3SWNvbkZvbnQoY3R4LCB4LCB5LCByYWRpdXMpO1xyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlc3RvcmUgY29udGV4dFxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZHJhd0ljb25Gb250KGN0eCwgY2VudHJlWCwgY2VudHJlWSwgc2l6ZSkge1xyXG4gICAgLy8gZm9udCBzZXR0aW5nc1xyXG4gICAgY3R4LmZvbnQgPSBzaXplICsgJ3B4ICcgKyB0aGlzLnN0eWxlLmljb25Gb250RmFtaWx5O1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuc3R5bGUuaWNvblN0eWxlO1xyXG5cclxuICAgIC8vIGNhbGN1bGF0ZSBwb3NpdGlvblxyXG4gICAgY29uc3QgdGV4dFNpemUgPSBjdHgubWVhc3VyZVRleHQodGhpcy5pY29uKTtcclxuICAgIGNvbnN0IHggPSBjZW50cmVYIC0gdGV4dFNpemUud2lkdGggLyAyO1xyXG4gICAgY29uc3QgeSA9IGNlbnRyZVkgKyBzaXplIC8gMjtcclxuXHJcbiAgICAvLyBkcmF3IGl0XHJcbiAgICBjdHguZmlsbFRleHQodGhpcy5pY29uLCB4LCB5KTtcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBVdGlsc1xyXG4gIGlzV2l0aGluQm91bmRzKHgsIHkpIHtcclxuICAgIGlmICh0aGlzLmRyYXdQb3NpdGlvbiA9PT0gbnVsbCkgeyByZXR1cm4gZmFsc2U7IH1cclxuICAgIGNvbnN0IGR4ID0gTWF0aC5hYnModGhpcy5kcmF3UG9zaXRpb24ueCAtIHgpLCBkeSA9IE1hdGguYWJzKHRoaXMuZHJhd1Bvc2l0aW9uLnkgLSB5KTtcclxuICAgIHJldHVybiBkeCAqIGR4ICsgZHkgKiBkeSA8PSB0aGlzLmRyYXdSYWRpdXMgKiB0aGlzLmRyYXdSYWRpdXM7XHJcbiAgfVxyXG4gIC8vI2VuZHJlZ2lvblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVmlld3BvcnQge1xyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIsXHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICBwdWJsaWMgc2NhbGU6IG51bWJlcixcclxuICAgIHB1YmxpYyByb3RhdGlvbjogbnVtYmVyLFxyXG4gICAgcHVibGljIHg6IG51bWJlcixcclxuICAgIHB1YmxpYyB5OiBudW1iZXJcclxuICApIHt9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGltZW5zaW9uIHsgd2lkdGg6IG51bWJlcjsgaGVpZ2h0OiBudW1iZXI7IH1cclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXNvdXJjZUxvYWRlciB7XHJcbiAgcHVibGljIHNyYzogc3RyaW5nO1xyXG4gIHB1YmxpYyBzb3VyY2VEaW06IHsgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIgfTtcclxuICBwdWJsaWMgdmlld3BvcnQ6IFZpZXdwb3J0ID0geyB3aWR0aDogMCwgaGVpZ2h0OiAwLCBzY2FsZTogMSwgcm90YXRpb246IDAsIHg6IDAsIHk6IDAgfTtcclxuICBwdWJsaWMgbWluU2NhbGUgPSAwO1xyXG4gIHB1YmxpYyBtYXhTY2FsZSA9IDQ7XHJcbiAgcHVibGljIGN1cnJlbnRJdGVtID0gMTtcclxuICBwdWJsaWMgdG90YWxJdGVtID0gMTtcclxuICBwdWJsaWMgc2hvd0l0ZW1zUXVhbnRpdHkgPSBmYWxzZTtcclxuICBwdWJsaWMgbG9hZGVkID0gZmFsc2U7XHJcbiAgcHVibGljIGxvYWRpbmcgPSBmYWxzZTtcclxuICBwdWJsaWMgcmVuZGVyaW5nID0gZmFsc2U7XHJcblxyXG4gIHByb3RlY3RlZCBfaW1hZ2U7XHJcbiAgcHJvdGVjdGVkIHJlc291cmNlQ2hhbmdlID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG5cclxuICBhYnN0cmFjdCBzZXRVcCgpO1xyXG4gIGFic3RyYWN0IGxvYWRSZXNvdXJjZSgpO1xyXG5cclxuICBwdWJsaWMgcmVzZXRWaWV3cG9ydChjYW52YXNEaW06IERpbWVuc2lvbik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKCF0aGlzLmxvYWRlZCB8fCAhY2FudmFzRGltKSB7IHJldHVybjsgfVxyXG5cclxuICAgIGNvbnN0IHJvdGF0aW9uID0gdGhpcy52aWV3cG9ydCA/IHRoaXMudmlld3BvcnQucm90YXRpb24gOiAwO1xyXG4gICAgY29uc3QgaW52ZXJ0ZWQgPSB0b1NxdWFyZUFuZ2xlKHJvdGF0aW9uKSAvIDkwICUgMiAhPT0gMDtcclxuICAgIGNvbnN0IGNhbnZhcyA9IHtcclxuICAgICAgd2lkdGg6ICFpbnZlcnRlZCA/IGNhbnZhc0RpbS53aWR0aCA6IGNhbnZhc0RpbS5oZWlnaHQsXHJcbiAgICAgIGhlaWdodDogIWludmVydGVkID8gY2FudmFzRGltLmhlaWdodCA6IGNhbnZhc0RpbS53aWR0aFxyXG4gICAgfTtcclxuXHJcbiAgICBpZiAoKChjYW52YXMuaGVpZ2h0IC8gdGhpcy5faW1hZ2UuaGVpZ2h0KSAqIHRoaXMuX2ltYWdlLndpZHRoKSA8PSBjYW52YXMud2lkdGgpIHtcclxuICAgICAgdGhpcy52aWV3cG9ydC5zY2FsZSA9IGNhbnZhcy5oZWlnaHQgLyB0aGlzLl9pbWFnZS5oZWlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZpZXdwb3J0LnNjYWxlID0gY2FudmFzLndpZHRoIC8gdGhpcy5faW1hZ2Uud2lkdGg7XHJcbiAgICB9XHJcbiAgICB0aGlzLm1pblNjYWxlID0gdGhpcy52aWV3cG9ydC5zY2FsZSAvIDQ7XHJcbiAgICB0aGlzLm1heFNjYWxlID0gdGhpcy52aWV3cG9ydC5zY2FsZSAqIDQ7XHJcblxyXG4gICAgLy8gc3RhcnQgcG9pbnQgdG8gZHJhdyBpbWFnZVxyXG4gICAgdGhpcy52aWV3cG9ydC53aWR0aCA9IHRoaXMuX2ltYWdlLndpZHRoICogdGhpcy52aWV3cG9ydC5zY2FsZTtcclxuICAgIHRoaXMudmlld3BvcnQuaGVpZ2h0ID0gdGhpcy5faW1hZ2UuaGVpZ2h0ICogdGhpcy52aWV3cG9ydC5zY2FsZTtcclxuICAgIHRoaXMudmlld3BvcnQueCA9IChjYW52YXNEaW0ud2lkdGggLSB0aGlzLnZpZXdwb3J0LndpZHRoKSAvIDI7XHJcbiAgICB0aGlzLnZpZXdwb3J0LnkgPSAoY2FudmFzRGltLmhlaWdodCAtIHRoaXMudmlld3BvcnQuaGVpZ2h0KSAvIDI7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgZHJhdyhjdHgsIGNvbmZpZzogSW1hZ2VWaWV3ZXJDb25maWcsIGNhbnZhc0RpbTogRGltZW5zaW9uLCBvbkZpbmlzaCkge1xyXG4gICAgLy8gY2xlYXIgY2FudmFzXHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhc0RpbS53aWR0aCwgY2FudmFzRGltLmhlaWdodCk7XHJcblxyXG4gICAgLy8gRHJhdyBiYWNrZ3JvdW5kIGNvbG9yO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbmZpZy5iZ1N0eWxlO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhc0RpbS53aWR0aCwgY2FudmFzRGltLmhlaWdodCk7XHJcblxyXG4gICAgLy8gZHJhdyBpbWFnZSAodHJhbnNmb3JtZWQsIHJvdGF0ZSBhbmQgc2NhbGVkKVxyXG4gICAgaWYgKCF0aGlzLmxvYWRpbmcgJiYgdGhpcy5sb2FkZWQpIHtcclxuICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLnZpZXdwb3J0LnggKyB0aGlzLnZpZXdwb3J0LndpZHRoIC8gMiwgdGhpcy52aWV3cG9ydC55ICsgdGhpcy52aWV3cG9ydC5oZWlnaHQgLyAyKTtcclxuICAgICAgY3R4LnJvdGF0ZSh0aGlzLnZpZXdwb3J0LnJvdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgIGN0eC5zY2FsZSh0aGlzLnZpZXdwb3J0LnNjYWxlLCB0aGlzLnZpZXdwb3J0LnNjYWxlKTtcclxuICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLl9pbWFnZSwgLXRoaXMuX2ltYWdlLndpZHRoIC8gMiwgLXRoaXMuX2ltYWdlLmhlaWdodCAvIDIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY3R4LmZpbGxTdHlsZSA9ICcjMzMzJztcclxuICAgICAgY3R4LmZvbnQgPSAnMjVweCBWZXJkYW5hJztcclxuICAgICAgY3R4LnRleHRBbGlnbiA9ICdjZW50ZXInO1xyXG4gICAgICBjdHguZmlsbFRleHQoY29uZmlnLmxvYWRpbmdNZXNzYWdlIHx8ICdMb2FkaW5nLi4uJywgY2FudmFzRGltLndpZHRoIC8gMiwgY2FudmFzRGltLmhlaWdodCAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRmluaXNoKGN0eCwgY29uZmlnLCBjYW52YXNEaW0pO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIG9uUmVzb3VyY2VDaGFuZ2UoKSB7IHJldHVybiB0aGlzLnJlc291cmNlQ2hhbmdlLmFzT2JzZXJ2YWJsZSgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0b1NxdWFyZUFuZ2xlKGFuZ2xlOiBudW1iZXIpIHtcclxuICByZXR1cm4gOTAgKiAoKE1hdGgudHJ1bmMoYW5nbGUgLyA5MCkgKyAoTWF0aC50cnVuYyhhbmdsZSAlIDkwKSA+IDQ1ID8gMSA6IDApKSAlIDQpO1xyXG59XHJcbiIsImltcG9ydCB7IFJlc291cmNlTG9hZGVyLCBEaW1lbnNpb24sIHRvU3F1YXJlQW5nbGUgfSBmcm9tICcuL2ltYWdldmlld2VyLm1vZGVsJztcclxuaW1wb3J0IHsgSW1hZ2VWaWV3ZXJDb25maWcgfSBmcm9tICcuL2ltYWdldmlld2VyLmNvbmZpZyc7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VSZXNvdXJjZUxvYWRlciBleHRlbmRzIFJlc291cmNlTG9hZGVyIHtcclxuXHJcbiAgc2V0VXAoKSB7XHJcbiAgICB0aGlzLmxvYWRSZXNvdXJjZSgpO1xyXG4gIH1cclxuXHJcbiAgbG9hZFJlc291cmNlKCkge1xyXG4gICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgIHRoaXMuX2ltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICB0aGlzLl9pbWFnZS5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2dCkgPT4ge1xyXG4gICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnJlc291cmNlQ2hhbmdlLm5leHQoKTtcclxuICAgIH0sIGZhbHNlKTtcclxuICAgIHRoaXMuX2ltYWdlLnNyYyA9IHRoaXMuc3JjO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhY2hlRGVmIHtcclxuICB1cmw6IHN0cmluZztcclxuICBwYWdlOiBudW1iZXI7XHJcbiAgaW1hZ2U6IGFueTtcclxufVxyXG5cclxuQEluamVjdGFibGUoeyBwcm92aWRlZEluOiAncm9vdCcgfSlcclxuZXhwb3J0IGNsYXNzIEltYWdlQ2FjaGVTZXJ2aWNlIHtcclxuXHJcbiAgcHJpdmF0ZSBfY2FjaGU6IENhY2hlRGVmW10gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7fVxyXG5cclxuICBnZXQgY2FjaGUoKTogQ2FjaGVEZWZbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2FjaGU7XHJcbiAgfVxyXG5cclxuICBnZXRDYWNoZSh1cmw6IHN0cmluZywgcGFnZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jYWNoZS5maW5kKGkgPT4gaS51cmwgPT09IHVybCAmJiBpLnBhZ2UgPT09IHBhZ2UpO1xyXG4gIH1cclxuXHJcbiAgZ2V0SW1hZ2UodXJsOiBzdHJpbmcsIHBhZ2U6IG51bWJlcikge1xyXG4gICAgY29uc3QgYyA9IHRoaXMuZ2V0Q2FjaGUodXJsLCBwYWdlKTtcclxuICAgIHJldHVybiBjID8gYy5pbWFnZSA6IG51bGw7XHJcbiAgfVxyXG5cclxuICBzYXZlSW1hZ2UodXJsOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgaW1hZ2U6IGFueSkge1xyXG4gICAgY29uc3QgY2FjaGUgPSB0aGlzLmdldENhY2hlKHVybCwgcGFnZSk7XHJcbiAgICBpZiAoY2FjaGUpIHtcclxuICAgICAgY2FjaGUuaW1hZ2UgPSBpbWFnZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuY2FjaGUucHVzaCh7IHVybCwgcGFnZSwgaW1hZ2UgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNwb3NlQ2FjaGUoKSB7XHJcbiAgICB0aGlzLmNhY2hlLmZvckVhY2goaSA9PiBVUkwucmV2b2tlT2JqZWN0VVJMKGkuaW1hZ2Uuc3JjKSk7XHJcbiAgICB0aGlzLl9jYWNoZSA9IFtdO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBSZXNvdXJjZUxvYWRlciwgRGltZW5zaW9uLCB0b1NxdWFyZUFuZ2xlIH0gZnJvbSAnLi9pbWFnZXZpZXdlci5tb2RlbCc7XHJcbmltcG9ydCB7IEltYWdlQ2FjaGVTZXJ2aWNlIH0gZnJvbSAnLi9pbWFnZWNhY2hlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJbWFnZVZpZXdlckNvbmZpZyB9IGZyb20gJy4vaW1hZ2V2aWV3ZXIuY29uZmlnJztcclxuaW1wb3J0IHsgUERGSlNTdGF0aWMsIFBERkRvY3VtZW50UHJveHksIFBERlBhZ2VQcm94eSB9IGZyb20gJ3BkZmpzLWRpc3QnO1xyXG5cclxuZGVjbGFyZSB2YXIgcGRmanNMaWI6IGFueTtcclxuZGVjbGFyZSB2YXIgcGRmanNXb3JrZXI6IGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQZGZSZXNvdXJjZUxvYWRlciBleHRlbmRzIFJlc291cmNlTG9hZGVyIHtcclxuICBwcml2YXRlIF9wZGY6IFBERkRvY3VtZW50UHJveHk7XHJcbiAgcHJpdmF0ZSBfcGFnZTogUERGUGFnZVByb3h5O1xyXG4gIHByaXZhdGUgX3BlbmRpbmdSZWxvYWQ6IGJvb2xlYW47XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX2ltYWdlQ2FjaGU6IEltYWdlQ2FjaGVTZXJ2aWNlKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICdXb3JrZXInIGluIHdpbmRvdykge1xyXG4gICAgICBpZiAocGRmanNMaWIgJiYgcGRmanNMaWIuR2xvYmFsV29ya2VyT3B0aW9ucyAmJiAhcGRmanNMaWIuR2xvYmFsV29ya2VyT3B0aW9ucy53b3JrZXJTcmMpIHtcclxuICAgICAgICBwZGZqc0xpYi5HbG9iYWxXb3JrZXJPcHRpb25zLndvcmtlclNyYyA9IHBkZmpzV29ya2VyO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnNob3dJdGVtc1F1YW50aXR5ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFVwKCkge1xyXG4gICAgY29uc3Qgdm0gPSB0aGlzO1xyXG4gICAgaWYgKHZtLmxvYWRpbmcgfHwgIXZtLnNyYykgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IGxvYWRpbmdUYXNrID0gcGRmanNMaWIuZ2V0RG9jdW1lbnQodm0uc3JjKTtcclxuICAgIHZtLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgdm0uY3VycmVudEl0ZW0gPSAxO1xyXG4gICAgbG9hZGluZ1Rhc2sudGhlbigocGRmOiBQREZEb2N1bWVudFByb3h5KSA9PiB7XHJcbiAgICAgIHZtLl9wZGYgPSBwZGY7XHJcbiAgICAgIHZtLnRvdGFsSXRlbSA9IHBkZi5udW1QYWdlcztcclxuICAgICAgdm0ubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgdm0ubG9hZFJlc291cmNlKCk7XHJcbiAgICB9LCAocmVhc29uOiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc29sZS5lcnJvcihyZWFzb24pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBsb2FkUmVzb3VyY2UoKSB7XHJcbiAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICBpZiAoIXZtLmxvYWRlZCkge1xyXG4gICAgICB2bS5fcGVuZGluZ1JlbG9hZCA9IHRydWU7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZtLmxvYWRlZCA9IGZhbHNlO1xyXG4gICAgY29uc3QgdXJsID0gdm0uc3JjO1xyXG4gICAgY29uc3QgcGFnZSA9IHZtLmN1cnJlbnRJdGVtO1xyXG5cclxuICAgIHZtLl9wZGYuZ2V0UGFnZShwYWdlKS50aGVuKChwZGZQYWdlKSA9PiB7XHJcbiAgICAgIHZtLl9wYWdlID0gcGRmUGFnZTtcclxuICAgICAgdm0ubG9hZEltYWdlKHVybCwgcGFnZSwgKCkgPT4ge1xyXG4gICAgICAgIHZtLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdm0ubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmICh2bS5fcGVuZGluZ1JlbG9hZCkge1xyXG4gICAgICAgICAgdm0uX3BlbmRpbmdSZWxvYWQgPSBmYWxzZTtcclxuICAgICAgICAgIHZtLmxvYWRSZXNvdXJjZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2bS5yZXNvdXJjZUNoYW5nZS5uZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBsb2FkSW1hZ2Uoc3JjOiBzdHJpbmcsIHBhZ2U6IG51bWJlciwgb25GaW5pc2g6ICgpID0+IHZvaWQpIHtcclxuICAgIGNvbnN0IHZtID0gdGhpcztcclxuICAgIGNvbnN0IGNhY2hlaW1nID0gdm0uX2ltYWdlQ2FjaGUuZ2V0SW1hZ2Uoc3JjLCBwYWdlKTtcclxuICAgIGlmIChjYWNoZWltZykge1xyXG4gICAgICB2bS5faW1hZ2UgPSBjYWNoZWltZztcclxuICAgICAgb25GaW5pc2goKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIGNvbnN0IHBhZ2VWcCA9IHZtLl9wYWdlLmdldFZpZXdwb3J0KDIpO1xyXG5cclxuICAgIGNhbnZhcy53aWR0aCA9IHBhZ2VWcC53aWR0aDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSBwYWdlVnAuaGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IHJlbmRlckNvbnRleHQgPSB7XHJcbiAgICAgIGNhbnZhc0NvbnRleHQ6IGNvbnRleHQsXHJcbiAgICAgIHZpZXdwb3J0OiBwYWdlVnBcclxuICAgIH07XHJcbiAgICBjb25zdCByZW5kZXJUYXNrID0gdm0uX3BhZ2UucmVuZGVyKHJlbmRlckNvbnRleHQpO1xyXG4gICAgcmVuZGVyVGFzay50aGVuKGZ1bmN0aW9uICgpIHtcclxuICAgICAgY2FudmFzLnRvQmxvYihibG9iID0+IHtcclxuICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWcub25sb2FkID0gb25GaW5pc2g7XHJcbiAgICAgICAgaW1nLnNyYyA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgdm0uX2ltYWdlQ2FjaGUuc2F2ZUltYWdlKHNyYywgcGFnZSwgaW1nKTtcclxuICAgICAgICB2bS5faW1hZ2UgPSBpbWc7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgUmVuZGVyZXIyLCBJbmplY3QsIE9uRGVzdHJveSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBJbWFnZVZpZXdlckNvbmZpZywgSU1BR0VWSUVXRVJfQ09ORklHLCBJTUFHRVZJRVdFUl9DT05GSUdfREVGQVVMVCwgQnV0dG9uQ29uZmlnLCBCdXR0b25TdHlsZSB9IGZyb20gJy4vaW1hZ2V2aWV3ZXIuY29uZmlnJztcclxuaW1wb3J0IHsgVmlld3BvcnQsIEJ1dHRvbiwgdG9TcXVhcmVBbmdsZSwgUmVzb3VyY2VMb2FkZXIgfSBmcm9tICcuL2ltYWdldmlld2VyLm1vZGVsJztcclxuaW1wb3J0IHsgSW1hZ2VSZXNvdXJjZUxvYWRlciB9IGZyb20gJy4vaW1hZ2UubG9hZGVyJztcclxuaW1wb3J0IHsgSW1hZ2VDYWNoZVNlcnZpY2UgfSBmcm9tICcuL2ltYWdlY2FjaGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFBkZlJlc291cmNlTG9hZGVyIH0gZnJvbSAnLi9wZGYubG9hZGVyJztcclxuXHJcbmNvbnN0IE1JTl9UT09MVElQX1dJRFRIX1NQQUNFID0gNTAwO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduZ3gtaW1hZ2V2aWV3ZXInLFxyXG4gIHRlbXBsYXRlOiBgXHJcbiAgICA8Y2FudmFzICNpbWFnZUNvbnRhaW5lciBbd2lkdGhdPVwid2lkdGhcIiBbaGVpZ2h0XT1cImhlaWdodFwiXHJcbiAgICAgICh0YXApPVwib25UYXAoJGV2ZW50KVwiIChwaW5jaGluKT1cInByb2Nlc3NUb3VjaEV2ZW50KCRldmVudClcIiAocGluY2hvdXQpPVwicHJvY2Vzc1RvdWNoRXZlbnQoJGV2ZW50KVwiXHJcbiAgICAgIChwYW5tb3ZlKT1cInByb2Nlc3NUb3VjaEV2ZW50KCRldmVudClcIiAocGFuZW5kKT1cIm9uVG91Y2hFbmQoKVwiIChyb3RhdGVtb3ZlKT1cInByb2Nlc3NUb3VjaEV2ZW50KCRldmVudClcIlxyXG4gICAgICAgIChyb3RhdGVlbmQpPVwib25Ub3VjaEVuZCgpXCI+XHJcbiAgICA8L2NhbnZhcz5cclxuICBgLFxyXG4gIHN0eWxlczogW2BcclxuICAgIDpob3N0IHsgZGlzcGxheTogYmxvY2sgfVxyXG4gICAgOmhvc3QgY2FudmFzIHsgbWFyZ2luOiAwIGF1dG87IGRpc3BsYXk6IGJsb2NrIH1cclxuICAgIFtoaWRkZW5dIHsgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50IH1cclxuICBgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW1hZ2VWaWV3ZXJDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAvLyNyZWdpb24gSW5wdXQgcHJvcGVydGllc1xyXG4gIHByaXZhdGUgX3NyYzogc3RyaW5nIHwgRmlsZTtcclxuICBnZXQgc3JjKCkgeyByZXR1cm4gdGhpcy5fc3JjOyB9XHJcbiAgQElucHV0KCdzcmMnKSBzZXQgc3JjKHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX3NyYykgeyByZXR1cm47IH1cclxuICAgIHRoaXMuX3NyYyA9IHZhbHVlO1xyXG4gICAgdGhpcy5zZXRVcFJlc291cmNlKCk7XHJcbiAgfVxyXG5cclxuICAvLyBGSVggbm90IHdvcmtpZ24gcHJvcGVybHlcclxuICBwcml2YXRlIF9maWxldHlwZTogc3RyaW5nO1xyXG4gIGdldCBmaWxldHlwZSgpIHsgcmV0dXJuIHRoaXMuX2ZpbGV0eXBlOyB9XHJcbiAgQElucHV0KCdmaWxldHlwZScpIHNldCBmaWxldHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX2ZpbGV0eXBlKSB7IHJldHVybjsgfVxyXG4gICAgdGhpcy5fZmlsZXR5cGUgPSB2YWx1ZTtcclxuICAgIHRoaXMuc2V0VXBSZXNvdXJjZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLl93aWR0aDsgfVxyXG4gIEBJbnB1dCgnd2lkdGgnKSBzZXQgd2lkdGgodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5fd2lkdGgpIHsgcmV0dXJuOyB9XHJcbiAgICB0aGlzLl93aWR0aCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2NhbnZhcykgeyB0aGlzLl9jYW52YXMud2lkdGggPSB0aGlzLl93aWR0aDsgfVxyXG4gICAgdGhpcy5yZXNldEltYWdlKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5faGVpZ2h0OyB9XHJcbiAgQElucHV0KCdoZWlnaHQnKSBzZXQgaGVpZ2h0KHZhbHVlKSB7XHJcbiAgICBpZiAodmFsdWUgPT09IHRoaXMuX2hlaWdodCkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuX2hlaWdodCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2NhbnZhcykgeyB0aGlzLl9jYW52YXMuaGVpZ2h0ID0gdGhpcy5faGVpZ2h0OyB9XHJcbiAgICB0aGlzLnJlc2V0SW1hZ2UoKTtcclxuICB9XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2ltYWdlQ29udGFpbmVyJykgY2FudmFzUmVmOiBhbnk7XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBQcml2YXRlIHByb3BlcnRpZXNcclxuICAvLyBDYW52YXMgMkQgY29udGV4dFxyXG4gIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5cclxuICAvLyBkaXJ0eSBzdGF0ZVxyXG4gIHByaXZhdGUgX2RpcnR5ID0gdHJ1ZTtcclxuXHJcbiAgLy8gYWN0aW9uIGJ1dHRvbnNcclxuICBwcml2YXRlIF9uZXh0UGFnZUJ1dHRvbjogQnV0dG9uO1xyXG4gIHByaXZhdGUgX2JlZm9yZVBhZ2VCdXR0b246IEJ1dHRvbjtcclxuICBwcml2YXRlIF96b29tT3V0QnV0dG9uOiBCdXR0b247XHJcbiAgcHJpdmF0ZSBfem9vbUluQnV0dG9uOiBCdXR0b247XHJcbiAgcHJpdmF0ZSBfcm90YXRlTGVmdEJ1dHRvbjogQnV0dG9uO1xyXG4gIHByaXZhdGUgX3JvdGF0ZVJpZ2h0QnV0dG9uOiBCdXR0b247XHJcbiAgcHJpdmF0ZSBfcmVzZXRCdXR0b246IEJ1dHRvbjtcclxuXHJcbiAgLy8gY29udGFpbnMgYWxsIGFjdGl2ZSBidXR0b25zXHJcbiAgcHJpdmF0ZSBfYnV0dG9ucyA9IFtdO1xyXG5cclxuICAvLyBjdXJyZW50IHRvb2wgdGlwICh1c2VkIHRvIHRyYWNrIGNoYW5nZSBvZiB0b29sIHRpcClcclxuICBwcml2YXRlIF9jdXJyZW50VG9vbHRpcCA9IG51bGw7XHJcblxyXG4gIC8vIGNhY2hlZCBkYXRhIHdoZW4gdG91Y2ggZXZlbnRzIHN0YXJ0ZWRcclxuICBwcml2YXRlIF90b3VjaFN0YXJ0U3RhdGU6IGFueSA9IHt9O1xyXG5cclxuICAvLyBsaXN0IG9mIGV2ZW50IGxpc3RlbmVyIGRlc3Ryb3llcnNcclxuICBwcml2YXRlIF9saXN0ZW5EZXN0cm95TGlzdCA9IFtdO1xyXG5cclxuICAvLyBpbWFnZSAvIFBkZiBEcmF3YWJsZSBSZXNvdXJjZVxyXG4gIHByaXZhdGUgX3Jlc291cmNlOiBSZXNvdXJjZUxvYWRlcjtcclxuICBwcml2YXRlIF9yZXNvdXJjZUNoYW5nZVN1YjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAvLyBDYWNoaW5nIHJlc291cmNlTG9hZGVyIGluc3RhbmNlcyB0byByZXVzZVxyXG4gIHByaXZhdGUgX2ltYWdlUmVzb3VyY2U6IEltYWdlUmVzb3VyY2VMb2FkZXI7XHJcbiAgcHJpdmF0ZSBfcGRmUmVzb3VyY2U6IFBkZlJlc291cmNlTG9hZGVyO1xyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIExpZmVjeWNsZSBldmVudHNcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgX3Nhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyMixcclxuICAgIHByaXZhdGUgX2ltYWdlQ2FjaGU6IEltYWdlQ2FjaGVTZXJ2aWNlLFxyXG4gICAgQEluamVjdChJTUFHRVZJRVdFUl9DT05GSUcpIHByaXZhdGUgY29uZmlnOiBJbWFnZVZpZXdlckNvbmZpZ1xyXG4gICkge1xyXG4gICAgdGhpcy5jb25maWcgPSB0aGlzLmV4dGVuZHNEZWZhdWx0Q29uZmlnKGNvbmZpZyk7XHJcbiAgICB0aGlzLl9uZXh0UGFnZUJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcy5jb25maWcubmV4dFBhZ2VCdXR0b24sIHRoaXMuY29uZmlnLmJ1dHRvblN0eWxlKTtcclxuICAgIHRoaXMuX2JlZm9yZVBhZ2VCdXR0b24gPSBuZXcgQnV0dG9uKHRoaXMuY29uZmlnLmJlZm9yZVBhZ2VCdXR0b24sIHRoaXMuY29uZmlnLmJ1dHRvblN0eWxlKTtcclxuICAgIHRoaXMuX3pvb21PdXRCdXR0b24gPSBuZXcgQnV0dG9uKHRoaXMuY29uZmlnLnpvb21PdXRCdXR0b24sIHRoaXMuY29uZmlnLmJ1dHRvblN0eWxlKTtcclxuICAgIHRoaXMuX3pvb21JbkJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcy5jb25maWcuem9vbUluQnV0dG9uLCB0aGlzLmNvbmZpZy5idXR0b25TdHlsZSk7XHJcbiAgICB0aGlzLl9yb3RhdGVMZWZ0QnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLmNvbmZpZy5yb3RhdGVMZWZ0QnV0dG9uLCB0aGlzLmNvbmZpZy5idXR0b25TdHlsZSk7XHJcbiAgICB0aGlzLl9yb3RhdGVSaWdodEJ1dHRvbiA9IG5ldyBCdXR0b24odGhpcy5jb25maWcucm90YXRlUmlnaHRCdXR0b24sIHRoaXMuY29uZmlnLmJ1dHRvblN0eWxlKTtcclxuICAgIHRoaXMuX3Jlc2V0QnV0dG9uID0gbmV3IEJ1dHRvbih0aGlzLmNvbmZpZy5yZXNldEJ1dHRvbiwgdGhpcy5jb25maWcuYnV0dG9uU3R5bGUpO1xyXG4gICAgdGhpcy5fYnV0dG9ucyA9IFtcclxuICAgICAgdGhpcy5fem9vbU91dEJ1dHRvbixcclxuICAgICAgdGhpcy5fem9vbUluQnV0dG9uLFxyXG4gICAgICB0aGlzLl9yb3RhdGVMZWZ0QnV0dG9uLFxyXG4gICAgICB0aGlzLl9yb3RhdGVSaWdodEJ1dHRvbixcclxuICAgICAgdGhpcy5fcmVzZXRCdXR0b25cclxuICAgIF0uZmlsdGVyKGl0ZW0gPT4gaXRlbS5kaXNwbGF5KVxyXG4gICAgICAuc29ydCgoYSwgYikgPT4gYS5zb3J0SWQgLSBiLnNvcnRJZCk7XHJcbiAgfVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICB0aGlzLl9jYW52YXMgPSB0aGlzLmNhbnZhc1JlZi5uYXRpdmVFbGVtZW50O1xyXG4gICAgdGhpcy5fY29udGV4dCA9IHRoaXMuX2NhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vIHNldHRpbmcgY2FudmFzIGRpbWVudGlvblxyXG4gICAgdGhpcy5fY2FudmFzLndpZHRoID0gdGhpcy53aWR0aCB8fCB0aGlzLmNvbmZpZy53aWR0aDtcclxuICAgIHRoaXMuX2NhbnZhcy5oZWlnaHQgPSB0aGlzLmhlaWdodCB8fCB0aGlzLmNvbmZpZy5oZWlnaHQ7XHJcblxyXG4gICAgLy8gc2V0dGluZyBidXR0b25zIGFjdGlvbnNcclxuICAgIHRoaXMuX25leHRQYWdlQnV0dG9uLm9uQ2xpY2sgPSAoZXZ0KSA9PiB7IHRoaXMubmV4dFBhZ2UoKTsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgdGhpcy5fYmVmb3JlUGFnZUJ1dHRvbi5vbkNsaWNrID0gKGV2dCkgPT4geyB0aGlzLnByZXZpb3VzUGFnZSgpOyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICB0aGlzLl96b29tT3V0QnV0dG9uLm9uQ2xpY2sgPSAoZXZ0KSA9PiB7IHRoaXMuem9vbU91dCgpOyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICB0aGlzLl96b29tSW5CdXR0b24ub25DbGljayA9IChldnQpID0+IHsgdGhpcy56b29tSW4oKTsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgdGhpcy5fcm90YXRlTGVmdEJ1dHRvbi5vbkNsaWNrID0gKGV2dCkgPT4geyB0aGlzLnJvdGF0ZUxlZnQoKTsgcmV0dXJuIGZhbHNlOyB9O1xyXG4gICAgdGhpcy5fcm90YXRlUmlnaHRCdXR0b24ub25DbGljayA9IChldnQpID0+IHsgdGhpcy5yb3RhdGVSaWdodCgpOyByZXR1cm4gZmFsc2U7IH07XHJcbiAgICB0aGlzLl9yZXNldEJ1dHRvbi5vbkNsaWNrID0gKGV2dCkgPT4geyB0aGlzLnJlc2V0SW1hZ2UoKTsgcmV0dXJuIGZhbHNlOyB9O1xyXG5cclxuICAgIC8vIHJlZ2lzdGVyIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIHRoaXMudXBkYXRlQ2FudmFzKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIC8vIHVucmVnaXN0ZSBldmVudCBsaXN0ZW5lcnNcclxuICAgIHRoaXMuX2xpc3RlbkRlc3Ryb3lMaXN0LmZvckVhY2gobGlzdGVuRGVzdHJveSA9PiB7XHJcbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuRGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgIGxpc3RlbkRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLl9pbWFnZUNhY2hlLmRpc3Bvc2VDYWNoZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0VXBSZXNvdXJjZSgpIHtcclxuICAgIGlmICh0aGlzLmlzSW1hZ2UodGhpcy5zcmMpICYmICghdGhpcy5fcmVzb3VyY2UgfHwgISh0aGlzLl9yZXNvdXJjZSBpbnN0YW5jZW9mIEltYWdlUmVzb3VyY2VMb2FkZXIpKSkge1xyXG4gICAgICBpZiAodGhpcy5fcmVzb3VyY2VDaGFuZ2VTdWIpIHtcclxuICAgICAgICB0aGlzLl9yZXNvdXJjZUNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5faW1hZ2VSZXNvdXJjZSkge1xyXG4gICAgICAgIHRoaXMuX2ltYWdlUmVzb3VyY2UgPSBuZXcgSW1hZ2VSZXNvdXJjZUxvYWRlcigpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuX3Jlc291cmNlID0gdGhpcy5faW1hZ2VSZXNvdXJjZTtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5pc1BkZih0aGlzLnNyYykgJiYgKCF0aGlzLl9yZXNvdXJjZSB8fCAhKHRoaXMuX3Jlc291cmNlIGluc3RhbmNlb2YgUGRmUmVzb3VyY2VMb2FkZXIpKSkge1xyXG4gICAgICBpZiAodGhpcy5fcmVzb3VyY2VDaGFuZ2VTdWIpIHtcclxuICAgICAgICB0aGlzLl9yZXNvdXJjZUNoYW5nZVN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICghdGhpcy5fcGRmUmVzb3VyY2UpIHtcclxuICAgICAgICB0aGlzLl9wZGZSZXNvdXJjZSA9IG5ldyBQZGZSZXNvdXJjZUxvYWRlcih0aGlzLl9pbWFnZUNhY2hlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLl9yZXNvdXJjZSA9IHRoaXMuX3BkZlJlc291cmNlO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuX3Jlc291cmNlKSB7XHJcbiAgICAgIHRoaXMuX3Jlc291cmNlLnNyYyA9IHRoaXMuc3JjIGluc3RhbmNlb2YgRmlsZSA/IFVSTC5jcmVhdGVPYmplY3RVUkwodGhpcy5zcmMpIDogdGhpcy5zcmM7XHJcbiAgICAgIHRoaXMuX3Jlc291cmNlQ2hhbmdlU3ViID0gdGhpcy5fcmVzb3VyY2Uub25SZXNvdXJjZUNoYW5nZSgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXMoKTtcclxuICAgICAgICBpZiAodGhpcy5zcmMgaW5zdGFuY2VvZiBGaWxlKSB7XHJcbiAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHRoaXMuX3Jlc291cmNlLnNyYyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5fcmVzb3VyY2Uuc2V0VXAoKTtcclxuICAgICAgdGhpcy5yZXNldEltYWdlKCk7XHJcbiAgICAgIGlmICh0aGlzLl9jb250ZXh0KSB7IHRoaXMudXBkYXRlQ2FudmFzKCk7IH1cclxuICAgIH1cclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBUb3VjaCBldmVudHNcclxuICBvblRhcChldnQpIHtcclxuICAgIGNvbnN0IGFjdGl2ZUVsZW1lbnQgPSB0aGlzLmdldFVJRWxlbWVudCh0aGlzLnNjcmVlblRvQ2FudmFzQ2VudHJlKGV2dC5jZW50ZXIpKTtcclxuICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBudWxsKSB7IGFjdGl2ZUVsZW1lbnQub25DbGljayhldnQpOyB9XHJcbiAgfVxyXG5cclxuICBvblRvdWNoRW5kKCkge1xyXG4gICAgdGhpcy5fdG91Y2hTdGFydFN0YXRlLnZpZXdwb3J0ID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fdG91Y2hTdGFydFN0YXRlLnNjYWxlID0gdW5kZWZpbmVkO1xyXG4gICAgdGhpcy5fdG91Y2hTdGFydFN0YXRlLnJvdGF0ZSA9IHVuZGVmaW5lZDtcclxuICB9XHJcblxyXG4gIHByb2Nlc3NUb3VjaEV2ZW50KGV2dCkge1xyXG4gICAgLy8gcHJvY2VzcyBwYW5cclxuICAgIGlmICghdGhpcy5fdG91Y2hTdGFydFN0YXRlLnZpZXdwb3J0KSB7IHRoaXMuX3RvdWNoU3RhcnRTdGF0ZS52aWV3cG9ydCA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuX3Jlc291cmNlLnZpZXdwb3J0KTsgfVxyXG5cclxuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5fcmVzb3VyY2Uudmlld3BvcnQ7XHJcbiAgICB2aWV3cG9ydC54ID0gdGhpcy5fdG91Y2hTdGFydFN0YXRlLnZpZXdwb3J0LnggKyBldnQuZGVsdGFYO1xyXG4gICAgdmlld3BvcnQueSA9IHRoaXMuX3RvdWNoU3RhcnRTdGF0ZS52aWV3cG9ydC55ICsgZXZ0LmRlbHRhWTtcclxuXHJcbiAgICAvLyBwcm9jZXNzIHBpbmNoIGluL291dFxyXG4gICAgaWYgKCF0aGlzLl90b3VjaFN0YXJ0U3RhdGUuc2NhbGUpIHsgdGhpcy5fdG91Y2hTdGFydFN0YXRlLnNjYWxlID0gdGhpcy5fcmVzb3VyY2Uudmlld3BvcnQuc2NhbGU7IH1cclxuICAgIGNvbnN0IG5ld1NjYWxlID0gdGhpcy5fdG91Y2hTdGFydFN0YXRlLnNjYWxlICogZXZ0LnNjYWxlO1xyXG4gICAgdmlld3BvcnQuc2NhbGUgPSBuZXdTY2FsZSA+IHRoaXMuX3Jlc291cmNlLm1heFNjYWxlID8gdGhpcy5fcmVzb3VyY2UubWF4U2NhbGUgOlxyXG4gICAgICBuZXdTY2FsZSA8IHRoaXMuX3Jlc291cmNlLm1pblNjYWxlID8gdGhpcy5fcmVzb3VyY2UubWluU2NhbGUgOiBuZXdTY2FsZTtcclxuXHJcbiAgICAvLyBwcm9jZXNzIHJvdGF0ZSBsZWZ0L3JpZ2h0XHJcbiAgICBpZiAoIXRoaXMuX3RvdWNoU3RhcnRTdGF0ZS5yb3RhdGUpIHsgdGhpcy5fdG91Y2hTdGFydFN0YXRlLnJvdGF0ZSA9IHsgcm90YXRpb246IHZpZXdwb3J0LnJvdGF0aW9uLCBzdGFydFJvdGF0ZTogZXZ0LnJvdGF0aW9uIH07IH1cclxuICAgIGlmIChldnQucm90YXRpb24gIT09IDApIHtcclxuICAgICAgY29uc3QgbmV3QW5nbGUgPSB0aGlzLl90b3VjaFN0YXJ0U3RhdGUucm90YXRlLnJvdGF0aW9uICsgZXZ0LnJvdGF0aW9uIC0gdGhpcy5fdG91Y2hTdGFydFN0YXRlLnJvdGF0ZS5zdGFydFJvdGF0ZTtcclxuICAgICAgdmlld3BvcnQucm90YXRpb24gPSB0aGlzLmNvbmZpZy5yb3RhdGVTdGVwcGVyID8gdG9TcXVhcmVBbmdsZShuZXdBbmdsZSkgOiBuZXdBbmdsZTtcclxuICAgIH1cclxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBNb3VzZSBFdmVudHNcclxuICBwcml2YXRlIGFkZEV2ZW50TGlzdGVuZXJzKCkge1xyXG4gICAgLy8gem9vbWluZ1xyXG4gICAgdGhpcy5fbGlzdGVuRGVzdHJveUxpc3QucHVzaCh0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5fY2FudmFzLCAnRE9NTW91c2VTY3JvbGwnLCAoZXZ0KSA9PiB0aGlzLm9uTW91c2VXaGVlbChldnQpKSk7XHJcbiAgICB0aGlzLl9saXN0ZW5EZXN0cm95TGlzdC5wdXNoKHRoaXMuX3JlbmRlcmVyLmxpc3Rlbih0aGlzLl9jYW52YXMsICdtb3VzZXdoZWVsJywgKGV2dCkgPT4gdGhpcy5vbk1vdXNlV2hlZWwoZXZ0KSkpO1xyXG5cclxuICAgIC8vIHNob3cgdG9vbHRpcCB3aGVuIG1vdXNlb3ZlciBpdFxyXG4gICAgdGhpcy5fbGlzdGVuRGVzdHJveUxpc3QucHVzaCh0aGlzLl9yZW5kZXJlci5saXN0ZW4odGhpcy5fY2FudmFzLCAnbW91c2Vtb3ZlJywgKGV2dCkgPT5cclxuICAgICAgdGhpcy5jaGVja1Rvb2x0aXBBY3RpdmF0aW9uKHRoaXMuc2NyZWVuVG9DYW52YXNDZW50cmUoeyB4OiBldnQuY2xpZW50WCwgeTogZXZ0LmNsaWVudFkgfSkpXHJcbiAgICApKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25Nb3VzZVdoZWVsKGV2dCkge1xyXG4gICAgaWYgKCFldnQpIHsgZXZ0ID0gZXZlbnQ7IH1cclxuICAgIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKGV2dC5kZXRhaWwgPCAwIHx8IGV2dC53aGVlbERlbHRhID4gMCkgeyAvLyB1cCAtPiBsYXJnZXJcclxuICAgICAgdGhpcy56b29tSW4oKTtcclxuICAgIH0gZWxzZSB7IC8vIGRvd24gLT4gc21hbGxlclxyXG4gICAgICB0aGlzLnpvb21PdXQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tUb29sdGlwQWN0aXZhdGlvbihwb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xyXG4gICAgdGhpcy5nZXRVSUVsZW1lbnRzKCkuZm9yRWFjaCh4ID0+IHguaG92ZXIgPSBmYWxzZSk7XHJcbiAgICBjb25zdCBhY3RpdmVFbGVtZW50ID0gdGhpcy5nZXRVSUVsZW1lbnQocG9zKTtcclxuICAgIGNvbnN0IG9sZFRvb2xUaXAgPSB0aGlzLl9jdXJyZW50VG9vbHRpcDtcclxuICAgIGlmIChhY3RpdmVFbGVtZW50ICE9PSBudWxsKSB7XHJcbiAgICAgIGlmICh0eXBlb2YgYWN0aXZlRWxlbWVudC5ob3ZlciAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICBhY3RpdmVFbGVtZW50LmhvdmVyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZiAodHlwZW9mIGFjdGl2ZUVsZW1lbnQudG9vbHRpcCAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICB0aGlzLl9jdXJyZW50VG9vbHRpcCA9IGFjdGl2ZUVsZW1lbnQudG9vbHRpcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG9sZFRvb2xUaXAgIT09IHRoaXMuX2N1cnJlbnRUb29sdGlwKSB7IHRoaXMuX2RpcnR5ID0gdHJ1ZTsgfVxyXG4gIH1cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIEJ1dHRvbiBBY3Rpb25zXHJcblxyXG4gIHByaXZhdGUgbmV4dFBhZ2UoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Jlc291cmNlKSB7IHJldHVybjsgfVxyXG4gICAgaWYgKHRoaXMuX3Jlc291cmNlLmN1cnJlbnRJdGVtID49IHRoaXMuX3Jlc291cmNlLnRvdGFsSXRlbSkgeyByZXR1cm47IH1cclxuICAgIGlmICh0aGlzLl9yZXNvdXJjZS5jdXJyZW50SXRlbSA8IDEpIHsgdGhpcy5fcmVzb3VyY2UuY3VycmVudEl0ZW0gPSAwOyB9XHJcbiAgICB0aGlzLl9yZXNvdXJjZS5jdXJyZW50SXRlbSsrO1xyXG4gICAgdGhpcy5fcmVzb3VyY2UubG9hZFJlc291cmNlKCk7XHJcbiAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHByZXZpb3VzUGFnZSgpIHtcclxuICAgIGlmICghdGhpcy5fcmVzb3VyY2UpIHsgcmV0dXJuOyB9XHJcbiAgICBpZiAodGhpcy5fcmVzb3VyY2UuY3VycmVudEl0ZW0gPD0gMSkgeyByZXR1cm47IH1cclxuICAgIGlmICh0aGlzLl9yZXNvdXJjZS5jdXJyZW50SXRlbSA+IHRoaXMuX3Jlc291cmNlLnRvdGFsSXRlbSkgeyB0aGlzLl9yZXNvdXJjZS5jdXJyZW50SXRlbSA9IHRoaXMuX3Jlc291cmNlLnRvdGFsSXRlbSArIDE7IH1cclxuICAgIHRoaXMuX3Jlc291cmNlLmN1cnJlbnRJdGVtLS07XHJcbiAgICB0aGlzLl9yZXNvdXJjZS5sb2FkUmVzb3VyY2UoKTtcclxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgem9vbUluKCkge1xyXG4gICAgaWYgKCF0aGlzLl9yZXNvdXJjZSkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IG5ld1NjYWxlID0gdGhpcy5fcmVzb3VyY2Uudmlld3BvcnQuc2NhbGUgKiAoMSArIHRoaXMuY29uZmlnLnNjYWxlU3RlcCk7XHJcbiAgICB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydC5zY2FsZSA9IG5ld1NjYWxlID4gdGhpcy5fcmVzb3VyY2UubWF4U2NhbGUgPyB0aGlzLl9yZXNvdXJjZS5tYXhTY2FsZSA6IG5ld1NjYWxlO1xyXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB6b29tT3V0KCkge1xyXG4gICAgaWYgKCF0aGlzLl9yZXNvdXJjZSkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IG5ld1NjYWxlID0gdGhpcy5fcmVzb3VyY2Uudmlld3BvcnQuc2NhbGUgKiAoMSAtIHRoaXMuY29uZmlnLnNjYWxlU3RlcCk7XHJcbiAgICB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydC5zY2FsZSA9IG5ld1NjYWxlIDwgdGhpcy5fcmVzb3VyY2UubWluU2NhbGUgPyB0aGlzLl9yZXNvdXJjZS5taW5TY2FsZSA6IG5ld1NjYWxlO1xyXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByb3RhdGVMZWZ0KCkge1xyXG4gICAgaWYgKCF0aGlzLl9yZXNvdXJjZSkgeyByZXR1cm47IH1cclxuICAgIGNvbnN0IHZpZXdwb3J0ID0gdGhpcy5fcmVzb3VyY2Uudmlld3BvcnQ7XHJcbiAgICB2aWV3cG9ydC5yb3RhdGlvbiA9IHZpZXdwb3J0LnJvdGF0aW9uID09PSAwID8gMjcwIDogdmlld3BvcnQucm90YXRpb24gLSA5MDtcclxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcm90YXRlUmlnaHQoKSB7XHJcbiAgICBpZiAoIXRoaXMuX3Jlc291cmNlKSB7IHJldHVybjsgfVxyXG4gICAgY29uc3Qgdmlld3BvcnQgPSB0aGlzLl9yZXNvdXJjZS52aWV3cG9ydDtcclxuICAgIHZpZXdwb3J0LnJvdGF0aW9uID0gdmlld3BvcnQucm90YXRpb24gPT09IDI3MCA/IDAgOiB2aWV3cG9ydC5yb3RhdGlvbiArIDkwO1xyXG4gICAgdGhpcy5fZGlydHkgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXNldEltYWdlKCkge1xyXG4gICAgaWYgKCF0aGlzLl9yZXNvdXJjZSkgeyByZXR1cm47IH1cclxuICAgIHRoaXMuX3Jlc291cmNlLnJlc2V0Vmlld3BvcnQodGhpcy5fY2FudmFzKTtcclxuICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcclxuICB9XHJcbiAgLy8jZW5kcmVnaW9uXHJcblxyXG4gIC8vI3JlZ2lvbiBEcmF3IENhbnZhc1xyXG4gIHByaXZhdGUgdXBkYXRlQ2FudmFzKCkge1xyXG4gICAgdGhpcy5yZXNldEltYWdlKCk7XHJcblxyXG4gICAgLy8gc3RhcnQgbmV3IHJlbmRlciBsb29wXHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICBjb25zdCB2bSA9IHRoaXM7XHJcbiAgICAvLyBvbmx5IHJlLXJlbmRlciBpZiBkaXJ0eVxyXG4gICAgaWYgKHRoaXMuX2RpcnR5ICYmIHRoaXMuX3Jlc291cmNlKSB7XHJcbiAgICAgIHRoaXMuX2RpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgICBjb25zdCBjdHggPSB0aGlzLl9jb250ZXh0O1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG5cclxuICAgICAgdGhpcy5fcmVzb3VyY2UuZHJhdyhjdHgsIHRoaXMuY29uZmlnLCB0aGlzLl9jYW52YXMsICgpID0+IHtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICBpZiAodm0uX3Jlc291cmNlLmxvYWRlZCkge1xyXG4gICAgICAgICAgLy8gZHJhdyBidXR0b25zXHJcbiAgICAgICAgICB0aGlzLmRyYXdCdXR0b25zKGN0eCk7XHJcblxyXG4gICAgICAgICAgLy8gZHJhdyBwYWdpbmF0b3JcclxuICAgICAgICAgIGlmICh0aGlzLl9yZXNvdXJjZS5zaG93SXRlbXNRdWFudGl0eSkge1xyXG4gICAgICAgICAgICB0aGlzLmRyYXdQYWdpbmF0b3IoY3R4KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucmVuZGVyKCkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3QnV0dG9ucyhjdHgpIHtcclxuICAgIGNvbnN0IHBhZGRpbmcgPSB0aGlzLmNvbmZpZy50b29sdGlwcy5wYWRkaW5nO1xyXG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5jb25maWcudG9vbHRpcHMucmFkaXVzO1xyXG4gICAgY29uc3QgZ2FwID0gMiAqIHJhZGl1cyArIHBhZGRpbmc7XHJcbiAgICBjb25zdCB4ID0gdGhpcy5fY2FudmFzLndpZHRoIC0gcmFkaXVzIC0gcGFkZGluZztcclxuICAgIGNvbnN0IHkgPSB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gcmFkaXVzIC0gcGFkZGluZztcclxuXHJcbiAgICAvLyBkcmF3IGJ1dHRvbnNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fYnV0dG9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB0aGlzLl9idXR0b25zW2ldLmRyYXcoY3R4LCB4LCB5IC0gZ2FwICogaSwgcmFkaXVzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRvb2x0aXBcclxuICAgIGlmICh0aGlzLl9jdXJyZW50VG9vbHRpcCAhPT0gbnVsbCAmJiB0aGlzLl9jYW52YXMud2lkdGggPiBNSU5fVE9PTFRJUF9XSURUSF9TUEFDRSkge1xyXG4gICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICBjb25zdCBmb250U2l6ZSA9IHJhZGl1cztcclxuICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZSArICdweCBzYW5zLXNlcmlmJztcclxuXHJcbiAgICAgIC8vIGNhbGN1bGF0ZSBwb3NpdGlvblxyXG4gICAgICBjb25zdCB0ZXh0U2l6ZSA9IGN0eC5tZWFzdXJlVGV4dCh0aGlzLl9jdXJyZW50VG9vbHRpcCkud2lkdGhcclxuICAgICAgICAsIHJlY3RXaWR0aCA9IHRleHRTaXplICsgcGFkZGluZ1xyXG4gICAgICAgICwgcmVjdEhlaWdodCA9IGZvbnRTaXplICogMC43MCArIHBhZGRpbmdcclxuICAgICAgICAsIHJlY3RYID0gdGhpcy5fY2FudmFzLndpZHRoXHJcbiAgICAgICAgICAtICgyICogcmFkaXVzICsgMiAqIHBhZGRpbmcpIC8vIGJ1dHRvbnNcclxuICAgICAgICAgIC0gcmVjdFdpZHRoXHJcbiAgICAgICAgLCByZWN0WSA9IHRoaXMuX2NhbnZhcy5oZWlnaHQgLSByZWN0SGVpZ2h0IC0gcGFkZGluZ1xyXG4gICAgICAgICwgdGV4dFggPSByZWN0WCArIDAuNSAqIHBhZGRpbmdcclxuICAgICAgICAsIHRleHRZID0gdGhpcy5fY2FudmFzLmhlaWdodCAtIDEuNSAqIHBhZGRpbmc7XHJcblxyXG4gICAgICBjdHguZ2xvYmFsQWxwaGEgPSB0aGlzLmNvbmZpZy50b29sdGlwcy5iZ0FscGhhO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb25maWcudG9vbHRpcHMuYmdTdHlsZTtcclxuICAgICAgdGhpcy5kcmF3Um91bmRSZWN0YW5nbGUoY3R4LCByZWN0WCwgcmVjdFksIHJlY3RXaWR0aCwgcmVjdEhlaWdodCwgOCwgdHJ1ZSwgZmFsc2UpO1xyXG5cclxuICAgICAgY3R4Lmdsb2JhbEFscGhhID0gdGhpcy5jb25maWcudG9vbHRpcHMudGV4dEFscGhhO1xyXG4gICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb25maWcudG9vbHRpcHMudGV4dFN0eWxlO1xyXG4gICAgICBjdHguZmlsbFRleHQodGhpcy5fY3VycmVudFRvb2x0aXAsIHRleHRYLCB0ZXh0WSk7XHJcblxyXG4gICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3UGFnaW5hdG9yKGN0eCkge1xyXG4gICAgY29uc3QgcGFkZGluZyA9IHRoaXMuY29uZmlnLnRvb2x0aXBzLnBhZGRpbmc7XHJcbiAgICBjb25zdCByYWRpdXMgPSB0aGlzLmNvbmZpZy50b29sdGlwcy5yYWRpdXM7XHJcbiAgICBjb25zdCBsYWJlbFdpZHRoID0gNTA7XHJcbiAgICBjb25zdCB4MSA9ICh0aGlzLl9jYW52YXMud2lkdGggLSBsYWJlbFdpZHRoKSAvIDIgLSByYWRpdXMgLSBwYWRkaW5nOyAvLyBQcmV2UGFnZUJ1dHRvblxyXG4gICAgY29uc3QgeDIgPSB0aGlzLl9jYW52YXMud2lkdGggLyAyOyAvLyBMYWJlbFxyXG4gICAgY29uc3QgeDMgPSAodGhpcy5fY2FudmFzLndpZHRoICsgbGFiZWxXaWR0aCkgLyAyICsgcmFkaXVzICsgcGFkZGluZzsgLy8gTmV4dFBhZ2VCdXR0b25cclxuICAgIGNvbnN0IHkgPSB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gcmFkaXVzIC0gcGFkZGluZztcclxuICAgIGNvbnN0IGxhYmVsID0gdGhpcy5fcmVzb3VyY2UuY3VycmVudEl0ZW0gKyAnLycgKyB0aGlzLl9yZXNvdXJjZS50b3RhbEl0ZW07XHJcbiAgICBjb25zdCBmb250U2l6ZSA9IDI1O1xyXG5cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICB0aGlzLl9iZWZvcmVQYWdlQnV0dG9uLmRyYXcoY3R4LCB4MSwgeSwgcmFkaXVzKTtcclxuICAgIHRoaXMuX25leHRQYWdlQnV0dG9uLmRyYXcoY3R4LCB4MywgeSwgcmFkaXVzKTtcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5mb250ID0gZm9udFNpemUgKyAncHggVmVyZGFuYSc7XHJcbiAgICBjdHgudGV4dEFsaWduID0gJ2NlbnRlcic7XHJcbiAgICBjdHguZmlsbFRleHQobGFiZWwsIHgyLCB0aGlzLl9jYW52YXMuaGVpZ2h0IC0gcGFkZGluZyAtIGZvbnRTaXplIC8gMiwgbGFiZWxXaWR0aCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBkcmF3Um91bmRSZWN0YW5nbGUoY3R4LCB4LCB5LCB3aWR0aCwgaGVpZ2h0LCByYWRpdXMsIGZpbGwsIHN0cm9rZSkge1xyXG4gICAgcmFkaXVzID0gKHR5cGVvZiByYWRpdXMgPT09ICdudW1iZXInKSA/IHJhZGl1cyA6IDU7XHJcbiAgICBmaWxsID0gKHR5cGVvZiBmaWxsID09PSAnYm9vbGVhbicpID8gZmlsbCA6IHRydWU7IC8vIGZpbGwgPSBkZWZhdWx0XHJcbiAgICBzdHJva2UgPSAodHlwZW9mIHN0cm9rZSA9PT0gJ2Jvb2xlYW4nKSA/IHN0cm9rZSA6IGZhbHNlO1xyXG5cclxuICAgIC8vIGRyYXcgcm91bmQgcmVjdGFuZ2xlXHJcbiAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICBjdHgubW92ZVRvKHggKyByYWRpdXMsIHkpO1xyXG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGggLSByYWRpdXMsIHkpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5LCB4ICsgd2lkdGgsIHkgKyByYWRpdXMpO1xyXG4gICAgY3R4LmxpbmVUbyh4ICsgd2lkdGgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xyXG4gICAgY3R4LnF1YWRyYXRpY0N1cnZlVG8oeCArIHdpZHRoLCB5ICsgaGVpZ2h0LCB4ICsgd2lkdGggLSByYWRpdXMsIHkgKyBoZWlnaHQpO1xyXG4gICAgY3R4LmxpbmVUbyh4ICsgcmFkaXVzLCB5ICsgaGVpZ2h0KTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHkgKyBoZWlnaHQsIHgsIHkgKyBoZWlnaHQgLSByYWRpdXMpO1xyXG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgcmFkaXVzKTtcclxuICAgIGN0eC5xdWFkcmF0aWNDdXJ2ZVRvKHgsIHksIHggKyByYWRpdXMsIHkpO1xyXG4gICAgY3R4LmNsb3NlUGF0aCgpO1xyXG5cclxuICAgIGlmIChmaWxsKSB7IGN0eC5maWxsKCk7IH1cclxuICAgIGlmIChzdHJva2UpIHsgY3R4LnN0cm9rZSgpOyB9XHJcbiAgfVxyXG5cclxuICAvLyNlbmRyZWdpb25cclxuXHJcbiAgLy8jcmVnaW9uIFV0aWxzXHJcblxyXG4gIHByaXZhdGUgZXh0ZW5kc0RlZmF1bHRDb25maWcoY2ZnOiBJbWFnZVZpZXdlckNvbmZpZykge1xyXG4gICAgY29uc3QgZGVmYXVsdENmZyA9IElNQUdFVklFV0VSX0NPTkZJR19ERUZBVUxUO1xyXG4gICAgY29uc3QgbG9jYWxDZmcgPSBPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0Q2ZnLCBjZmcpO1xyXG4gICAgaWYgKGNmZy5idXR0b25TdHlsZSkgeyBsb2NhbENmZy5idXR0b25TdHlsZSA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENmZy5idXR0b25TdHlsZSwgY2ZnLmJ1dHRvblN0eWxlKTsgfVxyXG4gICAgaWYgKGNmZy50b29sdGlwcykgeyBsb2NhbENmZy50b29sdGlwcyA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENmZy50b29sdGlwcywgY2ZnLnRvb2x0aXBzKTsgfVxyXG4gICAgaWYgKGNmZy5uZXh0UGFnZUJ1dHRvbikgeyBsb2NhbENmZy5uZXh0UGFnZUJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENmZy5uZXh0UGFnZUJ1dHRvbiwgY2ZnLm5leHRQYWdlQnV0dG9uKTsgfVxyXG4gICAgaWYgKGNmZy5iZWZvcmVQYWdlQnV0dG9uKSB7IGxvY2FsQ2ZnLmJlZm9yZVBhZ2VCdXR0b24gPSBPYmplY3QuYXNzaWduKGRlZmF1bHRDZmcuYmVmb3JlUGFnZUJ1dHRvbiwgY2ZnLmJlZm9yZVBhZ2VCdXR0b24pOyB9XHJcbiAgICBpZiAoY2ZnLnpvb21PdXRCdXR0b24pIHsgbG9jYWxDZmcuem9vbU91dEJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENmZy56b29tT3V0QnV0dG9uLCBjZmcuem9vbU91dEJ1dHRvbik7IH1cclxuICAgIGlmIChjZmcuem9vbU91dEJ1dHRvbikgeyBsb2NhbENmZy56b29tT3V0QnV0dG9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLnpvb21PdXRCdXR0b24sIGNmZy56b29tT3V0QnV0dG9uKTsgfVxyXG4gICAgaWYgKGNmZy56b29tSW5CdXR0b24pIHsgbG9jYWxDZmcuem9vbUluQnV0dG9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLnpvb21JbkJ1dHRvbiwgY2ZnLnpvb21JbkJ1dHRvbik7IH1cclxuICAgIGlmIChjZmcucm90YXRlTGVmdEJ1dHRvbikgeyBsb2NhbENmZy5yb3RhdGVMZWZ0QnV0dG9uID0gT2JqZWN0LmFzc2lnbihkZWZhdWx0Q2ZnLnJvdGF0ZUxlZnRCdXR0b24sIGNmZy5yb3RhdGVMZWZ0QnV0dG9uKTsgfVxyXG4gICAgaWYgKGNmZy5yb3RhdGVSaWdodEJ1dHRvbikgeyBsb2NhbENmZy5yb3RhdGVSaWdodEJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENmZy5yb3RhdGVSaWdodEJ1dHRvbiwgY2ZnLnJvdGF0ZVJpZ2h0QnV0dG9uKTsgfVxyXG4gICAgaWYgKGNmZy5yZXNldEJ1dHRvbikgeyBsb2NhbENmZy5yZXNldEJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oZGVmYXVsdENmZy5yZXNldEJ1dHRvbiwgY2ZnLnJlc2V0QnV0dG9uKTsgfVxyXG4gICAgcmV0dXJuIGxvY2FsQ2ZnO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzY3JlZW5Ub0NhbnZhc0NlbnRyZShwb3M6IHsgeDogbnVtYmVyLCB5OiBudW1iZXIgfSkge1xyXG4gICAgY29uc3QgcmVjdCA9IHRoaXMuX2NhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7IHg6IHBvcy54IC0gcmVjdC5sZWZ0LCB5OiBwb3MueSAtIHJlY3QudG9wIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFVJRWxlbWVudHMoKTogQnV0dG9uW10ge1xyXG4gICAgY29uc3QgaG92ZXJFbGVtZW50cyA9IHRoaXMuX2J1dHRvbnMuc2xpY2UoKTtcclxuICAgIGhvdmVyRWxlbWVudHMucHVzaCh0aGlzLl9uZXh0UGFnZUJ1dHRvbik7XHJcbiAgICBob3ZlckVsZW1lbnRzLnB1c2godGhpcy5fYmVmb3JlUGFnZUJ1dHRvbik7XHJcbiAgICByZXR1cm4gaG92ZXJFbGVtZW50cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0VUlFbGVtZW50KHBvczogeyB4OiBudW1iZXIsIHk6IG51bWJlciB9KSB7XHJcbiAgICBjb25zdCBhY3RpdmVVSUVsZW1lbnQgPSB0aGlzLmdldFVJRWxlbWVudHMoKS5maWx0ZXIoKHVpRWxlbWVudCkgPT4ge1xyXG4gICAgICByZXR1cm4gdWlFbGVtZW50LmlzV2l0aGluQm91bmRzKHBvcy54LCBwb3MueSk7XHJcbiAgICB9KTtcclxuICAgIHJldHVybiAoYWN0aXZlVUlFbGVtZW50Lmxlbmd0aCA+IDApID8gYWN0aXZlVUlFbGVtZW50WzBdIDogbnVsbDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNJbWFnZShmaWxlOiBzdHJpbmcgfCBGaWxlKSB7XHJcbiAgICBpZiAodGhpcy5fZmlsZXR5cGUgJiYgdGhpcy5fZmlsZXR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2ltYWdlJykgeyByZXR1cm4gdHJ1ZTsgfVxyXG4gICAgcmV0dXJuIHRlc3RGaWxlKGZpbGUsICdcXFxcLihwbmd8anBnfGpwZWd8Z2lmKXxpbWFnZS9wbmcnKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaXNQZGYoZmlsZTogc3RyaW5nIHwgRmlsZSkge1xyXG4gICAgaWYgKHRoaXMuX2ZpbGV0eXBlICYmIHRoaXMuX2ZpbGV0eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwZGYnKSB7IHJldHVybiB0cnVlOyB9XHJcbiAgICByZXR1cm4gdGVzdEZpbGUoZmlsZSwgJ1xcXFwuKHBkZil8YXBwbGljYXRpb24vcGRmJyk7XHJcbiAgfVxyXG4gIC8vI2VuZHJlZ2lvblxyXG59XHJcblxyXG5mdW5jdGlvbiB0ZXN0RmlsZShmaWxlOiBzdHJpbmcgfCBGaWxlLCByZWdleFRlc3Q6IHN0cmluZykge1xyXG4gIGlmICghZmlsZSkgeyByZXR1cm4gZmFsc2U7IH1cclxuICBjb25zdCBuYW1lID0gZmlsZSBpbnN0YW5jZW9mIEZpbGUgPyBmaWxlLm5hbWUgOiBmaWxlO1xyXG4gIHJldHVybiBuYW1lLnRvTG93ZXJDYXNlKCkubWF0Y2gocmVnZXhUZXN0KSAhPT0gbnVsbDtcclxufVxyXG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbWFnZVZpZXdlckNvbXBvbmVudCB9IGZyb20gJy4vaW1hZ2V2aWV3ZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSU1BR0VWSUVXRVJfQ09ORklHLCBJTUFHRVZJRVdFUl9DT05GSUdfREVGQVVMVCB9IGZyb20gJy4vaW1hZ2V2aWV3ZXIuY29uZmlnJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgcHJvdmlkZXJzOiBbeyBwcm92aWRlOiBJTUFHRVZJRVdFUl9DT05GSUcsIHVzZVZhbHVlOiBJTUFHRVZJRVdFUl9DT05GSUdfREVGQVVMVCB9XSxcclxuICBkZWNsYXJhdGlvbnM6IFtJbWFnZVZpZXdlckNvbXBvbmVudF0sXHJcbiAgZXhwb3J0czogW0ltYWdlVmlld2VyQ29tcG9uZW50XSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEltYWdlVmlld2VyTW9kdWxlIHsgfVxyXG4iXX0=

/***/ })

}]);
//# sourceMappingURL=default~photography-photography-module~pottery-pottery-module-es2015.js.map