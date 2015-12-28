import { bootstrap } from 'angular2/platform/browser';
import { TripsService } from './components/common/tripsService';
import { HTTP_PROVIDERS } from 'angular2/http';
import { AppComponent } from './app';

bootstrap(AppComponent, [TripsService, HTTP_PROVIDERS]);
