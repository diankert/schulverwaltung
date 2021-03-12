
import { FormControl, FormGroup} from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';



@Component({
  selector: 'app-dozentenanlegen',
  templateUrl: './dozentenanlegen.component.html',
  styleUrls: ['./dozentenanlegen.component.css']
})

export class DozentenanlegenComponent implements OnInit {
  dozentenAnlegenFormGroup: FormGroup;
  disabled = false;

  constructor() { }

  ngOnInit(): void {
    this.dozentenAnlegenFormGroup = new FormGroup({

      // Default Werte

      vorname: new FormControl('Hans'),
      nachname: new FormControl('Meiser'),
      geburtsdatum: new FormControl(new Date('1987-11-03')),
      strasse: new FormControl('Brunnenweg'),
      hausnummer: new FormControl('21a'),
      email: new FormControl('h.meiser@meister-meiser.de'),
      telefon: new FormControl('02086931272'),
      stadt: new FormControl('Essen'),
      plz: new FormControl('45144'),
      qualifikation: new FormControl('SQL')
    });
  }
  onSubmit(): void {

}
}
