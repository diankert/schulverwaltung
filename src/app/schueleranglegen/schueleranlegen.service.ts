import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {StudentData} from '../schueler-data.service';
import {Observable} from 'rxjs';

@Injectable({providedIn:'root'})

export class SchueleranlegenService {
  baseURL: string = "http://localhost:3000/";
  constructor(private http: HttpClient) { }

  getSchuelerData(): Observable<StudentData[]> {
    console.log('getSchuelerData '+this.baseURL + ' students')
    return this.http.get<StudentData[]>(this.baseURL + 'students')
  }

  addschueler(schueler:StudentData): Observable<StudentData> {
    // const head = new HttpHeaders()
    //   .append('Content-Type', 'application/json')
    //   .append('Access-Control-Allow-Headers', 'Content-Type')
    //   .append('Access-Control-Allow-Methods', 'POST')
    //   .append('Access-Control-Allow-Origin', '*');
    const headers = { 'content-type': 'application/json'};
    console.log(headers)
    return this.http.post<StudentData>(this.baseURL + 'students',
      schueler,{'headers':headers})
  }

}
