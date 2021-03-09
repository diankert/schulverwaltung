import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Kurs} from './kursplan.component';
import {HttpClient} from '@angular/common/http';

// export interface Kursuebersicht {
//   id: string;
//   kurse: Kurs[];
// }

@Injectable({
  providedIn: 'root'
})
export class KursplanService {

  constructor(private http: HttpClient) { }

  getKursuebersicht(kursId: string): Observable<Kurs[]> {
    return this.http.get<Kurs[]>('/api/module/list');
  }
}
