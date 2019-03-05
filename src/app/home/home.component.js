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
            console.log('set video fullscreen : ', player);
        }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJob21lLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RTtBQUV6RSxrREFBb0Q7QUFFcEQsZ0NBQStCO0FBUy9CO0lBU0ksdUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBTDlCLFFBQUcsR0FBRyxhQUFhLENBQUM7UUFFcEIsWUFBTyxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBRyx5Q0FBeUMsQ0FBQztRQXFCbkQseUJBQW9CLEdBQUcsVUFBQyxHQUFHO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUVsRCxDQUFDLENBQUE7UUFyQkcscURBQXFEO1FBQ3JELElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLEdBQUcsQ0FBQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7SUFDNUQsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELHlDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFFRCxtQ0FBVyxHQUFYLFVBQVksR0FBVztRQUNuQixPQUFPLENBQUMsR0FBRyxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFPRCx3Q0FBZ0IsR0FBaEI7UUFDSSxJQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNsRCxJQUFJLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsRUFBRTtZQUMvQixNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDakI7UUFDRCxJQUFJLE1BQU0sRUFBRTtZQUNSLE1BQU0sQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1lBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEVBQUUsTUFBTSxDQUFDLENBQUM7U0FDbEQ7SUFDTCxDQUFDO0lBMUNRLGFBQWE7UUFMekIsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNO1lBQ2hCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsdUJBQXVCO1NBQ3ZDLENBQUM7eUNBVTRCLFdBQUk7T0FUckIsYUFBYSxDQTJDekI7SUFBRCxvQkFBQztDQUFBLEFBM0NELElBMkNDO0FBM0NZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyXCI7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuXG5pbXBvcnQgeyBZb3V0dWJlUGxheWVyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXlvdXR1YmVwbGF5ZXInO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJIb21lXCIsXG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICB0ZW1wbGF0ZVVybDogXCIuL2hvbWUuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIF9wYWdlO1xuXG4gICAgc3JjID0gJ0hrMUpZN3ZzdVdnJztcbiAgICBcbiAgICBvcHRpb25zID0geyByZWw6IDEgfTtcbiAgICBhcGlLZXkgPSAnQUl6YVN5Q2lwcnE4NXM5SVNGcWllOWpCRUJycHM2X2ctNGNhM2xvJztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgICAgICB0aGlzLl9wYWdlID0gcGFnZTtcbiAgICAgICAgYXBwLm9uKCdvcmllbnRhdGlvbkNoYW5nZWQnLCB0aGlzLm9uT3JpZW50YXRpb25DaGFuZ2VkKTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgLy8gSW5pdCB5b3VyIGNvbXBvbmVudCBwcm9wZXJ0aWVzIGhlcmUuXG4gICAgfVxuXG4gICAgb25EcmF3ZXJCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICAgICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gICAgfVxuXG4gICAgdGFiU2VsZWN0ZWQoYXJnOiBudW1iZXIpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3RhYiBzZWxlY3RlZDogJyArIGFyZyk7XG4gICAgfVxuXG4gICAgb25PcmllbnRhdGlvbkNoYW5nZWQgPSAoZXZ0KSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzZXQgZnVsbCBzY3JlZW4geW91dHViZSBwbGF5ZXInKTtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgdG9nZ2xlRnVsbFNjcmVlbigpIHtcbiAgICAgICAgY29uc3QgcGxheWVyID0gdGhpcy5fcGFnZS5nZXRWaWV3QnlJZCgneXRwbGF5ZXInKTtcbiAgICAgICAgaWYgKHBsYXllciAmJiAhcGxheWVyLmlzUGxheWluZygpKSB7XG4gICAgICAgICAgICBwbGF5ZXIucGxheSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChwbGF5ZXIpIHtcbiAgICAgICAgICAgIHBsYXllci50b2dnbGVGdWxsU2NyZWVuKCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IHZpZGVvIGZ1bGxzY3JlZW4gOiAnLCBwbGF5ZXIpO1xuICAgICAgICB9ICAgICAgICBcbiAgICB9XG59XG4iXX0=