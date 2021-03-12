import {Component, OnInit} from '@angular/core';
import {UserService} from '../auth/user.service';
import {Wochenbericht, WochenberichtVorlageService} from '../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {Pruefung, PruefungsuebersichtService} from '../pruefungsuebersicht/pruefungsuebersicht.service';

@Component({
  selector: 'app-wochenberichte-von-user',
  templateUrl: './wochenberichte-von-user.component.html',
  styleUrls: ['./wochenberichte-von-user.component.css']
})
export class WochenberichteVonUserComponent implements OnInit {
wocheneberichtUser: Wochenbericht[] = []
  displayedColumns: string[] = ['id', 'deletion_date', 'teilnehmer_id' ];
constructor(private wochenberichtService: WochenberichtVorlageService,
  private userService: UserService) {}

ngOnInit(): void {
  this.userService.idChanged.subscribe(id => {
    if (id) {
      this.wochenberichtService.getAllWochenberichteVonUser(id).subscribe(wochenberichte => {
        console.log(wochenberichte)
        this.wocheneberichtUser = wochenberichte;
      });
    }
  })

}

  onItemSelect(id: string) {
    console.log('id clicked:', id)
  }
}
