import {Component, Input, OnInit} from '@angular/core';
import {Kurs} from '../kursuebersicht/kursuebersicht.component';

export interface NotenUebersicht {
  kurs: string;
  dozent: string;
  datum: string;
  dokument: string;
}

@Component({
  selector: 'app-notenuebersicht',
  templateUrl: './notenuebersicht.component.html',
  styleUrls: ['./notenuebersicht.component.css']
})
export class NotenuebersichtComponent implements OnInit {
  displayedColumns: string[] = ['kurs', 'dozent', 'datum', 'dokument'];
  panelOpenState: boolean;
  giveDate = new Date();

  beispielNote: NotenUebersicht = {
    kurs: 'WEB',
    dozent: 'HERR ICKLER',
    datum:  '01.10.2020',
    dokument:  'WEB_KLASUR_DIANAPOLINSKI',
  };
  beispielNoteZwei: NotenUebersicht = {
    kurs: 'MATHEMATIK',
    dozent: 'HERR WALD',
    datum:  '01.05.2021',
    dokument:  'MATHE_KLASUR_DIANAPOLINSKI',
  };
  noten: NotenUebersicht[] = [
    this.beispielNote,
    this.beispielNoteZwei,
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
