import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  mailHidden = false;
  userHidden = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  @Input() usertoggleBadgeVisibility() {
    this.userHidden = !this.userHidden;
  }

  @Input() mailtoggleBadgeVisibility() {
    this.mailHidden = !this.mailHidden;
  }
}
