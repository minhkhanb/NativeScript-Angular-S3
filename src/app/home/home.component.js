"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.src = 'L_jWHffIx5E';
        this.options = { rel: 1 };
        // Use the component constructor to inject providers.
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxrREFBb0Q7QUFPcEQ7SUFpQkk7UUFmQSxRQUFHLEdBQUcsYUFBYSxDQUFDO1FBQ3BCLFlBQU8sR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQWVqQixxREFBcUQ7SUFDekQsQ0FBQztJQWZELG9DQUFZLEdBQVo7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBQ0Qsb0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsYUFBYSxDQUFDO0lBQzdCLENBQUM7SUFDRCxpQ0FBUyxHQUFUO1FBQ0ksSUFBSSxDQUFDLEdBQUcsR0FBRyxhQUFhLENBQUM7SUFDN0IsQ0FBQztJQUNELCtCQUFPLEdBQVA7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFHLGFBQWEsQ0FBQztJQUM3QixDQUFDO0lBTUQsZ0NBQVEsR0FBUjtRQUNJLHVDQUF1QztJQUMzQyxDQUFDO0lBRUQseUNBQWlCLEdBQWpCO1FBQ0ksSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxHQUFXO1FBQ25CLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQWhDUSxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTTtZQUNoQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHVCQUF1QjtTQUN2QyxDQUFDOztPQUNXLGFBQWEsQ0FpQ3pCO0lBQUQsb0JBQUM7Q0FBQSxBQWpDRCxJQWlDQztBQWpDWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXJcIjtcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHNyYyA9ICdMX2pXSGZmSXg1RSc7XG4gICAgb3B0aW9ucyA9IHsgcmVsOiAxIH07XG4gICAgY2hhbmdlU291cmNlKCkge1xuICAgICAgICB0aGlzLnNyYyA9ICdkUXc0dzlXZ1hjUSc7XG4gICAgfVxuICAgIGdldERhbmNlSGFsbCgpIHtcbiAgICAgICAgdGhpcy5zcmMgPSAnd0hfMF9waWpiWlknO1xuICAgIH1cbiAgICBnZXRIaXBIb3AoKSB7XG4gICAgICAgIHRoaXMuc3JjID0gJ2x3azVPVUlJOVZjJztcbiAgICB9XG4gICAgZ2V0U29jYSgpIHtcbiAgICAgICAgdGhpcy5zcmMgPSAndkVHNHFOVzMzbUEnO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cblxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9XG5cbiAgICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgc2lkZURyYXdlciA9IDxSYWRTaWRlRHJhd2VyPmFwcC5nZXRSb290VmlldygpO1xuICAgICAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICB9XG5cbiAgICB0YWJTZWxlY3RlZChhcmc6IG51bWJlcikge1xuICAgICAgICBjb25zb2xlLmxvZygndGFiIHNlbGVjdGVkOiAnICsgYXJnKTtcbiAgICB9XG59XG4iXX0=