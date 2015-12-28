import { Component } from 'angular2/core';
import { HomepageComponent } from './components/homepage/homepage';
import { RouteConfig, Router, ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
  selector: 'trip-advisor',
  template: '<router-outlet></router-outlet>',
  directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
  { path: '/', name: 'Homepage', component: HomepageComponent, useAsDefault: true}
])

export class AppComponent {}
