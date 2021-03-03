import {Component, Injectable, OnInit} from '@angular/core';
import {UserService} from '../auth/user.service';
import {SchuelerDataService, StudentData} from '../schueler-data.service';


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
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
