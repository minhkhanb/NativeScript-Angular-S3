"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var enums_1 = require("ui/enums");
var platform_1 = require("platform");
var timer_1 = require("timer");
var BottomBarComponent = /** @class */ (function () {
    function BottomBarComponent() {
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
                currentImage = this.image3;
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
    __decorate([
        core_1.ViewChild('tabHighlight'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "tabHighlight", void 0);
    __decorate([
        core_1.ViewChild('image1'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image1", void 0);
    __decorate([
        core_1.ViewChild('image2'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image2", void 0);
    __decorate([
        core_1.ViewChild('image3'),
        __metadata("design:type", core_1.ElementRef)
    ], BottomBarComponent.prototype, "image3", void 0);
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
        __metadata("design:paramtypes", [])
    ], BottomBarComponent);
    return BottomBarComponent;
}());
exports.BottomBarComponent = BottomBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm90dG9tQmFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJvdHRvbUJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FRdUI7QUFFdkIsa0NBQTBDO0FBQzFDLHFDQUFrQztBQUNsQywrQkFBbUM7QUFTbkM7SUFhRTtRQVZBLGdCQUFXLEdBQVcsQ0FBQyxDQUFDO1FBUWQsZ0JBQVcsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQUluRCxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsNENBQWUsR0FBZjtRQUFBLGlCQUtDO1FBSkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ25ELGtCQUFVLENBQUM7WUFDVCxLQUFJLENBQUMsbUJBQW1CLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3hDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7SUFFRCxzQ0FBUyxHQUFULFVBQVUsS0FBYTtRQUNyQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQ25DLElBQUcsS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO2dCQUN0QyxTQUFTLEVBQUU7b0JBQ1QsQ0FBQyxFQUFFLEtBQUssR0FBRyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQztvQkFDMUMsQ0FBQyxFQUFFLENBQUM7aUJBQ0w7Z0JBQ0QsS0FBSyxFQUFFLHNCQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztnQkFDbkQsUUFBUSxFQUFFLEdBQUc7YUFDZCxDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQ3pDO0lBQ0gsQ0FBQztJQUVELHFDQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1osSUFBSSxZQUFZLENBQUM7UUFDakIsUUFBTyxLQUFLLEVBQUU7WUFDWixLQUFLLENBQUM7Z0JBQ0osWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFFUixLQUFLLENBQUM7Z0JBQ0osWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFFUixLQUFLLENBQUM7Z0JBQ0osWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFFUixLQUFLLENBQUM7Z0JBQ0osWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFFUixLQUFLLENBQUM7Z0JBQ0osWUFBWSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7Z0JBQzNCLE1BQU07WUFFUjtnQkFDRSxNQUFNO1NBQ1Q7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN0QixDQUFDO0lBRUQsZ0RBQW1CLEdBQW5CLFVBQW9CLEdBQVE7UUFDMUIsR0FBRyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUM7WUFDeEIsS0FBSyxFQUFFO2dCQUNMLENBQUMsRUFBRSxHQUFHO2dCQUNOLENBQUMsRUFBRSxHQUFHO2FBQ1A7WUFDRCxLQUFLLEVBQUUsc0JBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQ25ELFFBQVEsRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGlEQUFvQixHQUFwQixVQUFxQixHQUFRO1FBQzNCLEdBQUcsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3hCLEtBQUssRUFBRTtnQkFDTCxDQUFDLEVBQUUsQ0FBQztnQkFDSixDQUFDLEVBQUUsQ0FBQzthQUNMO1lBQ0QsS0FBSyxFQUFFLHNCQUFjLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUNuRCxRQUFRLEVBQUUsR0FBRztTQUNkLENBQUMsQ0FBQztJQUNMLENBQUM7SUE3RjBCO1FBQTFCLGdCQUFTLENBQUMsY0FBYyxDQUFDO2tDQUFlLGlCQUFVOzREQUFDO0lBRy9CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3NEQUFDO0lBQ25CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3NEQUFDO0lBQ25CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3NEQUFDO0lBQ25CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3NEQUFDO0lBQ25CO1FBQXBCLGdCQUFTLENBQUMsUUFBUSxDQUFDO2tDQUFTLGlCQUFVO3NEQUFDO0lBRTlCO1FBQVQsYUFBTSxFQUFFOzsyREFBMEM7SUFYeEMsa0JBQWtCO1FBUDlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDRCQUE0QjtZQUN6QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUN6QyxDQUFDOztPQUVXLGtCQUFrQixDQWdHOUI7SUFBRCx5QkFBQztDQUFBLEFBaEdELElBZ0dDO0FBaEdZLGdEQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgQW5pbWF0aW9uQ3VydmUgfSBmcm9tICd1aS9lbnVtcyc7XG5pbXBvcnQgeyBzY3JlZW4gfSBmcm9tICdwbGF0Zm9ybSc7XG5pbXBvcnQgeyBzZXRUaW1lb3V0IH0gZnJvbSAndGltZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdCb3R0b21CYXInLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vYm90dG9tQmFyLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vYm90dG9tQmFyLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIEJvdHRvbUJhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIFxuICBAVmlld0NoaWxkKCd0YWJIaWdobGlnaHQnKSB0YWJIaWdobGlnaHQ6IEVsZW1lbnRSZWY7XG4gIHNlbGVjdGVkVGFiOiBudW1iZXIgPSAwO1xuXG4gIEBWaWV3Q2hpbGQoJ2ltYWdlMScpIGltYWdlMTogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW1hZ2UyJykgaW1hZ2UyOiBFbGVtZW50UmVmO1xuICBAVmlld0NoaWxkKCdpbWFnZTMnKSBpbWFnZTM6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ2ltYWdlNCcpIGltYWdlNDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgnaW1hZ2U1JykgaW1hZ2U1OiBFbGVtZW50UmVmO1xuXG4gIEBPdXRwdXQoKSB0YWJTZWxlY3RlZCA9IG5ldyBFdmVudEVtaXR0ZXI8bnVtYmVyPigpO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICBjb25zb2xlLmxvZygnYm90dG9tYmFyIHJlbmRlcicpO1xuICB9XG5cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdib3R0b21iYXIgcmVuZGVyID0+IG5nQWZ0ZXJWaWV3SW5pdCcpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5hbmltYXRlQ3VycmVudEltYWdlKHRoaXMuaW1hZ2UxKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgc2VsZWN0VGFiKGluZGV4OiBudW1iZXIpIHtcbiAgICBsZXQgcHJldmlvdXNUYWIgPSB0aGlzLnNlbGVjdGVkVGFiO1xuICAgIGlmKGluZGV4ICE9IHRoaXMuc2VsZWN0ZWRUYWIpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRUYWIgPSBpbmRleDtcbiAgICAgIHRoaXMudGFiSGlnaGxpZ2h0Lm5hdGl2ZUVsZW1lbnQuYW5pbWF0ZSh7XG4gICAgICAgIHRyYW5zbGF0ZToge1xuICAgICAgICAgIHg6IGluZGV4ICogc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gNSxcbiAgICAgICAgICB5OiAwXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnZlOiBBbmltYXRpb25DdXJ2ZS5jdWJpY0JlemllcigxLCAuMDIsIC40NSwgLjkzKSxcbiAgICAgICAgZHVyYXRpb246IDMwMFxuICAgICAgfSk7XG4gICAgICB0aGlzLmFuaW1hdGVDdXJyZW50SW1hZ2UodGhpcy5nZXRJbWFnZShpbmRleCkpO1xuICAgICAgdGhpcy5hbmltYXRlUHJldmlvdXNJbWFnZSh0aGlzLmdldEltYWdlKHByZXZpb3VzVGFiKSk7XG4gICAgICB0aGlzLnRhYlNlbGVjdGVkLmVtaXQodGhpcy5zZWxlY3RlZFRhYik7XG4gICAgfVxuICB9XG5cbiAgZ2V0SW1hZ2UoaW5kZXgpIHtcbiAgICBsZXQgY3VycmVudEltYWdlO1xuICAgIHN3aXRjaChpbmRleCkge1xuICAgICAgY2FzZSAwOlxuICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlMTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgMTpcbiAgICAgICAgY3VycmVudEltYWdlID0gdGhpcy5pbWFnZTI7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIDI6XG4gICAgICAgIGN1cnJlbnRJbWFnZSA9IHRoaXMuaW1hZ2UzO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAzOlxuICAgICAgICBjdXJyZW50SW1hZ2UgPSB0aGlzLmltYWdlNDtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgNDpcbiAgICAgICAgY3VycmVudEltYWdlID0gdGhpcy5pbWFnZTU7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgcmV0dXJuIGN1cnJlbnRJbWFnZTtcbiAgfVxuXG4gIGFuaW1hdGVDdXJyZW50SW1hZ2UoYXJnOiBhbnkpIHtcbiAgICBhcmcubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHg6IDEuMixcbiAgICAgICAgeTogMS4yXG4gICAgICB9LFxuICAgICAgY3VydmU6IEFuaW1hdGlvbkN1cnZlLmN1YmljQmV6aWVyKDEsIC4wMiwgLjQ1LCAuOTMpLFxuICAgICAgZHVyYXRpb246IDMwMFxuICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZVByZXZpb3VzSW1hZ2UoYXJnOiBhbnkpIHtcbiAgICBhcmcubmF0aXZlRWxlbWVudC5hbmltYXRlKHtcbiAgICAgIHNjYWxlOiB7XG4gICAgICAgIHg6IDEsXG4gICAgICAgIHk6IDFcbiAgICAgIH0sXG4gICAgICBjdXJ2ZTogQW5pbWF0aW9uQ3VydmUuY3ViaWNCZXppZXIoMSwgLjAyLCAuNDUsIC45MyksXG4gICAgICBkdXJhdGlvbjogMzAwXG4gICAgfSk7XG4gIH1cbn0iXX0=