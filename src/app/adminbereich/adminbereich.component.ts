import { Component, OnInit } from '@angular/core';
import {adminbereichService} from "./adminbereich.service";
import {TeilnehmerData} from "../services/teilnehmer-data.service";

export interface Dozent {
  id?: string;
  vorname?: string;
  nachname?: string;
  strasse?: string;
  hausnummer?: string;
  plz_id?: string;
  telefon?: string;
  email?: string;
  geburtsdatum?: Date;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
}

export interface Teilnehmer {
  id?: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  vorname?: string;
  nachname?: string;
  strasse?: string;
  hausnummer?: string;
  plz?: string;
  stadt?: string;
  telefon?: string;
  email?: string;
  geburtsdatum?: Date;

}

export interface Verwaltung {
  id?: string;
  vorname?: string;
  nachname?: string;
  strasse?: string;
  hausnummer?: string;
  plz_id?: string;
  telefon?: string;
  email?: string;
  geburtsdatum?: Date;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;

}

@Component({
  selector: 'app-adminbereich',
  templateUrl: './adminbereich.component.html',
  styleUrls: ['./adminbereich.component.css']
})

export class AdminbereichComponent implements OnInit {
  displayedColumns: string[] = ['vorname', 'nachname'];
  dozentlist: Dozent[] = [];
  teilnehmerlist: Teilnehmer[] = [];
  verwaltunglist: Verwaltung[] = [];

  constructor(private adminbereichService: adminbereichService) { }


  ngOnInit(): void {
    /* Dozenten */

    this.adminbereichService.getDozent()
      .subscribe(dozentlist => {
        if (!dozentlist) {
          console.error('FEHLER! ALARM!');
        } else {
          this.dozentlist = dozentlist;
          for (const dozent of dozentlist) {
            const vornamedozent = new String(dozent.vorname);
            const nachnamedozent = new String(dozent.nachname);
          }
        }
      });

    /* Teilnehmer */
    this.adminbereichService.getTeilnehmer()
      .subscribe(teilnehmerlist => {
        if (!teilnehmerlist) {
          console.error('FEHLER! ALARM!');
        } else {
          this.teilnehmerlist = teilnehmerlist;
          console.log(teilnehmerlist)
          for (const teilnehmer of teilnehmerlist) {
            const vornameteilnehmer = new String(teilnehmer.vorname);
            const nachnameteilnehmer = new String(teilnehmer.nachname);
          }
        }
      });

    /* Verwaltung */
    this.adminbereichService.getVerwaltung()
      .subscribe(verwaltunglist => {
        if (!verwaltunglist) {
          console.error('FEHLER! ALARM!');
        } else {
          this.verwaltunglist = verwaltunglist;
          for (const verwaltung of verwaltunglist) {
            const vornameverwaltung = new String(verwaltung.vorname);
            const nachnameverwaltung = new String(verwaltung.nachname);
          }
        }
      });
  }
}
