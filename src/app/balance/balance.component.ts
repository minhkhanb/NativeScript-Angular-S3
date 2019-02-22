import { Component, OnInit } from "@angular/core";
import { RouterExtensions } from "nativescript-angular"
import { Page } from "tns-core-modules/ui/page";

@Component({
    selector: "Balance",
    moduleId: module.id,
    templateUrl: "./balance.component.html"
})
export class BalanceComponent implements OnInit {
    month: number;
    day: string;
    date: number;
    year: number;
    currentMonth: Array<any>;
    lastMonth: Array<any>;

    constructor(private routerExtensions: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.currentMonth = [{
            Day: "1",
            Amount: 51
        },
        {
            Day: "10",
            Amount: 20
        },
        {
            Day: "15",
            Amount: 89
        },
        {
            Day: "20",
            Amount: 110
        }
        ];

        this.lastMonth = [{
            Day: "1",
            Amount: 60
        },
        {
            Day: "10",
            Amount: 50
        },
        {
            Day: "15",
            Amount: 91
        },
        {
            Day: "20",
            Amount: 95
        },
        {
            Day: "31",
            Amount: 160
        }
        ];

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
    }

    goToTodayPage() {
        this.routerExtensions.navigate(["today/"], {
            animated: true,
            transition: {
                name: "fade",
                duration: 380,
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
                duration: 380,
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
                duration: 380,
                curve: "spring"
            },
            clearHistory: true
        });
    }
}