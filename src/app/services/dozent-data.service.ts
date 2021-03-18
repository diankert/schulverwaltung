import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface DozentData {
  id?: string;
  pic?:string;
  vorname: string;
  nachname: string;
  geburtsdatum: string;
  strasse: string;
  hausnummer: string;
  email: string;
  telefon: string;
  plz: string;
  stadt: string;
};

@Injectable({
  providedIn: 'root'
})
export class DozentDataService {

  constructor(private http: HttpClient) { }

  findDozent(id: string) {
    return this.http.get<DozentData>('api/dozent/get/?id='+ id+'&showrelated=true');
  }

  addDozent(dozent: DozentData): Observable<DozentData> {
    return this.http.post<DozentData>('/api/dozent/create', dozent)
  }

  updateDozent(dozent: DozentData): Observable<DozentData> {
    return this.http.put<DozentData>('/api/dozent/update', dozent);
  }

}
