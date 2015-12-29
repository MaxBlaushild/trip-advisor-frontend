import { Component } from 'angular2/core';

@Component({
    selector: 'menu-widget',
    templateUrl: './components/menuWidget/menuWidget.html',
    styleUrls: ['./components/menuWidget/menuWidget.css']
})

export class MenuWidgetComponent {
  private isOpen: boolean = false;

  public toggleMenuOpeness(){
    this.isOpen = !this.isOpen;
  }

  public isMenuOpen(){
    return this.isOpen;
  }
}
