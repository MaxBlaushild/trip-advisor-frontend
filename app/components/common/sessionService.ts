import { Injectable, Inject } from 'angular2/core';
import { Http } from 'angular2/http';

@Injectable()
export class SessionService {

  constructor(@Inject(Http) private http: Http){}

}
