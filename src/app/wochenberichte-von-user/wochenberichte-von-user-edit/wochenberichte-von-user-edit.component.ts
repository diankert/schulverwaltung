import {Component, OnInit} from '@angular/core';
import {
  Tag,
  Wochenbericht,
  WochenberichtVorlageService
} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-wochenberichte-von-user-edit',
  templateUrl: './wochenberichte-von-user-edit.component.html',
  styleUrls: ['./wochenberichte-von-user-edit.component.css']
})
export class WochenberichteVonUserEditComponent implements OnInit {
  wochenbericht: Wochenbericht;
  wochenberichtTagAnlegenFormGroup: FormGroup;
  step = 0;
  erstellterTag: Tag;
  erstellterWochenbericht: Wochenbericht;
  tage: Tag[] = [];
  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private wochenberichtVorlageService: WochenberichtVorlageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.wochenberichtVorlageService.getWochenberichtMitId(route.id).subscribe(wochenbericht => {
        this.wochenbericht = wochenbericht;
      });
      this.wochenberichtVorlageService.getTageFuerWochenbericht(route.id).subscribe(tage => {
        console.log('tage: ',tage);
      })
    })
    this.wochenberichtTagAnlegenFormGroup = new FormGroup({
      "datum": new FormControl('2021-11-11'),
      "thema": new FormControl('SQL')
    });
  }

  onCancel(): void {
    this.location.back()
  }

  onSave(): void {
    this.location.back()
  }

  setStep(index: number) {
    this.step = index;
  }


  wochenberichtTag() {
    const neuenTagAnlegen: Tag = {
      datum: this.wochenberichtTagAnlegenFormGroup.controls.datum.value,
      thema: this.wochenberichtTagAnlegenFormGroup.controls.thema.value,
      wb_id: this.erstellterWochenbericht.id

    };
    console.log(neuenTagAnlegen)
    this.wochenberichtVorlageService.addTag(neuenTagAnlegen).subscribe(item =>{
      this.erstellterTag = item;
      console.log('ITEM',item.id)
      console.log('ITEM',this.erstellterTag)
    });
  }
}
