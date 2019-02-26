import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { ToiecRoutingModule } from './toiec-routing.module';
import { ToiecComponent } from './toiec.component';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    ToiecRoutingModule
  ],
  declarations: [
    ToiecComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class ToiecModule {}