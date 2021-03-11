import { Component, OnInit } from '@angular/core';
import {KursplanService} from '../../kursplan/kursplan.service';
import {UserService} from '../../auth/user.service';
import {Kurs} from '../../kursplan/kursplan.component';

@Component({
  selector: 'app-ein-kurs',
  templateUrl: './ein-kurs.component.html',
  styleUrls: ['./ein-kurs.component.css']
})
export class EinKursComponent implements OnInit {
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
