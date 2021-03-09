import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StudentData} from '../services/schueler-data.service';
import {Observable} from 'rxjs';

@Injectable({providedIn:'root'})

export class SchueleranlegenService {
  baseURL: string = "/api/teilnehmer/create";
  constructor(private http: HttpClient) { }

  // getSchuelerData(): Observable<StudentData[]> {
  //   console.log('getSchuelerData '+this.baseURL + 'teilnehmer')
  //   return this.http.get<StudentData[]>(this.baseURL + 'teilnehmer')
  // }

  addschueler(teilnehm:StudentData): Observable<StudentData> {
    console.log('Teilnehmer: ' , teilnehm)
    return this.http.post<StudentData>(this.baseURL, teilnehm)
  }

}
