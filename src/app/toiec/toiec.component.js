"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var platform_1 = require("platform");
var ITEM_WIDTH_PERCENT = 0.33333;
var ToiecComponent = /** @class */ (function () {
    function ToiecComponent() {
        this.itemWidth = (platform_1.screen.mainScreen.widthDIPs / 3);
        this.itemHeight = this.itemWidth * 9 / 16;
        this.itemColor = '#555';
        this.itemRows = '';
        this.totalItem = [
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
        this.onOrientationChanged = function (evt) {
            console.log('Orientation changed  !: ', evt);
        };
        app.on('orientationChanged', this.onOrientationChanged);
    }
    ToiecComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.totalItem.map(function (item) {
            item.bgColor = _this.getRandomInt();
            item.title = 'Plan ' + item.id;
            item.col = item.id % 3;
            item.row = Math.floor(item.id / 3);
        });
        this.itemRows = this.getItemRows();
        console.log('totalItem: , this.itemRows: ', this.totalItem, this.itemRows);
    };
    ToiecComponent.prototype.getItemRows = function () {
        var rows = Math.floor(this.totalItem.length / 3);
        var rowsString = 'auto';
        for (var i = 0; i < rows; i++) {
            rowsString += ' auto';
        }
        return rowsString;
    };
    ToiecComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
        sideDrawer.resetNativeView();
    };
    ToiecComponent.prototype.getRandomInt = function () {
        return '#' + Math.random().toString(16).slice(2, 8);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9pZWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9pZWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUVwRCxxQ0FBa0M7QUFFbEMsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUM7QUFRbkM7SUEyRkU7UUF6RkEsY0FBUyxHQUFXLENBQUMsaUJBQU0sQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RELGVBQVUsR0FBVyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7UUFFN0MsY0FBUyxHQUFXLE1BQU0sQ0FBQztRQUMzQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBZTtZQUN0QjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUs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QUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsd0JBQXdCO1NBQ3RDLENBQUM7O09BRVcsY0FBYyxDQWtJMUI7SUFBRCxxQkFBQztDQUFBLEFBbElELElBa0lDO0FBbElZLHdDQUFjIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvbic7XG5cbmltcG9ydCB7IHNjcmVlbiB9IGZyb20gJ3BsYXRmb3JtJztcblxuY29uc3QgSVRFTV9XSURUSF9QRVJDRU5UID0gMC4zMzMzMztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnVG9pZWMnLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICB0ZW1wbGF0ZVVybDogJy4vdG9pZWMuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgVG9pZWNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGl0ZW1XaWR0aDogbnVtYmVyID0gKHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDMpO1xuICBpdGVtSGVpZ2h0OiBudW1iZXIgPSB0aGlzLml0ZW1XaWR0aCAqIDkgLyAxNjtcblxuICBpdGVtQ29sb3I6IHN0cmluZyA9ICcjNTU1JztcbiAgaXRlbVJvd3M6IHN0cmluZyA9ICcnO1xuXG4gIHRvdGFsSXRlbTogQXJyYXk8YW55PiA9IFtcbiAgICB7XG4gICAgICBpZDogMCxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAyLFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMyxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDQsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA1LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNixcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDcsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA4LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogOSxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEwLFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTEsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMixcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEzLFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTQsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNSxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE2LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTcsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxOCxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE5LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgXTtcbiAgXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIGFwcC5vbignb3JpZW50YXRpb25DaGFuZ2VkJywgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdGFsSXRlbS5tYXAoaXRlbSA9PiB7XG4gICAgICBpdGVtLmJnQ29sb3IgPSB0aGlzLmdldFJhbmRvbUludCgpO1xuICAgICAgaXRlbS50aXRsZSA9ICdQbGFuICcgKyBpdGVtLmlkO1xuICAgICAgaXRlbS5jb2wgPSBpdGVtLmlkICUgMztcbiAgICAgIGl0ZW0ucm93ID0gTWF0aC5mbG9vcihpdGVtLmlkIC8gMyk7XG4gICAgfSk7XG4gICAgdGhpcy5pdGVtUm93cyA9IHRoaXMuZ2V0SXRlbVJvd3MoKTtcbiAgICBjb25zb2xlLmxvZygndG90YWxJdGVtOiAsIHRoaXMuaXRlbVJvd3M6ICcsIHRoaXMudG90YWxJdGVtLCB0aGlzLml0ZW1Sb3dzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9yaWVudGF0aW9uQ2hhbmdlZCA9IChldnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnT3JpZW50YXRpb24gY2hhbmdlZCAgITogJywgZXZ0KTtcbiAgfVxuXG4gIGdldEl0ZW1Sb3dzKCk6IGFueSB7XG4gICAgY29uc3Qgcm93cyA9IE1hdGguZmxvb3IodGhpcy50b3RhbEl0ZW0ubGVuZ3RoIC8gMyk7XG4gICAgbGV0IHJvd3NTdHJpbmcgPSAnYXV0byc7XG4gICAgZm9yKCBsZXQgaSA9IDA7IGkgPCByb3dzOyBpKyspIHtcbiAgICAgIHJvd3NTdHJpbmcgKz0gJyBhdXRvJztcbiAgICB9XG4gICAgcmV0dXJuIHJvd3NTdHJpbmc7XG4gIH1cbiAgXG4gIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgIGNvbnN0IHNpZGVEcmF3ZXIgPSA8UmFkU2lkZURyYXdlcj5hcHAuZ2V0Um9vdFZpZXcoKTtcbiAgICBzaWRlRHJhd2VyLnNob3dEcmF3ZXIoKTtcbiAgICBzaWRlRHJhd2VyLnJlc2V0TmF0aXZlVmlldygpO1xuICB9XG5cbiAgZ2V0UmFuZG9tSW50KCkge1xuICAgIHJldHVybiAnIycgKyBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDE2KS5zbGljZSgyLCA4KTtcbiAgfVxuXG5cbn0iXX0=