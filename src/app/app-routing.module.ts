import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginPageComponent} from './auth/login-page/login-page.component';
import {AuthGuard} from './auth/auth.guard';
import {KursplanComponent} from './kursplan/kursplan.component';
import {PostfachComponent} from './postfach/postfach.component';
import {StartSeiteComponent} from './startseite/start-seite.component';
import {PruefungsuebersichtComponent} from './pruefungsuebersicht/pruefungsuebersicht.component';
import {WochenberichtComponent} from './wochenbericht/wochenbericht.component';
import {TeilnehmerAnlegenComponent} from './teilnehmer-anlegen/teilnehmer-anlegen.component';
import {WochenberichtVorlageComponent} from './wochenbericht-vorlage/wochenbericht-vorlage.component';
import {DozentenanlegenComponent} from './dozentenanlegen/dozentenanlegen.component';
import {WochenberichteVonUserComponent} from './wochenberichte-von-user/wochenberichte-von-user.component';
import {AdminbereichComponent} from './adminbereich/adminbereich.component';
import {WochenberichteVonUserCreateComponent} from './wochenberichte-von-user/wochenberichte-von-user-create/wochenberichte-von-user-create.component';
import {WochenberichteVonUserEditComponent} from './wochenberichte-von-user/wochenberichte-von-user-edit/wochenberichte-von-user-edit.component';

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
    path: 'teilnehmeranlegen',
    component: TeilnehmerAnlegenComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'wochenberichtvorlage',
    component: WochenberichtVorlageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'dozentenanlegen',
    component: DozentenanlegenComponent,
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
