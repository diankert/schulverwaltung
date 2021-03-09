import {Component, Injectable, OnInit} from '@angular/core';
import {TeilnehmerDataService, TeilnehmerData} from '../../services/teilnehmer-data.service';
import {UserService} from '../../auth/user.service';
import {Bild, BilderUserService} from '../../services/bilder-user.service';


@Component({
  selector: 'app-show-user',
  templateUrl: './benutzer-anzeigen.component.html',
  styleUrls: ['./benutzer-anzeigen.component.css']
})
export class BenutzerAnzeigen implements OnInit {
  id: string;
  schueler: TeilnehmerData;
  schuelerBild: Bild;
  constructor(private schuelerData: TeilnehmerDataService,
              private userService: UserService,
              private bilderService: BilderUserService) {}

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id;
      if (id) {
        this.schuelerData.findTeilnehmer(id).subscribe(foundSchueler => {
          if (!foundSchueler) {
            console.log("id? ", id)
          } else {
            this.schueler = foundSchueler;
          }
        });
        this.bilderService.findBild(id).subscribe(foundBild => {
          if (!foundBild) {
            console.log('id? ', id)
          } else {
            this.schuelerBild = foundBild;
          }
        });
      }
    });
  }

}

