import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl, FormGroup} from '@angular/forms';
import {CalendarConfig, DayC} from 'material-calendar';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {Kurs} from '../kursuebersicht/kursuebersicht.component';
import {UserService} from '../auth/user.service';

export interface Wochenbericht {
  id?: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  bezeichnung: string;
  thema: string;
  max_punkte: string;
  datum: string;
}
@Component({
  selector: 'app-wochenbericht',
  templateUrl: './wochenbericht.component.html',
  styleUrls: ['./wochenbericht.component.css']
})
export class WochenberichtComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  step = 0;
  wochenberichtFormGroup: FormGroup;
  panelOpenState = false;
  kurs: Kurs;
  schueler: StudentData;
  id: string;
  giveDate: Date;

  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;

      if (id) {
        this.schuelerData.findSchueler(id).subscribe(foundSchueler => {
          if (!foundSchueler) {
            console.log('WIESO?')
          } else {
            this.schueler = foundSchueler;
            this.wochenberichtFormGroup = this.getWochenberichtFormGroup(foundSchueler);
          }
        });
      }
    });

    this.wochenberichtFormGroup = this.getWochenberichtFormGroup();
  }

  getWochenberichtFormGroup(schueler?: StudentData): FormGroup {
    return new FormGroup({
      'datum': new FormControl(),
      'vorname': new FormControl(schueler?.vorname),
      'nachname': new FormControl(schueler?.nachname),
      'eintrag': new FormControl(schueler?.geburtsdatum)
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  constructor(private schuelerData: SchuelerDataService,
              private userService: UserService,) { }

  onSubmit() {
    const wochenbericht = {
      datum: this.wochenberichtFormGroup.controls.datum.value,
      nachname: this.wochenberichtFormGroup.controls.nachname.value,
      vorname: this.wochenberichtFormGroup.controls.vorname.value,
      eintrag: this.wochenberichtFormGroup.controls.eintrag.value
    };
    // this.WochenberichtFormGroup.addWochenbercht(wochenbericht).subscribe(data => {
    //   console.log('data: ', data)
    // });
  }

}
