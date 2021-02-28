import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Kurs} from './kursuebersicht.component';
import {HttpClient} from '@angular/common/http';

export interface Kursuebersicht {
  id: string,
  kurse: Kurs[]
}

@Injectable({
  providedIn: 'root'
})
export class KursuebersichtService {

  constructor(private http: HttpClient) { }

  getKursuebersicht(userId: string): Observable<Kursuebersicht> {
    return this.http.get<Kursuebersicht>('api/kursuebersicht/'+userId);
  }
}
