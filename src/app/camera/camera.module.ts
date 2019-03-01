import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from 'nativescript-angular/common';

import { CameraComponent } from './camera.component';
import { CameraRouting } from './camera-routing.module';

@NgModule({
  imports: [
    NativeScriptCommonModule,
    CameraRouting
  ],
  declarations: [
    CameraComponent
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})

export class CameraModule {}