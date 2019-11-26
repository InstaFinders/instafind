require("./runtime.js");require("./vendor.js");module.exports =
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["bundle"],{

/***/ "../$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./app.css":
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {exports = module.exports = __webpack_require__("../node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.i(__webpack_require__("../node_modules/css-loader/dist/cjs.js?!../node_modules/nativescript-theme-core/css/core.light.css"), "");

// Module
exports.push([module.i, "/*\nIn NativeScript, the app.css file is where you place CSS rules that\nyou would like to apply to your entire application. Check out\nhttp://docs.nativescript.org/ui/styling for a full list of the CSS\nselectors and properties you can use to style UI components.\n\n/*\nIn many cases you may want to use the NativeScript core theme instead\nof writing your own CSS rules. For a full list of class names in the theme\nrefer to http://docs.nativescript.org/ui/theme.\n*/\n", ""]);

;
    if (true) {
        module.hot.accept();
        module.hot.dispose(() => {
            global.hmrRefresh({ type: 'style', path: './app.css' });
        })
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
/* harmony import */ var nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/capture-image/capture-image.component.ts");



var routes = [
    { path: "", redirectTo: "/captureImage", pathMatch: "full" },
    { path: "captureImage", component: _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_2__["CaptureImageComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"].forRoot(routes)],
            exports: [nativescript_angular_router__WEBPACK_IMPORTED_MODULE_1__["NativeScriptRouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- https://docs.nativescript.org/angular/core-concepts/angular-navigation.html#page-router-outlet -->\n<page-router-outlet></page-router-outlet>\n"

/***/ }),

/***/ "./app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-app",
            template: __webpack_require__("./app/app.component.html")
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-angular/nativescript.module.js");
/* harmony import */ var nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./app/app.component.ts");
/* harmony import */ var _item_items_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./app/item/items.component.ts");
/* harmony import */ var _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./app/item/item-detail.component.ts");
/* harmony import */ var _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./app/capture-image/capture-image.component.ts");







// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";
// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
var AppModule = /** @class */ (function () {
    /*
    Pass your application module to the bootstrapModule function located in main.ts to start your app
    */
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            bootstrap: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
            ],
            imports: [
                nativescript_angular_nativescript_module__WEBPACK_IMPORTED_MODULE_1__["NativeScriptModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _item_items_component__WEBPACK_IMPORTED_MODULE_4__["ItemsComponent"],
                _item_item_detail_component__WEBPACK_IMPORTED_MODULE_5__["ItemDetailComponent"],
                _capture_image_capture_image_component__WEBPACK_IMPORTED_MODULE_6__["CaptureImageComponent"]
            ],
            providers: [],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_0__["NO_ERRORS_SCHEMA"]
            ]
        })
        /*
        Pass your application module to the bootstrapModule function located in main.ts to start your app
        */
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./app/capture-image/capture-image.component.css":
/***/ (function(module, exports) {

module.exports = ".capture-image-btn {\n    height: 50px;\n;}"

/***/ }),

/***/ "./app/capture-image/capture-image.component.html":
/***/ (function(module, exports) {

module.exports = "<Button text=\"capture image\" class=\"btn btn-primary capture-image-btn\" (tap)=\"handleTakePicture($event)\"></Button>"

/***/ }),

/***/ "./app/capture-image/capture-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CaptureImageComponent", function() { return CaptureImageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/nativescript-camera/camera.js");
/* harmony import */ var nativescript_camera__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nativescript_camera__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("../node_modules/tns-core-modules/ui/image/image.js");
/* harmony import */ var tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_2__);



var CaptureImageComponent = /** @class */ (function () {
    function CaptureImageComponent() {
    }
    CaptureImageComponent.prototype.ngOnInit = function () {
    };
    CaptureImageComponent.prototype.captureImage = function (event) {
        var _this = this;
        // console.log(event);
        nativescript_camera__WEBPACK_IMPORTED_MODULE_1__["takePicture"]()
            .then(function (result) {
            console.log(result);
            _this.image = new tns_core_modules_ui_image__WEBPACK_IMPORTED_MODULE_2__["Image"]();
            _this.image.src = result;
            _this.transportImageToHandler(_this.image);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    CaptureImageComponent.prototype.handleTakePicture = function (event) {
        var _this = this;
        nativescript_camera__WEBPACK_IMPORTED_MODULE_1__["requestCameraPermissions"]().then(function () {
            _this.captureImage(event);
        }),
            function () {
                console.log('Applicaton does not have permissions to use the camera');
            };
    };
    CaptureImageComponent.prototype.transportImageToHandler = function (image) {
        //this function will pass the image over to the processing component;
    };
    CaptureImageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ns-capture-image',
            template: __webpack_require__("./app/capture-image/capture-image.component.html"),
            styles: [__webpack_require__("./app/capture-image/capture-image.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CaptureImageComponent);
    return CaptureImageComponent;
}());



/***/ }),

/***/ "./app/item/item-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<ActionBar title=\"Details\" class=\"action-bar\"></ActionBar>\n<FlexboxLayout flexDirection=\"column\" class=\"page\">\n    <FlexboxLayout class=\"m-15\">\n        <Label class=\"h2\" [text]=\"item.id + '. '\"></Label>\n        <Label class=\"h2\" [text]=\"item.name\"></Label>\n    </FlexboxLayout>\n    <Label class=\"h4\" [text]=\"item.role\"></Label>\n</FlexboxLayout>\n"

/***/ }),

/***/ "./app/item/item-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailComponent", function() { return ItemDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("../node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./app/item/item.service.ts");



var ItemDetailComponent = /** @class */ (function () {
    function ItemDetailComponent(itemService, route) {
        this.itemService = itemService;
        this.route = route;
    }
    ItemDetailComponent.prototype.ngOnInit = function () {
        var id = +this.route.snapshot.params.id;
        this.item = this.itemService.getItem(id);
    };
    ItemDetailComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }
    ]; };
    ItemDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-details",
            template: __webpack_require__("./app/item/item-detail.component.html")
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_2__["ItemService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], ItemDetailComponent);
    return ItemDetailComponent;
}());



/***/ }),

/***/ "./app/item/item.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemService", function() { return ItemService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");

var ItemService = /** @class */ (function () {
    function ItemService() {
        this.items = new Array({ id: 1, name: "Ter Stegen", role: "Goalkeeper" }, { id: 3, name: "Piqué", role: "Defender" }, { id: 4, name: "I. Rakitic", role: "Midfielder" }, { id: 5, name: "Sergio", role: "Midfielder" }, { id: 6, name: "Denis Suárez", role: "Midfielder" }, { id: 7, name: "Arda", role: "Midfielder" }, { id: 8, name: "A. Iniesta", role: "Midfielder" }, { id: 9, name: "Suárez", role: "Forward" }, { id: 10, name: "Messi", role: "Forward" }, { id: 11, name: "Neymar", role: "Forward" }, { id: 12, name: "Rafinha", role: "Midfielder" }, { id: 13, name: "Cillessen", role: "Goalkeeper" }, { id: 14, name: "Mascherano", role: "Defender" }, { id: 17, name: "Paco Alcácer", role: "Forward" }, { id: 18, name: "Jordi Alba", role: "Defender" }, { id: 19, name: "Digne", role: "Defender" }, { id: 20, name: "Sergi Roberto", role: "Midfielder" }, { id: 21, name: "André Gomes", role: "Midfielder" }, { id: 22, name: "Aleix Vidal", role: "Midfielder" }, { id: 23, name: "Umtiti", role: "Defender" }, { id: 24, name: "Mathieu", role: "Defender" }, { id: 25, name: "Masip", role: "Goalkeeper" });
    }
    ItemService.prototype.getItems = function () {
        return this.items;
    };
    ItemService.prototype.getItem = function (id) {
        return this.items.filter(function (item) { return item.id === id; })[0];
    };
    ItemService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: "root"
        })
    ], ItemService);
    return ItemService;
}());



