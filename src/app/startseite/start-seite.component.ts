import {Component, Injectable, OnInit} from '@angular/core';
import {UserService} from '../auth/user.service';
import {SchuelerDataService, StudentData} from '../services/schueler-data.service';


@Component({
  selector: 'app-hello',
  templateUrl: './start-seite.component.html',
  styleUrls: ['./start-seite.component.css']
})
export class StartSeiteComponent implements OnInit {
  id: string;
  schueler: StudentData;

  constructor(private schuelerData: SchuelerDataService,
              private userService: UserService) { }

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;
    })
    this.schuelerData.findSchueler(this.id).subscribe(foundSchueler => {
      if (!foundSchueler) {
        console.log("WIESO?")
      } else {
        this.schueler = foundSchueler;
        console.log(this.schueler);
      }
    });}


}
