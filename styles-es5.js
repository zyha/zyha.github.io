(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"], {
  /***/
  "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
  /*!*****************************************************************************************************************************************************************!*\
    !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
    \*****************************************************************************************************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesAngularDevkitBuildAngularSrcAngularCliFilesPluginsRawCssLoaderJsNode_modulesPostcssLoaderSrcIndexJsSrcStylesCss(module, exports) {
    module.exports = [[module.i, "/* Global Styles */\r\n/*\r\nyellow #faebd7\r\ndark blue #2a4d69\r\ndark grey #676767\r\nbackground #92c2d6\r\n*/\r\n@font-face {\r\n  font-family: 'ChineseIcon';\r\n  src: url('wt071.ttf');\r\n  line-height: 1;\r\n}\r\np,body{\r\n  font-family: Lato, 'Roboto', Arial, sans-serif;\r\n  color: #676767;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\nbody {\r\n  margin: 0;\r\n  background:url('bg.png') #92c2d6;\r\n}\r\nh2 {\r\n  font-size: 20px;\r\n  text-shadow: 2px 0px 1px #92c2d6, -2px 0px 1px #92c2d6, 0px 2px 1px #92c2d6, 0px -2px 1px #92c2d6;\r\n}\r\nh1, h2 {\r\n  font-weight: lighter;\r\n}\r\np {\r\n  font-size: 12px;\r\n}\r\n/* Hyperlink */\r\na {\r\n  cursor: pointer;\r\n  color: #2a4d69;\r\n  text-decoration: none;\r\n}\r\na:hover {\r\n  opacity: 0.8;\r\n}\r\ndiv {\r\n  display:block;\r\n  padding:0px;\r\n  margin-right:0px;\r\n}\r\n/*img {\r\npointer-events: none !important;\r\n}*/\r\n/* Input */\r\ninput {\r\n  font-size: 14px;\r\n  border-radius: 2px;\r\n  padding: 8px;\r\n  margin-bottom: 16px;\r\n  border: 1px solid #BDBDBD;\r\n}\r\nlabel {\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  margin-bottom: 4px;\r\n  display: block;\r\n  text-transform: uppercase;\r\n}\r\n/* Button */\r\n.button, button {\r\n  display: -webkit-inline-box;\r\n  display: inline-flex;\r\n  -webkit-box-align: center;\r\n          align-items: center;\r\n  padding: 8px 8px;\r\n  border-radius:16px;\r\n  font-size: 14px;\r\n  cursor: pointer;\r\n  background-color:  rgba(250, 235, 215,.8);/*#2a4d69;*/\r\n  color: #2a4d69;\r\n  border: none;\r\n  text-align: center;\r\n  box-shadow: 0 3px 5px -2px rgba(0, 0, 0, .2), 0 7px 12px 1px rgba(0, 0, 0, .14), 0 2px 12px 2px rgba(0, 0, 0, .12);\r\n\r\n}\r\n.button:hover, button:hover {\r\n  opacity: 0.8;\r\n  font-weight: normal;\r\n}\r\n.button:disabled, button:disabled {\r\n  opacity: 0.5;\r\n  cursor: auto;\r\n}\r\n/* Checkout Cart, Shipping Prices */\r\n.cart-item, .shipping-item {\r\n  min-width: 400px;\r\n  max-width: 450px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  -webkit-box-pack: justify;\r\n          justify-content: space-between;\r\n  padding: 16px 32px;\r\n  margin-bottom: 8px;\r\n  border-radius: 2px;\r\n}\r\n/* Top Navigation Bar */\r\n/* Top Bar */\r\n#navigation {\r\n  background: url(/assets/icons/compass.png) 0px 0px;\r\n  background-repeat: no-repeat;\r\n  background-position: 0px 0px;\r\n  display: block;\r\n  position: fixed;\r\n  top:20px;\r\n  left:20px;\r\n  height: 200px;\r\n  width: 200px;\r\n  padding: 0px;\r\n  z-index: 2;\r\n  margin: 0px;\r\n}\r\n#compass a:hover h1, #compass a:hover {\r\n  color: rgba(255, 255, 255);\r\n  background-image: radial-gradient(closest-side, #92c2d6 50%,#faebd7);\r\n}\r\n#compass {\r\n  background-repeat: no-repeat;\r\n  background-position: -0px -15px;\r\n}\r\n#compass .compass_needle {\r\n  background: transparent;\r\n  z-index: 1;\r\n  position: absolute;\r\n  display: block;\r\n  width: 200px;\r\n  height: 200px;\r\n  -webkit-transition: 300ms ease all;\r\n  transition: 300ms ease all;\r\n  transform-origin: 50% 50%;\r\n  /* IE 9 */\r\n  -webkit-transform-origin: 50% 50%;\r\n  /* Safari 3-8 */\r\n  transform-origin: 50% 50%;\r\n}\r\n#compass .navlinks {\r\n  background:#faebd7;\r\n  background-image: radial-gradient(closest-side, #92c2d6 75%,#fff);\r\n  position: absolute;\r\n  z-index: 3;\r\n  width:36px;\r\n  height:36px;\r\n  display:block;\r\n  border-radius: 18px;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  color:#92c2d6;\r\n}\r\n#compass .navlinks .icons{\r\n  padding-top: 6px;\r\n  display:block;\r\n}\r\n#compass #photo_link i, #compass #pottery_link i{\r\n  font-family:ChineseIcon,Arial;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  font-weight: bold;\r\n  padding-top: 4px;\r\n}\r\n#compass #home_link {\r\n  top: -18px;\r\n  left: 82px;\r\n}\r\n#compass #photo_link {\r\n  top: 82px;\r\n  left: 182px;\r\n}\r\n#compass #pottery_link {\r\n  top: 82px;\r\n  left: -18px;\r\n}\r\n#compass #cart_link {\r\n  top: 182px;\r\n  left: 82px;\r\n}\r\n/* Side Navigation Bar */\r\n.side-nav {\r\n  position:fixed;\r\n  top: 240px;\r\n  left: 10px;\r\n  width: 102px;\r\n  text-align: right;\r\n  margin:0px;\r\n  padding:0px;\r\n  padding-right: 12px;\r\n  font-size:13px;\r\n}\r\n.side-nav li {\r\n  display:block;\r\n  list-style: none;\r\n  margin-top:2px;\r\n}\r\n.side-nav li span{\r\n  color: #fff;\r\n}\r\n.side-nav li:after {\r\n  display: inline-block;\r\n  background:#fff;\r\n  width:8px;\r\n  height:8px;\r\n  border-radius: 50px;\r\n  content:'';\r\n  position: absolute;\r\n  right: 0;\r\n  margin-top:3px;\r\n}\r\n.side-nav li:hover span{\r\n  color: #2a4d69; /* TODO */\r\n}\r\n.side-nav li:hover::after {\r\n  background: #2a4d69; /* TODO */\r\n}\r\n.side-nav li.selected span{\r\n  color: #2a4d69; /* TODO */\r\n  text-shadow: 1px 1px 0px #faebd7, -1px -1px 0px #faebd7, -1px 1px 0px #faebd7, 1px -1px 0px #faebd7;\r\n}\r\n.side-nav li.selected::after {\r\n  background: #2a4d69; /* TODO */\r\n  box-shadow: 1px 1px 0px #faebd7, -1px -1px 0px #faebd7, -1px 1px 0px #faebd7, 1px -1px 0px #faebd7;\r\n}\r\n.side-nav li.selected:hover {\r\n  background-color: #BBD8DC;\r\n}\r\n.side-nav li.selected a:hover {\r\n  cursor:default;\r\n}\r\n/* Sub-pages */\r\n.tile .image_container {\r\n  padding: 0px;\r\n  width:200px;\r\n  height:200px;\r\n  border-radius:  100px;\r\n  background: #faebd7;\r\n}\r\n.tile .image{\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n  opacity: 1;\r\n  display: block;\r\n  width: 100%;\r\n  height: 100%;\r\n  -webkit-transition: .5s ease;\r\n  transition: .5s ease;\r\n  width:200px;\r\n  height:200px;\r\n  border-radius:  100px;\r\n  overflow: hidden;\r\n}\r\n.tile .image_text {\r\n  -webkit-transition: .5s ease;\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: relative;\r\n  width: auto;\r\n  height: auto;\r\n  top: -50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n}\r\n.tile .image_container:hover .image {\r\n  opacity: 0.3;\r\n}\r\n.tile .image_container:hover .image_text{\r\n  opacity: 1;\r\n}\r\n.tile .image_text {\r\n  background-color: rgb(255,255,255,0.7);\r\n  color: #767676;\r\n  font-size: 11px;\r\n  padding: 8px 16px;\r\n}\r\n.tiles {\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: horizontal;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: row;\r\n  flex-wrap: wrap;\r\n  -webkit-box-pack: start;\r\n          justify-content: flex-start;\r\n  align-content: flex-start;\r\n  margin-right:0px!important;\r\n}\r\n.tile {\r\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);\r\n  margin-bottom: 10px;\r\n  margin-right: 10px;\r\n  display: -webkit-box;\r\n  display: flex;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n          flex-direction: column;\r\n  align-content: space-between;\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n.tile .date {\r\n  text-align: right;\r\n  float:right;\r\n  font-weight: bold;\r\n}\r\n.tile .title {\r\n  font-size:.8em;\r\n  padding: 5px;\r\n  margin: 0px;\r\n  text-align: justify;\r\n  font-weight: lighter;\r\n}\r\n.imageViewTitle {\r\n  color:#fff;\r\n  font-size:1em;\r\n  display: absolute;\r\n  font-weight: bold;\r\n  float:left;\r\n  left:0px;\r\n  text-align: left;\r\n}\r\n/*Cover Page for Pottery & Photography*/\r\n#cover .image {\r\n  opacity: 0.2;\r\n}\r\n#cover .image_hover {\r\n  -webkit-transition: .5s ease;\r\n  transition: .5s ease;\r\n  opacity: 0;\r\n  position: relative;\r\n  width: auto;\r\n  height: auto;\r\n  top: -50%;\r\n  left: 50%;\r\n  -webkit-transform: translate(-50%, -50%);\r\n          transform: translate(-50%, -50%);\r\n  -ms-transform: translate(-50%, -50%);\r\n  opacity: 1;\r\n  text-align: center;\r\n}\r\n#cover .image_container:hover .image {\r\n  opacity: 1;\r\n}\r\n#cover .image_container:hover .image_hover {\r\n  opacity: 0.3;\r\n}\r\n#cover .tile p {\r\n  padding: 5px;\r\n  font-size: 14px;\r\n  margin: 0px;\r\n  text-align: center;\r\n}\r\n#cover .tile{\r\n  box-shadow: none;\r\n}\r\n#cover .image_container{\r\n  box-shadow: 0 11px 15px -7px rgba(0, 0, 0, .2), 0 24px 38px 3px rgba(0, 0, 0, .14), 0 9px 46px 8px rgba(0, 0, 0, .12);\r\n}\r\n/*\r\nCopyright Google LLC. All Rights Reserved.\r\nUse of this source code is governed by an MIT-style license that\r\ncan be found in the LICENSE file at http://angular.io/license\r\n*/\r\n\r\n/*# sourceMappingURL=data:application/json;base64,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bGVzICovXHJcbi8qXHJcbnllbGxvdyAjZmFlYmQ3XHJcbmRhcmsgYmx1ZSAjMmE0ZDY5XHJcbmRhcmsgZ3JleSAjNjc2NzY3XHJcbmJhY2tncm91bmQgIzkyYzJkNlxyXG4qL1xyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDaGluZXNlSWNvbic7XHJcbiAgc3JjOiB1cmwoJ2Fzc2V0cy93dDA3MS50dGYnKTtcclxuICBsaW5lLWhlaWdodDogMTtcclxufVxyXG5cclxucCxib2R5e1xyXG4gIGZvbnQtZmFtaWx5OiBMYXRvLCAnUm9ib3RvJywgQXJpYWwsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICM2NzY3Njc7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6dXJsKFwiYXNzZXRzL2ljb25zL2JnLnBuZ1wiKSAjOTJjMmQ2O1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRleHQtc2hhZG93OiAycHggMHB4IDFweCAjOTJjMmQ2LCAtMnB4IDBweCAxcHggIzkyYzJkNiwgMHB4IDJweCAxcHggIzkyYzJkNiwgMHB4IC0ycHggMXB4ICM5MmMyZDY7XHJcbn1cclxuXHJcbmgxLCBoMiB7XHJcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLyogSHlwZXJsaW5rICovXHJcblxyXG5hIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICMyYTRkNjk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG5hOmhvdmVyIHtcclxuICBvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbmRpdiB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBwYWRkaW5nOjBweDtcclxuICBtYXJnaW4tcmlnaHQ6MHB4O1xyXG59XHJcblxyXG4vKmltZyB7XHJcbnBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XHJcbn0qL1xyXG5cclxuLyogSW5wdXQgKi9cclxuXHJcbmlucHV0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHBhZGRpbmc6IDhweDtcclxuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNCREJEQkQ7XHJcbn1cclxuXHJcbmxhYmVsIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi8qIEJ1dHRvbiAqL1xyXG5cclxuLmJ1dHRvbiwgYnV0dG9uIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDhweCA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czoxNnB4O1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIHJnYmEoMjUwLCAyMzUsIDIxNSwuOCk7LyojMmE0ZDY5OyovXHJcbiAgY29sb3I6ICMyYTRkNjk7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBib3gtc2hhZG93OiAwIDNweCA1cHggLTJweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCA3cHggMTJweCAxcHggcmdiYSgwLCAwLCAwLCAuMTQpLCAwIDJweCAxMnB4IDJweCByZ2JhKDAsIDAsIDAsIC4xMik7XHJcblxyXG59XHJcblxyXG4uYnV0dG9uOmhvdmVyLCBidXR0b246aG92ZXIge1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4uYnV0dG9uOmRpc2FibGVkLCBidXR0b246ZGlzYWJsZWQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBjdXJzb3I6IGF1dG87XHJcbn1cclxuXHJcbi8qIENoZWNrb3V0IENhcnQsIFNoaXBwaW5nIFByaWNlcyAqL1xyXG5cclxuLmNhcnQtaXRlbSwgLnNoaXBwaW5nLWl0ZW0ge1xyXG4gIG1pbi13aWR0aDogNDAwcHg7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIHBhZGRpbmc6IDE2cHggMzJweDtcclxuICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG59XHJcblxyXG4vKiBUb3AgTmF2aWdhdGlvbiBCYXIgKi9cclxuLyogVG9wIEJhciAqL1xyXG4jbmF2aWdhdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbnMvY29tcGFzcy5wbmcpIDBweCAwcHg7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAwcHggMHB4O1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6MjBweDtcclxuICBsZWZ0OjIwcHg7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxuICB3aWR0aDogMjAwcHg7XHJcbiAgcGFkZGluZzogMHB4O1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuXHJcbiNjb21wYXNzIGE6aG92ZXIgaDEsICNjb21wYXNzIGE6aG92ZXIge1xyXG4gIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUsICM5MmMyZDYgNTAlLCNmYWViZDcpO1xyXG59XHJcblxyXG4jY29tcGFzcyB7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMHB4IC0xNXB4O1xyXG59XHJcblxyXG4jY29tcGFzcyAuY29tcGFzc19uZWVkbGUge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMzAwbXMgZWFzZSBhbGw7XHJcbiAgLW1vei10cmFuc2l0aW9uOiAzMDBtcyBlYXNlIGFsbDtcclxuICAtby10cmFuc2l0aW9uOiAzMDBtcyBlYXNlIGFsbDtcclxuICB0cmFuc2l0aW9uOiAzMDBtcyBlYXNlIGFsbDtcclxuICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gIC1tcy10cmFuc2Zvcm0tb3JpZ2luOiA1MCUgNTAlO1xyXG4gIC8qIElFIDkgKi9cclxuICAtd2Via2l0LXRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgLyogU2FmYXJpIDMtOCAqL1xyXG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbn1cclxuXHJcbiNjb21wYXNzIC5uYXZsaW5rcyB7XHJcbiAgYmFja2dyb3VuZDojZmFlYmQ3O1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHJhZGlhbC1ncmFkaWVudChjbG9zZXN0LXNpZGUsICM5MmMyZDYgNzUlLCNmZmYpO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAzO1xyXG4gIHdpZHRoOjM2cHg7XHJcbiAgaGVpZ2h0OjM2cHg7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGNvbG9yOiM5MmMyZDY7XHJcbn1cclxuI2NvbXBhc3MgLm5hdmxpbmtzIC5pY29uc3tcclxuICBwYWRkaW5nLXRvcDogNnB4O1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuI2NvbXBhc3MgI3Bob3RvX2xpbmsgaSwgI2NvbXBhc3MgI3BvdHRlcnlfbGluayBpe1xyXG4gIGZvbnQtZmFtaWx5OkNoaW5lc2VJY29uLEFyaWFsO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDI0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZy10b3A6IDRweDtcclxufVxyXG4jY29tcGFzcyAjaG9tZV9saW5rIHtcclxuICB0b3A6IC0xOHB4O1xyXG4gIGxlZnQ6IDgycHg7XHJcbn1cclxuI2NvbXBhc3MgI3Bob3RvX2xpbmsge1xyXG4gIHRvcDogODJweDtcclxuICBsZWZ0OiAxODJweDtcclxufVxyXG4jY29tcGFzcyAjcG90dGVyeV9saW5rIHtcclxuICB0b3A6IDgycHg7XHJcbiAgbGVmdDogLTE4cHg7XHJcbn1cclxuI2NvbXBhc3MgI2NhcnRfbGluayB7XHJcbiAgdG9wOiAxODJweDtcclxuICBsZWZ0OiA4MnB4O1xyXG59XHJcblxyXG5cclxuLyogU2lkZSBOYXZpZ2F0aW9uIEJhciAqL1xyXG4uc2lkZS1uYXYge1xyXG4gIHBvc2l0aW9uOmZpeGVkO1xyXG4gIHRvcDogMjQwcHg7XHJcbiAgbGVmdDogMTBweDtcclxuICB3aWR0aDogMTAycHg7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgbWFyZ2luOjBweDtcclxuICBwYWRkaW5nOjBweDtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xyXG4gIGZvbnQtc2l6ZToxM3B4O1xyXG59XHJcbi5zaWRlLW5hdiBsaSB7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIG1hcmdpbi10b3A6MnB4O1xyXG59XHJcbi5zaWRlLW5hdiBsaSBzcGFue1xyXG4gIGNvbG9yOiAjZmZmO1xyXG59XHJcbi5zaWRlLW5hdiBsaTphZnRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJhY2tncm91bmQ6I2ZmZjtcclxuICB3aWR0aDo4cHg7XHJcbiAgaGVpZ2h0OjhweDtcclxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gIGNvbnRlbnQ6Jyc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIG1hcmdpbi10b3A6M3B4O1xyXG59XHJcblxyXG4uc2lkZS1uYXYgbGk6aG92ZXIgc3BhbntcclxuICBjb2xvcjogIzJhNGQ2OTsgLyogVE9ETyAqL1xyXG59XHJcbi5zaWRlLW5hdiBsaTpob3Zlcjo6YWZ0ZXIge1xyXG4gIGJhY2tncm91bmQ6ICMyYTRkNjk7IC8qIFRPRE8gKi9cclxufVxyXG5cclxuLnNpZGUtbmF2IGxpLnNlbGVjdGVkIHNwYW57XHJcbiAgY29sb3I6ICMyYTRkNjk7IC8qIFRPRE8gKi9cclxuICB0ZXh0LXNoYWRvdzogMXB4IDFweCAwcHggI2ZhZWJkNywgLTFweCAtMXB4IDBweCAjZmFlYmQ3LCAtMXB4IDFweCAwcHggI2ZhZWJkNywgMXB4IC0xcHggMHB4ICNmYWViZDc7XHJcbn1cclxuLnNpZGUtbmF2IGxpLnNlbGVjdGVkOjphZnRlciB7XHJcbiAgYmFja2dyb3VuZDogIzJhNGQ2OTsgLyogVE9ETyAqL1xyXG4gIGJveC1zaGFkb3c6IDFweCAxcHggMHB4ICNmYWViZDcsIC0xcHggLTFweCAwcHggI2ZhZWJkNywgLTFweCAxcHggMHB4ICNmYWViZDcsIDFweCAtMXB4IDBweCAjZmFlYmQ3O1xyXG59XHJcblxyXG4uc2lkZS1uYXYgbGkuc2VsZWN0ZWQ6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNCQkQ4REM7XHJcbn1cclxuLnNpZGUtbmF2IGxpLnNlbGVjdGVkIGE6aG92ZXIge1xyXG4gIGN1cnNvcjpkZWZhdWx0O1xyXG59XHJcblxyXG5cclxuXHJcbi8qIFN1Yi1wYWdlcyAqL1xyXG4udGlsZSAuaW1hZ2VfY29udGFpbmVyIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbiAgd2lkdGg6MjAwcHg7XHJcbiAgaGVpZ2h0OjIwMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6ICAxMDBweDtcclxuICBiYWNrZ3JvdW5kOiAjZmFlYmQ3O1xyXG59XHJcbi50aWxlIC5pbWFnZXtcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvcGFjaXR5OiAxO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0cmFuc2l0aW9uOiAuNXMgZWFzZTtcclxuICB3aWR0aDoyMDBweDtcclxuICBoZWlnaHQ6MjAwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogIDEwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRpbGUgLmltYWdlX3RleHQge1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0b3A6IC01MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxufVxyXG4udGlsZSAuaW1hZ2VfY29udGFpbmVyOmhvdmVyIC5pbWFnZSB7XHJcbiAgb3BhY2l0eTogMC4zO1xyXG59XHJcbi50aWxlIC5pbWFnZV9jb250YWluZXI6aG92ZXIgLmltYWdlX3RleHR7XHJcbiAgb3BhY2l0eTogMTtcclxufVxyXG4udGlsZSAuaW1hZ2VfdGV4dCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwyNTUsMjU1LDAuNyk7XHJcbiAgY29sb3I6ICM3Njc2NzY7XHJcbiAgZm9udC1zaXplOiAxMXB4O1xyXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xyXG59XHJcbi50aWxlcyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcclxuICBtYXJnaW4tcmlnaHQ6MHB4IWltcG9ydGFudDtcclxufVxyXG4udGlsZSB7XHJcbiAgYm94LXNoYWRvdzogMCAxMXB4IDE1cHggLTdweCByZ2JhKDAsIDAsIDAsIC4yKSwgMCAyNHB4IDM4cHggM3B4IHJnYmEoMCwgMCwgMCwgLjE0KSwgMCA5cHggNDZweCA4cHggcmdiYSgwLCAwLCAwLCAuMTIpO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbi50aWxlIC5kYXRlIHtcclxuICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBmbG9hdDpyaWdodDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4udGlsZSAudGl0bGUge1xyXG4gIGZvbnQtc2l6ZTouOGVtO1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDBweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcbi5pbWFnZVZpZXdUaXRsZSB7XHJcbiAgY29sb3I6I2ZmZjtcclxuICBmb250LXNpemU6MWVtO1xyXG4gIGRpc3BsYXk6IGFic29sdXRlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZsb2F0OmxlZnQ7XHJcbiAgbGVmdDowcHg7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuXHJcbi8qQ292ZXIgUGFnZSBmb3IgUG90dGVyeSAmIFBob3RvZ3JhcGh5Ki9cclxuI2NvdmVyIC5pbWFnZSB7XHJcbiAgb3BhY2l0eTogMC4yO1xyXG59XHJcbiNjb3ZlciAuaW1hZ2VfaG92ZXIge1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlO1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiBhdXRvO1xyXG4gIGhlaWdodDogYXV0bztcclxuICB0b3A6IC01MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICBvcGFjaXR5OiAxO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4jY292ZXIgLmltYWdlX2NvbnRhaW5lcjpob3ZlciAuaW1hZ2Uge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuI2NvdmVyIC5pbWFnZV9jb250YWluZXI6aG92ZXIgLmltYWdlX2hvdmVyIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuI2NvdmVyIC50aWxlIHAge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbiNjb3ZlciAudGlsZXtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcbiNjb3ZlciAuaW1hZ2VfY29udGFpbmVye1xyXG4gIGJveC1zaGFkb3c6IDAgMTFweCAxNXB4IC03cHggcmdiYSgwLCAwLCAwLCAuMiksIDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIC4xNCksIDAgOXB4IDQ2cHggOHB4IHJnYmEoMCwgMCwgMCwgLjEyKTtcclxufVxyXG5cclxuLypcclxuQ29weXJpZ2h0IEdvb2dsZSBMTEMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcblVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXRcclxuY2FuIGJlIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cDovL2FuZ3VsYXIuaW8vbGljZW5zZVxyXG4qL1xyXG4iXX0= */", '', '']];
    /***/
  },

  /***/
  "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
  /*!****************************************************************************!*\
    !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
    \****************************************************************************/

  /*! no static exports found */

  /***/
  function node_modulesStyleLoaderDistRuntimeInjectStylesIntoStyleTagJs(module, exports, __webpack_require__) {
    "use strict";

    var stylesInDom = {};

    var isOldIE = function isOldIE() {
      var memo;
      return function memorize() {
        if (typeof memo === 'undefined') {
          // Test for IE <= 9 as proposed by Browserhacks
          // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
          // Tests for existence of standard globals is to allow style-loader
          // to operate correctly into non-standard environments
          // @see https://github.com/webpack-contrib/style-loader/issues/177
          memo = Boolean(window && document && document.all && !window.atob);
        }

        return memo;
      };
    }();

    var getTarget = function getTarget() {
      var memo = {};
      return function memorize(target) {
        if (typeof memo[target] === 'undefined') {
          var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

          if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
            try {
              // This will throw an exception if access to iframe is blocked
              // due to cross-origin restrictions
              styleTarget = styleTarget.contentDocument.head;
            } catch (e) {
              // istanbul ignore next
              styleTarget = null;
            }
          }

          memo[target] = styleTarget;
        }

        return memo[target];
      };
    }();

    function listToStyles(list, options) {
      var styles = [];
      var newStyles = {};

      for (var i = 0; i < list.length; i++) {
        var item = list[i];
        var id = options.base ? item[0] + options.base : item[0];
        var css = item[1];
        var media = item[2];
        var sourceMap = item[3];
        var part = {
          css: css,
          media: media,
          sourceMap: sourceMap
        };

        if (!newStyles[id]) {
          styles.push(newStyles[id] = {
            id: id,
            parts: [part]
          });
        } else {
          newStyles[id].parts.push(part);
        }
      }

      return styles;
    }

    function addStylesToDom(styles, options) {
      for (var i = 0; i < styles.length; i++) {
        var item = styles[i];
        var domStyle = stylesInDom[item.id];
        var j = 0;

        if (domStyle) {
          domStyle.refs++;

          for (; j < domStyle.parts.length; j++) {
            domStyle.parts[j](item.parts[j]);
          }

          for (; j < item.parts.length; j++) {
            domStyle.parts.push(addStyle(item.parts[j], options));
          }
        } else {
          var parts = [];

          for (; j < item.parts.length; j++) {
            parts.push(addStyle(item.parts[j], options));
          }

          stylesInDom[item.id] = {
            id: item.id,
            refs: 1,
            parts: parts
          };
        }
      }
    }

    function insertStyleElement(options) {
      var style = document.createElement('style');

      if (typeof options.attributes.nonce === 'undefined') {
        var nonce = true ? __webpack_require__.nc : undefined;

        if (nonce) {
          options.attributes.nonce = nonce;
        }
      }

      Object.keys(options.attributes).forEach(function (key) {
        style.setAttribute(key, options.attributes[key]);
      });

      if (typeof options.insert === 'function') {
        options.insert(style);
      } else {
        var target = getTarget(options.insert || 'head');

        if (!target) {
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        }

        target.appendChild(style);
      }

      return style;
    }

    function removeStyleElement(style) {
      // istanbul ignore if
      if (style.parentNode === null) {
        return false;
      }

      style.parentNode.removeChild(style);
    }
    /* istanbul ignore next  */


    var replaceText = function replaceText() {
      var textStore = [];
      return function replace(index, replacement) {
        textStore[index] = replacement;
        return textStore.filter(Boolean).join('\n');
      };
    }();

    function applyToSingletonTag(style, index, remove, obj) {
      var css = remove ? '' : obj.css; // For old IE

      /* istanbul ignore if  */

      if (style.styleSheet) {
        style.styleSheet.cssText = replaceText(index, css);
      } else {
        var cssNode = document.createTextNode(css);
        var childNodes = style.childNodes;

        if (childNodes[index]) {
          style.removeChild(childNodes[index]);
        }

        if (childNodes.length) {
          style.insertBefore(cssNode, childNodes[index]);
        } else {
          style.appendChild(cssNode);
        }
      }
    }

    function applyToTag(style, options, obj) {
      var css = obj.css;
      var media = obj.media;
      var sourceMap = obj.sourceMap;

      if (media) {
        style.setAttribute('media', media);
      }

      if (sourceMap && btoa) {
        css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
      } // For old IE

      /* istanbul ignore if  */


      if (style.styleSheet) {
        style.styleSheet.cssText = css;
      } else {
        while (style.firstChild) {
          style.removeChild(style.firstChild);
        }

        style.appendChild(document.createTextNode(css));
      }
    }

    var singleton = null;
    var singletonCounter = 0;

    function addStyle(obj, options) {
      var style;
      var update;
      var remove;

      if (options.singleton) {
        var styleIndex = singletonCounter++;
        style = singleton || (singleton = insertStyleElement(options));
        update = applyToSingletonTag.bind(null, style, styleIndex, false);
        remove = applyToSingletonTag.bind(null, style, styleIndex, true);
      } else {
        style = insertStyleElement(options);
        update = applyToTag.bind(null, style, options);

        remove = function remove() {
          removeStyleElement(style);
        };
      }

      update(obj);
      return function updateStyle(newObj) {
        if (newObj) {
          if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
            return;
          }

          update(obj = newObj);
        } else {
          remove();
        }
      };
    }

    module.exports = function (list, options) {
      options = options || {};
      options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
      // tags it will allow on a page

      if (!options.singleton && typeof options.singleton !== 'boolean') {
        options.singleton = isOldIE();
      }

      var styles = listToStyles(list, options);
      addStylesToDom(styles, options);
      return function update(newList) {
        var mayRemove = [];

        for (var i = 0; i < styles.length; i++) {
          var item = styles[i];
          var domStyle = stylesInDom[item.id];

          if (domStyle) {
            domStyle.refs--;
            mayRemove.push(domStyle);
          }
        }

        if (newList) {
          var newStyles = listToStyles(newList, options);
          addStylesToDom(newStyles, options);
        }

        for (var _i = 0; _i < mayRemove.length; _i++) {
          var _domStyle = mayRemove[_i];

          if (_domStyle.refs === 0) {
            for (var j = 0; j < _domStyle.parts.length; j++) {
              _domStyle.parts[j]();
            }

            delete stylesInDom[_domStyle.id];
          }
        }
      };
    };
    /***/

  },

  /***/
  "./src/styles.css":
  /*!************************!*\
    !*** ./src/styles.css ***!
    \************************/

  /*! no static exports found */

  /***/
  function srcStylesCss(module, exports, __webpack_require__) {
    var content = __webpack_require__(
    /*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!./styles.css */
    "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

    if (typeof content === 'string') {
      content = [[module.i, content, '']];
    }

    var options = {};
    options.insert = "head";
    options.singleton = false;

    var update = __webpack_require__(
    /*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */
    "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

    if (content.locals) {
      module.exports = content.locals;
    }
    /***/

  },

  /***/
  3:
  /*!******************************!*\
    !*** multi ./src/styles.css ***!
    \******************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/jessicaha/Desktop/unown/src/styles.css */
    "./src/styles.css");
    /***/
  }
}, [[3, "runtime"]]]);
//# sourceMappingURL=styles-es5.js.map