import {Component, Injectable} from '@angular/core';
import {UserService} from './auth/user.service';
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
  schuelerBild: Bild;


  constructor(private schuelerData: TeilnehmerDataService,
              private userService: UserService,
              private bilderService: BilderUserService) {}
  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;
      this.toolbarShow = !!id;
    });
    this.userService.idChanged.subscribe(id => {
      this.id = id;
      if (id) {
        this.bilderService.findBild(id).subscribe(foundBild => {
          if (!foundBild) {
            console.log('id? ', id)
          } else {
            this.schuelerBild = foundBild;
            console.log(this.schuelerBild)
          }
        });
      }
    });
  }

  onLogout() {
    this.userService.logout();
  }

}



