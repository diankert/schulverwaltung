import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Klausur} from './notenuebersicht.component';


// export interface PruefungUebersicht {
//   id: string;
//   klasur: Klasur[];
// }


@Injectable({
  providedIn: 'root'
})
export class NotenuebersichService {
  constructor(private http: HttpClient) {
  }

  getNotenuebersicht(pruefungId: string): Observable<Klausur> {
    // return this.http.get<PruefungUebersicht>('api/pruefung/list');
    return this.http.get<Klausur>('api/pruefung/get?id=' + pruefungId);
    // return this.http.get<NotenUebersicht>('api/notenuebersicht/' + pruefungId);
  }
}
