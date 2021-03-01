import { Injectable } from '@angular/core';
import {Mail} from './postfach.component';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

export interface PostfachUebersicht {
  id: string,
  mail: Mail[]
}
@Injectable({
  providedIn: 'root'
})
export class PostfachService {

  constructor(private http: HttpClient) { }

  getPostfachuebersicht(userId: string): Observable<PostfachUebersicht> {
    return this.http.get<PostfachUebersicht>('api/postfachuebersicht/'+userId);
  }

}
