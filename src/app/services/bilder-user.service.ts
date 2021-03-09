import { Injectable } from '@angular/core';
import {UserService} from '../auth/user.service';
import {StudentData} from './schueler-data.service';
import {HttpClient} from '@angular/common/http';

export interface Bild {
  id: string;
  creation_date?: string;
  last_modification_date?: string;
  deleted?: string;
  deletion_date?: string;
  name: string;
  dateinname: string;
  teilnehmer_id?: string;
  teilnehmer?: StudentData[];
};
@Injectable({
  providedIn: 'root'
})
export class BilderUserService{

  constructor(private http: HttpClient) { }

  findBilder(id: string) {
    return this.http.get<Bild>('api/bilder/get/?id='+ id);
  }
}
