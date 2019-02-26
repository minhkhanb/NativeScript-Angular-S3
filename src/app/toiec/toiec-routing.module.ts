import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { ToiecComponent } from './toiec.component';

const routes: Routes = [
  {
    path: '',
    component: ToiecComponent
  }
];

@NgModule({
  imports: [
    NativeScriptRouterModule.forChild(routes)
  ],
  exports: [
    NativeScriptRouterModule
  ]
})

export class ToiecRoutingModule {}