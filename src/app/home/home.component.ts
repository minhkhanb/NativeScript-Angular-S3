import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { YoutubePlayer } from 'nativescript-youtubeplayer';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    src = 'Hk1JY7vsuWg';
    
    options = { rel: 1 };
    apiKey = 'AIzaSyCiprq85s9ISFqie9jBEBrps6_g-4ca3lo';
    ytplayer: YoutubePlayer;

    toggleFullScreen() {
        this.ytplayer.toggleFullscreen();
    }

    changeSource() {
        this.src = 'dQw4w9WgXcQ';
    }
    getDanceHall() {
        this.src = 'wH_0_pijbZY';
    }
    getHipHop() {
        this.src = 'lwk5OUII9Vc';
    }
    getSoca() {
        this.src = 'vEG4qNW33mA';
    }

    constructor() {
        // Use the component constructor to inject providers.
        app.on('orientationChanged', this.onOrientationChanged);
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    tabSelected(arg: number) {
        console.log('tab selected: ' + arg);
    }

    onOrientationChanged = (evt) => {
        console.log('set full screen youtube player');
        
    }
}
