"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.src = 'Hk1JY7vsuWg';
        this.options = { rel: 1 };
        this.apiKey = 'AIzaSyCiprq85s9ISFqie9jBEBrps6_g-4ca3lo';
        this.onOrientationChanged = function (evt) {
            console.log('set full screen youtube player');
        };
        // Use the component constructor to inject providers.
        app.on('orientationChanged', this.onOrientationChanged);
    }
    HomeComponent.prototype.toggleFullScreen = function () {
        this.ytplayer.toggleFullscreen();
    };
    HomeComponent.prototype.changeSource = function () {
        this.src = 'dQw4w9WgXcQ';
    };
    HomeComponent.prototype.getDanceHall = function () {
        this.src = 'wH_0_pijbZY';
    };
    HomeComponent.prototype.getHipHop = function () {
        this.src = 'lwk5OUII9Vc';
    };
    HomeComponent.prototype.getSoca = function () {
        this.src = 'vEG4qNW33mA';
    };
    HomeComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    HomeComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    HomeComponent.prototype.tabSelected = function (arg) {
        console.log('tab selected: ' + arg);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrREFBb0Q7QUFTcEQ7SUF5Qkk7UUF2QkEsUUFBRyxHQUFHLGFBQWEsQ0FBQztRQUVwQixZQUFPLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUM7UUFDckIsV0FBTSxHQUFHLHlDQUF5QyxDQUFDO1FBc0NuRCx5QkFBb0IsR0FBRyxVQUFDLEdBQUc7WUFDdkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBRWxELENBQUMsQ0FBQTtRQXBCRyxxREFBcUQ7UUFDckQsR0FBRyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQztJQUM1RCxDQUFDO0lBcEJELHdDQUFnQixHQUFoQjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBQzdCLENBQUM7SUFDRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7SUFDN0IsQ0FBQztJQUNELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBQ0QsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBQzdCLENBQUM7SUFPRCxnQ0FBUSxHQUFSO1FBQ0ksdUNBQXVDO0lBQzNDLENBQUM7SUFFRCx5Q0FBaUIsR0FBakI7UUFDSSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRUQsbUNBQVcsR0FBWCxVQUFZLEdBQVc7UUFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4QyxDQUFDO0lBekNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7O09BQ1csYUFBYSxDQStDekI7SUFBRCxvQkFBQztDQUFBLEFBL0NELElBK0NDO0FBL0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgWW91dHViZVBsYXllciB9IGZyb20gJ25hdGl2ZXNjcmlwdC15b3V0dWJlcGxheWVyJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiSG9tZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9ob21lLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgICBzcmMgPSAnSGsxSlk3dnN1V2cnO1xuICAgIFxuICAgIG9wdGlvbnMgPSB7IHJlbDogMSB9O1xuICAgIGFwaUtleSA9ICdBSXphU3lDaXBycTg1czlJU0ZxaWU5akJFQnJwczZfZy00Y2EzbG8nO1xuICAgIHl0cGxheWVyOiBZb3V0dWJlUGxheWVyO1xuXG4gICAgdG9nZ2xlRnVsbFNjcmVlbigpIHtcbiAgICAgICAgdGhpcy55dHBsYXllci50b2dnbGVGdWxsc2NyZWVuKCk7XG4gICAgfVxuXG4gICAgY2hhbmdlU291cmNlKCkge1xuICAgICAgICB0aGlzLnNyYyA9ICdkUXc0dzlXZ1hjUSc7XG4gICAgfVxuICAgIGdldERhbmNlSGFsbCgpIHtcbiAgICAgICAgdGhpcy5zcmMgPSAnd0hfMF9waWpiWlknO1xuICAgIH1cbiAgICBnZXRIaXBIb3AoKSB7XG4gICAgICAgIHRoaXMuc3JjID0gJ2x3azVPVUlJOVZjJztcbiAgICB9XG4gICAgZ2V0U29jYSgpIHtcbiAgICAgICAgdGhpcy5zcmMgPSAndkVHNHFOVzMzbUEnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgICAgICBhcHAub24oJ29yaWVudGF0aW9uQ2hhbmdlZCcsIHRoaXMub25PcmllbnRhdGlvbkNoYW5nZWQpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICB0YWJTZWxlY3RlZChhcmc6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygndGFiIHNlbGVjdGVkOiAnICsgYXJnKTtcbiAgICB9XG5cbiAgICBvbk9yaWVudGF0aW9uQ2hhbmdlZCA9IChldnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCBmdWxsIHNjcmVlbiB5b3V0dWJlIHBsYXllcicpO1xuICAgICAgICBcbiAgICB9XG59XG4iXX0=