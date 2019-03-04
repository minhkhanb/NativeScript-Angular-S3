import { Component } from '@angular/core';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

import {
  Location,
  getCurrentLocation,
  isEnabled,
  distance,
  enableLocationRequest
} from 'nativescript-geolocation';
import { Accuracy } from 'tns-core-modules/ui/enums';
import { start } from 'tns-core-modules/application/application';

@Component({
  selector: 'LocationComponent',
  moduleId: module.id,
  templateUrl: './location.component.html'
})

export class LocationComponent {

  public distanceResult: string = '0';
  public distance: number = 0;
  public index: number = 0;
  public startpointLongitude: number = 106.6521535;
  public startpointLatitude: number = 10.800579;
  public endpointLongitude: number = 106.6521535;
  public endpointLatitude: number = 10.800579;

  constructor() {
    enableLocationRequest();
  }

  public isLocationEnable() {
    isEnabled().then(function(isLocationEnable) {
      let message = 'Location services are not available';
      if(isLocationEnable) {
        message = 'Location services are available';
      }
      console.log('Location status: ', message);
    }, function(err) {
      console.log('Location error received: ', err.message || err);
    });
  }

  public getDistance() {
    let startLocation: Location = new Location();
    startLocation.latitude = this.startpointLatitude;
    startLocation.longitude = this.startpointLongitude;

    let endLocation: Location = new Location();
    endLocation.latitude = this.endpointLatitude;
    endLocation.longitude = this.endpointLongitude;

    this.distance = distance(startLocation, endLocation);

    console.log('distance - ', this.distance);
    this.distanceResult = (this.distance * 0.001).toFixed(3);
  }

  public getLocationOnce() {
    getCurrentLocation({
      desiredAccuracy: Accuracy.high,
      timeout: 5000
    }).then(
      location => {
        console.log('Location received: ', location);
        this.startpointLatitude = location.latitude;
        this.startpointLongitude = location.longitude;
      }
    ).catch(err => {
      console.log('Location error received: ', err);
    })

  }

  onDrawerButtonTap() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}
