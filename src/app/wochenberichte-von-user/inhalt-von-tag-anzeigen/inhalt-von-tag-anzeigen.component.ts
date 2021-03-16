import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {
  Inhalt,
  Tag,
  Wochenbericht,
  WochenberichtVorlageService
} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';
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
  wb_tagID: string;
  step = 0;
  test: string[];
  constructor(private inhaltService: InhaltVonTagAnzeigenService,
              private wochenberichtVorlageService: WochenberichtVorlageService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {}


  ngOnInit(): void {
    this.subscription = this.inhaltService.inhaltZumAnzeigen.subscribe(inhalt => {
      this.inhalt = inhalt;
      console.log('anzeige von inhalt: ', this.inhalt)
      // this.test = inhalt.map(inhalt => inhalt.wb_tag_id)
      // console.log('THIS TEST: ', this.test)
    });

    // this.activatedRoute.params.subscribe(route => {
    //   this.wochenberichtVorlageService.getTageFuerWochenbericht(route.id).subscribe(tage => {
    //      console.log('tage: ', tage);
    //     this.tage = tage
    //     this.wb_tagID = route.id
    //   })
    // })
    this.wochenberichtInhaltAnlegenFormGroup = new FormGroup({
      'inhalt': new FormControl('Einführung in SQL, Select,Where'),
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

}
