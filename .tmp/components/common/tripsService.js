var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
define(["require", "exports", 'angular2/core', 'angular2/http'], function (require, exports, core_1, http_1) {
    var TripsService = (function () {
        function TripsService(http) {
            this.http = http;
        }
        TripsService.prototype.fetchTrips = function () {
            return this.http.get("http://localhost:5000");
        };
        TripsService = __decorate([
            core_1.Injectable(),
            __param(0, core_1.Inject(http_1.Http))
        ], TripsService);
        return TripsService;
    })();
    exports.TripsService = TripsService;
});

//# sourceMappingURL=tripsService.js.map
