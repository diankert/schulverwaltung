import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface LoginData {
  id: string;
  username: string;
  status?: string;
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  idChanged = new BehaviorSubject<string>(null);

  constructor(private http: HttpClient,
              private router: Router) { }

  findUser(name: string): Observable<LoginData[]> {
    // return this.http.get<LoginData[]>('/api/loginData?username='+name);
    return of([{
      id: "1",
      username: "dp"
    }])
  }

  logout(): void {
    this.idChanged.next(null);
    this.router.navigate(['/', 'login'])
  }

}
