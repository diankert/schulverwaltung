import {Component, Injectable, OnInit} from '@angular/core';
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
    this.userService.idChanged.subscribe(id => {
      this.id = id;
      if (id) {
        this.schuelerData.findSchueler(id).subscribe(foundSchueler => {
          if (!foundSchueler) {
            console.log("WIESO?")
          } else {
            this.schueler = foundSchueler;
            console.log(this.schueler);
          }
        });
      }
    });
  }

}

