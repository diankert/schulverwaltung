import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserService} from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  id: string;

  constructor(private userService: UserService,
              private router: Router) {
    this.userService.idChanged.subscribe(id => {
      this.id = id ? id : null;
    })
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | boolean | UrlTree {
    if (!this.id) {
      this.userService.idChanged.next("1");
      return true;
      // return this.router.createUrlTree(['/login']);
    } else {
      return true;
    }
  }

}
