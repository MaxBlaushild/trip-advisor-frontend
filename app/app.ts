/// <reference path="../typings/tsd.d.ts" />

import { Component, Inject } from 'angular2/core';
import { HomepageComponent } from './components/homepage/homepage';
import { MenuWidgetComponent } from './components/menuWidget/menuWidget';

import { RouteConfig, ROUTER_DIRECTIVES } from 'angular2/router';


@Component({
  selector: 'trip-advisor',
  templateUrl: 'layout.html',
  directives: [ROUTER_DIRECTIVES, MenuWidgetComponent]
})

@RouteConfig([
  { path: '/', name: 'Homepage', component: HomepageComponent, useAsDefault: true }
])

export class AppComponent {}
