var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", 'angular2/core', './components/common/tripsService', 'angular2/core', 'rxjs/add/operator/map'], function (require, exports, core_1, tripsService_1, core_2) {
    var AppComponent = (function () {
        function AppComponent(tripsService) {
            this.tripsService = tripsService;
            this.trips = [];
        }
        AppComponent.prototype.ngOnInit = function () {
            this.getTrips();
        };
        AppComponent.prototype.getTrips = function () {
            var _this = this;
            this.tripsService.fetchTrips()
                .map(function (r) { return r.json(); })
                .subscribe(function (data) { return _this.setTrips(data); }, function (err) { return console.log(err); });
        };
        AppComponent.prototype.setTrips = function (trips) {
            this.trips = trips;
        };
        AppComponent.prototype.selectTrip = function (trip) {
            this.selectedTrip = trip;
        };
        AppComponent.prototype.isSelectedChapter = function (trip) {
            if (trip === this.selectedTrip) {
                return true;
            }
            else {
                return false;
            }
        };
        AppComponent = __decorate([
            core_2.Component({
                selector: 'trip-advisor'
            }),
            core_2.View({
                styles: ["\n    .list-title { font-weight: bold; text-decoration: underline; }\n    .selected { background-color: #FF0000; }\n  "],
                templateUrl: 'app/views/home.html'
            }),
            __param(0, core_1.Inject(tripsService_1.TripsService))
        ], AppComponent);
        return AppComponent;
    })();
    exports.AppComponent = AppComponent;
});

//# sourceMappingURL=app.js.map