/***/ }),

/***/ "./app/item/items.component.html":
/***/ (function(module, exports) {

module.exports = "<!--\nThe template defines the view of the component - what is actually rendered.\nIn NativeScript applications the template is defined with XML using NativeScript UI elements.\nIt is different from HTML. So instead of <input>, <span>, <div> etc. - we have <TextField>, <Label> and layouts.\nThe important thing is that although the elements are different - all of the Angular’s template syntax works exactly the same.\nSo you can still use template expressions, bindings, templates as well as all the built-in directives.\n-->\n\n<!--\nThe ActionBar is the NativeScript common abstraction over the Android ActionBar and iOS NavigationBar.\nhttp://docs.nativescript.org/ui/action-bar\n-->\n<ActionBar title=\"My App\" class=\"action-bar\">\n</ActionBar>\n\n<!--\nThe GridLayout arranges its child elements in a table structure of rows and columns.\nA cell can contain multiple child elements, they can span over multiple rows and columns, \nand even overlap each other. The GridLayout has one column and one row by default.\nYou can learn more about NativeScript layouts at https://docs.nativescript.org/ui/layout-containers.\n\nThese components make use of several CSS class names that are part of the NativeScript\ncore theme, such as p-20, btn, h2, and list-group. You can view a full list of the\nclass names available for styling your app at https://docs.nativescript.org/ui/theme.\n-->\n<GridLayout class=\"page\">\n    <ListView [items]=\"items\" class=\"list-group\">\n        <ng-template let-item=\"item\">\n            <Label [nsRouterLink]=\"['/item', item.id]\" [text]=\"item.name\"\n                class=\"list-group-item\"></Label>\n        </ng-template>\n    </ListView>\n</GridLayout>\n"

/***/ }),

