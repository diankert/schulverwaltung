import {Component, OnInit} from '@angular/core';
import {UserService} from '../auth/user.service';
import {PruefungsuebersichtService, Pruefung} from './pruefungsuebersicht.service';

@Component({
  selector: 'app-pruefungsuebersicht',
  templateUrl: './pruefungsuebersicht.component.html',
  styleUrls: ['./pruefungsuebersicht.component.css']
})
export class PruefungsuebersichtComponent implements OnInit {
  displayedColumns: string[] = ['bezeichnung', 'thema', 'max_punkte', 'datum'];
  pruefungsUebersicht: Pruefung[] = [];

  constructor(private notenuebersichtService: PruefungsuebersichtService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      if (id) {
        this.notenuebersichtService.getPruefungVonSchueler(id).subscribe(pruefungen => {
          this.pruefungsUebersicht = pruefungen;
          // console.log('prüfung: ', this.pruefungsUebersicht)
        });
      }
    })

  }

}
