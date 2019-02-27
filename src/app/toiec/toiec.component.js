"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app = require("tns-core-modules/application");
var platform_1 = require("platform");
var ITEM_WIDTH_PERCENT = 0.33333;
var ToiecComponent = /** @class */ (function () {
    function ToiecComponent() {
        var _this = this;
        this.itemWidth = (platform_1.screen.mainScreen.widthDIPs / 3);
        this.itemHeight = this.itemWidth;
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
            _this.itemWidth = platform_1.screen.mainScreen.widthDIPs / 3;
            _this.itemHeight = _this.itemWidth;
        };
        app.on(app.orientationChangedEvent, this.onOrientationChanged);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9pZWMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidG9pZWMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELGtEQUFvRDtBQUVwRCxxQ0FBa0M7QUFFbEMsSUFBTSxrQkFBa0IsR0FBRyxPQUFPLENBQUM7QUFRbkM7SUEyRkU7UUFBQSxpQkFFQztRQTNGRCxjQUFTLEdBQVcsQ0FBQyxpQkFBTSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDdEQsZUFBVSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUM7UUFFcEMsY0FBUyxHQUFXLE1BQU0sQ0FBQztRQUMzQixhQUFRLEdBQVcsRUFBRSxDQUFDO1FBRXRCLGNBQVMsR0FBZTtZQUN0QjtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsRUFBRTthQUNaO1lBQ0Q7Z0JBQ0UsRUFBRSxFQUFFLENBQUM7Z0JBQ0wsT0FBTyxFQUFFLEVBQUU7YUFDWjtZQUNEO2dCQUNFLEVBQUUsRUFBRSxDQUFDO2dCQUNMLE9BQU8sRUFBRSxFQUFFO2FBQ1o7WUFDRDtnQkFDRSxFQUFFLEVBQUUsQ0FBQztnQkFDTCxPQUFPLEVBQUUsRUFBRTthQUNa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O0lBQ3RELENBQUM7SUFoSVUsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7U0FDdEMsQ0FBQzs7T0FFVyxjQUFjLENBbUkxQjtJQUFELHFCQUFDO0NBQUEsQUFuSUQsSUFtSUM7QUFuSVksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uJztcblxuaW1wb3J0IHsgc2NyZWVuIH0gZnJvbSAncGxhdGZvcm0nO1xuXG5jb25zdCBJVEVNX1dJRFRIX1BFUkNFTlQgPSAwLjMzMzMzO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdUb2llYycsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi90b2llYy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBUb2llY0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgaXRlbVdpZHRoOiBudW1iZXIgPSAoc2NyZWVuLm1haW5TY3JlZW4ud2lkdGhESVBzIC8gMyk7XG4gIGl0ZW1IZWlnaHQ6IG51bWJlciA9IHRoaXMuaXRlbVdpZHRoO1xuXG4gIGl0ZW1Db2xvcjogc3RyaW5nID0gJyM1NTUnO1xuICBpdGVtUm93czogc3RyaW5nID0gJyc7XG5cbiAgdG90YWxJdGVtOiBBcnJheTxhbnk+ID0gW1xuICAgIHtcbiAgICAgIGlkOiAwLFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMSxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDIsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAzLFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNCxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDUsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA2LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogNyxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDgsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiA5LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTAsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxMSxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDEyLFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTMsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNCxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE1LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTYsXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGlkOiAxNyxcbiAgICAgIGJnQ29sb3I6ICcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWQ6IDE4LFxuICAgICAgYmdDb2xvcjogJycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpZDogMTksXG4gICAgICBiZ0NvbG9yOiAnJyxcbiAgICB9LFxuICBdO1xuICBcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgYXBwLm9uKGFwcC5vcmllbnRhdGlvbkNoYW5nZWRFdmVudCwgdGhpcy5vbk9yaWVudGF0aW9uQ2hhbmdlZCk7XG4gIH1cblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnRvdGFsSXRlbS5tYXAoaXRlbSA9PiB7XG4gICAgICBpdGVtLmJnQ29sb3IgPSB0aGlzLmdldFJhbmRvbUludCgpO1xuICAgICAgaXRlbS50aXRsZSA9ICdQbGFuICcgKyBpdGVtLmlkO1xuICAgICAgaXRlbS5jb2wgPSBpdGVtLmlkICUgMztcbiAgICAgIGl0ZW0ucm93ID0gTWF0aC5mbG9vcihpdGVtLmlkIC8gMyk7XG4gICAgfSk7XG4gICAgdGhpcy5pdGVtUm93cyA9IHRoaXMuZ2V0SXRlbVJvd3MoKTtcbiAgICBjb25zb2xlLmxvZygndG90YWxJdGVtOiAsIHRoaXMuaXRlbVJvd3M6ICcsIHRoaXMudG90YWxJdGVtLCB0aGlzLml0ZW1Sb3dzKTtcbiAgfVxuXG4gIHB1YmxpYyBvbk9yaWVudGF0aW9uQ2hhbmdlZCA9IChldnQpID0+IHtcbiAgICBjb25zb2xlLmxvZygnT3JpZW50YXRpb24gY2hhbmdlZCAgITogJywgZXZ0KTtcbiAgICB0aGlzLml0ZW1XaWR0aCA9IHNjcmVlbi5tYWluU2NyZWVuLndpZHRoRElQcyAvIDM7XG4gICAgdGhpcy5pdGVtSGVpZ2h0ID0gdGhpcy5pdGVtV2lkdGg7XG4gIH1cblxuICBnZXRJdGVtUm93cygpOiBhbnkge1xuICAgIGNvbnN0IHJvd3MgPSBNYXRoLmZsb29yKHRoaXMudG90YWxJdGVtLmxlbmd0aCAvIDMpO1xuICAgIGxldCByb3dzU3RyaW5nID0gJ2F1dG8nO1xuICAgIGZvciggbGV0IGkgPSAwOyBpIDwgcm93czsgaSsrKSB7XG4gICAgICByb3dzU3RyaW5nICs9ICcgYXV0byc7XG4gICAgfVxuICAgIHJldHVybiByb3dzU3RyaW5nO1xuICB9XG4gIFxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG4gIH1cblxuICBnZXRSYW5kb21JbnQoKSB7XG4gICAgcmV0dXJuICcjJyArIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMTYpLnNsaWNlKDIsIDgpO1xuICB9XG5cblxufSJdfQ==