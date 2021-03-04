import {Component, Input, OnInit} from '@angular/core';
import {Kurs} from '../kursuebersicht/kursuebersicht.component';
import {NotenUebersicht, NotenuebersichService} from './notenuebersich.service';
import {UserService} from '../auth/user.service';

export interface Klasur {
  bezeichnung: string;
  thema: string;
  maxPunkte: string;
  datum: string;
  pruefungsart?: string;
}

@Component({
  selector: 'app-notenuebersicht',
  templateUrl: './notenuebersicht.component.html',
  styleUrls: ['./notenuebersicht.component.css']
})
export class NotenuebersichtComponent implements OnInit {
  // displayedColumns: string[] = ['kurs', 'dozent', 'datum', 'dokument'];
  displayedColumns: string[] = ['bezeichnung', 'thema', 'maxPunkte', 'datum'];
  panelOpenState: boolean;
  giveDate = new Date();
  notenUebersicht: Klasur[] = [];

  constructor(private notenuebersichtService: NotenuebersichService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.notenuebersichtService.getNotenuebersicht(id)
          .subscribe(notenUebersicht => {
            if (!notenUebersicht) {
              console.error('FEHLER! ALARM!');
            } else {
              this.notenUebersicht = notenUebersicht.klasur
            }
          });
      }
    })

  }

}
