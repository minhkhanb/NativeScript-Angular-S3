import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

@Component({
  selector: 'Toiec',
  moduleId: module.id,
  templateUrl: './toiec.component.html'
})

export class ToiecComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit(): void {

  }
  
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}