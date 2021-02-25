import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export interface KursUebersicht {
  kurs: string;
  dozent: string;
  start: string;
  ende: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  hiden = false;
  hidden = false;
  show = true;
  panelOpenState = false;
  giveDate = new Date();
  displayedColumns: string[] = ['kurs', 'dozent', 'start', 'ende'];

  beispielKurs: KursUebersicht = {
    kurs: 'WEB',
    dozent: 'HERR ICKLER',
    start:  '01.10.2020',
    ende:  '10.10.2020',
  };
  beispielKursZwei: KursUebersicht = {
    kurs: 'Datenbank SQL',
    dozent: 'HERR MORAGHEBI',
    start:  '01.02.2021',
    ende:  '20.02.2021',
  };

  kurse: KursUebersicht[] = [
    this.beispielKurs,
    this.beispielKursZwei,
  ];

  ngOnInit(): void {
  }

  constructor() {
  }

  usertoggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  mailtoggleBadgeVisibility() {
    this.hiden = !this.hiden;
  }


}
