import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {StudentData} from '../services/schueler-data.service';

@Injectable({
  providedIn: 'root'
})
export class WochenberichtService {
  baseURL: string = "/api/wochenbericht/list";

  constructor(private http: HttpClient) {
  }

  getAlleWochenberichte() : Observable<StudentData[]> {
      return this.http.get<StudentData[]>(this.baseURL);
    }
}
