import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pruefung} from '../pruefungsuebersicht/pruefungsuebersicht.service';
import {Observable} from 'rxjs';

export interface TeilnehmerData {
  id?: string;
  pic?:string;
  vorname: string;
  nachname: string;
  geburtsdatum: string;
  strasse: string;
  hausnummer: string;
  email: string;
  telefon: string;
  plz: string;
  stadt: string;
  pruefungen?: Pruefung[];
};

@Injectable({
  providedIn: 'root'
})
export class TeilnehmerDataService {

  constructor(private http: HttpClient) { }

  findTeilnehmer(id: string) {
    return this.http.get<TeilnehmerData>('api/teilnehmer/get/?id='+ id+'&showrelated=true');
  }

  addTeilnehmer(teilnehmer: TeilnehmerData): Observable<TeilnehmerData> {
    return this.http.post<TeilnehmerData>('/api/teilnehmer/create', teilnehmer)
  }

  updateTeilnehmer(teilnehmer: TeilnehmerData): Observable<TeilnehmerData> {
    return this.http.put<TeilnehmerData>('/api/teilnehmer/update', teilnehmer);
  }

}
