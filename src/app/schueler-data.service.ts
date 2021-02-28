import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface StudentData {
  id: string;
  pic: string;
  firstname: string;
  lastname: string;
};


@Injectable({
  providedIn: 'root'
})
export class SchuelerDataService {

  constructor(private http: HttpClient) { }

  findSchueler(id: string) {
    return this.http.get<StudentData>('api/students/'+id);
  }
}
