import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { UIRoutingModule } from "./ui-routing.module";
import { UIComponent } from "./ui.component";


@NgModule({
    imports: [
        NativeScriptCommonModule,
        UIRoutingModule,
    ],
    declarations: [
        UIComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class UIModule { }
