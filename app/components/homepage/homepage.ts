import 'rxjs/add/operator/map';

import { Trip } from '../../models/trip';
import { Beat } from '../../models/beat';
import { Inject } from 'angular2/core';
import { TripsService } from '../common/tripsService';
import { Component, View, OnInit } from 'angular2/core';

@Component({
    selector: 'homepage'
})

@View({
  styleUrls: ['./components/homepage/homepage.css'],
  templateUrl: './components/homepage/homepage.html'
})

export class HomepageComponent implements OnInit {
  public selectedTrip: Trip;
  public trips: Trip[] = [];

  constructor( @Inject(TripsService) private tripsService: TripsService) { }

  ngOnInit() {
    this.getTrips();
  }

  private getTrips() {
    this.tripsService.fetchTrips()
      .map(r => r.json())
      .subscribe(
      data => this.setTrips(data),
      err => console.log(err)
    );
  }

  private setTrips(trips: Trip[]) {
      this.trips = trips;
  }

  public selectTrip(trip: Trip) {
      this.selectedTrip = trip;
  }

  public isSelectedTrip(trip: Trip) {
    if (trip === this.selectedTrip) {
        return true;
    } else {
        return false;
    }
  }
}
