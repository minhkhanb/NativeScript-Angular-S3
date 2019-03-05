"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var location_component_1 = require("./location.component");
var routes = [
    {
        path: '',
        component: location_component_1.LocationComponent
    }
];
var LocationRoutingModule = /** @class */ (function () {
    function LocationRoutingModule() {
    }
    LocationRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule.forChild(routes),
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], LocationRoutingModule);
    return LocationRoutingModule;
}());
exports.LocationRoutingModule = LocationRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24tcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsb2NhdGlvbi1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUsMkRBQXlEO0FBRXpELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsc0NBQWlCO0tBQzdCO0NBQ0YsQ0FBQztBQVdGO0lBQUE7SUFFQSxDQUFDO0lBRlkscUJBQXFCO1FBVGpDLGVBQVEsQ0FBQztZQUNSLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0IsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDO2FBQzFDO1lBQ0QsT0FBTyxFQUFFO2dCQUNQLGlDQUF3QjthQUN6QjtTQUNGLENBQUM7T0FFVyxxQkFBcUIsQ0FFakM7SUFBRCw0QkFBQztDQUFBLEFBRkQsSUFFQztBQUZZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgTG9jYXRpb25Db21wb25lbnQgfSBmcm9tICcuL2xvY2F0aW9uLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBMb2NhdGlvbkNvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uUm91dGluZ01vZHVsZSB7XG5cbn0iXX0=