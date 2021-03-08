import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentData} from '../schueler-data.service';

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

  // addWochenbericht(wochenbericht: Wochenbericht): Observable<StudentData> {
//
//     return this.http.post<Wochenbericht>(this.baseURL + 'wochenbericht',
//       wochenbericht)
//   }
}
