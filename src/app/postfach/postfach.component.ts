import { Component, OnInit } from '@angular/core';
import {KursUebersicht} from '../main/main.component';

export interface MailUebersicht {
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
  panelOpenState = false;
  displayedColumns: string[] = ['betreff', 'von', 'vom'];

  beispielMail: MailUebersicht = {
    betreff: 'WEB UNTERRICHT',
    von: 'HERR ICKLER',
    vom:  '21.10.2020',
  };
  beispielMailZwei: MailUebersicht = {
    betreff: 'BESCHEINIGUNG',
    von: 'HERR BEILER',
    vom:  '01.10.2020',
  };

  mail: MailUebersicht[] = [
    this.beispielMail,
    this.beispielMailZwei,
  ];
  ngOnInit(): void {
  }
  constructor() { }

}
