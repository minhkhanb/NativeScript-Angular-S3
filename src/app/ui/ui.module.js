"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var ui_routing_module_1 = require("./ui-routing.module");
var ui_component_1 = require("./ui.component");
var UIModule = /** @class */ (function () {
    function UIModule() {
    }
    UIModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                ui_routing_module_1.UIRoutingModule,
            ],
            declarations: [
                ui_component_1.UIComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], UIModule);
    return UIModule;
}());
exports.UIModule = UIModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidWkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUV2RSx5REFBc0Q7QUFDdEQsK0NBQTZDO0FBZTdDO0lBQUE7SUFBd0IsQ0FBQztJQUFaLFFBQVE7UUFacEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsbUNBQWU7YUFDbEI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsMEJBQVc7YUFDZDtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csUUFBUSxDQUFJO0lBQUQsZUFBQztDQUFBLEFBQXpCLElBQXlCO0FBQVosNEJBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCI7XG5cbmltcG9ydCB7IFVJUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL3VpLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBVSUNvbXBvbmVudCB9IGZyb20gXCIuL3VpLmNvbXBvbmVudFwiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFVJUm91dGluZ01vZHVsZSxcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBVSUNvbXBvbmVudFxuICAgIF0sXG4gICAgc2NoZW1hczogW1xuICAgICAgICBOT19FUlJPUlNfU0NIRU1BXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBVSU1vZHVsZSB7IH1cbiJdfQ==