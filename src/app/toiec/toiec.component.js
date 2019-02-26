"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var platform_1 = require("platform");
var ITEM_WIDTH_PERCENT = 0.33333;
var ToiecComponent = /** @class */ (function () {
    function ToiecComponent() {
        this.itemWidth = platform_1.screen.mainScreen.widthDIPs * ITEM_WIDTH_PERCENT;
        this.itemHeight = this.itemWidth;
        this.totalItem = [];
    }
    ToiecComponent.prototype.ngOnInit = function () {
    };
    ToiecComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    ToiecComponent = __decorate([
        core_1.Component({
            selector: 'Toiec',
            moduleId: module.id,
            templateUrl: './toiec.component.html'
        }),
        __metadata("design:paramtypes", [])
    ], ToiecComponent);
    return ToiecComponent;
}());
exports.ToiecComponent = ToiecComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9pZWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9pZWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUVwRCxxQ0FBa0M7QUFFbEMsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUM7QUFRbkM7SUFTRTtRQVBBLGNBQVMsR0FBVyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsa0JBQWtCLENBQUM7UUFDckUsZUFBVSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFcEMsY0FBUyxHQUFhLEVBRXJCLENBQUM7SUFJRixDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCwwQ0FBaUIsR0FBakI7UUFDRSxJQUFNLFVBQVUsR0FBa0IsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BELFVBQVUsQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBcEJVLGNBQWM7UUFOMUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxPQUFPO1lBQ2pCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7O09BRVcsY0FBYyxDQXFCMUI7SUFBRCxxQkFBQztDQUFBLEFBckJELElBcUJDO0FBckJZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5cbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcblxuY29uc3QgSVRFTV9XSURUSF9QRVJDRU5UID0gMC4zMzMzMztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVG9pZWMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9pZWMuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVG9pZWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGl0ZW1XaWR0aDogbnVtYmVyID0gc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzICogSVRFTV9XSURUSF9QRVJDRU5UO1xuICBpdGVtSGVpZ2h0OiBudW1iZXIgPSB0aGlzLml0ZW1XaWR0aDtcblxuICB0b3RhbEl0ZW06IHN0cmluZ1tdID0gW1xuICAgIFxuICBdO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG5cbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuXG4gIH1cbiAgXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgfVxufSJdfQ==