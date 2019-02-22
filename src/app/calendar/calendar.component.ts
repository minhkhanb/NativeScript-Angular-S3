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
import { isAndroid } from "platform";

@Component({
    selector: "Calendar",
    moduleId: module.id,
    templateUrl: "./calendar.component.html"
})
export class CalendarComponent implements OnInit {
    payments: Array<any>;

    constructor(private routerExtensions: RouterExtensions, private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit() {
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

        if (isAndroid) {
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
    }

    onItemTap(itemName) {
        console.log(`Tapped on ${itemName}`);
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


    monthViewStyle() {
        const monthViewStyle = new CalendarMonthViewStyle();
        monthViewStyle.backgroundColor = "#2C3251";
        monthViewStyle.selectionShapeColor = "#4D7188";

        const todayCellStyle = new DayCellStyle();
        todayCellStyle.cellBackgroundColor = "White";
        todayCellStyle.cellTextColor = "#2C3252";
        monthViewStyle.todayCellStyle = todayCellStyle;

        const dayCellStyle = new DayCellStyle();
        dayCellStyle.cellBackgroundColor = '#2C3251';
        dayCellStyle.cellBorderWidth = 1;
        dayCellStyle.cellBorderColor = '#2C3251';
        dayCellStyle.cellTextColor = "#ffffff";

        monthViewStyle.dayCellStyle = dayCellStyle;

        const weekendCellStyle = new DayCellStyle();
        monthViewStyle.weekendCellStyle = weekendCellStyle;

        const selectedCellStyle = new DayCellStyle();
        monthViewStyle.selectedDayCellStyle = selectedCellStyle;

        const dayNameCellStyle = new CellStyle();
        dayNameCellStyle.cellBackgroundColor = '#2C3251';
        dayNameCellStyle.cellBorderWidth = 1;
        dayNameCellStyle.cellBorderColor = '#2C3251';
        dayNameCellStyle.cellTextColor = '#ffffff';
        monthViewStyle.dayNameCellStyle = dayNameCellStyle;

        const titleCellStyle = new DayCellStyle();
        titleCellStyle.cellBackgroundColor = '#2C3251';
        titleCellStyle.cellBorderWidth = 1;
        titleCellStyle.cellBorderColor = '#2C3251';
        titleCellStyle.cellTextColor = "#ffffff";
        monthViewStyle.titleCellStyle = titleCellStyle;

        return monthViewStyle;
    }
}