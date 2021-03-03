import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {SchueleranlegenService} from './schueleranlegen.service';
import {FormControl, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-schueleranglegen',
  templateUrl: './schueleranglegen.component.html',
  styleUrls: ['./schueleranglegen.component.css']
})
export class SchueleranglegenComponent implements OnInit {
  schuelerAnlegenFormGroup: FormGroup;


  schueler: StudentData;

  constructor(private schuelerAnlegenServie: SchueleranlegenService,
              private schulerDataService: SchuelerDataService) { }

  ngOnInit(): void {
    this.schuelerAnlegenFormGroup = new FormGroup({
      "vorname": new FormControl('Hans'),
      "nachname": new FormControl('Meiser'),
      "strasse": new FormControl('Brunnenweg'),
      "hausnr": new FormControl('21a'),
      "email": new FormControl('h.meiser@meister-meiser.de'),
      "tele": new FormControl('02086931272')
    });
  }

  // refreshPeople() {
  //
  //   this.schuelerAnlegenServie.getSchuelerData()
  //     .subscribe(data => {
  //       console.log(data)
  //       this.einSchueler=data;
  //     })
  // }


  onSubmit() {
    const schuelerEins = {
      firstname: this.schuelerAnlegenFormGroup.controls.vorname.value,
      lastname: this.schuelerAnlegenFormGroup.controls.nachname.value,
      strasse: this.schuelerAnlegenFormGroup.controls.strasse.value,
      hausnr: this.schuelerAnlegenFormGroup.controls.hausnr.value,
      tele: this.schuelerAnlegenFormGroup.controls.tele.value,
      email: this.schuelerAnlegenFormGroup.controls.email.value
    };
    this.schuelerAnlegenServie.addschueler(schuelerEins).subscribe(data => {
      console.log('data: ', data)
      // this.refreshPeople();
    });
  }
}
