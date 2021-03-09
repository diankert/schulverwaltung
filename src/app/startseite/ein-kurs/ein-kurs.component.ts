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

  displayedColumns: string[] = ['kurs', 'dozent', 'start', 'ende'];
  giveDate = new Date();
  kursUebersicht: Kurs[] = [];

  constructor(private kursuebersichtService: KursplanService,
              private userService: UserService) {
  }

  ngOnInit(): void {
  //   this.userService.idChanged.subscribe(id => {
  //     if (id) {
  //       this.kursuebersichtService.getKursuebersicht(id)
  //         .subscribe(kursUebersicht => {
  //           if (!kursUebersicht) {
  //             console.error('FEHLER! ALARM!');
  //           } else {
  //             this.kursUebersicht = kursUebersicht.kurse
  //           }
  //          });
  //     }
  //   })
  }
}
