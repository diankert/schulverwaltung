import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl, FormGroup} from '@angular/forms';
import {CalendarConfig, DayC} from 'material-calendar';

@Component({
  selector: 'app-wochenbericht',
  templateUrl: './wochenbericht.component.html',
  styleUrls: ['./wochenbericht.component.css']
})
export class WochenberichtComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  step = 0;
  WochenberichtFormGroup: FormGroup;
  panelOpenState = false;

  ngOnInit(): void {
    this.WochenberichtFormGroup = new FormGroup({
      "datum": new FormControl(new Date()),
      "name": new FormControl('Meiser'),
      "kurs": new FormControl('FI13'),
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
  constructor() { }

  onSubmit() {
    const wochenbericht = {
      datum: this.WochenberichtFormGroup.controls.datum.value,
      name: this.WochenberichtFormGroup.controls.name.value,
      kurs: this.WochenberichtFormGroup.controls.kurs.value,
      eintrag: this.WochenberichtFormGroup.controls.eintrag.value
    };
    // this.WochenberichtFormGroup.addWochenbercht(wochenbericht).subscribe(data => {
    //   console.log('data: ', data)
    // });
  }

}
