import { Component, OnInit } from '@angular/core';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {UserService} from '../auth/user.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-meine-daten',
  templateUrl: './meine-daten.component.html',
  styleUrls: ['./meine-daten.component.css']
})
export class MeineDatenComponent implements OnInit {
  id: string;
  schueler: StudentData;
  schulerDatenBearbeitenFormGroup: FormGroup;

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
    });
    this.schulerDatenBearbeitenFormGroup = new FormGroup({
      "vorname": new FormControl('Hans'),
      "nachname": new FormControl('Meiser'),
      "geburtsdatum": new FormControl(new Date('1987-11-03')),
      "strasse": new FormControl('Brunnenweg'),
      "hausnummer": new FormControl('21a'),
      "email": new FormControl('h.meiser@meister-meiser.de'),
      "telefon": new FormControl('02086931272'),
      "stadt": new FormControl('Essen'),
      "plz": new FormControl('45144')
    });
  }

  onSubmit() {

  }
}
