import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentData} from '../schueler-data.service';
import {Pruefung} from '../notenuebersicht/notenuebersicht.component';
import {map} from 'rxjs/operators';
import {Wochenbericht} from './wochenbericht.component';

export interface WochenberichtUebersicht {
  id: string;
  wochenberichte: Wochenbericht[];
}

@Injectable({
  providedIn: 'root'
})
export class WochenberichtService {
  baseURL: string = "/api/wochenbericht/list";

  constructor(private http: HttpClient) {
  }

  getSchuelerData(): Observable<StudentData[]> {
    console.log('getSchuelerData '+this.baseURL + ' teilnehmer')
    return this.http.get<StudentData[]>(this.baseURL + 'teilnehmer')
  }

}
