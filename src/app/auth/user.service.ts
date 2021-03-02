import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface LoginData {
  id: string;
  username: string;
  status: string;
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  id: string;
  // Id als BehaviourSubject<boolean>

  constructor(private http: HttpClient,
              private router: Router) { }

  findUser(name: string): Observable<LoginData[]> {
    console.log('NAME: ', name)
    return this.http.get<LoginData[]>('api/loginData?username='+name);
  }

  logout(): void {
    this.id = null;
    this.router.navigate(['/', 'login'])
  }

}
