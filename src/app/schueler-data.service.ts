import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface StudentData {
  id?: string;
  pic?: string;
  firstname: string;
  lastname: string;
  strasse: string;
  hausnr: string;
  email: string;
  tele: string;
};


@Injectable({
  providedIn: 'root'
})
export class SchuelerDataService {

  constructor(private http: HttpClient) { }

  findSchueler(id: string) {
    console.log('FINDE SCHÜLER', id)
    return this.http.get<StudentData>('api/students/'+id);
  }
}
