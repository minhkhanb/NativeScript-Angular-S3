import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { TodayComponent } from './today/today.component';
import { BalanceComponent } from './balance/balance.component';
import { CalendarComponent } from './calendar/calendar.component';

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", loadChildren: "~/app/home/home.module#HomeModule" },
    { path: "browse", loadChildren: "~/app/browse/browse.module#BrowseModule" },
    { path: "search", loadChildren: "~/app/search/search.module#SearchModule" },
    { path: "featured", loadChildren: "~/app/featured/featured.module#FeaturedModule" },
    { path: "settings", loadChildren: "~/app/settings/settings.module#SettingsModule" },
    { path: 'balance', component: BalanceComponent },
    { path: 'calendar', component: CalendarComponent },
    { path: 'today', component: TodayComponent },
    { path: 'ui', loadChildren: '~/app/ui/ui.module#UIModule' },
    { path: 'toiec', loadChildren: '~/app/toiec/toiec.module#ToiecModule' },
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
