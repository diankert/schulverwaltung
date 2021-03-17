import {Component, Injectable, Input, OnInit, Output} from '@angular/core';
import {
  Inhalt,
  Tag,
  Wochenbericht,
  WochenberichtVorlageService
} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {ActivatedRoute} from '@angular/router';
import {formatDate, Location} from '@angular/common'
import {FormControl, FormGroup} from '@angular/forms';
import {MatDialog} from '@angular/material/dialog';
import {InhaltVonTagAnzeigenComponent} from '../inhalt-von-tag-anzeigen/inhalt-von-tag-anzeigen.component';
import {InhaltVonTagAnzeigenService} from '../inhalt-von-tag-anzeigen/inhalt-von-tag-anzeigen.service';

@Injectable()

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
  tagID:string;
  zumInhalt: Inhalt;
  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private wochenberichtVorlageService: WochenberichtVorlageService,
              public  dialog: MatDialog,
              private inhaltService: InhaltVonTagAnzeigenService) {
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
      'datum': new FormControl(new Date() ),
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

    this.wochenberichtVorlageService.addTag(neuenTagAnlegen).subscribe(item => {
      this.erstellterTag = item;
      this.tage.push({...item})
    });
  }

  onDelete(tag: Tag) {
    this.wochenberichtVorlageService.deleteTag(tag.id).subscribe(() => {
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

  openDialog(tag: Tag) {
    console.log('tag clicked: ', tag);
    this.wochenberichtVorlageService.getInhaltFuerTag(tag.id).subscribe(inhalt => {
      this.tagID = tag.id;
      this.inhaltService.tag = tag;
      console.log('THIS TAG ID : ', this.tagID)
      this.inhaltService.inhaltZumAnzeigen.next(inhalt);
      const dialogRef = this.dialog.open(InhaltVonTagAnzeigenComponent);
      dialogRef.afterClosed().subscribe(result => {
        console.log(`Dialog result: ${result}`);
      });
    })
  }

}
