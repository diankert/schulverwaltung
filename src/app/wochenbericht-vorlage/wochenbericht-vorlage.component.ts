import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

export interface WochenberichtEintrag {
  datum: Date;
  thema: string;
  eintrag: string;
}

@Component({
  selector: 'app-wochenbericht-vorlage',
  templateUrl: './wochenbericht-vorlage.component.html',
  styleUrls: ['./wochenbericht-vorlage.component.css']
})
export class WochenberichtVorlageComponent implements OnInit {
  wochenberichtAnlegenFormGroup: FormGroup;
  disabled: false;
  bisherigeEintraege: WochenberichtEintrag[] = [];

  constructor() { }

  ngOnInit(): void {
    this.wochenberichtAnlegenFormGroup = new FormGroup({
      "datum": new FormControl(new Date('2021-02-08')),
      "thema": new FormControl('OOP'),
      "eintrag": new FormControl('Einführung in OOP, Installation von Netbeans')
    });
  }

  onSubmit() {
    const neuerWochenberichtEintrag = {
      datum: this.wochenberichtAnlegenFormGroup.controls.datum.value,
      thema: this.wochenberichtAnlegenFormGroup.controls.thema.value,
      eintrag: this.wochenberichtAnlegenFormGroup.controls.eintrag.value
    };
    console.log('eintrag: ', neuerWochenberichtEintrag)
    this.bisherigeEintraege.push(neuerWochenberichtEintrag)
    // this.teilnehmerDataService.addWochenbericht(neuerWochenberichtEintrag).subscribe();
  }

  onSpeichern() {
    console.log('ICH SPEICHERE!!!!')
    console.log(this.bisherigeEintraege)
    // Service benutzen im den Wochenbericht ins Backend zu schicken
  }
}
