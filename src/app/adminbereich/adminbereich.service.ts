import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Dozent} from "./adminbereich.component";
import {Teilnehmer} from "./adminbereich.component";
import {Verwaltung} from "./adminbereich.component";
import {TeilnehmerData} from "../services/teilnehmer-data.service";


@Injectable({
  providedIn: 'root'
})
export class adminbereichService {

  constructor(private http: HttpClient) { }

  getDozent(): Observable<Dozent[]> {
    return this.http.get<Dozent[]>('/api/dozent/list');
  }
  getTeilnehmer(): Observable<Teilnehmer[]> {
    return this.http.get<Teilnehmer[]>('/api/teilnehmer/list');
  }

  getVerwaltung(): Observable<Verwaltung[]> {
    return this.http.get<Verwaltung[]>('/api/verwaltungsmitarbeiter/list');
  }
}
