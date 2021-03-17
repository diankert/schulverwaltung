import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {Inhalt, Tag, Wochenbericht} from '../wochenbericht-vorlage.service';


@Injectable({
  providedIn: 'root'
})
export class InhaltVonTagAnzeigenService{
  inhaltZumAnzeigen = new BehaviorSubject<Inhalt[]>(null);
  inhaltTAG = new BehaviorSubject<Tag>(null);
  tag: Tag;
  inhalt: Inhalt;
}
