import { Component} from '@angular/core';
import {UserService} from './auth/user.service';
import {SchuelerDataService, StudentData} from './schueler-data.service';

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
    this.id = this.userService.id;
    // this.schuelerData.findSchueler(this.id).subscribe(foundSchueler => {
    //   if (!foundSchueler) {
    //     console.log("WIESO?")
    //   } else {
    //     this.schueler = foundSchueler;
    //     console.log(this.schueler);
    //     console.log('BEEP')
    //   }
    // });
    this.toolbarShow = !!this.userService.id;
  }

  onLogout() {
    this.userService.logout();
  }

}



