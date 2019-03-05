"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var router_1 = require("nativescript-angular/router");
var enums_1 = require("ui/enums");
var platform_1 = require("platform");
var timer_1 = require("timer");
var enum_1 = require("../utils/common/enum");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent(routerExtensions) {
        this.routerExtensions = routerExtensions;
        this.tabList = enum_1.ENUM_BOTTOM_MENU;
        this.selectedTab = 0;
        this.tabSelected = new core_1.EventEmitter();
    }
    BottomBarComponent.prototype.ngOnInit = function () {
        console.log('bottombar render');
    };
    BottomBarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        console.log('bottombar render => ngAfterViewInit');
        timer_1.setTimeout(function () {
            _this.animateCurrentImage(_this.image1);
        }, 100);
    };
    BottomBarComponent.prototype.selectTab = function (index) {
        var previousTab = this.selectedTab;
        if (index != this.selectedTab) {
            this.selectedTab = index;
            this.tabHighlight.nativeElement.animate({
                translate: {
                    x: index * platform_1.screen.mainScreen.widthDIPs / 5,
                    y: 0
                },
                curve: enums_1.AnimationCurve.cubicBezier(1, .02, .45, .93),
                duration: 300
            });
            this.animateCurrentImage(this.getImage(index));
            this.animatePreviousImage(this.getImage(previousTab));
            this.tabSelected.emit(this.selectedTab);
            var enumTabSelected = this.tabList;
            switch (index) {
                case enumTabSelected.LOCATION:
                    console.log('redirect to location');
                    this.onNavItemTap('/location');
                    break;
                case enumTabSelected.CAMERA:
                    console.log('redirect to camera');
                    this.onNavItemTap('/camera');
                    break;
                default:
                    break;
            }
        }
    };
    BottomBarComponent.prototype.getImage = function (index) {
        var currentImage;
        switch (index) {
            case 0:
                currentImage = this.image1;
                break;
            case 1:
                currentImage = this.image2;
                break;
            case 2:
                currentImage = this.cameraElement;
                break;
            case 3:
                currentImage = this.image4;
                break;
            case 4:
                currentImage = this.image5;
                break;
            default:
                break;
        }
        return currentImage;
    };
    BottomBarComponent.prototype.animateCurrentImage = function (arg) {
        arg.nativeElement.animate({
            scale: {
                x: 1.2,
                y: 1.2
            },
            curve: enums_1.AnimationCurve.cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    BottomBarComponent.prototype.animatePreviousImage = function (arg) {
        arg.nativeElement.animate({
            scale: {
                x: 1,
                y: 1
            },
            curve: enums_1.AnimationCurve.cubicBezier(1, .02, .45, .93),
            duration: 300
        });
    };
    BottomBarComponent.prototype.onNavItemTap = function (navItemRoute) {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
        var sideDrawer = app.getRootView();
        sideDrawer.closeDrawer();
    };
    __decorate([
        core_1.ViewChild('tabHighlight'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "tabHighlight", void 0);
    __decorate([
        core_1.ViewChild('image1'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image1", void 0);
    __decorate([
        core_1.ViewChild('location'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image2", void 0);
    __decorate([
        core_1.ViewChild('camera'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "cameraElement", void 0);
    __decorate([
        core_1.ViewChild('image4'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image4", void 0);
    __decorate([
        core_1.ViewChild('image5'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image5", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], BottomBarComponent.prototype, "tabSelected", void 0);
    BottomBarComponent = __decorate([
        core_1.Component({
            selector: 'BottomBar',
            moduleId: module.id,
            templateUrl: './bottomBar.component.html',
            styleUrls: ['./bottomBar.component.css']
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
exports.BottomBarComponent = BottomBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tQmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvdHRvbUJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FRdUI7QUFHdkIsa0RBQW9EO0FBQ3BELHNEQUErRDtBQUUvRCxrQ0FBMEM7QUFDMUMscUNBQWtDO0FBQ2xDLCtCQUFtQztBQUVuQyw2Q0FFOEI7QUFTOUI7SUFlRSw0QkFBb0IsZ0JBQWtDO1FBQWxDLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFidEQsWUFBTyxHQUFHLHVCQUFnQixDQUFDO1FBRzNCLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUWQsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUluRCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ25ELGtCQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxTQUFTLEVBQUU7b0JBQ1QsQ0FBQyxFQUFFLEtBQUssR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQztvQkFDMUMsQ0FB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cEQsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUF6SDBCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVOzREQUFDO0lBRy9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3NEQUFDO0lBQ2pCO1FBQXRCLGdCQUFTLENBQUMsVUFBVSxDQUFDO2tDQUFTLGlCQUFVO3NEQUFDO0lBQ3JCO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFnQixpQkFBVTs2REFBQztJQUMxQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtzREFBQztJQUNuQjtRQUFwQixnQkFBUyxDQUFDLFFBQVEsQ0FBQztrQ0FBUyxpQkFBVTtzREFBQztJQUU5QjtRQUFULGFBQU0sRUFBRTs7MkRBQTBDO0lBYnhDLGtCQUFrQjtRQVA5QixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsMkJBQTJCLENBQUM7U0FDekMsQ0FBQzt5Q0FpQnNDLHlCQUFnQjtPQWYzQyxrQkFBa0IsQ0E4SDlCO0lBQUQseUJBQUM7Q0FBQSxBQTlIRCxJQThIQztBQTlIWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgVmlld0NoaWxkLFxuICBFbGVtZW50UmVmLFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tICd1aS9lbnVtcyc7XG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXInO1xuXG5pbXBvcnQge1xuICBFTlVNX0JPVFRPTV9NRU5VXG59IGZyb20gJy4uL3V0aWxzL2NvbW1vbi9lbnVtJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnQm90dG9tQmFyJyxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6ICcuL2JvdHRvbUJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2JvdHRvbUJhci5jb21wb25lbnQuY3NzJ11cbn0pXG5cbmV4cG9ydCBjbGFzcyBCb3R0b21CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHRhYkxpc3QgPSBFTlVNX0JPVFRPTV9NRU5VO1xuICBcbiAgQFZpZXdDaGlsZCgndGFiSGlnaGxpZ2h0JykgdGFiSGlnaGxpZ2h0OiBFbGVtZW50UmVmO1xuICBzZWxlY3RlZFRhYjogbnVtYmVyID0gMDtcblxuICBAVmlld0NoaWxkKCdpbWFnZTEnKSBpbWFnZTE6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2xvY2F0aW9uJykgaW1hZ2UyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdjYW1lcmEnKSBjYW1lcmFFbGVtZW50OiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbWFnZTQnKSBpbWFnZTQ6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2ltYWdlNScpIGltYWdlNTogRWxlbWVudFJlZjtcblxuICBAT3V0cHV0KCkgdGFiU2VsZWN0ZWQgPSBuZXcgRXZlbnRFbWl0dGVyPG51bWJlcj4oKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgY29uc29sZS5sb2coJ2JvdHRvbWJhciByZW5kZXInKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnYm90dG9tYmFyIHJlbmRlciA9PiBuZ0FmdGVyVmlld0luaXQnKTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuYW5pbWF0ZUN1cnJlbnRJbWFnZSh0aGlzLmltYWdlMSk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHNlbGVjdFRhYihpbmRleDogbnVtYmVyKSB7XG4gICAgbGV0IHByZXZpb3VzVGFiID0gdGhpcy5zZWxlY3RlZFRhYjtcbiAgICBpZihpbmRleCAhPSB0aGlzLnNlbGVjdGVkVGFiKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkVGFiID0gaW5kZXg7XG4gICAgICB0aGlzLnRhYkhpZ2hsaWdodC5uYXRpdmVFbGVtZW50LmFuaW1hdGUoe1xuICAgICAgICB0cmFuc2xhdGU6IHtcbiAgICAgICAgICB4OiBpbmRleCAqIHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDUsXG4gICAgICAgICAgeTogMFxuICAgICAgICB9LFxuICAgICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMSwgLjAyLCAuNDUsIC45MyksXG4gICAgICAgIGR1cmF0aW9uOiAzMDBcbiAgICAgIH0pO1xuICAgICAgdGhpcy5hbmltYXRlQ3VycmVudEltYWdlKHRoaXMuZ2V0SW1hZ2UoaW5kZXgpKTtcbiAgICAgIHRoaXMuYW5pbWF0ZVByZXZpb3VzSW1hZ2UodGhpcy5nZXRJbWFnZShwcmV2aW91c1RhYikpO1xuICAgICAgdGhpcy50YWJTZWxlY3RlZC5lbWl0KHRoaXMuc2VsZWN0ZWRUYWIpO1xuICAgICAgXG4gICAgICBjb25zdCBlbnVtVGFiU2VsZWN0ZWQgPSB0aGlzLnRhYkxpc3Q7XG4gICAgICBzd2l0Y2goaW5kZXgpIHtcbiAgICAgICAgXG4gICAgICAgIGNhc2UgZW51bVRhYlNlbGVjdGVkLkxPQ0FUSU9OOlxuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWRpcmVjdCB0byBsb2NhdGlvbicpO1xuICAgICAgICAgIHRoaXMub25OYXZJdGVtVGFwKCcvbG9jYXRpb24nKTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIGVudW1UYWJTZWxlY3RlZC5DQU1FUkE6XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JlZGlyZWN0IHRvIGNhbWVyYScpO1xuICAgICAgICAgIHRoaXMub25OYXZJdGVtVGFwKCcvY2FtZXJhJyk7XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRJbWFnZShpbmRleCkge1xuICAgIGxldCBjdXJyZW50SW1hZ2U7XG4gICAgc3dpdGNoKGluZGV4KSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UxO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAxOlxuICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMjtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMjpcbiAgICAgICAgY3VycmVudEltYWdlID0gdGhpcy5jYW1lcmFFbGVtZW50O1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgY3VycmVudEltYWdlID0gdGhpcy5pbWFnZTU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRJbWFnZTtcbiAgfVxuXG4gIGFuaW1hdGVDdXJyZW50SW1hZ2UoYXJnOiBhbnkpIHtcbiAgICBhcmcubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHg6IDEuMixcbiAgICAgICAgeTogMS4yXG4gICAgICB9LFxuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxuICAgICAgZHVyYXRpb246IDMwMFxuICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZVByZXZpb3VzSW1hZ2UoYXJnOiBhbnkpIHtcbiAgICBhcmcubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHg6IDEsXG4gICAgICAgIHk6IDFcbiAgICAgIH0sXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMSwgLjAyLCAuNDUsIC45MyksXG4gICAgICBkdXJhdGlvbjogMzAwXG4gICAgfSk7XG4gIH1cblxuICBvbk5hdkl0ZW1UYXAobmF2SXRlbVJvdXRlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW25hdkl0ZW1Sb3V0ZV0sIHtcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgbmFtZTogXCJmYWRlXCJcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgIHNpZGVEcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgfVxufSJdfQ==