import {Component, Injectable} from '@angular/core';
import {UserService} from './auth/user.service';
import {SchuelerDataService, StudentData} from './schueler-data.service';
import {BehaviorSubject} from 'rxjs';
import {Bild, BilderUserService} from './bilder-user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'schulverwaltung';
  id: string;
  schueler: StudentData;
  toolbarShow = false;
  schuelerBild: Bild;


  constructor(private schuelerData: SchuelerDataService,
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
        this.bilderService.findBilder(id).subscribe(foundBild => {
          if (!foundBild) {
            console.log('id? ', id)
          } else {
            this.schuelerBild = foundBild;
          }
        });
      }
    });
  }

  onLogout() {
    this.userService.logout();
  }

}



