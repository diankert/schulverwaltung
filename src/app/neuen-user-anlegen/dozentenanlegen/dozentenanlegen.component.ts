
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

      vorname: new FormControl('Klaus'),
      nachname: new FormControl('Pütt'),
      geburtsdatum: new FormControl(new Date('1979-11-03')),
      strasse: new FormControl('Rotfichtenweg'),
      hausnummer: new FormControl('121'),
      email: new FormControl('klausi.mausi@meister.de'),
      telefon: new FormControl('02086931272'),
      stadt: new FormControl('Essen'),
      plz: new FormControl('45144'),
      qualifikation: new FormControl('SQL')
    });
  }
  onSubmit(): void {

}
}
