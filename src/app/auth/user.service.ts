import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface LoginData {
  id: string;
  username: string;
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id: string;

  constructor(private http: HttpClient,
              private router: Router) { }

  findUser(name: string): Observable<LoginData[]> {
    return this.http.get<LoginData[]>('api/loginData?username='+name);
  }

  logout(): void {
    this.id = null;
    this.router.navigate(['/', 'login'])
  }
}
