import { Component, OnInit } from '@angular/core';
import {UserService} from '../auth/user.service';
import {PostfachService} from './postfach.service';

export interface Mail {
  betreff: string;
  von: string;
  vom: string;
}

@Component({
  selector: 'app-postfach',
  templateUrl: './postfach.component.html',
  styleUrls: ['./postfach.component.css']
})
export class PostfachComponent implements OnInit {
  displayedColumns: string[] = ['betreff', 'von', 'vom'];
  panelOpenState: boolean;
  giveDate = new Date();
  postfachUebersicht: Mail[] = [];

  constructor(private postfachubersichtServie: PostfachService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.postfachubersichtServie.getPostfachuebersicht(this.userService.id)
      .subscribe(postfachUebersicht => {
        if (!postfachUebersicht) {
          console.error('FEHLER! ALARM!');
        } else {
          this.postfachUebersicht = postfachUebersicht.mail
        }
      });
  }

}
