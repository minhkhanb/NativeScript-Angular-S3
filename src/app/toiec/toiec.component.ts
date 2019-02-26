import { Component, OnInit } from '@angular/core';
import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

import { screen } from 'platform';

const ITEM_WIDTH_PERCENT = 0.33333;

@Component({
  selector: 'Toiec',
  moduleId: module.id,
  templateUrl: './toiec.component.html'
})

export class ToiecComponent implements OnInit {

  itemWidth: number = screen.mainScreen.widthDIPs * ITEM_WIDTH_PERCENT;
  itemHeight: number = this.itemWidth;

  totalItem: string[] = [
    
  ];
  
  constructor() {

  }

  ngOnInit(): void {

  }
  
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}