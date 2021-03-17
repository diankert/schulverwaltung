import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormControl, FormGroup} from '@angular/forms';
import {Wochenbericht, WochenberichtVorlageService
} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';

@Component({
  selector: 'app-wochenberichte-von-user-create',
  templateUrl: './wochenberichte-von-user-create.component.html',
  styleUrls: ['./wochenberichte-von-user-create.component.css']
})
export class WochenberichteVonUserCreateComponent implements OnInit {
  wochenberichtTagAnlegenFormGroup: FormGroup
  erstellterWochenbericht: Wochenbericht;
  wochenbericht: Wochenbericht[] = [];
  constructor(private location: Location,
              private wochenberichtVorlageService: WochenberichtVorlageService) { }

  ngOnInit(): void {
    this.wochenberichtTagAnlegenFormGroup = new FormGroup({
      "id": new FormControl(),
      "start": new FormControl(),
      "end": new FormControl()
    });
  }

  onCancel(): void {
    this.location.back()
  }

  onSave() {

    const neuerWochenbericht = {
      id: this.wochenberichtTagAnlegenFormGroup.controls.id.value
    };
    console.log(neuerWochenbericht)
    this.wochenberichtVorlageService.addWochenbericht().subscribe(item =>{
      this.erstellterWochenbericht = item;
      console.log('ITEM',item.id)
      console.log('ITEM',this.erstellterWochenbericht)
    });
    this.location.back()
  }
  //
  // onDelete(wochenbericht: Wochenbericht) {
  //   this.wochenberichtVorlageService.deleteWochenbericht(wochenbericht.id).subscribe(() =>{
  //     const newArray: Wochenbericht[] = [];
  //     for (const alterWochenbericht of this.wochenbericht) {
  //       if (alterWochenbericht.id != wochenbericht.id) {
  //         newArray.push({...alterWochenbericht});
  //       }
  //     }
  //     this.wochenbericht = [...newArray];
  //   });
  //   console.log('tag to delete: ', wochenbericht)
  // }
}
