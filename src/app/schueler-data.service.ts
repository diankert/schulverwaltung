import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {filter, tap} from 'rxjs/operators';

export interface StudentsLogin {
  id: number;
  username: string;
};

export interface StudentsJason {
  id: number;
  pic: string;
  firstname: string;
  lastname: string;
  };


@Injectable({
  providedIn: 'root'
})
export class SchuelerDataService {

  constructor(private http: HttpClient) { }

  findAllUsers(): Observable<StudentsLogin[]> {
    return this.http.get<StudentsLogin[]>('api/studentsLogin');
  }

  findUser(name: string): Observable<StudentsLogin[]> {
    return this.http.get<StudentsLogin[]>('api/studentsLogin?username='+name);
  }

  // getSchueler() {
  //   return this.http.get<StudentsJason[]>('api/students');
  // }

  getSchueler(): Observable<StudentsJason[]> {
    return this.http.get<StudentsJason[]>('api/students');
  }


  findSchueler(id: string) {
    return this.http.get<StudentsJason[]>('api/students?id='+id);
  }
}
