"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var page_1 = require("ui/page");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(page) {
        this.page = page;
        this.src = 'Hk1JY7vsuWg';
        this.options = { rel: 1 };
        this.apiKey = 'AIzaSyCiprq85s9ISFqie9jBEBrps6_g-4ca3lo';
        this.onOrientationChanged = function (evt) {
            console.log('set full screen youtube player');
        };
        // Use the component constructor to inject providers.
        this._page = page;
        app.on('orientationChanged', this.onOrientationChanged);
    }
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
    HomeComponent.prototype.toggleFullScreen = function () {
        var player = this._page.getViewById('ytplayer');
        if (player && !player.isPlaying()) {
            player.play();
        }
        if (player) {
            player.toggleFullScreen();
            console.log('set video fullscreen: ', player);
        }
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
    HomeComponent = __decorate([
        core_1.Component({
            selector: "Home",
            moduleId: module.id,
            templateUrl: "./home.component.html"
        }),
        __metadata("design:paramtypes", [page_1.Page])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrREFBb0Q7QUFFcEQsZ0NBQStCO0FBUy9CO0lBU0ksdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDlCLFFBQUcsR0FBRyxhQUFhLENBQUM7UUFFcEIsWUFBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBRyx5Q0FBeUMsQ0FBQztRQXFCbkQseUJBQW9CLEdBQUcsVUFBQyxHQUFHO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUVsRCxDQUFDLENBQUE7UUFyQkcscURBQXFEO1FBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksR0FBVztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFPRCx3Q0FBZ0IsR0FBaEI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMvQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDakQ7SUFDTCxDQUFDO0lBRUQsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBQzdCLENBQUM7SUFDRCxvQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7SUFDN0IsQ0FBQztJQUNELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBQ0QsK0JBQU8sR0FBUDtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBQzdCLENBQUM7SUF2RFEsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE1BQU07WUFDaEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx1QkFBdUI7U0FDdkMsQ0FBQzt5Q0FVNEIsV0FBSTtPQVRyQixhQUFhLENBd0R6QjtJQUFELG9CQUFDO0NBQUEsQUF4REQsSUF3REM7QUF4RFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgVmlld0NoaWxkLCBFbGVtZW50UmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5cbmltcG9ydCB7IFlvdXR1YmVQbGF5ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQteW91dHViZXBsYXllcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkhvbWVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vaG9tZS5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgX3BhZ2U7XG5cbiAgICBzcmMgPSAnSGsxSlk3dnN1V2cnO1xuICAgIFxuICAgIG9wdGlvbnMgPSB7IHJlbDogMSB9O1xuICAgIGFwaUtleSA9ICdBSXphU3lDaXBycTg1czlJU0ZxaWU5akJFQnJwczZfZy00Y2EzbG8nO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBwYWdlOiBQYWdlKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgICAgIHRoaXMuX3BhZ2UgPSBwYWdlO1xuICAgICAgICBhcHAub24oJ29yaWVudGF0aW9uQ2hhbmdlZCcsIHRoaXMub25PcmllbnRhdGlvbkNoYW5nZWQpO1xuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICB0YWJTZWxlY3RlZChhcmc6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygndGFiIHNlbGVjdGVkOiAnICsgYXJnKTtcbiAgICB9XG5cbiAgICBvbk9yaWVudGF0aW9uQ2hhbmdlZCA9IChldnQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3NldCBmdWxsIHNjcmVlbiB5b3V0dWJlIHBsYXllcicpO1xuICAgICAgICBcbiAgICB9XG5cbiAgICB0b2dnbGVGdWxsU2NyZWVuKCkge1xuICAgICAgICBjb25zdCBwbGF5ZXIgPSB0aGlzLl9wYWdlLmdldFZpZXdCeUlkKCd5dHBsYXllcicpO1xuICAgICAgICBpZiAocGxheWVyICYmICFwbGF5ZXIuaXNQbGF5aW5nKCkpIHtcbiAgICAgICAgICAgIHBsYXllci5wbGF5KCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHBsYXllcikge1xuICAgICAgICAgICAgcGxheWVyLnRvZ2dsZUZ1bGxTY3JlZW4oKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgdmlkZW8gZnVsbHNjcmVlbjogJywgcGxheWVyKTtcbiAgICAgICAgfSAgICAgICAgXG4gICAgfVxuXG4gICAgY2hhbmdlU291cmNlKCkge1xuICAgICAgICB0aGlzLnNyYyA9ICdkUXc0dzlXZ1hjUSc7XG4gICAgfVxuICAgIGdldERhbmNlSGFsbCgpIHtcbiAgICAgICAgdGhpcy5zcmMgPSAnd0hfMF9waWpiWlknO1xuICAgIH1cbiAgICBnZXRIaXBIb3AoKSB7XG4gICAgICAgIHRoaXMuc3JjID0gJ2x3azVPVUlJOVZjJztcbiAgICB9XG4gICAgZ2V0U29jYSgpIHtcbiAgICAgICAgdGhpcy5zcmMgPSAndkVHNHFOVzMzbUEnO1xuICAgIH1cbn1cbiJdfQ==