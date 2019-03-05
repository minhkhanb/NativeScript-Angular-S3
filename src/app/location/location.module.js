"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var location_routing_module_1 = require("./location-routing.module");
var location_component_1 = require("./location.component");
var LocationModule = /** @class */ (function () {
    function LocationModule() {
    }
    LocationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                location_routing_module_1.LocationRoutingModule
            ],
            declarations: [
                location_component_1.LocationComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], LocationModule);
    return LocationModule;
}());
exports.LocationModule = LocationModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24ubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24ubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSxxRUFBa0U7QUFDbEUsMkRBQXlEO0FBZXpEO0lBQUE7SUFFQSxDQUFDO0lBRlksY0FBYztRQWIxQixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCO2dCQUN4QiwrQ0FBcUI7YUFDdEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1osc0NBQWlCO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLHVCQUFnQjthQUNqQjtTQUNGLENBQUM7T0FFVyxjQUFjLENBRTFCO0lBQUQscUJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBMb2NhdGlvblJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2xvY2F0aW9uLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IExvY2F0aW9uQ29tcG9uZW50IH0gZnJvbSAnLi9sb2NhdGlvbi5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIExvY2F0aW9uUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBMb2NhdGlvbkNvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgTG9jYXRpb25Nb2R1bGUge1xuXG59Il19