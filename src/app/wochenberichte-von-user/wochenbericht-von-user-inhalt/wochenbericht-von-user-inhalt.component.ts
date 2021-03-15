import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Inhalt, Tag, WochenberichtVorlageService} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-wochenbericht-von-user-inhalt',
  templateUrl: './wochenbericht-von-user-inhalt.component.html',
  styleUrls: ['./wochenbericht-von-user-inhalt.component.css']
})
export class WochenberichtVonUserInhaltComponent implements OnInit {
  wochenberichtInhaltAnlegenFormGroup: FormGroup
  erstellterInhalt: Inhalt;
  tage: Tag[] = [];
  wb_tagID: string;
  step = 0;
  erstellterTag: Tag;

  constructor(private wochenberichtVorlageService: WochenberichtVorlageService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {

      this.wochenberichtVorlageService.getTageFuerWochenbericht(route.id).subscribe(tage => {
        console.log('tage: ', tage);
        this.tage = tage
        this.wb_tagID = route.id
        console.log('this wb_tagID: ', this.wb_tagID)
      })
    })
    this.wochenberichtInhaltAnlegenFormGroup = new FormGroup({
      // "zeilennummer": new FormControl('0'),
      'inhalt': new FormControl('Einführung in SQL, Select,Where'),
    });
  }

  onCancel(): void {
    this.location.back()
  }

  onSave() {
    const neuenInhalt = {
      zeilennummer: '0',
      inhalt: this.wochenberichtInhaltAnlegenFormGroup.controls.inhalt.value,
      wb_tag_id: this.wb_tagID
    };
    console.log(neuenInhalt)
    this.wochenberichtVorlageService.addInhalt(neuenInhalt).subscribe(item => {
      this.erstellterInhalt = item;
      console.log('ITEM', item.id)
      console.log('ITEM', this.erstellterInhalt)
    });
  }

  setStep(index: number) {
    this.step = index;
  }
}
