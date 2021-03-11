import {Component, Injectable, OnInit} from '@angular/core';
import {UserService} from '../auth/user.service';
import {TeilnehmerDataService, TeilnehmerData} from '../services/teilnehmer-data.service';


@Component({
  selector: 'app-hello',
  templateUrl: './start-seite.component.html',
  styleUrls: ['./start-seite.component.css']
})
export class StartSeiteComponent implements OnInit {
  id: string;
  schueler: TeilnehmerData;

  constructor(private schuelerData: TeilnehmerDataService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;
    })
    this.schuelerData.findTeilnehmer(this.id).subscribe(foundSchueler => {
      if (!foundSchueler) {
        console.log("Foundschueler KEINENSCHUELER GEFUNDEN ", foundSchueler)
      } else {
        this.schueler = foundSchueler;
      }
    });}


}
