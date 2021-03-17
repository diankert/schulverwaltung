import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Inhalt, Tag, Wochenbericht} from '../wochenbericht-vorlage.service';

export interface InhaltsInfo {
  inhalt: Inhalt[],
  isNewTag?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class InhaltVonTagAnzeigenService{
  inhaltZumAnzeigen = new BehaviorSubject<InhaltsInfo>(null);
  inhaltTAG = new BehaviorSubject<Tag>(null);
  tag: Tag;
  inhalt: Inhalt;
}
