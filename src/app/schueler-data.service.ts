import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface StudentData {
  id?: string;
  pic?: string;
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
export class SchuelerDataService {

  constructor(private http: HttpClient) { }

  findSchueler(id: string) {
    console.log('FINDE SCHÜLER', id)
    return this.http.get<StudentData>('api/teilnehmer/get/?id='+ id);
  }
}