/***/ "./app/item/items.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsComponent", function() { return ItemsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _item_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/item/item.service.ts");


var ItemsComponent = /** @class */ (function () {
    function ItemsComponent(itemService) {
        this.itemService = itemService;
    }
    ItemsComponent.prototype.ngOnInit = function () {
        this.items = this.itemService.getItems();
    };
    ItemsComponent.ctorParameters = function () { return [
        { type: _item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"] }
    ]; };
    ItemsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "ns-items",
            template: __webpack_require__("./app/item/items.component.html")
        }),
        __metadata("design:paramtypes", [_item_service__WEBPACK_IMPORTED_MODULE_1__["ItemService"]])
    ], ItemsComponent);
    return ItemsComponent;
}());



/***/ }),

/***/ "./main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("../node_modules/nativescript-angular/platform.js");
/* harmony import */ var nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");

        let applicationCheckPlatform = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
        if (applicationCheckPlatform.android && !global["__snapshot"]) {
            __webpack_require__("../node_modules/tns-core-modules/ui/frame/frame.js");
__webpack_require__("../node_modules/tns-core-modules/ui/frame/activity.js");
        }

        
            __webpack_require__("../node_modules/nativescript-dev-webpack/load-application-css-angular.js")();
            
            
        if (true) {
            const hmrUpdate = __webpack_require__("../node_modules/nativescript-dev-webpack/hmr/index.js").hmrUpdate;
            global.__initialHmrUpdate = true;
            global.__hmrSyncBackup = global.__onLiveSync;

            global.__onLiveSync = function () {
                hmrUpdate();
            };

            global.hmrRefresh = function({ type, path } = {}) {
                if (global.__initialHmrUpdate) {
                    return;
                }

                setTimeout(() => {
                    global.__hmrSyncBackup({ type, path });
                });
            };

            hmrUpdate().then(() => {
                global.__initialHmrUpdate = false;
            })
        }
        
            
        __webpack_require__("../node_modules/tns-core-modules/bundle-entry-points.js");
        

var options_Generated = {};

if (true) {
    options_Generated = {
        hmrOptions: {
            moduleTypeFactory: function () { return __webpack_require__("./app/app.module.ts").AppModule; },
            livesyncCallback: function (platformReboot) { setTimeout(platformReboot, 0); }
        }
    };
}

