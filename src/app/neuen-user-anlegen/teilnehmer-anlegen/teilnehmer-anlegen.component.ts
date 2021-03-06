import {Component, OnInit} from '@angular/core';
import {TeilnehmerData, TeilnehmerDataService} from '../../services/teilnehmer-data.service';
import {FormControl, FormGroup} from '@angular/forms';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-teilnehmer-anlegen',
  templateUrl: './teilnehmer-anlegen.component.html',
  styleUrls: ['./teilnehmer-anlegen.component.css']
})
export class TeilnehmerAnlegenComponent implements OnInit {
  teilnehmerAnlegenFormGroup: FormGroup;
  teilnehmer: TeilnehmerData;
  disabled: false;
  vorname = '';
  email = '';
  nachname = '';
  gebdate ='';
  strasse = '';
  hsnr = '';
  plz = '';
  tel = '';

  constructor(private teilnehmerDataService: TeilnehmerDataService) { }

  ngOnInit(): void {
    this.teilnehmerAnlegenFormGroup = new FormGroup({
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
    const rawDate: Date = this.teilnehmerAnlegenFormGroup.controls.geburtsdatum.value;
    const isoDate: string = formatDate(rawDate, 'YYYY-MM-dd', 'de')
    const neuerTeilnehmer = {
      vorname: this.teilnehmerAnlegenFormGroup.controls.vorname.value,
      nachname: this.teilnehmerAnlegenFormGroup.controls.nachname.value,
      geburtsdatum: isoDate,
      strasse: this.teilnehmerAnlegenFormGroup.controls.strasse.value,
      hausnummer: this.teilnehmerAnlegenFormGroup.controls.hausnummer.value,
      telefon: this.teilnehmerAnlegenFormGroup.controls.telefon.value,
      stadt: this.teilnehmerAnlegenFormGroup.controls.stadt.value,
      plz: this.teilnehmerAnlegenFormGroup.controls.plz.value,
      email: this.teilnehmerAnlegenFormGroup.controls.email.value,
    };
    this.teilnehmerDataService.addTeilnehmer(neuerTeilnehmer).subscribe();
    console.log('NEUER TEILNEHMER, ',neuerTeilnehmer)
    this.teilnehmerAnlegenFormGroup.reset();
  }
}

