import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-wochenberichte-von-user-create',
  templateUrl: './wochenberichte-von-user-create.component.html',
  styleUrls: ['./wochenberichte-von-user-create.component.css']
})
export class WochenberichteVonUserCreateComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.location.back()
  }

  onSave(): void {
    this.location.back()
  }

}
