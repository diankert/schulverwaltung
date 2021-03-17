import {Component, Input, OnInit} from '@angular/core';
import {Wochenbericht} from '../wochenbericht-vorlage.service';
import {WochenberichteVonUserService} from '../wochenberichte-von-user.service';
import {WochenberichteVonUserCreateComponent} from '../wochenberichte-von-user-create/wochenberichte-von-user-create.component';

@Component({
  selector: 'app-wochenberichte-von-user-detail',
  templateUrl: './wochenberichte-von-user-detail.component.html',
  styleUrls: ['./wochenberichte-von-user-detail.component.css']
})
export class WochenberichteVonUserDetailComponent implements OnInit {
  @Input() wochenbericht: Wochenbericht;
  selected = false;
  wochenberichte: Wochenbericht[] = [];

  constructor(private wochenberichteVonUserService: WochenberichteVonUserService) {
  }

  ngOnInit(): void {
    this.wochenberichteVonUserService.selectionChanged.subscribe(newSelection => {
      this.selected = newSelection?.id === this.wochenbericht.id;
    })
  }

  onItemSelect(): void {
    this.wochenberichteVonUserService.setSelection(this.selected ? null : this.wochenbericht);
  }


}
