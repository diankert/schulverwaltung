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

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit(): void {}

  routeToHeader() {
    this.userService.findUser(this.username).subscribe(foundUser => {
      if (!foundUser || foundUser.length < 1) {
        alert("Keinen passenden User gefunden!")
      } else {
        this.userService.id = foundUser[0].id;
        console.log('BOP', foundUser[0].id)
        // if(this.userService[0].status == "admin")
        // {
        //   this.router.navigate( ['/', 'adminansicht'] );
        // }
        this.router.navigate( ['/', 'hallo'] );
      }
    });
  }
}
