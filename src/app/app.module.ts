import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";

import { NativeScriptUICalendarModule } from 'nativescript-ui-calendar/angular';
import { YoutubePlayerModule } from 'nativescript-youtubeplayer/angular';

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { BalanceComponent } from './balance/balance.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TodayComponent } from './today/today.component';

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        NativeScriptModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUICalendarModule,
        YoutubePlayerModule,
    ],
    declarations: [
        AppComponent,
        BalanceComponent,
        CalendarComponent,
        TodayComponent,
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
