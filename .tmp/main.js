define(["require", "exports", 'angular2/platform/browser', './components/common/tripsService', 'angular2/http', './app'], function (require, exports, browser_1, tripsService_1, http_1, app_1) {
    browser_1.bootstrap(app_1.AppComponent, [tripsService_1.TripsService, http_1.HTTP_PROVIDERS]);
});

//# sourceMappingURL=main.js.map