if (true) {
    module["hot"].accept(["./app/app.module.ts"], function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./app/app.module.ts");
(function () {
        global["hmrRefresh"]({});
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}
// A traditional NativeScript application starts by initializing global objects,
// setting up global CSS rules, creating, and navigating to the main page.
// Angular applications need to take care of their own initialization:
// modules, components, directives, routes, DI providers.
// A NativeScript Angular app needs to make both paradigms work together,
// so we provide a wrapper platform object, platformNativeScriptDynamic,
// that sets up a NativeScript application and can bootstrap the Angular framework.
nativescript_angular_platform__WEBPACK_IMPORTED_MODULE_0__["platformNativeScriptDynamic"](Object.assign({}, options_Generated)).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"]);

    
        
        
    
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__("../node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./package.json":
/***/ (function(module) {

module.exports = {"main":"main.js","android":{"v8Flags":"--expose_gc","markingMode":"none"},"dependencies":{"@nativescript/schematics":"^0.7.3"},"devDependencies":{"@angular/cli":"^8.3.19"}};

/***/ })

},[["./main.ts","runtime","vendor"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vJF9sYXp5X3JvdXRlX3Jlc291cmNlIGxhenkgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9hcHAuY3NzIiwid2VicGFjazovLy8uL2FwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FwcC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYXBwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvY2FwdHVyZS1pbWFnZS9jYXB0dXJlLWltYWdlLmNvbXBvbmVudC5jc3MiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NhcHR1cmUtaW1hZ2UvY2FwdHVyZS1pbWFnZS5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvY2FwdHVyZS1pbWFnZS9jYXB0dXJlLWltYWdlLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbCIsIndlYnBhY2s6Ly8vLi9hcHAvaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2l0ZW0vaXRlbS5zZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC5odG1sIiwid2VicGFjazovLy8uL2FwcC9pdGVtL2l0ZW1zLmNvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0EsNENBQTRDLFdBQVc7QUFDdkQ7QUFDQTtBQUNBLHlFOzs7Ozs7O0FDWkEseUVBQTJCLG1CQUFPLENBQUMsZ0RBQWdEO0FBQ25GO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLG9HQUErRjs7QUFFakg7QUFDQSxjQUFjLFFBQVM7O0FB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RUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUMxQyxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDN0MsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNuRCxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQzNDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDakQsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUMxQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEVBQzFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsRUFDM0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUMvQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ2pELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDaEQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxjQUFjLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxFQUNqRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQ2hELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsRUFDM0MsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxlQUFlLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxFQUNyRCxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLEVBQ25ELEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsRUFDbkQsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxFQUM1QyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLEVBQzdDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsQ0FDaEQsQ0FBQztJQVNOLENBQUM7SUFQRyw4QkFBUSxHQUFSO1FBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCw2QkFBTyxHQUFQLFVBQVEsRUFBVTtRQUNkLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBQyxJQUFJLElBQUssV0FBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQWQsQ0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQWhDUSxXQUFXO1FBSHZCLGdFQUFVLENBQUM7WUFDUixVQUFVLEVBQUUsTUFBTTtTQUNyQixDQUFDO09BQ1csV0FBVyxDQWlDdkI7SUFBRCxrQkFBQztDQUFBO0FBakN1Qjs7Ozs7Ozs7QUNQeEIsNHJEOzs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQWtEO0FBR0w7QUFNN0M7SUFHSSx3QkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7SUFBSSxDQUFDO0lBRWpELGlDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDN0MsQ0FBQzs7Z0JBSmdDLHlEQUFXOztJQUhuQyxjQUFjO1FBSjFCLCtEQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixnRUFBcUM7U0FDeEMsQ0FBQzt5Q0FJbUMseURBQVc7T0FIbkMsY0FBYyxDQVExQjtJQUFELHFCQUFDO0NBQUE7QUFSMEI7Ozs7Ozs7Ozs7Ozs7O0FDTjNCLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxnQ0FBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRTdDLGNBQWdGO0FBQ047QUFDMUUsK0RBQXNFO0FBQ3RFLGdEQUF5RDtBQUN6RCwyQkFBeUU7QUFDekUsaUJBQXdFO0FBQ1c7QUFDbkYsa0NBQXlEIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dChyZXEpIHtcblx0Ly8gSGVyZSBQcm9taXNlLnJlc29sdmUoKS50aGVuKCkgaXMgdXNlZCBpbnN0ZWFkIG9mIG5ldyBQcm9taXNlKCkgdG8gcHJldmVudFxuXHQvLyB1bmNhdWdodCBleGNlcHRpb24gcG9wcGluZyB1cCBpbiBkZXZ0b29sc1xuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH0pO1xufVxud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LmtleXMgPSBmdW5jdGlvbigpIHsgcmV0dXJuIFtdOyB9O1xud2VicGFja0VtcHR5QXN5bmNDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrRW1wdHlBc3luY0NvbnRleHQ7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tFbXB0eUFzeW5jQ29udGV4dDtcbndlYnBhY2tFbXB0eUFzeW5jQ29udGV4dC5pZCA9IFwiLi4vJCRfbGF6eV9yb3V0ZV9yZXNvdXJjZSBsYXp5IHJlY3Vyc2l2ZVwiOyIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbmV4cG9ydHMuaShyZXF1aXJlKFwiLSEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS02LTEhbmF0aXZlc2NyaXB0LXRoZW1lLWNvcmUvY3NzL2NvcmUubGlnaHQuY3NzXCIpLCBcIlwiKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKlxcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC5jc3MgZmlsZSBpcyB3aGVyZSB5b3UgcGxhY2UgQ1NTIHJ1bGVzIHRoYXRcXG55b3Ugd291bGQgbGlrZSB0byBhcHBseSB0byB5b3VyIGVudGlyZSBhcHBsaWNhdGlvbi4gQ2hlY2sgb3V0XFxuaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9zdHlsaW5nIGZvciBhIGZ1bGwgbGlzdCBvZiB0aGUgQ1NTXFxuc2VsZWN0b3JzIGFuZCBwcm9wZXJ0aWVzIHlvdSBjYW4gdXNlIHRvIHN0eWxlIFVJIGNvbXBvbmVudHMuXFxuXFxuLypcXG5JbiBtYW55IGNhc2VzIHlvdSBtYXkgd2FudCB0byB1c2UgdGhlIE5hdGl2ZVNjcmlwdCBjb3JlIHRoZW1lIGluc3RlYWRcXG5vZiB3cml0aW5nIHlvdXIgb3duIENTUyBydWxlcy4gRm9yIGEgZnVsbCBsaXN0IG9mIGNsYXNzIG5hbWVzIGluIHRoZSB0aGVtZVxcbnJlZmVyIHRvIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuKi9cXG5cIiwgXCJcIl0pO1xuXG47XG4gICAgaWYgKG1vZHVsZS5ob3QpIHtcbiAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKCgpID0+IHtcbiAgICAgICAgICAgIGdsb2JhbC5obXJSZWZyZXNoKHsgdHlwZTogJ3N0eWxlJywgcGF0aDogJy4vYXBwLmNzcycgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBJdGVtc0NvbXBvbmVudCB9IGZyb20gXCIuL2l0ZW0vaXRlbXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBJdGVtRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtLWRldGFpbC5jb21wb25lbnRcIjtcbmltcG9ydCB7IENhcHR1cmVJbWFnZUNvbXBvbmVudCB9IGZyb20gXCIuL2NhcHR1cmUtaW1hZ2UvY2FwdHVyZS1pbWFnZS5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAgeyBwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9jYXB0dXJlSW1hZ2VcIiwgcGF0aE1hdGNoOiBcImZ1bGxcIiB9LFxuICAgIHsgcGF0aDogXCJjYXB0dXJlSW1hZ2VcIiwgY29tcG9uZW50OiBDYXB0dXJlSW1hZ2VDb21wb25lbnQgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLSBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFnZS1yb3V0ZXItb3V0bGV0IC0tPlxcbjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1hcHBcIixcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2FwcC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCB7IH1cbiIsImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1zQ29tcG9uZW50IH0gZnJvbSBcIi4vaXRlbS9pdGVtcy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEl0ZW1EZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9pdGVtL2l0ZW0tZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FwdHVyZUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi9jYXB0dXJlLWltYWdlL2NhcHR1cmUtaW1hZ2UuY29tcG9uZW50JztcblxuLy8gVW5jb21tZW50IGFuZCBhZGQgdG8gTmdNb2R1bGUgaW1wb3J0cyBpZiB5b3UgbmVlZCB0byB1c2UgdHdvLXdheSBiaW5kaW5nXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtc1wiO1xuXG4vLyBVbmNvbW1lbnQgYW5kIGFkZCB0byBOZ01vZHVsZSBpbXBvcnRzIGlmIHlvdSBuZWVkIHRvIHVzZSB0aGUgSHR0cENsaWVudCB3cmFwcGVyXG4vLyBpbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBBcHBDb21wb25lbnQsXG4gICAgICAgIEl0ZW1zQ29tcG9uZW50LFxuICAgICAgICBJdGVtRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBDYXB0dXJlSW1hZ2VDb21wb25lbnRcbiAgICBdLFxuICAgIHByb3ZpZGVyczogW10sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbi8qXG5QYXNzIHlvdXIgYXBwbGljYXRpb24gbW9kdWxlIHRvIHRoZSBib290c3RyYXBNb2R1bGUgZnVuY3Rpb24gbG9jYXRlZCBpbiBtYWluLnRzIHRvIHN0YXJ0IHlvdXIgYXBwXG4qL1xuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCIuY2FwdHVyZS1pbWFnZS1idG4ge1xcbiAgICBoZWlnaHQ6IDUwcHg7XFxuO31cIiIsIm1vZHVsZS5leHBvcnRzID0gXCI8QnV0dG9uIHRleHQ9XFxcImNhcHR1cmUgaW1hZ2VcXFwiIGNsYXNzPVxcXCJidG4gYnRuLXByaW1hcnkgY2FwdHVyZS1pbWFnZS1idG5cXFwiICh0YXApPVxcXCJoYW5kbGVUYWtlUGljdHVyZSgkZXZlbnQpXFxcIj48L0J1dHRvbj5cIiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgKiBhcyBjYW1lcmEgZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5pbXBvcnQgeyBJbWFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL2ltYWdlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNhcHR1cmUtaW1hZ2UnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FwdHVyZS1pbWFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NhcHR1cmUtaW1hZ2UuY29tcG9uZW50LmNzcyddXG59KVxuZXhwb3J0IGNsYXNzIENhcHR1cmVJbWFnZUNvbXBvbmVudCB7XG5cbiAgaW1hZ2U7XG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxuICBjYXB0dXJlSW1hZ2UoZXZlbnQpe1xuICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KTtcbiAgICBjYW1lcmEudGFrZVBpY3R1cmUoKVxuICAgICAgICAgIC50aGVuKCByZXN1bHQgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uuc3JjID0gcmVzdWx0O1xuICAgICAgICAgICAgdGhpcy50cmFuc3BvcnRJbWFnZVRvSGFuZGxlcih0aGlzLmltYWdlKTtcbiAgICAgICAgICB9KVxuICAgICAgICAgIC5jYXRjaCggZXJyb3IgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gIH1cblxuICBoYW5kbGVUYWtlUGljdHVyZShldmVudCkge1xuICAgIGNhbWVyYS5yZXF1ZXN0Q2FtZXJhUGVybWlzc2lvbnMoKS50aGVuKFxuICAgICAgKCkgPT57XG4gICAgICAgIHRoaXMuY2FwdHVyZUltYWdlKGV2ZW50KTtcbiAgICAgIH0pLFxuICAgICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdBcHBsaWNhdG9uIGRvZXMgbm90IGhhdmUgcGVybWlzc2lvbnMgdG8gdXNlIHRoZSBjYW1lcmEnKVxuICAgIH1cbiAgfVxuXG4gIHRyYW5zcG9ydEltYWdlVG9IYW5kbGVyKGltYWdlKXtcbiAgICAvL3RoaXMgZnVuY3Rpb24gd2lsbCBwYXNzIHRoZSBpbWFnZSBvdmVyIHRvIHRoZSBwcm9jZXNzaW5nIGNvbXBvbmVudDtcbiAgfVxuXG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPEFjdGlvbkJhciB0aXRsZT1cXFwiRGV0YWlsc1xcXCIgY2xhc3M9XFxcImFjdGlvbi1iYXJcXFwiPjwvQWN0aW9uQmFyPlxcbjxGbGV4Ym94TGF5b3V0IGZsZXhEaXJlY3Rpb249XFxcImNvbHVtblxcXCIgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8RmxleGJveExheW91dCBjbGFzcz1cXFwibS0xNVxcXCI+XFxuICAgICAgICA8TGFiZWwgY2xhc3M9XFxcImgyXFxcIiBbdGV4dF09XFxcIml0ZW0uaWQgKyAnLiAnXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPExhYmVsIGNsYXNzPVxcXCJoMlxcXCIgW3RleHRdPVxcXCJpdGVtLm5hbWVcXFwiPjwvTGFiZWw+XFxuICAgIDwvRmxleGJveExheW91dD5cXG4gICAgPExhYmVsIGNsYXNzPVxcXCJoNFxcXCIgW3RleHRdPVxcXCJpdGVtLnJvbGVcXFwiPjwvTGFiZWw+XFxuPC9GbGV4Ym94TGF5b3V0PlxcblwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1kZXRhaWxzXCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9pdGVtLWRldGFpbC5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1EZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGl0ZW06IEl0ZW07XG5cbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgcHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXG4gICAgKSB7IH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICBjb25zdCBpZCA9ICt0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtcy5pZDtcbiAgICAgICAgdGhpcy5pdGVtID0gdGhpcy5pdGVtU2VydmljZS5nZXRJdGVtKGlkKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuaW1wb3J0IHsgSXRlbSB9IGZyb20gXCIuL2l0ZW1cIjtcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46IFwicm9vdFwiXG59KVxuZXhwb3J0IGNsYXNzIEl0ZW1TZXJ2aWNlIHtcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KFxuICAgICAgICB7IGlkOiAxLCBuYW1lOiBcIlRlciBTdGVnZW5cIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfSxcbiAgICAgICAgeyBpZDogMywgbmFtZTogXCJQaXF1w6lcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDQsIG5hbWU6IFwiSS4gUmFraXRpY1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA1LCBuYW1lOiBcIlNlcmdpb1wiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA2LCBuYW1lOiBcIkRlbmlzIFN1w6FyZXpcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogNywgbmFtZTogXCJBcmRhXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDgsIG5hbWU6IFwiQS4gSW5pZXN0YVwiLCByb2xlOiBcIk1pZGZpZWxkZXJcIiB9LFxuICAgICAgICB7IGlkOiA5LCBuYW1lOiBcIlN1w6FyZXpcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTAsIG5hbWU6IFwiTWVzc2lcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTEsIG5hbWU6IFwiTmV5bWFyXCIsIHJvbGU6IFwiRm9yd2FyZFwiIH0sXG4gICAgICAgIHsgaWQ6IDEyLCBuYW1lOiBcIlJhZmluaGFcIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMTMsIG5hbWU6IFwiQ2lsbGVzc2VuXCIsIHJvbGU6IFwiR29hbGtlZXBlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE0LCBuYW1lOiBcIk1hc2NoZXJhbm9cIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDE3LCBuYW1lOiBcIlBhY28gQWxjw6FjZXJcIiwgcm9sZTogXCJGb3J3YXJkXCIgfSxcbiAgICAgICAgeyBpZDogMTgsIG5hbWU6IFwiSm9yZGkgQWxiYVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMTksIG5hbWU6IFwiRGlnbmVcIiwgcm9sZTogXCJEZWZlbmRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIwLCBuYW1lOiBcIlNlcmdpIFJvYmVydG9cIiwgcm9sZTogXCJNaWRmaWVsZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjEsIG5hbWU6IFwiQW5kcsOpIEdvbWVzXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIyLCBuYW1lOiBcIkFsZWl4IFZpZGFsXCIsIHJvbGU6IFwiTWlkZmllbGRlclwiIH0sXG4gICAgICAgIHsgaWQ6IDIzLCBuYW1lOiBcIlVtdGl0aVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjQsIG5hbWU6IFwiTWF0aGlldVwiLCByb2xlOiBcIkRlZmVuZGVyXCIgfSxcbiAgICAgICAgeyBpZDogMjUsIG5hbWU6IFwiTWFzaXBcIiwgcm9sZTogXCJHb2Fsa2VlcGVyXCIgfVxuICAgICk7XG5cbiAgICBnZXRJdGVtcygpOiBBcnJheTxJdGVtPiB7XG4gICAgICAgIHJldHVybiB0aGlzLml0ZW1zO1xuICAgIH1cblxuICAgIGdldEl0ZW0oaWQ6IG51bWJlcik6IEl0ZW0ge1xuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcy5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0uaWQgPT09IGlkKVswXTtcbiAgICB9XG59XG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiPCEtLVxcblRoZSB0ZW1wbGF0ZSBkZWZpbmVzIHRoZSB2aWV3IG9mIHRoZSBjb21wb25lbnQgLSB3aGF0IGlzIGFjdHVhbGx5IHJlbmRlcmVkLlxcbkluIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbnMgdGhlIHRlbXBsYXRlIGlzIGRlZmluZWQgd2l0aCBYTUwgdXNpbmcgTmF0aXZlU2NyaXB0IFVJIGVsZW1lbnRzLlxcbkl0IGlzIGRpZmZlcmVudCBmcm9tIEhUTUwuIFNvIGluc3RlYWQgb2YgPGlucHV0PiwgPHNwYW4+LCA8ZGl2PiBldGMuIC0gd2UgaGF2ZSA8VGV4dEZpZWxkPiwgPExhYmVsPiBhbmQgbGF5b3V0cy5cXG5UaGUgaW1wb3J0YW50IHRoaW5nIGlzIHRoYXQgYWx0aG91Z2ggdGhlIGVsZW1lbnRzIGFyZSBkaWZmZXJlbnQgLSBhbGwgb2YgdGhlIEFuZ3VsYXLigJlzIHRlbXBsYXRlIHN5bnRheCB3b3JrcyBleGFjdGx5IHRoZSBzYW1lLlxcblNvIHlvdSBjYW4gc3RpbGwgdXNlIHRlbXBsYXRlIGV4cHJlc3Npb25zLCBiaW5kaW5ncywgdGVtcGxhdGVzIGFzIHdlbGwgYXMgYWxsIHRoZSBidWlsdC1pbiBkaXJlY3RpdmVzLlxcbi0tPlxcblxcbjwhLS1cXG5UaGUgQWN0aW9uQmFyIGlzIHRoZSBOYXRpdmVTY3JpcHQgY29tbW9uIGFic3RyYWN0aW9uIG92ZXIgdGhlIEFuZHJvaWQgQWN0aW9uQmFyIGFuZCBpT1MgTmF2aWdhdGlvbkJhci5cXG5odHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL3VpL2FjdGlvbi1iYXJcXG4tLT5cXG48QWN0aW9uQmFyIHRpdGxlPVxcXCJNeSBBcHBcXFwiIGNsYXNzPVxcXCJhY3Rpb24tYmFyXFxcIj5cXG48L0FjdGlvbkJhcj5cXG5cXG48IS0tXFxuVGhlIEdyaWRMYXlvdXQgYXJyYW5nZXMgaXRzIGNoaWxkIGVsZW1lbnRzIGluIGEgdGFibGUgc3RydWN0dXJlIG9mIHJvd3MgYW5kIGNvbHVtbnMuXFxuQSBjZWxsIGNhbiBjb250YWluIG11bHRpcGxlIGNoaWxkIGVsZW1lbnRzLCB0aGV5IGNhbiBzcGFuIG92ZXIgbXVsdGlwbGUgcm93cyBhbmQgY29sdW1ucywgXFxuYW5kIGV2ZW4gb3ZlcmxhcCBlYWNoIG90aGVyLiBUaGUgR3JpZExheW91dCBoYXMgb25lIGNvbHVtbiBhbmQgb25lIHJvdyBieSBkZWZhdWx0LlxcbllvdSBjYW4gbGVhcm4gbW9yZSBhYm91dCBOYXRpdmVTY3JpcHQgbGF5b3V0cyBhdCBodHRwczovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy91aS9sYXlvdXQtY29udGFpbmVycy5cXG5cXG5UaGVzZSBjb21wb25lbnRzIG1ha2UgdXNlIG9mIHNldmVyYWwgQ1NTIGNsYXNzIG5hbWVzIHRoYXQgYXJlIHBhcnQgb2YgdGhlIE5hdGl2ZVNjcmlwdFxcbmNvcmUgdGhlbWUsIHN1Y2ggYXMgcC0yMCwgYnRuLCBoMiwgYW5kIGxpc3QtZ3JvdXAuIFlvdSBjYW4gdmlldyBhIGZ1bGwgbGlzdCBvZiB0aGVcXG5jbGFzcyBuYW1lcyBhdmFpbGFibGUgZm9yIHN0eWxpbmcgeW91ciBhcHAgYXQgaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvdWkvdGhlbWUuXFxuLS0+XFxuPEdyaWRMYXlvdXQgY2xhc3M9XFxcInBhZ2VcXFwiPlxcbiAgICA8TGlzdFZpZXcgW2l0ZW1zXT1cXFwiaXRlbXNcXFwiIGNsYXNzPVxcXCJsaXN0LWdyb3VwXFxcIj5cXG4gICAgICAgIDxuZy10ZW1wbGF0ZSBsZXQtaXRlbT1cXFwiaXRlbVxcXCI+XFxuICAgICAgICAgICAgPExhYmVsIFtuc1JvdXRlckxpbmtdPVxcXCJbJy9pdGVtJywgaXRlbS5pZF1cXFwiIFt0ZXh0XT1cXFwiaXRlbS5uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwibGlzdC1ncm91cC1pdGVtXFxcIj48L0xhYmVsPlxcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cXG4gICAgPC9MaXN0Vmlldz5cXG48L0dyaWRMYXlvdXQ+XFxuXCIiLCJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IEl0ZW0gfSBmcm9tIFwiLi9pdGVtXCI7XG5pbXBvcnQgeyBJdGVtU2VydmljZSB9IGZyb20gXCIuL2l0ZW0uc2VydmljZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJucy1pdGVtc1wiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaXRlbXMuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBJdGVtc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgaXRlbXM6IEFycmF5PEl0ZW0+O1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBpdGVtU2VydmljZTogSXRlbVNlcnZpY2UpIHsgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaXRlbXMgPSB0aGlzLml0ZW1TZXJ2aWNlLmdldEl0ZW1zKCk7XG4gICAgfVxufVxuIiwiLy8gdGhpcyBpbXBvcnQgc2hvdWxkIGJlIGZpcnN0IGluIG9yZGVyIHRvIGxvYWQgc29tZSByZXF1aXJlZCBzZXR0aW5ncyAobGlrZSBnbG9iYWxzIGFuZCByZWZsZWN0LW1ldGFkYXRhKVxuaW1wb3J0IHsgcGxhdGZvcm1OYXRpdmVTY3JpcHREeW5hbWljIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3BsYXRmb3JtXCI7XG5cbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gXCIuL2FwcC9hcHAubW9kdWxlXCI7XG5cbi8vIEEgdHJhZGl0aW9uYWwgTmF0aXZlU2NyaXB0IGFwcGxpY2F0aW9uIHN0YXJ0cyBieSBpbml0aWFsaXppbmcgZ2xvYmFsIG9iamVjdHMsXG4vLyBzZXR0aW5nIHVwIGdsb2JhbCBDU1MgcnVsZXMsIGNyZWF0aW5nLCBhbmQgbmF2aWdhdGluZyB0byB0aGUgbWFpbiBwYWdlLlxuLy8gQW5ndWxhciBhcHBsaWNhdGlvbnMgbmVlZCB0byB0YWtlIGNhcmUgb2YgdGhlaXIgb3duIGluaXRpYWxpemF0aW9uOlxuLy8gbW9kdWxlcywgY29tcG9uZW50cywgZGlyZWN0aXZlcywgcm91dGVzLCBESSBwcm92aWRlcnMuXG4vLyBBIE5hdGl2ZVNjcmlwdCBBbmd1bGFyIGFwcCBuZWVkcyB0byBtYWtlIGJvdGggcGFyYWRpZ21zIHdvcmsgdG9nZXRoZXIsXG4vLyBzbyB3ZSBwcm92aWRlIGEgd3JhcHBlciBwbGF0Zm9ybSBvYmplY3QsIHBsYXRmb3JtTmF0aXZlU2NyaXB0RHluYW1pYyxcbi8vIHRoYXQgc2V0cyB1cCBhIE5hdGl2ZVNjcmlwdCBhcHBsaWNhdGlvbiBhbmQgY2FuIGJvb3RzdHJhcCB0aGUgQW5ndWxhciBmcmFtZXdvcmsuXG5wbGF0Zm9ybU5hdGl2ZVNjcmlwdER5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=