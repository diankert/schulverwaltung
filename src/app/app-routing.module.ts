import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {AuthGuard} from './auth/auth.guard';
import {KursplanComponent} from './kursplan/kursplan.component';
import {StartSeiteComponent} from './startseite/start-seite.component';
import {PruefungsuebersichtComponent} from './pruefungsuebersicht/pruefungsuebersicht.component';
import {WochenberichteVonUserComponent} from './wochenberichte-von-user/wochenberichte-von-user.component';
import {AdminbereichComponent} from './adminbereich/adminbereich.component';
import {WochenberichteVonUserCreateComponent} from './wochenberichte-von-user/wochenberichte-von-user-create/wochenberichte-von-user-create.component';
import {WochenberichteVonUserEditComponent} from './wochenberichte-von-user/wochenberichte-von-user-edit/wochenberichte-von-user-edit.component';
import {NeuenUserAnlegenComponent} from './neuen-user-anlegen/neuen-user-anlegen.component';

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
    path: 'pruefungsuebersicht',
    component: PruefungsuebersichtComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'start',
    component: StartSeiteComponent,
    canActivate: [AuthGuard]
  },
 {
    path: 'neuenuseranlegen',
    component: NeuenUserAnlegenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allewochenberichtevomuser',
    component: WochenberichteVonUserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allewochenberichtevomuser/create',
    component: WochenberichteVonUserCreateComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'allewochenberichtevomuser/edit/:id',
    component: WochenberichteVonUserEditComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listenansicht',
    component: AdminbereichComponent,
    canActivate: [AuthGuard]
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
