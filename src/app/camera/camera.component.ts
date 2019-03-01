import { Component, OnInit } from '@angular/core';

import { screen } from 'tns-core-modules/platform';

import { RadSideDrawer } from 'nativescript-ui-sidedrawer';
import * as app from 'tns-core-modules/application';

import { ImageAsset } from 'tns-core-modules/image-asset';
import { takePicture, requestPermissions, isAvailable } from 'nativescript-camera';

@Component({
  selector: 'CameraComponent',
  moduleId: module.id,
  templateUrl: './camera.component.html'
})

export class CameraComponent {

  public imageTaken: ImageAsset;
  public saveToGallery: boolean = true;
  public keepAspectRatio: boolean = true;
  public width: number = screen.mainScreen.widthDIPs;
  public height: number = screen.mainScreen.heightDIPs;

  onTakePhoto() {
    let options = {
      width: this.width,
      height: this.height,
      keepAspectRatio: this.keepAspectRatio,
      saveToGallery: this.saveToGallery
    };

    takePicture(options).then(imageAsset => {
      this.imageTaken = imageAsset;
      console.log('Size: ', imageAsset.options.width, ' x ', imageAsset.options.height);
    }).catch(err => {
      console.log('Error: ', err.message);
    })
  }

  onRequestPermissions() {
    requestPermissions();
  }

  onCheckForCamera() {
    let isCameraAvailable = isAvailable();
    console.log('Is camera hardware available: ', isCameraAvailable);
  }

  onDrawerButtonTap(): void {
    const sideDrawer = <RadSideDrawer>app.getRootView();
    sideDrawer.showDrawer();
  }
}