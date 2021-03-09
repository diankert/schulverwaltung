import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeilnehmerData} from '../services/teilnehmer-data.service';
import {map} from 'rxjs/operators';

export interface Pruefung {
  id?: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  bezeichnung: string;
  thema: string;
  max_punkte: string;
  datum: string;
}

@Injectable({
  providedIn: 'root'
})
export class PruefungsuebersichtService {

  constructor(private http: HttpClient) {
  }
  getPruefungVonSchueler(id: string): Observable<Pruefung[]> {
    return this.http
      .get<TeilnehmerData>('api/teilnehmer/get/?id='+ id +'&showrelated=true')
      .pipe(map(studentData => studentData.pruefungen))
  }

}
