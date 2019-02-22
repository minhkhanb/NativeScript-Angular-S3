"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_angular_1 = require("nativescript-angular");
var nativescript_ui_calendar_1 = require("nativescript-ui-calendar");
var page_1 = require("tns-core-modules/ui/page");
var platform_1 = require("platform");
var CalendarComponent = /** @class */ (function () {
    function CalendarComponent(routerExtensions, page) {
        this.routerExtensions = routerExtensions;
        this.page = page;
        this.page.actionBarHidden = true;
    }
    CalendarComponent.prototype.ngOnInit = function () {
        this.payments = [{
                name: "Electricity Bill",
                repeat: "every month",
                amount: "$108",
                tag: "purple"
            },
            {
                name: "Dropbox Subscription",
                repeat: "every month",
                amount: "$9.99",
                tag: "yellow"
            },
            {
                name: "Gmail",
                repeat: "every month",
                amount: "$10",
                tag: "yellow"
            },
            {
                name: "GoRails Subscription",
                repeat: "every month",
                amount: "$15",
                tag: "orange",
                last: true
            }
        ];
        if (platform_1.isAndroid) {
            this.payments = [{
                    name: "Electricity Bill",
                    repeat: "every month",
                    amount: "$108",
                    tag: "purple.png"
                },
                {
                    name: "Dropbox Subscription",
                    repeat: "every month",
                    amount: "$9.99",
                    tag: "yellow.png"
                },
                {
                    name: "Gmail",
                    repeat: "every month",
                    amount: "$10",
                    tag: "yellow.png"
                },
                {
                    name: "GoRails Subscription",
                    repeat: "every month",
                    amount: "$15",
                    tag: "orange.png",
                    last: true
                }
            ];
        }
    };
    CalendarComponent.prototype.onItemTap = function (itemName) {
        console.log("Tapped on " + itemName);
    };
    CalendarComponent.prototype.goToTodayPage = function () {
        this.routerExtensions.navigate(["today/"], {
            animated: true,
            transition: {
                name: "fade",
                duration: 380,
                curve: "spring"
            },
            clearHistory: true
        });
    };
    CalendarComponent.prototype.goToBalancePage = function () {
        this.routerExtensions.navigate(["balance/"], {
            animated: true,
            transition: {
                name: "fade",
                duration: 380,
                curve: "spring"
            },
            clearHistory: true
        });
    };
    CalendarComponent.prototype.monthViewStyle = function () {
        var monthViewStyle = new nativescript_ui_calendar_1.CalendarMonthViewStyle();
        monthViewStyle.backgroundColor = "#2C3251";
        monthViewStyle.selectionShapeColor = "#4D7188";
        var todayCellStyle = new nativescript_ui_calendar_1.DayCellStyle();
        todayCellStyle.cellBackgroundColor = "White";
        todayCellStyle.cellTextColor = "#2C3252";
        monthViewStyle.todayCellStyle = todayCellStyle;
        var dayCellStyle = new nativescript_ui_calendar_1.DayCellStyle();
        dayCellStyle.cellBackgroundColor = '#2C3251';
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = '#2C3251';
        dayCellStyle.cellTextColor = "#ffffff";
        monthViewStyle.dayCellStyle = dayCellStyle;
        var weekendCellStyle = new nativescript_ui_calendar_1.DayCellStyle();
        monthViewStyle.weekendCellStyle = weekendCellStyle;
        var selectedCellStyle = new nativescript_ui_calendar_1.DayCellStyle();
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;
        var dayNameCellStyle = new nativescript_ui_calendar_1.CellStyle();
        dayNameCellStyle.cellBackgroundColor = '#2C3251';
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = '#2C3251';
        dayNameCellStyle.cellTextColor = '#ffffff';
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;
        var titleCellStyle = new nativescript_ui_calendar_1.DayCellStyle();
        titleCellStyle.cellBackgroundColor = '#2C3251';
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = '#2C3251';
        titleCellStyle.cellTextColor = "#ffffff";
        monthViewStyle.titleCellStyle = titleCellStyle;
        return monthViewStyle;
    };
    CalendarComponent = __decorate([
        core_1.Component({
            selector: "Calendar",
            moduleId: module.id,
            templateUrl: "./calendar.component.html"
        }),
        __metadata("design:paramtypes", [nativescript_angular_1.RouterExtensions, page_1.Page])
    ], CalendarComponent);
    return CalendarComponent;
}());
exports.CalendarComponent = CalendarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FsZW5kYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FsZW5kYXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELDZEQUF1RDtBQUN2RCxxRUFZa0M7QUFDbEMsaURBQWdEO0FBQ2hELHFDQUFxQztBQU9yQztJQUdJLDJCQUFvQixnQkFBa0MsRUFBVSxJQUFVO1FBQXRELHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ3RFLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNyQyxDQUFDO0lBRUQsb0NBQVEsR0FBUjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQztnQkFDYixJQUFJLEVBQUUsa0JBQWtCO2dCQUN4QixNQUFNLEVBQUUsYUFBYTtnQkFDckIsTUFBTSxFQUFFLE1BQU07Z0JBQ2QsR0FBRyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixNQUFNLEVBQUUsYUFBYTtnQkFDckIsTUFBTSxFQUFFLE9BQU87Z0JBQ2YsR0FBRyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsT0FBTztnQkFDYixNQUFNLEVBQUUsYUFBYTtnQkFDckIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLFFBQVE7YUFDaEI7WUFDRDtnQkFDSSxJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixNQUFNLEVBQUUsYUFBYTtnQkFDckIsTUFBTSxFQUFFLEtBQUs7Z0JBQ2IsR0FBRyxFQUFFLFFBQVE7Z0JBQ2IsSUFBSSxFQUFFLElBQUk7YUFDYjtTQUNBLENBQUM7UUFFRixJQUFJLG9CQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUM7b0JBQ2IsSUFBSSxFQUFFLGtCQUFrQjtvQkFDeEIsTUFBTSxFQUFFLGFBQWE7b0JBQ3JC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Y0FBYyxDQUFDLGdCQUFnQixHQUFHLGdCQUFnQixDQUFDO1FBRW5ELElBQU0sY0FBYyxHQUFHLElBQUksdUNBQVksRUFBRSxDQUFDO1FBQzFDLGNBQWMsQ0FBQyxtQkFBbUIsR0FBRyxTQUFTLENBQUM7UUFDL0MsY0FBYyxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUM7UUFDbkMsY0FBYyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDM0MsY0FBYyxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7UUFDekMsY0FBYyxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFFL0MsT0FBTyxjQUFjLENBQUM7SUFDMUIsQ0FBQztJQXJJUSxpQkFBaUI7UUFMN0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxVQUFVO1lBQ3BCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsMkJBQTJCO1NBQzNDLENBQUM7eUNBSXdDLHVDQUFnQixFQUFnQixXQUFJO09BSGpFLGlCQUFpQixDQXNJN0I7SUFBRCx3QkFBQztDQUFBLEFBdElELElBc0lDO0FBdElZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXJcIlxuaW1wb3J0IHtcbiAgICBBbGxEYXlFdmVudHNWaWV3U3R5bGUsXG4gICAgQ2FsZW5kYXJNb250aFZpZXdTdHlsZSxcbiAgICBDYWxlbmRhcldlZWtWaWV3U3R5bGUsXG4gICAgQ2FsZW5kYXJZZWFyVmlld1N0eWxlLFxuICAgIENhbGVuZGFyTW9udGhOYW1lc1ZpZXdTdHlsZSxcbiAgICBDYWxlbmRhclZpZXdNb2RlLFxuICAgIENhbGVuZGFyRGF5Vmlld1N0eWxlLFxuICAgIENlbGxTdHlsZSxcbiAgICBEYXlDZWxsU3R5bGUsXG4gICAgRGF5RXZlbnRzVmlld1N0eWxlLFxuICAgIE1vbnRoQ2VsbFN0eWxlXG59IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktY2FsZW5kYXJcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tIFwicGxhdGZvcm1cIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2FsZW5kYXJcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FsZW5kYXIuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcGF5bWVudHM6IEFycmF5PGFueT47XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnMsIHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgICAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5wYXltZW50cyA9IFt7XG4gICAgICAgICAgICBuYW1lOiBcIkVsZWN0cmljaXR5IEJpbGxcIixcbiAgICAgICAgICAgIHJlcGVhdDogXCJldmVyeSBtb250aFwiLFxuICAgICAgICAgICAgYW1vdW50OiBcIiQxMDhcIixcbiAgICAgICAgICAgIHRhZzogXCJwdXJwbGVcIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIkRyb3Bib3ggU3Vic2NyaXB0aW9uXCIsXG4gICAgICAgICAgICByZXBlYXQ6IFwiZXZlcnkgbW9udGhcIixcbiAgICAgICAgICAgIGFtb3VudDogXCIkOS45OVwiLFxuICAgICAgICAgICAgdGFnOiBcInllbGxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiR21haWxcIixcbiAgICAgICAgICAgIHJlcGVhdDogXCJldmVyeSBtb250aFwiLFxuICAgICAgICAgICAgYW1vdW50OiBcIiQxMFwiLFxuICAgICAgICAgICAgdGFnOiBcInllbGxvd1wiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwiR29SYWlscyBTdWJzY3JpcHRpb25cIixcbiAgICAgICAgICAgIHJlcGVhdDogXCJldmVyeSBtb250aFwiLFxuICAgICAgICAgICAgYW1vdW50OiBcIiQxNVwiLFxuICAgICAgICAgICAgdGFnOiBcIm9yYW5nZVwiLFxuICAgICAgICAgICAgbGFzdDogdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIF07XG5cbiAgICAgICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgICAgICAgdGhpcy5wYXltZW50cyA9IFt7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJFbGVjdHJpY2l0eSBCaWxsXCIsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiBcImV2ZXJ5IG1vbnRoXCIsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBcIiQxMDhcIixcbiAgICAgICAgICAgICAgICB0YWc6IFwicHVycGxlLnBuZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiRHJvcGJveCBTdWJzY3JpcHRpb25cIixcbiAgICAgICAgICAgICAgICByZXBlYXQ6IFwiZXZlcnkgbW9udGhcIixcbiAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDkuOTlcIixcbiAgICAgICAgICAgICAgICB0YWc6IFwieWVsbG93LnBuZ1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwiR21haWxcIixcbiAgICAgICAgICAgICAgICByZXBlYXQ6IFwiZXZlcnkgbW9udGhcIixcbiAgICAgICAgICAgICAgICBhbW91bnQ6IFwiJDEwXCIsXG4gICAgICAgICAgICAgICAgdGFnOiBcInllbGxvdy5wbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkdvUmFpbHMgU3Vic2NyaXB0aW9uXCIsXG4gICAgICAgICAgICAgICAgcmVwZWF0OiBcImV2ZXJ5IG1vbnRoXCIsXG4gICAgICAgICAgICAgICAgYW1vdW50OiBcIiQxNVwiLFxuICAgICAgICAgICAgICAgIHRhZzogXCJvcmFuZ2UucG5nXCIsXG4gICAgICAgICAgICAgICAgbGFzdDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSXRlbVRhcChpdGVtTmFtZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhgVGFwcGVkIG9uICR7aXRlbU5hbWV9YCk7XG4gICAgfVxuXG4gICAgZ29Ub1RvZGF5UGFnZSgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcInRvZGF5L1wiXSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJzcHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBnb1RvQmFsYW5jZVBhZ2UoKSB7XG4gICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCJiYWxhbmNlL1wiXSwge1xuICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJmYWRlXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDM4MCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJzcHJpbmdcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNsZWFySGlzdG9yeTogdHJ1ZVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIG1vbnRoVmlld1N0eWxlKCkge1xuICAgICAgICBjb25zdCBtb250aFZpZXdTdHlsZSA9IG5ldyBDYWxlbmRhck1vbnRoVmlld1N0eWxlKCk7XG4gICAgICAgIG1vbnRoVmlld1N0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiIzJDMzI1MVwiO1xuICAgICAgICBtb250aFZpZXdTdHlsZS5zZWxlY3Rpb25TaGFwZUNvbG9yID0gXCIjNEQ3MTg4XCI7XG5cbiAgICAgICAgY29uc3QgdG9kYXlDZWxsU3R5bGUgPSBuZXcgRGF5Q2VsbFN0eWxlKCk7XG4gICAgICAgIHRvZGF5Q2VsbFN0eWxlLmNlbGxCYWNrZ3JvdW5kQ29sb3IgPSBcIldoaXRlXCI7XG4gICAgICAgIHRvZGF5Q2VsbFN0eWxlLmNlbGxUZXh0Q29sb3IgPSBcIiMyQzMyNTJcIjtcbiAgICAgICAgbW9udGhWaWV3U3R5bGUudG9kYXlDZWxsU3R5bGUgPSB0b2RheUNlbGxTdHlsZTtcblxuICAgICAgICBjb25zdCBkYXlDZWxsU3R5bGUgPSBuZXcgRGF5Q2VsbFN0eWxlKCk7XG4gICAgICAgIGRheUNlbGxTdHlsZS5jZWxsQmFja2dyb3VuZENvbG9yID0gJyMyQzMyNTEnO1xuICAgICAgICBkYXlDZWxsU3R5bGUuY2VsbEJvcmRlcldpZHRoID0gMTtcbiAgICAgICAgZGF5Q2VsbFN0eWxlLmNlbGxCb3JkZXJDb2xvciA9ICcjMkMzMjUxJztcbiAgICAgICAgZGF5Q2VsbFN0eWxlLmNlbGxUZXh0Q29sb3IgPSBcIiNmZmZmZmZcIjtcblxuICAgICAgICBtb250aFZpZXdTdHlsZS5kYXlDZWxsU3R5bGUgPSBkYXlDZWxsU3R5bGU7XG5cbiAgICAgICAgY29uc3Qgd2Vla2VuZENlbGxTdHlsZSA9IG5ldyBEYXlDZWxsU3R5bGUoKTtcbiAgICAgICAgbW9udGhWaWV3U3R5bGUud2Vla2VuZENlbGxTdHlsZSA9IHdlZWtlbmRDZWxsU3R5bGU7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRDZWxsU3R5bGUgPSBuZXcgRGF5Q2VsbFN0eWxlKCk7XG4gICAgICAgIG1vbnRoVmlld1N0eWxlLnNlbGVjdGVkRGF5Q2VsbFN0eWxlID0gc2VsZWN0ZWRDZWxsU3R5bGU7XG5cbiAgICAgICAgY29uc3QgZGF5TmFtZUNlbGxTdHlsZSA9IG5ldyBDZWxsU3R5bGUoKTtcbiAgICAgICAgZGF5TmFtZUNlbGxTdHlsZS5jZWxsQmFja2dyb3VuZENvbG9yID0gJyMyQzMyNTEnO1xuICAgICAgICBkYXlOYW1lQ2VsbFN0eWxlLmNlbGxCb3JkZXJXaWR0aCA9IDE7XG4gICAgICAgIGRheU5hbWVDZWxsU3R5bGUuY2VsbEJvcmRlckNvbG9yID0gJyMyQzMyNTEnO1xuICAgICAgICBkYXlOYW1lQ2VsbFN0eWxlLmNlbGxUZXh0Q29sb3IgPSAnI2ZmZmZmZic7XG4gICAgICAgIG1vbnRoVmlld1N0eWxlLmRheU5hbWVDZWxsU3R5bGUgPSBkYXlOYW1lQ2VsbFN0eWxlO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlQ2VsbFN0eWxlID0gbmV3IERheUNlbGxTdHlsZSgpO1xuICAgICAgICB0aXRsZUNlbGxTdHlsZS5jZWxsQmFja2dyb3VuZENvbG9yID0gJyMyQzMyNTEnO1xuICAgICAgICB0aXRsZUNlbGxTdHlsZS5jZWxsQm9yZGVyV2lkdGggPSAxO1xuICAgICAgICB0aXRsZUNlbGxTdHlsZS5jZWxsQm9yZGVyQ29sb3IgPSAnIzJDMzI1MSc7XG4gICAgICAgIHRpdGxlQ2VsbFN0eWxlLmNlbGxUZXh0Q29sb3IgPSBcIiNmZmZmZmZcIjtcbiAgICAgICAgbW9udGhWaWV3U3R5bGUudGl0bGVDZWxsU3R5bGUgPSB0aXRsZUNlbGxTdHlsZTtcblxuICAgICAgICByZXR1cm4gbW9udGhWaWV3U3R5bGU7XG4gICAgfVxufSJdfQ==