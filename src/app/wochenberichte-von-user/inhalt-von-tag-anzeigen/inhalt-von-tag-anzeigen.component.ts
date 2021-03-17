import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  Inhalt,
  Tag,
  Wochenbericht,
  WochenberichtVorlageService
} from '../wochenbericht-vorlage.service';
import {InhaltVonTagAnzeigenService} from './inhalt-von-tag-anzeigen.service';
import {Subscription} from 'rxjs';
import {FormControl, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';
import {WochenberichteVonUserEditComponent} from '../wochenberichte-von-user-edit/wochenberichte-von-user-edit.component';

@Component({
  selector: 'app-inhalt-von-tag-anzeigen',
  templateUrl: './inhalt-von-tag-anzeigen.component.html',
  styleUrls: ['./inhalt-von-tag-anzeigen.component.css']
})
export class InhaltVonTagAnzeigenComponent implements OnInit, OnDestroy {
  inhalt: Inhalt[];
  subscription: Subscription;
  wochenberichtInhaltAnlegenFormGroup: FormGroup
  erstellterInhalt: Inhalt;
  tage: Tag[];
  wochenbericht: Wochenbericht[];
  test: string[];
  inhaltFurTextfeld: string;
  aktInhaltID: string;
  isCreate = false;

  constructor(private inhaltService: InhaltVonTagAnzeigenService,
              private wochenberichtVorlageService: WochenberichtVorlageService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {}


  ngOnInit(): void {
    this.subscription = this.inhaltService.inhaltZumAnzeigen.subscribe(inhaltsInfo => {
      this.inhalt = inhaltsInfo.inhalt;
      console.log('im dialog. ist das ein neuer tag? ', inhaltsInfo.isNewTag)
      this.isCreate = inhaltsInfo.isNewTag
      // console.log('anzeige von inhalt: ', this.inhalt)
      for(const inhaltZumEintragen of inhaltsInfo.inhalt){
        this.inhaltFurTextfeld = inhaltZumEintragen.inhalt
      }
    });

    this.wochenberichtInhaltAnlegenFormGroup = new FormGroup({
      'inhalt': new FormControl(this.inhaltFurTextfeld),
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onCancel(): void {
    this.location.back()
  }

  onSave() {
    console.log('THIS INHALTSERVICE TAG ',this.inhaltService.tag)
    const neuenInhalt = {
      zeilennummer: '0',
      inhalt: this.wochenberichtInhaltAnlegenFormGroup.controls.inhalt.value,
      wb_tag_id: this.inhaltService.tag.id
    };
    console.log(neuenInhalt)
    this.wochenberichtVorlageService.addInhalt(neuenInhalt).subscribe(item => {
      this.erstellterInhalt = item;
      console.log('ITEM', item.id)
      console.log('ITEM', this.erstellterInhalt)
    });
  }

  onChange() {
    this.wochenberichtVorlageService.getInhaltFuerTag(this.inhaltService.tag.id).subscribe(antwortInhaltFuerTag => {
      console.log('THIS INHALTSERVICE TAG ',this.inhaltService.tag)
      const changeInhalt = {
        id: antwortInhaltFuerTag[0].id,
        zeilennummer: '0',
        inhalt: this.wochenberichtInhaltAnlegenFormGroup.controls.inhalt.value,
        wb_tag_id: this.inhaltService.tag.id
      };

      this.wochenberichtVorlageService.updateInhalt(changeInhalt).subscribe(item => {
        this.erstellterInhalt = item;
        console.log('ITEM', item.id)
        console.log('ITEM', this.erstellterInhalt)
      });
    })

  }

}
