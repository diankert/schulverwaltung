import {Component, OnInit} from '@angular/core';
import {KursuebersichtService} from './kursuebersicht.service';
import {UserService} from '../auth/user.service';

export interface Kurs {
  kurs: string;
  dozent: string;
  start: string;
  ende: string;
}

@Component({
  selector: 'app-kursuebersicht',
  templateUrl: './kursuebersicht.component.html',
  styleUrls: ['./kursuebersicht.component.css']
})
export class KursuebersichtComponent implements OnInit {
  displayedColumns: string[] = ['kurs', 'dozent', 'start', 'ende'];
  panelOpenState: boolean;
  giveDate = new Date();

  kursUebersicht: Kurs[] = [];

  constructor(private kursuebersichtService: KursuebersichtService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.kursuebersichtService.getKursuebersicht(this.userService.id)
      .subscribe(kursUebersicht => {
        if (!kursUebersicht) {
          console.error('FEHLER! ALARM!');
        } else {
          this.kursUebersicht = kursUebersicht.kurse
        }
      });
  }

}
