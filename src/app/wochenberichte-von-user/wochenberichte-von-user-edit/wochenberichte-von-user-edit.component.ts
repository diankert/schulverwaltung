import {Component, OnInit} from '@angular/core';
import {Wochenbericht, WochenberichtVorlageService} from '../../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common'

@Component({
  selector: 'app-wochenberichte-von-user-edit',
  templateUrl: './wochenberichte-von-user-edit.component.html',
  styleUrls: ['./wochenberichte-von-user-edit.component.css']
})
export class WochenberichteVonUserEditComponent implements OnInit {
  wochenbericht: Wochenbericht;

  constructor(private activatedRoute: ActivatedRoute,
              private location: Location,
              private wochenberichtVorlageService: WochenberichtVorlageService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(route => {
      this.wochenberichtVorlageService.getWochenberichtMitId(route.id).subscribe(wochenbericht => {
        this.wochenbericht = wochenbericht;
      });
    })
  }

  onCancel(): void {
    this.location.back()
  }

  onSave(): void {
    this.location.back()
  }
}
