import { Component, OnInit } from '@angular/core';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {UserService} from '../auth/user.service';

@Component({
  selector: 'app-meine-daten',
  templateUrl: './meine-daten.component.html',
  styleUrls: ['./meine-daten.component.css']
})
export class MeineDatenComponent implements OnInit {
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
