import {Component, Injectable} from '@angular/core';
import {UserService} from './auth/user.service';
import {SchuelerDataService, StudentData} from './schueler-data.service';
import {BehaviorSubject} from 'rxjs';

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

  constructor(private schuelerData: SchuelerDataService,
              private userService: UserService) {}
  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;
      this.toolbarShow = !!id;
    });
  }

  onLogout() {
    this.userService.logout();
  }

}



