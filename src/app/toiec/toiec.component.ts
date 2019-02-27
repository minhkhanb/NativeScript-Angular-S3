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

  itemWidth: number = (screen.mainScreen.widthDIPs / 3);
  itemHeight: number = this.itemWidth * 9 / 16;

  itemColor: string = '#555';
  itemRows: string = '';

  totalItem: Array<any> = [
    {
      id: 0,
      bgColor: '',
    },
    {
      id: 1,
      bgColor: '',
    },
    {
      id: 2,
      bgColor: '',
    },
    {
      id: 3,
      bgColor: '',
    },
    {
      id: 4,
      bgColor: '',
    },
    {
      id: 5,
      bgColor: '',
    },
    {
      id: 6,
      bgColor: '',
    },
    {
      id: 7,
      bgColor: '',
    },
    {
      id: 8,
      bgColor: '',
    },
    {
      id: 9,
      bgColor: '',
    },
    {
      id: 10,
      bgColor: '',
    },
    {
      id: 11,
      bgColor: '',
    },
    {
      id: 12,
      bgColor: '',
    },
    {
      id: 13,
      bgColor: '',
    },
    {
      id: 14,
      bgColor: '',
    },
    {
      id: 15,
      bgColor: '',
    },
    {
      id: 16,
      bgColor: '',
    },
    {
      id: 17,
      bgColor: '',
    },
    {
      id: 18,
      bgColor: '',
    },
    {
      id: 19,
      bgColor: '',
    },
  ];
  
  constructor() {
    app.on('orientationChanged', this.onOrientationChanged);
  }

  ngOnInit(): void {
    this.totalItem.map(item => {
      item.bgColor = this.getRandomInt();
      item.title = 'Plan ' + item.id;
      item.col = item.id % 3;
      item.row = Math.floor(item.id / 3);
    });
    this.itemRows = this.getItemRows();
    console.log('totalItem: , this.itemRows: ', this.totalItem, this.itemRows);
  }

  public onOrientationChanged = (evt) => {
    console.log('Orientation changed  !: ', evt);
  }

  getItemRows(): any {
    const rows = Math.floor(this.totalItem.length / 3);
    let rowsString = 'auto';
    for( let i = 0; i < rows; i++) {
      rowsString += ' auto';
    }
    return rowsString;
  }
  
  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
    sideDrawer.resetNativeView();
  }

  getRandomInt() {
    return '#' + Math.random().toString(16).slice(2, 8);
  }


}