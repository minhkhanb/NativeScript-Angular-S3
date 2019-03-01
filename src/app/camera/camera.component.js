"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_camera_1 = require("nativescript-camera");
var CameraComponent = /** @class */ (function () {
    function CameraComponent() {
        this.saveToGallery = true;
        this.keepAspectRatio = true;
        this.width = 300;
        this.height = 300;
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
    CameraComponent.prototype.onRequestPermission = function () {
        nativescript_camera_1.requestPermissions();
    };
    CameraComponent.prototype.onCheckForCamera = function () {
        var isCameraAvailable = nativescript_camera_1.isAvailable();
        console.log('Is camera hardware available: ', isCameraAvailable);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhbWVyYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFNbEQsMkRBQW1GO0FBUW5GO0lBTkE7UUFTUyxrQkFBYSxHQUFZLElBQUksQ0FBQztRQUM5QixvQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxVQUFLLEdBQVcsR0FBRyxDQUFDO1FBQ3BCLFdBQU0sR0FBVyxHQUFHLENBQUM7SUEwQjlCLENBQUM7SUF4QkMscUNBQVcsR0FBWDtRQUFBLGlCQWNDO1FBYkMsSUFBSSxPQUFPLEdBQUc7WUFDWixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7WUFDakIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLGVBQWUsRUFBRSxJQUFJLENBQUMsZUFBZTtZQUNyQyxhQUFhLEVBQUUsSUFBSSxDQUFDLGFBQWE7U0FDbEMsQ0FBQztRQUVGLGlDQUFXLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQUEsVUFBVTtZQUNsQyxLQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztZQUM3QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNwRixDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBQSxHQUFHO1lBQ1YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELDZDQUFtQixHQUFuQjtRQUNFLHdDQUFrQixFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELDBDQUFnQixHQUFoQjtRQUNFLElBQUksaUJBQWlCLEdBQUcsaUNBQVcsRUFBRSxDQUFDO1FBQ3RDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBL0JVLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxpQkFBaUI7WUFDM0IsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7U0FDdkMsQ0FBQztPQUVXLGVBQWUsQ0FnQzNCO0lBQUQsc0JBQUM7Q0FBQSxBQWhDRCxJQWdDQztBQWhDWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5cbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0JztcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMsIGlzQXZhaWxhYmxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWNhbWVyYSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0NhbWVyYUNvbXBvbmVudCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9jYW1lcmEuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgQ2FtZXJhQ29tcG9uZW50IHtcblxuICBwdWJsaWMgaW1hZ2VUYWtlbjogSW1hZ2VBc3NldDtcbiAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW4gPSB0cnVlO1xuICBwdWJsaWMga2VlcEFzcGVjdFJhdGlvOiBib29sZWFuID0gdHJ1ZTtcbiAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAzMDA7XG4gIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDMwMDtcblxuICBvblRha2VQaG90bygpIHtcbiAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgIHdpZHRoOiB0aGlzLndpZHRoLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcbiAgICAgIGtlZXBBc3BlY3RSYXRpbzogdGhpcy5rZWVwQXNwZWN0UmF0aW8sXG4gICAgICBzYXZlVG9HYWxsZXJ5OiB0aGlzLnNhdmVUb0dhbGxlcnlcbiAgICB9O1xuXG4gICAgdGFrZVBpY3R1cmUob3B0aW9ucykudGhlbihpbWFnZUFzc2V0ID0+IHtcbiAgICAgIHRoaXMuaW1hZ2VUYWtlbiA9IGltYWdlQXNzZXQ7XG4gICAgICBjb25zb2xlLmxvZygnU2l6ZTogJywgaW1hZ2VBc3NldC5vcHRpb25zLndpZHRoLCAnIHggJywgaW1hZ2VBc3NldC5vcHRpb25zLmhlaWdodCk7XG4gICAgfSkuY2F0Y2goZXJyID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCdFcnJvcjogJywgZXJyLm1lc3NhZ2UpO1xuICAgIH0pXG4gIH1cblxuICBvblJlcXVlc3RQZXJtaXNzaW9uKCkge1xuICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpO1xuICB9XG5cbiAgb25DaGVja0ZvckNhbWVyYSgpIHtcbiAgICBsZXQgaXNDYW1lcmFBdmFpbGFibGUgPSBpc0F2YWlsYWJsZSgpO1xuICAgIGNvbnNvbGUubG9nKCdJcyBjYW1lcmEgaGFyZHdhcmUgYXZhaWxhYmxlOiAnLCBpc0NhbWVyYUF2YWlsYWJsZSk7XG4gIH1cbn0iXX0=