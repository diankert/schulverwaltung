import {Component, OnInit} from '@angular/core';
import {
  Inhalt,
  Tag,
  Wochenbericht,
  WochenberichtVorlageService
} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {ActivatedRoute} from '@angular/router';
import {formatDate, Location} from '@angular/common'
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
  wbID: string;
  tage: Tag[] = [];

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private wochenberichtVorlageService: WochenberichtVorlageService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.wochenberichtVorlageService.getWochenberichtMitId(route.id).subscribe(wochenbericht => {
        this.wochenbericht = wochenbericht;
      });
      this.wochenberichtVorlageService.getTageFuerWochenbericht(route.id).subscribe(tage => {
        this.tage = tage
        this.wbID = route.id
      })
    })
    this.wochenberichtTagAnlegenFormGroup = new FormGroup({
      'datum': new FormControl(),
      'thema': new FormControl('SQL')
    });
  }

  onCancel(): void {
    this.location.back()
  }

  onSave() {
    const rawDate: Date = this.wochenberichtTagAnlegenFormGroup.controls.datum.value;
    const isoDate: string = formatDate(rawDate, 'YYYY-MM-dd', 'de')
    const neuenTagAnlegen: Tag = {
      datum: isoDate,
      thema: this.wochenberichtTagAnlegenFormGroup.controls.thema.value,
      wb_id: this.wbID
    };
    // console.log('neuenTaganlagen: ',neuenTagAnlegen)

      this.wochenberichtVorlageService.addTag(neuenTagAnlegen).subscribe(item => {
        this.erstellterTag = item;
        this.tage.push({...item})
      });
  }

  onDelete(tag: Tag) {
    this.wochenberichtVorlageService.deleteTag(tag.id).subscribe(() =>{
      const newArray: Tag[] = [];
      for (const alterTag of this.tage) {
        if (alterTag.id != tag.id) {
          newArray.push({...alterTag});
        }
      }
      this.tage = [...newArray];
    });
    // console.log('tag to delete: ', tag)
  }
}
