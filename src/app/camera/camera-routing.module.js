"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var camera_component_1 = require("./camera.component");
var routes = [
    {
        path: '',
        component: camera_component_1.CameraComponent
    }
];
var CameraRouting = /** @class */ (function () {
    function CameraRouting() {
    }
    CameraRouting = __decorate([
        core_1.NgModule({
            imports: [
                router_1.NativeScriptRouterModule.forChild(routes),
            ],
            exports: [
                router_1.NativeScriptRouterModule
            ]
        })
    ], CameraRouting);
    return CameraRouting;
}());
exports.CameraRouting = CameraRouting;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FtZXJhLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx1REFBcUQ7QUFFckQsSUFBTSxNQUFNLEdBQVc7SUFDckI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxrQ0FBZTtLQUMzQjtDQUNGLENBQUM7QUFXRjtJQUFBO0lBQTRCLENBQUM7SUFBaEIsYUFBYTtRQVR6QixlQUFRLENBQUM7WUFDUixPQUFPLEVBQUU7Z0JBQ1AsaUNBQXdCLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQzthQUMxQztZQUNELE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7YUFDekI7U0FDRixDQUFDO09BRVcsYUFBYSxDQUFHO0lBQUQsb0JBQUM7Q0FBQSxBQUE3QixJQUE2QjtBQUFoQixzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQ2FtZXJhQ29tcG9uZW50IH0gZnJvbSAnLi9jYW1lcmEuY29tcG9uZW50JztcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gIHtcbiAgICBwYXRoOiAnJyxcbiAgICBjb21wb25lbnQ6IENhbWVyYUNvbXBvbmVudFxuICB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlLmZvckNoaWxkKHJvdXRlcyksXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVcbiAgXVxufSlcblxuZXhwb3J0IGNsYXNzIENhbWVyYVJvdXRpbmcge30iXX0=