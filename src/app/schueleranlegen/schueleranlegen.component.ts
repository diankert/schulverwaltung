import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SchuelerDataService, StudentData} from '../services/schueler-data.service';
import {SchueleranlegenService} from './schueleranlegen.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-schueleranglegen',
  templateUrl: './schueleranlegen.component.html',
  styleUrls: ['./schueleranlegen.component.css']
})
export class SchueleranlegenComponent implements OnInit {
  schuelerAnlegenFormGroup: FormGroup;
  schueler: StudentData;

  constructor(private schuelerAnlegenServie: SchueleranlegenService,
              private schulerDataService: SchuelerDataService) { }

    ngOnInit(): void {
      this.schuelerAnlegenFormGroup = new FormGroup({
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
      const schuelerEins = {
        vorname: this.schuelerAnlegenFormGroup.controls.vorname.value,
        nachname: this.schuelerAnlegenFormGroup.controls.nachname.value,
        geburtsdatum: this.schuelerAnlegenFormGroup.controls.geburtsdatum.value,
        strasse: this.schuelerAnlegenFormGroup.controls.strasse.value,
        hausnummer: this.schuelerAnlegenFormGroup.controls.hausnummer.value,
        telefon: this.schuelerAnlegenFormGroup.controls.telefon.value,
        stadt: this.schuelerAnlegenFormGroup.controls.stadt.value,
        plz: this.schuelerAnlegenFormGroup.controls.plz.value,
        email: this.schuelerAnlegenFormGroup.controls.email.value,
      };
      this.schuelerAnlegenServie.addschueler(schuelerEins).subscribe(data => {
        console.log('data: ', data)
        console.log('schuelereins: ', schuelerEins)
      });
    }
  }

