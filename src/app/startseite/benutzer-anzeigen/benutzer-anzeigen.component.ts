import { Component, Injectable, OnInit } from '@angular/core'
import {
  TeilnehmerDataService,
  TeilnehmerData,
} from '../../services/teilnehmer-data.service'
import {
  DozentDataService,
  DozentData,
} from '../../services/dozent-data.service'
import {
  VerwaltungsmitarbeiterDataService,
  VerwaltungsmitarbeiterData,
} from '../../services/verwaltungsmitarbeiter-data.service'
import { UserService } from '../../auth/user.service'
import { Bild, BilderUserService } from '../../services/bilder-user.service'

@Component({
  selector: 'app-show-user',
  templateUrl: './benutzer-anzeigen.component.html',
  styleUrls: ['./benutzer-anzeigen.component.css'],
})
export class BenutzerAnzeigen implements OnInit {
  id: string
  schueler: TeilnehmerData
  dozent: DozentData
  verwaltungsmitarbeiter: VerwaltungsmitarbeiterData
  schuelerBild: Bild
  dozentBild: Bild
  verwaltungsmitarbeiterBild: Bild
  bildPath: string;

  constructor(
    private schuelerData: TeilnehmerDataService,
    private dozentData: DozentDataService,
    private verwaltungsmitarbeiterData: VerwaltungsmitarbeiterDataService,
    public userService: UserService,
    private bilderService: BilderUserService,
  ) {}

  ngOnInit(): void {
    if (this.userService.type == 'teilnehmer') {
      this.userService.idChanged.subscribe((id) => {
        this.id = id
        this.schuelerData.findTeilnehmer(id).subscribe((foundSchueler) => {
          if (!foundSchueler) {
            console.log('id? ', id)
          } else {
            this.schueler = foundSchueler
          }
        })
        this.bildPath = this.bilderService.bildFuerUser(id);
      })
    } else if(this.userService.type == 'dozent') {
      this.userService.idChanged.subscribe((id) => {
        this.id = id
        this.dozentData.findDozent(id).subscribe((foundDozent) => {
          if (!foundDozent) {
            console.log('id? ', id)
          } else {
            this.dozent = foundDozent
            this.bildPath = this.bilderService.bildFuerUser(id);
          }
        })
      })
    } else if(this.userService.type == 'verwaltungsmitarbeiter') {
      this.userService.idChanged.subscribe((id) => {
        this.id = id
        this.verwaltungsmitarbeiterData.findVerwaltungsmitarbeiter(id).subscribe((foundVerwaltungsmitarbeiter) => {
          if (!foundVerwaltungsmitarbeiter) {
            console.log('id? ', id)
          } else {
            this.verwaltungsmitarbeiter = foundVerwaltungsmitarbeiter
          }
        })
        this.bildPath = this.bilderService.bildFuerUser(id);
      })
    }
  }
}
