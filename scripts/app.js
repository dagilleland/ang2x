var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
System.register("app", ['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var App;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            App = (function () {
                function App() {
                }
                App = __decorate([
                    core_1.Component({
                        selector: 'core-app',
                        templateUrl: 'components/app.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], App);
                return App;
            }());
            exports_1("App", App);
        }
    }
});
System.register("info", ['angular2/core'], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var core_2;
    var Info;
    return {
        setters:[
            function (core_2_1) {
                core_2 = core_2_1;
            }],
        execute: function() {
            Info = (function () {
                function Info() {
                    this.version = "0.0.1";
                }
                Info = __decorate([
                    core_2.Component({
                        selector: "about-info",
                        templateUrl: "components/about.html"
                    }), 
                    __metadata('design:paramtypes', [])
                ], Info);
                return Info;
            }());
            exports_2("Info", Info);
        }
    }
});
System.register("main", ['angular2/platform/browser', "app", "info"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var browser_1, app_1, info_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (app_1_1) {
                app_1 = app_1_1;
            },
            function (info_1_1) {
                info_1 = info_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_1.App);
            browser_1.bootstrap(info_1.Info);
        }
    }
});
//# sourceMappingURL=app.js.map