/// <reference path="../../../typings/tsd.d.ts" />

import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class TripsService {

  constructor(@Inject(Http) private http: Http){}

  public fetchTrips(){
    return this.http.get("http://localhost:5000");
  }

}
