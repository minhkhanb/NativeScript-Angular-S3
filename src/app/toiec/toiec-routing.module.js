"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var toiec_component_1 = require("./toiec.component");
var routes = [
    {
        path: '',
        component: toiec_component_1.ToiecComponent
    }
];
var ToiecRoutingModule = /** @class */ (function () {
    function ToiecRoutingModule() {
    }
    ToiecRoutingModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule.forChild(routes)
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], ToiecRoutingModule);
    return ToiecRoutingModule;
}());
exports.ToiecRoutingModule = ToiecRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9pZWMtcm91dGluZy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b2llYy1yb3V0aW5nLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5QztBQUV6QyxzREFBdUU7QUFFdkUscURBQW1EO0FBRW5ELElBQU0sTUFBTSxHQUFXO0lBQ3JCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixTQUFTLEVBQUUsZ0NBQWM7S0FDMUI7Q0FDRixDQUFDO0FBV0Y7SUFBQTtJQUFpQyxDQUFDO0lBQXJCLGtCQUFrQjtRQVQ5QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUMxQztZQUNELE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7YUFDekI7U0FDRixDQUFDO09BRVcsa0JBQWtCLENBQUc7SUFBRCx5QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgVG9pZWNDb21wb25lbnQgfSBmcm9tICcuL3RvaWVjLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJycsXG4gICAgY29tcG9uZW50OiBUb2llY0NvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcylcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZVxuICBdXG59KVxuXG5leHBvcnQgY2xhc3MgVG9pZWNSb3V0aW5nTW9kdWxlIHt9Il19