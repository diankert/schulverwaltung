import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl, FormGroup} from '@angular/forms';
import {CalendarConfig, DayC} from 'material-calendar';
import {TeilnehmerDataService, TeilnehmerData} from '../services/teilnehmer-data.service';
import {Kurs} from '../kursplan/kursplan.component';
import {UserService} from '../auth/user.service';
import {WochenberichtService} from './wochenbericht.service';

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
  schueler: TeilnehmerData;
  id: string;


  ngOnInit(): void {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;

      if (id) {
        this.schuelerData.findTeilnehmer(id).subscribe(foundSchueler => {
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

  getWochenberichtFormGroup(schueler?: TeilnehmerData): FormGroup {
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
  constructor(private schuelerData: TeilnehmerDataService,
              private userService: UserService,
              private wochenberichtService: WochenberichtService) { }

  onSubmit() {
    const wochenbericht = {
      datum: this.wochenberichtFormGroup.controls.datum.value,
      nachname: this.wochenberichtFormGroup.controls.nachname.value,
      vorname: this.wochenberichtFormGroup.controls.vorname.value,
      eintrag: this.wochenberichtFormGroup.controls.eintrag.value
    };
    // this.wochenberichtService.addWochenbericht(wochenbericht).subscribe();
  }

}
