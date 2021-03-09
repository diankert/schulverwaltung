import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Pruefung} from './notenuebersicht/notenuebersicht.component';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

export interface StudentData {
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
export class SchuelerDataService {

  constructor(private http: HttpClient) { }

  findSchueler(id: string) {
    return this.http.get<StudentData>('api/teilnehmer/get/?id='+ id);
  }

}
