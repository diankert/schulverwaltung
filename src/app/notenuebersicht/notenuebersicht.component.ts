import {Component, Input, OnInit} from '@angular/core';
import {NotenuebersichService} from './notenuebersich.service';
import {UserService} from '../auth/user.service';

export interface Klausur {
  id?: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  bezeichnung: string;
  thema: string;
  max_punkte: string;
  datum: string;
}

@Component({
  selector: 'app-notenuebersicht',
  templateUrl: './notenuebersicht.component.html',
  styleUrls: ['./notenuebersicht.component.css']
})
export class NotenuebersichtComponent implements OnInit {
  displayedColumns: string[] = ['bezeichnung', 'thema', 'max_punkte', 'datum'];
  panelOpenState: boolean;
  giveDate = new Date();
  klausur: Klausur;

  constructor(private notenuebersichtService: NotenuebersichService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.notenuebersichtService.getNotenuebersicht(id)
          .subscribe(klausur => {
            if (!klausur) {
              console.error('FEHLER! ALARM!');
            } else {
              this.klausur = klausur
              console.log('NOTENÜBERSICHT: ',klausur)
            }
          });
      }
    })

  }

}
