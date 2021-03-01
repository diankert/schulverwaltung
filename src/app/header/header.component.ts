import {Component} from '@angular/core';
import {UserService} from '../auth/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export  class HeaderComponent {
  hidden = false;
  constructor( private userService: UserService) { }

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  onLogout() {
    this.userService.logout();
  }


}
