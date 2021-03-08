import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pruefung} from './notenuebersicht.component';
import {SchuelerDataService, StudentData} from '../schueler-data.service';
import {map} from 'rxjs/operators';


export interface PruefungUebersicht {
  id: string;
  pruefung: Pruefung[];
}


@Injectable({
  providedIn: 'root'
})
export class NotenuebersichService {
  constructor(private http: HttpClient) {
  }

  getNotenuebersicht(pruefungId: string): Observable<PruefungUebersicht> {
    return this.http.get<PruefungUebersicht>('api/pruefung/get?id=' + pruefungId);
  }

  getPruefungVonSchueler(id: string): Observable<Pruefung[]> {
    return this.http
      .get<StudentData>('api/teilnehmer/get/?id='+ id)
      .pipe(map(studentData => studentData.pruefungen))
  }


}
