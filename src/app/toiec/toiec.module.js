"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var toiec_routing_module_1 = require("./toiec-routing.module");
var toiec_component_1 = require("./toiec.component");
var ToiecModule = /** @class */ (function () {
    function ToiecModule() {
    }
    ToiecModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                toiec_routing_module_1.ToiecRoutingModule
            ],
            declarations: [
                toiec_component_1.ToiecComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], ToiecModule);
    return ToiecModule;
}());
exports.ToiecModule = ToiecModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9pZWMubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9pZWMubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSwrREFBNEQ7QUFDNUQscURBQW1EO0FBZW5EO0lBQUE7SUFBMEIsQ0FBQztJQUFkLFdBQVc7UUFidkIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjtnQkFDeEIseUNBQWtCO2FBQ25CO1lBQ0QsWUFBWSxFQUFFO2dCQUNaLGdDQUFjO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ1AsdUJBQWdCO2FBQ2pCO1NBQ0YsQ0FBQztPQUVXLFdBQVcsQ0FBRztJQUFELGtCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxrQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuXG5pbXBvcnQgeyBUb2llY1JvdXRpbmdNb2R1bGUgfSBmcm9tICcuL3RvaWVjLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IFRvaWVjQ29tcG9uZW50IH0gZnJvbSAnLi90b2llYy5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgIFRvaWVjUm91dGluZ01vZHVsZVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBUb2llY0NvbXBvbmVudFxuICBdLFxuICBzY2hlbWFzOiBbXG4gICAgTk9fRVJST1JTX1NDSEVNQVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVG9pZWNNb2R1bGUge30iXX0=