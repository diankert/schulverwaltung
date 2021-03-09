import {Component, Injectable, OnInit} from '@angular/core';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {UserService} from '../auth/user.service';
import {Bild, BilderUserService} from '../bilder-user.service';


@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {
  id: string;
  schueler: StudentData;
  schuelerBild: Bild;
  constructor(private schuelerData: SchuelerDataService,
              private userService: UserService,
              private bilderServie: BilderUserService) {}

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id;
      if (id) {
        this.schuelerData.findSchueler(id).subscribe(foundSchueler => {
          if (!foundSchueler) {
            console.log("id? ", id)
          } else {
            this.schueler = foundSchueler;
          }
        });
      }
    });
    this.userService.idChanged.subscribe(id => {
      this.id = id;
      if (id) {
        this.bilderServie.findBilder(id).subscribe(foundBild => {
          if (!foundBild) {
            console.log('id? ', id)
          } else {
            this.schuelerBild = foundBild;
            console.log('THIS.SCHUELERBILD',this.schuelerBild)
          }
        });
      }
    });
  }

}

