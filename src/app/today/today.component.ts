import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular"
import {
    AllDayEventsViewStyle,
    CalendarMonthViewStyle,
    CalendarWeekViewStyle,
    CalendarYearViewStyle,
    CalendarMonthNamesViewStyle,
    CalendarViewMode,
    CalendarDayViewStyle,
    CellStyle,
    DayCellStyle,
    DayEventsViewStyle,
    MonthCellStyle
} from "nativescript-ui-calendar";
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Today",
    moduleId: module.id,
    templateUrl: "./today.component.html"
})
export class TodayComponent implements OnInit {
    day: string;
    date: number;
    month: string;
    year: number;
    transactions: Array<any>;

    constructor(private routerExtensions: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {

        var currentDate = new Date();
        var day = currentDate.getDay();
        var date = currentDate.getDate();
        var year = currentDate.getFullYear();

        var weekdays = new Array(7);
        weekdays[0] = "Sunday";
        weekdays[1] = "Monday";
        weekdays[2] = "Tuesday";
        weekdays[3] = "Wednesday";
        weekdays[4] = "Thursday";
        weekdays[5] = "Friday";
        weekdays[6] = "Saturday";
        var dayName = weekdays[day];

        this.day = dayName;
        this.date = date;
        this.year = year;

        var month = new Array();
        month[0] = "January";
        month[1] = "February";
        month[2] = "March";
        month[3] = "April";
        month[4] = "May";
        month[5] = "June";
        month[6] = "July";
        month[7] = "August";
        month[8] = "September";
        month[9] = "October";
        month[10] = "November";
        month[11] = "December";

        var monthName = month[currentDate.getMonth()];
        this.month = monthName;

        this.transactions = [{
            name: "Pharmacy",
            address: "Market str.",
            amount: "$24",
            date: "2h ago",
            last: false
        },
        {
            name: "Apple Store",
            address: "300 Post Street",
            amount: "$124",
            date: "3h ago",
            last: false
        },
        {
            name: "Starbucks",
            address: "Market str.",
            amount: "$9",
            date: "4h ago",
            last: false
        },
        {
            name: "Transfer to John Mayer",
            address: "",
            amount: "$17",
            date: "4h ago",
            last: false
        },
        {
            name: "Pharmacy",
            address: "Market str.",
            amount: "$24",
            date: "2h ago",
            last: false
        },
        {
            name: "Apple Store",
            address: "300 Post Street",
            amount: "$124",
            date: "3h ago",
            last: false
        },
        {
            name: "Starbucks",
            address: "Market str.",
            amount: "$9",
            date: "4h ago",
            last: false
        },
        {
            name: "Transfer to John Mayer",
            address: "",
            amount: "$17",
            date: "4h ago",
            last: true
        }
        ];
    }

    onRadItemTap(itemName) {
        console.log(`Tapped on ${itemName}`);
    }

    goToTodayPage() {
        this.routerExtensions.navigate(["today/"], {
            animated: true,
            transition: {
                name: "fade",
                // duration: 380,
                curve: "spring"
            },
            clearHistory: true
        });
    }

    goToBalancePage() {
        this.routerExtensions.navigate(["balance/"], {
            animated: true,
            transition: {
                name: "fade",
                // duration: 380,
                curve: "spring"
            },
            clearHistory: true
        });
    }

    goToCalendarPage() {
        this.routerExtensions.navigate(["calendar/"], {
            animated: true,
            transition: {
                name: "fade",
                // duration: 380,
                curve: "spring"
            },
            clearHistory: true
        });
    }
}