import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {AuthGuard} from './auth/auth.guard';
import {MainComponent} from './main/main.component';
import {KursuebersichtComponent} from './kursuebersicht/kursuebersicht.component';
import {PostfachComponent} from './postfach/postfach.component';
import {ShowUserComponent} from './show-user/show-user.component';
import {AdminansichtComponent} from './adminansicht/adminansicht.component';
import {HelloComponent} from './hello/hello.component';
import {NotenuebersichtComponent} from './notenuebersicht/notenuebersicht.component';
import {WochenberichtComponent} from './wochenbericht/wochenbericht.component';
import {SchueleranglegenComponent} from './schueleranglegen/schueleranglegen.component';

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
    path: 'notenuebersicht',
    component: NotenuebersichtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'postfach',
    component: PostfachComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'showUser',
    component: ShowUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'hallo',
    component: HelloComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'wochenbericht',
    component: WochenberichtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'schueleranlegen',
    component: SchueleranglegenComponent,
    canActivate: [AuthGuard]
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
