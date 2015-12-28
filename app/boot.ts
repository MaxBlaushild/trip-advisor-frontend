/// <reference path="../typings/tsd.d.ts" />

import { bootstrap } from 'angular2/platform/browser';
import { TripsService } from './components/common/tripsService';
import { HTTP_PROVIDERS } from 'angular2/http';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { AppComponent } from './app';

bootstrap(AppComponent, [TripsService, HTTP_PROVIDERS, ROUTER_PROVIDERS]);
