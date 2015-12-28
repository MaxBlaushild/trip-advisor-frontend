import 'rxjs/add/operator/map';

import { Trip } from './models/trip';
import { Beat } from './models/beat';
import { Inject } from 'angular2/core';
import { TripsService } from './components/common/tripsService';
import { Component, View, OnInit } from 'angular2/core';

@Component({
  selector: 'trip-advisor'
})
@View({
    styles: [`
    .list-title { font-weight: bold; text-decoration: underline; }
    .selected { background-color: #FF0000; }
  `],
    templateUrl: 'app/views/home.html'
})

export class AppComponent implements OnInit {
  public selectedTrip: Trip;
  public trips: Trip[] = [];

  constructor(@Inject(TripsService) private tripsService: TripsService) {}

  private ngOnInit(){
    this.getTrips();
  }

  private getTrips(){
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

  public isSelectedChapter(trip: Trip) {
    if (trip === this.selectedTrip) {
      return true;
    } else {
      return false;
    }
  }
}
