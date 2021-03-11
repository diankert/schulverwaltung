import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Kurs} from './kursplan.component';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KursplanService {

  constructor(private http: HttpClient) { }

  getKursplan(): Observable<Kurs[]> {
    return this.http.get<Kurs[]>('/api/module/list');
  }

  getEinKursplan(): Observable<Kurs[]>{
    return this.http.get<Kurs[]>('/api/module/get/?id=1');
  }
}
