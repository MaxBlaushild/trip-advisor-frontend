import { Injectable, Inject, OnInit } from 'angular2/core';
import { Http } from 'angular2/http';
import { SessionService } from './sessionService';

@Injectable()
export class UserService implements OnInit {
    public funnyName: string;

    constructor( @Inject(SessionService) private sessionService: SessionService) { }

    ngOnInit(){
      this.createFunnyName();
    }

    private createFunnyName(){
      this.funnyName = "SlappyMcSlapperson";
    }

}
