import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  hide = true;
  username  = '';
  password  = '';

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {}

  routeToHeader() {
    this.userService.findUser(this.username, this.password).subscribe(foundUser => {
      //if (!foundUser || foundUser.length < 1) {
      //  alert("Keinen passenden User gefunden!")
      //} else {
      this.userService.type = foundUser.type
      this.userService.idChanged.next(foundUser.id);
      console.log('this.userService.type = foundUser.type: ', this.userService.type = foundUser.type)
      // if(this.userService[0].status == "admin")
      // {
      //   this.router.navigate( ['/', 'adminansicht'] );
      // }
      this.router.navigate( ['/', 'start'] );
      //}
    });
  }
}
