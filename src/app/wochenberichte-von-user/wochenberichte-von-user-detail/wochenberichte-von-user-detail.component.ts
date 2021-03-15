import {Component, Input, OnInit} from '@angular/core';
import {
  Tag,
  Wochenbericht,
  WochenberichtVorlageService
} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {WochenberichteVonUserService} from '../wochenberichte-von-user.service';

@Component({
  selector: 'app-wochenberichte-von-user-detail',
  templateUrl: './wochenberichte-von-user-detail.component.html',
  styleUrls: ['./wochenberichte-von-user-detail.component.css']
})
export class WochenberichteVonUserDetailComponent implements OnInit {
  @Input() wochenbericht: Wochenbericht;
  selected = false;
  wochenberichte: Wochenbericht[] = [];

  constructor(private wochenberichteVonUserService: WochenberichteVonUserService,
              private wochenberichtService:WochenberichtVorlageService) { }

  ngOnInit(): void {
    this.wochenberichteVonUserService.selectionChanged.subscribe(newSelection => {
      this.selected = newSelection?.id === this.wochenbericht.id;
    })
  }

  onItemSelect(): void {
    this.wochenberichteVonUserService.setSelection(this.selected ? null : this.wochenbericht);
  }

}
