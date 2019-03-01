"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var today_component_1 = require("./today/today.component");
var balance_component_1 = require("./balance/balance.component");
var calendar_component_1 = require("./calendar/calendar.component");
var routes = [
    { path: "", redirectTo: "/camera", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: 'balance', component: balance_component_1.BalanceComponent },
    { path: 'calendar', component: calendar_component_1.CalendarComponent },
    { path: 'today', component: today_component_1.TodayComponent },
    { path: 'ui', loadChildren: '~/app/ui/ui.module#UIModule' },
    { path: 'toiec', loadChildren: '~/app/toiec/toiec.module#ToiecModule' },
    { path: 'camera', loadChildren: '~/app/oiec/toiec.module#CameraModule' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSwyREFBeUQ7QUFDekQsaUVBQStEO0FBQy9ELG9FQUFrRTtBQUVsRSxJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFO0lBQ3RELEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsbUNBQW1DLEVBQUU7SUFDbkUsRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSx5Q0FBeUMsRUFBRTtJQUMzRSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHlDQUF5QyxFQUFFO0lBQzNFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsK0NBQStDLEVBQUU7SUFDbkYsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSwrQ0FBK0MsRUFBRTtJQUNuRixFQUFFLElBQUksRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLG9DQUFnQixFQUFFO0lBQ2hELEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7SUFDbEQsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQzVDLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUUsNkJBQTZCLEVBQUU7SUFDM0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxzQ0FBc0MsRUFBRTtJQUN2RSxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLHNDQUFzQyxFQUFFO0NBQzNFLENBQUM7QUFNRjtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQUk7SUFBRCx1QkFBQztDQUFBLEFBQWpDLElBQWlDO0FBQXBCLDRDQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tICcuL3RvZGF5L3RvZGF5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCYWxhbmNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYWxhbmNlL2JhbGFuY2UuY29tcG9uZW50JztcbmltcG9ydCB7IENhbGVuZGFyQ29tcG9uZW50IH0gZnJvbSAnLi9jYWxlbmRhci9jYWxlbmRhci5jb21wb25lbnQnO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2NhbWVyYVwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwiIH0sXG4gICAgeyBwYXRoOiBcImhvbWVcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL2hvbWUvaG9tZS5tb2R1bGUjSG9tZU1vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiBcImJyb3dzZVwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvYnJvd3NlL2Jyb3dzZS5tb2R1bGUjQnJvd3NlTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2VhcmNoXCIsIGxvYWRDaGlsZHJlbjogXCJ+L2FwcC9zZWFyY2gvc2VhcmNoLm1vZHVsZSNTZWFyY2hNb2R1bGVcIiB9LFxuICAgIHsgcGF0aDogXCJmZWF0dXJlZFwiLCBsb2FkQ2hpbGRyZW46IFwifi9hcHAvZmVhdHVyZWQvZmVhdHVyZWQubW9kdWxlI0ZlYXR1cmVkTW9kdWxlXCIgfSxcbiAgICB7IHBhdGg6IFwic2V0dGluZ3NcIiwgbG9hZENoaWxkcmVuOiBcIn4vYXBwL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZSNTZXR0aW5nc01vZHVsZVwiIH0sXG4gICAgeyBwYXRoOiAnYmFsYW5jZScsIGNvbXBvbmVudDogQmFsYW5jZUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ2NhbGVuZGFyJywgY29tcG9uZW50OiBDYWxlbmRhckNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3RvZGF5JywgY29tcG9uZW50OiBUb2RheUNvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogJ3VpJywgbG9hZENoaWxkcmVuOiAnfi9hcHAvdWkvdWkubW9kdWxlI1VJTW9kdWxlJyB9LFxuICAgIHsgcGF0aDogJ3RvaWVjJywgbG9hZENoaWxkcmVuOiAnfi9hcHAvdG9pZWMvdG9pZWMubW9kdWxlI1RvaWVjTW9kdWxlJyB9LFxuICAgIHsgcGF0aDogJ2NhbWVyYScsIGxvYWRDaGlsZHJlbjogJ34vYXBwL29pZWMvdG9pZWMubW9kdWxlI0NhbWVyYU1vZHVsZScgfSxcbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUgeyB9XG4iXX0=