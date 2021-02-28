import {Component} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export  class HeaderComponent {
  hidden = false;
  constructor() { }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

}
