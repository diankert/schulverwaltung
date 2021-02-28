import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {StudentsLogin} from '../schueler-data.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id: string;

  constructor(private http: HttpClient,
              private router: Router) { }

  findUser(name: string): Observable<StudentsLogin[]> {
    return this.http.get<StudentsLogin[]>('api/studentsLogin?username='+name);
  }

  logout(): void {
    this.id = null;
    this.router.navigate(['/', 'login'])
  }
}
