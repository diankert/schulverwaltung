import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {AuthGuard} from './auth/auth.guard';
import {KursplanComponent} from './kursplan/kursplan.component';
import {PostfachComponent} from './postfach/postfach.component';
import {StartSeiteComponent} from './startseite/start-seite.component';
import {NotenuebersichtComponent} from './notenuebersicht/notenuebersicht.component';
import {WochenberichtComponent} from './wochenbericht/wochenbericht.component';
import {SchueleranlegenComponent} from './schueleranlegen/schueleranlegen.component';

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
    path: 'kursplan',
    component: KursplanComponent,
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
    path: 'start',
    component: StartSeiteComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'wochenbericht',
    component: WochenberichtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'schueleranlegen',
    component: SchueleranlegenComponent,
    canActivate: [AuthGuard]
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
