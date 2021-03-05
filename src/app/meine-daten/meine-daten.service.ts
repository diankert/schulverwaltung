import { Injectable } from '@angular/core';
import {StudentData} from '../schueler-data.service';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MeineDatenService {
  baseURL: string = "/api/teilnehmer/update";
  constructor(private http: HttpClient) { }

  updateSchueler(teilnehmUP:StudentData): Observable<StudentData> {
    console.log('Teilnehmer: ' , teilnehmUP)
    return this.http.put<StudentData>(this.baseURL, teilnehmUP)
  }

}
