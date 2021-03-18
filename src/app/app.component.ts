import {Component, Injectable} from '@angular/core';
import {LoginData, UserService} from './auth/user.service';
import {TeilnehmerDataService, TeilnehmerData} from './services/teilnehmer-data.service';
import {BehaviorSubject} from 'rxjs';
import {Bild, BilderUserService} from './services/bilder-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schulverwaltung';
  id: string;
  schueler: TeilnehmerData;
  toolbarShow = false;
  bildPath: string;

  constructor(private schuelerData: TeilnehmerDataService,
              private userService: UserService,
              private bilderService: BilderUserService) {}
  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;
      this.toolbarShow = !!id;
      this.bildPath = this.bilderService.bildFuerUser(id);
    });
  }

  onLogout() {
    this.userService.logout();
  }

}



