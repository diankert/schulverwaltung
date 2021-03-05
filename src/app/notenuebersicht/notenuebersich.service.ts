import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


export interface NotenUebersicht {
  id: string,
  klasur: []
}

@Injectable({
  providedIn: 'root'
})
export class NotenuebersichService {

  constructor(private http: HttpClient) {
  }

  getNotenuebersicht(pruefungId: string): Observable<NotenUebersicht> {
    // return this.http.get<NotenUebersicht>('api/pruefung/get&?id=' + pruefungId);
    return this.http.get<NotenUebersicht>('api/notenuebersicht/' + pruefungId);
  }
}
