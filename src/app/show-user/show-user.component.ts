import {Component, OnInit} from '@angular/core';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {UserService} from '../auth/user.service';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  id: string;
  schueler: StudentData;

  constructor(private schuelerData: SchuelerDataService,
              private userService: UserService) {}

  ngOnInit(): void {
    this.id = this.userService.id;
    this.schuelerData.findSchueler(this.id).subscribe(foundSchueler => {
      if (!foundSchueler) {
        console.log("WIESO?")
      } else {
        this.schueler = foundSchueler;
        console.log(this.schueler);
      }
    });
  }

  onLogout() {
    this.userService.logout();
  }
}

