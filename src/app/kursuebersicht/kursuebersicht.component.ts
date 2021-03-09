import {Component, OnInit} from '@angular/core';
import {KursuebersichtService} from './kursuebersicht.service';
import {UserService} from '../auth/user.service';

export interface Kurs {
  id?: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  start: string;
  ende: string;
  kosten_pro_teilnehmer?: string;
  kursbezeichnung_id: string;
  fachrichtung_id?: string;
  status_id?: string;
}

@Component({
  selector: 'app-kursuebersicht',
  templateUrl: './kursuebersicht.component.html',
  styleUrls: ['./kursuebersicht.component.css']
})
export class KursuebersichtComponent implements OnInit {
  displayedColumns: string[] = ['start', 'ende', 'kursbezeichnung_id','status_id'];
  panelOpenState: boolean;
  giveDate = new Date();
  kursUebersicht: Kurs[] = [];

  constructor(private kursuebersichtService: KursuebersichtService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.kursuebersichtService.getKursuebersicht(id)
          .subscribe(kursUebersicht => {
            if (!kursUebersicht) {
              console.error('FEHLER! ALARM!');
            } else {
              this.kursUebersicht = kursUebersicht.kurse
              console.log('Kursübersicht ', kursUebersicht)
            }
          });
      }
    })
  }

}
