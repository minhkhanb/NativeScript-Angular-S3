"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var app = require("tns-core-modules/application");
var nativescript_camera_1 = require("nativescript-camera");
var CameraComponent = /** @class */ (function () {
    function CameraComponent() {
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = platform_1.screen.mainScreen.widthDIPs;
        this.height = platform_1.screen.mainScreen.heightDIPs;
    }
    CameraComponent.prototype.onTakePhoto = function () {
        var _this = this;
        var options = {
            width: this.width,
            height: this.height,
            keepAspectRatio: this.keepAspectRatio,
            saveToGallery: this.saveToGallery
        };
        nativescript_camera_1.takePicture(options).then(function (imageAsset) {
            _this.imageTaken = imageAsset;
            console.log('Size: ', imageAsset.options.width, ' x ', imageAsset.options.height);
        }).catch(function (err) {
            console.log('Error: ', err.message);
        });
    };
    CameraComponent.prototype.onRequestPermissions = function () {
        nativescript_camera_1.requestPermissions();
    };
    CameraComponent.prototype.onCheckForCamera = function () {
        var isCameraAvailable = nativescript_camera_1.isAvailable();
        console.log('Is camera hardware available: ', isCameraAvailable);
    };
    CameraComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    CameraComponent = __decorate([
        core_1.Component({
            selector: 'CameraComponent',
            moduleId: module.id,
            templateUrl: './camera.component.html'
        })
    ], CameraComponent);
    return CameraComponent;
}());
exports.CameraComponent = CameraComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWVyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsc0RBQW1EO0FBR25ELGtEQUFvRDtBQUdwRCwyREFBbUY7QUFRbkY7SUFOQTtRQVNTLGtCQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLFVBQUssR0FBVyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUM7UUFDNUMsV0FBTSxHQUFXLGlCQUFNLENBQUMsVUFBVSxDQUFDLFVBQVUsQ0FBQztJQStCdkQsQ0FBQztJQTdCQyxxQ0FBVyxHQUFYO1FBQUEsaUJBY0M7UUFiQyxJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSztZQUNqQixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07WUFDbkIsZUFBZSxFQUFFLElBQUksQ0FBQyxlQUFlO1lBQ3JDLGFBQWEsRUFBRSxJQUFJLENBQUMsYUFBYTtTQUNsQyxDQUFDO1FBRUYsaUNBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxVQUFVO1lBQ2xDLEtBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3BGLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEdBQUc7WUFDVixPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDO0lBRUQsOENBQW9CLEdBQXBCO1FBQ0Usd0NBQWtCLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsMENBQWdCLEdBQWhCO1FBQ0UsSUFBSSxpQkFBaUIsR0FBRyxpQ0FBVyxFQUFFLENBQUM7UUFDdEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsRUFBRSxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUFFRCwyQ0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBcENVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDdkMsQ0FBQztPQUVXLGVBQWUsQ0FxQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQXJDRCxJQXFDQztBQXJDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvcGxhdGZvcm0nO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXInO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24nO1xuXG5pbXBvcnQgeyBJbWFnZUFzc2V0IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldCc7XG5pbXBvcnQgeyB0YWtlUGljdHVyZSwgcmVxdWVzdFBlcm1pc3Npb25zLCBpc0F2YWlsYWJsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1jYW1lcmEnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdDYW1lcmFDb21wb25lbnQnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FtZXJhLmNvbXBvbmVudC5odG1sJ1xufSlcblxuZXhwb3J0IGNsYXNzIENhbWVyYUNvbXBvbmVudCB7XG5cbiAgcHVibGljIGltYWdlVGFrZW46IEltYWdlQXNzZXQ7XG4gIHB1YmxpYyBzYXZlVG9HYWxsZXJ5OiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIGtlZXBBc3BlY3RSYXRpbzogYm9vbGVhbiA9IHRydWU7XG4gIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzO1xuICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSBzY3JlZW4ubWFpblNjcmVlbi5oZWlnaHRESVBzO1xuXG4gIG9uVGFrZVBob3RvKCkge1xuICAgIGxldCBvcHRpb25zID0ge1xuICAgICAgd2lkdGg6IHRoaXMud2lkdGgsXG4gICAgICBoZWlnaHQ6IHRoaXMuaGVpZ2h0LFxuICAgICAga2VlcEFzcGVjdFJhdGlvOiB0aGlzLmtlZXBBc3BlY3RSYXRpbyxcbiAgICAgIHNhdmVUb0dhbGxlcnk6IHRoaXMuc2F2ZVRvR2FsbGVyeVxuICAgIH07XG5cbiAgICB0YWtlUGljdHVyZShvcHRpb25zKS50aGVuKGltYWdlQXNzZXQgPT4ge1xuICAgICAgdGhpcy5pbWFnZVRha2VuID0gaW1hZ2VBc3NldDtcbiAgICAgIGNvbnNvbGUubG9nKCdTaXplOiAnLCBpbWFnZUFzc2V0Lm9wdGlvbnMud2lkdGgsICcgeCAnLCBpbWFnZUFzc2V0Lm9wdGlvbnMuaGVpZ2h0KTtcbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgY29uc29sZS5sb2coJ0Vycm9yOiAnLCBlcnIubWVzc2FnZSk7XG4gICAgfSlcbiAgfVxuXG4gIG9uUmVxdWVzdFBlcm1pc3Npb25zKCkge1xuICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICB9XG5cbiAgb25DaGVja0ZvckNhbWVyYSgpIHtcbiAgICBsZXQgaXNDYW1lcmFBdmFpbGFibGUgPSBpc0F2YWlsYWJsZSgpO1xuICAgIGNvbnNvbGUubG9nKCdJcyBjYW1lcmEgaGFyZHdhcmUgYXZhaWxhYmxlOiAnLCBpc0NhbWVyYUF2YWlsYWJsZSk7XG4gIH1cblxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cbn0iXX0=