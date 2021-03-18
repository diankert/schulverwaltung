import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
//import {Pruefung} from '../pruefungsuebersicht/pruefungsuebersicht.service';
import {Observable} from 'rxjs';
//import {Wochenbericht} from '../wochenbericht-vorlage/wochenbericht-vorlage.service';

export interface VerwaltungsmitarbeiterData {
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
  //pruefungen?: Pruefung[];
  //wochenberichte?: Wochenbericht[];
  type?: string;
};

@Injectable({
  providedIn: 'root'
})
export class VerwaltungsmitarbeiterDataService {

  constructor(private http: HttpClient) { }

  findVerwaltungsmitarbeiter(id: string) {
    return this.http.get<VerwaltungsmitarbeiterData>('api/verwaltungsmitarbeiter/get/?id='+ id+'&showrelated=true');
  }

  addVerwaltungsmitarbeiter(verwaltungsmitarbeiter: VerwaltungsmitarbeiterData): Observable<VerwaltungsmitarbeiterData> {
    return this.http.post<VerwaltungsmitarbeiterData>('/api/verwaltungsmitarbeiter/create', verwaltungsmitarbeiter)
  }

  updateVerwaltungsmitarbeiter(verwaltungsmitarbeiter: VerwaltungsmitarbeiterData): Observable<VerwaltungsmitarbeiterData> {
    return this.http.put<VerwaltungsmitarbeiterData>('/api/verwaltungsmitarbeiter/update', verwaltungsmitarbeiter);
  }

}
