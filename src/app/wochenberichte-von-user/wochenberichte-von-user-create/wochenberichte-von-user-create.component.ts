import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {Wochenbericht, WochenberichtVorlageService} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';

@Component({
  selector: 'app-wochenberichte-von-user-create',
  templateUrl: './wochenberichte-von-user-create.component.html',
  styleUrls: ['./wochenberichte-von-user-create.component.css']
})
export class WochenberichteVonUserCreateComponent implements OnInit {
  wochenberichtTagAnlegenFormGroup: FormGroup
  erstellterWochenbericht: Wochenbericht;
  constructor(private location: Location,
              private wochenberichtService: WochenberichtVorlageService) { }

  ngOnInit(): void {
    this.wochenberichtTagAnlegenFormGroup = new FormGroup({
      "id": new FormControl('1')
    });
  }

  onCancel(): void {
    this.location.back()
  }

  onSave(): void {
    this.location.back()
  }

  wochenberichtAnlegen() {

    const neuerWochenbericht = {
      id: this.wochenberichtTagAnlegenFormGroup.controls.id.value
    };
    console.log(neuerWochenbericht)
    this.wochenberichtService.addWochenbericht().subscribe(item =>{
      this.erstellterWochenbericht = item;
      console.log('ITEM',item.id)
      console.log('ITEM',this.erstellterWochenbericht)
    });
  }
}
