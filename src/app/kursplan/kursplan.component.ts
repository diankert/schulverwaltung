import {Component, OnInit} from '@angular/core';
import {KursplanService} from './kursplan.service';
import {UserService} from '../auth/user.service';

export interface Kurs {
  id?: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  start: Date;
  ende: string;
  kosten_pro_teilnehmer?: string;
  bezeichnung: string;
  fachrichtung_id?: string;
  status_id?: string;
}

@Component({
  selector: 'app-kursplan',
  templateUrl: './kursplan.component.html',
  styleUrls: ['./kursplan.component.css']
})
export class KursplanComponent implements OnInit {
  displayedColumns: string[] = ['bezeichnung', 'start', 'ende'];
  kursPlan: Kurs[] = [];

  constructor(private kursplanService: KursplanService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.kursplanService.getKursplan()
          .subscribe(kursPlan => {
            if (!kursPlan) {
              console.error('FEHLER! ALARM!');
            } else {
              this.kursPlan = kursPlan;
              const filteredKursPlan = []
              for (const kurs of kursPlan) {
                const startKurs = new Date(kurs.start);
                console.log("START KURS: ", startKurs.getMonth())
                const endeKurs = new Date(kurs.ende);
                console.log("ENDE KURS: ", endeKurs.getMonth())
                if (startKurs.getMonth() <= 2 && endeKurs.getMonth() >= 2) {
                  console.log('BEHALTEN WIR!')
                  filteredKursPlan.push({...kurs});
                }
              }
              console.log(filteredKursPlan)
              console.log(kursPlan)
            }
          });
      }
    })
  }

}
