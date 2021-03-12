import { Injectable } from '@angular/core';
import {Wochenbericht} from '../wochenbericht-vorlage/wochenbericht-vorlage.service';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WochenberichteVonUserService {
  selection: Wochenbericht;
  selectionChanged = new BehaviorSubject<Wochenbericht>(null);

  constructor() { }

  setSelection(wochenbericht: Wochenbericht) {
    this.selection = wochenbericht;
    this.selectionChanged.next(this.selection);
  }
}
