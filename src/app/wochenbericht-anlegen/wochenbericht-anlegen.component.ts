import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {
  Inhalt,
  Tag,
  Wochenbericht,
  WochenberichtVorlageService
} from '../wochenbericht-vorlage/wochenbericht-vorlage.service';



@Component({
  selector: 'app-wochenbericht-anlegen',
  templateUrl: './wochenbericht-anlegen.component.html',
  styleUrls: ['./wochenbericht-anlegen.component.css']
})
export class WochenberichtAnlegenComponent implements OnInit {
  wochenberichtAnlegenFormGroup: FormGroup;
  wochenberichtTagAnlegenFormGroup: FormGroup
  wochenberichtInhaltAnlegenFormGroup: FormGroup
  disabled: false;
  erstellterWochenbericht: Wochenbericht;
  erstellterTag: Tag;
  erstellterInhalt: Inhalt;
  step = 0;

  constructor(private wochenberichtService: WochenberichtVorlageService) { }

  ngOnInit(): void {
    this.wochenberichtAnlegenFormGroup = new FormGroup({
      "id": new FormControl('1')
    });

    this.wochenberichtTagAnlegenFormGroup = new FormGroup({
      "datum": new FormControl('2021-11-11'),
      "thema": new FormControl('SQL')
    });

    this.wochenberichtInhaltAnlegenFormGroup = new FormGroup({
      // "zeilennummer": new FormControl('0'),
      "inhalt": new FormControl('Einführung in SQL, Select,Where'),
    });
  }

  wochenberichtAnlegen() {

    const neuerWochenbericht = {
      id: this.wochenberichtAnlegenFormGroup.controls.id.value
    };
    console.log(neuerWochenbericht)
    this.wochenberichtService.addWochenbericht().subscribe(item =>{
     this.erstellterWochenbericht = item;
      console.log('ITEM',item.id)
      console.log('ITEM',this.erstellterWochenbericht)
    });
  }


  wochenberichtTag() {
    const neuenTagAnlegen: Tag = {
      datum: this.wochenberichtTagAnlegenFormGroup.controls.datum.value,
      thema: this.wochenberichtTagAnlegenFormGroup.controls.thema.value,
      wb_id: this.erstellterWochenbericht.id

    };
    console.log(neuenTagAnlegen)
    this.wochenberichtService.addTag(neuenTagAnlegen).subscribe(item =>{
      this.erstellterTag = item;
      console.log('ITEM',item.id)
      console.log('ITEM',this.erstellterTag)
    });
  }

  wochenberichtInhalt() {
    const neuenInhalt = {
      zeilennummer: "0",
      inhalt: this.wochenberichtInhaltAnlegenFormGroup.controls.inhalt.value,
      wb_tag_id: this.erstellterTag.id
    };
    console.log(neuenInhalt)
    this.wochenberichtService.addInhalt(neuenInhalt).subscribe(item =>{
      this.erstellterInhalt = item;
      console.log('ITEM',item.id)
      console.log('ITEM',this.erstellterInhalt)
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

}
