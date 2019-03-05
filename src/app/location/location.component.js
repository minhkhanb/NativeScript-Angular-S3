"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var google_1 = require("../utils/common/google");
var nativescript_geolocation_1 = require("nativescript-geolocation");
var enums_1 = require("tns-core-modules/ui/enums");
var connectivity = require("tns-core-modules/connectivity");
var LocationComponent = /** @class */ (function () {
    function LocationComponent(zone) {
        this.zone = zone;
        this.distanceResult = '0';
        this.distance = 0;
        this.index = 0;
        this.startpointLongitude = 106.6521535;
        this.startpointLatitude = 10.800579;
        this.endpointLongitude = 106.6521535;
        this.endpointLatitude = 10.800579;
        this.address = '';
        this.connectionType = 'Unknow';
        nativescript_geolocation_1.enableLocationRequest();
    }
    LocationComponent.prototype.isLocationEnable = function () {
        nativescript_geolocation_1.isEnabled().then(function (isLocationEnable) {
            var message = 'Location services are not available';
            if (isLocationEnable) {
                message = 'Location services are available';
            }
            else {
                nativescript_geolocation_1.enableLocationRequest();
            }
            console.log('Location status: ', message);
        }, function (err) {
            console.log('Location error received: ', err.message || err);
        });
    };
    LocationComponent.prototype.getDistance = function () {
        var startLocation = new nativescript_geolocation_1.Location();
        startLocation.latitude = this.startpointLatitude;
        startLocation.longitude = this.startpointLongitude;
        var endLocation = new nativescript_geolocation_1.Location();
        endLocation.latitude = this.endpointLatitude;
        endLocation.longitude = this.endpointLongitude;
        this.distance = nativescript_geolocation_1.distance(startLocation, endLocation);
        console.log('distance - ', this.distance);
        this.distanceResult = (this.distance * 0.001).toFixed(3);
    };
    LocationComponent.prototype.connectionToString = function (connectionType) {
        switch (connectionType) {
            case connectivity.connectionType.none:
                return 'No connection';
            case connectivity.connectionType.ethernet:
            case connectivity.connectionType.wifi:
                return 'Connected to internet';
            default:
                return 'Unknow';
        }
    };
    LocationComponent.prototype.getLocationOnce = function () {
        var _this = this;
        nativescript_geolocation_1.getCurrentLocation({
            desiredAccuracy: enums_1.Accuracy.high,
            timeout: 5000
        }).then(function (location) {
            console.log('Location received: ', location);
            _this.startpointLatitude = location.latitude;
            _this.startpointLongitude = location.longitude;
            fetch(google_1.getGeoCodeRequestUrl(location.latitude, location.longitude))
                .then(function (res) { return res.json(); })
                .then(function (response) {
                _this.geoData = response.results[0];
                console.log('formatted_address: ', _this.geoData.formatted_address);
                _this.address = _this.geoData.formatted_address;
            });
        }).catch(function (err) {
            console.log('Location error received: ', err);
        });
    };
    LocationComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    LocationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.connectionType = this.connectionToString(connectivity.getConnectionType());
        connectivity.startMonitoring(function (connectionType) {
            _this.zone.run(function () {
                _this.connectionType = _this.connectionToString(connectionType);
            });
            console.log('init: newConnectionType => ', connectionType);
        });
    };
    LocationComponent.prototype.ngOnDestroy = function () {
        connectivity.stopMonitoring();
    };
    LocationComponent = __decorate([
        core_1.Component({
            selector: 'LocationComponent',
            moduleId: module.id,
            templateUrl: './location.component.html',
            styleUrls: ['./location.component.scss']
        }),
        __metadata("design:paramtypes", [core_1.NgZone])
    ], LocationComponent);
    return LocationComponent;
}());
exports.LocationComponent = LocationComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9jYXRpb24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9jYXRpb24uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTBEO0FBRzFELGtEQUFvRDtBQUVwRCxpREFBOEQ7QUFFOUQscUVBTWtDO0FBQ2xDLG1EQUFxRDtBQUlyRCw0REFBOEQ7QUFTOUQ7SUFlRSwyQkFBb0IsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7UUFYekIsbUJBQWMsR0FBVyxHQUFHLENBQUM7UUFDN0IsYUFBUSxHQUFXLENBQUMsQ0FBQztRQUNyQixVQUFLLEdBQVcsQ0FBQyxDQUFDO1FBQ2xCLHdCQUFtQixHQUFXLFdBQVcsQ0FBQztRQUMxQyx1QkFBa0IsR0FBVyxTQUFTLENBQUM7UUFDdkMsc0JBQWlCLEdBQVcsV0FBVyxDQUFDO1FBQ3hDLHFCQUFnQixHQUFXLFNBQVMsQ0FBQztRQUdyQyxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsUUFBUSxDQUFDO1FBQy9CLGdEQUFxQixFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVNLDRDQUFnQixHQUF2QjtRQUNFLG9DQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBUyxnQkFBZ0I7WUFDeEMsSUFBSSxPQUFPLEdBQUcscUNBQXFDLENBQUM7WUFDcEQsSUFBRyxnQkFBZ0IsRUFBRTtnQkFDbkIsT0FBTyxHQUFHLGlDQUFpQyxDQUFDO2FBQzdDO2lCQUNJO2dCQUNILGdEQUFxQixFQUFFLENBQUM7YUFDekI7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzVDLENBQUMsRUFBRSxVQUFTLEdBQUc7WUFDYixPQUFPLENBQUMsR0FBRyxDQUFDLDJCQUEyQixFQUFFLEdBQUcsQ0FBQyxPQUFPLElBQUksR0FBRyxDQUFDLENBQUM7UUFDL0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFD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QUFDLFVBQUEsY0FBYztZQUN6QyxLQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQztnQkFDWixLQUFJLENBQUMsY0FBYyxHQUFHLEtBQUksQ0FBQyxrQkFBa0IsQ0FBQyxjQUFjLENBQUMsQ0FBQztZQUNoRSxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsNkJBQTZCLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsdUNBQVcsR0FBWDtRQUNFLFlBQVksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBeEdVLGlCQUFpQjtRQVA3QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDO3lDQWlCMEIsYUFBTTtPQWZyQixpQkFBaUIsQ0F5RzdCO0lBQUQsd0JBQUM7Q0FBQSxBQXpHRCxJQXlHQztBQXpHWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5cbmltcG9ydCB7IGdldEdlb0NvZGVSZXF1ZXN0VXJsIH0gZnJvbSAnLi4vdXRpbHMvY29tbW9uL2dvb2dsZSc7XG5cbmltcG9ydCB7XG4gIExvY2F0aW9uLFxuICBnZXRDdXJyZW50TG9jYXRpb24sXG4gIGlzRW5hYmxlZCxcbiAgZGlzdGFuY2UsXG4gIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCxcbn0gZnJvbSAnbmF0aXZlc2NyaXB0LWdlb2xvY2F0aW9uJztcbmltcG9ydCB7IEFjY3VyYWN5IH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy91aS9lbnVtcyc7XG5cbmltcG9ydCB7IEdlb0NvZGUgfSBmcm9tICcuLi91dGlscy9jb21tb24vZ2VvY29kZSc7XG5cbmltcG9ydCAqIGFzIGNvbm5lY3Rpdml0eSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2Nvbm5lY3Rpdml0eSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ0xvY2F0aW9uQ29tcG9uZW50JyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2xvY2F0aW9uLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vbG9jYXRpb24uY29tcG9uZW50LnNjc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIExvY2F0aW9uQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0e1xuXG4gIHB1YmxpYyBjb25uZWN0aW9uVHlwZTogc3RyaW5nO1xuXG4gIHB1YmxpYyBkaXN0YW5jZVJlc3VsdDogc3RyaW5nID0gJzAnO1xuICBwdWJsaWMgZGlzdGFuY2U6IG51bWJlciA9IDA7XG4gIHB1YmxpYyBpbmRleDogbnVtYmVyID0gMDtcbiAgcHVibGljIHN0YXJ0cG9pbnRMb25naXR1ZGU6IG51bWJlciA9IDEwNi42NTIxNTM1O1xuICBwdWJsaWMgc3RhcnRwb2ludExhdGl0dWRlOiBudW1iZXIgPSAxMC44MDA1Nzk7XG4gIHB1YmxpYyBlbmRwb2ludExvbmdpdHVkZTogbnVtYmVyID0gMTA2LjY1MjE1MzU7XG4gIHB1YmxpYyBlbmRwb2ludExhdGl0dWRlOiBudW1iZXIgPSAxMC44MDA1Nzk7XG5cbiAgcHVibGljIGdlb0RhdGE6IEdlb0NvZGU7XG4gIHB1YmxpYyBhZGRyZXNzOiBzdHJpbmcgPSAnJztcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHpvbmU6IE5nWm9uZSkge1xuICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSAnVW5rbm93JztcbiAgICBlbmFibGVMb2NhdGlvblJlcXVlc3QoKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xvY2F0aW9uRW5hYmxlKCkge1xuICAgIGlzRW5hYmxlZCgpLnRoZW4oZnVuY3Rpb24oaXNMb2NhdGlvbkVuYWJsZSkge1xuICAgICAgbGV0IG1lc3NhZ2UgPSAnTG9jYXRpb24gc2VydmljZXMgYXJlIG5vdCBhdmFpbGFibGUnO1xuICAgICAgaWYoaXNMb2NhdGlvbkVuYWJsZSkge1xuICAgICAgICBtZXNzYWdlID0gJ0xvY2F0aW9uIHNlcnZpY2VzIGFyZSBhdmFpbGFibGUnO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGVuYWJsZUxvY2F0aW9uUmVxdWVzdCgpO1xuICAgICAgfVxuICAgICAgY29uc29sZS5sb2coJ0xvY2F0aW9uIHN0YXR1czogJywgbWVzc2FnZSk7XG4gICAgfSwgZnVuY3Rpb24oZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZygnTG9jYXRpb24gZXJyb3IgcmVjZWl2ZWQ6ICcsIGVyci5tZXNzYWdlIHx8IGVycik7XG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0RGlzdGFuY2UoKSB7XG4gICAgbGV0IHN0YXJ0TG9jYXRpb246IExvY2F0aW9uID0gbmV3IExvY2F0aW9uKCk7XG4gICAgc3RhcnRMb2NhdGlvbi5sYXRpdHVkZSA9IHRoaXMuc3RhcnRwb2ludExhdGl0dWRlO1xuICAgIHN0YXJ0TG9jYXRpb24ubG9uZ2l0dWRlID0gdGhpcy5zdGFydHBvaW50TG9uZ2l0dWRlO1xuXG4gICAgbGV0IGVuZExvY2F0aW9uOiBMb2NhdGlvbiA9IG5ldyBMb2NhdGlvbigpO1xuICAgIGVuZExvY2F0aW9uLmxhdGl0dWRlID0gdGhpcy5lbmRwb2ludExhdGl0dWRlO1xuICAgIGVuZExvY2F0aW9uLmxvbmdpdHVkZSA9IHRoaXMuZW5kcG9pbnRMb25naXR1ZGU7XG5cbiAgICB0aGlzLmRpc3RhbmNlID0gZGlzdGFuY2Uoc3RhcnRMb2NhdGlvbiwgZW5kTG9jYXRpb24pO1xuXG4gICAgY29uc29sZS5sb2coJ2Rpc3RhbmNlIC0gJywgdGhpcy5kaXN0YW5jZSk7XG4gICAgdGhpcy5kaXN0YW5jZVJlc3VsdCA9ICh0aGlzLmRpc3RhbmNlICogMC4wMDEpLnRvRml4ZWQoMyk7XG4gIH1cblxuICBwdWJsaWMgY29ubmVjdGlvblRvU3RyaW5nKGNvbm5lY3Rpb25UeXBlOiBudW1iZXIpOiBzdHJpbmcge1xuICAgIHN3aXRjaChjb25uZWN0aW9uVHlwZSkge1xuICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUubm9uZTogXG4gICAgICAgIHJldHVybiAnTm8gY29ubmVjdGlvbic7XG5cbiAgICAgIGNhc2UgY29ubmVjdGl2aXR5LmNvbm5lY3Rpb25UeXBlLmV0aGVybmV0OlxuICAgICAgY2FzZSBjb25uZWN0aXZpdHkuY29ubmVjdGlvblR5cGUud2lmaTpcbiAgICAgICAgcmV0dXJuICdDb25uZWN0ZWQgdG8gaW50ZXJuZXQnO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gJ1Vua25vdyc7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGdldExvY2F0aW9uT25jZSgpIHtcbiAgICBnZXRDdXJyZW50TG9jYXRpb24oe1xuICAgICAgZGVzaXJlZEFjY3VyYWN5OiBBY2N1cmFjeS5oaWdoLFxuICAgICAgdGltZW91dDogNTAwMFxuICAgIH0pLnRoZW4oXG4gICAgICBsb2NhdGlvbiA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdMb2NhdGlvbiByZWNlaXZlZDogJywgbG9jYXRpb24pO1xuICAgICAgICB0aGlzLnN0YXJ0cG9pbnRMYXRpdHVkZSA9IGxvY2F0aW9uLmxhdGl0dWRlO1xuICAgICAgICB0aGlzLnN0YXJ0cG9pbnRMb25naXR1ZGUgPSBsb2NhdGlvbi5sb25naXR1ZGU7XG5cbiAgICAgICAgZmV0Y2goZ2V0R2VvQ29kZVJlcXVlc3RVcmwobG9jYXRpb24ubGF0aXR1ZGUsIGxvY2F0aW9uLmxvbmdpdHVkZSkpXG4gICAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgIHRoaXMuZ2VvRGF0YSA9IHJlc3BvbnNlLnJlc3VsdHNbMF07XG4gICAgICAgICAgY29uc29sZS5sb2coJ2Zvcm1hdHRlZF9hZGRyZXNzOiAnLCB0aGlzLmdlb0RhdGEuZm9ybWF0dGVkX2FkZHJlc3MpO1xuICAgICAgICAgIHRoaXMuYWRkcmVzcyA9IHRoaXMuZ2VvRGF0YS5mb3JtYXR0ZWRfYWRkcmVzcztcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICApLmNhdGNoKGVyciA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnTG9jYXRpb24gZXJyb3IgcmVjZWl2ZWQ6ICcsIGVycik7XG4gICAgfSlcbiAgfVxuXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCkge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29ubmVjdGlvblR5cGUgPSB0aGlzLmNvbm5lY3Rpb25Ub1N0cmluZyhjb25uZWN0aXZpdHkuZ2V0Q29ubmVjdGlvblR5cGUoKSk7XG4gICAgY29ubmVjdGl2aXR5LnN0YXJ0TW9uaXRvcmluZyhjb25uZWN0aW9uVHlwZSA9PiB7XG4gICAgICB0aGlzLnpvbmUucnVuKCgpID0+IHtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uVHlwZSA9IHRoaXMuY29ubmVjdGlvblRvU3RyaW5nKGNvbm5lY3Rpb25UeXBlKTtcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coJ2luaXQ6IG5ld0Nvbm5lY3Rpb25UeXBlID0+ICcsIGNvbm5lY3Rpb25UeXBlKTtcbiAgICB9KTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGNvbm5lY3Rpdml0eS5zdG9wTW9uaXRvcmluZygpO1xuICB9XG59XG4iXX0=