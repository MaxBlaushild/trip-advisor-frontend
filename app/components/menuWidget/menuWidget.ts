/// <reference path="../../../typings/tsd.d.ts" />

import { Component } from 'angular2/core';
import { CORE_DIRECTIVES } from 'angular2/common';
import { DROPDOWN_DIRECTIVES } from 'ng2-bootstrap';

@Component({
    selector: 'menu-widget',
    directives: [DROPDOWN_DIRECTIVES, CORE_DIRECTIVES],
    templateUrl: './components/menuWidget/menuWidget.html',
    styleUrls: ['./components/menuWidget/menuWidget.css']
})

export class MenuWidgetComponent {
    private status: { isopen: boolean } = { isopen: false };

    private toggleDropdown($event: MouseEvent): void {
        $event.preventDefault();
        $event.stopPropagation();
        this.status.isopen = !this.status.isopen;
    }
}
