import { FormControl, FormGroup} from '@angular/forms';
import { Component, OnInit, Injectable } from '@angular/core';
import {DozentData, DozentDataService} from "../../services/dozent-data.service";
import {formatDate} from '@angular/common';

@Component({
  selector: 'app-dozentenanlegen',
  templateUrl: './dozentenanlegen.component.html',
  styleUrls: ['./dozentenanlegen.component.css']
})
export class DozentenanlegenComponent implements OnInit {
  dozentenAnlegenFormGroup: FormGroup;
  dozent: DozentData;
  disabled = false;

  constructor(private dozentDataService: DozentDataService) { }

  ngOnInit(): void {
    this.dozentenAnlegenFormGroup = new FormGroup({
      // Default Werte

      vorname: new FormControl(''),
      nachname: new FormControl(''),
      // geburtsdatum: new FormControl('yyyy-mm-dd'),
      geburtsdatum: new FormControl(new Date('')),
      strasse: new FormControl(''),
      hausnummer: new FormControl(''),
      email: new FormControl(''),
      telefon: new FormControl(''),
      stadt: new FormControl(''),
      plz: new FormControl(''),
      // qualifikation: new FormControl('SQL')
    });
  }
  onSubmit(): void {
    const rawDate: Date = this.dozentenAnlegenFormGroup.controls.geburtsdatum.value;
    const isoDate: string = formatDate(rawDate, 'YYYY-MM-dd', 'de')
    const neuerDozent = {
      vorname: this.dozentenAnlegenFormGroup.controls.vorname.value,
      nachname: this.dozentenAnlegenFormGroup.controls.nachname.value,
      geburtsdatum: isoDate,
      strasse: this.dozentenAnlegenFormGroup.controls.strasse.value,
      hausnummer: this.dozentenAnlegenFormGroup.controls.hausnummer.value,
      telefon: this.dozentenAnlegenFormGroup.controls.telefon.value,
      stadt: this.dozentenAnlegenFormGroup.controls.stadt.value,
      plz: this.dozentenAnlegenFormGroup.controls.plz.value,
      email: this.dozentenAnlegenFormGroup.controls.email.value,
    };
    this.dozentDataService.addDozent(neuerDozent).subscribe();
    console.log('NEUER DOZENT, ',neuerDozent)
    this.dozentenAnlegenFormGroup.reset();
  }
}
