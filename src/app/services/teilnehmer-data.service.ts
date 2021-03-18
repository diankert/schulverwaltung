import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pruefung} from '../pruefungsuebersicht/pruefungsuebersicht.service';
import {Observable} from 'rxjs';
import {Wochenbericht} from '../wochenberichte-von-user/wochenbericht-vorlage.service';

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
  wochenberichte?: Wochenbericht[];
};

export interface DozData {
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
};

export interface VerwaltungsData {
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




  findVerwaltungs(id: string) {
    return this.http.get<VerwaltungsData>('api/verwaltungsmitarbeiter/get/?id='+ id+'&showrelated=true');
  }

  addVerwaltungs(teilnehmer: VerwaltungsData): Observable<TeilnehmerData> {
    return this.http.post<VerwaltungsData>('/api/verwaltungsmitarbeiter/create', teilnehmer)
  }

  updateVerwaltungs(verwaltungsmitarbeiter: VerwaltungsData): Observable<VerwaltungsData> {
    return this.http.put<VerwaltungsData>('/api/verwaltungsmitarbeiter/update', verwaltungsmitarbeiter);
  }




  findDozent(id: string) {
    return this.http.get<DozData>('api/dozent/get/?id='+ id+'&showrelated=true');
  }

  addDozent(dozent: DozData): Observable<DozData> {
    return this.http.post<DozData>('/api/dozent/create', dozent)
  }

  updateDozent(dozent: DozData): Observable<DozData> {
    return this.http.put<DozData>('/api/dozent/update', dozent);
  }

}
