import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

export interface LoginData {
  id: string;
  username?: string;
  status?: string;
  type?: string
};

@Injectable({
  providedIn: 'root'
})
export class UserService {
  idChanged = new BehaviorSubject<string>(null)
  type: string

  constructor(private http: HttpClient, private router: Router) {
  }

  findUser(username: string, password: string): Observable<LoginData> {
    // return this.http.get<LoginData[]>('/api/loginData?username='+name);

    return this.http.post<LoginData>(
      '/api/useraccounts/login',
      '{"benutzername": "' +
      username +
      '"' +
      ',"passwort":"' +
      password +
      '" }',
    )

    //return of([{
    //  teilnehmer_id: "1",
    //  username: "dp"
    //}])
  }

  logout(): void {
    this.idChanged.next(null)
    this.router.navigate(['/', 'login'])
  }

}
