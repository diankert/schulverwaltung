import {Component, OnInit} from '@angular/core';
import {KursplanService} from './kursplan.service';
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
              this.kursPlan = kursPlan
            }
          });
      }
    })
  }

}
