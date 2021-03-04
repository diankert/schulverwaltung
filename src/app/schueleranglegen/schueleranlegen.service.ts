import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StudentData} from '../schueler-data.service';
import {Observable} from 'rxjs';

@Injectable({providedIn:'root'})

export class SchueleranlegenService {
  baseURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getSchuelerData(): Observable<StudentData[]> {
    console.log('getSchuelerData '+this.baseURL + 'teilnehmer')
    return this.http.get<StudentData[]>(this.baseURL + 'teilnehmer')
  }

  addschueler(schueler:StudentData): Observable<StudentData> {

    return this.http.post<StudentData>(this.baseURL + 'teilnehmer',
      schueler)
  }

}
