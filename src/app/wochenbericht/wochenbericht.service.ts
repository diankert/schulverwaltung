import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {TeilnehmerData} from '../services/teilnehmer-data.service';

@Injectable({
  providedIn: 'root'
})
export class WochenberichtService {
  baseURL: string = "/api/wochenbericht/list";

  constructor(private http: HttpClient) {
  }

  // getAlleWochenberichte() : Observable<TeilnehmerData[]> {
  //     return this.http.get<TeilnehmerData[]>(this.baseURL);
  //   }
  //
  //
  // addWochenbericht(teilnehmer: TeilnehmerData): Observable<TeilnehmerData> {
  //   return this.http.post<TeilnehmerData>(' /api/wochenberichts_tag/create', teilnehmer)
  // }
}
