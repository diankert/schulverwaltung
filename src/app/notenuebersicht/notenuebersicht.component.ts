import {Component, Input, OnInit} from '@angular/core';
import {NotenuebersichService} from './notenuebersich.service';
import {UserService} from '../auth/user.service';

export interface Pruefung {
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
  pruefungsUebersicht: Pruefung[] = [];

  constructor(private notenuebersichtService: NotenuebersichService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.notenuebersichtService.getPruefungVonSchueler(id).subscribe(pruefungen => {
          this.pruefungsUebersicht = pruefungen;
        });
        // this.notenuebersichtService.getAllNotenuebersicht(id)
        //   .subscribe(pruefungsUebersicht => {
        //     if (!pruefungsUebersicht) {
        //       console.error('FEHLER! ALARM!');
        //     } else {
        //       this.pruefungsUebersicht = pruefungsUebersicht.pruefung
        //       console.log('Prüfungsübersicht: ',this.pruefungsUebersicht)
        //     }
        //   });
      }
    })

  }

}
