import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {AuthGuard} from './auth/auth.guard';
import {MainComponent} from './main/main.component';
import {KursuebersichtComponent} from './kursuebersicht/kursuebersicht.component';
import {PostfachComponent} from './postfach/postfach.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'kursuebersicht',
    component: KursuebersichtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'postfach',
    component: PostfachComponent,
    canActivate: [AuthGuard]
  },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
