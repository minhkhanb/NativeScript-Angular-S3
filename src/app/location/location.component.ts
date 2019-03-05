import { Component, OnInit, NgZone } from '@angular/core';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

import { getGeoCodeRequestUrl } from '../utils/common/google';

import {
  Location,
  getCurrentLocation,
  isEnabled,
  distance,
  enableLocationRequest,
} from 'nativescript-geolocation';
import { Accuracy } from 'tns-core-modules/ui/enums';

import { GeoCode } from '../utils/common/geocode';

import * as connectivity from 'tns-core-modules/connectivity';

@Component({
  selector: 'LocationComponent',
  moduleId: module.id,
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})

export class LocationComponent implements OnInit{

  public connectionType: string;

  public distanceResult: string = '0';
  public distance: number = 0;
  public index: number = 0;
  public startpointLongitude: number = 106.6521535;
  public startpointLatitude: number = 10.800579;
  public endpointLongitude: number = 106.6521535;
  public endpointLatitude: number = 10.800579;

  public geoData: GeoCode;
  public address: string = '';

  constructor(private zone: NgZone) {
    this.connectionType = 'Unknow';
    enableLocationRequest();
  }

  public isLocationEnable() {
    isEnabled().then(function(isLocationEnable) {
      let message = 'Location services are not available';
      if(isLocationEnable) {
        message = 'Location services are available';
      }
      else {
        enableLocationRequest();
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

  public connectionToString(connectionType: number): string {
    switch(connectionType) {
      case connectivity.connectionType.none: 
        return 'No connection';

      case connectivity.connectionType.ethernet:
      case connectivity.connectionType.wifi:
        return 'Connected to internet';

      default:
        return 'Unknow';
    }
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

        fetch(getGeoCodeRequestUrl(location.latitude, location.longitude))
          .then(res => res.json())
          .then(response => {
          this.geoData = response.results[0];
          console.log('formatted_address: ', this.geoData.formatted_address);
          this.address = this.geoData.formatted_address;
        })
      }
    ).catch(err => {
      console.log('Location error received: ', err);
    })
  }

  onDrawerButtonTap() {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }

  ngOnInit() {
    this.connectionType = this.connectionToString(connectivity.getConnectionType());
    connectivity.startMonitoring(connectionType => {
      this.zone.run(() => {
        this.connectionType = this.connectionToString(connectionType);
      });
      console.log('init: newConnectionType => ', connectionType);
    });
  }

  ngOnDestroy() {
    connectivity.stopMonitoring();
  }
}
